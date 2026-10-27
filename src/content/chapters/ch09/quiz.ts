import type { Question } from '../../types';
import { tr } from '../../../lib/lang';

const C = 9;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch09.qq.1", "Comparative advantage", "The country of Autarka does not allow international trade. In Autarka, a wool suit costs 3 ounces of gold, while in neighboring countries the same suit costs 2 ounces. This suggests that", [
    { text: "Autarka has a comparative advantage in producing suits and would become a suit exporter if it opened up trade.", why: tr("Ichki narx yuqori — imkoniyat xarajati yuqori: comparative advantage **yo'q**.", 'The domestic price is high — the opportunity cost is high: there is **no** comparative advantage.') },
    { text: "Autarka has a comparative advantage in producing suits and would become a suit importer if it opened up trade.", why: tr("Comparative advantage bo'lsa, eksport qilardi; bu yerda ikkalasi ham noto'g'ri.", 'With a comparative advantage it would export; here both are wrong.') },
    { text: "Autarka does not have a comparative advantage in producing suits and would become a suit exporter if it opened up trade.", why: tr("Jahon narxi pastroq — Autarkada sotish uchun kelishadi, eksport emas, import.", 'The world price is lower — others come to sell in Autarka: imports, not exports.') },
    { text: "Autarka does not have a comparative advantage in producing suits and would become a suit importer if it opened up trade.", correct: true, why: tr("\\(P_W = 2 < P_D = 3\\): boshqalar arzonroq ishlab chiqaradi → Autarka import qiladi.", '\\(P_W = 2 < P_D = 3\\): others produce more cheaply → Autarka imports.') },
  ]),
  mk("ch09.qq.2", tr("Eksportchi", 'Exporter'), "The nation of Openia allows free trade and exports steel. If steel exports were prohibited, the price of steel in Openia would be ________, benefiting steel ________.", [
    { text: "higher; consumers", why: tr("Eksport taqiqlansa, ortiqcha po'lat ichkarida sotiladi — narx **tushadi**.", 'If exports are banned, the surplus steel is sold at home — the price **falls**.') },
    { text: "lower; consumers", correct: true, why: tr("Eksportchida jahon narxi ichki narxdan yuqori; taqiq narxni savdosiz darajaga tushiradi — iste'molchilar yutadi.", 'In an exporting country the world price is above the domestic price; the ban lowers the price to the no-trade level — consumers gain.') },
    { text: "higher; producers", why: tr("Narx tushadi, ishlab chiqaruvchilar yutqazadi.", 'The price falls; producers lose.') },
    { text: "lower; producers", why: tr("Past narx ishlab chiqaruvchilarga zarar.", 'A low price hurts producers.') },
  ]),
  mk("ch09.qq.3", tr("Importchi", 'Importer'), "When the nation of Ectenia opens to world trade in coffee beans, the domestic price **falls**. Which describes the situation?", [
    { text: "Domestic production of coffee rises, and Ectenia becomes a coffee importer.", why: tr("Narx tushsa, ichki ishlab chiqarish **kamayadi** (taklif bo'ylab).", 'If the price falls, domestic production **falls** (along supply).') },
    { text: "Domestic production of coffee rises, and Ectenia becomes a coffee exporter.", why: tr("Narx tushishi — import belgisi.", 'A falling price is the sign of an importer.') },
    { text: "Domestic production of coffee falls, and Ectenia becomes a coffee importer.", correct: true, why: tr("Jahon narxi past → ichki ishlab chiqarish ↓, iste'mol ↑, farq import qilinadi.", 'Low world price → domestic production ↓, consumption ↑, the difference is imported.') },
    { text: "Domestic production of coffee falls, and Ectenia becomes a coffee exporter.", why: tr("Ishlab chiqarish kamaysa va iste'mol oshsa — eksport emas.", "If production falls and consumption rises — it isn't exporting.") },
  ]),
  mk("ch09.qq.4", tr("Importchi farovonligi", 'Importer welfare'), "When a nation opens to trade in a good and becomes an importer,", [
    { text: "producer surplus decreases, but consumer surplus and total surplus both increase.", correct: true, why: "CS +(B + D), PS −B, TS +D." },
    { text: "producer surplus decreases, but consumer surplus increases, so the impact on total surplus is ambiguous.", why: tr("Ambiguous emas: iste'molchilar yutug'i (B + D) ishlab chiqaruvchilar yo'qotishidan (B) har doim katta.", "Not ambiguous: consumers' gain (B + D) always exceeds producers' loss (B).") },
    { text: "producer surplus and total surplus increase, but consumer surplus decreases.", why: tr("Bu eksportchi holati.", 'That is the exporter case.') },
    { text: "producer surplus, consumer surplus, and total surplus all increase.", why: tr("Ishlab chiqaruvchilar past narxdan yutqazadi.", 'Producers lose from the lower price.') },
  ]),
  mk("ch09.qq.5", tr("Tarif", 'Tariff'), "If a nation that imports a good imposes a tariff, it will increase", [
    { text: "the domestic quantity demanded.", why: tr("Narx oshadi → talab miqdori **kamayadi**.", 'The price rises → quantity demanded **falls**.') },
    { text: "the domestic quantity supplied.", correct: true, why: tr("Ichki narx oshadi → ichki ishlab chiqaruvchilar ko'proq taklif qiladi (Q₁ˢ → Q₂ˢ).", 'The domestic price rises → domestic producers supply more (Q₁ˢ → Q₂ˢ).') },
    { text: "the quantity imported from abroad.", why: tr("Tarif importni **kamaytiradi**.", 'A tariff **reduces** imports.') },
    { text: "the efficiency of the equilibrium.", why: tr("Tarif DWL yaratadi — samaradorlik **pasayadi**.", 'A tariff creates a DWL — efficiency **falls**.') },
  ]),
  mk("ch09.qq.6", tr("Siyosatlar", 'Policies'), "Which of the following policies would benefit producers, hurt consumers, and **increase** the amount of trade?", [
    { text: "the increase of a tariff in an importing country", why: tr("Ishlab chiqaruvchilarga foyda, iste'molchilarga zarar — lekin savdo **kamayadi**.", 'Good for producers, bad for consumers — but trade **falls**.') },
    { text: "the reduction of a tariff in an importing country", why: tr("Savdo oshadi, lekin iste'molchilar **yutadi**.", 'Trade rises, but consumers **gain**.') },
    { text: "starting to allow trade when the world price is greater than the domestic price", correct: true, why: tr("Mamlakat eksportchi bo'ladi: narx oshadi → ishlab chiqaruvchilar yutadi, iste'molchilar yutqazadi, savdo noldan oshadi.", 'The country becomes an exporter: the price rises → producers gain, consumers lose, trade rises from zero.') },
    { text: "starting to allow trade when the world price is less than the domestic price", why: tr("Importchi: iste'molchilar yutadi, ishlab chiqaruvchilar yutqazadi.", 'Importer: consumers gain, producers lose.') },
  ]),
  mk("ch09.qq.7", tr("Nohaq raqobat", 'Unfair competition'), "The nation of Lilliput imports rope from Brobdingnag, where rope producers are subsidized by the government. The most efficient policy from the standpoint of Lilliput is to", [
    { text: "continue trading at the subsidized price.", correct: true, why: tr("Arzon import Lilliput iste'molchilariga foyda — ularning yutug'i ishlab chiqaruvchilar zararidan katta. Subsidiyani Brobdingnag soliq to'lovchilari to'laydi (“thank-you note”).", "Cheap imports benefit Lilliput's consumers — their gain exceeds producers' loss. Brobdingnag's taxpayers pay the subsidy (a “thank-you note”).") },
    { text: "place a tariff on rope imports to offset the subsidy.", why: tr("Tarif Lilliputning o'zida DWL yaratadi.", 'A tariff creates a DWL in Lilliput itself.') },
    { text: "give a similar subsidy to the rope producers of Lilliput.", why: tr("Subsidiya Lilliput soliq to'lovchilariga qimmat va DWL yaratadi.", "A subsidy is costly to Lilliput's taxpayers and creates a DWL.") },
    { text: "stop trading with Brobdingnag.", why: tr("Savdodan yutuq yo'qoladi.", 'The gains from trade are lost.') },
  ]),
  mk("ch09.qq.8", tr("Savdo bitimlari", 'Trade agreements'), "The goal of multilateral trade agreements is usually to", [
    { text: "equalize the level of tariffs across nations so no nation is disadvantaged relative to others.", why: tr("Maqsad tariflarni tenglash emas, **kamaytirish**.", 'The goal is to **reduce** tariffs, not equalize them.') },
    { text: "use targeted tariffs to ensure that nations produce those goods for which they have a comparative advantage.", why: tr("Comparative advantage tariflarsiz ishlaydi.", 'Comparative advantage works without tariffs.') },
    { text: "reduce tariffs in various nations simultaneously to blunt political pressure for protectionism.", correct: true, why: tr("Bir vaqtda kamaytirish: Isoland to'qimachilari qarshi bo'lsa, eksport qiluvchi bug'doy fermerlari qo'llab-quvvatlaydi.", "Simultaneous reduction: if Isoland's textile makers oppose it, the exporting wheat farmers support it.") },
    { text: "ensure that tariffs are used only to promote infant industries that will eventually become viable.", why: tr("Kitob bu argumentga shubha bilan qaraydi.", 'The book is skeptical of this argument.') },
  ]),
];

