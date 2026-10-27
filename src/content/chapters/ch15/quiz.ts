import type { Question } from '../../types';

const C = 15;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });
const rel = ['P > MC and P > ATC.', 'P > MC and P = ATC.', 'P = MC and P > ATC.', 'P = MC and P = ATC.'];

export const quickQuiz: Question[] = [
  mk("ch15.qq.1", "Raqobat", "A perfectly competitive firm", [
    { text: "chooses its price to maximize profits.", why: "Raqobatchi firma narxni tanlay olmaydi." },
    { text: "sets its price to undercut other firms selling similar products.", why: "U bozor narxida xohlagancha sota oladi — arzonlashtirishga sabab yo'q." },
    { text: "takes its price as given by market conditions.", correct: true, why: "Price taker." },
    { text: "picks the price that yields the largest market share.", why: "Narx tanlanmaydi." },
  ]),
  mk("ch15.qq.2", "Tushum", "When a perfectly competitive firm increases the quantity it produces and sells by 10 percent, its marginal revenue ___ and its total revenue rises by ___.", [
    { text: "falls; less than 10 percent", why: "MR = P o'zgarmaydi." },
    { text: "falls; exactly 10 percent", why: "MR o'zgarmaydi." },
    { text: "stays the same; less than 10 percent", why: "TR = P × Q — Q bilan proporsional." },
    { text: "stays the same; exactly 10 percent", correct: true, why: "P o'zgarmas → TR aynan 10% oshadi." },
  ]),
  mk("ch15.qq.3", "Foyda maksimumi", "A competitive firm maximizes profit by choosing the quantity at which", [
    { text: "average total cost is at its minimum.", why: "Bu faqat uzoq muddatli muvozanatda P ga to'g'ri keladi." },
    { text: "marginal cost equals the price.", correct: true, why: "MR = P, demak MR = MC ⇔ P = MC." },
    { text: "average total cost equals the price.", why: "Bu foyda nol bo'ladigan nuqta." },
    { text: "marginal cost equals average total cost.", why: "Bu efficient scale." },
  ]),
  mk("ch15.qq.4", "Taklif egri chizig'i", "A competitive firm's short-run supply curve is its ___ cost curve above its ___ cost curve.", [
    { text: "average-total-; marginal-", why: "Taklif — MC egri chizig'i." },
    { text: "average-variable-; marginal-", why: "Teskari." },
    { text: "marginal-; average-total-", why: "Bu **uzoq** muddatli taklif." },
    { text: "marginal-; average-variable-", correct: true, why: "Qisqa muddatda fixed cost sunk — P < AVC bo'lsa yopiladi." },
  ]),
  mk("ch15.qq.5", "Shutdown/exit", "If a profit-maximizing competitive firm is producing a quantity at which marginal cost is between average variable cost and average total cost, it will", [
    { text: "keep producing in the short run but exit the market in the long run.", correct: true, why: "P = MC, demak AVC < P < ATC: qisqa muddatda yopishdan ko'ra kam zarar, uzoq muddatda chiqish." },
    { text: "shut down in the short run but return to production in the long run.", why: "P > AVC — yopish shart emas." },
    { text: "shut down in the short run and exit the market in the long run.", why: "Qisqa muddatda ishlash zararni kamaytiradi." },
    { text: "keep producing both in the short run and in the long run.", why: "P < ATC — uzoq muddatda zarar." },
  ]),
  mk("ch15.qq.6", "LR muvozanat", "In the long-run equilibrium of a competitive market with identical firms, what are the relationships among price P, marginal cost MC, and average total cost ATC?", rel.map((r, i) => ({
    text: r,
    correct: i === 3,
    why: ["Foyda maksimumida P = MC.", "Foyda maksimumida P = MC.", "P > ATC — foyda bor, kirish davom etadi.", "P = MC (foyda maks.) va P = ATC (nol foyda) → min ATC."][i],
  }))),
  mk("ch15.qq.7", "SR muvozanat", "In the short-run equilibrium of a competitive market with identical firms, if new firms are getting ready to enter, what are the relationships among P, MC, and ATC?", rel.map((r, i) => ({
    text: r,
    correct: i === 2,
    why: ["Firma baribir P = MC da ishlab chiqaradi.", "P = ATC bo'lsa kirish yo'q.", "Foyda musbat (P > ATC) — kirish rag'bati.", "Bu uzoq muddatli muvozanat — kirish yo'q."][i],
  }))),
  mk("ch15.qq.8", "Fixed cost soliq", "Pretzel stands in New York City are a perfectly competitive market in long-run equilibrium. The city imposes a $100 per month tax on each stand. How does this affect the number of pretzels consumed in the short run and the long run?", [
    { text: "down in the short run, no change in the long run", why: "Qisqa muddatda MC o'zgarmaydi." },
    { text: "up in the short run, no change in the long run", why: "Hech narsa oshmaydi." },
    { text: "no change in the short run, down in the long run", correct: true, why: "Soliq — fixed cost: qisqa muddatda MC (taklif) o'zgarmaydi; zarar → ba'zi rastalar chiqadi → narx oshadi, iste'mol kamayadi." },
    { text: "no change in the short run, up in the long run", why: "Chiqish taklifni kamaytiradi." },
  ]),
];

