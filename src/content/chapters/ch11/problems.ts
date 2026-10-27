import type { Problem } from '../../types';

const C = 11;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch11.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch11.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "Explain what is meant by a good being “excludable” and “rival in consumption.” Is a slice of pizza excludable? Is it rival in consumption?", ["Excludable — odamni foydalanishdan to'xtatish mumkin. Rival — bir kishining foydalanishi boshqalarnikini kamaytiradi.", "Pizza bo'lagi: to'lamasangiz bermaydi — **excludable**; siz yesangiz boshqa yemaydi — **rival** → xususiy tovar."], "Yes and yes — a private good.", "sorter"),
  r(2, "Define and give an example of a public good. Can the private market provide this good on its own? Explain.", ["Jamoat tovari — na excludable, na rival (milliy mudofaa, mushakbozlik).", "Bozor ta'minlay olmaydi: to'lamaganni chetlatib bo'lmaydi → hamma **free ride** qiladi, firma foyda ko'rmaydi."], "No — the free-rider problem prevents private provision.", "vote"),
  r(3, "What is cost–benefit analysis of public goods? Why is it important? Why is it hard?", ["Jamiyat uchun jami foyda va xarajatni solishtiruvchi tadqiqot.", "Muhim: davlat qaysi jamoat tovarini qancha ta'minlashni hal qilishi kerak.", "Qiyin: narx signali yo'q; so'rovnomada foydalanuvchilar foydani, zarar ko'ruvchilar xarajatni bo'rttiradi; hayot kabi narsalarga pul qiymati berish kerak."], "It compares social costs and benefits; it is hard because there are no prices to reveal value.", "life"),
  r(4, "Define and give an example of a common resource. Without government intervention, will people use this good too much or too little? Why?", ["Umumiy resurs — rival, lekin not excludable (okeandagi baliq, toza havo).", "**Juda ko'p** ishlatiladi: har bir foydalanuvchi boshqalarga zararni (salbiy tashqi effekt) hisobga olmaydi."], "Too much — because of the negative externality (Tragedy of the Commons).", "commons"),
];

