import type { Question } from '../../types';
import { tr } from '../../../lib/lang';

const C = 19;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch19.qq.1", tr("Daromad taqsimoti", 'The distribution of income'), "Approximately what percentage of U.S. national income is paid to workers rather than to owners of capital and land?", [
    { text: "25 percent", why: tr("Ishchilar milliy daromadning katta qismini oladi.", 'Workers get the largest share of national income.') },
    { text: "45 percent", why: tr("Ko'proq.", 'More.') },
    { text: "65 percent", correct: true, why: tr("~⅔ ish haqi va qo'shimcha imtiyozlar (2021-yil milliy daromad ~$20 trln).", '~⅔ in wages and fringe benefits (2021 national income ~$20 trillion).') },
    { text: "85 percent", why: tr("Juda ko'p.", 'Far too much.') },
  ]),
  mk("ch19.qq.2", tr("Mehnatga talab", 'Labor demand'), "If firms are competitive and profit-maximizing, the demand curve for labor is determined by", [
    { text: "the opportunity cost of workers' time.", why: tr("Bu taklif tomoni.", "That's the supply side.") },
    { text: "the value of the marginal product of labor.", correct: true, why: tr("VMPL egri chizig'i — mehnatga talab.", 'The VMPL curve is the demand for labor.') },
    { text: "the value of the marginal product of capital.", why: tr("Bu kapitalga talab.", "That's the demand for capital.") },
    { text: "the ratio of the marginal product of labor to the marginal product of capital.", why: tr("Kitob qoidasi — VMPL = W.", "The book's rule is VMPL = W.") },
  ]),
  mk("ch19.qq.3", tr("Yollash qoidasi", 'The hiring rule'), "A bakery operating in competitive markets sells its output for $20 per cake and pays workers $10 per hour. To maximize profit, it should hire workers until the marginal product of labor is", [
    { text: "1/2 cake per hour.", correct: true, why: tr("20 × MPL = 10 → MPL = ½.", '20 × MPL = 10 → MPL = ½.') },
    { text: "2 cakes per hour.", why: tr("Teskari bo'lindi (20/10).", 'Divided the wrong way (20/10).') },
    { text: "10 cakes per hour.", why: tr("Hisob xato.", 'A calculation error.') },
    { text: "15 cakes per hour.", why: tr("Hisob xato.", 'A calculation error.') },
  ]),
  mk("ch19.qq.4", tr("Imkoniyat xarajati", 'Opportunity cost'), "Who has a greater opportunity cost of leisure — janitors or surgeons?", [
    { text: "janitors because their wages are lower", why: tr("Past maosh — arzon dam olish.", 'A low wage — cheap leisure.') },
    { text: "surgeons because their wages are higher", correct: true, why: tr("Dam olish soatining narxi — boy berilgan ish haqi.", 'The price of an hour of leisure is the forgone wage.') },
    { text: "whoever has the greater income effect", why: tr("Imkoniyat xarajati — ish haqi.", 'The opportunity cost is the wage.') },
    { text: "whoever has the greater substitution effect", why: tr("Imkoniyat xarajati — ish haqi.", 'The opportunity cost is the wage.') },
  ]),
  mk("ch19.qq.5", tr("Mehnat taklifi", 'Labor supply'), "A person works more hours at a higher wage if the substitution effect", [
    { text: "equals zero.", why: tr("Unda income effect ustun — kamroq ishlaydi.", 'Then the income effect dominates — they work less.') },
    { text: "equals the income effect.", why: tr("Unda soatlar o'zgarmaydi.", "Then hours don't change.") },
    { text: "is smaller than the income effect.", why: tr("Unda kamroq ishlaydi (orqaga egilgan taklif).", 'Then they work less (backward-bending supply).') },
    { text: "is larger than the income effect.", correct: true, why: tr("Taklif yuqoriga qaragan.", 'Supply slopes up.') },
  ]),
  mk("ch19.qq.6", tr("Taklif siljishi", 'Supply shifts'), "Which of the following events will shift the labor supply curve to the right?", [
    { text: "More dads leave the workforce to spend time raising children.", why: tr("Taklif chapga.", 'Supply shifts left.') },
    { text: "Great new video games are introduced, enhancing the value of leisure.", why: tr("Dam olish jozibador — taklif chapga.", 'Leisure is attractive — supply shifts left.') },
    { text: "Relaxed immigration laws allow more workers to come in from abroad.", correct: true, why: tr("Ko'proq ishchi — taklif o'ngga.", 'More workers — supply shifts right.') },
    { text: "Government benefits for the retired are increased.", why: tr("Nafaqaga chiqish rag'bati — taklif chapga.", 'An incentive to retire — supply shifts left.') },
  ]),
  mk("ch19.qq.7", tr("Talab siljishi", 'Demand shifts'), "A technological advance that increases the marginal product of labor shifts the labor-___ curve to the ___.", [
    { text: "demand; left", why: tr("MPL ↑ → VMPL ↑ → o'ngga.", 'MPL ↑ → VMPL ↑ → right.') },
    { text: "demand; right", correct: true, why: tr("VMPL egri chizig'i — talab; u yuqoriga/o'ngga.", 'The VMPL curve is demand; it shifts up/right.') },
    { text: "supply; left", why: tr("Bu talab tomoni.", "That's the demand side.") },
    { text: "supply; right", why: tr("Bu talab tomoni.", "That's the demand side.") },
  ]),
  mk("ch19.qq.8", tr("Unumdorlik", 'Productivity'), "Around 1973, the U.S. economy experienced a significant ___ in productivity growth, coupled with a ___ in the growth of real wages.", [
    { text: "pickup; pickup", why: tr("Sekinlashuv bo'lgan.", 'There was a slowdown.') },
    { text: "pickup; slowdown", why: tr("Ikkalasi birga harakatlanadi.", 'The two move together.') },
    { text: "slowdown; pickup", why: tr("Ikkalasi birga harakatlanadi.", 'The two move together.') },
    { text: "slowdown; slowdown", correct: true, why: tr("Figure 7: 1960–73 da 2.9%/2.7%, 1973–95 da 1.5%/1.2%.", "Figure 7: 2.9%/2.7% in 1960–73, 1.5%/1.2% in 1973–95.") },
  ]),
  mk("ch19.qq.9", tr("Kapital", 'Capital'), "A bakery sells its output for $20 per cake and rents ovens at $30 per hour. To maximize profit, it should rent ovens until the marginal product of an oven is", [
    { text: "2/3 cake per hour.", why: tr("Teskari (20/30).", 'The reverse (20/30).') },
    { text: "3/2 cakes per hour.", correct: true, why: "20 × MP = 30 → MP = 1.5." },
    { text: "10 cakes per hour.", why: tr("Hisob xato.", 'A calculation error.') },
    { text: "25 cakes per hour.", why: tr("Hisob xato.", 'A calculation error.') },
  ]),
  mk("ch19.qq.10", tr("Omillar bog'liqligi", 'Interdependent factors'), "A storm destroys several factories, reducing the stock of capital. What effect does this event have on factor markets?", [
    { text: "Wages and the rental price of capital both rise.", why: tr("Kam kapital — ishchilar MP i tushadi.", "Less capital — workers' MP falls.") },
    { text: "Wages and the rental price of capital both fall.", why: tr("Kapital kam — uning ijarasi oshadi.", 'Less capital — its rent rises.') },
    { text: "Wages rise, and the rental price of capital falls.", why: tr("Teskari.", 'The reverse.') },
    { text: "Wages fall, and the rental price of capital rises.", correct: true, why: tr("Kam kapital: uning MP i ↑ (ijara ↑); ishchilarning MP i ↓ (ish haqi ↓).", "Less capital: its MP ↑ (rent ↑); workers' MP ↓ (wages ↓).") },
  ]),
];

