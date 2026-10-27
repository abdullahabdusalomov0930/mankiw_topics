import { consumerSurplus, equilibrium } from '../../../lib/econ';
import type { Question } from '../../types';
import { tr } from '../../../lib/lang';

const C = 7;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch07.qq.1", "Consumer surplus", "Alexis, Bruno, and Camila each want an ice-cream cone. Alexis is willing to pay $12, Bruno $8, and Camila $4. The market price is **$6**. Their consumer surplus is", [
    { text: "$6.", why: tr("Faqat Alexisni hisobladingiz ($12 − $6). Bruno ham sotib oladi.", 'You counted only Alexis ($12 − $6). Bruno buys too.') },
    { text: "$8.", correct: true, why: tr("Alexis: 12 − 6 = 6; Bruno: 8 − 6 = 2; Camila $4 < $6 — sotib olmaydi. Jami $8.", "Alexis: 12 − 6 = 6; Bruno: 8 − 6 = 2; Camila $4 < $6 — doesn't buy. Total $8.") },
    { text: "$14.", why: tr("Camila sotib olmaydi — uning surplusi manfiy bo'lardi, u hisobga kirmaydi.", "Camila doesn't buy — her surplus would be negative, so it isn't counted.") },
    { text: "$18.", why: tr("Bu WTP lar yig'indisi minus bitta narx — formula xato.", 'That is the sum of WTPs minus one price — the formula is wrong.') },
  ]),
  mk("ch07.qq.2", tr("Narx va CS", 'Price and CS'), "If the price of an ice-cream cone falls to **$3**, the consumer surplus of Alexis, Bruno, and Camila increases by", [
    { text: "$6.", why: tr("Alexis va Bruno har biri $3 dan yutadi ($6), lekin Camila ham bozorga kiradi (+$1).", 'Alexis and Bruno each gain $3 ($6), but Camila also enters the market (+$1).') },
    { text: "$7.", correct: true, why: tr("Yangi CS: 9 + 5 + 1 = 15. Avval 8 edi. O'sish 7 — eski xaridorlar (+6) va yangi xaridor (+1).", 'New CS: 9 + 5 + 1 = 15. It was 8. The rise of 7 comes from existing buyers (+6) and a new buyer (+1).') },
    { text: "$8.", why: tr("Hisobni tekshiring: 15 − 8 = 7.", 'Check the arithmetic: 15 − 8 = 7.') },
    { text: "$9.", why: tr("Bu faqat Alexisning yangi surplusi.", "That is only Alexis's new surplus.") },
  ]),
  mk("ch07.qq.3", tr("Narx va CS", 'Price and CS'), "The demand curve for cookies slopes downward. When the price is $3 per cookie, the quantity demanded is 100. If the price falls to $2, what happens to consumer surplus?", [
    { text: "It falls by less than $100.", why: tr("Narx tushsa CS **oshadi**.", 'When the price falls, CS **rises**.') },
    { text: "It falls by more than $100.", why: tr("Yo'nalish xato.", 'Wrong direction.') },
    { text: "It rises by less than $100.", why: tr("Eski 100 xaridor har biri $1 yutadi = $100 (to'rtburchak), bunga yangi xaridorlar uchburchagi qo'shiladi.", 'The 100 existing buyers each gain $1 = $100 (the rectangle), plus the triangle of new buyers.') },
    { text: "It rises by more than $100.", correct: true, why: tr("To'rtburchak BCED = $1 × 100 = $100 + yangi xaridorlar uchburchagi CEF > 0.", "Rectangle BCED = $1 × 100 = $100 + the new buyers' triangle CEF > 0.") },
  ]),
  mk("ch07.qq.4", "Producer surplus", "Diego, Emi, and Finn are available to work as tutors. The opportunity cost of tutoring is $400 for Diego, $200 for Emi, and $100 for Finn. The university hires tutors at a price of **$300**. Producer surplus is", [
    { text: "$100.", why: tr("Faqat Emini hisobladingiz.", 'You counted only Emi.') },
    { text: "$200.", why: tr("Faqat Finnni hisobladingiz.", 'You counted only Finn.') },
    { text: "$300.", correct: true, why: tr("Emi: 300 − 200 = 100; Finn: 300 − 100 = 200; Diego ($400 > $300) ishlamaydi. Jami $300.", "Emi: 300 − 200 = 100; Finn: 300 − 100 = 200; Diego ($400 > $300) doesn't work. Total $300.") },
    { text: "$400.", why: tr("Diego ishlamaydi — uning surplusi qo'shilmaydi.", "Diego doesn't work — his surplus isn't added.") },
  ]),
  mk("ch07.qq.5", tr("Narx va PS", 'Price and PS'), "Gavin has been working full-time as a gardener for $300 a week. When the market price rises to $400, Hector becomes a gardener as well. How much does producer surplus rise?", [
    { text: "by less than $100", why: tr("Gavinning o'zi $100 yutadi; Hector ham musbat surplus oladi.", 'Gavin alone gains $100; Hector also gets a positive surplus.') },
    { text: "between $100 and $200", correct: true, why: tr("Gavin +$100 (to'rtburchak). Hector $300 da kirmagan, $400 da kirdi — xarajati $300–$400 orasida, surplusi $0–$100 (uchburchak). Jami $100–$200.", "Gavin +$100 (the rectangle). Hector didn't enter at $300 but did at $400 — his cost is between $300 and $400, so his surplus is $0–$100 (the triangle). Total $100–$200.") },
    { text: "between $200 and $300", why: tr("Hector surplusi $100 dan oshmaydi.", "Hector's surplus can't exceed $100.") },
    { text: "by more than $300", why: tr("Juda ko'p.", 'Too much.') },
  ]),
  mk("ch07.qq.6", tr("Uchburchak", 'Triangle'), "The supply curve for a product is \\(Q^S = 2P\\), and the market price is $10. What is producer surplus?", [
    { text: "$5", why: tr("Yuza formulasini tekshiring: ½ × 20 × 10.", 'Check the area formula: ½ × 20 × 10.') },
    { text: "$20", why: tr("20 — miqdor, surplus emas.", '20 is the quantity, not the surplus.') },
    { text: "$100", correct: true, why: tr("\\(Q = 20\\). Uchburchak: ½ × 20 × (10 − 0) = 100.", '\\(Q = 20\\). The triangle: ½ × 20 × (10 − 0) = 100.') },
    { text: "$200", why: tr("½ ni unutdingiz (to'rtburchak emas, uchburchak).", 'You forgot the ½ (a triangle, not a rectangle).') },
  ]),
  mk("ch07.qq.7", "Total surplus", "Isabelle values her time at $60 an hour. She spends 2 hours giving Jayla a massage. Jayla was willing to pay as much as $300, but they negotiated a price of $200. In this transaction,", [
    { text: "consumer surplus is $20 larger than producer surplus.", correct: true, why: tr("PS = 200 − (2 × 60) = 80. CS = 300 − 200 = 100. Farq $20.", 'PS = 200 − (2 × 60) = 80. CS = 300 − 200 = 100. The difference is $20.') },
    { text: "consumer surplus is $40 larger than producer surplus.", why: tr("Xarajat 2 soat × $60 = $120 — buni unutmang.", "The cost is 2 hours × $60 = $120 — don't forget it.") },
    { text: "producer surplus is $20 larger than consumer surplus.", why: tr("Teskari: CS 100, PS 80.", 'Reversed: CS 100, PS 80.') },
    { text: "producer surplus is $40 larger than consumer surplus.", why: "PS = 80, CS = 100." },
  ]),
  mk("ch07.qq.8", tr("Samaradorlik", 'Efficiency'), "An efficient allocation of resources maximizes", [
    { text: "consumer surplus.", why: tr("Faqat xaridorlar emas — samaradorlik hammaning yutug'i.", "Not just buyers — efficiency is everyone's gain.") },
    { text: "producer surplus.", why: tr("Faqat sotuvchilar emas.", 'Not just sellers.') },
    { text: "consumer surplus plus producer surplus.", correct: true, why: "Efficiency — **total surplus** maksimal." },
    { text: "consumer surplus minus producer surplus.", why: tr("Ayirish ma'nosiz.", 'Subtracting makes no sense.') },
  ]),
  mk("ch07.qq.9", tr("Bozor natijasi", 'The market outcome'), "When a market is in equilibrium, the buyers are those with the ________ willingness to pay, and the sellers are those with the ________ costs.", [
    { text: "highest; highest", why: tr("Yuqori xarajatli sotuvchilar narxdan qimmat ishlab chiqaradi — ular sotmaydi.", "High-cost sellers would produce for more than the price — they don't sell.") },
    { text: "highest; lowest", correct: true, why: tr("Narx P* dan yuqori WTP lilar oladi, P* dan past xarajatlilar sotadi — 1- va 2-xulosalar.", 'Those with WTP above P* buy and those with costs below P* sell — insights 1 and 2.') },
    { text: "lowest; highest", why: tr("Teskari.", 'Reversed.') },
    { text: "lowest; lowest", why: tr("Past WTP lilar narxni to'lamaydi.", "Buyers with low WTP don't pay the price.") },
  ]),
  mk("ch07.qq.10", tr("Samaradorlik", 'Efficiency'), "Producing a quantity **larger** than the equilibrium is inefficient because the marginal buyer's willingness to pay is", [
    { text: "negative.", why: tr("WTP odatda musbat — muammo boshqa.", 'WTP is usually positive — the problem is something else.') },
    { text: "zero.", why: tr("Nol bo'lishi shart emas.", "It needn't be zero.") },
    { text: "positive but less than the marginal seller's cost.", correct: true, why: tr("Muvozanatdan o'ngda talab taklifdan pastda: qo'shimcha birlik qiymati xarajatidan kam → total surplus kamayadi.", "To the right of equilibrium demand is below supply: the extra unit's value is less than its cost → total surplus falls.") },
    { text: "positive and greater than the marginal seller's cost.", why: tr("Bu muvozanatdan **chapda** — u yerda miqdorni oshirish foydali.", 'That is to the **left** of equilibrium — there, raising the quantity helps.') },
  ]),
];

