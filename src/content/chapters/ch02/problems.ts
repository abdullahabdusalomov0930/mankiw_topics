import type { Problem } from '../../types';

const C = 2;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch02.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch02.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "In what ways is economics a science?", ["Iqtisodchilar nazariya tuzadi, ma'lumot yig'adi va nazariyani tasdiqlash/rad etish uchun tahlil qiladi — **ilmiy usul**.", "Laboratoriya o'rniga tarixning tabiiy tajribalaridan foydalanadi (neft ta'minoti uzilishi)."], "It uses the scientific method: theory, data, and testing."),
  r(2, "Why do economists make assumptions?", ["Murakkab dunyoni soddalashtirib, masalaning mohiyatiga e'tibor qaratish uchun (2 mamlakat, 2 tovar).", "Turli savollarga turli farazlar (qisqa muddatda qotgan, uzoq muddatda egiluvchan narxlar)."], "To simplify the world and focus on what matters."),
  r(3, "Should an economic model exactly describe reality?", ["Yo'q: model tafsilotlarni ataylab tashlaydi — shuning uchun foydali.", "“All models are wrong, but some are useful.”"], "No — a useful model simplifies reality."),
  r(4, "Name a way that your family interacts in the markets for the factors of production and a way that it interacts in the markets for goods and services.", ["Omillar bozori: ota-onangiz mehnatini sotib maosh oladi (yoki kvartirani ijaraga beradi).", "Tovar bozori: bozordan non, kiyim sotib oladi, internet uchun to'laydi."], "Selling labor for wages; buying groceries.", "flow"),
  r(5, "Name one economic interaction that isn't covered by the simplified circular-flow diagram.", ["Soliq to'lash va davlat xizmatlari (davlat yo'q).", "Xalqaro savdo (Keniya dehqonidan kofe donasi), jamg'arish va kredit."], "Paying taxes, or trade with other countries."),
  r(6, "Draw and explain a PPF for an economy that produces milk and cookies. What happens if a disease kills half of the economy's cows?", ["Bo'rtgan PPF: o'qlarda sut va pechene; ustidagi nuqtalar samarali.", "Sigirlarning yarmi o'lsa — sut ishlab chiqarish imkoniyati kamayadi → PPF **ichkariga** siljiydi (sut o'qida ko'proq)."], "The PPF shifts inward, mainly along the milk axis.", "ppf"),
  r(7, "Use a production possibilities frontier to describe the idea of efficiency.", ["Chegara **ustidagi** nuqta samarali: bitta tovarni ko'paytirish uchun ikkinchisini kamaytirish kerak.", "Ichidagi nuqta (D) samarasiz — ikkalasini ham ko'paytirish mumkin."], "Points on the frontier are efficient; points inside are inefficient.", "ppf"),
  r(8, "What are the two subfields of economics? Explain what each subfield studies.", ["**Microeconomics** — uy xo'jaliklari va firmalar qarorlari va ularning bozorlardagi o'zaro ta'siri.", "**Macroeconomics** — butun iqtisodiyot: inflyatsiya, ishsizlik, o'sish."], "Micro: households, firms, markets. Macro: economy-wide phenomena."),
  r(9, "What is the difference between a positive and a normative statement? Give an example of each.", ["Positive — dunyo **qanday**: dalillar bilan tekshiriladi (“Eng kam ish haqi ishsizlikka sabab bo'ladi”).", "Normative — dunyo qanday **bo'lishi kerak**: qadriyatlar kerak (“Davlat eng kam ish haqini oshirishi kerak”)."], "Positive describes; normative prescribes."),
  r(10, "Why do economists sometimes offer conflicting advice to policymakers?", ["Ilmiy baholar farqi: qaysi nazariya to'g'ri, parametrlar qanchalik katta.", "Qadriyatlar farqi: siyosat maqsadi haqida turli qarashlar."], "Differences in scientific judgments and in values."),
];

