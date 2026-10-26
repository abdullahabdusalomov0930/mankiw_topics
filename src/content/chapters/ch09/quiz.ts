import type { Question } from '../../types';

const C = 9;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch09.qq.1", "Comparative advantage", "The country of Autarka does not allow international trade. In Autarka, a wool suit costs 3 ounces of gold, while in neighboring countries the same suit costs 2 ounces. This suggests that", [
    { text: "Autarka has a comparative advantage in producing suits and would become a suit exporter if it opened up trade.", why: "Ichki narx yuqori — imkoniyat xarajati yuqori: comparative advantage **yo'q**." },
    { text: "Autarka has a comparative advantage in producing suits and would become a suit importer if it opened up trade.", why: "Comparative advantage bo'lsa, eksport qilardi; bu yerda ikkalasi ham noto'g'ri." },
    { text: "Autarka does not have a comparative advantage in producing suits and would become a suit exporter if it opened up trade.", why: "Jahon narxi pastroq — Autarkada sotish uchun kelishadi, eksport emas, import." },
    { text: "Autarka does not have a comparative advantage in producing suits and would become a suit importer if it opened up trade.", correct: true, why: "\\(P_W = 2 < P_D = 3\\): boshqalar arzonroq ishlab chiqaradi → Autarka import qiladi." },
  ]),
  mk("ch09.qq.2", "Eksportchi", "The nation of Openia allows free trade and exports steel. If steel exports were prohibited, the price of steel in Openia would be ________, benefiting steel ________.", [
    { text: "higher; consumers", why: "Eksport taqiqlansa, ortiqcha po'lat ichkarida sotiladi — narx **tushadi**." },
    { text: "lower; consumers", correct: true, why: "Eksportchida jahon narxi ichki narxdan yuqori; taqiq narxni savdosiz darajaga tushiradi — iste'molchilar yutadi." },
    { text: "higher; producers", why: "Narx tushadi, ishlab chiqaruvchilar yutqazadi." },
    { text: "lower; producers", why: "Past narx ishlab chiqaruvchilarga zarar." },
  ]),
  mk("ch09.qq.3", "Importchi", "When the nation of Ectenia opens to world trade in coffee beans, the domestic price **falls**. Which describes the situation?", [
    { text: "Domestic production of coffee rises, and Ectenia becomes a coffee importer.", why: "Narx tushsa, ichki ishlab chiqarish **kamayadi** (taklif bo'ylab)." },
    { text: "Domestic production of coffee rises, and Ectenia becomes a coffee exporter.", why: "Narx tushishi — import belgisi." },
    { text: "Domestic production of coffee falls, and Ectenia becomes a coffee importer.", correct: true, why: "Jahon narxi past → ichki ishlab chiqarish ↓, iste'mol ↑, farq import qilinadi." },
    { text: "Domestic production of coffee falls, and Ectenia becomes a coffee exporter.", why: "Ishlab chiqarish kamaysa va iste'mol oshsa — eksport emas." },
  ]),
  mk("ch09.qq.4", "Importchi farovonligi", "When a nation opens to trade in a good and becomes an importer,", [
    { text: "producer surplus decreases, but consumer surplus and total surplus both increase.", correct: true, why: "CS +(B + D), PS −B, TS +D." },
    { text: "producer surplus decreases, but consumer surplus increases, so the impact on total surplus is ambiguous.", why: "Ambiguous emas: iste'molchilar yutug'i (B + D) ishlab chiqaruvchilar yo'qotishidan (B) har doim katta." },
    { text: "producer surplus and total surplus increase, but consumer surplus decreases.", why: "Bu eksportchi holati." },
    { text: "producer surplus, consumer surplus, and total surplus all increase.", why: "Ishlab chiqaruvchilar past narxdan yutqazadi." },
  ]),
  mk("ch09.qq.5", "Tarif", "If a nation that imports a good imposes a tariff, it will increase", [
    { text: "the domestic quantity demanded.", why: "Narx oshadi → talab miqdori **kamayadi**." },
    { text: "the domestic quantity supplied.", correct: true, why: "Ichki narx oshadi → ichki ishlab chiqaruvchilar ko'proq taklif qiladi (Q₁ˢ → Q₂ˢ)." },
    { text: "the quantity imported from abroad.", why: "Tarif importni **kamaytiradi**." },
    { text: "the efficiency of the equilibrium.", why: "Tarif DWL yaratadi — samaradorlik **pasayadi**." },
  ]),
  mk("ch09.qq.6", "Siyosatlar", "Which of the following policies would benefit producers, hurt consumers, and **increase** the amount of trade?", [
    { text: "the increase of a tariff in an importing country", why: "Ishlab chiqaruvchilarga foyda, iste'molchilarga zarar — lekin savdo **kamayadi**." },
    { text: "the reduction of a tariff in an importing country", why: "Savdo oshadi, lekin iste'molchilar **yutadi**." },
    { text: "starting to allow trade when the world price is greater than the domestic price", correct: true, why: "Mamlakat eksportchi bo'ladi: narx oshadi → ishlab chiqaruvchilar yutadi, iste'molchilar yutqazadi, savdo noldan oshadi." },
    { text: "starting to allow trade when the world price is less than the domestic price", why: "Importchi: iste'molchilar yutadi, ishlab chiqaruvchilar yutqazadi." },
  ]),
  mk("ch09.qq.7", "Nohaq raqobat", "The nation of Lilliput imports rope from Brobdingnag, where rope producers are subsidized by the government. The most efficient policy from the standpoint of Lilliput is to", [
    { text: "continue trading at the subsidized price.", correct: true, why: "Arzon import Lilliput iste'molchilariga foyda — ularning yutug'i ishlab chiqaruvchilar zararidan katta. Subsidiyani Brobdingnag soliq to'lovchilari to'laydi (“thank-you note”)." },
    { text: "place a tariff on rope imports to offset the subsidy.", why: "Tarif Lilliputning o'zida DWL yaratadi." },
    { text: "give a similar subsidy to the rope producers of Lilliput.", why: "Subsidiya Lilliput soliq to'lovchilariga qimmat va DWL yaratadi." },
    { text: "stop trading with Brobdingnag.", why: "Savdodan yutuq yo'qoladi." },
  ]),
  mk("ch09.qq.8", "Savdo bitimlari", "The goal of multilateral trade agreements is usually to", [
    { text: "equalize the level of tariffs across nations so no nation is disadvantaged relative to others.", why: "Maqsad tariflarni tenglash emas, **kamaytirish**." },
    { text: "use targeted tariffs to ensure that nations produce those goods for which they have a comparative advantage.", why: "Comparative advantage tariflarsiz ishlaydi." },
    { text: "reduce tariffs in various nations simultaneously to blunt political pressure for protectionism.", correct: true, why: "Bir vaqtda kamaytirish: Isoland to'qimachilari qarshi bo'lsa, eksport qiluvchi bug'doy fermerlari qo'llab-quvvatlaydi." },
    { text: "ensure that tariffs are used only to promote infant industries that will eventually become viable.", why: "Kitob bu argumentga shubha bilan qaraydi." },
  ]),
];

