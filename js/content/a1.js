/* A1 — aligned with the progression of "Le Nouveau Taxi! 1" (Hachette).
   All texts and exercises are original; they follow the same CEFR A1 topics. */
window.FE_CONTENT = window.FE_CONTENT || {};
window.FE_CONTENT.A1 = {
  level: 'A1',
  book: 'Le Nouveau Taxi! 1',
  color: '#2d6a4f',
  intro: {
    en: 'First steps: introduce yourself, talk about family, the city, daily life, shopping and free time.',
    tr: 'İlk adımlar: kendini tanıtma, aile, şehir, günlük hayat, alışveriş ve boş zaman.'
  },
  units: [
    {
      id: 'A1-1', title: 'Bonjour !',
      theme: { en: 'Greetings, introducing yourself, nationalities', tr: 'Selamlaşma, kendini tanıtma, milliyetler' },
      grammar: {
        title: 'Être, s’appeler & le genre des nationalités',
        en: '<p><b>être</b> (to be): je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont.</p><p><b>s’appeler</b>: je m’appelle, tu t’appelles, il s’appelle, nous nous appelons, vous vous appelez, ils s’appellent.</p><p>Nationality adjectives agree with the person: <i>il est français → elle est française</i>, <i>turc → turque</i>, <i>italien → italienne</i>. Use <b>tu</b> with friends and <b>vous</b> to be polite or for several people.</p>',
        tr: '<p><b>être</b> (olmak): je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont.</p><p><b>s’appeler</b> (adı ... olmak): je m’appelle, tu t’appelles, il s’appelle, nous nous appelons, vous vous appelez, ils s’appellent.</p><p>Milliyet sıfatları kişiye uyar: <i>il est français → elle est française</i>, <i>turc → turque</i>, <i>italien → italienne</i>. Arkadaşlara <b>tu</b>, kibar hitap veya çoğul için <b>vous</b> kullanılır.</p>',
        examples: ['Je m’appelle Leyla. Je suis turque.', 'Vous êtes français ? — Non, je suis belge.', 'Comment tu t’appelles ?']
      },
      vocab: [
        ['bonjour', 'merhaba / günaydın', 'hello / good morning'],
        ['bonsoir', 'iyi akşamlar', 'good evening'],
        ['au revoir', 'hoşça kal', 'goodbye'],
        ['merci', 'teşekkürler', 'thank you'],
        ['s’il vous plaît', 'lütfen', 'please'],
        ['enchanté(e)', 'memnun oldum', 'nice to meet you'],
        ['le pays', 'ülke', 'country'],
        ['la nationalité', 'milliyet', 'nationality'],
        ['habiter', 'oturmak, yaşamak', 'to live'],
        ['parler', 'konuşmak', 'to speak']
      ],
      quiz: [
        { t: 'mcq', q: 'Nous ___ étudiants.', o: ['sommes', 'êtes', 'sont', 'suis'], a: 0, x: { en: 'nous → sommes', tr: 'nous → sommes' } },
        { t: 'mcq', q: 'Elle est ___. (Turkey)', o: ['turc', 'turque', 'turquie', 'turcs'], a: 1, x: { en: 'Feminine of turc is turque.', tr: 'turc kelimesinin dişili turque’dür.' } },
        { t: 'fill', q: 'Tu ___ comment ?', h: '(s’appeler)', a: ['t’appelles', "t'appelles"], x: { en: 'tu t’appelles (double l).', tr: 'tu t’appelles (çift l).' } },
        { t: 'fill', q: 'Ils ___ à Paris.', h: '(habiter)', a: ['habitent'], x: { en: '-er verbs: ils → -ent (silent).', tr: '-er fiilleri: ils → -ent (okunmaz).' } },
        { t: 'mcq', q: 'To a teacher you don’t know, you say:', o: ['Salut, tu vas bien ?', 'Bonjour madame, vous allez bien ?', 'Coucou !', 'Ça va, toi ?'], a: 1, x: { en: 'Formal situation → vous + bonjour.', tr: 'Resmî durum → vous + bonjour.' } },
        { t: 'listen', say: 'Je m’appelle Paul, je suis canadien.', o: ['Paul is Canadian', 'Paul is French', 'Paula is Canadian', 'Paul lives in Canada'], a: 0, x: { en: '“Je suis canadien” = I am Canadian.', tr: '“Je suis canadien” = Kanadalıyım.' } },
        { t: 'order', w: 'Vous parlez anglais ?', x: { en: 'Intonation question: subject + verb + ?', tr: 'Tonlama sorusu: özne + fiil + ?' } },
        { t: 'dict', say: 'Bonjour, je suis étudiante.', x: { en: 'étudiante takes -e (feminine).', tr: 'étudiante dişil -e alır.' } }
      ]
    },
    {
      id: 'A1-2', title: 'Ma famille',
      theme: { en: 'Family, age, articles and possessives', tr: 'Aile, yaş, artikeller ve iyelik sıfatları' },
      grammar: {
        title: 'Avoir, les articles & les possessifs',
        en: '<p><b>avoir</b>: j’ai, tu as, il a, nous avons, vous avez, ils ont. Age uses <b>avoir</b>: <i>j’ai 20 ans</i>.</p><p>Indefinite: <b>un</b> (m), <b>une</b> (f), <b>des</b> (pl). Definite: <b>le</b>, <b>la</b>, <b>l’</b> (before vowel), <b>les</b>.</p><p>Possessives agree with the <u>thing owned</u>: mon/ma/mes, ton/ta/tes, son/sa/ses, notre/nos, votre/vos, leur/leurs. Before a vowel use <b>mon</b>: <i>mon amie</i>.</p>',
        tr: '<p><b>avoir</b> (sahip olmak): j’ai, tu as, il a, nous avons, vous avez, ils ont. Yaş <b>avoir</b> ile söylenir: <i>j’ai 20 ans</i>.</p><p>Belirsiz: <b>un</b> (eril), <b>une</b> (dişil), <b>des</b> (çoğul). Belirli: <b>le</b>, <b>la</b>, <b>l’</b> (ünlüden önce), <b>les</b>.</p><p>İyelik sıfatları <u>sahip olunan şeye</u> uyar: mon/ma/mes, ton/ta/tes, son/sa/ses, notre/nos, votre/vos, leur/leurs. Ünlüden önce <b>mon</b>: <i>mon amie</i>.</p>',
        examples: ['J’ai deux frères et une sœur.', 'Ma mère a 45 ans.', 'C’est mon amie Clara.']
      },
      vocab: [
        ['le père', 'baba', 'father'], ['la mère', 'anne', 'mother'], ['le frère', 'erkek kardeş', 'brother'],
        ['la sœur', 'kız kardeş', 'sister'], ['les parents', 'anne-baba', 'parents'], ['le fils', 'oğul', 'son'],
        ['la fille', 'kız / kız evlat', 'daughter / girl'], ['les grands-parents', 'büyükanne-büyükbaba', 'grandparents'],
        ['marié(e)', 'evli', 'married'], ['l’âge (m)', 'yaş', 'age']
      ],
      quiz: [
        { t: 'mcq', q: 'J’___ 25 ans.', o: ['suis', 'ai', 'a', 'as'], a: 1, x: { en: 'Age → avoir: j’ai 25 ans.', tr: 'Yaş → avoir: j’ai 25 ans.' } },
        { t: 'mcq', q: 'C’est ___ amie Sophie.', o: ['ma', 'mon', 'mes', 'ta'], a: 1, x: { en: 'Before a vowel: mon amie.', tr: 'Ünlüden önce: mon amie.' } },
        { t: 'mcq', q: 'Ils ___ trois enfants.', o: ['sont', 'avons', 'ont', 'a'], a: 2, x: { en: 'ils → ont', tr: 'ils → ont' } },
        { t: 'fill', q: 'Pierre et Anne, c’est ___ parents. (my)', a: ['mes'], x: { en: 'Plural → mes.', tr: 'Çoğul → mes.' } },
        { t: 'fill', q: 'J’ai ___ sœur et deux frères.', h: '(un/une)', a: ['une'], x: { en: 'sœur is feminine → une.', tr: 'sœur dişildir → une.' } },
        { t: 'mcq', q: 'Marc a une fille. C’est ___ fille.', o: ['son', 'sa', 'ses', 'leur'], a: 1, x: { en: 'fille is feminine → sa (his OR her).', tr: 'fille dişil → sa (onun).' } },
        { t: 'listen', say: 'Ma sœur a dix-huit ans.', o: ['My sister is 18', 'My brother is 18', 'My sister is 8', 'My sister has 18 friends'], a: 0, x: { en: 'dix-huit = 18', tr: 'dix-huit = 18' } },
        { t: 'order', w: 'Nous avons une grande famille.', x: { en: 'Adjective grande goes before famille.', tr: 'grande sıfatı famille’den önce gelir.' } }
      ]
    },
    {
      id: 'A1-3', title: 'En ville',
      theme: { en: 'Places in town, directions, aller + à', tr: 'Şehirdeki yerler, yol tarifi, aller + à' },
      grammar: {
        title: 'Aller, à + article & les prépositions de lieu',
        en: '<p><b>aller</b>: je vais, tu vas, il va, nous allons, vous allez, ils vont.</p><p><b>à + le = au</b>, <b>à + les = aux</b>, à la, à l’: <i>je vais au cinéma, à la poste, à l’hôpital, aux toilettes</i>.</p><p>Same with <b>de</b>: de + le = du, de + les = des (<i>en face du parc</i>).</p><p>Place: devant, derrière, à côté de, en face de, entre, sur, sous. Directions: <i>tournez à gauche/droite, allez tout droit</i>.</p>',
        tr: '<p><b>aller</b> (gitmek): je vais, tu vas, il va, nous allons, vous allez, ils vont.</p><p><b>à + le = au</b>, <b>à + les = aux</b>, à la, à l’: <i>je vais au cinéma, à la poste, à l’hôpital</i>.</p><p><b>de</b> ile de aynı: de + le = du, de + les = des (<i>en face du parc</i>).</p><p>Yer: devant (önünde), derrière (arkasında), à côté de (yanında), en face de (karşısında), entre (arasında). Yön: <i>tournez à gauche/droite, allez tout droit</i>.</p>',
        examples: ['Je vais au marché.', 'La banque est en face de la gare.', 'Tournez à droite, puis allez tout droit.']
      },
      vocab: [
        ['la gare', 'tren garı', 'train station'], ['la pharmacie', 'eczane', 'pharmacy'], ['la boulangerie', 'fırın', 'bakery'],
        ['le musée', 'müze', 'museum'], ['la rue', 'sokak', 'street'], ['à gauche', 'solda / sola', 'on/to the left'],
        ['à droite', 'sağda / sağa', 'on/to the right'], ['tout droit', 'dümdüz', 'straight ahead'],
        ['loin de', 'uzak', 'far from'], ['près de', 'yakın', 'near']
      ],
      quiz: [
        { t: 'mcq', q: 'Ce soir, nous ___ au restaurant.', o: ['allons', 'allez', 'vont', 'vais'], a: 0, x: { en: 'nous → allons', tr: 'nous → allons' } },
        { t: 'mcq', q: 'Je vais ___ cinéma.', o: ['à le', 'au', 'à la', 'aux'], a: 1, x: { en: 'à + le = au', tr: 'à + le = au' } },
        { t: 'mcq', q: 'Elle va ___ toilettes.', o: ['au', 'à la', 'aux', 'à les'], a: 2, x: { en: 'à + les = aux', tr: 'à + les = aux' } },
        { t: 'fill', q: 'La pharmacie est à côté ___ musée.', a: ['du'], x: { en: 'de + le = du', tr: 'de + le = du' } },
        { t: 'fill', q: 'Ils ___ à la gare.', h: '(aller)', a: ['vont'], x: { en: 'ils → vont (irregular).', tr: 'ils → vont (düzensiz).' } },
        { t: 'listen', say: 'Tournez à gauche et la poste est à droite.', o: ['Turn left; the post office is on the right', 'Turn right; the post office is on the left', 'Go straight; the post office is on the right', 'Turn left; the station is on the right'], a: 0, x: { en: 'gauche = left, droite = right.', tr: 'gauche = sol, droite = sağ.' } },
        { t: 'order', w: 'Où est la boulangerie, s’il vous plaît ?', x: { en: 'Où est + noun ?', tr: 'Où est + isim ?' } },
        { t: 'dict', say: 'Le musée est près de la gare.', x: { en: 'près de = near.', tr: 'près de = yakın.' } }
      ]
    },
    {
      id: 'A1-4', title: 'Au quotidien',
      theme: { en: 'Daily routine, telling the time, reflexive verbs', tr: 'Günlük rutin, saat söyleme, dönüşlü fiiller' },
      grammar: {
        title: 'Les verbes pronominaux & l’heure',
        en: '<p>Reflexive verbs use a pronoun matching the subject: <i>je <b>me</b> lève, tu <b>te</b> lèves, il <b>se</b> lève, nous <b>nous</b> levons, vous <b>vous</b> levez, ils <b>se</b> lèvent</i>.</p><p>Common: se réveiller, se lever, se doucher, s’habiller, se coucher.</p><p>Time: <i>Il est huit heures. Il est huit heures et quart / et demie / moins le quart.</i> “At” = <b>à</b>: <i>à sept heures</i>.</p>',
        tr: '<p>Dönüşlü fiiller özneye uygun zamir alır: <i>je <b>me</b> lève, tu <b>te</b> lèves, il <b>se</b> lève, nous <b>nous</b> levons, vous <b>vous</b> levez, ils <b>se</b> lèvent</i>.</p><p>Sık kullanılanlar: se réveiller (uyanmak), se lever (kalkmak), se doucher (duş almak), s’habiller (giyinmek), se coucher (yatmak).</p><p>Saat: <i>Il est huit heures. Il est huit heures et quart / et demie / moins le quart.</i> “Saat ...’de” = <b>à</b>: <i>à sept heures</i>.</p>',
        examples: ['Je me lève à sept heures.', 'Nous nous couchons tard le samedi.', 'Il est midi et demi.']
      },
      vocab: [
        ['se réveiller', 'uyanmak', 'to wake up'], ['se lever', 'kalkmak', 'to get up'], ['se doucher', 'duş almak', 'to shower'],
        ['prendre le petit-déjeuner', 'kahvaltı yapmak', 'to have breakfast'], ['travailler', 'çalışmak', 'to work'],
        ['le matin', 'sabah', 'morning'], ['l’après-midi', 'öğleden sonra', 'afternoon'], ['le soir', 'akşam', 'evening'],
        ['d’abord', 'önce', 'first'], ['ensuite', 'sonra', 'then']
      ],
      quiz: [
        { t: 'mcq', q: 'Tu ___ à quelle heure ?', o: ['te lèves', 'se lève', 'me lève', 'lèves'], a: 0, x: { en: 'tu → te', tr: 'tu → te' } },
        { t: 'mcq', q: 'Nous ___ douchons le matin.', o: ['se', 'nous', 'vous', 'me'], a: 1, x: { en: 'nous → nous', tr: 'nous → nous' } },
        { t: 'fill', q: 'Elles ___ à 23 heures.', h: '(se coucher)', a: ['se couchent'], x: { en: 'elles → se + -ent.', tr: 'elles → se + -ent.' } },
        { t: 'mcq', q: '8:45 =', o: ['huit heures moins le quart', 'neuf heures moins le quart', 'neuf heures et quart', 'huit heures et demie'], a: 1, x: { en: 'Quarter to nine.', tr: 'Dokuza çeyrek var.' } },
        { t: 'fill', q: 'Je commence le travail ___ neuf heures.', a: ['à'], x: { en: 'At + time = à.', tr: 'Saatte = à.' } },
        { t: 'listen', say: 'Il est sept heures et demie.', o: ['7:30', '7:15', '6:30', '7:45'], a: 0, x: { en: 'et demie = :30', tr: 'et demie = buçuk' } },
        { t: 'order', w: 'Je m’habille et je prends un café.', x: { en: 'Two actions linked by et.', tr: 'et ile bağlanan iki eylem.' } },
        { t: 'dict', say: 'Le soir, je me couche à onze heures.', x: { en: 'onze heures = 11 o’clock.', tr: 'onze heures = saat 11.' } }
      ]
    },
    {
      id: 'A1-5', title: 'Faire les courses',
      theme: { en: 'Food, quantities, prices, ordering politely', tr: 'Yiyecekler, miktarlar, fiyatlar, kibarca sipariş' },
      grammar: {
        title: 'Les partitifs, les quantités & vouloir/pouvoir',
        en: '<p>Partitive (some, an unknown quantity): <b>du</b> pain, <b>de la</b> salade, <b>de l’</b>eau, <b>des</b> pommes.</p><p>After a quantity or a negation → <b>de / d’</b>: <i>un kilo <b>de</b> tomates, une bouteille <b>d’</b>eau, je ne mange pas <b>de</b> viande</i>.</p><p><b>vouloir</b>: je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent. Polite: <i>je voudrais</i>. <b>pouvoir</b>: je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent.</p>',
        tr: '<p>Partitif (biraz, belirsiz miktar): <b>du</b> pain, <b>de la</b> salade, <b>de l’</b>eau, <b>des</b> pommes.</p><p>Miktar ifadesi veya olumsuzluktan sonra → <b>de / d’</b>: <i>un kilo <b>de</b> tomates, une bouteille <b>d’</b>eau, je ne mange pas <b>de</b> viande</i>.</p><p><b>vouloir</b> (istemek): je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent. Kibar: <i>je voudrais</i>. <b>pouvoir</b> (-ebilmek): je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent.</p>',
        examples: ['Je voudrais un kilo de pommes, s’il vous plaît.', 'Tu bois du café ? — Non, je ne bois pas de café.', 'Ça coûte combien ?']
      },
      vocab: [
        ['le pain', 'ekmek', 'bread'], ['le fromage', 'peynir', 'cheese'], ['la viande', 'et', 'meat'], ['le poisson', 'balık', 'fish'],
        ['les légumes (m)', 'sebzeler', 'vegetables'], ['un kilo de', 'bir kilo', 'a kilo of'], ['une bouteille de', 'bir şişe', 'a bottle of'],
        ['combien ?', 'ne kadar?', 'how much?'], ['l’addition (f)', 'hesap', 'the bill'], ['cher / chère', 'pahalı', 'expensive']
      ],
      quiz: [
        { t: 'mcq', q: 'Je mange ___ fromage.', o: ['de la', 'du', 'des', 'de l’'], a: 1, x: { en: 'fromage is masculine → du.', tr: 'fromage eril → du.' } },
        { t: 'mcq', q: 'Je ne bois pas ___ lait.', o: ['du', 'de', 'le', 'des'], a: 1, x: { en: 'Negation → de.', tr: 'Olumsuzluk → de.' } },
        { t: 'mcq', q: 'Une bouteille ___ eau minérale.', o: ['de l’', 'd’', 'de la', 'des'], a: 1, x: { en: 'After a quantity → d’ (no article).', tr: 'Miktardan sonra → d’ (artikel yok).' } },
        { t: 'fill', q: 'Vous ___ un café ?', h: '(vouloir)', a: ['voulez'], x: { en: 'vous → voulez', tr: 'vous → voulez' } },
        { t: 'fill', q: 'Nous ___ payer par carte ?', h: '(pouvoir)', a: ['pouvons'], x: { en: 'nous → pouvons', tr: 'nous → pouvons' } },
        { t: 'mcq', q: 'The most polite way to order:', o: ['Je veux un thé.', 'Donne-moi un thé.', 'Je voudrais un thé, s’il vous plaît.', 'Un thé !'], a: 2, x: { en: 'je voudrais = I would like (polite).', tr: 'je voudrais = isterdim (kibar).' } },
        { t: 'listen', say: 'Ça fait douze euros cinquante.', o: ['€12.50', '€2.50', '€12.15', '€20.50'], a: 0, x: { en: 'douze = 12, cinquante = 50.', tr: 'douze = 12, cinquante = 50.' } },
        { t: 'order', w: 'Je voudrais de la salade et du pain.', x: { en: 'de la (f) + du (m).', tr: 'de la (dişil) + du (eril).' } }
      ]
    },
    {
      id: 'A1-6', title: 'Le week-end',
      theme: { en: 'Hobbies, weather, near future, negation', tr: 'Hobiler, hava durumu, yakın gelecek, olumsuzluk' },
      grammar: {
        title: 'Le futur proche, la négation & faire de',
        en: '<p><b>Futur proche</b> = aller (present) + infinitive: <i>je vais partir, nous allons visiter</i>.</p><p>Negation surrounds the conjugated verb: <i>je <b>ne</b> joue <b>pas</b></i>, <i>je <b>ne</b> vais <b>pas</b> sortir</i>. Also <b>ne … jamais</b> (never), <b>ne … plus</b> (no longer).</p><p>Sports/activities: <b>faire du</b> vélo, <b>de la</b> natation, <b>du</b> sport; <b>jouer au</b> foot, <b>jouer du</b> piano.</p><p>Weather: <i>il fait beau / chaud / froid, il pleut, il neige</i>.</p>',
        tr: '<p><b>Futur proche</b> (yakın gelecek) = aller (şimdiki) + mastar: <i>je vais partir, nous allons visiter</i>.</p><p>Olumsuzluk çekimli fiili sarar: <i>je <b>ne</b> joue <b>pas</b></i>, <i>je <b>ne</b> vais <b>pas</b> sortir</i>. Ayrıca <b>ne … jamais</b> (asla), <b>ne … plus</b> (artık değil).</p><p>Aktiviteler: <b>faire du</b> vélo, <b>de la</b> natation; <b>jouer au</b> foot (spor), <b>jouer du</b> piano (enstrüman).</p><p>Hava: <i>il fait beau / chaud / froid, il pleut, il neige</i>.</p>',
        examples: ['Samedi, je vais faire du vélo.', 'Il ne va pas pleuvoir demain.', 'Elle joue du piano, mais elle ne joue jamais au tennis.']
      },
      vocab: [
        ['le week-end', 'hafta sonu', 'weekend'], ['sortir', 'dışarı çıkmak', 'to go out'], ['la natation', 'yüzme', 'swimming'],
        ['le vélo', 'bisiklet', 'bike'], ['la randonnée', 'doğa yürüyüşü', 'hike'], ['il pleut', 'yağmur yağıyor', 'it’s raining'],
        ['il fait beau', 'hava güzel', 'the weather is nice'], ['demain', 'yarın', 'tomorrow'], ['jamais', 'asla', 'never'],
        ['aimer', 'sevmek', 'to like / love']
      ],
      quiz: [
        { t: 'mcq', q: 'Demain, nous ___ visiter le Louvre.', o: ['allons', 'avons', 'sommes', 'faisons'], a: 0, x: { en: 'Futur proche = aller + infinitive.', tr: 'Yakın gelecek = aller + mastar.' } },
        { t: 'mcq', q: 'Il joue ___ guitare.', o: ['au', 'à la', 'de la', 'du'], a: 2, x: { en: 'Instrument → jouer de: de la guitare.', tr: 'Enstrüman → jouer de: de la guitare.' } },
        { t: 'mcq', q: 'Je fais ___ natation.', o: ['du', 'de la', 'la', 'à la'], a: 1, x: { en: 'natation is feminine → de la.', tr: 'natation dişil → de la.' } },
        { t: 'fill', q: 'Je ___ vais ___ sortir ce soir. (negation)', a: ['ne pas', 'ne / pas', 'ne,pas'], x: { en: 'ne + conjugated verb + pas + infinitive.', tr: 'ne + çekimli fiil + pas + mastar.' } },
        { t: 'mcq', q: 'Il ne fume ___. (never)', o: ['pas', 'plus', 'jamais', 'rien'], a: 2, x: { en: 'ne … jamais = never.', tr: 'ne … jamais = asla.' } },
        { t: 'listen', say: 'Ce week-end, il va pleuvoir, alors je vais rester à la maison.', o: ['Rain → staying home', 'Sun → going to the beach', 'Rain → going to the cinema', 'Snow → skiing'], a: 0, x: { en: 'pleuvoir = to rain; rester à la maison = stay home.', tr: 'pleuvoir = yağmur yağmak; rester à la maison = evde kalmak.' } },
        { t: 'order', w: 'Ils vont jouer au football samedi.', x: { en: 'aller + infinitive + complement.', tr: 'aller + mastar + tümleç.' } },
        { t: 'dict', say: 'Il fait beau, on va faire une randonnée.', x: { en: 'on = we (informal).', tr: 'on = biz (günlük dil).' } }
      ]
    }
  ],
  exams: [
    {
      id: 'A1-EX1', title: 'Examen blanc A1 — DELF style', minutes: 45,
      sections: [
        { key: 'co', name: { en: 'Listening', tr: 'Dinleme' }, items: [
          { t: 'listen', say: 'Bonjour, je suis Marie. J’habite à Lyon et j’ai trente ans.', o: ['Marie, Lyon, 30', 'Marie, Lille, 30', 'Marie, Lyon, 13', 'Maria, Lyon, 20'], a: 0 },
          { t: 'listen', say: 'Le train pour Marseille part à quatorze heures vingt.', o: ['14:20', '4:20', '14:02', '12:20'], a: 0 },
          { t: 'listen', say: 'Je voudrais deux baguettes et un croissant, s’il vous plaît.', o: ['2 baguettes + 1 croissant', '1 baguette + 2 croissants', '2 croissants', '2 baguettes'], a: 0 },
          { t: 'listen', say: 'Samedi, on va au cinéma avec mes cousins.', o: ['Cinema on Saturday', 'Cinema on Sunday', 'Museum on Saturday', 'Restaurant with cousins'], a: 0 },
          { t: 'dict', say: 'Ma sœur s’appelle Julie.' }
        ] },
        { key: 'ce', name: { en: 'Reading', tr: 'Okuma' }, text: 'Salut Léa !\nJe suis à Nice pour les vacances avec ma famille. Il fait très beau et chaud. Le matin, je me lève à neuf heures et je vais à la plage avec mon frère. L’après-midi, nous visitons la vieille ville. Ce soir, nous allons manger au restaurant italien. Je rentre à Paris dimanche.\nBisous,\nInès', items: [
          { t: 'mcq', q: 'Where is Inès?', o: ['Paris', 'Nice', 'Italy', 'Lyon'], a: 1 },
          { t: 'mcq', q: 'What is the weather like?', o: ['Rainy', 'Cold', 'Sunny and hot', 'Snowy'], a: 2 },
          { t: 'mcq', q: 'What does she do in the morning?', o: ['Visits the old town', 'Goes to the beach with her brother', 'Sleeps', 'Goes to a restaurant'], a: 1 },
          { t: 'mcq', q: 'Tonight they are going to eat…', o: ['at home', 'at an Italian restaurant', 'at the beach', 'at a French restaurant'], a: 1 },
          { t: 'mcq', q: 'When does she go back to Paris?', o: ['Saturday', 'Tonight', 'Sunday', 'Monday'], a: 2 }
        ] },
        { key: 'gv', name: { en: 'Grammar & vocabulary', tr: 'Dilbilgisi ve kelime' }, items: [
          { t: 'mcq', q: 'Vous ___ français ?', o: ['êtes', 'est', 'sommes', 'es'], a: 0 },
          { t: 'mcq', q: 'J’ai ___ chat noir.', o: ['une', 'un', 'des', 'la'], a: 1 },
          { t: 'mcq', q: 'Ils vont ___ marché.', o: ['à la', 'au', 'aux', 'à le'], a: 1 },
          { t: 'mcq', q: 'Je ne mange pas ___ viande.', o: ['de la', 'du', 'de', 'la'], a: 2 },
          { t: 'mcq', q: 'Nous ___ levons tôt.', o: ['se', 'nous', 'vous', 'me'], a: 1 },
          { t: 'fill', q: 'Demain, je ___ partir en vacances.', h: '(aller)', a: ['vais'] },
          { t: 'fill', q: 'C’est ___ père. (my)', a: ['mon'] },
          { t: 'fill', q: 'Elles ___ vingt ans.', h: '(avoir)', a: ['ont'] }
        ] },
        { key: 'pe', name: { en: 'Writing', tr: 'Yazma' }, writing: {
          prompt: { en: 'Write a short message (40–50 words) to a new French friend: introduce yourself (name, age, nationality, city), your family and your hobbies.', tr: 'Yeni Fransız arkadaşına kısa bir mesaj yaz (40–50 kelime): kendini tanıt (ad, yaş, milliyet, şehir), aileni ve hobilerini anlat.' },
          minWords: 40,
          checklist: ['Je m’appelle… / J’ai … ans', 'Je suis + nationalité (accord !)', 'J’habite à…', 'Ma famille : mon/ma/mes…', 'J’aime + infinitif / faire du…', 'Formule de salut : Salut ! … À bientôt !'],
          model: 'Salut Lucas !\nJe m’appelle Elif, j’ai vingt-deux ans et je suis turque. J’habite à Istanbul avec mes parents et ma petite sœur. Je suis étudiante. J’aime beaucoup la musique et je fais du vélo le week-end. Et toi, qu’est-ce que tu aimes ?\nÀ bientôt,\nElif'
        } }
      ]
    }
  ]
};
