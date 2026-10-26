import type { Question } from '../../types';

const C = 3;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });
const AB = (aWash: string, aMow: string) => `${aWash} in washing, ${aMow} in mowing`;

export const quickQuiz: Question[] = [
  mk("ch03.qq.1", "PPF va iste'mol", "Before Frank and Ruby engage in trade, each consumes", [
    { text: "at a point inside his or her production possibilities frontier.", why: "Ular hamma vaqtini ishlatadi — chegara ustida." },
    { text: "at a point on his or her production possibilities frontier.", correct: true, why: "Savdosiz PPF = iste'mol imkoniyatlari chegarasi; A va B chegara ustida." },
    { text: "at a point outside his or her production possibilities frontier.", why: "Savdosiz bunga erishib bo'lmaydi." },
    { text: "the same amounts of meat and potatoes as the other.", why: "Frank (4, 16), Ruby (12, 24) — turlicha." },
  ]),
  mk("ch03.qq.2", "Savdodan yutuq", "After Frank and Ruby trade, each of them consumes", [
    { text: "at a point inside his or her production possibilities frontier.", why: "Savdo ikkalasini ham yaxshilaydi." },
    { text: "at a point on his or her production possibilities frontier.", why: "A* (5, 17) va B* (13, 27) chegaradan tashqarida." },
    { text: "at a point outside his or her production possibilities frontier.", correct: true, why: "Aynan shu — savdodan yutuq: savdosiz imkonsiz bo'lgan nuqtalar." },
    { text: "the same amounts of meat and potatoes as the other.", why: "Frank 5 + 17, Ruby 13 + 27." },
  ]),
  mk("ch03.qq.3", "Mutlaq ustunlik", "In an hour, Mateo can wash 2 cars or mow 1 lawn, and Sophia can wash 3 cars or mow 1 lawn. Who has the absolute advantage in car washing, and who has it in lawn mowing?", [
    { text: AB("Mateo", "Sophia"), why: "Sophia soatiga ko'proq (3 > 2) mashina yuvadi." },
    { text: AB("Sophia", "Mateo"), why: "Maysazorda ikkalasi teng (1 = 1)." },
    { text: "Mateo in washing, neither in mowing", why: "Yuvishda Sophia ustun." },
    { text: "Sophia in washing, neither in mowing", correct: true, why: "Mutlaq ustunlik — kamroq resurs: yuvishda Sophia (3 > 2), o'rishda hech kim (1 = 1)." },
  ]),
  mk("ch03.qq.4", "Qiyosiy ustunlik", "Between Mateo and Sophia, who has the comparative advantage in car washing, and who has it in lawn mowing?", [
    { text: AB("Mateo", "Sophia"), why: "Teskarisi: yuvishning OC i Mateo uchun ½ maysazor, Sophia uchun ⅓ — Sophia arzonroq." },
    { text: AB("Sophia", "Mateo"), correct: true, why: "1 maysazor OC: Mateo 2 mashina, Sophia 3 mashina → Mateo o'rishda; 1 mashina OC: Sophia ⅓ < Mateo ½ → Sophia yuvishda." },
    { text: "Mateo in washing, neither in mowing", why: "OC lar turlicha — har kimda bittadan qiyosiy ustunlik bor." },
    { text: "Sophia in washing, neither in mowing", why: "Mutlaq ustunlikni qiyosiy bilan aralashtirdingiz." },
  ]),
  mk("ch03.qq.5", "Ixtisoslashuv", "When Mateo and Sophia produce efficiently and make a mutually beneficial trade based on comparative advantage,", [
    { text: "Mateo mows more, and Sophia washes more.", correct: true, why: "Har kim qiyosiy ustun bo'lgan ishni ko'proq qiladi." },
    { text: "Mateo washes more, and Sophia mows more.", why: "Teskari — bu umumiy ishlab chiqarishni kamaytiradi." },
    { text: "Mateo and Sophia both wash more.", why: "Ikkalasi bir xil ishga ixtisoslashmaydi." },
    { text: "Mateo and Sophia both mow more.", why: "Ikkalasi bir xil ishga ixtisoslashmaydi." },
  ]),
  mk("ch03.qq.6", "Import", "A nation will typically import those goods in which", [
    { text: "the nation has an absolute advantage.", why: "Savdo mutlaq emas, qiyosiy ustunlikka asoslanadi." },
    { text: "the nation has a comparative advantage.", why: "Bunday tovarlar **eksport** qilinadi." },
    { text: "other nations have an absolute advantage.", why: "Mutlaq ustunlik savdo yo'nalishini belgilamaydi." },
    { text: "other nations have a comparative advantage.", correct: true, why: "Boshqalar arzonroq (kichik OC) ishlab chiqaradigan tovarlarni import qilish foydali." },
  ]),
  mk("ch03.qq.7", "Davlatlar", "In the US, producing an aircraft takes 10,000 hours of labor and a shirt 2 hours. In China, an aircraft takes 40,000 hours and a shirt 4 hours. What will these nations trade?", [
    { text: "China will export aircraft, and the United States will export shirts.", why: "Teskari." },
    { text: "China will export shirts, and the United States will export aircraft.", correct: true, why: "Samolyot OC: AQSh 10,000/2 = 5,000 ko'ylak, Xitoy 40,000/4 = 10,000 → AQSh samolyotda; ko'ylak OC: Xitoy 1/10,000 < AQSh 1/5,000 → Xitoy ko'ylakda." },
    { text: "Both nations will export shirts.", why: "Ikkalasi bir tovarni eksport qila olmaydi." },
    { text: "There are no gains from trade in this situation.", why: "OC lar turlicha — yutuq bor, garchi AQSh ikkalasida ham mutlaq ustun bo'lsa ham." },
  ]),
  mk("ch03.qq.8", "Teng OC", "Kayla can cook dinner in 30 minutes and wash the laundry in 20 minutes. Her roommate takes twice as long to do each task. How should the roommates allocate the work?", [
    { text: "Kayla should do more of the cooking based on her comparative advantage.", why: "Ikkalasida ham ovqatning OC i = 1.5 kir — qiyosiy ustunlik yo'q." },
    { text: "Kayla should do more of the washing based on her comparative advantage.", why: "Qiyosiy ustunlik yo'q." },
    { text: "Kayla should do more of the washing based on her absolute advantage.", why: "Mutlaq ustunlik savdo yutug'ini bermaydi." },
    { text: "There are no gains from trade in this situation.", correct: true, why: "OC lar teng (30/20 = 60/40 = 1.5) → ixtisoslashuvdan yutuq yo'q." },
  ]),
];

