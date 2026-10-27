import type { Question } from '../../types';
import { tr } from '../../../lib/lang';

const C = 20;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch20.qq.1", tr("Ish haqi omillari", 'What determines wages'), "Ted leaves his job as a high school math teacher and returns to school to study the latest developments in computer programming, after which he takes a higher-paying job at a software firm. This is an example of", [
    { text: "a compensating differential.", why: tr("Ish sharoiti emas, bilim o'zgardi.", 'Not working conditions — knowledge changed.') },
    { text: "human capital.", correct: true, why: tr("Ta'limga investitsiya → unumdorlik va ish haqi oshdi.", 'An investment in education → productivity and wages rose.') },
    { text: "monopsony.", why: tr("Yagona xaridor yo'q.", "There's no single buyer.") },
    { text: "efficiency wages.", why: tr("Firma ixtiyoriy yuqori ish haqi to'lamayapti.", "The firm isn't voluntarily paying higher wages.") },
  ]),
  mk("ch20.qq.2", tr("Ish haqi omillari", 'What determines wages'), "Marshall and Lily work at a local department store. Marshall, who greets customers as they arrive, is paid less than Lily, who cleans the bathrooms. This is an example of", [
    { text: "a compensating differential.", correct: true, why: tr("Yoqimsiz ish — yuqori ish haqi.", 'An unpleasant job — a higher wage.') },
    { text: "monopsony.", why: tr("Bozor tuzilmasi haqida emas.", 'Not about market structure.') },
    { text: "signaling.", why: tr("Diplom yoki signal yo'q.", "There's no degree or signal.") },
    { text: "efficiency wages.", why: tr("Farq ish xususiyatidan.", "The difference comes from the job's characteristics.") },
  ]),
  mk("ch20.qq.3", tr("Ish haqi omillari", 'What determines wages'), "Barney runs a small manufacturing company. He pays his employees about twice as much as other firms, even though he could pay less and still recruit all the workers he needs. He believes that higher wages make his workers more loyal and hard-working. This is an example of", [
    { text: "monopsony.", why: tr("Monopsoniya ish haqini past tutadi.", 'Monopsony keeps wages low.') },
    { text: "human capital.", why: tr("Ta'lim haqida emas.", 'Not about education.') },
    { text: "signaling.", why: tr("Signal emas.", 'Not a signal.') },
    { text: "efficiency wages.", correct: true, why: tr("Unumdorlikni oshirish uchun muvozanatdan yuqori ish haqi.", 'An above-equilibrium wage to raise productivity.') },
  ]),
  mk("ch20.qq.4", "Signal", "A business consulting firm hires Robin because she was a math major in college. Her new job does not require any of the mathematics she learned, but the firm's managers believe that anyone who can graduate with a math degree must be very smart. This is an example of", [
    { text: "a compensating differential.", why: tr("Ish sharoiti emas.", 'Not working conditions.') },
    { text: "human capital.", why: tr("Bilim ishda ishlatilmaydi.", "The knowledge isn't used on the job.") },
    { text: "signaling.", correct: true, why: tr("Diplom qobiliyatni ko'rsatadi.", 'The degree shows ability.') },
    { text: "monopsony.", why: tr("Yagona xaridor emas.", 'Not a single buyer.') },
  ]),
  mk("ch20.qq.5", "Table 2", "Among full-time U.S. workers, White women earn about ___ percent less than White men, and Black men earn about ___ percent less than White men.", [
    { text: "5; 20", why: tr("Ayollar farqi ~19%.", "Women's gap is ~19%.") },
    { text: "5; 40", why: tr("Ikkalasi ham noto'g'ri.", 'Both are wrong.') },
    { text: "20; 20", correct: true, why: tr("Table 2: 19% va 24% — taxminan 20 va 20.", 'Table 2: 19% and 24% — roughly 20 and 20.') },
    { text: "20; 40", why: tr("Qora tanli erkaklar farqi ~24%.", "Black men's gap is ~24%.") },
  ]),
  mk("ch20.qq.6", tr("O'lchash", 'Measurement'), "It is difficult to measure to what extent discrimination affects labor market outcomes because", [
    { text: "data on wages are crucial but not readily available.", why: "Ma'lumot bor (Table 2)." },
    { text: "firms misreport the wages they pay to hide discriminatory practices.", why: tr("Asosiy muammo emas.", 'Not the main problem.') },
    { text: "workers differ in their attributes and the types of jobs they have.", correct: true, why: tr("Human capital va ish xususiyatlarini ajratish kerak.", 'Human capital and job characteristics must be separated.') },
    { text: "the same minimum-wage law applies to workers in all groups.", why: tr("Aloqasi yo'q.", 'Unrelated.') },
  ]),
  mk("ch20.qq.7", tr("Raqobat", 'Competition'), "The forces of competition in markets with free entry and exit tend to eliminate wage differentials that arise from discrimination by", [
    { text: "employers.", correct: true, why: tr("Faqat foydani o'ylaydigan firmalar arzon ishchilarni yollab, diskriminatorlarni siqib chiqaradi.", 'Firms that care only about profit hire the cheaper workers and drive discriminators out.') },
    { text: "customers.", why: tr("Mijozlar diskriminatsiya uchun to'lashga tayyor bo'lsa, farq qoladi.", 'If customers are willing to pay for discrimination, the gap persists.') },
    { text: "government.", why: tr("Qonun raqobatni bostiradi.", 'The law suppresses competition.') },
    { text: "all of the above.", why: tr("Faqat ish beruvchilar.", 'Only employers.') },
  ]),
];

