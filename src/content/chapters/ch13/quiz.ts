import type { Question } from '../../types';

const C = 13;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch13.qq.1", "Xalqaro taqqoslash", "As a percent of national income, taxes in the United States are", [
    { text: "higher than in France, Germany, and the United Kingdom.", why: "AQSh ~24%, Fransiya 45%, Germaniya 39%, Buyuk Britaniya ~33%." },
    { text: "lower than in France, Germany, and the United Kingdom.", correct: true, why: "AQShda soliq yuki ko'p rivojlangan davlatlardan past (Figure 2)." },
    { text: "higher than in France and Germany but lower than in the United Kingdom.", why: "Uchalasidan ham past." },
    { text: "lower than in France and Germany but higher than in the United Kingdom.", why: "Buyuk Britaniyadan ham past." },
  ]),
  mk("ch13.qq.2", "Federal soliqlar", "The two largest sources of tax revenue for the U.S. federal government are", [
    { text: "personal and corporate income taxes.", why: "Korporativ soliq atigi 5%." },
    { text: "personal income taxes and payroll taxes for social insurance.", correct: true, why: "46% va 39% (Table 1, 2020)." },
    { text: "corporate income taxes and payroll taxes for social insurance.", why: "Korporativ soliq kichik." },
    { text: "payroll taxes for social insurance and property taxes.", why: "Mulk solig'i — shtat va mahalliy soliq." },
  ]),
  mk("ch13.qq.3", "DWL", "Betty gives piano lessons: opportunity cost $50 per lesson, price $60. Archie's WTP is $70, Veronica's $90. With a $20 tax, Betty raises her price to $80. The deadweight loss is ____, and the tax revenue is ____.", [
    { text: "$10; $20", why: "DWL Archie'ning CS ($10) **va** Betty'ning Archie darsidan PS ($10) yig'indisi." },
    { text: "$10; $40", why: "Faqat Veronica dars oladi — tushum $20." },
    { text: "$20; $20", correct: true, why: "Archie ketadi: uning CS $10 + Betty PS $10 = $20 yo'qoladi; tushum $20 × 1 dars." },
    { text: "$20; $40", why: "Tushum faqat bitta darsdan." },
  ]),
  mk("ch13.qq.4", "Stavkalar", "If the tax code exempts the first $20,000 of income and then taxes 25 percent of income above that level, a person who earns $50,000 has an average tax rate of ___ percent and a marginal tax rate of ___ percent.", [
    { text: "15; 25", correct: true, why: "Soliq 0.25 × 30,000 = 7,500 → 7,500/50,000 = 15%; keyingi $1 dan 25%." },
    { text: "25; 15", why: "Teskari." },
    { text: "25; 30", why: "Hisob xato." },
    { text: "30; 25", why: "Hisob xato." },
  ]),
  mk("ch13.qq.5", "Lump-sum", "Lump-sum taxes", [
    { text: "have a zero marginal tax rate.", correct: true, why: "Qo'shimcha daromaddan hech narsa to'lanmaydi." },
    { text: "have a zero average tax rate.", why: "O'rtacha stavka musbat ($8,000 / daromad)." },
    { text: "are costly to administer.", why: "Ma'muriy yuki minimal." },
    { text: "impose large deadweight losses.", why: "Rag'batlarni buzmaydi — DWL yo'q." },
  ]),
  mk("ch13.qq.6", "Tenglik", "A toll is a tax on citizens who use toll roads. This policy can be viewed as an application of", [
    { text: "the benefits principle.", correct: true, why: "Yo'ldan foydalanganlar to'laydi." },
    { text: "horizontal equity.", why: "Bu to'lov qobiliyati haqida." },
    { text: "vertical equity.", why: "Bu to'lov qobiliyati haqida." },
    { text: "tax progressivity.", why: "To'lov daromadga bog'liq emas." },
  ]),
  mk("ch13.qq.7", "Soliq yuki", "In the United States, taxpayers in the top 1 percent of the income distribution pay about ___ percent of their income in federal taxes.", [
    { text: "5", why: "Table 5: 30.3%." },
    { text: "10", why: "Table 5: 30.3%." },
    { text: "20", why: "Bu eng yuqori kvintildan ham past (25.4%)." },
    { text: "30", correct: true, why: "Top 1%: 30.3% (transfertlardan keyin 29.7%)." },
  ]),
  mk("ch13.qq.8", "Korporativ soliq", "If the corporate income tax induces businesses to reduce their capital investment, then", [
    { text: "the tax does not have any deadweight loss.", why: "Investitsiyaning buzilishi — DWL." },
    { text: "corporate shareholders benefit from the tax.", why: "Ular yutqazadi." },
    { text: "workers bear some of the burden of the tax.", correct: true, why: "Kapital kam → ishchilar unumdorligi va maoshi past → yukning bir qismi ishchilarga." },
    { text: "the tax achieves the goal of vertical equity.", why: "Yuk ishchilarga tushsa — teskarisi bo'lishi mumkin." },
  ]),
];

