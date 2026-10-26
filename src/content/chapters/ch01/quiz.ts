import type { Question } from '../../types';

const C = 1;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch01.qq.1", "Iqtisodiyot ta'rifi", "Economics is best defined as the study of", [
    { text: "how society manages its scarce resources.", correct: true, why: "Kitob ta'rifi: iqtisodiyot — jamiyat **cheklangan resurslarni** qanday boshqarishi haqidagi fan." },
    { text: "how to run a business most profitably.", why: "Bu biznes boshqaruvi; iqtisodiyot ancha keng — uy xo'jaliklari, davlat, butun iqtisodiyot." },
    { text: "how to predict inflation, unemployment, and stock prices.", why: "Bular iqtisodiyot o'rganadigan mavzularning bir qismi, ta'rif emas." },
    { text: "how the government can protect people from unchecked self-interest.", why: "Iqtisodiyot shaxsiy manfaat ko'pincha bozor orqali **foydali** natija berishini ham ko'rsatadi (ko'rinmas qo'l)." },
  ]),
  mk("ch01.qq.2", "Imkoniyat xarajati", "Your opportunity cost of going to a movie is", [
    { text: "the price of the ticket.", why: "Vaqtingiz qiymati unutildi." },
    { text: "the price of the ticket plus the cost of any soda and popcorn you buy at the theater.", why: "Hali ham vaqt qiymati yo'q — u ko'pincha eng katta xarajat." },
    { text: "the total cash expenditure needed to go to the movie plus the value of your time.", correct: true, why: "Imkoniyat xarajati — voz kechilgan **hamma narsa**: pul ham, o'sha vaqtda qila oladigan eng yaxshi ish ham." },
    { text: "zero, as long as you enjoy the movie and consider it a worthwhile use of time and money.", why: "Zavq — **foyda**; xarajat baribir mavjud. Foyda xarajatdan katta bo'lgani uchun borasiz." },
  ]),
  mk("ch01.qq.3", "Marjinal o'zgarish", "A marginal change is one that", [
    { text: "is not important for public policy.", why: "Marjinal tahlil siyosatda juda muhim." },
    { text: "incrementally alters an existing plan.", correct: true, why: "Marginal change — mavjud rejaga **kichik, qo'shimcha** tuzatish (“margin” = chekka)." },
    { text: "makes an outcome inefficient.", why: "Samaradorlik bilan bevosita bog'liq emas." },
    { text: "does not influence incentives.", why: "Rag'batlar aynan marjinal foyda/xarajatni o'zgartiradi." },
  ]),
  mk("ch01.qq.4", "Rag'batlar", "Because people respond to incentives,", [
    { text: "policymakers can alter outcomes by changing punishments or rewards.", why: "To'g'ri, lekin yagona to'g'ri javob emas." },
    { text: "policies can have unintended consequences.", why: "To'g'ri (xavfsizlik kamari — Peltzman), lekin yagona emas." },
    { text: "society faces a trade-off between efficiency and equality.", why: "To'g'ri: qayta taqsimlash mehnat rag'batini pasaytiradi — lekin yagona emas." },
    { text: "All of the above are correct.", correct: true, why: "Uchala natija ham rag'batlarga javobdan kelib chiqadi." },
  ]),
  mk("ch01.qq.5", "Savdo", "International trade benefits a nation when", [
    { text: "its revenue from selling abroad exceeds its outlays from buying abroad.", why: "Savdo foydasi eksport importdan oshishiga bog'liq emas." },
    { text: "its trading partners experience reduced economic well-being.", why: "Savdo — “yutish/yutqazish” o'yini emas; ikkala tomon ham yutadi." },
    { text: "all nations specialize in doing what they do best.", correct: true, why: "Savdo har kimga eng yaxshi qiladigan ishiga ixtisoslashish va ko'proq tovarni arzonroq olish imkonini beradi." },
    { text: "no domestic jobs are lost because of trade.", why: "Ba'zi ish o'rinlari yo'qolsa ham, mamlakat umuman yutadi (9-bob)." },
  ]),
  mk("ch01.qq.6", "Ko'rinmas qo'l", "Adam Smith's “invisible hand” refers to", [
    { text: "the subtle and often hidden methods that businesses use to profit at consumers' expense.", why: "Aksincha: raqobat shaxsiy manfaatni jamiyat foydasiga yo'naltiradi." },
    { text: "the ability of competitive markets to reach desirable outcomes, despite the self-interest of market participants.", correct: true, why: "Narxlar orqali raqobatli bozor o'z manfaatini ko'zlaganlarni jamiyat uchun foydali natijaga olib keladi." },
    { text: "the ability of government regulation to benefit consumers, even if the consumers are unaware of the regulations.", why: "Ko'rinmas qo'l — bozor, davlat emas." },
    { text: "the way in which producers or consumers in unregulated markets impose costs on innocent bystanders.", why: "Bu **externality** — ko'rinmas qo'lning muvaffaqiyatsizligi." },
  ]),
  mk("ch01.qq.7", "Davlat roli", "Governments may intervene in a market economy in order to", [
    { text: "protect property rights.", why: "To'g'ri, lekin yagona emas." },
    { text: "correct a market failure due to externalities.", why: "To'g'ri, lekin yagona emas." },
    { text: "achieve a more equal distribution of income.", why: "To'g'ri, lekin yagona emas." },
    { text: "All of the above are correct.", correct: true, why: "Mulk huquqini himoya qilish, samaradorlikni oshirish (bozor muvaffaqiyatsizligi) va tenglikni oshirish — davlat aralashuvining sabablari." },
  ]),
  mk("ch01.qq.8", "Unumdorlik", "The main reason that some nations have higher average living standards than others is that", [
    { text: "the richer nations have exploited the poorer ones.", why: "Kitob: turmush darajasi farqining deyarli hammasi unumdorlik bilan izohlanadi." },
    { text: "the governments of some nations have created more money.", why: "Ko'p pul — inflyatsiya, boylik emas." },
    { text: "some nations have stronger laws protecting worker rights.", why: "AQSh ishchilarining “haqiqiy qahramoni” — kasaba uyushmalari emas, unumdorlik." },
    { text: "some nations have higher levels of productivity.", correct: true, why: "Principle 8: turmush darajasi bir soat mehnatda qancha ishlab chiqarilishiga bog'liq." },
  ]),
  mk("ch01.qq.9", "Inflyatsiya", "If a nation has high and persistent inflation, the most likely explanation is", [
    { text: "the government creating excessive amounts of money.", correct: true, why: "Principle 9: katta va uzoq inflyatsiyaning sababi deyarli har doim pul miqdorining o'sishi." },
    { text: "unions bargaining for excessively high wages.", why: "Bu uzoq muddatli inflyatsiyaning asosiy sababi emas." },
    { text: "the government imposing excessive levels of taxation.", why: "Soliqlar narxlarni uzluksiz oshirib bormaydi." },
    { text: "firms using their market power to enforce excessive price hikes.", why: "Bozor hokimiyati narx **darajasini** bir marta oshirishi mumkin, lekin doimiy inflyatsiya bermaydi." },
  ]),
  mk("ch01.qq.10", "Inflyatsiya va ishsizlik", "If a government uses the tools of monetary policy to reduce the demand for goods and services, the likely result is ________ inflation and ________ unemployment in the short run.", [
    { text: "lower; lower", why: "Talab kamaysa, firmalar kamroq ishchi yollaydi → ishsizlik **oshadi**." },
    { text: "lower; higher", correct: true, why: "Principle 10: qisqa muddatda inflyatsiya va ishsizlik qarama-qarshi harakatlanadi." },
    { text: "higher; higher", why: "Talab kamaysa, narxlar sekinroq o'sadi." },
    { text: "higher; lower", why: "Bu talab **oshganda** bo'ladi." },
  ]),
];

