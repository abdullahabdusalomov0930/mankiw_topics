import type { Question } from '../../types';

const C = 14;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch14.qq.1", "Imkoniyat xarajati", "Farmer McDonald gives banjo lessons for $20 per hour. One day, he spends 10 hours planting $100 worth of seeds on his farm. What total cost has he incurred?", [
    { text: "$100", why: "Faqat explicit xarajat — boy berilgan dars daromadi unutildi." },
    { text: "$200", why: "Faqat implicit xarajat — urug' unutildi." },
    { text: "$300", correct: true, why: "$100 urug' (explicit) + 10 × $20 boy berilgan daromad (implicit)." },
    { text: "$400", why: "Hisob xato." },
  ]),
  mk("ch14.qq.2", "Foyda", "Xavier opens a lemonade stand for two hours. He spends $10 for ingredients and sells $60 worth of lemonade. In the same two hours, he could have mowed his neighbor's lawn for $40. Xavier earns an accounting profit of ___ and an economic profit of ___.", [
    { text: "$50; $10", correct: true, why: "60 − 10 = 50; 60 − 10 − 40 = 10." },
    { text: "$90; $50", why: "Xarajatlarni qo'shib yubordingiz." },
    { text: "$10; $50", why: "Teskari: iqtisodiy foyda kichikroq." },
    { text: "$50; $90", why: "Iqtisodiy foyda buxgalteriya foydasidan katta bo'la olmaydi." },
  ]),
  mk("ch14.qq.3", "Marjinal mahsulot", "Farmer Greene faces diminishing marginal product. With no seeds: no harvest; 1 bag: 3 bushels; 2 bags: 5 bushels. If she plants 3 bags, she gets", [
    { text: "6 bushels.", correct: true, why: "MP: 3, 2, keyin 2 dan kichik bo'lishi kerak → 5 + 1 = 6." },
    { text: "7 bushels.", why: "MP = 2 — kamaymadi." },
    { text: "8 bushels.", why: "MP = 3 — oshdi." },
    { text: "9 bushels.", why: "MP = 4 — oshdi." },
  ]),
  mk("ch14.qq.4", "Egri chiziqlar shakli", "Diminishing marginal product explains why, as output increases,", [
    { text: "the production function and total-cost curve both get steeper.", why: "Ishlab chiqarish funksiyasi yotiqlashadi." },
    { text: "the production function and total-cost curve both get flatter.", why: "Total-cost tiklashadi." },
    { text: "the production function gets steeper, and the total-cost curve gets flatter.", why: "Teskari." },
    { text: "the production function gets flatter, and the total-cost curve gets steeper.", correct: true, why: "Bir tanganing ikki tomoni." },
  ]),
  mk("ch14.qq.5", "MC va ATC", "A firm is producing 1,000 units at a total cost of $5,000. When it increases production to 1,001 units, its total cost rises to $5,008. For this firm,", [
    { text: "marginal cost is $5, and average variable cost is $8.", why: "Teskari va AVC ni bilmaymiz." },
    { text: "marginal cost is $8, and average variable cost is $5.", why: "$5 — ATC, AVC emas (FC noma'lum)." },
    { text: "marginal cost is $5, and average total cost is $8.", why: "Teskari." },
    { text: "marginal cost is $8, and average total cost is $5.", correct: true, why: "MC = 5,008 − 5,000; ATC = 5,000 / 1,000." },
  ]),
  mk("ch14.qq.6", "MC va ATC", "A firm is producing 20 units with an average total cost of $25 and a marginal cost of $15. If it increases production to 21 units, which of the following must occur?", [
    { text: "Marginal cost will decrease.", why: "MC ning yo'nalishi haqida ma'lumot yo'q." },
    { text: "Marginal cost will increase.", why: "Aniq emas." },
    { text: "Average total cost will decrease.", correct: true, why: "MC < ATC → o'rtacha tushadi (past baho GPA ni tushiradi)." },
    { text: "Average total cost will increase.", why: "MC ATC dan past." },
  ]),
  mk("ch14.qq.7", "Fixed cost", "The government imposes a $1,000 per year license fee on all pizza restaurants. As a result, which cost curves shift?", [
    { text: "average total cost and marginal cost", why: "Fixed cost MC ga ta'sir qilmaydi." },
    { text: "average total cost and average fixed cost", correct: true, why: "Litsenziya — fixed cost: AFC va ATC oshadi, AVC va MC o'zgarmaydi." },
    { text: "average variable cost and marginal cost", why: "Bu o'zgaruvchan xarajat oshganda." },
    { text: "average variable cost and average fixed cost", why: "AVC o'zgarmaydi." },
  ]),
  mk("ch14.qq.8", "Miqyos", "If a higher level of production allows workers to specialize in particular tasks, a firm will likely exhibit ___ of scale and ___ average total cost.", [
    { text: "economies; falling", correct: true, why: "Ixtisoslashuv → LR ATC tushadi." },
    { text: "economies; rising", why: "Economies of scale — ATC tushadi." },
    { text: "diseconomies; falling", why: "Diseconomies — ATC oshadi." },
    { text: "diseconomies; rising", why: "Ixtisoslashuv economies beradi." },
  ]),
  mk("ch14.qq.9", "Miqyos", "If Boeing produces 9 jets per month, its long-run total cost is $9 million per month. If it produces 10 jets per month, its long-run total cost is $11 million per month. Boeing exhibits", [
    { text: "rising marginal cost.", why: "Faqat bitta MC ($2 mln) bor — o'sayotganini bilmaymiz." },
    { text: "falling marginal cost.", why: "Bilmaymiz." },
    { text: "economies of scale.", why: "LR ATC $1 mln → $1.1 mln oshdi." },
    { text: "diseconomies of scale.", correct: true, why: "Uzoq muddatli ATC oshdi." },
  ]),
];

