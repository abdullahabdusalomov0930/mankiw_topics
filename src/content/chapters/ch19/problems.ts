import type { Problem } from '../../types';

const C = 19;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch19.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch19.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "Explain how a firm's production function is related to its marginal product of labor, how MPL is related to the value of its marginal product, and how VMP is related to its demand for labor.", ["Ishlab chiqarish funksiyasining nishabi — **MPL**.", "**VMP = P × MPL**.", "Raqobatchi firma VMP = W gacha yollaydi → **VMP egri chizig'i — mehnatga talab**."], "MPL is the slope of the production function; VMP = P × MPL; the VMP curve is the labor-demand curve.", "vmp"),
  r(2, "Give two examples of events that could shift the demand for labor, and explain why.", ["Mahsulot narxi oshishi — VMP oshadi.", "Labor-augmenting texnologiya — MPL oshadi (yoki boshqa omillar, masalan narvonlar ko'payishi)."], "A higher output price and labor-augmenting technology raise VMP.", "market"),
  r(3, "Give two examples of events that could shift the supply of labor, and explain why.", ["Immigratsiya — ishchilar soni oshadi.", "Didlar yoki muqobil imkoniyatlar o'zgarishi (ayollar ishtiroki, boshqa sohalarda maosh oshishi)."], "Immigration, changing tastes, or alternative opportunities.", "market"),
  r(4, "Explain how the wage can adjust to balance the supply and demand for labor while simultaneously equaling the value of the marginal product of labor.", ["Talab egri chizig'i — VMP. Muvozanatda har bir firma VMP = W gacha yollagan — shuning uchun muvozanat ish haqi avtomatik ravishda VMP ga teng.", "Talab yoki taklif siljisa, W va VMP birga o'zgaradi."], "Because firms hire until VMP = W, the market-clearing wage equals VMP.", "market"),
  r(5, "If the US population suddenly grew because of a large wave of immigration, what would happen to wages and to the rents earned by owners of land and capital?", ["Mehnat taklifi o'ngga → MPL tushadi → **ish haqi tushadi** (immigrantlar ishlaydigan bozorlarda).", "Har bir yer va kapital birligiga ko'proq ishchi → ularning MP i oshadi → **ijara oshadi**."], "Wages fall; rents to land and capital rise.", "market"),
];

