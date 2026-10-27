import { deadweightLoss, tax } from '../../../lib/econ';
import type { Question } from '../../types';
import { baseD, baseS, taxWelfare } from './presets';
import { tr } from '../../../lib/lang';

const C = 8;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch08.qq.1", tr("DWL", 'DWL'), "A tax on a good has a deadweight loss if", [
    { text: "the reduction in consumer and producer surplus is greater than the tax revenue.", correct: true, why: tr("DWL — CS va PS yo'qotishining tushumdan **ortiq** qismi (C + E).", 'The DWL is the part of the CS and PS losses **in excess** of revenue (C + E).') },
    { text: "the tax revenue is greater than the reduction in consumer and producer surplus.", why: tr("Bunday bo'lmaydi: tushum yo'qotishlarning bir qismi (B + D).", "That can't happen: revenue is part of the losses (B + D).") },
    { text: "the reduction in consumer surplus is greater than the reduction in producer surplus.", why: tr("Bu yukning taqsimlanishi (incidence), DWL emas.", 'That is incidence, not DWL.') },
    { text: "the reduction in producer surplus is greater than the reduction in consumer surplus.", why: tr("Xuddi shu — incidence haqida.", 'Same — this is about incidence.') },
  ]),
  mk("ch08.qq.2", tr("DWL hisoblash", 'Computing DWL'), "Donna runs an inn and charges $300 a night, which equals her cost. Sam, Harry, and Bill are willing to pay $500, $325, and $250. When the government levies a $50 tax on innkeepers, Donna raises her price to $350. The deadweight loss of the tax is", [
    { text: "$25.", correct: true, why: tr("Soliqsiz Harry $25 surplus bilan xona olardi ($325 − $300). $350 da u ketadi — uning $25 i hech kimga o'tmaydi. Sam qoladi: uning yo'qotgan $50 i davlatga ketadi.", 'Without the tax Harry would rent a room with $25 of surplus ($325 − $300). At $350 he leaves — his $25 goes to nobody. Sam stays: the $50 he loses goes to the government.') },
    { text: "$50.", why: tr("Samning $50 yo'qotishi — tushum, DWL emas.", "Sam's $50 loss is revenue, not DWL.") },
    { text: "$100.", why: tr("Bill soliqsiz ham xona olmasdi ($250 < $300) — u hisobga kirmaydi.", "Bill wouldn't rent even without the tax ($250 < $300) — he doesn't count.") },
    { text: "$150.", why: tr("Juda ko'p.", 'Too much.') },
  ]),
  mk("ch08.qq.3", tr("DWL hisoblash", 'Computing DWL'), "Sophie pays Sky $50 to mow her lawn every week. When the government levies a mowing tax of $10 on Sky, he raises his price to $60. Sophie continues to hire him. What is the change in producer surplus, the change in consumer surplus, and the deadweight loss?", [
    { text: "$0, $0, $10", why: tr("Sophie $10 ko'proq to'laydi — CS o'zgaradi.", 'Sophie pays $10 more — CS changes.') },
    { text: "$0, −$10, $0", correct: true, why: tr("Sky $60 − $10 = $50 oladi (PS bir xil), Sophie $10 ko'proq to'laydi (CS −10), bitim bo'ldi — DWL 0 ($10 davlatga ketdi).", 'Sky receives $60 − $10 = $50 (PS unchanged), Sophie pays $10 more (CS −10), and the deal happens — DWL is 0 (the $10 goes to the government).') },
    { text: "+$10, −$10, $10", why: tr("Sky soliqni to'laydi — uning sof daromadi o'zgarmaydi.", "Sky pays the tax — her net income doesn't change.") },
    { text: "+$10, −$10, $0", why: tr("PS o'zgarmaydi: $60 − $10 = $50.", "PS doesn't change: $60 − $10 = $50.") },
  ]),
  mk("ch08.qq.4", tr("Egiluvchanlik", 'Elasticity'), "If policymakers want to raise revenue by taxing goods while minimizing the deadweight losses, they should look for goods with ________ elasticities of demand and ________ elasticities of supply.", [
    { text: "small; small", correct: true, why: tr("Noegiluvchan bozorlarda soliq miqdorni kam qisqartiradi → kichik DWL.", 'In inelastic markets a tax barely shrinks the quantity → a small DWL.') },
    { text: "small; large", why: tr("Katta taklif egiluvchanligi DWL ni oshiradi.", 'A large elasticity of supply raises the DWL.') },
    { text: "large; small", why: tr("Katta talab egiluvchanligi DWL ni oshiradi.", 'A large elasticity of demand raises the DWL.') },
    { text: "large; large", why: tr("Eng katta DWL.", 'The largest DWL.') },
  ]),
  mk("ch08.qq.5", tr("Yer solig'i", 'A land tax'), "In the economy of Agricola, tenant farmers rent the land they use. If the supply of land is perfectly inelastic, then a tax on land would have ________ deadweight losses, and the burden of the tax would fall entirely on the ________.", [
    { text: "sizable; farmers", why: tr("Vertikal taklifda miqdor o'zgarmaydi — DWL yo'q.", "With vertical supply the quantity doesn't change — no DWL.") },
    { text: "sizable; landowners", why: tr("Yuk to'g'ri, DWL esa nol.", 'The burden is right, but the DWL is zero.') },
    { text: "no; farmers", why: tr("Yuk kamroq egiluvchan tomonga — yer egalariga tushadi.", 'The burden falls on the less elastic side — the landowners.') },
    { text: "no; landowners", correct: true, why: tr("Mutlaqo noegiluvchan taklif: miqdor o'zgarmaydi (DWL = 0), narx to'liq soliq miqdoricha tushadi — yer egalari to'laydi.", "Perfectly inelastic supply: the quantity doesn't change (DWL = 0), and the price falls by the full tax — landowners pay it.") },
  ]),
  mk("ch08.qq.6", tr("Egiluvchanlik", 'Elasticity'), "Suppose the demand for grape jelly is perfectly elastic (strawberry jelly is a good substitute), while the supply is unit elastic. A tax on grape jelly would have ________ deadweight losses, and the burden would fall entirely on the ________.", [
    { text: "sizable; consumers", why: tr("Gorizontal talabda xaridor narxi o'zgara olmaydi — ular yuk ko'tarmaydi.", "With horizontal demand the buyers' price can't change — they bear no burden.") },
    { text: "sizable; producers", correct: true, why: tr("Talab juda egiluvchan → miqdor ko'p qisqaradi (katta DWL), narx tushishini sotuvchilar to'liq ko'taradi.", 'Demand is very elastic → the quantity shrinks a lot (a large DWL), and sellers bear the full fall in price.') },
    { text: "no; consumers", why: tr("Egiluvchan bozorda DWL katta.", 'In an elastic market the DWL is large.') },
    { text: "no; producers", why: tr("Yuk to'g'ri, DWL noto'g'ri.", 'The burden is right, the DWL wrong.') },
  ]),
  mk("ch08.qq.7", tr("Laffer", 'Laffer'), "The Laffer curve shows that, in some circumstances, the government can **reduce** a tax on a good and increase the", [
    { text: "price paid by consumers.", why: tr("Soliq kamaysa, xaridor narxi **tushadi**.", "When the tax falls, the buyers' price **falls**.") },
    { text: "equilibrium quantity.", why: tr("Bu har doim to'g'ri, “ba'zi sharoitlarda” emas — Laffer egri chizig'i tushum haqida.", 'That is always true, not “under some conditions” — the Laffer curve is about revenue.') },
    { text: "deadweight loss.", why: tr("Soliq kamaysa DWL kamayadi.", 'When the tax falls, the DWL falls.') },
    { text: "government's tax revenue.", correct: true, why: tr("Agar soliq cho'qqidan o'ng tomonda bo'lsa, uni kamaytirish bozorni shunchalik kengaytiradiki, tushum oshadi.", 'If the tax is to the right of the peak, cutting it expands the market so much that revenue rises.') },
  ]),
  mk("ch08.qq.8", tr("DWL kattaligi", 'The size of the DWL'), "Eggs have linear supply and demand curves. If a 2 cent per egg tax is increased to 3 cents, the deadweight loss of the tax", [
    { text: "increases by less than 50 percent and may even decline.", why: tr("DWL soliq bilan har doim oshadi va proporsiyadan tezroq.", 'The DWL always rises with the tax, and more than proportionally.') },
    { text: "increases by exactly 50 percent.", why: tr("Bu chiziqli bog'liqlik bo'lardi; DWL esa kvadratik.", 'That would be a linear relationship; the DWL is quadratic.') },
    { text: "increases by more than 50 percent.", correct: true, why: tr("DWL ∝ T²: (3/2)² = 2.25 → 125% ga oshadi.", 'DWL ∝ T²: (3/2)² = 2.25 → it rises 125%.') },
    { text: "The answer depends on whether supply or demand is more elastic.", why: tr("Chiziqli egri chiziqlarda nisbat egiluvchanlikdan qat'i nazar (1.5)² .", 'With linear curves the ratio is (1.5)² whatever the elasticities.') },
  ]),
  mk("ch08.qq.9", tr("Tushum", 'Revenue'), "Peanut butter has an upward-sloping supply curve and a downward-sloping demand curve. If a 10 cent per pound tax is increased to 15 cents, the government's tax revenue", [
    { text: "increases by less than 50 percent and may even decline.", correct: true, why: tr("Soliq 50% oshadi, lekin miqdor kamayadi → tushum 50% dan kam oshadi; cho'qqidan o'tgan bo'lsa, hatto kamayadi.", 'The tax rises 50% but the quantity falls → revenue rises less than 50%; past the peak, it even falls.') },
    { text: "increases by exactly 50 percent.", why: tr("Faqat miqdor o'zgarmasa (vertikal egri chiziq).", "Only if the quantity doesn't change (a vertical curve).") },
    { text: "increases by more than 50 percent.", why: tr("Miqdor qisqargani uchun bunday bo'lmaydi.", "That can't be, because the quantity shrinks.") },
    { text: "The answer depends on whether supply or demand is more elastic.", why: tr("Kattaligi bog'liq, lekin “50% dan kam” har doim to'g'ri.", 'Its size depends, but “less than 50%” is always right.') },
  ]),
];