export const checks: Record<string, Question> = {
  "s-13-1a": { id: "ch13.check.13-1a", chapter: C, kind: "numeric", source: "new", topic: "Federal soliqlar", prompt: "2020-yilda federal tushum $3,664 mlrd, aholi ~331 mln. Kishi boshiga necha dollar (kitob qiymati)?", answer: 11069, tolerance: 15, unit: "$", why: "3,664 mlrd / 331 mln ≈ $11,069." },
  "s-13-1b": mk("ch13.check.13-1b", "Shtat soliqlari", "Shtat va mahalliy hukumatlarning eng katta **soliq** manbai qaysi?", [
    { text: "Mulk solig'i (19%)", correct: true, why: "Table 3: mulk solig'i 19%, daromad solig'i 15%, savdo solig'i 14%. (Federal transfertlar 29% — lekin bu soliq emas.)" },
    { text: "Korporativ daromad solig'i", why: "Atigi 3%." },
    { text: "Aksiz", why: "7%." },
    { text: "Payroll solig'i", why: "Bu federal soliq." },
  ], 'new'),
  "s-13-2a": { id: "ch13.check.13-2a", chapter: C, kind: "numeric", source: "new", topic: "DWL", prompt: "Khalil pizzani $16, Carmen $12 ga baholaydi; taklif $10 da mukammal elastik. $4 soliq qo'yilsa, DWL?", answer: 2, tolerance: 0, unit: "$", why: "CS 8 → 2 (−6), tushum 4 → DWL 2 — Carmen sotib olmay qo'ygani uchun.", traps: [{ value: 6, why: "Bu CS ning kamayishi; tushumni ayiring." }] },
  "s-13-2b": { id: "ch13.check.13-2b", chapter: C, kind: "tf", source: "new", topic: "Ma'muriy yuk", prompt: "Soliqni kamaytirish uchun ishlarni qonuniy tashkil etish (tax avoidance) ham, soliqdan bo'yin tovlash (tax evasion) ham noqonuniy.", answer: false, why: "Avoidance — qonuniy (Learned Hand: hech kim xazinaga eng foydali yo'lni tanlashga majbur emas); evasion — noqonuniy (Al Capone)." },
  "s-13-2c": { id: "ch13.check.13-2c", chapter: C, kind: "numeric", source: "new", topic: "Stavkalar", prompt: "Soliq: birinchi $50,000 ga 20%, undan yuqorisiga 50%. $60,000 daromadning o'rtacha stavkasi (%)?", answer: 25, tolerance: 0, unit: "%", why: "$15,000 / $60,000 = 25%; marjinal — 50%.", traps: [{ value: 50, why: "Bu marjinal stavka." }] },
  "s-13-2d": mk("ch13.check.13-2d", "Lump-sum", "Nega lump-sum soliq eng samarali, lekin kam qo'llanadi?", [
    { text: "Marjinal stavka 0 — rag'batlarni buzmaydi; lekin hammadan bir xil oladi — ko'pchilik adolatsiz deb hisoblaydi", correct: true, why: "Samaradorlik hammasi emas — tenglik ham muhim." },
    { text: "Uni yig'ish qiyin", why: "Ma'muriy yuki minimal." },
    { text: "DWL katta", why: "DWL yo'q." },
    { text: "Tushum bermaydi", why: "Tushum beradi." },
  ], 'new'),
  "s-13-3a": mk("ch13.check.13-3a", "Foyda tamoyili", "Foyda tamoyili bilan boylar ko'proq soliq to'lashi kerakligini qanday asoslash mumkin?", [
    { text: "Ular politsiya, sud, mudofaa kabi xizmatlardan ko'proq foyda ko'radi — himoya qiladigan mulki ko'p", correct: true, why: "Qashshoqlikka qarshi dasturlar jamoat tovari bo'lsa, boylar uni ko'proq qadrlashi ham mumkin." },
    { text: "Ular ko'proq to'lay oladi", why: "Bu to'lov qobiliyati tamoyili." },
    { text: "Ular kamroq foyda ko'radi", why: "Teskarisi." },
    { text: "Foyda tamoyili buni asoslay olmaydi", why: "Asoslay oladi." },
  ], 'new'),
  "s-13-3b": { id: "ch13.check.13-3b", chapter: C, kind: "match", source: "new", topic: "Soliq tizimlari", prompt: "Table 4 dagi foizlar ketma-ketligini ($50k, $100k, $200k) tizim bilan moslashtiring.", pairs: [
    { left: "25%, 25%, 25%", right: "Proportional" },
    { left: "30%, 25%, 20%", right: "Regressive" },
    { left: "20%, 25%, 30%", right: "Progressive" },
  ] },
  "s-13-3c": mk("ch13.check.13-3c", "Soliq yuki", "Mo'yna paltolarga soliq — vertikal teng deb o'ylash nega “flypaper” xatosi bo'lishi mumkin?", [
    { text: "Boy xaridorlar boshqa hashamatga oson o'tsa, talab elastik → yuk asosan boy bo'lmagan mo'yna ishlab chiqaruvchilarga tushadi", correct: true, why: "Yuk soliq qog'ozi tushgan joyda qolmaydi — elastikliklarga bog'liq (6-bob)." },
    { text: "Mo'yna arzon", why: "Gap — yuk kimga tushishida." },
    { text: "Soliq yig'ilmaydi", why: "Yig'iladi." },
    { text: "Xaridorlar hammasini to'laydi", why: "Bu aynan flypaper fikri." },
  ], 'new'),
};

