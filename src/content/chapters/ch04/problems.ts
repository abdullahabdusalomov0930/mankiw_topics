import type { Problem } from '../../types';
import { tr } from '../../../lib/lang';

const C = 4;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch04.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch04.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "What is a **competitive market**? Briefly describe a type of market that is not perfectly competitive.", [
    tr("Raqobatli bozor — xaridor va sotuvchilar shunchalik ko'pki, har birining narxga ta'siri juda kichik.", 'A competitive market has so many buyers and sellers that each has very little influence on the price.'),
    tr("Mukammal raqobat: (1) tovarlar bir xil, (2) ishtirokchilar juda ko'p → hamma **price taker**.", 'Perfect competition: (1) the goods are identical, (2) there are very many participants → everyone is a **price taker**.'),
    tr("Mukammal bo'lmagan bozor misoli: **monopoliya** — yagona sotuvchi narxni belgilaydi (shahardagi yagona kabel TV kompaniyasi). Ko'p bozorlar ikkisi orasida.", 'An example of an imperfect market: a **monopoly** — a single seller sets the price (the only cable TV company in town). Many markets are in between.'),
  ], "Many buyers and sellers, each with negligible influence on price. Not perfectly competitive: a monopoly (one seller sets the price)."),
  r(2, "What are the **demand schedule** and the **demand curve**, and how are they related? Why does the demand curve slope downward?", [
    tr("Talab jadvali — har bir narxda talab miqdorini ko'rsatuvchi **jadval**.", 'A demand schedule is a **table** showing the quantity demanded at each price.'),
    tr("Talab egri chizig'i — o'sha jadvalning **grafigi** (narx vertikal, miqdor gorizontal o'qda).", 'A demand curve is the **graph** of that table (price on the vertical axis, quantity on the horizontal).'),
    tr("Pastga egilgan, chunki **talab qonuni**: boshqa narsalar teng bo'lsa, narx past → talab miqdori ko'p.", 'It slopes down because of the **law of demand**: other things equal, a lower price → a larger quantity demanded.'),
  ], "The curve is a graph of the schedule; it slopes down because of the law of demand."),
  r(3, "Does a change in consumers' **tastes** lead to a movement along the demand curve or a shift? Does a change in **price**?", [
    tr("Did grafik o'qlarida yo'q → o'zgarsa egri chiziq **siljiydi**.", "Tastes are not on the graph's axes → a change **shifts** the curve."),
    tr("Narx vertikal o'qda → o'zgarsa egri chiziq **bo'ylab harakat** (change in quantity demanded).", 'The price is on the vertical axis → a change is a **movement along** the curve (a change in quantity demanded).'),
  ], "Tastes: shift. Price: movement along the curve."),
  r(4, "Harry's income declines, and as a result, he buys **more** pumpkin juice. Is pumpkin juice an inferior or a normal good? What happens to his demand curve?", [
    tr("Daromad ↓, talab ↑ → daromad va talab qarama-qarshi yo'nalishda → **inferior good**.", 'Income ↓, demand ↑ → income and demand move in opposite directions → an **inferior good**.'),
    tr("Har bir narxda ko'proq sotib oladi → talab egri chizig'i **o'ngga** siljiydi.", 'She buys more at every price → the demand curve shifts **right**.'),
  ], "Inferior; his demand curve shifts to the right."),
  r(5, "What are the **supply schedule** and the **supply curve**, and how are they related? Why does the supply curve slope upward?", [
    tr("Taklif jadvali — har bir narxda taklif miqdori; taklif egri chizig'i — uning grafigi.", 'A supply schedule shows the quantity supplied at each price; the supply curve is its graph.'),
    tr("Yuqoriga egilgan, chunki **taklif qonuni**: narx yuqori → sotish foydaliroq → ko'proq ishlab chiqariladi.", 'It slopes up because of the **law of supply**: a higher price → selling is more profitable → more is produced.'),
  ], "The curve graphs the schedule; it slopes up because of the law of supply."),
  r(6, "Does a change in producers' **technology** lead to a movement along the supply curve or a shift? Does a change in **price**?", [
    tr("Texnologiya o'qlarda yo'q → taklif **siljiydi** (yaxshi texnologiya → o'ngga).", 'Technology is not on the axes → supply **shifts** (better technology → right).'),
    tr("Narx → taklif egri chizig'i **bo'ylab harakat**.", 'The price → a **movement along** the supply curve.'),
  ], "Technology: shift. Price: movement along."),
  r(7, "Define the **equilibrium** of a market. Describe the forces that move a market toward its equilibrium.", [
    tr("Muvozanat — narx shunday darajadaki, talab miqdori = taklif miqdori.", 'Equilibrium is the price at which quantity demanded = quantity supplied.'),
    tr("Narx yuqori bo'lsa → **surplus** → sotuvchilar narxni tushiradi.", 'If the price is too high → a **surplus** → sellers cut the price.'),
    tr("Narx past bo'lsa → **shortage** → navbatlar, sotuvchilar narxni ko'taradi.", 'If the price is too low → a **shortage** → queues form and sellers raise the price.'),
    tr("Bu harakatlar egri chiziqlar **bo'ylab** sodir bo'ladi va narxni P* ga qaytaradi (law of supply and demand).", 'These adjustments happen **along** the curves and bring the price back to P* (the law of supply and demand).'),
  ], "Qd = Qs at the equilibrium price; surpluses push price down and shortages push it up."),
  r(8, "Beer and pizza are **complements**. When the price of beer rises, what happens to the supply, demand, quantity supplied, quantity demanded, and price in the market for pizza?", [
    tr("Pivo qimmat → birga iste'mol qilinadigan pitsaga **talab kamayadi** (chapga).", 'Beer gets pricier → demand for pizza, which is consumed with it, **falls** (shifts left).'),
    tr("Pitsa **taklifi** o'zgarmaydi (egri chiziq joyida).", "Pizza **supply** doesn't change (the curve stays put)."),
    tr("Yangi muvozanat: pitsa **narxi tushadi**, sotilgan **miqdor kamayadi**.", 'The new equilibrium: the pizza **price falls** and the **quantity** sold **falls**.'),
    tr("Narx tushgani uchun taklif egri chizig'i bo'ylab pastga: **quantity supplied kamayadi**; quantity demanded ham yangi (kichikroq) muvozanatga teng.", 'Because the price fell, sellers move down along the supply curve: **quantity supplied falls**; quantity demanded equals it at the new (smaller) equilibrium.'),
  ], "Demand falls, supply unchanged; price falls; quantity supplied and quantity demanded both fall."),
  r(9, "Describe the **role of prices** in market economies.", [
    tr("Narx — signal: u kimning nima sotib olishi va kim nima ishlab chiqarishini hal qiladi.", 'The price is a signal: it decides who buys what and who produces what.'),
    tr("Narx talab va taklifni muvozanatlaydi: sohil bo'yidagi yer to'lashga tayyor va qodir bo'lganlarga boradi; fermerlar maoshi yetarlicha odam fermer bo'lishini ta'minlaydi.", 'The price balances supply and demand: beachfront land goes to those willing and able to pay for it; farm wages make sure enough people become farmers.'),
    tr("Kitob tasviri: agar ko'rinmas qo'l bozorni boshqarsa, **narx tizimi — uning dirijyorlik tayoqchasi**.", "The book's image: if the invisible hand guides the market, **the price system is the baton** it uses to conduct the economic orchestra."),
  ], "Prices are the signals that guide decisions and ration scarce resources, balancing supply and demand."),
];

