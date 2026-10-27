import type { Question } from '../../types';
import { tr } from '../../../lib/lang';

const C = 3;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });
const AB = (aWash: string, aMow: string) => `${aWash} in washing, ${aMow} in mowing`;

export const quickQuiz: Question[] = [
  mk("ch03.qq.1", tr("PPF va iste'mol", 'PPF and consumption'), "Before Frank and Ruby engage in trade, each consumes", [
    { text: "at a point inside his or her production possibilities frontier.", why: tr("Ular hamma vaqtini ishlatadi — chegara ustida.", 'They use all their time — on the frontier.') },
    { text: "at a point on his or her production possibilities frontier.", correct: true, why: tr("Savdosiz PPF = iste'mol imkoniyatlari chegarasi; A va B chegara ustida.", 'Without trade the PPF is the consumption possibilities frontier; A and B are on it.') },
    { text: "at a point outside his or her production possibilities frontier.", why: tr("Savdosiz bunga erishib bo'lmaydi.", 'That is unattainable without trade.') },
    { text: "the same amounts of meat and potatoes as the other.", why: "Frank (4, 16), Ruby (12, 24) — turlicha." },
  ]),
  mk("ch03.qq.2", tr("Savdodan yutuq", 'Gains from trade'), "After Frank and Ruby trade, each of them consumes", [
    { text: "at a point inside his or her production possibilities frontier.", why: tr("Savdo ikkalasini ham yaxshilaydi.", 'Trade makes both better off.') },
    { text: "at a point on his or her production possibilities frontier.", why: tr("A* (5, 17) va B* (13, 27) chegaradan tashqarida.", 'A* (5, 17) and B* (13, 27) lie outside the frontiers.') },
    { text: "at a point outside his or her production possibilities frontier.", correct: true, why: tr("Aynan shu — savdodan yutuq: savdosiz imkonsiz bo'lgan nuqtalar.", 'Exactly — the gains from trade: points impossible without trade.') },
    { text: "the same amounts of meat and potatoes as the other.", why: "Frank 5 + 17, Ruby 13 + 27." },
  ]),
  mk("ch03.qq.3", tr("Mutlaq ustunlik", 'Absolute advantage'), "In an hour, Mateo can wash 2 cars or mow 1 lawn, and Sophia can wash 3 cars or mow 1 lawn. Who has the absolute advantage in car washing, and who has it in lawn mowing?", [
    { text: AB("Mateo", "Sophia"), why: tr("Sophia soatiga ko'proq (3 > 2) mashina yuvadi.", 'Sophia washes more cars per hour (3 > 2).') },
    { text: AB("Sophia", "Mateo"), why: tr("Maysazorda ikkalasi teng (1 = 1).", 'At mowing they are equal (1 = 1).') },
    { text: "Mateo in washing, neither in mowing", why: tr("Yuvishda Sophia ustun.", 'At washing Sophia is ahead.') },
    { text: "Sophia in washing, neither in mowing", correct: true, why: tr("Mutlaq ustunlik — kamroq resurs: yuvishda Sophia (3 > 2), o'rishda hech kim (1 = 1).", 'Absolute advantage means using fewer inputs: in washing it is Sophia (3 > 2), in mowing nobody (1 = 1).') },
  ]),
  mk("ch03.qq.4", tr("Qiyosiy ustunlik", 'Comparative advantage'), "Between Mateo and Sophia, who has the comparative advantage in car washing, and who has it in lawn mowing?", [
    { text: AB("Mateo", "Sophia"), why: tr("Teskarisi: yuvishning OC i Mateo uchun ½ maysazor, Sophia uchun ⅓ — Sophia arzonroq.", "The reverse: the OC of a wash is ½ lawn for Mateo and ⅓ for Sophia — Sophia's is lower.") },
    { text: AB("Sophia", "Mateo"), correct: true, why: tr("1 maysazor OC: Mateo 2 mashina, Sophia 3 mashina → Mateo o'rishda; 1 mashina OC: Sophia ⅓ < Mateo ½ → Sophia yuvishda.", 'The OC of 1 lawn: Mateo 2 cars, Sophia 3 cars → Mateo in mowing; the OC of 1 car: Sophia ⅓ < Mateo ½ → Sophia in washing.') },
    { text: "Mateo in washing, neither in mowing", why: tr("OC lar turlicha — har kimda bittadan qiyosiy ustunlik bor.", 'The OCs differ — each has one comparative advantage.') },
    { text: "Sophia in washing, neither in mowing", why: tr("Mutlaq ustunlikni qiyosiy bilan aralashtirdingiz.", 'You mixed up absolute and comparative advantage.') },
  ]),
  mk("ch03.qq.5", tr("Ixtisoslashuv", 'Specialization'), "When Mateo and Sophia produce efficiently and make a mutually beneficial trade based on comparative advantage,", [
    { text: "Mateo mows more, and Sophia washes more.", correct: true, why: tr("Har kim qiyosiy ustun bo'lgan ishni ko'proq qiladi.", 'Each does more of the job in which they have a comparative advantage.') },
    { text: "Mateo washes more, and Sophia mows more.", why: tr("Teskari — bu umumiy ishlab chiqarishni kamaytiradi.", 'The reverse — this would lower total output.') },
    { text: "Mateo and Sophia both wash more.", why: tr("Ikkalasi bir xil ishga ixtisoslashmaydi.", "They don't both specialize in the same job.") },
    { text: "Mateo and Sophia both mow more.", why: tr("Ikkalasi bir xil ishga ixtisoslashmaydi.", "They don't both specialize in the same job.") },
  ]),
  mk("ch03.qq.6", "Import", "A nation will typically import those goods in which", [
    { text: "the nation has an absolute advantage.", why: tr("Savdo mutlaq emas, qiyosiy ustunlikka asoslanadi.", 'Trade rests on comparative, not absolute, advantage.') },
    { text: "the nation has a comparative advantage.", why: tr("Bunday tovarlar **eksport** qilinadi.", 'Such goods are **exported**.') },
    { text: "other nations have an absolute advantage.", why: tr("Mutlaq ustunlik savdo yo'nalishini belgilamaydi.", 'Absolute advantage does not determine the direction of trade.') },
    { text: "other nations have a comparative advantage.", correct: true, why: tr("Boshqalar arzonroq (kichik OC) ishlab chiqaradigan tovarlarni import qilish foydali.", 'It pays to import goods that others produce more cheaply (at a lower OC).') },
  ]),
  mk("ch03.qq.7", tr("Davlatlar", 'Countries'), "In the US, producing an aircraft takes 10,000 hours of labor and a shirt 2 hours. In China, an aircraft takes 40,000 hours and a shirt 4 hours. What will these nations trade?", [
    { text: "China will export aircraft, and the United States will export shirts.", why: tr("Teskari.", 'The reverse.') },
    { text: "China will export shirts, and the United States will export aircraft.", correct: true, why: tr("Samolyot OC: AQSh 10,000/2 = 5,000 ko'ylak, Xitoy 40,000/4 = 10,000 → AQSh samolyotda; ko'ylak OC: Xitoy 1/10,000 < AQSh 1/5,000 → Xitoy ko'ylakda.", 'OC of an airplane: U.S. 10,000/2 = 5,000 shirts, China 40,000/4 = 10,000 → the U.S. in airplanes; OC of a shirt: China 1/10,000 < U.S. 1/5,000 → China in shirts.') },
    { text: "Both nations will export shirts.", why: tr("Ikkalasi bir tovarni eksport qila olmaydi.", "Both can't export the same good.") },
    { text: "There are no gains from trade in this situation.", why: tr("OC lar turlicha — yutuq bor, garchi AQSh ikkalasida ham mutlaq ustun bo'lsa ham.", 'The OCs differ — there are gains, even though the U.S. has an absolute advantage in both.') },
  ]),
  mk("ch03.qq.8", "Teng OC", "Kayla can cook dinner in 30 minutes and wash the laundry in 20 minutes. Her roommate takes twice as long to do each task. How should the roommates allocate the work?", [
    { text: "Kayla should do more of the cooking based on her comparative advantage.", why: tr("Ikkalasida ham ovqatning OC i = 1.5 kir — qiyosiy ustunlik yo'q.", 'For both, the OC of a dinner = 1.5 loads of laundry — no comparative advantage.') },
    { text: "Kayla should do more of the washing based on her comparative advantage.", why: tr("Qiyosiy ustunlik yo'q.", 'There is no comparative advantage.') },
    { text: "Kayla should do more of the washing based on her absolute advantage.", why: tr("Mutlaq ustunlik savdo yutug'ini bermaydi.", 'Absolute advantage does not create gains from trade.') },
    { text: "There are no gains from trade in this situation.", correct: true, why: tr("OC lar teng (30/20 = 60/40 = 1.5) → ixtisoslashuvdan yutuq yo'q.", 'The OCs are equal (30/20 = 60/40 = 1.5) → no gains from specialization.') },
  ]),
];

