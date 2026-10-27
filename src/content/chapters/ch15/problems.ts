import type { Problem } from '../../types';

const C = 15;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch15.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch15.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "What are the main characteristics of a competitive market?", ["Ko'p xaridor va sotuvchi.", "Tovarlar deyarli bir xil → hamma price taker.", "Ko'pincha: erkin kirish va chiqish."], "Many buyers and sellers, identical goods (price takers), and often free entry and exit."),
  r(2, "Explain the difference between a firm's revenue and its profit. Which do firms maximize?", ["Tushum (TR) = P × Q; foyda = TR − TC.", "Firmalar **foydani** maksimallashtiradi, tushumni emas."], "Profit = revenue − cost; firms maximize profit."),
  r(3, "Draw the cost curves for a typical firm. Explain how a competitive firm chooses the profit-maximizing output, and show total revenue and total cost.", ["MC (yuqoriga), U shaklidagi ATC va AVC; narx — gorizontal chiziq P = MR.", "Q*: P = MC kesishmasi.", "TR — P × Q* to'rtburchagi; TC — ATC × Q* to'rtburchagi; farqi — foyda."], "Produce where P = MC; TR = P × Q, TC = ATC × Q.", "firm"),
  r(4, "Under what conditions will a firm shut down temporarily? Explain.", ["Agar TR < VC, ya'ni **P < AVC**.", "Qisqa muddatda fixed cost baribir to'lanadi (sunk), shuning uchun faqat o'zgaruvchan xarajat qoplanmasa yopish yaxshiroq."], "When price is below average variable cost.", "firm"),
  r(5, "Under what conditions will a firm exit a market? Explain.", ["Agar TR < TC, ya'ni **P < ATC**.", "Uzoq muddatda barcha xarajatlar (fixed ham) tejaladi."], "When price is below average total cost in the long run.", "firm"),
  r(6, "Does a competitive firm's price equal its marginal cost in the short run, in the long run, or both?", ["**Ikkalasida**: foydani maksimallashtiruvchi firma har doim P = MC da ishlab chiqaradi (agar ishlasa)."], "Both."),
  r(7, "Does a competitive firm's price equal the minimum of its average total cost in the short run, in the long run, or both?", ["Faqat **uzoq muddatda** (erkin kirish-chiqish nol foyda beradi → P = min ATC).", "Qisqa muddatda narx ATC dan yuqori (foyda) yoki past (zarar) bo'lishi mumkin."], "Only in the long run.", "market"),
  r(8, "Are market supply curves typically more elastic in the short run or in the long run?", ["**Uzoq muddatda**: firmalar kirib-chiqa oladi, shuning uchun narx kichik o'zgarishiga miqdor katta javob beradi (bir xil xarajatlarda — gorizontal)."], "More elastic in the long run.", "market"),
];

