import type { Problem } from '../../types';

const C = 3;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch03.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch03.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "Under what conditions is the production possibilities frontier linear rather than bowed out?", ["Bir tovardan ikkinchisiga **o'zgarmas** nisbatda o'tish mumkin bo'lsa — imkoniyat xarajati doimiy.", "Frank: har bir soat doim 1 oz go'sht ↔ 4 oz kartoshka, qancha ishlab chiqarishidan qat'i nazar."], "When the opportunity cost is constant (resources equally suited to both goods).", "ca"),
  r(2, "Explain how absolute advantage and comparative advantage differ.", ["**Absolute** — kamroq resurs (vaqt) bilan ishlab chiqarish.", "**Comparative** — kichikroq **imkoniyat xarajati** bilan ishlab chiqarish."], "Absolute compares inputs; comparative compares opportunity costs."),
  r(3, "Give an example in which one person has an absolute advantage in doing something, but another person has a comparative advantage.", ["Naomi Osaka maysazorni 2 soatda o'radi (Hari 4 soatda) — **mutlaq** ustun.", "Osaka OC = $30,000 (reklama), Hari OC = $50 (McDonald's) → **qiyosiy** ustunlik Hari'da."], "Osaka (absolute) vs. Hari (comparative) in lawn mowing."),
  r(4, "Is absolute advantage or comparative advantage more important for trade? Explain using your example.", ["**Qiyosiy** ustunlik: Osaka tezroq o'rsa ham, Hari'ni yollash ikkalasini yutadi.", "Savdo narxi OC lar orasida ($50 < to'lov < $30,000)."], "Comparative advantage — it determines who should do what."),
  r(5, "If two parties trade based on comparative advantage and both gain, in what range must the price implicit in the trade lie?", ["Narx ikki tomonning imkoniyat xarajatlari **orasida** bo'lishi kerak.", "Frank–Ruby: 1 oz go'sht narxi 2 va 4 oz kartoshka orasida."], "Between the two parties' opportunity costs.", "ca"),
  r(6, "Why do economists oppose policies that restrict trade among nations?", ["Savdo cheklovlari qiyosiy ustunlikka asoslangan ixtisoslashuvga to'sqinlik qiladi.", "Natija — umumiy ishlab chiqarish va turmush darajasi pasayadi (Smit, Ricardo; 93% iqtisodchilar)."], "Restrictions prevent the gains from specialization based on comparative advantage."),
];

