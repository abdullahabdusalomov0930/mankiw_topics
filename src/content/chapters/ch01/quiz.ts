import type { Question } from '../../types';
import { tr } from '../../../lib/lang';

const C = 1;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch01.qq.1", tr("Iqtisodiyot ta'rifi", 'Definition of economics'), "Economics is best defined as the study of", [
    { text: "how society manages its scarce resources.", correct: true, why: tr("Kitob ta'rifi: iqtisodiyot — jamiyat **cheklangan resurslarni** qanday boshqarishi haqidagi fan.", "The book's definition: economics is the study of how society manages its **scarce resources**.") },
    { text: "how to run a business most profitably.", why: tr("Bu biznes boshqaruvi; iqtisodiyot ancha keng — uy xo'jaliklari, davlat, butun iqtisodiyot.", 'That is business management; economics is much broader — households, government, the whole economy.') },
    { text: "how to predict inflation, unemployment, and stock prices.", why: tr("Bular iqtisodiyot o'rganadigan mavzularning bir qismi, ta'rif emas.", 'These are some topics economics studies, not its definition.') },
    { text: "how the government can protect people from unchecked self-interest.", why: tr("Iqtisodiyot shaxsiy manfaat ko'pincha bozor orqali **foydali** natija berishini ham ko'rsatadi (ko'rinmas qo'l).", 'Economics also shows that self-interest often leads to **good** outcomes through markets (the invisible hand).') },
  ]),
  mk("ch01.qq.2", tr("Imkoniyat xarajati", 'Opportunity cost'), "Your opportunity cost of going to a movie is", [
    { text: "the price of the ticket.", why: tr("Vaqtingiz qiymati unutildi.", 'You forgot the value of your time.') },
    { text: "the price of the ticket plus the cost of any soda and popcorn you buy at the theater.", why: tr("Hali ham vaqt qiymati yo'q — u ko'pincha eng katta xarajat.", 'Still no value of time — and it is often the biggest cost.') },
    { text: "the total cash expenditure needed to go to the movie plus the value of your time.", correct: true, why: tr("Imkoniyat xarajati — voz kechilgan **hamma narsa**: pul ham, o'sha vaqtda qila oladigan eng yaxshi ish ham.", 'Opportunity cost is **everything** given up: the money and the best thing you could have done with that time.') },
    { text: "zero, as long as you enjoy the movie and consider it a worthwhile use of time and money.", why: tr("Zavq — **foyda**; xarajat baribir mavjud. Foyda xarajatdan katta bo'lgani uchun borasiz.", 'Enjoyment is the **benefit**; the cost is still there. You go because the benefit exceeds the cost.') },
  ]),
  mk("ch01.qq.3", tr("Marjinal o'zgarish", 'Marginal change'), "A marginal change is one that", [
    { text: "is not important for public policy.", why: tr("Marjinal tahlil siyosatda juda muhim.", 'Marginal analysis matters a great deal in policy.') },
    { text: "incrementally alters an existing plan.", correct: true, why: tr("Marginal change — mavjud rejaga **kichik, qo'shimcha** tuzatish (“margin” = chekka).", 'A marginal change is a **small, incremental** adjustment to an existing plan (“margin” = edge).') },
    { text: "makes an outcome inefficient.", why: tr("Samaradorlik bilan bevosita bog'liq emas.", 'Not directly related to efficiency.') },
    { text: "does not influence incentives.", why: tr("Rag'batlar aynan marjinal foyda/xarajatni o'zgartiradi.", 'Incentives change exactly the marginal benefits and costs.') },
  ]),
  mk("ch01.qq.4", tr("Rag'batlar", 'Incentives'), "Because people respond to incentives,", [
    { text: "policymakers can alter outcomes by changing punishments or rewards.", why: tr("To'g'ri, lekin yagona to'g'ri javob emas.", 'True, but not the only right answer.') },
    { text: "policies can have unintended consequences.", why: tr("To'g'ri (xavfsizlik kamari — Peltzman), lekin yagona emas.", 'True (seat belts — Peltzman), but not the only one.') },
    { text: "society faces a trade-off between efficiency and equality.", why: tr("To'g'ri: qayta taqsimlash mehnat rag'batini pasaytiradi — lekin yagona emas.", 'True: redistribution weakens the incentive to work — but not the only one.') },
    { text: "All of the above are correct.", correct: true, why: tr("Uchala natija ham rag'batlarga javobdan kelib chiqadi.", 'All three outcomes come from people responding to incentives.') },
  ]),
  mk("ch01.qq.5", "Savdo", "International trade benefits a nation when", [
    { text: "its revenue from selling abroad exceeds its outlays from buying abroad.", why: tr("Savdo foydasi eksport importdan oshishiga bog'liq emas.", 'The gains from trade do not depend on exports exceeding imports.') },
    { text: "its trading partners experience reduced economic well-being.", why: tr("Savdo — “yutish/yutqazish” o'yini emas; ikkala tomon ham yutadi.", 'Trade is not a win-or-lose game; both sides gain.') },
    { text: "all nations specialize in doing what they do best.", correct: true, why: tr("Savdo har kimga eng yaxshi qiladigan ishiga ixtisoslashish va ko'proq tovarni arzonroq olish imkonini beradi.", 'Trade lets everyone specialize in what they do best and get more goods more cheaply.') },
    { text: "no domestic jobs are lost because of trade.", why: tr("Ba'zi ish o'rinlari yo'qolsa ham, mamlakat umuman yutadi (9-bob).", 'Even if some jobs are lost, the country as a whole gains (Chapter 9).') },
  ]),
  mk("ch01.qq.6", tr("Ko'rinmas qo'l", 'The invisible hand'), "Adam Smith's “invisible hand” refers to", [
    { text: "the subtle and often hidden methods that businesses use to profit at consumers' expense.", why: tr("Aksincha: raqobat shaxsiy manfaatni jamiyat foydasiga yo'naltiradi.", "The opposite: competition channels self-interest toward society's benefit.") },
    { text: "the ability of competitive markets to reach desirable outcomes, despite the self-interest of market participants.", correct: true, why: tr("Narxlar orqali raqobatli bozor o'z manfaatini ko'zlaganlarni jamiyat uchun foydali natijaga olib keladi.", 'Through prices, a competitive market leads self-interested people to outcomes good for society.') },
    { text: "the ability of government regulation to benefit consumers, even if the consumers are unaware of the regulations.", why: tr("Ko'rinmas qo'l — bozor, davlat emas.", 'The invisible hand is the market, not the government.') },
    { text: "the way in which producers or consumers in unregulated markets impose costs on innocent bystanders.", why: tr("Bu **externality** — ko'rinmas qo'lning muvaffaqiyatsizligi.", 'That is an **externality** — a failure of the invisible hand.') },
  ]),
  mk("ch01.qq.7", tr("Davlat roli", 'Role of government'), "Governments may intervene in a market economy in order to", [
    { text: "protect property rights.", why: tr("To'g'ri, lekin yagona emas.", 'True, but not the only one.') },
    { text: "correct a market failure due to externalities.", why: tr("To'g'ri, lekin yagona emas.", 'True, but not the only one.') },
    { text: "achieve a more equal distribution of income.", why: tr("To'g'ri, lekin yagona emas.", 'True, but not the only one.') },
    { text: "All of the above are correct.", correct: true, why: tr("Mulk huquqini himoya qilish, samaradorlikni oshirish (bozor muvaffaqiyatsizligi) va tenglikni oshirish — davlat aralashuvining sabablari.", 'Protecting property rights, improving efficiency (market failure), and promoting equality are all reasons for government to intervene.') },
  ]),
  mk("ch01.qq.8", tr("Unumdorlik", 'Productivity'), "The main reason that some nations have higher average living standards than others is that", [
    { text: "the richer nations have exploited the poorer ones.", why: tr("Kitob: turmush darajasi farqining deyarli hammasi unumdorlik bilan izohlanadi.", 'The book: almost all of the difference in living standards is explained by productivity.') },
    { text: "the governments of some nations have created more money.", why: tr("Ko'p pul — inflyatsiya, boylik emas.", 'More money means inflation, not wealth.') },
    { text: "some nations have stronger laws protecting worker rights.", why: tr("AQSh ishchilarining “haqiqiy qahramoni” — kasaba uyushmalari emas, unumdorlik.", 'The “real hero” of American workers is productivity, not labor unions.') },
    { text: "some nations have higher levels of productivity.", correct: true, why: tr("Principle 8: turmush darajasi bir soat mehnatda qancha ishlab chiqarilishiga bog'liq.", 'Principle 8: living standards depend on how much is produced in an hour of work.') },
  ]),
  mk("ch01.qq.9", tr("Inflyatsiya", 'Inflation'), "If a nation has high and persistent inflation, the most likely explanation is", [
    { text: "the government creating excessive amounts of money.", correct: true, why: tr("Principle 9: katta va uzoq inflyatsiyaning sababi deyarli har doim pul miqdorining o'sishi.", 'Principle 9: large and persistent inflation is almost always caused by growth in the quantity of money.') },
    { text: "unions bargaining for excessively high wages.", why: tr("Bu uzoq muddatli inflyatsiyaning asosiy sababi emas.", 'That is not the main cause of long-run inflation.') },
    { text: "the government imposing excessive levels of taxation.", why: tr("Soliqlar narxlarni uzluksiz oshirib bormaydi.", 'Taxes do not keep raising prices continuously.') },
    { text: "firms using their market power to enforce excessive price hikes.", why: tr("Bozor hokimiyati narx **darajasini** bir marta oshirishi mumkin, lekin doimiy inflyatsiya bermaydi.", 'Market power can raise the price **level** once, but it cannot cause ongoing inflation.') },
  ]),
  mk("ch01.qq.10", tr("Inflyatsiya va ishsizlik", 'Inflation and unemployment'), "If a government uses the tools of monetary policy to reduce the demand for goods and services, the likely result is ________ inflation and ________ unemployment in the short run.", [
    { text: "lower; lower", why: tr("Talab kamaysa, firmalar kamroq ishchi yollaydi → ishsizlik **oshadi**.", 'When demand falls, firms hire fewer workers → unemployment **rises**.') },
    { text: "lower; higher", correct: true, why: tr("Principle 10: qisqa muddatda inflyatsiya va ishsizlik qarama-qarshi harakatlanadi.", 'Principle 10: in the short run, inflation and unemployment move in opposite directions.') },
    { text: "higher; higher", why: tr("Talab kamaysa, narxlar sekinroq o'sadi.", 'When demand falls, prices rise more slowly.') },
    { text: "higher; lower", why: tr("Bu talab **oshganda** bo'ladi.", 'That happens when demand **rises**.') },
  ]),
];