export const checks: Record<string, Question> = {
  "s-14-1a": { id: "ch14.check.14-1a", chapter: C, kind: "numeric", source: "new", topic: "Tushum", prompt: "Chloe 10,000 pechene ishlab chiqarib, har birini $2 dan sotadi. Total revenue?", answer: 20000, tolerance: 0, unit: "$", why: "TR = P × Q = 2 × 10,000." },
  "s-14-1b": mk("ch14.check.14-1b", "Implicit xarajat", "Chloe dasturchi bo'lib soatiga $100 topardi. Bu uning biznesi uchun qanday xarajat?", [
    { text: "Implicit xarajat — pul to'lanmaydi, lekin haqiqiy imkoniyat xarajati; iqtisodchi hisoblaydi, buxgalter hisoblamaydi", correct: true, why: "Agar dasturchi maoshi $300 ga oshsa, Chloe fabrikani yopishi mumkin — bu xarajat qarorga ta'sir qiladi." },
    { text: "Explicit xarajat", why: "Pul to'lanmaydi." },
    { text: "Xarajat emas", why: "Bu imkoniyat xarajati." },
    { text: "Fixed cost", why: "Savol explicit/implicit haqida." },
  ], 'new'),
  "s-14-1c": { id: "ch14.check.14-1c", chapter: C, kind: "numeric", source: "new", topic: "Kapital xarajati", prompt: "Chloe $100,000 o'z jamg'armasi va $200,000 bank krediti (5%) bilan fabrika sotib oldi. Iqtisodchi nuqtai nazaridan yillik kapital xarajati?", answer: 15000, tolerance: 0, unit: "$", why: "Kredit foizi $10,000 (explicit) + o'z pulidan boy berilgan foiz $5,000 (implicit). Buxgalter faqat $10,000 ni ko'radi.", traps: [{ value: 10000, why: "Bu buxgalter ko'radigan explicit qism." }] },
  "s-14-1d": { id: "ch14.check.14-1d", chapter: C, kind: "tf", source: "new", topic: "Foyda", prompt: "Buxgalteriya foydasi har doim iqtisodiy foydadan katta yoki teng.", answer: true, why: "Iqtisodiy foyda qo'shimcha ravishda implicit xarajatlarni ayiradi (Figure 1)." },
  "s-14-2a": { id: "ch14.check.14-2a", chapter: C, kind: "numeric", source: "new", topic: "Marjinal mahsulot", prompt: "Chloe: 3 ishchi — 120, 4 ishchi — 140 pechene. 4-ishchining marjinal mahsuloti?", answer: 20, tolerance: 0, why: "140 − 120 = 20." },
  "s-14-2b": { id: "ch14.check.14-2b", chapter: C, kind: "numeric", source: "new", topic: "Total cost", prompt: "Fabrika $30/soat, ishchi $10/soat. 5 ishchi bilan total cost (soatiga)?", answer: 80, tolerance: 0, unit: "$", why: "30 + 5 × 10 = $80 → 150 pechene." },
  "s-14-3a": { id: "ch14.check.14-3a", chapter: C, kind: "numeric", source: "new", topic: "Fixed va variable", prompt: "Caleb 4 chashka qahva uchun jami $5.40 sarflaydi, fixed cost $3.00. Variable cost?", answer: 2.4, tolerance: 0.001, unit: "$", why: "VC = TC − FC = 5.40 − 3.00." },
  "s-14-3b": { id: "ch14.check.14-3b", chapter: C, kind: "numeric", source: "new", topic: "MC", prompt: "Caleb: 6 chashka — $7.80, 7 chashka — $9.30. 7-chashkaning marjinal xarajati?", answer: 1.5, tolerance: 0.001, unit: "$", why: "9.30 − 7.80 = $1.50." },
  "s-14-3c": mk("ch14.check.14-3c", "U shakli", "Nega ATC U shaklida?", [
    { text: "AFC doimo tushadi (fixed cost ko'proq birlikka taqsimlanadi), AVC esa oshadi (kamayuvchi MP) — avval birinchisi, keyin ikkinchisi ustun", correct: true, why: "“Arqon tortish”: minimum — efficient scale." },
    { text: "MC doimo tushadi", why: "MC oshadi." },
    { text: "Fixed cost o'sadi", why: "FC o'zgarmaydi." },
    { text: "Narx o'zgaradi", why: "ATC narxga bog'liq emas." },
  ], 'new'),
  "s-14-3d": { id: "ch14.check.14-3d", chapter: C, kind: "tf", source: "new", topic: "Typical firm", prompt: "Ba'zi firmalarda marjinal mahsulot avval oshadi (jamoa vazifalarni bo'lishadi), keyin kamayadi — bunday firmaning MC va AVC egri chiziqlari ham avval tushib, keyin oshadi.", answer: true, why: "Figure 5. Baribir uchta xossa saqlanadi: MC oxir-oqibat oshadi, ATC U shaklida, MC ATC ni minimumida kesadi." },
  "s-14-4a": mk("ch14.check.14-4a", "SR va LR", "Ford o'rta fabrikada 1,000 dan 1,200 mashinaga o'tdi. Qisqa va uzoq muddatda ATC?", [
    { text: "Qisqa muddat: $10,000 → $12,000 (faqat ishchi qo'shadi); uzoq muddat: fabrika kengayadi, yana $10,000", correct: true, why: "Figure 6: SR egri chiziqlari LR dan pastda emas." },
    { text: "Ikkalasida ham $12,000", why: "Uzoq muddatda fabrika hajmi o'zgaradi." },
    { text: "Qisqa muddatda tushadi", why: "Kamayuvchi MP — oshadi." },
    { text: "O'zgarmaydi", why: "SR da oshadi." },
  ], 'new'),
  "s-14-4b": { id: "ch14.check.14-4b", chapter: C, kind: "match", source: "new", topic: "Miqyos", prompt: "Uzoq muddatli ATC xatti-harakatini atama bilan moslashtiring.", pairs: [
    { left: "LR ATC tushadi", right: "Economies of scale" },
    { left: "LR ATC o'zgarmaydi", right: "Constant returns to scale" },
    { left: "LR ATC oshadi", right: "Diseconomies of scale" },
  ] },
};

