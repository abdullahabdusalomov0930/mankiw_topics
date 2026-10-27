import type { Question } from '../../types';

const C = 19;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch19.qq.1", "Daromad taqsimoti", "Approximately what percentage of U.S. national income is paid to workers rather than to owners of capital and land?", [
    { text: "25 percent", why: "Ishchilar milliy daromadning katta qismini oladi." },
    { text: "45 percent", why: "Ko'proq." },
    { text: "65 percent", correct: true, why: "~⅔ ish haqi va qo'shimcha imtiyozlar (2021-yil milliy daromad ~$20 trln)." },
    { text: "85 percent", why: "Juda ko'p." },
  ]),
  mk("ch19.qq.2", "Mehnatga talab", "If firms are competitive and profit-maximizing, the demand curve for labor is determined by", [
    { text: "the opportunity cost of workers' time.", why: "Bu taklif tomoni." },
    { text: "the value of the marginal product of labor.", correct: true, why: "VMPL egri chizig'i — mehnatga talab." },
    { text: "the value of the marginal product of capital.", why: "Bu kapitalga talab." },
    { text: "the ratio of the marginal product of labor to the marginal product of capital.", why: "Kitob qoidasi — VMPL = W." },
  ]),
  mk("ch19.qq.3", "Yollash qoidasi", "A bakery operating in competitive markets sells its output for $20 per cake and pays workers $10 per hour. To maximize profit, it should hire workers until the marginal product of labor is", [
    { text: "1/2 cake per hour.", correct: true, why: "20 × MPL = 10 → MPL = ½." },
    { text: "2 cakes per hour.", why: "Teskari bo'lindi (20/10)." },
    { text: "10 cakes per hour.", why: "Hisob xato." },
    { text: "15 cakes per hour.", why: "Hisob xato." },
  ]),
  mk("ch19.qq.4", "Imkoniyat xarajati", "Who has a greater opportunity cost of leisure — janitors or surgeons?", [
    { text: "janitors because their wages are lower", why: "Past maosh — arzon dam olish." },
    { text: "surgeons because their wages are higher", correct: true, why: "Dam olish soatining narxi — boy berilgan ish haqi." },
    { text: "whoever has the greater income effect", why: "Imkoniyat xarajati — ish haqi." },
    { text: "whoever has the greater substitution effect", why: "Imkoniyat xarajati — ish haqi." },
  ]),
  mk("ch19.qq.5", "Mehnat taklifi", "A person works more hours at a higher wage if the substitution effect", [
    { text: "equals zero.", why: "Unda income effect ustun — kamroq ishlaydi." },
    { text: "equals the income effect.", why: "Unda soatlar o'zgarmaydi." },
    { text: "is smaller than the income effect.", why: "Unda kamroq ishlaydi (orqaga egilgan taklif)." },
    { text: "is larger than the income effect.", correct: true, why: "Taklif yuqoriga qaragan." },
  ]),
  mk("ch19.qq.6", "Taklif siljishi", "Which of the following events will shift the labor supply curve to the right?", [
    { text: "More dads leave the workforce to spend time raising children.", why: "Taklif chapga." },
    { text: "Great new video games are introduced, enhancing the value of leisure.", why: "Dam olish jozibador — taklif chapga." },
    { text: "Relaxed immigration laws allow more workers to come in from abroad.", correct: true, why: "Ko'proq ishchi — taklif o'ngga." },
    { text: "Government benefits for the retired are increased.", why: "Nafaqaga chiqish rag'bati — taklif chapga." },
  ]),
  mk("ch19.qq.7", "Talab siljishi", "A technological advance that increases the marginal product of labor shifts the labor-___ curve to the ___.", [
    { text: "demand; left", why: "MPL ↑ → VMPL ↑ → o'ngga." },
    { text: "demand; right", correct: true, why: "VMPL egri chizig'i — talab; u yuqoriga/o'ngga." },
    { text: "supply; left", why: "Bu talab tomoni." },
    { text: "supply; right", why: "Bu talab tomoni." },
  ]),
  mk("ch19.qq.8", "Unumdorlik", "Around 1973, the U.S. economy experienced a significant ___ in productivity growth, coupled with a ___ in the growth of real wages.", [
    { text: "pickup; pickup", why: "Sekinlashuv bo'lgan." },
    { text: "pickup; slowdown", why: "Ikkalasi birga harakatlanadi." },
    { text: "slowdown; pickup", why: "Ikkalasi birga harakatlanadi." },
    { text: "slowdown; slowdown", correct: true, why: "Figure 7: 1960–73 da 2.9%/2.7%, 1973–95 da 1.5%/1.2%." },
  ]),
  mk("ch19.qq.9", "Kapital", "A bakery sells its output for $20 per cake and rents ovens at $30 per hour. To maximize profit, it should rent ovens until the marginal product of an oven is", [
    { text: "2/3 cake per hour.", why: "Teskari (20/30)." },
    { text: "3/2 cakes per hour.", correct: true, why: "20 × MP = 30 → MP = 1.5." },
    { text: "10 cakes per hour.", why: "Hisob xato." },
    { text: "25 cakes per hour.", why: "Hisob xato." },
  ]),
  mk("ch19.qq.10", "Omillar bog'liqligi", "A storm destroys several factories, reducing the stock of capital. What effect does this event have on factor markets?", [
    { text: "Wages and the rental price of capital both rise.", why: "Kam kapital — ishchilar MP i tushadi." },
    { text: "Wages and the rental price of capital both fall.", why: "Kapital kam — uning ijarasi oshadi." },
    { text: "Wages rise, and the rental price of capital falls.", why: "Teskari." },
    { text: "Wages fall, and the rental price of capital rises.", correct: true, why: "Kam kapital: uning MP i ↑ (ijara ↑); ishchilarning MP i ↓ (ish haqi ↓)." },
  ]),
];

