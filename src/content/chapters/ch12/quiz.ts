import type { Question } from '../../types';

const C = 12;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });
const four = ['moral hazard.', 'adverse selection.', 'uncertainty.', 'externalities.'];

export const quickQuiz: Question[] = [
  mk("ch12.qq.1", "Bozor xususiyatlari", "The market for healthcare differs from most other markets because", [
    { text: "consumers often don't know what they need.", why: "To'g'ri, lekin yagona emas." },
    { text: "producers are paid by insurers rather than consumers.", why: "To'g'ri, lekin yagona emas." },
    { text: "third parties have an interest in outcomes.", why: "To'g'ri, lekin yagona emas." },
    { text: "All of the above", correct: true, why: "Uchala xususiyat ham sog'liqni saqlashni standart modeldan ajratadi." },
  ]),
  mk("ch12.qq.2", "Sug'urta", "People buy health insurance to reduce", four.map((x, i) => ({
    text: x,
    correct: i === 2,
    why: ["Moral hazard sug'urta **keltirib chiqaradigan** muammo.", "Adverse selection ham sug'urta bozorining muammosi.", "Risk averse odamlar noaniqlikni kamaytirish uchun sug'urta oladi.", "Sug'urta tashqi effektlarni hal qilmaydi."][i],
  }))),
  mk("ch12.qq.3", "Kirish qoidalari", "Health insurance has access rules for patients to reduce", four.map((x, i) => ({
    text: x,
    correct: i === 0,
    why: ["Xarajatni sug'urta to'lagani uchun ortiqcha foydalanish — moral hazard; kirish qoidalari uni cheklaydi.", "Adverse selection — kim sotib olishi haqida.", "Kirish qoidalari noaniqlikni kamaytirmaydi.", "Bog'liq emas."][i],
  }))),
  mk("ch12.qq.4", "Adverse selection", "If healthy people are less likely to buy health insurance, the market for health insurance experiences the problem of", four.map((x, i) => ({
    text: x,
    correct: i === 1,
    why: ["Moral hazard — sug'urtadan keyingi xatti-harakat.", "Sug'urtalanganlar aralashmasi kasalroq bo'ladi — adverse selection.", "Bu noaniqlik emas.", "Bu tashqi effekt emas."][i],
  }))),
  mk("ch12.qq.5", "Faktlar", "As a percentage of the economy's total income, U.S. spending on healthcare is ________ it was 50 years ago and ________ it is in other countries.", [
    { text: "much larger than; about the same as", why: "AQSh ~17%, boshqalar 9–12%." },
    { text: "much larger than; much larger than", correct: true, why: "1960-yil 5% → 2019-yil 18%; boshqa rivojlangan davlatlar 9–12%." },
    { text: "about the same as; about the same as", why: "Ulush keskin oshgan." },
    { text: "about the same as; much larger than", why: "Ulush keskin oshgan." },
  ]),
  mk("ch12.qq.6", "Baumol", "Baumol's cost disease arises in a service sector when that sector experiences", [
    { text: "low productivity growth.", correct: true, why: "Boshqa sohalarda maosh oshadi; unumdorligi o'smaydigan sohada maoshni faqat narxni oshirib to'lash mumkin." },
    { text: "high productivity growth.", why: "Aksincha." },
    { text: "low demand growth.", why: "Sabab — unumdorlik." },
    { text: "high demand growth.", why: "Sabab — unumdorlik." },
  ]),
  mk("ch12.qq.7", "Cho'ntakdan to'lov", "Compared with the past, Americans today are paying for a ________ percentage of healthcare out of pocket. This trend ________ the problem of moral hazard.", [
    { text: "larger; increases", why: "Ulush 55% dan 13% ga **tushgan**." },
    { text: "larger; decreases", why: "Ulush tushgan." },
    { text: "smaller; increases", correct: true, why: "Ko'proq qismini sug'urta to'laydi → bemorning tejash rag'bati kamroq → moral hazard kuchayadi." },
    { text: "smaller; decreases", why: "Kamroq to'lash moral hazardni **oshiradi**." },
  ]),
];

