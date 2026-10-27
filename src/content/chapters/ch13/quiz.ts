import type { Question } from '../../types';
import { tr } from '../../../lib/lang';

const C = 13;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch13.qq.1", tr("Xalqaro taqqoslash", 'International comparison'), "As a percent of national income, taxes in the United States are", [
    { text: "higher than in France, Germany, and the United Kingdom.", why: tr("AQSh ~24%, Fransiya 45%, Germaniya 39%, Buyuk Britaniya ~33%.", 'The U.S. ~24%, France 45%, Germany 39%, the U.K. ~33%.') },
    { text: "lower than in France, Germany, and the United Kingdom.", correct: true, why: tr("AQShda soliq yuki ko'p rivojlangan davlatlardan past (Figure 2).", 'The tax burden in the U.S. is lower than in many advanced countries (Figure 2).') },
    { text: "higher than in France and Germany but lower than in the United Kingdom.", why: "Uchalasidan ham past." },
    { text: "lower than in France and Germany but higher than in the United Kingdom.", why: tr("Buyuk Britaniyadan ham past.", "Lower than the U.K.'s too.") },
  ]),
  mk("ch13.qq.2", tr("Federal soliqlar", 'Federal taxes'), "The two largest sources of tax revenue for the U.S. federal government are", [
    { text: "personal and corporate income taxes.", why: tr("Korporativ soliq atigi 5%.", 'The corporate tax is only 5%.') },
    { text: "personal income taxes and payroll taxes for social insurance.", correct: true, why: tr("46% va 39% (Table 1, 2020).", '46% and 39% (Table 1, 2020).') },
    { text: "corporate income taxes and payroll taxes for social insurance.", why: tr("Korporativ soliq kichik.", 'The corporate tax is small.') },
    { text: "payroll taxes for social insurance and property taxes.", why: tr("Mulk solig'i — shtat va mahalliy soliq.", 'The property tax is a state and local tax.') },
  ]),
  mk("ch13.qq.3", tr("DWL", 'DWL'), "Betty gives piano lessons: opportunity cost $50 per lesson, price $60. Archie's WTP is $70, Veronica's $90. With a $20 tax, Betty raises her price to $80. The deadweight loss is ____, and the tax revenue is ____.", [
    { text: "$10; $20", why: tr("DWL Archie'ning CS ($10) **va** Betty'ning Archie darsidan PS ($10) yig'indisi.", "The DWL is the sum of Archie's CS ($10) **and** Betty's PS from Archie's lesson ($10).") },
    { text: "$10; $40", why: tr("Faqat Veronica dars oladi — tushum $20.", 'Only Veronica takes lessons — revenue $20.') },
    { text: "$20; $20", correct: true, why: tr("Archie ketadi: uning CS $10 + Betty PS $10 = $20 yo'qoladi; tushum $20 × 1 dars.", "Archie leaves: his CS $10 + Betty's PS $10 = $20 lost; revenue $20 × 1 lesson.") },
    { text: "$20; $40", why: tr("Tushum faqat bitta darsdan.", 'Revenue comes from just one lesson.') },
  ]),
  mk("ch13.qq.4", tr("Stavkalar", 'Rates'), "If the tax code exempts the first $20,000 of income and then taxes 25 percent of income above that level, a person who earns $50,000 has an average tax rate of ___ percent and a marginal tax rate of ___ percent.", [
    { text: "15; 25", correct: true, why: tr("Soliq 0.25 × 30,000 = 7,500 → 7,500/50,000 = 15%; keyingi $1 dan 25%.", 'Tax 0.25 × 30,000 = 7,500 → 7,500/50,000 = 15%; 25% on the next $1.') },
    { text: "25; 15", why: tr("Teskari.", 'The reverse.') },
    { text: "25; 30", why: tr("Hisob xato.", 'A calculation error.') },
    { text: "30; 25", why: tr("Hisob xato.", 'A calculation error.') },
  ]),
  mk("ch13.qq.5", "Lump-sum", "Lump-sum taxes", [
    { text: "have a zero marginal tax rate.", correct: true, why: tr("Qo'shimcha daromaddan hech narsa to'lanmaydi.", 'Nothing is paid on additional income.') },
    { text: "have a zero average tax rate.", why: tr("O'rtacha stavka musbat ($8,000 / daromad).", 'The average rate is positive ($8,000 / income).') },
    { text: "are costly to administer.", why: "Ma'muriy yuki minimal." },
    { text: "impose large deadweight losses.", why: tr("Rag'batlarni buzmaydi — DWL yo'q.", "It doesn't distort incentives — no DWL.") },
  ]),
  mk("ch13.qq.6", tr("Tenglik", 'Equity'), "A toll is a tax on citizens who use toll roads. This policy can be viewed as an application of", [
    { text: "the benefits principle.", correct: true, why: tr("Yo'ldan foydalanganlar to'laydi.", 'Those who use the road pay.') },
    { text: "horizontal equity.", why: tr("Bu to'lov qobiliyati haqida.", "That's about ability to pay.") },
    { text: "vertical equity.", why: tr("Bu to'lov qobiliyati haqida.", "That's about ability to pay.") },
    { text: "tax progressivity.", why: tr("To'lov daromadga bog'liq emas.", "The payment doesn't depend on income.") },
  ]),
  mk("ch13.qq.7", tr("Soliq yuki", 'Tax burden'), "In the United States, taxpayers in the top 1 percent of the income distribution pay about ___ percent of their income in federal taxes.", [
    { text: "5", why: "Table 5: 30.3%." },
    { text: "10", why: "Table 5: 30.3%." },
    { text: "20", why: tr("Bu eng yuqori kvintildan ham past (25.4%).", "That's even lower than the top quintile (25.4%).") },
    { text: "30", correct: true, why: tr("Top 1%: 30.3% (transfertlardan keyin 29.7%).", 'Top 1%: 30.3% (29.7% after transfers).') },
  ]),
  mk("ch13.qq.8", tr("Korporativ soliq", 'Corporate tax'), "If the corporate income tax induces businesses to reduce their capital investment, then", [
    { text: "the tax does not have any deadweight loss.", why: tr("Investitsiyaning buzilishi — DWL.", 'The distortion of investment is a DWL.') },
    { text: "corporate shareholders benefit from the tax.", why: tr("Ular yutqazadi.", 'They lose.') },
    { text: "workers bear some of the burden of the tax.", correct: true, why: tr("Kapital kam → ishchilar unumdorligi va maoshi past → yukning bir qismi ishchilarga.", 'Less capital → lower worker productivity and wages → part of the burden falls on workers.') },
    { text: "the tax achieves the goal of vertical equity.", why: tr("Yuk ishchilarga tushsa — teskarisi bo'lishi mumkin.", 'If the burden falls on workers, it may be the opposite.') },
  ]),
];

