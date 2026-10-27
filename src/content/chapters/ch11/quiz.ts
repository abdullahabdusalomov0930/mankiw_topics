import type { Question } from '../../types';
import { tr } from '../../../lib/lang';

const C = 11;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });
const pairs = ['private goods and club goods', 'private goods and common resources', 'public goods and club goods', 'public goods and common resources'];
const goods = ['residential housing', 'national defense', 'restaurant meals', 'fish in the ocean'];
const fates = ['efficiently provided by market forces.', 'underprovided in the absence of government.', 'overused in the absence of government.', 'a type of natural monopoly.'];

export const quickQuiz: Question[] = [
  mk("ch11.qq.1", tr("Tovar turlari", 'Types of goods'), "Which categories of goods are excludable?", pairs.map((p, i) => ({
    text: p,
    correct: i === 0,
    why: i === 0 ? tr("Xususiy va klub tovarlaridan to'lamaganni chetlatish mumkin (muzqaymoq, sun'iy yo'ldosh TV).", 'Nonpayers can be excluded from private and club goods (ice cream, satellite TV).') : tr("Jamoat tovarlari va umumiy resurslar **not excludable**.", 'Public goods and common resources are **not excludable**.'),
  }))),
  mk("ch11.qq.2", tr("Tovar turlari", 'Types of goods'), "Which categories of goods are rival in consumption?", pairs.map((p, i) => ({
    text: p,
    correct: i === 1,
    why: i === 1 ? tr("Xususiy tovarlar va umumiy resurslar rival: siz olgan baliq boshqaga qolmaydi.", "Private goods and common resources are rival: the fish you catch isn't left for anyone else.") : tr("Klub va jamoat tovarlari **not rival**.", 'Club and public goods are **not rival**.'),
  }))),
  mk("ch11.qq.3", tr("Jamoat tovarlari", 'Public goods'), "Which is a public good?", goods.map((g, i) => ({
    text: g,
    correct: i === 1,
    why: ["Uy-joy — xususiy tovar.", "Mudofaa — na excludable, na rival.", tr("Restoran ovqati — xususiy tovar.", 'A restaurant meal is a private good.'), tr("Okeandagi baliq — umumiy resurs (rival).", 'Fish in the ocean are a common resource (rival).')][i],
  }))),
  mk("ch11.qq.4", tr("Jamoat tovarlari", 'Public goods'), "Public goods are", fates.map((f, i) => ({
    text: f,
    correct: i === 1,
    why: [tr("Free-rider muammosi tufayli bozor ularni samarali ta'minlamaydi.", "Because of the free-rider problem, the market doesn't provide them efficiently."), tr("Free-rider muammosi: bozor ularni **kam** ta'minlaydi; davlat soliq bilan ta'minlashi mumkin.", 'The free-rider problem: the market provides them **too little**; the government can provide them out of taxes.'), tr("Haddan tashqari ishlatish — umumiy resurslar muammosi.", 'Overuse is the problem of common resources.'), tr("Tabiiy monopoliya — klub tovarlari.", 'Natural monopoly — club goods.')][i],
  }))),
  mk("ch11.qq.5", tr("Xarajat–foyda", 'Cost–benefit'), "Smallville: Clark values a fireworks display at $80, Lana at $50, and Pete (who dislikes fireworks) at −$30. Fireworks cost $120, or $40 per person. The efficient outcome is for the village", [
    { text: "to provide the public good because the median person values it more than its cost per person.", why: tr("Mediana emas — **jami** qiymat muhim.", 'Not the median — the **total** value matters.') },
    { text: "to provide the public good because a majority of the residents value it more than its cost per person.", why: tr("Ko'pchilik ovozi samaradorlikni kafolatlamaydi.", "Majority voting doesn't guarantee efficiency.") },
    { text: "to provide the public good because the total value of a majority exceeds the total cost.", why: tr("Pete'ning salbiy qiymati ham hisobga olinishi kerak.", "Pete's negative value must also be counted.") },
    { text: "not to provide the public good because the total value of all residents is less than the total cost.", correct: true, why: "80 + 50 − 30 = $100 < $120." },
  ]),
  mk("ch11.qq.6", tr("Umumiy resurslar", 'Common resources'), "Which of the following is an example of a common resource?", goods.map((g, i) => ({
    text: g,
    correct: i === 3,
    why: [tr("Xususiy tovar.", 'A private good.'), tr("Jamoat tovari.", 'A public good.'), tr("Xususiy tovar.", 'A private good.'), tr("Rival, lekin ovlashni to'xtatish qiyin — umumiy resurs.", 'Rival, but fishing is hard to stop — a common resource.')][i],
  }))),
  mk("ch11.qq.7", tr("Umumiy resurslar", 'Common resources'), "Common resources are", fates.map((f, i) => ({
    text: f,
    correct: i === 2,
    why: [tr("Bozor ularni haddan tashqari ishlatadi.", 'The market overuses them.'), tr("Kam ta'minlash — jamoat tovarlari muammosi.", 'Underprovision is the problem of public goods.'), tr("Tragedy of the Commons: har kim boshqalarga zararni hisobga olmaydi → **ortiqcha** foydalanish.", 'The Tragedy of the Commons: each ignores the harm to others → **overuse**.'), tr("Bu klub tovarlari.", 'Those are club goods.')][i],
  }))),
  mk("ch11.qq.8", tr("Yo'l to'lovi", 'Road tolls'), "The Mass Pike is a toll road that is congested only during rush hour. During other times of day, the use of the highway is not ________, so the efficient toll is ________.", [
    { text: "excludable; higher", why: tr("Pullik yo'l — excludable.", 'A toll road is excludable.') },
    { text: "excludable; zero", why: tr("Pullik yo'l — excludable.", 'A toll road is excludable.') },
    { text: "rival in consumption; higher", why: tr("Rival bo'lmasa, tashqi effekt yo'q — to'lov oshmasligi kerak.", "If it isn't rival there is no externality — the toll shouldn't rise.") },
    { text: "rival in consumption; zero", correct: true, why: tr("Tirbandlik bo'lmasa, qo'shimcha mashina hech kimga zarar qilmaydi → samarali to'lov nol.", 'Without congestion an extra car harms no one → the efficient toll is zero.') },
  ]),
];