export const checks: Record<string, Question> = {
  "s-19-1a": { id: "ch19.check.19-1a", chapter: C, kind: "tf", source: "new", topic: tr("Hosila talab", 'Derived demand'), prompt: tr("Dasturchilarga talab dasturiy ta'minot taklifidan kelib chiqadi — bu derived demand.", 'The demand for programmers comes from the supply of software — this is derived demand.'), answer: true, why: tr("Resurslarga talab ular yordamida ishlab chiqariladigan tovar bozoridan kelib chiqadi.", 'The demand for a factor comes from the market for the good it is used to produce.') },
  "s-19-1b": { id: "ch19.check.19-1b", chapter: C, kind: "numeric", source: "new", topic: tr("MPL", 'MPL'), prompt: tr("Table 1: 3 ishchi — 240, 4 ishchi — 280 bushel. 4-ishchining MPL i?", "Table 1: 3 workers — 240, 4 workers — 280 bushels. The 4th worker's MPL?"), answer: 40, tolerance: 0, unit: "bushel", why: tr("280 − 240 = 40 — kamayuvchi marjinal mahsulot (100, 80, 60, 40, 20).", '280 − 240 = 40 — diminishing marginal product (100, 80, 60, 40, 20).') },
  "s-19-1c": { id: "ch19.check.19-1c", chapter: C, kind: "numeric", source: "new", topic: tr("VMP", 'VMP'), prompt: tr("Olma $10, ish haqi $500. Table 1 bo'yicha nechta ishchi yollanadi?", 'Apples $10, wage $500. Using Table 1, how many workers are hired?'), answer: 3, tolerance: 0, why: tr("VMP: 1,000, 800, 600, 400 → 4-ishchi $400 < $500 → 3 ishchi.", 'VMP: 1,000, 800, 600, 400 → the 4th worker $400 < $500 → 3 workers.'), traps: [{ value: 4, why: tr("4-ishchi VMP $400 < $500 — foydani $100 kamaytiradi.", "The 4th worker's VMP $400 < $500 — it lowers profit by $100.") }] },
  "s-19-1d": mk("ch19.check.19-1d", tr("Talab siljishi", 'Demand shifts'), tr("Arzon sanoat robotlari ixtiro qilindi va ishchilar MP ini kamaytirdi. Bu qanday texnologik o'zgarish va mehnatga talab qayoqqa siljiydi?", "Cheap industrial robots are invented and they reduce workers' MP. What kind of technological change is this, and which way does labor demand shift?"), [
    { text: tr("Labor-saving — talab chapga", 'Labor-saving — demand shifts left'), correct: true, why: tr("Tarixda ko'proq labor-augmenting o'zgarishlar (mixlash pistoleti) — talab o'ngga.", 'Historically, labor-augmenting changes (the nail gun) have been more common — demand shifts right.') },
    { text: tr("Labor-augmenting — talab o'ngga", 'Labor-augmenting — demand shifts right'), why: tr("MP kamaygan.", 'MP fell.') },
    { text: tr("Taklif chapga", 'Supply shifts left'), why: tr("Bu talab tomoni.", "That's the demand side.") },
    { text: tr("Hech narsa", 'Nothing'), why: tr("VMPL o'zgardi.", 'VMPL changed.') },
  ], 'new'),
  "s-19-2a": mk("ch19.check.19-2a", tr("Ish va dam olish", 'Work and leisure'), tr("Maoshingiz $20 dan $25 ga oshdi va siz kamroq ishlay boshladingiz. Qaysi effekt ustun?", 'Your wage rose from $20 to $25 and you started working less. Which effect dominates?'), [
    { text: tr("Income effect — boyroq bo'lib, ko'proq dam olishga qodirsiz", "The income effect — you're richer and can afford more leisure"), correct: true, why: tr("Substitution effect (dam olish qimmatladi) ko'proq ishlashga undaydi; bu yerda income effect ustun — orqaga egilgan taklif.", 'The substitution effect (leisure got more expensive) pushes you to work more; here the income effect dominates — backward-bending supply.') },
    { text: "Substitution effect", why: tr("U ko'proq ishlashga undaydi.", 'It pushes you to work more.') },
    { text: tr("Ikkalasi teng", 'The two are equal'), why: tr("Unda soatlar o'zgarmaydi.", "Then hours don't change.") },
    { text: "Hech biri", why: tr("Soatlar o'zgardi.", 'Hours changed.') },
  ], 'new'),
  "s-19-2b": { id: "ch19.check.19-2b", chapter: C, kind: "match", source: "new", topic: tr("Taklif siljishi", 'Supply shifts'), prompt: tr("Hodisani mehnat taklifi siljish sababi bilan moslashtiring.", 'Match each event with the cause of the labor-supply shift.'), pairs: [
    { left: tr("Ayollar ishtiroki 34% (1950) → 56% (2020)", "Women's participation 34% (1950) → 56% (2020)"), right: tr("Didlar o'zgarishi", 'Changes in tastes') },
    { left: tr("Nok teruvchilar maoshi oshdi", "Pear pickers' pay rose"), right: tr("Muqobil imkoniyatlar", 'Alternative opportunities') },
    { left: tr("Mavsumiy ishchilar kuzgi hosilga keladi", 'Seasonal workers come for the fall harvest'), right: tr("Immigratsiya / migratsiya", 'Immigration / migration') },
  ] },
  "s-19-3a": mk("ch19.check.19-3a", tr("Taklif siljishi", 'Supply shifts'), tr("Isroil 1988-yilda falastinlik ishchilar oqimini cheklaganda nima bo'ldi (Angrist)?", 'What happened when Israel restricted the flow of Palestinian workers in 1988 (Angrist)?'), [
    { text: tr("Ishlagan falastinliklar soni yarmiga kamaydi, qolganlarining maoshi ~50% oshdi — VMP oshdi", 'The number of Palestinians working fell by half, and the wages of those remaining rose ~50% — VMP rose'), correct: true, why: tr("Taklif chapga → W va VMP yuqoriga.", 'Supply shifts left → W and VMP rise.') },
    { text: tr("Maoshlar tushdi", 'Wages fell'), why: tr("Taklif kamaydi.", 'Supply fell.') },
    { text: tr("Bandlik oshdi", 'Employment rose'), why: tr("Ishchilar kamaydi.", 'There were fewer workers.') },
    { text: tr("Hech narsa o'zgarmadi", 'Nothing changed'), why: tr("Nazariya bashorati tasdiqlandi.", "The theory's prediction was confirmed.") },
  ], 'new'),
  "s-19-3b": { id: "ch19.check.19-3b", chapter: C, kind: "tf", source: "new", topic: tr("Talab siljishi", 'Demand shifts'), prompt: tr("Olma narxi oshsa, olma ishlab chiqaruvchilarning foydasi ham, olma teruvchilarning maoshi ham oshadi.", "If the price of apples rises, both apple producers' profits and apple pickers' wages rise."), answer: true, why: tr("VMP oshadi → mehnatga talab o'ngga. Neft konchilari maoshi ham neft narxiga bog'liq.", "VMP rises → labor demand shifts right. Oil workers' wages likewise depend on the price of oil.") },
  "s-19-4a": mk("ch19.check.19-4a", tr("Kapital", 'Capital'), tr("Yer yoki kapitalning sotib olish narxi nimaga bog'liq?", 'What does the purchase price of land or capital depend on?'), [
    { text: tr("Hozirgi va kelajakda kutilayotgan VMP ga (ijara daromadlari oqimiga)", 'On current and expected future VMP (the stream of rental income)'), correct: true, why: tr("Ijara narxi — hozirgi VMP; sotib olish narxi — butun kelajakdagi ijara oqimi.", 'The rental price is the current VMP; the purchase price is the whole future stream of rents.') },
    { text: tr("Faqat bugungi ijaraga", "Only on today's rent"), why: tr("Kelajak ham muhim.", 'The future matters too.') },
    { text: tr("Ish haqiga", 'On the wage'), why: tr("Bevosita emas.", 'Not directly.') },
    { text: tr("Hech narsaga", 'On nothing'), why: tr("Ijara oqimiga bog'liq.", 'It depends on the stream of rents.') },
  ], 'new'),
  "s-19-4b": mk("ch19.check.19-4b", "Black Death", tr("XIV asrda vabo aholining ~⅓ ini o'ldirdi. Ish haqi va yer ijarasiga nima bo'ldi?", 'In the 14th century the plague killed ~⅓ of the population. What happened to wages and land rents?'), [
    { text: tr("Ish haqi ~2 barobar oshdi, ijara 50% dan ko'p kamaydi", 'Wages roughly doubled, and rents fell by more than 50%'), correct: true, why: tr("Kam ishchi → MPL ↑; har bir yer birligiga kam ishchi → yerning MP i ↓.", "Fewer workers → MPL ↑; fewer workers per unit of land → land's MP ↓.") },
    { text: tr("Ikkalasi oshdi", 'Both rose'), why: tr("Yerning MP i tushdi.", "Land's MP fell.") },
    { text: tr("Ikkalasi tushdi", 'Both fell'), why: tr("Ishchilarning MP i oshdi.", "Workers' MP rose.") },
    { text: tr("Ish haqi tushdi", 'Wages fell'), why: tr("Ishchilar kam bo'ldi.", 'Workers became scarce.') },
  ], 'new'),
};