export const checks: Record<string, Question> = {
  "s-8-1a": { id: "ch08.check.8-1a", chapter: C, kind: "numeric", source: "new", topic: tr("DWL", 'DWL'), prompt: tr("Soliqsiz 1,000 xona ijaraga beriladi. $10 soliq bilan 900 xona. Deadweight loss?", 'Without a tax 1,000 rooms are rented. With a $10 tax, 900. The deadweight loss?'), answer: 500, tolerance: 0, unit: "$", why: tr("\\(\\tfrac12 \\times 10 \\times (1000 - 900) = 500\\). Tushum esa $9,000.", '\\(\\tfrac12 \\times 10 \\times (1000 - 900) = 500\\). Revenue is $9,000.'), traps: [{ value: 1000, why: tr("½ ni unutdingiz — DWL uchburchak.", 'You forgot the ½ — the DWL is a triangle.') }, { value: 9000, why: tr("Bu tushum (T × Q).", 'That is the revenue (T × Q).') }] },
  "s-8-1b": mk("ch08.check.8-1b", tr("Savdodan yutuq", 'Gains from trade'), tr("Malik Meining uyini $100 ga tozalaydi; uning xarajati $80, Mei uchun qiymat $120. Tozalovchilarga **$50** soliq qo'yildi. Nima bo'ladi?", "Malik cleans Mei's house for $100; his cost is $80 and the job is worth $120 to Mei. A **$50** tax is placed on cleaners. What happens?"), [
    { text: tr("Bitim bekor bo'ladi; $40 sof yo'qotish, davlat hech narsa olmaydi", 'The deal is off; a $40 deadweight loss, and the government gets nothing'), correct: true, why: tr("Savdodan yutuq 120 − 80 = 40 < 50 soliq. Hech bir narx ikkalasini qoniqtirmaydi. Ikkalasi $20 dan yo'qotadi — bu toza DWL.", 'The gain from trade, 120 − 80 = 40, is less than the $50 tax. No price satisfies both. Each loses $20 — pure DWL.') },
    { text: tr("Malik narxni $150 ga ko'taradi", 'Malik raises the price to $150'), why: tr("Mei $120 dan ko'p to'lamaydi.", "Mei won't pay more than $120.") },
    { text: tr("Davlat $50 oladi", 'The government collects $50'), why: tr("Bitim bo'lmasa, soliq ham to'lanmaydi.", 'No deal, no tax.') },
    { text: tr("Hech narsa o'zgarmaydi", 'Nothing changes'), why: tr("Soliq yutuqdan katta — bitim yo'qoladi.", 'The tax exceeds the gain — the deal disappears.') },
  ], 'new'),
  "s-8-2": mk("ch08.check.8-2", tr("Egiluvchanlik", 'Elasticity'), tr("Qaysi bozorda bir xil soliq **eng katta** DWL yaratadi?", 'In which market does the same tax create the **largest** DWL?'), [
    { text: tr("Talab ham, taklif ham juda egiluvchan", 'Both demand and supply very elastic'), correct: true, why: tr("Ikkala tomon ham kuchli javob beradi → miqdor ko'p qisqaradi → katta uchburchak.", 'Both sides respond strongly → the quantity shrinks a lot → a big triangle.') },
    { text: tr("Talab ham, taklif ham noegiluvchan", 'Both demand and supply inelastic'), why: tr("Miqdor kam qisqaradi — DWL kichik.", 'The quantity shrinks little — a small DWL.') },
    { text: tr("Taklif mutlaqo noegiluvchan", 'Perfectly inelastic supply'), why: tr("DWL nol.", 'The DWL is zero.') },
    { text: tr("Farqi yo'q", 'No difference'), why: tr("DWL egiluvchanlikka kuchli bog'liq.", 'The DWL depends strongly on elasticity.') },
  ], 'new'),
  "s-8-3": { id: "ch08.check.8-3", chapter: C, kind: "numeric", source: "new", topic: tr("DWL kattaligi", 'The size of the DWL'), prompt: tr("Soliq **uch barobar** oshirildi (chiziqli egri chiziqlar). DWL necha barobar oshadi?", 'A tax is **tripled** (linear curves). By how many times does the DWL rise?'), answer: 9, tolerance: 0, unit: "marta", why: tr("DWL ∝ T²: 3² = 9.", 'DWL ∝ T²: 3² = 9.'), traps: [{ value: 3, why: tr("DWL — uchburchak: asosi ham, balandligi ham 3 barobar → 9.", 'The DWL is a triangle: both its base and its height triple → 9.') }, { value: 6, why: tr("Kvadratga oshiring, 2 ga ko'paytirmang.", "Square it — don't multiply by 2.") }] },
};

