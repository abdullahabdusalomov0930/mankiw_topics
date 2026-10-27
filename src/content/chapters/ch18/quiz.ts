import type { Question } from '../../types';
import { tr } from '../../../lib/lang';

const C = 18;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });
const lvl = ['less than; more than', 'more than; less than', 'less than; equal to', 'equal to; more than'];

export const quickQuiz: Question[] = [
  mk("ch18.qq.1", tr("Oligopoliya", 'Oligopoly'), "The key feature of an oligopolistic market is that", [
    { text: "each firm sells a product different from other firms.", why: tr("Bu monopolistik raqobat.", "That's monopolistic competition.") },
    { text: "a single firm chooses a point on the market demand curve.", why: tr("Bu monopoliya.", "That's monopoly.") },
    { text: "each firm takes the market price as given.", why: tr("Bu mukammal raqobat.", "That's perfect competition.") },
    { text: "a small number of firms are acting strategically.", correct: true, why: tr("Kam firma — har birining harakati boshqalar foydasiga katta ta'sir.", "Few firms — each one's actions strongly affect the others' profits.") },
  ]),
  mk("ch18.qq.2", "Kartel", "If an oligopolistic industry organizes itself as a cooperative cartel, it will produce a quantity of output ___ the competitive level and ___ the monopoly level.", lvl.map((x, i) => ({
    text: x,
    correct: i === 2,
    why: [tr("Kartel = monopoliya miqdori.", 'Cartel = the monopoly quantity.'), tr("Kartel raqobatdan kam.", 'A cartel produces less than competition.'), tr("Kartel monopoliya kabi harakat qiladi.", 'A cartel acts like a monopoly.'), tr("Raqobatdan kam.", 'Less than competition.')][i],
  }))),
  mk("ch18.qq.3", "Nash", "If an oligopoly does not cooperate and each firm chooses its own quantity, the industry will produce a quantity of output ___ the competitive level and ___ the monopoly level.", lvl.map((x, i) => ({
    text: x,
    correct: i === 0,
    why: [tr("Jack + Jill: 80 — raqobatdan (120) kam, monopoliyadan (60) ko'p.", 'Jack + Jill: 80 — less than competition (120), more than monopoly (60).'), tr("Teskari.", 'The reverse.'), tr("Monopoliyadan ko'p.", 'More than monopoly.'), tr("Raqobatdan kam.", 'Less than competition.')][i],
  }))),
  mk("ch18.qq.4", tr("Firmalar soni", 'Number of firms'), "As the number of firms in an oligopoly grows, the industry approaches a level of output ___ the competitive level and ___ the monopoly level.", lvl.map((x, i) => ({
    text: x,
    correct: i === 3,
    why: [tr("Ko'p firmada raqobatga yaqinlashadi.", 'With many firms it approaches competition.'), tr("Teskari.", 'The reverse.'), tr("Monopoliyaga emas.", 'Not monopoly.'), tr("Price effect yo'qoladi — raqobat miqdori, monopoliyadan ko'p.", 'The price effect disappears — the competitive quantity, more than monopoly.')][i],
  }))),
  mk("ch18.qq.5", tr("Mahbuslar dilemmasi", "Prisoners' dilemma"), "The prisoners' dilemma is a two-person game illustrating that", [
    { text: "the cooperative outcome could be worse for both people than the Nash equilibrium.", why: tr("Teskari — hamkorlik ikkalasi uchun yaxshiroq.", 'The reverse — cooperation is better for both.') },
    { text: "even if the cooperative outcome is better than the Nash equilibrium for one person, it might be worse for the other.", why: tr("Hamkorlik ikkalasi uchun yaxshiroq.", 'Cooperation is better for both.') },
    { text: "even if cooperation is better than the Nash equilibrium, each person might have an incentive not to cooperate.", correct: true, why: tr("Shaxsiy manfaat hamkorlikni buzadi.", 'Self-interest undermines cooperation.') },
    { text: "rational, self-interested individuals will naturally avoid the Nash equilibrium because it is worse for both of them.", why: tr("Ular aynan Nash ga keladi.", 'They arrive exactly at the Nash equilibrium.') },
  ]),
  mk("ch18.qq.6", tr("Hamkorlik", 'Cooperation'), "Two people facing the prisoners' dilemma may cooperate if they", [
    { text: "recognize that the Nash equilibrium is worse for both people than the cooperative equilibrium.", why: tr("Bilish yetarli emas — aldash rag'bati qoladi.", "Knowing isn't enough — the incentive to cheat remains.") },
    { text: "play the game repeatedly and expect noncooperation to be met with future retaliation.", correct: true, why: tr("Takroriy o'yin va jazo tahdidi (tit-for-tat, grim trigger).", 'A repeated game and the threat of punishment (tit-for-tat, grim trigger).') },
    { text: "each choose their dominant strategy.", why: tr("Bu Nash — hamkorliksiz natija.", "That's the Nash equilibrium — the outcome without cooperation.") },
    { text: "each realize that the strategy they choose is not known to the other until the outcome is realized.", why: tr("Bu dilemmaning o'zi.", "That's the dilemma itself.") },
  ]),
  mk("ch18.qq.7", "Antitrust", "The antitrust laws aim to", [
    { text: "facilitate cooperation among firms in oligopolistic industries.", why: tr("Aksincha.", 'The reverse.') },
    { text: "encourage mergers to take advantage of economies of scale.", why: tr("Ular birlashishlarni cheklaydi.", 'They restrict mergers.') },
    { text: "discourage firms from moving production facilities overseas.", why: tr("Bog'liq emas.", 'Unrelated.') },
    { text: "prevent firms from acting in ways that reduce competition.", correct: true, why: tr("Narx kelishuvi, monopolizatsiya, raqobatni kamaytiruvchi birlashishlar.", 'Price fixing, monopolization, mergers that reduce competition.') },
  ]),
  mk("ch18.qq.8", "Bahs", "Antitrust enforcement is controversial mainly because", [
    { text: "cooperative domestic firms are best equipped to deal with international competitors.", why: tr("Kitob dalili emas.", "Not the book's argument.") },
    { text: "some business practices that seem anticompetitive may have legitimate purposes.", correct: true, why: "Resale price maintenance, predatory pricing, bundling." },
    { text: "excessive competition can drive some firms out of business, causing job losses.", why: tr("Asosiy sabab emas.", 'Not the main reason.') },
    { text: "vigorous enforcement can reduce business profitability, lowering shareholder value.", why: tr("Asosiy sabab emas.", 'Not the main reason.') },
  ]),
];

