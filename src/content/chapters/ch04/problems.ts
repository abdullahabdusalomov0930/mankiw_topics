import type { Problem } from '../../types';

const C = 4;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch04.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch04.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "What is a **competitive market**? Briefly describe a type of market that is not perfectly competitive.", [
    "Raqobatli bozor — xaridor va sotuvchilar shunchalik ko'pki, har birining narxga ta'siri juda kichik.",
    "Mukammal raqobat: (1) tovarlar bir xil, (2) ishtirokchilar juda ko'p → hamma **price taker**.",
    "Mukammal bo'lmagan bozor misoli: **monopoliya** — yagona sotuvchi narxni belgilaydi (shahardagi yagona kabel TV kompaniyasi). Ko'p bozorlar ikkisi orasida.",
  ], "Many buyers and sellers, each with negligible influence on price. Not perfectly competitive: a monopoly (one seller sets the price)."),
  r(2, "What are the **demand schedule** and the **demand curve**, and how are they related? Why does the demand curve slope downward?", [
    "Talab jadvali — har bir narxda talab miqdorini ko'rsatuvchi **jadval**.",
    "Talab egri chizig'i — o'sha jadvalning **grafigi** (narx vertikal, miqdor gorizontal o'qda).",
    "Pastga egilgan, chunki **talab qonuni**: boshqa narsalar teng bo'lsa, narx past → talab miqdori ko'p.",
  ], "The curve is a graph of the schedule; it slopes down because of the law of demand."),
  r(3, "Does a change in consumers' **tastes** lead to a movement along the demand curve or a shift? Does a change in **price**?", [
    "Did grafik o'qlarida yo'q → o'zgarsa egri chiziq **siljiydi**.",
    "Narx vertikal o'qda → o'zgarsa egri chiziq **bo'ylab harakat** (change in quantity demanded).",
  ], "Tastes: shift. Price: movement along the curve."),
  r(4, "Harry's income declines, and as a result, he buys **more** pumpkin juice. Is pumpkin juice an inferior or a normal good? What happens to his demand curve?", [
    "Daromad ↓, talab ↑ → daromad va talab qarama-qarshi yo'nalishda → **inferior good**.",
    "Har bir narxda ko'proq sotib oladi → talab egri chizig'i **o'ngga** siljiydi.",
  ], "Inferior; his demand curve shifts to the right."),
  r(5, "What are the **supply schedule** and the **supply curve**, and how are they related? Why does the supply curve slope upward?", [
    "Taklif jadvali — har bir narxda taklif miqdori; taklif egri chizig'i — uning grafigi.",
    "Yuqoriga egilgan, chunki **taklif qonuni**: narx yuqori → sotish foydaliroq → ko'proq ishlab chiqariladi.",
  ], "The curve graphs the schedule; it slopes up because of the law of supply."),
  r(6, "Does a change in producers' **technology** lead to a movement along the supply curve or a shift? Does a change in **price**?", [
    "Texnologiya o'qlarda yo'q → taklif **siljiydi** (yaxshi texnologiya → o'ngga).",
    "Narx → taklif egri chizig'i **bo'ylab harakat**.",
  ], "Technology: shift. Price: movement along."),
  r(7, "Define the **equilibrium** of a market. Describe the forces that move a market toward its equilibrium.", [
    "Muvozanat — narx shunday darajadaki, talab miqdori = taklif miqdori.",
    "Narx yuqori bo'lsa → **surplus** → sotuvchilar narxni tushiradi.",
    "Narx past bo'lsa → **shortage** → navbatlar, sotuvchilar narxni ko'taradi.",
    "Bu harakatlar egri chiziqlar **bo'ylab** sodir bo'ladi va narxni P* ga qaytaradi (law of supply and demand).",
  ], "Qd = Qs at the equilibrium price; surpluses push price down and shortages push it up."),
  r(8, "Beer and pizza are **complements**. When the price of beer rises, what happens to the supply, demand, quantity supplied, quantity demanded, and price in the market for pizza?", [
    "Pivo qimmat → birga iste'mol qilinadigan pitsaga **talab kamayadi** (chapga).",
    "Pitsa **taklifi** o'zgarmaydi (egri chiziq joyida).",
    "Yangi muvozanat: pitsa **narxi tushadi**, sotilgan **miqdor kamayadi**.",
    "Narx tushgani uchun taklif egri chizig'i bo'ylab pastga: **quantity supplied kamayadi**; quantity demanded ham yangi (kichikroq) muvozanatga teng.",
  ], "Demand falls, supply unchanged; price falls; quantity supplied and quantity demanded both fall."),
  r(9, "Describe the **role of prices** in market economies.", [
    "Narx — signal: u kimning nima sotib olishi va kim nima ishlab chiqarishini hal qiladi.",
    "Narx talab va taklifni muvozanatlaydi: sohil bo'yidagi yer to'lashga tayyor va qodir bo'lganlarga boradi; fermerlar maoshi yetarlicha odam fermer bo'lishini ta'minlaydi.",
    "Kitob tasviri: agar ko'rinmas qo'l bozorni boshqarsa, **narx tizimi — uning dirijyorlik tayoqchasi**.",
  ], "Prices are the signals that guide decisions and ration scarce resources, balancing supply and demand."),
];