export const checks: Record<string, Question> = {
  "s-15-1a": { id: "ch15.check.15-1a", chapter: C, kind: "tf", source: "new", topic: "Raqobat", prompt: "Raqobatchi firmalar price taker bo'lishi uchun erkin kirish-chiqish sharti albatta kerak.", answer: false, why: "Price taker bo'lish uchun ko'p sotuvchi va bir xil tovar yetarli. Erkin kirish-chiqish uzoq muddatli muvozanatni shakllantiradi." },
  "s-15-1b": { id: "ch15.check.15-1b", chapter: C, kind: "numeric", source: "new", topic: "Tushum", prompt: "Sut gallon $6. Vaca fermasi 1,000 dan 2,000 gallonga o'tsa, total revenue (dollarda)?", answer: 12000, tolerance: 0, unit: "$", why: "TR = 6 × 2,000 — ikki barobar; narx o'zgarmaydi." },
  "s-15-2a": { id: "ch15.check.15-2a", chapter: C, kind: "numeric", source: "new", topic: "Foyda maks.", prompt: "Vaca fermasi TC: 0 gal — $3, 1 — 5, 2 — 8, 3 — 12, 4 — 17, 5 — 23, 6 — 30. P = $6. Maksimal foyda?", answer: 7, tolerance: 0, unit: "$", why: "Foyda: −3, 1, 4, 6, 7, 7, 6 → 4 yoki 5 gallonda $7." },
  "s-15-2b": mk("ch15.check.15-2b", "MC = taklif", "Narx P₁ dan P₂ ga oshdi. Raqobatchi firma nima qiladi?", [
    { text: "MC egri chizig'i bo'ylab yangi P₂ = MC nuqtagacha ishlab chiqarishni oshiradi — MC egri chizig'i firma taklif egri chizig'i", correct: true, why: "Figure 2." },
    { text: "Ishlab chiqarishni o'zgartirmaydi", why: "P₂ > MC eski Q da — oshirish foydali." },
    { text: "ATC minimumigacha", why: "Qoida — P = MC." },
    { text: "Narxni ham oshiradi", why: "Narx — bozordan." },
  ], 'new'),
  "s-15-2c": { id: "ch15.check.15-2c", chapter: C, kind: "tf", source: "new", topic: "Shutdown", prompt: "Firma narx ATC dan past bo'lishi bilanoq darhol ishlab chiqarishni to'xtatishi kerak.", answer: false, why: "Qisqa muddatda fixed cost sunk — P > AVC bo'lsa ishlash zararni kamaytiradi. Faqat P < AVC da yoping." },
  "s-15-2d": mk("ch15.check.15-2d", "Sunk cost", "Kinoni $15 ga baholaysiz, chipta $10. Kirishdan oldin chiptani yo'qotdingiz. Nima qilasiz?", [
    { text: "Yana $10 ga chipta oling: foyda $15 > yangi xarajat $10; yo'qolgan $10 — sunk cost", correct: true, why: "“To'kilgan sut uchun yig'lamang.”" },
    { text: "Uyga ketaman — jami $20 juda qimmat", why: "Sunk cost'ni qarorga kiritdingiz." },
    { text: "Faqat $5 to'layman", why: "Chipta $10." },
    { text: "Farqi yo'q", why: "Kinoni ko'rish $5 sof yutuq beradi." },
  ], 'new'),
  "s-15-2e": { id: "ch15.check.15-2e", chapter: C, kind: "match", source: "new", topic: "Qoidalar", prompt: "Shartni qisqa yoki uzoq muddatli qaror bilan moslashtiring.", pairs: [
    { left: "P < AVC", right: "Shut down (qisqa muddat)" },
    { left: "P < ATC", right: "Exit (uzoq muddat)" },
    { left: "P > ATC", right: "Enter / qoling" },
  ] },
  "s-15-2f": { id: "ch15.check.15-2f", chapter: C, kind: "numeric", source: "new", topic: "Foyda yuzasi", prompt: "P = $10, Q = 100, ATC = $8. Foyda?", answer: 200, tolerance: 0, unit: "$", why: "(10 − 8) × 100 = $200 — to'rtburchak yuzasi." },
  "s-15-2g": mk("ch15.check.15-2g", "Recap", "Fred va Wilma: P = MC dagi Q da AVC < P < ATC. Nima qilishadi?", [
    { text: "Qisqa muddatda ishlashadi (zararni kamaytiradi), uzoq muddatda chiqishni rejalashtirishadi", correct: true, why: "Table 3, 3-qoida." },
    { text: "Darhol yopishadi", why: "Faqat P < AVC da." },
    { text: "Qolib, foydadan zavqlanishadi", why: "P < ATC — zarar." },
    { text: "Narxni oshirishadi", why: "Price takers." },
  ], 'new'),
  "s-15-3a": { id: "ch15.check.15-3a", chapter: C, kind: "numeric", source: "new", topic: "Bozor taklifi", prompt: "1,000 bir xil firma; har biri $2 narxda 200 birlik taklif qiladi. Bozor taklifi?", answer: 200000, tolerance: 0, why: "Gorizontal yig'indi: 1,000 × 200 (Figure 6)." },
  "s-15-3b": mk("ch15.check.15-3b", "Nol foyda", "Nega erkin kirish-chiqishda uzoq muddatda firmalar efficient scale da ishlaydi?", [
    { text: "Foyda maksimumi P = MC, nol foyda P = ATC talab qiladi; MC = ATC faqat ATC minimumida", correct: true, why: "LR taklif min ATC da gorizontal." },
    { text: "Davlat buyuradi", why: "Bozor kuchlari." },
    { text: "Talab shunday", why: "Talab firmalar sonini belgilaydi, narxni emas." },
    { text: "Firmalar foydani yomon ko'radi", why: "Foyda kirish orqali yo'qoladi." },
  ], 'new'),
  "s-15-3c": { id: "ch15.check.15-3c", chapter: C, kind: "numeric", source: "new", topic: "Nol foyda", prompt: "Fermer $1 mln investitsiya qilgan (bankda $40,000 foiz olardi) va $60,000 maoshli ishdan voz kechgan. Iqtisodiy foyda 0 bo'lsa, buxgalteriya foydasi?", answer: 100000, tolerance: 0, unit: "$", why: "Implicit xarajatlar $40,000 + $60,000 — buxgalter ularni hisoblamaydi." },
  "s-15-3d": mk("ch15.check.15-3d", "Talab siljishi", "Sut juda foydali ekani aniqlanib talab oshdi. Qisqa va uzoq muddatda nima bo'ladi?", [
    { text: "SR: narx P₁ → P₂, foyda paydo bo'ladi; LR: yangi fermalar kiradi, narx P₁ ga qaytadi, miqdor ancha oshadi", correct: true, why: "Figure 8: A → B → C." },
    { text: "Narx doimiy ravishda P₂ da qoladi", why: "Kirish narxni tushiradi." },
    { text: "Hech narsa o'zgarmaydi", why: "SR da narx oshadi." },
    { text: "Firmalar chiqib ketadi", why: "Foyda — kirish." },
  ], 'new'),
  "s-15-3e": { id: "ch15.check.15-3e", chapter: C, kind: "tf", source: "new", topic: "LR taklif", prompt: "Agar firmalarning xarajatlari turlicha bo'lsa yoki ba'zi resurslar (yer) cheklangan bo'lsa, LR taklif egri chizig'i yuqoriga qaragan bo'lishi mumkin va arzon firmalar uzoq muddatda ham foyda ko'radi.", answer: true, why: "Narx marjinal firmaning ATC iga teng — u nol foyda ko'radi, arzonroqlar musbat. Baribir LR taklif SR dan elastikroq." },
};

