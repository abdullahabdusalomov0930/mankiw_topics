import type { Problem } from '../../types';

const C = 13;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch13.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch13.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "Over the past century, has the government's tax revenue grown more or less slowly than the rest of the economy?", ["Figure 1: 1902-yilda davlat daromadning **7%** ini yig'gan, so'nggi yillarda — deyarli **30%**.", "Demak tushum iqtisodiyotdan **tezroq** o'sgan."], "Faster — from about 7 percent of income to almost 30 percent."),
  r(2, "Explain how corporate profits are taxed twice.", ["1) Korporatsiya foydasiga **korporativ daromad solig'i**.", "2) Foyda dividend sifatida aksiyadorlarga to'langanda — **shaxsiy daromad solig'i**.", "Qisman kompensatsiya: dividendlarga past stavka (2020: max 20% + 3.8%, oddiy daromadda 37% + 3.8%)."], "Once as corporate profits and again as dividends."),
  r(3, "Why is the burden of a tax to taxpayers greater than the revenue received by the government?", ["To'lovning o'zidan tashqari: (1) **DWL** — soliq qarorlarni buzadi; (2) **ma'muriy yuk** — formalar, hujjatlar, maslahatchilar."], "Because of deadweight losses and administrative burdens.", "dwl"),
  r(4, "Why do some economists advocate taxing consumption rather than income?", ["Daromad solig'i foizni ham soliqqa tortadi → **jamg'armaga** qarshi rag'bat (Sammy: $10,286 vs $5,816).", "Iste'mol solig'ida jamg'arilgan daromad sarflanguncha soliqsiz → jamg'arma va kapital to'planishi rag'batlanadi (Greenspan)."], "A consumption tax does not distort saving decisions.", "saving"),
  r(5, "What is the marginal tax rate on a lump-sum tax? How is this related to the efficiency of the tax?", ["Marjinal stavka **0**: qo'shimcha daromaddan soliq yo'q.", "Shuning uchun rag'batlar buzilmaydi → DWL yo'q → **eng samarali** soliq."], "Zero — so it causes no deadweight loss.", "rates"),
  r(6, "Give two arguments why people with high incomes should pay more taxes than people with low incomes.", ["**Ability-to-pay** (vertikal tenglik): ular yukni osonroq ko'taradi.", "**Benefits principle**: ular politsiya, sud, mudofaa kabi xizmatlardan ko'proq foyda ko'radi (himoya qiladigan mulki ko'p)."], "Ability to pay and greater benefits from public services."),
  r(7, "What is the concept of horizontal equity, and why is it hard to apply?", ["To'lov qobiliyati o'xshashlar bir xil to'lashi kerak.", "Qiyin: oilalar ko'p jihatdan farq qiladi — qaysi farqlar (bolalar, tibbiy xarajat, kontrakt) to'lov qobiliyatiga tegishli ekanini hal qilish kerak (Garcialar va Jacksonlar)."], "Similar taxpayers should pay the same, but deciding which differences matter is hard."),
];

