import type { Question } from '../../types';

const C = 18;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });
const lvl = ['less than; more than', 'more than; less than', 'less than; equal to', 'equal to; more than'];

export const quickQuiz: Question[] = [
  mk("ch18.qq.1", "Oligopoliya", "The key feature of an oligopolistic market is that", [
    { text: "each firm sells a product different from other firms.", why: "Bu monopolistik raqobat." },
    { text: "a single firm chooses a point on the market demand curve.", why: "Bu monopoliya." },
    { text: "each firm takes the market price as given.", why: "Bu mukammal raqobat." },
    { text: "a small number of firms are acting strategically.", correct: true, why: "Kam firma — har birining harakati boshqalar foydasiga katta ta'sir." },
  ]),
  mk("ch18.qq.2", "Kartel", "If an oligopolistic industry organizes itself as a cooperative cartel, it will produce a quantity of output ___ the competitive level and ___ the monopoly level.", lvl.map((x, i) => ({
    text: x,
    correct: i === 2,
    why: ["Kartel = monopoliya miqdori.", "Kartel raqobatdan kam.", "Kartel monopoliya kabi harakat qiladi.", "Raqobatdan kam."][i],
  }))),
  mk("ch18.qq.3", "Nash", "If an oligopoly does not cooperate and each firm chooses its own quantity, the industry will produce a quantity of output ___ the competitive level and ___ the monopoly level.", lvl.map((x, i) => ({
    text: x,
    correct: i === 0,
    why: ["Jack + Jill: 80 — raqobatdan (120) kam, monopoliyadan (60) ko'p.", "Teskari.", "Monopoliyadan ko'p.", "Raqobatdan kam."][i],
  }))),
  mk("ch18.qq.4", "Firmalar soni", "As the number of firms in an oligopoly grows, the industry approaches a level of output ___ the competitive level and ___ the monopoly level.", lvl.map((x, i) => ({
    text: x,
    correct: i === 3,
    why: ["Ko'p firmada raqobatga yaqinlashadi.", "Teskari.", "Monopoliyaga emas.", "Price effect yo'qoladi — raqobat miqdori, monopoliyadan ko'p."][i],
  }))),
  mk("ch18.qq.5", "Mahbuslar dilemmasi", "The prisoners' dilemma is a two-person game illustrating that", [
    { text: "the cooperative outcome could be worse for both people than the Nash equilibrium.", why: "Teskari — hamkorlik ikkalasi uchun yaxshiroq." },
    { text: "even if the cooperative outcome is better than the Nash equilibrium for one person, it might be worse for the other.", why: "Hamkorlik ikkalasi uchun yaxshiroq." },
    { text: "even if cooperation is better than the Nash equilibrium, each person might have an incentive not to cooperate.", correct: true, why: "Shaxsiy manfaat hamkorlikni buzadi." },
    { text: "rational, self-interested individuals will naturally avoid the Nash equilibrium because it is worse for both of them.", why: "Ular aynan Nash ga keladi." },
  ]),
  mk("ch18.qq.6", "Hamkorlik", "Two people facing the prisoners' dilemma may cooperate if they", [
    { text: "recognize that the Nash equilibrium is worse for both people than the cooperative equilibrium.", why: "Bilish yetarli emas — aldash rag'bati qoladi." },
    { text: "play the game repeatedly and expect noncooperation to be met with future retaliation.", correct: true, why: "Takroriy o'yin va jazo tahdidi (tit-for-tat, grim trigger)." },
    { text: "each choose their dominant strategy.", why: "Bu Nash — hamkorliksiz natija." },
    { text: "each realize that the strategy they choose is not known to the other until the outcome is realized.", why: "Bu dilemmaning o'zi." },
  ]),
  mk("ch18.qq.7", "Antitrust", "The antitrust laws aim to", [
    { text: "facilitate cooperation among firms in oligopolistic industries.", why: "Aksincha." },
    { text: "encourage mergers to take advantage of economies of scale.", why: "Ular birlashishlarni cheklaydi." },
    { text: "discourage firms from moving production facilities overseas.", why: "Bog'liq emas." },
    { text: "prevent firms from acting in ways that reduce competition.", correct: true, why: "Narx kelishuvi, monopolizatsiya, raqobatni kamaytiruvchi birlashishlar." },
  ]),
  mk("ch18.qq.8", "Bahs", "Antitrust enforcement is controversial mainly because", [
    { text: "cooperative domestic firms are best equipped to deal with international competitors.", why: "Kitob dalili emas." },
    { text: "some business practices that seem anticompetitive may have legitimate purposes.", correct: true, why: "Resale price maintenance, predatory pricing, bundling." },
    { text: "excessive competition can drive some firms out of business, causing job losses.", why: "Asosiy sabab emas." },
    { text: "vigorous enforcement can reduce business profitability, lowering shareholder value.", why: "Asosiy sabab emas." },
  ]),
];