export const practice: Question[] = [
  { id: "ch08.new.hotel20", chapter: C, kind: "numeric", source: "new", topic: tr("Tushum", 'Revenue'), prompt: tr("Problem 9b: soliq $20 ga oshdi, 800 xona ijaraga beriladi. Tushum?", 'Problem 9b: the tax rises to $20 and 800 rooms are rented. Revenue?'), answer: 16000, tolerance: 0, unit: "$", why: tr("20 × 800 = 16,000 — $9,000 dan **ikki barobardan kam** oshdi (miqdor kamaydi).", '20 × 800 = 16,000 — **less than double** the $9,000 (the quantity fell).'), traps: [{ value: 18000, why: tr("Bu 9,000 × 2 — lekin miqdor 900 dan 800 ga tushdi.", 'That is 9,000 × 2 — but the quantity fell from 900 to 800.') }] },
  { id: "ch08.new.p10-rev", chapter: C, kind: "numeric", source: "new", topic: tr("Laffer", 'Laffer'), prompt: tr("Problem 10: \\(R(T) = T(200 - 2T/3)\\). Tushum qaysi T da **maksimal**?", 'Problem 10: \\(R(T) = T(200 - 2T/3)\\). At what T is revenue **maximized**?'), answer: 150, tolerance: 0, unit: "$", why: tr("\\(R'(T) = 200 - 4T/3 = 0 \\Rightarrow T = 150\\), \\(R = 15{,}000\\). T = 300 da tushum nol.", "\\(R'(T) = 200 - 4T/3 = 0 \\Rightarrow T = 150\\), \\(R = 15{,}000\\). At T = 300 revenue is zero.") },
  { id: "ch08.new.p10-200", chapter: C, kind: "mcq", source: "new", topic: tr("Laffer", 'Laffer'), prompt: tr("Problem 10e: $200 soliq yaxshi siyosatmi?", 'Problem 10e: is a $200 tax good policy?'), options: [
    { text: tr("Yo'q: $100 soliq xuddi shuncha tushum ($13,333) beradi, DWL esa $13,333 o'rniga atigi $3,333", 'No: a $100 tax raises the same revenue ($13,333) with a DWL of only $3,333 instead of $13,333'), correct: true, why: tr("$200 Laffer cho'qqisidan ($150) o'ngda. Soliqni kamaytirib, tushumni saqlab, DWL ni to'rt barobar kamaytirish mumkin.", '$200 is to the right of the Laffer peak ($150). Cutting the tax keeps revenue and cuts the DWL fourfold.') },
    { text: tr("Ha, chunki tushum maksimal", 'Yes, because revenue is at its maximum'), why: tr("Maksimum T = $150 da.", 'The maximum is at T = $150.') },
    { text: tr("Ha, chunki DWL nol", 'Yes, because the DWL is zero'), why: tr("DWL = T²/3 = 13,333.", 'DWL = T²/3 = 13,333.') },
    { text: tr("Yo'q, chunki tushum nol", 'No, because revenue is zero'), why: tr("Tushum nol faqat T = 300 da.", 'Revenue is zero only at T = 300.') },
  ] },
  { id: "ch08.new.tf-norev", chapter: C, kind: "tf", source: "new", topic: tr("DWL", 'DWL'), prompt: tr("Problem 2b: “Hech qanday tushum keltirmaydigan soliqda sof yo'qotish ham bo'lmaydi.”", 'Problem 2b: “A tax that raises no revenue for the government cannot have any deadweight loss.”'), answer: false, why: tr("Juda katta soliq bozorni butunlay yo'q qilishi mumkin: tushum 0, lekin DWL — butun total surplus (Moynihanning 10,000% soliqli o'qlari).", "A very large tax can wipe out a market: revenue 0, but the DWL is all of total surplus (Moynihan's 10,000% tax on bullets).") },
  { id: "ch08.new.tf-nodwl", chapter: C, kind: "tf", source: "new", topic: tr("DWL", 'DWL'), prompt: tr("Problem 2a: “Sof yo'qotishi yo'q soliq hech qanday tushum keltira olmaydi.”", 'Problem 2a: “A tax that has no deadweight loss cannot raise any revenue for the government.”'), answer: false, why: tr("Mutlaqo noegiluvchan taklif (yoki talab) bo'lsa, miqdor o'zgarmaydi → DWL 0, lekin tushum T × Q > 0 (yer solig'i).", "With perfectly inelastic supply (or demand) the quantity doesn't change → DWL 0, yet revenue T × Q > 0 (a land tax).") },
  { id: "ch08.new.tf-subsidy", chapter: C, kind: "tf", source: "new", topic: tr("Subsidiya", 'Subsidies'), prompt: tr("Problem 8: xaridorlarga har birlik uchun $2 subsidiya ham sof yo'qotish yaratadi.", 'Problem 8: a $2 per-unit subsidy to buyers also creates a deadweight loss.'), answer: true, why: tr("Subsidiya miqdorni muvozanatdan **oshiradi**: qo'shimcha birliklarning xarajati qiymatidan katta. Davlat xarajati CS + PS o'sishidan ko'p — farq DWL.", 'A subsidy pushes the quantity **above** equilibrium: the extra units cost more than they are worth. Government spending exceeds the rise in CS + PS — the difference is the DWL.') },
  mk("ch08.new.food", tr("Siyosat", 'Policy'), tr("Problem 5: oziq-ovqatga soliq solish taklif qilindi, chunki talab noegiluvchan. Bunda qaysi gap to'g'ri?", 'Problem 5: a tax on food is proposed because demand is inelastic. Which statement is right?'), [
    { text: tr("Samaradorlik nuqtai nazaridan yaxshi (kichik DWL), lekin adolat nuqtai nazaridan yomon — kambag'allar daromadining katta qismini ovqatga sarflaydi", 'Good for efficiency (a small DWL) but bad for fairness — the poor spend a larger share of income on food'), correct: true, why: "Efficiency vs equity — 1-bobdagi trade-off." },
    { text: tr("Har jihatdan yaxshi", 'Good in every respect'), why: tr("Kambag'allarga og'ir yuk — adolat muammosi.", 'A heavy burden on the poor — a fairness problem.') },
    { text: tr("DWL katta bo'ladi", 'The DWL will be large'), why: tr("Noegiluvchan talab — kichik DWL.", 'Inelastic demand — a small DWL.') },
    { text: tr("Tushum bo'lmaydi", 'There will be no revenue'), why: tr("Miqdor kam qisqaradi — tushum katta.", 'The quantity shrinks little — revenue is large.') },
  ], 'new'),
  mk("ch08.new.labor", tr("DWL bahsi", 'The DWL debate'), tr("Nega iqtisodchilar mehnat solig'ining DWL i katta yoki kichikligi haqida bahslashadi?", 'Why do economists argue about whether the DWL of labor taxation is large or small?'), [
    { text: tr("Mehnat taklifi egiluvchanligi haqida turli fikrlar bor", 'They hold different views about the elasticity of labor supply'), correct: true, why: tr("Taklif noegiluvchan (hamma baribir to'liq ishlaydi) bo'lsa — DWL kichik; egiluvchan (qo'shimcha soatlar, ikkinchi ish, nafaqa, soya iqtisodiyot) bo'lsa — katta.", 'If supply is inelastic (everyone works full time anyway), the DWL is small; if elastic (extra hours, second jobs, retirement, the underground economy), it is large.') },
    { text: tr("Soliq stavkasini bilishmaydi", "They don't know the tax rate"), why: tr("Stavka ma'lum (~40%) — muammo egiluvchanlikda.", 'The rate is known (~40%) — the problem is elasticity.') },
    { text: tr("Mehnat talabi vertikal", 'Labor demand is vertical'), why: tr("Bahs asosan taklif tomonida.", 'The debate is mostly about supply.') },
    { text: "Bahs yo'q", why: "Kitob: “The debate … persists to this day.”" },
  ], 'new'),
  { id: "ch08.new.match", chapter: C, kind: "match", source: "new", topic: "Figure 3", prompt: tr("Figure 3 dagi maydonlarni ma'nosi bilan moslashtiring.", 'Match the areas of Figure 3 with their meaning.'), pairs: [
    { left: "A", right: tr("Soliqdan keyin qolgan consumer surplus", 'Consumer surplus left after the tax') },
    { left: "B + D", right: tr("Soliq tushumi", 'Tax revenue') },
    { left: "C + E", right: "Deadweight loss" },
    { left: "F", right: tr("Soliqdan keyin qolgan producer surplus", 'Producer surplus left after the tax') },
    { left: "B + C", right: tr("Consumer surplus yo'qotishi", 'The loss of consumer surplus') },
  ] },
];

