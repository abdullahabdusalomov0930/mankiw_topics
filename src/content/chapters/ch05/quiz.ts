import { equilibrium } from '../../../lib/econ';
import type { Question } from '../../types';
import { wheat, wheatD, wheatS1 } from './presets';

const C = 5;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch05.qq.1", "Egiluvchanlik omillari", "A good tends to have a **small** price elasticity of demand if", [
    { text: "the good is a necessity.", correct: true, why: "Zaruratdan oson voz kechilmaydi — narx oshsa ham deyarli bir xil miqdor olinadi (shifokor qabuli)." },
    { text: "there are many close substitutes.", why: "Yaqin o'rinbosarlar ko'p bo'lsa, talab **egiluvchan**: osongina boshqasiga o'tiladi (sariyog' va margarin)." },
    { text: "the market is narrowly defined.", why: "Tor bozor (vanil muzqaymoq) — o'rinbosarlar ko'p — **egiluvchan**." },
    { text: "the long-run response is being measured.", why: "Uzoq muddatda odamlar ko'proq moslashadi — talab **egiluvchanroq**." },
  ]),
  mk("ch05.qq.2", "Tushum", "An increase in a good's price **reduces** the total amount consumers spend on the good if the ________ elasticity of demand is ________ than one.", [
    { text: "income; less", why: "Narx o'zgarishiga daromad egiluvchanligi emas, **narx** egiluvchanligi javob beradi." },
    { text: "income; greater", why: "Xuddi shu sabab — bu daromad o'zgarishi haqida emas." },
    { text: "price; less", why: "E < 1 (inelastic) da narx oshsa xarajat **oshadi**." },
    { text: "price; greater", correct: true, why: "E > 1: miqdor narxdan ko'proq foizga kamayadi → P × Q kamayadi." },
  ]),
  mk("ch05.qq.3", "Chiziqli talab", "A linear, downward-sloping demand curve is", [
    { text: "inelastic.", why: "Faqat pastki qismi (past narx, katta miqdor) noegiluvchan." },
    { text: "unit elastic.", why: "Faqat o'rta nuqtada E = 1." },
    { text: "elastic.", why: "Faqat yuqori qismi egiluvchan." },
    { text: "inelastic at some points and elastic at others.", correct: true, why: "Nishab doimiy, lekin \\(P/Q\\) o'zgaradi: yuqorida E > 1, pastda E < 1 (Figure 4)." },
  ]),
  mk("ch05.qq.4", "Daromad egiluvchanligi", "The citizens of Rohan spend a **higher fraction** of their income on food than do the citizens of Gondor. The reason could be that", [
    { text: "Rohan has lower food prices, and the price elasticity of demand is zero.", why: "E = 0 bo'lsa, past narx kamroq xarajat degani — ulush **kichikroq** bo'lardi." },
    { text: "Rohan has lower food prices, and the price elasticity of demand is 0.5.", why: "Noegiluvchan talabda past narx — kamroq xarajat, ulush kichik." },
    { text: "Rohan has lower income, and the income elasticity of demand is 0.5.", correct: true, why: "Daromad egiluvchanligi < 1 (Engel qonuni): kambag'alroq mamlakat daromadining **kattaroq ulushini** ovqatga sarflaydi." },
    { text: "Rohan has lower income, and the income elasticity of demand is 1.5.", why: "E_I > 1 bo'lsa, ovqat ulushi daromad bilan **oshardi** — kambag'al Rohan kichikroq ulush sarflardi." },
  ]),
  { id: "ch05.qq.5", chapter: C, kind: "mcq", source: "quickquiz", topic: "Taklif egiluvchanligi", prompt: "The price of a good rises from **$16 to $24**, and the quantity supplied rises from **90 to 110** units. Calculated with the midpoint method, the price elasticity of supply is", options: [
    { text: "1/5.", why: "Ehtimol foizlarni teskari bo'lgansiz yoki oddiy usul ishlatgansiz." },
    { text: "1/2.", correct: true, why: "\\(\\%\\Delta Q = 20/100 = 20\\%\\), \\(\\%\\Delta P = 8/20 = 40\\%\\) → \\(E_s = 20/40 = 0.5\\)." },
    { text: "2.", why: "Bu \\(\\%\\Delta P / \\%\\Delta Q\\) — kasr teskari." },
    { text: "5.", why: "Hisoblashda xato: midpoint bo'yicha 20% va 40%." },
  ] },
  mk("ch05.qq.6", "Egri chiziq turlari", "If the price elasticity of supply is **zero**, the supply curve is", [
    { text: "upward sloping.", why: "Yuqoriga egilgan taklifda elastiklik musbat." },
    { text: "horizontal.", why: "Gorizontal — mutlaqo **egiluvchan** (E → ∞)." },
    { text: "vertical.", correct: true, why: "E = 0: narx qanday bo'lmasin, miqdor bir xil — vertikal chiziq." },
    { text: "fairly flat at low quantities but steeper at larger quantities.", why: "Bu sig'imi cheklangan firmalar (Figure 6) — egiluvchanlik o'zgaradi, nol emas." },
  ]),
  mk("ch05.qq.7", "Vaqt omili", "The ability of firms to enter and exit a market over time means that, in the long run,", [
    { text: "the demand curve is more elastic.", why: "Kirish va chiqish — **sotuvchilar** harakati, taklifga ta'sir qiladi." },
    { text: "the demand curve is less elastic.", why: "Firmalar kirishi talabga aloqador emas." },
    { text: "the supply curve is more elastic.", correct: true, why: "Uzoq muddatda yangi zavodlar quriladi, yangi firmalar kiradi — taklif narxga ko'proq javob beradi." },
    { text: "the supply curve is less elastic.", why: "Teskarisi: vaqt egiluvchanlikni oshiradi." },
  ]),
  mk("ch05.qq.8", "Fermerlik", "An increase in the supply of grain will **reduce** the total revenue grain producers receive if", [
    { text: "the supply curve is inelastic.", why: "Tushum yo'nalishini **talab** egiluvchanligi hal qiladi (narx talab bo'ylab harakat qiladi)." },
    { text: "the supply curve is elastic.", why: "Xuddi shu sabab." },
    { text: "the demand curve is inelastic.", correct: true, why: "Taklif ↑ → narx ↓. Noegiluvchan talabda miqdor narxdan kamroq foizga oshadi → P × Q kamayadi (Figure 7)." },
    { text: "the demand curve is elastic.", why: "Egiluvchan talabda narx tushishi tushumni **oshiradi**." },
  ]),
  mk("ch05.qq.9", "Fermerlik", "In competitive markets, farmers adopt new technologies that will eventually reduce their revenue because", [
    { text: "each farmer is a price taker.", correct: true, why: "Har bir fermer narxni o'zgarmas deb oladi: har qanday narxda ko'proq ishlab chiqarish foydaliroq. Hamma shunday qilsa, narx tushadi." },
    { text: "farmers are short-sighted.", why: "Fermerlar ratsional — muammo individual va jamoaviy natijaning farqida." },
    { text: "regulation requires the use of best practices.", why: "Kitobda bunday talab yo'q." },
    { text: "consumers pressure farmers to lower prices.", why: "Narxni bozor belgilaydi, iste'molchilar bosimi emas." },
  ]),
  mk("ch05.qq.10", "OPEC", "Because the demand curve for oil is ________ elastic in the long run, OPEC's reduction in the supply of oil had a ________ impact on the price in the long run than it did in the short run.", [
    { text: "less; smaller", why: "Uzoq muddatda talab **ko'proq** egiluvchan." },
    { text: "less; larger", why: "Ikkala qism ham teskari." },
    { text: "more; smaller", correct: true, why: "Uzoq muddatda odamlar tejamkor mashinaga o'tadi, boshqa mamlakatlar ko'proq qazadi — egri chiziqlar yotiq, narx kamroq oshadi." },
    { text: "more; larger", why: "Egiluvchanroq bozorda bir xil siljish narxni **kamroq** o'zgartiradi." },
  ]),
  mk("ch05.qq.11", "Daromad va narx", "Over time, technological advances increase consumers' incomes and reduce the price of smartphones. Each of these forces increases the amount consumers **spend** on smartphones if the income elasticity of demand is greater than ________ and the price elasticity of demand is greater than ________.", [
    { text: "zero; zero", why: "Narx tushganda xarajat oshishi uchun talab **egiluvchan** (E > 1) bo'lishi kerak." },
    { text: "zero; one", correct: true, why: "Daromad ↑: normal tovar (E_I > 0) bo'lsa xarajat ↑. Narx ↓: E_d > 1 bo'lsa miqdor narxdan ko'proq oshadi → xarajat ↑." },
    { text: "one; zero", why: "Daromad uchun > 0 yetarli; narx uchun > 1 kerak." },
    { text: "one; one", why: "Daromad egiluvchanligi 1 dan katta bo'lishi shart emas — musbat bo'lsa xarajat oshadi." },
  ]),
];

