/* B1 — aligned with the progression of "Édito B1" (Didier).
   All texts and exercises are original; they follow the same CEFR B1 topics. */
window.FE_CONTENT = window.FE_CONTENT || {};
window.FE_CONTENT.B1 = {
  level: 'B1',
  book: 'Édito B1',
  color: '#9c6b1f',
  intro: {
    en: 'Express opinions and feelings, make hypotheses, tell structured stories, report what others said and link ideas logically.',
    tr: 'Görüş ve duyguları ifade etme, varsayım kurma, düzenli hikâye anlatma, başkalarının sözlerini aktarma ve fikirleri mantıklı bağlama.'
  },
  units: [
    {
      id: 'B1-1', title: 'Vivre ensemble',
      theme: { en: 'Relative pronouns qui, que, où, dont', tr: 'İlgi zamirleri qui, que, où, dont' },
      grammar: {
        title: 'Les pronoms relatifs simples',
        en: '<p><b>qui</b> = subject: <i>l’ami <b>qui</b> habite à Lyon</i>.</p><p><b>que / qu’</b> = direct object: <i>le livre <b>que</b> je lis</i>. (Past participle agrees with que if the antecedent is fem./pl.: <i>les photos que j’ai prises</i>.)</p><p><b>où</b> = place or time: <i>la ville <b>où</b> je suis né, le jour <b>où</b> il est parti</i>.</p><p><b>dont</b> replaces <b>de</b> + noun: <i>le film <b>dont</b> je t’ai parlé</i> (parler de), <i>la voisine <b>dont</b> le chien aboie</i>.</p>',
        tr: '<p><b>qui</b> = özne: <i>l’ami <b>qui</b> habite à Lyon</i>.</p><p><b>que / qu’</b> = doğrudan nesne: <i>le livre <b>que</b> je lis</i>. (Öncül dişil/çoğulsa ortaç uyar: <i>les photos que j’ai prises</i>.)</p><p><b>où</b> = yer veya zaman: <i>la ville <b>où</b> je suis né, le jour <b>où</b> il est parti</i>.</p><p><b>dont</b> = <b>de</b> + isim yerine: <i>le film <b>dont</b> je t’ai parlé</i> (parler de), <i>la voisine <b>dont</b> le chien aboie</i>.</p>',
        examples: ['C’est un quartier où les habitants s’entraident.', 'Le voisin dont je t’ai parlé organise une fête.', 'La colocation que nous avons trouvée est idéale.']
      },
      vocab: [
        ['le voisinage', 'komşuluk', 'neighbourhood'], ['s’entraider', 'yardımlaşmak', 'to help each other'], ['la colocation', 'ev paylaşımı', 'flat-sharing'],
        ['le lien social', 'sosyal bağ', 'social bond'], ['partager', 'paylaşmak', 'to share'], ['la solidarité', 'dayanışma', 'solidarity'],
        ['un conflit', 'anlaşmazlık', 'conflict'], ['se plaindre de', 'şikâyet etmek', 'to complain about'],
        ['la règle', 'kural', 'rule'], ['respecter', 'saygı göstermek / uymak', 'to respect']
      ],
      quiz: [
        { t: 'mcq', q: 'La personne ___ m’a aidé s’appelle Karim.', o: ['qui', 'que', 'dont', 'où'], a: 0, x: { en: 'Subject of “a aidé” → qui.', tr: '“a aidé”nin öznesi → qui.' } },
        { t: 'mcq', q: 'C’est le restaurant ___ nous avons dîné.', o: ['que', 'qui', 'où', 'dont'], a: 2, x: { en: 'Place → où.', tr: 'Yer → où.' } },
        { t: 'mcq', q: 'Voici le livre ___ j’ai besoin.', o: ['que', 'dont', 'où', 'qui'], a: 1, x: { en: 'avoir besoin de → dont.', tr: 'avoir besoin de → dont.' } },
        { t: 'mcq', q: 'La série ___ tu regardes est géniale.', o: ['qui', 'dont', 'que', 'où'], a: 2, x: { en: 'Direct object of regarder → que.', tr: 'regarder’ın nesnesi → que.' } },
        { t: 'fill', q: 'Je me souviens du jour ___ je t’ai rencontré.', a: ['où'], x: { en: 'Time → où.', tr: 'Zaman → où.' } },
        { t: 'fill', q: 'C’est un projet ___ je suis très fier.', a: ['dont'], x: { en: 'être fier de → dont.', tr: 'être fier de → dont.' } },
        { t: 'fill', q: 'Les lettres que j’ai ___ sont arrivées.', h: '(écrire)', a: ['écrites'], x: { en: 'que = les lettres (f. pl.) placed before avoir → écrites.', tr: 'que = les lettres (dişil çoğul), avoir’dan önce → écrites.' } },
        { t: 'listen', say: 'J’habite dans un immeuble où tout le monde se connaît et dont la cour est pleine de fleurs.', o: ['Everyone knows each other; the courtyard has flowers', 'Nobody knows each other', 'The building has a garden on the roof', 'The flowers are in the apartment'], a: 0, x: { en: 'où = in which; dont la cour = whose courtyard.', tr: 'où = ki orada; dont la cour = avlusu.' } }
      ]
    },
    {
      id: 'B1-2', title: 'Donner son avis',
      theme: { en: 'Subjunctive after opinion, necessity, feelings', tr: 'Görüş, gereklilik ve duygulardan sonra subjonctif' },
      grammar: {
        title: 'Le subjonctif présent',
        en: '<p>Form: <b>ils</b> form of the present minus <i>-ent</i> + <b>-e, -es, -e, -ions, -iez, -ent</b>: ils finiss-ent → que je finiss<b>e</b>.</p><p>Irregular: être (que je sois), avoir (que j’aie), aller (que j’aille), faire (que je fasse), pouvoir (que je puisse), savoir (que je sache), vouloir (que je veuille).</p><p>Used after: <b>il faut que</b>, <b>il est important que</b>, <b>je veux que</b>, <b>je souhaite que</b>, emotions (<b>je suis content que</b>, <b>j’ai peur que</b>), <b>je ne pense pas que</b>, <b>pour que</b>, <b>avant que</b>, <b>bien que</b>.</p><p>But: <b>je pense que / je crois que</b> + indicative (affirmative). Same subject → infinitive: <i>Je veux partir</i> (not <i>que je parte</i>).</p>',
        tr: '<p>Kuruluş: şimdiki zamanın <b>ils</b> hâli eksi <i>-ent</i> + <b>-e, -es, -e, -ions, -iez, -ent</b>: ils finiss-ent → que je finiss<b>e</b>.</p><p>Düzensiz: être (que je sois), avoir (que j’aie), aller (que j’aille), faire (que je fasse), pouvoir (que je puisse), savoir (que je sache), vouloir (que je veuille).</p><p>Şunlardan sonra: <b>il faut que</b>, <b>il est important que</b>, <b>je veux que</b>, duygular (<b>je suis content que</b>, <b>j’ai peur que</b>), <b>je ne pense pas que</b>, <b>pour que</b>, <b>avant que</b>, <b>bien que</b>.</p><p>Ama: olumlu <b>je pense que / je crois que</b> + indicatif. Özne aynıysa mastar: <i>Je veux partir</i>.</p>',
        examples: ['Il faut que nous protégions la planète.', 'Je ne pense pas que ce soit une bonne idée.', 'Je suis ravie que tu puisses venir.']
      },
      vocab: [
        ['à mon avis', 'bence', 'in my opinion'], ['selon moi', 'bana göre', 'according to me'], ['être d’accord', 'aynı fikirde olmak', 'to agree'],
        ['l’argument (m)', 'argüman', 'argument'], ['convaincre', 'ikna etmek', 'to convince'], ['douter', 'şüphe etmek', 'to doubt'],
        ['souhaiter', 'dilemek', 'to wish'], ['regretter', 'pişman olmak / üzülmek', 'to regret'],
        ['l’environnement (m)', 'çevre', 'environment'], ['le débat', 'tartışma', 'debate']
      ],
      quiz: [
        { t: 'mcq', q: 'Il faut que tu ___ tes devoirs.', o: ['fais', 'fasses', 'feras', 'faire'], a: 1, x: { en: 'il faut que + subjonctif: fasse(s).', tr: 'il faut que + subjonctif: fasses.' } },
        { t: 'mcq', q: 'Je pense qu’il ___ raison.', o: ['ait', 'a', 'avoir', 'aie'], a: 1, x: { en: 'Affirmative penser que → indicative.', tr: 'Olumlu penser que → indicatif.' } },
        { t: 'mcq', q: 'Je ne crois pas qu’il ___ venir.', o: ['peut', 'pourra', 'puisse', 'pouvait'], a: 2, x: { en: 'Negative opinion → subjonctif.', tr: 'Olumsuz görüş → subjonctif.' } },
        { t: 'fill', q: 'Je suis contente que vous ___ là.', h: '(être)', a: ['soyez'], x: { en: 'Emotion → subjonctif: que vous soyez.', tr: 'Duygu → subjonctif: que vous soyez.' } },
        { t: 'fill', q: 'Il est important que nous ___ moins de plastique.', h: '(utiliser)', a: ['utilisions'], x: { en: 'nous → -ions.', tr: 'nous → -ions.' } },
        { t: 'mcq', q: 'Je veux ___ en France l’année prochaine.', o: ['que j’aille', 'aller', 'que je vais', 'j’aille'], a: 1, x: { en: 'Same subject → infinitive.', tr: 'Aynı özne → mastar.' } },
        { t: 'mcq', q: 'Parle plus fort pour que tout le monde t’___.', o: ['entend', 'entende', 'entendra', 'entendre'], a: 1, x: { en: 'pour que + subjonctif.', tr: 'pour que + subjonctif.' } },
        { t: 'listen', say: 'Personnellement, je doute que cette loi soit efficace, mais il faut qu’on essaie.', o: ['Doubts the law will work but thinks we must try', 'Is sure the law works', 'Refuses to try', 'Thinks the law is useless and should be stopped'], a: 0, x: { en: 'douter que + subj.; il faut qu’on essaie.', tr: 'douter que + subj.; il faut qu’on essaie.' } }
      ]
    },
    {
      id: 'B1-3', title: 'Et si… ?',
      theme: { en: 'Conditional and hypotheses with si', tr: 'Şart kipi ve si ile varsayımlar' },
      grammar: {
        title: 'Le conditionnel présent & l’hypothèse',
        en: '<p>Conditional = future stem + imparfait endings: <i>je parler<b>ais</b>, nous ser<b>ions</b>, ils aur<b>aient</b></i>.</p><p>Uses: politeness, wish (<i>j’aimerais</i>), advice (<i>tu devrais</i>), unconfirmed news (<i>le président serait malade</i>), imaginary situations.</p><p>Hypothesis rules:<br>• <b>Si + présent → présent / futur / impératif</b> (likely): <i>S’il pleut, je resterai.</i><br>• <b>Si + imparfait → conditionnel présent</b> (unlikely/unreal now): <i>Si j’étais riche, je voyagerais.</i><br>Never use the conditional right after <b>si</b>.</p>',
        tr: '<p>Conditionnel = gelecek kökü + imparfait ekleri: <i>je parler<b>ais</b>, nous ser<b>ions</b>, ils aur<b>aient</b></i>.</p><p>Kullanım: kibarlık, istek (<i>j’aimerais</i>), tavsiye (<i>tu devrais</i>), doğrulanmamış haber (<i>le président serait malade</i>), hayalî durumlar.</p><p>Varsayım kuralları:<br>• <b>Si + présent → présent / futur / impératif</b> (olası): <i>S’il pleut, je resterai.</i><br>• <b>Si + imparfait → conditionnel présent</b> (şu an gerçek dışı): <i>Si j’étais riche, je voyagerais.</i><br><b>si</b>’den hemen sonra conditionnel kullanılmaz.</p>',
        examples: ['Si j’avais le temps, j’apprendrais le piano.', 'Si tu finis tôt, on ira au cinéma.', 'À ta place, je prendrais le train.']
      },
      vocab: [
        ['le rêve', 'hayal', 'dream'], ['imaginer', 'hayal etmek', 'to imagine'], ['à ta place', 'senin yerinde olsam', 'if I were you'],
        ['gagner au loto', 'piyango kazanmak', 'to win the lottery'], ['changer de vie', 'hayatını değiştirmek', 'to change one’s life'],
        ['le souhait', 'dilek', 'wish'], ['la reconversion', 'meslek değişikliği', 'career change'], ['oser', 'cesaret etmek', 'to dare'],
        ['le risque', 'risk', 'risk'], ['l’hypothèse (f)', 'varsayım', 'hypothesis']
      ],
      quiz: [
        { t: 'mcq', q: 'Si j’___ riche, j’achèterais une maison.', o: ['serais', 'étais', 'suis', 'serai'], a: 1, x: { en: 'Si + imparfait → conditionnel.', tr: 'Si + imparfait → conditionnel.' } },
        { t: 'mcq', q: 'S’il fait beau demain, nous ___ à la plage.', o: ['irions', 'irons', 'allions', 'serions allés'], a: 1, x: { en: 'Si + présent → futur.', tr: 'Si + présent → futur.' } },
        { t: 'fill', q: 'Si tu parlais français, tu ___ travailler à Paris.', h: '(pouvoir)', a: ['pourrais'], x: { en: 'pourr- + ais.', tr: 'pourr- + ais.' } },
        { t: 'fill', q: 'Nous ___ bien partir en Italie cet été.', h: '(aimer, conditionnel)', a: ['aimerions'], x: { en: 'nous → -ions.', tr: 'nous → -ions.' } },
        { t: 'mcq', q: 'Selon la radio, l’incendie ___ fait trois blessés.', o: ['a', 'aurait', 'avait', 'aura'], a: 1, x: { en: 'Unconfirmed info → conditionnel.', tr: 'Doğrulanmamış bilgi → conditionnel.' } },
        { t: 'mcq', q: 'Which sentence is correct?', o: ['Si j’aurais le temps, je viendrais.', 'Si j’avais le temps, je viendrais.', 'Si j’ai le temps, je viendrais.', 'Si j’avais le temps, je viendrai.'], a: 1, x: { en: 'si + imparfait → conditionnel.', tr: 'si + imparfait → conditionnel.' } },
        { t: 'listen', say: 'Si je pouvais changer de métier, je deviendrais boulanger.', o: ['Would become a baker if he could change jobs', 'Is a baker', 'Will become a baker next year', 'Was a baker before'], a: 0, x: { en: 'Unreal hypothesis.', tr: 'Gerçek dışı varsayım.' } },
        { t: 'order', w: 'À ta place, je ne dirais rien.', x: { en: 'ne … rien around the conjugated verb.', tr: 'ne … rien çekimli fiili sarar.' } }
      ]
    },
    {
      id: 'B1-4', title: 'Raconter une histoire',
      theme: { en: 'Plus-que-parfait and narrative tenses', tr: 'Plus-que-parfait ve anlatı zamanları' },
      grammar: {
        title: 'Le plus-que-parfait & les temps du récit',
        en: '<p>Plus-que-parfait = <b>avoir/être in the imparfait</b> + past participle: <i>j’avais fini, elle était partie</i>.</p><p>It expresses an action <b>before</b> another past action: <i>Quand je suis arrivé, le film <b>avait commencé</b>.</i></p><p>Story structure: imparfait (setting) + passé composé (events) + plus-que-parfait (earlier background). Time markers: <i>la veille</i> (the day before), <i>le lendemain</i> (the next day), <i>deux jours plus tôt / plus tard</i>.</p><p>Also used for regrets: <i>Si seulement j’avais su !</i></p>',
        tr: '<p>Plus-que-parfait = <b>imparfait’te avoir/être</b> + ortaç: <i>j’avais fini, elle était partie</i>.</p><p>Geçmişteki başka bir eylemden <b>önce</b> olanı ifade eder: <i>Quand je suis arrivé, le film <b>avait commencé</b>.</i></p><p>Hikâye yapısı: imparfait (ortam) + passé composé (olaylar) + plus-que-parfait (daha önceki arka plan). Zaman: <i>la veille</i> (bir gün önce), <i>le lendemain</i> (ertesi gün), <i>deux jours plus tôt / plus tard</i>.</p><p>Pişmanlık: <i>Si seulement j’avais su !</i></p>',
        examples: ['Elle était fatiguée parce qu’elle n’avait pas dormi.', 'Le lendemain, nous avons retrouvé le portefeuille qu’il avait perdu la veille.', 'Si seulement j’avais écouté tes conseils !']
      },
      vocab: [
        ['la veille', 'bir gün önce', 'the day before'], ['le lendemain', 'ertesi gün', 'the next day'], ['soudain', 'aniden', 'suddenly'],
        ['tout à coup', 'birdenbire', 'all of a sudden'], ['finalement', 'sonunda', 'finally'], ['le témoin', 'tanık', 'witness'],
        ['l’événement (m)', 'olay', 'event'], ['se rendre compte', 'farkına varmak', 'to realise'], ['oublier', 'unutmak', 'to forget'],
        ['raconter', 'anlatmak', 'to tell (a story)']
      ],
      quiz: [
        { t: 'mcq', q: 'Quand nous sommes arrivés, le train ___.', o: ['est parti', 'était parti', 'partait', 'partira'], a: 1, x: { en: 'Earlier past action → plus-que-parfait.', tr: 'Daha önceki geçmiş eylem → plus-que-parfait.' } },
        { t: 'fill', q: 'Il a réussi parce qu’il ___ beaucoup.', h: '(travailler, PQP)', a: ['avait travaillé'], x: { en: 'avait + travaillé.', tr: 'avait + travaillé.' } },
        { t: 'fill', q: 'Elles ___ avant nous.', h: '(arriver, PQP)', a: ['étaient arrivées'], x: { en: 'arriver → être + agreement.', tr: 'arriver → être + uyum.' } },
        { t: 'mcq', q: 'Le jour avant = ___', o: ['le lendemain', 'la veille', 'le surlendemain', 'la semaine'], a: 1, x: { en: 'la veille = the day before.', tr: 'la veille = bir gün önce.' } },
        { t: 'mcq', q: 'Il ___ nuit et il pleuvait quand j’ai entendu un bruit.', o: ['a fait', 'faisait', 'avait fait', 'fit'], a: 1, x: { en: 'Setting → imparfait.', tr: 'Ortam → imparfait.' } },
        { t: 'mcq', q: 'Si seulement tu m’___ prévenu !', o: ['as', 'avais', 'aurais', 'auras'], a: 1, x: { en: 'Regret → si seulement + PQP.', tr: 'Pişmanlık → si seulement + PQP.' } },
        { t: 'listen', say: 'Quand la police est arrivée, les voleurs s’étaient déjà enfuis.', o: ['The thieves had already escaped', 'The police caught the thieves', 'The thieves arrived after the police', 'Nobody was there'], a: 0, x: { en: 's’étaient enfuis = had fled.', tr: 's’étaient enfuis = kaçmışlardı.' } },
        { t: 'dict', say: 'Le lendemain, elle s’est rendu compte qu’elle avait oublié ses clés.', x: { en: 'se rendre compte: no agreement on rendu.', tr: 'se rendre compte: rendu uyum almaz.' } }
      ]
    },
    {
      id: 'B1-5', title: 'Il a dit que…',
      theme: { en: 'Reported speech and tense agreement', tr: 'Dolaylı anlatım ve zaman uyumu' },
      grammar: {
        title: 'Le discours rapporté',
        en: '<p>Introducing verbs: dire, expliquer, affirmer, répondre, demander.</p><p>Statements → <b>que</b>; yes/no questions → <b>si</b>; <i>qu’est-ce que</i> → <b>ce que</b>; <i>qu’est-ce qui</i> → <b>ce qui</b>; orders → <b>de</b> + infinitive.</p><p>If the introducing verb is in the past, tenses shift: présent → <b>imparfait</b>, passé composé → <b>plus-que-parfait</b>, futur → <b>conditionnel</b>. Time words change too: <i>demain → le lendemain, hier → la veille, aujourd’hui → ce jour-là</i>.</p>',
        tr: '<p>Aktarma fiilleri: dire, expliquer, affirmer, répondre, demander.</p><p>Bildirim → <b>que</b>; evet/hayır sorusu → <b>si</b>; <i>qu’est-ce que</i> → <b>ce que</b>; <i>qu’est-ce qui</i> → <b>ce qui</b>; emir → <b>de</b> + mastar.</p><p>Aktarma fiili geçmişteyse zamanlar kayar: présent → <b>imparfait</b>, passé composé → <b>plus-que-parfait</b>, futur → <b>conditionnel</b>. Zaman sözcükleri de değişir: <i>demain → le lendemain, hier → la veille</i>.</p>',
        examples: ['Il m’a dit qu’il était malade.', 'Elle m’a demandé si je viendrais le lendemain.', 'Le prof nous a demandé de fermer la porte.']
      },
      vocab: [
        ['affirmer', 'iddia etmek', 'to state'], ['expliquer', 'açıklamak', 'to explain'], ['annoncer', 'duyurmak', 'to announce'],
        ['répondre', 'cevaplamak', 'to reply'], ['préciser', 'belirtmek', 'to specify'], ['l’interview (f)', 'röportaj', 'interview'],
        ['le journaliste', 'gazeteci', 'journalist'], ['la rumeur', 'söylenti', 'rumour'], ['avouer', 'itiraf etmek', 'to admit'],
        ['prétendre', 'iddia etmek (şüpheli)', 'to claim']
      ],
      quiz: [
        { t: 'mcq', q: '“Je suis fatigué.” → Il a dit qu’il ___ fatigué.', o: ['est', 'était', 'sera', 'a été'], a: 1, x: { en: 'présent → imparfait.', tr: 'présent → imparfait.' } },
        { t: 'mcq', q: '“Tu viens ?” → Elle m’a demandé ___ je venais.', o: ['que', 'si', 'ce que', 'qu’est-ce que'], a: 1, x: { en: 'Yes/no question → si.', tr: 'Evet/hayır sorusu → si.' } },
        { t: 'mcq', q: '“Qu’est-ce que tu veux ?” → Il m’a demandé ___ je voulais.', o: ['qu’est-ce que', 'ce que', 'ce qui', 'si'], a: 1, x: { en: 'qu’est-ce que → ce que.', tr: 'qu’est-ce que → ce que.' } },
        { t: 'fill', q: '“J’ai perdu mon sac.” → Elle a dit qu’elle ___ son sac.', a: ['avait perdu'], x: { en: 'passé composé → plus-que-parfait.', tr: 'passé composé → plus-que-parfait.' } },
        { t: 'fill', q: '“Je partirai demain.” → Il a dit qu’il ___ le lendemain.', h: '(partir)', a: ['partirait'], x: { en: 'futur → conditionnel.', tr: 'futur → conditionnel.' } },
        { t: 'mcq', q: '“Taisez-vous !” → Le prof nous a demandé ___.', o: ['que nous taisons', 'de nous taire', 'si nous taisons', 'nous taire'], a: 1, x: { en: 'Order → de + infinitive.', tr: 'Emir → de + mastar.' } },
        { t: 'mcq', q: '“Hier” in past reported speech becomes:', o: ['le lendemain', 'la veille', 'demain', 'ce jour-là'], a: 1, x: { en: 'hier → la veille.', tr: 'hier → la veille.' } },
        { t: 'listen', say: 'Le ministre a annoncé que les écoles resteraient fermées jusqu’à lundi.', o: ['Schools will stay closed until Monday', 'Schools reopen today', 'Schools closed last Monday', 'The minister closed his office'], a: 0, x: { en: 'resteraient = conditionnel (future in the past).', tr: 'resteraient = geçmişte gelecek.' } }
      ]
    },
    {
      id: 'B1-6', title: 'Argumenter',
      theme: { en: 'Logical connectors: cause, consequence, opposition, goal', tr: 'Bağlaçlar: sebep, sonuç, karşıtlık, amaç' },
      grammar: {
        title: 'Les articulateurs logiques',
        en: '<p><b>Cause</b>: parce que, comme (at the start), puisque (obvious), car (written), grâce à (+ positive), à cause de (+ negative).</p><p><b>Consequence</b>: donc, alors, c’est pourquoi, par conséquent, si bien que.</p><p><b>Opposition/concession</b>: mais, pourtant, cependant, par contre / en revanche, alors que, même si (+ indicative), bien que (+ subjunctive).</p><p><b>Goal</b>: pour / afin de + infinitive, pour que / afin que + subjunctive.</p><p>Structuring: d’abord, ensuite, de plus, enfin, en conclusion.</p>',
        tr: '<p><b>Sebep</b>: parce que, comme (cümle başında), puisque (bilinen), car (yazılı), grâce à (+ olumlu), à cause de (+ olumsuz).</p><p><b>Sonuç</b>: donc, alors, c’est pourquoi, par conséquent, si bien que.</p><p><b>Karşıtlık/taviz</b>: mais, pourtant, cependant, par contre / en revanche, alors que, même si (+ indicatif), bien que (+ subjonctif).</p><p><b>Amaç</b>: pour / afin de + mastar, pour que / afin que + subjonctif.</p><p>Düzenleme: d’abord, ensuite, de plus, enfin, en conclusion.</p>',
        examples: ['Comme il pleuvait, nous sommes restés à la maison.', 'Grâce à ton aide, j’ai réussi mon examen.', 'Bien qu’il soit tard, je continue à travailler.']
      },
      vocab: [
        ['l’avantage (m)', 'avantaj', 'advantage'], ['l’inconvénient (m)', 'dezavantaj', 'drawback'], ['en revanche', 'buna karşın', 'on the other hand'],
        ['par conséquent', 'sonuç olarak', 'consequently'], ['de plus', 'ayrıca', 'moreover'], ['cependant', 'ancak', 'however'],
        ['le télétravail', 'uzaktan çalışma', 'remote work'], ['les réseaux sociaux', 'sosyal medya', 'social media'],
        ['la dépendance', 'bağımlılık', 'addiction'], ['en conclusion', 'sonuç olarak', 'in conclusion']
      ],
      quiz: [
        { t: 'mcq', q: '___ il était malade, il n’est pas venu.', o: ['Parce que', 'Comme', 'Car', 'Donc'], a: 1, x: { en: 'Cause at the start of the sentence → comme.', tr: 'Cümle başında sebep → comme.' } },
        { t: 'mcq', q: 'J’ai raté le bus ___ la grève.', o: ['grâce à', 'à cause de', 'parce que', 'pour'], a: 1, x: { en: 'Negative cause + noun → à cause de.', tr: 'Olumsuz sebep + isim → à cause de.' } },
        { t: 'mcq', q: 'Bien qu’elle ___ fatiguée, elle sort.', o: ['est', 'soit', 'était', 'sera'], a: 1, x: { en: 'bien que + subjonctif.', tr: 'bien que + subjonctif.' } },
        { t: 'mcq', q: 'Même s’il ___, nous irons nous promener.', o: ['pleuve', 'pleut', 'pleuvrait', 'pleuvra'], a: 1, x: { en: 'même si + indicative (present).', tr: 'même si + indicatif (présent).' } },
        { t: 'fill', q: 'Je parle lentement ___ que tu comprennes.', a: ['pour', 'afin'], x: { en: 'pour que / afin que + subjonctif.', tr: 'pour que / afin que + subjonctif.' } },
        { t: 'mcq', q: 'Le télétravail est pratique. ___, il peut isoler.', o: ['Donc', 'Par conséquent', 'En revanche', 'Grâce à'], a: 2, x: { en: 'Contrast → en revanche.', tr: 'Karşıtlık → en revanche.' } },
        { t: 'listen', say: 'Les réseaux sociaux nous rapprochent, cependant ils peuvent créer une forte dépendance.', o: ['They connect people but can be addictive', 'They are only negative', 'They isolate people, so we should ban them', 'They are free'], a: 0, x: { en: 'cependant = however.', tr: 'cependant = ancak.' } },
        { t: 'order', w: 'Il a beaucoup travaillé, c’est pourquoi il a réussi.', x: { en: 'c’est pourquoi = that’s why.', tr: 'c’est pourquoi = bu yüzden.' } }
      ]
    },
    {
      id: 'B1-7', title: 'Les médias',
      theme: { en: 'The passive voice and news headlines', tr: 'Edilgen çatı ve haber başlıkları' },
      grammar: {
        title: 'La voix passive',
        en: '<p>Passive = <b>être</b> (in the tense of the active verb) + past participle (agreeing with the subject). Agent introduced by <b>par</b> (sometimes <b>de</b> for feelings/states: <i>aimé de tous</i>).</p><p><i>La police arrête le suspect → Le suspect <b>est arrêté</b> par la police.</i><br><i>On a construit le pont en 1900 → Le pont <b>a été construit</b> en 1900.</i><br>Future: <i>sera publié</i>; imparfait: <i>était organisé</i>.</p><p>French often avoids the passive with <b>on</b> or a pronominal verb: <i>Ça se vend bien.</i></p>',
        tr: '<p>Edilgen = <b>être</b> (etken fiilin zamanında) + ortaç (özneyle uyumlu). Eylemi yapan <b>par</b> ile (duygu/durum için bazen <b>de</b>: <i>aimé de tous</i>).</p><p><i>La police arrête le suspect → Le suspect <b>est arrêté</b> par la police.</i><br><i>Le pont <b>a été construit</b> en 1900.</i><br>Gelecek: <i>sera publié</i>; imparfait: <i>était organisé</i>.</p><p>Fransızca sık sık <b>on</b> veya dönüşlü fiille edilgeni önler: <i>Ça se vend bien.</i></p>',
        examples: ['Le festival est organisé par la mairie.', 'Les résultats seront publiés demain.', 'Trois nouveaux médicaments ont été autorisés.']
      },
      vocab: [
        ['la presse', 'basın', 'the press'], ['le gros titre', 'manşet', 'headline'], ['l’article (m)', 'makale', 'article'],
        ['publier', 'yayımlamak', 'to publish'], ['l’enquête (f)', 'soruşturma / araştırma', 'investigation / survey'], ['la source', 'kaynak', 'source'],
        ['les fausses informations', 'yalan haberler', 'fake news'], ['vérifier', 'doğrulamak', 'to check'],
        ['le lecteur', 'okur', 'reader'], ['diffuser', 'yayınlamak', 'to broadcast']
      ],
      quiz: [
        { t: 'mcq', q: 'Ce roman ___ par Victor Hugo.', o: ['a écrit', 'a été écrit', 'est écrivé', 'était écrire'], a: 1, x: { en: 'Passive passé composé: a été + participle.', tr: 'Edilgen passé composé: a été + ortaç.' } },
        { t: 'mcq', q: 'Les maisons ___ par l’inondation.', o: ['ont été détruits', 'ont été détruites', 'ont détruit', 'sont détruit'], a: 1, x: { en: 'Agreement with maisons (f. pl.).', tr: 'maisons (dişil çoğul) ile uyum.' } },
        { t: 'fill', q: 'Demain, les résultats ___ publiés.', h: '(être, futur)', a: ['seront'], x: { en: 'Future passive → seront.', tr: 'Gelecek edilgen → seront.' } },
        { t: 'fill', q: 'Cette actrice est aimée ___ tous.', a: ['de'], x: { en: 'Feelings → de.', tr: 'Duygu → de.' } },
        { t: 'mcq', q: 'Active of “La loi a été votée par les députés”:', o: ['Les députés votent la loi.', 'Les députés ont voté la loi.', 'Les députés votaient la loi.', 'La loi vote les députés.'], a: 1, x: { en: 'a été votée → ont voté.', tr: 'a été votée → ont voté.' } },
        { t: 'mcq', q: 'Le français ___ dans 29 pays. (pronominal)', o: ['se parle', 'est parlé par', 'parle', 'se parlé'], a: 0, x: { en: 'Pronominal passive: se parle.', tr: 'Dönüşlü edilgen: se parle.' } },
        { t: 'listen', say: 'Un nouveau musée sera inauguré au printemps par la ministre de la Culture.', o: ['A museum will be opened in spring', 'A museum was closed', 'The minister opened a theatre', 'A museum is being built in winter'], a: 0, x: { en: 'sera inauguré = will be opened.', tr: 'sera inauguré = açılacak.' } },
        { t: 'dict', say: 'L’information a été vérifiée par plusieurs journalistes.', x: { en: 'vérifiée agrees with information (f).', tr: 'vérifiée, information (dişil) ile uyar.' } }
      ]
    }
  ],
  exams: [
    {
      id: 'B1-EX1', title: 'Examen blanc B1 — DELF style', minutes: 75,
      sections: [
        { key: 'co', name: { en: 'Listening', tr: 'Dinleme' }, items: [
          { t: 'listen', say: 'Selon une enquête récente, sept Français sur dix souhaiteraient travailler à distance au moins deux jours par semaine.', o: ['70% want remote work at least 2 days a week', '7% want remote work', 'Most French people refuse remote work', '70% already work from home every day'], a: 0 },
          { t: 'listen', say: 'Je pensais que ce serait difficile de vivre en colocation, mais finalement, j’adore partager les repas avec les autres.', o: ['Expected difficulty but loves it', 'Finds it very difficult', 'Wants to live alone', 'Never shares meals'], a: 0 },
          { t: 'listen', say: 'Bien que le concert ait été annulé, les spectateurs seront remboursés dans un délai de quinze jours.', o: ['Concert cancelled; refund within 15 days', 'Concert postponed 15 days', 'No refund', 'Concert in 15 days'], a: 0 },
          { t: 'listen', say: 'Si la mairie construisait plus de pistes cyclables, beaucoup d’habitants laisseraient leur voiture au garage.', o: ['More bike lanes → fewer cars', 'More parking spaces needed', 'Residents refuse to cycle', 'The city banned cars'], a: 0 },
          { t: 'dict', say: 'Il m’a dit qu’il avait déjà vu ce film.' }
        ] },
        { key: 'ce', name: { en: 'Reading', tr: 'Okuma' }, text: 'Les jardins partagés : une nouvelle façon de vivre en ville\nDepuis une dizaine d’années, les jardins partagés se multiplient dans les grandes villes françaises. Le principe est simple : un terrain est mis à disposition par la mairie et les habitants du quartier le cultivent ensemble. Pour beaucoup de participants, l’objectif n’est pas seulement de récolter des légumes. « Avant, je ne connaissais personne dans mon immeuble ; maintenant, je déjeune avec mes voisins tous les dimanches », raconte Mathilde, 34 ans. Ces espaces permettent aussi de sensibiliser les enfants à l’environnement, grâce à des ateliers organisés le mercredi. Cependant, tout n’est pas parfait : certains jardins manquent de bénévoles et les conflits sur l’organisation sont fréquents. Il faut donc que chacun respecte les règles communes pour que le projet dure.', items: [
          { t: 'mcq', q: 'Who provides the land?', o: ['The residents', 'The town hall', 'A company', 'Schools'], a: 1 },
          { t: 'mcq', q: 'According to Mathilde, the main benefit is…', o: ['saving money on vegetables', 'meeting her neighbours', 'doing sport', 'learning to cook'], a: 1 },
          { t: 'mcq', q: 'What happens on Wednesdays?', o: ['Markets', 'Workshops for children', 'Meetings with the mayor', 'Harvest parties'], a: 1 },
          { t: 'mcq', q: 'Which problem is mentioned?', o: ['Pollution', 'Lack of volunteers and conflicts', 'Theft of vegetables', 'Lack of water'], a: 1 },
          { t: 'mcq', q: 'For the project to last, it is necessary that…', o: ['the town pays more', 'everyone respects common rules', 'there are fewer gardens', 'children run the garden'], a: 1 }
        ] },
        { key: 'gv', name: { en: 'Grammar & vocabulary', tr: 'Dilbilgisi ve kelime' }, items: [
          { t: 'mcq', q: 'C’est la ville ___ je rêve depuis toujours.', o: ['que', 'où', 'dont', 'qui'], a: 2 },
          { t: 'mcq', q: 'Il faut que vous ___ ce formulaire.', o: ['remplissez', 'remplissiez', 'remplirez', 'remplir'], a: 1 },
          { t: 'mcq', q: 'Si nous avions plus de temps, nous ___ le japonais.', o: ['apprendrons', 'apprenions', 'apprendrions', 'avons appris'], a: 2 },
          { t: 'mcq', q: 'Quand je l’ai appelé, il ___ déjà.', o: ['partait', 'est parti', 'était parti', 'partira'], a: 2 },
          { t: 'mcq', q: '“Vous aimez le jazz ?” → Elle m’a demandé ___ j’aimais le jazz.', o: ['que', 'si', 'ce que', 'qu’'], a: 1 },
          { t: 'mcq', q: '___ ses efforts, il a obtenu le poste.', o: ['À cause de', 'Grâce à', 'Parce que', 'Bien que'], a: 1 },
          { t: 'fill', q: 'Les invitations ont été ___ hier.', h: '(envoyer)', a: ['envoyées'] },
          { t: 'fill', q: 'Je ne pense pas qu’il ___ raison.', h: '(avoir)', a: ['ait'] }
        ] },
        { key: 'pe', name: { en: 'Writing', tr: 'Yazma' }, writing: {
          prompt: { en: 'Forum post (160–180 words): “Should cities ban cars from their centres?” Give your opinion with at least two arguments and an example, and conclude.', tr: 'Forum yazısı (160–180 kelime): “Şehirler merkezlerinde arabaları yasaklamalı mı?” En az iki argüman ve bir örnekle görüşünü belirt ve sonuçlandır.' },
          minWords: 160,
          checklist: ['Clear opinion: À mon avis / Je suis convaincu(e) que…', 'At least 2 arguments with connectors (d’abord, de plus, enfin)', 'A concession: Certes… mais / Même si…', 'At least one subjunctive (il faut que…, bien que…)', 'One hypothesis: Si + imparfait → conditionnel', 'Conclusion: En conclusion / Pour conclure'],
          model: 'À mon avis, les villes devraient interdire les voitures dans leur centre, au moins le week-end.\nD’abord, la pollution de l’air est un vrai problème de santé publique : chaque année, des milliers de personnes tombent malades à cause des particules fines. Si on supprimait la circulation au centre, l’air serait beaucoup plus respirable. De plus, les rues piétonnes rendent la ville plus agréable : les habitants se promènent, les commerces attirent plus de clients et les enfants peuvent jouer sans danger. Par exemple, depuis que le centre de Pontevedra, en Espagne, est devenu piéton, la ville a retrouvé des habitants et le nombre d’accidents a fortement baissé.\nCertes, certaines personnes ont besoin de leur voiture, comme les personnes âgées ou les artisans. Il faut donc que les mairies proposent des solutions : des navettes gratuites, des parkings à l’entrée de la ville et des autorisations spéciales.\nEn conclusion, bien que ce changement demande des efforts, je pense qu’il améliorerait notre qualité de vie.'
        } }
      ]
    }
  ]
};
