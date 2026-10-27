import { equilibrium } from '../../../lib/econ';
import type { Question } from '../../types';
import { wheat, wheatD, wheatS1 } from './presets';
import { tr } from '../../../lib/lang';

const C = 5;
type Opt = { text: string; correct?: boolean; why: string };
const mk = (id: string, topic: string, prompt: string, options: Opt[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({ id, chapter: C, kind: 'mcq', source, topic, prompt, options });

export const quickQuiz: Question[] = [
  mk("ch05.qq.1", tr("Egiluvchanlik omillari", 'Determinants of elasticity'), "A good tends to have a **small** price elasticity of demand if", [
    { text: "the good is a necessity.", correct: true, why: tr("Zaruratdan oson voz kechilmaydi — narx oshsa ham deyarli bir xil miqdor olinadi (shifokor qabuli).", "A necessity isn't easily given up — people buy almost the same amount even when the price rises (doctor visits).") },
    { text: "there are many close substitutes.", why: tr("Yaqin o'rinbosarlar ko'p bo'lsa, talab **egiluvchan**: osongina boshqasiga o'tiladi (sariyog' va margarin).", 'With many close substitutes demand is **elastic**: people switch easily (butter and margarine).') },
    { text: "the market is narrowly defined.", why: tr("Tor bozor (vanil muzqaymoq) — o'rinbosarlar ko'p — **egiluvchan**.", 'A narrowly defined market (vanilla ice cream) has many substitutes — **elastic**.') },
    { text: "the long-run response is being measured.", why: tr("Uzoq muddatda odamlar ko'proq moslashadi — talab **egiluvchanroq**.", 'In the long run people adjust more — demand is **more elastic**.') },
  ]),
  mk("ch05.qq.2", tr("Tushum", 'Revenue'), "An increase in a good's price **reduces** the total amount consumers spend on the good if the ________ elasticity of demand is ________ than one.", [
    { text: "income; less", why: tr("Narx o'zgarishiga daromad egiluvchanligi emas, **narx** egiluvchanligi javob beradi.", 'It is the **price** elasticity, not the income elasticity, that governs the response to a price change.') },
    { text: "income; greater", why: tr("Xuddi shu sabab — bu daromad o'zgarishi haqida emas.", 'Same reason — this is not about a change in income.') },
    { text: "price; less", why: tr("E < 1 (inelastic) da narx oshsa xarajat **oshadi**.", 'With E < 1 (inelastic), a higher price **raises** spending.') },
    { text: "price; greater", correct: true, why: tr("E > 1: miqdor narxdan ko'proq foizga kamayadi → P × Q kamayadi.", 'E > 1: quantity falls by a larger percentage than the price rises → P × Q falls.') },
  ]),
  mk("ch05.qq.3", tr("Chiziqli talab", 'Linear demand'), "A linear, downward-sloping demand curve is", [
    { text: "inelastic.", why: tr("Faqat pastki qismi (past narx, katta miqdor) noegiluvchan.", 'Only the lower part (low price, large quantity) is inelastic.') },
    { text: "unit elastic.", why: tr("Faqat o'rta nuqtada E = 1.", 'E = 1 only at the midpoint.') },
    { text: "elastic.", why: tr("Faqat yuqori qismi egiluvchan.", 'Only the upper part is elastic.') },
    { text: "inelastic at some points and elastic at others.", correct: true, why: tr("Nishab doimiy, lekin \\(P/Q\\) o'zgaradi: yuqorida E > 1, pastda E < 1 (Figure 4).", 'The slope is constant but \\(P/Q\\) changes: E > 1 at the top, E < 1 at the bottom (Figure 4).') },
  ]),
  mk("ch05.qq.4", tr("Daromad egiluvchanligi", 'Income elasticity'), "The citizens of Rohan spend a **higher fraction** of their income on food than do the citizens of Gondor. The reason could be that", [
    { text: "Rohan has lower food prices, and the price elasticity of demand is zero.", why: tr("E = 0 bo'lsa, past narx kamroq xarajat degani — ulush **kichikroq** bo'lardi.", 'If E = 0, a lower price would mean lower spending — a **smaller** share.') },
    { text: "Rohan has lower food prices, and the price elasticity of demand is 0.5.", why: tr("Noegiluvchan talabda past narx — kamroq xarajat, ulush kichik.", 'With inelastic demand a lower price means lower spending and a smaller share.') },
    { text: "Rohan has lower income, and the income elasticity of demand is 0.5.", correct: true, why: tr("Daromad egiluvchanligi < 1 (Engel qonuni): kambag'alroq mamlakat daromadining **kattaroq ulushini** ovqatga sarflaydi.", "An income elasticity < 1 (Engel's law): a poorer country spends a **larger share** of its income on food.") },
    { text: "Rohan has lower income, and the income elasticity of demand is 1.5.", why: tr("E_I > 1 bo'lsa, ovqat ulushi daromad bilan **oshardi** — kambag'al Rohan kichikroq ulush sarflardi.", 'If E_I > 1, the food share would **rise** with income — poor Rohan would spend a smaller share.') },
  ]),
  { id: "ch05.qq.5", chapter: C, kind: "mcq", source: "quickquiz", topic: tr("Taklif egiluvchanligi", 'Elasticity of supply'), prompt: "The price of a good rises from **$16 to $24**, and the quantity supplied rises from **90 to 110** units. Calculated with the midpoint method, the price elasticity of supply is", options: [
    { text: "1/5.", why: tr("Ehtimol foizlarni teskari bo'lgansiz yoki oddiy usul ishlatgansiz.", 'You probably flipped the percentages or used the simple method.') },
    { text: "1/2.", correct: true, why: "\\(\\%\\Delta Q = 20/100 = 20\\%\\), \\(\\%\\Delta P = 8/20 = 40\\%\\) → \\(E_s = 20/40 = 0.5\\)." },
    { text: "2.", why: tr("Bu \\(\\%\\Delta P / \\%\\Delta Q\\) — kasr teskari.", 'That is \\(\\%\\Delta P / \\%\\Delta Q\\) — the fraction is upside down.') },
    { text: "5.", why: tr("Hisoblashda xato: midpoint bo'yicha 20% va 40%.", 'A calculation error: by the midpoint method it is 20% and 40%.') },
  ] },
  mk("ch05.qq.6", tr("Egri chiziq turlari", 'Kinds of curves'), "If the price elasticity of supply is **zero**, the supply curve is", [
    { text: "upward sloping.", why: tr("Yuqoriga egilgan taklifda elastiklik musbat.", 'An upward-sloping supply curve has a positive elasticity.') },
    { text: "horizontal.", why: tr("Gorizontal — mutlaqo **egiluvchan** (E → ∞).", 'A horizontal curve is perfectly **elastic** (E → ∞).') },
    { text: "vertical.", correct: true, why: tr("E = 0: narx qanday bo'lmasin, miqdor bir xil — vertikal chiziq.", 'E = 0: the quantity is the same whatever the price — a vertical line.') },
    { text: "fairly flat at low quantities but steeper at larger quantities.", why: tr("Bu sig'imi cheklangan firmalar (Figure 6) — egiluvchanlik o'zgaradi, nol emas.", "That is firms with limited capacity (Figure 6) — the elasticity changes but isn't zero.") },
  ]),
  mk("ch05.qq.7", tr("Vaqt omili", 'Time'), "The ability of firms to enter and exit a market over time means that, in the long run,", [
    { text: "the demand curve is more elastic.", why: tr("Kirish va chiqish — **sotuvchilar** harakati, taklifga ta'sir qiladi.", 'Entry and exit are actions of **sellers**; they affect supply.') },
    { text: "the demand curve is less elastic.", why: tr("Firmalar kirishi talabga aloqador emas.", 'Firms entering has nothing to do with demand.') },
    { text: "the supply curve is more elastic.", correct: true, why: tr("Uzoq muddatda yangi zavodlar quriladi, yangi firmalar kiradi — taklif narxga ko'proq javob beradi.", 'In the long run new factories are built and new firms enter — supply responds more to the price.') },
    { text: "the supply curve is less elastic.", why: tr("Teskarisi: vaqt egiluvchanlikni oshiradi.", 'The reverse: time increases elasticity.') },
  ]),
  mk("ch05.qq.8", tr("Fermerlik", 'Farming'), "An increase in the supply of grain will **reduce** the total revenue grain producers receive if", [
    { text: "the supply curve is inelastic.", why: tr("Tushum yo'nalishini **talab** egiluvchanligi hal qiladi (narx talab bo'ylab harakat qiladi).", 'Which way revenue moves is decided by the elasticity of **demand** (the price moves along demand).') },
    { text: "the supply curve is elastic.", why: tr("Xuddi shu sabab.", 'Same reason.') },
    { text: "the demand curve is inelastic.", correct: true, why: tr("Taklif ↑ → narx ↓. Noegiluvchan talabda miqdor narxdan kamroq foizga oshadi → P × Q kamayadi (Figure 7).", 'Supply ↑ → price ↓. With inelastic demand quantity rises by a smaller percentage than the price falls → P × Q falls (Figure 7).') },
    { text: "the demand curve is elastic.", why: tr("Egiluvchan talabda narx tushishi tushumni **oshiradi**.", 'With elastic demand a lower price **raises** revenue.') },
  ]),
  mk("ch05.qq.9", tr("Fermerlik", 'Farming'), "In competitive markets, farmers adopt new technologies that will eventually reduce their revenue because", [
    { text: "each farmer is a price taker.", correct: true, why: tr("Har bir fermer narxni o'zgarmas deb oladi: har qanday narxda ko'proq ishlab chiqarish foydaliroq. Hamma shunday qilsa, narx tushadi.", 'Each farmer takes the price as given: at any price, producing more pays. When all of them do it, the price falls.') },
    { text: "farmers are short-sighted.", why: tr("Fermerlar ratsional — muammo individual va jamoaviy natijaning farqida.", 'Farmers are rational — the problem is the gap between the individual and the collective outcome.') },
    { text: "regulation requires the use of best practices.", why: tr("Kitobda bunday talab yo'q.", 'The book has no such demand.') },
    { text: "consumers pressure farmers to lower prices.", why: tr("Narxni bozor belgilaydi, iste'molchilar bosimi emas.", 'The market sets the price, not consumer pressure.') },
  ]),
  mk("ch05.qq.10", tr("OPEC", 'OPEC'), "Because the demand curve for oil is ________ elastic in the long run, OPEC's reduction in the supply of oil had a ________ impact on the price in the long run than it did in the short run.", [
    { text: "less; smaller", why: tr("Uzoq muddatda talab **ko'proq** egiluvchan.", 'In the long run demand is **more** elastic.') },
    { text: "less; larger", why: tr("Ikkala qism ham teskari.", 'Both parts are backward.') },
    { text: "more; smaller", correct: true, why: tr("Uzoq muddatda odamlar tejamkor mashinaga o'tadi, boshqa mamlakatlar ko'proq qazadi — egri chiziqlar yotiq, narx kamroq oshadi.", 'In the long run people switch to fuel-efficient cars and other countries pump more — the curves flatten and the price rises less.') },
    { text: "more; larger", why: tr("Egiluvchanroq bozorda bir xil siljish narxni **kamroq** o'zgartiradi.", 'In a more elastic market, the same shift changes the price **less**.') },
  ]),
  mk("ch05.qq.11", tr("Daromad va narx", 'Income and price'), "Over time, technological advances increase consumers' incomes and reduce the price of smartphones. Each of these forces increases the amount consumers **spend** on smartphones if the income elasticity of demand is greater than ________ and the price elasticity of demand is greater than ________.", [
    { text: "zero; zero", why: tr("Narx tushganda xarajat oshishi uchun talab **egiluvchan** (E > 1) bo'lishi kerak.", 'For spending to rise when the price falls, demand must be **elastic** (E > 1).') },
    { text: "zero; one", correct: true, why: tr("Daromad ↑: normal tovar (E_I > 0) bo'lsa xarajat ↑. Narx ↓: E_d > 1 bo'lsa miqdor narxdan ko'proq oshadi → xarajat ↑.", 'Income ↑: for a normal good (E_I > 0) spending ↑. Price ↓: if E_d > 1 quantity rises by a larger percentage than the price falls → spending ↑.') },
    { text: "one; zero", why: tr("Daromad uchun > 0 yetarli; narx uchun > 1 kerak.", 'For income, > 0 is enough; for the price, > 1 is needed.') },
    { text: "one; one", why: tr("Daromad egiluvchanligi 1 dan katta bo'lishi shart emas — musbat bo'lsa xarajat oshadi.", 'The income elasticity need not exceed 1 — if it is positive, spending rises.') },
  ]),
];

export const checks: Record<string, Question> = {
  "s-5-1a": mk("ch05.check.5-1a", tr("Egiluvchanlik omillari", 'Determinants of elasticity'), tr("Qaysi tovarga talab **eng egiluvchan**?", 'Demand for which good is **most elastic**?'), [
    { text: tr("Umuman oziq-ovqat", 'Food in general'), why: tr("Keng ta'riflangan bozor, o'rinbosari yo'q — noegiluvchan.", 'A broadly defined market with no substitute — inelastic.') },
    { text: "Non", why: tr("Zarurat va keng kategoriya — noegiluvchan.", 'A necessity and a broad category — inelastic.') },
    { text: tr("Ma'lum bir brenddagi gazlangan ichimlik", 'A particular brand of soda'), correct: true, why: tr("Juda tor bozor, yaqin o'rinbosarlar ko'p (boshqa brendlar) — juda egiluvchan (Mountain Dew: 4.4).", 'A very narrow market with many close substitutes (other brands) — very elastic (Mountain Dew: 4.4).') },
    { text: "Insulin", why: tr("Hayotiy zarurat, o'rinbosari yo'q — deyarli mutlaqo noegiluvchan.", 'A vital necessity with no substitute — almost perfectly inelastic.') },
  ], 'new'),
  "s-5-1c": { id: "ch05.check.5-1c", chapter: C, kind: "numeric", source: "new", topic: tr("Midpoint", 'Midpoint'), prompt: tr("Midpoint usulida: narx **$4 dan $6 ga** o'zgarishi necha foiz?", 'By the midpoint method, what percentage change is a price change **from $4 to $6**?'), answer: 40, tolerance: 0.5, unit: "%", why: tr("\\((6 - 4)/5 = 0.4 = 40\\%\\). Oddiy usulda 50% chiqardi; teskarisiga 33% — midpoint ikkala yo'nalishda 40%.", '\\((6 - 4)/5 = 0.4 = 40\\%\\). The simple method would give 50%, and 33% the other way — the midpoint gives 40% in both directions.'), traps: [{ value: 50, why: tr("Bu oddiy usul (boshlang'ich qiymatga bo'lish). Midpoint — o'rtachaga bo'lish.", 'That is the simple method (dividing by the starting value). The midpoint divides by the average.') }, { value: 33, why: tr("Bu $6 → $4 ning oddiy foizi.", 'That is the simple percentage for $6 → $4.') }] },
  "s-5-1d": { id: "ch05.check.5-1d", chapter: C, kind: "tf", source: "new", topic: tr("Egri chiziq turlari", 'Kinds of curves'), prompt: tr("Tekisroq (yotiqroq) talab egri chizig'i odatda egiluvchanroq talabni bildiradi.", 'A flatter demand curve usually indicates more elastic demand.'), answer: true, why: tr("Qoida: “The flatter the demand curve at a given point, the greater the price elasticity of demand.” Mutlaqo egiluvchan — gorizontal, mutlaqo noegiluvchan — vertikal.", 'The rule: “The flatter the demand curve at a given point, the greater the price elasticity of demand.” Perfectly elastic — horizontal, perfectly inelastic — vertical.') },
  "s-5-1e": { id: "ch05.check.5-1e", chapter: C, kind: "numeric", source: "new", topic: tr("Tushum", 'Revenue'), prompt: tr("Figure 3(b): narx $4 → $5, talab miqdori 100 → 70. Yangi umumiy tushum qancha?", 'Figure 3(b): the price goes $4 → $5 and quantity demanded 100 → 70. What is the new total revenue?'), answer: 350, tolerance: 0, unit: "$", why: tr("\\(5 \\times 70 = 350\\). Avval $400 edi — narx oshdi, tushum tushdi: demand elastic.", '\\(5 \\times 70 = 350\\). It was $400 — the price rose and revenue fell: demand is elastic.'), traps: [{ value: 400, why: tr("Bu eski tushum ($4 × 100).", 'That is the old revenue ($4 × 100).') }, { value: 500, why: tr("Yangi narxni eski miqdorga ko'paytirdingiz.", 'You multiplied the new price by the old quantity.') }] },
  "s-5-1f": mk("ch05.check.5-1f", tr("Chiziqli talab", 'Linear demand'), tr("Figure 4: \\(Q = 14 - 2P\\). Narx $1 dan $2 ga oshsa, tushumga nima bo'ladi?", 'Figure 4: \\(Q = 14 - 2P\\). What happens to revenue when the price rises from $1 to $2?'), [
    { text: tr("Oshadi ($12 → $20)", 'It rises ($12 → $20)'), correct: true, why: tr("Past narxda talab **noegiluvchan** (E = 0.3): narx va tushum bir yo'nalishda.", 'At low prices demand is **inelastic** (E = 0.3): price and revenue move together.') },
    { text: tr("Kamayadi", 'It falls'), why: tr("Bu yuqori narxlarda (masalan $5 → $6) bo'ladi.", 'That happens at high prices (say $5 → $6).') },
    { text: tr("O'zgarmaydi", "It doesn't change"), why: tr("Faqat $3 va $4 orasida (unit elastic) tushum bir xil ($24).", 'Only between $3 and $4 (unit elastic) is revenue the same ($24).') },
    { text: tr("Aniqlab bo'lmaydi", "Can't be determined"), why: tr("Jadval bor: $1 da 12 dona ($12), $2 da 10 dona ($20).", 'We have the table: 12 units at $1 ($12), 10 at $2 ($20).') },
  ], 'new'),
  "s-5-1g": mk("ch05.check.5-1g", tr("Kesishgan egiluvchanlik", 'Cross-price elasticity'), tr("Kompyuter narxi oshganda dasturlarga talab kamaydi. Kesishgan narx egiluvchanligining ishorasi va tovarlar turi?", 'When the price of computers rose, demand for software fell. What is the sign of the cross-price elasticity, and what kind of goods are they?'), [
    { text: tr("Manfiy — to'ldiruvchilar", 'Negative — complements'), correct: true, why: tr("Narx ↑, boshqa tovar miqdori ↓ → manfiy → complements.", "Price ↑, the other good's quantity ↓ → negative → complements.") },
    { text: tr("Musbat — o'rinbosarlar", 'Positive — substitutes'), why: tr("O'rinbosarlarda birining narxi oshsa, ikkinchisiga talab **oshadi**.", 'With substitutes, a higher price of one **raises** demand for the other.') },
    { text: tr("Manfiy — o'rinbosarlar", 'Negative — substitutes'), why: tr("Ishora to'g'ri, lekin manfiy — to'ldiruvchilar.", 'The sign is right, but negative means complements.') },
    { text: tr("Nol", 'Zero'), why: tr("Bog'liqlik bor — nol emas.", 'There is a relationship — not zero.') },
  ], 'new'),
  "s-5-2b": { id: "ch05.check.5-2b", chapter: C, kind: "numeric", source: "new", topic: tr("Taklif egiluvchanligi", 'Elasticity of supply'), prompt: tr("Figure 6: narx $3 → $4 (midpoint 29%), taklif miqdori 100 → 200 (67%). Taklif egiluvchanligi (2 xona aniqlikda)?", 'Figure 6: the price goes $3 → $4 (midpoint 29%) and the quantity supplied 100 → 200 (67%). The elasticity of supply (to 2 decimals)?'), answer: 2.33, tolerance: 0.05, why: tr("\\(67/29 \\approx 2.3\\) — elastic. Sig'im bo'sh, firmalar osongina ko'paytiradi.", '\\(67/29 \\approx 2.3\\) — elastic. There is spare capacity, so firms expand easily.'), traps: [{ value: 0.43, why: tr("Kasrni teskari oldingiz: \\(\\%\\Delta Q / \\%\\Delta P\\).", 'You flipped the fraction: \\(\\%\\Delta Q / \\%\\Delta P\\).') }] },
  "s-5-3a": mk("ch05.check.5-3a", tr("Fermerlik", 'Farming'), tr("Nega davlat ba'zan fermerlarga ekmaslik uchun pul to'laydi?", 'Why does the government sometimes pay farmers not to plant?'), [
    { text: tr("Talab noegiluvchan: taklifni kamaytirish narxni ko'p oshiradi va fermerlar umumiy tushumini oshiradi", "Demand is inelastic: cutting supply raises the price a lot and raises farmers' total revenue"), correct: true, why: tr("Noegiluvchan talabda narx va tushum bir yo'nalishda: kam hosil — yuqori tushum. Lekin bu iste'molchilar va soliq to'lovchilar hisobiga.", 'With inelastic demand price and revenue move together: a small harvest means high revenue. But it comes at the expense of consumers and taxpayers.') },
    { text: tr("Yerni dam oldirish uchun", 'To let the land rest'), why: tr("Kitob iqtisodiy sababni ko'rsatadi — tushum.", 'The book points to an economic reason — revenue.') },
    { text: tr("Talab egiluvchan bo'lgani uchun", 'Because demand is elastic'), why: tr("Egiluvchan talabda taklifni kamaytirish tushumni **kamaytirardi**.", 'With elastic demand, cutting supply would **lower** revenue.') },
    { text: tr("Iste'molchilarga arzon oziq-ovqat berish uchun", 'To give consumers cheap food'), why: tr("Taklif kamayishi narxni **oshiradi**.", 'Cutting supply **raises** the price.') },
  ], 'new'),
  "s-5-3b": { id: "ch05.check.5-3b", chapter: C, kind: "tf", source: "new", topic: tr("OPEC", 'OPEC'), prompt: tr("OPEC narxni qisqa muddatda ko'tara oldi, chunki qisqa muddatda neft talabi ham, taklifi ham noegiluvchan.", 'OPEC could raise the price in the short run because in the short run both the demand for and the supply of oil are inelastic.'), answer: true, why: tr("Qisqa muddatda odatlar va qazib olish quvvati tez o'zgarmaydi → egri chiziqlar tik → kichik siljish katta narx o'zgarishi.", "In the short run habits and pumping capacity can't change quickly → the curves are steep → a small shift means a big price change.") },
  "s-5-3c": mk("ch05.check.5-3c", tr("Narkotiklar", 'Drugs'), tr("Nega **interdiction** (taklifni kesish) giyohvandlik bilan bog'liq jinoyatni oshirishi mumkin?", 'Why might drug **interdiction** (cutting supply) increase drug-related crime?'), [
    { text: tr("Talab noegiluvchan: narx ko'p oshadi, iste'mol kam kamayadi → giyohvandlar ko'proq pul to'laydi", 'Demand is inelastic: the price rises a lot and use falls only a little → users pay more in total'), correct: true, why: tr("P × Q oshadi — pul topish uchun jinoyat ko'payishi mumkin. Talabni kamaytirish (ta'lim) esa P va Q ni ikkalasini tushiradi.", 'P × Q rises — crime to raise the money may increase. Reducing demand (education) lowers both P and Q.') },
    { text: tr("Taklif egiluvchan bo'lgani uchun", 'Because supply is elastic'), why: tr("Asosiy omil — talab egiluvchanligi (tushum yo'nalishi).", 'The key factor is the elasticity of demand (the direction of revenue).') },
    { text: tr("Narx tushgani uchun", 'Because the price falls'), why: tr("Interdiction taklifni kamaytiradi — narx **oshadi**.", 'Interdiction cuts supply — the price **rises**.') },
    { text: tr("Iste'mol oshgani uchun", 'Because use rises'), why: tr("Iste'mol (Q) kamayadi; jami to'lov oshadi.", 'Use (Q) falls; total spending rises.') },
  ], 'new'),
};

export const practice: Question[] = [
  { id: "ch05.new.business", chapter: C, kind: "numeric", source: "new", topic: tr("Midpoint", 'Midpoint'), prompt: tr("Problem 2: biznes sayohatchilar uchun chipta $200 → $250, miqdor 2,000 → 1,900. Narx egiluvchanligi (2 xona)?", 'Problem 2: for business travelers the fare goes $200 → $250 and the quantity 2,000 → 1,900. The price elasticity (2 decimals)?'), answer: 0.23, tolerance: 0.01, why: "\\(\\%\\Delta Q = -100/1950 = -5.13\\%\\); \\(\\%\\Delta P = 50/225 = 22.2\\%\\); \\(E = 0.23\\) — inelastic.", traps: [{ value: 4.33, why: tr("Kasr teskari.", 'The fraction is upside down.') }] },
  { id: "ch05.new.vacation", chapter: C, kind: "numeric", source: "new", topic: tr("Midpoint", 'Midpoint'), prompt: tr("Xuddi shu narx o'zgarishida dam oluvchilar: 800 → 600. Egiluvchanlik (2 xona)?", 'With the same price change, vacationers go from 800 to 600. The elasticity (2 decimals)?'), answer: 1.29, tolerance: 0.01, why: tr("\\(\\%\\Delta Q = -200/700 = -28.6\\%\\), \\(E = 28.6/22.2 = 1.29\\) — elastic: dam oluvchilar boshqa sana yoki joyni tanlay oladi.", '\\(\\%\\Delta Q = -200/700 = -28.6\\%\\), \\(E = 28.6/22.2 = 1.29\\) — elastic: vacationers can choose another date or place.') },
  { id: "ch05.new.cigarettes", chapter: C, kind: "numeric", source: "new", topic: tr("Siyosat", 'Policy'), prompt: tr("Problem 10a: sigaret talab egiluvchanligi 0.4. Chekishni 20% kamaytirish uchun narx (midpoint bo'yicha) necha foiz oshishi kerak?", 'Problem 10a: the price elasticity of demand for cigarettes is 0.4. To cut smoking by 20%, by what percentage (midpoint) must the price rise?'), answer: 50, tolerance: 0.5, unit: "%", why: "\\(\\%\\Delta P = \\%\\Delta Q / E = 20/0.4 = 50\\%\\). $5 dan: \\((P_2 - 5)/[(P_2 + 5)/2] = 0.5 \\Rightarrow P_2 \\approx 8.33\\).", traps: [{ value: 8, why: tr("Ko'paytirdingiz (20 × 0.4). Bo'lish kerak.", 'You multiplied (20 × 0.4). You need to divide.') }] },
  { id: "ch05.new.thelma", chapter: C, kind: "mcq", source: "new", topic: tr("Egri chiziq turlari", 'Kinds of curves'), prompt: tr("Problem 9: Louise “$20 lik benzin” buyuradi (narxni ko'rmasdan). Uning talab egiluvchanligi?", 'Problem 9: Louise asks for “$20 worth of gas” (without looking at the price). Her elasticity of demand?'), options: [
    { text: tr("0 — mutlaqo noegiluvchan", '0 — perfectly inelastic'), why: tr("Bu Thelma (har doim 5 gallon) — miqdor qat'iy.", 'That is Thelma (always 5 gallons) — a fixed quantity.') },
    { text: tr("1 — birlik egiluvchan", '1 — unit elastic'), correct: true, why: tr("Xarajat (P × Q) doim $20 — tushum o'zgarmaydi, demak E = 1.", "Her spending (P × Q) is always $20 — revenue doesn't change, so E = 1.") },
    { text: tr("∞ — mutlaqo egiluvchan", '∞ — perfectly elastic'), why: tr("Gorizontal talab bu emas: Louise narx oshsa ham sotib oladi, faqat kamroq gallon.", 'Not a horizontal demand curve: Louise still buys when the price rises, just fewer gallons.') },
    { text: tr("Aniqlab bo'lmaydi", "Can't be determined"), why: tr("Xarajat doimiyligi — unit elasticity'ning aniq belgisi.", 'Constant spending is the clear sign of unit elasticity.') },
  ] },
  { id: "ch05.new.tf-slope", chapter: C, kind: "tf", source: "new", topic: tr("Chiziqli talab", 'Linear demand'), prompt: tr("Chiziqli talab egri chizig'ida nishab doimiy bo'lgani uchun egiluvchanlik ham har bir nuqtada bir xil.", 'Because a linear demand curve has a constant slope, its elasticity is the same at every point.'), answer: false, why: tr("Nishab — o'zgarishlar nisbati, egiluvchanlik — **foiz** o'zgarishlar nisbati. Chiziq bo'ylab P/Q o'zgaradi, shuning uchun E ham o'zgaradi.", 'Slope is the ratio of changes, elasticity the ratio of **percentage** changes. Along the line P/Q changes, so E changes too.') },
  { id: "ch05.new.tf-income", chapter: C, kind: "tf", source: "new", topic: tr("Daromad egiluvchanligi", 'Income elasticity'), prompt: tr("Daromad egiluvchanligi manfiy bo'lgan tovar — inferior good.", 'A good with a negative income elasticity is an inferior good.'), answer: true, why: tr("Daromad ↑ → talab ↓ → manfiy ishora. Masalan, avtobus qatnovi.", 'Income ↑ → demand ↓ → a negative sign. Bus rides, for example.') },
  { id: "ch05.new.museum", chapter: C, kind: "mcq", source: "new", topic: tr("Tushum", 'Revenue'), prompt: tr("Problem 11: muzey tushumini oshirmoqchi. Kirish narxini oshirish kerakmi?", 'Problem 11: a museum wants to raise revenue. Should it raise the admission price?'), options: [
    { text: tr("Ha, har doim", 'Yes, always'), why: tr("Agar talab egiluvchan bo'lsa, narx oshishi tushumni **kamaytiradi**.", 'If demand is elastic, a higher price **lowers** revenue.') },
    { text: tr("Talab noegiluvchan bo'lsa — oshirish, egiluvchan bo'lsa — tushirish", 'Raise it if demand is inelastic, lower it if demand is elastic'), correct: true, why: tr("Tushum qoidasi: E < 1 — narx va tushum bir yo'nalishda; E > 1 — qarama-qarshi.", 'The revenue rule: E < 1 — price and revenue move together; E > 1 — in opposite directions.') },
    { text: tr("Yo'q, har doim tushirish", 'No, always lower it'), why: tr("Noegiluvchan talabda narxni tushirish tushumni kamaytiradi.", 'With inelastic demand, a lower price lowers revenue.') },
    { text: tr("Narx tushumga ta'sir qilmaydi", "The price doesn't affect revenue"), why: tr("Faqat E = 1 bo'lsagina.", 'Only if E = 1.') },
  ] },
  { id: "ch05.new.drought", chapter: C, kind: "mcq", source: "new", topic: tr("Fermerlik", 'Farming'), prompt: tr("Problem 12: nega **butun dunyo** bo'ylab qurg'oqchilik fermerlar tushumini oshiradi, faqat **Kanzasda** qurg'oqchilik esa Kanzas fermerlarini kambag'allashtiradi?", "Problem 12: why does a drought **around the world** raise farmers' revenue, while a drought **only in Kansas** makes Kansas farmers poorer?"), options: [
    { text: tr("Dunyo bo'yicha taklif kamaysa, noegiluvchan talab sabab narx keskin oshadi; Kanzas kichik — u jahon narxini o'zgartira olmaydi, kamroq hosilni deyarli o'sha narxda sotadi", "When world supply falls, inelastic demand makes the price jump; Kansas is small — it can't change the world price and sells its smaller crop at about the same price"), correct: true, why: tr("Kanzas fermerlari uchun talab deyarli mutlaqo egiluvchan (ular price takers), dunyo uchun esa noegiluvchan.", 'For Kansas farmers demand is almost perfectly elastic (they are price takers), while for the world it is inelastic.') },
    { text: tr("Kanzas yerlari unumsizroq", 'Kansas land is less fertile'), why: tr("Gap unumdorlikda emas, bozordagi o'rinda.", "It's not about productivity but about position in the market.") },
    { text: tr("Dunyoda talab egiluvchan", 'World demand is elastic'), why: tr("Don talabi noegiluvchan — aynan shuning uchun jahon tushumi oshadi.", 'Grain demand is inelastic — that is exactly why world revenue rises.') },
    { text: tr("Ikkala holda ham tushum oshadi", 'Revenue rises in both cases'), why: tr("Kanzasda narx deyarli o'zgarmaydi, miqdor esa kamayadi → tushum ↓.", 'In Kansas the price barely changes while the quantity falls → revenue ↓.') },
  ] },
  { id: "ch05.new.match", chapter: C, kind: "match", source: "new", topic: tr("Atamalar", 'Terms'), prompt: tr("Egiluvchanlik qiymatini uning ma'nosi bilan moslashtiring.", 'Match each elasticity value with its meaning.'), pairs: [
    { left: "\\(E_d = 0\\)", right: tr("Vertikal talab — mutlaqo noegiluvchan", 'Vertical demand — perfectly inelastic') },
    { left: "\\(E_d = 0.4\\)", right: tr("Noegiluvchan: narx oshsa tushum oshadi", 'Inelastic: a higher price raises revenue') },
    { left: "\\(E_d = 1\\)", right: tr("Narx o'zgarsa tushum o'zgarmaydi", "Revenue doesn't change when the price changes") },
    { left: "\\(E_d = 2.3\\)", right: tr("Egiluvchan: narx oshsa tushum kamayadi", 'Elastic: a higher price lowers revenue') },
    { left: "\\(E_I = -0.5\\)", right: "Inferior good" },
  ] },
  { id: "ch05.new.uz-transport", chapter: C, kind: "mcq", source: "new", topic: tr("Vaqt omili", 'Time'), prompt: tr("Toshkentda metro narxi oshdi. Qaysi gap to'g'ri?", 'The price of the Tashkent metro rises. Which statement is true?'), options: [
    { text: tr("Bir haftadan keyingi reaksiya bir yildan keyingisidan kuchliroq", 'The response after a week is stronger than after a year'), why: tr("Teskarisi: vaqt o'tishi bilan odamlar ko'proq moslashadi.", 'The reverse: over time people adjust more.') },
    { text: tr("Uzoq muddatda talab egiluvchanroq: odamlar velosiped, avtobus, ishga yaqinroq ko'chish kabi muqobillarni topadi", 'Demand is more elastic in the long run: people find alternatives such as bicycles, buses, or moving closer to work'), correct: true, why: tr("Time horizon — to'rtinchi omil (Problem 1c: “subway rides during the next five years”).", 'The time horizon is the fourth determinant (Problem 1c: “subway rides during the next five years”).') },
    { text: tr("Metro talabi mutlaqo noegiluvchan", 'Demand for the metro is perfectly inelastic'), why: tr("Muqobillar (avtobus, taksi) bor — mutlaqo emas.", 'There are alternatives (buses, taxis) — not perfectly.') },
    { text: tr("Narx o'zgarishi talab egri chizig'ini siljitadi", 'The price change shifts the demand curve'), why: tr("O'z narxi — egri chiziq bo'ylab harakat.", 'Its own price — a movement along the curve.') },
  ] },
];

export const graphTasks: Question[] = [
  {
    id: "ch05.graph.wheat",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: tr("Fermerlik", 'Farming'),
    prompt: tr("Yangi gibrid bug'doy taklifini oshirdi. Taklifni o'ngga siljitib, fermerlar umumiy tushumi **$250 dan pastga** tushganini ko'rsating.", "A new hybrid raised the supply of wheat. Shift supply right and show that farmers' total revenue falls **below $250**."),
    graph: { ...wheat, presets: undefined, shiftControls: true },
    check: (s) => {
      if (Math.abs(s.D.a - wheatD.a) > 1e-6) return { ok: false, msg: tr("Texnologiya — taklif omili. Talabni joyida qoldiring.", 'Technology is a supply factor. Leave demand in place.') };
      const e = equilibrium(s.D, s.S);
      if (s.S.c >= wheatS1.c) return { ok: false, msg: tr("Taklifni **o'ngga** siljiting (increase in supply).", 'Shift supply **right** (an increase in supply).') };
      const revenue = e.P * e.Q;
      if (revenue >= 250) return { ok: false, msg: tr(`Tushum hozir $${revenue.toFixed(0)}. Taklifni yana o'ngga suring.`, `Revenue is $${revenue.toFixed(0)} now. Push supply further right.`) };
      return { ok: true, msg: tr(`To'g'ri: narx $${e.P.toFixed(2)}, miqdor ${e.Q.toFixed(0)}, tushum $${revenue.toFixed(0)} (avval $300). Noegiluvchan talabda “yaxshi yangilik” fermerlar uchun yomon.`, `Right: price $${e.P.toFixed(2)}, quantity ${e.Q.toFixed(0)}, revenue $${revenue.toFixed(0)} (it was $300). With inelastic demand, “good news” is bad for farmers.`) };
    },
  },
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice, ...graphTasks];
