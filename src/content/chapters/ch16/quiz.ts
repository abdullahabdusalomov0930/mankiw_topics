import type { Question } from '../../types';
import { tr } from '../../../lib/lang';

const C = 16;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch16.qq.1", tr("Davlat monopoliyasi", 'Government monopoly'), "Some government grants of monopoly power may be desirable if they", [
    { text: "curtail the adverse effects of cut-throat competition.", why: tr("Kitob raqobatni zararli deb bilmaydi.", "The book doesn't consider competition harmful.") },
    { text: "make industries more profitable.", why: tr("Foyda o'zi maqsad emas.", "Profit isn't an end in itself.") },
    { text: "provide incentives for invention and artistic creation.", correct: true, why: tr("Patent va mualliflik huquqi tadqiqot va ijodni rag'batlantiradi.", 'Patents and copyrights encourage research and creativity.') },
    { text: "save consumers from having to choose among alternative suppliers.", why: tr("Tanlov yaxshi narsa.", 'Choice is a good thing.') },
  ]),
  mk("ch16.qq.2", tr("Tabiiy monopoliya", 'Natural monopoly'), "A firm is a natural monopoly if it exhibits ___ as its output increases.", [
    { text: "increasing total revenue", why: tr("Tushum bilan bog'liq emas.", 'Unrelated to revenue.') },
    { text: "increasing marginal cost", why: tr("Tabiiy monopoliyada ATC tushadi.", 'In a natural monopoly ATC falls.') },
    { text: "decreasing marginal revenue", why: tr("Bu har qanday monopoliyada.", "That's true of any monopoly.") },
    { text: "decreasing average total cost", correct: true, why: tr("Miqyos samarasi: bitta firma eng arzon.", 'Economies of scale: one firm is cheapest.') },
  ]),
  mk("ch16.qq.3", "P, MR, MC", "For a profit-maximizing monopoly that charges a single price, what is the relationship between P, MR, and MC?", [
    { text: "P = MR and MR = MC.", why: tr("Bu raqobatchi firma.", "That's a competitive firm.") },
    { text: "P > MR and MR = MC.", correct: true, why: tr("Foyda maksimumida MR = MC, monopoliyada P > MR.", 'At the profit maximum MR = MC, and under monopoly P > MR.') },
    { text: "P = MR and MR > MC.", why: tr("Ikkalasi ham noto'g'ri.", 'Both are wrong.') },
    { text: "P > MR and MR > MC.", why: tr("MR > MC bo'lsa, ko'paytirish foydali.", 'If MR > MC, increasing output is profitable.') },
  ]),
  mk("ch16.qq.4", "Fixed cost", "If a monopoly's fixed costs increase, its price will ___, and its profit will ___.", [
    { text: "increase; decrease", why: tr("Fixed cost MC va MR ga ta'sir qilmaydi — narx o'zgarmaydi.", "A fixed cost doesn't affect MC or MR — the price doesn't change.") },
    { text: "decrease; increase", why: "Hech biri." },
    { text: "increase; stay the same", why: tr("Foyda kamayadi.", 'Profit falls.') },
    { text: "stay the same; decrease", correct: true, why: tr("MR = MC nuqtasi o'zgarmaydi; foyda fixed cost miqdorida kamayadi.", "The MR = MC point doesn't change; profit falls by the fixed cost.") },
  ]),
  mk("ch16.qq.5", tr("Samaradorlik", 'Efficiency'), "Compared with the social optimum, a monopoly firm chooses", [
    { text: "a quantity that is too low and a price that is too high.", correct: true, why: tr("MR = MC < talab = MC miqdori; narx yuqori.", 'MR = MC gives less than the demand = MC quantity; the price is higher.') },
    { text: "a quantity that is too high and a price that is too low.", why: tr("Teskari.", 'The reverse.') },
    { text: "a quantity and a price that are both too high.", why: tr("Talab pastga qaragan — ikkalasi bir vaqtda yuqori bo'lmaydi.", "Demand slopes down — both can't be higher at once.") },
    { text: "a quantity and a price that are both too low.", why: tr("Talab pastga qaragan.", 'Demand slopes down.') },
  ]),
  mk("ch16.qq.6", tr("DWL", 'DWL'), "The deadweight loss from monopoly arises because", [
    { text: "the monopoly makes higher profits than a competitive firm would.", why: tr("Foyda — transfer, DWL emas.", 'Profit is a transfer, not a DWL.') },
    { text: "some potential consumers who forgo buying the good value it more than its marginal cost.", correct: true, why: tr("Amalga oshmagan foydali savdolar — DWL.", "Mutually beneficial trades that don't happen — the DWL.") },
    { text: "consumers who buy the good have to pay more than marginal cost, reducing their consumer surplus.", why: tr("Bu ishlab chiqaruvchiga transfer.", "That's a transfer to the producer.") },
    { text: "the monopoly chooses a quantity that fails to equate price and average revenue.", why: tr("P = AR har doim.", 'P = AR always.') },
  ]),
  mk("ch16.qq.7", tr("Diskriminatsiya", 'Discrimination'), "Price discrimination by a monopolist refers to charging different prices based on", [
    { text: "the consumer's willingness to pay.", correct: true, why: tr("Maqsad — har bir xaridorning WTP iga yaqin narx.", "The goal is a price close to each buyer's WTP.") },
    { text: "the consumer's racial or ethnic group.", why: tr("Iqtisodiy atama boshqa ma'noda.", 'The economic term means something else.') },
    { text: "the cost of producing the good for a particular consumer.", why: tr("Xarajat bir xil bo'lsa ham.", 'Even when costs are the same.') },
    { text: "whether the consumer is likely to become a repeat buyer.", why: tr("Asosiy mezon — WTP.", 'The key criterion is WTP.') },
  ]),
  mk("ch16.qq.8", tr("Mukammal diskriminatsiya", 'Perfect discrimination'), "When a monopolist switches from charging a single price to practicing perfect price discrimination, it reduces", [
    { text: "the quantity produced.", why: tr("Miqdor samarali darajagacha **oshadi**.", 'Quantity **rises** to the efficient level.') },
    { text: "the firm's profit.", why: tr("Foyda oshadi.", 'Profit rises.') },
    { text: "consumer surplus.", correct: true, why: tr("CS nolga tushadi.", 'CS falls to zero.') },
    { text: "total surplus.", why: tr("Umumiy surplus oshadi (DWL yo'qoladi).", 'Total surplus rises (the DWL disappears).') },
  ]),
  mk("ch16.qq.9", "Antitrust", "Antitrust regulators are likely to prohibit two firms from merging if", [
    { text: "there are many other firms in the industry.", why: tr("Unda raqobat saqlanadi.", 'Competition is preserved in that case.') },
    { text: "there are sizable synergies to the combination.", why: tr("Synergiyalar birlashish foydasini oshiradi.", 'Synergies increase the gains from merging.') },
    { text: "the combined firm will have a large share of the market.", correct: true, why: tr("Bozor hokimiyati xavfi.", 'The danger of market power.') },
    { text: "the combined firm will undercut competitors with lower prices.", why: tr("Past narx iste'molchiga foydali.", 'Low prices benefit consumers.') },
  ]),
  mk("ch16.qq.10", tr("Regulyatsiya", 'Regulation'), "If regulators impose marginal-cost pricing on a natural monopoly, a possible problem is that", [
    { text: "consumers will buy more of the good than is efficient.", why: tr("P = MC da samarali miqdor.", 'The efficient quantity is where P = MC.') },
    { text: "consumers will buy less of the good than is efficient.", why: tr("P = MC da samarali.", 'Efficient at P = MC.') },
    { text: "the firm will lose money and exit the market.", correct: true, why: tr("ATC tushayotgan joyda MC < ATC → zarar.", 'Where ATC is falling, MC < ATC → losses.') },
    { text: "the firm will make excessive profits.", why: tr("Zarar ko'radi.", 'It makes losses.') },
  ]),
];