export const checks: Record<string, Question> = {
  "s-13-1a": { id: "ch13.check.13-1a", chapter: C, kind: "numeric", source: "new", topic: tr("Federal soliqlar", 'Federal taxes'), prompt: tr("2020-yilda federal tushum $3,664 mlrd, aholi ~331 mln. Kishi boshiga necha dollar (kitob qiymati)?", "In 2020 federal revenue was $3,664 billion and the population ~331 million. How many dollars per person (the book's value)?"), answer: 11069, tolerance: 15, unit: "$", why: tr("3,664 mlrd / 331 mln ≈ $11,069.", '3,664 billion / 331 million ≈ $11,069.') },
  "s-13-1b": mk("ch13.check.13-1b", tr("Shtat soliqlari", 'State taxes'), tr("Shtat va mahalliy hukumatlarning eng katta **soliq** manbai qaysi?", 'What is the largest **tax** source for state and local governments?'), [
    { text: tr("Mulk solig'i (19%)", 'The property tax (19%)'), correct: true, why: tr("Table 3: mulk solig'i 19%, daromad solig'i 15%, savdo solig'i 14%. (Federal transfertlar 29% — lekin bu soliq emas.)", "Table 3: property tax 19%, income tax 15%, sales tax 14%. (Federal transfers are 29% — but they aren't a tax.)") },
    { text: tr("Korporativ daromad solig'i", 'The corporate income tax'), why: tr("Atigi 3%.", 'Only 3%.') },
    { text: tr("Aksiz", 'Excise taxes'), why: "7%." },
    { text: tr("Payroll solig'i", 'Payroll tax'), why: tr("Bu federal soliq.", "That's a federal tax.") },
  ], 'new'),
  "s-13-2a": { id: "ch13.check.13-2a", chapter: C, kind: "numeric", source: "new", topic: tr("DWL", 'DWL'), prompt: tr("Khalil pizzani $16, Carmen $12 ga baholaydi; taklif $10 da mukammal elastik. $4 soliq qo'yilsa, DWL?", 'Khalil values a pizza at $16, Carmen at $12; supply is perfectly elastic at $10. With a $4 tax, what is the DWL?'), answer: 2, tolerance: 0, unit: "$", why: tr("CS 8 → 2 (−6), tushum 4 → DWL 2 — Carmen sotib olmay qo'ygani uchun.", 'CS 8 → 2 (−6), revenue 4 → DWL 2 — because Carmen stops buying.'), traps: [{ value: 6, why: tr("Bu CS ning kamayishi; tushumni ayiring.", "That's the fall in CS; subtract the revenue.") }] },
  "s-13-2b": { id: "ch13.check.13-2b", chapter: C, kind: "tf", source: "new", topic: tr("Ma'muriy yuk", 'Administrative burden'), prompt: tr("Soliqni kamaytirish uchun ishlarni qonuniy tashkil etish (tax avoidance) ham, soliqdan bo'yin tovlash (tax evasion) ham noqonuniy.", "Arranging one's affairs to reduce taxes (tax avoidance) and dodging taxes (tax evasion) are both illegal."), answer: false, why: tr("Avoidance — qonuniy (Learned Hand: hech kim xazinaga eng foydali yo'lni tanlashga majbur emas); evasion — noqonuniy (Al Capone).", 'Avoidance is legal (Learned Hand: no one is obliged to choose the pattern most profitable to the Treasury); evasion is illegal (Al Capone).') },
  "s-13-2c": { id: "ch13.check.13-2c", chapter: C, kind: "numeric", source: "new", topic: tr("Stavkalar", 'Rates'), prompt: tr("Soliq: birinchi $50,000 ga 20%, undan yuqorisiga 50%. $60,000 daromadning o'rtacha stavkasi (%)?", 'Tax: 20% on the first $50,000, 50% above that. What is the average rate (%) on an income of $60,000?'), answer: 25, tolerance: 0, unit: "%", why: tr("$15,000 / $60,000 = 25%; marjinal — 50%.", '$15,000 / $60,000 = 25%; the marginal rate is 50%.'), traps: [{ value: 50, why: tr("Bu marjinal stavka.", "That's the marginal rate.") }] },
  "s-13-2d": mk("ch13.check.13-2d", "Lump-sum", tr("Nega lump-sum soliq eng samarali, lekin kam qo'llanadi?", 'Why is a lump-sum tax the most efficient but rarely used?'), [
    { text: tr("Marjinal stavka 0 — rag'batlarni buzmaydi; lekin hammadan bir xil oladi — ko'pchilik adolatsiz deb hisoblaydi", "Its marginal rate is 0 — it doesn't distort incentives; but it takes the same from everyone — most people see it as unfair"), correct: true, why: tr("Samaradorlik hammasi emas — tenglik ham muhim.", "Efficiency isn't everything — equity matters too.") },
    { text: tr("Uni yig'ish qiyin", "It's hard to collect"), why: "Ma'muriy yuki minimal." },
    { text: tr("DWL katta", 'Its DWL is large'), why: tr("DWL yo'q.", 'It has no DWL.') },
    { text: tr("Tushum bermaydi", 'It raises no revenue'), why: tr("Tushum beradi.", 'It raises revenue.') },
  ], 'new'),
  "s-13-3a": mk("ch13.check.13-3a", tr("Foyda tamoyili", 'Benefits principle'), tr("Foyda tamoyili bilan boylar ko'proq soliq to'lashi kerakligini qanday asoslash mumkin?", 'How can the benefits principle justify the rich paying more tax?'), [
    { text: tr("Ular politsiya, sud, mudofaa kabi xizmatlardan ko'proq foyda ko'radi — himoya qiladigan mulki ko'p", 'They benefit more from services such as police, courts, and defense — they have more property to protect'), correct: true, why: tr("Qashshoqlikka qarshi dasturlar jamoat tovari bo'lsa, boylar uni ko'proq qadrlashi ham mumkin.", 'If antipoverty programs are a public good, the rich may also value them more.') },
    { text: tr("Ular ko'proq to'lay oladi", 'They can afford to pay more'), why: tr("Bu to'lov qobiliyati tamoyili.", "That's the ability-to-pay principle.") },
    { text: tr("Ular kamroq foyda ko'radi", 'They benefit less'), why: tr("Teskarisi.", 'The reverse.') },
    { text: tr("Foyda tamoyili buni asoslay olmaydi", "The benefits principle can't justify it"), why: tr("Asoslay oladi.", 'It can.') },
  ], 'new'),
  "s-13-3b": { id: "ch13.check.13-3b", chapter: C, kind: "match", source: "new", topic: tr("Soliq tizimlari", 'Tax systems'), prompt: tr("Table 4 dagi foizlar ketma-ketligini ($50k, $100k, $200k) tizim bilan moslashtiring.", 'Match the percentage sequences in Table 4 ($50k, $100k, $200k) with the system.'), pairs: [
    { left: "25%, 25%, 25%", right: "Proportional" },
    { left: "30%, 25%, 20%", right: "Regressive" },
    { left: "20%, 25%, 30%", right: "Progressive" },
  ] },
  "s-13-3c": mk("ch13.check.13-3c", tr("Soliq yuki", 'Tax burden'), tr("Mo'yna paltolarga soliq — vertikal teng deb o'ylash nega “flypaper” xatosi bo'lishi mumkin?", 'Why might thinking a tax on fur coats is vertically equitable be the “flypaper” mistake?'), [
    { text: tr("Boy xaridorlar boshqa hashamatga oson o'tsa, talab elastik → yuk asosan boy bo'lmagan mo'yna ishlab chiqaruvchilarga tushadi", "If rich buyers easily switch to other luxuries, demand is elastic → the burden falls mainly on fur makers, who aren't rich"), correct: true, why: tr("Yuk soliq qog'ozi tushgan joyda qolmaydi — elastikliklarga bog'liq (6-bob).", "The burden doesn't stay where the tax paper lands — it depends on elasticities (Chapter 6).") },
    { text: tr("Mo'yna arzon", 'Fur is cheap'), why: tr("Gap — yuk kimga tushishida.", 'The point is who bears the burden.') },
    { text: tr("Soliq yig'ilmaydi", "The tax isn't collected"), why: tr("Yig'iladi.", 'It is collected.') },
    { text: tr("Xaridorlar hammasini to'laydi", 'Buyers pay all of it'), why: tr("Bu aynan flypaper fikri.", 'That is exactly the flypaper idea.') },
  ], 'new'),
};