export const checks: Record<string, Question> = {
  "s-18-1a": { id: "ch18.check.18-1a", chapter: C, kind: "numeric", source: "new", topic: "Table 1", prompt: tr("Table 1: 50 gallon $70 dan. Total revenue (= foyda, MC = 0)?", 'Table 1: 50 gallons at $70. Total revenue (= profit, MC = 0)?'), answer: 3500, tolerance: 0, unit: "$", why: tr("50 × 70 = 3,500. Maksimal foyda — 60 gallonda $3,600.", '50 × 70 = 3,500. The maximum profit is $3,600 at 60 gallons.') },
  "s-18-1b": { id: "ch18.check.18-1b", chapter: C, kind: "numeric", source: "new", topic: "Kartel", prompt: tr("Jack va Jill kartel tuzib, monopoliya miqdorini teng bo'lishsa, har birining foydasi?", "If Jack and Jill form a cartel and split the monopoly quantity equally, what is each one's profit?"), answer: 1800, tolerance: 0, unit: "$", why: "60 gallon, $60 → $3,600 / 2 = $1,800 (har biri 30 gallon)." },
  "s-18-1c": mk("ch18.check.18-1c", "Nash", tr("Jill 30 gallon ishlab chiqarsa, Jack nega 40 ni afzal ko'radi?", 'If Jill produces 30 gallons, why does Jack prefer 40?'), [
    { text: tr("40 da jami 70, narx $50 → Jack $2,000 > 30 da $1,800 — umumiy foyda kamaysa ham, uning ulushi oshadi", 'At 40 the total is 70 and the price $50 → Jack gets $2,000 > $1,800 at 30 — even though total profit falls, his share rises'), correct: true, why: tr("Lekin Jill ham shunday o'ylaydi → 40 + 40, har biri $1,600.", 'But Jill reasons the same way → 40 + 40, $1,600 each.') },
    { text: tr("Narx oshadi", 'The price rises'), why: tr("Ko'proq taklif — narx tushadi.", 'More supply — the price falls.') },
    { text: tr("Kartel kelishuvi shuni talab qiladi", 'The cartel agreement requires it'), why: tr("Kelishuv 30 edi.", 'The agreement was 30.') },
    { text: tr("40 da xarajat kam", 'Costs are lower at 40'), why: "MC = 0." },
  ], 'new'),
  "s-18-1d": { id: "ch18.check.18-1d", chapter: C, kind: "tf", source: "new", topic: tr("Firmalar soni", 'Number of firms'), prompt: tr("Oligopoliya kattalashgani sari har bir firma uchun price effect kichrayadi va bozor raqobatli bozorga yaqinlashadi.", 'As an oligopoly grows larger, the price effect for each firm shrinks and the market approaches a competitive market.'), answer: true, why: tr("Ulush kichik — o'z miqdorining narxga ta'siri kam. Shuning uchun erkin savdo ham (oligopoliya a'zolari ko'payadi) narxni MC ga yaqinlashtiradi.", "Its share is small — its own quantity has little effect on the price. That's why free trade (more oligopoly members) also brings the price closer to MC.") },
  "s-18-2a": mk("ch18.check.18-2a", tr("Mahbuslar", 'Prisoners'), tr("Nega Bonnie uchun iqror — dominant strategiya?", 'Why is confessing a dominant strategy for Bonnie?'), [
    { text: tr("Clyde jim tursa: iqror → ozod (1 yil o'rniga); Clyde iqror qilsa: iqror → 8 yil (20 o'rniga) — har holda yaxshiroq", 'If Clyde stays silent: confessing → freedom (instead of 1 year); if Clyde confesses: confessing → 8 years (instead of 20) — better either way'), correct: true, why: tr("Natija — ikkalasi 8 yil, hamkorlikda 1 yil bo'lardi.", 'The outcome: 8 years each, whereas cooperating would have given 1 year.') },
    { text: tr("Iqror doim ozodlik beradi", 'Confessing always brings freedom'), why: tr("Ikkalasi iqror qilsa — 8 yil.", 'If both confess — 8 years.') },
    { text: tr("Clyde'ga ishonadi", 'She trusts Clyde'), why: tr("Ishonch dominantlikni o'zgartirmaydi.", "Trust doesn't change dominance.") },
    { text: tr("Politsiya majburlaydi", 'The police force her'), why: tr("Tanlov ixtiyoriy.", 'The choice is voluntary.') },
  ], 'new'),
  "s-18-2b": { id: "ch18.check.18-2b", chapter: C, kind: "numeric", source: "new", topic: tr("OPEC", 'OPEC'), prompt: tr("OPEC muvaffaqiyatli davr: 1972-yilda neft $3, 1981-yilda $35. Narx necha barobar oshgan?", "OPEC's successful period: oil was $3 in 1972 and $35 in 1981. By how many times did the price rise?"), answer: 11.67, tolerance: 0.05, why: tr("35 / 3 ≈ 11.7. 1980-yillar o'rtasidan a'zolar ishlab chiqarish bo'yicha kelisha olmadi — 1986-yilda $13; fracking OPEC hokimiyatini yanada kamaytirdi.", "35 / 3 ≈ 11.7. From the mid-1980s members couldn't agree on production — $13 in 1986; fracking reduced OPEC's power further.") },
  "s-18-2c": { id: "ch18.check.18-2c", chapter: C, kind: "match", source: "new", topic: tr("Dilemmalar", 'Dilemmas'), prompt: tr("O'yinni “dominant strategiya — natija” bilan moslashtiring.", 'Match each game with “dominant strategy — outcome.”'), pairs: [
    { left: tr("Bonnie va Clyde", 'Bonnie and Clyde'), right: tr("Iqror — har biri 8 yil", 'Confess — 8 years each') },
    { left: tr("Jack va Jill", 'Jack and Jill'), right: "40 gallon — har biri $1,600" },
    { left: tr("AQSh va SSSR", 'The U.S. and the USSR'), right: tr("Qurollanish — ikkalasi xavf ostida", 'Arm — both are at risk') },
    { left: tr("ExxonMobil va Chevron", 'ExxonMobil and Chevron'), right: tr("Ikki quduq — har biri $40 mln", 'Two wells — $40 million each') },
  ] },
  "s-18-2d": { id: "ch18.check.18-2d", chapter: C, kind: "tf", source: "new", topic: tr("Farovonlik", 'Welfare'), prompt: tr("Oligopolistlar hamkorlik qila olmasligi jamiyat uchun yomon.", "Oligopolists' inability to cooperate is bad for society."), answer: false, why: tr("Aksincha — hamkorliksiz miqdor samarali darajaga yaqin. Qurollanish poygasi va umumiy resurs holatlarida esa hamkorlik yo'qligi jamiyat uchun ham yomon.", 'The reverse — without cooperation the quantity is closer to the efficient level. In the arms race and common-resource cases, though, the lack of cooperation is bad for society too.') },
  "s-18-2e": mk("ch18.check.18-2e", tr("Takroriy o'yin", 'Repeated game'), tr("Jack va Jill har hafta o'ynaydi va “bir kishi buzsa, ikkalasi abadiy 40” deb kelishdi. Nega bu hamkorlikni saqlashi mumkin?", 'Jack and Jill play every week and agree: “if one cheats, both produce 40 forever.” Why might this sustain cooperation?'), [
    { text: tr("Buzish bir hafta foydani $1,800 → $2,000 ga oshiradi, lekin keyin abadiy $1,600 — kelajakni qadrlasa, buzmaydi", "Cheating raises profit for one week from $1,800 to $2,000, but then $1,600 forever — if they value the future, they won't cheat"), correct: true, why: tr("Tahdid ishonchli: biri 40 qilsa, ikkinchisi uchun ham 40 eng yaxshi.", 'The threat is credible: if one produces 40, 40 is best for the other too.') },
    { text: tr("Qonun majburlaydi", 'The law enforces it'), why: tr("Kartel kelishuvlari sudda ijro etilmaydi.", "Cartel agreements aren't enforceable in court.") },
    { text: tr("Ular bir-biriga ishonadi", 'They trust each other'), why: tr("Ishonch emas — rag'batlar.", 'Not trust — incentives.') },
    { text: tr("Narx o'zgarmaydi", "The price doesn't change"), why: tr("Gap foydada.", "It's about profit.") },
  ], 'new'),
  "s-18-3a": mk("ch18.check.18-3a", "Antitrust", tr("Clayton Act (1914) nimasi bilan ajralib turadi?", 'What distinguishes the Clayton Act (1914)?'), [
    { text: tr("Noqonuniy kelishuvdan zarar ko'rganlar sudga berib, zararning **uch barobarini** undirishi mumkin — xususiy da'volarni rag'batlantiradi", 'Those harmed by an illegal agreement can sue and recover **three times** their damages — encouraging private lawsuits'), correct: true, why: tr("Sherman Act (1890) esa kelishuvlarni jinoiy fitnaga aylantirgan.", 'The Sherman Act (1890) made agreements a criminal conspiracy.') },
    { text: tr("Kartellarni qonuniylashtirdi", 'It legalized cartels'), why: tr("Aksincha.", 'The reverse.') },
    { text: tr("Narxlarni davlat belgilaydi", 'The government sets prices'), why: "Yo'q." },
    { text: tr("Faqat xalqaro savdoga tegishli", 'It applies only to international trade'), why: "Yo'q." },
  ], 'new'),
  "s-18-3b": { id: "ch18.check.18-3b", chapter: C, kind: "numeric", source: "new", topic: "Bundling", prompt: tr("City: Superheroes $150k, Hamlet $50k; Country: $50k va $150k. Paket narxida studiya ikkala teatrdan jami qancha (ming $) oladi?", 'City: Superheroes $150k, Hamlet $50k; Country: $50k and $150k. With a bundle price, how much (in $ thousand) does the studio get in total from both theaters?'), answer: 400, tolerance: 0, unit: tr("ming $", "$ thousand"), why: tr("Har teatr paketga $200k to'laydi → $400k; alohida narxda eng yaxshisi har filmga $150k → har teatr bitta film → $300k.", 'Each theater pays $200k for the bundle → $400k; with separate prices the best is $150k per film → each theater one film → $300k.') },
};

