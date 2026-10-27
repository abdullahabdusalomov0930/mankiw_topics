import type { Question } from '../../types';
import { tr } from '../../../lib/lang';

const C = 14;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch14.qq.1", tr("Imkoniyat xarajati", 'Opportunity cost'), "Farmer McDonald gives banjo lessons for $20 per hour. One day, he spends 10 hours planting $100 worth of seeds on his farm. What total cost has he incurred?", [
    { text: "$100", why: tr("Faqat explicit xarajat — boy berilgan dars daromadi unutildi.", 'Only the explicit cost — the forgone tutoring income was forgotten.') },
    { text: "$200", why: tr("Faqat implicit xarajat — urug' unutildi.", 'Only the implicit cost — the seeds were forgotten.') },
    { text: "$300", correct: true, why: tr("$100 urug' (explicit) + 10 × $20 boy berilgan daromad (implicit).", '$100 of seeds (explicit) + 10 × $20 of forgone income (implicit).') },
    { text: "$400", why: tr("Hisob xato.", 'A calculation error.') },
  ]),
  mk("ch14.qq.2", tr("Foyda", 'Profit'), "Xavier opens a lemonade stand for two hours. He spends $10 for ingredients and sells $60 worth of lemonade. In the same two hours, he could have mowed his neighbor's lawn for $40. Xavier earns an accounting profit of ___ and an economic profit of ___.", [
    { text: "$50; $10", correct: true, why: "60 − 10 = 50; 60 − 10 − 40 = 10." },
    { text: "$90; $50", why: tr("Xarajatlarni qo'shib yubordingiz.", 'You added the costs.') },
    { text: "$10; $50", why: tr("Teskari: iqtisodiy foyda kichikroq.", 'The reverse: economic profit is smaller.') },
    { text: "$50; $90", why: tr("Iqtisodiy foyda buxgalteriya foydasidan katta bo'la olmaydi.", "Economic profit can't be larger than accounting profit.") },
  ]),
  mk("ch14.qq.3", tr("Marjinal mahsulot", 'Marginal product'), "Farmer Greene faces diminishing marginal product. With no seeds: no harvest; 1 bag: 3 bushels; 2 bags: 5 bushels. If she plants 3 bags, she gets", [
    { text: "6 bushels.", correct: true, why: tr("MP: 3, 2, keyin 2 dan kichik bo'lishi kerak → 5 + 1 = 6.", 'MP: 3, 2, then it must be less than 2 → 5 + 1 = 6.') },
    { text: "7 bushels.", why: tr("MP = 2 — kamaymadi.", "MP = 2 — it didn't fall.") },
    { text: "8 bushels.", why: tr("MP = 3 — oshdi.", 'MP = 3 — it rose.') },
    { text: "9 bushels.", why: tr("MP = 4 — oshdi.", 'MP = 4 — it rose.') },
  ]),
  mk("ch14.qq.4", tr("Egri chiziqlar shakli", 'Curve shapes'), "Diminishing marginal product explains why, as output increases,", [
    { text: "the production function and total-cost curve both get steeper.", why: tr("Ishlab chiqarish funksiyasi yotiqlashadi.", 'The production function gets flatter.') },
    { text: "the production function and total-cost curve both get flatter.", why: "Total-cost tiklashadi." },
    { text: "the production function gets steeper, and the total-cost curve gets flatter.", why: tr("Teskari.", 'The reverse.') },
    { text: "the production function gets flatter, and the total-cost curve gets steeper.", correct: true, why: tr("Bir tanganing ikki tomoni.", 'Two sides of the same coin.') },
  ]),
  mk("ch14.qq.5", tr("MC va ATC", 'MC and ATC'), "A firm is producing 1,000 units at a total cost of $5,000. When it increases production to 1,001 units, its total cost rises to $5,008. For this firm,", [
    { text: "marginal cost is $5, and average variable cost is $8.", why: tr("Teskari va AVC ni bilmaymiz.", "The reverse, and we don't know AVC.") },
    { text: "marginal cost is $8, and average variable cost is $5.", why: tr("$5 — ATC, AVC emas (FC noma'lum).", '$5 is ATC, not AVC (FC is unknown).') },
    { text: "marginal cost is $5, and average total cost is $8.", why: tr("Teskari.", 'The reverse.') },
    { text: "marginal cost is $8, and average total cost is $5.", correct: true, why: tr("MC = 5,008 − 5,000; ATC = 5,000 / 1,000.", 'MC = 5,008 − 5,000; ATC = 5,000 / 1,000.') },
  ]),
  mk("ch14.qq.6", tr("MC va ATC", 'MC and ATC'), "A firm is producing 20 units with an average total cost of $25 and a marginal cost of $15. If it increases production to 21 units, which of the following must occur?", [
    { text: "Marginal cost will decrease.", why: tr("MC ning yo'nalishi haqida ma'lumot yo'q.", "There's no information about the direction of MC.") },
    { text: "Marginal cost will increase.", why: tr("Aniq emas.", 'Not certain.') },
    { text: "Average total cost will decrease.", correct: true, why: tr("MC < ATC → o'rtacha tushadi (past baho GPA ni tushiradi).", 'MC < ATC → the average falls (a low grade lowers the GPA).') },
    { text: "Average total cost will increase.", why: "MC ATC dan past." },
  ]),
  mk("ch14.qq.7", "Fixed cost", "The government imposes a $1,000 per year license fee on all pizza restaurants. As a result, which cost curves shift?", [
    { text: "average total cost and marginal cost", why: tr("Fixed cost MC ga ta'sir qilmaydi.", "A fixed cost doesn't affect MC.") },
    { text: "average total cost and average fixed cost", correct: true, why: tr("Litsenziya — fixed cost: AFC va ATC oshadi, AVC va MC o'zgarmaydi.", "A license is a fixed cost: AFC and ATC rise, AVC and MC don't change.") },
    { text: "average variable cost and marginal cost", why: tr("Bu o'zgaruvchan xarajat oshganda.", "That's when variable cost rises.") },
    { text: "average variable cost and average fixed cost", why: tr("AVC o'zgarmaydi.", "AVC doesn't change.") },
  ]),
  mk("ch14.qq.8", tr("Miqyos", 'Scale'), "If a higher level of production allows workers to specialize in particular tasks, a firm will likely exhibit ___ of scale and ___ average total cost.", [
    { text: "economies; falling", correct: true, why: tr("Ixtisoslashuv → LR ATC tushadi.", 'Specialization → LR ATC falls.') },
    { text: "economies; rising", why: tr("Economies of scale — ATC tushadi.", 'Economies of scale — ATC falls.') },
    { text: "diseconomies; falling", why: tr("Diseconomies — ATC oshadi.", 'Diseconomies — ATC rises.') },
    { text: "diseconomies; rising", why: tr("Ixtisoslashuv economies beradi.", 'Specialization yields economies.') },
  ]),
  mk("ch14.qq.9", tr("Miqyos", 'Scale'), "If Boeing produces 9 jets per month, its long-run total cost is $9 million per month. If it produces 10 jets per month, its long-run total cost is $11 million per month. Boeing exhibits", [
    { text: "rising marginal cost.", why: tr("Faqat bitta MC ($2 mln) bor — o'sayotganini bilmaymiz.", "There's only one MC ($2 million) — we don't know it's rising.") },
    { text: "falling marginal cost.", why: tr("Bilmaymiz.", "We don't know.") },
    { text: "economies of scale.", why: tr("LR ATC $1 mln → $1.1 mln oshdi.", 'LR ATC rose from $1 million to $1.1 million.') },
    { text: "diseconomies of scale.", correct: true, why: tr("Uzoq muddatli ATC oshdi.", 'Long-run ATC rose.') },
  ]),
];

