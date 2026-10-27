import type { Question } from '../../types';

const C = 20;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch20.qq.1", "Ish haqi omillari", "Ted leaves his job as a high school math teacher and returns to school to study the latest developments in computer programming, after which he takes a higher-paying job at a software firm. This is an example of", [
    { text: "a compensating differential.", why: "Ish sharoiti emas, bilim o'zgardi." },
    { text: "human capital.", correct: true, why: "Ta'limga investitsiya → unumdorlik va ish haqi oshdi." },
    { text: "monopsony.", why: "Yagona xaridor yo'q." },
    { text: "efficiency wages.", why: "Firma ixtiyoriy yuqori ish haqi to'lamayapti." },
  ]),
  mk("ch20.qq.2", "Ish haqi omillari", "Marshall and Lily work at a local department store. Marshall, who greets customers as they arrive, is paid less than Lily, who cleans the bathrooms. This is an example of", [
    { text: "a compensating differential.", correct: true, why: "Yoqimsiz ish — yuqori ish haqi." },
    { text: "monopsony.", why: "Bozor tuzilmasi haqida emas." },
    { text: "signaling.", why: "Diplom yoki signal yo'q." },
    { text: "efficiency wages.", why: "Farq ish xususiyatidan." },
  ]),
  mk("ch20.qq.3", "Ish haqi omillari", "Barney runs a small manufacturing company. He pays his employees about twice as much as other firms, even though he could pay less and still recruit all the workers he needs. He believes that higher wages make his workers more loyal and hard-working. This is an example of", [
    { text: "monopsony.", why: "Monopsoniya ish haqini past tutadi." },
    { text: "human capital.", why: "Ta'lim haqida emas." },
    { text: "signaling.", why: "Signal emas." },
    { text: "efficiency wages.", correct: true, why: "Unumdorlikni oshirish uchun muvozanatdan yuqori ish haqi." },
  ]),
  mk("ch20.qq.4", "Signal", "A business consulting firm hires Robin because she was a math major in college. Her new job does not require any of the mathematics she learned, but the firm's managers believe that anyone who can graduate with a math degree must be very smart. This is an example of", [
    { text: "a compensating differential.", why: "Ish sharoiti emas." },
    { text: "human capital.", why: "Bilim ishda ishlatilmaydi." },
    { text: "signaling.", correct: true, why: "Diplom qobiliyatni ko'rsatadi." },
    { text: "monopsony.", why: "Yagona xaridor emas." },
  ]),
  mk("ch20.qq.5", "Table 2", "Among full-time U.S. workers, White women earn about ___ percent less than White men, and Black men earn about ___ percent less than White men.", [
    { text: "5; 20", why: "Ayollar farqi ~19%." },
    { text: "5; 40", why: "Ikkalasi ham noto'g'ri." },
    { text: "20; 20", correct: true, why: "Table 2: 19% va 24% — taxminan 20 va 20." },
    { text: "20; 40", why: "Qora tanli erkaklar farqi ~24%." },
  ]),
  mk("ch20.qq.6", "O'lchash", "It is difficult to measure to what extent discrimination affects labor market outcomes because", [
    { text: "data on wages are crucial but not readily available.", why: "Ma'lumot bor (Table 2)." },
    { text: "firms misreport the wages they pay to hide discriminatory practices.", why: "Asosiy muammo emas." },
    { text: "workers differ in their attributes and the types of jobs they have.", correct: true, why: "Human capital va ish xususiyatlarini ajratish kerak." },
    { text: "the same minimum-wage law applies to workers in all groups.", why: "Aloqasi yo'q." },
  ]),
  mk("ch20.qq.7", "Raqobat", "The forces of competition in markets with free entry and exit tend to eliminate wage differentials that arise from discrimination by", [
    { text: "employers.", correct: true, why: "Faqat foydani o'ylaydigan firmalar arzon ishchilarni yollab, diskriminatorlarni siqib chiqaradi." },
    { text: "customers.", why: "Mijozlar diskriminatsiya uchun to'lashga tayyor bo'lsa, farq qoladi." },
    { text: "government.", why: "Qonun raqobatni bostiradi." },
    { text: "all of the above.", why: "Faqat ish beruvchilar." },
  ]),
];

