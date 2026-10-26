import { deadweightLoss, tax } from '../../../lib/econ';
import type { Question } from '../../types';
import { baseD, baseS, taxWelfare } from './presets';

const C = 8;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch08.qq.1", "DWL", "A tax on a good has a deadweight loss if", [
    { text: "the reduction in consumer and producer surplus is greater than the tax revenue.", correct: true, why: "DWL — CS va PS yo'qotishining tushumdan **ortiq** qismi (C + E)." },
    { text: "the tax revenue is greater than the reduction in consumer and producer surplus.", why: "Bunday bo'lmaydi: tushum yo'qotishlarning bir qismi (B + D)." },
    { text: "the reduction in consumer surplus is greater than the reduction in producer surplus.", why: "Bu yukning taqsimlanishi (incidence), DWL emas." },
    { text: "the reduction in producer surplus is greater than the reduction in consumer surplus.", why: "Xuddi shu — incidence haqida." },
  ]),
  mk("ch08.qq.2", "DWL hisoblash", "Donna runs an inn and charges $300 a night, which equals her cost. Sam, Harry, and Bill are willing to pay $500, $325, and $250. When the government levies a $50 tax on innkeepers, Donna raises her price to $350. The deadweight loss of the tax is", [
    { text: "$25.", correct: true, why: "Soliqsiz Harry $25 surplus bilan xona olardi ($325 − $300). $350 da u ketadi — uning $25 i hech kimga o'tmaydi. Sam qoladi: uning yo'qotgan $50 i davlatga ketadi." },
    { text: "$50.", why: "Samning $50 yo'qotishi — tushum, DWL emas." },
    { text: "$100.", why: "Bill soliqsiz ham xona olmasdi ($250 < $300) — u hisobga kirmaydi." },
    { text: "$150.", why: "Juda ko'p." },
  ]),
  mk("ch08.qq.3", "DWL hisoblash", "Sophie pays Sky $50 to mow her lawn every week. When the government levies a mowing tax of $10 on Sky, he raises his price to $60. Sophie continues to hire him. What is the change in producer surplus, the change in consumer surplus, and the deadweight loss?", [
    { text: "$0, $0, $10", why: "Sophie $10 ko'proq to'laydi — CS o'zgaradi." },
    { text: "$0, −$10, $0", correct: true, why: "Sky $60 − $10 = $50 oladi (PS bir xil), Sophie $10 ko'proq to'laydi (CS −10), bitim bo'ldi — DWL 0 ($10 davlatga ketdi)." },
    { text: "+$10, −$10, $10", why: "Sky soliqni to'laydi — uning sof daromadi o'zgarmaydi." },
    { text: "+$10, −$10, $0", why: "PS o'zgarmaydi: $60 − $10 = $50." },
  ]),
  mk("ch08.qq.4", "Egiluvchanlik", "If policymakers want to raise revenue by taxing goods while minimizing the deadweight losses, they should look for goods with ________ elasticities of demand and ________ elasticities of supply.", [
    { text: "small; small", correct: true, why: "Noegiluvchan bozorlarda soliq miqdorni kam qisqartiradi → kichik DWL." },
    { text: "small; large", why: "Katta taklif egiluvchanligi DWL ni oshiradi." },
    { text: "large; small", why: "Katta talab egiluvchanligi DWL ni oshiradi." },
    { text: "large; large", why: "Eng katta DWL." },
  ]),
  mk("ch08.qq.5", "Yer solig'i", "In the economy of Agricola, tenant farmers rent the land they use. If the supply of land is perfectly inelastic, then a tax on land would have ________ deadweight losses, and the burden of the tax would fall entirely on the ________.", [
    { text: "sizable; farmers", why: "Vertikal taklifda miqdor o'zgarmaydi — DWL yo'q." },
    { text: "sizable; landowners", why: "Yuk to'g'ri, DWL esa nol." },
    { text: "no; farmers", why: "Yuk kamroq egiluvchan tomonga — yer egalariga tushadi." },
    { text: "no; landowners", correct: true, why: "Mutlaqo noegiluvchan taklif: miqdor o'zgarmaydi (DWL = 0), narx to'liq soliq miqdoricha tushadi — yer egalari to'laydi." },
  ]),
  mk("ch08.qq.6", "Egiluvchanlik", "Suppose the demand for grape jelly is perfectly elastic (strawberry jelly is a good substitute), while the supply is unit elastic. A tax on grape jelly would have ________ deadweight losses, and the burden would fall entirely on the ________.", [
    { text: "sizable; consumers", why: "Gorizontal talabda xaridor narxi o'zgara olmaydi — ular yuk ko'tarmaydi." },
    { text: "sizable; producers", correct: true, why: "Talab juda egiluvchan → miqdor ko'p qisqaradi (katta DWL), narx tushishini sotuvchilar to'liq ko'taradi." },
    { text: "no; consumers", why: "Egiluvchan bozorda DWL katta." },
    { text: "no; producers", why: "Yuk to'g'ri, DWL noto'g'ri." },
  ]),
  mk("ch08.qq.7", "Laffer", "The Laffer curve shows that, in some circumstances, the government can **reduce** a tax on a good and increase the", [
    { text: "price paid by consumers.", why: "Soliq kamaysa, xaridor narxi **tushadi**." },
    { text: "equilibrium quantity.", why: "Bu har doim to'g'ri, “ba'zi sharoitlarda” emas — Laffer egri chizig'i tushum haqida." },
    { text: "deadweight loss.", why: "Soliq kamaysa DWL kamayadi." },
    { text: "government's tax revenue.", correct: true, why: "Agar soliq cho'qqidan o'ng tomonda bo'lsa, uni kamaytirish bozorni shunchalik kengaytiradiki, tushum oshadi." },
  ]),
  mk("ch08.qq.8", "DWL kattaligi", "Eggs have linear supply and demand curves. If a 2 cent per egg tax is increased to 3 cents, the deadweight loss of the tax", [
    { text: "increases by less than 50 percent and may even decline.", why: "DWL soliq bilan har doim oshadi va proporsiyadan tezroq." },
    { text: "increases by exactly 50 percent.", why: "Bu chiziqli bog'liqlik bo'lardi; DWL esa kvadratik." },
    { text: "increases by more than 50 percent.", correct: true, why: "DWL ∝ T²: (3/2)² = 2.25 → 125% ga oshadi." },
    { text: "The answer depends on whether supply or demand is more elastic.", why: "Chiziqli egri chiziqlarda nisbat egiluvchanlikdan qat'i nazar (1.5)² ." },
  ]),
  mk("ch08.qq.9", "Tushum", "Peanut butter has an upward-sloping supply curve and a downward-sloping demand curve. If a 10 cent per pound tax is increased to 15 cents, the government's tax revenue", [
    { text: "increases by less than 50 percent and may even decline.", correct: true, why: "Soliq 50% oshadi, lekin miqdor kamayadi → tushum 50% dan kam oshadi; cho'qqidan o'tgan bo'lsa, hatto kamayadi." },
    { text: "increases by exactly 50 percent.", why: "Faqat miqdor o'zgarmasa (vertikal egri chiziq)." },
    { text: "increases by more than 50 percent.", why: "Miqdor qisqargani uchun bunday bo'lmaydi." },
    { text: "The answer depends on whether supply or demand is more elastic.", why: "Kattaligi bog'liq, lekin “50% dan kam” har doim to'g'ri." },
  ]),
];

