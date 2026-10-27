import type { Problem } from '../../types';
import { tr } from '../../../lib/lang';

const C = 10;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch10.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch10.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "Give an example of a negative externality and an example of a positive one.", [tr("Salbiy: zavod tutuni, mashina chiqindisi, itning hurishi.", 'Negative: factory smoke, car exhaust, a barking dog.'), tr("Ijobiy: ta'lim, emlash, tarixiy binolarni tiklash, ilmiy tadqiqot.", 'Positive: education, vaccination, restoring historic buildings, research.')], "Negative: pollution. Positive: education."),
  r(2, "Draw a supply-and-demand diagram to explain the effect of a negative externality that occurs because of a firm's production process.", [
    tr("Talab (private value) va taklif (private cost) → Q_market.", 'Demand (private value) and supply (private cost) → Q_market.'),
    tr("Social cost = taklif + tashqi xarajat — taklifdan yuqorida; talab bilan kesishmasi → Q_optimum < Q_market.", 'Social cost = supply + external cost — above supply; where it crosses demand → Q_optimum < Q_market.'),
    tr("Q_optimum dan Q_market gacha social cost talabdan yuqorida — bu birliklar total surplusni kamaytiradi (DWL).", 'From Q_optimum to Q_market social cost exceeds demand — these units reduce total surplus (DWL).'),
  ], "The market overproduces relative to the social optimum.", "ext"),
  r(3, "How does the patent system help society solve an externality problem?", [
    tr("Tadqiqot ijobiy tashqi effekt (technology spillover) beradi — firmalar foydaning hammasini olmagani uchun kam tadqiqot qiladi.", "Research yields a positive externality (technology spillover) — firms do too little research because they don't capture all the benefits."),
    tr("Patent ixtirochiga cheklangan muddatga **mulk huquqi** beradi: boshqalar foydalansa, royalti to'laydi → foyda ixtirochiga qaytadi, rag'bat oshadi.", 'A patent gives the inventor a **property right** for a limited time: others who use it pay royalties → the benefit returns to the inventor and the incentive rises.'),
  ], "Patents give inventors property rights, internalizing the spillover."),
  r(4, "What are corrective taxes? Why do economists prefer them to regulations as a way of protecting the environment?", [
    tr("Salbiy tashqi effektning ijtimoiy xarajatini hisobga olishga undaydigan soliq (Pigovian tax).", 'A tax that induces people to take into account the social cost of a negative externality (a Pigovian tax).'),
    tr("Afzalliklari: (1) kamaytirish eng arzon joyda bo'ladi — bir xil natija kamroq xarajat bilan; (2) toza texnologiya ixtiro qilishga doimiy rag'bat; (3) tushum beradi va DWL yaratmaydi.", 'Advantages: (1) reduction happens where it is cheapest — the same result at lower cost; (2) a constant incentive to invent clean technology; (3) it raises revenue and creates no DWL.'),
  ], "They reduce pollution at lower cost and keep giving incentives to clean up."),
  r(5, "List some of the ways that the problems caused by externalities can be solved without government intervention.", [tr("Axloqiy me'yorlar va ijtimoiy sanksiyalar (axlat tashlamaslik).", 'Moral codes and social sanctions (not littering).'), tr("Xayriya tashkilotlari (Sierra Club, universitetlarga xayriya).", 'Charities (the Sierra Club, donations to universities).'), tr("Biznesni birlashtirish (olma bog'i + asalarichilik).", 'Merging businesses (an apple orchard + a beekeeper).'), tr("Shartnoma tuzish (Coase kelishuvi).", 'Contracts (a Coasian bargain).')], "Moral codes, charities, mergers, contracts."),
  r(6, "You are a nonsmoker sharing a room with a smoker. According to the Coase theorem, what determines whether your roommate smokes in the room? Is the outcome efficient? How do you reach it?", [
    tr("Natija chekuvchining foydasi va sizning zararingizni solishtirish bilan aniqlanadi.", "The outcome is decided by comparing the smoker's benefit with your cost."),
    tr("Foyda > zarar bo'lsa — chekadi; aks holda — chekmaydi (siz to'laysiz yoki u sizga to'laydi, huquqqa qarab).", "If benefit > cost, they smoke; otherwise they don't (you pay them or they pay you, depending on the right)."),
    tr("Bitim xarajatsiz bo'lsa, natija **samarali**; kim kimga to'lashi huquqqa bog'liq.", 'Without transaction costs the outcome is **efficient**; who pays whom depends on the right.'),
  ], "Whoever values the outcome more prevails through bargaining; the result is efficient."),
];

