import type { Question } from '../../types';

const C = 11;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });
const pairs = ['private goods and club goods', 'private goods and common resources', 'public goods and club goods', 'public goods and common resources'];
const goods = ['residential housing', 'national defense', 'restaurant meals', 'fish in the ocean'];
const fates = ['efficiently provided by market forces.', 'underprovided in the absence of government.', 'overused in the absence of government.', 'a type of natural monopoly.'];

export const quickQuiz: Question[] = [
  mk("ch11.qq.1", "Tovar turlari", "Which categories of goods are excludable?", pairs.map((p, i) => ({
    text: p,
    correct: i === 0,
    why: i === 0 ? "Xususiy va klub tovarlaridan to'lamaganni chetlatish mumkin (muzqaymoq, sun'iy yo'ldosh TV)." : "Jamoat tovarlari va umumiy resurslar **not excludable**.",
  }))),
  mk("ch11.qq.2", "Tovar turlari", "Which categories of goods are rival in consumption?", pairs.map((p, i) => ({
    text: p,
    correct: i === 1,
    why: i === 1 ? "Xususiy tovarlar va umumiy resurslar rival: siz olgan baliq boshqaga qolmaydi." : "Klub va jamoat tovarlari **not rival**.",
  }))),
  mk("ch11.qq.3", "Jamoat tovarlari", "Which is a public good?", goods.map((g, i) => ({
    text: g,
    correct: i === 1,
    why: ["Uy-joy — xususiy tovar.", "Mudofaa — na excludable, na rival.", "Restoran ovqati — xususiy tovar.", "Okeandagi baliq — umumiy resurs (rival)."][i],
  }))),
  mk("ch11.qq.4", "Jamoat tovarlari", "Public goods are", fates.map((f, i) => ({
    text: f,
    correct: i === 1,
    why: ["Free-rider muammosi tufayli bozor ularni samarali ta'minlamaydi.", "Free-rider muammosi: bozor ularni **kam** ta'minlaydi; davlat soliq bilan ta'minlashi mumkin.", "Haddan tashqari ishlatish — umumiy resurslar muammosi.", "Tabiiy monopoliya — klub tovarlari."][i],
  }))),
  mk("ch11.qq.5", "Xarajat–foyda", "Smallville: Clark values a fireworks display at $80, Lana at $50, and Pete (who dislikes fireworks) at −$30. Fireworks cost $120, or $40 per person. The efficient outcome is for the village", [
    { text: "to provide the public good because the median person values it more than its cost per person.", why: "Mediana emas — **jami** qiymat muhim." },
    { text: "to provide the public good because a majority of the residents value it more than its cost per person.", why: "Ko'pchilik ovozi samaradorlikni kafolatlamaydi." },
    { text: "to provide the public good because the total value of a majority exceeds the total cost.", why: "Pete'ning salbiy qiymati ham hisobga olinishi kerak." },
    { text: "not to provide the public good because the total value of all residents is less than the total cost.", correct: true, why: "80 + 50 − 30 = $100 < $120." },
  ]),
  mk("ch11.qq.6", "Umumiy resurslar", "Which of the following is an example of a common resource?", goods.map((g, i) => ({
    text: g,
    correct: i === 3,
    why: ["Xususiy tovar.", "Jamoat tovari.", "Xususiy tovar.", "Rival, lekin ovlashni to'xtatish qiyin — umumiy resurs."][i],
  }))),
  mk("ch11.qq.7", "Umumiy resurslar", "Common resources are", fates.map((f, i) => ({
    text: f,
    correct: i === 2,
    why: ["Bozor ularni haddan tashqari ishlatadi.", "Kam ta'minlash — jamoat tovarlari muammosi.", "Tragedy of the Commons: har kim boshqalarga zararni hisobga olmaydi → **ortiqcha** foydalanish.", "Bu klub tovarlari."][i],
  }))),
  mk("ch11.qq.8", "Yo'l to'lovi", "The Mass Pike is a toll road that is congested only during rush hour. During other times of day, the use of the highway is not ________, so the efficient toll is ________.", [
    { text: "excludable; higher", why: "Pullik yo'l — excludable." },
    { text: "excludable; zero", why: "Pullik yo'l — excludable." },
    { text: "rival in consumption; higher", why: "Rival bo'lmasa, tashqi effekt yo'q — to'lov oshmasligi kerak." },
    { text: "rival in consumption; zero", correct: true, why: "Tirbandlik bo'lmasa, qo'shimcha mashina hech kimga zarar qilmaydi → samarali to'lov nol." },
  ]),
];