export const checks: Record<string, Question> = {
  "s-1-1a": mk("ch01.check.1-1a", "Trade-offs", tr("Hukumat boylardan kambag'allarga daromadni qayta taqsimlasa, qaysi trade-off yuzaga keladi?", 'If the government redistributes income from the rich to the poor, what trade-off arises?'), [
    { text: tr("Tenglik oshadi, lekin samaradorlik pasayishi mumkin — mehnat rag'bati kamayadi va “pirog kichrayadi”", 'Equality rises, but efficiency may fall — the incentive to work weakens and “the pie shrinks”'), correct: true, why: tr("Efficiency — pirog hajmi, equality — uning qanday kesilishi. Teng kesish ba'zan pirogni kichraytiradi.", 'Efficiency is the size of the pie, equality is how it is sliced. Slicing evenly sometimes shrinks the pie.') },
    { text: tr("Samaradorlik ham, tenglik ham oshadi", 'Both efficiency and equality rise'), why: tr("Kitob aynan bu ikki maqsad **to'qnashishi** mumkinligini ta'kidlaydi.", 'The book stresses that these two goals can **conflict**.') },
    { text: tr("Hech qanday trade-off yo'q", 'There is no trade-off'), why: tr("“Tekin tushlik yo'q.”", "“There's no such thing as a free lunch.”") },
    { text: "“Guns and butter” trade-off", why: tr("Bu harbiy va iste'mol tovarlari o'rtasidagi tanlov.", 'That is the choice between military and consumer goods.') },
  ], 'new'),
  "s-1-1b": { id: "ch01.check.1-1b", chapter: C, kind: "tf", source: "new", topic: tr("Imkoniyat xarajati", 'Opportunity cost'), prompt: tr("Universitetda o'qishning imkoniyat xarajatiga yotoqxona va ovqatning **to'liq** narxi kiradi.", 'The opportunity cost of college includes the **full** price of room and board.'), answer: false, why: tr("Uyda ham yashash va ovqatlanish kerak — faqat uy xarajatidan **oshgan** qismi kiradi. Eng katta xarajat esa — o'qish sabab topilmagan maosh.", "You would have to live and eat at home too — only the part **above** the cost of living at home counts. The biggest cost is the wages you don't earn while studying.") },
  "s-1-1c": { id: "ch01.check.1-1c", chapter: C, kind: "numeric", source: "new", topic: tr("Marjinal fikrlash", 'Thinking at the margin'), prompt: tr("Oyiga $30 lik striming obunasi bor, oyiga 5 ta film ko'rasiz. Bugun yana bitta film ko'rishning **qo'shimcha pul xarajati** necha dollar?", 'You pay $30 a month for streaming and watch 5 movies a month. What is the **extra money cost** in dollars of watching one more movie today?'), answer: 0, tolerance: 0, unit: "$", why: tr("Obuna baribir to'lanadi — marjinal xarajat **$0**. Yagona xarajat — vaqtingiz.", 'The subscription is paid anyway — the marginal cost is **$0**. The only cost is your time.'), traps: [{ value: 6, why: tr("$6 — o'rtacha xarajat (30/5), qaror uchun ahamiyatsiz.", '$6 is the average cost (30/5), irrelevant for the decision.') }] },
  "s-1-1d": mk("ch01.check.1-1d", tr("Rag'batlar", 'Incentives'), tr("Peltzman (1975) bo'yicha xavfsizlik kamari to'g'risidagi qonunlar natijasi qanday bo'ldi?", 'According to Peltzman (1975), what did seat-belt laws lead to?'), [
    { text: tr("Har bir avariyada o'lim kamaydi, lekin avariyalar ko'paydi: haydovchilar o'limi deyarli o'zgarmadi, piyodalar o'limi oshdi", 'Fewer deaths per accident but more accidents: driver deaths barely changed and pedestrian deaths rose'), correct: true, why: tr("Kamar avariya “narxini” tushirdi → haydovchilar tezroq va beparvoroq yurdi. Bilvosita ta'sir — rag'batlar orqali.", 'Seat belts lowered the “price” of an accident → drivers drove faster and less carefully. An indirect effect, working through incentives.') },
    { text: tr("Barcha o'limlar keskin kamaydi", 'All deaths fell sharply'), why: tr("Faqat bevosita ta'sirni hisobga oldingiz.", 'You counted only the direct effect.') },
    { text: tr("Avariyalar kamaydi", 'Accidents fell'), why: tr("Ehtiyotkorlik kamaygani uchun avariyalar **ko'paydi**.", 'Because people became less careful, accidents **increased**.') },
    { text: tr("Hech narsa o'zgarmadi", 'Nothing changed'), why: tr("Xatti-harakat o'zgardi.", 'Behavior changed.') },
  ], 'new'),
  "s-1-2a": { id: "ch01.check.1-2a", chapter: C, kind: "tf", source: "new", topic: "Savdo", prompt: tr("AQSh va Xitoy o'rtasidagi savdo sport musobaqasiga o'xshaydi: biri yutsa, ikkinchisi yutqazadi.", 'Trade between the U.S. and China is like a sports match: when one wins, the other loses.'), answer: false, why: tr("Savdo **win–win**: har bir mamlakat eng yaxshi qiladigan ishiga ixtisoslashadi va ko'proq turdagi tovarni arzonroq oladi. Oila ham boshqalardan ajralib, o'zi ovqat yetishtirib, kiyim tikib yashasa, yutqazadi.", 'Trade is **win–win**: each country specializes in what it does best and gets a wider variety of goods more cheaply. A family that cut itself off, growing its own food and sewing its own clothes, would be worse off.') },
  "s-1-2b": mk("ch01.check.1-2b", "Bozor", tr("Nega markaziy rejalashtirish muvaffaqiyatsiz bo'ldi (kitob izohi)?", "Why did central planning fail (the book's explanation)?"), [
    { text: tr("Rejalashtiruvchilarda bozorda narxlarda aks etadigan xarajat va didlar haqidagi ulkan, doim o'zgaradigan ma'lumot yo'q edi", 'Planners lacked the vast, ever-changing information about costs and tastes that prices reflect in a market'), correct: true, why: tr("Ular iqtisodiyotni “bir qo'lini — ko'rinmas qo'lni — orqasiga bog'lab” boshqarishga urindi.", 'They tried to run the economy “with one hand tied behind their backs” — the invisible hand.') },
    { text: tr("Rejalashtiruvchilar yetarlicha ishlamadi", "Planners didn't work hard enough"), why: tr("Muammo — ma'lumot va rag'batlarda, mehnatsevarlikda emas.", 'The problem was information and incentives, not hard work.') },
    { text: tr("Narxlar juda tez o'zgardi", 'Prices changed too fast'), why: tr("Aksincha, narxlar bozorda emas, rejalashtiruvchilar tomonidan belgilangan.", 'The opposite: prices were set by planners, not by markets.') },
    { text: tr("Savdo juda ko'p edi", 'There was too much trade'), why: tr("Bog'liq emas.", 'Unrelated.') },
  ], 'new'),
  "s-1-2c": { id: "ch01.check.1-2c", chapter: C, kind: "match", source: "new", topic: tr("Bozor muvaffaqiyatsizligi", 'Market failure'), prompt: tr("Holatni bozor muvaffaqiyatsizligi turi yoki davlat maqsadi bilan moslashtiring.", 'Match each situation with a type of market failure or a goal of government.'), pairs: [
    { left: tr("Zavod tutuni qo'shnilar sog'lig'iga zarar", "Factory smoke harms the neighbors' health"), right: "Externality" },
    { left: tr("Shahardagi yagona quduq egasi suvni qimmat sotadi", "The town's only well owner sells water at a high price"), right: "Market power" },
    { left: tr("Progressiv daromad solig'i", 'A progressive income tax'), right: "Equality" },
    { left: tr("Politsiya va sud o'g'rilikdan himoya qiladi", 'Police and courts protect against theft'), right: "Property rights" },
  ] },
  "s-1-3a": mk("ch01.check.1-3a", tr("Unumdorlik", 'Productivity'), tr("Turmush darajasini oshirish uchun siyosatchi birinchi navbatda nimaga e'tibor berishi kerak?", 'To raise living standards, what should policymakers focus on first?'), [
    { text: tr("Ishchilar yaxshi o'qitilgani, kerakli asbob-uskunalar va eng yaxshi texnologiyaga ega bo'lishiga — unumdorlikka", 'Making sure workers are well educated and have the tools and the best technology — productivity'), correct: true, why: tr("Principle 8: asosiy savol — siyosat tovar va xizmatlar ishlab chiqarish qobiliyatiga qanday ta'sir qiladi.", 'Principle 8: the key question is how a policy affects the ability to produce goods and services.') },
    { text: tr("Ko'proq pul bosib chiqarishga", 'Printing more money'), why: tr("Bu inflyatsiya beradi (Principle 9).", 'That causes inflation (Principle 9).') },
    { text: tr("Importni taqiqlashga", 'Banning imports'), why: tr("Savdo hammani boyitadi (Principle 5).", 'Trade makes everyone richer (Principle 5).') },
    { text: tr("Kasaba uyushmalarini kuchaytirishga", 'Strengthening labor unions'), why: tr("Kitob: haqiqiy qahramon — unumdorlik o'sishi.", 'The book: the real hero is productivity growth.') },
  ], 'new'),
  "s-1-3b": { id: "ch01.check.1-3b", chapter: C, kind: "tf", source: "new", topic: tr("Inflyatsiya", 'Inflation'), prompt: tr("1920-yillar boshida Germaniyada narxlar har oy o'rtacha uch barobar oshganda, pul miqdori ham har oy uch barobar oshgan.", 'In the early 1920s, when prices in Germany tripled each month on average, the quantity of money also tripled each month.'), answer: true, why: tr("Katta va uzoq inflyatsiyaning asosiy sababi — pul miqdorining o'sishi: pul ko'p bosilsa, uning qiymati tushadi.", 'The main cause of large and persistent inflation is growth in the quantity of money: print a lot of money and its value falls.') },
  "s-1-3c": mk("ch01.check.1-3c", "Phillips trade-off", tr("Markaziy bank pul miqdorini oshirdi. Bir-ikki yil ichida nima bo'lishi mumkin?", 'The central bank increases the quantity of money. What is likely to happen within a year or two?'), [
    { text: tr("Xarajatlar va talab oshadi → firmalar ko'proq yollaydi (ishsizlik ↓), vaqt o'tib narxlar oshadi (inflyatsiya ↑)", 'Spending and demand rise → firms hire more (unemployment ↓), and over time prices rise (inflation ↑)'), correct: true, why: tr("Principle 10: qisqa muddatda inflyatsiya va ishsizlik o'rtasida trade-off.", 'Principle 10: in the short run there is a trade-off between inflation and unemployment.') },
    { text: tr("Inflyatsiya ham, ishsizlik ham kamayadi", 'Both inflation and unemployment fall'), why: tr("Ular qisqa muddatda qarama-qarshi yo'nalishda harakatlanadi.", 'In the short run they move in opposite directions.') },
    { text: tr("Faqat ishsizlik oshadi", 'Only unemployment rises'), why: tr("Talab oshgani uchun ishsizlik kamayadi.", 'Because demand rises, unemployment falls.') },
    { text: tr("Hech narsa o'zgarmaydi", 'Nothing changes'), why: tr("Pul qisqa muddatda talabga ta'sir qiladi.", 'In the short run, money affects demand.') },
  ], 'new'),
};