export const problems: Problem[] = [
  p(1, "Maria can read 20 pages of economics or 50 pages of sociology in an hour. She studies 5 hours per day. (a) Draw her PPF. (b) What is her opportunity cost of reading 100 pages of sociology?", [
    "(a) Chekka nuqtalar: 100 bet iqtisod (5 × 20) yoki 250 bet sotsiologiya (5 × 50); to'g'ri chiziq.",
    "(b) 100 bet sotsiologiya = 2 soat → 2 × 20 = **40 bet iqtisod**.",
  ], "(b) 40 pages of economics."),
  p(2, "American and Japanese workers can each produce 4 cars per year. An American worker can produce 10 tons of grain, a Japanese worker 5 tons. Each country has 100 million workers. (a) Table like Figure 1. (b) Graph PPFs. (c) Opportunity costs (Table 1). (d) Absolute advantage? (e) Comparative advantage? (f) Without trade, half the workers make each good — quantities? (g) Example of trade that makes both better off.", [
    "(a) AQSh: 400 mln mashina yoki 1,000 mln t don; Yaponiya: 400 mln mashina yoki 500 mln t don.",
    "(c) AQSh: 1 mashina = 2.5 t don, 1 t don = 0.4 mashina. Yaponiya: 1 mashina = 1.25 t don, 1 t don = 0.8 mashina.",
    "(d) Mashina — hech kim (teng); don — **AQSh**.",
    "(e) Mashina — **Yaponiya** (1.25 < 2.5); don — **AQSh** (0.4 < 0.8).",
    "(f) AQSh: 200 mln mashina + 500 mln t don; Yaponiya: 200 mln mashina + 250 mln t don.",
    "(g) Misol (narx 2 t don / mashina): Yaponiya faqat mashina (400 mln), AQSh 15 mln ishchini mashinaga (60 mln mashina, 850 mln t don). Yaponiya 150 mln mashinani 300 mln t donga sotadi → **Yaponiya: 250 mashina + 300 don** (oldin 200 + 250), **AQSh: 210 mashina + 550 don** (oldin 200 + 500). Ikkalasi ham yutdi.",
  ], "Japan has comparative advantage in cars, the US in grain; any price between 1.25 and 2.5 tons per car can benefit both."),
  p(3, "Diego takes 4 hours to brew a gallon of root beer and 2 hours to make a pizza. Darnell takes 6 hours and 4 hours. (a) Each one's opportunity cost of a pizza? Absolute and comparative advantage in pizza? (b) Who trades pizza for root beer? (c) Highest and lowest price of pizza (in gallons of root beer) that makes both better off?", [
    "(a) Diego: 1 pitsa = 2/4 = **½ gallon**; Darnell: 4/6 = **⅔ gallon**. Mutlaq ustunlik (pitsa) — Diego (2 < 4 soat); qiyosiy — **Diego** (½ < ⅔).",
    "Root beer: Diego OC = 2 pitsa, Darnell = 1.5 pitsa → Darnell root beer'da qiyosiy ustun.",
    "(b) **Diego** pitsani root beer'ga almashtiradi.",
    "(c) Pitsa narxi **½ va ⅔ gallon** orasida bo'lishi kerak.",
  ], "(a) Diego ½, Darnell ⅔ gallon; Diego has both advantages in pizza (b) Diego (c) between ½ and ⅔ gallon.", "ca-calc"),
  p(4, "Canada: 10 million workers, each produces 2 cars or 30 bushels of wheat per year. (a) Opportunity cost of a car and of a bushel? (b) Draw the PPF; if Canada consumes 10 million cars, how much wheat without trade? (c) The US offers to buy 10 million cars for 20 bushels per car. If Canada still consumes 10 million cars, how much wheat? Accept?", [
    "(a) 1 mashina = **15 bushel**; 1 bushel = **1/15 mashina** — o'zaro teskari.",
    "(b) Chekkalar: 20 mln mashina yoki 300 mln bushel. 10 mln mashina → 5 mln ishchi qoladi → **150 mln bushel**.",
    "(c) Hammasi mashina: 20 mln; 10 mln ni sotib 200 mln bushel oladi → 10 mln mashina + **200 mln bushel**. 20 > 15 → **qabul qilish kerak**.",
  ], "(a) 15 bushels; 1/15 car (b) 150 million bushels (c) 200 million bushels — accept."),
  p(5, "An English worker can produce 50 scones or 1 sweater per hour; a Scottish worker 40 scones or 2 sweaters. (a) Absolute and comparative advantage? (b) What will Scotland export? (c) If a Scottish worker could produce only 1 sweater per hour, would both still gain?", [
    "(a) Mutlaq: pishiriq — Angliya (50 > 40), sviter — Shotlandiya (2 > 1). OC: Angliyada 1 sviter = 50 pishiriq, Shotlandiyada 20 → qiyosiy: sviter — **Shotlandiya**, pishiriq — **Angliya**.",
    "(b) Shotlandiya **sviter** eksport qiladi.",
    "(c) Shotlandiyada 1 sviter = 40 pishiriq, Angliyada 50 → OC lar hali ham turlicha → **ikkalasi ham yutadi** (Shotlandiya sviter, Angliya pishiriqda qiyosiy ustun).",
  ], "(a) England: scones; Scotland: sweaters (b) sweaters (c) yes, both still gain."),
  p(6, "Boston workers produce 3 pairs of red socks or 3 pairs of white socks per hour; Chicago workers 2 red or 1 white. (a) Price of white socks (in red) without trade in each city? (b) Absolute and comparative advantage? (c) What will each city export? (d) Range of mutually beneficial prices?", [
    "(a) Boston: 1 oq = **1 qizil**; Chicago: 1 oq = **2 qizil**.",
    "(b) Mutlaq — Boston ikkalasida. Qiyosiy: oq — **Boston** (1 < 2), qizil — **Chicago** (½ < 1 oq).",
    "(c) Boston oq, Chicago qizil eksport qiladi.",
    "(d) 1 juft oq paypoq narxi **1 va 2 juft qizil** orasida.",
  ], "(d) Between 1 and 2 pairs of red socks per pair of white socks.", "ca-calc"),
  p(7, "A German worker takes 400 hours to produce a car and 2 hours to produce a case of wine. A French worker takes 600 hours for a car and X hours for a case of wine. (a) For what X are gains from trade possible? (b) For what X will Germany export cars and import wine?", [
    "Germaniya: 1 mashina = 400/2 = **200 yashik**. Fransiya: 1 mashina = 600/X yashik.",
    "(a) OC lar turlicha bo'lsa: **X ≠ 3**.",
    "(b) Germaniyada mashina arzonroq bo'lsa: 200 < 600/X → **X < 3**.",
  ], "(a) any X ≠ 3 (b) X < 3."),
  p(8, "An American worker can produce 100 shirts or 20 computers per year; a Chinese worker 100 shirts or 10 computers. (a) Graph PPFs; without trade each spends half time on each — mark it. (b) Who exports shirts? Numerical example; who benefits? (c) At what price might they trade? (d) China catches up (100 shirts or 20 computers). Trade pattern and welfare?", [
    "(a) AQSh: (100 ko'ylak, 20 komp.), yarim-yarim — (50, 10). Xitoy: (100, 10), yarim — (50, 5).",
    "OC: 1 kompyuter = 5 ko'ylak (AQSh), 10 ko'ylak (Xitoy).",
    "(b) **Xitoy ko'ylak** eksport qiladi, AQSh kompyuter. Misol (narx 7 ko'ylak / kompyuter): Xitoy faqat ko'ylak (100), AQSh 16 kompyuter + 20 ko'ylak. AQSh 6 kompyuterni 42 ko'ylakka almashtiradi → **AQSh: 62 ko'ylak + 10 komp.** (oldin 50 + 10), **Xitoy: 58 ko'ylak + 6 komp.** (oldin 50 + 5). Ikkalasi ham yutadi.",
    "(c) 1 kompyuter narxi **5 va 10 ko'ylak** orasida.",
    "(d) OC lar tenglashadi (5 = 5) → savdodan yutuq **yo'qoladi**; lekin Xitoy fuqarolari ko'proq ishlab chiqaradi — ular boyiydi; amerikaliklar savdo yutug'ini yo'qotadi, lekin oldingi holatdan (savdosiz) yomonroq emas.",
  ], "China exports shirts; the price of a computer is between 5 and 10 shirts; once productivities match, the gains from trade disappear."),
  p(9, "True or false? (a) “Two countries can achieve gains from trade even if one has an absolute advantage in all goods.” (b) “Certain talented people have a comparative advantage in everything they do.” (c) “If a certain trade is good for one person, it can't be good for the other one.” (d) “If a certain trade is good for one person, it is always good for the other one.” (e) “If trade is good for a country, it must be good for everyone in the country.”", [
    "(a) **True** — Ruby va Frank.",
    "(b) **False** — qiyosiy ustunlik ikkala tovarda bo'lmaydi.",
    "(c) **False** — ixtiyoriy savdo ikkalasini yutadi.",
    "(d) **False** — ixtiyoriy savdo odatda ikkalasiga yaxshi, lekin “doim” emas (masalan, noto'g'ri ma'lumot yoki narx OC lardan tashqarida bo'lsa).",
    "(e) **False** — raqobatlashuvchi tarmoq ishchilari yutqazishi mumkin.",
  ], "(a) T (b) F (c) F (d) F (e) F."),
];
