import type { Problem } from '../../types';

const C = 1;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch01.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch01.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "Give three examples of important trade-offs that you face in your life.", ["Vaqt: o'qish ↔ ish ↔ dam olish.", "Pul: hozir sarflash ↔ jamg'arish (kelajak).", "Ta'lim: magistraturaga borish ↔ hozir ishga kirib maosh olish."], "E.g., study vs. work, spend vs. save, grad school vs. a job now."),
  r(2, "What items would you include to figure out the opportunity cost of a trip to an amusement park?", ["Pul xarajatlari: chipta, yo'l, ovqat (uyda ham yeyiladigan qismidan tashqari).", "Vaqt: o'sha kuni ishlab topish mumkin bo'lgan maosh yoki o'qish.", "Imkoniyat xarajati = voz kechilgan eng yaxshi muqobilning to'liq qiymati."], "Cash costs plus the value of the time (e.g., forgone wages)."),
  r(3, "Water is necessary for life. Is the marginal benefit of a glass of water large or small?", ["Suv zarur, lekin **ko'p** — bizda allaqachon ko'p suv bor.", "Shuning uchun qo'shimcha stakanning marjinal foydasi **kichik** (agar cho'lda bo'lmasangiz)."], "Usually small, because water is plentiful.", "marginal"),
  r(4, "Why should policymakers think about incentives?", ["Siyosat odamlar duch keladigan xarajat va foydani o'zgartiradi → xatti-harakat o'zgaradi.", "Rag'batlarni hisobga olmasa — kutilmagan oqibatlar (xavfsizlik kamari → ko'proq avariya, piyodalar o'limi)."], "Policies change behavior through incentives, sometimes with unintended consequences."),
  r(5, "Why isn't trade between two countries like a game in which one country wins and the other loses?", ["Savdo har bir mamlakatga eng yaxshi qiladigan ishiga ixtisoslashish imkonini beradi.", "Har ikki tomon ko'proq va arzonroq tovar oladi — **win–win**."], "Trade allows specialization, so both sides can gain."),
  r(6, "What does the “invisible hand” of the marketplace do?", ["Narxlar orqali o'z manfaatini ko'zlagan xaridor va sotuvchilarni yo'naltiradi.", "Narx ham sotuvchi xarajatini, ham xaridor qiymatini aks ettiradi → ko'p hollarda jamiyat farovonligi maksimal."], "It guides self-interested participants, through prices, to outcomes that promote overall well-being."),
  r(7, "What are the two main causes of market failure? Give an example of each.", ["**Externality**: ifloslanish — zavod qo'shnilar sog'lig'iga zararni hisobga olmaydi.", "**Market power**: shahardagi yagona quduq egasi suvni cheklab, qimmat sotadi."], "Externalities (pollution) and market power (a single well)."),
  r(8, "Why is productivity important?", ["Mamlakatlar va davrlar o'rtasidagi turmush darajasi farqining deyarli hammasi unumdorlikdan.", "Unumdorlik o'sishi o'rtacha daromad o'sishini belgilaydi."], "Productivity determines living standards."),
  r(9, "What is inflation, and what causes it?", ["Inflyatsiya — umumiy narxlar darajasining oshishi.", "Katta va uzoq inflyatsiyaning sababi — **pul miqdorining** tez o'sishi (Germaniya 1920-yillar, AQSh 1970-yillar)."], "A rise in the overall price level, caused mainly by growth in the quantity of money.", "growth"),
  r(10, "How are inflation and unemployment related in the short run?", ["Qisqa muddatda (1–2 yil) ko'p siyosatlar inflyatsiya va ishsizlikni **qarama-qarshi** yo'nalishda o'zgartiradi.", "Pul ko'paysa → talab ↑ → ishsizlik ↓, keyinroq narxlar ↑."], "There is a short-run trade-off: lower unemployment comes with higher inflation."),
];