export const problems: Problem[] = [
  p(1, "Explain using supply-and-demand diagrams: (a) “When a cold snap hits Florida, the price of orange juice rises.” (b) “When the weather turns warm in New England every summer, the price of hotel rooms in the Caribbean plummets.” (c) “When a war breaks out in the Middle East, the price of gasoline rises, and the price of a used SUV falls.”", [
    "(a) Sovuq apelsin hosilini yo'q qiladi → apelsin sharbati **taklifi chapga** → narx ↑, miqdor ↓.",
    "(b) Shimolda iliq bo'lsa, odamlar Karib orollariga bormaydi → mehmonxona **talabi chapga** → narx ↓ keskin.",
    "(c) Urush neft taklifini qisqartiradi → benzin **taklifi chapga** → benzin qimmat. Benzin — SUV uchun **to'ldiruvchi** → ishlatilgan SUV **talabi chapga** → SUV narxi ↓.",
  ], "(a) Supply of OJ falls. (b) Demand for Caribbean hotels falls. (c) Gas supply falls (price up); demand for SUVs (a complement) falls (price down)."),
  p(2, "“An increase in the demand for notebooks raises the quantity of notebooks demanded but not the quantity supplied.” Is this statement true or false? Explain.", [
    "Talab o'ngga siljiydi → narx oshadi.",
    "Narx oshgach sotuvchilar taklif egri chizig'i bo'ylab yuqoriga harakatlanadi → **quantity supplied oshadi**.",
    "Demak gap **noto'g'ri**: yangi muvozanatda ikkala miqdor ham oshgan.",
  ], "False: the higher price raises the quantity supplied (a movement along the supply curve)."),
  p(3, "Minivans. For each event identify the determinant affected, whether demand or supply increases or decreases, and the effect on price and quantity: (a) people decide to have more children; (b) a steelworkers' strike raises steel prices; (c) new automated machinery; (d) the price of SUVs rises; (e) a stock market crash lowers wealth.", [
    "(a) **Did/xaridorlar soni**: talab ↑ → P ↑, Q ↑.",
    "(b) **Xomashyo narxi** (po'lat): taklif ↓ → P ↑, Q ↓.",
    "(c) **Texnologiya**: taklif ↑ → P ↓, Q ↑.",
    "(d) SUV — **o'rinbosar**: SUV qimmat → miniven talabi ↑ → P ↑, Q ↑.",
    "(e) **Daromad/boylik** ↓ (miniven normal tovar): talab ↓ → P ↓, Q ↓.",
  ], "(a) D↑ (b) S↓ (c) S↑ (d) D↑ (substitute) (e) D↓."),
  p(4, "Video streaming, TV screens, and movie tickets. (a) Complements or substitutes: streaming & TV screens; streaming & movie tickets; TV screens & movie tickets. (b) A technological advance reduces the cost of TV screens. (c) Show how this affects the markets for streaming and movie tickets.", [
    "(a) Striming va TV — **to'ldiruvchi**; striming va kino chiptasi — **o'rinbosar**; TV va kino chiptasi — **o'rinbosar**.",
    "(b) TV ekran bozorida taklif o'ngga → narx ↓, miqdor ↑.",
    "(c) Striming: to'ldiruvchi arzonladi → talab ↑ → P ↑, Q ↑. Kino chiptasi: o'rinbosar (uydagi TV) arzonladi → talab ↓ → P ↓, Q ↓.",
  ], "Streaming demand rises; movie-ticket demand falls."),
  p(5, "Over the past 40 years, technological advances have reduced the cost of computer chips. How has this affected the market for computers? For computer software? For typewriters?", [
    "Kompyuter: chip — xomashyo arzonlashdi → taklif ↑ → narx ↓, miqdor ↑.",
    "Dasturlar: kompyuterning **to'ldiruvchisi** → talab ↑ → narx ↑, miqdor ↑.",
    "Yozuv mashinkalari: kompyuterning **o'rinbosari** → talab ↓ → narx ↓, miqdor ↓.",
  ], "Computers: supply up. Software (complement): demand up. Typewriters (substitute): demand down."),
  p(6, "Show the effects on the market for **sweatshirts**: (a) a hurricane damages the cotton crop; (b) the price of leather jackets falls; (c) all colleges require morning exercise in appropriate attire; (d) new knitting machines are invented.", [
    "(a) Paxta — xomashyo → taklif ↓ → P ↑, Q ↓.",
    "(b) Charm kurtka — o'rinbosar, arzonladi → sviter talabi ↓ → P ↓, Q ↓.",
    "(c) Talab ↑ (did/zarurat) → P ↑, Q ↑.",
    "(d) Texnologiya → taklif ↑ → P ↓, Q ↑.",
  ], "(a) S↓ (b) D↓ (c) D↑ (d) S↑."),
  p(7, "Ketchup is a complement for hot dogs. If the price of hot dogs rises, what happens in the market for ketchup? For tomatoes? For tomato juice? For orange juice?", [
    "Hot dog qimmat → ketchup **talabi** ↓ → ketchup narxi va miqdori ↓.",
    "Pomidor — ketchup xomashyosi: ketchup kam ishlab chiqariladi → pomidor **talabi** ↓ → pomidor narxi ↓, miqdori ↓.",
    "Pomidor sharbati: xomashyosi (pomidor) arzonladi → **taklif** ↑ → narx ↓, miqdor ↑.",
    "Apelsin sharbati — pomidor sharbatining o'rinbosari: pomidor sharbati arzon → apelsin sharbati **talabi** ↓ → narx ↓, miqdor ↓.",
  ], "Ketchup D↓; tomatoes D↓; tomato juice S↑ (P↓, Q↑); orange juice D↓."),
  p(8, "The market for pizza: $4: Qd 135 / Qs 26; $5: 104 / 53; $6: 81 / 81; $7: 68 / 98; $8: 53 / 110; $9: 39 / 121. (a) Equilibrium price and quantity? (b) If the price were above equilibrium, what would drive the market toward equilibrium? (c) If below?", [
    "(a) \\(Q^D = Q^S\\) qatori: **$6, 81 pitsa**.",
    "(b) Narx yuqori (masalan $8): surplus 57 → sotuvchilar sotolmay qoladi → narxni tushiradi → \\(Q^D\\) ↑, \\(Q^S\\) ↓.",
    "(c) Narx past ($5): shortage 51 → xaridorlar navbatda → sotuvchilar narxni ko'taradi.",
    "Pastdagi jadvalda qatorlar ustiga bosing — har bir narxdagi shortage/surplus ko'rsatiladi.",
  ], "(a) $6 and 81 pizzas. (b) Surplus → price falls. (c) Shortage → price rises.", "pizza"),
  p(9, "Scientists reveal that eating oranges decreases the risk of diabetes, and at the same time, farmers use a new fertilizer that makes orange trees produce more oranges. Illustrate and explain the effect on the equilibrium price and quantity of oranges.", [
    "Yangilik → **talab o'ngga** (did). O'g'it → **taklif o'ngga** (texnologiya).",
    "Ikkalasi ham miqdorni oshiradi → **Q aniq oshadi**.",
    "Narxni talab ko'taradi, taklif tushiradi → **P noaniq** (siljishlar kattaligiga bog'liq). Table 4 dagi “increase/increase” katagi.",
  ], "Quantity rises; the effect on price is ambiguous."),
  p(10, "Bagels and cream cheese are complements. (a) The equilibrium price of cream cheese and the equilibrium quantity of bagels have both risen. A fall in the price of flour or a fall in the price of milk? (b) The equilibrium price of cream cheese has risen, but the equilibrium quantity of bagels has fallen. A rise in the price of flour or a rise in the price of milk?", [
    "(a) **Un arzonladi**: bagel taklifi ↑ → bagel miqdori ↑, narxi ↓ → to'ldiruvchi pishloq talabi ↑ → pishloq narxi ↑ ✓. (Sut arzonlasa, pishloq arzonlashardi — mos emas.)",
    "(b) **Sut qimmatladi**: pishloq taklifi ↓ → pishloq narxi ↑ → bagel talabi ↓ → bagel miqdori ↓ ✓. (Un qimmatlasa: bagel miqdori ↓, lekin pishloq talabi ↓ → pishloq narxi ↓ — mos emas.)",
  ], "(a) A fall in the price of flour. (b) A rise in the price of milk."),
  p(11, "Basketball tickets: $4: Qd 10,000 / Qs 8,000; $8: 8,000 / 8,000; $12: 6,000 / 8,000; $16: 4,000 / 8,000; $20: 2,000 / 8,000. (a) What is unusual about this supply curve? Why? (b) Equilibrium? (c) 5,000 new students with demand $4: 4,000; $8: 3,000; $12: 2,000; $16: 1,000; $20: 0. New equilibrium?", [
    "(a) Taklif **vertikal** (8,000 da qat'iy): zalda o'rinlar soni belgilangan, narxdan qat'i nazar o'zgarmaydi.",
    "(b) $8 da 8,000 = 8,000 → **$8, 8,000 chipta**.",
    "(c) Talablarni qo'shamiz: $4: 14,000; $8: 11,000; $12: 8,000; $16: 5,000; $20: 2,000.",
    "Yangi muvozanat: **$12, 8,000 chipta** — miqdor o'zgarmadi (taklif vertikal), faqat narx oshdi. Jadvalda “yangi talabalar”ni yoqib ko'ring.",
  ], "(a) Vertical: fixed seats. (b) $8, 8,000. (c) $12, 8,000.", "tickets"),
];
