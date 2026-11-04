/* A2 — aligned with the progression of "Le Nouveau Taxi! 2" (Hachette).
   All texts and exercises are original; they follow the same CEFR A2 topics. */
window.FE_CONTENT = window.FE_CONTENT || {};
window.FE_CONTENT.A2 = {
  level: 'A2',
  book: 'Le Nouveau Taxi! 2',
  color: '#2c5f8a',
  intro: {
    en: 'Tell stories in the past, describe how things used to be, make plans, compare, give advice and avoid repetition with pronouns.',
    tr: 'Geçmişte olanları anlatma, eskiden nasıl olduğunu betimleme, plan yapma, karşılaştırma, tavsiye verme ve zamirlerle tekrardan kaçınma.'
  },
  units: [
    {
      id: 'A2-1', title: 'Souvenirs de voyage',
      theme: { en: 'Passé composé with avoir and être', tr: 'avoir ve être ile passé composé' },
      grammar: {
        title: 'Le passé composé',
        en: '<p>Passé composé = <b>avoir/être</b> (present) + past participle. Most verbs use <b>avoir</b>: <i>j’ai mangé, nous avons fini, ils ont pris</i>.</p><p><b>Être</b> is used with ~15 movement verbs (aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, retourner, devenir, passer) and all reflexive verbs. With être, the participle agrees with the subject: <i>elle est partie, ils sont arrivés, nous nous sommes levé(e)s</i>.</p><p>Irregular participles: fait, pris, vu, eu, été, bu, lu, mis, dit, écrit, venu, né.</p>',
        tr: '<p>Passé composé = <b>avoir/être</b> (şimdiki) + geçmiş zaman ortacı. Çoğu fiil <b>avoir</b> alır: <i>j’ai mangé, nous avons fini, ils ont pris</i>.</p><p><b>Être</b> yaklaşık 15 hareket fiiliyle (aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber…) ve tüm dönüşlü fiillerle kullanılır. Être ile ortaç özneye uyar: <i>elle est partie, ils sont arrivés</i>.</p><p>Düzensiz ortaçlar: fait, pris, vu, eu, été, bu, lu, mis, dit, écrit, venu, né.</p>',
        examples: ['L’été dernier, nous sommes allés en Bretagne.', 'Elle a visité trois musées.', 'Ils se sont promenés sur la plage.']
      },
      vocab: [
        ['le voyage', 'seyahat', 'trip'], ['la valise', 'bavul', 'suitcase'], ['le billet', 'bilet', 'ticket'],
        ['réserver', 'rezervasyon yapmak', 'to book'], ['l’hôtel (m)', 'otel', 'hotel'], ['l’année dernière', 'geçen yıl', 'last year'],
        ['il y a deux jours', 'iki gün önce', 'two days ago'], ['découvrir', 'keşfetmek', 'to discover'],
        ['le paysage', 'manzara', 'landscape'], ['rentrer', 'dönmek (eve)', 'to come back home']
      ],
      quiz: [
        { t: 'mcq', q: 'Hier, nous ___ au cinéma.', o: ['avons allé', 'sommes allés', 'sommes allé', 'avons allés'], a: 1, x: { en: 'aller → être; agreement with nous (plural).', tr: 'aller → être; nous ile uyum (çoğul).' } },
        { t: 'mcq', q: 'Elle ___ un bon livre.', o: ['est lue', 'a lu', 'a lit', 'est lu'], a: 1, x: { en: 'lire → avoir + lu.', tr: 'lire → avoir + lu.' } },
        { t: 'fill', q: 'Marie ___ à 8 heures.', h: '(partir, passé composé)', a: ['est partie'], x: { en: 'partir → être, feminine → partie.', tr: 'partir → être, dişil → partie.' } },
        { t: 'fill', q: 'Ils ___ un taxi.', h: '(prendre, passé composé)', a: ['ont pris'], x: { en: 'prendre → pris.', tr: 'prendre → pris.' } },
        { t: 'mcq', q: 'Nous nous ___ tôt.', o: ['avons levé', 'sommes levés', 'sommes lever', 'avons levés'], a: 1, x: { en: 'Reflexive → être + agreement.', tr: 'Dönüşlü → être + uyum.' } },
        { t: 'mcq', q: 'Je n’___ pas ___ ce film.', o: ['ai / vu', 'suis / vu', 'ai / voir', 'ai / vue'], a: 0, x: { en: 'ne + auxiliary + pas + participle.', tr: 'ne + yardımcı fiil + pas + ortaç.' } },
        { t: 'listen', say: 'Le week-end dernier, je suis allée à Bordeaux et j’ai goûté le vin local.', o: ['She went to Bordeaux and tasted wine', 'She will go to Bordeaux', 'She lives in Bordeaux', 'She went to Burgundy'], a: 0, x: { en: 'suis allée = went (feminine speaker).', tr: 'suis allée = gitti (kadın konuşmacı).' } },
        { t: 'order', w: 'Ils sont arrivés à l’hôtel très tard.', x: { en: 'arriver → être + agreement (-s).', tr: 'arriver → être + uyum (-s).' } }
      ]
    },
    {
      id: 'A2-2', title: 'Quand j’étais petit',
      theme: { en: 'Imparfait: habits and descriptions in the past', tr: 'Imparfait: geçmişteki alışkanlıklar ve betimlemeler' },
      grammar: {
        title: 'L’imparfait & imparfait vs passé composé',
        en: '<p>Form: take the <b>nous</b> form of the present, remove <i>-ons</i>, add <b>-ais, -ais, -ait, -ions, -iez, -aient</b>: nous finiss-ons → je finiss<b>ais</b>. Only exception: être → <b>ét</b>- (j’étais).</p><p>Use the <b>imparfait</b> for descriptions, background, habits (<i>tous les jours, souvent, avant</i>). Use the <b>passé composé</b> for a completed event that interrupts or moves the story forward.</p><p><i>Il <b>pleuvait</b> (background) quand je <b>suis sorti</b> (event).</i></p>',
        tr: '<p>Kuruluş: şimdiki zamanın <b>nous</b> hâlini al, <i>-ons</i>’u at, <b>-ais, -ais, -ait, -ions, -iez, -aient</b> ekle: nous finiss-ons → je finiss<b>ais</b>. Tek istisna: être → <b>ét</b>- (j’étais).</p><p><b>Imparfait</b>: betimleme, arka plan, alışkanlık (<i>tous les jours, souvent, avant</i>). <b>Passé composé</b>: tamamlanmış, hikâyeyi ilerleten veya araya giren olay.</p><p><i>Il <b>pleuvait</b> (arka plan) quand je <b>suis sorti</b> (olay).</i></p>',
        examples: ['Quand j’étais petite, j’habitais à la campagne.', 'Tous les étés, nous allions chez ma grand-mère.', 'Je dormais quand le téléphone a sonné.']
      },
      vocab: [
        ['l’enfance (f)', 'çocukluk', 'childhood'], ['autrefois', 'eskiden', 'in the past'], ['avant', 'önceden', 'before'],
        ['souvent', 'sık sık', 'often'], ['d’habitude', 'genellikle', 'usually'], ['la campagne', 'kırsal', 'countryside'],
        ['le quartier', 'mahalle', 'neighbourhood'], ['se souvenir de', 'hatırlamak', 'to remember'],
        ['grandir', 'büyümek', 'to grow up'], ['tous les jours', 'her gün', 'every day']
      ],
      quiz: [
        { t: 'mcq', q: 'Quand j’___ enfant, j’adorais les bonbons.', o: ['ai été', 'étais', 'était', 'suis'], a: 1, x: { en: 'Description in the past → imparfait.', tr: 'Geçmişte betimleme → imparfait.' } },
        { t: 'fill', q: 'Nous ___ au parc tous les dimanches.', h: '(aller, imparfait)', a: ['allions'], x: { en: 'nous allons → all- + ions.', tr: 'nous allons → all- + ions.' } },
        { t: 'fill', q: 'Ils ___ beaucoup de devoirs.', h: '(faire, imparfait)', a: ['faisaient'], x: { en: 'nous faisons → fais- + aient.', tr: 'nous faisons → fais- + aient.' } },
        { t: 'mcq', q: 'Je regardais la télé quand mon frère ___.', o: ['arrivait', 'est arrivé', 'arrive', 'arrivera'], a: 1, x: { en: 'Interrupting event → passé composé.', tr: 'Araya giren olay → passé composé.' } },
        { t: 'mcq', q: 'Hier, il ___ froid et il neigeait.', o: ['a fait', 'faisait', 'fait', 'fera'], a: 1, x: { en: 'Weather/background → imparfait.', tr: 'Hava/arka plan → imparfait.' } },
        { t: 'mcq', q: 'Which signals a habit?', o: ['soudain', 'un jour', 'chaque été', 'tout à coup'], a: 2, x: { en: 'chaque été = every summer → imparfait.', tr: 'chaque été = her yaz → imparfait.' } },
        { t: 'listen', say: 'Avant, je prenais le bus, mais maintenant je vais au travail à vélo.', o: ['Used to take the bus, now cycles', 'Used to cycle, now takes the bus', 'Always takes the bus', 'Walks to work'], a: 0, x: { en: 'Avant + imparfait = used to.', tr: 'Avant + imparfait = eskiden ...rdı.' } },
        { t: 'dict', say: 'Quand il était jeune, il jouait au football.', x: { en: 'était / jouait: -ait ending.', tr: 'était / jouait: -ait eki.' } }
      ]
    },
    {
      id: 'A2-3', title: 'Projets d’avenir',
      theme: { en: 'Future tense, plans and predictions', tr: 'Gelecek zaman, planlar ve tahminler' },
      grammar: {
        title: 'Le futur simple',
        en: '<p>Infinitive + <b>-ai, -as, -a, -ons, -ez, -ont</b>: <i>je parler<b>ai</b>, nous finir<b>ons</b></i>. Verbs in -re drop the -e: <i>je prendr<b>ai</b></i>.</p><p>Irregular stems: être → <b>ser-</b>, avoir → <b>aur-</b>, aller → <b>ir-</b>, faire → <b>fer-</b>, venir → <b>viendr-</b>, pouvoir → <b>pourr-</b>, vouloir → <b>voudr-</b>, voir → <b>verr-</b>, devoir → <b>devr-</b>, savoir → <b>saur-</b>.</p><p>After <b>quand</b> referring to the future, French uses the future: <i>Quand j’<b>aurai</b> 30 ans, je <b>voyagerai</b>.</i></p>',
        tr: '<p>Mastar + <b>-ai, -as, -a, -ons, -ez, -ont</b>: <i>je parler<b>ai</b>, nous finir<b>ons</b></i>. -re fiilleri -e’yi düşürür: <i>je prendr<b>ai</b></i>.</p><p>Düzensiz kökler: être → <b>ser-</b>, avoir → <b>aur-</b>, aller → <b>ir-</b>, faire → <b>fer-</b>, venir → <b>viendr-</b>, pouvoir → <b>pourr-</b>, vouloir → <b>voudr-</b>, voir → <b>verr-</b>, devoir → <b>devr-</b>.</p><p>Gelecekten söz eden <b>quand</b>’dan sonra gelecek zaman kullanılır: <i>Quand j’<b>aurai</b> 30 ans, je <b>voyagerai</b>.</i></p>',
        examples: ['L’année prochaine, je ferai un stage à Paris.', 'Demain, il fera beau.', 'Quand tu viendras, on ira au musée.']
      },
      vocab: [
        ['l’avenir (m)', 'gelecek', 'the future'], ['le projet', 'proje, plan', 'plan / project'], ['le métier', 'meslek', 'job'],
        ['un stage', 'staj', 'internship'], ['déménager', 'taşınmak', 'to move house'], ['réussir', 'başarmak', 'to succeed'],
        ['l’année prochaine', 'gelecek yıl', 'next year'], ['un jour', 'bir gün', 'one day'],
        ['espérer', 'ummak', 'to hope'], ['le rêve', 'hayal', 'dream']
      ],
      quiz: [
        { t: 'mcq', q: 'L’an prochain, nous ___ au Canada.', o: ['irons', 'allerons', 'allons aller', 'irions'], a: 0, x: { en: 'aller → ir-.', tr: 'aller → ir-.' } },
        { t: 'fill', q: 'Tu ___ médecin un jour.', h: '(être, futur)', a: ['seras'], x: { en: 'être → ser- + as.', tr: 'être → ser- + as.' } },
        { t: 'fill', q: 'Ils ___ beaucoup d’argent.', h: '(avoir, futur)', a: ['auront'], x: { en: 'avoir → aur- + ont.', tr: 'avoir → aur- + ont.' } },
        { t: 'mcq', q: 'Quand tu ___ à Paris, appelle-moi.', o: ['arrives', 'arriveras', 'arrivais', 'es arrivé'], a: 1, x: { en: 'quand + future meaning → futur.', tr: 'gelecek anlamlı quand → futur.' } },
        { t: 'mcq', q: 'Je ___ mon train demain matin.', o: ['prenderai', 'prendrai', 'prendai', 'prenais'], a: 1, x: { en: '-re verbs drop the final e: prendr-.', tr: '-re fiilleri son e’yi düşürür: prendr-.' } },
        { t: 'mcq', q: 'Vous ___ venir samedi ?', o: ['pourrez', 'pouvrez', 'pouverez', 'pourez'], a: 0, x: { en: 'pouvoir → pourr- (double r).', tr: 'pouvoir → pourr- (çift r).' } },
        { t: 'listen', say: 'Dans cinq ans, j’habiterai à la mer et j’aurai un chien.', o: ['By the sea with a dog, in 5 years', 'In the mountains with a cat', 'By the sea now', 'In Paris with a dog'], a: 0, x: { en: 'habiterai / aurai = future.', tr: 'habiterai / aurai = gelecek.' } },
        { t: 'order', w: 'Demain, il fera beau dans le sud.', x: { en: 'faire → fer- + a.', tr: 'faire → fer- + a.' } }
      ]
    },
    {
      id: 'A2-4', title: 'Comparer',
      theme: { en: 'Comparisons, superlatives, city vs countryside', tr: 'Karşılaştırma, üstünlük, şehir ve kırsal' },
      grammar: {
        title: 'Le comparatif & le superlatif',
        en: '<p>Adjectives: <b>plus / moins / aussi</b> + adj + <b>que</b>: <i>Paris est plus grand que Lyon.</i></p><p>Nouns: <b>plus de / moins de / autant de</b> + noun + que: <i>Il y a plus de bruit en ville.</i> Verbs: verb + <b>plus / moins / autant</b> que.</p><p>Irregular: bon → <b>meilleur</b> (le meilleur), bien → <b>mieux</b> (le mieux). Never say “plus bon”.</p><p>Superlative: <b>le/la/les plus/moins</b> + adj (+ <b>de</b>): <i>la ville la plus belle du monde</i>.</p>',
        tr: '<p>Sıfatlar: <b>plus / moins / aussi</b> + sıfat + <b>que</b>: <i>Paris est plus grand que Lyon.</i></p><p>İsimler: <b>plus de / moins de / autant de</b> + isim + que. Fiiller: fiil + <b>plus / moins / autant</b> que.</p><p>Düzensiz: bon → <b>meilleur</b>, bien → <b>mieux</b>. “plus bon” denmez.</p><p>Üstünlük: <b>le/la/les plus/moins</b> + sıfat (+ <b>de</b>): <i>la ville la plus belle du monde</i>.</p>',
        examples: ['La vie à la campagne est moins stressante que la vie en ville.', 'Ce gâteau est meilleur que l’autre.', 'C’est le musée le plus visité de France.']
      },
      vocab: [
        ['la ville', 'şehir', 'city'], ['le bruit', 'gürültü', 'noise'], ['calme', 'sakin', 'quiet'], ['pollué(e)', 'kirli (hava)', 'polluted'],
        ['le loyer', 'kira', 'rent'], ['les transports (m)', 'ulaşım', 'transport'], ['meilleur(e)', 'daha iyi', 'better'],
        ['mieux', 'daha iyi (zarf)', 'better (adverb)'], ['pire', 'daha kötü', 'worse'], ['l’avantage (m)', 'avantaj', 'advantage']
      ],
      quiz: [
        { t: 'mcq', q: 'Le TGV est ___ rapide ___ le bus.', o: ['plus / que', 'plus / de', 'autant / que', 'si / que'], a: 0, x: { en: 'plus + adj + que.', tr: 'plus + sıfat + que.' } },
        { t: 'mcq', q: 'Ce restaurant est ___ que l’autre.', o: ['plus bon', 'meilleur', 'mieux', 'plus bien'], a: 1, x: { en: 'bon → meilleur.', tr: 'bon → meilleur.' } },
        { t: 'mcq', q: 'Elle chante ___ que moi.', o: ['meilleur', 'mieux', 'plus bonne', 'meilleure'], a: 1, x: { en: 'Adverb (chante bien) → mieux.', tr: 'Zarf (bien) → mieux.' } },
        { t: 'fill', q: 'Il y a ___ touristes à Paris qu’à Lille. (more)', a: ['plus de'], x: { en: 'Noun → plus de.', tr: 'İsim → plus de.' } },
        { t: 'fill', q: 'C’est la tour la plus haute ___ la ville.', a: ['de'], x: { en: 'Superlative + de.', tr: 'Üstünlük + de.' } },
        { t: 'mcq', q: 'Marc travaille ___ que Paul. (as much)', o: ['aussi', 'autant', 'autant de', 'si'], a: 1, x: { en: 'Verb + autant que.', tr: 'Fiil + autant que.' } },
        { t: 'listen', say: 'À la campagne, les loyers sont moins chers, mais il y a moins de transports.', o: ['Cheaper rent, fewer transport options', 'More expensive rent, more transport', 'Cheaper rent, more transport', 'Same rent'], a: 0, x: { en: 'moins chers / moins de transports.', tr: 'moins chers / moins de transports.' } },
        { t: 'order', w: 'C’est le meilleur film de l’année.', x: { en: 'le meilleur + noun + de.', tr: 'le meilleur + isim + de.' } }
      ]
    },
    {
      id: 'A2-5', title: 'Les pronoms',
      theme: { en: 'Object pronouns (COD/COI), y and en', tr: 'Nesne zamirleri (COD/COI), y ve en' },
      grammar: {
        title: 'COD, COI, y & en',
        en: '<p><b>COD</b> (direct object): me, te, <b>le, la, l’</b>, nous, vous, <b>les</b> — <i>Je regarde le film → Je <b>le</b> regarde.</i></p><p><b>COI</b> (à + person): me, te, <b>lui</b>, nous, vous, <b>leur</b> — <i>Je parle à Marie → Je <b>lui</b> parle.</i></p><p><b>y</b> replaces à + place/thing: <i>Tu vas à Rome ? — Oui, j’<b>y</b> vais.</i> <b>en</b> replaces de + noun or a quantity: <i>Tu veux du café ? — Oui, j’<b>en</b> veux. J’<b>en</b> ai deux.</i></p><p>Position: before the conjugated verb, or before the infinitive: <i>Je vais <b>le</b> voir.</i></p>',
        tr: '<p><b>COD</b> (doğrudan nesne): me, te, <b>le, la, l’</b>, nous, vous, <b>les</b> — <i>Je regarde le film → Je <b>le</b> regarde.</i></p><p><b>COI</b> (à + kişi): me, te, <b>lui</b>, nous, vous, <b>leur</b> — <i>Je parle à Marie → Je <b>lui</b> parle.</i></p><p><b>y</b>: à + yer/şey yerine. <b>en</b>: de + isim veya miktar yerine: <i>J’<b>en</b> ai deux.</i></p><p>Konum: çekimli fiilden önce, mastar varsa mastardan önce: <i>Je vais <b>le</b> voir.</i></p>',
        examples: ['Tu connais Léa ? — Oui, je la connais bien.', 'J’ai téléphoné à mes parents. Je leur ai téléphoné.', 'Des pommes ? J’en ai acheté trois.']
      },
      vocab: [
        ['téléphoner à', 'telefon etmek', 'to call'], ['offrir', 'hediye etmek', 'to offer / give'], ['prêter', 'ödünç vermek', 'to lend'],
        ['répondre à', 'cevap vermek', 'to answer'], ['connaître', 'tanımak, bilmek', 'to know (someone)'], ['envoyer', 'göndermek', 'to send'],
        ['le cadeau', 'hediye', 'gift'], ['le message', 'mesaj', 'message'], ['emprunter', 'ödünç almak', 'to borrow'], ['rendre', 'geri vermek', 'to give back']
      ],
      quiz: [
        { t: 'mcq', q: 'Tu aimes cette chanson ? — Oui, je ___ adore.', o: ['la', 'l’', 'lui', 'le'], a: 1, x: { en: 'COD feminine before a vowel → l’.', tr: 'Ünlüden önce dişil COD → l’.' } },
        { t: 'mcq', q: 'Tu écris à tes grands-parents ? — Oui, je ___ écris.', o: ['les', 'leur', 'lui', 'y'], a: 1, x: { en: 'écrire à + people (pl) → leur.', tr: 'écrire à + kişiler → leur.' } },
        { t: 'mcq', q: 'Vous allez à la piscine ? — Oui, nous ___ allons.', o: ['en', 'y', 'la', 'lui'], a: 1, x: { en: 'à + place → y.', tr: 'à + yer → y.' } },
        { t: 'mcq', q: 'Tu as des frères ? — Oui, j’___ ai deux.', o: ['y', 'les', 'en', 'leur'], a: 2, x: { en: 'Quantity → en.', tr: 'Miktar → en.' } },
        { t: 'fill', q: 'Je vais ___ appeler ce soir. (Paul)', a: ['l’', "l'"], x: { en: 'COD masculine before vowel → l’, before the infinitive.', tr: 'Mastardan önce, ünlü önünde → l’.' } },
        { t: 'fill', q: 'Tu as parlé à Sophie ? — Oui, je ___ ai parlé.', a: ['lui'], x: { en: 'parler à + person → lui.', tr: 'parler à + kişi → lui.' } },
        { t: 'listen', say: 'Le livre de Marc ? Je le lui ai rendu hier.', o: ['I gave Marc’s book back to him yesterday', 'I lent Marc a book', 'Marc gave me his book', 'I will return the book tomorrow'], a: 0, x: { en: 'le (the book) + lui (to him).', tr: 'le (kitap) + lui (ona).' } },
        { t: 'order', w: 'Je ne les ai pas vus.', x: { en: 'ne + pronoun + auxiliary + pas + participle (agreement with les).', tr: 'ne + zamir + yardımcı fiil + pas + ortaç.' } }
      ]
    },
    {
      id: 'A2-6', title: 'Conseils & politesse',
      theme: { en: 'Imperative, il faut, devoir, polite conditional', tr: 'Emir kipi, il faut, devoir, kibarlık için şart kipi' },
      grammar: {
        title: 'L’impératif, l’obligation & le conditionnel de politesse',
        en: '<p><b>Imperative</b>: tu / nous / vous forms without subject. -er verbs drop the -s with tu: <i>Mange ! Mangeons ! Mangez !</i> Irregular: sois, aie, va, sache.</p><p>Pronouns follow the verb with a hyphen in the affirmative: <i>Prends-<b>le</b> ! Donne-<b>moi</b> !</i> but come before in the negative: <i>Ne <b>le</b> prends pas.</i></p><p>Obligation/advice: <b>il faut</b> + infinitive, <b>devoir</b> (je dois…), <b>tu devrais</b> (you should).</p><p>Politeness: <i>je voudrais, pourriez-vous, j’aimerais</i> (conditionnel présent = future stem + imparfait endings).</p>',
        tr: '<p><b>Emir kipi</b>: tu / nous / vous hâlleri, öznesiz. -er fiilleri tu ile -s düşürür: <i>Mange ! Mangeons ! Mangez !</i> Düzensiz: sois, aie, va, sache.</p><p>Olumlu emirde zamir fiilden sonra ve tire ile gelir: <i>Prends-<b>le</b> ! Donne-<b>moi</b> !</i>; olumsuzda önce: <i>Ne <b>le</b> prends pas.</i></p><p>Zorunluluk/tavsiye: <b>il faut</b> + mastar, <b>devoir</b> (je dois…), <b>tu devrais</b> (…meli/malısın).</p><p>Kibarlık: <i>je voudrais, pourriez-vous, j’aimerais</i> (conditionnel = gelecek kökü + imparfait ekleri).</p>',
        examples: ['Pour être en forme, il faut dormir huit heures.', 'Tu devrais boire plus d’eau.', 'Pourriez-vous m’aider, s’il vous plaît ?']
      },
      vocab: [
        ['la santé', 'sağlık', 'health'], ['le médecin', 'doktor', 'doctor'], ['avoir mal à', '...ağrımak', 'to have a pain in'],
        ['la tête', 'baş', 'head'], ['le ventre', 'karın', 'stomach'], ['se reposer', 'dinlenmek', 'to rest'],
        ['éviter', 'kaçınmak', 'to avoid'], ['le conseil', 'tavsiye', 'advice'], ['il faut', 'gerekir', 'it is necessary'],
        ['l’ordonnance (f)', 'reçete', 'prescription']
      ],
      quiz: [
        { t: 'mcq', q: '(tu, écouter) ___ bien !', o: ['Écoutes', 'Écoute', 'Écouter', 'Tu écoutes'], a: 1, x: { en: '-er verb, tu → no -s.', tr: '-er fiili, tu → -s yok.' } },
        { t: 'mcq', q: 'Ce gâteau ? ___ !', o: ['Le goûte', 'Goûte-le', 'Goûte-lui', 'Le goûtes'], a: 1, x: { en: 'Affirmative imperative → verb-pronoun.', tr: 'Olumlu emir → fiil-zamir.' } },
        { t: 'mcq', q: '(vous, être) ___ patients !', o: ['Soyez', 'Êtes', 'Sois', 'Soyons'], a: 0, x: { en: 'être → soyez.', tr: 'être → soyez.' } },
        { t: 'fill', q: 'Tu es fatigué ? Tu ___ te reposer.', h: '(devoir, conditionnel)', a: ['devrais'], x: { en: 'tu devrais = you should.', tr: 'tu devrais = …malısın.' } },
        { t: 'fill', q: '___ -vous m’indiquer la gare ?', h: '(pouvoir, conditionnel)', a: ['pourriez'], x: { en: 'pourr- + iez.', tr: 'pourr- + iez.' } },
        { t: 'mcq', q: 'J’ai mal ___ tête.', o: ['à la', 'au', 'de la', 'la'], a: 0, x: { en: 'avoir mal à la tête.', tr: 'avoir mal à la tête = başım ağrıyor.' } },
        { t: 'listen', say: 'Pour bien dormir, il ne faut pas boire de café le soir.', o: ['Don’t drink coffee in the evening', 'Drink coffee in the evening', 'Sleep in the afternoon', 'Drink tea in the morning'], a: 0, x: { en: 'il ne faut pas = you must not.', tr: 'il ne faut pas = …mamalı.' } },
        { t: 'order', w: 'Ne lui donne pas ton numéro.', x: { en: 'Negative imperative → pronoun before verb.', tr: 'Olumsuz emir → zamir fiilden önce.' } }
      ]
    }
  ],
  exams: [
    {
      id: 'A2-EX1', title: 'Examen blanc A2 — DELF style', minutes: 60,
      sections: [
        { key: 'co', name: { en: 'Listening', tr: 'Dinleme' }, items: [
          { t: 'listen', say: 'Attention, le train numéro 6214 à destination de Nantes partira avec vingt minutes de retard.', o: ['Train to Nantes delayed 20 min', 'Train to Nantes cancelled', 'Train to Nice delayed 20 min', 'Train leaves 20 min early'], a: 0 },
          { t: 'listen', say: 'Allô Julien, c’est Sarah. Le rendez-vous de demain est déplacé à jeudi, même heure.', o: ['Meeting moved to Thursday, same time', 'Meeting cancelled', 'Meeting moved to tomorrow', 'Meeting moved to Tuesday'], a: 0 },
          { t: 'listen', say: 'Quand j’étais jeune, je passais toutes mes vacances chez mes grands-parents à la montagne.', o: ['Holidays in the mountains with grandparents', 'Holidays at the sea', 'Lives with grandparents now', 'Went once to the mountains'], a: 0 },
          { t: 'listen', say: 'Le musée sera fermé lundi, mais il ouvrira exceptionnellement mardi soir jusqu’à vingt-deux heures.', o: ['Closed Monday, open Tuesday until 10 pm', 'Closed Tuesday', 'Open Monday until 10 pm', 'Closed all week'], a: 0 },
          { t: 'dict', say: 'Nous sommes partis en vacances la semaine dernière.' }
        ] },
        { key: 'ce', name: { en: 'Reading', tr: 'Okuma' }, text: 'Petite annonce — Colocation à Montpellier\nNous sommes deux étudiants (Hugo, 23 ans, et Nadia, 24 ans) et nous cherchons une troisième personne pour partager notre appartement de 80 m² dans le centre-ville, à cinq minutes à pied du tramway. La chambre est libre à partir du 1er septembre. Le loyer est de 420 € par mois, charges comprises. Nous sommes calmes, mais nous aimons cuisiner ensemble le week-end. Les animaux ne sont pas acceptés et il est interdit de fumer dans l’appartement. Si vous êtes intéressé(e), envoyez-nous un message avant le 15 août.', items: [
          { t: 'mcq', q: 'What are Hugo and Nadia looking for?', o: ['An apartment', 'A third flatmate', 'A job', 'A cat'], a: 1 },
          { t: 'mcq', q: 'Where is the apartment?', o: ['Outside the city', 'City centre near the tram', 'Next to the university', 'Near the beach'], a: 1 },
          { t: 'mcq', q: 'The rent of 420 €…', o: ['does not include bills', 'includes bills', 'is per week', 'is for the whole apartment'], a: 1 },
          { t: 'mcq', q: 'Which is NOT allowed?', o: ['Cooking', 'Smoking', 'Studying', 'Having friends over'], a: 1 },
          { t: 'mcq', q: 'Deadline to send a message:', o: ['1 September', '15 August', '15 September', '1 August'], a: 1 }
        ] },
        { key: 'gv', name: { en: 'Grammar & vocabulary', tr: 'Dilbilgisi ve kelime' }, items: [
          { t: 'mcq', q: 'Elles ___ à Rome l’été dernier.', o: ['ont allé', 'sont allées', 'sont allé', 'allaient'], a: 1 },
          { t: 'mcq', q: 'Quand j’étais petit, je ___ souvent à la plage.', o: ['suis allé', 'allais', 'irai', 'vais'], a: 1 },
          { t: 'mcq', q: 'L’année prochaine, nous ___ en Espagne.', o: ['allerons', 'irons', 'irions', 'allions'], a: 1 },
          { t: 'mcq', q: 'Ce film est ___ que le livre.', o: ['plus bon', 'mieux', 'meilleur', 'bon'], a: 2 },
          { t: 'mcq', q: 'Tu parles à ton professeur ? — Oui, je ___ parle.', o: ['le', 'lui', 'leur', 'y'], a: 1 },
          { t: 'mcq', q: 'Du pain ? Oui, j’___ ai acheté.', o: ['y', 'le', 'en', 'lui'], a: 2 },
          { t: 'fill', q: 'Tu ___ faire du sport. (should)', h: '(devoir)', a: ['devrais'] },
          { t: 'fill', q: 'Il ___ quand je suis arrivé.', h: '(dormir, imparfait)', a: ['dormait'] }
        ] },
        { key: 'pe', name: { en: 'Writing', tr: 'Yazma' }, writing: {
          prompt: { en: 'You spent a weekend in a French city. Write an email (60–80 words) to a friend: say where you went, what you did, what the weather was like and how you felt.', tr: 'Bir Fransız şehrinde hafta sonu geçirdin. Bir arkadaşına e-posta yaz (60–80 kelime): nereye gittiğini, ne yaptığını, havanın nasıl olduğunu ve neler hissettiğini anlat.' },
          minWords: 60,
          checklist: ['Passé composé for events (je suis allé(e), j’ai visité…)', 'Imparfait for description (il faisait…, c’était…)', 'Agreement with être (allée, partis…)', 'Connectors: d’abord, ensuite, puis, enfin', 'Opening and closing (Cher/Chère…, Bises)'],
          model: 'Chère Camille,\nLe week-end dernier, je suis allée à Strasbourg avec ma cousine. Il faisait froid mais le ciel était bleu. D’abord, nous avons visité la cathédrale, ensuite nous nous sommes promenées dans la Petite France. Le soir, nous avons mangé une tarte flambée délicieuse. C’était vraiment génial et je voudrais y retourner à Noël pour le marché. Et toi, tu as passé un bon week-end ?\nBises,\nZeynep'
        } }
      ]
    }
  ]
};