export const graphTasks: Question[] = [
  {
    id: "ch08.graph.dwl-target",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: "DWL",
    prompt: tr("Shunday soliq tanlangki, **sof yo'qotish (DWL) $20 dan oshsin**, lekin tushum **kamida $90** bo'lsin.", 'Choose a tax so that the **deadweight loss exceeds $20** while revenue is **at least $90**.'),
    graph: { ...taxWelfare, tax: 1 },
    check: (s) => {
      const t = tax(s.D, s.S, s.tax);
      const dwl = deadweightLoss(s.D, s.S, s.tax);
      if (dwl <= 20) return { ok: false, msg: tr(`DWL hozir $${dwl.toFixed(1)}. Soliqni oshiring — DWL T² bilan o'sadi.`, `The DWL is $${dwl.toFixed(1)} now. Raise the tax — the DWL grows with T².`) };
      if (t.revenue < 90) return { ok: false, msg: tr(`Tushum $${t.revenue.toFixed(1)} — juda katta soliq bozorni qisqartirib yubordi (Laffer). Biroz kamaytiring.`, `Revenue is $${t.revenue.toFixed(1)} — such a big tax shrank the market too much (Laffer). Lower it a bit.`) };
      return { ok: true, msg: tr(`T = $${s.tax.toFixed(2)}: DWL $${dwl.toFixed(1)}, tushum $${t.revenue.toFixed(1)}. Ko'rdingizmi: tushum o'sishi sekinlashadi, DWL esa tezlashadi.`, `T = $${s.tax.toFixed(2)}: DWL $${dwl.toFixed(1)}, revenue $${t.revenue.toFixed(1)}. See how revenue growth slows while the DWL accelerates.`) };
    },
  },
  {
    id: "ch08.graph.min-dwl",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: tr("Egiluvchanlik", 'Elasticity'),
    prompt: tr("$2 soliq bor. Egiluvchanlik slayderlari bilan bozorni shunday o'zgartiringki, DWL **$5 dan kam** bo'lsin.", 'There is a $2 tax. Use the elasticity sliders to change the market so that the DWL is **below $5**.'),
    graph: { ...taxWelfare, slopeControls: true },
    check: (s) => {
      const dwl = deadweightLoss(s.D, s.S, s.tax);
      const base = deadweightLoss(baseD, baseS, 2);
      return dwl < 5
        ? { ok: true, msg: tr(`DWL $${base.toFixed(0)} → $${dwl.toFixed(1)}. Noegiluvchan (tik) egri chiziqlar bilan soliq miqdorni kam o'zgartiradi — kichik DWL.`, `DWL $${base.toFixed(0)} → $${dwl.toFixed(1)}. With inelastic (steep) curves a tax changes the quantity little — a small DWL.`) }
        : { ok: false, msg: tr(`DWL hozir $${dwl.toFixed(1)}. Talabni yoki taklifni **noegiluvchanroq** (tikroq) qiling.`, `The DWL is $${dwl.toFixed(1)} now. Make demand or supply **less elastic** (steeper).`) };
    },
  },
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice, ...graphTasks];