export const checks: Record<string, Question> = {
  "s-1-1a": mk("ch01.check.1-1a", "Trade-offs", "Hukumat boylardan kambag'allarga daromadni qayta taqsimlasa, qaysi trade-off yuzaga keladi?", [
    { text: "Tenglik oshadi, lekin samaradorlik pasayishi mumkin — mehnat rag'bati kamayadi va “pirog kichrayadi”", correct: true, why: "Efficiency — pirog hajmi, equality — uning qanday kesilishi. Teng kesish ba'zan pirogni kichraytiradi." },
    { text: "Samaradorlik ham, tenglik ham oshadi", why: "Kitob aynan bu ikki maqsad **to'qnashishi** mumkinligini ta'kidlaydi." },
    { text: "Hech qanday trade-off yo'q", why: "“Tekin tushlik yo'q.”" },
    { text: "“Guns and butter” trade-off", why: "Bu harbiy va iste'mol tovarlari o'rtasidagi tanlov." },
  ], 'new'),
  "s-1-1b": { id: "ch01.check.1-1b", chapter: C, kind: "tf", source: "new", topic: "Imkoniyat xarajati", prompt: "Universitetda o'qishning imkoniyat xarajatiga yotoqxona va ovqatning **to'liq** narxi kiradi.", answer: false, why: "Uyda ham yashash va ovqatlanish kerak — faqat uy xarajatidan **oshgan** qismi kiradi. Eng katta xarajat esa — o'qish sabab topilmagan maosh." },
  "s-1-1c": { id: "ch01.check.1-1c", chapter: C, kind: "numeric", source: "new", topic: "Marjinal fikrlash", prompt: "Oyiga $30 lik striming obunasi bor, oyiga 5 ta film ko'rasiz. Bugun yana bitta film ko'rishning **qo'shimcha pul xarajati** necha dollar?", answer: 0, tolerance: 0, unit: "$", why: "Obuna baribir to'lanadi — marjinal xarajat **$0**. Yagona xarajat — vaqtingiz.", traps: [{ value: 6, why: "$6 — o'rtacha xarajat (30/5), qaror uchun ahamiyatsiz." }] },
  "s-1-1d": mk("ch01.check.1-1d", "Rag'batlar", "Peltzman (1975) bo'yicha xavfsizlik kamari to'g'risidagi qonunlar natijasi qanday bo'ldi?", [
    { text: "Har bir avariyada o'lim kamaydi, lekin avariyalar ko'paydi: haydovchilar o'limi deyarli o'zgarmadi, piyodalar o'limi oshdi", correct: true, why: "Kamar avariya “narxini” tushirdi → haydovchilar tezroq va beparvoroq yurdi. Bilvosita ta'sir — rag'batlar orqali." },
    { text: "Barcha o'limlar keskin kamaydi", why: "Faqat bevosita ta'sirni hisobga oldingiz." },
    { text: "Avariyalar kamaydi", why: "Ehtiyotkorlik kamaygani uchun avariyalar **ko'paydi**." },
    { text: "Hech narsa o'zgarmadi", why: "Xatti-harakat o'zgardi." },
  ], 'new'),
  "s-1-2a": { id: "ch01.check.1-2a", chapter: C, kind: "tf", source: "new", topic: "Savdo", prompt: "AQSh va Xitoy o'rtasidagi savdo sport musobaqasiga o'xshaydi: biri yutsa, ikkinchisi yutqazadi.", answer: false, why: "Savdo **win–win**: har bir mamlakat eng yaxshi qiladigan ishiga ixtisoslashadi va ko'proq turdagi tovarni arzonroq oladi. Oila ham boshqalardan ajralib, o'zi ovqat yetishtirib, kiyim tikib yashasa, yutqazadi." },
  "s-1-2b": mk("ch01.check.1-2b", "Bozor", "Nega markaziy rejalashtirish muvaffaqiyatsiz bo'ldi (kitob izohi)?", [
    { text: "Rejalashtiruvchilarda bozorda narxlarda aks etadigan xarajat va didlar haqidagi ulkan, doim o'zgaradigan ma'lumot yo'q edi", correct: true, why: "Ular iqtisodiyotni “bir qo'lini — ko'rinmas qo'lni — orqasiga bog'lab” boshqarishga urindi." },
    { text: "Rejalashtiruvchilar yetarlicha ishlamadi", why: "Muammo — ma'lumot va rag'batlarda, mehnatsevarlikda emas." },
    { text: "Narxlar juda tez o'zgardi", why: "Aksincha, narxlar bozorda emas, rejalashtiruvchilar tomonidan belgilangan." },
    { text: "Savdo juda ko'p edi", why: "Bog'liq emas." },
  ], 'new'),
  "s-1-2c": { id: "ch01.check.1-2c", chapter: C, kind: "match", source: "new", topic: "Bozor muvaffaqiyatsizligi", prompt: "Holatni bozor muvaffaqiyatsizligi turi yoki davlat maqsadi bilan moslashtiring.", pairs: [
    { left: "Zavod tutuni qo'shnilar sog'lig'iga zarar", right: "Externality" },
    { left: "Shahardagi yagona quduq egasi suvni qimmat sotadi", right: "Market power" },
    { left: "Progressiv daromad solig'i", right: "Equality" },
    { left: "Politsiya va sud o'g'rilikdan himoya qiladi", right: "Property rights" },
  ] },
  "s-1-3a": mk("ch01.check.1-3a", "Unumdorlik", "Turmush darajasini oshirish uchun siyosatchi birinchi navbatda nimaga e'tibor berishi kerak?", [
    { text: "Ishchilar yaxshi o'qitilgani, kerakli asbob-uskunalar va eng yaxshi texnologiyaga ega bo'lishiga — unumdorlikka", correct: true, why: "Principle 8: asosiy savol — siyosat tovar va xizmatlar ishlab chiqarish qobiliyatiga qanday ta'sir qiladi." },
    { text: "Ko'proq pul bosib chiqarishga", why: "Bu inflyatsiya beradi (Principle 9)." },
    { text: "Importni taqiqlashga", why: "Savdo hammani boyitadi (Principle 5)." },
    { text: "Kasaba uyushmalarini kuchaytirishga", why: "Kitob: haqiqiy qahramon — unumdorlik o'sishi." },
  ], 'new'),
  "s-1-3b": { id: "ch01.check.1-3b", chapter: C, kind: "tf", source: "new", topic: "Inflyatsiya", prompt: "1920-yillar boshida Germaniyada narxlar har oy o'rtacha uch barobar oshganda, pul miqdori ham har oy uch barobar oshgan.", answer: true, why: "Katta va uzoq inflyatsiyaning asosiy sababi — pul miqdorining o'sishi: pul ko'p bosilsa, uning qiymati tushadi." },
  "s-1-3c": mk("ch01.check.1-3c", "Phillips trade-off", "Markaziy bank pul miqdorini oshirdi. Bir-ikki yil ichida nima bo'lishi mumkin?", [
    { text: "Xarajatlar va talab oshadi → firmalar ko'proq yollaydi (ishsizlik ↓), vaqt o'tib narxlar oshadi (inflyatsiya ↑)", correct: true, why: "Principle 10: qisqa muddatda inflyatsiya va ishsizlik o'rtasida trade-off." },
    { text: "Inflyatsiya ham, ishsizlik ham kamayadi", why: "Ular qisqa muddatda qarama-qarshi yo'nalishda harakatlanadi." },
    { text: "Faqat ishsizlik oshadi", why: "Talab oshgani uchun ishsizlik kamayadi." },
    { text: "Hech narsa o'zgarmaydi", why: "Pul qisqa muddatda talabga ta'sir qiladi." },
  ], 'new'),
};

