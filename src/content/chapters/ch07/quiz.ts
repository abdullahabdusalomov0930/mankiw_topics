import { consumerSurplus, equilibrium } from '../../../lib/econ';
import type { Question } from '../../types';

const C = 7;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch07.qq.1", "Consumer surplus", "Alexis, Bruno, and Camila each want an ice-cream cone. Alexis is willing to pay $12, Bruno $8, and Camila $4. The market price is **$6**. Their consumer surplus is", [
    { text: "$6.", why: "Faqat Alexisni hisobladingiz ($12 − $6). Bruno ham sotib oladi." },
    { text: "$8.", correct: true, why: "Alexis: 12 − 6 = 6; Bruno: 8 − 6 = 2; Camila $4 < $6 — sotib olmaydi. Jami $8." },
    { text: "$14.", why: "Camila sotib olmaydi — uning surplusi manfiy bo'lardi, u hisobga kirmaydi." },
    { text: "$18.", why: "Bu WTP lar yig'indisi minus bitta narx — formula xato." },
  ]),
  mk("ch07.qq.2", "Narx va CS", "If the price of an ice-cream cone falls to **$3**, the consumer surplus of Alexis, Bruno, and Camila increases by", [
    { text: "$6.", why: "Alexis va Bruno har biri $3 dan yutadi ($6), lekin Camila ham bozorga kiradi (+$1)." },
    { text: "$7.", correct: true, why: "Yangi CS: 9 + 5 + 1 = 15. Avval 8 edi. O'sish 7 — eski xaridorlar (+6) va yangi xaridor (+1)." },
    { text: "$8.", why: "Hisobni tekshiring: 15 − 8 = 7." },
    { text: "$9.", why: "Bu faqat Alexisning yangi surplusi." },
  ]),
  mk("ch07.qq.3", "Narx va CS", "The demand curve for cookies slopes downward. When the price is $3 per cookie, the quantity demanded is 100. If the price falls to $2, what happens to consumer surplus?", [
    { text: "It falls by less than $100.", why: "Narx tushsa CS **oshadi**." },
    { text: "It falls by more than $100.", why: "Yo'nalish xato." },
    { text: "It rises by less than $100.", why: "Eski 100 xaridor har biri $1 yutadi = $100 (to'rtburchak), bunga yangi xaridorlar uchburchagi qo'shiladi." },
    { text: "It rises by more than $100.", correct: true, why: "To'rtburchak BCED = $1 × 100 = $100 + yangi xaridorlar uchburchagi CEF > 0." },
  ]),
  mk("ch07.qq.4", "Producer surplus", "Diego, Emi, and Finn are available to work as tutors. The opportunity cost of tutoring is $400 for Diego, $200 for Emi, and $100 for Finn. The university hires tutors at a price of **$300**. Producer surplus is", [
    { text: "$100.", why: "Faqat Emini hisobladingiz." },
    { text: "$200.", why: "Faqat Finnni hisobladingiz." },
    { text: "$300.", correct: true, why: "Emi: 300 − 200 = 100; Finn: 300 − 100 = 200; Diego ($400 > $300) ishlamaydi. Jami $300." },
    { text: "$400.", why: "Diego ishlamaydi — uning surplusi qo'shilmaydi." },
  ]),
  mk("ch07.qq.5", "Narx va PS", "Gavin has been working full-time as a gardener for $300 a week. When the market price rises to $400, Hector becomes a gardener as well. How much does producer surplus rise?", [
    { text: "by less than $100", why: "Gavinning o'zi $100 yutadi; Hector ham musbat surplus oladi." },
    { text: "between $100 and $200", correct: true, why: "Gavin +$100 (to'rtburchak). Hector $300 da kirmagan, $400 da kirdi — xarajati $300–$400 orasida, surplusi $0–$100 (uchburchak). Jami $100–$200." },
    { text: "between $200 and $300", why: "Hector surplusi $100 dan oshmaydi." },
    { text: "by more than $300", why: "Juda ko'p." },
  ]),
  mk("ch07.qq.6", "Uchburchak", "The supply curve for a product is \\(Q^S = 2P\\), and the market price is $10. What is producer surplus?", [
    { text: "$5", why: "Yuza formulasini tekshiring: ½ × 20 × 10." },
    { text: "$20", why: "20 — miqdor, surplus emas." },
    { text: "$100", correct: true, why: "\\(Q = 20\\). Uchburchak: ½ × 20 × (10 − 0) = 100." },
    { text: "$200", why: "½ ni unutdingiz (to'rtburchak emas, uchburchak)." },
  ]),
  mk("ch07.qq.7", "Total surplus", "Isabelle values her time at $60 an hour. She spends 2 hours giving Jayla a massage. Jayla was willing to pay as much as $300, but they negotiated a price of $200. In this transaction,", [
    { text: "consumer surplus is $20 larger than producer surplus.", correct: true, why: "PS = 200 − (2 × 60) = 80. CS = 300 − 200 = 100. Farq $20." },
    { text: "consumer surplus is $40 larger than producer surplus.", why: "Xarajat 2 soat × $60 = $120 — buni unutmang." },
    { text: "producer surplus is $20 larger than consumer surplus.", why: "Teskari: CS 100, PS 80." },
    { text: "producer surplus is $40 larger than consumer surplus.", why: "PS = 80, CS = 100." },
  ]),
  mk("ch07.qq.8", "Samaradorlik", "An efficient allocation of resources maximizes", [
    { text: "consumer surplus.", why: "Faqat xaridorlar emas — samaradorlik hammaning yutug'i." },
    { text: "producer surplus.", why: "Faqat sotuvchilar emas." },
    { text: "consumer surplus plus producer surplus.", correct: true, why: "Efficiency — **total surplus** maksimal." },
    { text: "consumer surplus minus producer surplus.", why: "Ayirish ma'nosiz." },
  ]),
  mk("ch07.qq.9", "Bozor natijasi", "When a market is in equilibrium, the buyers are those with the ________ willingness to pay, and the sellers are those with the ________ costs.", [
    { text: "highest; highest", why: "Yuqori xarajatli sotuvchilar narxdan qimmat ishlab chiqaradi — ular sotmaydi." },
    { text: "highest; lowest", correct: true, why: "Narx P* dan yuqori WTP lilar oladi, P* dan past xarajatlilar sotadi — 1- va 2-xulosalar." },
    { text: "lowest; highest", why: "Teskari." },
    { text: "lowest; lowest", why: "Past WTP lilar narxni to'lamaydi." },
  ]),
  mk("ch07.qq.10", "Samaradorlik", "Producing a quantity **larger** than the equilibrium is inefficient because the marginal buyer's willingness to pay is", [
    { text: "negative.", why: "WTP odatda musbat — muammo boshqa." },
    { text: "zero.", why: "Nol bo'lishi shart emas." },
    { text: "positive but less than the marginal seller's cost.", correct: true, why: "Muvozanatdan o'ngda talab taklifdan pastda: qo'shimcha birlik qiymati xarajatidan kam → total surplus kamayadi." },
    { text: "positive and greater than the marginal seller's cost.", why: "Bu muvozanatdan **chapda** — u yerda miqdorni oshirish foydali." },
  ]),
];

