import type { Question } from '../../types';
import { tr } from '../../../lib/lang';

const C = 15;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });
const rel = ['P > MC and P > ATC.', 'P > MC and P = ATC.', 'P = MC and P > ATC.', 'P = MC and P = ATC.'];

export const quickQuiz: Question[] = [
  mk("ch15.qq.1", tr("Raqobat", 'Competition'), "A perfectly competitive firm", [
    { text: "chooses its price to maximize profits.", why: tr("Raqobatchi firma narxni tanlay olmaydi.", "A competitive firm can't choose its price.") },
    { text: "sets its price to undercut other firms selling similar products.", why: tr("U bozor narxida xohlagancha sota oladi — arzonlashtirishga sabab yo'q.", "It can sell as much as it wants at the market price — there's no reason to cut the price.") },
    { text: "takes its price as given by market conditions.", correct: true, why: "Price taker." },
    { text: "picks the price that yields the largest market share.", why: tr("Narx tanlanmaydi.", "The price isn't chosen.") },
  ]),
  mk("ch15.qq.2", tr("Tushum", 'Revenue'), "When a perfectly competitive firm increases the quantity it produces and sells by 10 percent, its marginal revenue ___ and its total revenue rises by ___.", [
    { text: "falls; less than 10 percent", why: tr("MR = P o'zgarmaydi.", "MR = P doesn't change.") },
    { text: "falls; exactly 10 percent", why: tr("MR o'zgarmaydi.", "MR doesn't change.") },
    { text: "stays the same; less than 10 percent", why: tr("TR = P × Q — Q bilan proporsional.", 'TR = P × Q — proportional to Q.') },
    { text: "stays the same; exactly 10 percent", correct: true, why: tr("P o'zgarmas → TR aynan 10% oshadi.", 'P is constant → TR rises by exactly 10%.') },
  ]),
  mk("ch15.qq.3", tr("Foyda maksimumi", 'Profit maximum'), "A competitive firm maximizes profit by choosing the quantity at which", [
    { text: "average total cost is at its minimum.", why: tr("Bu faqat uzoq muddatli muvozanatda P ga to'g'ri keladi.", 'This equals P only in long-run equilibrium.') },
    { text: "marginal cost equals the price.", correct: true, why: tr("MR = P, demak MR = MC ⇔ P = MC.", 'MR = P, so MR = MC ⇔ P = MC.') },
    { text: "average total cost equals the price.", why: tr("Bu foyda nol bo'ladigan nuqta.", "That's the point where profit is zero.") },
    { text: "marginal cost equals average total cost.", why: "Bu efficient scale." },
  ]),
  mk("ch15.qq.4", tr("Taklif egri chizig'i", 'The supply curve'), "A competitive firm's short-run supply curve is its ___ cost curve above its ___ cost curve.", [
    { text: "average-total-; marginal-", why: tr("Taklif — MC egri chizig'i.", 'Supply is the MC curve.') },
    { text: "average-variable-; marginal-", why: tr("Teskari.", 'The reverse.') },
    { text: "marginal-; average-total-", why: tr("Bu **uzoq** muddatli taklif.", "That's **long-run** supply.") },
    { text: "marginal-; average-variable-", correct: true, why: tr("Qisqa muddatda fixed cost sunk — P < AVC bo'lsa yopiladi.", 'In the short run fixed cost is sunk — shut down if P < AVC.') },
  ]),
  mk("ch15.qq.5", "Shutdown/exit", "If a profit-maximizing competitive firm is producing a quantity at which marginal cost is between average variable cost and average total cost, it will", [
    { text: "keep producing in the short run but exit the market in the long run.", correct: true, why: tr("P = MC, demak AVC < P < ATC: qisqa muddatda yopishdan ko'ra kam zarar, uzoq muddatda chiqish.", 'P = MC, so AVC < P < ATC: in the short run a smaller loss than shutting down, in the long run exit.') },
    { text: "shut down in the short run but return to production in the long run.", why: tr("P > AVC — yopish shart emas.", 'P > AVC — no need to shut down.') },
    { text: "shut down in the short run and exit the market in the long run.", why: tr("Qisqa muddatda ishlash zararni kamaytiradi.", 'Operating in the short run reduces the loss.') },
    { text: "keep producing both in the short run and in the long run.", why: tr("P < ATC — uzoq muddatda zarar.", 'P < ATC — a loss in the long run.') },
  ]),
  mk("ch15.qq.6", tr("LR muvozanat", 'LR equilibrium'), "In the long-run equilibrium of a competitive market with identical firms, what are the relationships among price P, marginal cost MC, and average total cost ATC?", rel.map((r, i) => ({
    text: r,
    correct: i === 3,
    why: [tr("Foyda maksimumida P = MC.", 'At the profit maximum P = MC.'), tr("Foyda maksimumida P = MC.", 'At the profit maximum P = MC.'), tr("P > ATC — foyda bor, kirish davom etadi.", "P > ATC — there's profit, so entry continues."), tr("P = MC (foyda maks.) va P = ATC (nol foyda) → min ATC.", 'P = MC (max profit) and P = ATC (zero profit) → min ATC.')][i],
  }))),
  mk("ch15.qq.7", tr("SR muvozanat", 'SR equilibrium'), "In the short-run equilibrium of a competitive market with identical firms, if new firms are getting ready to enter, what are the relationships among P, MC, and ATC?", rel.map((r, i) => ({
    text: r,
    correct: i === 2,
    why: [tr("Firma baribir P = MC da ishlab chiqaradi.", 'The firm still produces where P = MC.'), tr("P = ATC bo'lsa kirish yo'q.", "If P = ATC there's no entry."), tr("Foyda musbat (P > ATC) — kirish rag'bati.", 'Profit is positive (P > ATC) — an incentive to enter.'), tr("Bu uzoq muddatli muvozanat — kirish yo'q.", "That's a long-run equilibrium — no entry.")][i],
  }))),
  mk("ch15.qq.8", tr("Fixed cost soliq", 'A fixed-cost tax'), "Pretzel stands in New York City are a perfectly competitive market in long-run equilibrium. The city imposes a $100 per month tax on each stand. How does this affect the number of pretzels consumed in the short run and the long run?", [
    { text: "down in the short run, no change in the long run", why: tr("Qisqa muddatda MC o'zgarmaydi.", "In the short run MC doesn't change.") },
    { text: "up in the short run, no change in the long run", why: tr("Hech narsa oshmaydi.", 'Nothing rises.') },
    { text: "no change in the short run, down in the long run", correct: true, why: tr("Soliq — fixed cost: qisqa muddatda MC (taklif) o'zgarmaydi; zarar → ba'zi rastalar chiqadi → narx oshadi, iste'mol kamayadi.", "The tax is a fixed cost: in the short run MC (supply) doesn't change; losses → some stalls exit → the price rises and consumption falls.") },
    { text: "no change in the short run, up in the long run", why: tr("Chiqish taklifni kamaytiradi.", 'Exit reduces supply.') },
  ]),
];

