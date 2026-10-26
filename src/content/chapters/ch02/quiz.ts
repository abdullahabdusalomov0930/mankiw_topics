import type { Question } from '../../types';

const C = 2;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch02.qq.1", "Modellar", "An economic model is", [
    { text: "a mechanical machine that replicates the functioning of the economy.", why: "Iqtisodiy modellar asosan diagramma va tenglamalar." },
    { text: "a fully detailed, realistic description of the economy.", why: "Aksincha — model ataylab ko'p tafsilotlarni tashlaydi." },
    { text: "a simplified representation of some aspect of the economy.", correct: true, why: "Model — muhim narsani ko'rish uchun soddalashtirilgan tasvir." },
    { text: "a computer program that predicts the future of the economy.", why: "Ba'zi modellar kompyuterda ishlaydi, lekin ta'rif bu emas." },
  ]),
  mk("ch02.qq.2", "Aylanma oqim", "The circular-flow diagram illustrates that, in markets for the factors of production,", [
    { text: "households are sellers, and firms are buyers.", correct: true, why: "Uy xo'jaliklari mehnat, yer va kapitalga egalik qiladi va ularni firmalarga sotadi." },
    { text: "households are buyers, and firms are sellers.", why: "Bu **tovar va xizmatlar** bozori." },
    { text: "households and firms are both buyers.", why: "Har bir bozorda bir tomon sotadi, ikkinchisi oladi." },
    { text: "households and firms are both sellers.", why: "Har bir bozorda bir tomon sotadi, ikkinchisi oladi." },
  ]),
  mk("ch02.qq.3", "PPF", "A point inside the production possibilities frontier is", [
    { text: "efficient but not feasible.", why: "Chegara ichidagi nuqta erishish mumkin, lekin samarasiz." },
    { text: "feasible but not efficient.", correct: true, why: "Mavjud resurslar bilan erishsa bo'ladi, lekin ikkala tovarni ham ko'paytirish mumkin (D nuqtasi)." },
    { text: "both efficient and feasible.", why: "Bu chegara **ustidagi** nuqtalar." },
    { text: "neither efficient nor feasible.", why: "Ichkaridagi nuqtaga erishsa bo'ladi (feasible). “Ikkalasi ham emas” chegaradan tashqaridagi nuqtalarga ham to'g'ri kelmaydi — ular shunchaki erishib bo'lmaydi." },
  ]),
  mk("ch02.qq.4", "Mikro va makro", "All of the following topics fall within the study of microeconomics **EXCEPT**", [
    { text: "the impact of cigarette taxes on the smoking behavior of teenagers.", why: "Aniq bozor va qarorlar — mikro." },
    { text: "the role of Microsoft's market power in the pricing of software.", why: "Bitta firma va bitta bozor — mikro." },
    { text: "the effectiveness of antipoverty programs in reducing homelessness.", why: "Uy xo'jaliklari qarorlari — mikro." },
    { text: "the influence of the government's budget deficit on economic growth.", correct: true, why: "Davlat byudjeti va iqtisodiy o'sish — butun iqtisodiyot, ya'ni **makro**." },
  ]),
  mk("ch02.qq.5", "Pozitiv/normativ", "Which of the following is a positive, rather than a normative, statement?", [
    { text: "Law X will reduce national income.", correct: true, why: "Dunyo qanday bo'lishini tasvirlaydi — ma'lumotlar bilan tekshirsa bo'ladi." },
    { text: "Law X is a good piece of legislation.", why: "“Yaxshi” — qadriyat bahosi, normativ." },
    { text: "Congress ought to pass law X.", why: "“Ought to” — normativ." },
    { text: "The president should veto law X.", why: "“Should” — normativ." },
  ]),
  mk("ch02.qq.6", "Iqtisodchilar davlatda", "The following parts of government regularly rely on the advice of economists:", [
    { text: "Department of the Treasury.", why: "To'g'ri (soliq siyosati), lekin yagona emas." },
    { text: "Office of Management and Budget.", why: "To'g'ri (xarajat rejalari), lekin yagona emas." },
    { text: "Department of Justice.", why: "To'g'ri (antimonopoliya), lekin yagona emas." },
    { text: "All of the above.", correct: true, why: "Iqtisodchilar Treasury, OMB, Justice, Labor, CBO, Fed va Council of Economic Advisers'da ishlaydi." },
  ]),
  mk("ch02.qq.7", "Kelishmovchilik", "Economists may disagree because they have different", [
    { text: "hunches about the validity of alternative theories.", why: "To'g'ri, lekin yagona emas." },
    { text: "judgments about the size of key parameters.", why: "To'g'ri (masalan, jamg'arma soliqqa qanchalik javob beradi), lekin yagona emas." },
    { text: "political philosophies about the goals of public policy.", why: "To'g'ri (qadriyatlar farqi), lekin yagona emas." },
    { text: "All of the above.", correct: true, why: "Ikki sabab: ilmiy baholar farqi (nazariya, parametrlar) va qadriyatlar farqi." },
  ]),
  mk("ch02.qq.8", "Tariflar", "Most economists believe that tariffs are", [
    { text: "a good way to promote domestic economic growth.", why: "93% iqtisodchi tariflar umumiy farovonlikni kamaytiradi deb hisoblaydi." },
    { text: "a poor way to raise general economic well-being.", correct: true, why: "Tariflar va kvotalar turmush darajasini oshiradigan ixtisoslashuvga to'sqinlik qiladi (9-bob)." },
    { text: "an often necessary response to foreign competition.", why: "Iqtisodchilarning ko'pchiligi bunga qo'shilmaydi." },
    { text: "an efficient way for the government to raise revenue.", why: "Tarif DWL yaratadi — samarasiz." },
  ]),
];

