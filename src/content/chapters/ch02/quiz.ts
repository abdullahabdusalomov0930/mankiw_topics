import type { Question } from '../../types';
import { tr } from '../../../lib/lang';

const C = 2;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch02.qq.1", tr("Modellar", 'Models'), "An economic model is", [
    { text: "a mechanical machine that replicates the functioning of the economy.", why: tr("Iqtisodiy modellar asosan diagramma va tenglamalar.", 'Economic models are mostly diagrams and equations.') },
    { text: "a fully detailed, realistic description of the economy.", why: tr("Aksincha — model ataylab ko'p tafsilotlarni tashlaydi.", 'The opposite — a model deliberately leaves out many details.') },
    { text: "a simplified representation of some aspect of the economy.", correct: true, why: tr("Model — muhim narsani ko'rish uchun soddalashtirilgan tasvir.", 'A model is a simplified picture that helps us see what matters.') },
    { text: "a computer program that predicts the future of the economy.", why: tr("Ba'zi modellar kompyuterda ishlaydi, lekin ta'rif bu emas.", 'Some models run on computers, but that is not the definition.') },
  ]),
  mk("ch02.qq.2", tr("Aylanma oqim", 'The circular flow'), "The circular-flow diagram illustrates that, in markets for the factors of production,", [
    { text: "households are sellers, and firms are buyers.", correct: true, why: tr("Uy xo'jaliklari mehnat, yer va kapitalga egalik qiladi va ularni firmalarga sotadi.", 'Households own labor, land, and capital and sell them to firms.') },
    { text: "households are buyers, and firms are sellers.", why: tr("Bu **tovar va xizmatlar** bozori.", 'That is the market for **goods and services**.') },
    { text: "households and firms are both buyers.", why: tr("Har bir bozorda bir tomon sotadi, ikkinchisi oladi.", 'In each market one side sells and the other buys.') },
    { text: "households and firms are both sellers.", why: tr("Har bir bozorda bir tomon sotadi, ikkinchisi oladi.", 'In each market one side sells and the other buys.') },
  ]),
  mk("ch02.qq.3", tr("PPF", 'PPF'), "A point inside the production possibilities frontier is", [
    { text: "efficient but not feasible.", why: tr("Chegara ichidagi nuqta erishish mumkin, lekin samarasiz.", 'A point inside the frontier is attainable but inefficient.') },
    { text: "feasible but not efficient.", correct: true, why: tr("Mavjud resurslar bilan erishsa bo'ladi, lekin ikkala tovarni ham ko'paytirish mumkin (D nuqtasi).", 'It is attainable with existing resources, but both goods could be increased (point D).') },
    { text: "both efficient and feasible.", why: tr("Bu chegara **ustidagi** nuqtalar.", 'Those are points **on** the frontier.') },
    { text: "neither efficient nor feasible.", why: tr("Ichkaridagi nuqtaga erishsa bo'ladi (feasible). “Ikkalasi ham emas” chegaradan tashqaridagi nuqtalarga ham to'g'ri kelmaydi — ular shunchaki erishib bo'lmaydi.", "A point inside is attainable (feasible). “Neither” doesn't fit points outside the frontier either — they are simply unattainable.") },
  ]),
  mk("ch02.qq.4", tr("Mikro va makro", 'Micro and macro'), "All of the following topics fall within the study of microeconomics **EXCEPT**", [
    { text: "the impact of cigarette taxes on the smoking behavior of teenagers.", why: tr("Aniq bozor va qarorlar — mikro.", 'Specific markets and decisions — micro.') },
    { text: "the role of Microsoft's market power in the pricing of software.", why: tr("Bitta firma va bitta bozor — mikro.", 'One firm and one market — micro.') },
    { text: "the effectiveness of antipoverty programs in reducing homelessness.", why: tr("Uy xo'jaliklari qarorlari — mikro.", 'Household decisions — micro.') },
    { text: "the influence of the government's budget deficit on economic growth.", correct: true, why: tr("Davlat byudjeti va iqtisodiy o'sish — butun iqtisodiyot, ya'ni **makro**.", 'The government budget and economic growth concern the whole economy — that is **macro**.') },
  ]),
  mk("ch02.qq.5", tr("Pozitiv/normativ", 'Positive/normative'), "Which of the following is a positive, rather than a normative, statement?", [
    { text: "Law X will reduce national income.", correct: true, why: tr("Dunyo qanday bo'lishini tasvirlaydi — ma'lumotlar bilan tekshirsa bo'ladi.", 'It describes how the world is — it can be checked against data.') },
    { text: "Law X is a good piece of legislation.", why: tr("“Yaxshi” — qadriyat bahosi, normativ.", '“Good” is a value judgment — normative.') },
    { text: "Congress ought to pass law X.", why: tr("“Ought to” — normativ.", '“Ought to” — normative.') },
    { text: "The president should veto law X.", why: tr("“Should” — normativ.", '“Should” — normative.') },
  ]),
  mk("ch02.qq.6", tr("Iqtisodchilar davlatda", 'Economists in government'), "The following parts of government regularly rely on the advice of economists:", [
    { text: "Department of the Treasury.", why: tr("To'g'ri (soliq siyosati), lekin yagona emas.", 'True (tax policy), but not the only one.') },
    { text: "Office of Management and Budget.", why: tr("To'g'ri (xarajat rejalari), lekin yagona emas.", 'True (spending plans), but not the only one.') },
    { text: "Department of Justice.", why: tr("To'g'ri (antimonopoliya), lekin yagona emas.", 'True (antitrust), but not the only one.') },
    { text: "All of the above.", correct: true, why: tr("Iqtisodchilar Treasury, OMB, Justice, Labor, CBO, Fed va Council of Economic Advisers'da ishlaydi.", 'Economists work at the Treasury, OMB, Justice, Labor, CBO, the Fed, and the Council of Economic Advisers.') },
  ]),
  mk("ch02.qq.7", tr("Kelishmovchilik", 'Disagreement'), "Economists may disagree because they have different", [
    { text: "hunches about the validity of alternative theories.", why: tr("To'g'ri, lekin yagona emas.", 'True, but not the only one.') },
    { text: "judgments about the size of key parameters.", why: tr("To'g'ri (masalan, jamg'arma soliqqa qanchalik javob beradi), lekin yagona emas.", 'True (e.g., how much saving responds to taxes), but not the only one.') },
    { text: "political philosophies about the goals of public policy.", why: tr("To'g'ri (qadriyatlar farqi), lekin yagona emas.", 'True (different values), but not the only one.') },
    { text: "All of the above.", correct: true, why: tr("Ikki sabab: ilmiy baholar farqi (nazariya, parametrlar) va qadriyatlar farqi.", 'Two reasons: different scientific judgments (theory, parameters) and different values.') },
  ]),
  mk("ch02.qq.8", tr("Tariflar", 'Tariffs'), "Most economists believe that tariffs are", [
    { text: "a good way to promote domestic economic growth.", why: tr("93% iqtisodchi tariflar umumiy farovonlikni kamaytiradi deb hisoblaydi.", '93% of economists think tariffs reduce general welfare.') },
    { text: "a poor way to raise general economic well-being.", correct: true, why: tr("Tariflar va kvotalar turmush darajasini oshiradigan ixtisoslashuvga to'sqinlik qiladi (9-bob).", 'Tariffs and quotas block the specialization that raises living standards (Chapter 9).') },
    { text: "an often necessary response to foreign competition.", why: tr("Iqtisodchilarning ko'pchiligi bunga qo'shilmaydi.", 'Most economists disagree with this.') },
    { text: "an efficient way for the government to raise revenue.", why: tr("Tarif DWL yaratadi — samarasiz.", 'A tariff creates a DWL — it is inefficient.') },
  ]),
];

