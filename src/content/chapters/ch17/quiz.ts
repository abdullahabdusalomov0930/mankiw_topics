import type { Question } from '../../types';
import { tr } from '../../../lib/lang';

const C = 17;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });
const cond = ['marginal revenue is greater than marginal cost.', 'marginal revenue is greater than average total cost.', 'price is greater than marginal cost.', 'price is greater than average total cost.'];
const elas = ['increase; increase', 'increase; decrease', 'decrease; increase', 'decrease; decrease'];

export const quickQuiz: Question[] = [
  mk("ch17.qq.1", tr("Xususiyatlar", 'Features'), "Which of the following conditions does NOT describe a firm in a monopolistically competitive market?", [
    { text: "It sells a product different from its competitors.", why: tr("Bu xususiyat — farqlanish.", 'That feature is differentiation.') },
    { text: "It takes its price as given by market conditions.", correct: true, why: tr("U price taker emas — talab egri chizig'i pastga qaragan.", "It isn't a price taker — its demand curve slopes down.") },
    { text: "It maximizes profit both in the short run and in the long run.", why: tr("Har qanday firma foydani maksimallashtiradi.", 'Every firm maximizes profit.') },
    { text: "It has the freedom to enter or exit in the long run.", why: tr("Erkin kirish-chiqish — xususiyat.", 'Free entry and exit is a feature.') },
  ]),
  mk("ch17.qq.2", tr("Tasniflash", 'Classification'), "Which of the following markets best fits the definition of monopolistic competition?", [
    { text: "wheat", why: tr("Bir xil mahsulot — mukammal raqobat.", 'An identical product — perfect competition.') },
    { text: "tap water", why: tr("Monopoliya.", 'Monopoly.') },
    { text: "crude oil", why: tr("Bir xil tovar (oligopoliya ham).", 'An identical good (oligopoly too).') },
    { text: "haircuts", correct: true, why: tr("Ko'p sartarosh, farqli xizmat, erkin kirish.", 'Many barbers, differentiated service, free entry.') },
  ]),
  mk("ch17.qq.3", tr("Qisqa muddat", 'Short run'), "A monopolistically competitive firm will increase its production if", cond.map((c, i) => ({
    text: c,
    correct: i === 0,
    why: [tr("MR > MC — qo'shimcha birlik foydani oshiradi.", 'MR > MC — an extra unit raises profit.'), tr("Qaror MR va MC bo'yicha.", 'The decision is based on MR and MC.'), tr("Uzoq muddatda ham P > MC — bu ishlab chiqarishni oshirishga sabab emas.", "Even in the long run P > MC — that's no reason to raise output."), tr("Bu kirish sharti.", "That's the condition for entry.")][i],
  }))),
  mk("ch17.qq.4", tr("Kirish", 'Entry'), "New firms will enter a monopolistically competitive market if", cond.map((c, i) => ({
    text: c,
    correct: i === 3,
    why: [tr("Bu ishlab chiqarish qarori.", "That's a production decision."), tr("Ma'nosiz taqqoslash.", 'A meaningless comparison.'), tr("LR muvozanatda ham P > MC, lekin kirish yo'q.", "In LR equilibrium P > MC too, but there's no entry."), tr("P > ATC — iqtisodiy foyda bor → kirish.", "P > ATC — there's economic profit → entry.")][i],
  }))),
  mk("ch17.qq.5", tr("LR muvozanat", 'LR equilibrium'), "What is true of a monopolistically competitive market in long-run equilibrium?", [
    { text: "Price is greater than marginal cost.", correct: true, why: tr("Markup: P = ATC > MC.", 'The markup: P = ATC > MC.') },
    { text: "Price is equal to marginal revenue.", why: tr("MR < P (pastga qaragan talab).", 'MR < P (downward-sloping demand).') },
    { text: "Firms make positive economic profits.", why: tr("Kirish foydani nolga tushiradi.", 'Entry drives profit to zero.') },
    { text: "Firms produce at the minimum of average total cost.", why: tr("Excess capacity — minimumdan chapda.", 'Excess capacity — to the left of the minimum.') },
  ]),
  mk("ch17.qq.6", tr("Reklama", 'Advertising'), "If advertising makes consumers more loyal to particular brands, it could ___ the elasticity of demand and ___ the markup of price over marginal cost.", elas.map((e, i) => ({
    text: e,
    correct: i === 2,
    why: [tr("Sodiqlik elastiklikni kamaytiradi.", 'Loyalty reduces elasticity.'), tr("Sodiqlik elastiklikni kamaytiradi.", 'Loyalty reduces elasticity.'), tr("Kam elastik talab → katta markup (tanqidchilar fikri).", "Less elastic demand → a larger markup (the critics' view)."), tr("Kam elastik talabda markup oshadi.", 'With less elastic demand the markup rises.')][i],
  }))),
  mk("ch17.qq.7", tr("Reklama", 'Advertising'), "If advertising makes consumers more aware of alternative products, it could ___ the elasticity of demand and ___ the markup of price over marginal cost.", elas.map((e, i) => ({
    text: e,
    correct: i === 1,
    why: [tr("Elastik talabda markup kamayadi.", 'With elastic demand the markup falls.'), tr("Ko'proq tanlov → elastikroq talab → kichik markup (himoyachilar fikri).", "More choice → more elastic demand → a smaller markup (the defenders' view)."), tr("Axborot elastiklikni oshiradi.", 'Information increases elasticity.'), tr("Axborot elastiklikni oshiradi.", 'Information increases elasticity.')][i],
  }))),
  mk("ch17.qq.8", "Signal", "Advertising can be a signal of quality", [
    { text: "if advertising is freely available to all firms.", why: tr("Arzon reklamani hamma qiladi — signal yo'q.", "Everyone does cheap advertising — there's no signal.") },
    { text: "if the benefit of attracting customers is greater for firms with better products.", correct: true, why: tr("Yaxshi mahsulot takroriy xarid beradi — faqat u qimmat reklamaga arziydi.", 'A good product brings repeat purchases — only it is worth expensive advertising.') },
    { text: "only if consumers are irrationally attracted to the products they see advertised.", why: tr("Aksincha — reklama qilingan mahsulotni sinash ratsional.", 'The reverse — trying an advertised product is rational.') },
    { text: "only if the content of the ads contains credible information about the products.", why: tr("Mazmun emas — reklama **narxi** signal.", 'Not the content — the **cost** of advertising is the signal.') },
  ]),
];

