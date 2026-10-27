import type { Question } from '../../types';
import { tr } from '../../../lib/lang';

const C = 10;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch10.qq.1", tr("Ijobiy effekt", 'Positive externality'), "Which of the following is an example of a **positive externality**?", [
    { text: "Myra mows Dev's lawn and is paid $100 for the service.", why: tr("Bu oddiy bozor bitimi — begona tomonga ta'sir yo'q.", 'This is an ordinary market transaction — no effect on a bystander.') },
    { text: "Myra's lawnmower emits smoke that Dev's neighbor Xavier has to breathe.", why: tr("Bu **salbiy** tashqi effekt.", 'This is a **negative** externality.') },
    { text: "Dev's newly cut lawn makes his neighborhood more attractive.", correct: true, why: tr("Qo'shnilar (begonalar) foyda oladi, lekin hech narsa to'lamaydi — ijobiy tashqi effekt.", 'The neighbors (bystanders) benefit but pay nothing — a positive externality.') },
    { text: "Dev's neighbor Xavier offers to pay him if he keeps his lawn well groomed.", why: tr("Bu tashqi effektga **xususiy yechim** (Coase), effektning o'zi emas.", 'This is a **private solution** to an externality (Coase), not the externality itself.') },
  ]),
  mk("ch10.qq.2", tr("Salbiy effekt", 'Negative externality'), "If the production of a good yields a negative externality, the social-cost curve lies ________ the supply curve, and the socially optimal quantity is ________ than the equilibrium quantity.", [
    { text: "above; greater", why: tr("Ijtimoiy xarajat yuqori → optimum **kamroq**.", 'Social cost is higher → the optimum is **smaller**.') },
    { text: "above; less", correct: true, why: tr("Social cost = private + external > private. Bozor tashqi xarajatni e'tiborsiz qoldirib ko'p ishlab chiqaradi.", 'Social cost = private + external > private. The market ignores the external cost and produces too much.') },
    { text: "below; greater", why: tr("Ijtimoiy xarajat xususiydan past bo'lmaydi.", 'Social cost is never below private cost.') },
    { text: "below; less", why: tr("Ijtimoiy xarajat xususiydan past bo'lmaydi.", 'Social cost is never below private cost.') },
  ]),
  mk("ch10.qq.3", tr("Korrektiv soliq", 'Corrective tax'), "When the government levies a tax equal to the external cost associated with a good's production, it ________ the price paid by consumers and makes the market outcome ________ efficient.", [
    { text: "increases; more", correct: true, why: tr("Taklif yuqoriga siljiydi → narx ↑, miqdor optimumga tushadi → samaraliroq.", 'Supply shifts up → price ↑, quantity falls to the optimum → more efficient.') },
    { text: "increases; less", why: tr("Oddiy soliqdan farqli: tashqi effekt bo'lsa, korrektiv soliq samaradorlikni **oshiradi**.", 'Unlike an ordinary tax: with an externality, a corrective tax **raises** efficiency.') },
    { text: "decreases; more", why: tr("Soliq narxni oshiradi.", 'The tax raises the price.') },
    { text: "decreases; less", why: tr("Ikkalasi ham noto'g'ri.", 'Both are wrong.') },
  ]),
  mk("ch10.qq.4", tr("Korrektiv soliq", 'Corrective tax'), "Which of the following statements about corrective taxes is generally **NOT** true?", [
    { text: "They reduce consumer surplus.", why: tr("To'g'ri: xaridorlar ko'proq to'laydi va kamroq oladi.", 'True: buyers pay more and buy less.') },
    { text: "They raise government revenue.", why: tr("To'g'ri: \\(t \\times Q\\).", 'True: \\(t \\times Q\\).') },
    { text: "They reduce the quantity sold in a market.", why: tr("To'g'ri: aynan maqsad — miqdorni optimumga tushirish.", 'True: that is exactly the goal — bringing the quantity down to the optimum.') },
    { text: "They cause deadweight losses.", correct: true, why: tr("Noto'g'ri: ular mavjud DWL ni **yo'qotadi** — bozorni optimumga olib keladi.", 'False: they **eliminate** the existing DWL — bringing the market to the optimum.') },
  ]),
  mk("ch10.qq.5", tr("Ruxsatnomalar", 'Permits'), "The government auctions off 500 units of pollution rights. The rights sell for $50 per unit, raising $25,000. This policy is equivalent to a corrective tax of ______ per unit of pollution.", [
    { text: "$10", why: tr("Ruxsatnoma narxi $50.", 'The permit price is $50.') },
    { text: "$50", correct: true, why: tr("Ruxsatnoma narxi — ifloslanishning narxi; $50 soliq xuddi shu 500 birlikni beradi (Figure 4).", 'The permit price is the price of pollution; a $50 tax yields the same 500 units (Figure 4).') },
    { text: "$450", why: tr("Hisob xato.", 'A calculation error.') },
    { text: "$500", why: tr("500 — miqdor, narx emas.", '500 is the quantity, not the price.') },
  ]),
  mk("ch10.qq.6", tr("Regulyatsiya", 'Regulation'), "Command-and-control regulation may be better than a corrective tax if", [
    { text: "a corrective tax would have differential effects on different industries.", why: tr("Bu soliqning **afzalligi** — kamaytirish arzon joyda bo'ladi.", 'That is an **advantage** of the tax — abatement happens where it is cheap.') },
    { text: "some polluters can reduce emissions more cheaply than others.", why: tr("Aynan shunda soliq regulyatsiyadan yaxshiroq.", 'That is exactly where a tax beats regulation.') },
    { text: "the negative externality is so large that the optimal quantity is zero.", correct: true, why: tr("Masalan, zaharli kimyoviy moddalarni suvga tashlash — oddiy taqiq eng to'g'ri.", 'For example, dumping toxic chemicals into water — a simple ban is best.') },
    { text: "knowledge about the cost of pollution abatement is dispersed and hard to obtain.", why: tr("Bunda regulyator kerakli ma'lumotga ega emas — soliq yaxshiroq.", 'Then the regulator lacks the needed information — a tax is better.') },
  ]),
  mk("ch10.qq.7", tr("Coase", 'Coase'), "According to the Coase theorem,", [
    { text: "private actors can reach an agreement to solve the problem of externalities without the government.", correct: true, why: tr("Bitim xarajatsiz bo'lsa, tomonlar o'zi samarali kelishuvga keladi.", 'If transactions are costless, the parties reach an efficient bargain on their own.') },
    { text: "corrective subsidies are the best policy to solve the problem of positive externalities.", why: tr("Teorema xususiy kelishuv haqida.", 'The theorem is about private bargaining.') },
    { text: "negative externalities are a problem for society, but positive externalities are not.", why: tr("Ikkalasi ham samarasizlik yaratadi.", 'Both create inefficiency.') },
    { text: "when two private actors amicably solve the problem of externalities, they shift the problem to a third party.", why: tr("Teorema bunday demaydi.", "The theorem doesn't say that.") },
  ]),
  mk("ch10.qq.8", tr("Coase", 'Coase'), "The Coase theorem does **NOT** apply if", [
    { text: "there is a significant externality between two parties.", why: tr("Aynan shu holatda u qo'llanadi.", 'That is exactly when it applies.') },
    { text: "the court system vigorously enforces all contracts.", why: tr("Bu kelishuvni **osonlashtiradi**.", 'This **eases** bargaining.') },
    { text: "transaction costs make negotiation difficult.", correct: true, why: tr("Teorema bitim xarajatlari yo'q (yoki kichik) deb faraz qiladi.", 'The theorem assumes there are no (or small) transaction costs.') },
    { text: "both parties understand the externality fully.", why: tr("Bu ham kelishuvga yordam beradi.", 'This also helps bargaining.') },
  ]),
];

