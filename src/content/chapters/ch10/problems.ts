import type { Problem } from '../../types';

const C = 10;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch10.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch10.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "Give an example of a negative externality and an example of a positive one.", ["Salbiy: zavod tutuni, mashina chiqindisi, itning hurishi.", "Ijobiy: ta'lim, emlash, tarixiy binolarni tiklash, ilmiy tadqiqot."], "Negative: pollution. Positive: education."),
  r(2, "Draw a supply-and-demand diagram to explain the effect of a negative externality that occurs because of a firm's production process.", [
    "Talab (private value) va taklif (private cost) → Q_market.",
    "Social cost = taklif + tashqi xarajat — taklifdan yuqorida; talab bilan kesishmasi → Q_optimum < Q_market.",
    "Q_optimum dan Q_market gacha social cost talabdan yuqorida — bu birliklar total surplusni kamaytiradi (DWL).",
  ], "The market overproduces relative to the social optimum.", "ext"),
  r(3, "How does the patent system help society solve an externality problem?", [
    "Tadqiqot ijobiy tashqi effekt (technology spillover) beradi — firmalar foydaning hammasini olmagani uchun kam tadqiqot qiladi.",
    "Patent ixtirochiga cheklangan muddatga **mulk huquqi** beradi: boshqalar foydalansa, royalti to'laydi → foyda ixtirochiga qaytadi, rag'bat oshadi.",
  ], "Patents give inventors property rights, internalizing the spillover."),
  r(4, "What are corrective taxes? Why do economists prefer them to regulations as a way of protecting the environment?", [
    "Salbiy tashqi effektning ijtimoiy xarajatini hisobga olishga undaydigan soliq (Pigovian tax).",
    "Afzalliklari: (1) kamaytirish eng arzon joyda bo'ladi — bir xil natija kamroq xarajat bilan; (2) toza texnologiya ixtiro qilishga doimiy rag'bat; (3) tushum beradi va DWL yaratmaydi.",
  ], "They reduce pollution at lower cost and keep giving incentives to clean up."),
  r(5, "List some of the ways that the problems caused by externalities can be solved without government intervention.", ["Axloqiy me'yorlar va ijtimoiy sanksiyalar (axlat tashlamaslik).", "Xayriya tashkilotlari (Sierra Club, universitetlarga xayriya).", "Biznesni birlashtirish (olma bog'i + asalarichilik).", "Shartnoma tuzish (Coase kelishuvi)."], "Moral codes, charities, mergers, contracts."),
  r(6, "You are a nonsmoker sharing a room with a smoker. According to the Coase theorem, what determines whether your roommate smokes in the room? Is the outcome efficient? How do you reach it?", [
    "Natija chekuvchining foydasi va sizning zararingizni solishtirish bilan aniqlanadi.",
    "Foyda > zarar bo'lsa — chekadi; aks holda — chekmaydi (siz to'laysiz yoki u sizga to'laydi, huquqqa qarab).",
    "Bitim xarajatsiz bo'lsa, natija **samarali**; kim kimga to'lashi huquqqa bog'liq.",
  ], "Whoever values the outcome more prevails through bargaining; the result is efficient."),
];

