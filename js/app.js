/* FrançaisExam — single-page app (vanilla JS, no build step).
   Works as a website, as an installable PWA and inside Capacitor (iOS/Android). */
(function () {
  'use strict';

  // ───────────────────────── Config ─────────────────────────
  // Supabase credentials are NOT stored in the code. Put them in js/config.js (git-ignored, see js/config.example.js).
  // Without that file the app runs in guest mode: everything works, only account sync is disabled.
  const CFG = window.FE_CONFIG || {};
  const SUPABASE_URL = CFG.supabaseUrl || '';
  const SUPABASE_ANON_KEY = CFG.supabaseAnonKey || '';
  const PUBLIC_URL = 'https://fatemeshahrokhshahi.github.io/French-Exam/';
  const LEVELS = ['A1', 'A2', 'B1', 'B2'];
  const STORE_KEY = 'fe.v2';
  const BOX_DAYS = [0, 1, 3, 7, 16, 35]; // Leitner intervals per box
  const PASS = 70;

  const C = window.FE_CONTENT;
  const I18N = window.FE_I18N;
  const isNative = !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());

  // ───────────────────────── Store ─────────────────────────
  const defaults = () => ({
    lang: (navigator.language || '').toLowerCase().startsWith('tr') ? 'tr' : 'en',
    theme: 'auto', rate: 0.9,
    progress: {},      // unitId -> {best, attempts, last}
    scores: [],        // exam results
    mistakes: {},      // qid -> {qid, count, given, last}
    srs: {},           // cardId -> {box, due}
    stats: { answered: 0, correct: 0 },
    streak: { last: null, count: 0 },
    lastUnit: null
  });
  let S = load();
  function load() {
    try { return Object.assign(defaults(), JSON.parse(localStorage.getItem(STORE_KEY)) || {}); }
    catch (e) { return defaults(); }
  }
  function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { /* storage unavailable */ } }

  // ───────────────────────── Helpers ─────────────────────────
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const t = (k) => (I18N[S.lang] && I18N[S.lang][k]) || I18N.en[k] || k;
  const L = (obj) => (obj && typeof obj === 'object') ? (obj[S.lang] || obj.en || '') : (obj || '');
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const today = () => new Date().toISOString().slice(0, 10);
  const addDays = (d, n) => { const x = new Date(d + 'T00:00:00'); x.setDate(x.getDate() + n); return x.toISOString().slice(0, 10); };
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  function h(html) { const d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstElementChild; }
  function toast(msg) { const el = $('#toast'); el.textContent = msg; el.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(() => el.classList.remove('show'), 2400); }

  function norm(s) {
    return String(s || '').toLowerCase().replace(/[’`´]/g, "'").replace(/[«»"“”.,!?;:/()\-–—]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  const stripAcc = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/œ/g, 'oe').replace(/æ/g, 'ae');

  function touchStreak() {
    const d = today();
    if (S.streak.last === d) return;
    S.streak.count = (S.streak.last === addDays(d, -1)) ? S.streak.count + 1 : 1;
    S.streak.last = d;
  }
  function streakNow() { return (S.streak.last === today() || S.streak.last === addDays(today(), -1)) ? S.streak.count : 0; }

  // ───────────────────────── Content index ─────────────────────────
  const QINDEX = {};   // qid -> {q, level, src, srcTitle}
  const UNIT = {};     // unitId -> {unit, level, idx}
  const EXAM = {};     // examId -> {exam, level}
  const CARDS = {};    // cardId -> {fr, tr, en, level, unitId}
  LEVELS.forEach(lv => {
    const c = C[lv]; if (!c) return;
    c.units.forEach((u, idx) => {
      UNIT[u.id] = { unit: u, level: lv, idx };
      u.quiz.forEach((q, i) => { q.id = u.id + '-' + i; QINDEX[q.id] = { q, level: lv, src: u.id, srcTitle: u.title }; });
      u.vocab.forEach((v, i) => { CARDS[u.id + '-v' + i] = { fr: v[0], tr: v[1], en: v[2], level: lv, unitId: u.id }; });
    });
    c.exams.forEach(ex => {
      EXAM[ex.id] = { exam: ex, level: lv };
      ex.sections.forEach(sec => (sec.items || []).forEach((q, i) => { q.id = ex.id + '-' + sec.key + '-' + i; QINDEX[q.id] = { q, level: lv, src: ex.id, srcTitle: ex.title }; }));
    });
  });

  function unitBest(id) { return (S.progress[id] && S.progress[id].best) || 0; }
  function levelStats(lv) {
    const units = C[lv].units; const done = units.filter(u => unitBest(u.id) >= PASS).length;
    return { done, total: units.length, pct: Math.round(done / units.length * 100) };
  }
  function dueCards(level) {
    const d = today();
    return Object.keys(S.srs).filter(id => CARDS[id] && (!level || CARDS[id].level === level) && S.srs[id].due <= d);
  }

  // ───────────────────────── Speech ─────────────────────────
  let frVoice = null;
  function pickVoice() {
    if (!('speechSynthesis' in window)) return;
    const vs = speechSynthesis.getVoices();
    frVoice = vs.find(v => v.lang === 'fr-FR' && /google|amélie|thomas|audrey|marie/i.test(v.name)) || vs.find(v => v.lang === 'fr-FR') || vs.find(v => /^fr/i.test(v.lang)) || null;
  }
  if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  async function speak(text, slow) {
    const rate = (slow ? 0.65 : 1) * (S.rate || 0.9);
    if (isNative && speak.tts === undefined) {
      const Cap = window.Capacitor;
      speak.tts = (Cap.Plugins && Cap.Plugins.TextToSpeech) || (Cap.registerPlugin ? Cap.registerPlugin('TextToSpeech') : null);
    }
    const tts = isNative && speak.tts;
    if (tts) {
      try { await tts.stop(); await tts.speak({ text, lang: 'fr-FR', rate, pitch: 1.0, volume: 1.0, category: 'playback' }); return true; }
      catch (e) { /* fall back to web speech */ }
    }
    if (!('speechSynthesis' in window)) { toast(t('set.noVoice')); return false; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'fr-FR'; u.rate = rate; if (frVoice) u.voice = frVoice;
    speechSynthesis.speak(u);
    return true;
  }
  const speakBtn = (text, extraCls) => `<button type="button" class="speak ${extraCls || ''}" data-say="${esc(text)}" aria-label="${esc(t('q.play'))}">🔊</button>`;
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-say]');
    if (b && !b.closest('.q-audio')) { e.preventDefault(); speak(b.dataset.say, b.dataset.slow === '1'); }
  });

  // ───────────────────────── Supabase (optional sync) ─────────────────────────
  let sb = null, user = null;
  function initSupabase() {
    try { if (SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase && window.supabase.createClient) sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY); }
    catch (e) { sb = null; }
  }
  async function refreshUser() {
    if (!sb) return;
    try {
      const { data } = await sb.auth.getSession();
      const s = data && data.session;
      user = s ? { id: s.user.id, email: s.user.email, name: (s.user.user_metadata && s.user.user_metadata.full_name) || s.user.email.split('@')[0] } : null;
      if (user) await pullRemote();
    } catch (e) { /* offline */ }
  }
  async function pullRemote() {
    if (!sb || !user) return;
    try {
      const [m, s] = await Promise.all([
        sb.from('mistakes').select('*').eq('user_id', user.id),
        sb.from('scores').select('*').eq('user_id', user.id).order('taken_at', { ascending: false })
      ]);
      (m.data || []).forEach(r => {
        if (!QINDEX[r.question_id]) return;
        const loc = S.mistakes[r.question_id];
        if (!loc || (r.count || 0) > loc.count) S.mistakes[r.question_id] = { qid: r.question_id, count: r.count || 1, given: r.your_answer, last: r.last_seen_at };
      });
      const have = new Set(S.scores.map(x => x.exam_id + '|' + x.taken_at));
      (s.data || []).forEach(r => { if (!have.has(r.exam_id + '|' + r.taken_at)) S.scores.push(r); });
      S.scores.sort((a, b) => String(b.taken_at).localeCompare(String(a.taken_at)));
      save();
    } catch (e) { /* ignore */ }
  }
  function pushMistake(qid) {
    if (!sb || !user) return;
    const m = S.mistakes[qid]; const info = QINDEX[qid]; if (!m || !info) return;
    const q = info.q;
    sb.from('mistakes').upsert({
      user_id: user.id, question_id: qid, question_text: qText(q), your_answer: m.given, correct_answer: expected(q),
      category: q.t, exam_id: info.src, tip_tr: (q.x && q.x.tr) || '', tip_en: (q.x && q.x.en) || '',
      count: m.count, last_seen_at: m.last
    }, { onConflict: 'user_id,question_id' }).then(() => {}, () => {});
  }
  function deleteRemoteMistake(qid) {
    if (!sb || !user) return;
    sb.from('mistakes').delete().eq('user_id', user.id).eq('question_id', qid).then(() => {}, () => {});
  }
  function pushScore(entry) {
    if (!sb || !user) return;
    sb.from('scores').insert(Object.assign({ user_id: user.id }, entry)).then(() => {}, () => {});
  }

  // ───────────────────────── Theme & language ─────────────────────────
  function applyTheme() {
    const root = document.documentElement;
    if (S.theme === 'auto') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', S.theme);
    const dark = S.theme === 'dark' || (S.theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    $('meta[name=theme-color]').setAttribute('content', dark ? '#12121f' : '#1a1a2e');
  }
  function applyLang() {
    document.documentElement.lang = S.lang;
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$('[data-lang]').forEach(b => b.classList.toggle('on', b.dataset.lang === S.lang));
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-lang]');
    if (b) { S.lang = b.dataset.lang; save(); applyLang(); route(); }
  });

  // ───────────────────────── Router ─────────────────────────
  let cleanup = null;
  function route() {
    if (cleanup) { try { cleanup(); } catch (e) {} cleanup = null; }
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    // Supabase auth redirects put tokens in the hash (#access_token=…); treat those as the home screen.
    const raw = /access_token=|error_description=|type=recovery/.test(location.hash) ? '' : location.hash;
    const parts = (raw.replace(/^#\/?/, '') || '').split('/').filter(Boolean);
    const view = $('#view');
    const [p0, p1, p2] = parts;
    let nav = 'home';
    document.body.classList.remove('in-exam');
    if (!p0) renderHome(view);
    else if (p0 === 'level' && C[p1]) renderLevel(view, p1);
    else if (p0 === 'unit' && UNIT[p1]) renderUnit(view, p1, p2 || 'lesson');
    else if (p0 === 'exam' && EXAM[p1]) renderExam(view, p1);
    else if (p0 === 'cards') { nav = 'cards'; renderCards(view, p1); }
    else if (p0 === 'mistakes') { nav = 'mistakes'; p1 === 'practice' ? renderMistakePractice(view) : renderMistakes(view); }
    else if (p0 === 'progress') { nav = 'progress'; renderProgress(view); }
    else if (p0 === 'settings') { nav = 'settings'; renderSettings(view); }
    else view.innerHTML = `<section class="wrap"><p>${t('misc.notFound')}</p><a class="btn" href="#/">${t('nav.home')}</a></section>`;
    $$('[data-nav]').forEach(a => a.classList.toggle('on', a.dataset.nav === nav));
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);

  // ───────────────────────── Views: Home ─────────────────────────
  let deferredInstall = null;
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredInstall = e; const el = $('#install-card'); if (el) el.hidden = false; });

  function levelCard(lv) {
    const c = C[lv], st = levelStats(lv);
    return `<a class="level-card" href="#/level/${lv}" style="--lv:${c.color}">
      <div class="lc-top"><span class="lc-badge">${lv}</span><span class="lc-book">${esc(c.book)}</span></div>
      <p class="lc-intro">${esc(L(c.intro))}</p>
      <div class="bar"><i style="width:${st.pct}%"></i></div>
      <div class="lc-foot"><span>${st.done}/${st.total} ${t('level.done')}</span><span class="lc-go">→</span></div>
    </a>`;
  }

  function renderHome(view) {
    const name = user ? user.name : t('home.guest');
    const last = S.lastUnit && UNIT[S.lastUnit];
    const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.navigator.standalone;
    const standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    view.innerHTML = `
    <section class="hero">
      <div class="wrap">
        <p class="eyebrow">${t('home.hello')}, ${esc(name)} 👋</p>
        <h1>Le français, <em>de A1 à B2</em>.</h1>
        <p class="hero-sub">${t('home.sub')}</p>
        <div class="stats">
          <div class="stat"><b>${streakNow()}</b><span>🔥 ${t('home.streak')}</span></div>
          <a class="stat" href="#/cards"><b>${dueCards().length}</b><span>🃏 ${t('home.due')}</span></a>
          <a class="stat" href="#/mistakes"><b>${Object.keys(S.mistakes).length}</b><span>🎯 ${t('home.mist')}</span></a>
          <a class="stat" href="#/progress"><b>${S.scores.length}</b><span>📝 ${t('home.exams')}</span></a>
        </div>
      </div>
    </section>
    <section class="wrap">
      ${last ? `<a class="continue" href="#/unit/${last.unit.id}"><span class="cont-lv" style="--lv:${C[last.level].color}">${last.level}</span><span><small>${t('home.continue')}</small><b>${esc(last.unit.title)}</b></span><span class="lc-go">→</span></a>` : ''}
      <div class="book-group">
        <div class="book-head"><h2>Le Nouveau Taxi!</h2><p>${t('home.taxi')}</p></div>
        <div class="level-grid">${levelCard('A1')}${levelCard('A2')}</div>
      </div>
      <div class="book-group">
        <div class="book-head"><h2>Édito</h2><p>${t('home.edito')}</p></div>
        <div class="level-grid">${levelCard('B1')}${levelCard('B2')}</div>
      </div>
      ${!isNative && !standalone ? `<div class="card install" id="install-card" ${deferredInstall || isIos ? '' : 'hidden'}>
        <div><b>📱 ${t('home.install')}</b>${isIos ? `<p class="muted">${t('home.installIos')}</p>` : ''}</div>
        ${isIos ? '' : `<button class="btn" id="btn-install">${t('home.installBtn')}</button>`}
      </div>` : ''}
    </section>`;
    const bi = $('#btn-install');
    if (bi) bi.onclick = async () => { if (!deferredInstall) return; deferredInstall.prompt(); await deferredInstall.userChoice; deferredInstall = null; $('#install-card').hidden = true; };
  }

  // ───────────────────────── Views: Level ─────────────────────────
  function renderLevel(view, lv) {
    const c = C[lv], st = levelStats(lv);
    const units = c.units.map((u, i) => {
      const best = unitBest(u.id), started = !!S.progress[u.id];
      return `<a class="unit-row" href="#/unit/${u.id}">
        <span class="ur-num ${best >= PASS ? 'ok' : ''}">${best >= PASS ? '✓' : i + 1}</span>
        <span class="ur-main"><b>${esc(u.title)}</b><small>${esc(L(u.theme))}</small></span>
        <span class="ur-score">${started ? best + '%' : ''}</span>
      </a>`;
    }).join('');
    const exams = c.exams.map(ex => {
      const best = S.scores.filter(s => s.exam_id === ex.id).reduce((m, s) => Math.max(m, s.percentage || 0), -1);
      return `<a class="exam-card" href="#/exam/${ex.id}"><span>📝</span><span><b>${esc(ex.title)}</b><small>${ex.minutes} ${t('level.minutes')} · ${best >= 0 ? t('level.best') + ': ' + best + '%' : t('level.notStarted')}</small></span><span class="lc-go">→</span></a>`;
    }).join('');
    view.innerHTML = `
    <section class="page-head" style="--lv:${c.color}">
      <div class="wrap">
        <a class="back" href="#/">${t('misc.back')}</a>
        <div class="ph-row"><span class="lc-badge big">${lv}</span><div><p class="eyebrow">${t('level.book')} · ${esc(c.book)}</p><h1>${esc(L(c.intro))}</h1></div></div>
        <div class="bar light"><i style="width:${st.pct}%"></i></div>
        <p class="muted-l">${st.done}/${st.total} ${t('level.done')}</p>
      </div>
    </section>
    <section class="wrap">
      <h2 class="sec-title">${t('level.units')}</h2>
      <div class="unit-list">${units}</div>
      <h2 class="sec-title">${t('level.exam')}</h2>
      ${exams}
    </section>`;
  }

  // ───────────────────────── Views: Unit ─────────────────────────
  function renderUnit(view, id, tab) {
    const { unit: u, level: lv, idx } = UNIT[id];
    const c = C[lv];
    S.lastUnit = id; save();
    const next = c.units[idx + 1];
    view.innerHTML = `
    <section class="page-head slim" style="--lv:${c.color}">
      <div class="wrap">
        <a class="back" href="#/level/${lv}">${t('misc.back')} · ${lv}</a>
        <p class="eyebrow">${lv} · ${esc(c.book)} · ${idx + 1}</p>
        <h1>${esc(u.title)}</h1>
        <p class="muted-l">${esc(L(u.theme))}</p>
      </div>
    </section>
    <div class="tabs wrap" role="tablist">
      ${['lesson', 'vocab', 'practice'].map(k => `<a role="tab" class="${tab === k ? 'on' : ''}" aria-selected="${tab === k}" href="#/unit/${id}/${k}">${t('unit.' + k)}</a>`).join('')}
    </div>
    <section class="wrap" id="unit-body"></section>`;
    const body = $('#unit-body');
    if (tab === 'vocab') {
      // Add this unit's words to the flashcard deck.
      u.vocab.forEach((v, i) => { const cid = id + '-v' + i; if (!S.srs[cid]) S.srs[cid] = { box: 0, due: today() }; });
      save();
      body.innerHTML = `
        <div class="row-between"><span class="muted">${u.vocab.length} ${t('cards.total')}</span><button class="btn ghost sm" id="listen-all">🔊 ${t('unit.listenAll')}</button></div>
        <ul class="vocab">${u.vocab.map(v => `<li>${speakBtn(v[0])}<span class="v-fr">${esc(v[0])}</span><span class="v-tr">${esc(S.lang === 'tr' ? v[1] : v[2])}</span></li>`).join('')}</ul>
        <a class="btn block" href="#/unit/${id}/practice">${t('unit.toPractice')}</a>`;
      $('#listen-all').onclick = () => speak(u.vocab.map(v => v[0]).join('. '));
    } else if (tab === 'practice') {
      runQuiz(body, u.quiz, {
        title: u.title,
        onDone: (score, total) => {
          const pct = Math.round(score / total * 100);
          const p = S.progress[id] || { best: 0, attempts: 0 };
          p.best = Math.max(p.best, pct); p.attempts++; p.last = new Date().toISOString();
          S.progress[id] = p; save();
          return `<a class="btn ghost" href="#/unit/${id}/lesson">${t('q.back')}</a>${next ? `<a class="btn" href="#/unit/${next.id}">${t('unit.next')}</a>` : `<a class="btn" href="#/level/${lv}">${lv}</a>`}`;
        },
        retryHref: `#/unit/${id}/practice`
      });
    } else {
      const g = u.grammar;
      body.innerHTML = `
        <article class="card lesson">
          <h2>${esc(g.title)}</h2>
          <div class="lesson-body">${L(g)}</div>
          <h3>${t('unit.examples')}</h3>
          <ul class="examples">${g.examples.map(e => `<li>${speakBtn(e)}<span>${esc(e)}</span></li>`).join('')}</ul>
        </article>
        <div class="row-gap"><a class="btn ghost" href="#/unit/${id}/vocab">${t('unit.vocab')}</a><a class="btn" href="#/unit/${id}/practice">${t('unit.toPractice')}</a></div>`;
    }
  }

  // ───────────────────────── Question component ─────────────────────────
  function qText(q) {
    if (q.t === 'listen' || q.t === 'dict') return q.say;
    if (q.t === 'order') return q.w;
    return q.q;
  }
  function expected(q) {
    if (q.t === 'mcq' || q.t === 'listen') return q.o[q.a];
    if (q.t === 'fill') return q.a[0];
    if (q.t === 'order') return q.w;
    if (q.t === 'dict') return q.say;
    return '';
  }
  const PROMPT = { mcq: 'q.mcq', listen: 'q.listen', dict: 'q.dict', order: 'q.order', fill: 'q.fill' };

  /** Builds a question element. opts.maxPlays limits audio plays (exam mode). */
  function makeQuestion(q, opts) {
    opts = opts || {};
    const el = document.createElement('div');
    el.className = 'q q-' + q.t;
    let state = { sel: null, text: '', order: [] };
    let plays = opts.maxPlays || Infinity;
    const audio = (q.t === 'listen' || q.t === 'dict') ? `<div class="q-audio">
        <button type="button" class="play" data-act="play">🔊 ${t('q.play')}</button>
        <button type="button" class="play ghost" data-act="slow">🐢 ${t('q.slow')}</button>
        ${opts.maxPlays ? `<span class="plays"><b>${plays}</b> ${t('q.plays')}</span>` : ''}
      </div>` : '';
    let inner = '';
    if (q.t === 'mcq' || q.t === 'listen') {
      const order = opts.keepOrder ? q.o.map((_, i) => i) : shuffle(q.o.map((_, i) => i));
      inner = `${q.t === 'mcq' ? `<p class="q-text">${esc(q.q)}</p>` : ''}<div class="opts">${order.map(i => `<button type="button" class="opt" data-i="${i}">${esc(q.o[i])}</button>`).join('')}</div>`;
    } else if (q.t === 'fill') {
      const parts = esc(q.q).split('___');
      inner = `<p class="q-text fill-text">${parts.map((p, i) => p + (i < parts.length - 1 ? `<input class="blank" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="${esc(t('q.fill'))}">` : '')).join('')}</p>${q.h ? `<p class="hint">${esc(q.h)}</p>` : ''}`;
    } else if (q.t === 'order') {
      const words = shuffle(q.w.split(' ').map((w, i) => ({ w, i })));
      inner = `<div class="order-answer" aria-live="polite"></div><div class="order-bank">${words.map(x => `<button type="button" class="chip" data-wi="${x.i}">${esc(x.w)}</button>`).join('')}</div>`;
    } else if (q.t === 'dict') {
      inner = `<textarea class="dict" rows="2" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(t('q.typeHere'))}"></textarea>`;
    }
    el.innerHTML = `<p class="q-prompt">${t(PROMPT[q.t])}</p>${audio}${inner}<div class="q-feedback" hidden></div>`;

    // Interactions
    el.addEventListener('click', e => {
      if (el.classList.contains('locked')) { const p = e.target.closest('[data-act]'); if (p) speak(q.say, p.dataset.act === 'slow'); return; }
      const opt = e.target.closest('.opt');
      if (opt) { $$('.opt', el).forEach(o => o.classList.remove('sel')); opt.classList.add('sel'); state.sel = +opt.dataset.i; opts.onChange && opts.onChange(); return; }
      const play = e.target.closest('[data-act]');
      if (play) {
        if (plays <= 0) return;
        if (opts.maxPlays) { plays--; const pl = $('.plays b', el); if (pl) pl.textContent = plays; if (plays <= 0) $$('[data-act]', el).forEach(b => b.disabled = true); }
        speak(q.say, play.dataset.act === 'slow'); return;
      }
      const chip = e.target.closest('.chip');
      if (chip) {
        const ans = $('.order-answer', el), bank = $('.order-bank', el);
        (chip.parentElement === bank ? ans : bank).appendChild(chip);
        state.order = $$('.chip', ans).map(c => c.textContent);
        opts.onChange && opts.onChange();
      }
    });
    el.addEventListener('input', () => opts.onChange && opts.onChange());
    el.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.matches('input') && opts.onEnter) { e.preventDefault(); opts.onEnter(); } });

    function given() {
      if (q.t === 'mcq' || q.t === 'listen') return state.sel == null ? '' : q.o[state.sel];
      if (q.t === 'fill') return $$('.blank', el).map(i => i.value.trim()).join(' ');
      if (q.t === 'order') return state.order.join(' ');
      if (q.t === 'dict') return $('.dict', el).value.trim();
      return '';
    }
    function hasAnswer() { return given().length > 0; }
    function check() {
      const g = given();
      let ok = false, accentOnly = false;
      if (q.t === 'mcq' || q.t === 'listen') ok = state.sel === q.a;
      else {
        const targets = q.t === 'fill' ? q.a : [q.t === 'order' ? q.w : q.say];
        ok = targets.some(a => norm(a) === norm(g));
        if (!ok && g && targets.some(a => stripAcc(norm(a)) === stripAcc(norm(g)))) { ok = true; accentOnly = true; }
      }
      return { ok, accentOnly, given: g || '—', expected: expected(q) };
    }
    function reveal(res) {
      el.classList.add('locked', res.ok ? 'is-ok' : 'is-bad');
      $$('input,textarea', el).forEach(i => i.readOnly = true);
      if (q.t === 'mcq' || q.t === 'listen') $$('.opt', el).forEach(o => { const i = +o.dataset.i; if (i === q.a) o.classList.add('right'); else if (i === state.sel) o.classList.add('wrong'); });
      const fb = $('.q-feedback', el);
      const tip = q.x ? `<p class="tip">💡 ${esc(L(q.x))}</p>` : '';
      const tr = (q.t === 'listen') ? `<p class="transcript">🎧 ${t('q.transcript')}: <i>${esc(q.say)}</i></p>` : '';
      fb.innerHTML = res.ok
        ? `<p class="fb-title ok">✓ ${t('q.correct')}</p>${res.accentOnly ? `<p>${t('q.accents')} <b>${esc(res.expected)}</b></p>` : ''}${tip}${tr}`
        : `<p class="fb-title bad">✗ ${t('q.wrong')}</p><p>${t('q.answer')}: <b>${esc(res.expected)}</b> ${q.t !== 'mcq' ? speakBtn(q.t === 'fill' ? q.q.replace('___', q.a[0]) : res.expected) : ''}</p>${tip}${tr}`;
      fb.hidden = false;
    }
    function focus() { const i = $('input,textarea', el); if (i && !matchMedia('(pointer:coarse)').matches) i.focus(); }
    return { el, check, reveal, hasAnswer, focus };
  }

  function recordAnswer(q, res) {
    S.stats.answered++; if (res.ok) S.stats.correct++;
    touchStreak();
    if (!res.ok) {
      const m = S.mistakes[q.id] || { qid: q.id, count: 0 };
      m.count++; m.given = res.given; m.last = new Date().toISOString();
      S.mistakes[q.id] = m; save(); pushMistake(q.id);
    } else if (S.mistakes[q.id] && recordAnswer.clearOnCorrect) {
      delete S.mistakes[q.id]; deleteRemoteMistake(q.id);
    }
    save();
  }

  /** One-question-at-a-time practice runner with instant feedback. */
  function runQuiz(root, questions, cfg) {
    let i = 0, score = 0, current = null, checked = false;
    const results = [];
    root.innerHTML = `<div class="quiz">
      <div class="quiz-top"><div class="bar"><i id="qbar"></i></div><span id="qcount"></span></div>
      <div id="qslot"></div>
      <div class="quiz-actions"><button class="btn" id="qbtn" disabled>${t('q.check')}</button></div>
    </div>`;
    const btn = $('#qbtn', root);
    function show() {
      checked = false;
      $('#qbar', root).style.width = (i / questions.length * 100) + '%';
      $('#qcount', root).textContent = (i + 1) + ' ' + t('q.of') + ' ' + questions.length;
      current = makeQuestion(questions[i], { onChange: () => { btn.disabled = !current.hasAnswer(); }, onEnter: () => !btn.disabled && btn.click() });
      const slot = $('#qslot', root); slot.innerHTML = ''; slot.appendChild(current.el);
      btn.textContent = t('q.check'); btn.disabled = true;
      if (questions[i].t === 'listen' || questions[i].t === 'dict') setTimeout(() => speak(questions[i].say), 350);
      current.focus();
    }
    btn.onclick = () => {
      if (!checked) {
        const res = current.check(); current.reveal(res); checked = true;
        if (res.ok) score++;
        results.push(res);
        recordAnswer(questions[i], res);
        btn.textContent = i < questions.length - 1 ? t('q.next') : t('q.finish');
        btn.disabled = false; btn.focus();
      } else if (i < questions.length - 1) { i++; show(); }
      else finish();
    };
    function finish() {
      const pct = Math.round(score / questions.length * 100);
      const extra = cfg.onDone ? cfg.onDone(score, questions.length) : '';
      const msg = pct >= 90 ? t('q.great') : pct >= PASS ? t('q.good') : t('q.more');
      root.innerHTML = `<div class="card result">
        <div class="ring" style="--p:${pct}"><span>${pct}%</span></div>
        <h2>${score} / ${questions.length}</h2>
        <p>${msg}</p>
        <div class="row-gap center"><a class="btn ghost" href="${cfg.retryHref}" id="qretry">${t('q.retry')}</a>${extra}</div>
      </div>`;
      $('#qretry', root).onclick = (e) => { if (location.hash === cfg.retryHref) { e.preventDefault(); route(); } };
    }
    if (!questions.length) { root.innerHTML = `<p class="muted">${t('mist.empty')}</p>`; return; }
    show();
  }

  // ───────────────────────── Views: Exam ─────────────────────────
  function renderExam(view, id) {
    const { exam: ex, level: lv } = EXAM[id];
    const c = C[lv];
    view.innerHTML = `
    <section class="page-head slim" style="--lv:${c.color}">
      <div class="wrap">
        <a class="back" href="#/level/${lv}">${t('misc.back')} · ${lv}</a>
        <h1>${esc(ex.title)}</h1>
        <p class="muted-l">${ex.minutes} ${t('level.minutes')} · ${ex.sections.map(s => esc(L(s.name))).join(' · ')}</p>
      </div>
    </section>
    <section class="wrap"><div class="card"><p>${t('ex.intro')}</p><button class="btn" id="ex-start">${t('ex.start')}</button></div></section>`;
    $('#ex-start').onclick = () => startExam(view, ex, lv);
  }

  function startExam(view, ex, lv) {
    document.body.classList.add('in-exam');
    const comps = [];  // {q, comp, sec}
    let left = ex.minutes * 60, timer = null, submitted = false;
    view.innerHTML = `
      <div class="exam-bar"><div class="wrap row-between">
        <button class="btn ghost sm" id="ex-exit">✕ ${t('ex.exit')}</button>
        <span class="timer" id="ex-timer" aria-label="${esc(t('ex.time'))}"></span>
        <button class="btn sm" id="ex-submit">${t('ex.submit')}</button>
      </div></div>
      <section class="wrap exam" id="ex-body"></section>`;
    const body = $('#ex-body');
    ex.sections.forEach((sec, si) => {
      const s = h(`<section class="ex-sec"><h2><span class="sec-num">${si + 1}</span> ${esc(L(sec.name))}</h2></section>`);
      if (sec.text) s.appendChild(h(`<div class="card reading"><p class="eyebrow">${t('ex.text')}</p>${sec.text.split('\n').map((p, k) => k === 0 ? `<h3>${esc(p)}</h3>` : `<p>${esc(p)}</p>`).join('')}</div>`));
      (sec.items || []).forEach((q, qi) => {
        const comp = makeQuestion(q, { maxPlays: 2, keepOrder: false });
        const wrap = h(`<div class="card ex-q"><span class="qn">${si + 1}.${qi + 1}</span></div>`);
        wrap.appendChild(comp.el); s.appendChild(wrap);
        comps.push({ q, comp, sec: sec.key });
      });
      if (sec.writing) {
        const w = sec.writing;
        const wEl = h(`<div class="card writing">
          <p class="q-text">${esc(L(w.prompt))}</p>
          <textarea id="ex-writing" rows="10" placeholder="${esc(t('q.typeHere'))}"></textarea>
          <p class="wc"><span id="wc">0</span> ${t('ex.words')} · ${t('ex.min')} ${w.minWords}</p>
          <details class="checklist"><summary>${t('ex.check')}</summary><ul>${w.checklist.map(x => `<li><label><input type="checkbox"> ${esc(x)}</label></li>`).join('')}</ul></details>
          <div id="ex-model" hidden><h3>${t('ex.model')}</h3><div class="model">${esc(w.model).replace(/\n/g, '<br>')}</div></div>
        </div>`);
        s.appendChild(wEl);
        setTimeout(() => {
          const ta = $('#ex-writing'); const key = 'fe.draft.' + ex.id;
          try { ta.value = localStorage.getItem(key) || ''; } catch (e) {}
          const upd = () => { const n = (ta.value.trim().match(/\S+/g) || []).length; $('#wc').textContent = n; $('#wc').parentElement.classList.toggle('ok', n >= w.minWords); try { localStorage.setItem(key, ta.value); } catch (e) {} };
          ta.addEventListener('input', upd); upd();
        });
      }
      body.appendChild(s);
    });
    function tick() {
      const m = Math.floor(left / 60), s = left % 60;
      const tEl = $('#ex-timer'); if (!tEl) return;
      tEl.textContent = '⏱ ' + m + ':' + String(s).padStart(2, '0');
      tEl.classList.toggle('warn', left <= 300);
      if (left <= 0) { toast(t('ex.timeUp')); submit(); return; }
      left--;
    }
    tick(); timer = setInterval(tick, 1000);
    cleanup = () => clearInterval(timer);
    $('#ex-exit').onclick = () => { if (submitted || confirm(t('ex.exitConfirm'))) { location.hash = '#/level/' + lv; } };
    $('#ex-submit').onclick = () => { if (confirm(t('ex.confirm'))) submit(); };

    function submit() {
      if (submitted) return; submitted = true; clearInterval(timer);
      const per = {}; let total = 0, max = 0;
      comps.forEach(({ q, comp, sec }) => {
        const res = comp.check(); comp.reveal(res);
        if (comp.hasAnswer()) recordAnswer(q, res); // blank answers score 0 but are not logged as mistakes
        per[sec] = per[sec] || { score: 0, max: 0 }; per[sec].max++; max++;
        if (res.ok) { per[sec].score++; total++; }
      });
      const pct = max ? Math.round(total / max * 100) : 0;
      const entry = { exam_id: ex.id, exam_title: ex.title, total_score: total, max_score: max, percentage: pct, section_scores: per, taken_at: new Date().toISOString(), level: lv };
      S.scores.unshift(entry); save();
      pushScore({ exam_id: entry.exam_id, exam_title: entry.exam_title, total_score: total, max_score: max, percentage: pct, section_scores: per, taken_at: entry.taken_at });
      const model = $('#ex-model'); if (model) model.hidden = false;
      const grade = pct >= 90 ? 'a' : pct >= 75 ? 'b' : pct >= 60 ? 'c' : pct >= 50 ? 'd' : 'e';
      const secName = k => { const s = ex.sections.find(x => x.key === k); return s ? L(s.name) : k; };
      const res = h(`<div class="card result">
        <p class="eyebrow">${t('ex.result')}</p>
        <div class="ring" style="--p:${pct}"><span>${pct}%</span></div>
        <h2>${t('grade.' + grade)}</h2>
        <p class="muted">${t('ex.auto')}: ${total} / ${max}</p>
        <ul class="sec-scores">${Object.keys(per).map(k => `<li><span>${esc(secName(k))}</span><b>${per[k].score}/${per[k].max}</b></li>`).join('')}</ul>
        <p class="muted small">${t('ex.writingNote')}</p>
        <div class="row-gap center"><a class="btn ghost" href="#/level/${lv}">${lv}</a><button class="btn" id="ex-again">${t('ex.again')}</button></div>
      </div>`);
      body.prepend(res);
      $('#ex-again').onclick = () => startExam(view, ex, lv);
      const sb2 = $('#ex-submit'); sb2.textContent = t('ex.review'); sb2.onclick = () => window.scrollTo({ top: res.offsetHeight + 100, behavior: 'smooth' });
      $('#ex-timer').textContent = pct + '%';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // ───────────────────────── Views: Flashcards ─────────────────────────
  function renderCards(view, level) {
    const lv = LEVELS.includes(level) ? level : null;
    const owned = Object.keys(S.srs).filter(id => CARDS[id] && (!lv || CARDS[id].level === lv));
    let queue = shuffle(dueCards(lv));
    const filters = `<div class="seg wide">${[null].concat(LEVELS).map(x => `<a class="${x === lv ? 'on' : ''}" href="#/cards${x ? '/' + x : ''}">${x || t('cards.all')}</a>`).join('')}</div>`;
    view.innerHTML = `<section class="wrap">
      <h1 class="title">${t('cards.title')}</h1><p class="muted">${t('cards.sub')}</p>
      ${filters}
      <p class="muted small" id="cards-meta"></p>
      <div id="card-zone"></div>
    </section>`;
    const zone = $('#card-zone');
    function meta() { $('#cards-meta').textContent = `${queue.length} ${t('cards.due')} · ${owned.length} ${t('cards.total')}`; }
    function next() {
      meta();
      if (!owned.length) { zone.innerHTML = `<div class="card empty">🃏<p>${t('cards.empty')}</p><a class="btn" href="#/level/A1">A1</a></div>`; return; }
      if (!queue.length) {
        zone.innerHTML = `<div class="card empty">🎉<p>${t('cards.done')}</p><button class="btn ghost" id="extra">${t('cards.extra')}</button></div>`;
        $('#extra').onclick = () => { queue = shuffle(owned).slice(0, 20); next(); };
        return;
      }
      const id = queue[0], card = CARDS[id], box = S.srs[id].box;
      zone.innerHTML = `<div class="flash" tabindex="0" role="button" aria-label="${esc(t('cards.flip'))}">
          <div class="flash-inner">
            <div class="face front"><span class="lc-badge sm" style="--lv:${C[card.level].color}">${card.level}</span><b>${esc(card.fr)}</b>${speakBtn(card.fr)}<small>${t('cards.flip')}</small></div>
            <div class="face back"><b>${esc(S.lang === 'tr' ? card.tr : card.en)}</b><small>${esc(card.fr)} · ${esc(UNIT[card.unitId].unit.title)}</small></div>
          </div>
        </div>
        <p class="muted small center">${t('cards.box')} ${box + 1}/${BOX_DAYS.length}</p>
        <div class="row-gap center"><button class="btn bad" id="c-no">✗ ${t('cards.dont')}</button><button class="btn good" id="c-yes">✓ ${t('cards.know')}</button></div>`;
      const fl = $('.flash', zone);
      const flip = (e) => { if (e && e.target.closest('[data-say]')) return; fl.classList.toggle('flipped'); };
      fl.onclick = flip; fl.onkeydown = e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); } };
      speak(card.fr);
      const grade = (ok) => {
        const s = S.srs[id];
        s.box = ok ? Math.min(s.box + 1, BOX_DAYS.length - 1) : 0;
        s.due = addDays(today(), ok ? BOX_DAYS[s.box] : 0);
        touchStreak(); save();
        queue.shift();
        if (!ok) queue.splice(Math.min(queue.length, 3), 0, id); // show again soon
        next();
      };
      $('#c-yes').onclick = () => grade(true);
      $('#c-no').onclick = () => grade(false);
    }
    next();
  }

  // ───────────────────────── Views: Mistakes ─────────────────────────
  function renderMistakes(view) {
    const list = Object.values(S.mistakes).filter(m => QINDEX[m.qid]).sort((a, b) => b.count - a.count || String(b.last).localeCompare(String(a.last)));
    const groups = {};
    list.forEach(m => { const lv = QINDEX[m.qid].level; (groups[lv] = groups[lv] || []).push(m); });
    view.innerHTML = `<section class="wrap">
      <h1 class="title">${t('mist.title')}</h1><p class="muted">${t('mist.sub')}</p>
      ${list.length ? `<a class="btn block" href="#/mistakes/practice">🎯 ${t('mist.practice')} (${Math.min(list.length, 15)})</a>` : `<div class="card empty">🎉<p>${t('mist.empty')}</p></div>`}
      ${LEVELS.filter(lv => groups[lv]).map(lv => `<h2 class="sec-title"><span class="lc-badge sm" style="--lv:${C[lv].color}">${lv}</span></h2>
        <ul class="mist-list">${groups[lv].map(m => { const info = QINDEX[m.qid], q = info.q; return `<li class="card">
          <div class="row-between"><small class="muted">${esc(info.srcTitle)}</small><span class="pill">${m.count} ${t('mist.times')}</span></div>
          <p class="mq">${esc(qText(q))}</p>
          <p class="small"><span class="bad-t">${t('mist.yours')}: ${esc(m.given)}</span><br><span class="ok-t">${t('mist.right')}: <b>${esc(expected(q))}</b></span></p>
          ${q.x ? `<p class="tip small">💡 ${esc(L(q.x))}</p>` : ''}
        </li>`; }).join('')}</ul>`).join('')}
    </section>`;
  }
  function renderMistakePractice(view) {
    const ids = Object.values(S.mistakes).filter(m => QINDEX[m.qid]).sort((a, b) => b.count - a.count).slice(0, 15).map(m => m.qid);
    view.innerHTML = `<section class="wrap"><a class="back dark" href="#/mistakes">${t('misc.back')}</a><h1 class="title">🎯 ${t('mist.practice')}</h1><div id="mp"></div></section>`;
    recordAnswer.clearOnCorrect = true;
    cleanup = () => { recordAnswer.clearOnCorrect = false; };
    runQuiz($('#mp'), shuffle(ids.map(id => QINDEX[id].q)), { retryHref: '#/mistakes/practice', onDone: () => `<a class="btn" href="#/mistakes">${t('nav.mistakes')}</a>` });
  }

  // ───────────────────────── Views: Progress ─────────────────────────
  function renderProgress(view) {
    const learned = Object.values(S.srs).filter(s => s.box >= 2).length;
    const acc = S.stats.answered ? Math.round(S.stats.correct / S.stats.answered * 100) : 0;
    view.innerHTML = `<section class="wrap">
      <h1 class="title">${t('prog.title')}</h1>
      <div class="stats light">
        <div class="stat"><b>${streakNow()}</b><span>🔥 ${t('home.streak')}</span></div>
        <div class="stat"><b>${learned}</b><span>📚 ${t('prog.words')}</span></div>
        <div class="stat"><b>${S.stats.answered}</b><span>✍️ ${t('prog.answered')}</span></div>
        <div class="stat"><b>${acc}%</b><span>🎯 ${t('prog.accuracy')}</span></div>
      </div>
      <div class="prog-levels">${LEVELS.map(lv => { const st = levelStats(lv); return `<a class="card prog-lv" href="#/level/${lv}" style="--lv:${C[lv].color}">
        <span class="lc-badge">${lv}</span><div class="grow"><div class="row-between"><b>${esc(C[lv].book)}</b><span>${st.pct}%</span></div><div class="bar"><i style="width:${st.pct}%"></i></div><small class="muted">${st.done}/${st.total} ${t('prog.units')}</small></div></a>`; }).join('')}</div>
      <h2 class="sec-title">${t('prog.history')}</h2>
      ${S.scores.length ? `<ul class="score-list">${S.scores.slice(0, 30).map(s => `<li class="card row-between"><span><b>${esc(s.exam_title)}</b><small class="muted">${new Date(s.taken_at).toLocaleString(S.lang === 'tr' ? 'tr-TR' : 'en-GB', { dateStyle: 'medium', timeStyle: 'short' })}</small></span><span class="pill ${s.percentage >= PASS ? 'ok' : ''}">${s.percentage}%</span></li>`).join('')}</ul>` : `<p class="muted">${t('prog.noScores')}</p>`}
    </section>`;
  }

  // ───────────────────────── Views: Settings / account ─────────────────────────
  function renderSettings(view) {
    const accountHtml = !sb ? `<p class="muted">${t('set.offline')}</p>` : user ? `
        <p>${t('set.loggedAs')} <b>${esc(user.name)}</b><br><small class="muted">${esc(user.email)}</small></p>
        <div class="row-gap"><button class="btn ghost" id="logout">${t('set.logout')}</button><button class="btn ghost bad-t" id="del-acc">${t('set.deleteAccount')}</button></div>
        <p class="muted small">${t('set.deleteNote')}</p>` : `
        <p class="muted">${t('set.guestNote')}</p>
        <div class="seg wide" role="tablist"><button class="on" data-auth="login">${t('set.login')}</button><button data-auth="register">${t('set.register')}</button></div>
        <form id="auth-form" class="form" autocomplete="on">
          <label class="reg-only" hidden>${t('set.name')}<input name="name" autocomplete="name"></label>
          <label>${t('set.email')}<input name="email" type="email" autocomplete="email" required></label>
          <label>${t('set.password')}<input name="password" type="password" autocomplete="current-password" minlength="8" required></label>
          <p class="form-msg" id="auth-msg" role="alert"></p>
          <button class="btn block" id="auth-submit">${t('set.login')}</button>
        </form>`;
    view.innerHTML = `<section class="wrap narrow">
      <h1 class="title">${t('set.title')}</h1>
      <div class="card"><h2>${t('set.account')}</h2>${accountHtml}</div>
      <div class="card settings">
        <div class="set-row"><span>${t('set.lang')}</span><div class="seg"><button data-lang="tr" class="${S.lang === 'tr' ? 'on' : ''}">Türkçe</button><button data-lang="en" class="${S.lang === 'en' ? 'on' : ''}">English</button></div></div>
        <div class="set-row"><span>${t('set.theme')}</span><div class="seg">${['auto', 'light', 'dark'].map(x => `<button data-theme-set="${x}" class="${S.theme === x ? 'on' : ''}">${t('set.' + x)}</button>`).join('')}</div></div>
        <div class="set-row"><span>${t('set.rate')} <b id="rate-v">${S.rate.toFixed(2)}</b></span><input type="range" id="rate" min="0.6" max="1.2" step="0.05" value="${S.rate}"></div>
        <div class="set-row"><span></span><button class="btn ghost sm" id="test-voice">🔊 ${t('set.test')}</button></div>
      </div>
      <div class="card"><h2>${t('set.about')}</h2><p class="small">${t('set.disclaimer')}</p>
        <button class="btn ghost sm bad-t" id="reset">${t('set.reset')}</button></div>
    </section>`;
    $$('[data-theme-set]').forEach(b => b.onclick = () => { S.theme = b.dataset.themeSet; save(); applyTheme(); renderSettings(view); });
    $('#rate').oninput = e => { S.rate = +e.target.value; $('#rate-v').textContent = S.rate.toFixed(2); save(); };
    $('#test-voice').onclick = () => speak('Bonjour ! Bienvenue sur FrançaisExam. Bon courage pour votre examen.');
    $('#reset').onclick = () => { if (confirm(t('set.resetConfirm'))) { const keep = { lang: S.lang, theme: S.theme, rate: S.rate }; S = Object.assign(defaults(), keep); save(); toast(t('misc.saved')); route(); } };
    if (!sb) return;
    if (user) {
      $('#logout').onclick = async () => { try { await sb.auth.signOut(); } catch (e) {} user = null; route(); };
      $('#del-acc').onclick = async () => {
        if (!confirm(t('set.deleteConfirm'))) return;
        const { error } = await sb.rpc('delete_user');
        if (error) { toast('❌ ' + error.message); return; }
        try { await sb.auth.signOut(); } catch (e) {}
        user = null; toast(t('set.deleted')); route();
      };
      return;
    }
    let mode = 'login';
    $$('[data-auth]').forEach(b => b.onclick = () => {
      mode = b.dataset.auth;
      $$('[data-auth]').forEach(x => x.classList.toggle('on', x === b));
      $('.reg-only').hidden = mode !== 'register';
      $('#auth-submit').textContent = t(mode === 'login' ? 'set.login' : 'set.register');
      $('input[name=password]').autocomplete = mode === 'login' ? 'current-password' : 'new-password';
    });
    $('#auth-form').onsubmit = async (e) => {
      e.preventDefault();
      const f = new FormData(e.target), msg = $('#auth-msg');
      const email = String(f.get('email') || '').trim(), pw = String(f.get('password') || ''), name = String(f.get('name') || '').trim();
      msg.className = 'form-msg';
      if (!email || !pw || (mode === 'register' && !name)) { msg.textContent = t('err.fill'); return; }
      if (pw.length < 8) { msg.textContent = t('err.pw'); return; }
      const btn = $('#auth-submit'); btn.disabled = true; msg.textContent = t('misc.loading');
      try {
        if (mode === 'login') {
          const { error } = await sb.auth.signInWithPassword({ email, password: pw });
          if (error) throw error;
        } else {
          const redirect = /^https?:/.test(location.protocol) && !isNative ? location.href.split('#')[0] : PUBLIC_URL;
          const { data, error } = await sb.auth.signUp({ email, password: pw, options: { data: { full_name: name }, emailRedirectTo: redirect } });
          if (error) throw error;
          if (!data.session) { msg.className = 'form-msg ok'; msg.textContent = t('set.checkEmail'); btn.disabled = false; return; }
        }
        await refreshUser();
        toast(t('set.sync')); route();
      } catch (err) { msg.textContent = '❌ ' + (err.message || err); btn.disabled = false; }
    };
  }

  // ───────────────────────── Boot ─────────────────────────
  function boot() {
    applyTheme(); applyLang();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
    initSupabase();
    route();
    // Only re-render screens that show account data, so an auth event never wipes a running quiz or exam.
    const softRoute = () => { const hs = location.hash; if (!hs || hs === '#/' || hs.startsWith('#/settings')) route(); };
    refreshUser().then(() => { if (user) softRoute(); });
    if (sb) sb.auth.onAuthStateChange((ev) => { if (ev === 'SIGNED_IN' || ev === 'SIGNED_OUT') refreshUser().then(softRoute); });
    if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol) && !isNative) {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    }
  }
  boot();
})();