export const checks: Record<string, Question> = {
  "s-10-1b": mk("ch10.check.10-1b", tr("Salbiy effekt", 'Negative externality'), tr("Po'lat zavodi havoni ifloslantiradi. Bozor muvozanatida nima bo'ladi?", 'A steel mill pollutes the air. What happens in the market equilibrium?'), [
    { text: tr("Marjinal iste'molchi po'latni ijtimoiy xarajatdan kam qadrlaydi — ishlab chiqarishni kamaytirish total surplusni oshiradi", 'The marginal consumer values steel less than its social cost — reducing production would raise total surplus'), correct: true, why: tr("Q_market da talab ijtimoiy xarajatdan pastda: oxirgi birliklar jamiyatga foydasidan qimmatga tushadi.", 'At Q_market demand lies below social cost: the last units cost society more than they are worth.') },
    { text: tr("Bozor optimal miqdorni ishlab chiqaradi", 'The market produces the optimal quantity'), why: tr("Faqat tashqi effekt bo'lmasa.", 'Only if there is no externality.') },
    { text: tr("Bozor kam ishlab chiqaradi", 'The market produces too little'), why: tr("Bu ijobiy effekt holati.", 'That is the positive-externality case.') },
    { text: tr("Narx juda yuqori", 'The price is too high'), why: tr("Narx ijtimoiy xarajatni aks ettirmaydi — u juda past.", "The price doesn't reflect social cost — it is too low.") },
  ], 'new'),
  "s-10-1c": { id: "ch10.check.10-1c", chapter: C, kind: "tf", source: "new", topic: tr("Ijobiy effekt", 'Positive externality'), prompt: tr("Ta'limning ijobiy tashqi effektlari bor, shuning uchun davlat uni subsidiyalashi samaradorlikni oshiradi.", 'Education has positive externalities, so government subsidies for it raise efficiency.'), answer: true, why: tr("Ijtimoiy qiymat xususiy qiymatdan yuqori → bozor kam ta'lim beradi → subsidiya miqdorni optimumga yaqinlashtiradi (davlat maktablari, grantlar, soliq imtiyozlari).", 'Social value exceeds private value → the market provides too little education → a subsidy moves the quantity toward the optimum (public schools, grants, tax breaks).') },
  "s-10-2a": mk("ch10.check.10-2a", tr("Regulyatsiya", 'Regulation'), tr("EPA ikkala zavodga “ifloslanishni 300 tonnagacha kamaytiring” desa, nima muammo?", 'If the EPA tells both plants “reduce pollution to 300 tons,” what is the problem?'), [
    { text: tr("Kamaytirish eng arzon joyda emas, hammada teng bo'ladi — bir xil natija qimmatroqqa tushadi", 'Reduction is spread equally rather than done where it is cheapest — the same result costs more'), correct: true, why: tr("Agar qog'oz fabrikasi arzonroq kamaytira olsa, u ko'proq kamaytirishi samaraliroq.", 'If the paper mill can abate more cheaply, it is more efficient for it to abate more.') },
    { text: tr("Ifloslanish kamaymaydi", "Pollution doesn't fall"), why: tr("Kamayadi — muammo xarajatda.", 'It falls — the problem is the cost.') },
    { text: tr("Regulyatsiya tushum beradi", 'Regulation raises revenue'), why: tr("Regulyatsiya tushum bermaydi; soliq beradi.", 'Regulation raises no revenue; a tax does.') },
    { text: tr("Hech qanday muammo yo'q", 'There is no problem'), why: tr("Kitob soliqni afzalroq deydi.", 'The book prefers the tax.') },
  ], 'new'),
  "s-10-2b": { id: "ch10.check.10-2b", chapter: C, kind: "tf", source: "new", topic: tr("Korrektiv soliq", 'Corrective tax'), prompt: tr("Korrektiv soliq ham, boshqa soliqlar kabi, sof yo'qotish (DWL) yaratadi.", 'A corrective tax, like other taxes, creates a deadweight loss (DWL).'), answer: false, why: tr("Tashqi effekt bo'lsa, korrektiv soliq bozorni optimumga **yaqinlashtiradi** — tushum ham beradi, samaradorlikni ham oshiradi.", 'With an externality a corrective tax moves the market **toward** the optimum — it raises revenue and raises efficiency.') },
  "s-10-2c": mk("ch10.check.10-2c", tr("Ruxsatnomalar", 'Permits'), tr("Sotiladigan ruxsatnomalar tizimida ruxsatnomalarning dastlabki taqsimoti samaradorlikka ta'sir qiladimi?", 'In a tradable-permit system, does the initial allocation of permits affect efficiency?'), [
    { text: tr("Yo'q — kamaytirish qimmat firmalar sotib oladi, arzonlari sotadi; yakuniy taqsimot baribir samarali", 'No — firms with costly abatement buy and cheap ones sell; the final allocation is efficient anyway'), correct: true, why: tr("Dastlabki taqsimot faqat kim boyishini o'zgartiradi.", 'The initial allocation only changes who becomes richer.') },
    { text: tr("Ha — teng bo'lishi kerak", 'Yes — it must be equal'), why: tr("Savdo taqsimotni tuzatadi.", 'Trading corrects the allocation.') },
    { text: tr("Ha — auktsion shart", 'Yes — an auction is required'), why: tr("Auktsion davlatga tushum beradi, samaradorlikni emas.", 'An auction gives the government revenue, not efficiency.') },
    { text: tr("Ruxsatnomalarni sotib bo'lmaydi", "Permits can't be sold"), why: tr("Aynan sotish mumkinligi — tizimning mohiyati.", 'Being able to sell them is the whole point of the system.') },
  ], 'new'),
  "s-10-2d": mk("ch10.check.10-2d", tr("E'tirozlar", 'Objections'), tr("Iqtisodchilar “toza havo bebaho — unga narx qo'yib bo'lmaydi” degan e'tirozga qanday javob beradi?", "How do economists respond to the objection that “clean air is priceless — you can't put a price on it”?"), [
    { text: tr("Ifloslanishni butunlay yo'qotish imkonsiz va juda qimmat; toza muhit ham normal tovar — uni arzonroq qilish jamiyat ko'proq talab qilishiga olib keladi", 'Eliminating pollution entirely is impossible and very costly; a clean environment is also a normal good — making it cheaper leads society to demand more'), correct: true, why: tr("Trade-offs tamoyili: atrof-muhit choralari imkoniyat xarajati bilan solishtiriladi. Bozor vositalari himoyani arzonlashtiradi.", 'The trade-offs principle: environmental measures are weighed against their opportunity cost. Market tools make protection cheaper.') },
    { text: tr("Iqtisodchilar atrof-muhitga befarq", "Economists don't care about the environment"), why: tr("Ko'p iqtisodchilar — ekologlar; ular boshqa “linza” bilan qaraydi.", 'Many economists are environmentalists; they look through a different “lens.”') },
    { text: tr("Ifloslanishni to'liq taqiqlash kerak", 'Pollution should be banned entirely'), why: tr("Hatto ot ham “ifloslantiradi” — barcha transportni taqiqlab bo'lmaydi.", "Even a horse “pollutes” — you can't ban all transportation.") },
    { text: tr("Narx faqat boylar uchun", 'Prices are only for the rich'), why: tr("Toza muhit daromad egiluvchanligi musbat bo'lgan tovar.", 'A clean environment is a good with positive income elasticity.') },
  ], 'new'),
  "s-10-3b": { id: "ch10.check.10-3b", chapter: C, kind: "numeric", source: "new", topic: tr("Coase", 'Coase'), prompt: tr("Emily'ning itdan foydasi $3,000, Horace zarari $1,500. Huquq Emilyda. Horace itni yo'qotish uchun eng ko'pi bilan qancha taklif qiladi?", "Emily's benefit from the dog is $3,000; Horace's cost is $1,500. The right belongs to Emily. What is the most Horace will offer to get rid of the dog?"), answer: 1500, tolerance: 0, unit: "$", why: tr("Horace $1,500 dan ko'p taklif qilmaydi, Emily $3,000 dan kamiga rozi emas → bitim yo'q, it qoladi — bu samarali (3000 > 1500).", "Horace won't offer more than $1,500, and Emily won't accept less than $3,000 → no deal, the dog stays — which is efficient (3000 > 1500).") },
  "s-10-3c": mk("ch10.check.10-3c", tr("Coase", 'Coase'), tr("Ko'l bo'yidagi zavod ko'p sonli baliqchilarga zarar yetkazadi. Nega Coase yechimi qiyin?", 'A lakeside factory harms many fishermen. Why is a Coase solution hard?'), [
    { text: tr("Tomonlar juda ko'p — hammani kelishuvga muvofiqlashtirish qimmat (transaction costs)", 'There are too many parties — coordinating them all into a bargain is costly (transaction costs)'), correct: true, why: tr("Iqlim o'zgarishi ham shunday. Bunda davlat jamoaviy harakat vositasi bo'lishi mumkin.", 'Climate change is like this too. Here the government can serve as a means of collective action.') },
    { text: tr("Baliqchilar zavoddan kuchliroq", 'The fishermen are stronger than the factory'), why: tr("Muammo kuchda emas, kelishuv xarajatida.", "The problem isn't power but the cost of bargaining.") },
    { text: tr("Ifloslanish samarali", 'The pollution is efficient'), why: tr("Buni bilmaymiz; muammo — kelishuvga erishish.", "We don't know that; the problem is reaching a bargain.") },
    { text: tr("Coase teoremasi faqat itlarga tegishli", 'The Coase theorem applies only to dogs'), why: tr("Yo'q — misol shunchaki sodda.", 'No — the example is just simple.') },
  ], 'new'),
};

