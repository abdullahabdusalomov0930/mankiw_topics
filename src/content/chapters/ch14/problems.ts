import type { Problem } from '../../types';

const C = 14;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch14.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch14.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "What is the relationship between a firm's total revenue, total cost, and profit?", ["Profit = Total revenue − Total cost."], "Profit equals total revenue minus total cost."),
  r(2, "Give an example of an opportunity cost that an accountant would not count as a cost. Why would the accountant ignore this cost?", ["Egasining boy bergan maoshi (Chloe dasturchi bo'lib $100/soat topardi) yoki o'z kapitalidan boy berilgan foiz.", "Buxgalter pul oqimlarini kuzatadi — bu xarajatlarda pul firmadan chiqmaydi."], "Forgone wages or interest — no money flows out, so accountants ignore them.", "profit"),
  r(3, "What is marginal product, and what is meant by diminishing marginal product?", ["MP — qo'shimcha bir birlik resursdan qo'shimcha mahsulot.", "Diminishing MP — resurs ko'paygan sari MP kamayadi (Chloe: 50, 40, 30, 20…)."], "The extra output from one more unit of input; it falls as the input increases.", "production"),
  r(4, "Draw a production function that exhibits diminishing marginal product of labor, and the associated total-cost curve. Explain their shapes.", ["Ishlab chiqarish funksiyasi (x — ishchilar, y — mahsulot) **yotiqlashadi**: har bir ishchi kamroq qo'shadi.", "Total-cost (x — mahsulot, y — xarajat) **tiklashadi**: qo'shimcha birlik uchun ko'proq ishchi (pul) kerak."], "Production function flattens; total-cost curve steepens — both from diminishing marginal product.", "production"),
  r(5, "Define total cost, average total cost, and marginal cost. How are they related?", ["TC — barcha resurslar bozor qiymati.", "ATC = TC / Q — tipik birlik xarajati.", "MC = ΔTC / ΔQ — qo'shimcha birlik xarajati.", "MC < ATC → ATC tushadi; MC > ATC → ATC oshadi."], "Both ATC and MC are derived from TC; MC pulls ATC toward it.", "costs"),
  r(6, "Draw the marginal-cost and average-total-cost curves for a typical firm. Explain their shapes and why they intersect where they do.", ["MC oxir-oqibat oshadi — kamayuvchi MP.", "ATC U shaklida — AFC tushadi, AVC oshadi.", "MC ATC ni **minimumida** kesadi: MC pastda — ATC tushadi, yuqorida — oshadi."], "MC rises, ATC is U-shaped, and MC cuts ATC at its minimum.", "costs"),
  r(7, "How and why does a firm's average-total-cost curve in the short run differ from its average-total-cost curve in the long run?", ["Ko'p xarajatlar (fabrika) qisqa muddatda fixed, uzoq muddatda variable.", "LR ATC — SR egri chiziqlarining “konverti”: yotiqroq U, SR egri chiziqlar undan pastda emas — uzoq muddatda firma SR egri chiziqni tanlaydi."], "The long-run curve is flatter and lies on or below all short-run curves.", "lr"),
  r(8, "Define economies of scale and explain why they might arise. Define diseconomies of scale and explain why they might arise.", ["**Economies**: LR ATC Q bilan tushadi — ixtisoslashuv (Smitning to'g'nag'ich fabrikasi, konveyer).", "**Diseconomies**: LR ATC Q bilan oshadi — katta tashkilotda muvofiqlashtirish muammolari."], "Specialization causes economies; coordination problems cause diseconomies.", "lr"),
];