export const checks: Record<string, Question> = {
  "s-2-1a": mk("ch02.check.2-1a", tr("Ilmiy usul", 'The scientific method'), tr("Nega iqtisodchilar ko'pincha “tabiiy tajribalar”dan foydalanadi?", 'Why do economists often use “natural experiments”?'), [
    { text: tr("Inflyatsiyani o'rganish uchun mamlakat pul siyosatini ataylab o'zgartirib bo'lmaydi — laboratoriya tajribalari ko'pincha imkonsiz", "A country can't change its monetary policy on purpose just to study inflation — laboratory experiments are often impossible"), correct: true, why: tr("Astronomlar va evolyutsion biologlar kabi, iqtisodchilar dunyo bergan ma'lumot bilan ishlaydi.", 'Like astronomers and evolutionary biologists, economists work with the data the world gives them.') },
    { text: tr("Iqtisodiyot fan emas", 'Economics is not a science'), why: tr("Ilmiy usul har qanday sohaga qo'llanadi.", 'The scientific method applies to any field.') },
    { text: tr("Tajribalar juda arzon", 'Experiments are very cheap'), why: tr("Muammo — narx emas, imkonsizlik.", 'The problem is impossibility, not price.') },
    { text: tr("Ma'lumot yo'q", 'There is no data'), why: tr("Ma'lumot ko'p — tajriba qilish qiyin.", 'There is plenty of data — the hard part is experimenting.') },
  ], 'new'),
  "s-2-1b": { id: "ch02.check.2-1b", chapter: C, kind: "tf", source: "new", topic: tr("Farazlar", 'Assumptions'), prompt: tr("Pul miqdori o'zgarishining qisqa muddatli ta'sirini o'rganishda narxlar qotib qolgan, uzoq muddatli ta'sirini o'rganishda esa egiluvchan deb faraz qilish mumkin.", 'When studying the short-run effects of a change in the quantity of money we may assume prices are sticky, and when studying the long-run effects, that they are flexible.'), answer: true, why: tr("Turli savollarga turli farazlar: marmar sharcha va plyaj to'pi kabi. Ko'p narxlar (jurnal narxi) kamdan-kam o'zgaradi.", "Different questions call for different assumptions, like the marble and the beach ball. Many prices (a magazine's price, for example) change only rarely.") },
  "s-2-1c": { id: "ch02.check.2-1c", chapter: C, kind: "tf", source: "new", topic: tr("Modellar", 'Models'), prompt: tr("Model qanchalik real bo'lsa — hamma tafsilotlar bilan — shunchalik foydali.", 'The more realistic a model — with every detail — the more useful it is.'), answer: false, why: tr("Model aynan tafsilotlarni **tashlagani uchun** foydali (plastik odam modeli). “All models are wrong, but some are useful.”", 'A model is useful precisely **because it leaves out** details (the plastic model of the body). “All models are wrong, but some are useful.”') },
  "s-2-1d": mk("ch02.check.2-1d", tr("Aylanma oqim", 'The circular flow'), tr("Siz qahvaxonada kofe uchun $1 to'ladingiz. Bu dollar aylanma oqimda qayerga boradi?", 'You pay $1 for a coffee at a café. Where does that dollar go in the circular flow?'), [
    { text: tr("Tovar bozorida firmaga **tushum** → omillar bozorida ish haqi, ijara yoki foyda → uy xo'jaligi **daromadi**", '**Revenue** for the firm in the goods market → wages, rent, or profit in the factor market → household **income**'), correct: true, why: tr("Tashqi halqa — pul oqimi; dollar yana kimningdir hamyoniga qaytadi.", "The outer loop is the flow of money; the dollar ends up in someone's wallet again.") },
    { text: tr("Firmada qoladi", 'It stays with the firm'), why: tr("Firma uni omillarga sarflaydi; qolgani — egasining foydasi (u ham uy xo'jaligi a'zosi).", "The firm spends it on factors; what's left is the owner's profit (and the owner belongs to a household too).") },
    { text: tr("Omillar bozoriga uy xo'jaligidan to'g'ridan-to'g'ri", 'Straight from the household to the factor market'), why: tr("Kofe — tovar bozori.", 'Coffee is bought in the goods market.') },
    { text: tr("Davlatga", 'To the government'), why: tr("Oddiy modelda davlat yo'q.", 'The simple model has no government.') },
  ], 'new'),
  "s-2-1e": { id: "ch02.check.2-1e", chapter: C, kind: "numeric", source: "new", topic: tr("PPF", 'PPF'), prompt: tr("Figure 2: iqtisodiyot A (600 mashina, 2,200 kompyuter) dan B (700, 2,000) ga o'tdi. Bir mashinaning imkoniyat xarajati necha kompyuter?", 'Figure 2: the economy moves from A (600 cars, 2,200 computers) to B (700, 2,000). What is the opportunity cost of one car, in computers?'), answer: 2, tolerance: 0, why: tr("200 kompyuter / 100 mashina = 2.", '200 computers / 100 cars = 2.'), traps: [{ value: 0.5, why: tr("Teskarisini hisobladingiz — bu bir kompyuterning mashinadagi xarajati.", 'You computed the reverse — the cost of one computer in cars.') }, { value: 200, why: tr("200 — 100 mashina uchun; bitta mashina uchun 2.", '200 is for 100 cars; for one car it is 2.') }] },
  "s-2-1f": mk("ch02.check.2-1f", tr("Mikro va makro", 'Micro and macro'), tr("Qaysi biri makroiqtisodiyot savoli?", 'Which is a macroeconomic question?'), [
    { text: tr("Ishsizlik darajasi vaqt o'tishi bilan qanday o'zgaradi", 'How the unemployment rate changes over time'), correct: true, why: tr("Butun iqtisodiyot hodisasi.", 'An economy-wide phenomenon.') },
    { text: tr("Ta'limning maoshga ta'siri", 'The effect of education on wages'), why: tr("Mikro.", 'Micro.') },
    { text: tr("Chet el raqobatining AQSh avtosanoatiga ta'siri", 'The effect of foreign competition on the U.S. auto industry'), why: tr("Mikro — aniq soha.", 'Micro — a specific industry.') },
    { text: tr("Nyu-Yorkda ijara nazorati", 'Rent control in New York'), why: tr("Mikro — aniq bozor.", 'Micro — a specific market.') },
  ], 'new'),
  "s-2-2a": { id: "ch02.check.2-2a", chapter: C, kind: "match", source: "new", topic: tr("Pozitiv/normativ", 'Positive/normative'), prompt: tr("Har bir da'voni turi bilan moslashtiring.", 'Match each statement with its type.'), pairs: [
    { left: "Minimum-wage laws cause unemployment.", right: "Positive" },
    { left: "The government should raise the minimum wage.", right: "Normative" },
    { left: "Lower tax rates encourage more work and more saving.", right: tr("Positive (soliq va ish)", 'Positive (taxes and work)') },
    { left: "Society ought to require welfare recipients to look for jobs.", right: "Normative (ought to)" },
  ] },
  "s-2-2b": mk("ch02.check.2-2b", tr("Iqtisodchilar davlatda", 'Economists in government'), tr("Truman nega “bir qo'lli iqtisodchi” istagan?", 'Why did Truman want a “one-armed economist”?'), [
    { text: tr("Iqtisodchilar doim “on the one hand… on the other hand…” derdi — chunki siyosat qarorlarida deyarli har doim trade-off bor", 'Economists kept saying “on the one hand… on the other hand…” — because policy decisions almost always involve trade-offs'), correct: true, why: tr("Hamma qaror oson deydigan iqtisodchiga ishonmang.", "Don't trust an economist who says every decision is easy.") },
    { text: tr("Iqtisodchilar ko'p xato qilardi", 'Economists made many mistakes'), why: tr("Muammo — trade-offs, xato emas.", 'The issue is trade-offs, not mistakes.') },
    { text: tr("Iqtisodchilar juda qimmat edi", 'Economists were too expensive'), why: tr("Kitob bunday demaydi.", 'The book says no such thing.') },
    { text: tr("U iqtisodchilarni yoqtirmasdi", 'He disliked economists'), why: tr("U Council of Economic Advisers'dan foydalangan.", 'He used the Council of Economic Advisers.') },
  ], 'new'),
  "s-2-2c": { id: "ch02.check.2-2c", chapter: C, kind: "tf", source: "new", topic: tr("Siyosat", 'Policy'), prompt: tr("Real hayotda prezident iqtisodchilar tavsiya qilgan eng yaxshi siyosatni darhol amalga oshiradi.", 'In real life, the president immediately enacts the best policy economists recommend.'), answer: false, why: tr("Darslik siyosatni “xayrixoh va qudratli qirol” yaratgandek ko'radi. Haqiqatda kommunikatsiya, matbuot, Kongress va siyosiy maslahatchilar fikri ham bor — iqtisodchi maslahati murakkab retseptning bir ingrediyenti.", "Textbooks treat policy as if made by a “benevolent and powerful king.” In reality communications, the press, Congress, and political advisers all weigh in — an economist's advice is one ingredient in a complex recipe.") },
  "s-2-3a": mk("ch02.check.2-3a", tr("Kelishmovchilik", 'Disagreement'), tr("Daromad solig'i o'rniga iste'mol solig'i bo'yicha bahsda iqtisodchilar nimada kelishmaydi?", 'In the debate over replacing the income tax with a consumption tax, what do economists disagree about?'), [
    { text: tr("Jamg'arma soliq rag'batlariga qanchalik javob berishida — ya'ni pozitiv parametr hajmida", 'How much saving responds to tax incentives — that is, the size of a positive parameter'), correct: true, why: tr("Turli pozitiv qarashlar turli normativ xulosalarga olib keladi.", 'Different positive views lead to different normative conclusions.') },
    { text: tr("Faqat qadriyatlarda", 'Only about values'), why: tr("Bu misol ilmiy baho farqiga misol.", 'This example is a difference in scientific judgment.') },
    { text: tr("Soliqlar kerakmi-yo'qmi", 'Whether taxes are needed at all'), why: tr("Ikkala tomon ham soliq kerak deydi.", 'Both sides say taxes are needed.') },
    { text: tr("Hech narsada", 'Nothing'), why: tr("Ular kelishmaydi.", 'They do disagree.') },
  ], 'new'),
  "s-2-3b": { id: "ch02.check.2-3b", chapter: C, kind: "numeric", source: "new", topic: tr("Qadriyatlar", 'Values'), prompt: tr("Jack $40,000 daromad bilan $6,000 soliq to'laydi. Bu daromadining necha foizi?", 'Jack earns $40,000 and pays $6,000 in taxes. What percentage of his income is that?'), answer: 15, tolerance: 0, unit: "%", why: tr("6,000 / 40,000 = 15%. Jill: 15,000 / 150,000 = 10%. Bu adolatlimi — fan emas, **qadriyatlar** masalasi.", '6,000 / 40,000 = 15%. Jill: 15,000 / 150,000 = 10%. Whether this is fair is a question not of science but of **values**.') },
  "s-2-3c": { id: "ch02.check.2-3c", chapter: C, kind: "numeric", source: "new", topic: tr("Konsensus", 'Consensus'), prompt: tr("“A ceiling on rents reduces the quantity and quality of housing available” — iqtisodchilarning necha foizi rozi bo'lgan?", '“A ceiling on rents reduces the quantity and quality of housing available” — what percentage of economists agreed?'), answer: 93, tolerance: 0, unit: "%", why: tr("93% — tariflar va kvotalar haqidagi da'voga ham 93% rozi. Iqtisodchilar o'ylanganidan ko'proq kelishadi.", '93% — and 93% also agree with the statement about tariffs and quotas. Economists agree more than people think.') },
};