export const checks: Record<string, Question> = {
  "s-12-1a": mk("ch12.check.12-1a", "Tashqi effektlar", "Vicki emlansa, nega bu ijobiy tashqi effekt?", [
    { text: "U kasallik tashuvchisi bo'lish ehtimolini kamaytiradi — boshqalar ham himoyalanadi, lekin buning uchun to'lamaydi", correct: true, why: "Shuning uchun bozor yolg'iz qolsa, kam odam emlanadi → davlat majburlaydi, targ'ib qiladi yoki subsidiya beradi." },
    { text: "Vaksina arzon", why: "Narx tashqi effektni belgilamaydi." },
    { text: "Vicki o'zi yutadi", why: "Bu xususiy foyda." },
    { text: "Bu salbiy tashqi effekt", why: "Boshqalarga foyda — ijobiy." },
  ], 'new'),
  "s-12-1b": { id: "ch12.check.12-1b", chapter: C, kind: "tf", source: "new", topic: "Sifat nazorati", prompt: "Ba'zi iqtisodchilar fikricha, yangi tibbiyot maktablarini ochishdagi to'siqlar shifokorlar sonini cheklab, ularning maoshi va sog'liq xarajatlarini oshiradi — kasb monopoliyaga o'xshab ishlaydi.", answer: true, why: "Litsenziyalash bemorlarni himoya qiladi, lekin taklifni ham cheklaydi. FDA sekinligi haqida ham shunday bahs bor." },
  "s-12-1c": { id: "ch12.check.12-1c", chapter: C, kind: "numeric", source: "new", topic: "Sug'urta", prompt: "Kasallik aholining 2% iga uriladi, davolash $30,000. Adolatli premium necha dollar?", answer: 600, tolerance: 0, unit: "$", why: "0.02 × 30,000 = $600.", traps: [{ value: 60000, why: "Bu 100 kishining jami xarajati; kishi boshiga bo'ling." }] },
  "s-12-1d": { id: "ch12.check.12-1d", chapter: C, kind: "tf", source: "new", topic: "Huquq", prompt: "Kitob fikricha, oziq-ovqat ham, sog'liqni saqlash ham hayot uchun zarur, lekin farqi shundaki, so'nggi o'n yilliklarda sog'liq xarajati daromadlardan tezroq o'sgan.", answer: true, why: "Oziq-ovqat narxi daromaddan sekin o'sgan — byudjetdagi ulushi kamaygan; zamonaviy tibbiyot esa ulushi oshib boradi." },
  "s-12-1e": { id: "ch12.check.12-1e", chapter: C, kind: "match", source: "new", topic: "Qoidalar", prompt: "Sug'urtachi bor bozordagi qoidani misoli bilan moslashtiring.", pairs: [
    { left: "Financing rules", right: "Kim qancha to'laydi: soliq yoki premium" },
    { left: "Access rules", right: "Mutaxassisga faqat yo'llanma bilan" },
    { left: "Payment rules", right: "Sug'urtachi qaysi muolajaga qancha to'laydi" },
  ] },
  "s-12-2a": { id: "ch12.check.12-2a", chapter: C, kind: "numeric", source: "new", topic: "Umr", prompt: "AQShda umr ko'rish 1900-yilda 47.3 yil, 2019-yilda 78.8 yil edi. Necha yilga oshgan?", answer: 31.5, tolerance: 0.05, unit: "yil", why: "78.8 − 47.3 = 31.5 (kitob: “taxminan 30 yil”). Asosiy sabablar: tibbiy texnologiya, sanitariya, chekishning kamayishi, avtomobil xavfsizligi." },
  "s-12-2b": { id: "ch12.check.12-2b", chapter: C, kind: "match", source: "new", topic: "Xarajatlar o'sishi", prompt: "Sog'liq xarajati ulushi o'sishining to'rt sababi va izohini moslashtiring.", pairs: [
    { left: "Baumol's cost disease", right: "Unumdorligi o'smaydigan xizmatda ham maosh oshishi kerak" },
    { left: "Medical technology", right: "Yangi muolajalar umrni uzaytiradi, lekin qimmat" },
    { left: "Aging population", right: "65+ yoshlilar ulushi 9% → 17%" },
    { left: "Rising incomes", right: "Daromad elastikligi ≈ 1.3 > 1" },
  ] },
  "s-12-2c": mk("ch12.check.12-2c", "Xalqaro taqqoslash", "Nega AQSh sog'liq tizimi himoyachilari Kanadadagi kabi dori narxlarini nazorat qilishga qarshi?", [
    { text: "Narx nazorati farmatsevtika kompaniyalarining yangi dori tadqiq qilish rag'batini kamaytiradi; boshqa davlatlar AQSh moliyalagan tadqiqotdan free ride qiladi", correct: true, why: "Bugungi arzon narx ertangi kamroq muolaja bilan to'lanadi." },
    { text: "Kanada dorilari sifatsiz", why: "Kitob bunday demaydi." },
    { text: "Narx nazorati narxni oshiradi", why: "Narxni pasaytiradi." },
    { text: "Kanadaliklar dorilarga ko'proq sarflaydi", why: "~30% kamroq." },
  ], 'new'),
  "s-12-2d": mk("ch12.check.12-2d", "Cadillac tax", "“Cadillac tax” nimani tuzatmoqchi edi?", [
    { text: "Ish beruvchi beradigan sug'urta soliqdan ozod — ishchilar naqd pul o'rniga ortiqcha saxiy sug'urtani afzal ko'radi, bu moral hazardni kuchaytiradi", correct: true, why: "Qimmat rejalarga soliq naqd maosh va sug'urta orasidagi “maydonni tekislardi”. 2019-yilda bekor qilingan." },
    { text: "Kasallarni jazolash", why: "Maqsad — soliq imtiyozi tufayli ortiqcha sug'urta." },
    { text: "Shifokorlar maoshini oshirish", why: "Bog'liq emas." },
    { text: "Adverse selection'ni yo'qotish", why: "Asosiy maqsad — ortiqcha sug'urta va moral hazard." },
  ], 'new'),
};

