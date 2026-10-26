import type { Question } from '../../types';

const C = 10;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch10.qq.1", "Ijobiy effekt", "Which of the following is an example of a **positive externality**?", [
    { text: "Myra mows Dev's lawn and is paid $100 for the service.", why: "Bu oddiy bozor bitimi — begona tomonga ta'sir yo'q." },
    { text: "Myra's lawnmower emits smoke that Dev's neighbor Xavier has to breathe.", why: "Bu **salbiy** tashqi effekt." },
    { text: "Dev's newly cut lawn makes his neighborhood more attractive.", correct: true, why: "Qo'shnilar (begonalar) foyda oladi, lekin hech narsa to'lamaydi — ijobiy tashqi effekt." },
    { text: "Dev's neighbor Xavier offers to pay him if he keeps his lawn well groomed.", why: "Bu tashqi effektga **xususiy yechim** (Coase), effektning o'zi emas." },
  ]),
  mk("ch10.qq.2", "Salbiy effekt", "If the production of a good yields a negative externality, the social-cost curve lies ________ the supply curve, and the socially optimal quantity is ________ than the equilibrium quantity.", [
    { text: "above; greater", why: "Ijtimoiy xarajat yuqori → optimum **kamroq**." },
    { text: "above; less", correct: true, why: "Social cost = private + external > private. Bozor tashqi xarajatni e'tiborsiz qoldirib ko'p ishlab chiqaradi." },
    { text: "below; greater", why: "Ijtimoiy xarajat xususiydan past bo'lmaydi." },
    { text: "below; less", why: "Ijtimoiy xarajat xususiydan past bo'lmaydi." },
  ]),
  mk("ch10.qq.3", "Korrektiv soliq", "When the government levies a tax equal to the external cost associated with a good's production, it ________ the price paid by consumers and makes the market outcome ________ efficient.", [
    { text: "increases; more", correct: true, why: "Taklif yuqoriga siljiydi → narx ↑, miqdor optimumga tushadi → samaraliroq." },
    { text: "increases; less", why: "Oddiy soliqdan farqli: tashqi effekt bo'lsa, korrektiv soliq samaradorlikni **oshiradi**." },
    { text: "decreases; more", why: "Soliq narxni oshiradi." },
    { text: "decreases; less", why: "Ikkalasi ham noto'g'ri." },
  ]),
  mk("ch10.qq.4", "Korrektiv soliq", "Which of the following statements about corrective taxes is generally **NOT** true?", [
    { text: "They reduce consumer surplus.", why: "To'g'ri: xaridorlar ko'proq to'laydi va kamroq oladi." },
    { text: "They raise government revenue.", why: "To'g'ri: \\(t \\times Q\\)." },
    { text: "They reduce the quantity sold in a market.", why: "To'g'ri: aynan maqsad — miqdorni optimumga tushirish." },
    { text: "They cause deadweight losses.", correct: true, why: "Noto'g'ri: ular mavjud DWL ni **yo'qotadi** — bozorni optimumga olib keladi." },
  ]),
  mk("ch10.qq.5", "Ruxsatnomalar", "The government auctions off 500 units of pollution rights. The rights sell for $50 per unit, raising $25,000. This policy is equivalent to a corrective tax of ______ per unit of pollution.", [
    { text: "$10", why: "Ruxsatnoma narxi $50." },
    { text: "$50", correct: true, why: "Ruxsatnoma narxi — ifloslanishning narxi; $50 soliq xuddi shu 500 birlikni beradi (Figure 4)." },
    { text: "$450", why: "Hisob xato." },
    { text: "$500", why: "500 — miqdor, narx emas." },
  ]),
  mk("ch10.qq.6", "Regulyatsiya", "Command-and-control regulation may be better than a corrective tax if", [
    { text: "a corrective tax would have differential effects on different industries.", why: "Bu soliqning **afzalligi** — kamaytirish arzon joyda bo'ladi." },
    { text: "some polluters can reduce emissions more cheaply than others.", why: "Aynan shunda soliq regulyatsiyadan yaxshiroq." },
    { text: "the negative externality is so large that the optimal quantity is zero.", correct: true, why: "Masalan, zaharli kimyoviy moddalarni suvga tashlash — oddiy taqiq eng to'g'ri." },
    { text: "knowledge about the cost of pollution abatement is dispersed and hard to obtain.", why: "Bunda regulyator kerakli ma'lumotga ega emas — soliq yaxshiroq." },
  ]),
  mk("ch10.qq.7", "Coase", "According to the Coase theorem,", [
    { text: "private actors can reach an agreement to solve the problem of externalities without the government.", correct: true, why: "Bitim xarajatsiz bo'lsa, tomonlar o'zi samarali kelishuvga keladi." },
    { text: "corrective subsidies are the best policy to solve the problem of positive externalities.", why: "Teorema xususiy kelishuv haqida." },
    { text: "negative externalities are a problem for society, but positive externalities are not.", why: "Ikkalasi ham samarasizlik yaratadi." },
    { text: "when two private actors amicably solve the problem of externalities, they shift the problem to a third party.", why: "Teorema bunday demaydi." },
  ]),
  mk("ch10.qq.8", "Coase", "The Coase theorem does **NOT** apply if", [
    { text: "there is a significant externality between two parties.", why: "Aynan shu holatda u qo'llanadi." },
    { text: "the court system vigorously enforces all contracts.", why: "Bu kelishuvni **osonlashtiradi**." },
    { text: "transaction costs make negotiation difficult.", correct: true, why: "Teorema bitim xarajatlari yo'q (yoki kichik) deb faraz qiladi." },
    { text: "both parties understand the externality fully.", why: "Bu ham kelishuvga yordam beradi." },
  ]),
];

