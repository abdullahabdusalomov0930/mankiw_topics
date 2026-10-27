import type { Question } from '../../types';
import { tr } from '../../../lib/lang';

const C = 12;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });
const four = ['moral hazard.', 'adverse selection.', 'uncertainty.', 'externalities.'];

export const quickQuiz: Question[] = [
  mk("ch12.qq.1", tr("Bozor xususiyatlari", 'Market features'), "The market for healthcare differs from most other markets because", [
    { text: "consumers often don't know what they need.", why: tr("To'g'ri, lekin yagona emas.", 'True, but not the only one.') },
    { text: "producers are paid by insurers rather than consumers.", why: tr("To'g'ri, lekin yagona emas.", 'True, but not the only one.') },
    { text: "third parties have an interest in outcomes.", why: tr("To'g'ri, lekin yagona emas.", 'True, but not the only one.') },
    { text: "All of the above", correct: true, why: tr("Uchala xususiyat ham sog'liqni saqlashni standart modeldan ajratadi.", 'All three features set health care apart from the standard model.') },
  ]),
  mk("ch12.qq.2", tr("Sug'urta", 'Insurance'), "People buy health insurance to reduce", four.map((x, i) => ({
    text: x,
    correct: i === 2,
    why: [tr("Moral hazard sug'urta **keltirib chiqaradigan** muammo.", 'Moral hazard is a problem that insurance **causes**.'), tr("Adverse selection ham sug'urta bozorining muammosi.", 'Adverse selection is also a problem of insurance markets.'), tr("Risk averse odamlar noaniqlikni kamaytirish uchun sug'urta oladi.", 'Risk-averse people buy insurance to reduce uncertainty.'), tr("Sug'urta tashqi effektlarni hal qilmaydi.", "Insurance doesn't solve externalities.")][i],
  }))),
  mk("ch12.qq.3", tr("Kirish qoidalari", 'Access rules'), "Health insurance has access rules for patients to reduce", four.map((x, i) => ({
    text: x,
    correct: i === 0,
    why: [tr("Xarajatni sug'urta to'lagani uchun ortiqcha foydalanish — moral hazard; kirish qoidalari uni cheklaydi.", 'Overuse because insurance pays the cost is moral hazard; access rules limit it.'), tr("Adverse selection — kim sotib olishi haqida.", 'Adverse selection is about who buys.'), tr("Kirish qoidalari noaniqlikni kamaytirmaydi.", "Access rules don't reduce uncertainty."), tr("Bog'liq emas.", 'Unrelated.')][i],
  }))),
  mk("ch12.qq.4", "Adverse selection", "If healthy people are less likely to buy health insurance, the market for health insurance experiences the problem of", four.map((x, i) => ({
    text: x,
    correct: i === 1,
    why: [tr("Moral hazard — sug'urtadan keyingi xatti-harakat.", 'Moral hazard is behavior after being insured.'), tr("Sug'urtalanganlar aralashmasi kasalroq bo'ladi — adverse selection.", 'The mix of the insured becomes sicker — adverse selection.'), tr("Bu noaniqlik emas.", "This isn't uncertainty."), tr("Bu tashqi effekt emas.", "This isn't an externality.")][i],
  }))),
  mk("ch12.qq.5", tr("Faktlar", 'Facts'), "As a percentage of the economy's total income, U.S. spending on healthcare is ________ it was 50 years ago and ________ it is in other countries.", [
    { text: "much larger than; about the same as", why: tr("AQSh ~17%, boshqalar 9–12%.", 'The U.S. ~17%, others 9–12%.') },
    { text: "much larger than; much larger than", correct: true, why: tr("1960-yil 5% → 2019-yil 18%; boshqa rivojlangan davlatlar 9–12%.", '5% in 1960 → 18% in 2019; other advanced countries 9–12%.') },
    { text: "about the same as; about the same as", why: tr("Ulush keskin oshgan.", 'The share rose sharply.') },
    { text: "about the same as; much larger than", why: tr("Ulush keskin oshgan.", 'The share rose sharply.') },
  ]),
  mk("ch12.qq.6", tr("Baumol", 'Baumol'), "Baumol's cost disease arises in a service sector when that sector experiences", [
    { text: "low productivity growth.", correct: true, why: tr("Boshqa sohalarda maosh oshadi; unumdorligi o'smaydigan sohada maoshni faqat narxni oshirib to'lash mumkin.", "Wages rise in other sectors; in a sector whose productivity doesn't grow, higher wages can be paid only by raising prices.") },
    { text: "high productivity growth.", why: tr("Aksincha.", 'The reverse.') },
    { text: "low demand growth.", why: tr("Sabab — unumdorlik.", 'The cause is productivity.') },
    { text: "high demand growth.", why: tr("Sabab — unumdorlik.", 'The cause is productivity.') },
  ]),
  mk("ch12.qq.7", tr("Cho'ntakdan to'lov", 'Out-of-pocket payments'), "Compared with the past, Americans today are paying for a ________ percentage of healthcare out of pocket. This trend ________ the problem of moral hazard.", [
    { text: "larger; increases", why: tr("Ulush 55% dan 13% ga **tushgan**.", 'The share **fell** from 55% to 13%.') },
    { text: "larger; decreases", why: tr("Ulush tushgan.", 'The share fell.') },
    { text: "smaller; increases", correct: true, why: tr("Ko'proq qismini sug'urta to'laydi → bemorning tejash rag'bati kamroq → moral hazard kuchayadi.", 'Insurance pays a larger part → patients have less incentive to economize → moral hazard grows.') },
    { text: "smaller; decreases", why: tr("Kamroq to'lash moral hazardni **oshiradi**.", 'Paying less **increases** moral hazard.') },
  ]),
];