export const checks: Record<string, Question> = {
  "s-11-1": { id: "ch11.check.11-1", chapter: C, kind: "match", source: "new", topic: "Tovar turlari", prompt: "Tovarni turi bilan moslashtiring.", pairs: [
    { left: "Muzqaymoq", right: "Private good" },
    { left: "Tornado sirenasi", right: "Public good" },
    { left: "Okeandagi baliq", right: "Common resource" },
    { left: "Sun'iy yo'ldosh TV", right: "Club good" },
  ] },
  "s-11-2a": { id: "ch11.check.11-2a", chapter: C, kind: "numeric", source: "new", topic: "Free rider", prompt: "Smalltown: 500 aholi, har biri mushakbozlikni $10 ga baholaydi, xarajat $1,000. Davlat har kimdan teng soliq olsa, har bir aholi sof qancha yutadi?", answer: 8, tolerance: 0, unit: "$", why: "Soliq 1000/500 = $2; yutuq 10 − 2 = $8.", traps: [{ value: 10, why: "Soliqni ayirishni unutdingiz." }] },
  "s-11-2b": mk("ch11.check.11-2b", "Jamoat tovarlari", "Nega xususiy firmalar fundamental tadqiqotga kam pul sarflaydi?", [
    { text: "Umumiy bilim (teorema) patentlanmaydi — firmalar boshqalar yaratgan bilimdan bepul foydalanishni afzal ko'radi (free ride)", correct: true, why: "Shuning uchun davlat NIH, NSF orqali fundamental tadqiqotni subsidiyalaydi." },
    { text: "Tadqiqot foydasiz", why: "Foydasi katta, lekin uni o'zlashtirib bo'lmaydi." },
    { text: "Patentlar juda uzoq", why: "Muammo — patentlab bo'lmasligida." },
    { text: "Tadqiqot rival", why: "Bilim not rival." },
  ], 'new'),
  "s-11-2c": { id: "ch11.check.11-2c", chapter: C, kind: "numeric", source: "new", topic: "Hayot qiymati", prompt: "Svetofor $10,000 turadi, halokat xavfini 1.6% dan 1.1% ga kamaytiradi. Hayot qiymati $10 mln. Kutilgan foyda necha dollar?", answer: 50000, tolerance: 0, unit: "$", why: "0.005 × $10,000,000 = $50,000 > $10,000 → o'rnating.", traps: [{ value: 5000000, why: "0.5 ni foiz sifatida emas, ulush sifatida oldingiz: 0.5% = 0.005." }] },
  "s-11-3a": mk("ch11.check.11-3a", "Tragedy of the Commons", "Umumiy yaylov fojiasining asosiy sababi nima?", [
    { text: "Har oila o'z qo'ylari boshqalar uchun yaylovni yomonlashtirishini (salbiy tashqi effekt) hisobga olmaydi", correct: true, why: "Xususiy va ijtimoiy rag'batlar farq qiladi." },
    { text: "Cho'ponlar ratsional emas", why: "Har biri o'zi uchun ratsional harakat qiladi." },
    { text: "Yaylov juda kichik edi", why: "Muammo — narx yo'qligi, hajm emas." },
    { text: "Jun narxi past", why: "Bog'liq emas." },
  ], 'new'),
  "s-11-3b": { id: "ch11.check.11-3b", chapter: C, kind: "tf", source: "new", topic: "Umumiy resurslar", prompt: "Mol go'shtiga talab katta bo'lgani uchun sigirlar yo'qolib ketmaydi, fil suyagiga talab esa fillarni xavf ostiga qo'yadi — chunki sigir xususiy tovar, fil esa umumiy resurs.", answer: true, why: "Ranchodagi sigirlarning egasi bor; fillar egasiz yuradi. Botsvana, Namibiya kabi davlatlar fillarni xususiy tovarga aylantirgach, ba'zi populyatsiyalar o'sa boshladi." },
};