export const checks: Record<string, Question> = {
  "s-3-1a": { id: "ch03.check.3-1a", chapter: C, kind: "numeric", source: "new", topic: tr("PPF", 'PPF'), prompt: tr("Frank go'shtni 60 daqiqada, kartoshkani 15 daqiqada (1 oz) ishlab chiqaradi, kuniga 8 soat ishlaydi. Faqat kartoshka eksa, necha oz kartoshka?", 'Frank produces 1 oz of meat in 60 minutes and 1 oz of potatoes in 15 minutes, and works 8 hours a day. If he grows only potatoes, how many ounces?'), answer: 32, tolerance: 0, unit: "oz", why: tr("480 daq / 15 = 32 oz. Faqat go'sht — 480/60 = 8 oz. PPF to'g'ri chiziq: har bir soat 1 oz go'sht ↔ 4 oz kartoshka.", '480 min / 15 = 32 oz. Only meat — 480/60 = 8 oz. The PPF is a straight line: each hour trades 1 oz of meat ↔ 4 oz of potatoes.'), traps: [{ value: 8, why: tr("Bu go'sht miqdori.", 'That is the amount of meat.') }] },
  "s-3-1b": mk("ch03.check.3-1b", tr("Savdo", 'Trade'), tr("Ruby taklifi: Frank faqat kartoshka ekadi (32 oz), 15 oz kartoshkani 5 oz go'shtga almashtiradi. Frank nima iste'mol qiladi?", "Ruby's offer: Frank grows only potatoes (32 oz) and trades 15 oz of potatoes for 5 oz of meat. What does Frank consume?"), [
    { text: tr("5 oz go'sht va 17 oz kartoshka — savdosizdan (4 va 16) ikkalasi ham ko'p", '5 oz of meat and 17 oz of potatoes — more of both than without trade (4 and 16)'), correct: true, why: tr("32 − 15 = 17 kartoshka, 0 + 5 = 5 go'sht.", '32 − 15 = 17 potatoes, 0 + 5 = 5 meat.') },
    { text: tr("4 oz go'sht va 16 oz kartoshka", '4 oz of meat and 16 oz of potatoes'), why: tr("Bu savdosiz nuqta A.", 'That is the no-trade point A.') },
    { text: tr("5 oz go'sht va 32 oz kartoshka", '5 oz of meat and 32 oz of potatoes'), why: tr("15 oz ni Ruby'ga berdi.", 'He gave 15 oz to Ruby.') },
    { text: tr("8 oz go'sht va 0 kartoshka", '8 oz of meat and no potatoes'), why: tr("Bu faqat go'sht ishlab chiqarish.", 'That is producing only meat.') },
  ], 'new'),
  "s-3-2a": { id: "ch03.check.3-2a", chapter: C, kind: "tf", source: "new", topic: tr("Mutlaq ustunlik", 'Absolute advantage'), prompt: tr("Ruby ikkala tovarda ham mutlaq ustun, shuning uchun u Frank bilan savdo qilishdan yutmaydi.", 'Ruby has an absolute advantage in both goods, so she gains nothing from trading with Frank.'), answer: false, why: tr("Savdo yutug'i **qiyosiy** ustunlikka asoslanadi. Ruby 12 + 24 dan 13 + 27 ga o'tadi.", 'The gains from trade rest on **comparative** advantage. Ruby goes from 12 + 24 to 13 + 27.') },
  "s-3-2b": { id: "ch03.check.3-2b", chapter: C, kind: "match", source: "new", topic: tr("Imkoniyat xarajati", 'Opportunity cost'), prompt: tr("Table 1: imkoniyat xarajatini moslashtiring.", 'Table 1: match the opportunity costs.'), pairs: [
    { left: "Frank: 1 oz meat", right: "4 oz potatoes" },
    { left: "Frank: 1 oz potatoes", right: "¼ oz meat" },
    { left: "Ruby: 1 oz meat", right: "2 oz potatoes" },
    { left: "Ruby: 1 oz potatoes", right: "½ oz meat" },
  ] },
  "s-3-2c": { id: "ch03.check.3-2c", chapter: C, kind: "numeric", source: "new", topic: tr("Savdo narxi", 'Price of the trade'), prompt: tr("Frank 5 oz go'sht uchun 15 oz kartoshka beradi. Frank uchun 1 oz go'shtning narxi necha oz kartoshka?", 'Frank gives 15 oz of potatoes for 5 oz of meat. What does 1 oz of meat cost Frank, in ounces of potatoes?'), answer: 3, tolerance: 0, unit: "oz", why: tr("15/5 = 3 < Frank OC (4) → Frank yutadi. Ruby uchun 1 oz kartoshka = 5/15 = ⅓ oz go'sht < uning OC (½).", "15/5 = 3 < Frank's OC (4) → Frank gains. For Ruby, 1 oz of potatoes = 5/15 = ⅓ oz of meat < her OC (½)."), traps: [{ value: 0.333, why: tr("Bu Ruby uchun kartoshkaning narxi (go'shtda).", 'That is the price of potatoes for Ruby (in meat).') }] },
  "s-3-2d": mk("ch03.check.3-2d", tr("Savdo narxi", 'Price of the trade'), tr("Go'sht narxi 5 oz kartoshka bo'lsa nima bo'ladi?", 'What happens if the price of meat is 5 oz of potatoes?'), [
    { text: tr("Ikkalasi ham go'sht sotmoqchi bo'ladi (narx ikkala OC dan yuqori) — xaridor yo'q, savdo bo'lmaydi", "Both want to sell meat (the price is above both OCs) — there's no buyer, so there's no trade"), correct: true, why: tr("Savdo faqat 2 < P < 4 da ishlaydi.", 'Trade works only for 2 < P < 4.') },
    { text: tr("Ikkalasi ham yutadi", 'Both gain'), why: tr("Frank uchun 5 > 4 — u go'shtni o'zi arzonroq ishlab chiqaradi.", 'For Frank 5 > 4 — he can produce meat more cheaply himself.') },
    { text: tr("Faqat Frank yutadi", 'Only Frank gains'), why: tr("Frank bunday narxda sotib olmaydi.", "Frank won't buy at that price.") },
    { text: tr("Ruby barcha go'shtni sotadi", 'Ruby sells all her meat'), why: tr("Sotib oluvchi yo'q.", 'There is no buyer.') },
  ], 'new'),
  "s-3-3a": { id: "ch03.check.3-3a", chapter: C, kind: "numeric", source: "new", topic: tr("Osaka", 'Osaka'), prompt: tr("Osaka maysazorni 2 soatda o'radi (shu vaqtda reklamadan $30,000), Hari 4 soatda (McDonald's'da $50). Osaka Hari'ga ko'pi bilan qancha to'lashga rozi bo'ladi?", "Osaka mows her lawn in 2 hours (in that time she could earn $30,000 filming a commercial); Hari takes 4 hours (and could earn $50 at McDonald's). What is the most Osaka would pay Hari?"), answer: 30000, tolerance: 0, unit: "$", why: tr("Osaka OC = $30,000, Hari OC = $50. $50 dan ko'p va $30,000 dan kam har qanday to'lov ikkalasini ham yutadi.", "Osaka's OC = $30,000, Hari's OC = $50. Any payment above $50 and below $30,000 makes both better off."), traps: [{ value: 50, why: tr("$50 — Hari rozi bo'ladigan **eng kam** to'lov.", '$50 is the **least** Hari would accept.') }] },
  "s-3-3b": mk("ch03.check.3-3b", tr("AQSh va Yaponiya", 'The U.S. and Japan'), tr("AQSh va Yaponiya ishchisi oyiga 1 ta mashina; AQSh 2 tonna, Yaponiya 1 tonna oziq-ovqat. Kim nimani eksport qiladi?", 'A worker in the U.S. or Japan makes 1 car a month; a U.S. worker grows 2 tons of food, a Japanese worker 1 ton. Who exports what?'), [
    { text: tr("Yaponiya mashina (OC 1 tonna < 2), AQSh oziq-ovqat (OC ½ mashina < 1)", 'Japan exports cars (OC 1 ton < 2), the U.S. food (OC ½ car < 1)'), correct: true, why: tr("Har bir tovarni OC kichik mamlakat ishlab chiqaradi.", 'Each good is produced by the country with the lower OC.') },
    { text: tr("AQSh ikkalasini ham", 'The U.S. exports both'), why: tr("Bir mamlakat ikkala tovarda qiyosiy ustun bo'la olmaydi.", "One country can't have a comparative advantage in both goods.") },
    { text: tr("Savdo yo'q — mashinada teng", 'No trade — they are equal in cars'), why: tr("Mashinada mutlaq teng, lekin OC lar turlicha.", 'They are equal in absolute terms for cars, but their OCs differ.') },
    { text: tr("Yaponiya oziq-ovqat", 'Japan exports food'), why: tr("Yaponiyada oziq-ovqatning OC i (1 mashina) yuqori.", 'In Japan the OC of food (1 car) is higher.') },
  ], 'new'),
};