export const checks: Record<string, Question> = {
  "s-12-1a": mk("ch12.check.12-1a", tr("Tashqi effektlar", 'Externalities'), tr("Vicki emlansa, nega bu ijobiy tashqi effekt?", "Why is Vicki's getting vaccinated a positive externality?"), [
    { text: tr("U kasallik tashuvchisi bo'lish ehtimolini kamaytiradi — boshqalar ham himoyalanadi, lekin buning uchun to'lamaydi", "It makes her less likely to carry the disease — others are protected too, but they don't pay for it"), correct: true, why: tr("Shuning uchun bozor yolg'iz qolsa, kam odam emlanadi → davlat majburlaydi, targ'ib qiladi yoki subsidiya beradi.", 'That is why, left alone, the market vaccinates too few people → the government mandates, promotes, or subsidizes vaccination.') },
    { text: tr("Vaksina arzon", 'The vaccine is cheap'), why: tr("Narx tashqi effektni belgilamaydi.", "The price doesn't determine the externality.") },
    { text: tr("Vicki o'zi yutadi", 'Vicki herself gains'), why: tr("Bu xususiy foyda.", "That's a private benefit.") },
    { text: tr("Bu salbiy tashqi effekt", "It's a negative externality"), why: tr("Boshqalarga foyda — ijobiy.", 'A benefit to others — positive.') },
  ], 'new'),
  "s-12-1b": { id: "ch12.check.12-1b", chapter: C, kind: "tf", source: "new", topic: tr("Sifat nazorati", 'Quality control'), prompt: tr("Ba'zi iqtisodchilar fikricha, yangi tibbiyot maktablarini ochishdagi to'siqlar shifokorlar sonini cheklab, ularning maoshi va sog'liq xarajatlarini oshiradi — kasb monopoliyaga o'xshab ishlaydi.", 'Some economists argue that barriers to opening new medical schools limit the number of doctors, raising their pay and health care costs — the profession acts like a monopoly.'), answer: true, why: tr("Litsenziyalash bemorlarni himoya qiladi, lekin taklifni ham cheklaydi. FDA sekinligi haqida ham shunday bahs bor.", "Licensing protects patients but also restricts supply. There's a similar debate about the FDA's slowness.") },
  "s-12-1c": { id: "ch12.check.12-1c", chapter: C, kind: "numeric", source: "new", topic: tr("Sug'urta", 'Insurance'), prompt: tr("Kasallik aholining 2% iga uriladi, davolash $30,000. Adolatli premium necha dollar?", 'An illness strikes 2% of the population and treatment costs $30,000. What is the fair premium in dollars?'), answer: 600, tolerance: 0, unit: "$", why: "0.02 × 30,000 = $600.", traps: [{ value: 60000, why: tr("Bu 100 kishining jami xarajati; kishi boshiga bo'ling.", "That's the total cost for 100 people; divide per person.") }] },
  "s-12-1d": { id: "ch12.check.12-1d", chapter: C, kind: "tf", source: "new", topic: tr("Huquq", 'Entitlement'), prompt: tr("Kitob fikricha, oziq-ovqat ham, sog'liqni saqlash ham hayot uchun zarur, lekin farqi shundaki, so'nggi o'n yilliklarda sog'liq xarajati daromadlardan tezroq o'sgan.", 'According to the book, food and health care are both necessary for life, but the difference is that in recent decades health spending has grown faster than incomes.'), answer: true, why: tr("Oziq-ovqat narxi daromaddan sekin o'sgan — byudjetdagi ulushi kamaygan; zamonaviy tibbiyot esa ulushi oshib boradi.", "Food prices grew more slowly than incomes — their budget share fell; modern medicine's share keeps rising.") },
  "s-12-1e": { id: "ch12.check.12-1e", chapter: C, kind: "match", source: "new", topic: tr("Qoidalar", 'Rules'), prompt: tr("Sug'urtachi bor bozordagi qoidani misoli bilan moslashtiring.", 'Match each rule in a market with an insurer to its example.'), pairs: [
    { left: "Financing rules", right: tr("Kim qancha to'laydi: soliq yoki premium", 'Who pays how much: taxes or premiums') },
    { left: "Access rules", right: tr("Mutaxassisga faqat yo'llanma bilan", 'Specialists only with a referral') },
    { left: "Payment rules", right: tr("Sug'urtachi qaysi muolajaga qancha to'laydi", 'How much the insurer pays for which treatment') },
  ] },
  "s-12-2a": { id: "ch12.check.12-2a", chapter: C, kind: "numeric", source: "new", topic: tr("Umr", 'Longevity'), prompt: tr("AQShda umr ko'rish 1900-yilda 47.3 yil, 2019-yilda 78.8 yil edi. Necha yilga oshgan?", 'U.S. life expectancy was 47.3 years in 1900 and 78.8 in 2019. By how many years did it rise?'), answer: 31.5, tolerance: 0.05, unit: tr("yil", "years"), why: tr("78.8 − 47.3 = 31.5 (kitob: “taxminan 30 yil”). Asosiy sabablar: tibbiy texnologiya, sanitariya, chekishning kamayishi, avtomobil xavfsizligi.", '78.8 − 47.3 = 31.5 (the book: “about 30 years”). The main causes: medical technology, sanitation, less smoking, car safety.') },
  "s-12-2b": { id: "ch12.check.12-2b", chapter: C, kind: "match", source: "new", topic: tr("Xarajatlar o'sishi", 'Rising spending'), prompt: tr("Sog'liq xarajati ulushi o'sishining to'rt sababi va izohini moslashtiring.", 'Match the four reasons for the rising health spending share with their explanations.'), pairs: [
    { left: "Baumol's cost disease", right: tr("Unumdorligi o'smaydigan xizmatda ham maosh oshishi kerak", "Wages must rise even in services whose productivity doesn't grow") },
    { left: "Medical technology", right: tr("Yangi muolajalar umrni uzaytiradi, lekin qimmat", 'New treatments extend life but are expensive') },
    { left: "Aging population", right: tr("65+ yoshlilar ulushi 9% → 17%", 'The 65+ share 9% → 17%') },
    { left: "Rising incomes", right: tr("Daromad elastikligi ≈ 1.3 > 1", 'Income elasticity ≈ 1.3 > 1') },
  ] },
  "s-12-2c": mk("ch12.check.12-2c", tr("Xalqaro taqqoslash", 'International comparison'), tr("Nega AQSh sog'liq tizimi himoyachilari Kanadadagi kabi dori narxlarini nazorat qilishga qarshi?", 'Why do defenders of the U.S. health system oppose controlling drug prices as Canada does?'), [
    { text: tr("Narx nazorati farmatsevtika kompaniyalarining yangi dori tadqiq qilish rag'batini kamaytiradi; boshqa davlatlar AQSh moliyalagan tadqiqotdan free ride qiladi", "Price controls reduce drug companies' incentive to research new drugs; other countries free ride on research funded by the U.S."), correct: true, why: tr("Bugungi arzon narx ertangi kamroq muolaja bilan to'lanadi.", "Today's low prices are paid for with fewer treatments tomorrow.") },
    { text: tr("Kanada dorilari sifatsiz", 'Canadian drugs are low quality'), why: tr("Kitob bunday demaydi.", "The book doesn't say that.") },
    { text: tr("Narx nazorati narxni oshiradi", 'Price controls raise prices'), why: tr("Narxni pasaytiradi.", 'They lower prices.') },
    { text: tr("Kanadaliklar dorilarga ko'proq sarflaydi", 'Canadians spend more on drugs'), why: tr("~30% kamroq.", '~30% less.') },
  ], 'new'),
  "s-12-2d": mk("ch12.check.12-2d", tr("Cadillac tax", 'Cadillac tax'), tr("“Cadillac tax” nimani tuzatmoqchi edi?", 'What was the “Cadillac tax” meant to fix?'), [
    { text: tr("Ish beruvchi beradigan sug'urta soliqdan ozod — ishchilar naqd pul o'rniga ortiqcha saxiy sug'urtani afzal ko'radi, bu moral hazardni kuchaytiradi", 'Employer-provided insurance is tax-exempt — workers prefer overly generous insurance to cash, which worsens moral hazard'), correct: true, why: tr("Qimmat rejalarga soliq naqd maosh va sug'urta orasidagi “maydonni tekislardi”. 2019-yilda bekor qilingan.", 'A tax on expensive plans would have “leveled the playing field” between cash wages and insurance. It was repealed in 2019.') },
    { text: tr("Kasallarni jazolash", 'Punishing the sick'), why: tr("Maqsad — soliq imtiyozi tufayli ortiqcha sug'urta.", 'The goal was excessive insurance caused by the tax break.') },
    { text: tr("Shifokorlar maoshini oshirish", "Raising doctors' pay"), why: tr("Bog'liq emas.", 'Unrelated.') },
    { text: tr("Adverse selection'ni yo'qotish", 'Eliminating adverse selection'), why: tr("Asosiy maqsad — ortiqcha sug'urta va moral hazard.", 'The main goal was excessive insurance and moral hazard.') },
  ], 'new'),
};