export const checks: Record<string, Question> = {
  "s-18-1a": { id: "ch18.check.18-1a", chapter: C, kind: "numeric", source: "new", topic: "Table 1", prompt: "Table 1: 50 gallon $70 dan. Total revenue (= foyda, MC = 0)?", answer: 3500, tolerance: 0, unit: "$", why: "50 × 70 = 3,500. Maksimal foyda — 60 gallonda $3,600." },
  "s-18-1b": { id: "ch18.check.18-1b", chapter: C, kind: "numeric", source: "new", topic: "Kartel", prompt: "Jack va Jill kartel tuzib, monopoliya miqdorini teng bo'lishsa, har birining foydasi?", answer: 1800, tolerance: 0, unit: "$", why: "60 gallon, $60 → $3,600 / 2 = $1,800 (har biri 30 gallon)." },
  "s-18-1c": mk("ch18.check.18-1c", "Nash", "Jill 30 gallon ishlab chiqarsa, Jack nega 40 ni afzal ko'radi?", [
    { text: "40 da jami 70, narx $50 → Jack $2,000 > 30 da $1,800 — umumiy foyda kamaysa ham, uning ulushi oshadi", correct: true, why: "Lekin Jill ham shunday o'ylaydi → 40 + 40, har biri $1,600." },
    { text: "Narx oshadi", why: "Ko'proq taklif — narx tushadi." },
    { text: "Kartel kelishuvi shuni talab qiladi", why: "Kelishuv 30 edi." },
    { text: "40 da xarajat kam", why: "MC = 0." },
  ], 'new'),
  "s-18-1d": { id: "ch18.check.18-1d", chapter: C, kind: "tf", source: "new", topic: "Firmalar soni", prompt: "Oligopoliya kattalashgani sari har bir firma uchun price effect kichrayadi va bozor raqobatli bozorga yaqinlashadi.", answer: true, why: "Ulush kichik — o'z miqdorining narxga ta'siri kam. Shuning uchun erkin savdo ham (oligopoliya a'zolari ko'payadi) narxni MC ga yaqinlashtiradi." },
  "s-18-2a": mk("ch18.check.18-2a", "Mahbuslar", "Nega Bonnie uchun iqror — dominant strategiya?", [
    { text: "Clyde jim tursa: iqror → ozod (1 yil o'rniga); Clyde iqror qilsa: iqror → 8 yil (20 o'rniga) — har holda yaxshiroq", correct: true, why: "Natija — ikkalasi 8 yil, hamkorlikda 1 yil bo'lardi." },
    { text: "Iqror doim ozodlik beradi", why: "Ikkalasi iqror qilsa — 8 yil." },
    { text: "Clyde'ga ishonadi", why: "Ishonch dominantlikni o'zgartirmaydi." },
    { text: "Politsiya majburlaydi", why: "Tanlov ixtiyoriy." },
  ], 'new'),
  "s-18-2b": { id: "ch18.check.18-2b", chapter: C, kind: "numeric", source: "new", topic: "OPEC", prompt: "OPEC muvaffaqiyatli davr: 1972-yilda neft $3, 1981-yilda $35. Narx necha barobar oshgan?", answer: 11.67, tolerance: 0.05, why: "35 / 3 ≈ 11.7. 1980-yillar o'rtasidan a'zolar ishlab chiqarish bo'yicha kelisha olmadi — 1986-yilda $13; fracking OPEC hokimiyatini yanada kamaytirdi." },
  "s-18-2c": { id: "ch18.check.18-2c", chapter: C, kind: "match", source: "new", topic: "Dilemmalar", prompt: "O'yinni “dominant strategiya — natija” bilan moslashtiring.", pairs: [
    { left: "Bonnie va Clyde", right: "Iqror — har biri 8 yil" },
    { left: "Jack va Jill", right: "40 gallon — har biri $1,600" },
    { left: "AQSh va SSSR", right: "Qurollanish — ikkalasi xavf ostida" },
    { left: "ExxonMobil va Chevron", right: "Ikki quduq — har biri $40 mln" },
  ] },
  "s-18-2d": { id: "ch18.check.18-2d", chapter: C, kind: "tf", source: "new", topic: "Farovonlik", prompt: "Oligopolistlar hamkorlik qila olmasligi jamiyat uchun yomon.", answer: false, why: "Aksincha — hamkorliksiz miqdor samarali darajaga yaqin. Qurollanish poygasi va umumiy resurs holatlarida esa hamkorlik yo'qligi jamiyat uchun ham yomon." },
  "s-18-2e": mk("ch18.check.18-2e", "Takroriy o'yin", "Jack va Jill har hafta o'ynaydi va “bir kishi buzsa, ikkalasi abadiy 40” deb kelishdi. Nega bu hamkorlikni saqlashi mumkin?", [
    { text: "Buzish bir hafta foydani $1,800 → $2,000 ga oshiradi, lekin keyin abadiy $1,600 — kelajakni qadrlasa, buzmaydi", correct: true, why: "Tahdid ishonchli: biri 40 qilsa, ikkinchisi uchun ham 40 eng yaxshi." },
    { text: "Qonun majburlaydi", why: "Kartel kelishuvlari sudda ijro etilmaydi." },
    { text: "Ular bir-biriga ishonadi", why: "Ishonch emas — rag'batlar." },
    { text: "Narx o'zgarmaydi", why: "Gap foydada." },
  ], 'new'),
  "s-18-3a": mk("ch18.check.18-3a", "Antitrust", "Clayton Act (1914) nimasi bilan ajralib turadi?", [
    { text: "Noqonuniy kelishuvdan zarar ko'rganlar sudga berib, zararning **uch barobarini** undirishi mumkin — xususiy da'volarni rag'batlantiradi", correct: true, why: "Sherman Act (1890) esa kelishuvlarni jinoiy fitnaga aylantirgan." },
    { text: "Kartellarni qonuniylashtirdi", why: "Aksincha." },
    { text: "Narxlarni davlat belgilaydi", why: "Yo'q." },
    { text: "Faqat xalqaro savdoga tegishli", why: "Yo'q." },
  ], 'new'),
  "s-18-3b": { id: "ch18.check.18-3b", chapter: C, kind: "numeric", source: "new", topic: "Bundling", prompt: "City: Superheroes $150k, Hamlet $50k; Country: $50k va $150k. Paket narxida studiya ikkala teatrdan jami qancha (ming $) oladi?", answer: 400, tolerance: 0, unit: "ming $", why: "Har teatr paketga $200k to'laydi → $400k; alohida narxda eng yaxshisi har filmga $150k → har teatr bitta film → $300k." },
};