export const practice: Question[] = [
  { id: "ch14.new.buffy", chapter: C, kind: "numeric", source: "new", topic: "Problem 2", prompt: "Buffy: ijara va tovar $350,000, ishdan voz kechish $80,000, kutilgan sotuv $400,000. Iqtisodiy foyda?", answer: -30000, tolerance: 0, unit: "$", why: "400,000 − 350,000 − 80,000 = −$30,000 → ochmasligi kerak (buxgalter $50,000 foyda ko'rsatadi). Musbat foyda uchun tushum > $430,000.", traps: [{ value: 50000, why: "Bu buxgalteriya foydasi." }] },
  { id: "ch14.new.console", chapter: C, kind: "numeric", source: "new", topic: "Problem 5", prompt: "600 konsol: ATC $300; 601 konsol: ATC $301. 601-konsolning marjinal xarajati?", answer: 901, tolerance: 0, unit: "$", why: "TC: 180,000 → 180,901 → MC = $901 > $550 taklif → **rad eting**.", traps: [{ value: 301, why: "Bu ATC; qaror uchun MC kerak." }, { value: 1, why: "ATC farqi; TC farqini hisoblang." }] },
  { id: "ch14.new.vinnie", chapter: C, kind: "numeric", source: "new", topic: "Problem 7", prompt: "Vinnie: FC $200, VC: 1 uy $10, 2 — $20, 3 — $40, 4 — $80, 5 — $160, 6 — $320, 7 — $640. Efficient scale (nechta uy)?", answer: 4, tolerance: 0, why: "ATC: 210, 110, 80, **70**, 72, 86.67, 120 → minimum 4 uyda." },
  { id: "ch14.new.jane-mc", chapter: C, kind: "numeric", source: "new", topic: "Problem 9", prompt: "Jane: TC 0 vat — $30, 1 — $40, 2 — $55, 3 — $75, 4 — $100. 4-vatning MC?", answer: 25, tolerance: 0, unit: "$", why: "100 − 75 = 25. ATC: 40, 27.5, 25, 25 — MC ATC ni minimumi atrofida kesadi." },
  mk("ch14.new.firms", "Problem 10", "LR total cost (Q = 1…7): Firm B — $11, 24, 39, 56, 75, 96, 119. Bu firma qanday?", [
    { text: "Diseconomies of scale: LR ATC 11, 12, 13, 14, 15, 16, 17 — oshib boradi", correct: true, why: "Firm A ($60 → $120): ATC tushadi — economies. Firm C: avval tushadi (21 → 16.3), keyin oshadi." },
    { text: "Economies of scale", why: "ATC oshyapti." },
    { text: "Constant returns", why: "ATC o'zgaryapti." },
    { text: "Aniqlab bo'lmaydi", why: "ATC = TC/Q." },
  ], 'new'),
  mk("ch14.new.burger-tax", "Problem 8", "Har bir burger uchun $1 soliq qaysi egri chiziqlarni siljitadi?", [
    { text: "AVC, ATC va MC — $1 ga yuqoriga; AFC o'zgarmaydi", correct: true, why: "Lump-sum $300 soliq esa faqat AFC va ATC ni siljitadi." },
    { text: "Faqat AFC va ATC", why: "Bu lump-sum soliq." },
    { text: "Faqat MC", why: "AVC va ATC ham." },
    { text: "Hech biri", why: "O'zgaruvchan xarajat oshdi." },
  ], 'new'),
  { id: "ch14.new.match-cost", chapter: C, kind: "match", source: "new", topic: "Problem 1", prompt: "Gapni xarajat turi bilan to'ldiring.", pairs: [
    { left: "Biror harakat uchun voz kechilgan narsa", right: "Opportunity cost" },
    { left: "MC undan past bo'lsa tushadi, yuqori bo'lsa oshadi", right: "Average total cost" },
    { left: "Ishlab chiqarish miqdoriga bog'liq emas", right: "Fixed cost" },
    { left: "Qisqa muddatda muzqaymoq uchun qaymoq va shakar", right: "Variable cost" },
    { left: "Yana bir birlik ishlab chiqarish xarajati", right: "Marginal cost" },
  ] },
  mk("ch14.new.uz", "O'zbekistondan misol", "Toshkentdagi somsaxona tandiri ijarasi oyiga 3 mln so'm, har bir somsa uchun go'sht va xamir 3,000 so'm. Kuniga 50 tadan 500 tagacha somsa yopsa, qaysi xarajat birlik boshiga tushadi?", [
    { text: "AFC — ijara ko'proq somsaga taqsimlanadi; AVC (masalliq) deyarli o'zgarmaydi, lekin juda ko'p yopsa tandir band bo'lib MC oshadi", correct: true, why: "U shaklidagi ATC mantiqi." },
    { text: "Masalliq narxi tushadi", why: "Bitta somsa uchun masalliq bir xil." },
    { text: "Ijara oshadi", why: "Ijara — fixed cost." },
    { text: "Hech narsa", why: "AFC tushadi." },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
