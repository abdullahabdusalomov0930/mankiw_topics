import type { Question } from '../../types';

const C = 16;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch16.qq.1", "Davlat monopoliyasi", "Some government grants of monopoly power may be desirable if they", [
    { text: "curtail the adverse effects of cut-throat competition.", why: "Kitob raqobatni zararli deb bilmaydi." },
    { text: "make industries more profitable.", why: "Foyda o'zi maqsad emas." },
    { text: "provide incentives for invention and artistic creation.", correct: true, why: "Patent va mualliflik huquqi tadqiqot va ijodni rag'batlantiradi." },
    { text: "save consumers from having to choose among alternative suppliers.", why: "Tanlov yaxshi narsa." },
  ]),
  mk("ch16.qq.2", "Tabiiy monopoliya", "A firm is a natural monopoly if it exhibits ___ as its output increases.", [
    { text: "increasing total revenue", why: "Tushum bilan bog'liq emas." },
    { text: "increasing marginal cost", why: "Tabiiy monopoliyada ATC tushadi." },
    { text: "decreasing marginal revenue", why: "Bu har qanday monopoliyada." },
    { text: "decreasing average total cost", correct: true, why: "Miqyos samarasi: bitta firma eng arzon." },
  ]),
  mk("ch16.qq.3", "P, MR, MC", "For a profit-maximizing monopoly that charges a single price, what is the relationship between P, MR, and MC?", [
    { text: "P = MR and MR = MC.", why: "Bu raqobatchi firma." },
    { text: "P > MR and MR = MC.", correct: true, why: "Foyda maksimumida MR = MC, monopoliyada P > MR." },
    { text: "P = MR and MR > MC.", why: "Ikkalasi ham noto'g'ri." },
    { text: "P > MR and MR > MC.", why: "MR > MC bo'lsa, ko'paytirish foydali." },
  ]),
  mk("ch16.qq.4", "Fixed cost", "If a monopoly's fixed costs increase, its price will ___, and its profit will ___.", [
    { text: "increase; decrease", why: "Fixed cost MC va MR ga ta'sir qilmaydi — narx o'zgarmaydi." },
    { text: "decrease; increase", why: "Hech biri." },
    { text: "increase; stay the same", why: "Foyda kamayadi." },
    { text: "stay the same; decrease", correct: true, why: "MR = MC nuqtasi o'zgarmaydi; foyda fixed cost miqdorida kamayadi." },
  ]),
  mk("ch16.qq.5", "Samaradorlik", "Compared with the social optimum, a monopoly firm chooses", [
    { text: "a quantity that is too low and a price that is too high.", correct: true, why: "MR = MC < talab = MC miqdori; narx yuqori." },
    { text: "a quantity that is too high and a price that is too low.", why: "Teskari." },
    { text: "a quantity and a price that are both too high.", why: "Talab pastga qaragan — ikkalasi bir vaqtda yuqori bo'lmaydi." },
    { text: "a quantity and a price that are both too low.", why: "Talab pastga qaragan." },
  ]),
  mk("ch16.qq.6", "DWL", "The deadweight loss from monopoly arises because", [
    { text: "the monopoly makes higher profits than a competitive firm would.", why: "Foyda — transfer, DWL emas." },
    { text: "some potential consumers who forgo buying the good value it more than its marginal cost.", correct: true, why: "Amalga oshmagan foydali savdolar — DWL." },
    { text: "consumers who buy the good have to pay more than marginal cost, reducing their consumer surplus.", why: "Bu ishlab chiqaruvchiga transfer." },
    { text: "the monopoly chooses a quantity that fails to equate price and average revenue.", why: "P = AR har doim." },
  ]),
  mk("ch16.qq.7", "Diskriminatsiya", "Price discrimination by a monopolist refers to charging different prices based on", [
    { text: "the consumer's willingness to pay.", correct: true, why: "Maqsad — har bir xaridorning WTP iga yaqin narx." },
    { text: "the consumer's racial or ethnic group.", why: "Iqtisodiy atama boshqa ma'noda." },
    { text: "the cost of producing the good for a particular consumer.", why: "Xarajat bir xil bo'lsa ham." },
    { text: "whether the consumer is likely to become a repeat buyer.", why: "Asosiy mezon — WTP." },
  ]),
  mk("ch16.qq.8", "Mukammal diskriminatsiya", "When a monopolist switches from charging a single price to practicing perfect price discrimination, it reduces", [
    { text: "the quantity produced.", why: "Miqdor samarali darajagacha **oshadi**." },
    { text: "the firm's profit.", why: "Foyda oshadi." },
    { text: "consumer surplus.", correct: true, why: "CS nolga tushadi." },
    { text: "total surplus.", why: "Umumiy surplus oshadi (DWL yo'qoladi)." },
  ]),
  mk("ch16.qq.9", "Antitrust", "Antitrust regulators are likely to prohibit two firms from merging if", [
    { text: "there are many other firms in the industry.", why: "Unda raqobat saqlanadi." },
    { text: "there are sizable synergies to the combination.", why: "Synergiyalar birlashish foydasini oshiradi." },
    { text: "the combined firm will have a large share of the market.", correct: true, why: "Bozor hokimiyati xavfi." },
    { text: "the combined firm will undercut competitors with lower prices.", why: "Past narx iste'molchiga foydali." },
  ]),
  mk("ch16.qq.10", "Regulyatsiya", "If regulators impose marginal-cost pricing on a natural monopoly, a possible problem is that", [
    { text: "consumers will buy more of the good than is efficient.", why: "P = MC da samarali miqdor." },
    { text: "consumers will buy less of the good than is efficient.", why: "P = MC da samarali." },
    { text: "the firm will lose money and exit the market.", correct: true, why: "ATC tushayotgan joyda MC < ATC → zarar." },
    { text: "the firm will make excessive profits.", why: "Zarar ko'radi." },
  ]),
];