export const practice: Question[] = [
  { id: "ch03.new.maria", chapter: C, kind: "numeric", source: "new", topic: "Problem 1", prompt: tr("Maria soatiga 20 bet iqtisod yoki 50 bet sotsiologiya o'qiydi. 100 bet sotsiologiyaning imkoniyat xarajati necha bet iqtisod?", 'Maria reads 20 pages of economics or 50 pages of sociology per hour. What is the opportunity cost of 100 pages of sociology, in pages of economics?'), answer: 40, tolerance: 0, unit: "bet", why: tr("100 bet sotsiologiya = 2 soat = 2 × 20 = 40 bet iqtisod.", '100 pages of sociology = 2 hours = 2 × 20 = 40 pages of economics.'), traps: [{ value: 250, why: tr("Teskari: 100 bet iqtisod = 5 soat = 250 bet sotsiologiya.", 'Reversed: 100 pages of economics = 5 hours = 250 pages of sociology.') }] },
  { id: "ch03.new.canada", chapter: C, kind: "numeric", source: "new", topic: "Problem 4", prompt: tr("Kanadada 10 mln ishchi, har biri yiliga 2 mashina yoki 30 bushel bug'doy. 10 mln mashina iste'mol qilsa, savdosiz qancha bug'doy (mln bushel) qoladi?", 'Canada has 10 million workers, each producing 2 cars or 30 bushels of wheat a year. If it consumes 10 million cars, how much wheat (in millions of bushels) is left without trade?'), answer: 150, tolerance: 0, unit: tr("mln bushel", 'million bushels'), why: tr("10 mln mashina uchun 5 mln ishchi kerak; qolgan 5 mln × 30 = 150 mln bushel. 1 mashina OC = 15 bushel.", '10 million cars take 5 million workers; the other 5 million × 30 = 150 million bushels. OC of 1 car = 15 bushels.') },
  { id: "ch03.new.canada-c", chapter: C, kind: "numeric", source: "new", topic: "Problem 4c", prompt: tr("AQSh Kanadadan 10 mln mashinani har biri uchun 20 bushel bug'doyga sotib olmoqchi. Kanada baribir 10 mln mashina iste'mol qiladi. Endi qancha bug'doy (mln bushel)?", 'The U.S. offers to buy 10 million cars from Canada at 20 bushels each. Canada still consumes 10 million cars. How much wheat now (in millions of bushels)?'), answer: 200, tolerance: 0, unit: tr("mln bushel", 'million bushels'), why: tr("Barcha 10 mln ishchi mashina: 20 mln. 10 mln ni 200 mln bushelga sotadi → 10 mln mashina + 200 mln bushel > 150. Qabul qilishi kerak (20 > OC 15).", 'All 10 million workers make cars: 20 million. It sells 10 million for 200 million bushels → 10 million cars + 200 million bushels > 150. It should accept (20 > OC of 15).') },
  mk("ch03.new.socks", "Problem 6", tr("Boston: ishchi soatiga 3 qizil yoki 3 oq paypoq; Chicago: 2 qizil yoki 1 oq. Kim nimani eksport qiladi?", 'Boston: a worker makes 3 pairs of red or 3 pairs of white socks per hour; Chicago: 2 red or 1 white. Who exports what?'), [
    { text: tr("Boston oq (OC 1 qizil < 2), Chicago qizil (OC ½ oq < 1); oq paypoq narxi 1 va 2 qizil orasida", 'Boston exports white (OC 1 red < 2), Chicago red (OC ½ white < 1); the price of white socks lies between 1 and 2 red'), correct: true, why: tr("Boston ikkalasida mutlaq ustun, lekin qiyosiy ustunligi — oq paypoqda.", 'Boston has an absolute advantage in both, but its comparative advantage is in white socks.') },
    { text: tr("Boston ikkalasini", 'Boston exports both'), why: tr("Qiyosiy ustunlik ikkalasida bo'lmaydi.", 'Nobody has a comparative advantage in both.') },
    { text: tr("Chicago oq", 'Chicago exports white'), why: tr("Chicagoda oqning OC i 2 qizil — yuqori.", 'In Chicago the OC of white is 2 red — high.') },
    { text: tr("Savdo yo'q", 'No trade'), why: tr("OC lar turlicha.", 'The OCs differ.') },
  ], 'new'),
  { id: "ch03.new.wine", chapter: C, kind: "numeric", source: "new", topic: "Problem 7", prompt: tr("Nemis ishchi mashinani 400, bir yashik vinoni 2 soatda; fransuz mashinani 600, vinoni X soatda. Qaysi X da savdodan yutuq **bo'lmaydi**?", 'A German worker makes a car in 400 hours and a case of wine in 2; a French worker a car in 600 hours and wine in X hours. For which X are there **no** gains from trade?'), answer: 3, tolerance: 0, unit: "soat", why: tr("Germaniyada 1 mashina = 400/2 = 200 yashik vino, Fransiyada 600/X. X = 3 da OC lar teng — yutuq yo'q. X < 3 bo'lsa Fransiya vinoda qiyosiy ustun → Germaniya mashina eksport qilib, vino import qiladi; X > 3 bo'lsa — aksincha.", 'In Germany 1 car = 400/2 = 200 cases of wine, in France 600/X. At X = 3 the OCs are equal — no gains. If X < 3, France has the comparative advantage in wine → Germany exports cars and imports wine; if X > 3, the reverse.') },
  { id: "ch03.new.tf-talent", chapter: C, kind: "tf", source: "new", topic: "Problem 9b", prompt: tr("“Ba'zi iste'dodli odamlar qilgan hamma ishida qiyosiy ustunlikka ega.”", '“Some talented people have a comparative advantage in everything they do.”'), answer: false, why: tr("Mutlaq ustunlik hamma ishda bo'lishi mumkin, qiyosiy — yo'q: bir tovarning OC i past bo'lsa, ikkinchisiniki yuqori.", "An absolute advantage in everything is possible; a comparative one is not: if the OC of one good is low, the other's is high.") },
  { id: "ch03.new.tf-country", chapter: C, kind: "tf", source: "new", topic: "Problem 9e", prompt: tr("“Savdo mamlakat uchun yaxshi bo'lsa, u mamlakatdagi hamma uchun yaxshi.”", '“If trade is good for a country, it is good for everyone in that country.”'), answer: false, why: tr("Mamlakat umuman yutadi, lekin raqobatlashuvchi tarmoq ishchilari (kiyim, mebel) yutqazishi mumkin — Ask the Experts: China trade.", 'The country as a whole gains, but workers in competing industries (clothing, furniture) may lose — see Ask the Experts on China trade.') },
  mk("ch03.new.uz", tr("O'zbekistondan misol", 'An example from Uzbekistan'), tr("Dasturchi Dilnoza soatiga $40 topadi; uyni o'zi 3 soatda tozalaydi, uy tozalovchi 4 soatda $15/soatdan. Iqtisodchi nima deydi?", 'Dilnoza, a programmer, earns $40 an hour; she can clean her home in 3 hours, while a cleaner takes 4 hours at $15 an hour. What would an economist say?'), [
    { text: tr("Dilnoza tozalovchini yollashi kerak: uning tozalashdagi OC i $120, tozalovchiniki — taxminan $60; mutlaq ustunlik ahamiyatsiz", "Dilnoza should hire the cleaner: her OC of cleaning is $120, the cleaner's about $60; absolute advantage is irrelevant"), correct: true, why: tr("Osaka va Hari mantiqi: qiyosiy ustunlik — tozalovchida.", "The Osaka-and-Hari logic: the comparative advantage is the cleaner's.") },
    { text: tr("Dilnoza o'zi tozalashi kerak, chunki tezroq", 'Dilnoza should clean herself because she is faster'), why: tr("Bu mutlaq ustunlik — qaror uchun yetarli emas.", 'That is absolute advantage — not enough for the decision.') },
    { text: tr("Ikkalasi teng bo'lishi kerak", 'They should share equally'), why: tr("Adolat emas, OC muhim.", 'What matters is OC, not fairness.') },
    { text: tr("Farqi yo'q", 'It makes no difference'), why: tr("OC lar keskin farq qiladi.", 'Their OCs differ sharply.') },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
