import type { Problem } from '../../types';

const C = 16;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch16.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch16.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "Give an example of a government-created monopoly. Is creating this monopoly necessarily bad public policy?", ["Yangi doriga patent (20 yil) yoki romanga mualliflik huquqi.", "**Yo'q**: yuqori narx (xarajat) bilan birga tadqiqot va ijodga rag'bat (foyda) bor."], "Patents and copyrights — they have costs but also encourage innovation."),
  r(2, "Define natural monopoly. What does the size of a market have to do with whether an industry is a natural monopoly?", ["Bitta firma butun bozorni ikki yoki undan ko'p firmadan arzonroq ta'minlay olsa (kerakli hajmda miqyos samarasi).", "Bozor kichik bo'lsa — tabiiy monopoliya; kattalashsa (ko'prik tiqilinch) — bir nechta firma samarali bo'lishi mumkin."], "A single firm can serve the market at lowest cost; as markets grow, natural monopolies can become competitive.", "regulation"),
  r(3, "Why is a monopolist's marginal revenue less than the price of its good? Can marginal revenue ever be negative?", ["Ko'proq sotish uchun **barcha** birliklar narxini tushirish kerak (price effect).", "**Ha**: price effect output effectdan katta bo'lsa (Table 1: 6 → 7 gallon, MR = −$2)."], "Because of the price effect; yes, MR can be negative.", "revenue"),
  r(4, "Draw the demand, marginal-revenue, average-total-cost, and marginal-cost curves for a monopolist. Show the profit-maximizing output, price, and profit.", ["Q_M: MR = MC kesishmasi (A).", "P_M: Q_M dan talab egri chizig'iga (B).", "Foyda: (P_M − ATC) × Q_M to'rtburchagi."], "Q where MR = MC; price from demand; profit = (P − ATC) × Q.", "monopoly"),
  r(5, "In your diagram, show the output that maximizes total surplus and the deadweight loss from the monopoly.", ["Samarali miqdor: talab = MC.", "DWL: Q_M va samarali miqdor orasida talab va MC orasidagi uchburchak — MC dan yuqori qadrlaydigan, lekin sotib olmagan iste'molchilar."], "Efficient output where demand meets MC; DWL is the triangle between them.", "monopoly"),
  r(6, "Give two examples of price discrimination and explain why the monopolist follows this strategy.", ["Kino: bolalar va keksalarga arzon — ularning WTP past.", "Aviachipta: shanba kechasi qolganlarga arzon — biznes sayohatchilarni (WTP yuqori) ajratadi.", "Maqsad — har bir guruhdan uning WTP iga yaqin narx olib, foydani oshirish."], "Movie tickets and airline fares — to charge prices closer to each group's willingness to pay.", "pd"),
  r(7, "What gives the government the power to regulate mergers? Give one reason a merger might be good and one reason it might be bad.", ["**Antitrust laws** (Sherman 1890, Clayton 1914).", "Yaxshi: **synergies** — birgalikda arzonroq ishlab chiqarish.", "Yomon: raqobat kamayadi, bozor hokimiyati oshadi → yuqori narx, DWL."], "Antitrust laws; synergies versus reduced competition."),
  r(8, "Describe the two problems that arise when regulators tell a natural monopoly to set price equal to marginal cost.", ["1) ATC tushayotgani uchun MC < ATC → firma **zarar** ko'radi (subsidiya kerak — soliq DWL i bilan — yoki chiqadi).", "2) Xarajatni kamaytirishga **rag'bat yo'q** — xarajat tushsa, regulyator narxni tushiradi."], "Losses (needs subsidies) and no incentive to cut costs.", "regulation"),
];