export const checks: Record<string, Question> = {
  "s-10-1b": mk("ch10.check.10-1b", "Salbiy effekt", "Po'lat zavodi havoni ifloslantiradi. Bozor muvozanatida nima bo'ladi?", [
    { text: "Marjinal iste'molchi po'latni ijtimoiy xarajatdan kam qadrlaydi — ishlab chiqarishni kamaytirish total surplusni oshiradi", correct: true, why: "Q_market da talab ijtimoiy xarajatdan pastda: oxirgi birliklar jamiyatga foydasidan qimmatga tushadi." },
    { text: "Bozor optimal miqdorni ishlab chiqaradi", why: "Faqat tashqi effekt bo'lmasa." },
    { text: "Bozor kam ishlab chiqaradi", why: "Bu ijobiy effekt holati." },
    { text: "Narx juda yuqori", why: "Narx ijtimoiy xarajatni aks ettirmaydi — u juda past." },
  ], 'new'),
  "s-10-1c": { id: "ch10.check.10-1c", chapter: C, kind: "tf", source: "new", topic: "Ijobiy effekt", prompt: "Ta'limning ijobiy tashqi effektlari bor, shuning uchun davlat uni subsidiyalashi samaradorlikni oshiradi.", answer: true, why: "Ijtimoiy qiymat xususiy qiymatdan yuqori → bozor kam ta'lim beradi → subsidiya miqdorni optimumga yaqinlashtiradi (davlat maktablari, grantlar, soliq imtiyozlari)." },
  "s-10-2a": mk("ch10.check.10-2a", "Regulyatsiya", "EPA ikkala zavodga “ifloslanishni 300 tonnagacha kamaytiring” desa, nima muammo?", [
    { text: "Kamaytirish eng arzon joyda emas, hammada teng bo'ladi — bir xil natija qimmatroqqa tushadi", correct: true, why: "Agar qog'oz fabrikasi arzonroq kamaytira olsa, u ko'proq kamaytirishi samaraliroq." },
    { text: "Ifloslanish kamaymaydi", why: "Kamayadi — muammo xarajatda." },
    { text: "Regulyatsiya tushum beradi", why: "Regulyatsiya tushum bermaydi; soliq beradi." },
    { text: "Hech qanday muammo yo'q", why: "Kitob soliqni afzalroq deydi." },
  ], 'new'),
  "s-10-2b": { id: "ch10.check.10-2b", chapter: C, kind: "tf", source: "new", topic: "Korrektiv soliq", prompt: "Korrektiv soliq ham, boshqa soliqlar kabi, sof yo'qotish (DWL) yaratadi.", answer: false, why: "Tashqi effekt bo'lsa, korrektiv soliq bozorni optimumga **yaqinlashtiradi** — tushum ham beradi, samaradorlikni ham oshiradi." },
  "s-10-2c": mk("ch10.check.10-2c", "Ruxsatnomalar", "Sotiladigan ruxsatnomalar tizimida ruxsatnomalarning dastlabki taqsimoti samaradorlikka ta'sir qiladimi?", [
    { text: "Yo'q — kamaytirish qimmat firmalar sotib oladi, arzonlari sotadi; yakuniy taqsimot baribir samarali", correct: true, why: "Dastlabki taqsimot faqat kim boyishini o'zgartiradi." },
    { text: "Ha — teng bo'lishi kerak", why: "Savdo taqsimotni tuzatadi." },
    { text: "Ha — auktsion shart", why: "Auktsion davlatga tushum beradi, samaradorlikni emas." },
    { text: "Ruxsatnomalarni sotib bo'lmaydi", why: "Aynan sotish mumkinligi — tizimning mohiyati." },
  ], 'new'),
  "s-10-2d": mk("ch10.check.10-2d", "E'tirozlar", "Iqtisodchilar “toza havo bebaho — unga narx qo'yib bo'lmaydi” degan e'tirozga qanday javob beradi?", [
    { text: "Ifloslanishni butunlay yo'qotish imkonsiz va juda qimmat; toza muhit ham normal tovar — uni arzonroq qilish jamiyat ko'proq talab qilishiga olib keladi", correct: true, why: "Trade-offs tamoyili: atrof-muhit choralari imkoniyat xarajati bilan solishtiriladi. Bozor vositalari himoyani arzonlashtiradi." },
    { text: "Iqtisodchilar atrof-muhitga befarq", why: "Ko'p iqtisodchilar — ekologlar; ular boshqa “linza” bilan qaraydi." },
    { text: "Ifloslanishni to'liq taqiqlash kerak", why: "Hatto ot ham “ifloslantiradi” — barcha transportni taqiqlab bo'lmaydi." },
    { text: "Narx faqat boylar uchun", why: "Toza muhit daromad egiluvchanligi musbat bo'lgan tovar." },
  ], 'new'),
  "s-10-3b": { id: "ch10.check.10-3b", chapter: C, kind: "numeric", source: "new", topic: "Coase", prompt: "Emily'ning itdan foydasi $3,000, Horace zarari $1,500. Huquq Emilyda. Horace itni yo'qotish uchun eng ko'pi bilan qancha taklif qiladi?", answer: 1500, tolerance: 0, unit: "$", why: "Horace $1,500 dan ko'p taklif qilmaydi, Emily $3,000 dan kamiga rozi emas → bitim yo'q, it qoladi — bu samarali (3000 > 1500)." },
  "s-10-3c": mk("ch10.check.10-3c", "Coase", "Ko'l bo'yidagi zavod ko'p sonli baliqchilarga zarar yetkazadi. Nega Coase yechimi qiyin?", [
    { text: "Tomonlar juda ko'p — hammani kelishuvga muvofiqlashtirish qimmat (transaction costs)", correct: true, why: "Iqlim o'zgarishi ham shunday. Bunda davlat jamoaviy harakat vositasi bo'lishi mumkin." },
    { text: "Baliqchilar zavoddan kuchliroq", why: "Muammo kuchda emas, kelishuv xarajatida." },
    { text: "Ifloslanish samarali", why: "Buni bilmaymiz; muammo — kelishuvga erishish." },
    { text: "Coase teoremasi faqat itlarga tegishli", why: "Yo'q — misol shunchaki sodda." },
  ], 'new'),
};