export const practice: Question[] = [
  { id: "ch12.new.spiral-1", chapter: C, kind: "numeric", source: "new", topic: "Problem 4", prompt: "A–E turlarining kutilgan xarajati $1,000, $2,000, $3,000, $4,000, $5,000; kompaniyaga qo'shimcha $700 kerak; hamma bir xil narx to'laydi. Hamma sotib olsa, narx?", answer: 3700, tolerance: 0, unit: "$", why: "O'rtacha 3,000 + 700 = $3,700." },
  { id: "ch12.new.spiral-end", chapter: C, kind: "numeric", source: "new", topic: "Problem 4", prompt: "Odam narx o'z xarajatidan $1,000 dan ko'p oshsa sotib olmaydi. Death spiral oxirida sug'urta narxi?", answer: 5700, tolerance: 0, unit: "$", why: "3,700 → (C, D, E) 4,700 → (D, E) 5,200 → (E) 5,700 — faqat E qoladi; 5,700 − 5,000 = 700 ≤ 1,000 → muvozanat.", traps: [{ value: 5200, why: "Yana bir qadam: E yolg'iz qolganda narx 5,000 + 700." }] },
  { id: "ch12.new.spiral-penalty", chapter: C, kind: "numeric", source: "new", topic: "Problem 4l", prompt: "Mandate ostida (narx $3,700) A turining surplusi −$1,700. Hamma bo'ysunishi uchun jarima kamida qancha bo'lishi kerak?", answer: 1700, tolerance: 0, unit: "$", why: "A sotib olmaslik bilan $1,700 tejaydi → jarima undan katta bo'lishi kerak. Ovoz berishda C, D, E (3/5) mandate tarafdori." },
  mk("ch12.new.price-up", "Problem 2", "Kompaniya oilaviy sug'urta narxini $5,000 dan $6,000 ga oshirmoqchi. Nima bo'lishi mumkin?", [
    { text: "Adverse selection: eng sog'lom oilalar chiqib ketadi, pool kasalroq bo'ladi — foyda albatta oshmaydi", correct: true, why: "Narx oshishi o'rtacha xarajatni ham oshiradi." },
    { text: "Foyda albatta $1,000 × mijozlar soniga oshadi", why: "Mijozlar va ularning aralashmasi o'zgaradi." },
    { text: "Pool sog'lomroq bo'ladi", why: "Aksincha — sog'lomlar ketadi." },
    { text: "Moral hazard yo'qoladi", why: "Bog'liq emas." },
  ], 'new'),
  mk("ch12.new.baumol", "Problem 3", "Faqat sanoatda texnologik yutuq bo'ldi. Xizmatlar narxiga nima bo'ladi?", [
    { text: "Sanoatda maosh ↑ → ba'zi ishchilar sanoatga o'tadi → xizmatlarda mehnat taklifi ↓, maosh ↑ → xarajat ↑ → narx ↑", correct: true, why: "Bu Baumol's cost disease mantiqi." },
    { text: "Tushadi", why: "Xizmatlarda unumdorlik o'smagan." },
    { text: "O'zgarmaydi", why: "Mehnat bozorlari bog'liq." },
    { text: "Faqat sanoat narxi oshadi", why: "Sanoat narxi aslida tushishi mumkin." },
  ], 'new'),
  { id: "ch12.new.mh-q", chapter: C, kind: "numeric", source: "new", topic: "Problem 1", prompt: "Model: talab P = 200 − 2Q, muolaja jamiyatga $100 turadi, sug'urtalangan bemor $20 to'laydi. Bemor nechta muolaja oladi?", answer: 90, tolerance: 0, why: "20 = 200 − 2Q → Q = 90; samarali miqdor (P = 100) — 50. 40 ta muolaja qiymati xarajatdan past — moral hazard.", traps: [{ value: 50, why: "Bu samarali miqdor (bemor to'liq $100 to'laganda)." }] },
  { id: "ch12.new.tf-ate", chapter: C, kind: "tf", source: "new", topic: "Ask the Experts", prompt: "IGM: iqtisodchilarning 88% i sanoatdagi unumdorlik o'sishi ta'lim va sog'liq kabi mehnat talab xizmatlar xarajatini oshiradi degan fikrga qo'shilgan.", answer: true, why: "88% agree, 8% uncertain, 4% disagree (2017). Cadillac tax bo'yicha: 84% agree, 16% uncertain, 0% disagree." },
  mk("ch12.new.uz", "O'zbekistondan misol", "O'zbekistonda majburiy tibbiy sug'urta joriy etilsa va hamma bir xil badal to'lasa, mandate qaysi muammoni yumshatadi?", [
    { text: "Adverse selection — sog'lomlar ham poolda qoladi, narx death spiral'siz past bo'ladi", correct: true, why: "Lekin moral hazard qoladi — co-pay va kirish qoidalari kerak bo'ladi." },
    { text: "Moral hazard", why: "Mandate kim sotib olishini hal qiladi, qanday foydalanishni emas." },
    { text: "Baumol kasalligi", why: "Bog'liq emas." },
    { text: "Barcha muammolarni", why: "Moral hazard va narx o'sishi qoladi." },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
