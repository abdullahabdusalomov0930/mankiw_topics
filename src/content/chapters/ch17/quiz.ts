import type { Question } from '../../types';

const C = 17;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });
const cond = ['marginal revenue is greater than marginal cost.', 'marginal revenue is greater than average total cost.', 'price is greater than marginal cost.', 'price is greater than average total cost.'];
const elas = ['increase; increase', 'increase; decrease', 'decrease; increase', 'decrease; decrease'];

export const quickQuiz: Question[] = [
  mk("ch17.qq.1", "Xususiyatlar", "Which of the following conditions does NOT describe a firm in a monopolistically competitive market?", [
    { text: "It sells a product different from its competitors.", why: "Bu xususiyat — farqlanish." },
    { text: "It takes its price as given by market conditions.", correct: true, why: "U price taker emas — talab egri chizig'i pastga qaragan." },
    { text: "It maximizes profit both in the short run and in the long run.", why: "Har qanday firma foydani maksimallashtiradi." },
    { text: "It has the freedom to enter or exit in the long run.", why: "Erkin kirish-chiqish — xususiyat." },
  ]),
  mk("ch17.qq.2", "Tasniflash", "Which of the following markets best fits the definition of monopolistic competition?", [
    { text: "wheat", why: "Bir xil mahsulot — mukammal raqobat." },
    { text: "tap water", why: "Monopoliya." },
    { text: "crude oil", why: "Bir xil tovar (oligopoliya ham)." },
    { text: "haircuts", correct: true, why: "Ko'p sartarosh, farqli xizmat, erkin kirish." },
  ]),
  mk("ch17.qq.3", "Qisqa muddat", "A monopolistically competitive firm will increase its production if", cond.map((c, i) => ({
    text: c,
    correct: i === 0,
    why: ["MR > MC — qo'shimcha birlik foydani oshiradi.", "Qaror MR va MC bo'yicha.", "Uzoq muddatda ham P > MC — bu ishlab chiqarishni oshirishga sabab emas.", "Bu kirish sharti."][i],
  }))),
  mk("ch17.qq.4", "Kirish", "New firms will enter a monopolistically competitive market if", cond.map((c, i) => ({
    text: c,
    correct: i === 3,
    why: ["Bu ishlab chiqarish qarori.", "Ma'nosiz taqqoslash.", "LR muvozanatda ham P > MC, lekin kirish yo'q.", "P > ATC — iqtisodiy foyda bor → kirish."][i],
  }))),
  mk("ch17.qq.5", "LR muvozanat", "What is true of a monopolistically competitive market in long-run equilibrium?", [
    { text: "Price is greater than marginal cost.", correct: true, why: "Markup: P = ATC > MC." },
    { text: "Price is equal to marginal revenue.", why: "MR < P (pastga qaragan talab)." },
    { text: "Firms make positive economic profits.", why: "Kirish foydani nolga tushiradi." },
    { text: "Firms produce at the minimum of average total cost.", why: "Excess capacity — minimumdan chapda." },
  ]),
  mk("ch17.qq.6", "Reklama", "If advertising makes consumers more loyal to particular brands, it could ___ the elasticity of demand and ___ the markup of price over marginal cost.", elas.map((e, i) => ({
    text: e,
    correct: i === 2,
    why: ["Sodiqlik elastiklikni kamaytiradi.", "Sodiqlik elastiklikni kamaytiradi.", "Kam elastik talab → katta markup (tanqidchilar fikri).", "Kam elastik talabda markup oshadi."][i],
  }))),
  mk("ch17.qq.7", "Reklama", "If advertising makes consumers more aware of alternative products, it could ___ the elasticity of demand and ___ the markup of price over marginal cost.", elas.map((e, i) => ({
    text: e,
    correct: i === 1,
    why: ["Elastik talabda markup kamayadi.", "Ko'proq tanlov → elastikroq talab → kichik markup (himoyachilar fikri).", "Axborot elastiklikni oshiradi.", "Axborot elastiklikni oshiradi."][i],
  }))),
  mk("ch17.qq.8", "Signal", "Advertising can be a signal of quality", [
    { text: "if advertising is freely available to all firms.", why: "Arzon reklamani hamma qiladi — signal yo'q." },
    { text: "if the benefit of attracting customers is greater for firms with better products.", correct: true, why: "Yaxshi mahsulot takroriy xarid beradi — faqat u qimmat reklamaga arziydi." },
    { text: "only if consumers are irrationally attracted to the products they see advertised.", why: "Aksincha — reklama qilingan mahsulotni sinash ratsional." },
    { text: "only if the content of the ads contains credible information about the products.", why: "Mazmun emas — reklama **narxi** signal." },
  ]),
];