export const checks: Record<string, Question> = {
  "s-19-1a": { id: "ch19.check.19-1a", chapter: C, kind: "tf", source: "new", topic: "Hosila talab", prompt: "Dasturchilarga talab dasturiy ta'minot taklifidan kelib chiqadi — bu derived demand.", answer: true, why: "Resurslarga talab ular yordamida ishlab chiqariladigan tovar bozoridan kelib chiqadi." },
  "s-19-1b": { id: "ch19.check.19-1b", chapter: C, kind: "numeric", source: "new", topic: "MPL", prompt: "Table 1: 3 ishchi — 240, 4 ishchi — 280 bushel. 4-ishchining MPL i?", answer: 40, tolerance: 0, unit: "bushel", why: "280 − 240 = 40 — kamayuvchi marjinal mahsulot (100, 80, 60, 40, 20)." },
  "s-19-1c": { id: "ch19.check.19-1c", chapter: C, kind: "numeric", source: "new", topic: "VMP", prompt: "Olma $10, ish haqi $500. Table 1 bo'yicha nechta ishchi yollanadi?", answer: 3, tolerance: 0, why: "VMP: 1,000, 800, 600, 400 → 4-ishchi $400 < $500 → 3 ishchi.", traps: [{ value: 4, why: "4-ishchi VMP $400 < $500 — foydani $100 kamaytiradi." }] },
  "s-19-1d": mk("ch19.check.19-1d", "Talab siljishi", "Arzon sanoat robotlari ixtiro qilindi va ishchilar MP ini kamaytirdi. Bu qanday texnologik o'zgarish va mehnatga talab qayoqqa siljiydi?", [
    { text: "Labor-saving — talab chapga", correct: true, why: "Tarixda ko'proq labor-augmenting o'zgarishlar (mixlash pistoleti) — talab o'ngga." },
    { text: "Labor-augmenting — talab o'ngga", why: "MP kamaygan." },
    { text: "Taklif chapga", why: "Bu talab tomoni." },
    { text: "Hech narsa", why: "VMPL o'zgardi." },
  ], 'new'),
  "s-19-2a": mk("ch19.check.19-2a", "Ish va dam olish", "Maoshingiz $20 dan $25 ga oshdi va siz kamroq ishlay boshladingiz. Qaysi effekt ustun?", [
    { text: "Income effect — boyroq bo'lib, ko'proq dam olishga qodirsiz", correct: true, why: "Substitution effect (dam olish qimmatladi) ko'proq ishlashga undaydi; bu yerda income effect ustun — orqaga egilgan taklif." },
    { text: "Substitution effect", why: "U ko'proq ishlashga undaydi." },
    { text: "Ikkalasi teng", why: "Unda soatlar o'zgarmaydi." },
    { text: "Hech biri", why: "Soatlar o'zgardi." },
  ], 'new'),
  "s-19-2b": { id: "ch19.check.19-2b", chapter: C, kind: "match", source: "new", topic: "Taklif siljishi", prompt: "Hodisani mehnat taklifi siljish sababi bilan moslashtiring.", pairs: [
    { left: "Ayollar ishtiroki 34% (1950) → 56% (2020)", right: "Didlar o'zgarishi" },
    { left: "Nok teruvchilar maoshi oshdi", right: "Muqobil imkoniyatlar" },
    { left: "Mavsumiy ishchilar kuzgi hosilga keladi", right: "Immigratsiya / migratsiya" },
  ] },
  "s-19-3a": mk("ch19.check.19-3a", "Taklif siljishi", "Isroil 1988-yilda falastinlik ishchilar oqimini cheklaganda nima bo'ldi (Angrist)?", [
    { text: "Ishlagan falastinliklar soni yarmiga kamaydi, qolganlarining maoshi ~50% oshdi — VMP oshdi", correct: true, why: "Taklif chapga → W va VMP yuqoriga." },
    { text: "Maoshlar tushdi", why: "Taklif kamaydi." },
    { text: "Bandlik oshdi", why: "Ishchilar kamaydi." },
    { text: "Hech narsa o'zgarmadi", why: "Nazariya bashorati tasdiqlandi." },
  ], 'new'),
  "s-19-3b": { id: "ch19.check.19-3b", chapter: C, kind: "tf", source: "new", topic: "Talab siljishi", prompt: "Olma narxi oshsa, olma ishlab chiqaruvchilarning foydasi ham, olma teruvchilarning maoshi ham oshadi.", answer: true, why: "VMP oshadi → mehnatga talab o'ngga. Neft konchilari maoshi ham neft narxiga bog'liq." },
  "s-19-4a": mk("ch19.check.19-4a", "Kapital", "Yer yoki kapitalning sotib olish narxi nimaga bog'liq?", [
    { text: "Hozirgi va kelajakda kutilayotgan VMP ga (ijara daromadlari oqimiga)", correct: true, why: "Ijara narxi — hozirgi VMP; sotib olish narxi — butun kelajakdagi ijara oqimi." },
    { text: "Faqat bugungi ijaraga", why: "Kelajak ham muhim." },
    { text: "Ish haqiga", why: "Bevosita emas." },
    { text: "Hech narsaga", why: "Ijara oqimiga bog'liq." },
  ], 'new'),
  "s-19-4b": mk("ch19.check.19-4b", "Black Death", "XIV asrda vabo aholining ~⅓ ini o'ldirdi. Ish haqi va yer ijarasiga nima bo'ldi?", [
    { text: "Ish haqi ~2 barobar oshdi, ijara 50% dan ko'p kamaydi", correct: true, why: "Kam ishchi → MPL ↑; har bir yer birligiga kam ishchi → yerning MP i ↓." },
    { text: "Ikkalasi oshdi", why: "Yerning MP i tushdi." },
    { text: "Ikkalasi tushdi", why: "Ishchilarning MP i oshdi." },
    { text: "Ish haqi tushdi", why: "Ishchilar kam bo'ldi." },
  ], 'new'),
};