export const checks: Record<string, Question> = {
  "s-15-1a": { id: "ch15.check.15-1a", chapter: C, kind: "tf", source: "new", topic: tr("Raqobat", 'Competition'), prompt: tr("Raqobatchi firmalar price taker bo'lishi uchun erkin kirish-chiqish sharti albatta kerak.", 'For competitive firms to be price takers, free entry and exit are necessarily required.'), answer: false, why: tr("Price taker bo'lish uchun ko'p sotuvchi va bir xil tovar yetarli. Erkin kirish-chiqish uzoq muddatli muvozanatni shakllantiradi.", 'To be a price taker, many sellers and identical goods are enough. Free entry and exit shape the long-run equilibrium.') },
  "s-15-1b": { id: "ch15.check.15-1b", chapter: C, kind: "numeric", source: "new", topic: tr("Tushum", 'Revenue'), prompt: tr("Sut gallon $6. Vaca fermasi 1,000 dan 2,000 gallonga o'tsa, total revenue (dollarda)?", "Milk is $6 a gallon. If Vaca's farm goes from 1,000 to 2,000 gallons, what is total revenue (in dollars)?"), answer: 12000, tolerance: 0, unit: "$", why: tr("TR = 6 × 2,000 — ikki barobar; narx o'zgarmaydi.", "TR = 6 × 2,000 — it doubles; the price doesn't change.") },
  "s-15-2a": { id: "ch15.check.15-2a", chapter: C, kind: "numeric", source: "new", topic: tr("Foyda maks.", 'Max profit'), prompt: tr("Vaca fermasi TC: 0 gal — $3, 1 — 5, 2 — 8, 3 — 12, 4 — 17, 5 — 23, 6 — 30. P = $6. Maksimal foyda?", "Vaca's farm TC: 0 gal — $3, 1 — 5, 2 — 8, 3 — 12, 4 — 17, 5 — 23, 6 — 30. P = $6. Maximum profit?"), answer: 7, tolerance: 0, unit: "$", why: tr("Foyda: −3, 1, 4, 6, 7, 7, 6 → 4 yoki 5 gallonda $7.", 'Profit: −3, 1, 4, 6, 7, 7, 6 → $7 at 4 or 5 gallons.') },
  "s-15-2b": mk("ch15.check.15-2b", tr("MC = taklif", 'MC = supply'), tr("Narx P₁ dan P₂ ga oshdi. Raqobatchi firma nima qiladi?", 'The price rose from P₁ to P₂. What does the competitive firm do?'), [
    { text: tr("MC egri chizig'i bo'ylab yangi P₂ = MC nuqtagacha ishlab chiqarishni oshiradi — MC egri chizig'i firma taklif egri chizig'i", "It raises output along the MC curve to the new point where P₂ = MC — the MC curve is the firm's supply curve"), correct: true, why: "Figure 2." },
    { text: tr("Ishlab chiqarishni o'zgartirmaydi", "It doesn't change output"), why: tr("P₂ > MC eski Q da — oshirish foydali.", 'P₂ > MC at the old Q — raising output is profitable.') },
    { text: tr("ATC minimumigacha", 'Up to the ATC minimum'), why: tr("Qoida — P = MC.", 'The rule is P = MC.') },
    { text: tr("Narxni ham oshiradi", 'It raises its price too'), why: tr("Narx — bozordan.", 'The price comes from the market.') },
  ], 'new'),
  "s-15-2c": { id: "ch15.check.15-2c", chapter: C, kind: "tf", source: "new", topic: "Shutdown", prompt: tr("Firma narx ATC dan past bo'lishi bilanoq darhol ishlab chiqarishni to'xtatishi kerak.", 'A firm should stop producing immediately as soon as the price falls below ATC.'), answer: false, why: tr("Qisqa muddatda fixed cost sunk — P > AVC bo'lsa ishlash zararni kamaytiradi. Faqat P < AVC da yoping.", 'In the short run fixed cost is sunk — if P > AVC, operating reduces the loss. Shut down only when P < AVC.') },
  "s-15-2d": mk("ch15.check.15-2d", "Sunk cost", tr("Kinoni $15 ga baholaysiz, chipta $10. Kirishdan oldin chiptani yo'qotdingiz. Nima qilasiz?", 'You value a movie at $15 and a ticket costs $10. You lose your ticket before going in. What do you do?'), [
    { text: tr("Yana $10 ga chipta oling: foyda $15 > yangi xarajat $10; yo'qolgan $10 — sunk cost", 'Buy another ticket for $10: the benefit $15 > the new cost $10; the lost $10 is a sunk cost'), correct: true, why: tr("“To'kilgan sut uchun yig'lamang.”", "“Don't cry over spilt milk.”") },
    { text: tr("Uyga ketaman — jami $20 juda qimmat", 'Go home — $20 in total is too expensive'), why: tr("Sunk cost'ni qarorga kiritdingiz.", 'You included the sunk cost in the decision.') },
    { text: tr("Faqat $5 to'layman", "I'll pay only $5"), why: tr("Chipta $10.", 'The ticket is $10.') },
    { text: tr("Farqi yo'q", 'It makes no difference'), why: tr("Kinoni ko'rish $5 sof yutuq beradi.", 'Seeing the movie gives a net gain of $5.') },
  ], 'new'),
  "s-15-2e": { id: "ch15.check.15-2e", chapter: C, kind: "match", source: "new", topic: tr("Qoidalar", 'Rules'), prompt: tr("Shartni qisqa yoki uzoq muddatli qaror bilan moslashtiring.", 'Match each condition with the short- or long-run decision.'), pairs: [
    { left: "P < AVC", right: tr("Shut down (qisqa muddat)", 'Shut down (short run)') },
    { left: "P < ATC", right: tr("Exit (uzoq muddat)", 'Exit (long run)') },
    { left: "P > ATC", right: tr("Enter / qoling", 'Enter / stay') },
  ] },
  "s-15-2f": { id: "ch15.check.15-2f", chapter: C, kind: "numeric", source: "new", topic: tr("Foyda yuzasi", 'The profit area'), prompt: tr("P = $10, Q = 100, ATC = $8. Foyda?", 'P = $10, Q = 100, ATC = $8. Profit?'), answer: 200, tolerance: 0, unit: "$", why: tr("(10 − 8) × 100 = $200 — to'rtburchak yuzasi.", '(10 − 8) × 100 = $200 — the area of the rectangle.') },
  "s-15-2g": mk("ch15.check.15-2g", "Recap", tr("Fred va Wilma: P = MC dagi Q da AVC < P < ATC. Nima qilishadi?", 'Fred and Wilma: at the Q where P = MC, AVC < P < ATC. What do they do?'), [
    { text: tr("Qisqa muddatda ishlashadi (zararni kamaytiradi), uzoq muddatda chiqishni rejalashtirishadi", 'They operate in the short run (reducing the loss) and plan to exit in the long run'), correct: true, why: tr("Table 3, 3-qoida.", 'Table 3, rule 3.') },
    { text: tr("Darhol yopishadi", 'They shut down immediately'), why: tr("Faqat P < AVC da.", 'Only when P < AVC.') },
    { text: tr("Qolib, foydadan zavqlanishadi", 'They stay and enjoy the profit'), why: tr("P < ATC — zarar.", 'P < ATC — a loss.') },
    { text: tr("Narxni oshirishadi", 'They raise the price'), why: "Price takers." },
  ], 'new'),
  "s-15-3a": { id: "ch15.check.15-3a", chapter: C, kind: "numeric", source: "new", topic: tr("Bozor taklifi", 'Market supply'), prompt: tr("1,000 bir xil firma; har biri $2 narxda 200 birlik taklif qiladi. Bozor taklifi?", '1,000 identical firms; each supplies 200 units at a price of $2. Market supply?'), answer: 200000, tolerance: 0, why: tr("Gorizontal yig'indi: 1,000 × 200 (Figure 6).", 'The horizontal sum: 1,000 × 200 (Figure 6).') },
  "s-15-3b": mk("ch15.check.15-3b", tr("Nol foyda", 'Zero profit'), tr("Nega erkin kirish-chiqishda uzoq muddatda firmalar efficient scale da ishlaydi?", 'Why, with free entry and exit, do firms operate at the efficient scale in the long run?'), [
    { text: tr("Foyda maksimumi P = MC, nol foyda P = ATC talab qiladi; MC = ATC faqat ATC minimumida", 'Profit maximization requires P = MC and zero profit requires P = ATC; MC = ATC only at the ATC minimum'), correct: true, why: tr("LR taklif min ATC da gorizontal.", 'LR supply is horizontal at min ATC.') },
    { text: tr("Davlat buyuradi", 'The government orders it'), why: tr("Bozor kuchlari.", 'Market forces.') },
    { text: tr("Talab shunday", "That's what demand is"), why: tr("Talab firmalar sonini belgilaydi, narxni emas.", 'Demand determines the number of firms, not the price.') },
    { text: tr("Firmalar foydani yomon ko'radi", 'Firms dislike profit'), why: tr("Foyda kirish orqali yo'qoladi.", 'Profit disappears through entry.') },
  ], 'new'),
  "s-15-3c": { id: "ch15.check.15-3c", chapter: C, kind: "numeric", source: "new", topic: tr("Nol foyda", 'Zero profit'), prompt: tr("Fermer $1 mln investitsiya qilgan (bankda $40,000 foiz olardi) va $60,000 maoshli ishdan voz kechgan. Iqtisodiy foyda 0 bo'lsa, buxgalteriya foydasi?", 'A farmer invested $1 million (could earn $40,000 interest at the bank) and gave up a $60,000 job. If economic profit is 0, what is accounting profit?'), answer: 100000, tolerance: 0, unit: "$", why: tr("Implicit xarajatlar $40,000 + $60,000 — buxgalter ularni hisoblamaydi.", "Implicit costs are $40,000 + $60,000 — the accountant doesn't count them.") },
  "s-15-3d": mk("ch15.check.15-3d", tr("Talab siljishi", 'A demand shift'), tr("Sut juda foydali ekani aniqlanib talab oshdi. Qisqa va uzoq muddatda nima bo'ladi?", 'Milk turns out to be very healthy and demand rises. What happens in the short and long run?'), [
    { text: tr("SR: narx P₁ → P₂, foyda paydo bo'ladi; LR: yangi fermalar kiradi, narx P₁ ga qaytadi, miqdor ancha oshadi", 'SR: the price goes P₁ → P₂ and profit appears; LR: new farms enter, the price returns to P₁, and quantity rises a lot'), correct: true, why: "Figure 8: A → B → C." },
    { text: tr("Narx doimiy ravishda P₂ da qoladi", 'The price stays at P₂ permanently'), why: tr("Kirish narxni tushiradi.", 'Entry lowers the price.') },
    { text: tr("Hech narsa o'zgarmaydi", 'Nothing changes'), why: tr("SR da narx oshadi.", 'In the SR the price rises.') },
    { text: tr("Firmalar chiqib ketadi", 'Firms exit'), why: tr("Foyda — kirish.", 'Profit — entry.') },
  ], 'new'),
  "s-15-3e": { id: "ch15.check.15-3e", chapter: C, kind: "tf", source: "new", topic: tr("LR taklif", 'LR supply'), prompt: tr("Agar firmalarning xarajatlari turlicha bo'lsa yoki ba'zi resurslar (yer) cheklangan bo'lsa, LR taklif egri chizig'i yuqoriga qaragan bo'lishi mumkin va arzon firmalar uzoq muddatda ham foyda ko'radi.", "If firms' costs differ or some inputs (land) are limited, the LR supply curve can slope upward and low-cost firms earn profit even in the long run."), answer: true, why: tr("Narx marjinal firmaning ATC iga teng — u nol foyda ko'radi, arzonroqlar musbat. Baribir LR taklif SR dan elastikroq.", "The price equals the marginal firm's ATC — it earns zero profit, cheaper firms positive. Still, LR supply is more elastic than SR.") },
};