export const checks: Record<string, Question> = {
  "s-8-1a": { id: "ch08.check.8-1a", chapter: C, kind: "numeric", source: "new", topic: "DWL", prompt: "Soliqsiz 1,000 xona ijaraga beriladi. $10 soliq bilan 900 xona. Deadweight loss?", answer: 500, tolerance: 0, unit: "$", why: "\\(\\tfrac12 \\times 10 \\times (1000 - 900) = 500\\). Tushum esa $9,000.", traps: [{ value: 1000, why: "½ ni unutdingiz — DWL uchburchak." }, { value: 9000, why: "Bu tushum (T × Q)." }] },
  "s-8-1b": mk("ch08.check.8-1b", "Savdodan yutuq", "Malik Meining uyini $100 ga tozalaydi; uning xarajati $80, Mei uchun qiymat $120. Tozalovchilarga **$50** soliq qo'yildi. Nima bo'ladi?", [
    { text: "Bitim bekor bo'ladi; $40 sof yo'qotish, davlat hech narsa olmaydi", correct: true, why: "Savdodan yutuq 120 − 80 = 40 < 50 soliq. Hech bir narx ikkalasini qoniqtirmaydi. Ikkalasi $20 dan yo'qotadi — bu toza DWL." },
    { text: "Malik narxni $150 ga ko'taradi", why: "Mei $120 dan ko'p to'lamaydi." },
    { text: "Davlat $50 oladi", why: "Bitim bo'lmasa, soliq ham to'lanmaydi." },
    { text: "Hech narsa o'zgarmaydi", why: "Soliq yutuqdan katta — bitim yo'qoladi." },
  ], 'new'),
  "s-8-2": mk("ch08.check.8-2", "Egiluvchanlik", "Qaysi bozorda bir xil soliq **eng katta** DWL yaratadi?", [
    { text: "Talab ham, taklif ham juda egiluvchan", correct: true, why: "Ikkala tomon ham kuchli javob beradi → miqdor ko'p qisqaradi → katta uchburchak." },
    { text: "Talab ham, taklif ham noegiluvchan", why: "Miqdor kam qisqaradi — DWL kichik." },
    { text: "Taklif mutlaqo noegiluvchan", why: "DWL nol." },
    { text: "Farqi yo'q", why: "DWL egiluvchanlikka kuchli bog'liq." },
  ], 'new'),
  "s-8-3": { id: "ch08.check.8-3", chapter: C, kind: "numeric", source: "new", topic: "DWL kattaligi", prompt: "Soliq **uch barobar** oshirildi (chiziqli egri chiziqlar). DWL necha barobar oshadi?", answer: 9, tolerance: 0, unit: "marta", why: "DWL ∝ T²: 3² = 9.", traps: [{ value: 3, why: "DWL — uchburchak: asosi ham, balandligi ham 3 barobar → 9." }, { value: 6, why: "Kvadratga oshiring, 2 ga ko'paytirmang." }] },
};