export const problems: Problem[] = [
  p(1, "A publisher: $100 → 0 novels, $90 → 100,000 … $0 → 1,000,000 (100,000 more per $10). Author paid $2 million; marginal cost $10 per book. (a) TR, TC, profit; profit-maximizing quantity and price. (b) MR; compare with price. (c) Graph MR, MC, demand; where do MR and MC cross? (d) Shade the DWL. (e) If the author were paid $3 million? (f) If maximizing efficiency: price and profit?", [
    "(a) TR (mln): 9, 16, 21, 24, 25, 24, 21, 16, 9, 0; TC = 2 + 10 × Q; foyda: 6, 12, 16, **18, 18**, 16, 12, 6, −2 → **400k yoki 500k**, narx **$60 yoki $50**.",
    "(b) MR (har kitob): 90, 70, 50, 30, 10, −10, −30… — har doim **narxdan past** (price effect).",
    "(c) MR = MC = $10 — 400k va 500k oralig'ida: foyda maksimumi.",
    "(d) DWL: 500k dan 900k gacha talab va MC ($10) orasidagi uchburchak — kitobni $10 dan yuqori qadrlaydigan, lekin olmaganlar.",
    "(e) $3 mln — fixed cost → narx va miqdor **o'zgarmaydi**, foyda $1 mln kamayadi.",
    "(f) P = MC = **$10**, 900k kitob; foyda 9 − 9 − 2 = **−$2 mln**.",
  ], "400,000–500,000 copies at $60–$50 (profit $18 million); efficient price $10 gives a $2 million loss.", "monopoly"),
  p(2, "A small town is served by many competing supermarkets with the same constant marginal cost. (a) Show CS, PS, and total surplus. (b) The supermarkets combine into one chain. Show new CS, PS, total surplus; transfer and deadweight loss?", [
    "(a) Raqobat: P = MC; PS = 0 (MC o'zgarmas); umumiy surplus = CS — talab ostidagi va MC ustidagi uchburchak.",
    "(b) Monopoliya: MR = MC → kam miqdor, P > MC. CS — kichikroq uchburchak; PS — (P − MC) × Q_M to'rtburchagi = **transfer** iste'molchidan; DWL — Q_M dan raqobat miqdorigacha uchburchak.",
  ], "Monopoly turns part of CS into producer surplus (a transfer) and destroys the DWL triangle.", "monopoly"),
  p(3, "Taylor Swift's CD: $24 → 10,000, $22 → 20,000, $20 → 30,000, $18 → 40,000, $16 → 50,000, $14 → 60,000; no fixed cost, variable cost $5 per CD. (a) TR and MR per 10,000. (b) Profit-maximizing quantity, price, profit. (c) What recording fee should her agent demand?", [
    "(a) TR: 240k, 440k, 600k, 720k, 800k, 840k; MR (har 10k): 240k, 200k, 160k, 120k, 80k, 40k → har CD: $24, 20, 16, 12, 8, 4.",
    "(b) MR > MC ($5) bo'lguncha: **50,000** CD, **$16**, foyda 800k − 250k = **$550,000**.",
    "(c) **$550,000** gacha (fixed cost — kompaniya qarorini o'zgartirmaydi, foydani oladi).",
  ], "50,000 CDs at $16 for $550,000 profit; the fee can be up to $550,000."),
  p(4, "A bridge costs $2 million and nothing to maintain. Demand: $8 → 0 crossings … $0 → 800,000 (100,000 more per $1). (a) Profit-maximizing price? Efficient? (b) Should a profit-maximizing company build it? (c) What price should a government charge? (d) Should the government build it?", [
    "(a) MC = 0 → maksimal TR: **$4**, 400k o'tish, $1.6 mln. **Samarasiz**: P > MC = 0.",
    "(b) **Yo'q**: 1.6 − 2 = **−$0.4 mln**.",
    "(c) **P = 0** (= MC).",
    "(d) **Ha**: umumiy surplus ½ × 800k × $8 = **$3.2 mln** > $2 mln.",
  ], "$4 (inefficient); no — a $400,000 loss; the government should charge zero and build it.", "regulation"),
  p(5, "(a) Why will a monopolist never produce where demand is inelastic? (b) Label the inelastic part of the demand curve. (c) Show the quantity and price that maximize total revenue.", [
    "(a) Inelastik qismda narxni oshirish TR ni **oshiradi** va miqdorni (demak TC ni) kamaytiradi → foyda albatta oshadi. Ya'ni MR < 0 < MC — optimum emas.",
    "(b) Chiziqli talabda inelastik qism — MR **manfiy** bo'lgan pastki yarmi (midpointdan pastda).",
    "(c) TR maksimal — **MR = 0** (talabning o'rtasi, unit elastic).",
  ], "In the inelastic region MR < 0; revenue is maximized where MR = 0 (midpoint)."),
  p(6, "300 adults and 200 children; fixed cost $2,000, zero marginal cost. Demand schedules given. (a) Profit-maximizing prices and profit. (b) If price discrimination is banned? (c) Who is worse/better off? (d) With fixed cost $2,500?", [
    "(a) Kattalar **$7** (300 × 7 = $2,100), bolalar **$4** (200 × 4 = $800) → foyda 2,900 − 2,000 = **$900**.",
    "(b) Yagona narx **$7**: 300 × 7 = 2,100 → foyda **$100** (bolalar kelmaydi).",
    "(c) Ishlab chiqaruvchi −$800; bolalar −$100 CS (WTP $5 bo'lgan 100 bola); kattalar o'zgarmaydi. Hech kim yutmaydi; umumiy surplus $900 kamayadi.",
    "(d) Diskriminatsiyada foyda $400 (spektakl bo'ladi); yagona narxda −$400 → spektakl **bo'lmaydi**: ishlab chiqaruvchi −$400, kattalar −$300 CS, bolalar −$100.",
  ], "Adults $7, children $4, profit $900; with a ban, $7 and $100 profit; with $2,500 fixed cost the ban cancels the play.", "pd"),
  p(7, "Ectenia economics museum: fixed cost $2,400,000, no variable cost; 100,000 residents, each with demand Q = 10 − P. (a) ATC and MC; what kind of market? (b) Lump-sum tax $24 and free admission: visits and net benefit per person? (c) Lowest break-even admission price? (d) CS at that price; who is better or worse off? (e) Real-world considerations?", [
    "(a) MC = 0, ATC = 2.4 mln / Q — tushib boradi → **tabiiy monopoliya**.",
    "(b) Har kim **10** marta; CS = ½ × 10 × 10 = $50; sof foyda 50 − 24 = **$26**.",
    "(c) 100k × p(10 − p): $2 → 1.6 mln, $3 → 2.1 mln, **$4 → 2.4 mln** (zararsiz).",
    "(d) CS = ½ × 6 × 6 = **$18** < $26 — bir xil aholi uchun merning rejasi hammaga yaxshiroq.",
    "(e) Aholi bir xil emas: muzeyga bormaydiganlar soliq to'lashni istamaydi; turistlar soliq to'lamaydi; soliqning o'z DWL i bor.",
  ], "Natural monopoly; $26 each under the mayor's plan versus $18 with a $4 break-even fee.", "regulation"),
  p(8, "Henry Potter owns the only well: P = 70 − Q, MR = 70 − 2Q, MC = 10 + Q. (a) Profit-maximizing quantity and price. (b) Price ceiling 10% below the monopoly price — quantity demanded; will Potter produce it? (c) Is Uncle Billy right that ceilings cause shortages? (d) Ceiling 50% below the monopoly price?", [
    "(a) 70 − 2Q = 10 + Q → **Q = 20, P = $50**.",
    "(b) Shift $45: talab **25**; 25-birlikda MC = 35 < 45 → Potter **25** ishlab chiqaradi.",
    "(c) **Yo'q** bu holatda — taqchillik **0**; aksincha miqdor oshdi.",
    "(d) Shift $25: talab **45**; Potter MC ≤ 25 → **15** → taqchillik **30** — endi Billy haq.",
  ], "Q = 20 at $50; a $45 ceiling raises output to 25 with no shortage; a $25 ceiling causes a shortage of 30.", "monopoly"),
  p(9, "Wiknam soccer balls: P = 10 − Q, MR = 10 − 2Q, TC = 3 + Q + 0.5Q², MC = 1 + Q. (a) Quantity, price, profit. (b) Free trade at world price $6: domestic production, consumption, exports or imports? (c) Does the Chapter 9 conclusion hold? (d) If the world price equaled the domestic monopoly price?", [
    "(a) 10 − 2Q = 1 + Q → **Q = 3, P = $7**, foyda 21 − 10.5 = **$10.5**.",
    "(b) Price taker: MC = 6 → **5** ishlab chiqaradi; iste'mol 10 − Q = 6 → **4**; **1 ta eksport**.",
    "(c) **Yo'q**: avtarkiya narxi ($7) jahon narxidan ($6) yuqori, lekin eksport qiladi — chunki monopoliya narxi MC dan yuqori; 9-bob qoidasi raqobatli bozorlar uchun.",
    "(d) Jahon narxi $7: firma price taker → MC = 7 → **6** ishlab chiqaradi, iste'mol **3**, **3 eksport** — savdo o'zgartiradi (monopoliya hokimiyati yo'qoladi), 9-bobdan farqli.",
  ], "3 balls at $7, profit $10.50; at $6 it produces 5, consumes 4 and exports 1 — unlike the Chapter 9 rule.", "monopoly"),
  p(10, "P = 1,000 − 10Q, MR = 1,000 − 20Q, MC = 100 + 10Q. (a) Profit-maximizing P and Q. (b) Welfare-maximizing P and Q. (c) DWL. (d) Inventor's pay: flat $2,000; 50% of profits; $150 per unit; 50% of revenue — effect on P, Q, DWL?", [
    "(a) 1,000 − 20Q = 100 + 10Q → **Q = 30, P = $700**.",
    "(b) 1,000 − 10Q = 100 + 10Q → **Q = 45, P = $550**.",
    "(c) ½ × 15 × (700 − 400) = **$2,250**.",
    "(d) i) flat fee — Q = 30, P = 700 (o'zgarmaydi); ii) foydaning 50% — **o'zgarmaydi**; iii) $150/birlik: MC = 250 + 10Q → **Q = 25, P = 750** → DWL ↑; iv) tushumning 50%: 500 − 10Q = 100 + 10Q → **Q = 20, P = 800** → DWL ↑.",
  ], "Q = 30, P = $700; efficient Q = 45, P = $550; DWL $2,250; per-unit and revenue-based pay raise the DWL.", "monopoly"),
  p(11, "Larry wants to sell as many drinks as possible without losing money; Curly wants maximum revenue; Moe wants maximum profit. Show each partner's price and quantity on one diagram.", [
    "**Larry**: P = ATC (talab ATC ni kesgan eng katta miqdor) — nol foyda, eng ko'p sotuv.",
    "**Curly**: TR maksimal — **MR = 0**.",
    "**Moe**: foyda maksimal — **MR = MC** (faqat u).",
    "Miqdor bo'yicha: Moe < Curly < Larry (odatda).",
  ], "Larry: P = ATC; Curly: MR = 0; Moe: MR = MC."),
  p(12, "Costly price discrimination with constant MC = ATC. (a) Draw cost, demand, MR; single price. (b) Label profit X, CS Y, DWL Z. (c) Profit with perfect price discrimination? (d) Changes in profit and total surplus? (e) With a fixed cost C of discriminating, how does the monopolist decide? (f) How would a social planner decide? (g) Compare.", [
    "(c) Foyda = **X + Y + Z**.",
    "(d) Δfoyda = **Y + Z**; Δumumiy surplus = **Z** (Y — transfer). Foyda o'zgarishi katta.",
    "(e) Monopolist: **Y + Z > C** bo'lsa diskriminatsiya qiladi.",
    "(f) Planner: **Z > C** bo'lsa.",
    "(g) Y + Z > C > Z bo'lsa — monopolist diskriminatsiya qiladi, garchi jamiyat uchun foydasiz bo'lsa ham.",
  ], "Δprofit = Y + Z versus Δtotal surplus = Z; the firm may discriminate when it is not socially desirable.", "pd"),
];