export const checks: Record<string, Question> = {
  "s-5-1a": mk("ch05.check.5-1a", "Egiluvchanlik omillari", "Qaysi tovarga talab **eng egiluvchan**?", [
    { text: "Umuman oziq-ovqat", why: "Keng ta'riflangan bozor, o'rinbosari yo'q — noegiluvchan." },
    { text: "Non", why: "Zarurat va keng kategoriya — noegiluvchan." },
    { text: "Ma'lum bir brenddagi gazlangan ichimlik", correct: true, why: "Juda tor bozor, yaqin o'rinbosarlar ko'p (boshqa brendlar) — juda egiluvchan (Mountain Dew: 4.4)." },
    { text: "Insulin", why: "Hayotiy zarurat, o'rinbosari yo'q — deyarli mutlaqo noegiluvchan." },
  ], 'new'),
  "s-5-1c": { id: "ch05.check.5-1c", chapter: C, kind: "numeric", source: "new", topic: "Midpoint", prompt: "Midpoint usulida: narx **$4 dan $6 ga** o'zgarishi necha foiz?", answer: 40, tolerance: 0.5, unit: "%", why: "\\((6 - 4)/5 = 0.4 = 40\\%\\). Oddiy usulda 50% chiqardi; teskarisiga 33% — midpoint ikkala yo'nalishda 40%.", traps: [{ value: 50, why: "Bu oddiy usul (boshlang'ich qiymatga bo'lish). Midpoint — o'rtachaga bo'lish." }, { value: 33, why: "Bu $6 → $4 ning oddiy foizi." }] },
  "s-5-1d": { id: "ch05.check.5-1d", chapter: C, kind: "tf", source: "new", topic: "Egri chiziq turlari", prompt: "Tekisroq (yotiqroq) talab egri chizig'i odatda egiluvchanroq talabni bildiradi.", answer: true, why: "Qoida: “The flatter the demand curve at a given point, the greater the price elasticity of demand.” Mutlaqo egiluvchan — gorizontal, mutlaqo noegiluvchan — vertikal." },
  "s-5-1e": { id: "ch05.check.5-1e", chapter: C, kind: "numeric", source: "new", topic: "Tushum", prompt: "Figure 3(b): narx $4 → $5, talab miqdori 100 → 70. Yangi umumiy tushum qancha?", answer: 350, tolerance: 0, unit: "$", why: "\\(5 \\times 70 = 350\\). Avval $400 edi — narx oshdi, tushum tushdi: demand elastic.", traps: [{ value: 400, why: "Bu eski tushum ($4 × 100)." }, { value: 500, why: "Yangi narxni eski miqdorga ko'paytirdingiz." }] },
  "s-5-1f": mk("ch05.check.5-1f", "Chiziqli talab", "Figure 4: \\(Q = 14 - 2P\\). Narx $1 dan $2 ga oshsa, tushumga nima bo'ladi?", [
    { text: "Oshadi ($12 → $20)", correct: true, why: "Past narxda talab **noegiluvchan** (E = 0.3): narx va tushum bir yo'nalishda." },
    { text: "Kamayadi", why: "Bu yuqori narxlarda (masalan $5 → $6) bo'ladi." },
    { text: "O'zgarmaydi", why: "Faqat $3 va $4 orasida (unit elastic) tushum bir xil ($24)." },
    { text: "Aniqlab bo'lmaydi", why: "Jadval bor: $1 da 12 dona ($12), $2 da 10 dona ($20)." },
  ], 'new'),
  "s-5-1g": mk("ch05.check.5-1g", "Kesishgan egiluvchanlik", "Kompyuter narxi oshganda dasturlarga talab kamaydi. Kesishgan narx egiluvchanligining ishorasi va tovarlar turi?", [
    { text: "Manfiy — to'ldiruvchilar", correct: true, why: "Narx ↑, boshqa tovar miqdori ↓ → manfiy → complements." },
    { text: "Musbat — o'rinbosarlar", why: "O'rinbosarlarda birining narxi oshsa, ikkinchisiga talab **oshadi**." },
    { text: "Manfiy — o'rinbosarlar", why: "Ishora to'g'ri, lekin manfiy — to'ldiruvchilar." },
    { text: "Nol", why: "Bog'liqlik bor — nol emas." },
  ], 'new'),
  "s-5-2b": { id: "ch05.check.5-2b", chapter: C, kind: "numeric", source: "new", topic: "Taklif egiluvchanligi", prompt: "Figure 6: narx $3 → $4 (midpoint 29%), taklif miqdori 100 → 200 (67%). Taklif egiluvchanligi (2 xona aniqlikda)?", answer: 2.33, tolerance: 0.05, why: "\\(67/29 \\approx 2.3\\) — elastic. Sig'im bo'sh, firmalar osongina ko'paytiradi.", traps: [{ value: 0.43, why: "Kasrni teskari oldingiz: \\(\\%\\Delta Q / \\%\\Delta P\\)." }] },
  "s-5-3a": mk("ch05.check.5-3a", "Fermerlik", "Nega davlat ba'zan fermerlarga ekmaslik uchun pul to'laydi?", [
    { text: "Talab noegiluvchan: taklifni kamaytirish narxni ko'p oshiradi va fermerlar umumiy tushumini oshiradi", correct: true, why: "Noegiluvchan talabda narx va tushum bir yo'nalishda: kam hosil — yuqori tushum. Lekin bu iste'molchilar va soliq to'lovchilar hisobiga." },
    { text: "Yerni dam oldirish uchun", why: "Kitob iqtisodiy sababni ko'rsatadi — tushum." },
    { text: "Talab egiluvchan bo'lgani uchun", why: "Egiluvchan talabda taklifni kamaytirish tushumni **kamaytirardi**." },
    { text: "Iste'molchilarga arzon oziq-ovqat berish uchun", why: "Taklif kamayishi narxni **oshiradi**." },
  ], 'new'),
  "s-5-3b": { id: "ch05.check.5-3b", chapter: C, kind: "tf", source: "new", topic: "OPEC", prompt: "OPEC narxni qisqa muddatda ko'tara oldi, chunki qisqa muddatda neft talabi ham, taklifi ham noegiluvchan.", answer: true, why: "Qisqa muddatda odatlar va qazib olish quvvati tez o'zgarmaydi → egri chiziqlar tik → kichik siljish katta narx o'zgarishi." },
  "s-5-3c": mk("ch05.check.5-3c", "Narkotiklar", "Nega **interdiction** (taklifni kesish) giyohvandlik bilan bog'liq jinoyatni oshirishi mumkin?", [
    { text: "Talab noegiluvchan: narx ko'p oshadi, iste'mol kam kamayadi → giyohvandlar ko'proq pul to'laydi", correct: true, why: "P × Q oshadi — pul topish uchun jinoyat ko'payishi mumkin. Talabni kamaytirish (ta'lim) esa P va Q ni ikkalasini tushiradi." },
    { text: "Taklif egiluvchan bo'lgani uchun", why: "Asosiy omil — talab egiluvchanligi (tushum yo'nalishi)." },
    { text: "Narx tushgani uchun", why: "Interdiction taklifni kamaytiradi — narx **oshadi**." },
    { text: "Iste'mol oshgani uchun", why: "Iste'mol (Q) kamayadi; jami to'lov oshadi." },
  ], 'new'),
};