export const checks: Record<string, Question> = {
  "s-9-1b": mk("ch09.check.9-1b", "Comparative advantage", tr("Savdosiz ichki narx jahon narxidan **past**. Bu nimani bildiradi?", 'The domestic price without trade is **below** the world price. What does this mean?'), [
    { text: tr("Mamlakat bu tovarda comparative advantage ga ega va savdo ochilsa eksport qiladi", 'The country has a comparative advantage in this good and will export it once trade opens'), correct: true, why: tr("Ichki narx — imkoniyat xarajati. Past narx — arzon ishlab chiqarish.", 'The domestic price is the opportunity cost. A low price means cheap production.') },
    { text: tr("Mamlakat import qiladi", 'The country will import'), why: tr("Import ichki narx **yuqori** bo'lganda.", 'It imports when the domestic price is **high**.') },
    { text: "Absolute advantage bor", why: tr("Narxlar solishtiruvi imkoniyat xarajatini, ya'ni **comparative** advantage ni ko'rsatadi.", 'Comparing prices reveals opportunity cost, i.e., **comparative** advantage.') },
    { text: tr("Savdo bo'lmaydi", 'There will be no trade'), why: tr("Narxlar farqi bor — savdo bo'ladi.", 'The prices differ — there will be trade.') },
  ], 'new'),
  "s-9-2a": mk("ch09.check.9-2a", tr("Eksportchi", 'Exporter'), tr("Isoland eksportchiga aylandi. Kim yutqazadi?", 'Isoland has become an exporter. Who loses?'), [
    { text: tr("Ichki iste'molchilar (CS: A + B → A)", 'Domestic consumers (CS: A + B → A)'), correct: true, why: tr("Ichki narx jahon narxigacha ko'tariladi.", 'The domestic price rises to the world price.') },
    { text: tr("Ichki ishlab chiqaruvchilar", 'Domestic producers'), why: tr("Ular yuqori narxdan yutadi (B + D).", 'They gain from the higher price (B + D).') },
    { text: tr("Butun mamlakat", 'The country as a whole'), why: tr("Mamlakat umuman D ga yutadi.", 'The country as a whole gains D.') },
    { text: "Hech kim", why: tr("Iste'molchilar B ni yo'qotadi.", 'Consumers lose B.') },
  ], 'new'),
  "s-9-2b": { id: "ch09.check.9-2b", chapter: C, kind: "numeric", source: "new", topic: tr("Importchi", 'Importer'), prompt: tr("Problem 5: futbolka $20 → $16, iste'mol 3 → 4 mln, ishlab chiqarish 3 → 1 mln. Total surplus necha **mln dollar** oshadi?", 'Problem 5: T-shirts $20 → $16; consumption 3 → 4 million, production 3 → 1 million. By how many **million dollars** does total surplus rise?'), answer: 6, tolerance: 0.01, unit: tr("mln $", '$ million'), why: tr("ΔCS = +14, ΔPS = −8 → ΔTS = +6 (= ½ · 4 · 3 — D uchburchagi).", 'ΔCS = +14, ΔPS = −8 → ΔTS = +6 (= ½ · 4 · 3 — triangle D).'), traps: [{ value: 14, why: tr("Bu faqat CS o'sishi. PS yo'qotishini ayiring.", 'That is only the rise in CS. Subtract the loss in PS.') }, { value: 22, why: tr("PS kamaydi — ayirish kerak.", 'PS fell — it must be subtracted.') }] },
  "s-9-2c": mk("ch09.check.9-2c", tr("Tarif", 'Tariff'), tr("Figure 4: tarifning sof yo'qotishi qaysi maydonlar?", "Figure 4: which areas are the tariff's deadweight loss?"), [
    { text: "D + F", correct: true, why: tr("D — ortiqcha ishlab chiqarish, F — kam iste'mol.", 'D — overproduction, F — underconsumption.') },
    { text: "E", why: tr("E — tarif tushumi (davlatga).", 'E is the tariff revenue (to the government).') },
    { text: "C", why: tr("C — ichki ishlab chiqaruvchilar yutug'i.", "C is the domestic producers' gain.") },
    { text: "C + D + E + F", why: tr("Bu iste'molchilar yo'qotishi; uning C va E qismi boshqalarga o'tadi.", "That is the consumers' loss; its parts C and E go to others.") },
  ], 'new'),
  "s-9-2e": { id: "ch09.check.9-2e", chapter: C, kind: "tf", source: "new", topic: tr("Savdo foydalari", 'Benefits of trade'), prompt: tr("Erkin savdo faqat comparative advantage orqali foyda beradi; boshqa foydalari yo'q.", 'Free trade is beneficial only through comparative advantage; it has no other benefits.'), answer: false, why: tr("Qo'shimcha foydalar: tovarlar xilma-xilligi, economies of scale, raqobat kuchayishi, unumdorlik o'sishi, g'oyalar almashinuvi.", 'Additional benefits: more variety of goods, economies of scale, more competition, higher productivity, the flow of ideas.') },
  "s-9-3": mk("ch09.check.9-3", tr("Cheklov argumentlari", 'Arguments for restriction'), tr("“Savdo ish o'rinlarini yo'q qiladi” argumentiga iqtisodchilar qanday javob beradi?", 'How do economists respond to the argument that “trade destroys jobs”?'), [
    { text: tr("Savdo eski ish o'rinlarini yo'q qilib, comparative advantage sohalarida yangilarini yaratadi; mamlakat umuman boyiydi", 'Trade destroys some old jobs but creates new ones in industries with a comparative advantage; the country as a whole becomes richer'), correct: true, why: tr("Import uchun to'langan pul boshqa mamlakatlarga bizning tovarlarimizni sotib olish imkonini beradi. Muammo — o'tish davri, uni ijtimoiy himoya yumshatadi.", 'The money paid for imports lets other countries buy our goods. The problem is the transition, which a social safety net can soften.') },
    { text: tr("Savdo hech qachon ish o'rnini yo'q qilmaydi", 'Trade never destroys jobs'), why: tr("Kitob tan oladi: to'qimachilik kabi sohalarda ishsizlik bo'ladi.", 'The book admits that industries like textiles will see job losses.') },
    { text: tr("Hamma narsani chet elda arzonroq ishlab chiqarish mumkin bo'lsa, savdo zarar", 'If everything can be produced more cheaply abroad, trade is harmful'), why: tr("Yutuqlar absolute emas, comparative advantage ga asoslanadi.", 'The gains are based on comparative, not absolute, advantage.') },
    { text: tr("Tariflar ish o'rinlarini saqlashning eng yaxshi yo'li", 'Tariffs are the best way to save jobs'), why: tr("Tariflar DWL yaratadi va iste'molchilarga qimmatga tushadi.", 'Tariffs create a DWL and are costly to consumers.') },
  ], 'new'),
};