export const checks: Record<string, Question> = {
  "s-16-1a": mk("ch16.check.16-1a", "Resurs", "Nega kalit resursga egalik orqali monopoliya kam uchraydi?", [
    { text: "Iqtisodiyotlar katta, resurslar ko'p kishiga tegishli va ko'p tovarlar xalqaro savdoda — yaqin o'rinbosari yo'q resurs kam", correct: true, why: "DeBeers ham 100% emas, ~80% gacha nazorat qilgan." },
    { text: "Davlat taqiqlaydi", why: "Asosiy sabab — o'rinbosarlar ko'pligi." },
    { text: "Resurslar arzon", why: "Gap narxda emas." },
    { text: "Monopoliyalar har doim zarar ko'radi", why: "Noto'g'ri." },
  ], 'new'),
  "s-16-1b": { id: "ch16.check.16-1b", chapter: C, kind: "tf", source: "new", topic: "Patent", prompt: "Patent farmatsevtika kompaniyasiga yangi dorini 20 yil davomida yagona ishlab chiqarish va sotish huquqini beradi.", answer: true, why: "Patent va mualliflik huquqi — davlat yaratgan monopoliyalar: yuqori narx (xarajat) va ko'proq ixtiro/ijod (foyda)." },
  "s-16-1c": mk("ch16.check.16-1c", "Tabiiy monopoliya", "Kichik shaharchadagi ko'prik tabiiy monopoliya. Aholi ko'paysa nima bo'lishi mumkin?", [
    { text: "Ko'prik tiqilinch bo'lib, bir nechta ko'prik kerak bo'ladi — bozor raqobatliroq bo'lishi mumkin", correct: true, why: "Bozor hajmi tabiiy monopoliya bor-yo'qligini belgilaydi." },
    { text: "Monopoliya kuchayadi", why: "Katta bozorda miqyos samarasi tugaydi." },
    { text: "Ko'prik xususiy tovarga aylanadi", why: "Savol bozor tuzilmasi haqida." },
    { text: "Hech narsa o'zgarmaydi", why: "Talab oshgan." },
  ], 'new'),
  "s-16-2a": { id: "ch16.check.16-2a", chapter: C, kind: "tf", source: "new", topic: "Talab", prompt: "Monopolist talab egri chizig'idan yuqoridagi istalgan narx–miqdor juftligini tanlay oladi.", answer: false, why: "Talab egri chizig'i cheklov: monopolist faqat uning ustidagi nuqtalarni tanlay oladi." },
  "s-16-2b": { id: "ch16.check.16-2b", chapter: C, kind: "numeric", source: "new", topic: "MR", prompt: "Table 1: 3 gallon $8 dan ($24), 4 gallon $7 dan ($28). 4-gallonning marjinal tushumi?", answer: 4, tolerance: 0, unit: "$", why: "28 − 24 = $4 < P = $7: output effect +7, price effect −3.", traps: [{ value: 7, why: "Bu narx — monopoliyada MR < P." }] },
  "s-16-2c": { id: "ch16.check.16-2c", chapter: C, kind: "numeric", source: "new", topic: "Foyda maks.", prompt: "Problem 8: P = 70 − Q, MC = 10 + Q. Monopoliya narxi?", answer: 50, tolerance: 0, unit: "$", why: "MR = 70 − 2Q = 10 + Q → Q = 20, P = 50.", traps: [{ value: 40, why: "Bu samarali narx (talab = MC, Q = 30). Monopolist MR = MC dan foydalanadi." }, { value: 30, why: "Bu Q = 20 dagi MC; narxni talab egri chizig'idan oling." }] },
  "s-16-2d": mk("ch16.check.16-2d", "Taklif egri chizig'i", "Nega monopoliyaning taklif egri chizig'i yo'q?", [
    { text: "Taklif egri chizig'i “berilgan narxda qancha” degan savolga javob; monopolist narxni o'zi tanlaydi va qaror talab egri chizig'iga bog'liq", correct: true, why: "FYI: Why a Monopoly Does Not Have a Supply Curve." },
    { text: "Monopolist hech narsa ishlab chiqarmaydi", why: "Ishlab chiqaradi." },
    { text: "MC egri chizig'i yo'q", why: "MC bor, lekin u taklif emas." },
    { text: "Narx davlat tomonidan belgilanadi", why: "Monopolist o'zi belgilaydi." },
  ], 'new'),
  "s-16-3a": { id: "ch16.check.16-3a", chapter: C, kind: "numeric", source: "new", topic: "DWL", prompt: "Problem 10: monopoliya Q = 30 (P = 700, MC = 400), samarali Q = 45. DWL?", answer: 2250, tolerance: 0, unit: "$", why: "½ × 15 × 300 = $2,250." },
  "s-16-3b": { id: "ch16.check.16-3b", chapter: C, kind: "tf", source: "new", topic: "Foyda", prompt: "Kitob fikricha, monopoliya foydasi o'zi umumiy surplusni kamaytiradi.", answer: false, why: "Foyda — xaridordan sotuvchiga transfer; muammo — kam miqdor (DWL). Istisno: monopoliyani saqlash uchun lobbi xarajatlari." },
  "s-16-4a": { id: "ch16.check.16-4a", chapter: C, kind: "numeric", source: "new", topic: "Readalot", prompt: "100,000 muxlis ($30) va 400,000 oddiy kitobxon ($5), mualliflik $2 mln, bosma 0. Narx diskriminatsiyasida foyda (mln $)?", answer: 3, tolerance: 0, unit: "mln $", why: "3 + 2 − 2 = $3 mln (yagona $30 narxda $1 mln).", traps: [{ value: 1, why: "Bu yagona $30 narxdagi foyda." }] },
  "s-16-4b": mk("ch16.check.16-4b", "Saboqlar", "Readalot masalining uchta saboqi?", [
    { text: "Diskriminatsiya ratsional; xaridorlarni WTP bo'yicha ajratish kerak (arbitraj buzadi); umumiy surplusni oshirishi mumkin", correct: true, why: "Mukammal holatda butun o'sish ishlab chiqaruvchiga." },
    { text: "Diskriminatsiya noqonuniy va doim zararli", why: "Iqtisodiy jihatdan farovonlikni oshirishi mumkin." },
    { text: "Faqat raqobatli bozorlarda mumkin", why: "Faqat bozor hokimiyati bo'lsa." },
    { text: "CS ni oshiradi", why: "Mukammal holatda CS = 0." },
  ], 'new'),
  "s-16-4c": { id: "ch16.check.16-4c", chapter: C, kind: "tf", source: "new", topic: "Nomukammal diskriminatsiya", prompt: "Nomukammal narx diskriminatsiyasi har doim umumiy surplusni oshiradi.", answer: false, why: "Uni oshirishi, kamaytirishi yoki o'zgartirmasligi mumkin; faqat foyda oshishi aniq." },
  "s-16-4d": { id: "ch16.check.16-4d", chapter: C, kind: "match", source: "new", topic: "Misollar", prompt: "Narx diskriminatsiyasi usulini u ajratadigan guruh bilan moslashtiring.", pairs: [
    { left: "Shanba kechasi qolsa arzon aviachipta", right: "Biznes va dam oluvchi yo'lovchilar" },
    { left: "Bolalar va keksalarga arzon kino", right: "WTP past yosh guruhlari" },
    { left: "Kuponlar va chegirma kunlari", right: "Vaqtini sarflashga tayyor, WTP past xaridorlar" },
    { left: "Daromadga qarab grant", right: "Boy va kam daromadli oilalar talabalari" },
    { left: "Bitta donut $0.50, o'ntasi $5", right: "Bir xaridorning birinchi va keyingi birliklari" },
  ] },
  "s-16-5a": mk("ch16.check.16-5a", "Antitrust", "Nega gorizontal birlashishlar vertikallardan qattiqroq tekshiriladi?", [
    { text: "Gorizontal — bir bozordagi raqiblar birlashadi (Coca-Cola + PepsiCo), raqobat bevosita kamayadi; vertikal — ishlab chiqarishning turli bosqichlari", correct: true, why: "Yetkazib beruvchi yoki xaridor bilan birlashish raqobatni kamroq kamaytiradi." },
    { text: "Vertikal birlashishlar taqiqlangan", why: "Ular kamroq bloklanadi." },
    { text: "Gorizontal birlashishda synergy yo'q", why: "Bo'lishi mumkin — bu baholanadi." },
    { text: "Farq yo'q", why: "Sudlar farqlaydi." },
  ], 'new'),
  "s-16-5b": { id: "ch16.check.16-5b", chapter: C, kind: "tf", source: "new", topic: "Regulyatsiya", prompt: "Average-cost pricing tabiiy monopoliyaga nol iqtisodiy foyda beradi va DWL ni butunlay yo'qotadi.", answer: false, why: "Nol foyda — ha, lekin P > MC bo'lgani uchun DWL qoladi (mahsulotga soliq kabi)." },
  "s-16-5c": mk("ch16.check.16-5c", "Davlat mulki", "Nega ko'p iqtisodchilar tabiiy monopoliyalarni xususiy qoldirishni afzal ko'radi?", [
    { text: "Xususiy egalar foydaning bir qismini olsa xarajatni kamaytirishga rag'batli; davlat korxonasida yomon boshqaruvdan iste'molchi va soliq to'lovchi zarar ko'radi — “saylov qutisi foyda motividan ishonchsizroq”", correct: true, why: "Kitob xulosasi." },
    { text: "Davlat korxonalari doim zararda", why: "Kitob bunday demaydi." },
    { text: "Xususiy firmalar narxni pasaytiradi", why: "Gap rag'batlar va xarajatlar haqida." },
    { text: "Davlat mulki noqonuniy", why: "Ko'p davlatlarda keng tarqalgan." },
  ], 'new'),
  "s-16-5d": { id: "ch16.check.16-5d", chapter: C, kind: "tf", source: "new", topic: "Stigler", prompt: "George Stigler fikricha, AQSh iqtisodiyotida “market failure” “political failure” dan ancha katta.", answer: false, why: "Teskari: uning fikricha bozor muvaffaqiyatsizligi siyosiy muvaffaqiyatsizlikdan ancha kichik — ba'zan hech narsa qilmaslik oqilona." },
};