export const checks: Record<string, Question> = {
  "s-3-1a": { id: "ch03.check.3-1a", chapter: C, kind: "numeric", source: "new", topic: "PPF", prompt: "Frank go'shtni 60 daqiqada, kartoshkani 15 daqiqada (1 oz) ishlab chiqaradi, kuniga 8 soat ishlaydi. Faqat kartoshka eksa, necha oz kartoshka?", answer: 32, tolerance: 0, unit: "oz", why: "480 daq / 15 = 32 oz. Faqat go'sht — 480/60 = 8 oz. PPF to'g'ri chiziq: har bir soat 1 oz go'sht ↔ 4 oz kartoshka.", traps: [{ value: 8, why: "Bu go'sht miqdori." }] },
  "s-3-1b": mk("ch03.check.3-1b", "Savdo", "Ruby taklifi: Frank faqat kartoshka ekadi (32 oz), 15 oz kartoshkani 5 oz go'shtga almashtiradi. Frank nima iste'mol qiladi?", [
    { text: "5 oz go'sht va 17 oz kartoshka — savdosizdan (4 va 16) ikkalasi ham ko'p", correct: true, why: "32 − 15 = 17 kartoshka, 0 + 5 = 5 go'sht." },
    { text: "4 oz go'sht va 16 oz kartoshka", why: "Bu savdosiz nuqta A." },
    { text: "5 oz go'sht va 32 oz kartoshka", why: "15 oz ni Ruby'ga berdi." },
    { text: "8 oz go'sht va 0 kartoshka", why: "Bu faqat go'sht ishlab chiqarish." },
  ], 'new'),
  "s-3-2a": { id: "ch03.check.3-2a", chapter: C, kind: "tf", source: "new", topic: "Mutlaq ustunlik", prompt: "Ruby ikkala tovarda ham mutlaq ustun, shuning uchun u Frank bilan savdo qilishdan yutmaydi.", answer: false, why: "Savdo yutug'i **qiyosiy** ustunlikka asoslanadi. Ruby 12 + 24 dan 13 + 27 ga o'tadi." },
  "s-3-2b": { id: "ch03.check.3-2b", chapter: C, kind: "match", source: "new", topic: "Imkoniyat xarajati", prompt: "Table 1: imkoniyat xarajatini moslashtiring.", pairs: [
    { left: "Frank: 1 oz meat", right: "4 oz potatoes" },
    { left: "Frank: 1 oz potatoes", right: "¼ oz meat" },
    { left: "Ruby: 1 oz meat", right: "2 oz potatoes" },
    { left: "Ruby: 1 oz potatoes", right: "½ oz meat" },
  ] },
  "s-3-2c": { id: "ch03.check.3-2c", chapter: C, kind: "numeric", source: "new", topic: "Savdo narxi", prompt: "Frank 5 oz go'sht uchun 15 oz kartoshka beradi. Frank uchun 1 oz go'shtning narxi necha oz kartoshka?", answer: 3, tolerance: 0, unit: "oz", why: "15/5 = 3 < Frank OC (4) → Frank yutadi. Ruby uchun 1 oz kartoshka = 5/15 = ⅓ oz go'sht < uning OC (½).", traps: [{ value: 0.333, why: "Bu Ruby uchun kartoshkaning narxi (go'shtda)." }] },
  "s-3-2d": mk("ch03.check.3-2d", "Savdo narxi", "Go'sht narxi 5 oz kartoshka bo'lsa nima bo'ladi?", [
    { text: "Ikkalasi ham go'sht sotmoqchi bo'ladi (narx ikkala OC dan yuqori) — xaridor yo'q, savdo bo'lmaydi", correct: true, why: "Savdo faqat 2 < P < 4 da ishlaydi." },
    { text: "Ikkalasi ham yutadi", why: "Frank uchun 5 > 4 — u go'shtni o'zi arzonroq ishlab chiqaradi." },
    { text: "Faqat Frank yutadi", why: "Frank bunday narxda sotib olmaydi." },
    { text: "Ruby barcha go'shtni sotadi", why: "Sotib oluvchi yo'q." },
  ], 'new'),
  "s-3-3a": { id: "ch03.check.3-3a", chapter: C, kind: "numeric", source: "new", topic: "Osaka", prompt: "Osaka maysazorni 2 soatda o'radi (shu vaqtda reklamadan $30,000), Hari 4 soatda (McDonald's'da $50). Osaka Hari'ga ko'pi bilan qancha to'lashga rozi bo'ladi?", answer: 30000, tolerance: 0, unit: "$", why: "Osaka OC = $30,000, Hari OC = $50. $50 dan ko'p va $30,000 dan kam har qanday to'lov ikkalasini ham yutadi.", traps: [{ value: 50, why: "$50 — Hari rozi bo'ladigan **eng kam** to'lov." }] },
  "s-3-3b": mk("ch03.check.3-3b", "AQSh va Yaponiya", "AQSh va Yaponiya ishchisi oyiga 1 ta mashina; AQSh 2 tonna, Yaponiya 1 tonna oziq-ovqat. Kim nimani eksport qiladi?", [
    { text: "Yaponiya mashina (OC 1 tonna < 2), AQSh oziq-ovqat (OC ½ mashina < 1)", correct: true, why: "Har bir tovarni OC kichik mamlakat ishlab chiqaradi." },
    { text: "AQSh ikkalasini ham", why: "Bir mamlakat ikkala tovarda qiyosiy ustun bo'la olmaydi." },
    { text: "Savdo yo'q — mashinada teng", why: "Mashinada mutlaq teng, lekin OC lar turlicha." },
    { text: "Yaponiya oziq-ovqat", why: "Yaponiyada oziq-ovqatning OC i (1 mashina) yuqori." },
  ], 'new'),
};