export const checks: Record<string, Question> = {
  "s-20-1a": { id: "ch20.check.20-1a", chapter: C, kind: "tf", source: "new", topic: tr("Kompensatsion farq", 'Compensating differential'), prompt: tr("Tungi smena ishchilari kunduzgi smenadagi o'xshash ishchilardan ko'proq topadi — bu compensating differential.", 'Night-shift workers earn more than similar day-shift workers — this is a compensating differential.'), answer: true, why: tr("Yuqori ish haqi kechasi ishlab, kunduzi uxlash noqulayligini qoplaydi.", 'The higher wage compensates for the inconvenience of working at night and sleeping in the day.') },
  "s-20-1b": { id: "ch20.check.20-1b", chapter: C, kind: "numeric", source: "new", topic: "Human capital", prompt: tr("Table 1: 2019-yil kollejli ayol $70,657, o'rta maktabli ayol $39,669. Kollej mukofoti necha foiz?", 'Table 1: in 2019 a college-educated woman earned $70,657, a high-school-educated woman $39,669. What is the college premium in percent?'), answer: 78, tolerance: 1, unit: "%", why: "70,657/39,669 = 1.78 → 78% (1974: 35%).", traps: [{ value: 178, why: tr("Bu nisbat (178%), mukofot 78%.", "That's the ratio (178%); the premium is 78%.") }] },
  "s-20-1c": mk("ch20.check.20-1c", tr("Qobiliyat va omad", 'Ability and luck'), tr("O'lchanadigan o'zgaruvchilar (ta'lim, tajriba, yosh, ish xususiyatlari) AQShda ish haqi o'zgaruvchanligining qancha qismini tushuntiradi?", 'How much of the variation in U.S. wages do measurable variables (education, experience, age, job characteristics) explain?'), [
    { text: tr("Yarmidan kamini — qolgani qobiliyat, harakat va omad", 'Less than half — the rest is ability, effort, and luck'), correct: true, why: tr("Tushuntirilmagan qism katta → tushirib qoldirilgan o'zgaruvchilar muhim.", 'The unexplained part is large → omitted variables matter.') },
    { text: tr("Deyarli hammasini", 'Almost all of it'), why: tr("Yarmidan kam.", 'Less than half.') },
    { text: tr("Hech narsani", 'None of it'), why: tr("Nazariya bashorat qilgandek ta'sir qiladi.", 'They have the effects the theory predicts.') },
    { text: tr("Aniq 90%", 'Exactly 90%'), why: tr("Kitob: yarmidan kam.", 'The book: less than half.') },
  ], 'new'),
  "s-20-1d": mk("ch20.check.20-1d", "Signal", tr("Hukumat hamma uchun ta'limni oshirsa, signal nazariyasiga ko'ra nima bo'ladi?", "If the government raised everyone's education, what would happen according to signaling theory?"), [
    { text: tr("Ish haqi o'zgarmaydi — ta'lim unumdorlikni oshirmaydi", "Wages wouldn't change — education doesn't raise productivity"), correct: true, why: tr("Human capital nazariyasiga ko'ra esa barcha ish haqi oshadi.", 'According to human-capital theory, however, all wages would rise.') },
    { text: tr("Barcha ish haqi oshadi", 'All wages would rise'), why: "Bu human capital bashorati." },
    { text: tr("Ish haqi tushadi", 'Wages would fall'), why: tr("Nazariya buni aytmaydi.", "The theory doesn't say that.") },
    { text: tr("Faqat kam ta'limlilar yutadi", 'Only the less educated would gain'), why: tr("Unday emas.", 'Not so.') },
  ], 'new'),
  "s-20-1e": mk("ch20.check.20-1e", tr("Superyulduz", 'Superstars'), tr("Qaysi sohada superyulduzlar ehtimoli ko'proq (QR 4)?", 'In which field are superstars most likely (QR 4)?'), [
    { text: tr("Musiqa — yozuvlar bilan millionlarga arzon xizmat ko'rsatish mumkin", 'Music — recordings let one serve millions cheaply'), correct: true, why: tr("Stomatolog bir vaqtda cheklangan bemorga xizmat qiladi.", 'A dentist serves a limited number of patients at a time.') },
    { text: tr("Stomatologiya", 'Dentistry'), why: tr("Bir shifokor hammaga xizmat qila olmaydi.", "One doctor can't serve everyone.") },
    { text: tr("Santexnika", 'Plumbing'), why: tr("Cheklangan mijozlar.", 'A limited number of customers.') },
    { text: tr("Duradgorlik", 'Carpentry'), why: tr("Cheklangan mijozlar.", 'A limited number of customers.') },
  ], 'new'),
  "s-20-1f": mk("ch20.check.20-1f", "Monopsony", tr("Monopsoniya raqobatli bozorga nisbatan nima qiladi?", 'What does a monopsony do compared with a competitive market?'), [
    { text: tr("Kamroq ishchi yollaydi va past ish haqi to'laydi — deadweight loss", 'It hires fewer workers and pays a lower wage — a deadweight loss'), correct: true, why: tr("Monopoliyaning ko'zgusi: taklif egri chizig'i bo'ylab pastga harakat.", 'The mirror image of monopoly: a movement down the supply curve.') },
    { text: tr("Ko'proq yollaydi", 'It hires more'), why: tr("Kamroq.", 'Fewer.') },
    { text: tr("Yuqori ish haqi to'laydi", 'It pays a higher wage'), why: "Past." },
    { text: tr("Farqi yo'q", "There's no difference"), why: tr("Bozor kuchi natijani buzadi.", 'Market power distorts the outcome.') },
  ], 'new'),
  "s-20-1g": { id: "ch20.check.20-1g", chapter: C, kind: "match", source: "new", topic: tr("Muvozanatdan yuqori ish haqi", 'Above-equilibrium wages'), prompt: tr("Sababni tavsif bilan moslashtiring.", 'Match each cause with its description.'), pairs: [
    { left: "Minimum-wage law", right: tr("Qonun eng kam malakalilar ish haqini ko'taradi", 'A law raises the wages of the least skilled') },
    { left: "Union", right: tr("Ish tashlash tahdidi bilan muzokara", 'Bargaining with the threat of a strike') },
    { left: "Efficiency wages", right: tr("Firma unumdorlik uchun ixtiyoriy yuqori to'laydi", 'The firm voluntarily pays more for productivity') },
  ] },
  "s-20-2a": mk("ch20.check.20-2a", tr("O'lchash", 'Measurement'), tr("Bertrand–Mullainathan tajribasi nimani ko'rsatdi?", 'What did the Bertrand–Mullainathan experiment show?'), [
    { text: tr("“Oq” ismli rezyumelar ~50% ko'p qo'ng'iroq olgan — hatto “Equal Opportunity Employer” lar ham", 'Résumés with “white” names got ~50% more callbacks — even from “Equal Opportunity Employers”'), correct: true, why: tr("Boshqa barcha jihatdan o'xshash rezyumelar — kuchli dalil.", 'Résumés identical in every other respect — strong evidence.') },
    { text: tr("Farq yo'q", 'No difference'), why: tr("Katta farq topilgan.", 'A large difference was found.') },
    { text: tr("Farq faqat human capital tufayli", 'The difference is due only to human capital'), why: tr("Rezyumelar bir xil edi.", 'The résumés were identical.') },
    { text: tr("Faqat Kanadada farq bor", "There's a difference only in Canada"), why: tr("Bu Boston va Chikago; Kanada — Oreopoulos (39%).", 'That was Boston and Chicago; Canada — Oreopoulos (39%).') },
  ], 'new'),
  "s-20-2b": { id: "ch20.check.20-2b", chapter: C, kind: "tf", source: "new", topic: tr("Ish beruvchilar", 'Employers'), prompt: tr("Segregatsiyalangan tramvaylar tarixida tramvay kompaniyalari segregatsiya qonunlariga qarshi bo'lgan, chunki bu xarajatni oshirgan.", 'In the history of segregated streetcars, the streetcar companies opposed segregation laws because they raised costs.'), answer: true, why: tr("Roback (1986): “ko'p bo'sh joyni tashib yurishimiz kerak” — manba qonunda edi.", 'Roback (1986): “we have to haul around a lot of empty space” — the source was the law.') },
  "s-20-2c": mk("ch20.check.20-2c", tr("Mijozlar va hukumat", 'Customers and government'), tr("Qaysi holda raqobatli bozorda diskriminatsion ish haqi farqi saqlanib qolishi mumkin?", 'In which case can a discriminatory wage gap persist in a competitive market?'), [
    { text: tr("Mijozlar diskriminatsiya uchun ko'proq to'lashga tayyor bo'lsa yoki hukumat talab qilsa", 'If customers are willing to pay more for discrimination or the government requires it'), correct: true, why: tr("Ish beruvchi diskriminatsiyasini foyda motivi yo'qotadi.", 'The profit motive eliminates employer discrimination.') },
    { text: tr("Faqat ish beruvchilar diskriminatsiya qilsa", 'Only if employers discriminate'), why: tr("Buni raqobat yo'qotadi.", 'Competition eliminates that.') },
    { text: tr("Hech qachon", 'Never'), why: tr("Saqlanishi mumkin.", 'It can persist.') },
    { text: tr("Firmalar foydani maksimallashtirsa", 'If firms maximize profit'), why: tr("Bu farqni yo'qotadi.", 'That eliminates the gap.') },
  ], 'new'),
  "s-20-2d": { id: "ch20.check.20-2d", chapter: C, kind: "numeric", source: "new", topic: tr("Statistik diskriminatsiya", 'Statistical discrimination'), prompt: tr("Ko'k ko'zlilarning 10% i surunkali kechikadi. Ish beruvchi ularni yollamasa, ko'k ko'zlilarning necha foizi punktual bo'lsa ham kamsitiladi?", "10% of blue-eyed people are chronically late. If an employer won't hire them, what percentage of blue-eyed people are discriminated against even though they're punctual?"), answer: 90, tolerance: 0, unit: "%", why: tr("Har bir shaxs guruh o'rtachasi bilan stereotiplanadi.", 'Each individual is stereotyped by the group average.') },
};