export const practice: Question[] = [
  { id: "ch18.new.diamonds", chapter: C, kind: "numeric", source: "new", topic: "Problem 1", prompt: tr("Olmos: MC $1,000; talab: $8,000 — 5,000 … $1,000 — 12,000 (har $1,000 ga +1,000). Monopoliya narxi?", 'Diamonds: MC $1,000; demand: $8,000 — 5,000 … $1,000 — 12,000 (+1,000 per $1,000). The monopoly price?'), answer: 7000, tolerance: 0, unit: "$", why: tr("Foyda (P − 1,000) × Q: 7,000 da 6,000 × 6,000 = $36 mln — maksimal. Raqobat: P = $1,000, Q = 12,000.", 'Profit (P − 1,000) × Q: at 7,000, 6,000 × 6,000 = $36 million — the maximum. Competition: P = $1,000, Q = 12,000.') },
  { id: "ch18.new.diamonds-cheat", chapter: C, kind: "numeric", source: "new", topic: "Problem 1c", prompt: tr("Kartel 6,000 ni teng bo'ladi (har biri 3,000, foyda $18 mln). Janubiy Afrika yolg'iz 1,000 ko'p ishlab chiqarsa, uning foydasi (mln $)?", 'The cartel splits 6,000 equally (3,000 each, profit $18 million). If South Africa alone produces 1,000 more, what is its profit ($ million)?'), answer: 20, tolerance: 0, unit: tr("mln $", '$ million'), why: tr("Jami 7,000, narx $6,000 → 4,000 × 5,000 = $20 mln > $18 mln — shuning uchun kartellar barqaror emas.", "Total 7,000, price $6,000 → 4,000 × 5,000 = $20 million > $18 million — that's why cartels are unstable.") },
  mk("ch18.new.synergy", "Problem 5", tr("Synergy–Dynaco o'yinida Nash muvozanati bormi, garchi Synergy'da dominant strategiya bo'lmasa ham?", 'In the Synergy–Dynaco game, is there a Nash equilibrium even though Synergy has no dominant strategy?'), [
    { text: tr("Ha: Dynaco uchun katta byudjet dominant; buni bilgan Synergy katta byudjetni tanlaydi → (Large, Large)", 'Yes: a large budget is dominant for Dynaco; knowing this, Synergy chooses a large budget → (Large, Large)'), correct: true, why: tr("Nash — har kim boshqalarning tanlovini berilgan deb eng yaxshisini tanlaydi; dominant strategiya shart emas.", "Nash — each chooses its best given the others' choices; a dominant strategy isn't required.") },
    { text: tr("Yo'q, dominant strategiya yo'q", "No, there's no dominant strategy"), why: tr("Nash buni talab qilmaydi.", "Nash doesn't require one.") },
    { text: tr("Ikkalasi kichik byudjet", 'Both small budgets'), why: tr("Dynaco katta tanlaydi.", 'Dynaco chooses large.') },
    { text: "Ikkita Nash bor", why: tr("Faqat bitta.", 'Only one.') },
  ], 'new'),
  mk("ch18.new.kona", "Problem 9", tr("Big Brew: “Kirsang, past narx qo'yamiz.” Little Kona ishonishi kerakmi?", "Big Brew: “If you enter, we'll set a low price.” Should Little Kona believe it?"), [
    { text: tr("Yo'q: Kona kirgach, Brew uchun yuqori narx foydaliroq ($3 mln > $1 mln) — tahdid ishonchsiz; Nash: (Enter, High)", "No: once Kona enters, a high price is more profitable for Brew ($3 million > $1 million) — the threat isn't credible; Nash: (Enter, High)"), correct: true, why: tr("Brew uchun yuqori narx — dominant strategiya.", 'A high price is a dominant strategy for Brew.') },
    { text: "Ha", why: tr("Brew o'z tahdidini bajarsa o'zi yutqazadi.", 'If Brew carried out its threat, it would lose.') },
    { text: tr("Kona hech qachon kirmasligi kerak", 'Kona should never enter'), why: tr("Kirish $2 mln beradi.", 'Entering gives $2 million.') },
    { text: tr("Ikkalasi past narx", 'Both low prices'), why: tr("Brew uchun past narx doim yomonroq.", 'A low price is always worse for Brew.') },
  ], 'new'),
  mk("ch18.new.athletes", "Problem 8", tr("$10,000 mukofot, doping olgan g'olib; ikkalasi olsa yoki olmasa — teng bo'lishadi. Doping zarari X. Qachon ikkalasi doping olishi Nash?", 'A $10,000 prize goes to the winner who takes the drug; if both or neither take it, they split it. The harm from the drug is X. When is both taking the drug a Nash equilibrium?'), [
    { text: tr("X < $5,000 bo'lsa — doping har holda $5,000 dan ko'p qo'shadi (dominant)", 'If X < $5,000 — the drug adds more than $5,000 either way (dominant)'), correct: true, why: tr("Ikkalasi olsa: 5,000 − X; olmasa: 5,000 — doping xavfsizroq bo'lishi (X kamayishi) ularni dopingga undab, ahvolini yomonlashtirishi mumkin.", 'If both take it: 5,000 − X; if not: 5,000 — making the drug safer (lower X) can push them to take it and leave them worse off.') },
    { text: tr("Har doim", 'Always'), why: tr("X ≥ 5,000 da olmaslik yaxshi.", 'With X ≥ 5,000 not taking it is better.') },
    { text: tr("Hech qachon", 'Never'), why: tr("X < 5,000 da oladi.", 'With X < 5,000 they take it.') },
    { text: tr("X > $10,000 bo'lsa", 'If X > $10,000'), why: tr("Unda hech kim olmaydi.", 'Then no one takes it.') },
  ], 'new'),
  { id: "ch18.new.grades", chapter: C, kind: "numeric", source: "new", topic: "Problem 6", prompt: tr("A = 40, B = 30, D = 10 birlik baxt; mehnat −25. Ikkalasi ham shirk qilsa (Nash), har birining baxti?", "A = 40, B = 30, D = 10 units of happiness; work −25. If both shirk (Nash), what is each one's happiness?"), answer: 10, tolerance: 0, why: tr("Shirk — dominant: sherik ishlasa 30 > 15, ishlamasa 10 > 5. Takroriy loyihalarda hamkorlik (15) mumkin.", 'Shirking is dominant: if the partner works 30 > 15, if not 10 > 5. In repeated projects cooperation (15) is possible.'), traps: [{ value: 15, why: tr("Bu ikkalasi ishlagandagi natija — Nash emas.", "That's the outcome if both work — not Nash.") }] },
  { id: "ch18.new.tf-rpm", chapter: C, kind: "tf", source: "new", topic: "Antitrust", prompt: tr("Resale price maintenance'ni himoya qiluvchilar fikricha, ishlab chiqaruvchi chakanachilar orasidagi raqobatni kamaytirishdan manfaatdor emas — kartel kamroq sotadi.", 'Defenders of resale price maintenance argue that a manufacturer has no interest in reducing competition among retailers — a cartel would sell less.'), answer: true, why: tr("Maqsad — xizmat ko'rsatadigan do'konlarni arzon diskaunterlarning free ride qilishidan himoya qilish.", 'The goal is to protect stores that provide service from free riding by cheap discounters.') },
  { id: "ch18.new.ate", chapter: C, kind: "tf", source: "new", topic: "Ask the Experts", prompt: tr("IGM (2020): iqtisodchilarning 95% i Google'ning qidiruvdagi hukmronligi asosan miqyos samarasi va sifatli algoritmdan kelgan degan fikrga qo'shilgan.", "IGM (2020): 95% of economists agreed that Google's dominance in search comes mainly from economies of scale and a high-quality algorithm."), answer: true, why: tr("95% agree, 5% uncertain. Facebook'ni WhatsApp va Instagram'dan ajratish jamiyatga foydali — 59% agree. Bozor ulushi va bozor hokimiyati (2018): 54% agree, 21% uncertain, 25% disagree.", '95% agree, 5% uncertain. Separating Facebook from WhatsApp and Instagram would benefit society — 59% agree. Market share and market power (2018): 54% agree, 21% uncertain, 25% disagree.') },
  mk("ch18.new.uz", tr("O'zbekistondan misol", 'An example from Uzbekistan'), tr("Shaharda faqat ikki-uchta yirik sement ishlab chiqaruvchisi bor. Ular narxni bir vaqtda oshirsa, antimonopol organ nimaga e'tibor beradi?", 'A city has only two or three large cement producers. If they raise prices at the same time, what does the antimonopoly agency look for?'), [
    { text: tr("Til biriktirish (kartel) belgilariga — kelishuv raqobatni kamaytiradi; lekin bir vaqtda o'zgarish xarajatlar o'sishidan ham bo'lishi mumkin", 'Signs of collusion (a cartel) — an agreement reduces competition; but a simultaneous change may also come from rising costs'), correct: true, why: tr("Narx kelishuvi — antitrust qonunlarining asosiy nishoni.", 'Price fixing is the main target of antitrust laws.') },
    { text: tr("Hech narsa — narx erkin", 'Nothing — prices are free'), why: tr("Oligopoliyada kelishuv xavfi bor.", "In an oligopoly there's a risk of collusion.") },
    { text: tr("Narxni nolga tushirish", 'Cut the price to zero'), why: "Absurd." },
    { text: tr("Kompaniyalarni birlashtirish", 'Merge the companies'), why: tr("Bu raqobatni yanada kamaytiradi.", 'That would reduce competition even more.') },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
