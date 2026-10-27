import type { Problem } from '../../types';
import { tr } from '../../../lib/lang';

const C = 7;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch07.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch07.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "Explain how buyers' willingness to pay, consumer surplus, and the demand curve are related.", [
    tr("Talab egri chizig'ining balandligi — marjinal xaridorning **WTP** si (talab jadvali WTP lardan quriladi).", "The height of the demand curve is the marginal buyer's **WTP** (the demand schedule is built from WTPs)."),
    tr("Har bir xaridorning CS = WTP − narx.", "Each buyer's CS = WTP − price."),
    tr("Shuning uchun bozor CS = talab egri chizig'i **ostida** va narx **ustidagi** maydon.", 'So market CS = the area **below** the demand curve and **above** the price.'),
  ], "The demand curve traces WTP; consumer surplus is the area below it and above the price."),
  r(2, "Explain how sellers' costs, producer surplus, and the supply curve are related.", [
    tr("Taklif egri chizig'ining balandligi — marjinal sotuvchining **xarajati**.", "The height of the supply curve is the marginal seller's **cost**."),
    tr("Har bir sotuvchining PS = narx − xarajat.", "Each seller's PS = price − cost."),
    tr("Bozor PS = narx **ostida** va taklif egri chizig'i **ustidagi** maydon.", 'Market PS = the area **below** the price and **above** the supply curve.'),
  ], "The supply curve traces costs; producer surplus is the area above it and below the price."),
  r(3, "In a supply-and-demand diagram, show producer surplus and consumer surplus at the market equilibrium.", [
    tr("Kesishma E (Q*, P*).", 'The intersection E (Q*, P*).'),
    tr("CS — talab, narx chizig'i P* va vertikal o'q orasidagi uchburchak (yuqorida).", 'CS — the triangle between demand, the price line P*, and the vertical axis (above).'),
    tr("PS — narx chizig'i, taklif va vertikal o'q orasidagi uchburchak (pastda). Figure 7 ga qarang.", 'PS — the triangle between the price line, supply, and the vertical axis (below). See Figure 7.'),
  ], "CS: triangle above P* under demand; PS: triangle below P* above supply."),
  r(4, "What is **efficiency**? Is it the only goal of economic policymakers?", [
    tr("Efficiency — total surplus (CS + PS) maksimal bo'lgan taqsimot.", 'Efficiency — the allocation that maximizes total surplus (CS + PS).'),
    tr("Yagona maqsad emas: siyosatchilar **equality** (farovonlik qanchalik teng taqsimlangani) haqida ham qayg'uradi. Samaradorlik — pirog hajmi, tenglik — uni bo'lish.", "It isn't the only goal: policymakers also care about **equality** (how evenly well-being is distributed). Efficiency is the size of the pie, equality how it is divided."),
  ], "Maximizing total surplus; no — equality also matters."),
  r(5, "Name two types of **market failure**. Explain why each may cause market outcomes to be inefficient.", [
    tr("**Market power**: bitta sotuvchi yoki kichik guruh narxni nazorat qila oladi → narx va miqdor muvozanatdan chetlashadi.", '**Market power**: one seller or a small group can control the price → price and quantity move away from equilibrium.'),
    tr("**Externalities**: bozor qarorlari begonalarga (masalan, ifloslanish) ta'sir qiladi, lekin xaridor/sotuvchilar buni hisobga olmaydi → jamiyat nuqtai nazaridan noto'g'ri miqdor.", "**Externalities**: market decisions affect bystanders (pollution, say), but buyers and sellers ignore this → the wrong quantity from society's point of view."),
  ], "Market power and externalities."),
];