export const checks: Record<string, Question> = {
  "s-14-1a": { id: "ch14.check.14-1a", chapter: C, kind: "numeric", source: "new", topic: tr("Tushum", 'Revenue'), prompt: tr("Chloe 10,000 pechene ishlab chiqarib, har birini $2 dan sotadi. Total revenue?", 'Chloe produces 10,000 cookies and sells them at $2 each. Total revenue?'), answer: 20000, tolerance: 0, unit: "$", why: "TR = P × Q = 2 × 10,000." },
  "s-14-1b": mk("ch14.check.14-1b", tr("Implicit xarajat", 'Implicit cost'), tr("Chloe dasturchi bo'lib soatiga $100 topardi. Bu uning biznesi uchun qanday xarajat?", 'Chloe could earn $100 an hour as a programmer. What kind of cost is this for her business?'), [
    { text: tr("Implicit xarajat — pul to'lanmaydi, lekin haqiqiy imkoniyat xarajati; iqtisodchi hisoblaydi, buxgalter hisoblamaydi", "An implicit cost — no money is paid, but it is a real opportunity cost; an economist counts it, an accountant doesn't"), correct: true, why: tr("Agar dasturchi maoshi $300 ga oshsa, Chloe fabrikani yopishi mumkin — bu xarajat qarorga ta'sir qiladi.", "If programmers' pay rose to $300, Chloe might close the factory — this cost affects decisions.") },
    { text: tr("Explicit xarajat", 'An explicit cost'), why: tr("Pul to'lanmaydi.", 'No money is paid.') },
    { text: tr("Xarajat emas", 'Not a cost'), why: tr("Bu imkoniyat xarajati.", "It's an opportunity cost.") },
    { text: "Fixed cost", why: tr("Savol explicit/implicit haqida.", 'The question is about explicit/implicit.') },
  ], 'new'),
  "s-14-1c": { id: "ch14.check.14-1c", chapter: C, kind: "numeric", source: "new", topic: tr("Kapital xarajati", 'The cost of capital'), prompt: tr("Chloe $100,000 o'z jamg'armasi va $200,000 bank krediti (5%) bilan fabrika sotib oldi. Iqtisodchi nuqtai nazaridan yillik kapital xarajati?", "Chloe bought a factory with $100,000 of her own savings and a $200,000 bank loan (5%). From an economist's view, what is the annual cost of capital?"), answer: 15000, tolerance: 0, unit: "$", why: tr("Kredit foizi $10,000 (explicit) + o'z pulidan boy berilgan foiz $5,000 (implicit). Buxgalter faqat $10,000 ni ko'radi.", 'Loan interest $10,000 (explicit) + forgone interest on her own money $5,000 (implicit). An accountant sees only $10,000.'), traps: [{ value: 10000, why: tr("Bu buxgalter ko'radigan explicit qism.", "That's the explicit part an accountant sees.") }] },
  "s-14-1d": { id: "ch14.check.14-1d", chapter: C, kind: "tf", source: "new", topic: tr("Foyda", 'Profit'), prompt: tr("Buxgalteriya foydasi har doim iqtisodiy foydadan katta yoki teng.", 'Accounting profit is always greater than or equal to economic profit.'), answer: true, why: tr("Iqtisodiy foyda qo'shimcha ravishda implicit xarajatlarni ayiradi (Figure 1).", 'Economic profit additionally subtracts implicit costs (Figure 1).') },
  "s-14-2a": { id: "ch14.check.14-2a", chapter: C, kind: "numeric", source: "new", topic: tr("Marjinal mahsulot", 'Marginal product'), prompt: tr("Chloe: 3 ishchi — 120, 4 ishchi — 140 pechene. 4-ishchining marjinal mahsuloti?", 'Chloe: 3 workers — 120, 4 workers — 140 cookies. What is the marginal product of the 4th worker?'), answer: 20, tolerance: 0, why: "140 − 120 = 20." },
  "s-14-2b": { id: "ch14.check.14-2b", chapter: C, kind: "numeric", source: "new", topic: "Total cost", prompt: tr("Fabrika $30/soat, ishchi $10/soat. 5 ishchi bilan total cost (soatiga)?", 'The factory costs $30/hour, a worker $10/hour. What is total cost (per hour) with 5 workers?'), answer: 80, tolerance: 0, unit: "$", why: tr("30 + 5 × 10 = $80 → 150 pechene.", '30 + 5 × 10 = $80 → 150 cookies.') },
  "s-14-3a": { id: "ch14.check.14-3a", chapter: C, kind: "numeric", source: "new", topic: tr("Fixed va variable", 'Fixed and variable'), prompt: tr("Caleb 4 chashka qahva uchun jami $5.40 sarflaydi, fixed cost $3.00. Variable cost?", 'Caleb spends $5.40 in total for 4 cups of coffee; fixed cost is $3.00. Variable cost?'), answer: 2.4, tolerance: 0.001, unit: "$", why: "VC = TC − FC = 5.40 − 3.00." },
  "s-14-3b": { id: "ch14.check.14-3b", chapter: C, kind: "numeric", source: "new", topic: "MC", prompt: tr("Caleb: 6 chashka — $7.80, 7 chashka — $9.30. 7-chashkaning marjinal xarajati?", 'Caleb: 6 cups — $7.80, 7 cups — $9.30. Marginal cost of the 7th cup?'), answer: 1.5, tolerance: 0.001, unit: "$", why: "9.30 − 7.80 = $1.50." },
  "s-14-3c": mk("ch14.check.14-3c", tr("U shakli", 'The U shape'), tr("Nega ATC U shaklida?", 'Why is ATC U-shaped?'), [
    { text: tr("AFC doimo tushadi (fixed cost ko'proq birlikka taqsimlanadi), AVC esa oshadi (kamayuvchi MP) — avval birinchisi, keyin ikkinchisi ustun", 'AFC always falls (the fixed cost is spread over more units) while AVC rises (diminishing MP) — first the former dominates, then the latter'), correct: true, why: tr("“Arqon tortish”: minimum — efficient scale.", 'A “tug-of-war”: the minimum is the efficient scale.') },
    { text: tr("MC doimo tushadi", 'MC always falls'), why: tr("MC oshadi.", 'MC rises.') },
    { text: tr("Fixed cost o'sadi", 'Fixed cost grows'), why: tr("FC o'zgarmaydi.", "FC doesn't change.") },
    { text: tr("Narx o'zgaradi", 'The price changes'), why: tr("ATC narxga bog'liq emas.", "ATC doesn't depend on the price.") },
  ], 'new'),
  "s-14-3d": { id: "ch14.check.14-3d", chapter: C, kind: "tf", source: "new", topic: "Typical firm", prompt: tr("Ba'zi firmalarda marjinal mahsulot avval oshadi (jamoa vazifalarni bo'lishadi), keyin kamayadi — bunday firmaning MC va AVC egri chiziqlari ham avval tushib, keyin oshadi.", "In some firms marginal product first rises (the team divides tasks) and then falls — such a firm's MC and AVC curves also first fall and then rise."), answer: true, why: tr("Figure 5. Baribir uchta xossa saqlanadi: MC oxir-oqibat oshadi, ATC U shaklida, MC ATC ni minimumida kesadi.", 'Figure 5. All three properties still hold: MC eventually rises, ATC is U-shaped, MC crosses ATC at its minimum.') },
  "s-14-4a": mk("ch14.check.14-4a", tr("SR va LR", 'SR and LR'), tr("Ford o'rta fabrikada 1,000 dan 1,200 mashinaga o'tdi. Qisqa va uzoq muddatda ATC?", 'Ford, in a medium factory, goes from 1,000 to 1,200 cars. ATC in the short and long run?'), [
    { text: tr("Qisqa muddat: $10,000 → $12,000 (faqat ishchi qo'shadi); uzoq muddat: fabrika kengayadi, yana $10,000", 'Short run: $10,000 → $12,000 (it only adds workers); long run: the factory expands, $10,000 again'), correct: true, why: tr("Figure 6: SR egri chiziqlari LR dan pastda emas.", 'Figure 6: the SR curves are never below the LR curve.') },
    { text: tr("Ikkalasida ham $12,000", '$12,000 in both'), why: tr("Uzoq muddatda fabrika hajmi o'zgaradi.", 'In the long run the factory size changes.') },
    { text: tr("Qisqa muddatda tushadi", 'It falls in the short run'), why: tr("Kamayuvchi MP — oshadi.", 'Diminishing MP — it rises.') },
    { text: tr("O'zgarmaydi", "It doesn't change"), why: tr("SR da oshadi.", 'It rises in the SR.') },
  ], 'new'),
  "s-14-4b": { id: "ch14.check.14-4b", chapter: C, kind: "match", source: "new", topic: tr("Miqyos", 'Scale'), prompt: tr("Uzoq muddatli ATC xatti-harakatini atama bilan moslashtiring.", 'Match each behavior of long-run ATC with the term.'), pairs: [
    { left: tr("LR ATC tushadi", 'LR ATC falls'), right: "Economies of scale" },
    { left: tr("LR ATC o'zgarmaydi", 'LR ATC stays the same'), right: "Constant returns to scale" },
    { left: tr("LR ATC oshadi", 'LR ATC rises'), right: "Diseconomies of scale" },
  ] },
};