export const problems: Problem[] = [
  p(1, "The president proposes that all Americans be required to eat one apple daily. (a) Effect on demand and price of apples? (b) On MPL and VMP of apple pickers? (c) On demand and wage for apple pickers?", [
    "(a) Olmaga talab o'ngga → **narx oshadi**.",
    "(b) MPL o'zgarmaydi (texnologiya bir xil), lekin **VMP oshadi** (P × MPL).",
    "(c) Mehnatga talab o'ngga → **ish haqi va bandlik oshadi**.",
  ], "Higher apple prices raise VMP, labor demand, and wages.", "market"),
  p(2, "Show the effect on the labor market in computer manufacturing: (a) Congress buys PCs for all college students. (b) More students major in engineering and computer science. (c) Computer firms build new plants.", [
    "(a) Kompyuterga talab ↑ → narx ↑ → VMP ↑ → **mehnatga talab o'ngga**: W ↑, L ↑.",
    "(b) Malakali ishchilar ko'p → **taklif o'ngga**: W ↓, L ↑.",
    "(c) Kapital ↑ → ishchilarning MPL i ↑ → **talab o'ngga**: W ↑, L ↑.",
  ], "(a) demand right (b) supply right (c) demand right.", "market"),
  p(3, "Labor is the only input; output for 0–7 days of labor: 0, 7, 13, 19, 25, 28, 29, 29. (a) MP of each worker. (b) VMP at $10. (c) Demand schedule for wages $0–$100. (d) Graph. (e) Price rises to $12?", [
    "(a) MP: **7, 6, 6, 6, 3, 1, 0**.",
    "(b) VMP: **$70, 60, 60, 60, 30, 10, 0**.",
    "(c) W > $70: 0; $60 < W ≤ $70: 1; $30 < W ≤ $60: 4; $10 < W ≤ $30: 5; $0 < W ≤ $10: 6; W = 0: 6–7.",
    "(e) VMP 20% oshadi ($84, 72, 72, 72, 36, 12, 0) → talab **yuqoriga** siljiydi.",
  ], "MP 7, 6, 6, 6, 3, 1, 0; VMP is the labor-demand schedule; a higher price shifts it up.", "vmp"),
  p(4, "Smiling Cow Dairy sells milk at $4/gallon and rents robots at $100/day; output with 0–6 robots: 0, 50, 85, 115, 140, 150, 155 gallons. (a) Output market structure? (b) Robot rental market structure? (c) MP and VMP of each robot. (d) How many robots?", [
    "(a) **Raqobatli** — xohlagancha sotadi (price taker).",
    "(b) **Raqobatli** — xohlagancha ijaraga oladi belgilangan narxda.",
    "(c) MP: 50, 35, 30, 25, 10, 5; VMP: **$200, 140, 120, 100, 40, 20**.",
    "(d) VMP ≥ $100: **4 robot** (4-robotda VMP = ijara — 3 yoki 4 farqsiz).",
  ], "Competitive in both markets; rent 4 robots.", "vmp"),
  p(5, "Ectenia: 20 competitive orchards, apples at world price $2; Q = 100L − L², MPL = 100 − 2L; 200 workers supply labor inelastically. (a) Orchard and market labor demand. (b) Wage, workers per orchard, profit. (c) If the price doubles to $4? (d) Back at $2, a hurricane destroys half the orchards?", [
    "(a) 2(100 − 2L) = W → **L = 50 − W/4**; bozor: **1,000 − 5W**.",
    "(b) 1,000 − 5W = 200 → **W = $160**; har bog' **10** ishchi; Q = 900; foyda 1,800 − 1,600 = **$200**.",
    "(c) 4(100 − 2L) = W → bozor 1,000 − 2.5W = 200 → **W = $320**; 10 ishchi, foyda 3,600 − 3,200 = **$400** — ikkalasi ikki barobar.",
    "(d) 10 bog': 10(50 − W/4) = 200 → **W = $120**; har bog' 20 ishchi, Q = 1,600, foyda 3,200 − 2,400 = **$800**. Har ishchi daromadi 160 → 120; Ectenia daromadi 36,000 → **32,000**.",
  ], "W = $160 and $200 profit; doubling the price doubles both; the hurricane cuts wages to $120 and raises surviving owners' profit to $800.", "market"),
  p(6, "Your uncle's sandwich shop employs 7 people at $12/hour; a sandwich sells for $6. If he maximizes profit, what is the VMP of the last worker? Her MP?", ["VMP = W = **$12**.", "MP = 12/6 = **2 sendvich** soatiga."], "VMP = $12; MP = 2 sandwiches per hour."),
  p(7, "Leadbelly Co. sells pencils and hires workers in perfectly competitive markets; wage $150/day. (a) Hiring rule? (b) MP of the last worker is 30 boxes/day — price of a box? (c) Diagram market and firm. (d) Some pencil workers move to computers — effects?", [
    "(a) **VMP = W** gacha yollash.",
    "(b) P × 30 = 150 → **P = $5**.",
    "(c) Bozor: talab va taklif muvozanati W*; firma: W* da gorizontal taklif, VMP egri chizig'i bilan kesishgan joyda L.",
    "(d) Bozorda taklif chapga → **W oshadi**; Leadbelly kamroq yollaydi → oxirgi ishchining **MPL i oshadi** (VMP = yangi yuqori W).",
  ], "Hire until VMP = W; P = $5; a smaller labor supply raises the wage and Leadbelly's MPL.", "market"),
  p(8, "A law requires $3 of fringe benefits per hour worked. (a) Effect on marginal profit and labor demand (cash wage axis)? (b) Employment and wages if supply unchanged? (c) Why might supply shift, and how does that change the impact? (d) Effect for minimum-wage workers?", [
    "(a) Har bir ishchidan marjinal foyda $3 kamayadi → talab egri chizig'i **$3 ga pastga** siljiydi.",
    "(b) Naqd ish haqi tushadi (< $3), bandlik kamayadi.",
    "(c) Ishchilar imtiyozni qadrlaydi → har bir naqd ish haqida ko'proq ishlashga tayyor → taklif o'ngga (pastga) → naqd ish haqi ko'proq tushadi, bandlik kamroq kamayadi (agar $3 ga to'liq siljisa — bandlik o'zgarmaydi).",
    "(d) Naqd ish haqi eng kam darajadan tusha olmaydi → mehnat qimmatlashadi → **bandlik kamayadi** (ishsizlik oshadi).",
  ], "Demand shifts down by $3; cash wages fall and employment falls; with valued benefits supply shifts out; minimum-wage workers lose jobs.", "market"),
  p(9, "Cobb–Douglas: Y = AK^⅓L^⅔, MPL = (2/3)A(K/L)^⅓; P = 2, A = 3, K = 1,000,000, L = 1,000. (a) Y and PY. (b) W and W/P. (c) Labor share. (d) Effects of: P 2 → 3; A 3 → 9; K → 8,000,000; L → 125. (e) Is a stable labor share consistent with Cobb–Douglas?", [
    "(a) Y = 3 × 100 × 100 = **30,000**; PY = **60,000**.",
    "(b) MPL = 2 × 10 = 20 → **W = 40**, **W/P = 20**.",
    "(c) 40 × 1,000 / 60,000 = **⅔**.",
    "(d) i) P = 3: Y 30,000, W 60, W/P 20, ulush ⅔. ii) A = 9: Y 90,000, W 120, W/P 60, ⅔. iii) K = 8 mln: Y 60,000, W 80, W/P 40, ⅔. iv) L = 125: Y 7,500, W 80, W/P 40, ⅔.",
    "(e) **Ha**: Cobb–Douglas da mehnat ulushi har doim ⅔ (daraja ko'rsatkichi).",
  ], "Y = 30,000, W = 40, labor share ⅔ — unchanged in every scenario, consistent with a stable U.S. labor share.", "cobb"),
];