export const practice: Question[] = [
  { id: "ch13.new.p2-40", chapter: C, kind: "numeric", source: "new", topic: "Problem 2", prompt: "Kitobdagi Table 2 bo'yicha (10% $9,875 gacha, keyin 15%) $40,000 daromaddan federal daromad solig'i?", answer: 5506.25, tolerance: 0.5, unit: "$", why: "0.10 × 9,875 = 987.50; 0.15 × 30,125 = 4,518.75 → $5,506.25. (2020 qonunida 2-pog'ona 12% edi — kitob raqami 15%.)" },
  { id: "ch13.new.p2-avg", chapter: C, kind: "numeric", source: "new", topic: "Problem 2", prompt: "Problem 2: shtat 4% + payroll 15.3% + federal ($5,506.25). $40,000 daromadda jami o'rtacha stavka (%)?", answer: 33.07, tolerance: 0.05, unit: "%", why: "1,600 + 6,120 + 5,506.25 = 13,226.25 → 33.07%. Marjinal: 4 + 15.3 + 15 = 34.3%. $80,000 da: o'rtacha ≈ 37.2%, marjinal 41.3%." },
  { id: "ch13.new.sammy", chapter: C, kind: "numeric", source: "new", topic: "Jamg'arma", prompt: "$1,000, 6% foiz, foiz daromadining ¼ qismi soliqqa. 40 yildan keyin (kitob qiymati, $)?", answer: 5816, tolerance: 2, unit: "$", why: "Samarali stavka 4.5%: 1000 × 1.045⁴⁰ ≈ $5,816 (soliqsiz $10,286)." },
  mk("ch13.new.sales-tax", "Problem 6", "Shtat savdo solig'ini 5% dan 6% ga oshirdi; komissar tushum 20% oshadi deb bashorat qiladi. Bu ishonarlimi?", [
    { text: "Yuqori chegara: stavka 20% oshadi, lekin narx oshgani sababli savdo hajmi kamayadi (va qo'shni shtatlarda xarid) — tushum 20% dan kam oshadi", correct: true, why: "Faqat talab mukammal inelastik bo'lsa 20%." },
    { text: "Ha, aniq 20%", why: "Xatti-harakat o'zgarishini e'tiborsiz qoldiradi." },
    { text: "Tushum kamayadi", why: "Odatda kam stavkada oshadi (Laffer qismi emas)." },
    { text: "Tushum 1% oshadi", why: "Stavka 1 foiz punkt, ya'ni 20% oshgan." },
  ], 'new'),
  { id: "ch13.new.match-principles", chapter: C, kind: "match", source: "new", topic: "Problem 8", prompt: "Moliyalash sxemasini tamoyil bilan moslashtiring.", pairs: [
    { left: "Milliy bog'ga kirish haqi", right: "Benefits principle" },
    { left: "Mahalliy mulk solig'i maktablarni moliyalaydi", right: "Ability-to-pay principle" },
    { left: "Har bir aviachiptaga soliq aeroportlarni yaxshilashga", right: "Benefits principle (aviachipta)" },
  ] },
  { id: "ch13.new.tf-ate", chapter: C, kind: "tf", source: "new", topic: "Ask the Experts", prompt: "IGM (2019): iqtisodchilarning ko'pchiligi top marjinal stavkani 70% ga ko'tarish iqtisodiy faollikni pasaytirmasdan ancha ko'p tushum beradi degan fikrga qo'shilgan.", answer: false, why: "21% agree, 16% uncertain, **63% disagree**." },
  mk("ch13.new.vat", "In the News", "Nega VAT soliqdan bo'yin tovlashni kamaytiradi?", [
    { text: "Bir firmaning chegirmasi — boshqa firmaning soliq majburiyati: novvoy un xaridini e'lon qiladi va bu un ishlab chiqaruvchining daromadini oshkor qiladi", correct: true, why: "O'z-o'zini nazorat qiladi; “oxirgi mil” muammosi — chakana xaridorga chek so'rash rag'bati yo'q (São Paulo mukofot dasturi buni 21% yaxshiladi)." },
    { text: "Stavkasi past", why: "Mexanizm — bosqichma-bosqich yig'ish." },
    { text: "U progressiv", why: "VAT ko'pincha regressiv." },
    { text: "Uni faqat davlat korxonalari to'laydi", why: "Hamma bosqichdagi firmalar." },
  ], 'new'),
  mk("ch13.new.uz", "O'zbekistondan misol", "O'zbekistonda jismoniy shaxslar daromad solig'i hamma uchun bir xil foiz (flat). Bu qaysi tizim?", [
    { text: "Proporsional — hamma daromadning bir xil ulushini to'laydi", correct: true, why: "Bunday tizimda marjinal va o'rtacha stavka (chegirmalarsiz) teng. Tenglik va samaradorlik bahsi — qaysi biriga ko'proq vazn berilishiga bog'liq." },
    { text: "Progressiv", why: "Ulush daromad bilan o'smaydi." },
    { text: "Regressiv", why: "Ulush daromad bilan kamaymaydi." },
    { text: "Lump-sum", why: "Lump-sum — bir xil **summa**, bir xil foiz emas." },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
