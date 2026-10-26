import type { Problem } from '../../types';

const C = 5;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch05.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch05.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "Define the **price elasticity of demand** and the **income elasticity of demand**.", [
    "Price elasticity of demand — talab miqdorining narx o'zgarishiga sezgirligi: \\(\\%\\Delta Q^D / \\%\\Delta P\\).",
    "Income elasticity of demand — talab miqdorining daromad o'zgarishiga sezgirligi: \\(\\%\\Delta Q^D / \\%\\Delta \\text{Income}\\).",
  ], "%ΔQd/%ΔP and %ΔQd/%ΔIncome."),
  r(2, "List and explain the **four determinants** of the price elasticity of demand.", [
    "**Availability of close substitutes**: o'rinbosarlar ko'p — egiluvchan (sariyog' ↔ margarin), kam — noegiluvchan (tuxum).",
    "**Necessities vs luxuries**: zarurat — noegiluvchan (shifokor), hashamat — egiluvchan (yelkanli qayiq).",
    "**Definition of the market**: tor bozor egiluvchanroq (vanil muzqaymoq > muzqaymoq > oziq-ovqat).",
    "**Time horizon**: uzoq muddatda egiluvchanroq (benzin: 1 yildan keyin −2.5%, 5 yildan keyin −6%).",
  ], "Close substitutes, necessity vs luxury, market definition, time horizon."),
  r(3, "If the elasticity is greater than one, is demand elastic or inelastic? If the elasticity equals zero, is demand perfectly elastic or perfectly inelastic?", ["E > 1 → **elastic**.", "E = 0 → **perfectly inelastic** (vertikal chiziq)."], "Elastic; perfectly inelastic."),
  r(4, "On a supply-and-demand diagram, show the equilibrium price, equilibrium quantity, and the total revenue received by producers.", [
    "Talab va taklif kesishmasi — (Q*, P*).",
    "Tushum — balandligi P*, kengligi Q* bo'lgan to'rtburchak (koordinata boshidan kesishmagacha).",
    "Figure 2 ga qarang: P = $4, Q = 100 → TR = $400.",
  ], "Total revenue is the rectangle P* × Q* under the equilibrium point."),
  r(5, "If demand is **elastic**, how will an increase in the price affect total revenue? Explain.", [
    "Elastic: miqdor narxdan ko'proq foizga kamayadi.",
    "Shuning uchun P × Q **kamayadi** — narx va tushum qarama-qarshi yo'nalishda.",
  ], "Total revenue falls."),
  r(6, "What do we call a good with an **income elasticity less than zero**?", ["Daromad ↑ → talab ↓ → **inferior good**."], "An inferior good."),
  r(7, "How is the **price elasticity of supply** calculated? Explain what it measures.", ["\\(E_s = \\%\\Delta Q^S / \\%\\Delta P\\).", "U sotuvchilar narx o'zgarishiga qanchalik moslasha olishini o'lchaydi — ishlab chiqarishni o'zgartirish imkoniyati."], "%ΔQs/%ΔP: how responsive sellers' output is to price."),
  r(8, "If a fixed quantity of a good is available, and no more can be made, what is the price elasticity of supply?", ["Narx qanday bo'lmasin, miqdor o'zgarmaydi → **E_s = 0** — mutlaqo noegiluvchan (vertikal)."], "Zero (perfectly inelastic)."),
  r(9, "A storm destroys half the fava bean crop. Is this event more likely to hurt fava bean farmers if the demand for fava beans is very elastic or very inelastic? Explain.", [
    "Taklif ↓ → narx ↑.",
    "**Egiluvchan talab**: narx ozgina oshadi, miqdor ko'p kamayadi → tushum ↓ — fermerlarga zarar.",
    "Noegiluvchan talabda narx keskin oshadi va tushum hatto oshishi mumkin.",
  ], "More likely to hurt them if demand is very elastic."),
];