export const practice: Question[] = [
  { id: "ch18.new.diamonds", chapter: C, kind: "numeric", source: "new", topic: "Problem 1", prompt: "Olmos: MC $1,000; talab: $8,000 — 5,000 … $1,000 — 12,000 (har $1,000 ga +1,000). Monopoliya narxi?", answer: 7000, tolerance: 0, unit: "$", why: "Foyda (P − 1,000) × Q: 7,000 da 6,000 × 6,000 = $36 mln — maksimal. Raqobat: P = $1,000, Q = 12,000." },
  { id: "ch18.new.diamonds-cheat", chapter: C, kind: "numeric", source: "new", topic: "Problem 1c", prompt: "Kartel 6,000 ni teng bo'ladi (har biri 3,000, foyda $18 mln). Janubiy Afrika yolg'iz 1,000 ko'p ishlab chiqarsa, uning foydasi (mln $)?", answer: 20, tolerance: 0, unit: "mln $", why: "Jami 7,000, narx $6,000 → 4,000 × 5,000 = $20 mln > $18 mln — shuning uchun kartellar barqaror emas." },
  mk("ch18.new.synergy", "Problem 5", "Synergy–Dynaco o'yinida Nash muvozanati bormi, garchi Synergy'da dominant strategiya bo'lmasa ham?", [
    { text: "Ha: Dynaco uchun katta byudjet dominant; buni bilgan Synergy katta byudjetni tanlaydi → (Large, Large)", correct: true, why: "Nash — har kim boshqalarning tanlovini berilgan deb eng yaxshisini tanlaydi; dominant strategiya shart emas." },
    { text: "Yo'q, dominant strategiya yo'q", why: "Nash buni talab qilmaydi." },
    { text: "Ikkalasi kichik byudjet", why: "Dynaco katta tanlaydi." },
    { text: "Ikkita Nash bor", why: "Faqat bitta." },
  ], 'new'),
  mk("ch18.new.kona", "Problem 9", "Big Brew: “Kirsang, past narx qo'yamiz.” Little Kona ishonishi kerakmi?", [
    { text: "Yo'q: Kona kirgach, Brew uchun yuqori narx foydaliroq ($3 mln > $1 mln) — tahdid ishonchsiz; Nash: (Enter, High)", correct: true, why: "Brew uchun yuqori narx — dominant strategiya." },
    { text: "Ha", why: "Brew o'z tahdidini bajarsa o'zi yutqazadi." },
    { text: "Kona hech qachon kirmasligi kerak", why: "Kirish $2 mln beradi." },
    { text: "Ikkalasi past narx", why: "Brew uchun past narx doim yomonroq." },
  ], 'new'),
  mk("ch18.new.athletes", "Problem 8", "$10,000 mukofot, doping olgan g'olib; ikkalasi olsa yoki olmasa — teng bo'lishadi. Doping zarari X. Qachon ikkalasi doping olishi Nash?", [
    { text: "X < $5,000 bo'lsa — doping har holda $5,000 dan ko'p qo'shadi (dominant)", correct: true, why: "Ikkalasi olsa: 5,000 − X; olmasa: 5,000 — doping xavfsizroq bo'lishi (X kamayishi) ularni dopingga undab, ahvolini yomonlashtirishi mumkin." },
    { text: "Har doim", why: "X ≥ 5,000 da olmaslik yaxshi." },
    { text: "Hech qachon", why: "X < 5,000 da oladi." },
    { text: "X > $10,000 bo'lsa", why: "Unda hech kim olmaydi." },
  ], 'new'),
  { id: "ch18.new.grades", chapter: C, kind: "numeric", source: "new", topic: "Problem 6", prompt: "A = 40, B = 30, D = 10 birlik baxt; mehnat −25. Ikkalasi ham shirk qilsa (Nash), har birining baxti?", answer: 10, tolerance: 0, why: "Shirk — dominant: sherik ishlasa 30 > 15, ishlamasa 10 > 5. Takroriy loyihalarda hamkorlik (15) mumkin.", traps: [{ value: 15, why: "Bu ikkalasi ishlagandagi natija — Nash emas." }] },
  { id: "ch18.new.tf-rpm", chapter: C, kind: "tf", source: "new", topic: "Antitrust", prompt: "Resale price maintenance'ni himoya qiluvchilar fikricha, ishlab chiqaruvchi chakanachilar orasidagi raqobatni kamaytirishdan manfaatdor emas — kartel kamroq sotadi.", answer: true, why: "Maqsad — xizmat ko'rsatadigan do'konlarni arzon diskaunterlarning free ride qilishidan himoya qilish." },
  { id: "ch18.new.ate", chapter: C, kind: "tf", source: "new", topic: "Ask the Experts", prompt: "IGM (2020): iqtisodchilarning 95% i Google'ning qidiruvdagi hukmronligi asosan miqyos samarasi va sifatli algoritmdan kelgan degan fikrga qo'shilgan.", answer: true, why: "95% agree, 5% uncertain. Facebook'ni WhatsApp va Instagram'dan ajratish jamiyatga foydali — 59% agree. Bozor ulushi va bozor hokimiyati (2018): 54% agree, 21% uncertain, 25% disagree." },
  mk("ch18.new.uz", "O'zbekistondan misol", "Shaharda faqat ikki-uchta yirik sement ishlab chiqaruvchisi bor. Ular narxni bir vaqtda oshirsa, antimonopol organ nimaga e'tibor beradi?", [
    { text: "Til biriktirish (kartel) belgilariga — kelishuv raqobatni kamaytiradi; lekin bir vaqtda o'zgarish xarajatlar o'sishidan ham bo'lishi mumkin", correct: true, why: "Narx kelishuvi — antitrust qonunlarining asosiy nishoni." },
    { text: "Hech narsa — narx erkin", why: "Oligopoliyada kelishuv xavfi bor." },
    { text: "Narxni nolga tushirish", why: "Absurd." },
    { text: "Kompaniyalarni birlashtirish", why: "Bu raqobatni yanada kamaytiradi." },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