export const problems: Problem[] = [
  p(1, "Describe some of the trade-offs faced by each of the following: (a) a family deciding whether to buy a car (b) a member of Congress deciding how much to spend on national parks (c) a company president deciding whether to open a new factory (d) a professor deciding how much to prepare for class (e) a recent college graduate deciding whether to go to graduate school (f) a single parent with small children deciding whether to take a job", [
    "(a) Mashina puli — ta'til, jamg'arma, boshqa xaridlar; yoki jamoat transporti qulayligi.",
    "(b) Bog'larga ko'proq pul — maktab, mudofaa yoki past soliqlarga kamroq pul.",
    "(c) Yangi zavod — boshqa investitsiya (tadqiqot, reklama) yoki aksiyadorlarga dividend o'rniga.",
    "(d) Tayyorgarlik vaqti — ilmiy tadqiqot, dam olish yoki oila vaqti hisobiga.",
    "(e) Magistratura — hozirgi maosh va ish tajribasidan voz kechish, kelajakda yuqori maosh.",
    "(f) Ish — daromad ↔ bolalar bilan vaqt va bolalarni parvarishlash xarajati.",
  ], "Each choice gives up the best alternative use of money or time."),
  p(2, "You are trying to decide whether to take a vacation. Most of the costs (airfare, hotel, forgone wages) are measured in dollars, but the benefits are psychological. How can you compare the benefits to the costs?", [
    "O'zingizdan so'rang: bu ta'til uchun **ko'pi bilan** qancha to'lashga tayyorman (WTP)?",
    "WTP jami xarajatdan (shu jumladan boy berilgan maosh) katta bo'lsa — boring.",
  ], "Translate the benefit into your willingness to pay and compare it with the full cost."),
  p(3, "You were planning to spend Saturday working at your part-time job, but a friend asks you to go skiing. What is the true cost of going skiing? Now suppose you had been planning to spend the day studying at the library. What is the cost in this case?", [
    "1-holat: chang'i xarajatlari + **boy berilgan maosh**.",
    "2-holat: chang'i xarajatlari + **o'qishdan voz kechish** (bilim, baho).",
    "Har holda imkoniyat xarajati — voz kechilgan eng yaxshi muqobil.",
  ], "Ski costs plus forgone wages; or ski costs plus the value of lost study time."),
  p(4, "You win $100 in a basketball pool. You can spend it now or put it in a bank account paying 5 percent interest for a year. What is the opportunity cost of spending the $100 now?", ["Hozir sarflash = bir yildan keyingi $105 dan voz kechish."], "$105 one year from now (the $100 plus $5 interest)."),
  p(5, "Your company has invested $5 million developing a new product. Expected sales fell to $3 million. If it would cost $1 million to finish, should you go ahead? What is the most you should pay to complete development?", [
    "$5 mln — qaytmaydigan (**sunk**) xarajat: davom etsangiz ham, to'xtatsangiz ham qaytmaydi → qarorga kirmaydi.",
    "Marjinal: qo'shimcha tushum $3 mln vs qo'shimcha xarajat $1 mln → MB > MC → **davom eting** (+$2 mln).",
    "Maksimal to'lov: qo'shimcha xarajat $3 mln dan oshmasa — **$3 mln**.",
  ], "Yes — finish it; pay at most $3 million.", "marginal"),
  p(6, "A 1996 bill limited many welfare recipients to only two years of benefits. (a) How did this affect the incentives for working? (b) How might it represent a trade-off between equality and efficiency?", [
    "(a) Nafaqa cheksiz bo'lmagani uchun ishlash rag'bati **kuchaydi** — ish topishga intilish oshdi.",
    "(b) Samaradorlik ↑ (ko'proq ishlaydi, pirog katta), tenglik ↓ (ish topa olmaganlar yordamsiz qoladi).",
  ], "(a) Stronger incentive to work (b) more efficiency, less equality."),
  p(7, "Explain whether each government activity is motivated by equality or efficiency (and name the market failure): (a) regulating cable TV prices (b) food vouchers for low-income people (c) prohibiting smoking in public places (d) breaking up Standard Oil (90% of refineries) (e) higher income tax rates on higher incomes (f) laws against drunk driving", [
    "(a) Samaradorlik — **market power** (kabel TV monopoliyasi).",
    "(b) **Tenglik**.",
    "(c) Samaradorlik — **externality** (passiv chekish).",
    "(d) Samaradorlik — **market power**.",
    "(e) **Tenglik**.",
    "(f) Samaradorlik — **externality** (boshqalar uchun xavf).",
  ], "(a) efficiency/market power (b) equality (c) efficiency/externality (d) efficiency/market power (e) equality (f) efficiency/externality."),
  p(8, "Discuss from the standpoints of equality and efficiency: (a) “Everyone in society should be guaranteed the best healthcare possible.” (b) “Laid-off workers should be able to collect unemployment benefits until they find a new job.”", [
    "(a) Tenglik ↑. Lekin “eng yaxshi” tibbiyot juda qimmat: resurslar boshqa sohalardan olinadi, odamlar sog'liqqa beparvo bo'lishi mumkin → samaradorlik ↓.",
    "(b) Tenglik ↑ (ishsizlarga yordam). Lekin cheksiz nafaqa ish izlash rag'batini pasaytiradi → samaradorlik ↓.",
  ], "Both raise equality but may reduce efficiency through incentives."),
  p(9, "In what ways is your standard of living different from that of your parents or grandparents? Why have these changes occurred?", ["Ko'proq texnologiya (smartfon, internet), yaxshiroq tibbiyot, uzoqroq umr, ko'proq ta'lim.", "Asosiy sabab — **unumdorlik o'sishi**: yaxshiroq bilim, kapital va texnologiya."], "Higher living standards, mainly due to productivity growth.", "growth"),
  p(10, "Suppose Americans save more, and banks lend the saving to businesses that build new factories. How might this lead to faster productivity growth? Who benefits? Is society getting a free lunch?", [
    "Ko'proq zavod = har ishchiga ko'proq **kapital** → unumdorlik ↑.",
    "Foyda: ishchilar (yuqori maosh), egalar (foyda), iste'molchilar (ko'proq tovar).",
    "**Tekin tushlik yo'q**: jamg'arish uchun bugungi iste'moldan voz kechiladi.",
  ], "More capital per worker raises productivity; but it costs current consumption — no free lunch."),
  p(11, "During the Revolutionary War, the colonies printed money to cover expenditures — an “inflation tax.” Who is being “taxed” when more money is printed? Why?", [
    "Ko'p pul → narxlar ↑ → pulning qiymati ↓.",
    "“Soliq” — **pul ushlab turganlarga**: ularning puli kamroq narsa sotib oladi; resurslar davlatga o'tadi.",
  ], "People who hold money — inflation reduces the purchasing power of their money."),
];