export const checks: Record<string, Question> = {
  "s-20-1a": { id: "ch20.check.20-1a", chapter: C, kind: "tf", source: "new", topic: "Kompensatsion farq", prompt: "Tungi smena ishchilari kunduzgi smenadagi o'xshash ishchilardan ko'proq topadi — bu compensating differential.", answer: true, why: "Yuqori ish haqi kechasi ishlab, kunduzi uxlash noqulayligini qoplaydi." },
  "s-20-1b": { id: "ch20.check.20-1b", chapter: C, kind: "numeric", source: "new", topic: "Human capital", prompt: "Table 1: 2019-yil kollejli ayol $70,657, o'rta maktabli ayol $39,669. Kollej mukofoti necha foiz?", answer: 78, tolerance: 1, unit: "%", why: "70,657/39,669 = 1.78 → 78% (1974: 35%).", traps: [{ value: 178, why: "Bu nisbat (178%), mukofot 78%." }] },
  "s-20-1c": mk("ch20.check.20-1c", "Qobiliyat va omad", "O'lchanadigan o'zgaruvchilar (ta'lim, tajriba, yosh, ish xususiyatlari) AQShda ish haqi o'zgaruvchanligining qancha qismini tushuntiradi?", [
    { text: "Yarmidan kamini — qolgani qobiliyat, harakat va omad", correct: true, why: "Tushuntirilmagan qism katta → tushirib qoldirilgan o'zgaruvchilar muhim." },
    { text: "Deyarli hammasini", why: "Yarmidan kam." },
    { text: "Hech narsani", why: "Nazariya bashorat qilgandek ta'sir qiladi." },
    { text: "Aniq 90%", why: "Kitob: yarmidan kam." },
  ], 'new'),
  "s-20-1d": mk("ch20.check.20-1d", "Signal", "Hukumat hamma uchun ta'limni oshirsa, signal nazariyasiga ko'ra nima bo'ladi?", [
    { text: "Ish haqi o'zgarmaydi — ta'lim unumdorlikni oshirmaydi", correct: true, why: "Human capital nazariyasiga ko'ra esa barcha ish haqi oshadi." },
    { text: "Barcha ish haqi oshadi", why: "Bu human capital bashorati." },
    { text: "Ish haqi tushadi", why: "Nazariya buni aytmaydi." },
    { text: "Faqat kam ta'limlilar yutadi", why: "Unday emas." },
  ], 'new'),
  "s-20-1e": mk("ch20.check.20-1e", "Superyulduz", "Qaysi sohada superyulduzlar ehtimoli ko'proq (QR 4)?", [
    { text: "Musiqa — yozuvlar bilan millionlarga arzon xizmat ko'rsatish mumkin", correct: true, why: "Stomatolog bir vaqtda cheklangan bemorga xizmat qiladi." },
    { text: "Stomatologiya", why: "Bir shifokor hammaga xizmat qila olmaydi." },
    { text: "Santexnika", why: "Cheklangan mijozlar." },
    { text: "Duradgorlik", why: "Cheklangan mijozlar." },
  ], 'new'),
  "s-20-1f": mk("ch20.check.20-1f", "Monopsony", "Monopsoniya raqobatli bozorga nisbatan nima qiladi?", [
    { text: "Kamroq ishchi yollaydi va past ish haqi to'laydi — deadweight loss", correct: true, why: "Monopoliyaning ko'zgusi: taklif egri chizig'i bo'ylab pastga harakat." },
    { text: "Ko'proq yollaydi", why: "Kamroq." },
    { text: "Yuqori ish haqi to'laydi", why: "Past." },
    { text: "Farqi yo'q", why: "Bozor kuchi natijani buzadi." },
  ], 'new'),
  "s-20-1g": { id: "ch20.check.20-1g", chapter: C, kind: "match", source: "new", topic: "Muvozanatdan yuqori ish haqi", prompt: "Sababni tavsif bilan moslashtiring.", pairs: [
    { left: "Minimum-wage law", right: "Qonun eng kam malakalilar ish haqini ko'taradi" },
    { left: "Union", right: "Ish tashlash tahdidi bilan muzokara" },
    { left: "Efficiency wages", right: "Firma unumdorlik uchun ixtiyoriy yuqori to'laydi" },
  ] },
  "s-20-2a": mk("ch20.check.20-2a", "O'lchash", "Bertrand–Mullainathan tajribasi nimani ko'rsatdi?", [
    { text: "“Oq” ismli rezyumelar ~50% ko'p qo'ng'iroq olgan — hatto “Equal Opportunity Employer” lar ham", correct: true, why: "Boshqa barcha jihatdan o'xshash rezyumelar — kuchli dalil." },
    { text: "Farq yo'q", why: "Katta farq topilgan." },
    { text: "Farq faqat human capital tufayli", why: "Rezyumelar bir xil edi." },
    { text: "Faqat Kanadada farq bor", why: "Bu Boston va Chikago; Kanada — Oreopoulos (39%)." },
  ], 'new'),
  "s-20-2b": { id: "ch20.check.20-2b", chapter: C, kind: "tf", source: "new", topic: "Ish beruvchilar", prompt: "Segregatsiyalangan tramvaylar tarixida tramvay kompaniyalari segregatsiya qonunlariga qarshi bo'lgan, chunki bu xarajatni oshirgan.", answer: true, why: "Roback (1986): “ko'p bo'sh joyni tashib yurishimiz kerak” — manba qonunda edi." },
  "s-20-2c": mk("ch20.check.20-2c", "Mijozlar va hukumat", "Qaysi holda raqobatli bozorda diskriminatsion ish haqi farqi saqlanib qolishi mumkin?", [
    { text: "Mijozlar diskriminatsiya uchun ko'proq to'lashga tayyor bo'lsa yoki hukumat talab qilsa", correct: true, why: "Ish beruvchi diskriminatsiyasini foyda motivi yo'qotadi." },
    { text: "Faqat ish beruvchilar diskriminatsiya qilsa", why: "Buni raqobat yo'qotadi." },
    { text: "Hech qachon", why: "Saqlanishi mumkin." },
    { text: "Firmalar foydani maksimallashtirsa", why: "Bu farqni yo'qotadi." },
  ], 'new'),
  "s-20-2d": { id: "ch20.check.20-2d", chapter: C, kind: "numeric", source: "new", topic: "Statistik diskriminatsiya", prompt: "Ko'k ko'zlilarning 10% i surunkali kechikadi. Ish beruvchi ularni yollamasa, ko'k ko'zlilarning necha foizi punktual bo'lsa ham kamsitiladi?", answer: 90, tolerance: 0, unit: "%", why: "Har bir shaxs guruh o'rtachasi bilan stereotiplanadi." },
};