export const problems: Problem[] = [
  p(1, "Many small boats are made of fiberglass and a resin derived from crude oil. The price of oil rises. (a) Show the effect on an individual boat-maker's cost curves and on market supply. (b) Profits in the short run? Number of boat makers in the long run?", [
    "(a) Smola — o'zgaruvchan resurs: MC, AVC, ATC yuqoriga siljiydi; bozor taklifi (MC lar yig'indisi) chapga/yuqoriga.",
    "(b) Qisqa muddatda narx xarajatdan kamroq oshadi → **zarar**. Uzoq muddatda ba'zi firmalar **chiqadi**, narx yangi min ATC gacha oshadi, firmalar **kamroq**.",
  ], "Costs shift up; short-run losses; fewer firms in the long run.", "market"),
  p(2, "Leah mows lawns for $27 each. Her total cost each day is $280, of which $30 is fixed. She mows 10 lawns a day. What about her short-run shutdown and long-run exit decisions?", [
    "AVC = (280 − 30)/10 = **$25** < $27 → qisqa muddatda **ishlaydi** (zarar $10, yopsa $30).",
    "ATC = 280/10 = **$28** > $27 → uzoq muddatda **chiqadi**.",
  ], "Keep operating in the short run but exit in the long run.", "firm"),
  p(3, "Quantity 0–7; total cost $8, 9, 10, 11, 13, 19, 27, 37; total revenue $0, 8, 16, 24, 32, 40, 48, 56. (a) Profit at each quantity; profit-maximizing output? (b) MR and MC; where do they cross? (c) Is the firm competitive? Is the industry in long-run equilibrium?", [
    "(a) Foyda: −8, −1, 6, 13, 19, **21, 21**, 19 → **5 yoki 6**.",
    "(b) MR = 8 doimiy; MC: 1, 1, 1, 2, 6, 8, 10 → 5 va 6 orasida MC = 8 = MR (5½ da kesishadi) — (a) bilan mos.",
    "(c) MR = P o'zgarmas → **raqobatli**. Foyda musbat → **uzoq muddatli muvozanat emas** (kirish bo'ladi).",
  ], "Produce 5 or 6 units (profit $21); competitive but not in long-run equilibrium.", "firm"),
  p(4, "Ball Bearings, Inc.: fixed cost $100; variable cost for 0–6 cases $0, 50, 70, 90, 140, 200, 360. (a) AFC, AVC, ATC, MC. (b) Price $50 — the CEO shuts down. Profit or loss? Wise? (c) The CFO says produce 1 case because MR = MC there. Profit? Best?", [
    "(a) AFC: 100, 50, 33.3, 25, 20, 16.7; AVC: 50, 35, 30, 35, 40, 60; ATC: 150, 85, 63.3, 60, 60, 76.7; MC: 50, 20, 20, 50, 60, 160.",
    "(b) Yopsa zarar = FC = **−$100**. Aqlli emas: P = $50 > min AVC ($30).",
    "(c) 1 quti: 50 − 150 = **−$100** — yaxshi emas (MC = 50 = MR, lekin MC tushayotgan qismda). Eng yaxshisi **3 yoki 4 quti**: TR 150/200 − TC 190/240 = **−$40**.",
  ], "Shutting down loses $100; producing 3–4 cases loses only $40.", "firm"),
  p(5, "The competitive book-printing industry begins in long-run equilibrium. (a) Draw ATC, MC, MR and supply of the typical firm. (b) Hi-Tech Printing patents a process that sharply reduces cost. Hi-Tech's profits and book prices in the short run? (c) What happens when the patent expires?", [
    "(a) P = MR = min ATC; firma efficient scale da, foyda 0.",
    "(b) Faqat Hi-Tech xarajati tushadi → narx deyarli o'zgarmaydi (bozor narxi), Hi-Tech **musbat foyda** oladi.",
    "(c) Patent tugaydi → hamma texnologiyani oladi, xarajat tushadi → foyda → kirish → narx yangi, past min ATC gacha **tushadi**; Hi-Tech foydasi nolga qaytadi.",
  ], "Hi-Tech profits while the patent lasts; afterward entry drives prices down to the new lower minimum ATC.", "market"),
  p(6, "A firm in a competitive market receives $500 in total revenue and has marginal revenue of $10. What is average revenue, and how many units were sold?", ["Raqobatchi firma: AR = MR = P = **$10**.", "Q = 500 / 10 = **50**."], "AR = $10; 50 units."),
  p(7, "A profit-maximizing competitive firm produces 100 units. AR $10, ATC $8, fixed costs $200. (a) Profit? (b) Marginal cost? (c) Average variable cost? (d) Is the efficient scale more than, less than, or exactly 100 units?", [
    "(a) (10 − 8) × 100 = **$200**.",
    "(b) MC = P = **$10**.",
    "(c) AVC = (800 − 200) / 100 = **$6**.",
    "(d) MC ($10) > ATC ($8) → ATC oshayapti → efficient scale **100 dan kam**.",
  ], "$200; $10; $6; less than 100 units.", "firm"),
  p(8, "The perfectly competitive fertilizer market: firms produce but incur economic losses. (a) How does price compare with ATC, AVC, and MC? (b) Draw the firm and the market. (c) With no change in demand or costs, what happens in the long run to price, MC, ATC, each firm's quantity, and market quantity?", [
    "(a) Ishlayapti → P ≥ AVC; zarar → P < ATC; foyda maks. → P = MC. Ya'ni AVC ≤ P = MC < ATC.",
    "(c) Firmalar **chiqadi** → bozor taklifi chapga → **narx oshadi** min ATC gacha; har bir qolgan firmaning MC, ATC va mahsuloti oshadi (efficient scale ga), bozor miqdori **kamayadi**.",
  ], "P = MC, between AVC and ATC; exit raises price to minimum ATC, each firm produces more, the market produces less.", "market"),
  p(9, "Ectenia apple pies: demand $1 → 1,200 … $13 → 0 (100 fewer per $1). Each producer: fixed cost $9, MC of 1st–6th pie $2, 4, 6, 8, 10, 12. (a) TC and ATC for 1–6. (b) Price $11: pies sold, pies per producer, number of producers, profit. (c) Long-run equilibrium? (d) Long run with free entry: profit, price, pies per producer, pies sold, producers?", [
    "(a) TC: 11, 15, 21, 29, 39, 51; ATC: 11, 7.5, **7**, 7.25, 7.8, 8.5.",
    "(b) Talab 200; har biri MC ≤ 11 gacha → **5** pirog; **40** ishlab chiqaruvchi; foyda 55 − 39 = **$16**.",
    "(c) **Yo'q**: foyda musbat → kirish.",
    "(d) Foyda **0**; narx = min ATC = **$7**; har biri **3** pirog; talab **600**; **200** ishlab chiqaruvchi.",
  ], "(b) 200 pies, 5 each, 40 producers, $16 profit (d) $7, 3 each, 600 pies, 200 producers.", "market"),
  p(10, "100 firms, each with fixed cost $16 and AVC $1, 2, 3, 4, 5, 6 for q = 1–6. (a) MC and ATC. (b) Price $10: each firm's output and market supply? (c) Transition to long run: price, quantity demanded, each firm's output? (d) Graph long-run supply.", [
    "(a) VC = q² → MC: 1, 3, 5, 7, 9, 11; ATC: 17, 10, 8.33, **8**, 8.2, 8.67.",
    "(b) P = 10: q = **5** (MC 9 ≤ 10 < 11); bozor **500**.",
    "(c) ATC(5) = 8.2 < 10 → foyda → kirish → narx **tushadi** (min ATC $8 gacha), talab miqdori **oshadi**, har bir firma mahsuloti **kamayadi** (4 ga).",
    "(d) LR taklif — **$8 da gorizontal**.",
  ], "Each firm produces 5 (market 500); in the long run price falls to $8, each firm produces 4, long-run supply is horizontal at $8.", "market"),
  p(11, "Each firm: TC = 50 + ½q², MC = q. Market demand Q = 120 − 5P. Currently 9 firms. (a) FC, VC, ATC. (b) Min ATC quantity, MC and ATC there. (c) Firm supply. (d) Short-run market supply. (e) SR equilibrium. (f) Each firm's output and profit; entry or exit? (g) LR equilibrium price and quantity. (h) Each firm's output and number of firms.", [
    "(a) FC = 50; VC = ½q²; ATC = 50/q + q/2.",
    "(b) MC = ATC: q = 50/q + q/2 → q = **10**; MC = ATC = **$10**.",
    "(c) q = P (AVC = q/2 doim < P, shuning uchun yopilish yo'q).",
    "(d) Q^S = 9P.",
    "(e) 9P = 120 − 5P → P = 120/14 ≈ **$8.57**, Q ≈ **77.1**.",
    "(f) q ≈ 8.57; foyda = 8.57 × 8.57 − 50 − ½ × 8.57² ≈ **−$13.3** → **chiqish**.",
    "(g) P = min ATC = **$10**, Q = 120 − 50 = **70**.",
    "(h) q = 10, firmalar = 70/10 = **7**.",
  ], "SR: P ≈ $8.57 with losses; LR: P = $10, Q = 70, 7 firms each producing 10.", "market"),
];