export const problems: Problem[] = [
  p(1, "Classify each local-government good using Figure 1 and explain: police protection, snow plowing, education, rural roads, city streets. Why does the government provide items that are not public goods?", [
    "**Politsiya** — jamoat tovari (bir kishini himoya qilish boshqalarni deyarli kamaytirmaydi, chetlatish qiyin); ko'p jinoyat bo'lsa, qisman rival.",
    "**Qor tozalash** — jamoat tovari (tozalangan ko'chadan hamma foydalanadi).",
    "**Ta'lim** — xususiy tovar (excludable va sinfda rival), lekin ijobiy tashqi effektlari bor.",
    "**Qishloq yo'llari** — jamoat tovari (tirbandlik yo'q).",
    "**Shahar ko'chalari** — tirband bo'lsa umumiy resurs, aks holda jamoat tovari.",
    "Davlat jamoat tovari bo'lmaganlarni ham ta'minlaydi: tashqi effektlar (ta'lim), tenglik maqsadi.",
  ], "Most are public goods (or common resources when congested); education is a private good with positive externalities.", "sorter"),
  p(2, "(a) Are the externalities of public goods generally positive or negative? Is the free-market quantity greater or less than efficient? (b) Same questions for common resources.", [
    "(a) **Ijobiy**: jamoat tovarini ta'minlovchi boshqalarga foyda beradi → bozor miqdori **kam** (mudofaa, fundamental tadqiqot).",
    "(b) **Salbiy**: umumiy resursdan foydalanuvchi boshqalarga zarar qiladi → bozordagi foydalanish **ko'p** (baliq ovi, tirbandlik).",
  ], "(a) positive; too little. (b) negative; too much."),
  p(3, "Fredo loves watching Downton Abbey on public TV but never donates. (a) What do economists call him? (b) How can the government solve the problem? (c) Can the private market solve it? How does cable TV alter the situation?", [
    "(a) **Free rider**.",
    "(b) Soliq hisobidan jamoat televideniyesini moliyalash.",
    "(c) Xususiy yechimlar: reklama, xayriyachilarga sovg'alar. Kabel/obunali TV ko'rsatuvni **excludable** qiladi → klub tovariga aylanadi, to'lamaganni o'chirish mumkin.",
  ], "A free rider; tax-funded support; cable makes the program excludable."),
  p(4, "Free wireless Internet in Communityville's airport. (a) At first, few people use it. What type of good? (b) As more people use it, speed falls. Now? (c) What problem might result, and how could it be corrected?", [
    "(a) **Jamoat tovari** — bepul va kam foydalanuvchida not rival.",
    "(b) **Umumiy resurs** — endi rival (tezlik kamayadi), lekin hali ham not excludable.",
    "(c) Haddan tashqari foydalanish (Tragedy of the Commons) → hamma uchun sekin. Yechim: to'lov yoki vaqt cheklovi, parol bilan excludable qilish.",
  ], "Public good → common resource; overuse; fix with fees or limits."),
  p(5, "Four roommates' willingness to pay per film — Dwayne 7, 6, 5, 4, 3; Javier 5, 4, 3, 2, 1; Salman 3, 2, 1, 0, 0; Chris 2, 1, 0, 0, 0. (a) Is a movie in the dorm room a public good? (b) At $8 per film, how many films maximize total surplus? (c) Splitting the cost equally, what is each person's surplus? (d) Is there a cost split that makes everyone better off? Practical problems? (e) Will Dwayne tell the truth about his WTP? (f) Lesson?", [
    "(a) **Ha**: xonada hech kimni chetlatib bo'lmaydi va bir kishining ko'rishi boshqaga xalaqit bermaydi.",
    "(b) Jami WTP: 17, 13, 9, 6, 4 → $8 dan katta: **3 film**.",
    "(c) Har kim 24/4 = $6 to'laydi: Dwayne 18 − 6 = **$12**, Javier 12 − 6 = **$6**, Salman 6 − 6 = **$0**, Chris 3 − 6 = **−$3**.",
    "(d) Qiymatga mutanosib to'lash (masalan, Chris $2 dan kam) hammani yutishga olib keladi. Muammo: haqiqiy WTP ni bilish qiyin.",
    "(e) **Yo'q**: Dwayne ko'proq film xohlaydi — 4-film unga $4, ulushi $2 → u WTP ni oshirib aytadi (yoki ulushni kamaytirish uchun pasaytiradi).",
    "(f) Jamoat tovarining optimal miqdorini aniqlash qiyin: odamlarning haqiqiy qiymatini bilib bo'lmaydi.",
  ], "(b) 3 films (c) +12, +6, 0, −3 (e) No — incentive to misreport.", "vote"),
  p(6, "Some economists argue that private firms will not undertake the efficient amount of basic research. (a) Why? Classify basic research. (b) What US policy responds? (c) Is the claim that this boosts US firms relative to foreign ones consistent with (a)?", [
    "(a) Fundamental tadqiqot — **jamoat tovari**: patentlanmaydi, hamma foydalanadi → firmalar free ride qiladi.",
    "(b) Davlat moliyalashi: NIH, NSF grantlari.",
    "(c) Qisman: bilim ba'zi foydalanuvchilar (yaqin, tilni biladigan, malakali) uchun amalda tezroq foydali bo'lishi mumkin — excludability darajasi turlicha bo'lishi mumkin.",
  ], "A public good; government funding (NIH, NSF); partly consistent because excludability can vary across beneficiaries."),
  p(7, "Fireworks cost $360. (a) Bayport: Frank $50, Joe $100, Callie $300 — does it pass cost–benefit analysis? (b) Majority rule with equal split ($120 each): who votes yes? (c) River Heights: Nancy $20, Bess $140, Ned $160 — CBA? (d) Majority vote? (e) Lesson?", [
    "(a) 50 + 100 + 300 = **$450 > $360** → o'tadi.",
    "(b) Faqat Callie ($300 > $120) “ha” → ovoz **o'tmaydi** — CBA ga zid.",
    "(c) 20 + 140 + 160 = **$320 < $360** → o'tmaydi.",
    "(d) Bess va Ned “ha” → ovoz **o'tadi** — yana CBA ga zid.",
    "(e) Ko'pchilik ovozi qiymatlarning **intensivligini** hisobga olmaydi; samarali ta'minlash uchun jami qiymatni bilish kerak.",
  ], "Bayport: efficient but voted down; River Heights: inefficient but voted in.", "vote"),
  p(8, "There is often litter along highways but rarely in people's yards. Provide an economic explanation.", ["Hovli — **xususiy mulk**: egasi toza saqlashdan foyda ko'radi.", "Yo'l bo'yi — **umumiy resurs**: axlat tashlovchi boshqalarga zararni hisobga olmaydi, hech kim mulk egasi emas."], "Property rights: yards are private, roadsides are common resources."),
  p(9, "Many transportation systems, such as the Washington, D.C., Metro, charge higher fares during rush hours. Why?", ["Tig'iz soatlarda metro **rival** — har bir yo'lovchi boshqalarga noqulaylik (tirbandlik) keltiradi.", "Yuqori narx — korrektiv soliq: ba'zi yo'lovchilarni boshqa vaqtga o'tishga undaydi."], "To charge for the congestion externality and shift riders to off-peak times."),
  p(10, "High-income people are willing to pay more to avoid the risk of death. Should cost–benefit analysts use a higher value of life for a rich town than a poor town when deciding on a traffic light?", [
    "Samaradorlik nuqtai nazari: boy shahar aholisi haqiqatan ham xavfsizlikni ko'proq qadrlaydi → yuqori qiymat ularning afzalliklarini aks ettiradi.",
    "Tenglik nuqtai nazari: kambag'allar hayotini arzonroq hisoblash axloqan munozarali; davlat loyihalarida ko'pincha **bir xil** qiymat ishlatiladi.",
  ], "There is a trade-off between reflecting preferences (efficiency) and equal treatment (equity) — a normative judgment.", "life"),
];