export const practice: Question[] = [
  { id: "ch08.new.hotel20", chapter: C, kind: "numeric", source: "new", topic: "Tushum", prompt: "Problem 9b: soliq $20 ga oshdi, 800 xona ijaraga beriladi. Tushum?", answer: 16000, tolerance: 0, unit: "$", why: "20 × 800 = 16,000 — $9,000 dan **ikki barobardan kam** oshdi (miqdor kamaydi).", traps: [{ value: 18000, why: "Bu 9,000 × 2 — lekin miqdor 900 dan 800 ga tushdi." }] },
  { id: "ch08.new.p10-rev", chapter: C, kind: "numeric", source: "new", topic: "Laffer", prompt: "Problem 10: \\(R(T) = T(200 - 2T/3)\\). Tushum qaysi T da **maksimal**?", answer: 150, tolerance: 0, unit: "$", why: "\\(R'(T) = 200 - 4T/3 = 0 \\Rightarrow T = 150\\), \\(R = 15{,}000\\). T = 300 da tushum nol." },
  { id: "ch08.new.p10-200", chapter: C, kind: "mcq", source: "new", topic: "Laffer", prompt: "Problem 10e: $200 soliq yaxshi siyosatmi?", options: [
    { text: "Yo'q: $100 soliq xuddi shuncha tushum ($13,333) beradi, DWL esa $13,333 o'rniga atigi $3,333", correct: true, why: "$200 Laffer cho'qqisidan ($150) o'ngda. Soliqni kamaytirib, tushumni saqlab, DWL ni to'rt barobar kamaytirish mumkin." },
    { text: "Ha, chunki tushum maksimal", why: "Maksimum T = $150 da." },
    { text: "Ha, chunki DWL nol", why: "DWL = T²/3 = 13,333." },
    { text: "Yo'q, chunki tushum nol", why: "Tushum nol faqat T = 300 da." },
  ] },
  { id: "ch08.new.tf-norev", chapter: C, kind: "tf", source: "new", topic: "DWL", prompt: "Problem 2b: “Hech qanday tushum keltirmaydigan soliqda sof yo'qotish ham bo'lmaydi.”", answer: false, why: "Juda katta soliq bozorni butunlay yo'q qilishi mumkin: tushum 0, lekin DWL — butun total surplus (Moynihanning 10,000% soliqli o'qlari)." },
  { id: "ch08.new.tf-nodwl", chapter: C, kind: "tf", source: "new", topic: "DWL", prompt: "Problem 2a: “Sof yo'qotishi yo'q soliq hech qanday tushum keltira olmaydi.”", answer: false, why: "Mutlaqo noegiluvchan taklif (yoki talab) bo'lsa, miqdor o'zgarmaydi → DWL 0, lekin tushum T × Q > 0 (yer solig'i)." },
  { id: "ch08.new.tf-subsidy", chapter: C, kind: "tf", source: "new", topic: "Subsidiya", prompt: "Problem 8: xaridorlarga har birlik uchun $2 subsidiya ham sof yo'qotish yaratadi.", answer: true, why: "Subsidiya miqdorni muvozanatdan **oshiradi**: qo'shimcha birliklarning xarajati qiymatidan katta. Davlat xarajati CS + PS o'sishidan ko'p — farq DWL." },
  mk("ch08.new.food", "Siyosat", "Problem 5: oziq-ovqatga soliq solish taklif qilindi, chunki talab noegiluvchan. Bunda qaysi gap to'g'ri?", [
    { text: "Samaradorlik nuqtai nazaridan yaxshi (kichik DWL), lekin adolat nuqtai nazaridan yomon — kambag'allar daromadining katta qismini ovqatga sarflaydi", correct: true, why: "Efficiency vs equity — 1-bobdagi trade-off." },
    { text: "Har jihatdan yaxshi", why: "Kambag'allarga og'ir yuk — adolat muammosi." },
    { text: "DWL katta bo'ladi", why: "Noegiluvchan talab — kichik DWL." },
    { text: "Tushum bo'lmaydi", why: "Miqdor kam qisqaradi — tushum katta." },
  ], 'new'),
  mk("ch08.new.labor", "DWL bahsi", "Nega iqtisodchilar mehnat solig'ining DWL i katta yoki kichikligi haqida bahslashadi?", [
    { text: "Mehnat taklifi egiluvchanligi haqida turli fikrlar bor", correct: true, why: "Taklif noegiluvchan (hamma baribir to'liq ishlaydi) bo'lsa — DWL kichik; egiluvchan (qo'shimcha soatlar, ikkinchi ish, nafaqa, soya iqtisodiyot) bo'lsa — katta." },
    { text: "Soliq stavkasini bilishmaydi", why: "Stavka ma'lum (~40%) — muammo egiluvchanlikda." },
    { text: "Mehnat talabi vertikal", why: "Bahs asosan taklif tomonida." },
    { text: "Bahs yo'q", why: "Kitob: “The debate … persists to this day.”" },
  ], 'new'),
  { id: "ch08.new.match", chapter: C, kind: "match", source: "new", topic: "Figure 3", prompt: "Figure 3 dagi maydonlarni ma'nosi bilan moslashtiring.", pairs: [
    { left: "A", right: "Soliqdan keyin qolgan consumer surplus" },
    { left: "B + D", right: "Soliq tushumi" },
    { left: "C + E", right: "Deadweight loss" },
    { left: "F", right: "Soliqdan keyin qolgan producer surplus" },
    { left: "B + C", right: "Consumer surplus yo'qotishi" },
  ] },
];

