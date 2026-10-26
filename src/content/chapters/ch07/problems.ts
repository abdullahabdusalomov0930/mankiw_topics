import type { Problem } from '../../types';

const C = 7;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch07.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch07.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "Explain how buyers' willingness to pay, consumer surplus, and the demand curve are related.", [
    "Talab egri chizig'ining balandligi — marjinal xaridorning **WTP** si (talab jadvali WTP lardan quriladi).",
    "Har bir xaridorning CS = WTP − narx.",
    "Shuning uchun bozor CS = talab egri chizig'i **ostida** va narx **ustidagi** maydon.",
  ], "The demand curve traces WTP; consumer surplus is the area below it and above the price."),
  r(2, "Explain how sellers' costs, producer surplus, and the supply curve are related.", [
    "Taklif egri chizig'ining balandligi — marjinal sotuvchining **xarajati**.",
    "Har bir sotuvchining PS = narx − xarajat.",
    "Bozor PS = narx **ostida** va taklif egri chizig'i **ustidagi** maydon.",
  ], "The supply curve traces costs; producer surplus is the area above it and below the price."),
  r(3, "In a supply-and-demand diagram, show producer surplus and consumer surplus at the market equilibrium.", [
    "Kesishma E (Q*, P*).",
    "CS — talab, narx chizig'i P* va vertikal o'q orasidagi uchburchak (yuqorida).",
    "PS — narx chizig'i, taklif va vertikal o'q orasidagi uchburchak (pastda). Figure 7 ga qarang.",
  ], "CS: triangle above P* under demand; PS: triangle below P* above supply."),
  r(4, "What is **efficiency**? Is it the only goal of economic policymakers?", [
    "Efficiency — total surplus (CS + PS) maksimal bo'lgan taqsimot.",
    "Yagona maqsad emas: siyosatchilar **equality** (farovonlik qanchalik teng taqsimlangani) haqida ham qayg'uradi. Samaradorlik — pirog hajmi, tenglik — uni bo'lish.",
  ], "Maximizing total surplus; no — equality also matters."),
  r(5, "Name two types of **market failure**. Explain why each may cause market outcomes to be inefficient.", [
    "**Market power**: bitta sotuvchi yoki kichik guruh narxni nazorat qila oladi → narx va miqdor muvozanatdan chetlashadi.",
    "**Externalities**: bozor qarorlari begonalarga (masalan, ifloslanish) ta'sir qiladi, lekin xaridor/sotuvchilar buni hisobga olmaydi → jamiyat nuqtai nazaridan noto'g'ri miqdor.",
  ], "Market power and externalities."),
];