export const checks: Record<string, Question> = {
  "s-2-1a": mk("ch02.check.2-1a", "Ilmiy usul", "Nega iqtisodchilar ko'pincha “tabiiy tajribalar”dan foydalanadi?", [
    { text: "Inflyatsiyani o'rganish uchun mamlakat pul siyosatini ataylab o'zgartirib bo'lmaydi — laboratoriya tajribalari ko'pincha imkonsiz", correct: true, why: "Astronomlar va evolyutsion biologlar kabi, iqtisodchilar dunyo bergan ma'lumot bilan ishlaydi." },
    { text: "Iqtisodiyot fan emas", why: "Ilmiy usul har qanday sohaga qo'llanadi." },
    { text: "Tajribalar juda arzon", why: "Muammo — narx emas, imkonsizlik." },
    { text: "Ma'lumot yo'q", why: "Ma'lumot ko'p — tajriba qilish qiyin." },
  ], 'new'),
  "s-2-1b": { id: "ch02.check.2-1b", chapter: C, kind: "tf", source: "new", topic: "Farazlar", prompt: "Pul miqdori o'zgarishining qisqa muddatli ta'sirini o'rganishda narxlar qotib qolgan, uzoq muddatli ta'sirini o'rganishda esa egiluvchan deb faraz qilish mumkin.", answer: true, why: "Turli savollarga turli farazlar: marmar sharcha va plyaj to'pi kabi. Ko'p narxlar (jurnal narxi) kamdan-kam o'zgaradi." },
  "s-2-1c": { id: "ch02.check.2-1c", chapter: C, kind: "tf", source: "new", topic: "Modellar", prompt: "Model qanchalik real bo'lsa — hamma tafsilotlar bilan — shunchalik foydali.", answer: false, why: "Model aynan tafsilotlarni **tashlagani uchun** foydali (plastik odam modeli). “All models are wrong, but some are useful.”" },
  "s-2-1d": mk("ch02.check.2-1d", "Aylanma oqim", "Siz qahvaxonada kofe uchun $1 to'ladingiz. Bu dollar aylanma oqimda qayerga boradi?", [
    { text: "Tovar bozorida firmaga **tushum** → omillar bozorida ish haqi, ijara yoki foyda → uy xo'jaligi **daromadi**", correct: true, why: "Tashqi halqa — pul oqimi; dollar yana kimningdir hamyoniga qaytadi." },
    { text: "Firmada qoladi", why: "Firma uni omillarga sarflaydi; qolgani — egasining foydasi (u ham uy xo'jaligi a'zosi)." },
    { text: "Omillar bozoriga uy xo'jaligidan to'g'ridan-to'g'ri", why: "Kofe — tovar bozori." },
    { text: "Davlatga", why: "Oddiy modelda davlat yo'q." },
  ], 'new'),
  "s-2-1e": { id: "ch02.check.2-1e", chapter: C, kind: "numeric", source: "new", topic: "PPF", prompt: "Figure 2: iqtisodiyot A (600 mashina, 2,200 kompyuter) dan B (700, 2,000) ga o'tdi. Bir mashinaning imkoniyat xarajati necha kompyuter?", answer: 2, tolerance: 0, why: "200 kompyuter / 100 mashina = 2.", traps: [{ value: 0.5, why: "Teskarisini hisobladingiz — bu bir kompyuterning mashinadagi xarajati." }, { value: 200, why: "200 — 100 mashina uchun; bitta mashina uchun 2." }] },
  "s-2-1f": mk("ch02.check.2-1f", "Mikro va makro", "Qaysi biri makroiqtisodiyot savoli?", [
    { text: "Ishsizlik darajasi vaqt o'tishi bilan qanday o'zgaradi", correct: true, why: "Butun iqtisodiyot hodisasi." },
    { text: "Ta'limning maoshga ta'siri", why: "Mikro." },
    { text: "Chet el raqobatining AQSh avtosanoatiga ta'siri", why: "Mikro — aniq soha." },
    { text: "Nyu-Yorkda ijara nazorati", why: "Mikro — aniq bozor." },
  ], 'new'),
  "s-2-2a": { id: "ch02.check.2-2a", chapter: C, kind: "match", source: "new", topic: "Pozitiv/normativ", prompt: "Har bir da'voni turi bilan moslashtiring.", pairs: [
    { left: "Minimum-wage laws cause unemployment.", right: "Positive" },
    { left: "The government should raise the minimum wage.", right: "Normative" },
    { left: "Lower tax rates encourage more work and more saving.", right: "Positive (soliq va ish)" },
    { left: "Society ought to require welfare recipients to look for jobs.", right: "Normative (ought to)" },
  ] },
  "s-2-2b": mk("ch02.check.2-2b", "Iqtisodchilar davlatda", "Truman nega “bir qo'lli iqtisodchi” istagan?", [
    { text: "Iqtisodchilar doim “on the one hand… on the other hand…” derdi — chunki siyosat qarorlarida deyarli har doim trade-off bor", correct: true, why: "Hamma qaror oson deydigan iqtisodchiga ishonmang." },
    { text: "Iqtisodchilar ko'p xato qilardi", why: "Muammo — trade-offs, xato emas." },
    { text: "Iqtisodchilar juda qimmat edi", why: "Kitob bunday demaydi." },
    { text: "U iqtisodchilarni yoqtirmasdi", why: "U Council of Economic Advisers'dan foydalangan." },
  ], 'new'),
  "s-2-2c": { id: "ch02.check.2-2c", chapter: C, kind: "tf", source: "new", topic: "Siyosat", prompt: "Real hayotda prezident iqtisodchilar tavsiya qilgan eng yaxshi siyosatni darhol amalga oshiradi.", answer: false, why: "Darslik siyosatni “xayrixoh va qudratli qirol” yaratgandek ko'radi. Haqiqatda kommunikatsiya, matbuot, Kongress va siyosiy maslahatchilar fikri ham bor — iqtisodchi maslahati murakkab retseptning bir ingrediyenti." },
  "s-2-3a": mk("ch02.check.2-3a", "Kelishmovchilik", "Daromad solig'i o'rniga iste'mol solig'i bo'yicha bahsda iqtisodchilar nimada kelishmaydi?", [
    { text: "Jamg'arma soliq rag'batlariga qanchalik javob berishida — ya'ni pozitiv parametr hajmida", correct: true, why: "Turli pozitiv qarashlar turli normativ xulosalarga olib keladi." },
    { text: "Faqat qadriyatlarda", why: "Bu misol ilmiy baho farqiga misol." },
    { text: "Soliqlar kerakmi-yo'qmi", why: "Ikkala tomon ham soliq kerak deydi." },
    { text: "Hech narsada", why: "Ular kelishmaydi." },
  ], 'new'),
  "s-2-3b": { id: "ch02.check.2-3b", chapter: C, kind: "numeric", source: "new", topic: "Qadriyatlar", prompt: "Jack $40,000 daromad bilan $6,000 soliq to'laydi. Bu daromadining necha foizi?", answer: 15, tolerance: 0, unit: "%", why: "6,000 / 40,000 = 15%. Jill: 15,000 / 150,000 = 10%. Bu adolatlimi — fan emas, **qadriyatlar** masalasi." },
  "s-2-3c": { id: "ch02.check.2-3c", chapter: C, kind: "numeric", source: "new", topic: "Konsensus", prompt: "“A ceiling on rents reduces the quantity and quality of housing available” — iqtisodchilarning necha foizi rozi bo'lgan?", answer: 93, tolerance: 0, unit: "%", why: "93% — tariflar va kvotalar haqidagi da'voga ham 93% rozi. Iqtisodchilar o'ylanganidan ko'proq kelishadi." },
};