export const checks: Record<string, Question> = {
  "s-7-1a": { id: "ch07.check.7-1a", chapter: C, kind: "numeric", source: "new", topic: "Consumer surplus", prompt: tr("Ikki albom auktsionda $700 dan sotildi. Whitney ($1,000) va Ella ($800) oldi. **Jami** consumer surplus?", 'Two albums sell at auction for $700. Whitney ($1,000) and Ella ($800) buy them. What is **total** consumer surplus?'), answer: 400, tolerance: 0, unit: "$", why: tr("Whitney 300 + Ella 100 = 400.", 'Whitney 300 + Ella 100 = 400.'), traps: [{ value: 300, why: tr("Faqat Whitney. Ella ham sotib oldi.", 'Only Whitney. Ella bought one too.') }, { value: 1100, why: tr("Bu (1000 + 800) − 700 — narxni ikki marta ayirish kerak.", 'That is (1000 + 800) − 700 — the price must be subtracted twice.') }] },
  "s-7-1b": { id: "ch07.check.7-1b", chapter: C, kind: "tf", source: "new", topic: tr("Talab va WTP", 'Demand and WTP'), prompt: tr("Har bir miqdorda talab egri chizig'ining balandligi marjinal xaridorning to'lashga tayyorligiga teng.", "At each quantity the height of the demand curve equals the marginal buyer's willingness to pay."), answer: true, why: tr("Masalan, 3 ta albomda balandlik $700 — Mariahning WTP si (u — marjinal xaridor).", "For example, at 3 albums the height is $700 — Mariah's WTP (she is the marginal buyer).") },
  "s-7-1c": mk("ch07.check.7-1c", tr("Narx va CS", 'Price and CS'), tr("Narx P₁ dan P₂ ga tushdi. Consumer surplus o'sishining **yangi xaridorlarga** tegishli qismi qaysi?", 'The price falls from P₁ to P₂. Which part of the rise in consumer surplus goes to **new buyers**?'), [
    { text: tr("To'rtburchak BCED", 'Rectangle BCED'), why: tr("Bu — avvaldan sotib olayotganlarning yutug'i (kamroq to'laydi).", 'That is the gain of those already buying (they pay less).') },
    { text: tr("Uchburchak CEF", 'Triangle CEF'), correct: true, why: tr("Past narxda bozorga kirganlar — Q₁ dan Q₂ gacha.", 'Those who enter the market at the lower price — from Q₁ to Q₂.') },
    { text: tr("Uchburchak ABC", 'Triangle ABC'), why: tr("Bu — boshlang'ich CS.", 'That is the initial CS.') },
    { text: tr("Hech qaysi", 'None'), why: tr("Yangi xaridorlar ham surplus oladi.", 'New buyers also get surplus.') },
  ], 'new'),
  "s-7-1d": mk("ch07.check.7-1d", tr("CS o'lchovi", 'Measuring CS'), tr("Qaysi holatda kitob consumer surplusni farovonlik o'lchovi sifatida shubhali deydi?", 'When does the book say consumer surplus is a doubtful measure of well-being?'), [
    { text: tr("Giyohvandning narkotikka to'lashga tayyorligi", "A drug addict's willingness to pay for drugs"), correct: true, why: tr("Siyosatchilar giyohvandlar o'z manfaatini ko'zlamayapti deb hisoblaydi — ularning WTP si haqiqiy foydani o'lchamaydi.", "Policymakers don't think addicts act in their own interest — their WTP doesn't measure the real benefit.") },
    { text: tr("Talabaning kitobga to'lashga tayyorligi", "A student's willingness to pay for a book"), why: tr("Oddiy ratsional tanlov — CS yaxshi o'lchov.", 'An ordinary rational choice — CS is a good measure.') },
    { text: tr("Muzqaymoq xaridori", 'An ice-cream buyer'), why: tr("Oddiy holat — afzalliklar hurmat qilinadi.", 'An ordinary case — preferences are respected.') },
    { text: tr("Hech qachon", 'Never'), why: tr("Kitob istisnoni keltiradi.", 'The book gives an exception.') },
  ], 'new'),
  "s-7-2a": { id: "ch07.check.7-2a", chapter: C, kind: "numeric", source: "new", topic: "Producer surplus", prompt: tr("Ikki uy bo'yaladi, har biri $3,200 dan. Andy ($2,000) va Pablo ($2,400) oldi. Jami producer surplus?", 'Two houses are painted at $3,200 each. Andy ($2,000) and Pablo ($2,400) get the jobs. Total producer surplus?'), answer: 2000, tolerance: 0, unit: "$", why: "Andy 1,200 + Pablo 800 = 2,000.", traps: [{ value: 1200, why: tr("Faqat Andy.", 'Only Andy.') }] },
  "s-7-3a": mk("ch07.check.7-3a", "Total surplus", tr("Nima uchun total surplus = value to buyers − cost to sellers?", 'Why does total surplus = value to buyers − cost to sellers?'), [
    { text: tr("Xaridor to'lagan summa sotuvchi olgan summaga teng — CS va PS qo'shilganda ular qisqarib ketadi", 'What buyers pay equals what sellers receive — it cancels out when CS and PS are added'), correct: true, why: "(Value − Paid) + (Received − Cost) = Value − Cost." },
    { text: tr("Chunki narx nolga teng", 'Because the price is zero'), why: tr("Narx har qanday bo'lishi mumkin — u shunchaki ikki tomonda bekor bo'ladi.", 'The price can be anything — it simply cancels on the two sides.') },
    { text: tr("Chunki davlat solig'i yo'q", 'Because there is no tax'), why: tr("Soliq yo'qligi faraz, lekin formula sababi — to'lovning qisqarishi.", 'No tax is an assumption, but the reason for the formula is that the payment cancels.') },
    { text: tr("Bu faqat taxmin", 'It is only an approximation'), why: tr("Bu aniq algebraik ayniyat.", 'It is an exact algebraic identity.') },
  ], 'new'),
  "s-7-3b": { id: "ch07.check.7-3b", chapter: C, kind: "tf", source: "new", topic: tr("Samaradorlik", 'Efficiency'), prompt: tr("Raqobatli bozor muvozanati total surplusni maksimal qiladi, shuning uchun u har doim adolatli ham bo'ladi.", 'A competitive market equilibrium maximizes total surplus, so it is always fair too.'), answer: false, why: tr("Samaradorlik — pirog **kattaligi**, adolat (equality) — u qanday **bo'linishi**. Bozor samarali bo'lishi mumkin, lekin natija teng bo'lmasligi mumkin.", 'Efficiency is the **size** of the pie, equality how it is **divided**. A market can be efficient while the outcome is unequal.') },
  "s-7-4": mk("ch07.check.7-4", tr("Bozor muvaffaqiyatsizligi", 'Market failure'), tr("Kitob bozor samaradorligi xulosasi uchun qaysi ikki farazni ajratib ko'rsatadi?", 'Which two assumptions does the book single out for the market-efficiency result?'), [
    { text: tr("Mukammal raqobat va tashqi effektlar yo'qligi", 'Perfect competition and no externalities'), correct: true, why: tr("Market power yoki externalities bo'lsa, muvozanat samarali bo'lmasligi mumkin — market failure.", 'With market power or externalities the equilibrium may be inefficient — a market failure.') },
    { text: tr("Soliqlar yo'qligi va inflyatsiya yo'qligi", 'No taxes and no inflation'), why: tr("Soliqlar 8-bobda; kitob bu yerda raqobat va externalities ni ko'rsatadi.", 'Taxes come in Chapter 8; here the book points to competition and externalities.') },
    { text: tr("Barcha xaridorlar boy va barcha sotuvchilar kambag'al", 'All buyers are rich and all sellers poor'), why: tr("Boylik taqsimoti — adolat masalasi.", 'The distribution of wealth is a question of equality.') },
    { text: tr("Hukumat narxni belgilaydi", 'The government sets the price'), why: tr("Aksincha, erkin bozor faraz qilinadi.", 'The opposite — a free market is assumed.') },
  ], 'new'),
};