export const problems: Problem[] = [
  p(1, "Using a recent Economic Report of the President: (a) Is the increase in government revenue as a share of income mainly from federal or state and local revenue? (b) How has the composition of total revenue changed — personal income taxes, social insurance taxes, corporate profits taxes?", [
    "(a) Figure 1 bo'yicha o'sishning katta qismi **federal** tushumdan (federal tushum ~2/3).",
    "(b) Umumiy tendensiya: shaxsiy daromad va ayniqsa **ijtimoiy sug'urta (payroll)** soliqlari ulushi oshgan, **korporativ** soliq ulushi kamaygan. (Aniq raqamlar uchun eng yangi hisobotga qarang.)",
  ], "Mostly federal; payroll taxes have grown in importance and corporate taxes have shrunk."),
  p(2, "You pay 4 percent of income in state income tax, 15.3 percent of labor earnings in payroll taxes, and federal income tax as in Table 2. How much of each tax do you pay at $40,000? Average and marginal rates? What happens at $80,000?", [
    "**$40,000**: shtat 0.04 × 40,000 = **$1,600**; payroll 0.153 × 40,000 = **$6,120**; federal (kitob Table 2) 0.10 × 9,875 + 0.15 × 30,125 = **$5,506.25**.",
    "Jami $13,226.25 → o'rtacha **33.1%**; marjinal 4 + 15.3 + 15 = **34.3%**.",
    "**$80,000**: shtat $3,200; payroll $12,240; federal 987.50 + 0.15 × 30,250 + 0.22 × 39,875 = $14,297.50.",
    "Jami $29,737.50 → o'rtacha **37.2%**; marjinal 4 + 15.3 + 22 = **41.3%**. Daromad ikki barobar — soliq ikki barobardan ko'p (progressiv).",
    "Eslatma: kitob Table 2 da 2-pog'ona 15% deb chop etilgan; 2020 qonunida 12% edi.",
  ], "$40k: $13,226 total, 33.1% average, 34.3% marginal. $80k: $29,738, 37.2% average, 41.3% marginal.", "rates"),
  p(3, "Some states exclude necessities, such as food and clothing, from their sales tax. Discuss the merits of this exclusion, considering efficiency and equity.", [
    "**Tenglik**: kambag'allar daromadining katta qismini oziq-ovqat va kiyimga sarflaydi → istisno savdo solig'ini kamroq regressiv qiladi.",
    "**Samaradorlik**: zaruriy tovarlar talabi inelastik → ularga soliq kichik DWL beradi; istisno esa boshqa tovarlarga yuqori stavka talab qiladi (DWL katta) va ma'muriy murakkablik qo'shadi (nima “zaruriy”?).",
  ], "It improves equity but tends to reduce efficiency."),
  p(4, "Before 2018, state and local taxes (SALT) were fully deductible; from 2018 the deduction was capped at $10,000. (a) Who benefited most from the unlimited deduction? (b) Effect on migration? (c) Effect on state and local governments' propensity to raise taxes?", [
    "(a) **Yuqori soliqli shtatlar** (Kaliforniya, Nyu-York) aholisi, ayniqsa boylar.",
    "(b) Cheklov yuqori soliqli shtatlarda yashashni qimmatlashtirdi → ba'zilar past soliqli shtatlarga (Florida, Texas) ko'chishga rag'batlandi.",
    "(c) Shtat solig'ining bir qismi endi federal soliqdan chegirilmagani uchun soliqni oshirish siyosiy jihatdan qiyinlashdi.",
  ], "High-tax-state residents; more migration to low-tax states; less appetite to raise state taxes."),
  p(5, "Serena Saver has accrued capital gains; only realized gains are taxed. (a) How does this affect behavior? (b) How might cuts in capital gains rates, especially temporary ones, raise revenue? (c) Is it a good rule?", [
    "(a) **Lock-in effect**: aktivni sotishni kechiktiradi — soliqni keyinga surish uchun samarasiz ushlab turadi.",
    "(b) Stavka pasaysa (ayniqsa vaqtincha), ko'p odam yig'ilgan daromadni hozir realizatsiya qiladi → realizatsiyalar keskin oshib, tushum oshishi mumkin.",
    "(c) Afzalligi: hisoblash oson (sotilmagan aktivni baholash qiyin, naqd pul yo'q bo'lishi mumkin). Kamchiligi: lock-in buzilishlari va soliqni keyinga surish imkoniyati boylarga foydali. Bu normativ muvozanat.",
  ], "It creates a lock-in incentive; temporary cuts can raise revenue by triggering realizations; there are trade-offs."),
  p(6, "Your state raises its sales tax from 5 to 6 percent. The revenue commissioner forecasts a 20 percent increase in sales tax revenue. Is this plausible?", [
    "Stavka 5 → 6 = **20%** oshish. Tushum 20% oshishi uchun soliq bazasi (sotuvlar) o'zgarmasligi kerak.",
    "Aslida narx oshadi → xaridlar kamayadi, ba'zilar qo'shni shtatda yoki onlayn sotib oladi → tushum **20% dan kam** oshadi. Bashorat — yuqori chegara.",
  ], "Too optimistic — sales will fall, so revenue rises by less than 20 percent."),
  p(7, "The Tax Reform Act of 1986 eliminated the deductibility of interest on consumer debt but kept it for mortgages and home equity loans. What happened to borrowing through consumer debt versus home equity debt?", [
    "Iste'mol qarzi (kredit karta, avtokredit) foizi chegirilmaydi → nisbatan qimmatlashdi.",
    "Uy-joy garovi ostidagi qarz (home equity) foizi chegiriladi → odamlar mashina va boshqa xaridlarni **home equity** krediti bilan moliyalashga o'tdi: iste'mol qarzi kamaydi, home equity qarzi oshdi.",
  ], "Consumer debt fell relative to home equity debt as people substituted toward the deductible form."),
  p(8, "Categorize as the benefits principle or the ability-to-pay principle: (a) entrance fees at national parks; (b) local property taxes supporting elementary and secondary schools; (c) an airport trust fund financed by a tax on each plane ticket.", [
    "(a) **Benefits** — foydalanuvchi to'laydi.",
    "(b) Asosan **ability-to-pay** — mulk qiymatiga qarab, farzandi borlar ham, yo'qlar ham to'laydi (qisman benefits: maktab mulk qiymatini oshiradi).",
    "(c) **Benefits** — uchuvchilar to'laydi va pul aeroportlarga ketadi.",
  ], "(a) benefits (b) ability to pay (c) benefits."),
];