export const checks: Record<string, Question> = {
  "s-17-1": { id: "ch17.check.17-1", chapter: C, kind: "match", source: "new", topic: "Bozor tuzilmalari", prompt: "Bozor tuzilmasini tavsifi bilan moslashtiring.", pairs: [
    { left: "Monopoly", right: "Bitta firma" },
    { left: "Oligopoly", right: "Bir nechta firma, strategik o'zaro ta'sir" },
    { left: "Monopolistic competition", right: "Ko'p firma, farqli mahsulot" },
    { left: "Perfect competition", right: "Ko'p firma, bir xil mahsulot" },
  ] },
  "s-17-2a": { id: "ch17.check.17-2a", chapter: C, kind: "tf", source: "new", topic: "Qisqa muddat", prompt: "Qisqa muddatda monopolistik raqobatchi monopolist kabi qaror qabul qiladi: MR = MC da miqdor, narx — talab egri chizig'idan.", answer: true, why: "Figure 2: foyda (a) yoki zarar (b) bo'lishi mumkin." },
  "s-17-2b": mk("ch17.check.17-2b", "Uzoq muddat", "Monopolistik raqobatchi firmalar foyda ko'rsa nima bo'ladi?", [
    { text: "Yangi firmalar kiradi → har bir firmaning talabi chapga siljiydi → talab ATC ga urinmaguncha (tangency) foyda kamayadi", correct: true, why: "Figure 3: P = ATC, foyda 0." },
    { text: "Narx MC gacha tushadi", why: "P = ATC > MC." },
    { text: "Firmalar chiqadi", why: "Foyda — kirish." },
    { text: "Talab o'ngga siljiydi", why: "Kirishda chapga." },
  ], 'new'),
  "s-17-2c": mk("ch17.check.17-2c", "Farqlar", "Mukammal raqobat bilan solishtirganda monopolistik raqobatning ikki farqi?", [
    { text: "Excess capacity (efficient scale dan kam) va markup (P > MC)", correct: true, why: "Figure 4." },
    { text: "Musbat LR foyda va kirish yo'q", why: "Bu monopoliya." },
    { text: "Kam firma va strategik o'zaro ta'sir", why: "Bu oligopoliya." },
    { text: "Farq yo'q", why: "Ikki farq bor." },
  ], 'new'),
  "s-17-2d": mk("ch17.check.17-2d", "Farovonlik", "Nega monopolistik raqobatda firmalar soni samarali bo'lmasligi mumkin?", [
    { text: "Kirishning ikki tashqi effekti: product-variety (ijobiy, iste'molchilarga) va business-stealing (salbiy, mavjud firmalarga) — qaysi biri katta bo'lishiga qarab firmalar juda ko'p yoki juda kam", correct: true, why: "Mukammal raqobatda bu effektlar yo'q." },
    { text: "Davlat cheklaydi", why: "Erkin kirish." },
    { text: "Firmalar doim juda ko'p", why: "Kam bo'lishi ham mumkin." },
    { text: "Firmalar doim juda kam", why: "Ko'p bo'lishi ham mumkin." },
  ], 'new'),
  "s-17-3a": { id: "ch17.check.17-3a", chapter: C, kind: "numeric", source: "new", topic: "Benham", prompt: "Benham (1972): reklama taqiqlangan shtatlarda ko'zoynak $33, ruxsat berilganlarda $26. Reklama narxni taxminan necha foiz kamaytirgan?", answer: 21, tolerance: 1.5, unit: "%", why: "(33 − 26)/33 ≈ 21% — “20% dan ko'p”. Rhode Island alkogol narxlari tadqiqoti ham shunday: reklama raqobat va past narxlarga olib keladi." },
  "s-17-3b": { id: "ch17.check.17-3b", chapter: C, kind: "tf", source: "new", topic: "Signal", prompt: "Signal nazariyasiga ko'ra, reklamaning mazmuni asosiy axborot manbai.", answer: false, why: "Mazmun emas — firma reklamaga **katta pul** sarflashga tayyorligi sifat haqida axborot beradi." },
  "s-17-3c": mk("ch17.check.17-3c", "Brendlar", "Brend nomlari foydasi haqida himoyachilarning ikki dalili?", [
    { text: "Oldindan baholab bo'lmaydigan sifat haqida axborot beradi va firmaga obro'sini saqlash uchun sifatni ushlab turish rag'batini beradi", correct: true, why: "McDonald's misoli." },
    { text: "Narxni pasaytiradi va soliqni kamaytiradi", why: "Brend tovarlar odatda qimmatroq." },
    { text: "Raqobatni yo'q qiladi", why: "Bu tanqidchilar xavotiri." },
    { text: "Iste'molchilarni irratsional qiladi", why: "Bu tanqid." },
  ], 'new'),
};

