import type { Problem } from '../../types';

const C = 8;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch08.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch08.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "What happens to consumer surplus and producer surplus when the sale of a good is taxed? How does the change compare with the tax revenue?", [
    "Xaridor ko'proq to'laydi → CS kamayadi (B + C). Sotuvchi kamroq oladi → PS kamayadi (D + E).",
    "Tushum B + D. Yo'qotishlar tushumdan C + E ga ko'p — bu deadweight loss.",
  ], "Both fall; the combined loss exceeds the revenue by the deadweight loss."),
  r(2, "Draw a supply-and-demand diagram with a tax on the sale of a good. Show the deadweight loss. Show the tax revenue.", [
    "Muvozanatdan chapda, ponaning kengligi T bo'lgan joyda Q₂ ni toping (Pb va Ps).",
    "Tushum: balandligi T, kengligi Q₂ bo'lgan to'rtburchak.",
    "DWL: Q₂ dan Q₁ gacha talab va taklif orasidagi uchburchak. Yuqoridagi grafikda “Ortiqchalik maydonlari”ni yoqing.",
  ], "Revenue is the rectangle T × Q₂; DWL is the triangle between Q₂ and Q₁."),
  r(3, "How do the elasticities of supply and demand affect the deadweight loss of a tax? Why?", [
    "Egiluvchanlik katta → DWL katta.",
    "Sabab: DWL — soliq xatti-harakatni o'zgartirgani uchun. Xaridor va sotuvchilar qanchalik sezgir bo'lsa, miqdor shunchalik ko'p qisqaradi va uchburchak kattaroq.",
  ], "Larger elasticities, larger DWL, because quantity responds more."),
  r(4, "Why do experts disagree about whether labor taxes have small or large deadweight losses?", [
    "Mehnat solig'i stavkasi ma'lum (~40%), lekin **mehnat taklifi egiluvchanligi** bo'yicha kelishuv yo'q.",
    "Ba'zilar: ko'pchilik to'liq ishlaydi — taklif noegiluvchan, DWL kichik.",
    "Boshqalar: qo'shimcha soatlar, ikkinchi ishlovchilar, nafaqa vaqti, soya iqtisodiyot — taklif egiluvchan, DWL katta.",
  ], "They disagree about the elasticity of labor supply."),
  r(5, "What happens to the deadweight loss and tax revenue when a tax is increased?", [
    "DWL doim oshadi va soliqdan tezroq (T² ga proporsional).",
    "Tushum avval oshadi, keyin kamayadi — Laffer curve.",
  ], "DWL rises (faster than the tax); revenue first rises then falls."),
];