export const problems: Problem[] = [
  p(1, "Draw a circular-flow diagram. Identify the parts corresponding to the flow of goods and services and the flow of dollars: (a) Selena pays a storekeeper $1 for a quart of milk. (b) Stuart earns $8 per hour at a fast-food restaurant. (c) Shanna spends $40 for a haircut. (d) Salma earns $20,000 from her 10 percent ownership of Acme Industrial.", [
    "(a) Tovar bozori: $1 — spending → revenue; sut — goods & services sold → bought.",
    "(b) Omillar bozori: Stuart mehnati — labor → factors; $8 — wages → income.",
    "(c) Tovar bozori: $40 — spending → revenue; soch olish xizmati — firmadan uy xo'jaligiga.",
    "(d) Omillar bozori: Salma kapital beradi; $20,000 — profit → income.",
  ], "(a),(c) markets for goods and services; (b),(d) markets for factors of production.", "flow"),
  p(2, "A society produces “guns” and “butter.” (a) Draw a PPF; using opportunity cost, explain why it is most likely bowed out. (b) Show an impossible point and a feasible but inefficient point. (c) Show points the Hawks (strong military) and the Doves (smaller military) might choose. (d) A neighbor reduces its military, so both parties reduce desired guns by the same amount. Which party gets the bigger “peace dividend” in butter?", [
    "(a) Bo'rtgan: qurol ko'p bo'lganda unga yaroqsiz resurslar ham qurolga o'tkazilgan → har bir qo'shimcha qurol ko'p sariyog' turadi.",
    "(b) Chegaradan tashqari — imkonsiz; ichida — mumkin, lekin samarasiz.",
    "(c) Hawks — qurol ko'p nuqta (chegaraning tik qismi), Doves — sariyog' ko'p nuqta (yotiq qismi).",
    "(d) **Hawks**: tik qismda qurolning imkoniyat xarajati katta — bir xil qurol kamaytirish ko'proq sariyog' beradi.",
  ], "Hawks get the bigger peace dividend because the PPF is steeper where they are.", "ppf"),
  p(3, "Use a PPF to illustrate society's trade-off between a clean environment and industrial output. What determines its shape and position? Show what happens if engineers develop a way of producing electricity that emits fewer pollutants.", [
    "O'qlar: toza muhit va sanoat mahsuloti; bo'rtgan PPF — trade-off.",
    "Shakl va joylashuv: resurslar (mehnat, kapital) va texnologiya.",
    "Toza elektr texnologiyasi → har qanday sanoat hajmida toza muhit ko'proq → PPF **tashqariga** siljiydi (asosan muhit o'qi bo'ylab).",
  ], "Determined by resources and technology; cleaner technology shifts the frontier outward.", "ppf"),
  p(4, "Larry, Moe, and Curly each work 10 hours a day. Per hour: Larry mows 1 lawn or washes 1 car; Moe mows 1 lawn or washes 2 cars; Curly mows 2 lawns or washes 1 car. (a) Compute output in A (all mow), B (all wash), C (all split half/half), D (Larry splits, Moe only washes, Curly only mows). (b) Graph the PPF and mark A–D. (c) Explain its shape. (d) Are any allocations inefficient?", [
    "(a) **A**: 10 + 10 + 20 = **40 maysazor**, 0 mashina. **B**: 10 + 20 + 10 = **40 mashina**, 0 maysazor.",
    "**C**: maysazor 5 + 5 + 10 = 20, mashina 5 + 10 + 5 = 20 → **(20, 20)**. **D**: maysazor 5 + 20 = 25, mashina 5 + 20 = 25 → **(25, 25)**.",
    "(b) PPF burchaklari (maysazor, mashina): (0, 40) → Curly o'radi → (20, 30) → Larry → (30, 20) → Moe → (40, 0).",
    "(c) Bo'rtgan (siniq chiziq): har kimning maysazor uchun imkoniyat xarajati turlicha — Curly 0.5, Larry 1, Moe 2 mashina. Avval eng arzon (Curly) o'tkaziladi.",
    "(d) **C samarasiz**: 20 maysazor bilan 30 mashina yuvish mumkin edi. A, B, D chegara ustida.",
  ], "A (40, 0), B (0, 40), C (20, 20) — inefficient, D (25, 25) — efficient."),
  p(5, "Classify as micro or macro: (a) a family's decision about how much income to save (b) the effect of government regulations on auto emissions (c) the impact of higher national saving on economic growth (d) a firm's decision about how many workers to hire (e) the relationship between the inflation rate and changes in the quantity of money", [
    "(a) Mikro — bitta oila qarori.",
    "(b) Mikro — aniq bozor (avtomobillar).",
    "(c) Makro — milliy jamg'arma va o'sish.",
    "(d) Mikro — bitta firma.",
    "(e) Makro — inflyatsiya va pul.",
  ], "(a) micro (b) micro (c) macro (d) micro (e) macro."),
  p(6, "Classify as positive or normative: (a) Society faces a short-run trade-off between inflation and unemployment. (b) A reduction in the growth rate of the money supply will reduce the rate of inflation. (c) The Federal Reserve should reduce the growth rate of the money supply. (d) Society ought to require welfare recipients to look for jobs. (e) Lower tax rates encourage more work and more saving.", [
    "(a) Positive — dunyoni tasvirlaydi.",
    "(b) Positive — tekshirsa bo'ladigan bashorat.",
    "(c) Normative — “should”.",
    "(d) Normative — “ought to”.",
    "(e) Positive — dalillar bilan tekshiriladi.",
  ], "(a) positive (b) positive (c) normative (d) normative (e) positive."),
];