export const practice: Question[] = [
  { id: "ch02.new.larry-a", chapter: C, kind: "numeric", source: "new", topic: "Problem 4", prompt: "Larry (soatiga 1 maysazor yoki 1 mashina), Moe (1 yoki 2), Curly (2 yoki 1), har biri kuniga 10 soat. Hammasi faqat maysazor o'rsa (A), nechta maysazor?", answer: 40, tolerance: 0, why: "10 + 10 + 20 = 40 maysazor, 0 mashina." },
  { id: "ch02.new.larry-d", chapter: C, kind: "numeric", source: "new", topic: "Problem 4", prompt: "D: Larry vaqtining yarmini har biriga, Moe faqat mashina yuvadi, Curly faqat maysazor o'radi. Nechta mashina yuviladi?", answer: 25, tolerance: 0, why: "Larry 5 + Moe 20 = 25 mashina; maysazor: Larry 5 + Curly 20 = 25. D samarali, C (20, 20) esa samarasiz." },
  mk("ch02.new.larry-ineff", "Problem 4", "A, B, C, D taqsimotlaridan qaysi biri samarasiz?", [
    { text: "C — hammasi yarim-yarim (20 maysazor, 20 mashina): Curly mashina, Moe maysazor bilan ham band; 20 maysazor bilan 30 mashina yuvish mumkin edi", correct: true, why: "Har kim qiyosiy ustunligiga ixtisoslashsa (Curly — maysazor, Moe — mashina), ko'proq ishlab chiqariladi." },
    { text: "D", why: "D (25, 25) chegara ustida." },
    { text: "A", why: "A — chegaraning chekka nuqtasi (40, 0)." },
    { text: "Hech qaysi", why: "C samarasiz." },
  ], 'new'),
  mk("ch02.new.cows", "Review 6", "Sut va pechene ishlab chiqaradigan iqtisodiyotda kasallik sigirlarning yarmini o'ldirdi. PPF ga nima bo'ladi?", [
    { text: "Ichkariga siljiydi — ayniqsa sut o'qida: endi har qanday pechene miqdorida kamroq sut ishlab chiqariladi", correct: true, why: "Resurs (sigirlar) kamaydi → imkoniyatlar to'plami qisqaradi." },
    { text: "Tashqariga siljiydi", why: "Bu o'sishda bo'ladi." },
    { text: "O'zgarmaydi, faqat nuqta ichkariga ko'chadi", why: "Resurs yo'qolsa, chegaraning o'zi o'zgaradi." },
    { text: "Faqat pechene o'qi o'zgaradi", why: "Sigirlar sut ishlab chiqaradi." },
  ], 'new'),
  mk("ch02.new.peace", "Problem 2d", "Hawks (kuchli armiya) va Doves (kichik armiya) qurolni bir xil miqdorda kamaytirsa, kim kattaroq “peace dividend” (sariyog' o'sishi) oladi?", [
    { text: "Hawks — ular PPF ning qurol ko'p, tik qismida: u yerda qurolning imkoniyat xarajati (sariyog'da) yuqori", correct: true, why: "Bo'rtgan PPF: qurol ko'p bo'lganda bir birlik qurol ko'p sariyog'ga teng." },
    { text: "Doves", why: "Doves yotiq qismda — u yerda qurol kamaytirish kam sariyog' beradi." },
    { text: "Teng", why: "Faqat PPF to'g'ri chiziq bo'lsa teng bo'lardi." },
    { text: "Hech kim", why: "Qurol kamaysa, sariyog' ko'payadi." },
  ], 'new'),
  { id: "ch02.new.slope", chapter: C, kind: "numeric", source: "new", topic: "Nishab", prompt: "Emma (daromad $40,000): (5 ta, $10) va (25 ta, $5) nuqtalari orasidagi nishab?", answer: -0.25, tolerance: 0.001, why: "(5 − 10) / (25 − 5) = −5/20 = −1/4. To'g'ri chiziqda istalgan ikki nuqta bir xil nishab beradi.", traps: [{ value: -4, why: "Δx/Δy ni hisobladingiz — nishab Δy/Δx." }, { value: 0.25, why: "Ishora: chiziq pastga qaragan → manfiy." }] },
  mk("ch02.new.shift", "Movement vs shift", "Kutubxona yopildi, Emma barcha kitoblarni sotib olishi kerak. Grafikda nima bo'ladi?", [
    { text: "Talab egri chizig'i o'ngga siljiydi — kutubxona o'qlarda yo'q", correct: true, why: "O'qlarda ko'rsatilmagan o'zgaruvchi o'zgarsa — egri siljiydi." },
    { text: "Egri bo'ylab pastga harakat", why: "Bu faqat roman narxi o'zgarganda." },
    { text: "Egri chapga siljiydi", why: "Emma har narxda **ko'proq** roman oladi." },
    { text: "Hech narsa", why: "Talab o'zgaradi." },
  ], 'new'),
  mk("ch02.new.minivan", "Sababiyat", "Miniven sotib olish bola tug'ilishidan oldin bo'ladi. Bu nimani ko'rsatadi?", [
    { text: "Qaysi o'zgaruvchi oldin o'zgarganiga qarash sababni isbotlamaydi — odamlar kutishlarga javob beradi (reverse causality xavfi)", correct: true, why: "Miniven bola tug'ilishiga sabab emas." },
    { text: "Minivenlar tug'ilishni oshiradi", why: "Klassik xato." },
    { text: "Omitted variable yo'q", why: "Asosiy saboq — vaqt tartibi sababni isbotlamaydi." },
    { text: "Korrelyatsiya yo'q", why: "Korrelyatsiya bor, sababiyat — teskari." },
  ], 'new'),
  { id: "ch02.new.tf-positive", chapter: C, kind: "tf", source: "new", topic: "Pozitiv/normativ", prompt: "“Positive statement” — optimistik, ijobiy fikr degani.", answer: false, why: "Positive = **descriptive** (tasvirlaydi), optimizm bilan bog'liq emas. “Ishsizlik oshadi” ham positive statement." },
  mk("ch02.new.uz", "O'zbekistondan misol", "“O'zbekiston paxta eksportini kamaytirib, to'qimachilikni rivojlantirishi kerak.” Bu qanday da'vo?", [
    { text: "Normativ — “kerak” so'zi bor, faqat ma'lumotlar bilan baholab bo'lmaydi", correct: true, why: "Lekin pozitiv tahlil (masalan, to'qimachilik qancha ish o'rni beradi) normativ xulosaga ta'sir qiladi." },
    { text: "Pozitiv", why: "Dunyo qanday bo'lishi kerakligini aytyapti." },
    { text: "Makroiqtisodiy fakt", why: "Bu — tavsiya." },
    { text: "Model", why: "Bu da'vo." },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