export const problems: Problem[] = [
  p(1, "The market for pizza. (a) Draw the competitive equilibrium; label price, quantity, CS, PS. Any DWL? (b) The government requires each pizzeria to pay a $1 tax on each pizza sold. Label CS, PS, revenue, DWL. (c) If the tax were removed, could all parties (including the government) be better off if consumers and producers voluntarily transferred some of their gains?", [
    "(a) Muvozanatda DWL **yo'q** — total surplus maksimal.",
    "(b) Taklif $1 yuqoriga: CS → A, PS → F, tushum B + D, DWL C + E (Figure 3 belgilari).",
    "(c) **Ha**: soliqsiz total surplus A + B + C + D + E + F. Iste'molchi va ishlab chiqaruvchilar davlatga B + D ni berishsa, ular hamon C + E ni saqlab qoladi — hamma yaxshiroq ahvolda.",
  ], "(c) Yes: removing the tax recovers C + E, so a transfer of B + D leaves everyone better off."),
  p(2, "Evaluate: (a) “A tax that has no deadweight loss cannot raise any revenue for the government.” (b) “A tax that raises no revenue for the government cannot have any deadweight loss.”", [
    "(a) **Noto'g'ri**: mutlaqo noegiluvchan taklif/talabda DWL = 0, lekin tushum musbat.",
    "(b) **Noto'g'ri**: soliq shunchalik katta bo'lishi mumkinki, savdo to'xtaydi — tushum 0, DWL esa butun total surplus.",
  ], "Both false."),
  p(3, "Rubber bands. (a) Very elastic supply and very inelastic demand: how is the burden shared? Use CS and PS. (b) Very inelastic supply and very elastic demand?", [
    "(a) Yuk asosan **iste'molchilarda**: CS ko'p kamayadi, PS kam.",
    "(b) Yuk asosan **ishlab chiqaruvchilarda**: PS ko'p kamayadi, CS kam.",
  ], "(a) Mostly consumers (b) Mostly producers."),
  p(4, "A tax on heating oil. (a) Would the DWL be greater in the first year or the fifth year? (b) Would the revenue be greater in the first or the fifth year?", [
    "(a) **Beshinchi yil**: uzoq muddatda talab egiluvchanroq → miqdor ko'proq qisqaradi → DWL katta.",
    "(b) **Birinchi yil**: miqdor hali kam qisqargan → T × Q katta.",
  ], "(a) Fifth year (b) First year."),
  p(5, "Your friend suggests that taxing food would be a good way to raise revenue because the demand for food is quite inelastic. In what sense is this a “good” way to raise revenue? In what sense is it not?", [
    "Yaxshi: noegiluvchan talab → kichik DWL (samarali), barqaror tushum.",
    "Yomon: **adolat** — kambag'al oilalar daromadining katta qismini ovqatga sarflaydi (Engel qonuni), shuning uchun soliq ularga og'irroq.",
  ], "Efficient (small DWL) but unfair to the poor (regressive)."),
  p(6, "Senator Moynihan once introduced a bill to levy a 10,000 percent tax on certain hollow-tipped bullets. (a) Would this raise much revenue? (b) Why might he have proposed it?", [
    "(a) **Yo'q** — bunday soliq bilan deyarli hech kim sotib olmaydi, Q ≈ 0 → tushum ≈ 0 (Laffer egri chizig'ining eng o'ng uchi).",
    "(b) Maqsad tushum emas — o'qlarning **ishlatilishini to'xtatish** (soliq orqali taqiq).",
  ], "(a) No (b) To stop the bullets from being sold."),
  p(7, "The government places a tax on the purchase of socks. (a) Show total spending by consumers, total revenue for producers, and tax revenue before and after. (b) Does the price received by producers rise or fall? Can you tell whether total receipts for producers rise or fall? (c) Does the price paid by consumers rise or fall? Can you tell whether total consumer spending rises or falls? If total consumer spending falls, does consumer surplus rise?", [
    "(a) Oldin: xarajat = tushum = P* × Q*. Keyin: xaridor xarajati Pb × Q₂, sotuvchi tushumi Ps × Q₂, davlat T × Q₂.",
    "(b) Ps **tushadi**; Q ham tushadi → sotuvchilar tushumi **aniq kamayadi**.",
    "(c) Pb **oshadi**, Q tushadi → jami xarajat talab egiluvchanligiga bog'liq: noegiluvchan — oshadi, egiluvchan — kamayadi.",
    "Xarajat kamaysa ham CS **oshmaydi**: xaridorlar qimmatroq to'lab, kamroq oladi — CS baribir kamayadi.",
  ], "Producers' receipts fall; consumer spending depends on elasticity; consumer surplus falls either way."),
  p(8, "Suppose the government subsidizes a good: for each unit sold, it pays $2 to the buyer. How does the subsidy affect CS, PS, tax revenue, and total surplus? Does a subsidy lead to a deadweight loss?", [
    "Talab $2 **yuqoriga** siljiydi → miqdor oshadi, xaridor sof narxi tushadi, sotuvchi narxi oshadi.",
    "CS ↑, PS ↑, davlat xarajati (manfiy tushum) = 2 × Q₂.",
    "Davlat xarajati CS va PS o'sishidan **katta** → total surplus kamayadi: **DWL bor** — muvozanatdan ortiq birliklarda xarajat qiymatdan yuqori.",
  ], "CS and PS rise, but government spending exceeds the gains: yes, there is a deadweight loss."),
  p(9, "Hotel rooms in Smalltown go for $100, and 1,000 rooms are rented. (a) A $10 tax per room: the rate rises to $108 and 900 rooms are rented. Revenue and DWL? (b) The tax doubles to $20: price $116, 800 rooms. Revenue and DWL? Double, more or less than double?", [
    "(a) Tushum = 10 × 900 = **$9,000**. DWL = ½ × 10 × 100 = **$500**.",
    "(b) Tushum = 20 × 800 = **$16,000** — ikki barobardan **kam**. DWL = ½ × 20 × 200 = **$2,000** — **to'rt barobar** (ikki barobardan ko'p).",
    "Sabab: miqdor kamaygani uchun tushum sekin o'sadi; DWL uchburchakning ikkala o'lchami oshgani uchun kvadratik o'sadi.",
  ], "(a) $9,000 and $500 (b) $16,000 (less than double) and $2,000 (four times).", "hotel"),
  p(10, "\\(Q^S = 2P\\), \\(Q^D = 300 - P\\). (a) Equilibrium. (b) A tax T on buyers: \\(Q^D = 300 - (P + T)\\). New equilibrium? (c) Revenue as a function of T; graph for T from 0 to 300. (d) DWL as a function of T. (e) A tax of $200 per unit: good policy? Better one?", [
    "(a) P = 100, Q = 200.",
    "(b) \\(300 - P - T = 2P \\Rightarrow P_S = (300 - T)/3\\), \\(P_B = (300 + 2T)/3\\), \\(Q = 200 - 2T/3\\).",
    "(c) \\(R(T) = T(200 - 2T/3)\\): T = 150 da maksimum $15,000, T = 300 da nol.",
    "(d) \\(DWL = \\tfrac12 \\cdot T \\cdot \\tfrac{2T}{3} = T^2/3\\).",
    "(e) T = 200: R = 13,333, DWL = 13,333. T = 100: R = 13,333 (xuddi shu!), DWL = 3,333. Demak **$100 soliq yaxshiroq** — bir xil tushum, to'rt barobar kam yo'qotish.",
  ], "(b) Ps = (300 − T)/3, Q = 200 − 2T/3 (c) R = T(200 − 2T/3) (d) DWL = T²/3 (e) No: $100 raises the same revenue with a quarter of the DWL.", "laffer"),
];