export const practice: Question[] = [
  mk("ch20.new.interns", "Problem 1", tr("Talaba yozda haq to'lanmaydigan amaliyotni tanladi. Bu nima uchun oqilona bo'lishi mumkin?", 'A student chose an unpaid summer internship. Why might this be sensible?'), [
    { text: tr("Imkoniyat xarajati — boy berilgan yozgi ish haqi; lekin u human capital (va signal) oladi — keyin yuqoriroq daromad kutiladi", 'The opportunity cost is the forgone summer wage; but they gain human capital (and a signal) — higher earnings are expected later'), correct: true, why: tr("Amaliyotchilar keyinroq ko'proq topishini kutish mumkin (kompensatsion farq investitsiya uchun).", 'Interns can be expected to earn more later (a compensating differential for the investment).') },
    { text: tr("Imkoniyat xarajati nol", 'The opportunity cost is zero'), why: tr("Boshqa ish haqi boy berilgan.", 'Other wages are forgone.') },
    { text: tr("Bu oqilona emas", "It isn't sensible"), why: tr("Kelajakdagi daromad hisobga olinadi.", 'Future earnings count.') },
    { text: tr("Keyinroq kamroq topadi", "They'll earn less later"), why: tr("Kutilma — ko'proq.", 'The expectation is more.') },
  ], 'new'),
  mk("ch20.new.secret", "Problem 5", tr("Tanlov: dunyodagi eng yaxshi universitetda 4 yil o'qish (lekin sir saqlash) yoki diplom olish (lekin o'qimaslik). Ko'pchilik diplomni tanlasa, bu nimani anglatadi?", "The choice: study at the world's best university for 4 years (but keep it secret) or get the degree (but not study). If most people chose the degree, what would that imply?"), [
    { text: tr("Signal effekti kuchli; o'qishni tanlasa — human capital muhim", 'The signaling effect is strong; choosing the education means human capital matters'), correct: true, why: tr("Ikki nazariya o'rtasidagi bahsni sinaydigan fikr tajribasi.", 'A thought experiment testing the debate between the two theories.') },
    { text: tr("Human capital nazariyasi isbotlandi", 'Human-capital theory is proven'), why: tr("Aksincha — signal.", 'The reverse — signaling.') },
    { text: tr("Ta'lim foydasiz", 'Education is useless'), why: tr("Ikki ta'sir ham bo'lishi mumkin.", 'Both effects may be at work.') },
    { text: tr("Hech narsa", 'Nothing'), why: tr("Signal va human capital nisbatini ko'rsatadi.", 'It reveals the relative weight of signaling and human capital.') },
  ], 'new'),
  mk("ch20.new.greenspan", "Problem 8", tr("Greenspan 1960-yillarda asosan ayol iqtisodchilarni yollagan — “boshqalar baholamagani uchun ular arzonroq edi”. Ko'proq ish beruvchilar shunday qilsa?", "In the 1960s Greenspan hired mostly women economists — “because others didn't value them, they were cheaper.” What if more employers did the same?"), [
    { text: tr("Ayollarga talab oshib, erkak-ayol ish haqi farqi qisqaradi — foydani maksimallashtiruvchi xatti-harakat", 'Demand for women would rise and the male–female wage gap would narrow — profit-maximizing behavior'), correct: true, why: tr("Ish beruvchi diskriminatsiyasiga qarshi raqobat kuchi. Boshqa firmalar mijozlar didi yoki o'z noto'g'ri qarashlari tufayli ergashmagan bo'lishi mumkin.", 'Competition as a force against employer discrimination. Other firms may not have followed because of customer tastes or their own prejudices.') },
    { text: tr("Farq kattalashadi", 'The gap would widen'), why: tr("Talab ayollar tomonga siljiydi.", 'Demand shifts toward women.') },
    { text: tr("Foydani kamaytiradi", 'It reduces profit'), why: tr("Xarajatni kamaytiradi.", 'It reduces costs.') },
    { text: tr("Hech narsa o'zgarmaydi", 'Nothing changes'), why: tr("Nisbiy talab o'zgaradi.", 'Relative demand changes.') },
  ], 'new'),
  { id: "ch20.new.beauty", chapter: C, kind: "tf", source: "new", topic: "Case Study: Beauty", prompt: tr("Hamermesh va Biddle: o'rtachadan chiroyliroq odamlar o'rtacha ko'rinishdagilardan ~5% ko'p topadi; natijalar erkak va ayollar uchun o'xshash.", 'Hamermesh and Biddle: people more attractive than average earn ~5% more than average-looking people; the results are similar for men and women.'), answer: true, why: tr("O'rtachalar o'rtachadan past ko'rinishdagilardan 5–10% ko'p. Talqinlar: tug'ma qobiliyat, boshqa qobiliyatning bilvosita o'lchovi yoki diskriminatsiya.", 'Average-looking people earn 5–10% more than below-average-looking people. Interpretations: innate ability, an indirect measure of other abilities, or discrimination.') },
  { id: "ch20.new.ate1", chapter: C, kind: "tf", source: "new", topic: "Ask the Experts", prompt: tr("IGM (2012): iqtisodchilarning 88% i texnologik o'zgarish turli malakadagi ishchilarga turlicha ta'sir qilgani AQSh tengsizligi o'sishining yetakchi sabablaridan biri ekaniga qo'shilgan.", 'IGM (2012): 88% of economists agreed that technological change affecting workers of different skills differently is a leading reason for the rise in U.S. inequality.'), answer: true, why: "88% agree, 8% uncertain, 4% disagree." },
  { id: "ch20.new.ate2", chapter: C, kind: "tf", source: "new", topic: "Ask the Experts", prompt: tr("IGM (2021): ko'pchilik iqtisodchilar non-compete bandlari ishchilar harakatchanligi va ish haqini sir himoyasi oqlaganidan ko'proq kamaytiradi deb hisoblaydi.", 'IGM (2021): most economists believe non-compete clauses reduce worker mobility and wages more than the protection of secrets justifies.'), answer: true, why: "86% agree, 11% uncertain, 3% disagree." },
  { id: "ch20.new.union", chapter: C, kind: "numeric", source: "new", topic: tr("Uyushmalar", 'Unions'), prompt: tr("Uyushmasiz o'xshash ishchi $50,000 topadi. Kitobdagi 10–20% oraliqning o'rtasini olsak, uyushma a'zosi taxminan qancha topadi?", "A similar nonunion worker earns $50,000. Taking the middle of the book's 10–20% range, roughly how much does a union member earn?"), answer: 57500, tolerance: 500, unit: "$", why: "50,000 × 1.15 = 57,500." },
  mk("ch20.new.uz", tr("O'zbekistondan misol", 'An example from Uzbekistan'), tr("Toshkentdagi IT-kompaniya chet el universiteti diplomi bo'lganlarga, ish vazifasi bir xil bo'lsa ham, ko'proq to'laydi. Bu qaysi nazariyaga ko'proq mos?", 'An IT company in Tashkent pays more to people with a foreign university degree even when the job duties are the same. Which theory does this fit better?'), [
    { text: tr("Signal — diplom qobiliyat haqida ma'lumot beradi (human capital ham qisman bo'lishi mumkin)", 'Signaling — the degree conveys information about ability (human capital may be part of it too)'), correct: true, why: tr("Agar vazifa bir xil va bilim ishlatilmasa, asosan signal; aslida ikkalasining aralashmasi.", "If the duties are the same and the knowledge isn't used, it's mainly signaling; in reality a mix of both.") },
    { text: tr("Kompensatsion farq", 'Compensating differential'), why: tr("Ish sharoiti bir xil.", 'The working conditions are the same.') },
    { text: tr("Monopsoniya", 'Monopsony'), why: tr("Ko'p IT firmalari raqobatlashadi.", 'Many IT firms compete.') },
    { text: tr("Statistik diskriminatsiya", 'Statistical discrimination'), why: tr("Bu ijobiy signal, guruh stereotipi emas (garchi chegaralari yaqin).", 'This is a positive signal, not a group stereotype (though the line is close).') },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