export const practice: Question[] = [
  mk("ch15.new.leah", "Problem 2", "Leah bir maysazor uchun $27 oladi; kuniga 10 ta maysazor; TC $280, shundan $30 fixed. Qaror?", [
    { text: "AVC $25 < P < ATC $28: qisqa muddatda ishlaydi, uzoq muddatda chiqadi", correct: true, why: "Yopilsa zarar $30, ishlasa $10 (270 − 280)." },
    { text: "Darhol yopadi", why: "P > AVC." },
    { text: "Uzoq muddatda ham qoladi", why: "P < ATC." },
    { text: "Narxni $28 ga oshiradi", why: "Price taker." },
  ], 'new'),
  { id: "ch15.new.ball", chapter: C, kind: "numeric", source: "new", topic: "Problem 4", prompt: "Ball Bearings: FC $100, VC 0, 50, 70, 90, 140, 200, 360 (0–6 quti). P = $50. Eng yaxshi qarorda foyda (zarar manfiy)?", answer: -40, tolerance: 0, unit: "$", why: "MC: 50, 20, 20, 50, 60, 160. 3 yoki 4 quti: TR 150/200 − TC 190/240 = −$40. Yopish: −$100; 1 quti: 50 − 150 = −$100. Demak ishlash yaxshi.", traps: [{ value: -100, why: "Bu yopish (yoki 1 quti) zarari — 3–4 quti kamroq zarar beradi." }] },
  { id: "ch15.new.ectenia-n", chapter: C, kind: "numeric", source: "new", topic: "Problem 9", prompt: "Ectenia: FC $9, MC 2, 4, 6, 8, 10, 12; talab P = $11 da 200 pirog. Har bir ishlab chiqaruvchi 5 pirog yopsa, nechta ishlab chiqaruvchi?", answer: 40, tolerance: 0, why: "200 / 5 = 40; har biri foyda 55 − 39 = $16 → kirish bo'ladi. LR: P = min ATC = $7 (q = 3), talab 600, 200 ta ishlab chiqaruvchi." },
  { id: "ch15.new.ectenia-lr", chapter: C, kind: "numeric", source: "new", topic: "Problem 9d", prompt: "Ectenia uzoq muddatda: TC = 9 + (2 + 4 + … ); ATC: 11, 7.5, 7, 7.25, 7.8, 8.5. LR narx?", answer: 7, tolerance: 0, unit: "$", why: "Min ATC = $7 (q = 3). Talab 600 pirog → 200 ishlab chiqaruvchi, foyda 0." },
  { id: "ch15.new.p10", chapter: C, kind: "numeric", source: "new", topic: "Problem 10", prompt: "100 firma, FC $16, AVC = q (q = 1…6). Narx $10. Bozor taklifi?", answer: 500, tolerance: 0, why: "VC = q² → MC: 1, 3, 5, 7, 9, 11; P = 10 da q = 5 → 500. LR: narx min ATC = $8 (q = 4) ga tushadi.", traps: [{ value: 600, why: "6-birlik MC = 11 > 10." }] },
  { id: "ch15.new.p11", chapter: C, kind: "numeric", source: "new", topic: "Problem 11", prompt: "TC = 50 + ½q², MC = q; talab Q = 120 − 5P; 9 firma. Qisqa muddatli muvozanat narxi (2 xona)?", answer: 8.57, tolerance: 0.01, unit: "$", why: "Firma taklifi q = P → bozor 9P = 120 − 5P → P = 120/14 ≈ 8.57. Har firma zarar ko'radi (≈ −$13.3) → chiqish; LR: P = min ATC = $10 (q = 10), Q = 70, 7 firma." },
  mk("ch15.new.pretzel", "Fixed-cost soliq", "Uzoq muddatli muvozanatdagi raqobatli bozorda har bir firmaga oyiga $100 litsenziya to'lovi qo'yildi. Uzoq muddatda nima bo'ladi?", [
    { text: "Min ATC oshadi → narx yangi, yuqoriroq min ATC ga ko'tariladi; firmalar soni va iste'mol kamayadi", correct: true, why: "QQ 8 mantiqi." },
    { text: "Narx o'zgarmaydi", why: "LR narx = min ATC, u oshdi." },
    { text: "Firmalar ko'payadi", why: "Zarar → chiqish." },
    { text: "MC oshadi, narx darhol oshadi", why: "Fixed cost MC ga ta'sir qilmaydi." },
  ], 'new'),
  mk("ch15.new.uz", "O'zbekistondan misol", "Chorsu bozorida yuzlab sotuvchi bir xil pomidor sotadi. Bir sotuvchi narxni boshqalardan 20% yuqori qo'ysa nima bo'ladi?", [
    { text: "Xaridorlar qo'shni rastadan oladi — u price taker, MR = bozor narxi", correct: true, why: "Ko'p sotuvchi, bir xil tovar — raqobatli bozor." },
    { text: "Tushumi 20% oshadi", why: "Sotuv deyarli nolga tushadi." },
    { text: "Boshqalar ham narx oshiradi", why: "Ular bozor narxida xohlagancha sota oladi." },
    { text: "Monopoliya foydasi oladi", why: "Bozor hokimiyati yo'q." },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