export const problems: Problem[] = [
  p(1, "Kyra buys an iPhone for $360 and gets consumer surplus of $240. (a) What is her willingness to pay? (b) If she had bought it on sale for $270, what would her consumer surplus have been? (c) If the price were $750?", [
    tr("(a) WTP = 360 + 240 = **$600**.", '(a) WTP = 360 + 240 = **$600**.'),
    "(b) CS = 600 − 270 = **$330**.",
    tr("(c) $750 > $600 — sotib olmaydi, CS = **$0**.", "(c) $750 > $600 — she doesn't buy, CS = **$0**."),
  ], "(a) $600 (b) $330 (c) $0."),
  p(2, "An early freeze in California sours the lemon crop. Explain what happens to consumer surplus in the market for lemons. In the market for lemonade.", [
    tr("Limon: taklif ↓ → narx ↑, miqdor ↓ → **CS kamayadi**.", 'Lemons: supply ↓ → price ↑, quantity ↓ → **CS falls**.'),
    tr("Limonad: limon — xomashyo → limonad taklifi ↓ → narx ↑ → **CS kamayadi**.", 'Lemonade: lemons are an input → lemonade supply ↓ → price ↑ → **CS falls**.'),
  ], "Consumer surplus falls in both markets."),
  p(3, "Suppose the demand for French bread rises. Explain what happens to producer surplus in the market for French bread. In the market for flour.", [
    tr("Non: talab ↑ → narx ↑, miqdor ↑ → **PS oshadi**.", 'Bread: demand ↑ → price ↑, quantity ↑ → **PS rises**.'),
    tr("Un: ko'proq non uchun ko'proq un kerak → un talabi ↑ → un narxi ↑ → un ishlab chiqaruvchilari **PS oshadi**.", "Flour: more bread needs more flour → flour demand ↑ → flour price ↑ → flour producers' **PS rises**."),
  ], "Producer surplus rises in both markets."),
  p(4, "Bert's values: first bottle $7, second $5, third $3, fourth $1. (a) Derive his demand schedule. (b) At $4, how many bottles does he buy and what is his consumer surplus? (c) If the price falls to $2?", [
    "(a) P > $7: 0; $5 < P ≤ $7: 1; $3 < P ≤ $5: 2; $1 < P ≤ $3: 3; P ≤ $1: 4.",
    tr("(b) $4: **2 shisha**, CS = (7−4) + (5−4) = **$4**.", '(b) At $4: **2 bottles**, CS = (7−4) + (5−4) = **$4**.'),
    tr("(c) $2: **3 shisha**, CS = 5 + 3 + 1 = **$9** — $5 ga oshdi.", '(c) At $2: **3 bottles**, CS = 5 + 3 + 1 = **$9** — up $5.'),
  ], "(b) 2 bottles, CS $4. (c) 3 bottles, CS $9.", "bert"),
  p(5, "Ernie's costs: first bottle $1, second $3, third $5, fourth $7. (a) Derive his supply schedule. (b) At $4, how many does he sell and what is his producer surplus? (c) If the price rises to $6?", [
    "(a) P < $1: 0; $1 ≤ P < $3: 1; $3 ≤ P < $5: 2; $5 ≤ P < $7: 3; P ≥ $7: 4.",
    tr("(b) $4: **2 shisha**, PS = (4−1) + (4−3) = **$4**.", '(b) At $4: **2 bottles**, PS = (4−1) + (4−3) = **$4**.'),
    tr("(c) $6: **3 shisha**, PS = 5 + 3 + 1 = **$9**.", '(c) At $6: **3 bottles**, PS = 5 + 3 + 1 = **$9**.'),
  ], "(b) 2 bottles, PS $4. (c) 3 bottles, PS $9.", "ernie"),
  p(6, "A market in which Bert is the buyer and Ernie is the seller. (a) Quantity supplied and demanded at $2, $4, $6. Which price is the equilibrium? (b) CS, PS, total surplus? (c) If one fewer bottle were traded? (d) One additional bottle?", [
    tr("(a) $2: Qs 1, Qd 3; $4: 2 va 2; $6: Qs 3, Qd 1 → muvozanat **$4**.", '(a) $2: Qs 1, Qd 3; $4: 2 and 2; $6: Qs 3, Qd 1 → equilibrium **$4**.'),
    "(b) CS = 4, PS = 4, **TS = 8**.",
    tr("(c) 1 shisha: TS = 7 − 1 = 6 → **2 ga kamayadi** (ikkinchi shishaning qiymati 5 > xarajati 3).", "(c) 1 bottle: TS = 7 − 1 = 6 → **falls by 2** (the second bottle's value 5 > its cost 3)."),
    tr("(d) 3 shisha: uchinchisining qiymati 3 < xarajati 5 → TS = 8 − 2 = **6**. Ikkalasi ham muvozanatdan yomonroq — muvozanat samarali.", "(d) 3 bottles: the third's value 3 < its cost 5 → TS = 8 − 2 = **6**. Both are worse than equilibrium — the equilibrium is efficient."),
  ], "(a) $4 (b) CS 4, PS 4, TS 8 (c) TS falls to 6 (d) TS falls to 6."),
  p(7, "The cost of producing flat-screen TVs has fallen. (a) Show the effect on price and quantity. (b) What happens to consumer and producer surplus? (c) If supply is very elastic, who benefits most?", [
    tr("(a) Taklif o'ngga → narx ↓, miqdor ↑.", '(a) Supply shifts right → price ↓, quantity ↑.'),
    tr("(b) CS **oshadi**. PS — ikki kuch: narx past (−), lekin miqdor ko'p va xarajat past (+) → noaniq.", '(b) CS **rises**. PS — two forces: a lower price (−), but more units and lower costs (+) → ambiguous.'),
    tr("(c) Taklif juda egiluvchan bo'lsa, narx deyarli xarajat bilan birga tushadi → yutuq asosan **iste'molchilarga**.", '(c) If supply is very elastic, the price falls almost one-for-one with cost → the gain goes mostly to **consumers**.'),
  ], "Price falls, quantity rises; CS rises; with very elastic supply consumers gain most."),
  p(8, "Four consumers' WTP for haircuts: Gloria $35, Jay $10, Claire $40, Phil $25. Firms' costs: A $15, B $30, C $20, D $10. Each firm can give at most one haircut. To achieve efficiency, how many haircuts should be given? Which businesses and which consumers? Maximum total surplus?", [
    tr("WTP larni kamayish tartibida: Claire 40, Gloria 35, Phil 25, Jay 10. Xarajatlarni o'sish tartibida: D 10, A 15, C 20, B 30.", 'Rank WTPs from highest: Claire 40, Gloria 35, Phil 25, Jay 10. Costs from lowest: D 10, A 15, C 20, B 30.'),
    tr("Juftlaymiz: 40 vs 10 (+30), 35 vs 15 (+20), 25 vs 20 (+5), 10 vs 30 (−20 — qilinmaydi).", 'Pair them: 40 vs 10 (+30), 35 vs 15 (+20), 25 vs 20 (+5), 10 vs 30 (−20 — not done).'),
    tr("**3 ta** soch olish: firmalar **D, A, C**; mijozlar **Claire, Gloria, Phil**.", '**3** haircuts: firms **D, A, C**; customers **Claire, Gloria, Phil**.'),
    tr("Maksimal TS = 30 + 20 + 5 = **$55**.", 'Maximum TS = 30 + 20 + 5 = **$55**.'),
  ], "3 haircuts (firms D, A, C; Claire, Gloria, Phil); total surplus $55."),
  p(9, "Technological advances have reduced the cost of making computers. (a) Show what happened to price, quantity, CS, and PS in the computer market. (b) Typewriters: complements or substitutes? Show the effects. Should typewriter producers be happy? (c) Computers and software: complements or substitutes? Effects? (d) Does this explain why Bill Gates became one of the world's richest people?", [
    tr("(a) Taklif ↑ → P ↓, Q ↑, CS ↑, PS — noaniq.", '(a) Supply ↑ → P ↓, Q ↑, CS ↑, PS ambiguous.'),
    tr("(b) Yozuv mashinkasi — **o'rinbosar** → talab ↓ → P ↓, Q ↓, CS va PS ↓ → ishlab chiqaruvchilar **xafa**.", '(b) Typewriters are a **substitute** → demand ↓ → P ↓, Q ↓, CS and PS ↓ → producers are **unhappy**.'),
    tr("(c) Dasturlar — **to'ldiruvchi** → talab ↑ → P ↑, Q ↑, CS va PS ↑ → dastur ishlab chiqaruvchilar **xursand**.", '(c) Software is a **complement** → demand ↑ → P ↑, Q ↑, CS and PS ↑ → software producers are **happy**.'),
    tr("(d) Ha: arzon kompyuterlar Microsoft dasturlariga talabni ko'tarib, ulkan producer surplus berdi.", "(d) Yes: cheap computers raised demand for Microsoft's software, giving it a huge producer surplus."),
  ], "Computers: supply up. Typewriters (substitute): demand down. Software (complement): demand up — good for Microsoft."),
  p(10, "Provider A charges $120 per year regardless of the number of movies; Provider B charges $1 per movie. Annual demand: \\(Q^D = 150 - 50P\\). (a) Cost of an extra movie with each? (b) How many movies with each? (c) Annual payment to each? (d) Consumer surplus with each? (e) Which provider would you recommend?", [
    "(a) A: **$0**; B: **$1**.",
    "(b) A: P = 0 → **150**; B: P = 1 → **100**.",
    "(c) A: **$120**; B: 100 × $1 = **$100**.",
    "(d) Choke price: 150 − 50P = 0 → P = 3. A: ½ · 150 · 3 = 225 − 120 = **$105**. B: ½ · 100 · (3 − 1) = **$100**.",
    tr("(e) **A** — sof surplus $105 > $100 (garchi ko'proq to'lasa ham).", '(e) **A** — net surplus $105 > $100 (even though it costs more).'),
  ], "(b) 150 vs 100 (c) $120 vs $100 (d) $105 vs $100 (e) Provider A."),
];