export const practice: Question[] = [
  { id: "ch19.new.p3", chapter: C, kind: "numeric", source: "new", topic: "Problem 3", prompt: "Mahsulot: 0, 7, 13, 19, 25, 28, 29, 29 (0–7 kun); narx $10. Kunlik ish haqi $40 bo'lsa, necha kun mehnat yollanadi?", answer: 4, tolerance: 0, why: "MP: 7, 6, 6, 6, 3, 1, 0 → VMP: 70, 60, 60, 60, 30, 10, 0 → $40 dan katta: 4 ta.", traps: [{ value: 5, why: "5-kun VMP $30 < $40." }] },
  { id: "ch19.new.robots", chapter: C, kind: "numeric", source: "new", topic: "Problem 4", prompt: "Smiling Cow: sut $4/gallon, robot ijarasi $100/kun; mahsulot 0, 50, 85, 115, 140, 150, 155. 4-robotning VMP i?", answer: 100, tolerance: 0, unit: "$", why: "MP 25 × $4 = $100 = ijara → 3 yoki 4 robot farqsiz (5-robot VMP $40). Firma ikkala bozorda ham price taker." },
  { id: "ch19.new.ectenia", chapter: C, kind: "numeric", source: "new", topic: "Problem 5", prompt: "Ectenia: 20 bog', Q = 100L − L², olma $2, 200 ishchi (inelastik). Muvozanat kunlik ish haqi?", answer: 160, tolerance: 0, unit: "$", why: "Bog' talabi L = 50 − W/4; bozor 1000 − 5W = 200 → W = 160. Narx $4 bo'lsa W = 320; 10 bog' qolsa W = 120." },
  { id: "ch19.new.uncle", chapter: C, kind: "numeric", source: "new", topic: "Problem 6", prompt: "Amaki sendvich do'koni: ishchilar $12/soat, sendvich $6. Oxirgi ishchining MP i (soatiga sendvich)?", answer: 2, tolerance: 0, why: "VMP = W = $12 → MP = 12/6 = 2." },
  { id: "ch19.new.leadbelly", chapter: C, kind: "numeric", source: "new", topic: "Problem 7", prompt: "Leadbelly: ish haqi $150/kun, oxirgi ishchi MP i 30 quti qalam. Bir quti narxi?", answer: 5, tolerance: 0, unit: "$", why: "P × 30 = 150 → P = $5." },
  { id: "ch19.new.cobb", chapter: C, kind: "numeric", source: "new", topic: "Problem 9", prompt: "Y = AK^⅓L^⅔, P = 2, A = 3, K = 1,000,000, L = 1,000. Nominal ish haqi W?", answer: 40, tolerance: 0, unit: "$", why: "MPL = (2/3)·3·(1000)^⅓ = 20 → W = P × MPL = 40; mehnat ulushi doim ⅔." },
  mk("ch19.new.benefits", "Problem 8", "Qonun har bir ish soati uchun $3 imtiyoz (fringe benefit) talab qiladi. Naqd ish haqi o'qida mehnatga talab qayoqqa siljiydi?", [
    { text: "$3 ga pastga — firma uchun har bir ishchi $3 qimmatlashdi; naqd ish haqi tushadi, bandlik kamayadi (ishchilar imtiyozni qadrlasa, taklif ham o'ngga siljib, bandlik ta'sirini kamaytiradi)", correct: true, why: "Eng kam ish haqi bo'lganlar uchun naqd ish haqi tushmaydi → bandlik ko'proq kamayadi." },
    { text: "Yuqoriga", why: "Mehnat qimmatlashdi." },
    { text: "Siljimaydi", why: "Firmaning marjinal foydasi o'zgardi." },
    { text: "Faqat taklif siljiydi", why: "Talab ham." },
  ], 'new'),
  { id: "ch19.new.ate", chapter: C, kind: "tf", source: "new", topic: "Ask the Experts", prompt: "IGM (2013): iqtisodchilarning 95% i yuqori malakali chet ellik ishchilarning ko'proq immigratsiyasi o'rtacha AQSh fuqarosini yaxshilaydi degan fikrga qo'shilgan.", answer: true, why: "95% agree. Kam malakali immigrantlar haqida: 63% agree (o'rtacha fuqaro yutadi), lekin 60% kam malakali amerikaliklar kompensatsiyasiz yutqazadi degan." },
  mk("ch19.new.uz", "O'zbekistondan misol", "Ko'p o'zbekistonliklar Rossiya va Koreyada ishlaydi. Bu O'zbekistondagi qolgan ishchilar maoshiga qanday ta'sir qilishi mumkin?", [
    { text: "Mamlakat ichida mehnat taklifi kamayadi → ichki maoshlar va qolgan ishchilarning VMP i oshishga intiladi; qabul qiluvchi mamlakatda esa aksincha", correct: true, why: "Immigratsiya — chiqish mamlakatida taklif chapga, kelish mamlakatida o'ngga (general equilibrium effektlari ham bor: pul o'tkazmalari talabni oshiradi)." },
    { text: "Ichki maoshlar tushadi", why: "Taklif kamaydi." },
    { text: "Hech qanday ta'sir yo'q", why: "Taklif o'zgardi." },
    { text: "Faqat talab o'zgaradi", why: "Asosan taklif." },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