export const practice: Question[] = [
  { id: "ch05.new.business", chapter: C, kind: "numeric", source: "new", topic: "Midpoint", prompt: "Problem 2: biznes sayohatchilar uchun chipta $200 → $250, miqdor 2,000 → 1,900. Narx egiluvchanligi (2 xona)?", answer: 0.23, tolerance: 0.01, why: "\\(\\%\\Delta Q = -100/1950 = -5.13\\%\\); \\(\\%\\Delta P = 50/225 = 22.2\\%\\); \\(E = 0.23\\) — inelastic.", traps: [{ value: 4.33, why: "Kasr teskari." }] },
  { id: "ch05.new.vacation", chapter: C, kind: "numeric", source: "new", topic: "Midpoint", prompt: "Xuddi shu narx o'zgarishida dam oluvchilar: 800 → 600. Egiluvchanlik (2 xona)?", answer: 1.29, tolerance: 0.01, why: "\\(\\%\\Delta Q = -200/700 = -28.6\\%\\), \\(E = 28.6/22.2 = 1.29\\) — elastic: dam oluvchilar boshqa sana yoki joyni tanlay oladi." },
  { id: "ch05.new.cigarettes", chapter: C, kind: "numeric", source: "new", topic: "Siyosat", prompt: "Problem 10a: sigaret talab egiluvchanligi 0.4. Chekishni 20% kamaytirish uchun narx (midpoint bo'yicha) necha foiz oshishi kerak?", answer: 50, tolerance: 0.5, unit: "%", why: "\\(\\%\\Delta P = \\%\\Delta Q / E = 20/0.4 = 50\\%\\). $5 dan: \\((P_2 - 5)/[(P_2 + 5)/2] = 0.5 \\Rightarrow P_2 \\approx 8.33\\).", traps: [{ value: 8, why: "Ko'paytirdingiz (20 × 0.4). Bo'lish kerak." }] },
  { id: "ch05.new.thelma", chapter: C, kind: "mcq", source: "new", topic: "Egri chiziq turlari", prompt: "Problem 9: Louise “$20 lik benzin” buyuradi (narxni ko'rmasdan). Uning talab egiluvchanligi?", options: [
    { text: "0 — mutlaqo noegiluvchan", why: "Bu Thelma (har doim 5 gallon) — miqdor qat'iy." },
    { text: "1 — birlik egiluvchan", correct: true, why: "Xarajat (P × Q) doim $20 — tushum o'zgarmaydi, demak E = 1." },
    { text: "∞ — mutlaqo egiluvchan", why: "Gorizontal talab bu emas: Louise narx oshsa ham sotib oladi, faqat kamroq gallon." },
    { text: "Aniqlab bo'lmaydi", why: "Xarajat doimiyligi — unit elasticity'ning aniq belgisi." },
  ] },
  { id: "ch05.new.tf-slope", chapter: C, kind: "tf", source: "new", topic: "Chiziqli talab", prompt: "Chiziqli talab egri chizig'ida nishab doimiy bo'lgani uchun egiluvchanlik ham har bir nuqtada bir xil.", answer: false, why: "Nishab — o'zgarishlar nisbati, egiluvchanlik — **foiz** o'zgarishlar nisbati. Chiziq bo'ylab P/Q o'zgaradi, shuning uchun E ham o'zgaradi." },
  { id: "ch05.new.tf-income", chapter: C, kind: "tf", source: "new", topic: "Daromad egiluvchanligi", prompt: "Daromad egiluvchanligi manfiy bo'lgan tovar — inferior good.", answer: true, why: "Daromad ↑ → talab ↓ → manfiy ishora. Masalan, avtobus qatnovi." },
  { id: "ch05.new.museum", chapter: C, kind: "mcq", source: "new", topic: "Tushum", prompt: "Problem 11: muzey tushumini oshirmoqchi. Kirish narxini oshirish kerakmi?", options: [
    { text: "Ha, har doim", why: "Agar talab egiluvchan bo'lsa, narx oshishi tushumni **kamaytiradi**." },
    { text: "Talab noegiluvchan bo'lsa — oshirish, egiluvchan bo'lsa — tushirish", correct: true, why: "Tushum qoidasi: E < 1 — narx va tushum bir yo'nalishda; E > 1 — qarama-qarshi." },
    { text: "Yo'q, har doim tushirish", why: "Noegiluvchan talabda narxni tushirish tushumni kamaytiradi." },
    { text: "Narx tushumga ta'sir qilmaydi", why: "Faqat E = 1 bo'lsagina." },
  ] },
  { id: "ch05.new.drought", chapter: C, kind: "mcq", source: "new", topic: "Fermerlik", prompt: "Problem 12: nega **butun dunyo** bo'ylab qurg'oqchilik fermerlar tushumini oshiradi, faqat **Kanzasda** qurg'oqchilik esa Kanzas fermerlarini kambag'allashtiradi?", options: [
    { text: "Dunyo bo'yicha taklif kamaysa, noegiluvchan talab sabab narx keskin oshadi; Kanzas kichik — u jahon narxini o'zgartira olmaydi, kamroq hosilni deyarli o'sha narxda sotadi", correct: true, why: "Kanzas fermerlari uchun talab deyarli mutlaqo egiluvchan (ular price takers), dunyo uchun esa noegiluvchan." },
    { text: "Kanzas yerlari unumsizroq", why: "Gap unumdorlikda emas, bozordagi o'rinda." },
    { text: "Dunyoda talab egiluvchan", why: "Don talabi noegiluvchan — aynan shuning uchun jahon tushumi oshadi." },
    { text: "Ikkala holda ham tushum oshadi", why: "Kanzasda narx deyarli o'zgarmaydi, miqdor esa kamayadi → tushum ↓." },
  ] },
  { id: "ch05.new.match", chapter: C, kind: "match", source: "new", topic: "Atamalar", prompt: "Egiluvchanlik qiymatini uning ma'nosi bilan moslashtiring.", pairs: [
    { left: "\\(E_d = 0\\)", right: "Vertikal talab — mutlaqo noegiluvchan" },
    { left: "\\(E_d = 0.4\\)", right: "Noegiluvchan: narx oshsa tushum oshadi" },
    { left: "\\(E_d = 1\\)", right: "Narx o'zgarsa tushum o'zgarmaydi" },
    { left: "\\(E_d = 2.3\\)", right: "Egiluvchan: narx oshsa tushum kamayadi" },
    { left: "\\(E_I = -0.5\\)", right: "Inferior good" },
  ] },
  { id: "ch05.new.uz-transport", chapter: C, kind: "mcq", source: "new", topic: "Vaqt omili", prompt: "Toshkentda metro narxi oshdi. Qaysi gap to'g'ri?", options: [
    { text: "Bir haftadan keyingi reaksiya bir yildan keyingisidan kuchliroq", why: "Teskarisi: vaqt o'tishi bilan odamlar ko'proq moslashadi." },
    { text: "Uzoq muddatda talab egiluvchanroq: odamlar velosiped, avtobus, ishga yaqinroq ko'chish kabi muqobillarni topadi", correct: true, why: "Time horizon — to'rtinchi omil (Problem 1c: “subway rides during the next five years”)." },
    { text: "Metro talabi mutlaqo noegiluvchan", why: "Muqobillar (avtobus, taksi) bor — mutlaqo emas." },
    { text: "Narx o'zgarishi talab egri chizig'ini siljitadi", why: "O'z narxi — egri chiziq bo'ylab harakat." },
  ] },
];

export const graphTasks: Question[] = [
  {
    id: "ch05.graph.wheat",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: "Fermerlik",
    prompt: "Yangi gibrid bug'doy taklifini oshirdi. Taklifni o'ngga siljitib, fermerlar umumiy tushumi **$250 dan pastga** tushganini ko'rsating.",
    graph: { ...wheat, presets: undefined, shiftControls: true },
    check: (s) => {
      if (Math.abs(s.D.a - wheatD.a) > 1e-6) return { ok: false, msg: "Texnologiya — taklif omili. Talabni joyida qoldiring." };
      const e = equilibrium(s.D, s.S);
      if (s.S.c >= wheatS1.c) return { ok: false, msg: "Taklifni **o'ngga** siljiting (increase in supply)." };
      const tr = e.P * e.Q;
      if (tr >= 250) return { ok: false, msg: `Tushum hozir $${tr.toFixed(0)}. Taklifni yana o'ngga suring.` };
      return { ok: true, msg: `To'g'ri: narx $${e.P.toFixed(2)}, miqdor ${e.Q.toFixed(0)}, tushum $${tr.toFixed(0)} (avval $300). Noegiluvchan talabda “yaxshi yangilik” fermerlar uchun yomon.` };
    },
  },
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice, ...graphTasks];