export const practice: Question[] = [
  { id: "ch10.new.zlurp-a", chapter: C, kind: "numeric", source: "new", topic: "Problem 5", prompt: tr("Whoville: har bir shisha Zlurp uchun WTP $5, $4, $3, $2, $1; narx $1.50. Har bir odamning consumer surplusi?", "Whoville: the WTP for each bottle of Zlurp is $5, $4, $3, $2, $1; the price is $1.50. What is each person's consumer surplus?"), answer: 8, tolerance: 0, unit: "$", why: tr("4 shisha oladi: 3.5 + 2.5 + 1.5 + 0.5 = 8.", 'They buy 4 bottles: 3.5 + 2.5 + 1.5 + 0.5 = 8.'), traps: [{ value: 7.5, why: tr("To'rtinchi shisha ($2 > $1.50) ham olinadi: +0.5.", 'The fourth bottle ($2 > $1.50) is bought too: +0.5.') }] },
  { id: "ch10.new.zlurp-b", chapter: C, kind: "numeric", source: "new", topic: "Problem 5", prompt: tr("Har bir shisha $1 tashqi xarajat yaratadi. Oldingi taqsimotda bir kishiga to'g'ri keladigan total surplus?", 'Each bottle creates a $1 external cost. What is total surplus per person in the previous allocation?'), answer: 4, tolerance: 0, unit: "$", why: tr("CS 8 − tashqi xarajat 4 × $1 = 4.", 'CS 8 − external cost 4 × $1 = 4.') },
  { id: "ch10.new.zlurp-d", chapter: C, kind: "numeric", source: "new", topic: "Problem 5", prompt: tr("Mer $1 soliq qo'ydi (narx $2.50). Bir kishiga total surplus (CS − tashqi xarajat + tushum)?", 'The mayor imposes a $1 tax (price $2.50). Total surplus per person (CS − external cost + revenue)?'), answer: 4.5, tolerance: 0.01, unit: "$", why: tr("3 shisha: CS = 2.5 + 1.5 + 0.5 = 4.5; tashqi xarajat 3; tushum 3 → 4.5 > 4. Soliq samaradorlikni oshirdi.", '3 bottles: CS = 2.5 + 1.5 + 0.5 = 4.5; external cost 3; revenue 3 → 4.5 > 4. The tax raised efficiency.') },
  { id: "ch10.new.happy-valley", chapter: C, kind: "numeric", source: "new", topic: "Problem 9", prompt: tr("Happy Valley: A (30 birlik, $20/birlik kamaytirish), B (40, $30), C (20, $10). Maqsad 60; har biriga 20 ta ruxsatnoma. Savdo bo'lganda jami kamaytirish xarajati?", 'Happy Valley: A (30 units, $20/unit to abate), B (40, $30), C (20, $10). The goal is 60; each gets 20 permits. With trading, what is the total cost of abatement?'), answer: 400, tolerance: 0, unit: "$", why: tr("Eng arzon kamaytiradi: C 20 birlik ($200) va A 10 birlik ($200) = $400. C 20 ta ruxsatnomani B ga sotadi. Savdosiz: A $200 + B $600 = $800.", 'The cheapest abate: C 20 units ($200) and A 10 units ($200) = $400. C sells its 20 permits to B. Without trading: A $200 + B $600 = $800.'), traps: [{ value: 800, why: tr("Bu savdosiz xarajat (A 10, B 20 kamaytiradi).", 'That is the cost without trading (A abates 10, B 20).') }] },
  { id: "ch10.new.tf-coase-rights", chapter: C, kind: "tf", source: "new", topic: tr("Coase", 'Coase'), prompt: tr("Coase teoremasiga ko'ra, huquqning dastlabki taqsimoti farovonlik taqsimotiga ham ta'sir qilmaydi.", "According to the Coase theorem, the initial allocation of rights doesn't affect the distribution of welfare either."), answer: false, why: tr("Samarali **natijaga** ta'sir qilmaydi, lekin **kim kimga to'lashini** — ya'ni farovonlik taqsimotini belgilaydi.", "It doesn't affect the efficient **outcome**, but it determines **who pays whom** — i.e., the distribution of welfare.") },
  { id: "ch10.new.tf-gas", chapter: C, kind: "tf", source: "new", topic: tr("Benzin solig'i", 'Gasoline tax'), prompt: tr("Kitobdagi tadqiqot bo'yicha optimal korrektiv benzin solig'i (2021 dollarida ~$3.20/gallon) AQShdagi haqiqiy soliqdan (~55 sent) ancha yuqori.", 'According to the study in the book, the optimal corrective gasoline tax (~$3.20/gallon in 2021 dollars) is much higher than the actual U.S. tax (~55 cents).'), answer: true, why: tr("Benzin solig'i uch tashqi effektni hisobga oladi: ifloslanish, tirbandlik, baxtsiz hodisalar.", 'A gasoline tax accounts for three externalities: pollution, congestion, and accidents.') },
  mk("ch10.new.club", "Problem 1", tr("Problem 1: The Club (rul qulfi) va Lojack (yashirin kuzatuv). Qaysi biri qanday tashqi effekt beradi?", 'Problem 1: The Club (a steering-wheel lock) and Lojack (a hidden tracking device). Which externality does each create?'), [
    { text: tr("Club — salbiy (o'g'ri boshqa mashinaga o'tadi), Lojack — ijobiy (o'g'rilar qaysi mashinada borligini bilmaydi, o'g'irlik umuman kamayadi)", "The Club — negative (the thief moves to another car), Lojack — positive (thieves don't know which cars have it, so theft falls overall)"), correct: true, why: tr("Siyosat xulosasi: Lojack'ni subsidiyalash (yoki Club'ga soliq) samaraliroq bo'lishi mumkin.", 'Policy conclusion: subsidizing Lojack (or taxing the Club) could be more efficient.') },
    { text: tr("Ikkalasi ham ijobiy", 'Both are positive'), why: tr("Club o'g'rilikni boshqalarga yo'naltiradi.", 'The Club diverts theft to others.') },
    { text: tr("Ikkalasi ham salbiy", 'Both are negative'), why: tr("Lojack hammaning xavfini kamaytiradi.", "Lojack reduces everyone's risk.") },
    { text: tr("Tashqi effekt yo'q", 'There is no externality'), why: tr("Ikkalasi ham boshqa mashina egalariga ta'sir qiladi.", 'Both affect other car owners.') },
  ], 'new'),
  mk("ch10.new.permits-tech", "Problem 7", tr("Problem 7: ifloslanishni kamaytirish texnologiyasi keskin yaxshilandi. Nima bo'ladi?", 'Problem 7: pollution-abatement technology improves sharply. What happens?'), [
    { text: tr("Ifloslanish huquqiga talab chapga: soliq ostida miqdor kamayadi (narx o'zgarmaydi), ruxsatnomalar ostida narx tushadi (miqdor o'zgarmaydi)", "Demand for the right to pollute shifts left: under a tax the quantity falls (the price doesn't change); under permits the price falls (the quantity doesn't change)"), correct: true, why: tr("Soliq narxni, ruxsatnomalar miqdorni qotiradi (Figure 4).", 'A tax fixes the price, permits fix the quantity (Figure 4).') },
    { text: tr("Ikkala tizimda ham miqdor kamayadi", 'The quantity falls under both systems'), why: tr("Ruxsatnomalar soni belgilangan — miqdor o'zgarmaydi.", "The number of permits is fixed — the quantity doesn't change.") },
    { text: tr("Ikkala tizimda ham narx tushadi", 'The price falls under both systems'), why: tr("Soliq qonun bilan belgilangan.", 'The tax is set by law.') },
    { text: tr("Hech narsa o'zgarmaydi", 'Nothing changes'), why: tr("Talab siljiydi — biror narsa o'zgaradi.", 'Demand shifts — something changes.') },
  ], 'new'),
  { id: "ch10.new.match", chapter: C, kind: "match", source: "new", topic: tr("Siyosatlar", 'Policies'), prompt: tr("Tashqi effektga qarshi vositani uning tavsifi bilan moslashtiring.", 'Match each tool against externalities with its description.'), pairs: [
    { left: "Command-and-control", right: tr("Xatti-harakatni bevosita talab qilish yoki taqiqlash", 'Directly requiring or forbidding a behavior') },
    { left: "Corrective tax", right: tr("Ifloslanish narxini belgilaydi", 'Sets the price of pollution') },
    { left: "Tradable permits", right: tr("Ifloslanish miqdorini belgilaydi, narxni bozor aniqlaydi", 'Sets the quantity of pollution; the market determines the price') },
    { left: "Patent", right: tr("Ixtirochiga mulk huquqi berib, spilloverni internallashtiradi", 'Gives the inventor a property right, internalizing the spillover') },
    { left: "Coase bargain", right: tr("Tomonlar o'zaro kelishib samarali natijaga keladi", 'The parties bargain to an efficient outcome') },
  ] },
  mk("ch10.new.uz", tr("O'zbekistondan misol", 'An example from Uzbekistan'), tr("Toshkentda yozda tirbandlik va havo ifloslanishi kuchli. Iqtisodchi qaysi yechimni birinchi bo'lib taklif qiladi?", 'In summer Tashkent suffers from heavy traffic and air pollution. Which solution would an economist suggest first?'), [
    { text: tr("Yoqilg'i yoki shahar markaziga kirish uchun korrektiv to'lov — haydovchilar tashqi xarajatni hisobga oladi", 'A corrective charge on fuel or on entering the city center — drivers take the external cost into account'), correct: true, why: tr("Market-based policy: har bir haydovchi o'zi qanday moslashishni tanlaydi (metro, sheriklik, yaqinroq ko'chish) — eng arzon yo'l bilan.", 'A market-based policy: each driver chooses how to adjust (metro, carpooling, moving closer) — the cheapest way.') },
    { text: tr("Barcha mashinalarni taqiqlash", 'Ban all cars'), why: tr("Optimal miqdor nol emas — taqiq juda qimmat.", "The optimal quantity isn't zero — a ban is very costly.") },
    { text: tr("Hech narsa qilmaslik", 'Do nothing'), why: tr("Salbiy tashqi effekt bozor samarasizligini anglatadi.", 'A negative externality means the market is inefficient.') },
    { text: tr("Benzin narxiga shift qo'yish", 'Cap the price of gasoline'), why: tr("Bu ko'proq haydashga undab, muammoni kuchaytiradi.", 'That encourages more driving and worsens the problem.') },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