export const checks: Record<string, Question> = {
  "s-7-1a": { id: "ch07.check.7-1a", chapter: C, kind: "numeric", source: "new", topic: "Consumer surplus", prompt: "Ikki albom auktsionda $700 dan sotildi. Whitney ($1,000) va Ella ($800) oldi. **Jami** consumer surplus?", answer: 400, tolerance: 0, unit: "$", why: "Whitney 300 + Ella 100 = 400.", traps: [{ value: 300, why: "Faqat Whitney. Ella ham sotib oldi." }, { value: 1100, why: "Bu (1000 + 800) − 700 — narxni ikki marta ayirish kerak." }] },
  "s-7-1b": { id: "ch07.check.7-1b", chapter: C, kind: "tf", source: "new", topic: "Talab va WTP", prompt: "Har bir miqdorda talab egri chizig'ining balandligi marjinal xaridorning to'lashga tayyorligiga teng.", answer: true, why: "Masalan, 3 ta albomda balandlik $700 — Mariahning WTP si (u — marjinal xaridor)." },
  "s-7-1c": mk("ch07.check.7-1c", "Narx va CS", "Narx P₁ dan P₂ ga tushdi. Consumer surplus o'sishining **yangi xaridorlarga** tegishli qismi qaysi?", [
    { text: "To'rtburchak BCED", why: "Bu — avvaldan sotib olayotganlarning yutug'i (kamroq to'laydi)." },
    { text: "Uchburchak CEF", correct: true, why: "Past narxda bozorga kirganlar — Q₁ dan Q₂ gacha." },
    { text: "Uchburchak ABC", why: "Bu — boshlang'ich CS." },
    { text: "Hech qaysi", why: "Yangi xaridorlar ham surplus oladi." },
  ], 'new'),
  "s-7-1d": mk("ch07.check.7-1d", "CS o'lchovi", "Qaysi holatda kitob consumer surplusni farovonlik o'lchovi sifatida shubhali deydi?", [
    { text: "Giyohvandning narkotikka to'lashga tayyorligi", correct: true, why: "Siyosatchilar giyohvandlar o'z manfaatini ko'zlamayapti deb hisoblaydi — ularning WTP si haqiqiy foydani o'lchamaydi." },
    { text: "Talabaning kitobga to'lashga tayyorligi", why: "Oddiy ratsional tanlov — CS yaxshi o'lchov." },
    { text: "Muzqaymoq xaridori", why: "Oddiy holat — afzalliklar hurmat qilinadi." },
    { text: "Hech qachon", why: "Kitob istisnoni keltiradi." },
  ], 'new'),
  "s-7-2a": { id: "ch07.check.7-2a", chapter: C, kind: "numeric", source: "new", topic: "Producer surplus", prompt: "Ikki uy bo'yaladi, har biri $3,200 dan. Andy ($2,000) va Pablo ($2,400) oldi. Jami producer surplus?", answer: 2000, tolerance: 0, unit: "$", why: "Andy 1,200 + Pablo 800 = 2,000.", traps: [{ value: 1200, why: "Faqat Andy." }] },
  "s-7-3a": mk("ch07.check.7-3a", "Total surplus", "Nima uchun total surplus = value to buyers − cost to sellers?", [
    { text: "Xaridor to'lagan summa sotuvchi olgan summaga teng — CS va PS qo'shilganda ular qisqarib ketadi", correct: true, why: "(Value − Paid) + (Received − Cost) = Value − Cost." },
    { text: "Chunki narx nolga teng", why: "Narx har qanday bo'lishi mumkin — u shunchaki ikki tomonda bekor bo'ladi." },
    { text: "Chunki davlat solig'i yo'q", why: "Soliq yo'qligi faraz, lekin formula sababi — to'lovning qisqarishi." },
    { text: "Bu faqat taxmin", why: "Bu aniq algebraik ayniyat." },
  ], 'new'),
  "s-7-3b": { id: "ch07.check.7-3b", chapter: C, kind: "tf", source: "new", topic: "Samaradorlik", prompt: "Raqobatli bozor muvozanati total surplusni maksimal qiladi, shuning uchun u har doim adolatli ham bo'ladi.", answer: false, why: "Samaradorlik — pirog **kattaligi**, adolat (equality) — u qanday **bo'linishi**. Bozor samarali bo'lishi mumkin, lekin natija teng bo'lmasligi mumkin." },
  "s-7-4": mk("ch07.check.7-4", "Bozor muvaffaqiyatsizligi", "Kitob bozor samaradorligi xulosasi uchun qaysi ikki farazni ajratib ko'rsatadi?", [
    { text: "Mukammal raqobat va tashqi effektlar yo'qligi", correct: true, why: "Market power yoki externalities bo'lsa, muvozanat samarali bo'lmasligi mumkin — market failure." },
    { text: "Soliqlar yo'qligi va inflyatsiya yo'qligi", why: "Soliqlar 8-bobda; kitob bu yerda raqobat va externalities ni ko'rsatadi." },
    { text: "Barcha xaridorlar boy va barcha sotuvchilar kambag'al", why: "Boylik taqsimoti — adolat masalasi." },
    { text: "Hukumat narxni belgilaydi", why: "Aksincha, erkin bozor faraz qilinadi." },
  ], 'new'),
};