export const problems: Problem[] = [
  p(1, "The Club (a steering wheel lock) makes it difficult for a thief to take your car. Lojack (a tracking system) makes it easier for the police to catch the thief. Which confers a negative externality on other car owners? Which a positive one? Policy implications?", [
    "**Club** — salbiy: o'g'ri qulfli mashinani tashlab, boshqasini o'g'irlaydi.",
    "**Lojack** — ijobiy: ko'zga ko'rinmaydi, o'g'rilar qaysi mashinada borligini bilmaydi → o'g'irlik umuman xavfliroq → hammaga foyda.",
    "Siyosat: Lojack'ni subsidiyalash (yoki Club'ga soliq) samaradorlikni oshirishi mumkin.",
  ], "Club: negative externality. Lojack: positive. Subsidize Lojack-type devices."),
  p(2, "Consider the market for fire extinguishers. (a) Why might they exhibit positive externalities? (b) Draw the market with demand, social-value, supply, and social-cost curves. (c) Indicate market and efficient output; why do they differ? (d) If the external benefit is $10 per extinguisher, describe a policy that yields the efficient outcome.", [
    "(a) O't o'chirgich yong'inning qo'shni uylarga tarqalishini to'xtatadi — qo'shnilarga foyda.",
    "(b) Social value = demand + $10 (yuqorida); social cost = supply (tashqi xarajat yo'q).",
    "(c) Q_market < Q_optimum: xaridorlar qo'shnilar foydasini hisobga olmaydi.",
    "(d) Har bir o't o'chirgich uchun **$10 subsidiya** (xaridorga yoki sotuvchiga).",
  ], "Positive externality; market quantity too small; a $10 per-unit subsidy fixes it.", "ext"),
  p(3, "Greater consumption of alcohol leads to more motor vehicle accidents. (a) Illustrate the market: demand, social value, supply, social cost, market and efficient output. (b) Shade the deadweight loss of the market equilibrium.", [
    "(a) Iste'molning salbiy tashqi effekti: social value = demand − external cost (talabdan **pastda**); supply = social cost.",
    "Q_optimum (social value = supply) < Q_market.",
    "(b) DWL — Q_optimum dan Q_market gacha supply (xarajat) va social value orasidagi uchburchak: bu birliklarda ijtimoiy xarajat ijtimoiy qiymatdan katta.",
  ], "Social value lies below demand; the market overconsumes; DWL is the triangle between Q_opt and Q_market."),
  p(4, "(a) If society wishes to reduce overall pollution by a certain amount, why might different reductions at different firms be efficient? (b) Why are command-and-control approaches generally unable to target the firms that should reduce more? (c) How do corrective taxes or tradable permits target them?", [
    "(a) Firmalarning kamaytirish xarajati turlicha: arzon kamaytira oladiganlar ko'proq kamaytirsa, umumiy xarajat minimal.",
    "(b) Regulyator har bir firmaning xarajatini bilmaydi, firmalar esa ma'lumotni yashirishga rag'batlangan → odatda bir xil talab qo'yiladi.",
    "(c) Soliq/ruxsatnoma narxi bilan har bir firma o'zi tanlaydi: kamaytirish narxdan arzon bo'lsa — kamaytiradi, qimmat bo'lsa — to'laydi yoki sotib oladi.",
  ], "Abatement costs differ; regulators lack information; prices let each firm choose."),
  p(5, "Whoville residents' WTP for Zlurp: 1st $5, 2nd 4, 3rd 3, 4th 2, 5th 1, further 0. (a) Cost $1.50; how many bottles and what consumer surplus per person? (b) Each bottle has an external cost of $1. Total surplus per person? (c) Cindy Lou Who alone cuts consumption by one bottle. Her welfare? Total surplus? (d) Mayor Grinch imposes a $1 tax. Consumption, CS, external cost, revenue, total surplus per person? (e) Support the policy?", [
    "(a) WTP > $1.50 bo'lgan 4 shisha. CS = 3.5 + 2.5 + 1.5 + 0.5 = **$8**.",
    "(b) TS = 8 − 4 × $1 = **$4**.",
    "(c) Cindy to'rtinchi shishani tashlaydi: CS 0.5 ga kamayadi, u boshdan kechirgan ifloslanish juda kam kamayadi → uning farovonligi **pasayadi**. Jamiyat TS si esa 1 − 0.5 = **$0.5** ga oshadi.",
    "(d) Narx $2.50 → 3 shisha. CS = 2.5 + 1.5 + 0.5 = 4.5; tashqi xarajat 3; tushum 3 → TS = **$4.5**.",
    "(e) **Ha**: TS 4 → 4.5 (tushum aholiga qaytariladi deb). Soliq internallashtirish vazifasini bajaradi.",
  ], "(a) 4 bottles, CS $8 (b) $4 (c) Cindy worse off, society +$0.50 (d) 3 bottles, TS $4.50 (e) Yes."),
  p(6, "Bruno loves loud rock ’n’ roll; Placido loves opera and hates rock. They are next-door neighbors with paper-thin walls. (a) What is the externality? (b) What command-and-control policy might the landlord impose? Could it be inefficient? (c) If the landlord lets them do whatever they want, how might they reach an efficient outcome? What might prevent it?", [
    "(a) Brunoning musiqasi Placidoga salbiy tashqi effekt (shovqin).",
    "(b) Masalan, baland musiqani taqiqlash — agar Brunoning foydasi Placidoning zararidan katta bo'lsa, **samarasiz**.",
    "(c) Coase: Placido Brunoga sokin turish uchun to'laydi yoki Bruno Placidoga to'laydi — kim ko'proq qadrlasa. To'siqlar: bitim xarajatlari, o'jarlik (holdout), shartnomani nazorat qilish qiyinligi.",
  ], "A noise externality; a ban may be inefficient; they could bargain unless transaction costs or stubbornness get in the way.", "coase"),
  p(7, "For any demand curve for the right to pollute, the government can set a price with a tax or a quantity with permits. Suppose there is a sharp improvement in the technology for controlling pollution. (a) Effect on the demand for pollution rights? (b) Effect on price and quantity of pollution under each system?", [
    "(a) Kamaytirish arzonladi → ifloslanish huquqiga **talab chapga** siljiydi.",
    "(b) Korrektiv soliq: narx o'zgarmaydi, **miqdor kamayadi**. Ruxsatnomalar: miqdor o'zgarmaydi, **narx tushadi**.",
  ], "Demand shifts left: under a tax, pollution falls; under permits, the price falls.", "permits"),
  p(8, "The government issues tradable permits for a form of pollution. (a) Does it matter for efficiency whether it distributes or auctions them? (b) If it distributes them, does the allocation among firms matter for efficiency?", [
    "(a) **Yo'q**: savdo bo'lsa, ruxsatnomalar ularni eng ko'p qadrlovchi firmalarga yetadi. Auktsion faqat davlatga tushum beradi (taqsimot masalasi).",
    "(b) **Yo'q**: dastlabki taqsimot qanday bo'lmasin, arzon kamaytiruvchilar sotadi, qimmatlari sotib oladi — yakuniy taqsimot samarali.",
  ], "No and no — trading leads to the efficient allocation either way."),
  p(9, "Happy Valley: Firm A pollutes 30 units, cost of reducing $20/unit; B 40 units, $30; C 20 units, $10. The government wants pollution of 60 units and gives each firm 20 tradable permits. (a) Who sells, who buys, how many? Total cost of reduction? (b) How much higher would costs be without trading?", [
    "Jami 90 → 60: 30 birlik kamaytirish kerak.",
    "Eng arzon: C ($10) — 20 birlikning hammasini kamaytiradi va 20 ruxsatnomani sotadi; keyin A ($20) — 10 birlik kamaytiradi (o'z 20 ruxsatnomasidan foydalanadi).",
    "B ($30) kamaytirmaydi — C dan **20 ruxsatnoma sotib oladi** (narx $10 va $30 orasida).",
    "(a) Xarajat: C 20 × 10 = 200 + A 10 × 20 = 200 → **$400**.",
    "(b) Savdosiz: A 10 × 20 = 200, B 20 × 30 = 600, C 0 → $800 — **$400 ko'proq**.",
  ], "(a) C sells 20 permits to B; total cost $400. (b) $800 without trading — $400 higher."),
];