export const graphTasks: Question[] = [
  {
    id: "ch08.graph.dwl-target",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: "DWL",
    prompt: "Shunday soliq tanlangki, **sof yo'qotish (DWL) $20 dan oshsin**, lekin tushum **kamida $90** bo'lsin.",
    graph: { ...taxWelfare, tax: 1 },
    check: (s) => {
      const t = tax(s.D, s.S, s.tax);
      const dwl = deadweightLoss(s.D, s.S, s.tax);
      if (dwl <= 20) return { ok: false, msg: `DWL hozir $${dwl.toFixed(1)}. Soliqni oshiring — DWL T² bilan o'sadi.` };
      if (t.revenue < 90) return { ok: false, msg: `Tushum $${t.revenue.toFixed(1)} — juda katta soliq bozorni qisqartirib yubordi (Laffer). Biroz kamaytiring.` };
      return { ok: true, msg: `T = $${s.tax.toFixed(2)}: DWL $${dwl.toFixed(1)}, tushum $${t.revenue.toFixed(1)}. Ko'rdingizmi: tushum o'sishi sekinlashadi, DWL esa tezlashadi.` };
    },
  },
  {
    id: "ch08.graph.min-dwl",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: "Egiluvchanlik",
    prompt: "$2 soliq bor. Egiluvchanlik slayderlari bilan bozorni shunday o'zgartiringki, DWL **$5 dan kam** bo'lsin.",
    graph: { ...taxWelfare, slopeControls: true },
    check: (s) => {
      const dwl = deadweightLoss(s.D, s.S, s.tax);
      const base = deadweightLoss(baseD, baseS, 2);
      return dwl < 5
        ? { ok: true, msg: `DWL $${base.toFixed(0)} → $${dwl.toFixed(1)}. Noegiluvchan (tik) egri chiziqlar bilan soliq miqdorni kam o'zgartiradi — kichik DWL.` }
        : { ok: false, msg: `DWL hozir $${dwl.toFixed(1)}. Talabni yoki taklifni **noegiluvchanroq** (tikroq) qiling.` };
    },
  },
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice, ...graphTasks];