export const practice: Question[] = [
  { id: "ch07.new.kyra", chapter: C, kind: "numeric", source: "new", topic: "WTP", prompt: "Problem 1: Kyra iPhone'ni $360 ga oldi va $240 consumer surplus oldi. Uning to'lashga tayyorligi?", answer: 600, tolerance: 0, unit: "$", why: "WTP = P + CS = 360 + 240 = 600.", traps: [{ value: 120, why: "Ayirdingiz. CS = WTP − P, demak WTP = P + CS." }] },
  { id: "ch07.new.bert", chapter: C, kind: "numeric", source: "new", topic: "Consumer surplus", prompt: "Problem 4: Bert shishalarni $7, $5, $3, $1 deb baholaydi. Narx **$2** bo'lsa, uning consumer surplusi?", answer: 9, tolerance: 0, unit: "$", why: "3 ta oladi: (7−2) + (5−2) + (3−2) = 5 + 3 + 1 = 9.", traps: [{ value: 8, why: "To'rtinchi shishani ($1 < $2) olmaydi, lekin uchinchisini ($3) oladi: +1." }] },
  { id: "ch07.new.haircuts", chapter: C, kind: "numeric", source: "new", topic: "Samaradorlik", prompt: "Problem 8: WTP — Gloria $35, Jay $10, Claire $40, Phil $25. Xarajatlar — A $15, B $30, C $20, D $10. Maksimal total surplus?", answer: 55, tolerance: 0, unit: "$", why: "Eng yuqori WTP larni eng past xarajatlar bilan juftlang: 40−10, 35−15, 25−20 → 3 ta soch olish. TS = (40+35+25) − (10+15+20) = 55. Jay va B ishtirok etmaydi.", traps: [{ value: 35, why: "To'rtinchi juftlik (Jay $10, B $30) surplusni **kamaytiradi** — uni qo'shmang." }] },
  { id: "ch07.new.tf-planner", chapter: C, kind: "tf", source: "new", topic: "Rejalashtiruvchi", prompt: "Xayrixoh ijtimoiy rejalashtiruvchi bozor natijasidan ko'ra samaraliroq taqsimot topa oladi, chunki u hamma narsani biladi.", answer: false, why: "Kitob xulosasi: raqobatli muvozanat allaqachon total surplusni maksimal qiladi — rejalashtiruvchi uni yaxshilay olmaydi (laissez-faire). Haqiqiy rejalashtiruvchilarda esa kerakli ma'lumot ham yo'q." },
  { id: "ch07.new.tf-organs", chapter: C, kind: "tf", source: "new", topic: "Organlar bozori", prompt: "Buyrak sotishni taqiqlash — iqtisodiy jihatdan nol darajadagi narx shifti va u taqchillik yaratadi.", answer: true, why: "Case Study: narx 0 da qonuniy sotib olish mumkin, sotish esa taqiqlangan — binding ceiling, natija: uzoq navbatlar va har yili minglab o'limlar." },
  mk("ch07.new.streaming", "Problem 10", "Problem 10: talab \\(Q^D = 150 - 50P\\). A provayder yiliga $120 (cheksiz), B — har film $1. Qaysi biri do'stingiz uchun yaxshi?", [
    { text: "A: 150 film, sof CS = 225 − 120 = $105", correct: true, why: "A da qo'shimcha film narxi 0 → 150 film, CS (to'lovgacha) ½·150·3 = 225, minus $120 = 105. B da 100 film, CS = ½·100·2 = 100." },
    { text: "B: chunki u arzonroq ($100 < $120)", why: "To'lov kamroq, lekin surplus ham kamroq (100 < 105)." },
    { text: "Farqi yo'q", why: "105 va 100 — biroz farq bor." },
    { text: "B: 150 film ko'radi", why: "B da narx $1 → 100 film." },
  ], 'new'),
  mk("ch07.new.tvs", "Siljish va surplus", "Problem 7: flat-screen TV ishlab chiqarish arzonladi va taklif juda egiluvchan. Kim ko'proq yutadi?", [
    { text: "Iste'molchilar", correct: true, why: "Taklif yotiq bo'lsa, xarajat kamayishi deyarli to'liq narx tushishiga aylanadi → CS keskin oshadi, PS deyarli o'zgarmaydi." },
    { text: "Ishlab chiqaruvchilar", why: "Egiluvchan taklifda narx xarajat bilan birga tushadi — sotuvchilar ortiqcha foyda saqlay olmaydi." },
    { text: "Teng", why: "Egiluvchanliklar teng emas." },
    { text: "Hech kim", why: "Narx tushib, miqdor oshadi — total surplus oshadi." },
  ], 'new'),
  { id: "ch07.new.match", chapter: C, kind: "match", source: "new", topic: "Atamalar", prompt: "Moslashtiring.", pairs: [
    { left: "Willingness to pay", right: "Xaridor to'lashga tayyor eng yuqori summa" },
    { left: "Consumer surplus", right: "WTP minus to'langan narx" },
    { left: "Producer surplus", right: "Olingan narx minus xarajat" },
    { left: "Efficiency", right: "Total surplus maksimal bo'lgan taqsimot" },
    { left: "Laissez-faire", right: "“Qo'yib ber” — bozorga aralashmaslik" },
  ] },
];