export const practice: Question[] = [
  { id: "ch02.new.larry-a", chapter: C, kind: "numeric", source: "new", topic: "Problem 4", prompt: tr("Larry (soatiga 1 maysazor yoki 1 mashina), Moe (1 yoki 2), Curly (2 yoki 1), har biri kuniga 10 soat. Hammasi faqat maysazor o'rsa (A), nechta maysazor?", 'Larry (1 lawn or 1 car per hour), Moe (1 or 2), and Curly (2 or 1) each work 10 hours a day. If they all mow lawns (A), how many lawns?'), answer: 40, tolerance: 0, why: tr("10 + 10 + 20 = 40 maysazor, 0 mashina.", '10 + 10 + 20 = 40 lawns, 0 cars.') },
  { id: "ch02.new.larry-d", chapter: C, kind: "numeric", source: "new", topic: "Problem 4", prompt: tr("D: Larry vaqtining yarmini har biriga, Moe faqat mashina yuvadi, Curly faqat maysazor o'radi. Nechta mashina yuviladi?", 'D: Larry splits his time in half, Moe only washes cars, Curly only mows lawns. How many cars are washed?'), answer: 25, tolerance: 0, why: tr("Larry 5 + Moe 20 = 25 mashina; maysazor: Larry 5 + Curly 20 = 25. D samarali, C (20, 20) esa samarasiz.", 'Larry 5 + Moe 20 = 25 cars; lawns: Larry 5 + Curly 20 = 25. D is efficient, while C (20, 20) is inefficient.') },
  mk("ch02.new.larry-ineff", "Problem 4", tr("A, B, C, D taqsimotlaridan qaysi biri samarasiz?", 'Which of the allocations A, B, C, D is inefficient?'), [
    { text: tr("C — hammasi yarim-yarim (20 maysazor, 20 mashina): Curly mashina, Moe maysazor bilan ham band; 20 maysazor bilan 30 mashina yuvish mumkin edi", 'C — everyone half and half (20 lawns, 20 cars): Curly washes cars and Moe mows lawns too; with 20 lawns, 30 cars could have been washed'), correct: true, why: tr("Har kim qiyosiy ustunligiga ixtisoslashsa (Curly — maysazor, Moe — mashina), ko'proq ishlab chiqariladi.", 'If everyone specializes in their comparative advantage (Curly — lawns, Moe — cars), more gets produced.') },
    { text: "D", why: tr("D (25, 25) chegara ustida.", 'D (25, 25) is on the frontier.') },
    { text: "A", why: tr("A — chegaraning chekka nuqtasi (40, 0).", 'A is an end point of the frontier (40, 0).') },
    { text: tr("Hech qaysi", 'None'), why: tr("C samarasiz.", 'C is inefficient.') },
  ], 'new'),
  mk("ch02.new.cows", "Review 6", tr("Sut va pechene ishlab chiqaradigan iqtisodiyotda kasallik sigirlarning yarmini o'ldirdi. PPF ga nima bo'ladi?", 'In an economy producing milk and cookies, a disease kills half the cows. What happens to the PPF?'), [
    { text: tr("Ichkariga siljiydi — ayniqsa sut o'qida: endi har qanday pechene miqdorida kamroq sut ishlab chiqariladi", 'It shifts inward — especially along the milk axis: less milk can now be made at any quantity of cookies'), correct: true, why: tr("Resurs (sigirlar) kamaydi → imkoniyatlar to'plami qisqaradi.", 'A resource (cows) shrank → the set of possibilities contracts.') },
    { text: tr("Tashqariga siljiydi", 'It shifts outward'), why: tr("Bu o'sishda bo'ladi.", 'That happens with growth.') },
    { text: tr("O'zgarmaydi, faqat nuqta ichkariga ko'chadi", "It doesn't change; the point just moves inside"), why: tr("Resurs yo'qolsa, chegaraning o'zi o'zgaradi.", 'When a resource is lost, the frontier itself changes.') },
    { text: tr("Faqat pechene o'qi o'zgaradi", 'Only the cookie axis changes'), why: tr("Sigirlar sut ishlab chiqaradi.", 'Cows produce milk.') },
  ], 'new'),
  mk("ch02.new.peace", "Problem 2d", tr("Hawks (kuchli armiya) va Doves (kichik armiya) qurolni bir xil miqdorda kamaytirsa, kim kattaroq “peace dividend” (sariyog' o'sishi) oladi?", 'If Hawks (a strong military) and Doves (a small military) cut weapons by the same amount, who gets the bigger “peace dividend” (increase in butter)?'), [
    { text: tr("Hawks — ular PPF ning qurol ko'p, tik qismida: u yerda qurolning imkoniyat xarajati (sariyog'da) yuqori", 'Hawks — they are on the steep, weapons-heavy part of the PPF, where the opportunity cost of weapons (in butter) is high'), correct: true, why: tr("Bo'rtgan PPF: qurol ko'p bo'lganda bir birlik qurol ko'p sariyog'ga teng.", 'On a bowed-out PPF, when weapons are plentiful one unit of weapons is worth a lot of butter.') },
    { text: "Doves", why: tr("Doves yotiq qismda — u yerda qurol kamaytirish kam sariyog' beradi.", 'Doves are on the flat part, where cutting weapons yields little butter.') },
    { text: "Teng", why: tr("Faqat PPF to'g'ri chiziq bo'lsa teng bo'lardi.", 'They would be equal only if the PPF were a straight line.') },
    { text: "Hech kim", why: tr("Qurol kamaysa, sariyog' ko'payadi.", 'With fewer weapons, butter rises.') },
  ], 'new'),
  { id: "ch02.new.slope", chapter: C, kind: "numeric", source: "new", topic: tr("Nishab", 'Slope'), prompt: tr("Emma (daromad $40,000): (5 ta, $10) va (25 ta, $5) nuqtalari orasidagi nishab?", 'Emma (income $40,000): what is the slope between the points (5 novels, $10) and (25 novels, $5)?'), answer: -0.25, tolerance: 0.001, why: tr("(5 − 10) / (25 − 5) = −5/20 = −1/4. To'g'ri chiziqda istalgan ikki nuqta bir xil nishab beradi.", '(5 − 10) / (25 − 5) = −5/20 = −1/4. On a straight line any two points give the same slope.'), traps: [{ value: -4, why: tr("Δx/Δy ni hisobladingiz — nishab Δy/Δx.", 'You computed Δx/Δy — slope is Δy/Δx.') }, { value: 0.25, why: tr("Ishora: chiziq pastga qaragan → manfiy.", 'Sign: the line slopes down → negative.') }] },
  mk("ch02.new.shift", "Movement vs shift", tr("Kutubxona yopildi, Emma barcha kitoblarni sotib olishi kerak. Grafikda nima bo'ladi?", 'The library closes, so Emma must buy all her books. What happens on the graph?'), [
    { text: tr("Talab egri chizig'i o'ngga siljiydi — kutubxona o'qlarda yo'q", 'The demand curve shifts right — the library is not on the axes'), correct: true, why: tr("O'qlarda ko'rsatilmagan o'zgaruvchi o'zgarsa — egri siljiydi.", 'When a variable not shown on the axes changes, the curve shifts.') },
    { text: tr("Egri bo'ylab pastga harakat", 'A movement down along the curve'), why: tr("Bu faqat roman narxi o'zgarganda.", 'That happens only when the price of novels changes.') },
    { text: tr("Egri chapga siljiydi", 'The curve shifts left'), why: tr("Emma har narxda **ko'proq** roman oladi.", 'Emma buys **more** novels at every price.') },
    { text: tr("Hech narsa", 'Nothing'), why: tr("Talab o'zgaradi.", 'Demand changes.') },
  ], 'new'),
  mk("ch02.new.minivan", tr("Sababiyat", 'Causation'), tr("Miniven sotib olish bola tug'ilishidan oldin bo'ladi. Bu nimani ko'rsatadi?", 'People buy a minivan before a baby is born. What does this show?'), [
    { text: tr("Qaysi o'zgaruvchi oldin o'zgarganiga qarash sababni isbotlamaydi — odamlar kutishlarga javob beradi (reverse causality xavfi)", 'Looking at which variable moves first does not prove causation — people respond to expectations (a reverse-causality trap)'), correct: true, why: tr("Miniven bola tug'ilishiga sabab emas.", "The minivan doesn't cause the birth.") },
    { text: tr("Minivenlar tug'ilishni oshiradi", 'Minivans raise birth rates'), why: tr("Klassik xato.", 'A classic mistake.') },
    { text: tr("Omitted variable yo'q", 'There is no omitted variable'), why: tr("Asosiy saboq — vaqt tartibi sababni isbotlamaydi.", 'The main lesson is that timing does not prove causation.') },
    { text: tr("Korrelyatsiya yo'q", 'There is no correlation'), why: tr("Korrelyatsiya bor, sababiyat — teskari.", 'There is a correlation; the causation runs the other way.') },
  ], 'new'),
  { id: "ch02.new.tf-positive", chapter: C, kind: "tf", source: "new", topic: tr("Pozitiv/normativ", 'Positive/normative'), prompt: tr("“Positive statement” — optimistik, ijobiy fikr degani.", 'A “positive statement” means an optimistic, upbeat view.'), answer: false, why: tr("Positive = **descriptive** (tasvirlaydi), optimizm bilan bog'liq emas. “Ishsizlik oshadi” ham positive statement.", 'Positive = **descriptive**, unrelated to optimism. “Unemployment will rise” is a positive statement too.') },
  mk("ch02.new.uz", tr("O'zbekistondan misol", 'An example from Uzbekistan'), tr("“O'zbekiston paxta eksportini kamaytirib, to'qimachilikni rivojlantirishi kerak.” Bu qanday da'vo?", '“Uzbekistan should cut cotton exports and develop its textile industry.” What kind of statement is this?'), [
    { text: tr("Normativ — “kerak” so'zi bor, faqat ma'lumotlar bilan baholab bo'lmaydi", 'Normative — it contains “should” and cannot be judged by data alone'), correct: true, why: tr("Lekin pozitiv tahlil (masalan, to'qimachilik qancha ish o'rni beradi) normativ xulosaga ta'sir qiladi.", 'But positive analysis (for example, how many jobs textiles would create) feeds into the normative conclusion.') },
    { text: tr("Pozitiv", 'Positive'), why: tr("Dunyo qanday bo'lishi kerakligini aytyapti.", 'It says how the world ought to be.') },
    { text: tr("Makroiqtisodiy fakt", 'A macroeconomic fact'), why: tr("Bu — tavsiya.", 'It is a recommendation.') },
    { text: "Model", why: tr("Bu da'vo.", "That's a claim.") },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