export const checks: Record<string, Question> = {
  "s-17-1": { id: "ch17.check.17-1", chapter: C, kind: "match", source: "new", topic: tr("Bozor tuzilmalari", 'Market structures'), prompt: tr("Bozor tuzilmasini tavsifi bilan moslashtiring.", 'Match each market structure with its description.'), pairs: [
    { left: "Monopoly", right: tr("Bitta firma", 'One firm') },
    { left: "Oligopoly", right: tr("Bir nechta firma, strategik o'zaro ta'sir", 'A few firms, strategic interaction') },
    { left: "Monopolistic competition", right: tr("Ko'p firma, farqli mahsulot", 'Many firms, differentiated products') },
    { left: "Perfect competition", right: tr("Ko'p firma, bir xil mahsulot", 'Many firms, identical products') },
  ] },
  "s-17-2a": { id: "ch17.check.17-2a", chapter: C, kind: "tf", source: "new", topic: tr("Qisqa muddat", 'Short run'), prompt: tr("Qisqa muddatda monopolistik raqobatchi monopolist kabi qaror qabul qiladi: MR = MC da miqdor, narx — talab egri chizig'idan.", 'In the short run a monopolistic competitor decides like a monopolist: quantity where MR = MC, price from the demand curve.'), answer: true, why: tr("Figure 2: foyda (a) yoki zarar (b) bo'lishi mumkin.", 'Figure 2: there may be profit (a) or loss (b).') },
  "s-17-2b": mk("ch17.check.17-2b", tr("Uzoq muddat", 'Long run'), tr("Monopolistik raqobatchi firmalar foyda ko'rsa nima bo'ladi?", 'What happens if monopolistically competitive firms are making profits?'), [
    { text: tr("Yangi firmalar kiradi → har bir firmaning talabi chapga siljiydi → talab ATC ga urinmaguncha (tangency) foyda kamayadi", "New firms enter → each firm's demand shifts left → profit falls until demand is tangent to ATC (tangency)"), correct: true, why: tr("Figure 3: P = ATC, foyda 0.", 'Figure 3: P = ATC, profit 0.') },
    { text: tr("Narx MC gacha tushadi", 'The price falls to MC'), why: tr("P = ATC > MC.", 'P = ATC > MC.') },
    { text: tr("Firmalar chiqadi", 'Firms exit'), why: tr("Foyda — kirish.", 'Profit — entry.') },
    { text: tr("Talab o'ngga siljiydi", 'Demand shifts right'), why: tr("Kirishda chapga.", 'With entry, left.') },
  ], 'new'),
  "s-17-2c": mk("ch17.check.17-2c", tr("Farqlar", 'Differences'), tr("Mukammal raqobat bilan solishtirganda monopolistik raqobatning ikki farqi?", 'The two differences between monopolistic competition and perfect competition?'), [
    { text: tr("Excess capacity (efficient scale dan kam) va markup (P > MC)", 'Excess capacity (below the efficient scale) and a markup (P > MC)'), correct: true, why: "Figure 4." },
    { text: tr("Musbat LR foyda va kirish yo'q", 'Positive LR profit and no entry'), why: tr("Bu monopoliya.", "That's monopoly.") },
    { text: tr("Kam firma va strategik o'zaro ta'sir", 'Few firms and strategic interaction'), why: tr("Bu oligopoliya.", "That's oligopoly.") },
    { text: tr("Farq yo'q", "There's no difference"), why: tr("Ikki farq bor.", 'There are two differences.') },
  ], 'new'),
  "s-17-2d": mk("ch17.check.17-2d", tr("Farovonlik", 'Welfare'), tr("Nega monopolistik raqobatda firmalar soni samarali bo'lmasligi mumkin?", 'Why might the number of firms under monopolistic competition be inefficient?'), [
    { text: tr("Kirishning ikki tashqi effekti: product-variety (ijobiy, iste'molchilarga) va business-stealing (salbiy, mavjud firmalarga) — qaysi biri katta bo'lishiga qarab firmalar juda ko'p yoki juda kam", 'The two externalities of entry: product variety (positive, to consumers) and business stealing (negative, to existing firms) — depending on which is larger, there are too many or too few firms'), correct: true, why: tr("Mukammal raqobatda bu effektlar yo'q.", "Under perfect competition these effects don't exist.") },
    { text: tr("Davlat cheklaydi", 'The government limits it'), why: tr("Erkin kirish.", 'Entry is free.') },
    { text: tr("Firmalar doim juda ko'p", 'There are always too many firms'), why: tr("Kam bo'lishi ham mumkin.", 'There may also be too few.') },
    { text: tr("Firmalar doim juda kam", 'There are always too few firms'), why: tr("Ko'p bo'lishi ham mumkin.", 'There may also be too many.') },
  ], 'new'),
  "s-17-3a": { id: "ch17.check.17-3a", chapter: C, kind: "numeric", source: "new", topic: tr("Benham", 'Benham'), prompt: tr("Benham (1972): reklama taqiqlangan shtatlarda ko'zoynak $33, ruxsat berilganlarda $26. Reklama narxni taxminan necha foiz kamaytirgan?", 'Benham (1972): eyeglasses cost $33 in states that banned advertising and $26 in those that allowed it. By roughly what percentage did advertising lower the price?'), answer: 21, tolerance: 1.5, unit: "%", why: tr("(33 − 26)/33 ≈ 21% — “20% dan ko'p”. Rhode Island alkogol narxlari tadqiqoti ham shunday: reklama raqobat va past narxlarga olib keladi.", '(33 − 26)/33 ≈ 21% — “more than 20%.” A study of Rhode Island liquor prices found the same: advertising leads to competition and lower prices.') },
  "s-17-3b": { id: "ch17.check.17-3b", chapter: C, kind: "tf", source: "new", topic: "Signal", prompt: tr("Signal nazariyasiga ko'ra, reklamaning mazmuni asosiy axborot manbai.", 'According to signaling theory, the content of an ad is the main source of information.'), answer: false, why: tr("Mazmun emas — firma reklamaga **katta pul** sarflashga tayyorligi sifat haqida axborot beradi.", "Not the content — a firm's willingness to spend **a lot of money** on advertising conveys information about quality.") },
  "s-17-3c": mk("ch17.check.17-3c", tr("Brendlar", 'Brands'), tr("Brend nomlari foydasi haqida himoyachilarning ikki dalili?", "The defenders' two arguments for the benefit of brand names?"), [
    { text: tr("Oldindan baholab bo'lmaydigan sifat haqida axborot beradi va firmaga obro'sini saqlash uchun sifatni ushlab turish rag'batini beradi", "They provide information about quality that can't be judged in advance and give firms an incentive to maintain quality to protect their reputation"), correct: true, why: tr("McDonald's misoli.", "The McDonald's example.") },
    { text: tr("Narxni pasaytiradi va soliqni kamaytiradi", 'They lower prices and reduce taxes'), why: tr("Brend tovarlar odatda qimmatroq.", 'Branded goods are usually more expensive.') },
    { text: tr("Raqobatni yo'q qiladi", 'They eliminate competition'), why: tr("Bu tanqidchilar xavotiri.", "That's the critics' worry.") },
    { text: tr("Iste'molchilarni irratsional qiladi", 'They make consumers irrational'), why: tr("Bu tanqid.", "That's a criticism.") },
  ], 'new'),
};