export const checks: Record<string, Question> = {
  "s-9-1b": mk("ch09.check.9-1b", "Comparative advantage", "Savdosiz ichki narx jahon narxidan **past**. Bu nimani bildiradi?", [
    { text: "Mamlakat bu tovarda comparative advantage ga ega va savdo ochilsa eksport qiladi", correct: true, why: "Ichki narx — imkoniyat xarajati. Past narx — arzon ishlab chiqarish." },
    { text: "Mamlakat import qiladi", why: "Import ichki narx **yuqori** bo'lganda." },
    { text: "Absolute advantage bor", why: "Narxlar solishtiruvi imkoniyat xarajatini, ya'ni **comparative** advantage ni ko'rsatadi." },
    { text: "Savdo bo'lmaydi", why: "Narxlar farqi bor — savdo bo'ladi." },
  ], 'new'),
  "s-9-2a": mk("ch09.check.9-2a", "Eksportchi", "Isoland eksportchiga aylandi. Kim yutqazadi?", [
    { text: "Ichki iste'molchilar (CS: A + B → A)", correct: true, why: "Ichki narx jahon narxigacha ko'tariladi." },
    { text: "Ichki ishlab chiqaruvchilar", why: "Ular yuqori narxdan yutadi (B + D)." },
    { text: "Butun mamlakat", why: "Mamlakat umuman D ga yutadi." },
    { text: "Hech kim", why: "Iste'molchilar B ni yo'qotadi." },
  ], 'new'),
  "s-9-2b": { id: "ch09.check.9-2b", chapter: C, kind: "numeric", source: "new", topic: "Importchi", prompt: "Problem 5: futbolka $20 → $16, iste'mol 3 → 4 mln, ishlab chiqarish 3 → 1 mln. Total surplus necha **mln dollar** oshadi?", answer: 6, tolerance: 0.01, unit: "mln $", why: "ΔCS = +14, ΔPS = −8 → ΔTS = +6 (= ½ · 4 · 3 — D uchburchagi).", traps: [{ value: 14, why: "Bu faqat CS o'sishi. PS yo'qotishini ayiring." }, { value: 22, why: "PS kamaydi — ayirish kerak." }] },
  "s-9-2c": mk("ch09.check.9-2c", "Tarif", "Figure 4: tarifning sof yo'qotishi qaysi maydonlar?", [
    { text: "D + F", correct: true, why: "D — ortiqcha ishlab chiqarish, F — kam iste'mol." },
    { text: "E", why: "E — tarif tushumi (davlatga)." },
    { text: "C", why: "C — ichki ishlab chiqaruvchilar yutug'i." },
    { text: "C + D + E + F", why: "Bu iste'molchilar yo'qotishi; uning C va E qismi boshqalarga o'tadi." },
  ], 'new'),
  "s-9-2e": { id: "ch09.check.9-2e", chapter: C, kind: "tf", source: "new", topic: "Savdo foydalari", prompt: "Erkin savdo faqat comparative advantage orqali foyda beradi; boshqa foydalari yo'q.", answer: false, why: "Qo'shimcha foydalar: tovarlar xilma-xilligi, economies of scale, raqobat kuchayishi, unumdorlik o'sishi, g'oyalar almashinuvi." },
  "s-9-3": mk("ch09.check.9-3", "Cheklov argumentlari", "“Savdo ish o'rinlarini yo'q qiladi” argumentiga iqtisodchilar qanday javob beradi?", [
    { text: "Savdo eski ish o'rinlarini yo'q qilib, comparative advantage sohalarida yangilarini yaratadi; mamlakat umuman boyiydi", correct: true, why: "Import uchun to'langan pul boshqa mamlakatlarga bizning tovarlarimizni sotib olish imkonini beradi. Muammo — o'tish davri, uni ijtimoiy himoya yumshatadi." },
    { text: "Savdo hech qachon ish o'rnini yo'q qilmaydi", why: "Kitob tan oladi: to'qimachilik kabi sohalarda ishsizlik bo'ladi." },
    { text: "Hamma narsani chet elda arzonroq ishlab chiqarish mumkin bo'lsa, savdo zarar", why: "Yutuqlar absolute emas, comparative advantage ga asoslanadi." },
    { text: "Tariflar ish o'rinlarini saqlashning eng yaxshi yo'li", why: "Tariflar DWL yaratadi va iste'molchilarga qimmatga tushadi." },
  ], 'new'),
};

