import type { Problem } from '../../types';

const C = 18;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch18.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch18.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "If a group of sellers could form a cartel, what quantity and price would they try to set?", ["Monopoliya miqdori va narxi (MR = MC; Table 1 da 60 gallon, $60) — umumiy foydani maksimallashtiradi."], "The monopoly quantity and price.", "duopoly"),
  r(2, "Compare the quantity and price of an oligopoly with that of a monopoly.", ["Kartelsiz oligopoliya: miqdor **ko'proq**, narx **pastroq** (Jack + Jill: 80 gallon, $40 vs 60, $60)."], "More output and a lower price than monopoly.", "duopoly"),
  r(3, "Compare the quantity and price of an oligopoly with that of a perfectly competitive market.", ["Oligopoliya: miqdor **kamroq**, narx **yuqoriroq** (80 vs 120 gallon; $40 vs $0 = MC)."], "Less output and a higher price than perfect competition.", "duopoly"),
  r(4, "How does the number of firms in an oligopoly affect the outcome in the market?", ["Firmalar ko'p → har birining ulushi kichik → **price effect** kamayadi → miqdor raqobat darajasiga, narx MC ga yaqinlashadi."], "More firms bring the outcome closer to perfect competition.", "duopoly"),
  r(5, "What is the prisoners' dilemma, and what does it have to do with oligopoly?", ["Ikki o'yinchi: har biri uchun aldash (iqror) dominant; natija ikkalasi uchun hamkorlikdan yomonroq.", "Oligopolistlar ham monopoliya natijasini xohlaydi, lekin har biri ko'proq ishlab chiqarishga vasvasada (Jack–Jill o'yini)."], "It shows why cooperation is hard to sustain; oligopolists face the same incentive to cheat.", "games"),
  r(6, "Give two examples other than oligopoly that can be explained by the logic of the prisoners' dilemma.", ["**Qurollanish poygasi** (AQSh–SSSR).", "**Umumiy resurslar** (ExxonMobil va Chevron qo'shimcha quduq qazishi)."], "Arms races and common-resource problems.", "games"),
  r(7, "What kinds of behavior do the antitrust laws prohibit?", ["Raqiblar orasida miqdor va narx kelishuvlari (narxni belgilash, hatto bu haqda gaplashish).", "Monopoliyalashtirish yoki unga urinish; raqobatni kamaytiradigan birlashishlar."], "Price fixing and other agreements that restrain trade, and monopolization."),
];