export const practice: Question[] = [
  { id: "ch12.new.spiral-1", chapter: C, kind: "numeric", source: "new", topic: "Problem 4", prompt: tr("A–E turlarining kutilgan xarajati $1,000, $2,000, $3,000, $4,000, $5,000; kompaniyaga qo'shimcha $700 kerak; hamma bir xil narx to'laydi. Hamma sotib olsa, narx?", 'Expected costs of types A–E are $1,000, $2,000, $3,000, $4,000, $5,000; the company needs an extra $700; everyone pays the same price. If everyone buys, what is the price?'), answer: 3700, tolerance: 0, unit: "$", why: tr("O'rtacha 3,000 + 700 = $3,700.", 'Average 3,000 + 700 = $3,700.') },
  { id: "ch12.new.spiral-end", chapter: C, kind: "numeric", source: "new", topic: "Problem 4", prompt: tr("Odam narx o'z xarajatidan $1,000 dan ko'p oshsa sotib olmaydi. Death spiral oxirida sug'urta narxi?", "A person won't buy if the price exceeds their cost by more than $1,000. What is the price of insurance at the end of the death spiral?"), answer: 5700, tolerance: 0, unit: "$", why: tr("3,700 → (C, D, E) 4,700 → (D, E) 5,200 → (E) 5,700 — faqat E qoladi; 5,700 − 5,000 = 700 ≤ 1,000 → muvozanat.", '3,700 → (C, D, E) 4,700 → (D, E) 5,200 → (E) 5,700 — only E remains; 5,700 − 5,000 = 700 ≤ 1,000 → equilibrium.'), traps: [{ value: 5200, why: tr("Yana bir qadam: E yolg'iz qolganda narx 5,000 + 700.", 'One more step: with E alone the price is 5,000 + 700.') }] },
  { id: "ch12.new.spiral-penalty", chapter: C, kind: "numeric", source: "new", topic: "Problem 4l", prompt: tr("Mandate ostida (narx $3,700) A turining surplusi −$1,700. Hamma bo'ysunishi uchun jarima kamida qancha bo'lishi kerak?", "Under a mandate (price $3,700) type A's surplus is −$1,700. At least how large must the penalty be for everyone to comply?"), answer: 1700, tolerance: 0, unit: "$", why: tr("A sotib olmaslik bilan $1,700 tejaydi → jarima undan katta bo'lishi kerak. Ovoz berishda C, D, E (3/5) mandate tarafdori.", 'A saves $1,700 by not buying → the penalty must exceed that. In a vote, C, D, E (3/5) favor the mandate.') },
  mk("ch12.new.price-up", "Problem 2", tr("Kompaniya oilaviy sug'urta narxini $5,000 dan $6,000 ga oshirmoqchi. Nima bo'lishi mumkin?", 'A company wants to raise the price of family insurance from $5,000 to $6,000. What might happen?'), [
    { text: tr("Adverse selection: eng sog'lom oilalar chiqib ketadi, pool kasalroq bo'ladi — foyda albatta oshmaydi", "Adverse selection: the healthiest families drop out, the pool gets sicker — profit won't necessarily rise"), correct: true, why: tr("Narx oshishi o'rtacha xarajatni ham oshiradi.", 'A higher price also raises the average cost.') },
    { text: tr("Foyda albatta $1,000 × mijozlar soniga oshadi", 'Profit will certainly rise by $1,000 × the number of customers'), why: tr("Mijozlar va ularning aralashmasi o'zgaradi.", 'The customers and their mix change.') },
    { text: tr("Pool sog'lomroq bo'ladi", 'The pool gets healthier'), why: tr("Aksincha — sog'lomlar ketadi.", 'The reverse — the healthy leave.') },
    { text: tr("Moral hazard yo'qoladi", 'Moral hazard disappears'), why: tr("Bog'liq emas.", 'Unrelated.') },
  ], 'new'),
  mk("ch12.new.baumol", "Problem 3", tr("Faqat sanoatda texnologik yutuq bo'ldi. Xizmatlar narxiga nima bo'ladi?", 'Only manufacturing has a technological advance. What happens to the price of services?'), [
    { text: tr("Sanoatda maosh ↑ → ba'zi ishchilar sanoatga o'tadi → xizmatlarda mehnat taklifi ↓, maosh ↑ → xarajat ↑ → narx ↑", 'Manufacturing wages ↑ → some workers move to manufacturing → labor supply in services ↓, wages ↑ → costs ↑ → prices ↑'), correct: true, why: tr("Bu Baumol's cost disease mantiqi.", "This is the logic of Baumol's cost disease.") },
    { text: tr("Tushadi", 'It falls'), why: tr("Xizmatlarda unumdorlik o'smagan.", "Productivity in services didn't grow.") },
    { text: tr("O'zgarmaydi", "It doesn't change"), why: tr("Mehnat bozorlari bog'liq.", 'Labor markets are linked.') },
    { text: tr("Faqat sanoat narxi oshadi", 'Only manufacturing prices rise'), why: tr("Sanoat narxi aslida tushishi mumkin.", 'Manufacturing prices may actually fall.') },
  ], 'new'),
  { id: "ch12.new.mh-q", chapter: C, kind: "numeric", source: "new", topic: "Problem 1", prompt: tr("Model: talab P = 200 − 2Q, muolaja jamiyatga $100 turadi, sug'urtalangan bemor $20 to'laydi. Bemor nechta muolaja oladi?", 'A model: demand P = 200 − 2Q, a treatment costs society $100, an insured patient pays $20. How many treatments does the patient get?'), answer: 90, tolerance: 0, why: tr("20 = 200 − 2Q → Q = 90; samarali miqdor (P = 100) — 50. 40 ta muolaja qiymati xarajatdan past — moral hazard.", '20 = 200 − 2Q → Q = 90; the efficient quantity (P = 100) is 50. 40 treatments are worth less than their cost — moral hazard.'), traps: [{ value: 50, why: tr("Bu samarali miqdor (bemor to'liq $100 to'laganda).", "That's the efficient quantity (when the patient pays the full $100).") }] },
  { id: "ch12.new.tf-ate", chapter: C, kind: "tf", source: "new", topic: "Ask the Experts", prompt: tr("IGM: iqtisodchilarning 88% i sanoatdagi unumdorlik o'sishi ta'lim va sog'liq kabi mehnat talab xizmatlar xarajatini oshiradi degan fikrga qo'shilgan.", 'IGM: 88% of economists agreed that productivity growth in manufacturing raises the cost of labor-intensive services such as education and health care.'), answer: true, why: "88% agree, 8% uncertain, 4% disagree (2017). Cadillac tax bo'yicha: 84% agree, 16% uncertain, 0% disagree." },
  mk("ch12.new.uz", tr("O'zbekistondan misol", 'An example from Uzbekistan'), tr("O'zbekistonda majburiy tibbiy sug'urta joriy etilsa va hamma bir xil badal to'lasa, mandate qaysi muammoni yumshatadi?", 'If Uzbekistan introduces mandatory health insurance and everyone pays the same premium, which problem does the mandate ease?'), [
    { text: tr("Adverse selection — sog'lomlar ham poolda qoladi, narx death spiral'siz past bo'ladi", 'Adverse selection — the healthy stay in the pool too, and the price stays low without a death spiral'), correct: true, why: tr("Lekin moral hazard qoladi — co-pay va kirish qoidalari kerak bo'ladi.", 'But moral hazard remains — co-pays and access rules will be needed.') },
    { text: "Moral hazard", why: tr("Mandate kim sotib olishini hal qiladi, qanday foydalanishni emas.", 'A mandate decides who buys, not how care is used.') },
    { text: tr("Baumol kasalligi", "Baumol's disease"), why: tr("Bog'liq emas.", 'Unrelated.') },
    { text: tr("Barcha muammolarni", 'All the problems'), why: tr("Moral hazard va narx o'sishi qoladi.", 'Moral hazard and rising prices remain.') },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