export const practice: Question[] = [
  { id: "ch10.new.zlurp-a", chapter: C, kind: "numeric", source: "new", topic: "Problem 5", prompt: "Whoville: har bir shisha Zlurp uchun WTP $5, $4, $3, $2, $1; narx $1.50. Har bir odamning consumer surplusi?", answer: 8, tolerance: 0, unit: "$", why: "4 shisha oladi: 3.5 + 2.5 + 1.5 + 0.5 = 8.", traps: [{ value: 7.5, why: "To'rtinchi shisha ($2 > $1.50) ham olinadi: +0.5." }] },
  { id: "ch10.new.zlurp-b", chapter: C, kind: "numeric", source: "new", topic: "Problem 5", prompt: "Har bir shisha $1 tashqi xarajat yaratadi. Oldingi taqsimotda bir kishiga to'g'ri keladigan total surplus?", answer: 4, tolerance: 0, unit: "$", why: "CS 8 − tashqi xarajat 4 × $1 = 4." },
  { id: "ch10.new.zlurp-d", chapter: C, kind: "numeric", source: "new", topic: "Problem 5", prompt: "Mer $1 soliq qo'ydi (narx $2.50). Bir kishiga total surplus (CS − tashqi xarajat + tushum)?", answer: 4.5, tolerance: 0.01, unit: "$", why: "3 shisha: CS = 2.5 + 1.5 + 0.5 = 4.5; tashqi xarajat 3; tushum 3 → 4.5 > 4. Soliq samaradorlikni oshirdi." },
  { id: "ch10.new.happy-valley", chapter: C, kind: "numeric", source: "new", topic: "Problem 9", prompt: "Happy Valley: A (30 birlik, $20/birlik kamaytirish), B (40, $30), C (20, $10). Maqsad 60; har biriga 20 ta ruxsatnoma. Savdo bo'lganda jami kamaytirish xarajati?", answer: 400, tolerance: 0, unit: "$", why: "Eng arzon kamaytiradi: C 20 birlik ($200) va A 10 birlik ($200) = $400. C 20 ta ruxsatnomani B ga sotadi. Savdosiz: A $200 + B $600 = $800.", traps: [{ value: 800, why: "Bu savdosiz xarajat (A 10, B 20 kamaytiradi)." }] },
  { id: "ch10.new.tf-coase-rights", chapter: C, kind: "tf", source: "new", topic: "Coase", prompt: "Coase teoremasiga ko'ra, huquqning dastlabki taqsimoti farovonlik taqsimotiga ham ta'sir qilmaydi.", answer: false, why: "Samarali **natijaga** ta'sir qilmaydi, lekin **kim kimga to'lashini** — ya'ni farovonlik taqsimotini belgilaydi." },
  { id: "ch10.new.tf-gas", chapter: C, kind: "tf", source: "new", topic: "Benzin solig'i", prompt: "Kitobdagi tadqiqot bo'yicha optimal korrektiv benzin solig'i (2021 dollarida ~$3.20/gallon) AQShdagi haqiqiy soliqdan (~55 sent) ancha yuqori.", answer: true, why: "Benzin solig'i uch tashqi effektni hisobga oladi: ifloslanish, tirbandlik, baxtsiz hodisalar." },
  mk("ch10.new.club", "Problem 1", "Problem 1: The Club (rul qulfi) va Lojack (yashirin kuzatuv). Qaysi biri qanday tashqi effekt beradi?", [
    { text: "Club — salbiy (o'g'ri boshqa mashinaga o'tadi), Lojack — ijobiy (o'g'rilar qaysi mashinada borligini bilmaydi, o'g'irlik umuman kamayadi)", correct: true, why: "Siyosat xulosasi: Lojack'ni subsidiyalash (yoki Club'ga soliq) samaraliroq bo'lishi mumkin." },
    { text: "Ikkalasi ham ijobiy", why: "Club o'g'rilikni boshqalarga yo'naltiradi." },
    { text: "Ikkalasi ham salbiy", why: "Lojack hammaning xavfini kamaytiradi." },
    { text: "Tashqi effekt yo'q", why: "Ikkalasi ham boshqa mashina egalariga ta'sir qiladi." },
  ], 'new'),
  mk("ch10.new.permits-tech", "Problem 7", "Problem 7: ifloslanishni kamaytirish texnologiyasi keskin yaxshilandi. Nima bo'ladi?", [
    { text: "Ifloslanish huquqiga talab chapga: soliq ostida miqdor kamayadi (narx o'zgarmaydi), ruxsatnomalar ostida narx tushadi (miqdor o'zgarmaydi)", correct: true, why: "Soliq narxni, ruxsatnomalar miqdorni qotiradi (Figure 4)." },
    { text: "Ikkala tizimda ham miqdor kamayadi", why: "Ruxsatnomalar soni belgilangan — miqdor o'zgarmaydi." },
    { text: "Ikkala tizimda ham narx tushadi", why: "Soliq qonun bilan belgilangan." },
    { text: "Hech narsa o'zgarmaydi", why: "Talab siljiydi — biror narsa o'zgaradi." },
  ], 'new'),
  { id: "ch10.new.match", chapter: C, kind: "match", source: "new", topic: "Siyosatlar", prompt: "Tashqi effektga qarshi vositani uning tavsifi bilan moslashtiring.", pairs: [
    { left: "Command-and-control", right: "Xatti-harakatni bevosita talab qilish yoki taqiqlash" },
    { left: "Corrective tax", right: "Ifloslanish narxini belgilaydi" },
    { left: "Tradable permits", right: "Ifloslanish miqdorini belgilaydi, narxni bozor aniqlaydi" },
    { left: "Patent", right: "Ixtirochiga mulk huquqi berib, spilloverni internallashtiradi" },
    { left: "Coase bargain", right: "Tomonlar o'zaro kelishib samarali natijaga keladi" },
  ] },
  mk("ch10.new.uz", "O'zbekistondan misol", "Toshkentda yozda tirbandlik va havo ifloslanishi kuchli. Iqtisodchi qaysi yechimni birinchi bo'lib taklif qiladi?", [
    { text: "Yoqilg'i yoki shahar markaziga kirish uchun korrektiv to'lov — haydovchilar tashqi xarajatni hisobga oladi", correct: true, why: "Market-based policy: har bir haydovchi o'zi qanday moslashishni tanlaydi (metro, sheriklik, yaqinroq ko'chish) — eng arzon yo'l bilan." },
    { text: "Barcha mashinalarni taqiqlash", why: "Optimal miqdor nol emas — taqiq juda qimmat." },
    { text: "Hech narsa qilmaslik", why: "Salbiy tashqi effekt bozor samarasizligini anglatadi." },
    { text: "Benzin narxiga shift qo'yish", why: "Bu ko'proq haydashga undab, muammoni kuchaytiradi." },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