export const problems: Problem[] = [
  p(1, "The Club (a steering wheel lock) makes it difficult for a thief to take your car. Lojack (a tracking system) makes it easier for the police to catch the thief. Which confers a negative externality on other car owners? Which a positive one? Policy implications?", [
    tr("**Club** — salbiy: o'g'ri qulfli mashinani tashlab, boshqasini o'g'irlaydi.", '**The Club** — negative: the thief skips the locked car and steals another.'),
    tr("**Lojack** — ijobiy: ko'zga ko'rinmaydi, o'g'rilar qaysi mashinada borligini bilmaydi → o'g'irlik umuman xavfliroq → hammaga foyda.", "**Lojack** — positive: it's invisible, thieves don't know which cars have it → stealing is riskier overall → everyone benefits."),
    tr("Siyosat: Lojack'ni subsidiyalash (yoki Club'ga soliq) samaradorlikni oshirishi mumkin.", 'Policy: subsidizing Lojack (or taxing the Club) could raise efficiency.'),
  ], "Club: negative externality. Lojack: positive. Subsidize Lojack-type devices."),
  p(2, "Consider the market for fire extinguishers. (a) Why might they exhibit positive externalities? (b) Draw the market with demand, social-value, supply, and social-cost curves. (c) Indicate market and efficient output; why do they differ? (d) If the external benefit is $10 per extinguisher, describe a policy that yields the efficient outcome.", [
    tr("(a) O't o'chirgich yong'inning qo'shni uylarga tarqalishini to'xtatadi — qo'shnilarga foyda.", '(a) A fire extinguisher stops fire spreading to neighboring houses — a benefit to the neighbors.'),
    tr("(b) Social value = demand + $10 (yuqorida); social cost = supply (tashqi xarajat yo'q).", '(b) Social value = demand + $10 (above it); social cost = supply (no external cost).'),
    tr("(c) Q_market < Q_optimum: xaridorlar qo'shnilar foydasini hisobga olmaydi.", "(c) Q_market < Q_optimum: buyers ignore the neighbors' benefit."),
    tr("(d) Har bir o't o'chirgich uchun **$10 subsidiya** (xaridorga yoki sotuvchiga).", '(d) A **$10 subsidy** per extinguisher (to buyers or sellers).'),
  ], "Positive externality; market quantity too small; a $10 per-unit subsidy fixes it.", "ext"),
  p(3, "Greater consumption of alcohol leads to more motor vehicle accidents. (a) Illustrate the market: demand, social value, supply, social cost, market and efficient output. (b) Shade the deadweight loss of the market equilibrium.", [
    tr("(a) Iste'molning salbiy tashqi effekti: social value = demand − external cost (talabdan **pastda**); supply = social cost.", '(a) A negative consumption externality: social value = demand − external cost (**below** demand); supply = social cost.'),
    "Q_optimum (social value = supply) < Q_market.",
    tr("(b) DWL — Q_optimum dan Q_market gacha supply (xarajat) va social value orasidagi uchburchak: bu birliklarda ijtimoiy xarajat ijtimoiy qiymatdan katta.", '(b) The DWL is the triangle between supply (cost) and social value from Q_optimum to Q_market: for these units social cost exceeds social value.'),
  ], "Social value lies below demand; the market overconsumes; DWL is the triangle between Q_opt and Q_market."),
  p(4, "(a) If society wishes to reduce overall pollution by a certain amount, why might different reductions at different firms be efficient? (b) Why are command-and-control approaches generally unable to target the firms that should reduce more? (c) How do corrective taxes or tradable permits target them?", [
    tr("(a) Firmalarning kamaytirish xarajati turlicha: arzon kamaytira oladiganlar ko'proq kamaytirsa, umumiy xarajat minimal.", "(a) Firms' abatement costs differ: if those who can abate cheaply abate more, the total cost is minimized."),
    tr("(b) Regulyator har bir firmaning xarajatini bilmaydi, firmalar esa ma'lumotni yashirishga rag'batlangan → odatda bir xil talab qo'yiladi.", "(b) The regulator doesn't know each firm's cost, and firms have an incentive to hide the information → a uniform requirement is usually imposed."),
    tr("(c) Soliq/ruxsatnoma narxi bilan har bir firma o'zi tanlaydi: kamaytirish narxdan arzon bo'lsa — kamaytiradi, qimmat bo'lsa — to'laydi yoki sotib oladi.", '(c) With a tax/permit price each firm chooses for itself: if abating is cheaper than the price it abates; if more expensive, it pays or buys a permit.'),
  ], "Abatement costs differ; regulators lack information; prices let each firm choose."),
  p(5, "Whoville residents' WTP for Zlurp: 1st $5, 2nd 4, 3rd 3, 4th 2, 5th 1, further 0. (a) Cost $1.50; how many bottles and what consumer surplus per person? (b) Each bottle has an external cost of $1. Total surplus per person? (c) Cindy Lou Who alone cuts consumption by one bottle. Her welfare? Total surplus? (d) Mayor Grinch imposes a $1 tax. Consumption, CS, external cost, revenue, total surplus per person? (e) Support the policy?", [
    tr("(a) WTP > $1.50 bo'lgan 4 shisha. CS = 3.5 + 2.5 + 1.5 + 0.5 = **$8**.", '(a) The 4 bottles with WTP > $1.50. CS = 3.5 + 2.5 + 1.5 + 0.5 = **$8**.'),
    "(b) TS = 8 − 4 × $1 = **$4**.",
    tr("(c) Cindy to'rtinchi shishani tashlaydi: CS 0.5 ga kamayadi, u boshdan kechirgan ifloslanish juda kam kamayadi → uning farovonligi **pasayadi**. Jamiyat TS si esa 1 − 0.5 = **$0.5** ga oshadi.", "(c) Cindy drops her fourth bottle: her CS falls by 0.5 while the pollution she experiences falls very little → her welfare **falls**. Society's TS, however, rises by 1 − 0.5 = **$0.5**."),
    tr("(d) Narx $2.50 → 3 shisha. CS = 2.5 + 1.5 + 0.5 = 4.5; tashqi xarajat 3; tushum 3 → TS = **$4.5**.", '(d) Price $2.50 → 3 bottles. CS = 2.5 + 1.5 + 0.5 = 4.5; external cost 3; revenue 3 → TS = **$4.5**.'),
    tr("(e) **Ha**: TS 4 → 4.5 (tushum aholiga qaytariladi deb). Soliq internallashtirish vazifasini bajaradi.", '(e) **Yes**: TS 4 → 4.5 (assuming the revenue is returned to residents). The tax internalizes the externality.'),
  ], "(a) 4 bottles, CS $8 (b) $4 (c) Cindy worse off, society +$0.50 (d) 3 bottles, TS $4.50 (e) Yes."),
  p(6, "Bruno loves loud rock ’n’ roll; Placido loves opera and hates rock. They are next-door neighbors with paper-thin walls. (a) What is the externality? (b) What command-and-control policy might the landlord impose? Could it be inefficient? (c) If the landlord lets them do whatever they want, how might they reach an efficient outcome? What might prevent it?", [
    tr("(a) Brunoning musiqasi Placidoga salbiy tashqi effekt (shovqin).", "(a) Bruno's music is a negative externality (noise) on Placido."),
    tr("(b) Masalan, baland musiqani taqiqlash — agar Brunoning foydasi Placidoning zararidan katta bo'lsa, **samarasiz**.", "(b) For example, banning loud music — **inefficient** if Bruno's benefit exceeds Placido's cost."),
    tr("(c) Coase: Placido Brunoga sokin turish uchun to'laydi yoki Bruno Placidoga to'laydi — kim ko'proq qadrlasa. To'siqlar: bitim xarajatlari, o'jarlik (holdout), shartnomani nazorat qilish qiyinligi.", '(c) Coase: Placido pays Bruno to be quiet, or Bruno pays Placido — whoever values it more. Obstacles: transaction costs, stubbornness (holdouts), difficulty enforcing the contract.'),
  ], "A noise externality; a ban may be inefficient; they could bargain unless transaction costs or stubbornness get in the way.", "coase"),
  p(7, "For any demand curve for the right to pollute, the government can set a price with a tax or a quantity with permits. Suppose there is a sharp improvement in the technology for controlling pollution. (a) Effect on the demand for pollution rights? (b) Effect on price and quantity of pollution under each system?", [
    tr("(a) Kamaytirish arzonladi → ifloslanish huquqiga **talab chapga** siljiydi.", '(a) Abatement got cheaper → **demand for the right to pollute shifts left**.'),
    tr("(b) Korrektiv soliq: narx o'zgarmaydi, **miqdor kamayadi**. Ruxsatnomalar: miqdor o'zgarmaydi, **narx tushadi**.", "(b) Corrective tax: the price doesn't change, **the quantity falls**. Permits: the quantity doesn't change, **the price falls**."),
  ], "Demand shifts left: under a tax, pollution falls; under permits, the price falls.", "permits"),
  p(8, "The government issues tradable permits for a form of pollution. (a) Does it matter for efficiency whether it distributes or auctions them? (b) If it distributes them, does the allocation among firms matter for efficiency?", [
    tr("(a) **Yo'q**: savdo bo'lsa, ruxsatnomalar ularni eng ko'p qadrlovchi firmalarga yetadi. Auktsion faqat davlatga tushum beradi (taqsimot masalasi).", '(a) **No**: if trading is allowed, permits end up with the firms that value them most. An auction only gives the government revenue (a distribution issue).'),
    tr("(b) **Yo'q**: dastlabki taqsimot qanday bo'lmasin, arzon kamaytiruvchilar sotadi, qimmatlari sotib oladi — yakuniy taqsimot samarali.", '(b) **No**: whatever the initial allocation, cheap abaters sell and expensive ones buy — the final allocation is efficient.'),
  ], "No and no — trading leads to the efficient allocation either way."),
  p(9, "Happy Valley: Firm A pollutes 30 units, cost of reducing $20/unit; B 40 units, $30; C 20 units, $10. The government wants pollution of 60 units and gives each firm 20 tradable permits. (a) Who sells, who buys, how many? Total cost of reduction? (b) How much higher would costs be without trading?", [
    tr("Jami 90 → 60: 30 birlik kamaytirish kerak.", 'Total 90 → 60: 30 units must be abated.'),
    tr("Eng arzon: C ($10) — 20 birlikning hammasini kamaytiradi va 20 ruxsatnomani sotadi; keyin A ($20) — 10 birlik kamaytiradi (o'z 20 ruxsatnomasidan foydalanadi).", 'Cheapest: C ($10) abates all 20 units and sells its 20 permits; then A ($20) abates 10 units (using its own 20 permits).'),
    tr("B ($30) kamaytirmaydi — C dan **20 ruxsatnoma sotib oladi** (narx $10 va $30 orasida).", "B ($30) doesn't abate — it **buys 20 permits from C** (at a price between $10 and $30)."),
    tr("(a) Xarajat: C 20 × 10 = 200 + A 10 × 20 = 200 → **$400**.", '(a) Cost: C 20 × 10 = 200 + A 10 × 20 = 200 → **$400**.'),
    tr("(b) Savdosiz: A 10 × 20 = 200, B 20 × 30 = 600, C 0 → $800 — **$400 ko'proq**.", '(b) Without trading: A 10 × 20 = 200, B 20 × 30 = 600, C 0 → $800 — **$400 more**.'),
  ], "(a) C sells 20 permits to B; total cost $400. (b) $800 without trading — $400 higher."),
];