export const practice: Question[] = [
  { id: "ch19.new.p3", chapter: C, kind: "numeric", source: "new", topic: "Problem 3", prompt: tr("Mahsulot: 0, 7, 13, 19, 25, 28, 29, 29 (0–7 kun); narx $10. Kunlik ish haqi $40 bo'lsa, necha kun mehnat yollanadi?", 'Output: 0, 7, 13, 19, 25, 28, 29, 29 (0–7 days); price $10. If the daily wage is $40, how many days of labor are hired?'), answer: 4, tolerance: 0, why: tr("MP: 7, 6, 6, 6, 3, 1, 0 → VMP: 70, 60, 60, 60, 30, 10, 0 → $40 dan katta: 4 ta.", 'MP: 7, 6, 6, 6, 3, 1, 0 → VMP: 70, 60, 60, 60, 30, 10, 0 → above $40: 4.'), traps: [{ value: 5, why: tr("5-kun VMP $30 < $40.", "The 5th day's VMP $30 < $40.") }] },
  { id: "ch19.new.robots", chapter: C, kind: "numeric", source: "new", topic: "Problem 4", prompt: tr("Smiling Cow: sut $4/gallon, robot ijarasi $100/kun; mahsulot 0, 50, 85, 115, 140, 150, 155. 4-robotning VMP i?", "Smiling Cow: milk $4/gallon, robot rental $100/day; output 0, 50, 85, 115, 140, 150, 155. The 4th robot's VMP?"), answer: 100, tolerance: 0, unit: "$", why: tr("MP 25 × $4 = $100 = ijara → 3 yoki 4 robot farqsiz (5-robot VMP $40). Firma ikkala bozorda ham price taker.", "MP 25 × $4 = $100 = the rent → 3 or 4 robots is a tie (the 5th robot's VMP is $40). The firm is a price taker in both markets.") },
  { id: "ch19.new.ectenia", chapter: C, kind: "numeric", source: "new", topic: "Problem 5", prompt: tr("Ectenia: 20 bog', Q = 100L − L², olma $2, 200 ishchi (inelastik). Muvozanat kunlik ish haqi?", 'Ectenia: 20 orchards, Q = 100L − L², apples $2, 200 workers (inelastic). The equilibrium daily wage?'), answer: 160, tolerance: 0, unit: "$", why: tr("Bog' talabi L = 50 − W/4; bozor 1000 − 5W = 200 → W = 160. Narx $4 bo'lsa W = 320; 10 bog' qolsa W = 120.", "An orchard's demand L = 50 − W/4; market 1000 − 5W = 200 → W = 160. With a price of $4, W = 320; with 10 orchards left, W = 120.") },
  { id: "ch19.new.uncle", chapter: C, kind: "numeric", source: "new", topic: "Problem 6", prompt: tr("Amaki sendvich do'koni: ishchilar $12/soat, sendvich $6. Oxirgi ishchining MP i (soatiga sendvich)?", "Uncle's sandwich shop: workers $12/hour, a sandwich $6. The last worker's MP (sandwiches per hour)?"), answer: 2, tolerance: 0, why: tr("VMP = W = $12 → MP = 12/6 = 2.", 'VMP = W = $12 → MP = 12/6 = 2.') },
  { id: "ch19.new.leadbelly", chapter: C, kind: "numeric", source: "new", topic: "Problem 7", prompt: tr("Leadbelly: ish haqi $150/kun, oxirgi ishchi MP i 30 quti qalam. Bir quti narxi?", "Leadbelly: the wage is $150/day, the last worker's MP is 30 boxes of pencils. The price of one box?"), answer: 5, tolerance: 0, unit: "$", why: "P × 30 = 150 → P = $5." },
  { id: "ch19.new.cobb", chapter: C, kind: "numeric", source: "new", topic: "Problem 9", prompt: tr("Y = AK^⅓L^⅔, P = 2, A = 3, K = 1,000,000, L = 1,000. Nominal ish haqi W?", 'Y = AK^⅓L^⅔, P = 2, A = 3, K = 1,000,000, L = 1,000. The nominal wage W?'), answer: 40, tolerance: 0, unit: "$", why: tr("MPL = (2/3)·3·(1000)^⅓ = 20 → W = P × MPL = 40; mehnat ulushi doim ⅔.", "MPL = (2/3)·3·(1000)^⅓ = 20 → W = P × MPL = 40; labor's share is always ⅔.") },
  mk("ch19.new.benefits", "Problem 8", tr("Qonun har bir ish soati uchun $3 imtiyoz (fringe benefit) talab qiladi. Naqd ish haqi o'qida mehnatga talab qayoqqa siljiydi?", 'A law requires a $3 fringe benefit for every hour of work. On the cash-wage axis, which way does labor demand shift?'), [
    { text: tr("$3 ga pastga — firma uchun har bir ishchi $3 qimmatlashdi; naqd ish haqi tushadi, bandlik kamayadi (ishchilar imtiyozni qadrlasa, taklif ham o'ngga siljib, bandlik ta'sirini kamaytiradi)", 'Down by $3 — each worker costs the firm $3 more; the cash wage falls and employment falls (if workers value the benefit, supply also shifts right, reducing the employment effect)'), correct: true, why: tr("Eng kam ish haqi bo'lganlar uchun naqd ish haqi tushmaydi → bandlik ko'proq kamayadi.", "For minimum-wage workers the cash wage can't fall → employment falls more.") },
    { text: tr("Yuqoriga", 'Up'), why: tr("Mehnat qimmatlashdi.", 'Labor got more expensive.') },
    { text: tr("Siljimaydi", "It doesn't shift"), why: tr("Firmaning marjinal foydasi o'zgardi.", "The firm's marginal benefit changed.") },
    { text: tr("Faqat taklif siljiydi", 'Only supply shifts'), why: tr("Talab ham.", 'Demand does too.') },
  ], 'new'),
  { id: "ch19.new.ate", chapter: C, kind: "tf", source: "new", topic: "Ask the Experts", prompt: tr("IGM (2013): iqtisodchilarning 95% i yuqori malakali chet ellik ishchilarning ko'proq immigratsiyasi o'rtacha AQSh fuqarosini yaxshilaydi degan fikrga qo'shilgan.", 'IGM (2013): 95% of economists agreed that more immigration of highly skilled foreign workers would make the average U.S. citizen better off.'), answer: true, why: tr("95% agree. Kam malakali immigrantlar haqida: 63% agree (o'rtacha fuqaro yutadi), lekin 60% kam malakali amerikaliklar kompensatsiyasiz yutqazadi degan.", '95% agree. On low-skilled immigrants: 63% agree (the average citizen gains), but 60% said low-skilled Americans would lose without compensation.') },
  mk("ch19.new.uz", tr("O'zbekistondan misol", 'An example from Uzbekistan'), tr("Ko'p o'zbekistonliklar Rossiya va Koreyada ishlaydi. Bu O'zbekistondagi qolgan ishchilar maoshiga qanday ta'sir qilishi mumkin?", 'Many Uzbeks work in Russia and Korea. How might this affect the wages of the workers who remain in Uzbekistan?'), [
    { text: tr("Mamlakat ichida mehnat taklifi kamayadi → ichki maoshlar va qolgan ishchilarning VMP i oshishga intiladi; qabul qiluvchi mamlakatda esa aksincha", 'Labor supply at home falls → domestic wages and the VMP of remaining workers tend to rise; in the host country, the reverse'), correct: true, why: tr("Immigratsiya — chiqish mamlakatida taklif chapga, kelish mamlakatida o'ngga (general equilibrium effektlari ham bor: pul o'tkazmalari talabni oshiradi).", 'Migration — supply shifts left in the sending country and right in the receiving country (there are also general-equilibrium effects: remittances raise demand).') },
    { text: tr("Ichki maoshlar tushadi", 'Domestic wages fall'), why: tr("Taklif kamaydi.", 'Supply fell.') },
    { text: tr("Hech qanday ta'sir yo'q", "There's no effect"), why: tr("Taklif o'zgardi.", 'Supply changed.') },
    { text: tr("Faqat talab o'zgaradi", 'Only demand changes'), why: tr("Asosan taklif.", 'Mainly supply.') },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