export const problems: Problem[] = [
  p(1, "Kyra buys an iPhone for $360 and gets consumer surplus of $240. (a) What is her willingness to pay? (b) If she had bought it on sale for $270, what would her consumer surplus have been? (c) If the price were $750?", [
    "(a) WTP = 360 + 240 = **$600**.",
    "(b) CS = 600 − 270 = **$330**.",
    "(c) $750 > $600 — sotib olmaydi, CS = **$0**.",
  ], "(a) $600 (b) $330 (c) $0."),
  p(2, "An early freeze in California sours the lemon crop. Explain what happens to consumer surplus in the market for lemons. In the market for lemonade.", [
    "Limon: taklif ↓ → narx ↑, miqdor ↓ → **CS kamayadi**.",
    "Limonad: limon — xomashyo → limonad taklifi ↓ → narx ↑ → **CS kamayadi**.",
  ], "Consumer surplus falls in both markets."),
  p(3, "Suppose the demand for French bread rises. Explain what happens to producer surplus in the market for French bread. In the market for flour.", [
    "Non: talab ↑ → narx ↑, miqdor ↑ → **PS oshadi**.",
    "Un: ko'proq non uchun ko'proq un kerak → un talabi ↑ → un narxi ↑ → un ishlab chiqaruvchilari **PS oshadi**.",
  ], "Producer surplus rises in both markets."),
  p(4, "Bert's values: first bottle $7, second $5, third $3, fourth $1. (a) Derive his demand schedule. (b) At $4, how many bottles does he buy and what is his consumer surplus? (c) If the price falls to $2?", [
    "(a) P > $7: 0; $5 < P ≤ $7: 1; $3 < P ≤ $5: 2; $1 < P ≤ $3: 3; P ≤ $1: 4.",
    "(b) $4: **2 shisha**, CS = (7−4) + (5−4) = **$4**.",
    "(c) $2: **3 shisha**, CS = 5 + 3 + 1 = **$9** — $5 ga oshdi.",
  ], "(b) 2 bottles, CS $4. (c) 3 bottles, CS $9.", "bert"),
  p(5, "Ernie's costs: first bottle $1, second $3, third $5, fourth $7. (a) Derive his supply schedule. (b) At $4, how many does he sell and what is his producer surplus? (c) If the price rises to $6?", [
    "(a) P < $1: 0; $1 ≤ P < $3: 1; $3 ≤ P < $5: 2; $5 ≤ P < $7: 3; P ≥ $7: 4.",
    "(b) $4: **2 shisha**, PS = (4−1) + (4−3) = **$4**.",
    "(c) $6: **3 shisha**, PS = 5 + 3 + 1 = **$9**.",
  ], "(b) 2 bottles, PS $4. (c) 3 bottles, PS $9.", "ernie"),
  p(6, "A market in which Bert is the buyer and Ernie is the seller. (a) Quantity supplied and demanded at $2, $4, $6. Which price is the equilibrium? (b) CS, PS, total surplus? (c) If one fewer bottle were traded? (d) One additional bottle?", [
    "(a) $2: Qs 1, Qd 3; $4: 2 va 2; $6: Qs 3, Qd 1 → muvozanat **$4**.",
    "(b) CS = 4, PS = 4, **TS = 8**.",
    "(c) 1 shisha: TS = 7 − 1 = 6 → **2 ga kamayadi** (ikkinchi shishaning qiymati 5 > xarajati 3).",
    "(d) 3 shisha: uchinchisining qiymati 3 < xarajati 5 → TS = 8 − 2 = **6**. Ikkalasi ham muvozanatdan yomonroq — muvozanat samarali.",
  ], "(a) $4 (b) CS 4, PS 4, TS 8 (c) TS falls to 6 (d) TS falls to 6."),
  p(7, "The cost of producing flat-screen TVs has fallen. (a) Show the effect on price and quantity. (b) What happens to consumer and producer surplus? (c) If supply is very elastic, who benefits most?", [
    "(a) Taklif o'ngga → narx ↓, miqdor ↑.",
    "(b) CS **oshadi**. PS — ikki kuch: narx past (−), lekin miqdor ko'p va xarajat past (+) → noaniq.",
    "(c) Taklif juda egiluvchan bo'lsa, narx deyarli xarajat bilan birga tushadi → yutuq asosan **iste'molchilarga**.",
  ], "Price falls, quantity rises; CS rises; with very elastic supply consumers gain most."),
  p(8, "Four consumers' WTP for haircuts: Gloria $35, Jay $10, Claire $40, Phil $25. Firms' costs: A $15, B $30, C $20, D $10. Each firm can give at most one haircut. To achieve efficiency, how many haircuts should be given? Which businesses and which consumers? Maximum total surplus?", [
    "WTP larni kamayish tartibida: Claire 40, Gloria 35, Phil 25, Jay 10. Xarajatlarni o'sish tartibida: D 10, A 15, C 20, B 30.",
    "Juftlaymiz: 40 vs 10 (+30), 35 vs 15 (+20), 25 vs 20 (+5), 10 vs 30 (−20 — qilinmaydi).",
    "**3 ta** soch olish: firmalar **D, A, C**; mijozlar **Claire, Gloria, Phil**.",
    "Maksimal TS = 30 + 20 + 5 = **$55**.",
  ], "3 haircuts (firms D, A, C; Claire, Gloria, Phil); total surplus $55."),
  p(9, "Technological advances have reduced the cost of making computers. (a) Show what happened to price, quantity, CS, and PS in the computer market. (b) Typewriters: complements or substitutes? Show the effects. Should typewriter producers be happy? (c) Computers and software: complements or substitutes? Effects? (d) Does this explain why Bill Gates became one of the world's richest people?", [
    "(a) Taklif ↑ → P ↓, Q ↑, CS ↑, PS — noaniq.",
    "(b) Yozuv mashinkasi — **o'rinbosar** → talab ↓ → P ↓, Q ↓, CS va PS ↓ → ishlab chiqaruvchilar **xafa**.",
    "(c) Dasturlar — **to'ldiruvchi** → talab ↑ → P ↑, Q ↑, CS va PS ↑ → dastur ishlab chiqaruvchilar **xursand**.",
    "(d) Ha: arzon kompyuterlar Microsoft dasturlariga talabni ko'tarib, ulkan producer surplus berdi.",
  ], "Computers: supply up. Typewriters (substitute): demand down. Software (complement): demand up — good for Microsoft."),
  p(10, "Provider A charges $120 per year regardless of the number of movies; Provider B charges $1 per movie. Annual demand: \\(Q^D = 150 - 50P\\). (a) Cost of an extra movie with each? (b) How many movies with each? (c) Annual payment to each? (d) Consumer surplus with each? (e) Which provider would you recommend?", [
    "(a) A: **$0**; B: **$1**.",
    "(b) A: P = 0 → **150**; B: P = 1 → **100**.",
    "(c) A: **$120**; B: 100 × $1 = **$100**.",
    "(d) Choke price: 150 − 50P = 0 → P = 3. A: ½ · 150 · 3 = 225 − 120 = **$105**. B: ½ · 100 · (3 − 1) = **$100**.",
    "(e) **A** — sof surplus $105 > $100 (garchi ko'proq to'lasa ham).",
  ], "(b) 150 vs 100 (c) $120 vs $100 (d) $105 vs $100 (e) Provider A."),
];