export const checks: Record<string, Question> = {
  "s-11-1": { id: "ch11.check.11-1", chapter: C, kind: "match", source: "new", topic: tr("Tovar turlari", 'Types of goods'), prompt: tr("Tovarni turi bilan moslashtiring.", 'Match each good with its type.'), pairs: [
    { left: tr("Muzqaymoq", 'Ice cream'), right: "Private good" },
    { left: tr("Tornado sirenasi", 'A tornado siren'), right: "Public good" },
    { left: tr("Okeandagi baliq", 'Fish in the ocean'), right: "Common resource" },
    { left: tr("Sun'iy yo'ldosh TV", 'Satellite TV'), right: "Club good" },
  ] },
  "s-11-2a": { id: "ch11.check.11-2a", chapter: C, kind: "numeric", source: "new", topic: "Free rider", prompt: tr("Smalltown: 500 aholi, har biri mushakbozlikni $10 ga baholaydi, xarajat $1,000. Davlat har kimdan teng soliq olsa, har bir aholi sof qancha yutadi?", 'Smalltown: 500 residents, each values the fireworks at $10, the cost is $1,000. If the government taxes everyone equally, how much does each resident gain net?'), answer: 8, tolerance: 0, unit: "$", why: tr("Soliq 1000/500 = $2; yutuq 10 − 2 = $8.", 'Tax 1000/500 = $2; gain 10 − 2 = $8.'), traps: [{ value: 10, why: tr("Soliqni ayirishni unutdingiz.", 'You forgot to subtract the tax.') }] },
  "s-11-2b": mk("ch11.check.11-2b", tr("Jamoat tovarlari", 'Public goods'), tr("Nega xususiy firmalar fundamental tadqiqotga kam pul sarflaydi?", 'Why do private firms spend little on basic research?'), [
    { text: tr("Umumiy bilim (teorema) patentlanmaydi — firmalar boshqalar yaratgan bilimdan bepul foydalanishni afzal ko'radi (free ride)", "General knowledge (a theorem) can't be patented — firms prefer to use knowledge created by others for free (free ride)"), correct: true, why: tr("Shuning uchun davlat NIH, NSF orqali fundamental tadqiqotni subsidiyalaydi.", 'That is why the government subsidizes basic research through the NIH and NSF.') },
    { text: tr("Tadqiqot foydasiz", 'Research is useless'), why: tr("Foydasi katta, lekin uni o'zlashtirib bo'lmaydi.", "Its benefits are large, but they can't be captured.") },
    { text: tr("Patentlar juda uzoq", 'Patents are too long'), why: tr("Muammo — patentlab bo'lmasligida.", "The problem is that it can't be patented.") },
    { text: tr("Tadqiqot rival", 'Research is rival'), why: "Bilim not rival." },
  ], 'new'),
  "s-11-2c": { id: "ch11.check.11-2c", chapter: C, kind: "numeric", source: "new", topic: tr("Hayot qiymati", 'The value of life'), prompt: tr("Svetofor $10,000 turadi, halokat xavfini 1.6% dan 1.1% ga kamaytiradi. Hayot qiymati $10 mln. Kutilgan foyda necha dollar?", 'A traffic light costs $10,000 and cuts the risk of a fatal accident from 1.6% to 1.1%. The value of a life is $10 million. What is the expected benefit in dollars?'), answer: 50000, tolerance: 0, unit: "$", why: tr("0.005 × $10,000,000 = $50,000 > $10,000 → o'rnating.", '0.005 × $10,000,000 = $50,000 > $10,000 → install it.'), traps: [{ value: 5000000, why: tr("0.5 ni foiz sifatida emas, ulush sifatida oldingiz: 0.5% = 0.005.", 'You took 0.5 as a fraction rather than a percent: 0.5% = 0.005.') }] },
  "s-11-3a": mk("ch11.check.11-3a", "Tragedy of the Commons", tr("Umumiy yaylov fojiasining asosiy sababi nima?", 'What is the main cause of the tragedy of the common pasture?'), [
    { text: tr("Har oila o'z qo'ylari boshqalar uchun yaylovni yomonlashtirishini (salbiy tashqi effekt) hisobga olmaydi", 'Each family ignores that its sheep make the pasture worse for others (a negative externality)'), correct: true, why: tr("Xususiy va ijtimoiy rag'batlar farq qiladi.", 'Private and social incentives differ.') },
    { text: tr("Cho'ponlar ratsional emas", 'The shepherds are irrational'), why: tr("Har biri o'zi uchun ratsional harakat qiladi.", 'Each acts rationally for itself.') },
    { text: tr("Yaylov juda kichik edi", 'The pasture was too small'), why: tr("Muammo — narx yo'qligi, hajm emas.", 'The problem is the absence of a price, not the size.') },
    { text: tr("Jun narxi past", 'The price of wool is low'), why: tr("Bog'liq emas.", 'Unrelated.') },
  ], 'new'),
  "s-11-3b": { id: "ch11.check.11-3b", chapter: C, kind: "tf", source: "new", topic: tr("Umumiy resurslar", 'Common resources'), prompt: tr("Mol go'shtiga talab katta bo'lgani uchun sigirlar yo'qolib ketmaydi, fil suyagiga talab esa fillarni xavf ostiga qo'yadi — chunki sigir xususiy tovar, fil esa umumiy resurs.", 'Cows are not going extinct despite high demand for beef, while demand for ivory endangers elephants — because a cow is a private good and an elephant a common resource.'), answer: true, why: tr("Ranchodagi sigirlarning egasi bor; fillar egasiz yuradi. Botsvana, Namibiya kabi davlatlar fillarni xususiy tovarga aylantirgach, ba'zi populyatsiyalar o'sa boshladi.", 'Cows on a ranch have owners; elephants roam ownerless. When countries such as Botswana and Namibia turned elephants into private goods, some populations began to grow.') },
};