export const practice: Question[] = [
  { id: "ch09.new.tv-cs", chapter: C, kind: "numeric", source: "new", topic: "Importchi", prompt: "Problem 9b: televizor $100 arzonladi; iste'mol 1 mln → 1.2 mln, ichki ishlab chiqarish 400k → 200k. Consumer surplus necha **mln dollar** oshadi?", answer: 110, tolerance: 0.5, unit: "mln $", why: "\\(\\Delta CS = 100 \\times (1 + 1.2)/2 = 110\\) mln. PS: \\(-100 \\times (0.4 + 0.2)/2 = -30\\). TS +80.", traps: [{ value: 100, why: "Faqat eski 1 mln xaridor (to'rtburchak). Yangi 200k xaridor uchburchagini qo'shing." }] },
  { id: "ch09.new.tv-dwl", chapter: C, kind: "numeric", source: "new", topic: "Tarif", prompt: "Problem 9c: endi $100 tarif qo'yildi (narx avvalgi holatga qaytdi). Sof yo'qotish necha **mln dollar**?", answer: 20, tolerance: 0.5, unit: "mln $", why: "Tushum = 100 × 600k = 60 mln. DWL = ½·100·200k + ½·100·200k = 20 mln (= 80 − 60)." },
  { id: "ch09.new.tf-inelastic", chapter: C, kind: "tf", source: "new", topic: "Egiluvchanlik", prompt: "Problem 7b: importchi mamlakatda talab mutlaqo noegiluvchan bo'lsa, savdodan hech qanday yutuq bo'lmaydi.", answer: false, why: "Iste'mol o'zgarmasa ham ichki ishlab chiqarish arzonroq importga almashadi — taklif tomonidagi uchburchak yutuq bo'ladi." },
  { id: "ch09.new.tf-consumers", chapter: C, kind: "tf", source: "new", topic: "Egiluvchanlik", prompt: "Problem 7c: talab mutlaqo noegiluvchan bo'lsa, iste'molchilar savdodan foyda ko'rmaydi.", answer: false, why: "Ular bir xil miqdorni **arzonroq** oladi → CS oshadi." },
  { id: "ch09.new.tf-elastic", chapter: C, kind: "tf", source: "new", topic: "Egiluvchanlik", prompt: "Problem 7a: importchi mamlakatda talab egiluvchanligi qanchalik katta bo'lsa, savdodan yutuq shunchalik katta.", answer: true, why: "Egiluvchan talabda past jahon narxi iste'molni ko'proq oshiradi — D uchburchagi kattaroq." },
  mk("ch09.new.consumption-tax", "Tarif va soliq", "Problem 8: tarif o'rniga xuddi shu miqdorda **iste'mol solig'i** (ichki va import tovarlarga). Qaysi gap to'g'ri?", [
    { text: "Iste'mol soliqi ko'proq tushum (C + D + E) va kamroq DWL (faqat F) beradi", correct: true, why: "Ishlab chiqaruvchilar jahon narxini oladi → ichki ishlab chiqarish o'zgarmaydi (D yo'q). Soliq barcha iste'moldan olinadi." },
    { text: "Tarif ko'proq tushum beradi", why: "Tarif faqat importdan (E), iste'mol solig'i esa barcha iste'moldan." },
    { text: "Ikkalasi bir xil", why: "Ishlab chiqarishga ta'siri farq qiladi." },
    { text: "Iste'mol solig'i ichki ishlab chiqaruvchilarga foyda", why: "Ular jahon narxini oladi — PS o'zgarmaydi." },
  ], 'new'),
  mk("ch09.new.quota", "Import kvotasi", "Tarif va import kvotasining yagona farqi nima?", [
    { text: "Tarif davlatga tushum (E) beradi; kvota esa E ni import litsenziyasi egalariga beradi", correct: true, why: "Agar davlat litsenziyalarni narx farqiga teng summaga sotsa, kvota aynan tarifdek ishlaydi." },
    { text: "Kvota DWL yaratmaydi", why: "Kvota ham D + F yaratadi." },
    { text: "Kvota narxni tushiradi", why: "Kvota ham ichki narxni oshiradi." },
    { text: "Farq yo'q", why: "E kimga tegishi farq qiladi." },
  ], 'new'),
  mk("ch09.new.infant", "Cheklov argumentlari", "Nega iqtisodchilar “infant industry” argumentiga shubha qiladi?", [
    { text: "Qaysi soha kelajakda raqobatbardosh bo'lishini oldindan aniqlash qiyin, siyosat kuchli lobbilarni rag'batlantiradi, “vaqtinchalik” himoya doimiy bo'lib qoladi; foydali soha himoyasiz ham vaqtinchalik zararga chiday oladi", correct: true, why: "Kitob ikkala e'tirozni keltiradi: amaliy (“picking winners”) va nazariy (egalari zararni o'zi ko'tarishi mumkin)." },
    { text: "Yangi sohalar hech qachon foydali bo'lmaydi", why: "Bo'lishi mumkin — muammo himoya zarurligida." },
    { text: "Chunki bu milliy xavfsizlik argumenti", why: "Bu alohida argument." },
    { text: "Shubha qilmaydi", why: "Kitob: “Economists are often skeptical about such claims.”" },
  ], 'new'),
  { id: "ch09.new.match", chapter: C, kind: "match", source: "new", topic: "Argumentlar", prompt: "Savdoni cheklash argumentini iqtisodchilar javobi bilan moslashtiring.", pairs: [
    { left: "Jobs argument", right: "Savdo comparative advantage sohalarida yangi ish o'rinlari yaratadi" },
    { left: "National-security argument", right: "Haqiqiy xavf bo'lsa o'rinli, lekin firmalar uni bo'rttiradi" },
    { left: "Infant-industry argument", right: "G'oliblarni tanlash qiyin, “vaqtinchalik” himoya doimiy bo'ladi" },
    { left: "Unfair-competition argument", right: "Subsidiyalangan arzon import iste'molchilarga foyda — “thank-you note”" },
    { left: "Bargaining-chip argument", right: "Tahdid ishlamasa, o'z oyog'ingizga otasiz yoki obro' yo'qotasiz" },
  ] },
  mk("ch09.new.uz", "O'zbekistondan misol", "O'zbekiston jahon narxi ichki narxdan past bo'lgan avtomobillarga yuqori import boji qo'ysa (va o'zi importchi bo'lsa), nima kutiladi?", [
    { text: "Ichki narx oshadi, mahalliy ishlab chiqaruvchilar yutadi, xaridorlar ko'proq yo'qotadi, sof yo'qotish (D + F) paydo bo'ladi", correct: true, why: "Tarifning standart tahlili (Figure 4): ichki narx jahon narxidan tarif miqdoricha yuqori." },
    { text: "Narx tushadi", why: "Tarif ichki narxni **oshiradi**." },
    { text: "Hamma yutadi", why: "Iste'molchilar yo'qotishi ishlab chiqaruvchilar yutug'i va tushumdan katta." },
    { text: "Import oshadi", why: "Tarif importni kamaytiradi." },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