export const checks: Record<string, Question> = {
  "s-16-1a": mk("ch16.check.16-1a", tr("Resurs", 'Resources'), tr("Nega kalit resursga egalik orqali monopoliya kam uchraydi?", 'Why are monopolies based on owning a key resource rare?'), [
    { text: tr("Iqtisodiyotlar katta, resurslar ko'p kishiga tegishli va ko'p tovarlar xalqaro savdoda — yaqin o'rinbosari yo'q resurs kam", 'Economies are large, resources are owned by many people, and many goods are traded internationally — resources with no close substitutes are rare'), correct: true, why: tr("DeBeers ham 100% emas, ~80% gacha nazorat qilgan.", "Even DeBeers didn't control 100%, only up to ~80%.") },
    { text: tr("Davlat taqiqlaydi", 'The government bans them'), why: tr("Asosiy sabab — o'rinbosarlar ko'pligi.", 'The main reason is the abundance of substitutes.') },
    { text: tr("Resurslar arzon", 'Resources are cheap'), why: tr("Gap narxda emas.", "It's not about price.") },
    { text: tr("Monopoliyalar har doim zarar ko'radi", 'Monopolies always make losses'), why: tr("Noto'g'ri.", 'False.') },
  ], 'new'),
  "s-16-1b": { id: "ch16.check.16-1b", chapter: C, kind: "tf", source: "new", topic: "Patent", prompt: tr("Patent farmatsevtika kompaniyasiga yangi dorini 20 yil davomida yagona ishlab chiqarish va sotish huquqini beradi.", 'A patent gives a drug company the exclusive right to make and sell a new drug for 20 years.'), answer: true, why: tr("Patent va mualliflik huquqi — davlat yaratgan monopoliyalar: yuqori narx (xarajat) va ko'proq ixtiro/ijod (foyda).", 'Patents and copyrights are government-created monopolies: higher prices (the cost) and more invention/creativity (the benefit).') },
  "s-16-1c": mk("ch16.check.16-1c", tr("Tabiiy monopoliya", 'Natural monopoly'), tr("Kichik shaharchadagi ko'prik tabiiy monopoliya. Aholi ko'paysa nima bo'lishi mumkin?", 'A bridge in a small town is a natural monopoly. What might happen if the population grows?'), [
    { text: tr("Ko'prik tiqilinch bo'lib, bir nechta ko'prik kerak bo'ladi — bozor raqobatliroq bo'lishi mumkin", 'The bridge gets congested and several bridges are needed — the market may become more competitive'), correct: true, why: tr("Bozor hajmi tabiiy monopoliya bor-yo'qligini belgilaydi.", "Market size determines whether there's a natural monopoly.") },
    { text: tr("Monopoliya kuchayadi", 'The monopoly gets stronger'), why: tr("Katta bozorda miqyos samarasi tugaydi.", 'In a large market economies of scale run out.') },
    { text: tr("Ko'prik xususiy tovarga aylanadi", 'The bridge becomes a private good'), why: tr("Savol bozor tuzilmasi haqida.", 'The question is about market structure.') },
    { text: tr("Hech narsa o'zgarmaydi", 'Nothing changes'), why: tr("Talab oshgan.", 'Demand has grown.') },
  ], 'new'),
  "s-16-2a": { id: "ch16.check.16-2a", chapter: C, kind: "tf", source: "new", topic: tr("Talab", 'Demand'), prompt: tr("Monopolist talab egri chizig'idan yuqoridagi istalgan narx–miqdor juftligini tanlay oladi.", 'A monopolist can choose any price–quantity pair above the demand curve.'), answer: false, why: tr("Talab egri chizig'i cheklov: monopolist faqat uning ustidagi nuqtalarni tanlay oladi.", 'The demand curve is a constraint: a monopolist can choose only points on it.') },
  "s-16-2b": { id: "ch16.check.16-2b", chapter: C, kind: "numeric", source: "new", topic: "MR", prompt: tr("Table 1: 3 gallon $8 dan ($24), 4 gallon $7 dan ($28). 4-gallonning marjinal tushumi?", 'Table 1: 3 gallons at $8 ($24), 4 gallons at $7 ($28). Marginal revenue of the 4th gallon?'), answer: 4, tolerance: 0, unit: "$", why: "28 − 24 = $4 < P = $7: output effect +7, price effect −3.", traps: [{ value: 7, why: tr("Bu narx — monopoliyada MR < P.", "That's the price — under monopoly MR < P.") }] },
  "s-16-2c": { id: "ch16.check.16-2c", chapter: C, kind: "numeric", source: "new", topic: tr("Foyda maks.", 'Max profit'), prompt: tr("Problem 8: P = 70 − Q, MC = 10 + Q. Monopoliya narxi?", 'Problem 8: P = 70 − Q, MC = 10 + Q. The monopoly price?'), answer: 50, tolerance: 0, unit: "$", why: "MR = 70 − 2Q = 10 + Q → Q = 20, P = 50.", traps: [{ value: 40, why: tr("Bu samarali narx (talab = MC, Q = 30). Monopolist MR = MC dan foydalanadi.", "That's the efficient price (demand = MC, Q = 30). The monopolist uses MR = MC.") }, { value: 30, why: tr("Bu Q = 20 dagi MC; narxni talab egri chizig'idan oling.", "That's MC at Q = 20; take the price from the demand curve.") }] },
  "s-16-2d": mk("ch16.check.16-2d", tr("Taklif egri chizig'i", 'The supply curve'), tr("Nega monopoliyaning taklif egri chizig'i yo'q?", 'Why does a monopoly have no supply curve?'), [
    { text: tr("Taklif egri chizig'i “berilgan narxda qancha” degan savolga javob; monopolist narxni o'zi tanlaydi va qaror talab egri chizig'iga bog'liq", 'A supply curve answers “how much at a given price”; a monopolist chooses the price itself, and its decision depends on the demand curve'), correct: true, why: "FYI: Why a Monopoly Does Not Have a Supply Curve." },
    { text: tr("Monopolist hech narsa ishlab chiqarmaydi", 'A monopolist produces nothing'), why: tr("Ishlab chiqaradi.", 'It does produce.') },
    { text: tr("MC egri chizig'i yo'q", "There's no MC curve"), why: tr("MC bor, lekin u taklif emas.", "There is an MC curve, but it isn't supply.") },
    { text: tr("Narx davlat tomonidan belgilanadi", 'The government sets the price'), why: tr("Monopolist o'zi belgilaydi.", 'The monopolist sets it.') },
  ], 'new'),
  "s-16-3a": { id: "ch16.check.16-3a", chapter: C, kind: "numeric", source: "new", topic: tr("DWL", 'DWL'), prompt: tr("Problem 10: monopoliya Q = 30 (P = 700, MC = 400), samarali Q = 45. DWL?", 'Problem 10: monopoly Q = 30 (P = 700, MC = 400), efficient Q = 45. DWL?'), answer: 2250, tolerance: 0, unit: "$", why: "½ × 15 × 300 = $2,250." },
  "s-16-3b": { id: "ch16.check.16-3b", chapter: C, kind: "tf", source: "new", topic: tr("Foyda", 'Profit'), prompt: tr("Kitob fikricha, monopoliya foydasi o'zi umumiy surplusni kamaytiradi.", 'According to the book, monopoly profit itself reduces total surplus.'), answer: false, why: tr("Foyda — xaridordan sotuvchiga transfer; muammo — kam miqdor (DWL). Istisno: monopoliyani saqlash uchun lobbi xarajatlari.", 'Profit is a transfer from buyer to seller; the problem is the small quantity (the DWL). Exception: lobbying costs to preserve the monopoly.') },
  "s-16-4a": { id: "ch16.check.16-4a", chapter: C, kind: "numeric", source: "new", topic: tr("Readalot", 'Readalot'), prompt: tr("100,000 muxlis ($30) va 400,000 oddiy kitobxon ($5), mualliflik $2 mln, bosma 0. Narx diskriminatsiyasida foyda (mln $)?", "100,000 die-hard fans ($30) and 400,000 casual readers ($5), the author's fee $2 million, printing cost 0. Profit with price discrimination ($ million)?"), answer: 3, tolerance: 0, unit: tr("mln $", '$ million'), why: tr("3 + 2 − 2 = $3 mln (yagona $30 narxda $1 mln).", '3 + 2 − 2 = $3 million ($1 million at a single $30 price).'), traps: [{ value: 1, why: tr("Bu yagona $30 narxdagi foyda.", "That's the profit at a single $30 price.") }] },
  "s-16-4b": mk("ch16.check.16-4b", tr("Saboqlar", 'Lessons'), tr("Readalot masalining uchta saboqi?", 'The three lessons of the Readalot parable?'), [
    { text: tr("Diskriminatsiya ratsional; xaridorlarni WTP bo'yicha ajratish kerak (arbitraj buzadi); umumiy surplusni oshirishi mumkin", 'Discrimination is rational; buyers must be separated by WTP (arbitrage undermines it); it can raise total surplus'), correct: true, why: tr("Mukammal holatda butun o'sish ishlab chiqaruvchiga.", 'In the perfect case all the gain goes to the producer.') },
    { text: tr("Diskriminatsiya noqonuniy va doim zararli", 'Discrimination is illegal and always harmful'), why: tr("Iqtisodiy jihatdan farovonlikni oshirishi mumkin.", 'Economically it can raise welfare.') },
    { text: tr("Faqat raqobatli bozorlarda mumkin", "It's possible only in competitive markets"), why: tr("Faqat bozor hokimiyati bo'lsa.", 'Only with market power.') },
    { text: tr("CS ni oshiradi", 'It raises CS'), why: tr("Mukammal holatda CS = 0.", 'In the perfect case CS = 0.') },
  ], 'new'),
  "s-16-4c": { id: "ch16.check.16-4c", chapter: C, kind: "tf", source: "new", topic: tr("Nomukammal diskriminatsiya", 'Imperfect discrimination'), prompt: tr("Nomukammal narx diskriminatsiyasi har doim umumiy surplusni oshiradi.", 'Imperfect price discrimination always raises total surplus.'), answer: false, why: tr("Uni oshirishi, kamaytirishi yoki o'zgartirmasligi mumkin; faqat foyda oshishi aniq.", 'It may raise, lower, or leave it unchanged; only the rise in profit is certain.') },
  "s-16-4d": { id: "ch16.check.16-4d", chapter: C, kind: "match", source: "new", topic: tr("Misollar", 'Examples'), prompt: tr("Narx diskriminatsiyasi usulini u ajratadigan guruh bilan moslashtiring.", 'Match each method of price discrimination with the group it separates.'), pairs: [
    { left: tr("Shanba kechasi qolsa arzon aviachipta", 'Cheaper airfares with a Saturday-night stay'), right: tr("Biznes va dam oluvchi yo'lovchilar", 'Business and leisure travelers') },
    { left: tr("Bolalar va keksalarga arzon kino", 'Cheaper movies for children and seniors'), right: tr("WTP past yosh guruhlari", 'Age groups with lower WTP') },
    { left: tr("Kuponlar va chegirma kunlari", 'Coupons and discount days'), right: tr("Vaqtini sarflashga tayyor, WTP past xaridorlar", 'Buyers with low WTP who are willing to spend time') },
    { left: tr("Daromadga qarab grant", 'Need-based financial aid'), right: tr("Boy va kam daromadli oilalar talabalari", 'Students from rich and low-income families') },
    { left: tr("Bitta donut $0.50, o'ntasi $5", 'One donut $0.50, a dozen $5'), right: tr("Bir xaridorning birinchi va keyingi birliklari", "A buyer's first and later units") },
  ] },
  "s-16-5a": mk("ch16.check.16-5a", "Antitrust", tr("Nega gorizontal birlashishlar vertikallardan qattiqroq tekshiriladi?", 'Why are horizontal mergers scrutinized more than vertical ones?'), [
    { text: tr("Gorizontal — bir bozordagi raqiblar birlashadi (Coca-Cola + PepsiCo), raqobat bevosita kamayadi; vertikal — ishlab chiqarishning turli bosqichlari", 'Horizontal — rivals in the same market merge (Coca-Cola + PepsiCo), directly reducing competition; vertical — different stages of production'), correct: true, why: tr("Yetkazib beruvchi yoki xaridor bilan birlashish raqobatni kamroq kamaytiradi.", 'Merging with a supplier or buyer reduces competition less.') },
    { text: tr("Vertikal birlashishlar taqiqlangan", 'Vertical mergers are banned'), why: tr("Ular kamroq bloklanadi.", "They're blocked less often.") },
    { text: tr("Gorizontal birlashishda synergy yo'q", 'Horizontal mergers have no synergies'), why: tr("Bo'lishi mumkin — bu baholanadi.", "They may — that's evaluated.") },
    { text: tr("Farq yo'q", "There's no difference"), why: tr("Sudlar farqlaydi.", 'The courts distinguish them.') },
  ], 'new'),
  "s-16-5b": { id: "ch16.check.16-5b", chapter: C, kind: "tf", source: "new", topic: tr("Regulyatsiya", 'Regulation'), prompt: tr("Average-cost pricing tabiiy monopoliyaga nol iqtisodiy foyda beradi va DWL ni butunlay yo'qotadi.", 'Average-cost pricing gives a natural monopoly zero economic profit and eliminates the DWL entirely.'), answer: false, why: tr("Nol foyda — ha, lekin P > MC bo'lgani uchun DWL qoladi (mahsulotga soliq kabi).", 'Zero profit — yes, but because P > MC a DWL remains (like a tax on the product).') },
  "s-16-5c": mk("ch16.check.16-5c", tr("Davlat mulki", 'Public ownership'), tr("Nega ko'p iqtisodchilar tabiiy monopoliyalarni xususiy qoldirishni afzal ko'radi?", 'Why do many economists prefer to leave natural monopolies private?'), [
    { text: tr("Xususiy egalar foydaning bir qismini olsa xarajatni kamaytirishga rag'batli; davlat korxonasida yomon boshqaruvdan iste'molchi va soliq to'lovchi zarar ko'radi — “saylov qutisi foyda motividan ishonchsizroq”", 'Private owners who keep part of the profit have an incentive to cut costs; in a state enterprise poor management hurts consumers and taxpayers — “the ballot box is less reliable than the profit motive”'), correct: true, why: tr("Kitob xulosasi.", "The book's conclusion.") },
    { text: tr("Davlat korxonalari doim zararda", 'State enterprises always lose money'), why: tr("Kitob bunday demaydi.", "The book doesn't say that.") },
    { text: tr("Xususiy firmalar narxni pasaytiradi", 'Private firms lower prices'), why: tr("Gap rag'batlar va xarajatlar haqida.", 'The point is incentives and costs.') },
    { text: tr("Davlat mulki noqonuniy", 'Public ownership is illegal'), why: tr("Ko'p davlatlarda keng tarqalgan.", "It's widespread in many countries.") },
  ], 'new'),
  "s-16-5d": { id: "ch16.check.16-5d", chapter: C, kind: "tf", source: "new", topic: tr("Stigler", 'Stigler'), prompt: tr("George Stigler fikricha, AQSh iqtisodiyotida “market failure” “political failure” dan ancha katta.", 'George Stigler argued that in the U.S. economy “market failure” is far larger than “political failure.”'), answer: false, why: tr("Teskari: uning fikricha bozor muvaffaqiyatsizligi siyosiy muvaffaqiyatsizlikdan ancha kichik — ba'zan hech narsa qilmaslik oqilona.", 'The reverse: he argued market failure is much smaller than political failure — sometimes doing nothing is wise.') },
};