export const practice: Question[] = [
  { id: "ch03.new.maria", chapter: C, kind: "numeric", source: "new", topic: "Problem 1", prompt: "Maria soatiga 20 bet iqtisod yoki 50 bet sotsiologiya o'qiydi. 100 bet sotsiologiyaning imkoniyat xarajati necha bet iqtisod?", answer: 40, tolerance: 0, unit: "bet", why: "100 bet sotsiologiya = 2 soat = 2 × 20 = 40 bet iqtisod.", traps: [{ value: 250, why: "Teskari: 100 bet iqtisod = 5 soat = 250 bet sotsiologiya." }] },
  { id: "ch03.new.canada", chapter: C, kind: "numeric", source: "new", topic: "Problem 4", prompt: "Kanadada 10 mln ishchi, har biri yiliga 2 mashina yoki 30 bushel bug'doy. 10 mln mashina iste'mol qilsa, savdosiz qancha bug'doy (mln bushel) qoladi?", answer: 150, tolerance: 0, unit: "mln bushel", why: "10 mln mashina uchun 5 mln ishchi kerak; qolgan 5 mln × 30 = 150 mln bushel. 1 mashina OC = 15 bushel." },
  { id: "ch03.new.canada-c", chapter: C, kind: "numeric", source: "new", topic: "Problem 4c", prompt: "AQSh Kanadadan 10 mln mashinani har biri uchun 20 bushel bug'doyga sotib olmoqchi. Kanada baribir 10 mln mashina iste'mol qiladi. Endi qancha bug'doy (mln bushel)?", answer: 200, tolerance: 0, unit: "mln bushel", why: "Barcha 10 mln ishchi mashina: 20 mln. 10 mln ni 200 mln bushelga sotadi → 10 mln mashina + 200 mln bushel > 150. Qabul qilishi kerak (20 > OC 15)." },
  mk("ch03.new.socks", "Problem 6", "Boston: ishchi soatiga 3 qizil yoki 3 oq paypoq; Chicago: 2 qizil yoki 1 oq. Kim nimani eksport qiladi?", [
    { text: "Boston oq (OC 1 qizil < 2), Chicago qizil (OC ½ oq < 1); oq paypoq narxi 1 va 2 qizil orasida", correct: true, why: "Boston ikkalasida mutlaq ustun, lekin qiyosiy ustunligi — oq paypoqda." },
    { text: "Boston ikkalasini", why: "Qiyosiy ustunlik ikkalasida bo'lmaydi." },
    { text: "Chicago oq", why: "Chicagoda oqning OC i 2 qizil — yuqori." },
    { text: "Savdo yo'q", why: "OC lar turlicha." },
  ], 'new'),
  { id: "ch03.new.wine", chapter: C, kind: "numeric", source: "new", topic: "Problem 7", prompt: "Nemis ishchi mashinani 400, bir yashik vinoni 2 soatda; fransuz mashinani 600, vinoni X soatda. Qaysi X da savdodan yutuq **bo'lmaydi**?", answer: 3, tolerance: 0, unit: "soat", why: "Germaniyada 1 mashina = 400/2 = 200 yashik vino, Fransiyada 600/X. X = 3 da OC lar teng — yutuq yo'q. X < 3 bo'lsa Fransiya vinoda qiyosiy ustun → Germaniya mashina eksport qilib, vino import qiladi; X > 3 bo'lsa — aksincha." },
  { id: "ch03.new.tf-talent", chapter: C, kind: "tf", source: "new", topic: "Problem 9b", prompt: "“Ba'zi iste'dodli odamlar qilgan hamma ishida qiyosiy ustunlikka ega.”", answer: false, why: "Mutlaq ustunlik hamma ishda bo'lishi mumkin, qiyosiy — yo'q: bir tovarning OC i past bo'lsa, ikkinchisiniki yuqori." },
  { id: "ch03.new.tf-country", chapter: C, kind: "tf", source: "new", topic: "Problem 9e", prompt: "“Savdo mamlakat uchun yaxshi bo'lsa, u mamlakatdagi hamma uchun yaxshi.”", answer: false, why: "Mamlakat umuman yutadi, lekin raqobatlashuvchi tarmoq ishchilari (kiyim, mebel) yutqazishi mumkin — Ask the Experts: China trade." },
  mk("ch03.new.uz", "O'zbekistondan misol", "Dasturchi Dilnoza soatiga $40 topadi; uyni o'zi 3 soatda tozalaydi, uy tozalovchi 4 soatda $15/soatdan. Iqtisodchi nima deydi?", [
    { text: "Dilnoza tozalovchini yollashi kerak: uning tozalashdagi OC i $120, tozalovchiniki — taxminan $60; mutlaq ustunlik ahamiyatsiz", correct: true, why: "Osaka va Hari mantiqi: qiyosiy ustunlik — tozalovchida." },
    { text: "Dilnoza o'zi tozalashi kerak, chunki tezroq", why: "Bu mutlaq ustunlik — qaror uchun yetarli emas." },
    { text: "Ikkalasi teng bo'lishi kerak", why: "Adolat emas, OC muhim." },
    { text: "Farqi yo'q", why: "OC lar keskin farq qiladi." },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