export const practice: Question[] = [
  { id: "ch14.new.buffy", chapter: C, kind: "numeric", source: "new", topic: "Problem 2", prompt: tr("Buffy: ijara va tovar $350,000, ishdan voz kechish $80,000, kutilgan sotuv $400,000. Iqtisodiy foyda?", 'Buffy: rent and merchandise $350,000, giving up a job $80,000, expected sales $400,000. Economic profit?'), answer: -30000, tolerance: 0, unit: "$", why: tr("400,000 − 350,000 − 80,000 = −$30,000 → ochmasligi kerak (buxgalter $50,000 foyda ko'rsatadi). Musbat foyda uchun tushum > $430,000.", "400,000 − 350,000 − 80,000 = −$30,000 → she shouldn't open (an accountant would show a $50,000 profit). For positive profit, revenue > $430,000."), traps: [{ value: 50000, why: tr("Bu buxgalteriya foydasi.", "That's accounting profit.") }] },
  { id: "ch14.new.console", chapter: C, kind: "numeric", source: "new", topic: "Problem 5", prompt: tr("600 konsol: ATC $300; 601 konsol: ATC $301. 601-konsolning marjinal xarajati?", '600 consoles: ATC $300; 601 consoles: ATC $301. Marginal cost of the 601st console?'), answer: 901, tolerance: 0, unit: "$", why: tr("TC: 180,000 → 180,901 → MC = $901 > $550 taklif → **rad eting**.", 'TC: 180,000 → 180,901 → MC = $901 > the $550 offer → **reject**.'), traps: [{ value: 301, why: tr("Bu ATC; qaror uchun MC kerak.", "That's ATC; the decision needs MC.") }, { value: 1, why: tr("ATC farqi; TC farqini hisoblang.", "That's the ATC difference; compute the TC difference.") }] },
  { id: "ch14.new.vinnie", chapter: C, kind: "numeric", source: "new", topic: "Problem 7", prompt: tr("Vinnie: FC $200, VC: 1 uy $10, 2 — $20, 3 — $40, 4 — $80, 5 — $160, 6 — $320, 7 — $640. Efficient scale (nechta uy)?", 'Vinnie: FC $200; VC: 1 house $10, 2 — $20, 3 — $40, 4 — $80, 5 — $160, 6 — $320, 7 — $640. Efficient scale (how many houses)?'), answer: 4, tolerance: 0, why: tr("ATC: 210, 110, 80, **70**, 72, 86.67, 120 → minimum 4 uyda.", 'ATC: 210, 110, 80, **70**, 72, 86.67, 120 → the minimum is at 4 houses.') },
  { id: "ch14.new.jane-mc", chapter: C, kind: "numeric", source: "new", topic: "Problem 9", prompt: "Jane: TC 0 vat — $30, 1 — $40, 2 — $55, 3 — $75, 4 — $100. 4-vatning MC?", answer: 25, tolerance: 0, unit: "$", why: tr("100 − 75 = 25. ATC: 40, 27.5, 25, 25 — MC ATC ni minimumi atrofida kesadi.", '100 − 75 = 25. ATC: 40, 27.5, 25, 25 — MC crosses ATC near its minimum.') },
  mk("ch14.new.firms", "Problem 10", tr("LR total cost (Q = 1…7): Firm B — $11, 24, 39, 56, 75, 96, 119. Bu firma qanday?", 'LR total cost (Q = 1…7): Firm B — $11, 24, 39, 56, 75, 96, 119. What kind of firm is this?'), [
    { text: tr("Diseconomies of scale: LR ATC 11, 12, 13, 14, 15, 16, 17 — oshib boradi", 'Diseconomies of scale: LR ATC 11, 12, 13, 14, 15, 16, 17 — rising'), correct: true, why: tr("Firm A ($60 → $120): ATC tushadi — economies. Firm C: avval tushadi (21 → 16.3), keyin oshadi.", 'Firm A ($60 → $120): ATC falls — economies. Firm C: first falls (21 → 16.3), then rises.') },
    { text: "Economies of scale", why: tr("ATC oshyapti.", 'ATC is rising.') },
    { text: "Constant returns", why: tr("ATC o'zgaryapti.", 'ATC is changing.') },
    { text: tr("Aniqlab bo'lmaydi", "Can't be determined"), why: tr("ATC = TC/Q.", 'ATC = TC/Q.') },
  ], 'new'),
  mk("ch14.new.burger-tax", "Problem 8", tr("Har bir burger uchun $1 soliq qaysi egri chiziqlarni siljitadi?", 'Which curves does a $1 tax on each burger shift?'), [
    { text: tr("AVC, ATC va MC — $1 ga yuqoriga; AFC o'zgarmaydi", "AVC, ATC, and MC — up by $1; AFC doesn't change"), correct: true, why: tr("Lump-sum $300 soliq esa faqat AFC va ATC ni siljitadi.", 'A $300 lump-sum tax, by contrast, shifts only AFC and ATC.') },
    { text: tr("Faqat AFC va ATC", 'Only AFC and ATC'), why: tr("Bu lump-sum soliq.", "That's the lump-sum tax.") },
    { text: tr("Faqat MC", 'Only MC'), why: tr("AVC va ATC ham.", 'AVC and ATC too.') },
    { text: "Hech biri", why: tr("O'zgaruvchan xarajat oshdi.", 'Variable cost rose.') },
  ], 'new'),
  { id: "ch14.new.match-cost", chapter: C, kind: "match", source: "new", topic: "Problem 1", prompt: tr("Gapni xarajat turi bilan to'ldiring.", 'Complete the sentence with the type of cost.'), pairs: [
    { left: tr("Biror harakat uchun voz kechilgan narsa", 'What is given up for an action'), right: "Opportunity cost" },
    { left: tr("MC undan past bo'lsa tushadi, yuqori bo'lsa oshadi", 'Falls when MC is below it, rises when MC is above'), right: "Average total cost" },
    { left: tr("Ishlab chiqarish miqdoriga bog'liq emas", "Doesn't depend on the quantity of output"), right: "Fixed cost" },
    { left: tr("Qisqa muddatda muzqaymoq uchun qaymoq va shakar", 'Cream and sugar for ice cream in the short run'), right: "Variable cost" },
    { left: tr("Yana bir birlik ishlab chiqarish xarajati", 'The cost of producing one more unit'), right: "Marginal cost" },
  ] },
  mk("ch14.new.uz", tr("O'zbekistondan misol", 'An example from Uzbekistan'), tr("Toshkentdagi somsaxona tandiri ijarasi oyiga 3 mln so'm, har bir somsa uchun go'sht va xamir 3,000 so'm. Kuniga 50 tadan 500 tagacha somsa yopsa, qaysi xarajat birlik boshiga tushadi?", 'A samsa shop in Tashkent rents its tandoor oven for 3 million soums a month; the meat and dough for each samsa cost 3,000 soums. If it bakes from 50 to 500 samsas a day, which per-unit cost falls?'), [
    { text: tr("AFC — ijara ko'proq somsaga taqsimlanadi; AVC (masalliq) deyarli o'zgarmaydi, lekin juda ko'p yopsa tandir band bo'lib MC oshadi", 'AFC — the rent is spread over more samsas; AVC (ingredients) barely changes, but if it bakes too many the oven gets crowded and MC rises'), correct: true, why: tr("U shaklidagi ATC mantiqi.", 'The logic of the U-shaped ATC.') },
    { text: tr("Masalliq narxi tushadi", 'The price of ingredients falls'), why: tr("Bitta somsa uchun masalliq bir xil.", 'The ingredients for one samsa are the same.') },
    { text: tr("Ijara oshadi", 'The rent rises'), why: "Ijara — fixed cost." },
    { text: tr("Hech narsa", 'Nothing'), why: tr("AFC tushadi.", 'AFC falls.') },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