export const practice: Question[] = [
  { id: "ch07.new.kyra", chapter: C, kind: "numeric", source: "new", topic: tr("WTP", 'WTP'), prompt: tr("Problem 1: Kyra iPhone'ni $360 ga oldi va $240 consumer surplus oldi. Uning to'lashga tayyorligi?", 'Problem 1: Kyra buys an iPhone for $360 and gets $240 of consumer surplus. Her willingness to pay?'), answer: 600, tolerance: 0, unit: "$", why: tr("WTP = P + CS = 360 + 240 = 600.", 'WTP = P + CS = 360 + 240 = 600.'), traps: [{ value: 120, why: tr("Ayirdingiz. CS = WTP − P, demak WTP = P + CS.", 'You subtracted. CS = WTP − P, so WTP = P + CS.') }] },
  { id: "ch07.new.bert", chapter: C, kind: "numeric", source: "new", topic: "Consumer surplus", prompt: tr("Problem 4: Bert shishalarni $7, $5, $3, $1 deb baholaydi. Narx **$2** bo'lsa, uning consumer surplusi?", 'Problem 4: Bert values bottles at $7, $5, $3, $1. At a price of **$2**, what is his consumer surplus?'), answer: 9, tolerance: 0, unit: "$", why: tr("3 ta oladi: (7−2) + (5−2) + (3−2) = 5 + 3 + 1 = 9.", 'He buys 3: (7−2) + (5−2) + (3−2) = 5 + 3 + 1 = 9.'), traps: [{ value: 8, why: tr("To'rtinchi shishani ($1 < $2) olmaydi, lekin uchinchisini ($3) oladi: +1.", "He doesn't buy the fourth ($1 < $2), but he does buy the third ($3): +1.") }] },
  { id: "ch07.new.haircuts", chapter: C, kind: "numeric", source: "new", topic: tr("Samaradorlik", 'Efficiency'), prompt: tr("Problem 8: WTP — Gloria $35, Jay $10, Claire $40, Phil $25. Xarajatlar — A $15, B $30, C $20, D $10. Maksimal total surplus?", 'Problem 8: WTPs — Gloria $35, Jay $10, Claire $40, Phil $25. Costs — A $15, B $30, C $20, D $10. Maximum total surplus?'), answer: 55, tolerance: 0, unit: "$", why: tr("Eng yuqori WTP larni eng past xarajatlar bilan juftlang: 40−10, 35−15, 25−20 → 3 ta soch olish. TS = (40+35+25) − (10+15+20) = 55. Jay va B ishtirok etmaydi.", "Pair the highest WTPs with the lowest costs: 40−10, 35−15, 25−20 → 3 haircuts. TS = (40+35+25) − (10+15+20) = 55. Jay and B don't take part."), traps: [{ value: 35, why: tr("To'rtinchi juftlik (Jay $10, B $30) surplusni **kamaytiradi** — uni qo'shmang.", "A fourth pair (Jay $10, B $30) would **reduce** surplus — don't add it.") }] },
  { id: "ch07.new.tf-planner", chapter: C, kind: "tf", source: "new", topic: tr("Rejalashtiruvchi", 'The planner'), prompt: tr("Xayrixoh ijtimoiy rejalashtiruvchi bozor natijasidan ko'ra samaraliroq taqsimot topa oladi, chunki u hamma narsani biladi.", 'A benevolent social planner could find a more efficient allocation than the market, because they know everything.'), answer: false, why: tr("Kitob xulosasi: raqobatli muvozanat allaqachon total surplusni maksimal qiladi — rejalashtiruvchi uni yaxshilay olmaydi (laissez-faire). Haqiqiy rejalashtiruvchilarda esa kerakli ma'lumot ham yo'q.", "The book's conclusion: the competitive equilibrium already maximizes total surplus — the planner can't improve on it (laissez-faire). And real planners lack the information anyway.") },
  { id: "ch07.new.tf-organs", chapter: C, kind: "tf", source: "new", topic: tr("Organlar bozori", 'Organ markets'), prompt: tr("Buyrak sotishni taqiqlash — iqtisodiy jihatdan nol darajadagi narx shifti va u taqchillik yaratadi.", 'Banning the sale of kidneys is, economically, a price ceiling of zero, and it creates a shortage.'), answer: true, why: tr("Case Study: narx 0 da qonuniy sotib olish mumkin, sotish esa taqiqlangan — binding ceiling, natija: uzoq navbatlar va har yili minglab o'limlar.", 'Case Study: kidneys can legally be obtained at a price of 0 but not sold — a binding ceiling, with long waiting lists and thousands of deaths each year.') },
  mk("ch07.new.streaming", "Problem 10", tr("Problem 10: talab \\(Q^D = 150 - 50P\\). A provayder yiliga $120 (cheksiz), B — har film $1. Qaysi biri do'stingiz uchun yaxshi?", 'Problem 10: demand \\(Q^D = 150 - 50P\\). Provider A charges $120 a year (unlimited), B $1 per movie. Which is better for your friend?'), [
    { text: tr("A: 150 film, sof CS = 225 − 120 = $105", 'A: 150 movies, net CS = 225 − 120 = $105'), correct: true, why: tr("A da qo'shimcha film narxi 0 → 150 film, CS (to'lovgacha) ½·150·3 = 225, minus $120 = 105. B da 100 film, CS = ½·100·2 = 100.", 'Under A an extra movie costs 0 → 150 movies, CS (before the fee) ½·150·3 = 225, minus $120 = 105. Under B, 100 movies, CS = ½·100·2 = 100.') },
    { text: tr("B: chunki u arzonroq ($100 < $120)", 'B: because it is cheaper ($100 < $120)'), why: tr("To'lov kamroq, lekin surplus ham kamroq (100 < 105).", 'It costs less, but the surplus is smaller too (100 < 105).') },
    { text: tr("Farqi yo'q", 'No difference'), why: tr("105 va 100 — biroz farq bor.", '105 versus 100 — a small difference.') },
    { text: tr("B: 150 film ko'radi", 'B: he watches 150 movies'), why: tr("B da narx $1 → 100 film.", 'Under B the price is $1 → 100 movies.') },
  ], 'new'),
  mk("ch07.new.tvs", tr("Siljish va surplus", 'Shifts and surplus'), tr("Problem 7: flat-screen TV ishlab chiqarish arzonladi va taklif juda egiluvchan. Kim ko'proq yutadi?", 'Problem 7: making flat-screen TVs got cheaper and supply is very elastic. Who gains more?'), [
    { text: tr("Iste'molchilar", 'Consumers'), correct: true, why: tr("Taklif yotiq bo'lsa, xarajat kamayishi deyarli to'liq narx tushishiga aylanadi → CS keskin oshadi, PS deyarli o'zgarmaydi.", 'With flat supply the cost cut turns almost fully into a lower price → CS rises sharply and PS barely changes.') },
    { text: tr("Ishlab chiqaruvchilar", 'Producers'), why: tr("Egiluvchan taklifda narx xarajat bilan birga tushadi — sotuvchilar ortiqcha foyda saqlay olmaydi.", "With elastic supply the price falls along with cost — sellers can't keep the extra profit.") },
    { text: "Teng", why: tr("Egiluvchanliklar teng emas.", "The elasticities aren't equal.") },
    { text: "Hech kim", why: tr("Narx tushib, miqdor oshadi — total surplus oshadi.", 'The price falls and quantity rises — total surplus rises.') },
  ], 'new'),
  { id: "ch07.new.match", chapter: C, kind: "match", source: "new", topic: tr("Atamalar", 'Terms'), prompt: tr("Moslashtiring.", 'Match.'), pairs: [
    { left: "Willingness to pay", right: tr("Xaridor to'lashga tayyor eng yuqori summa", 'The most a buyer will pay') },
    { left: "Consumer surplus", right: tr("WTP minus to'langan narx", 'WTP minus the price paid') },
    { left: "Producer surplus", right: tr("Olingan narx minus xarajat", 'The price received minus cost') },
    { left: "Efficiency", right: tr("Total surplus maksimal bo'lgan taqsimot", 'The allocation that maximizes total surplus') },
    { left: "Laissez-faire", right: tr("“Qo'yib ber” — bozorga aralashmaslik", '“Let them do” — not interfering with the market') },
  ] },
];