export const practice: Question[] = [
  mk("ch15.new.leah", "Problem 2", tr("Leah bir maysazor uchun $27 oladi; kuniga 10 ta maysazor; TC $280, shundan $30 fixed. Qaror?", 'Leah charges $27 per lawn; 10 lawns a day; TC $280, of which $30 is fixed. Her decision?'), [
    { text: tr("AVC $25 < P < ATC $28: qisqa muddatda ishlaydi, uzoq muddatda chiqadi", 'AVC $25 < P < ATC $28: she operates in the short run and exits in the long run'), correct: true, why: tr("Yopilsa zarar $30, ishlasa $10 (270 − 280).", 'Shutting down loses $30, operating $10 (270 − 280).') },
    { text: tr("Darhol yopadi", 'She shuts down immediately'), why: tr("P > AVC.", 'P > AVC.') },
    { text: tr("Uzoq muddatda ham qoladi", 'She stays in the long run too'), why: tr("P < ATC.", 'P < ATC.') },
    { text: tr("Narxni $28 ga oshiradi", 'She raises her price to $28'), why: "Price taker." },
  ], 'new'),
  { id: "ch15.new.ball", chapter: C, kind: "numeric", source: "new", topic: "Problem 4", prompt: tr("Ball Bearings: FC $100, VC 0, 50, 70, 90, 140, 200, 360 (0–6 quti). P = $50. Eng yaxshi qarorda foyda (zarar manfiy)?", 'Ball Bearings: FC $100, VC 0, 50, 70, 90, 140, 200, 360 (0–6 cases). P = $50. Profit (losses negative) under the best decision?'), answer: -40, tolerance: 0, unit: "$", why: tr("MC: 50, 20, 20, 50, 60, 160. 3 yoki 4 quti: TR 150/200 − TC 190/240 = −$40. Yopish: −$100; 1 quti: 50 − 150 = −$100. Demak ishlash yaxshi.", 'MC: 50, 20, 20, 50, 60, 160. 3 or 4 cases: TR 150/200 − TC 190/240 = −$40. Shutting down: −$100; 1 case: 50 − 150 = −$100. So operating is better.'), traps: [{ value: -100, why: tr("Bu yopish (yoki 1 quti) zarari — 3–4 quti kamroq zarar beradi.", "That's the loss from shutting down (or 1 case) — 3–4 cases lose less.") }] },
  { id: "ch15.new.ectenia-n", chapter: C, kind: "numeric", source: "new", topic: "Problem 9", prompt: tr("Ectenia: FC $9, MC 2, 4, 6, 8, 10, 12; talab P = $11 da 200 pirog. Har bir ishlab chiqaruvchi 5 pirog yopsa, nechta ishlab chiqaruvchi?", 'Ectenia: FC $9, MC 2, 4, 6, 8, 10, 12; demand at P = $11 is 200 pies. If each producer makes 5 pies, how many producers are there?'), answer: 40, tolerance: 0, why: tr("200 / 5 = 40; har biri foyda 55 − 39 = $16 → kirish bo'ladi. LR: P = min ATC = $7 (q = 3), talab 600, 200 ta ishlab chiqaruvchi.", '200 / 5 = 40; each earns profit 55 − 39 = $16 → there will be entry. LR: P = min ATC = $7 (q = 3), demand 600, 200 producers.') },
  { id: "ch15.new.ectenia-lr", chapter: C, kind: "numeric", source: "new", topic: "Problem 9d", prompt: tr("Ectenia uzoq muddatda: TC = 9 + (2 + 4 + … ); ATC: 11, 7.5, 7, 7.25, 7.8, 8.5. LR narx?", 'Ectenia in the long run: TC = 9 + (2 + 4 + … ); ATC: 11, 7.5, 7, 7.25, 7.8, 8.5. The LR price?'), answer: 7, tolerance: 0, unit: "$", why: tr("Min ATC = $7 (q = 3). Talab 600 pirog → 200 ishlab chiqaruvchi, foyda 0.", 'Min ATC = $7 (q = 3). Demand 600 pies → 200 producers, profit 0.') },
  { id: "ch15.new.p10", chapter: C, kind: "numeric", source: "new", topic: "Problem 10", prompt: tr("100 firma, FC $16, AVC = q (q = 1…6). Narx $10. Bozor taklifi?", '100 firms, FC $16, AVC = q (q = 1…6). The price is $10. Market supply?'), answer: 500, tolerance: 0, why: tr("VC = q² → MC: 1, 3, 5, 7, 9, 11; P = 10 da q = 5 → 500. LR: narx min ATC = $8 (q = 4) ga tushadi.", 'VC = q² → MC: 1, 3, 5, 7, 9, 11; at P = 10, q = 5 → 500. LR: the price falls to min ATC = $8 (q = 4).'), traps: [{ value: 600, why: tr("6-birlik MC = 11 > 10.", "The 6th unit's MC = 11 > 10.") }] },
  { id: "ch15.new.p11", chapter: C, kind: "numeric", source: "new", topic: "Problem 11", prompt: tr("TC = 50 + ½q², MC = q; talab Q = 120 − 5P; 9 firma. Qisqa muddatli muvozanat narxi (2 xona)?", 'TC = 50 + ½q², MC = q; demand Q = 120 − 5P; 9 firms. The short-run equilibrium price (2 decimals)?'), answer: 8.57, tolerance: 0.01, unit: "$", why: tr("Firma taklifi q = P → bozor 9P = 120 − 5P → P = 120/14 ≈ 8.57. Har firma zarar ko'radi (≈ −$13.3) → chiqish; LR: P = min ATC = $10 (q = 10), Q = 70, 7 firma.", 'Firm supply q = P → market 9P = 120 − 5P → P = 120/14 ≈ 8.57. Each firm makes a loss (≈ −$13.3) → exit; LR: P = min ATC = $10 (q = 10), Q = 70, 7 firms.') },
  mk("ch15.new.pretzel", tr("Fixed-cost soliq", 'A fixed-cost tax'), tr("Uzoq muddatli muvozanatdagi raqobatli bozorda har bir firmaga oyiga $100 litsenziya to'lovi qo'yildi. Uzoq muddatda nima bo'ladi?", 'In a competitive market in long-run equilibrium, each firm is charged a $100 monthly license fee. What happens in the long run?'), [
    { text: tr("Min ATC oshadi → narx yangi, yuqoriroq min ATC ga ko'tariladi; firmalar soni va iste'mol kamayadi", 'Min ATC rises → the price rises to the new, higher min ATC; the number of firms and consumption fall'), correct: true, why: tr("QQ 8 mantiqi.", 'The logic of QQ 8.') },
    { text: tr("Narx o'zgarmaydi", "The price doesn't change"), why: tr("LR narx = min ATC, u oshdi.", 'The LR price = min ATC, and it rose.') },
    { text: tr("Firmalar ko'payadi", 'More firms'), why: tr("Zarar → chiqish.", 'Losses → exit.') },
    { text: tr("MC oshadi, narx darhol oshadi", 'MC rises and the price rises immediately'), why: tr("Fixed cost MC ga ta'sir qilmaydi.", "A fixed cost doesn't affect MC.") },
  ], 'new'),
  mk("ch15.new.uz", tr("O'zbekistondan misol", 'An example from Uzbekistan'), tr("Chorsu bozorida yuzlab sotuvchi bir xil pomidor sotadi. Bir sotuvchi narxni boshqalardan 20% yuqori qo'ysa nima bo'ladi?", 'At Chorsu bazaar hundreds of sellers sell identical tomatoes. What happens if one seller prices 20% above the others?'), [
    { text: tr("Xaridorlar qo'shni rastadan oladi — u price taker, MR = bozor narxi", 'Buyers go to the neighboring stall — the seller is a price taker, MR = the market price'), correct: true, why: tr("Ko'p sotuvchi, bir xil tovar — raqobatli bozor.", 'Many sellers, an identical good — a competitive market.') },
    { text: tr("Tushumi 20% oshadi", 'Its revenue rises 20%'), why: tr("Sotuv deyarli nolga tushadi.", 'Sales fall almost to zero.') },
    { text: tr("Boshqalar ham narx oshiradi", 'The others raise prices too'), why: tr("Ular bozor narxida xohlagancha sota oladi.", 'They can sell as much as they want at the market price.') },
    { text: tr("Monopoliya foydasi oladi", 'It earns a monopoly profit'), why: tr("Bozor hokimiyati yo'q.", "There's no market power.") },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