const marketD = { a: 10, b: 0.1 };
export const graphTasks: Question[] = [
  {
    id: "ch07.graph.cs-double",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: "Siljish va surplus",
    prompt: "TV ishlab chiqarish xarajatlari tushdi. Taklifni siljitib, **consumer surplusni kamida ikki barobar** oshiring (“Ortiqchalik maydonlari” tugmasini yoqing).",
    graph: { title: 'Flat-screen TV bozori', demand: marketD, supply: { c: 2, d: 0.1 }, xMax: 100, yMax: 10, modes: ['market'], surplus: true, surplusOn: true, qtyDigits: 0 },
    check: (s) => {
      const base = consumerSurplus(marketD, equilibrium(marketD, { c: 2, d: 0.1 }).P);
      if (Math.abs(s.D.a - marketD.a) > 1e-6) return { ok: false, msg: "Xarajatlar — taklif omili. Talabni joyida qoldiring." };
      const e = equilibrium(s.D, s.S);
      const cs = consumerSurplus(s.D, e.P);
      if (cs < 2 * base) return { ok: false, msg: `CS hozir $${cs.toFixed(0)} (boshida $${base.toFixed(0)}). Taklifni **o'ngga** ko'proq siljiting.` };
      return { ok: true, msg: `Zo'r: narx $${e.P.toFixed(2)} ga tushdi, CS $${base.toFixed(0)} → $${cs.toFixed(0)}. Eski xaridorlar kamroq to'laydi (to'rtburchak) va yangi xaridorlar kiradi (uchburchak).` };
    },
  },
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice, ...graphTasks];