const marketD = { a: 10, b: 0.1 };
export const graphTasks: Question[] = [
  {
    id: "ch07.graph.cs-double",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: tr("Siljish va surplus", 'Shifts and surplus'),
    prompt: tr("TV ishlab chiqarish xarajatlari tushdi. Taklifni siljitib, **consumer surplusni kamida ikki barobar** oshiring (“Ortiqchalik maydonlari” tugmasini yoqing).", 'The cost of making TVs fell. Shift supply to at least **double consumer surplus** (turn on “Surplus areas”).'),
    graph: { title: 'Flat-screen TV bozori', demand: marketD, supply: { c: 2, d: 0.1 }, xMax: 100, yMax: 10, modes: ['market'], surplus: true, surplusOn: true, qtyDigits: 0 },
    check: (s) => {
      const base = consumerSurplus(marketD, equilibrium(marketD, { c: 2, d: 0.1 }).P);
      if (Math.abs(s.D.a - marketD.a) > 1e-6) return { ok: false, msg: tr("Xarajatlar — taklif omili. Talabni joyida qoldiring.", 'Costs are a supply factor. Leave demand in place.') };
      const e = equilibrium(s.D, s.S);
      const cs = consumerSurplus(s.D, e.P);
      if (cs < 2 * base) return { ok: false, msg: tr(`CS hozir $${cs.toFixed(0)} (boshida $${base.toFixed(0)}). Taklifni **o'ngga** ko'proq siljiting.`, `CS is now $${cs.toFixed(0)} (it started at $${base.toFixed(0)}). Shift supply further **right**.`) };
      return { ok: true, msg: tr(`Zo'r: narx $${e.P.toFixed(2)} ga tushdi, CS $${base.toFixed(0)} → $${cs.toFixed(0)}. Eski xaridorlar kamroq to'laydi (to'rtburchak) va yangi xaridorlar kiradi (uchburchak).`, `Great: the price fell to $${e.P.toFixed(2)}, CS $${base.toFixed(0)} → $${cs.toFixed(0)}. Existing buyers pay less (the rectangle) and new buyers enter (the triangle).`) };
    },
  },
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice, ...graphTasks];