export const problems: Problem[] = [
  p(1, "Explain using supply-and-demand diagrams: (a) “When a cold snap hits Florida, the price of orange juice rises.” (b) “When the weather turns warm in New England every summer, the price of hotel rooms in the Caribbean plummets.” (c) “When a war breaks out in the Middle East, the price of gasoline rises, and the price of a used SUV falls.”", [
    tr("(a) Sovuq apelsin hosilini yo'q qiladi → apelsin sharbati **taklifi chapga** → narx ↑, miqdor ↓.", '(a) A frost destroys the orange crop → orange-juice **supply shifts left** → price ↑, quantity ↓.'),
    tr("(b) Shimolda iliq bo'lsa, odamlar Karib orollariga bormaydi → mehmonxona **talabi chapga** → narx ↓ keskin.", '(b) A warm winter in the North means people skip the Caribbean → hotel **demand shifts left** → the price ↓ sharply.'),
    tr("(c) Urush neft taklifini qisqartiradi → benzin **taklifi chapga** → benzin qimmat. Benzin — SUV uchun **to'ldiruvchi** → ishlatilgan SUV **talabi chapga** → SUV narxi ↓.", '(c) A war cuts the oil supply → gasoline **supply shifts left** → gasoline gets pricier. Gasoline is a **complement** to SUVs → **demand** for used SUVs **shifts left** → SUV prices ↓.'),
  ], "(a) Supply of OJ falls. (b) Demand for Caribbean hotels falls. (c) Gas supply falls (price up); demand for SUVs (a complement) falls (price down)."),
  p(2, "“An increase in the demand for notebooks raises the quantity of notebooks demanded but not the quantity supplied.” Is this statement true or false? Explain.", [
    tr("Talab o'ngga siljiydi → narx oshadi.", 'Demand shifts right → the price rises.'),
    tr("Narx oshgach sotuvchilar taklif egri chizig'i bo'ylab yuqoriga harakatlanadi → **quantity supplied oshadi**.", 'Once the price rises, sellers move up along the supply curve → **quantity supplied rises**.'),
    tr("Demak gap **noto'g'ri**: yangi muvozanatda ikkala miqdor ham oshgan.", 'So the statement is **false**: in the new equilibrium both quantities have risen.'),
  ], "False: the higher price raises the quantity supplied (a movement along the supply curve)."),
  p(3, "Minivans. For each event identify the determinant affected, whether demand or supply increases or decreases, and the effect on price and quantity: (a) people decide to have more children; (b) a steelworkers' strike raises steel prices; (c) new automated machinery; (d) the price of SUVs rises; (e) a stock market crash lowers wealth.", [
    tr("(a) **Did/xaridorlar soni**: talab ↑ → P ↑, Q ↑.", '(a) **Tastes/number of buyers**: demand ↑ → P ↑, Q ↑.'),
    tr("(b) **Xomashyo narxi** (po'lat): taklif ↓ → P ↑, Q ↓.", '(b) **An input price** (steel): supply ↓ → P ↑, Q ↓.'),
    tr("(c) **Texnologiya**: taklif ↑ → P ↓, Q ↑.", '(c) **Technology**: supply ↑ → P ↓, Q ↑.'),
    tr("(d) SUV — **o'rinbosar**: SUV qimmat → miniven talabi ↑ → P ↑, Q ↑.", '(d) SUVs are a **substitute**: SUVs pricier → demand for minivans ↑ → P ↑, Q ↑.'),
    tr("(e) **Daromad/boylik** ↓ (miniven normal tovar): talab ↓ → P ↓, Q ↓.", '(e) **Income/wealth** ↓ (minivans a normal good): demand ↓ → P ↓, Q ↓.'),
  ], "(a) D↑ (b) S↓ (c) S↑ (d) D↑ (substitute) (e) D↓."),
  p(4, "Video streaming, TV screens, and movie tickets. (a) Complements or substitutes: streaming & TV screens; streaming & movie tickets; TV screens & movie tickets. (b) A technological advance reduces the cost of TV screens. (c) Show how this affects the markets for streaming and movie tickets.", [
    tr("(a) Striming va TV — **to'ldiruvchi**; striming va kino chiptasi — **o'rinbosar**; TV va kino chiptasi — **o'rinbosar**.", '(a) Streaming and TVs are **complements**; streaming and movie tickets are **substitutes**; TVs and movie tickets are **substitutes**.'),
    tr("(b) TV ekran bozorida taklif o'ngga → narx ↓, miqdor ↑.", '(b) In the TV market supply shifts right → price ↓, quantity ↑.'),
    tr("(c) Striming: to'ldiruvchi arzonladi → talab ↑ → P ↑, Q ↑. Kino chiptasi: o'rinbosar (uydagi TV) arzonladi → talab ↓ → P ↓, Q ↓.", '(c) Streaming: its complement got cheaper → demand ↑ → P ↑, Q ↑. Movie tickets: a substitute (TV at home) got cheaper → demand ↓ → P ↓, Q ↓.'),
  ], "Streaming demand rises; movie-ticket demand falls."),
  p(5, "Over the past 40 years, technological advances have reduced the cost of computer chips. How has this affected the market for computers? For computer software? For typewriters?", [
    tr("Kompyuter: chip — xomashyo arzonlashdi → taklif ↑ → narx ↓, miqdor ↑.", 'Computers: chips, an input, got cheaper → supply ↑ → price ↓, quantity ↑.'),
    tr("Dasturlar: kompyuterning **to'ldiruvchisi** → talab ↑ → narx ↑, miqdor ↑.", 'Software: a **complement** to computers → demand ↑ → price ↑, quantity ↑.'),
    tr("Yozuv mashinkalari: kompyuterning **o'rinbosari** → talab ↓ → narx ↓, miqdor ↓.", 'Typewriters: a **substitute** for computers → demand ↓ → price ↓, quantity ↓.'),
  ], "Computers: supply up. Software (complement): demand up. Typewriters (substitute): demand down."),
  p(6, "Show the effects on the market for **sweatshirts**: (a) a hurricane damages the cotton crop; (b) the price of leather jackets falls; (c) all colleges require morning exercise in appropriate attire; (d) new knitting machines are invented.", [
    tr("(a) Paxta — xomashyo → taklif ↓ → P ↑, Q ↓.", '(a) Cotton is an input → supply ↓ → P ↑, Q ↓.'),
    tr("(b) Charm kurtka — o'rinbosar, arzonladi → sviter talabi ↓ → P ↓, Q ↓.", '(b) Leather jackets are a substitute and got cheaper → demand for sweatshirts ↓ → P ↓, Q ↓.'),
    tr("(c) Talab ↑ (did/zarurat) → P ↑, Q ↑.", '(c) Demand ↑ (tastes/need) → P ↑, Q ↑.'),
    tr("(d) Texnologiya → taklif ↑ → P ↓, Q ↑.", '(d) Technology → supply ↑ → P ↓, Q ↑.'),
  ], "(a) S↓ (b) D↓ (c) D↑ (d) S↑."),
  p(7, "Ketchup is a complement for hot dogs. If the price of hot dogs rises, what happens in the market for ketchup? For tomatoes? For tomato juice? For orange juice?", [
    tr("Hot dog qimmat → ketchup **talabi** ↓ → ketchup narxi va miqdori ↓.", "Hot dogs pricier → ketchup **demand** ↓ → ketchup's price and quantity ↓."),
    tr("Pomidor — ketchup xomashyosi: ketchup kam ishlab chiqariladi → pomidor **talabi** ↓ → pomidor narxi ↓, miqdori ↓.", "Tomatoes are an input to ketchup: less ketchup is made → tomato **demand** ↓ → tomatoes' price ↓, quantity ↓."),
    tr("Pomidor sharbati: xomashyosi (pomidor) arzonladi → **taklif** ↑ → narx ↓, miqdor ↑.", 'Tomato juice: its input (tomatoes) got cheaper → **supply** ↑ → price ↓, quantity ↑.'),
    tr("Apelsin sharbati — pomidor sharbatining o'rinbosari: pomidor sharbati arzon → apelsin sharbati **talabi** ↓ → narx ↓, miqdor ↓.", 'Orange juice is a substitute for tomato juice: tomato juice is cheaper → orange-juice **demand** ↓ → price ↓, quantity ↓.'),
  ], "Ketchup D↓; tomatoes D↓; tomato juice S↑ (P↓, Q↑); orange juice D↓."),
  p(8, "The market for pizza: $4: Qd 135 / Qs 26; $5: 104 / 53; $6: 81 / 81; $7: 68 / 98; $8: 53 / 110; $9: 39 / 121. (a) Equilibrium price and quantity? (b) If the price were above equilibrium, what would drive the market toward equilibrium? (c) If below?", [
    tr("(a) \\(Q^D = Q^S\\) qatori: **$6, 81 pitsa**.", '(a) The row where \\(Q^D = Q^S\\): **$6, 81 pizzas**.'),
    tr("(b) Narx yuqori (masalan $8): surplus 57 → sotuvchilar sotolmay qoladi → narxni tushiradi → \\(Q^D\\) ↑, \\(Q^S\\) ↓.", "(b) At a higher price (say $8): a surplus of 57 → sellers can't sell → they cut the price → \\(Q^D\\) ↑, \\(Q^S\\) ↓."),
    tr("(c) Narx past ($5): shortage 51 → xaridorlar navbatda → sotuvchilar narxni ko'taradi.", '(c) At a lower price ($5): a shortage of 51 → buyers queue → sellers raise the price.'),
    tr("Pastdagi jadvalda qatorlar ustiga bosing — har bir narxdagi shortage/surplus ko'rsatiladi.", 'Click the rows of the table below — the shortage or surplus at each price is shown.'),
  ], "(a) $6 and 81 pizzas. (b) Surplus → price falls. (c) Shortage → price rises.", "pizza"),
  p(9, "Scientists reveal that eating oranges decreases the risk of diabetes, and at the same time, farmers use a new fertilizer that makes orange trees produce more oranges. Illustrate and explain the effect on the equilibrium price and quantity of oranges.", [
    tr("Yangilik → **talab o'ngga** (did). O'g'it → **taklif o'ngga** (texnologiya).", 'The news → **demand shifts right** (tastes). The fertilizer → **supply shifts right** (technology).'),
    tr("Ikkalasi ham miqdorni oshiradi → **Q aniq oshadi**.", 'Both raise the quantity → **Q definitely rises**.'),
    tr("Narxni talab ko'taradi, taklif tushiradi → **P noaniq** (siljishlar kattaligiga bog'liq). Table 4 dagi “increase/increase” katagi.", 'Demand pushes the price up and supply pushes it down → **P is ambiguous** (it depends on the sizes of the shifts). The “increase/increase” cell of Table 4.'),
  ], "Quantity rises; the effect on price is ambiguous."),
  p(10, "Bagels and cream cheese are complements. (a) The equilibrium price of cream cheese and the equilibrium quantity of bagels have both risen. A fall in the price of flour or a fall in the price of milk? (b) The equilibrium price of cream cheese has risen, but the equilibrium quantity of bagels has fallen. A rise in the price of flour or a rise in the price of milk?", [
    tr("(a) **Un arzonladi**: bagel taklifi ↑ → bagel miqdori ↑, narxi ↓ → to'ldiruvchi pishloq talabi ↑ → pishloq narxi ↑ ✓. (Sut arzonlasa, pishloq arzonlashardi — mos emas.)", "(a) **Flour got cheaper**: bagel supply ↑ → bagel quantity ↑, price ↓ → demand for the complement cream cheese ↑ → cream-cheese price ↑ ✓. (Cheaper milk would make cream cheese cheaper — doesn't fit.)"),
    tr("(b) **Sut qimmatladi**: pishloq taklifi ↓ → pishloq narxi ↑ → bagel talabi ↓ → bagel miqdori ↓ ✓. (Un qimmatlasa: bagel miqdori ↓, lekin pishloq talabi ↓ → pishloq narxi ↓ — mos emas.)", "(b) **Milk got pricier**: cream-cheese supply ↓ → its price ↑ → bagel demand ↓ → bagel quantity ↓ ✓. (Pricier flour: bagel quantity ↓, but cream-cheese demand ↓ → its price ↓ — doesn't fit.)"),
  ], "(a) A fall in the price of flour. (b) A rise in the price of milk."),
  p(11, "Basketball tickets: $4: Qd 10,000 / Qs 8,000; $8: 8,000 / 8,000; $12: 6,000 / 8,000; $16: 4,000 / 8,000; $20: 2,000 / 8,000. (a) What is unusual about this supply curve? Why? (b) Equilibrium? (c) 5,000 new students with demand $4: 4,000; $8: 3,000; $12: 2,000; $16: 1,000; $20: 0. New equilibrium?", [
    tr("(a) Taklif **vertikal** (8,000 da qat'iy): zalda o'rinlar soni belgilangan, narxdan qat'i nazar o'zgarmaydi.", '(a) Supply is **vertical** (fixed at 8,000): the arena has a fixed number of seats, whatever the price.'),
    tr("(b) $8 da 8,000 = 8,000 → **$8, 8,000 chipta**.", '(b) At $8, 8,000 = 8,000 → **$8, 8,000 tickets**.'),
    tr("(c) Talablarni qo'shamiz: $4: 14,000; $8: 11,000; $12: 8,000; $16: 5,000; $20: 2,000.", '(c) Add the demands: $4: 14,000; $8: 11,000; $12: 8,000; $16: 5,000; $20: 2,000.'),
    tr("Yangi muvozanat: **$12, 8,000 chipta** — miqdor o'zgarmadi (taklif vertikal), faqat narx oshdi. Jadvalda “yangi talabalar”ni yoqib ko'ring.", "The new equilibrium: **$12, 8,000 tickets** — the quantity didn't change (supply is vertical), only the price rose. Turn on “new students” in the table to see it."),
  ], "(a) Vertical: fixed seats. (b) $8, 8,000. (c) $12, 8,000.", "tickets"),
];
