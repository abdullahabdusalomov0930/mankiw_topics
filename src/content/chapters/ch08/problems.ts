import type { Problem } from '../../types';
import { tr } from '../../../lib/lang';

const C = 8;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch08.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch08.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "What happens to consumer surplus and producer surplus when the sale of a good is taxed? How does the change compare with the tax revenue?", [
    tr("Xaridor ko'proq to'laydi → CS kamayadi (B + C). Sotuvchi kamroq oladi → PS kamayadi (D + E).", 'Buyers pay more → CS falls (B + C). Sellers receive less → PS falls (D + E).'),
    tr("Tushum B + D. Yo'qotishlar tushumdan C + E ga ko'p — bu deadweight loss.", 'Revenue is B + D. The losses exceed revenue by C + E — the deadweight loss.'),
  ], "Both fall; the combined loss exceeds the revenue by the deadweight loss."),
  r(2, "Draw a supply-and-demand diagram with a tax on the sale of a good. Show the deadweight loss. Show the tax revenue.", [
    tr("Muvozanatdan chapda, ponaning kengligi T bo'lgan joyda Q₂ ni toping (Pb va Ps).", 'Find Q₂ left of equilibrium, where the wedge between Pb and Ps equals T.'),
    tr("Tushum: balandligi T, kengligi Q₂ bo'lgan to'rtburchak.", 'Revenue: the rectangle with height T and width Q₂.'),
    tr("DWL: Q₂ dan Q₁ gacha talab va taklif orasidagi uchburchak. Yuqoridagi grafikda “Ortiqchalik maydonlari”ni yoqing.", 'DWL: the triangle between demand and supply from Q₂ to Q₁. Turn on “Surplus areas” on the graph above.'),
  ], "Revenue is the rectangle T × Q₂; DWL is the triangle between Q₂ and Q₁."),
  r(3, "How do the elasticities of supply and demand affect the deadweight loss of a tax? Why?", [
    tr("Egiluvchanlik katta → DWL katta.", 'Larger elasticities → a larger DWL.'),
    tr("Sabab: DWL — soliq xatti-harakatni o'zgartirgani uchun. Xaridor va sotuvchilar qanchalik sezgir bo'lsa, miqdor shunchalik ko'p qisqaradi va uchburchak kattaroq.", 'The reason: the DWL arises because the tax changes behavior. The more responsive buyers and sellers are, the more the quantity shrinks and the bigger the triangle.'),
  ], "Larger elasticities, larger DWL, because quantity responds more."),
  r(4, "Why do experts disagree about whether labor taxes have small or large deadweight losses?", [
    tr("Mehnat solig'i stavkasi ma'lum (~40%), lekin **mehnat taklifi egiluvchanligi** bo'yicha kelishuv yo'q.", 'The tax rate on labor is known (~40%), but there is no agreement on the **elasticity of labor supply**.'),
    tr("Ba'zilar: ko'pchilik to'liq ishlaydi — taklif noegiluvchan, DWL kichik.", 'Some say most people work full time anyway — supply is inelastic, so the DWL is small.'),
    tr("Boshqalar: qo'shimcha soatlar, ikkinchi ishlovchilar, nafaqa vaqti, soya iqtisodiyot — taklif egiluvchan, DWL katta.", 'Others point to extra hours, second earners, retirement timing, the underground economy — supply is elastic, so the DWL is large.'),
  ], "They disagree about the elasticity of labor supply."),
  r(5, "What happens to the deadweight loss and tax revenue when a tax is increased?", [
    tr("DWL doim oshadi va soliqdan tezroq (T² ga proporsional).", 'The DWL always rises, and faster than the tax (in proportion to T²).'),
    tr("Tushum avval oshadi, keyin kamayadi — Laffer curve.", 'Revenue first rises, then falls — the Laffer curve.'),
  ], "DWL rises (faster than the tax); revenue first rises then falls."),
];