export const problems: Problem[] = [
  p(1, "Diamonds: marginal cost $1,000; demand $8,000 → 5,000 … $1,000 → 12,000 (1,000 more per $1,000 lower price). (a) Many suppliers: price and quantity? (b) One supplier? (c) Russia–South Africa cartel; South Africa's output and profit if split evenly; its profit if it increases production by 1,000 while Russia sticks to the deal? (d) Why do cartels often fail?", [
    "(a) P = MC = **$1,000**, Q = **12,000**.",
    "(b) Foyda (P − 1,000) × Q: $8,000 → 35 mln; **$7,000 → 36 mln**; $6,000 → 35 mln → P = $7,000, Q = 6,000.",
    "(c) Kartel ham **$7,000, 6,000**; JA 3,000 ta, foyda 3,000 × 6,000 = **$18 mln**. JA 4,000 qilsa: jami 7,000, P = $6,000, foyda 4,000 × 5,000 = **$20 mln**.",
    "(d) Har bir a'zo aldash orqali yutadi (18 → 20 mln) → hamma aldaydi → kartel buziladi (mahbuslar dilemmasi).",
  ], "Competition: $1,000 and 12,000; monopoly/cartel: $7,000 and 6,000; cheating raises South Africa's profit from $18M to $20M."),
  p(2, "The New York Times reported that “the inability of OPEC to agree last week to cut production has sent the oil market into turmoil … [leading to] the lowest price for domestic crude oil since June 1990.” (a) Why were OPEC members trying to cut production? (b) Why might they fail to agree, and why turmoil? (c) What does OPEC's wish that Norway and Britain “do their share” suggest?", [
    "(a) Taklifni kamaytirib narx va umumiy foydani oshirish (monopoliya natijasiga yaqinlashish).",
    "(b) Har bir a'zo boshqalar kamaytirishini, o'zi esa ko'p sotishni xohlaydi (aldash rag'bati, kvota bo'yicha nizo); kelishuv yo'qligi — taklif oshishi kutilishi → narx keskin tushadi.",
    "(c) OPEC Norvegiya va Britaniyani **kartelga** qo'shilib, ishlab chiqarishni cheklashini xohlaydi.",
  ], "To raise prices; cheating incentives prevent agreement; OPEC wants non-members to join the cartel."),
  p(3, "Firms can be oligopolists in the markets for inputs they buy. (a) Goal of buyer oligopolists? (b) Baseball team owners' goal regarding salaries; why hard? (c) Why did owners want a salary cap in 1994 if they already colluded?", [
    "(a) Sotib oladigan resurs **narxini pasaytirish**.",
    "(b) Maoshlarni past ushlash; qiyin — har bir jamoa yaxshi o'yinchini olish uchun boshqalardan ko'proq taklif qilishga vasvasada (aldash).",
    "(c) Til biriktirish barqaror emas (har biri aldaydi) — rasmiy salary cap kelishuvni **majburiy** qiladi.",
  ], "Buyers want low input prices; owners are tempted to outbid each other; a cap enforces the collusion."),
  p(4, "U.S.–Mexico trade payoffs (perceived): both low tariffs $25B each; one low, one high: low-tariff country $10B, high-tariff country $30B; both high $20B each. (a) Dominant strategies? (b) Define Nash equilibrium; what is it? (c) Does NAFTA's simultaneous reduction make sense? (d) Do these payoffs reflect true welfare?", [
    "(a) Ikkalasi uchun **yuqori tarif** dominant (30 > 25, 20 > 10).",
    "(b) Har kim boshqasining strategiyasini berilgan deb eng yaxshisini tanlagan holat — **(High, High)**, har biri $20 mlrd.",
    "(c) **Ha**: bir vaqtda kamaytirish (25, 25) ga olib chiqadi — kelishuv mahbuslar dilemmasini yengadi.",
    "(d) **Yo'q**: 3 va 9-boblar bo'yicha bir tomonlama past tarif ham mamlakat farovonligini oshiradi — bu to'lovlar siyosiy idrokni aks ettiradi.",
  ], "High tariffs are dominant; Nash is (High, High); NAFTA moves both to (Low, Low); true welfare favors low tariffs.", "games"),
  p(5, "Synergy and Dynaco choose research budgets (payoffs in $ millions): both large — Synergy 20, Dynaco 30; Synergy large and Dynaco small — 30, 0; Synergy small and Dynaco large — 0, 70; both small — 40, 50. (a) Does Synergy have a dominant strategy? (b) Dynaco? (c) Is there a Nash equilibrium?", [
    "(a) **Yo'q**: Dynaco katta bo'lsa Synergy uchun katta (20 > 0), kichik bo'lsa — kichik (40 > 30).",
    "(b) **Ha** — katta: Synergy katta bo'lsa 30 > 0, kichik bo'lsa 70 > 50.",
    "(c) **Ha**: Dynaco katta tanlaydi → Synergy uchun eng yaxshisi katta → **(Large, Large)**: 20, 30. Nash dominant strategiyani talab qilmaydi.",
    "Eslatma: to'lov jadvali kitob PDF idan qayta tiklangan (katak tartibi AQSh–Meksika jadvali bilan bir xil).",
  ], "Synergy has no dominant strategy, Dynaco does (large); the Nash equilibrium is both large.", "games"),
  p(6, "Group project: both work → A (40 units each); one works → B (30 each); neither → D (10 each); working costs 25. (a) Payoff matrix. (b) Likely outcome. (c) Repeated projects with the same partner? (d) A classmate who gets 50 for B and 80 for A — new matrix, outcome, preferences.", [
    "(a) Ikkalasi ishlaydi: 15, 15; siz ishlaysiz, u yo'q: 5, 30; aksincha: 30, 5; hech kim: 10, 10.",
    "(b) Shirk — dominant → **(Shirk, Shirk)**, har biri 10.",
    "(c) Takroriy o'yinda hamkorlik (15, 15) mumkin — kelgusi jazo tahdidi (tit-for-tat).",
    "(d) Yangi sherik uchun: ikkalasi ishlasa 55; u ishlab siz shirk qilsangiz 25; u shirk qilib siz ishlasangiz 50; hech kim 10 → unga **Work** dominant. Siz shirk qilasiz → siz 30, u 25. Siz uni afzal ko'rasiz (30 > 10); u esa sizni emas — mehnatkash sherik bilan 55 oladi.",
  ], "Both shirk (10 each); repetition can sustain work; the grade-loving classmate works while you shirk.", "games"),
  p(7, "American vs Braniff: each charges $300 or $600. $300 vs $300: low profit; $300 vs $600: the $300 airline earns high profit, the $600 one very low; $600 vs $600: medium. (a) Payoff matrix. (b) Nash equilibrium. (c) Better outcome for both? How achieved? Who loses?", [
    "(b) $300 — dominant (raqib $300 bo'lsa: past > juda past; $600 bo'lsa: yuqori > o'rtacha) → **($300, $300)**.",
    "(c) ($600, $600) — ikkalasi uchun o'rtacha foyda > past; faqat **til biriktirish** bilan (Crandall qo'ng'irog'i — noqonuniy). **Yo'lovchilar** yutqazadi.",
  ], "Nash: both charge $300; both charging $600 is better for them but requires collusion and hurts travelers.", "games"),
  p(8, "Two equal athletes compete for $10,000. Taking a dangerous drug wins if the other does not; if both or neither take it, they split the prize. The drug's health cost is X. (a) Payoff matrix. (b) For what X is taking the drug the Nash equilibrium? (c) Does a safer drug (lower X) make athletes better or worse off?", [
    "(a) Ikkalasi oladi: 5,000 − X; biri oladi: 10,000 − X va 0; hech kim: 5,000.",
    "(b) Olish dominant ⇔ 10,000 − X > 5,000 va 5,000 − X > 0 ⇔ **X < $5,000**.",
    "(c) Ikkalasi allaqachon olayotgan bo'lsa — xavfsizroq dori ularni **yaxshilaydi** (5,000 − X oshadi). Lekin X 5,000 dan pastga tushib, ilgari olmaganlarni olishga majburlasa — ular 5,000 dan 5,000 − X ga tushadi, ya'ni **yomonroq**.",
  ], "Taking the drug is the Nash equilibrium when X < $5,000; a safer drug can make them worse off if it tips them into using it.", "games"),
  p(9, "Little Kona considers entering a market dominated by Big Brew. Payoffs ($ millions): Enter & High — Brew 3, Kona 2; Enter & Low — Brew 1, Kona −1; Don't enter & High — Brew 7, Kona 0; Don't enter & Low — Brew 2, Kona 0. (a) Dominant strategies? (b) Nash equilibrium; unique? (c) Should Kona believe Brew's threat to set a low price if it enters? (d) Collusive outcome?", [
    "(a) Big Brew: **yuqori narx** dominant (3 > 1, 7 > 2). Kona'da yo'q.",
    "(b) Brew yuqori narx qo'yishini bilib, Kona **kiradi** (2 > 0) → **(Enter, High)** — yagona Nash.",
    "(c) **Yo'q**: kirgandan keyin past narx Brew'ga zarar (1 < 3) — tahdid ishonchsiz.",
    "(d) Jami foydani maksimallashtirish: **Kirmaslik + yuqori narx** = $7 mln (Kona'ga ulush berib).",
  ], "Brew's dominant strategy is a high price; Nash is (Enter, High); the threat is not credible; colluding gives $7M.", "games"),
];