export const practice: Question[] = [
  { id: "ch01.new.match-principles", chapter: C, kind: "match", source: "new", topic: "O'nta tamoyil", prompt: "Misolni tamoyil bilan moslashtiring.", pairs: [
    { left: "“Tekin tushlik yo'q”", right: "1. People face trade-offs" },
    { left: "O'qish uchun boy berilgan maosh", right: "2. The cost of something is what you give up" },
    { left: "Bo'sh o'ringa $300 lik chipta", right: "3. Rational people think at the margin" },
    { left: "Norvegiyada benzin solig'i → elektromobillar", right: "4. People respond to incentives" },
    { left: "Germaniya gazetasi 70 mln marka", right: "9. Prices rise when the government prints too much money" },
  ] },
  mk("ch01.new.water-diamond", "Marjinal fikrlash", "Nega suv arzon, olmos esa qimmat, garchi suv hayot uchun zarur bo'lsa ham?", [
    { text: "WTP **marjinal** foydaga bog'liq: suv ko'p — qo'shimcha stakanning foydasi kichik; olmos kam — qo'shimcha toshning foydasi katta", correct: true, why: "Qadr umumiy foydaga emas, qo'shimcha birlik foydasiga qarab belgilanadi." },
    { text: "Olmosni ishlab chiqarish qimmat, xolos", why: "Kitob izohi — marjinal foyda." },
    { text: "Odamlar ratsional emas", why: "Bu ratsional xatti-harakat." },
    { text: "Davlat suv narxini belgilaydi", why: "Kitob izohi bu emas." },
  ], 'new'),
  { id: "ch01.new.sunk", chapter: C, kind: "numeric", source: "new", topic: "Problem 5", prompt: "Mahsulotga $5 mln sarflangan. Kutilgan sotuv $3 mln, tugatish uchun yana $1 mln kerak. Tugatish uchun **ko'pi bilan** qancha (mln $) to'lash mantiqli?", answer: 3, tolerance: 0, unit: "mln $", why: "Sarflangan $5 mln — **sunk cost**, qarorga kirmaydi. Qo'shimcha tushum $3 mln → tugatish xarajati $3 mln dan kam bo'lsa, davom eting (1 < 3 → ha).", traps: [{ value: 0, why: "Sunk cost'ni hisobga oldingiz: $5 mln qaytmaydi, u qarorga ta'sir qilmasligi kerak." }, { value: 2, why: "3 − 1 = 2 — bu $1 mln to'langandagi foyda, maksimal xarajat emas." }] },
  { id: "ch01.new.interest", chapter: C, kind: "numeric", source: "new", topic: "Problem 4", prompt: "$100 yutdingiz. Bank 5% foiz to'laydi. Pulni hozir sarflashning imkoniyat xarajati (bir yildan keyingi dollarlarda)?", answer: 105, tolerance: 0, unit: "$", why: "Hozir sarflasangiz, bir yildan keyin ega bo'ladigan $105 dan voz kechasiz.", traps: [{ value: 5, why: "$5 — faqat foiz; voz kechilgan jami summa $105." }] },
  { id: "ch01.new.tf-uber", chapter: C, kind: "tf", source: "new", topic: "Uber", prompt: "2014-yilgi so'rovda iqtisodchilarning hammasi Uber kabi xizmatlar iste'molchi farovonligini oshiradi deb javob bergan.", answer: true, why: "Har bir iqtisodchi “Ha” dedi; surge pricing haqida esa 85% “Ha” degan." },
  { id: "ch01.new.tf-guarantee", chapter: C, kind: "tf", source: "new", topic: "Davlat roli", prompt: "“Davlat bozor natijalarini yaxshilay oladi” degani “davlat har doim yaxshilaydi” degani.", answer: false, why: "Siyosat farishtalar emas, nomukammal siyosiy jarayon tomonidan yaratiladi: ba'zan kuchlilarni mukofotlaydi, ba'zan yaxshi niyatli, lekin kam ma'lumotli rahbarlar tomonidan qilinadi." },
  mk("ch01.new.uz", "O'zbekistondan misol", "Toshkentda yandex-taksi narxi Navro'z kechasi yoki kuchli yomg'irda keskin oshadi. Iqtisodchi bunga qanday qaraydi?", [
    { text: "Surge pricing ko'proq haydovchini ishga chiqaradi va xizmatni uni eng ko'p qadrlaganlarga taqsimlaydi — kutish va izlash xarajatlari kamayadi", correct: true, why: "Principle 4 va 6: narx rag'bat beradi; Uber case study'dagi mantiq." },
    { text: "Bu adolatsiz — narxni taqiqlash kerak", why: "Narx shifti taqchillik beradi (6-bob): mashina topish qiyinlashadi." },
    { text: "Narx o'zgarishi hech kimga ta'sir qilmaydi", why: "Haydovchilar ham, yo'lovchilar ham rag'batga javob beradi." },
    { text: "Bu bozor hokimiyatining belgisi", why: "Raqobatli bozorda ham talab oshganda narx oshadi." },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