export const practice: Question[] = [
  { id: "ch16.new.publisher", chapter: C, kind: "numeric", source: "new", topic: "Problem 1", prompt: "Nashriyot: $90 da 100k, $80 da 200k … (har $10 ga 100k), MC $10, mualliflik $2 mln. Maksimal foyda (mln $)?", answer: 18, tolerance: 0, unit: "mln $", why: "400k ($60): 24 − 4 − 2 = 18; 500k ($50): 25 − 5 − 2 = 18. Mualliflik $3 mln bo'lsa ham narx o'zgarmaydi (fixed cost). Samarali narx $10: 900k, foyda −$2 mln." },
  { id: "ch16.new.swift", chapter: C, kind: "numeric", source: "new", topic: "Problem 3", prompt: "Taylor Swift CD: $24 da 10k, $22 da 20k, … $14 da 60k; MC $5, FC 0. Maksimal foyda ($)?", answer: 550000, tolerance: 0, unit: "$", why: "MR (har CD): 24, 20, 16, 12, 8, 4 → MR > 5 gacha: 50k, P = $16; foyda 800k − 250k = $550,000 — agent shu miqdorgacha haq so'rashi mumkin." },
  mk("ch16.new.bridge", "Problem 4", "Ko'prik $2 mln, xizmat xarajati 0; talab: $8 da 0, har $1 kamayishda +100k o'tish. Xususiy kompaniya qursinmi?", [
    { text: "Yo'q: eng ko'p tushum $4 da 400k × 4 = $1.6 mln < $2 mln. Lekin davlat qurishi kerak: P = 0 da umumiy surplus ½ × 800k × $8 = $3.2 mln > $2 mln", correct: true, why: "Tabiiy monopoliya: xususiy foyda manfiy, ijtimoiy foyda musbat." },
    { text: "Ha, foyda $1.6 mln", why: "Bu tushum; xarajat $2 mln." },
    { text: "Davlat ham qurmasligi kerak", why: "Umumiy surplus xarajatdan katta." },
    { text: "Narx $8 bo'lishi kerak", why: "$8 da hech kim o'tmaydi." },
  ], 'new'),
  mk("ch16.new.potter-ceiling", "Problem 8", "Potter (P = 70 − Q, MC = 10 + Q). Monopoliya narxidan 10% past ($45) shift qo'yildi. Natija?", [
    { text: "Talab 25; Potter uchun 25-birlik MC = 35 < 45 → 25 sotadi, taqchillik yo'q, miqdor oshdi (20 → 25)", correct: true, why: "Monopoliyada shift samaradorlikni oshirishi mumkin. 50% past ($25) shiftda: talab 45, Potter faqat MC ≤ 25 → 15 → taqchillik 30." },
    { text: "Taqchillik 5", why: "Potter 25 ni ham ishlab chiqarishga tayyor." },
    { text: "Potter yopiladi", why: "P > AVC." },
    { text: "Miqdor kamayadi", why: "Monopoliyada shift miqdorni oshirishi mumkin." },
  ], 'new'),
  mk("ch16.new.wiknam", "Problem 9", "Wiknam monopolisti (avtarkiya P = $7) jahon narxi $6 da erkin savdoga ochildi. Nima bo'ladi?", [
    { text: "Firma price taker: P = MC → 5 ishlab chiqaradi, iste'mol 4 → 1 ta eksport qiladi, garchi avtarkiya narxi jahon narxidan yuqori bo'lsa ham", correct: true, why: "9-bob qoidasi raqobatli avtarkiya narxi uchun; monopoliya narxi MC dan yuqori." },
    { text: "Import qiladi", why: "Raqobatchi P = MC tahlili eksportni beradi." },
    { text: "Hech narsa o'zgarmaydi", why: "Firma endi price taker." },
    { text: "Ishlab chiqarish to'xtaydi", why: "P = 6 > AVC." },
  ], 'new'),
  { id: "ch16.new.p10-fee", chapter: C, kind: "numeric", source: "new", topic: "Problem 10d", prompt: "P10 da ixtirochiga har birlikka $150 to'lansa (MC = 250 + 10Q), monopoliya miqdori?", answer: 25, tolerance: 0, why: "1,000 − 20Q = 250 + 10Q → Q = 25, P = 750 → DWL oshadi. Flat fee yoki foydaning 50% i Q ni o'zgartirmaydi (30); tushumning 50% i Q = 20 ga tushiradi." },
  { id: "ch16.new.museum", chapter: C, kind: "numeric", source: "new", topic: "Problem 7", prompt: "Muzey: FC $2.4 mln, 100k aholi, har biri Q = 10 − P. Zarar ko'rmaydigan eng past kirish narxi?", answer: 4, tolerance: 0, unit: "$", why: "100k × p(10 − p): $3 → 2.1 mln, $4 → 2.4 mln. Har kishi CS = ½ × 6 × 6 = $18; merning tekin + $24 soliq rejasida 50 − 24 = $26 — bir xil aholi uchun merning rejasi yaxshiroq." },
  { id: "ch16.new.ate", chapter: C, kind: "tf", source: "new", topic: "Ask the Experts", prompt: "IGM (2021): iqtisodchilarning 91% i amerikaliklar keng polosali internet, kabel TV va telekom uchun qisman raqobat yetishmasligi tufayli ortiqcha to'laydi degan fikrga qo'shilgan.", answer: true, why: "91% agree, 7% uncertain, 2% disagree. Aviakompaniyalar birlashishi haqida esa (2013): 29% agree, 45% uncertain, 26% disagree." },
  mk("ch16.new.uz", "O'zbekistondan misol", "Shahar elektr tarmog'i — tabiiy monopoliya. Hukumat tarif belgilashda nimaga e'tibor berishi kerak?", [
    { text: "P = MC — samarali, lekin zarar (subsidiya kerak); P = ATC — zarar yo'q, lekin DWL; har ikkisida xarajatni kamaytirish rag'batini saqlash kerak", correct: true, why: "Figure 10 dilemmasi." },
    { text: "Narxni nolga tushirish", why: "Firma yopiladi." },
    { text: "Ikkinchi parallel tarmoq qurish", why: "Tabiiy monopoliyada bu xarajatni oshiradi." },
    { text: "Monopoliya narxiga ruxsat berish", why: "DWL va iste'molchiga zarar." },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