export const practice: Question[] = [
  { id: "ch17.new.p7-n", chapter: C, kind: "numeric", source: "new", topic: "Problem 7", prompt: tr("Har firma: Q = 100/N − P, TC = 50 + Q², MC = 2Q. Uzoq muddatda firmalar soni?", 'Each firm: Q = 100/N − P, TC = 50 + Q², MC = 2Q. The number of firms in the long run?'), answer: 5, tolerance: 0, why: tr("Q = 25/N, P = 75/N, foyda = 1,250/N² − 50 = 0 → N = 5 (Q = 5, P = $15).", 'Q = 25/N, P = 75/N, profit = 1,250/N² − 50 = 0 → N = 5 (Q = 5, P = $15).'), traps: [{ value: 25, why: tr("N² = 25 — ildiz oling.", 'N² = 25 — take the square root.') }] },
  { id: "ch17.new.p7-q", chapter: C, kind: "numeric", source: "new", topic: "Problem 7", prompt: tr("N = 5 da har bir firma narxi?", "Each firm's price at N = 5?"), answer: 15, tolerance: 0, unit: "$", why: tr("P = 75/5 = 15 = ATC (50/5 + 5); MC = 10 → markup $5.", 'P = 75/5 = 15 = ATC (50/5 + 5); MC = 10 → a $5 markup.') },
  mk("ch17.new.p5", "Problem 5", tr("Monopolistik raqobatchi: P < MC, P > ATC. Firma foydani maksimallashtiryaptimi?", 'A monopolistic competitor: P < MC, P > ATC. Is the firm maximizing profit?'), [
    { text: tr("Yo'q: P < MC → MR < MC, miqdorni kamaytirsa foyda oshadi", 'No: P < MC → MR < MC; cutting output would raise profit'), correct: true, why: tr("Foyda maksimumida MR = MC < P bo'lishi kerak.", 'At the profit maximum MR = MC < P must hold.') },
    { text: tr("Ha, uzoq muddatli muvozanatda", 'Yes, in long-run equilibrium'), why: tr("LR da P = ATC.", 'In the LR, P = ATC.') },
    { text: tr("Ha, lekin kirish bo'ladi", 'Yes, but there will be entry'), why: tr("Avval MR = MC ga keltirish kerak.", 'First it must get to MR = MC.') },
    { text: tr("Ishlab chiqarishni oshirishi kerak", 'It should raise output'), why: tr("Teskari.", 'The reverse.') },
  ], 'new'),
  mk("ch17.new.p5d", "Problem 5d", tr("P > MC, P = ATC holati?", 'The case P > MC, P = ATC?'), [
    { text: tr("Foyda maksimal bo'lishi mumkin va bu uzoq muddatli muvozanat (tangency)", 'Profit may be maximized and this is a long-run equilibrium (tangency)'), correct: true, why: "Figure 3." },
    { text: tr("Kirish bo'ladi", 'There will be entry'), why: tr("Foyda 0.", 'Profit is 0.') },
    { text: tr("Chiqish bo'ladi", 'There will be exit'), why: tr("Zarar yo'q.", 'There are no losses.') },
    { text: tr("Firma miqdorni oshirishi kerak", 'The firm should raise its quantity'), why: "MR = MC da." },
  ], 'new'),
  mk("ch17.new.nutville", "Problem 8", tr("Nutville'da barcha yeryong'oq pastasi brendlari bir xil ekani aniqlandi — bozor mukammal raqobatli bo'ldi. Uzoq muddatda tipik firma?", 'In Nutville all peanut-butter brands turn out to be identical — the market becomes perfectly competitive. The typical firm in the long run?'), [
    { text: tr("Narx tushadi (P = min ATC), miqdor oshadi (efficient scale), ATC tushadi, MC oshadi, foyda 0 da qoladi", 'The price falls (P = min ATC), quantity rises (efficient scale), ATC falls, MC rises, profit stays at 0'), correct: true, why: tr("Excess capacity va markup yo'qoladi.", 'Excess capacity and the markup disappear.') },
    { text: tr("Narx oshadi", 'The price rises'), why: tr("Markup yo'qoladi.", 'The markup disappears.') },
    { text: tr("Foyda oshadi", 'Profit rises'), why: tr("Ikkalasida ham LR foyda 0.", 'LR profit is 0 in both.') },
    { text: tr("Hech narsa o'zgarmaydi", 'Nothing changes'), why: tr("Firma efficient scale ga o'tadi.", 'The firm moves to the efficient scale.') },
  ], 'new'),
  mk("ch17.new.ads", "Problem 9", tr("Qaysi biri ko'proq reklama qiladi: yangi qulay ustara ixtiro qilgan kompaniya yoki noqulay ustara ixtiro qilgan?", 'Which advertises more: a company that invented a new comfortable razor or one that invented an uncomfortable razor?'), [
    { text: tr("Qulay ustara kompaniyasi — mijozlar takror sotib oladi, reklama o'zini oqlaydi (signal)", 'The comfortable-razor company — customers buy again, so advertising pays off (a signal)'), correct: true, why: tr("Shuningdek: restoran (fermadan ko'ra) va avtomobil (forkliftdan ko'ra) — farqli iste'mol tovarlari.", 'Likewise: a restaurant (rather than a farm) and a car (rather than a forklift) — differentiated consumer goods.') },
    { text: tr("Noqulay ustara", 'The uncomfortable razor'), why: tr("Takroriy xarid yo'q — reklama zarar.", 'No repeat purchases — advertising loses money.') },
    { text: tr("Ikkalasi bir xil", 'Both the same'), why: tr("Signal sharti farq qiladi.", 'The signaling condition differs.') },
    { text: "Hech biri", why: tr("Iste'mol tovarlari ko'p reklama qilinadi.", 'Consumer goods are heavily advertised.') },
  ], 'new'),
  { id: "ch17.new.tf-holiday", chapter: C, kind: "tf", source: "new", topic: "Markup", prompt: tr("Mukammal raqobatchi firma eshigidan joriy narxda yangi xaridor kirsa befarq, monopolistik raqobatchi esa doim xursand.", 'A perfectly competitive firm is indifferent when a new customer walks in at the current price, while a monopolistic competitor is always happy.'), answer: true, why: tr("Raqobatchi: P = MC — qo'shimcha birlik foydasi 0. Monopolistik raqobatchi: P > MC — qo'shimcha foyda. Shuning uchun bayram tabriknomalari yuboradi.", "Competitive: P = MC — the profit on an extra unit is 0. Monopolistic competitor: P > MC — extra profit. That's why it sends holiday cards.") },
  mk("ch17.new.uz", tr("O'zbekistondan misol", 'An example from Uzbekistan'), tr("Toshkentda yuzlab choyxona va kafe bor, har birining menyusi va muhiti farqli, yangi kafe ochish oson. Bu qaysi bozor?", 'Tashkent has hundreds of teahouses and cafés, each with a different menu and atmosphere, and opening a new café is easy. What market is this?'), [
    { text: tr("Monopolistik raqobat: uzoq muddatda foyda 0 ga intiladi, lekin narx MC dan yuqori va kafelar ko'pincha to'liq band emas (excess capacity)", 'Monopolistic competition: in the long run profit tends to 0, but the price is above MC and cafés are often not fully occupied (excess capacity)'), correct: true, why: tr("Uch xususiyat: ko'p sotuvchi, farqlanish, erkin kirish.", 'Three features: many sellers, differentiation, free entry.') },
    { text: tr("Mukammal raqobat", 'Perfect competition'), why: tr("Mahsulotlar farqli.", 'The products differ.') },
    { text: tr("Oligopoliya", 'Oligopoly'), why: tr("Sotuvchilar ko'p.", 'There are many sellers.') },
    { text: tr("Monopoliya", 'Monopoly'), why: tr("Ko'p raqib bor.", 'There are many rivals.') },
  ], 'new'),
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice];