export const problems: Problem[] = [
  p(1, "The market for pizza. (a) Draw the competitive equilibrium; label price, quantity, CS, PS. Any DWL? (b) The government requires each pizzeria to pay a $1 tax on each pizza sold. Label CS, PS, revenue, DWL. (c) If the tax were removed, could all parties (including the government) be better off if consumers and producers voluntarily transferred some of their gains?", [
    tr("(a) Muvozanatda DWL **yo'q** — total surplus maksimal.", '(a) At equilibrium there is **no** DWL — total surplus is maximized.'),
    tr("(b) Taklif $1 yuqoriga: CS → A, PS → F, tushum B + D, DWL C + E (Figure 3 belgilari).", '(b) Supply shifts up $1: CS → A, PS → F, revenue B + D, DWL C + E (Figure 3 labels).'),
    tr("(c) **Ha**: soliqsiz total surplus A + B + C + D + E + F. Iste'molchi va ishlab chiqaruvchilar davlatga B + D ni berishsa, ular hamon C + E ni saqlab qoladi — hamma yaxshiroq ahvolda.", '(c) **Yes**: without the tax total surplus is A + B + C + D + E + F. If consumers and producers handed the government B + D, they would still keep C + E — everyone is better off.'),
  ], "(c) Yes: removing the tax recovers C + E, so a transfer of B + D leaves everyone better off."),
  p(2, "Evaluate: (a) “A tax that has no deadweight loss cannot raise any revenue for the government.” (b) “A tax that raises no revenue for the government cannot have any deadweight loss.”", [
    tr("(a) **Noto'g'ri**: mutlaqo noegiluvchan taklif/talabda DWL = 0, lekin tushum musbat.", '(a) **False**: with perfectly inelastic supply/demand the DWL = 0, but revenue is positive.'),
    tr("(b) **Noto'g'ri**: soliq shunchalik katta bo'lishi mumkinki, savdo to'xtaydi — tushum 0, DWL esa butun total surplus.", '(b) **False**: a tax can be so large that trade stops — revenue 0, while the DWL is all of total surplus.'),
  ], "Both false."),
  p(3, "Rubber bands. (a) Very elastic supply and very inelastic demand: how is the burden shared? Use CS and PS. (b) Very inelastic supply and very elastic demand?", [
    tr("(a) Yuk asosan **iste'molchilarda**: CS ko'p kamayadi, PS kam.", '(a) The burden falls mostly on **consumers**: CS falls a lot, PS a little.'),
    tr("(b) Yuk asosan **ishlab chiqaruvchilarda**: PS ko'p kamayadi, CS kam.", '(b) The burden falls mostly on **producers**: PS falls a lot, CS a little.'),
  ], "(a) Mostly consumers (b) Mostly producers."),
  p(4, "A tax on heating oil. (a) Would the DWL be greater in the first year or the fifth year? (b) Would the revenue be greater in the first or the fifth year?", [
    tr("(a) **Beshinchi yil**: uzoq muddatda talab egiluvchanroq → miqdor ko'proq qisqaradi → DWL katta.", '(a) **The fifth year**: demand is more elastic in the long run → the quantity shrinks more → a larger DWL.'),
    tr("(b) **Birinchi yil**: miqdor hali kam qisqargan → T × Q katta.", "(b) **The first year**: the quantity hasn't shrunk much yet → T × Q is larger."),
  ], "(a) Fifth year (b) First year."),
  p(5, "Your friend suggests that taxing food would be a good way to raise revenue because the demand for food is quite inelastic. In what sense is this a “good” way to raise revenue? In what sense is it not?", [
    tr("Yaxshi: noegiluvchan talab → kichik DWL (samarali), barqaror tushum.", 'Good: inelastic demand → a small DWL (efficient), stable revenue.'),
    tr("Yomon: **adolat** — kambag'al oilalar daromadining katta qismini ovqatga sarflaydi (Engel qonuni), shuning uchun soliq ularga og'irroq.", "Bad: **fairness** — poor families spend a large share of income on food (Engel's law), so the tax weighs more heavily on them."),
  ], "Efficient (small DWL) but unfair to the poor (regressive)."),
  p(6, "Senator Moynihan once introduced a bill to levy a 10,000 percent tax on certain hollow-tipped bullets. (a) Would this raise much revenue? (b) Why might he have proposed it?", [
    tr("(a) **Yo'q** — bunday soliq bilan deyarli hech kim sotib olmaydi, Q ≈ 0 → tushum ≈ 0 (Laffer egri chizig'ining eng o'ng uchi).", '(a) **No** — with such a tax almost nobody buys, Q ≈ 0 → revenue ≈ 0 (the far right end of the Laffer curve).'),
    tr("(b) Maqsad tushum emas — o'qlarning **ishlatilishini to'xtatish** (soliq orqali taqiq).", "(b) The goal isn't revenue but to **stop the use** of the bullets (a ban by way of a tax)."),
  ], "(a) No (b) To stop the bullets from being sold."),
  p(7, "The government places a tax on the purchase of socks. (a) Show total spending by consumers, total revenue for producers, and tax revenue before and after. (b) Does the price received by producers rise or fall? Can you tell whether total receipts for producers rise or fall? (c) Does the price paid by consumers rise or fall? Can you tell whether total consumer spending rises or falls? If total consumer spending falls, does consumer surplus rise?", [
    tr("(a) Oldin: xarajat = tushum = P* × Q*. Keyin: xaridor xarajati Pb × Q₂, sotuvchi tushumi Ps × Q₂, davlat T × Q₂.", '(a) Before: spending = revenue = P* × Q*. After: buyers spend Pb × Q₂, sellers receive Ps × Q₂, the government T × Q₂.'),
    tr("(b) Ps **tushadi**; Q ham tushadi → sotuvchilar tushumi **aniq kamayadi**.", "(b) Ps **falls** and Q falls too → sellers' revenue **definitely falls**."),
    tr("(c) Pb **oshadi**, Q tushadi → jami xarajat talab egiluvchanligiga bog'liq: noegiluvchan — oshadi, egiluvchan — kamayadi.", '(c) Pb **rises** and Q falls → total spending depends on the elasticity of demand: inelastic — it rises, elastic — it falls.'),
    tr("Xarajat kamaysa ham CS **oshmaydi**: xaridorlar qimmatroq to'lab, kamroq oladi — CS baribir kamayadi.", "Even if spending falls, CS **doesn't rise**: buyers pay more and get less — CS falls anyway."),
  ], "Producers' receipts fall; consumer spending depends on elasticity; consumer surplus falls either way."),
  p(8, "Suppose the government subsidizes a good: for each unit sold, it pays $2 to the buyer. How does the subsidy affect CS, PS, tax revenue, and total surplus? Does a subsidy lead to a deadweight loss?", [
    tr("Talab $2 **yuqoriga** siljiydi → miqdor oshadi, xaridor sof narxi tushadi, sotuvchi narxi oshadi.", "Demand shifts **up** by $2 → quantity rises, buyers' net price falls, sellers' price rises."),
    tr("CS ↑, PS ↑, davlat xarajati (manfiy tushum) = 2 × Q₂.", 'CS ↑, PS ↑, government spending (negative revenue) = 2 × Q₂.'),
    tr("Davlat xarajati CS va PS o'sishidan **katta** → total surplus kamayadi: **DWL bor** — muvozanatdan ortiq birliklarda xarajat qiymatdan yuqori.", "The government's spending **exceeds** the gains in CS and PS → total surplus falls: **there is a DWL** — on the units beyond equilibrium, cost exceeds value."),
  ], "CS and PS rise, but government spending exceeds the gains: yes, there is a deadweight loss."),
  p(9, "Hotel rooms in Smalltown go for $100, and 1,000 rooms are rented. (a) A $10 tax per room: the rate rises to $108 and 900 rooms are rented. Revenue and DWL? (b) The tax doubles to $20: price $116, 800 rooms. Revenue and DWL? Double, more or less than double?", [
    tr("(a) Tushum = 10 × 900 = **$9,000**. DWL = ½ × 10 × 100 = **$500**.", '(a) Revenue = 10 × 900 = **$9,000**. DWL = ½ × 10 × 100 = **$500**.'),
    tr("(b) Tushum = 20 × 800 = **$16,000** — ikki barobardan **kam**. DWL = ½ × 20 × 200 = **$2,000** — **to'rt barobar** (ikki barobardan ko'p).", '(b) Revenue = 20 × 800 = **$16,000** — **less** than double. DWL = ½ × 20 × 200 = **$2,000** — **four times** (more than double).'),
    tr("Sabab: miqdor kamaygani uchun tushum sekin o'sadi; DWL uchburchakning ikkala o'lchami oshgani uchun kvadratik o'sadi.", 'The reason: revenue grows slowly because the quantity falls; the DWL grows quadratically because both dimensions of the triangle grow.'),
  ], "(a) $9,000 and $500 (b) $16,000 (less than double) and $2,000 (four times).", "hotel"),
  p(10, "\\(Q^S = 2P\\), \\(Q^D = 300 - P\\). (a) Equilibrium. (b) A tax T on buyers: \\(Q^D = 300 - (P + T)\\). New equilibrium? (c) Revenue as a function of T; graph for T from 0 to 300. (d) DWL as a function of T. (e) A tax of $200 per unit: good policy? Better one?", [
    "(a) P = 100, Q = 200.",
    tr("(b) \\(300 - P - T = 2P \\Rightarrow P_S = (300 - T)/3\\), \\(P_B = (300 + 2T)/3\\), \\(Q = 200 - 2T/3\\).", '(b) \\(300 - P - T = 2P \\Rightarrow P_S = (300 - T)/3\\), \\(P_B = (300 + 2T)/3\\), \\(Q = 200 - 2T/3\\).'),
    tr("(c) \\(R(T) = T(200 - 2T/3)\\): T = 150 da maksimum $15,000, T = 300 da nol.", '(c) \\(R(T) = T(200 - 2T/3)\\): a maximum of $15,000 at T = 150, zero at T = 300.'),
    tr("(d) \\(DWL = \\tfrac12 \\cdot T \\cdot \\tfrac{2T}{3} = T^2/3\\).", '(d) \\(DWL = \\tfrac12 \\cdot T \\cdot \\tfrac{2T}{3} = T^2/3\\).'),
    tr("(e) T = 200: R = 13,333, DWL = 13,333. T = 100: R = 13,333 (xuddi shu!), DWL = 3,333. Demak **$100 soliq yaxshiroq** — bir xil tushum, to'rt barobar kam yo'qotish.", '(e) T = 200: R = 13,333, DWL = 13,333. T = 100: R = 13,333 (the same!), DWL = 3,333. So **the $100 tax is better** — the same revenue with a quarter of the loss.'),
  ], "(b) Ps = (300 − T)/3, Q = 200 − 2T/3 (c) R = T(200 − 2T/3) (d) DWL = T²/3 (e) No: $100 raises the same revenue with a quarter of the DWL.", "laffer"),
];