export const practice: Question[] = [
  { id: "ch01.new.match-principles", chapter: C, kind: "match", source: "new", topic: tr("O'nta tamoyil", 'The ten principles'), prompt: tr("Misolni tamoyil bilan moslashtiring.", 'Match each example with a principle.'), pairs: [
    { left: tr("“Tekin tushlik yo'q”", "“There's no free lunch”"), right: "1. People face trade-offs" },
    { left: tr("O'qish uchun boy berilgan maosh", 'Wages given up to go to college'), right: "2. The cost of something is what you give up" },
    { left: tr("Bo'sh o'ringa $300 lik chipta", 'A $300 ticket for an empty seat'), right: "3. Rational people think at the margin" },
    { left: tr("Norvegiyada benzin solig'i → elektromobillar", "Norway's gasoline tax → electric cars"), right: "4. People respond to incentives" },
    { left: "Germaniya gazetasi 70 mln marka", right: "9. Prices rise when the government prints too much money" },
  ] },
  mk("ch01.new.water-diamond", tr("Marjinal fikrlash", 'Thinking at the margin'), tr("Nega suv arzon, olmos esa qimmat, garchi suv hayot uchun zarur bo'lsa ham?", 'Why is water cheap and diamonds expensive, even though water is essential for life?'), [
    { text: tr("WTP **marjinal** foydaga bog'liq: suv ko'p — qo'shimcha stakanning foydasi kichik; olmos kam — qo'shimcha toshning foydasi katta", 'WTP depends on the **marginal** benefit: water is plentiful, so an extra glass is worth little; diamonds are rare, so an extra stone is worth a lot'), correct: true, why: tr("Qadr umumiy foydaga emas, qo'shimcha birlik foydasiga qarab belgilanadi.", 'Value is set by the benefit of an extra unit, not by total benefit.') },
    { text: tr("Olmosni ishlab chiqarish qimmat, xolos", 'Diamonds are simply costly to produce'), why: tr("Kitob izohi — marjinal foyda.", "The book's explanation is marginal benefit.") },
    { text: tr("Odamlar ratsional emas", 'People are not rational'), why: tr("Bu ratsional xatti-harakat.", 'This is rational behavior.') },
    { text: tr("Davlat suv narxini belgilaydi", 'The government sets the price of water'), why: tr("Kitob izohi bu emas.", "That is not the book's explanation.") },
  ], 'new'),
  { id: "ch01.new.sunk", chapter: C, kind: "numeric", source: "new", topic: "Problem 5", prompt: tr("Mahsulotga $5 mln sarflangan. Kutilgan sotuv $3 mln, tugatish uchun yana $1 mln kerak. Tugatish uchun **ko'pi bilan** qancha (mln $) to'lash mantiqli?", '$5 million has been spent on a product. Expected sales are $3 million, and finishing it takes another $1 million. What is the **most** (in $ millions) worth paying to finish it?'), answer: 3, tolerance: 0, unit: "mln $", why: tr("Sarflangan $5 mln — **sunk cost**, qarorga kirmaydi. Qo'shimcha tushum $3 mln → tugatish xarajati $3 mln dan kam bo'lsa, davom eting (1 < 3 → ha).", 'The $5 million already spent is a **sunk cost** and does not enter the decision. The extra revenue is $3 million → go ahead as long as the cost of finishing is below $3 million (1 < 3 → yes).'), traps: [{ value: 0, why: tr("Sunk cost'ni hisobga oldingiz: $5 mln qaytmaydi, u qarorga ta'sir qilmasligi kerak.", 'You counted the sunk cost: the $5 million is gone and should not affect the decision.') }, { value: 2, why: tr("3 − 1 = 2 — bu $1 mln to'langandagi foyda, maksimal xarajat emas.", '3 − 1 = 2 is the profit when you pay $1 million, not the maximum cost.') }] },
  { id: "ch01.new.interest", chapter: C, kind: "numeric", source: "new", topic: "Problem 4", prompt: tr("$100 yutdingiz. Bank 5% foiz to'laydi. Pulni hozir sarflashning imkoniyat xarajati (bir yildan keyingi dollarlarda)?", 'You win $100. The bank pays 5% interest. What is the opportunity cost of spending the money now (in dollars a year from now)?'), answer: 105, tolerance: 0, unit: "$", why: tr("Hozir sarflasangiz, bir yildan keyin ega bo'ladigan $105 dan voz kechasiz.", 'If you spend it now, you give up the $105 you would have a year from now.'), traps: [{ value: 5, why: tr("$5 — faqat foiz; voz kechilgan jami summa $105.", '$5 is only the interest; the total given up is $105.') }] },
  { id: "ch01.new.tf-uber", chapter: C, kind: "tf", source: "new", topic: "Uber", prompt: tr("2014-yilgi so'rovda iqtisodchilarning hammasi Uber kabi xizmatlar iste'molchi farovonligini oshiradi deb javob bergan.", 'In a 2014 survey, every economist said services like Uber raise consumer well-being.'), answer: true, why: tr("Har bir iqtisodchi “Ha” dedi; surge pricing haqida esa 85% “Ha” degan.", 'Every economist said “Yes”; on surge pricing, 85% said “Yes”.') },
  { id: "ch01.new.tf-guarantee", chapter: C, kind: "tf", source: "new", topic: tr("Davlat roli", 'Role of government'), prompt: tr("“Davlat bozor natijalarini yaxshilay oladi” degani “davlat har doim yaxshilaydi” degani.", '“Government can improve market outcomes” means “government always improves them.”'), answer: false, why: tr("Siyosat farishtalar emas, nomukammal siyosiy jarayon tomonidan yaratiladi: ba'zan kuchlilarni mukofotlaydi, ba'zan yaxshi niyatli, lekin kam ma'lumotli rahbarlar tomonidan qilinadi.", 'Policy is made not by angels but by an imperfect political process: it sometimes rewards the powerful and is sometimes made by well-meaning but poorly informed leaders.') },
  mk("ch01.new.uz", tr("O'zbekistondan misol", 'An example from Uzbekistan'), tr("Toshkentda yandex-taksi narxi Navro'z kechasi yoki kuchli yomg'irda keskin oshadi. Iqtisodchi bunga qanday qaraydi?", 'In Tashkent, Yandex taxi fares jump on Navruz night or in heavy rain. How does an economist see this?'), [
    { text: tr("Surge pricing ko'proq haydovchini ishga chiqaradi va xizmatni uni eng ko'p qadrlaganlarga taqsimlaydi — kutish va izlash xarajatlari kamayadi", 'Surge pricing gets more drivers on the road and allocates rides to those who value them most — cutting the costs of waiting and searching'), correct: true, why: tr("Principle 4 va 6: narx rag'bat beradi; Uber case study'dagi mantiq.", 'Principles 4 and 6: prices create incentives; the same logic as the Uber case study.') },
    { text: tr("Bu adolatsiz — narxni taqiqlash kerak", "It's unfair — the price should be banned"), why: tr("Narx shifti taqchillik beradi (6-bob): mashina topish qiyinlashadi.", 'A price ceiling causes a shortage (Chapter 6): finding a car gets harder.') },
    { text: tr("Narx o'zgarishi hech kimga ta'sir qilmaydi", 'The price change affects nobody'), why: tr("Haydovchilar ham, yo'lovchilar ham rag'batga javob beradi.", 'Both drivers and riders respond to incentives.') },
    { text: tr("Bu bozor hokimiyatining belgisi", 'It is a sign of market power'), why: tr("Raqobatli bozorda ham talab oshganda narx oshadi.", 'Even in a competitive market, prices rise when demand rises.') },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