export const practice: Question[] = [
  { id: "ch16.new.publisher", chapter: C, kind: "numeric", source: "new", topic: "Problem 1", prompt: tr("Nashriyot: $90 da 100k, $80 da 200k … (har $10 ga 100k), MC $10, mualliflik $2 mln. Maksimal foyda (mln $)?", "A publisher: 100k at $90, 200k at $80 … (100k per $10), MC $10, the author's fee $2 million. Maximum profit ($ million)?"), answer: 18, tolerance: 0, unit: tr("mln $", '$ million'), why: tr("400k ($60): 24 − 4 − 2 = 18; 500k ($50): 25 − 5 − 2 = 18. Mualliflik $3 mln bo'lsa ham narx o'zgarmaydi (fixed cost). Samarali narx $10: 900k, foyda −$2 mln.", "400k ($60): 24 − 4 − 2 = 18; 500k ($50): 25 − 5 − 2 = 18. Even with a $3 million fee the price doesn't change (a fixed cost). The efficient price $10: 900k, profit −$2 million.") },
  { id: "ch16.new.swift", chapter: C, kind: "numeric", source: "new", topic: "Problem 3", prompt: tr("Taylor Swift CD: $24 da 10k, $22 da 20k, … $14 da 60k; MC $5, FC 0. Maksimal foyda ($)?", 'A Taylor Swift CD: 10k at $24, 20k at $22, … 60k at $14; MC $5, FC 0. Maximum profit ($)?'), answer: 550000, tolerance: 0, unit: "$", why: tr("MR (har CD): 24, 20, 16, 12, 8, 4 → MR > 5 gacha: 50k, P = $16; foyda 800k − 250k = $550,000 — agent shu miqdorgacha haq so'rashi mumkin.", 'MR (per CD): 24, 20, 16, 12, 8, 4 → while MR > 5: 50k, P = $16; profit 800k − 250k = $550,000 — the agent could ask for up to that amount.') },
  mk("ch16.new.bridge", "Problem 4", tr("Ko'prik $2 mln, xizmat xarajati 0; talab: $8 da 0, har $1 kamayishda +100k o'tish. Xususiy kompaniya qursinmi?", 'A bridge costs $2 million, operating cost 0; demand: 0 at $8, +100k crossings for each $1 cut. Should a private company build it?'), [
    { text: tr("Yo'q: eng ko'p tushum $4 da 400k × 4 = $1.6 mln < $2 mln. Lekin davlat qurishi kerak: P = 0 da umumiy surplus ½ × 800k × $8 = $3.2 mln > $2 mln", 'No: maximum revenue is at $4, 400k × 4 = $1.6 million < $2 million. But the government should build it: at P = 0 total surplus is ½ × 800k × $8 = $3.2 million > $2 million'), correct: true, why: tr("Tabiiy monopoliya: xususiy foyda manfiy, ijtimoiy foyda musbat.", 'A natural monopoly: private profit negative, social benefit positive.') },
    { text: tr("Ha, foyda $1.6 mln", 'Yes, profit $1.6 million'), why: tr("Bu tushum; xarajat $2 mln.", "That's revenue; the cost is $2 million.") },
    { text: tr("Davlat ham qurmasligi kerak", "The government shouldn't build it either"), why: tr("Umumiy surplus xarajatdan katta.", 'Total surplus exceeds the cost.') },
    { text: tr("Narx $8 bo'lishi kerak", 'The price should be $8'), why: tr("$8 da hech kim o'tmaydi.", 'At $8 no one crosses.') },
  ], 'new'),
  mk("ch16.new.potter-ceiling", "Problem 8", tr("Potter (P = 70 − Q, MC = 10 + Q). Monopoliya narxidan 10% past ($45) shift qo'yildi. Natija?", 'Potter (P = 70 − Q, MC = 10 + Q). A price ceiling 10% below the monopoly price ($45) is imposed. The result?'), [
    { text: tr("Talab 25; Potter uchun 25-birlik MC = 35 < 45 → 25 sotadi, taqchillik yo'q, miqdor oshdi (20 → 25)", "Demand is 25; for Potter the 25th unit's MC = 35 < 45 → he sells 25, no shortage, quantity rises (20 → 25)"), correct: true, why: tr("Monopoliyada shift samaradorlikni oshirishi mumkin. 50% past ($25) shiftda: talab 45, Potter faqat MC ≤ 25 → 15 → taqchillik 30.", 'Under monopoly a ceiling can raise efficiency. With a ceiling 50% lower ($25): demand 45, Potter produces only while MC ≤ 25 → 15 → a shortage of 30.') },
    { text: tr("Taqchillik 5", 'A shortage of 5'), why: tr("Potter 25 ni ham ishlab chiqarishga tayyor.", 'Potter is willing to produce 25.') },
    { text: tr("Potter yopiladi", 'Potter shuts down'), why: tr("P > AVC.", 'P > AVC.') },
    { text: tr("Miqdor kamayadi", 'Quantity falls'), why: tr("Monopoliyada shift miqdorni oshirishi mumkin.", 'Under monopoly a ceiling can raise quantity.') },
  ], 'new'),
  mk("ch16.new.wiknam", "Problem 9", tr("Wiknam monopolisti (avtarkiya P = $7) jahon narxi $6 da erkin savdoga ochildi. Nima bo'ladi?", "Wiknam's monopolist (autarky P = $7) is opened to free trade at a world price of $6. What happens?"), [
    { text: tr("Firma price taker: P = MC → 5 ishlab chiqaradi, iste'mol 4 → 1 ta eksport qiladi, garchi avtarkiya narxi jahon narxidan yuqori bo'lsa ham", 'The firm is a price taker: P = MC → it produces 5, consumption 4 → it exports 1, even though the autarky price is above the world price'), correct: true, why: tr("9-bob qoidasi raqobatli avtarkiya narxi uchun; monopoliya narxi MC dan yuqori.", 'The Chapter 9 rule is about a competitive autarky price; the monopoly price is above MC.') },
    { text: tr("Import qiladi", 'It imports'), why: tr("Raqobatchi P = MC tahlili eksportni beradi.", 'The competitive P = MC analysis gives exports.') },
    { text: tr("Hech narsa o'zgarmaydi", 'Nothing changes'), why: tr("Firma endi price taker.", 'The firm is now a price taker.') },
    { text: tr("Ishlab chiqarish to'xtaydi", 'Production stops'), why: tr("P = 6 > AVC.", 'P = 6 > AVC.') },
  ], 'new'),
  { id: "ch16.new.p10-fee", chapter: C, kind: "numeric", source: "new", topic: "Problem 10d", prompt: tr("P10 da ixtirochiga har birlikka $150 to'lansa (MC = 250 + 10Q), monopoliya miqdori?", 'In P10, if the inventor is paid $150 per unit (MC = 250 + 10Q), what is the monopoly quantity?'), answer: 25, tolerance: 0, why: tr("1,000 − 20Q = 250 + 10Q → Q = 25, P = 750 → DWL oshadi. Flat fee yoki foydaning 50% i Q ni o'zgartirmaydi (30); tushumning 50% i Q = 20 ga tushiradi.", "1,000 − 20Q = 250 + 10Q → Q = 25, P = 750 → the DWL rises. A flat fee or 50% of profits doesn't change Q (30); 50% of revenue lowers Q to 20.") },
  { id: "ch16.new.museum", chapter: C, kind: "numeric", source: "new", topic: "Problem 7", prompt: tr("Muzey: FC $2.4 mln, 100k aholi, har biri Q = 10 − P. Zarar ko'rmaydigan eng past kirish narxi?", 'A museum: FC $2.4 million, 100k residents, each Q = 10 − P. The lowest admission price that avoids a loss?'), answer: 4, tolerance: 0, unit: "$", why: tr("100k × p(10 − p): $3 → 2.1 mln, $4 → 2.4 mln. Har kishi CS = ½ × 6 × 6 = $18; merning tekin + $24 soliq rejasida 50 − 24 = $26 — bir xil aholi uchun merning rejasi yaxshiroq.", "100k × p(10 − p): $3 → 2.1 million, $4 → 2.4 million. Each person's CS = ½ × 6 × 6 = $18; under the mayor's free-admission + $24 tax plan, 50 − 24 = $26 — with identical residents the mayor's plan is better.") },
  { id: "ch16.new.ate", chapter: C, kind: "tf", source: "new", topic: "Ask the Experts", prompt: tr("IGM (2021): iqtisodchilarning 91% i amerikaliklar keng polosali internet, kabel TV va telekom uchun qisman raqobat yetishmasligi tufayli ortiqcha to'laydi degan fikrga qo'shilgan.", 'IGM (2021): 91% of economists agreed that Americans overpay for broadband, cable TV, and telecom partly because of a lack of competition.'), answer: true, why: tr("91% agree, 7% uncertain, 2% disagree. Aviakompaniyalar birlashishi haqida esa (2013): 29% agree, 45% uncertain, 26% disagree.", '91% agree, 7% uncertain, 2% disagree. On airline mergers (2013): 29% agree, 45% uncertain, 26% disagree.') },
  mk("ch16.new.uz", tr("O'zbekistondan misol", 'An example from Uzbekistan'), tr("Shahar elektr tarmog'i — tabiiy monopoliya. Hukumat tarif belgilashda nimaga e'tibor berishi kerak?", "A city's electricity grid is a natural monopoly. What should the government consider when setting the tariff?"), [
    { text: tr("P = MC — samarali, lekin zarar (subsidiya kerak); P = ATC — zarar yo'q, lekin DWL; har ikkisida xarajatni kamaytirish rag'batini saqlash kerak", 'P = MC — efficient but with losses (a subsidy is needed); P = ATC — no losses but a DWL; under both, the incentive to cut costs must be preserved'), correct: true, why: tr("Figure 10 dilemmasi.", 'The dilemma of Figure 10.') },
    { text: tr("Narxni nolga tushirish", 'Cut the price to zero'), why: tr("Firma yopiladi.", 'The firm closes.') },
    { text: tr("Ikkinchi parallel tarmoq qurish", 'Build a second, parallel grid'), why: tr("Tabiiy monopoliyada bu xarajatni oshiradi.", 'In a natural monopoly this raises costs.') },
    { text: tr("Monopoliya narxiga ruxsat berish", 'Allow the monopoly price'), why: tr("DWL va iste'molchiga zarar.", 'A DWL and harm to consumers.') },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