export const practice: Question[] = [
  { id: "ch17.new.p7-n", chapter: C, kind: "numeric", source: "new", topic: "Problem 7", prompt: "Har firma: Q = 100/N − P, TC = 50 + Q², MC = 2Q. Uzoq muddatda firmalar soni?", answer: 5, tolerance: 0, why: "Q = 25/N, P = 75/N, foyda = 1,250/N² − 50 = 0 → N = 5 (Q = 5, P = $15).", traps: [{ value: 25, why: "N² = 25 — ildiz oling." }] },
  { id: "ch17.new.p7-q", chapter: C, kind: "numeric", source: "new", topic: "Problem 7", prompt: "N = 5 da har bir firma narxi?", answer: 15, tolerance: 0, unit: "$", why: "P = 75/5 = 15 = ATC (50/5 + 5); MC = 10 → markup $5." },
  mk("ch17.new.p5", "Problem 5", "Monopolistik raqobatchi: P < MC, P > ATC. Firma foydani maksimallashtiryaptimi?", [
    { text: "Yo'q: P < MC → MR < MC, miqdorni kamaytirsa foyda oshadi", correct: true, why: "Foyda maksimumida MR = MC < P bo'lishi kerak." },
    { text: "Ha, uzoq muddatli muvozanatda", why: "LR da P = ATC." },
    { text: "Ha, lekin kirish bo'ladi", why: "Avval MR = MC ga keltirish kerak." },
    { text: "Ishlab chiqarishni oshirishi kerak", why: "Teskari." },
  ], 'new'),
  mk("ch17.new.p5d", "Problem 5d", "P > MC, P = ATC holati?", [
    { text: "Foyda maksimal bo'lishi mumkin va bu uzoq muddatli muvozanat (tangency)", correct: true, why: "Figure 3." },
    { text: "Kirish bo'ladi", why: "Foyda 0." },
    { text: "Chiqish bo'ladi", why: "Zarar yo'q." },
    { text: "Firma miqdorni oshirishi kerak", why: "MR = MC da." },
  ], 'new'),
  mk("ch17.new.nutville", "Problem 8", "Nutville'da barcha yeryong'oq pastasi brendlari bir xil ekani aniqlandi — bozor mukammal raqobatli bo'ldi. Uzoq muddatda tipik firma?", [
    { text: "Narx tushadi (P = min ATC), miqdor oshadi (efficient scale), ATC tushadi, MC oshadi, foyda 0 da qoladi", correct: true, why: "Excess capacity va markup yo'qoladi." },
    { text: "Narx oshadi", why: "Markup yo'qoladi." },
    { text: "Foyda oshadi", why: "Ikkalasida ham LR foyda 0." },
    { text: "Hech narsa o'zgarmaydi", why: "Firma efficient scale ga o'tadi." },
  ], 'new'),
  mk("ch17.new.ads", "Problem 9", "Qaysi biri ko'proq reklama qiladi: yangi qulay ustara ixtiro qilgan kompaniya yoki noqulay ustara ixtiro qilgan?", [
    { text: "Qulay ustara kompaniyasi — mijozlar takror sotib oladi, reklama o'zini oqlaydi (signal)", correct: true, why: "Shuningdek: restoran (fermadan ko'ra) va avtomobil (forkliftdan ko'ra) — farqli iste'mol tovarlari." },
    { text: "Noqulay ustara", why: "Takroriy xarid yo'q — reklama zarar." },
    { text: "Ikkalasi bir xil", why: "Signal sharti farq qiladi." },
    { text: "Hech biri", why: "Iste'mol tovarlari ko'p reklama qilinadi." },
  ], 'new'),
  { id: "ch17.new.tf-holiday", chapter: C, kind: "tf", source: "new", topic: "Markup", prompt: "Mukammal raqobatchi firma eshigidan joriy narxda yangi xaridor kirsa befarq, monopolistik raqobatchi esa doim xursand.", answer: true, why: "Raqobatchi: P = MC — qo'shimcha birlik foydasi 0. Monopolistik raqobatchi: P > MC — qo'shimcha foyda. Shuning uchun bayram tabriknomalari yuboradi." },
  mk("ch17.new.uz", "O'zbekistondan misol", "Toshkentda yuzlab choyxona va kafe bor, har birining menyusi va muhiti farqli, yangi kafe ochish oson. Bu qaysi bozor?", [
    { text: "Monopolistik raqobat: uzoq muddatda foyda 0 ga intiladi, lekin narx MC dan yuqori va kafelar ko'pincha to'liq band emas (excess capacity)", correct: true, why: "Uch xususiyat: ko'p sotuvchi, farqlanish, erkin kirish." },
    { text: "Mukammal raqobat", why: "Mahsulotlar farqli." },
    { text: "Oligopoliya", why: "Sotuvchilar ko'p." },
    { text: "Monopoliya", why: "Ko'p raqib bor." },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