export const problems: Problem[] = [
  p(1, "For each pair, which good would you expect to have more elastic demand and why? (a) required textbooks or mystery novels; (b) Billie Eilish recordings or pop music recordings in general; (c) subway rides during the next six months or subway rides during the next five years; (d) root beer or water.", [
    "(a) **Detektiv romanlar** — majburiy darslik zarurat, o'rinbosari yo'q.",
    "(b) **Billie Eilish yozuvlari** — tor bozor, boshqa ijrochilar o'rinbosar.",
    "(c) **5 yillik metro** — vaqt o'tishi bilan odamlar moslashadi (mashina, ko'chish).",
    "(d) **Root beer** — suv zarurat, root beerning o'rinbosarlari ko'p.",
  ], "(a) Mystery novels (b) Billie Eilish (c) Next five years (d) Root beer."),
  p(2, "Airline tickets Chicago–Miami: $150: business 2,100 / vacation 1,000; $200: 2,000 / 800; $250: 1,900 / 600; $300: 1,800 / 400. (a) As the price rises from $200 to $250, what is the price elasticity of demand for (i) business travelers and (ii) vacationers? (b) Why might they differ?", [
    "\\(\\%\\Delta P = 50/225 = 22.2\\%\\).",
    "(i) Biznes: \\(\\%\\Delta Q = -100/1950 = -5.1\\%\\) → \\(E = 0.23\\).",
    "(ii) Dam oluvchilar: \\(\\%\\Delta Q = -200/700 = -28.6\\%\\) → \\(E = 1.29\\).",
    "(b) Biznes safarni kechiktirib bo'lmaydi, ko'pincha firma to'laydi — o'rinbosar kam. Dam oluvchi esa boshqa sana, boshqa joy, mashinada borishni tanlay oladi.",
  ], "(i) 0.23 (ii) 1.29; vacationers have more substitutes and flexibility."),
  p(3, "The price elasticity of demand for heating oil is 0.2 in the short run and 0.7 in the long run. (a) If the price rises from $1.80 to $2.20 per gallon, what happens to the quantity demanded in the short run and in the long run? (b) Why might elasticity depend on the time horizon?", [
    "\\(\\%\\Delta P = 0.40/2.00 = 20\\%\\).",
    "Qisqa muddat: \\(\\%\\Delta Q = 0.2 \\times 20 = 4\\%\\) kamayadi.",
    "Uzoq muddat: \\(0.7 \\times 20 = 14\\%\\) kamayadi.",
    "(b) Vaqt bilan odamlar uyni izolyatsiyalaydi, boshqa isitish tizimiga o'tadi — muqobillar ko'payadi.",
  ], "Falls 4% in the short run, 14% in the long run."),
  p(4, "A price change causes the quantity demanded of a good to **decrease by 30 percent**, while the total revenue of that good **increases by 15 percent**. Is the demand curve elastic or inelastic? Explain.", [
    "Miqdor kamaydi → narx **oshgan**.",
    "Narx oshdi va tushum oshdi → narx va tushum bir yo'nalishda → **inelastic**.",
    "(Tekshirish: \\(1.15/0.7 = 1.64\\) — narx ~64% oshgan, miqdor 30% kamaygan → E ≈ 0.47 < 1.)",
  ], "Inelastic: price rose and revenue rose."),
  p(5, "Cups of coffee and donuts are complements. Both have inelastic demand. A hurricane destroys half the coffee bean crop. (a) What happens to the price of coffee beans? (b) The price of a cup of coffee? Total expenditure on cups of coffee? (c) The price of donuts? Total expenditure on donuts?", [
    "(a) Kofe doni taklifi ↓, talab noegiluvchan → narx **keskin oshadi**.",
    "(b) Don — xomashyo → bir piyola kofe taklifi ↓ → narx ↑. Noegiluvchan talab → xarajat **oshadi**.",
    "(c) Kofe qimmat → to'ldiruvchi donutga talab ↓ → donut narxi ↓, miqdori ↓ → xarajat **kamayadi**.",
  ], "(a) Rises a lot. (b) Price up, spending up. (c) Price down, spending down."),
  p(6, "The price of aspirin rose sharply last month, while the quantity sold remained the same. Who could be right? Meredith: demand increased, supply perfectly inelastic. Alex: demand increased, but it was perfectly inelastic. Miranda: demand increased, supply decreased at the same time. Richard: supply decreased, demand unit elastic. Owen: supply decreased, demand perfectly inelastic.", [
    "**Meredith** ✓: vertikal taklifda talab o'ngga siljisa — P ↑, Q o'zgarmaydi.",
    "**Alex** ✗: vertikal talab o'ngga siljisa, yuqoriga egilgan taklif bo'ylab Q **oshadi**.",
    "**Miranda** ✓: talab ↑ (Q ↑) va taklif ↓ (Q ↓) bir-birini muvozanatlashi mumkin — P aniq oshadi.",
    "**Richard** ✗: unit elastic talabda taklif kamaysa Q kamayadi.",
    "**Owen** ✓: vertikal talab bo'ylab taklif chapga siljisa — P ↑, Q bir xil.",
  ], "Meredith, Miranda, and Owen could be right."),
  p(7, "Pizza demand: income $20,000: $8: 40, $10: 32, $12: 24, $14: 16, $16: 8; income $24,000: $8: 50, $10: 45, $12: 30, $14: 20, $16: 12. (a) Price elasticity as price rises $8 → $10 if income is (i) $20,000, (ii) $24,000. (b) Income elasticity as income rises $20,000 → $24,000 if the price is (i) $12, (ii) $16.", [
    "\\(\\%\\Delta P = 2/9 = 22.2\\%\\).",
    "(a)(i) \\(\\%\\Delta Q = -8/36 = -22.2\\%\\) → **E = 1.0**. (ii) \\(-5/47.5 = -10.5\\%\\) → **E = 0.47**.",
    "\\(\\%\\Delta I = 4000/22000 = 18.2\\%\\).",
    "(b)(i) $12: 24 → 30: \\(6/27 = 22.2\\%\\) → **E_I = 1.22**. (ii) $16: 8 → 12: \\(4/10 = 40\\%\\) → **E_I = 2.2**.",
  ], "(a) 1.0 and 0.47. (b) 1.22 and 2.2.", "calc"),
  p(8, "After the price of a subway token rose 25 cents to $1.50, there were nearly four million fewer riders in December 1995 than in the previous December, a 4.3 percent decline. (a) Estimate the price elasticity of demand. (b) What happened to the Transit Authority's revenue? (c) Why might your estimate be unreliable?", [
    "(a) \\(\\%\\Delta P = 0.25/1.375 = 18.2\\%\\) (midpoint). \\(E \\approx 4.3/18.2 \\approx 0.24\\) — inelastic.",
    "(b) Noegiluvchan → narx oshganda tushum **oshgan**.",
    "(c) Boshqa omillar ham o'zgargan bo'lishi mumkin (ob-havo, bandlik, ish kunlari soni); bitta oy — qisqa muddat; uzoq muddatda egiluvchanlik kattaroq.",
  ], "About 0.24; revenue rose; other things may have changed and it's only the short run."),
  p(9, "Thelma: “I'd like 5 gallons of gas.” Louise: “I'd like $20 worth of gas.” What is each driver's price elasticity of demand?", [
    "Thelma narxdan qat'i nazar 5 gallon → miqdor o'zgarmaydi → **E = 0**.",
    "Louise har doim $20 sarflaydi → P × Q doimiy → **E = 1** (unit elastic).",
  ], "Thelma: 0 (perfectly inelastic). Louise: 1 (unit elastic)."),
  p(10, "The price elasticity of demand for cigarettes is about 0.4. (a) If a pack costs $5 and the government wants to reduce smoking by 20 percent, by how much should it increase the price? (b) Will a permanent increase have a larger effect one year or five years from now? (c) Teenagers have a higher elasticity. Why?", [
    "(a) \\(\\%\\Delta P = 20/0.4 = 50\\%\\). Midpoint: \\((P - 5)/[(P + 5)/2] = 0.5 \\Rightarrow P = 8.33\\) → narxni **≈ $3.33** ga oshirish.",
    "(b) **5 yildan keyin** — uzoq muddatda egiluvchanlik katta (tashlash, yangi chekuvchilar kamayishi).",
    "(c) O'smirlarning daromadi kam (sigaret byudjetning katta qismi), hali qattiq odatlanmagan, tengdoshlar ta'siri.",
  ], "(a) About $3.33 (to $8.33). (b) Five years. (c) Less income, less addicted."),
  p(11, "You are the curator of a museum running short of funds. Should you increase or decrease the price of admission?", [
    "Javob talab egiluvchanligiga bog'liq.",
    "Noegiluvchan bo'lsa (muzey noyob, tashrif buyuruvchilar narxga sezgir emas) — **narxni oshiring**.",
    "Egiluvchan bo'lsa (boshqa ko'ngilochar joylar ko'p) — **narxni tushiring**.",
  ], "Raise it if demand is inelastic; lower it if demand is elastic."),
  p(12, "Explain why a drought around the world raises the total revenue that farmers receive from grain, but a drought only in Kansas reduces the total revenue Kansas farmers receive.", [
    "Jahon qurg'oqchiligi: jahon taklifi ↓, don talabi noegiluvchan → narx keskin ↑ → tushum ↑.",
    "Faqat Kanzas: Kanzas jahon bozorining kichik qismi → jahon narxi deyarli o'zgarmaydi. Kanzas fermerlari uchun talab deyarli **mutlaqo egiluvchan**.",
    "Kam hosil, bir xil narx → tushum ↓.",
  ], "World demand for grain is inelastic, but the demand facing Kansas alone is nearly perfectly elastic."),
];