export const practice: Question[] = [
  { id: "ch11.new.movies-n", chapter: C, kind: "numeric", source: "new", topic: "Problem 5", prompt: tr("To'rt xonadosh: 1-film uchun WTP 7+5+3+2, 2-film 6+4+2+1, 3-film 5+3+1+0, 4-film 4+2+0+0, 5-film 3+1+0+0. Har bir film $8 turadi. Total surplusni maksimal qiladigan filmlar soni?", 'Four roommates: WTP for movie 1 is 7+5+3+2, movie 2 6+4+2+1, movie 3 5+3+1+0, movie 4 4+2+0+0, movie 5 3+1+0+0. Each movie costs $8. How many movies maximize total surplus?'), answer: 3, tolerance: 0, why: tr("Jami WTP: 17, 13, 9, 6, 4. $8 dan katta — dastlabki 3 ta.", 'Total WTP: 17, 13, 9, 6, 4. Greater than $8 — the first 3.'), traps: [{ value: 2, why: tr("3-film: 9 > 8 — u ham foydali.", "Movie 3: 9 > 8 — it's worthwhile too.") }] },
  { id: "ch11.new.movies-chris", chapter: C, kind: "numeric", source: "new", topic: "Problem 5c", prompt: tr("3 film va xarajat teng bo'linadi ($6 har kishiga). Chris'ning surplusi (manfiy bo'lishi mumkin)?", "3 movies, and the cost is split equally ($6 each). What is Chris's surplus (it may be negative)?"), answer: -3, tolerance: 0, unit: "$", why: tr("Chris: 2 + 1 + 0 = 3 − 6 = −3. Dwayne +12, Javier +6, Salman 0.", 'Chris: 2 + 1 + 0 = 3 − 6 = −3. Dwayne +12, Javier +6, Salman 0.') },
  mk("ch11.new.bayport", "Problem 7", tr("Bayport: Frank $50, Joe $100, Callie $300; mushakbozlik $360, teng ulush. Nima bo'ladi?", 'Bayport: Frank $50, Joe $100, Callie $300; fireworks cost $360, equal shares. What happens?'), [
    { text: tr("CBA: 450 > 360 → quring; lekin ovoz: faqat Callie ($300 > $120) “ha” → o'tmaydi", 'CBA: 450 > 360 → build; but the vote: only Callie ($300 > $120) votes “yes” → it fails'), correct: true, why: tr("Ko'pchilik ovozi qiymatlarning kuchini hisobga olmaydi.", 'Majority voting ignores the strength of values.') },
    { text: tr("Ikkalasi ham “ha”", 'Both say “yes”'), why: tr("Joe ($100 < $120) va Frank qarshi.", 'Joe ($100 < $120) and Frank are against.') },
    { text: tr("Ikkalasi ham “yo'q”", 'Both say “no”'), why: "Jami 450 > 360." },
    { text: tr("CBA “yo'q”, ovoz “ha”", 'The CBA says “no,” the vote says “yes”'), why: "Bu River Heights holati." },
  ], 'new'),
  mk("ch11.new.river", "Problem 7", tr("River Heights: Nancy $20, Bess $140, Ned $160; xarajat $360. Nima bo'ladi?", 'River Heights: Nancy $20, Bess $140, Ned $160; the cost is $360. What happens?'), [
    { text: tr("CBA: 320 < 360 → qurmang; ovoz: Bess va Ned (> $120) “ha” → o'tadi — samarasiz natija", "CBA: 320 < 360 → don't build; vote: Bess and Ned (> $120) vote “yes” → it passes — an inefficient outcome"), correct: true, why: tr("Ovoz va samaradorlik bu yerda ham mos kelmaydi.", 'Voting and efficiency diverge here too.') },
    { text: tr("Ikkalasi ham “ha”", 'Both say “yes”'), why: tr("Jami qiymat xarajatdan kam.", 'Total value is below cost.') },
    { text: tr("CBA “ha”, ovoz “yo'q”", 'The CBA says “yes,” the vote says “no”'), why: tr("Bu Bayport.", "That's Bayport.") },
    { text: tr("Ikkalasi ham “yo'q”", 'Both say “no”'), why: tr("Ikki kishi ulushdan ko'p qadrlaydi.", 'Two people value it above their share.') },
  ], 'new'),
  mk("ch11.new.wifi", "Problem 4", tr("Aeroportdagi bepul Wi-Fi'dan ko'p odam foydalana boshlab, tezlik tushdi. Endi bu qanday tovar?", 'So many people started using the free airport Wi-Fi that it slowed down. What kind of good is it now?'), [
    { text: tr("Umumiy resurs — not excludable, lekin endi rival; yechim: to'lov yoki parol bilan cheklash", 'A common resource — not excludable but now rival; the solution: a fee or a password'), correct: true, why: tr("Oldin (kam foydalanuvchi) jamoat tovari edi.", 'Before (with few users) it was a public good.') },
    { text: tr("Jamoat tovari", 'A public good'), why: tr("Tezlik tushdi — rival bo'ldi.", 'It slowed down — it has become rival.') },
    { text: tr("Klub tovari", 'A club good'), why: tr("Bepul — excludable emas.", "It's free — not excludable.") },
    { text: tr("Xususiy tovar", 'A private good'), why: tr("Bepul — excludable emas.", "It's free — not excludable.") },
  ], 'new'),
  { id: "ch11.new.tf-toll", chapter: C, kind: "tf", source: "new", topic: tr("Tirbandlik", 'Congestion'), prompt: tr("Benzin solig'i tirbandlikka qarshi mukammal vosita: u faqat tirband yo'llarda haydashni kamaytiradi.", 'A gasoline tax is a perfect tool against congestion: it reduces driving only on congested roads.'), answer: false, why: tr("U bo'sh yo'llarda haydashni ham kamaytiradi (u yerda tashqi effekt yo'q) va elektromobillar keltirgan tirbandlikni qamramaydi. Tirbandlik to'lovi (London, Stokgolm) aniqroq.", "It also reduces driving on empty roads (where there's no externality) and doesn't cover congestion caused by electric cars. A congestion charge (London, Stockholm) is more precise.") },
  { id: "ch11.new.tf-ate", chapter: C, kind: "tf", source: "new", topic: "Ask the Experts", prompt: tr("IGM so'rovida iqtisodchilarning 98% tirband transport tarmoqlarida ko'proq tirbandlik to'lovlari (va boshqa soliqlarni kamaytirish) fuqarolarni boyitadi degan fikrga qo'shilgan.", 'In an IGM survey 98% of economists agreed that more congestion charges on congested transport networks (with other taxes reduced) would make citizens better off.'), answer: true, why: "98% agree, 2% uncertain, 0% disagree (IGM, 2012)." },
  mk("ch11.new.litter", "Problem 8", tr("Nega katta yo'llar bo'yida axlat ko'p, odamlarning hovlisida esa kam?", "Why is there so much litter along highways but little in people's yards?"), [
    { text: tr("Hovli — xususiy mulk, egasi toza saqlashga rag'batli; yo'l bo'yi — umumiy resurs, hech kim uning uchun javobgar emas", 'A yard is private property and its owner has an incentive to keep it clean; a roadside is a common resource and no one is responsible for it'), correct: true, why: tr("Mulk huquqi aniq bo'lmasa — Tragedy of the Commons.", 'Without clear property rights — the Tragedy of the Commons.') },
    { text: tr("Yo'lda odam ko'p", 'There are many people on the road'), why: tr("Asosiy sabab — mulk huquqi.", 'The main reason is property rights.') },
    { text: tr("Axlat qutilari yo'q", 'There are no trash cans'), why: tr("Iqtisodiy izoh — rag'batlar.", 'The economic explanation is incentives.') },
    { text: tr("Tasodif", 'Coincidence'), why: tr("Tizimli farq.", 'A systematic difference.') },
  ], 'new'),
  mk("ch11.new.uz", tr("O'zbekistondan misol", 'An example from Uzbekistan'), tr("Orol dengizi havzasida suv ko'p yillar paxta sug'orishga cheklovsiz olingani dengizning qurishiga hissa qo'shdi. Bu qaysi tushunchaga mos?", "For many years water in the Aral Sea basin was taken without limit to irrigate cotton, contributing to the sea's drying up. Which concept fits?"), [
    { text: tr("Tragedy of the Commons — suv umumiy resurs: har bir foydalanuvchi boshqalarga zararni hisobga olmagan", 'The Tragedy of the Commons — water was a common resource: each user ignored the harm to others'), correct: true, why: tr("Yechimlar: suvga narx/kvota, samarali sug'orishga rag'bat, mintaqaviy kelishuvlar (ko'p davlat — okean kabi qiyin).", 'Solutions: a price/quota for water, incentives for efficient irrigation, regional agreements (many countries — hard, like the oceans).') },
    { text: "Free-rider muammosi", why: tr("Free rider — jamoat tovarini ta'minlashda; bu yerda ortiqcha foydalanish.", 'Free riding is about providing a public good; this is overuse.') },
    { text: tr("Klub tovari", 'A club good'), why: tr("Suv olishdan chetlatilmagan.", 'No one was excluded from taking water.') },
    { text: tr("Monopoliya", 'Monopoly'), why: tr("Muammo — narx yo'qligi.", 'The problem is the absence of a price.') },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