export const practice: Question[] = [
  { id: "ch09.new.tv-cs", chapter: C, kind: "numeric", source: "new", topic: tr("Importchi", 'Importer'), prompt: tr("Problem 9b: televizor $100 arzonladi; iste'mol 1 mln → 1.2 mln, ichki ishlab chiqarish 400k → 200k. Consumer surplus necha **mln dollar** oshadi?", 'Problem 9b: TVs became $100 cheaper; consumption 1 million → 1.2 million, domestic production 400k → 200k. By how many **million dollars** does consumer surplus rise?'), answer: 110, tolerance: 0.5, unit: tr("mln $", '$ million'), why: tr("\\(\\Delta CS = 100 \\times (1 + 1.2)/2 = 110\\) mln. PS: \\(-100 \\times (0.4 + 0.2)/2 = -30\\). TS +80.", '\\(\\Delta CS = 100 \\times (1 + 1.2)/2 = 110\\) million. PS: \\(-100 \\times (0.4 + 0.2)/2 = -30\\). TS +80.'), traps: [{ value: 100, why: tr("Faqat eski 1 mln xaridor (to'rtburchak). Yangi 200k xaridor uchburchagini qo'shing.", 'Only the original 1 million buyers (the rectangle). Add the triangle of the 200k new buyers.') }] },
  { id: "ch09.new.tv-dwl", chapter: C, kind: "numeric", source: "new", topic: tr("Tarif", 'Tariff'), prompt: tr("Problem 9c: endi $100 tarif qo'yildi (narx avvalgi holatga qaytdi). Sof yo'qotish necha **mln dollar**?", 'Problem 9c: now a $100 tariff is imposed (the price returns to its earlier level). How many **million dollars** is the deadweight loss?'), answer: 20, tolerance: 0.5, unit: tr("mln $", '$ million'), why: tr("Tushum = 100 × 600k = 60 mln. DWL = ½·100·200k + ½·100·200k = 20 mln (= 80 − 60).", 'Revenue = 100 × 600k = 60 million. DWL = ½·100·200k + ½·100·200k = 20 million (= 80 − 60).') },
  { id: "ch09.new.tf-inelastic", chapter: C, kind: "tf", source: "new", topic: tr("Egiluvchanlik", 'Elasticity'), prompt: tr("Problem 7b: importchi mamlakatda talab mutlaqo noegiluvchan bo'lsa, savdodan hech qanday yutuq bo'lmaydi.", 'Problem 7b: if demand in an importing country is perfectly inelastic, there are no gains from trade.'), answer: false, why: tr("Iste'mol o'zgarmasa ham ichki ishlab chiqarish arzonroq importga almashadi — taklif tomonidagi uchburchak yutuq bo'ladi.", "Even if consumption doesn't change, domestic production is replaced by cheaper imports — the triangle on the supply side is a gain.") },
  { id: "ch09.new.tf-consumers", chapter: C, kind: "tf", source: "new", topic: tr("Egiluvchanlik", 'Elasticity'), prompt: tr("Problem 7c: talab mutlaqo noegiluvchan bo'lsa, iste'molchilar savdodan foyda ko'rmaydi.", "Problem 7c: if demand is perfectly inelastic, consumers don't benefit from trade."), answer: false, why: tr("Ular bir xil miqdorni **arzonroq** oladi → CS oshadi.", 'They buy the same quantity **more cheaply** → CS rises.') },
  { id: "ch09.new.tf-elastic", chapter: C, kind: "tf", source: "new", topic: tr("Egiluvchanlik", 'Elasticity'), prompt: tr("Problem 7a: importchi mamlakatda talab egiluvchanligi qanchalik katta bo'lsa, savdodan yutuq shunchalik katta.", 'Problem 7a: the more elastic demand is in an importing country, the larger the gains from trade.'), answer: true, why: tr("Egiluvchan talabda past jahon narxi iste'molni ko'proq oshiradi — D uchburchagi kattaroq.", 'With elastic demand a low world price raises consumption more — triangle D is larger.') },
  mk("ch09.new.consumption-tax", tr("Tarif va soliq", 'Tariff vs. tax'), tr("Problem 8: tarif o'rniga xuddi shu miqdorda **iste'mol solig'i** (ichki va import tovarlarga). Qaysi gap to'g'ri?", 'Problem 8: instead of a tariff, a **consumption tax** of the same size (on domestic and imported goods). Which statement is correct?'), [
    { text: tr("Iste'mol soliqi ko'proq tushum (C + D + E) va kamroq DWL (faqat F) beradi", 'The consumption tax yields more revenue (C + D + E) and a smaller DWL (only F)'), correct: true, why: tr("Ishlab chiqaruvchilar jahon narxini oladi → ichki ishlab chiqarish o'zgarmaydi (D yo'q). Soliq barcha iste'moldan olinadi.", "Producers receive the world price → domestic production doesn't change (no D). The tax is collected on all consumption.") },
    { text: tr("Tarif ko'proq tushum beradi", 'The tariff yields more revenue'), why: tr("Tarif faqat importdan (E), iste'mol solig'i esa barcha iste'moldan.", 'The tariff is collected only on imports (E); the consumption tax on all consumption.') },
    { text: tr("Ikkalasi bir xil", 'Both are the same'), why: tr("Ishlab chiqarishga ta'siri farq qiladi.", 'Their effects on production differ.') },
    { text: tr("Iste'mol solig'i ichki ishlab chiqaruvchilarga foyda", 'The consumption tax benefits domestic producers'), why: tr("Ular jahon narxini oladi — PS o'zgarmaydi.", "They receive the world price — PS doesn't change.") },
  ], 'new'),
  mk("ch09.new.quota", tr("Import kvotasi", 'Import quota'), tr("Tarif va import kvotasining yagona farqi nima?", 'What is the only difference between a tariff and an import quota?'), [
    { text: tr("Tarif davlatga tushum (E) beradi; kvota esa E ni import litsenziyasi egalariga beradi", 'A tariff gives revenue (E) to the government; a quota gives E to the holders of import licenses'), correct: true, why: tr("Agar davlat litsenziyalarni narx farqiga teng summaga sotsa, kvota aynan tarifdek ishlaydi.", 'If the government sold the licenses for the price difference, the quota would work exactly like a tariff.') },
    { text: tr("Kvota DWL yaratmaydi", 'A quota creates no DWL'), why: tr("Kvota ham D + F yaratadi.", 'A quota also creates D + F.') },
    { text: tr("Kvota narxni tushiradi", 'A quota lowers the price'), why: tr("Kvota ham ichki narxni oshiradi.", 'A quota also raises the domestic price.') },
    { text: tr("Farq yo'q", 'There is no difference'), why: tr("E kimga tegishi farq qiladi.", 'Who receives E differs.') },
  ], 'new'),
  mk("ch09.new.infant", tr("Cheklov argumentlari", 'Arguments for restriction'), tr("Nega iqtisodchilar “infant industry” argumentiga shubha qiladi?", 'Why are economists skeptical of the “infant industry” argument?'), [
    { text: tr("Qaysi soha kelajakda raqobatbardosh bo'lishini oldindan aniqlash qiyin, siyosat kuchli lobbilarni rag'batlantiradi, “vaqtinchalik” himoya doimiy bo'lib qoladi; foydali soha himoyasiz ham vaqtinchalik zararga chiday oladi", 'It is hard to know in advance which industry will become competitive, the policy rewards powerful lobbies, and “temporary” protection becomes permanent; a profitable industry can bear temporary losses without protection'), correct: true, why: tr("Kitob ikkala e'tirozni keltiradi: amaliy (“picking winners”) va nazariy (egalari zararni o'zi ko'tarishi mumkin).", 'The book gives both objections: practical (“picking winners”) and theoretical (owners can bear the losses themselves).') },
    { text: tr("Yangi sohalar hech qachon foydali bo'lmaydi", 'New industries are never profitable'), why: tr("Bo'lishi mumkin — muammo himoya zarurligida.", 'They may be — the issue is whether protection is necessary.') },
    { text: tr("Chunki bu milliy xavfsizlik argumenti", 'Because it is the national-security argument'), why: tr("Bu alohida argument.", 'That is a separate argument.') },
    { text: tr("Shubha qilmaydi", "They aren't skeptical"), why: "Kitob: “Economists are often skeptical about such claims.”" },
  ], 'new'),
  { id: "ch09.new.match", chapter: C, kind: "match", source: "new", topic: tr("Argumentlar", 'Arguments'), prompt: tr("Savdoni cheklash argumentini iqtisodchilar javobi bilan moslashtiring.", "Match each argument for restricting trade with the economists' response."), pairs: [
    { left: "Jobs argument", right: tr("Savdo comparative advantage sohalarida yangi ish o'rinlari yaratadi", 'Trade creates new jobs in industries with a comparative advantage') },
    { left: "National-security argument", right: tr("Haqiqiy xavf bo'lsa o'rinli, lekin firmalar uni bo'rttiradi", 'Valid if the threat is real, but firms exaggerate it') },
    { left: "Infant-industry argument", right: tr("G'oliblarni tanlash qiyin, “vaqtinchalik” himoya doimiy bo'ladi", 'Picking winners is hard; “temporary” protection becomes permanent') },
    { left: "Unfair-competition argument", right: tr("Subsidiyalangan arzon import iste'molchilarga foyda — “thank-you note”", 'Cheap subsidized imports benefit consumers — a “thank-you note”') },
    { left: "Bargaining-chip argument", right: tr("Tahdid ishlamasa, o'z oyog'ingizga otasiz yoki obro' yo'qotasiz", 'If the threat fails, you shoot yourself in the foot or lose credibility') },
  ] },
  mk("ch09.new.uz", tr("O'zbekistondan misol", 'An example from Uzbekistan'), tr("O'zbekiston jahon narxi ichki narxdan past bo'lgan avtomobillarga yuqori import boji qo'ysa (va o'zi importchi bo'lsa), nima kutiladi?", 'If Uzbekistan (an importer) imposes a high import duty on cars whose world price is below the domestic price, what should we expect?'), [
    { text: tr("Ichki narx oshadi, mahalliy ishlab chiqaruvchilar yutadi, xaridorlar ko'proq yo'qotadi, sof yo'qotish (D + F) paydo bo'ladi", 'The domestic price rises, local producers gain, buyers lose more, and a deadweight loss (D + F) appears'), correct: true, why: tr("Tarifning standart tahlili (Figure 4): ichki narx jahon narxidan tarif miqdoricha yuqori.", 'The standard analysis of a tariff (Figure 4): the domestic price is above the world price by the amount of the tariff.') },
    { text: tr("Narx tushadi", 'The price falls'), why: tr("Tarif ichki narxni **oshiradi**.", 'A tariff **raises** the domestic price.') },
    { text: tr("Hamma yutadi", 'Everyone gains'), why: tr("Iste'molchilar yo'qotishi ishlab chiqaruvchilar yutug'i va tushumdan katta.", "Consumers' loss exceeds producers' gain plus revenue.") },
    { text: tr("Import oshadi", 'Imports rise'), why: tr("Tarif importni kamaytiradi.", 'A tariff reduces imports.') },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