export const practice: Question[] = [
  mk("ch20.new.interns", "Problem 1", "Talaba yozda haq to'lanmaydigan amaliyotni tanladi. Bu nima uchun oqilona bo'lishi mumkin?", [
    { text: "Imkoniyat xarajati — boy berilgan yozgi ish haqi; lekin u human capital (va signal) oladi — keyin yuqoriroq daromad kutiladi", correct: true, why: "Amaliyotchilar keyinroq ko'proq topishini kutish mumkin (kompensatsion farq investitsiya uchun)." },
    { text: "Imkoniyat xarajati nol", why: "Boshqa ish haqi boy berilgan." },
    { text: "Bu oqilona emas", why: "Kelajakdagi daromad hisobga olinadi." },
    { text: "Keyinroq kamroq topadi", why: "Kutilma — ko'proq." },
  ], 'new'),
  mk("ch20.new.secret", "Problem 5", "Tanlov: dunyodagi eng yaxshi universitetda 4 yil o'qish (lekin sir saqlash) yoki diplom olish (lekin o'qimaslik). Ko'pchilik diplomni tanlasa, bu nimani anglatadi?", [
    { text: "Signal effekti kuchli; o'qishni tanlasa — human capital muhim", correct: true, why: "Ikki nazariya o'rtasidagi bahsni sinaydigan fikr tajribasi." },
    { text: "Human capital nazariyasi isbotlandi", why: "Aksincha — signal." },
    { text: "Ta'lim foydasiz", why: "Ikki ta'sir ham bo'lishi mumkin." },
    { text: "Hech narsa", why: "Signal va human capital nisbatini ko'rsatadi." },
  ], 'new'),
  mk("ch20.new.greenspan", "Problem 8", "Greenspan 1960-yillarda asosan ayol iqtisodchilarni yollagan — “boshqalar baholamagani uchun ular arzonroq edi”. Ko'proq ish beruvchilar shunday qilsa?", [
    { text: "Ayollarga talab oshib, erkak-ayol ish haqi farqi qisqaradi — foydani maksimallashtiruvchi xatti-harakat", correct: true, why: "Ish beruvchi diskriminatsiyasiga qarshi raqobat kuchi. Boshqa firmalar mijozlar didi yoki o'z noto'g'ri qarashlari tufayli ergashmagan bo'lishi mumkin." },
    { text: "Farq kattalashadi", why: "Talab ayollar tomonga siljiydi." },
    { text: "Foydani kamaytiradi", why: "Xarajatni kamaytiradi." },
    { text: "Hech narsa o'zgarmaydi", why: "Nisbiy talab o'zgaradi." },
  ], 'new'),
  { id: "ch20.new.beauty", chapter: C, kind: "tf", source: "new", topic: "Case Study: Beauty", prompt: "Hamermesh va Biddle: o'rtachadan chiroyliroq odamlar o'rtacha ko'rinishdagilardan ~5% ko'p topadi; natijalar erkak va ayollar uchun o'xshash.", answer: true, why: "O'rtachalar o'rtachadan past ko'rinishdagilardan 5–10% ko'p. Talqinlar: tug'ma qobiliyat, boshqa qobiliyatning bilvosita o'lchovi yoki diskriminatsiya." },
  { id: "ch20.new.ate1", chapter: C, kind: "tf", source: "new", topic: "Ask the Experts", prompt: "IGM (2012): iqtisodchilarning 88% i texnologik o'zgarish turli malakadagi ishchilarga turlicha ta'sir qilgani AQSh tengsizligi o'sishining yetakchi sabablaridan biri ekaniga qo'shilgan.", answer: true, why: "88% agree, 8% uncertain, 4% disagree." },
  { id: "ch20.new.ate2", chapter: C, kind: "tf", source: "new", topic: "Ask the Experts", prompt: "IGM (2021): ko'pchilik iqtisodchilar non-compete bandlari ishchilar harakatchanligi va ish haqini sir himoyasi oqlaganidan ko'proq kamaytiradi deb hisoblaydi.", answer: true, why: "86% agree, 11% uncertain, 3% disagree." },
  { id: "ch20.new.union", chapter: C, kind: "numeric", source: "new", topic: "Uyushmalar", prompt: "Uyushmasiz o'xshash ishchi $50,000 topadi. Kitobdagi 10–20% oraliqning o'rtasini olsak, uyushma a'zosi taxminan qancha topadi?", answer: 57500, tolerance: 500, unit: "$", why: "50,000 × 1.15 = 57,500." },
  mk("ch20.new.uz", "O'zbekistondan misol", "Toshkentdagi IT-kompaniya chet el universiteti diplomi bo'lganlarga, ish vazifasi bir xil bo'lsa ham, ko'proq to'laydi. Bu qaysi nazariyaga ko'proq mos?", [
    { text: "Signal — diplom qobiliyat haqida ma'lumot beradi (human capital ham qisman bo'lishi mumkin)", correct: true, why: "Agar vazifa bir xil va bilim ishlatilmasa, asosan signal; aslida ikkalasining aralashmasi." },
    { text: "Kompensatsion farq", why: "Ish sharoiti bir xil." },
    { text: "Monopsoniya", why: "Ko'p IT firmalari raqobatlashadi." },
    { text: "Statistik diskriminatsiya", why: "Bu ijobiy signal, guruh stereotipi emas (garchi chegaralari yaqin)." },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