export const practice: Question[] = [
  { id: "ch11.new.movies-n", chapter: C, kind: "numeric", source: "new", topic: "Problem 5", prompt: "To'rt xonadosh: 1-film uchun WTP 7+5+3+2, 2-film 6+4+2+1, 3-film 5+3+1+0, 4-film 4+2+0+0, 5-film 3+1+0+0. Har bir film $8 turadi. Total surplusni maksimal qiladigan filmlar soni?", answer: 3, tolerance: 0, why: "Jami WTP: 17, 13, 9, 6, 4. $8 dan katta — dastlabki 3 ta.", traps: [{ value: 2, why: "3-film: 9 > 8 — u ham foydali." }] },
  { id: "ch11.new.movies-chris", chapter: C, kind: "numeric", source: "new", topic: "Problem 5c", prompt: "3 film va xarajat teng bo'linadi ($6 har kishiga). Chris'ning surplusi (manfiy bo'lishi mumkin)?", answer: -3, tolerance: 0, unit: "$", why: "Chris: 2 + 1 + 0 = 3 − 6 = −3. Dwayne +12, Javier +6, Salman 0." },
  mk("ch11.new.bayport", "Problem 7", "Bayport: Frank $50, Joe $100, Callie $300; mushakbozlik $360, teng ulush. Nima bo'ladi?", [
    { text: "CBA: 450 > 360 → quring; lekin ovoz: faqat Callie ($300 > $120) “ha” → o'tmaydi", correct: true, why: "Ko'pchilik ovozi qiymatlarning kuchini hisobga olmaydi." },
    { text: "Ikkalasi ham “ha”", why: "Joe ($100 < $120) va Frank qarshi." },
    { text: "Ikkalasi ham “yo'q”", why: "Jami 450 > 360." },
    { text: "CBA “yo'q”, ovoz “ha”", why: "Bu River Heights holati." },
  ], 'new'),
  mk("ch11.new.river", "Problem 7", "River Heights: Nancy $20, Bess $140, Ned $160; xarajat $360. Nima bo'ladi?", [
    { text: "CBA: 320 < 360 → qurmang; ovoz: Bess va Ned (> $120) “ha” → o'tadi — samarasiz natija", correct: true, why: "Ovoz va samaradorlik bu yerda ham mos kelmaydi." },
    { text: "Ikkalasi ham “ha”", why: "Jami qiymat xarajatdan kam." },
    { text: "CBA “ha”, ovoz “yo'q”", why: "Bu Bayport." },
    { text: "Ikkalasi ham “yo'q”", why: "Ikki kishi ulushdan ko'p qadrlaydi." },
  ], 'new'),
  mk("ch11.new.wifi", "Problem 4", "Aeroportdagi bepul Wi-Fi'dan ko'p odam foydalana boshlab, tezlik tushdi. Endi bu qanday tovar?", [
    { text: "Umumiy resurs — not excludable, lekin endi rival; yechim: to'lov yoki parol bilan cheklash", correct: true, why: "Oldin (kam foydalanuvchi) jamoat tovari edi." },
    { text: "Jamoat tovari", why: "Tezlik tushdi — rival bo'ldi." },
    { text: "Klub tovari", why: "Bepul — excludable emas." },
    { text: "Xususiy tovar", why: "Bepul — excludable emas." },
  ], 'new'),
  { id: "ch11.new.tf-toll", chapter: C, kind: "tf", source: "new", topic: "Tirbandlik", prompt: "Benzin solig'i tirbandlikka qarshi mukammal vosita: u faqat tirband yo'llarda haydashni kamaytiradi.", answer: false, why: "U bo'sh yo'llarda haydashni ham kamaytiradi (u yerda tashqi effekt yo'q) va elektromobillar keltirgan tirbandlikni qamramaydi. Tirbandlik to'lovi (London, Stokgolm) aniqroq." },
  { id: "ch11.new.tf-ate", chapter: C, kind: "tf", source: "new", topic: "Ask the Experts", prompt: "IGM so'rovida iqtisodchilarning 98% tirband transport tarmoqlarida ko'proq tirbandlik to'lovlari (va boshqa soliqlarni kamaytirish) fuqarolarni boyitadi degan fikrga qo'shilgan.", answer: true, why: "98% agree, 2% uncertain, 0% disagree (IGM, 2012)." },
  mk("ch11.new.litter", "Problem 8", "Nega katta yo'llar bo'yida axlat ko'p, odamlarning hovlisida esa kam?", [
    { text: "Hovli — xususiy mulk, egasi toza saqlashga rag'batli; yo'l bo'yi — umumiy resurs, hech kim uning uchun javobgar emas", correct: true, why: "Mulk huquqi aniq bo'lmasa — Tragedy of the Commons." },
    { text: "Yo'lda odam ko'p", why: "Asosiy sabab — mulk huquqi." },
    { text: "Axlat qutilari yo'q", why: "Iqtisodiy izoh — rag'batlar." },
    { text: "Tasodif", why: "Tizimli farq." },
  ], 'new'),
  mk("ch11.new.uz", "O'zbekistondan misol", "Orol dengizi havzasida suv ko'p yillar paxta sug'orishga cheklovsiz olingani dengizning qurishiga hissa qo'shdi. Bu qaysi tushunchaga mos?", [
    { text: "Tragedy of the Commons — suv umumiy resurs: har bir foydalanuvchi boshqalarga zararni hisobga olmagan", correct: true, why: "Yechimlar: suvga narx/kvota, samarali sug'orishga rag'bat, mintaqaviy kelishuvlar (ko'p davlat — okean kabi qiyin)." },
    { text: "Free-rider muammosi", why: "Free rider — jamoat tovarini ta'minlashda; bu yerda ortiqcha foydalanish." },
    { text: "Klub tovari", why: "Suv olishdan chetlatilmagan." },
    { text: "Monopoliya", why: "Muammo — narx yo'qligi." },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
