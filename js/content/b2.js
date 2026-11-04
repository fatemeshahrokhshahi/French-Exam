/* B2 — aligned with the progression of "Édito B2" (Didier).
   All texts and exercises are original; they follow the same CEFR B2 topics. */
window.FE_CONTENT = window.FE_CONTENT || {};
window.FE_CONTENT.B2 = {
  level: 'B2',
  book: 'Édito B2',
  color: '#c0392b',
  intro: {
    en: 'Argue with nuance, use advanced subjunctive and hypothesis, master concession, emphasis, nominalisation and formal register.',
    tr: 'İnce ayrımlarla tartışma, ileri düzey subjonctif ve varsayım, taviz, vurgu, adlaştırma ve resmî üslup.'
  },
  units: [
    {
      id: 'B2-1', title: 'Indicatif ou subjonctif ?',
      theme: { en: 'Choosing mood after verbs and conjunctions', tr: 'Fiil ve bağlaçlardan sonra kip seçimi' },
      grammar: {
        title: 'Indicatif vs subjonctif (niveau avancé)',
        en: '<p><b>Indicative</b> = certainty/fact: <i>il est certain que, il est évident que, je suis sûr que, il paraît que, espérer que</i>, <i>après que</i>, <i>pendant que</i>, <i>parce que</i>.</p><p><b>Subjunctive</b> = will, emotion, doubt, possibility, necessity: <i>il est possible que, il se peut que, je doute que, il semble que, avant que, jusqu’à ce que, à moins que (ne), de peur que (ne), à condition que, sans que, quoique, bien que</i>.</p><p>Opinion verbs (penser, croire, trouver) take the subjunctive only in the <b>negative or interrogative inversion</b>: <i>Penses-tu qu’il <b>vienne</b> ?</i></p><p><b>Subjonctif passé</b> (que + aie/sois + participle) for an action completed before: <i>Je suis contente que tu <b>aies réussi</b>.</i></p>',
        tr: '<p><b>Indicatif</b> = kesinlik/gerçek: <i>il est certain que, il est évident que, je suis sûr que, il paraît que, espérer que</i>, <i>après que</i>, <i>pendant que</i>.</p><p><b>Subjonctif</b> = istek, duygu, şüphe, olasılık, gereklilik: <i>il est possible que, il se peut que, je doute que, il semble que, avant que, jusqu’à ce que, à moins que (ne), de peur que (ne), à condition que, sans que, quoique, bien que</i>.</p><p>Görüş fiilleri (penser, croire, trouver) yalnızca <b>olumsuz veya devrik soru</b> hâlinde subjonctif alır: <i>Penses-tu qu’il <b>vienne</b> ?</i></p><p><b>Subjonctif passé</b> (que + aie/sois + ortaç) önce tamamlanmış eylem için: <i>Je suis contente que tu <b>aies réussi</b>.</i></p>',
        examples: ['Il est probable qu’il viendra, mais il est possible qu’il soit en retard.', 'Je resterai jusqu’à ce que tu reviennes.', 'Après qu’il est parti, nous avons rangé.']
      },
      vocab: [
        ['il se peut que', 'olabilir ki', 'it may be that'], ['à condition que', 'şartıyla', 'provided that'], ['à moins que', '…medikçe', 'unless'],
        ['de peur que', 'korkusuyla', 'for fear that'], ['jusqu’à ce que', '…ana kadar', 'until'], ['il paraît que', 'söylendiğine göre', 'apparently'],
        ['la certitude', 'kesinlik', 'certainty'], ['le doute', 'şüphe', 'doubt'], ['vraisemblable', 'muhtemel', 'likely'], ['nier', 'inkâr etmek', 'to deny']
      ],
      quiz: [
        { t: 'mcq', q: 'Il est évident qu’il ___ tort.', o: ['ait', 'a', 'avoir', 'aurait eu'], a: 1, x: { en: 'Certainty → indicative.', tr: 'Kesinlik → indicatif.' } },
        { t: 'mcq', q: 'Il est possible qu’il ___ demain.', o: ['pleut', 'pleuve', 'pleuvra', 'pleuvait'], a: 1, x: { en: 'Possibility → subjunctive.', tr: 'Olasılık → subjonctif.' } },
        { t: 'mcq', q: 'Après qu’il ___, nous avons dîné.', o: ['soit arrivé', 'est arrivé', 'arrive', 'arriverait'], a: 1, x: { en: 'après que + indicative (in standard usage).', tr: 'après que + indicatif (kurala göre).' } },
        { t: 'mcq', q: 'Avant que tu ___, je dois te dire quelque chose.', o: ['pars', 'partes', 'partiras', 'partais'], a: 1, x: { en: 'avant que + subjunctive.', tr: 'avant que + subjonctif.' } },
        { t: 'fill', q: 'Je suis désolé que tu ___ malade hier.', h: '(être, subj. passé)', a: ['aies été'], x: { en: 'Completed past → subjonctif passé.', tr: 'Tamamlanmış geçmiş → subjonctif passé.' } },
        { t: 'fill', q: 'J’espère qu’elle ___ le poste.', h: '(obtenir, futur)', a: ['obtiendra'], x: { en: 'espérer que + indicative.', tr: 'espérer que + indicatif.' } },
        { t: 'mcq', q: 'Nous partirons à moins qu’il ne ___ trop tard.', o: ['est', 'sera', 'soit', 'serait'], a: 2, x: { en: 'à moins que (ne) + subjunctive; ne is expletive.', tr: 'à moins que (ne) + subjonctif; ne olumsuz değildir.' } },
        { t: 'listen', say: 'Il paraît que le projet sera validé, à condition que le budget soit respecté.', o: ['Project likely approved if budget is respected', 'Project rejected', 'Budget increased', 'Project already finished'], a: 0, x: { en: 'il paraît que + ind.; à condition que + subj.', tr: 'il paraît que + ind.; à condition que + subj.' } }
      ]
    },
    {
      id: 'B2-2', title: 'Avec des si…',
      theme: { en: 'Past conditional, unreal past, regrets and reproaches', tr: 'Geçmiş şart, gerçekleşmemiş geçmiş, pişmanlık ve sitem' },
      grammar: {
        title: 'Le conditionnel passé & les hypothèses complexes',
        en: '<p>Conditionnel passé = <b>avoir/être in the conditional</b> + past participle: <i>j’aurais aimé, elle serait venue</i>.</p><p><b>Si + plus-que-parfait → conditionnel passé</b> (unreal past): <i>Si tu m’avais prévenu, je serais venu.</i><br><b>Mixed</b>: <i>Si j’avais étudié (past), je serais médecin (now).</i></p><p>Other uses: regret (<i>j’aurais dû</i>), reproach (<i>tu aurais pu m’appeler !</i>), unconfirmed past fact (<i>l’accident aurait fait deux victimes</i>).</p><p>Other hypothesis structures: <b>au cas où</b> + conditionnel, <b>même si</b>, <b>à supposer que</b> + subj., <b>en cas de</b> + noun.</p>',
        tr: '<p>Conditionnel passé = <b>conditionnel’de avoir/être</b> + ortaç: <i>j’aurais aimé, elle serait venue</i>.</p><p><b>Si + plus-que-parfait → conditionnel passé</b> (gerçekleşmemiş geçmiş): <i>Si tu m’avais prévenu, je serais venu.</i><br><b>Karma</b>: <i>Si j’avais étudié (geçmiş), je serais médecin (şimdi).</i></p><p>Diğer kullanımlar: pişmanlık (<i>j’aurais dû</i>), sitem (<i>tu aurais pu m’appeler !</i>), doğrulanmamış geçmiş olay (<i>l’accident aurait fait deux victimes</i>).</p><p>Diğer yapılar: <b>au cas où</b> + conditionnel, <b>à supposer que</b> + subj., <b>en cas de</b> + isim.</p>',
        examples: ['Si j’avais su, je ne serais pas venu.', 'Tu aurais dû me le dire plus tôt.', 'Prends un parapluie au cas où il pleuvrait.']
      },
      vocab: [
        ['le regret', 'pişmanlık', 'regret'], ['le reproche', 'sitem', 'reproach'], ['au cas où', '…olursa diye', 'in case'],
        ['en cas de', 'durumunda', 'in the event of'], ['rater une occasion', 'fırsatı kaçırmak', 'to miss an opportunity'],
        ['prévenir', 'haber vermek / önlemek', 'to warn / prevent'], ['à supposer que', 'farz edelim ki', 'supposing that'],
        ['le destin', 'kader', 'fate'], ['le hasard', 'tesadüf', 'chance'], ['autrement', 'aksi hâlde', 'otherwise']
      ],
      quiz: [
        { t: 'mcq', q: 'Si j’avais vu l’annonce, j’___ postulé.', o: ['aurai', 'aurais', 'avais', 'aie'], a: 1, x: { en: 'Si + PQP → conditionnel passé.', tr: 'Si + PQP → conditionnel passé.' } },
        { t: 'fill', q: 'Si vous étiez partis plus tôt, vous ___ le train.', h: '(ne pas rater)', a: ['n’auriez pas raté', "n'auriez pas raté"], x: { en: 'ne + auriez + pas + raté.', tr: 'ne + auriez + pas + raté.' } },
        { t: 'fill', q: 'Elle ___ venir, mais elle était malade.', h: '(vouloir, cond. passé)', a: ['aurait voulu'], x: { en: 'aurait + voulu.', tr: 'aurait + voulu.' } },
        { t: 'mcq', q: 'Si j’avais accepté ce poste, je ___ à Montréal maintenant.', o: ['vivrais', 'aurais vécu', 'vivrai', 'vivais'], a: 0, x: { en: 'Mixed: past condition, present result → conditionnel présent.', tr: 'Karma: geçmiş şart, şimdiki sonuç → conditionnel présent.' } },
        { t: 'mcq', q: 'Reproach: “You could have called me!”', o: ['Tu pourrais m’appeler !', 'Tu aurais pu m’appeler !', 'Tu as pu m’appeler !', 'Tu pouvais m’appeler !'], a: 1, x: { en: 'Conditionnel passé of pouvoir.', tr: 'pouvoir’ın conditionnel passé’si.' } },
        { t: 'mcq', q: 'Prends ta veste au cas où il ___ froid.', o: ['fait', 'fasse', 'ferait', 'fera'], a: 2, x: { en: 'au cas où + conditionnel.', tr: 'au cas où + conditionnel.' } },
        { t: 'listen', say: 'Selon les premiers témoignages, l’incendie aurait été provoqué par une cigarette mal éteinte.', o: ['The fire was allegedly caused by a cigarette', 'The fire was caused by lightning', 'A cigarette will cause a fire', 'Witnesses started the fire'], a: 0, x: { en: 'aurait été provoqué = allegedly caused.', tr: 'aurait été provoqué = …neden olduğu sanılıyor.' } },
        { t: 'order', w: 'Nous aurions dû réserver plus tôt.', x: { en: 'Regret → aurions dû + infinitive.', tr: 'Pişmanlık → aurions dû + mastar.' } }
      ]
    },
    {
      id: 'B2-3', title: 'Le monde du travail',
      theme: { en: 'Gérondif, present participle, verbal adjective', tr: 'Gérondif, şimdiki zaman ortacı, fiilden sıfat' },
      grammar: {
        title: 'Le gérondif, le participe présent & l’adjectif verbal',
        en: '<p><b>Gérondif</b> = <b>en</b> + -ant (same subject as the main verb): simultaneity, manner, condition — <i>Il travaille <b>en écoutant</b> de la musique. <b>En partant</b> tôt, tu éviteras les bouchons.</i> Add <b>tout</b> for opposition: <i>tout en sachant</i>.</p><p><b>Participe présent</b> (-ant, invariable) replaces <i>qui</i> + verb or a cause, mostly in writing: <i>Les candidats <b>ayant</b> un master… <b>Étant</b> malade, il est resté chez lui.</i> Past form: <i>ayant fini, étant parti</i>.</p><p><b>Adjectif verbal</b> agrees and sometimes changes spelling: <i>fatiguant</i> (participle) / <i>fatigant</i> (adj.), <i>convainquant / convaincant</i>, <i>précédant / précédent</i>.</p>',
        tr: '<p><b>Gérondif</b> = <b>en</b> + -ant (ana fiille aynı özne): eşzamanlılık, tarz, koşul — <i>Il travaille <b>en écoutant</b> de la musique. <b>En partant</b> tôt, tu éviteras les bouchons.</i> Karşıtlık için <b>tout</b>: <i>tout en sachant</i>.</p><p><b>Participe présent</b> (-ant, değişmez) <i>qui</i> + fiil veya sebep yerine, çoğunlukla yazıda: <i>Les candidats <b>ayant</b> un master… <b>Étant</b> malade, il est resté chez lui.</i> Geçmiş: <i>ayant fini, étant parti</i>.</p><p><b>Adjectif verbal</b> uyum alır, bazen yazımı değişir: <i>fatiguant / fatigant</i>, <i>convainquant / convaincant</i>, <i>précédant / précédent</i>.</p>',
        examples: ['C’est en forgeant qu’on devient forgeron.', 'Ayant terminé son rapport, elle a quitté le bureau.', 'Recherchons assistant(e) parlant couramment anglais.']
      },
      vocab: [
        ['l’entretien d’embauche', 'iş görüşmesi', 'job interview'], ['le CV', 'özgeçmiş', 'CV / résumé'], ['la lettre de motivation', 'niyet mektubu', 'cover letter'],
        ['le salaire', 'maaş', 'salary'], ['le contrat (CDI / CDD)', 'süresiz / süreli sözleşme', 'permanent / fixed-term contract'],
        ['postuler', 'başvurmak', 'to apply'], ['démissionner', 'istifa etmek', 'to resign'], ['licencier', 'işten çıkarmak', 'to lay off'],
        ['les compétences', 'yetkinlikler', 'skills'], ['l’épuisement professionnel', 'tükenmişlik (burn-out)', 'burnout']
      ],
      quiz: [
        { t: 'mcq', q: 'Il s’est blessé ___ du ski.', o: ['en faisant', 'faisant', 'en fait', 'en faire'], a: 0, x: { en: 'Simultaneity, same subject → gérondif.', tr: 'Eşzamanlılık, aynı özne → gérondif.' } },
        { t: 'mcq', q: '___ fini son travail, il est rentré.', o: ['En ayant', 'Ayant', 'Étant', 'Avant'], a: 1, x: { en: 'Past participle clause: ayant + participle.', tr: 'Geçmiş ortaç yapısı: ayant + ortaç.' } },
        { t: 'mcq', q: 'Ce travail est très ___.', o: ['fatiguant', 'fatigant', 'fatiguante', 'fatigante'], a: 1, x: { en: 'Adjective (m. sing.) → fatigant (no u).', tr: 'Sıfat (eril tekil) → fatigant (u yok).' } },
        { t: 'mcq', q: 'Ses arguments étaient ___.', o: ['convainquants', 'convaincants', 'convainquant', 'convaincant'], a: 1, x: { en: 'Adjective, m. pl. → convaincants.', tr: 'Sıfat, eril çoğul → convaincants.' } },
        { t: 'fill', q: 'C’est ___ lisant beaucoup qu’on enrichit son vocabulaire.', a: ['en'], x: { en: 'Means → gérondif (en + -ant).', tr: 'Araç → gérondif (en + -ant).' } },
        { t: 'fill', q: 'Tout en ___ la vérité, il n’a rien dit.', h: '(savoir)', a: ['sachant'], x: { en: 'savoir → sachant (irregular).', tr: 'savoir → sachant (düzensiz).' } },
        { t: 'listen', say: 'Nous recherchons un développeur maîtrisant le Python et ayant au moins trois ans d’expérience.', o: ['Python developer with 3+ years experience', 'Python teacher', 'Junior developer, no experience', 'Developer who will learn Python'], a: 0, x: { en: 'maîtrisant / ayant = participes présents.', tr: 'maîtrisant / ayant = şimdiki zaman ortaçları.' } },
        { t: 'dict', say: 'En travaillant à distance, elle gagne deux heures par jour.', x: { en: 'en + travaillant.', tr: 'en + travaillant.' } }
      ]
    },
    {
      id: 'B2-4', title: 'Nuancer son propos',
      theme: { en: 'Concession and opposition', tr: 'Taviz ve karşıtlık' },
      grammar: {
        title: 'Exprimer la concession et l’opposition',
        en: '<p><b>Opposition</b> (two contrasting facts): <i>alors que, tandis que</i> (+ ind.), <i>en revanche, par contre, au contraire, contrairement à</i>.</p><p><b>Concession</b> (unexpected result): <i>bien que / quoique</i> + subj., <i>même si</i> + ind., <i>malgré</i> + noun, <i>pourtant, cependant, néanmoins, toutefois</i>, <i>avoir beau</i> + inf. (<i>J’ai beau essayer, je n’y arrive pas</i>), <i>quand même / tout de même</i>, <i>certes… mais</i>, <i>quel que soit</i> + noun, <i>où que / qui que / quoi que</i> + subj.</p><p>Beware: <b>quoi que</b> (whatever) ≠ <b>quoique</b> (although).</p>',
        tr: '<p><b>Karşıtlık</b> (iki zıt olgu): <i>alors que, tandis que</i> (+ ind.), <i>en revanche, par contre, au contraire, contrairement à</i>.</p><p><b>Taviz</b> (beklenmedik sonuç): <i>bien que / quoique</i> + subj., <i>même si</i> + ind., <i>malgré</i> + isim, <i>pourtant, cependant, néanmoins, toutefois</i>, <i>avoir beau</i> + mastar (<i>J’ai beau essayer…</i> = ne kadar denesem de), <i>quand même</i>, <i>certes… mais</i>, <i>quel que soit</i> + isim, <i>où que / qui que / quoi que</i> + subj.</p><p>Dikkat: <b>quoi que</b> (her ne) ≠ <b>quoique</b> (-e rağmen).</p>',
        examples: ['Malgré la pluie, le match a eu lieu.', 'Il a beau être riche, il n’est pas heureux.', 'Quoi que tu dises, je ne changerai pas d’avis.']
      },
      vocab: [
        ['malgré', 'rağmen', 'despite'], ['néanmoins', 'yine de', 'nevertheless'], ['toutefois', 'bununla birlikte', 'however'],
        ['tandis que', 'oysa, iken', 'whereas'], ['avoir beau', 'ne kadar … -se de', 'however much one…'], ['certes', 'kuşkusuz', 'admittedly'],
        ['nuancer', 'ince ayrım yapmak', 'to qualify'], ['le paradoxe', 'paradoks', 'paradox'], ['la contradiction', 'çelişki', 'contradiction'],
        ['quand même', 'yine de', 'all the same']
      ],
      quiz: [
        { t: 'mcq', q: '___ la grève, il est arrivé à l’heure.', o: ['Bien que', 'Malgré', 'Même si', 'Pourtant'], a: 1, x: { en: '+ noun → malgré.', tr: '+ isim → malgré.' } },
        { t: 'mcq', q: 'Quoiqu’il ___ tard, elle travaille encore.', o: ['est', 'soit', 'sera', 'était'], a: 1, x: { en: 'quoique + subjunctive.', tr: 'quoique + subjonctif.' } },
        { t: 'mcq', q: 'J’ai beau ___, je ne comprends pas.', o: ['relis', 'relire', 'relisant', 'relu'], a: 1, x: { en: 'avoir beau + infinitive.', tr: 'avoir beau + mastar.' } },
        { t: 'mcq', q: '___ tu fasses, fais-le bien.', o: ['Quoique', 'Quoi que', 'Bien que', 'Même si'], a: 1, x: { en: 'Whatever → quoi que (two words).', tr: 'Her ne → quoi que (iki kelime).' } },
        { t: 'fill', q: 'Quelles que ___ les difficultés, nous continuerons.', h: '(être, subj.)', a: ['soient'], x: { en: 'quel que soit agrees: quelles que soient.', tr: 'quel que soit uyum alır: quelles que soient.' } },
        { t: 'mcq', q: 'Paul adore la ville, ___ sa femme préfère la campagne.', o: ['bien que', 'tandis que', 'malgré', 'donc'], a: 1, x: { en: 'Contrast between two facts → tandis que.', tr: 'İki olgu arasında karşıtlık → tandis que.' } },
        { t: 'listen', say: 'Certes, cette mesure coûte cher ; néanmoins, elle permettra de sauver des vies.', o: ['Expensive, but it will save lives', 'Cheap and useless', 'Too expensive, so rejected', 'It already saved lives cheaply'], a: 0, x: { en: 'Certes… néanmoins = admittedly… nevertheless.', tr: 'Certes… néanmoins = kuşkusuz… yine de.' } },
        { t: 'order', w: 'Il a beau pleuvoir, nous sortirons quand même.', x: { en: 'avoir beau + inf. … quand même.', tr: 'avoir beau + mastar … quand même.' } }
      ]
    },
    {
      id: 'B2-5', title: 'Mettre en valeur',
      theme: { en: 'Emphasis, compound relative pronouns', tr: 'Vurgu, bileşik ilgi zamirleri' },
      grammar: {
        title: 'La mise en relief & les pronoms relatifs composés',
        en: '<p><b>Emphasis</b>: <i>C’est … qui / C’est … que</i>: <i>C’est Marie <b>qui</b> a gagné. C’est à toi <b>que</b> je parle.</i><br><i>Ce qui / Ce que / Ce dont … , c’est …</i>: <i><b>Ce qui</b> me plaît, c’est le calme. <b>Ce dont</b> j’ai besoin, c’est de repos.</i></p><p><b>Compound relatives</b> after a preposition: <i>lequel, laquelle, lesquels, lesquelles</i>: <i>la raison <b>pour laquelle</b>…, le projet <b>sur lequel</b> je travaille</i>. With à → <b>auquel, à laquelle, auxquels, auxquelles</b>; with de (+ compound prep.) → <b>duquel, de laquelle…</b>: <i>le parc <b>près duquel</b> j’habite</i>. For people, <b>prep. + qui</b> is common: <i>la personne <b>avec qui</b> je travaille</i>.</p>',
        tr: '<p><b>Vurgu</b>: <i>C’est … qui / C’est … que</i>: <i>C’est Marie <b>qui</b> a gagné.</i><br><i>Ce qui / Ce que / Ce dont … , c’est …</i>: <i><b>Ce qui</b> me plaît, c’est le calme. <b>Ce dont</b> j’ai besoin, c’est de repos.</i></p><p><b>Bileşik ilgi zamirleri</b> edattan sonra: <i>lequel, laquelle, lesquels, lesquelles</i>: <i>la raison <b>pour laquelle</b>…, le projet <b>sur lequel</b> je travaille</i>. à ile → <b>auquel, à laquelle, auxquels, auxquelles</b>; de ile → <b>duquel, de laquelle…</b>: <i>le parc <b>près duquel</b> j’habite</i>. Kişiler için <b>edat + qui</b>: <i>la personne <b>avec qui</b> je travaille</i>.</p>',
        examples: ['C’est pour cette raison que j’ai quitté Paris.', 'Ce que je reproche à ce film, c’est sa longueur.', 'Voici le problème auquel nous devons réfléchir.']
      },
      vocab: [
        ['souligner', 'altını çizmek', 'to emphasise'], ['mettre en avant', 'öne çıkarmak', 'to highlight'], ['l’enjeu (m)', 'mesele, kazanç-kayıp', 'stake / issue'],
        ['réfléchir à', 'üzerine düşünmek', 'to think about'], ['tenir à', 'çok önemsemek', 'to care about'], ['la raison', 'neden', 'reason'],
        ['l’essentiel (m)', 'en önemli şey', 'the main thing'], ['l’œuvre (f)', 'eser', 'work (of art)'], ['le patrimoine', 'miras', 'heritage'],
        ['la critique', 'eleştiri', 'review / criticism']
      ],
      quiz: [
        { t: 'mcq', q: '___ m’intéresse, c’est l’histoire de l’art.', o: ['Ce que', 'Ce qui', 'Ce dont', 'Qui'], a: 1, x: { en: 'Subject of intéresse → ce qui.', tr: 'intéresse’nin öznesi → ce qui.' } },
        { t: 'mcq', q: '___ je rêve, c’est d’un long voyage.', o: ['Ce que', 'Ce qui', 'Ce dont', 'Dont'], a: 2, x: { en: 'rêver de → ce dont.', tr: 'rêver de → ce dont.' } },
        { t: 'mcq', q: 'Voilà la raison pour ___ je suis parti.', o: ['lequel', 'laquelle', 'qui', 'quoi'], a: 1, x: { en: 'raison is feminine → laquelle.', tr: 'raison dişil → laquelle.' } },
        { t: 'mcq', q: 'Les projets ___ je pense sont ambitieux.', o: ['auxquels', 'auquel', 'dont', 'lesquels'], a: 0, x: { en: 'penser à + projets (m. pl.) → auxquels.', tr: 'penser à + projets (eril çoğul) → auxquels.' } },
        { t: 'fill', q: 'C’est la maison près ___ se trouve l’école.', a: ['de laquelle'], x: { en: 'près de + maison (f) → de laquelle.', tr: 'près de + maison (dişil) → de laquelle.' } },
        { t: 'fill', q: 'C’est toi ___ as raison.', a: ['qui'], x: { en: 'C’est … qui (verb agrees with toi: as).', tr: 'C’est … qui (fiil toi ile uyar: as).' } },
        { t: 'listen', say: 'Ce que les spectateurs ont le plus apprécié, c’est la mise en scène.', o: ['The audience liked the staging most', 'The audience disliked the staging', 'The actors liked the audience', 'The music was the best part'], a: 0, x: { en: 'Ce que … c’est = what … is.', tr: 'Ce que … c’est = …-diği şey …-dir.' } },
        { t: 'order', w: 'C’est avec elle que je voudrais travailler.', x: { en: 'C’est + prep. + pronoun + que.', tr: 'C’est + edat + zamir + que.' } }
      ]
    },
    {
      id: 'B2-6', title: 'Le registre soutenu',
      theme: { en: 'Nominalisation, formal register, formal letters', tr: 'Adlaştırma, resmî üslup, resmî mektuplar' },
      grammar: {
        title: 'La nominalisation & l’écrit formel',
        en: '<p><b>Nominalisation</b> turns a verb/adjective into a noun to make writing denser and more formal (headlines, reports): <i>Les prix augmentent → <b>L’augmentation</b> des prix</i>; <i>Le ministre a démissionné → <b>Démission</b> du ministre</i>.</p><p>Common suffixes: <b>-tion</b> (création), <b>-ment</b> (développement), <b>-age</b> (lavage), <b>-ure</b> (fermeture), <b>-ité</b> (rapide → rapidité), <b>-eur</b> (long → longueur), <b>-ance/-ence</b> (naissance, présence), and zero suffix (<i>choisir → le choix, vendre → la vente</i>).</p><p>Formal letter: <i>Madame, Monsieur, … Je me permets de vous écrire afin de… Je vous serais reconnaissant(e) de bien vouloir… Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.</i></p>',
        tr: '<p><b>Adlaştırma</b>, fiil/sıfatı isme çevirerek yazıyı daha yoğun ve resmî yapar (başlıklar, raporlar): <i>Les prix augmentent → <b>L’augmentation</b> des prix</i>; <i>Le ministre a démissionné → <b>Démission</b> du ministre</i>.</p><p>Ekler: <b>-tion</b> (création), <b>-ment</b> (développement), <b>-age</b> (lavage), <b>-ure</b> (fermeture), <b>-ité</b> (rapidité), <b>-eur</b> (longueur), <b>-ance/-ence</b> (naissance, présence), eksiz (<i>choisir → le choix, vendre → la vente</i>).</p><p>Resmî mektup: <i>Madame, Monsieur, … Je me permets de vous écrire afin de… Je vous serais reconnaissant(e) de bien vouloir… Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.</i></p>',
        examples: ['Fermeture exceptionnelle de la bibliothèque.', 'La construction du nouveau stade a été retardée.', 'Je vous serais reconnaissante de bien vouloir me rembourser.']
      },
      vocab: [
        ['la réclamation', 'şikâyet (resmî)', 'formal complaint'], ['le remboursement', 'geri ödeme', 'refund'], ['ci-joint', 'ekte', 'attached'],
        ['suite à', '…üzerine', 'following'], ['dans l’attente de', '…bekleyerek', 'looking forward to'], ['solliciter', 'talep etmek', 'to request'],
        ['le délai', 'süre', 'deadline / time frame'], ['la démarche', 'işlem, girişim', 'procedure / step'],
        ['le dysfonctionnement', 'işlev bozukluğu', 'malfunction'], ['l’interlocuteur', 'muhatap', 'contact person']
      ],
      quiz: [
        { t: 'mcq', q: 'Nominalise: “Le musée ferme.”', o: ['La fermation du musée', 'La fermeture du musée', 'Le fermement du musée', 'La ferme du musée'], a: 1, x: { en: 'fermer → fermeture.', tr: 'fermer → fermeture.' } },
        { t: 'mcq', q: 'Nominalise: “Les loyers augmentent.”', o: ['L’augmentation des loyers', 'L’augmentement des loyers', 'L’augmentage des loyers', 'L’augmenture des loyers'], a: 0, x: { en: 'augmenter → augmentation.', tr: 'augmenter → augmentation.' } },
        { t: 'fill', q: 'choisir → le ___', a: ['choix'], x: { en: 'Irregular nominalisation.', tr: 'Düzensiz adlaştırma.' } },
        { t: 'fill', q: 'rapide → la ___', a: ['rapidité'], x: { en: 'Adjective + -ité.', tr: 'Sıfat + -ité.' } },
        { t: 'mcq', q: 'Formal closing of a letter:', o: ['Bisous !', 'À plus,', 'Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.', 'Ciao, bonne journée'], a: 2, x: { en: 'Standard formal formula.', tr: 'Standart resmî kapanış.' } },
        { t: 'mcq', q: 'Most formal way to request:', o: ['Rembourse-moi.', 'Vous pouvez me rembourser ?', 'Je vous serais reconnaissant de bien vouloir procéder au remboursement.', 'Je veux mon argent.'], a: 2, x: { en: 'Conditional + bien vouloir = formal.', tr: 'Conditionnel + bien vouloir = resmî.' } },
        { t: 'listen', say: 'Suite à votre réclamation, nous vous informons que le remboursement sera effectué sous dix jours ouvrés.', o: ['Refund within 10 working days', 'Complaint rejected', 'Refund within 10 weeks', 'Product will be replaced'], a: 0, x: { en: 'sous dix jours ouvrés = within 10 working days.', tr: 'sous dix jours ouvrés = 10 iş günü içinde.' } },
        { t: 'dict', say: 'Je me permets de vous écrire afin de solliciter un rendez-vous.', x: { en: 'Formal opener.', tr: 'Resmî giriş.' } }
      ]
    },
    {
      id: 'B2-7', title: 'Le temps qui passe',
      theme: { en: 'Futur antérieur and expressing time relations', tr: 'Futur antérieur ve zaman ilişkileri' },
      grammar: {
        title: 'Le futur antérieur & l’antériorité / la postériorité',
        en: '<p>Futur antérieur = <b>avoir/être in the future</b> + past participle: <i>j’aurai fini, elle sera partie</i>. It expresses an action completed before another future action: <i><b>Quand</b> tu <b>auras lu</b> ce livre, tu me le prêteras.</i> It can also express a hypothesis about the past: <i>Il est en retard ; il <b>aura raté</b> son bus.</i></p><p>Time relations: <b>avant de</b> + inf. / <b>avant que</b> + subj.; <b>après</b> + inf. passé (<i>après avoir mangé, après être sorti</i>) / <b>après que</b> + ind.; <b>dès que, aussitôt que, une fois que, lorsque</b> + ind. (future/futur antérieur when in the future); <b>depuis que, pendant que, au moment où</b>.</p>',
        tr: '<p>Futur antérieur = <b>gelecek zamanda avoir/être</b> + ortaç: <i>j’aurai fini, elle sera partie</i>. Başka bir gelecek eylemden önce tamamlanmış eylem: <i><b>Quand</b> tu <b>auras lu</b> ce livre, tu me le prêteras.</i> Geçmiş hakkında tahmin de bildirir: <i>Il est en retard ; il <b>aura raté</b> son bus.</i></p><p>Zaman ilişkileri: <b>avant de</b> + mastar / <b>avant que</b> + subj.; <b>après</b> + geçmiş mastar (<i>après avoir mangé, après être sorti</i>) / <b>après que</b> + ind.; <b>dès que, aussitôt que, une fois que, lorsque</b> + ind.; <b>depuis que, pendant que, au moment où</b>.</p>',
        examples: ['Dès que j’aurai reçu ta réponse, je réserverai.', 'Après avoir lu le contrat, elle l’a signé.', 'D’ici 2030, la ville aura construit dix écoles.']
      },
      vocab: [
        ['dès que', '…ar …maz', 'as soon as'], ['une fois que', '…dıktan sonra', 'once'], ['d’ici (+ date)', '…e kadar', 'by (+ date)'],
        ['au fur et à mesure', 'zamanla, giderek', 'gradually'], ['désormais', 'bundan böyle', 'from now on'], ['auparavant', 'önceden', 'previously'],
        ['à l’avenir', 'gelecekte', 'in the future'], ['l’échéance (f)', 'son tarih, vade', 'deadline'], ['prévoir', 'öngörmek', 'to foresee'],
        ['la durée', 'süre', 'duration']
      ],
      quiz: [
        { t: 'mcq', q: 'Dès que j’___ mes examens, je partirai en vacances.', o: ['ai fini', 'aurai fini', 'avais fini', 'aurais fini'], a: 1, x: { en: 'Completed before another future action → futur antérieur.', tr: 'Başka gelecek eylemden önce tamamlanan → futur antérieur.' } },
        { t: 'fill', q: 'Quand vous ___, fermez la porte.', h: '(sortir, futur antérieur)', a: ['serez sortis', 'serez sorti', 'serez sorties', 'serez sortie'], x: { en: 'sortir → être.', tr: 'sortir → être.' } },
        { t: 'mcq', q: 'Après ___ le film, nous en avons discuté.', o: ['voir', 'avoir vu', 'avoir voir', 'vu'], a: 1, x: { en: 'après + past infinitive.', tr: 'après + geçmiş mastar.' } },
        { t: 'mcq', q: 'Il n’est pas là ? Il ___ ! (probably forgot)', o: ['oubliera', 'aura oublié', 'oubliait', 'oublierait'], a: 1, x: { en: 'Futur antérieur for a guess about the past.', tr: 'Geçmiş hakkında tahmin → futur antérieur.' } },
        { t: 'mcq', q: 'Appelle-moi avant ___.', o: ['de partir', 'que partir', 'partir', 'de partes'], a: 0, x: { en: 'Same subject → avant de + inf.', tr: 'Aynı özne → avant de + mastar.' } },
        { t: 'fill', q: 'Après être ___, elles ont pris un taxi.', h: '(arriver)', a: ['arrivées'], x: { en: 'Past infinitive with être → agreement.', tr: 'être ile geçmiş mastar → uyum.' } },
        { t: 'listen', say: 'D’ici la fin de l’année, nous aurons recruté vingt nouveaux collaborateurs.', o: ['By year end, 20 new staff will have been hired', '20 staff left this year', '20 staff were hired last year', 'Hiring starts at year end'], a: 0, x: { en: 'aurons recruté = will have hired.', tr: 'aurons recruté = işe almış olacağız.' } },
        { t: 'order', w: 'Une fois que tu auras signé, nous commencerons.', x: { en: 'une fois que + futur antérieur → futur.', tr: 'une fois que + futur antérieur → futur.' } }
      ]
    }
  ],
  exams: [
    {
      id: 'B2-EX1', title: 'Examen blanc B2 — DELF style', minutes: 90,
      sections: [
        { key: 'co', name: { en: 'Listening', tr: 'Dinleme' }, items: [
          { t: 'listen', say: 'Bien que la semaine de quatre jours séduise de plus en plus d’entreprises, certains économistes craignent qu’elle ne réduise la productivité dans les secteurs où la présence physique est indispensable.', o: ['Popular, but some fear lower productivity in some sectors', 'Economists unanimously support it', 'Companies reject it', 'It has increased productivity everywhere'], a: 0 },
          { t: 'listen', say: 'Si les autorités avaient écouté les scientifiques il y a vingt ans, nous n’en serions pas là aujourd’hui.', o: ['Authorities should have listened 20 years ago', 'Scientists were wrong', 'The problem is solved', 'Authorities listened and it worked'], a: 0 },
          { t: 'listen', say: 'Ce qui frappe dans ce roman, c’est moins l’intrigue que la manière dont l’auteur restitue l’atmosphère des années soixante.', o: ['The atmosphere matters more than the plot', 'The plot is the strongest point', 'The author lived in the 60s', 'The novel is set today'], a: 0 },
          { t: 'listen', say: 'La municipalité a beau multiplier les campagnes de sensibilisation, le tri des déchets reste insuffisant dans plusieurs quartiers.', o: ['Despite campaigns, recycling remains insufficient', 'Campaigns solved recycling', 'No campaigns were run', 'Recycling is excellent everywhere'], a: 0 },
          { t: 'dict', say: 'Quoi qu’on en dise, la lecture reste un plaisir irremplaçable.' }
        ] },
        { key: 'ce', name: { en: 'Reading', tr: 'Okuma' }, text: 'Faut-il avoir peur de l’intelligence artificielle au travail ?\nDepuis quelques années, l’irruption de l’intelligence artificielle dans les bureaux suscite autant d’enthousiasme que d’inquiétude. Pour ses défenseurs, ces outils libèrent les salariés des tâches répétitives et leur permettent de se consacrer à ce qui fait réellement la valeur de leur métier : la créativité, la relation humaine, le jugement. Ses détracteurs, en revanche, redoutent la disparition de nombreux emplois intermédiaires et une surveillance accrue des employés.\nLa réalité, comme souvent, est plus nuancée. Selon plusieurs études récentes, ce ne sont pas tant les métiers qui disparaissent que les tâches qui les composent. Un comptable, par exemple, passera moins de temps à saisir des données, mais davantage à conseiller ses clients. Encore faut-il que les entreprises investissent dans la formation : faute de quoi, les salariés les moins qualifiés risquent d’être les grands perdants de cette transformation.\nEn définitive, l’enjeu n’est pas technologique mais politique : c’est aux sociétés de décider de la manière dont ces outils seront utilisés, et au profit de qui.', items: [
          { t: 'mcq', q: 'According to its supporters, AI…', o: ['replaces creativity', 'frees employees from repetitive tasks', 'increases surveillance', 'eliminates all jobs'], a: 1 },
          { t: 'mcq', q: 'What do critics fear?', o: ['Higher salaries', 'Loss of intermediate jobs and more surveillance', 'Too much training', 'Fewer machines'], a: 1 },
          { t: 'mcq', q: 'According to recent studies, what mainly disappears?', o: ['Entire professions', 'Tasks within jobs', 'Accountants', 'Companies'], a: 1 },
          { t: 'mcq', q: '“Faute de quoi” in paragraph 2 means…', o: ['because of that', 'otherwise / failing that', 'thanks to that', 'in addition'], a: 1 },
          { t: 'mcq', q: 'The author’s conclusion is that the issue is mainly…', o: ['technological', 'financial', 'political / societal', 'impossible to solve'], a: 2 },
          { t: 'mcq', q: 'The author’s tone is…', o: ['enthusiastic', 'alarmist', 'nuanced', 'ironic'], a: 2 }
        ] },
        { key: 'gv', name: { en: 'Grammar & vocabulary', tr: 'Dilbilgisi ve kelime' }, items: [
          { t: 'mcq', q: 'Il est indispensable que chacun ___ ses responsabilités.', o: ['prend', 'prenne', 'prendra', 'prendrait'], a: 1 },
          { t: 'mcq', q: 'Si j’avais su, je ___ autrement.', o: ['agirais', 'aurais agi', 'avais agi', 'agirai'], a: 1 },
          { t: 'mcq', q: '___ ses efforts, il n’a pas obtenu le poste.', o: ['Bien que', 'Malgré', 'Quoique', 'Même si'], a: 1 },
          { t: 'mcq', q: 'C’est une question ___ je n’ai pas de réponse.', o: ['à laquelle', 'dont', 'que', 'auquel'], a: 1 },
          { t: 'mcq', q: 'Le projet ___ nous travaillons est confidentiel.', o: ['dont', 'sur lequel', 'que', 'auquel'], a: 1 },
          { t: 'mcq', q: 'Dès qu’il ___ le rapport, il te l’enverra.', o: ['a terminé', 'aura terminé', 'terminait', 'termine'], a: 1 },
          { t: 'fill', q: 'C’est en ___ qu’on devient écrivain.', h: '(écrire)', a: ['écrivant'] },
          { t: 'fill', q: 'développer → le ___', a: ['développement'] }
        ] },
        { key: 'pe', name: { en: 'Writing', tr: 'Yazma' }, writing: {
          prompt: { en: 'Argumentative essay / letter to the editor (250 words): “Should social media be forbidden to under-15s?” Present a nuanced, structured point of view with examples.', tr: 'Tartışmacı yazı / yayın yönetmenine mektup (250 kelime): “Sosyal medya 15 yaş altına yasaklanmalı mı?” Örneklerle, nüanslı ve yapılandırılmış bir bakış açısı sun.' },
          minWords: 250,
          checklist: ['Introduction: context + problématique + plan', 'Thesis and antithesis (certes… mais / en revanche)', 'Concession tools: bien que, malgré, avoir beau, néanmoins', 'Advanced hypothesis: si + PQP → conditionnel passé, au cas où', 'Emphasis: Ce qui…, c’est… / C’est … que', 'Nominalisation and formal register', 'Conclusion with opening (ouverture)'],
          model: 'Madame, Monsieur,\nC’est avec un vif intérêt que j’ai lu votre article consacré à l’usage des réseaux sociaux par les adolescents. Faut-il pour autant en interdire l’accès aux moins de quinze ans ? La question mérite d’être nuancée.\nCertes, les risques sont réels. Ce qui inquiète d’abord les spécialistes, c’est l’exposition précoce à des contenus violents ou à des modèles de beauté irréalistes, qui fragilisent l’estime de soi. De plus, la conception même de ces plateformes, fondée sur la captation de l’attention, favorise une dépendance dont les jeunes ont beau être conscients, ils peinent à se défaire. Plusieurs pays ont d’ailleurs déjà durci leur législation.\nNéanmoins, une interdiction stricte me semble à la fois difficile à appliquer et contre-productive. Les adolescents contourneraient aisément l’interdiction, et ce, sans aucun accompagnement. Or, ces outils constituent aussi un espace de création, d’information et de lien social, notamment pour des jeunes isolés. Si l’on avait davantage misé sur l’éducation aux médias dès l’école primaire, nous n’en serions sans doute pas à envisager des mesures aussi radicales.\nC’est donc moins l’interdiction que la responsabilisation de tous qu’il faudrait privilégier : celle des plateformes, tenues de vérifier l’âge et de limiter les algorithmes de recommandation ; celle des parents ; et celle de l’école.\nEn définitive, protéger les jeunes ne signifie pas les tenir à l’écart du monde numérique, mais leur donner les moyens d’y évoluer librement.\nVeuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.'
        } }
      ]
    }
  ]
};