export const practice: Question[] = [
  { id: "ch13.new.p2-40", chapter: C, kind: "numeric", source: "new", topic: "Problem 2", prompt: tr("Kitobdagi Table 2 bo'yicha (10% $9,875 gacha, keyin 15%) $40,000 daromaddan federal daromad solig'i?", "Using the book's Table 2 (10% up to $9,875, then 15%), what is the federal income tax on $40,000?"), answer: 5506.25, tolerance: 0.5, unit: "$", why: tr("0.10 × 9,875 = 987.50; 0.15 × 30,125 = 4,518.75 → $5,506.25. (2020 qonunida 2-pog'ona 12% edi — kitob raqami 15%.)", "0.10 × 9,875 = 987.50; 0.15 × 30,125 = 4,518.75 → $5,506.25. (Under 2020 law the 2nd bracket was 12% — the book's figure is 15%.)") },
  { id: "ch13.new.p2-avg", chapter: C, kind: "numeric", source: "new", topic: "Problem 2", prompt: tr("Problem 2: shtat 4% + payroll 15.3% + federal ($5,506.25). $40,000 daromadda jami o'rtacha stavka (%)?", 'Problem 2: state 4% + payroll 15.3% + federal ($5,506.25). What is the total average rate (%) on $40,000 of income?'), answer: 33.07, tolerance: 0.05, unit: "%", why: tr("1,600 + 6,120 + 5,506.25 = 13,226.25 → 33.07%. Marjinal: 4 + 15.3 + 15 = 34.3%. $80,000 da: o'rtacha ≈ 37.2%, marjinal 41.3%.", '1,600 + 6,120 + 5,506.25 = 13,226.25 → 33.07%. Marginal: 4 + 15.3 + 15 = 34.3%. At $80,000: average ≈ 37.2%, marginal 41.3%.') },
  { id: "ch13.new.sammy", chapter: C, kind: "numeric", source: "new", topic: tr("Jamg'arma", 'Saving'), prompt: tr("$1,000, 6% foiz, foiz daromadining ¼ qismi soliqqa. 40 yildan keyin (kitob qiymati, $)?", "$1,000, 6% interest, ¼ of interest income taxed. After 40 years (the book's value, $)?"), answer: 5816, tolerance: 2, unit: "$", why: tr("Samarali stavka 4.5%: 1000 × 1.045⁴⁰ ≈ $5,816 (soliqsiz $10,286).", 'Effective rate 4.5%: 1000 × 1.045⁴⁰ ≈ $5,816 ($10,286 without the tax).') },
  mk("ch13.new.sales-tax", "Problem 6", tr("Shtat savdo solig'ini 5% dan 6% ga oshirdi; komissar tushum 20% oshadi deb bashorat qiladi. Bu ishonarlimi?", 'A state raised its sales tax from 5% to 6%; the commissioner predicts revenue will rise 20%. Is this plausible?'), [
    { text: tr("Yuqori chegara: stavka 20% oshadi, lekin narx oshgani sababli savdo hajmi kamayadi (va qo'shni shtatlarda xarid) — tushum 20% dan kam oshadi", "It's an upper bound: the rate rises 20%, but higher prices reduce sales (and people shop in neighboring states) — revenue rises by less than 20%"), correct: true, why: tr("Faqat talab mukammal inelastik bo'lsa 20%.", 'Only if demand is perfectly inelastic would it be 20%.') },
    { text: tr("Ha, aniq 20%", 'Yes, exactly 20%'), why: tr("Xatti-harakat o'zgarishini e'tiborsiz qoldiradi.", 'It ignores changes in behavior.') },
    { text: tr("Tushum kamayadi", 'Revenue will fall'), why: tr("Odatda kam stavkada oshadi (Laffer qismi emas).", 'At low rates it usually rises (not the Laffer region).') },
    { text: tr("Tushum 1% oshadi", 'Revenue will rise 1%'), why: tr("Stavka 1 foiz punkt, ya'ni 20% oshgan.", 'The rate rose 1 percentage point, i.e., 20%.') },
  ], 'new'),
  { id: "ch13.new.match-principles", chapter: C, kind: "match", source: "new", topic: "Problem 8", prompt: tr("Moliyalash sxemasini tamoyil bilan moslashtiring.", 'Match each financing scheme with its principle.'), pairs: [
    { left: tr("Milliy bog'ga kirish haqi", 'A national park entrance fee'), right: "Benefits principle" },
    { left: tr("Mahalliy mulk solig'i maktablarni moliyalaydi", 'Local property taxes fund schools'), right: "Ability-to-pay principle" },
    { left: tr("Har bir aviachiptaga soliq aeroportlarni yaxshilashga", 'A tax on every airline ticket to improve airports'), right: "Benefits principle (aviachipta)" },
  ] },
  { id: "ch13.new.tf-ate", chapter: C, kind: "tf", source: "new", topic: "Ask the Experts", prompt: tr("IGM (2019): iqtisodchilarning ko'pchiligi top marjinal stavkani 70% ga ko'tarish iqtisodiy faollikni pasaytirmasdan ancha ko'p tushum beradi degan fikrga qo'shilgan.", 'IGM (2019): most economists agreed that raising the top marginal rate to 70% would bring in much more revenue without reducing economic activity.'), answer: false, why: "21% agree, 16% uncertain, **63% disagree**." },
  mk("ch13.new.vat", "In the News", tr("Nega VAT soliqdan bo'yin tovlashni kamaytiradi?", 'Why does a VAT reduce tax evasion?'), [
    { text: tr("Bir firmaning chegirmasi — boshqa firmaning soliq majburiyati: novvoy un xaridini e'lon qiladi va bu un ishlab chiqaruvchining daromadini oshkor qiladi", "One firm's deduction is another firm's tax liability: a baker reports its flour purchases, which reveals the flour producer's revenue"), correct: true, why: tr("O'z-o'zini nazorat qiladi; “oxirgi mil” muammosi — chakana xaridorga chek so'rash rag'bati yo'q (São Paulo mukofot dasturi buni 21% yaxshiladi).", "It is self-enforcing; the “last mile” problem — retail buyers have no incentive to ask for a receipt (São Paulo's reward program improved this by 21%).") },
    { text: tr("Stavkasi past", 'Its rate is low'), why: tr("Mexanizm — bosqichma-bosqich yig'ish.", 'The mechanism is collection in stages.') },
    { text: tr("U progressiv", 'It is progressive'), why: tr("VAT ko'pincha regressiv.", 'A VAT is often regressive.') },
    { text: tr("Uni faqat davlat korxonalari to'laydi", 'Only state enterprises pay it'), why: tr("Hamma bosqichdagi firmalar.", 'Firms at every stage do.') },
  ], 'new'),
  mk("ch13.new.uz", tr("O'zbekistondan misol", 'An example from Uzbekistan'), tr("O'zbekistonda jismoniy shaxslar daromad solig'i hamma uchun bir xil foiz (flat). Bu qaysi tizim?", 'In Uzbekistan the personal income tax is the same percentage for everyone (flat). Which system is this?'), [
    { text: tr("Proporsional — hamma daromadning bir xil ulushini to'laydi", 'Proportional — everyone pays the same share of income'), correct: true, why: tr("Bunday tizimda marjinal va o'rtacha stavka (chegirmalarsiz) teng. Tenglik va samaradorlik bahsi — qaysi biriga ko'proq vazn berilishiga bog'liq.", 'In such a system the marginal and average rates are equal (without deductions). The equity–efficiency debate depends on how much weight each is given.') },
    { text: tr("Progressiv", 'Progressive'), why: tr("Ulush daromad bilan o'smaydi.", "The share doesn't rise with income.") },
    { text: tr("Regressiv", 'Regressive'), why: tr("Ulush daromad bilan kamaymaydi.", "The share doesn't fall with income.") },
    { text: "Lump-sum", why: tr("Lump-sum — bir xil **summa**, bir xil foiz emas.", 'Lump-sum means the same **amount**, not the same percentage.') },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