export const problems: Problem[] = [
  p(1, "Fill in the type of cost (opportunity, total, fixed, variable, average total, marginal): (a) What you give up in taking some action. (b) ___ is falling when marginal cost is below it and rising when marginal cost is above it. (c) A cost that does not depend on the quantity produced. (d) In the ice-cream industry in the short run, ___ includes the cost of cream and sugar but not the factory. (e) Profits equal total revenue minus ___. (f) The cost of producing an extra unit of output.", [
    "(a) **Opportunity cost**. (b) **Average total cost**. (c) **Fixed cost**.",
    "(d) **Variable cost**. (e) **Total cost**. (f) **Marginal cost**.",
  ], "opportunity cost; average total cost; fixed cost; variable cost; total cost; marginal cost."),
  p(2, "Buffy: renting the location and buying merchandise costs $350,000 per year; she would quit her $80,000 job. (a) Define opportunity cost. (b) Her opportunity cost of running the store? (c) Expected sales $400,000 — accounting profit? (d) Should she open the store? (e) Revenue needed for positive economic profit?", [
    "(a) Biror narsani olish uchun voz kechilgan hamma narsa.",
    "(b) 350,000 + 80,000 = **$430,000**.",
    "(c) 400,000 − 350,000 = **$50,000**.",
    "(d) **Yo'q**: iqtisodiy foyda 400,000 − 430,000 = −$30,000.",
    "(e) **$430,000** dan ko'p.",
  ], "$430,000; accounting profit $50,000; economic loss $30,000, so no; revenue above $430,000.", "profit"),
  p(3, "A fisherman: hours 0–5 → fish 0, 10, 18, 24, 28, 30 lb. (a) Marginal product of each hour? (b) Graph the production function and explain its shape. (c) Fixed cost $10 (pole), time worth $5/hour — graph total cost and explain.", [
    "(a) MP: **10, 8, 6, 4, 2** funt — kamayuvchi.",
    "(b) Ishlab chiqarish funksiyasi yotiqlashadi — kamayuvchi MP (baliq kamayadi, charchoq).",
    "(c) TC: 10, 15, 20, 25, 30, 35 (0–5 soat) — mos baliq 0, 10, 18, 24, 28, 30. Mahsulotga nisbatan total-cost egri chizig'i tiklashadi: har bir qo'shimcha funt uchun ko'proq vaqt kerak.",
  ], "MP falls 10, 8, 6, 4, 2; production function flattens; total-cost curve steepens."),
  p(4, "Nimbus brooms: workers 0–7 → output 0, 20, 50, 90, 120, 140, 150, 155. (a) Marginal products and pattern. (b) Worker $100/day, fixed cost $200 — total cost. (c) ATC and pattern. (d) MC and pattern. (e) Compare MP and MC. (f) Compare ATC and MC.", [
    "(a) MP: **20, 30, 40, 30, 20, 10, 5** — avval oshadi (jamoa ishi), keyin kamayadi.",
    "(b) TC: 200, 300, 400, 500, 600, 700, 800, 900.",
    "(c) ATC: —, 15, 8, 5.56, **5, 5**, 5.33, 5.81 — avval tushadi, keyin oshadi (U).",
    "(d) MC (bir supurgiga): 5, 3.33, 2.50, 3.33, 5, 10, 20 — avval tushadi, keyin oshadi.",
    "(e) MC = ish haqi / MP: MP oshganda MC tushadi, MP kamayganda MC oshadi — ko'zgu tasviri.",
    "(f) MC < ATC bo'lganda ATC tushadi, MC > ATC bo'lganda oshadi; ular ATC minimumi atrofida (120–140) kesishadi.",
  ], "MP rises then falls; ATC and MC are U-shaped; MC mirrors MP and cuts ATC at its minimum.", "costs"),
  p(5, "Gaming consoles: ATC is $300 at 600 consoles and $301 at 601. You have sold all 600. Someone offers $550 for one more. Accept?", [
    "TC(600) = 600 × 300 = 180,000; TC(601) = 601 × 301 = 180,901.",
    "MC = **$901** > $550 → **rad eting**: qo'shimcha konsol $901 turadi.",
  ], "No — the marginal cost is $901, more than $550."),
  p(6, "Pizzeria: quantity 0–6 dozen; total cost $300, 350, 390, 420, 450, 490, 540; variable cost $0, 50, 90, 120, 150, 190, 240. (a) Fixed cost? (b) Marginal cost from total cost and from variable cost — relationship?", [
    "(a) **$300** (Q = 0 dagi TC).",
    "(b) TC dan: 50, 40, 30, 30, 40, 50. VC dan: 50, 40, 30, 30, 40, 50 — **bir xil**, chunki TC = FC + VC va FC o'zgarmaydi.",
  ], "Fixed cost $300; marginal cost is the same whether computed from TC or VC.", "costs"),
  p(7, "Vinnie's painting company: fixed costs $200; variable costs for 1–7 houses: $10, 20, 40, 80, 160, 320, 640. Compute AFC, AVC, ATC. What is the efficient scale?", [
    "AFC: 200, 100, 66.67, 50, 40, 33.33, 28.57.",
    "AVC: 10, 10, 13.33, 20, 32, 53.33, 91.43.",
    "ATC: 210, 110, 80, **70**, 72, 86.67, 120.",
    "Efficient scale — **4 uy** (minimal ATC $70).",
  ], "Efficient scale: 4 houses per month (ATC = $70).", "costs"),
  p(8, "Two tax proposals: a $300 lump-sum tax on each hamburger producer, or a $1 tax per burger. (a) Which curves (AFC, AVC, ATC, MC) shift with the lump-sum tax? (b) With the per-burger tax?", [
    "(a) Lump-sum — **fixed cost**: AFC va ATC yuqoriga siljiydi; AVC va MC o'zgarmaydi.",
    "(b) Har bir burgerga $1 — **variable cost**: AVC, ATC va MC $1 ga yuqoriga siljiydi; AFC o'zgarmaydi.",
  ], "(a) AFC and ATC (b) AVC, ATC and MC.", "costs"),
  p(9, "Jane's Juice Bar: quantity 0–6 vats; variable cost $0, 10, 25, 45, 70, 100, 135; total cost $30, 40, 55, 75, 100, 130, 165. (a) AVC, ATC, MC. (b) Graph; relationships between MC and ATC, and MC and AVC.", [
    "(a) AVC: 10, 12.5, 15, 17.5, 20, 22.5. ATC: 40, 27.5, **25, 25**, 26, 27.5. MC: 10, 15, 20, 25, 30, 35.",
    "(b) MC < ATC bo'lganda ATC tushadi, MC > ATC bo'lganda oshadi — MC ATC ni minimumida (Q = 3–4, $25) kesadi. AVC minimumi Q = 1 da (MC = AVC = 10) — keyin MC > AVC, AVC oshadi.",
  ], "MC crosses ATC at its minimum (Q ≈ 3–4) and AVC at its minimum (Q = 1).", "costs"),
  p(10, "Long-run total costs for quantities 1–7: Firm A $60, 70, 80, 90, 100, 110, 120; Firm B $11, 24, 39, 56, 75, 96, 119; Firm C $21, 34, 49, 66, 85, 106, 129. Economies or diseconomies of scale?", [
    "A: LR ATC 60, 35, 26.7, 22.5, 20, 18.3, 17.1 — **economies of scale**.",
    "B: 11, 12, 13, 14, 15, 16, 17 — **diseconomies of scale**.",
    "C: 21, 17, 16.3, 16.5, 17, 17.7, 18.4 — Q = 1–3 da **economies**, Q ≥ 4 da **diseconomies**.",
  ], "A: economies; B: diseconomies; C: economies at low output, diseconomies at high output.", "lr"),
];
