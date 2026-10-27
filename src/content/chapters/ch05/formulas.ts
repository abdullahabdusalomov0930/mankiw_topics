import type { Formula } from '../../types';
import { tr } from '../../../lib/lang';

export const formulas: Formula[] = [
  {
    id: "ped",
    chapter: 5,
    nameEn: "Price elasticity of demand",
    nameUz: "Talabning narx egiluvchanligi",
    tex: "E_d = \\frac{\\%\\,\\Delta Q^D}{\\%\\,\\Delta P}",
    symbols: [
      { tex: "\\%\\,\\Delta Q^D", meaning: tr("talab miqdorining foiz o'zgarishi", 'the percentage change in quantity demanded') },
      { tex: "\\%\\,\\Delta P", meaning: tr("narxning foiz o'zgarishi", 'the percentage change in price') },
    ],
    example: {
      setup: tr("Muzqaymoq narxi 10% oshdi, siz 20% kam sotib oldingiz.", 'The price of ice cream rose 10% and you bought 20% less.'),
      steps: ["\\(E_d = 20\\% / 10\\% = 2\\).", tr("Minus belgisi tashlanadi (absolyut qiymat) — demand **elastic**.", 'The minus sign is dropped (absolute value) — demand is **elastic**.')],
    },
  },
  {
    id: "midpoint-pct",
    chapter: 5,
    nameEn: "Percentage change, midpoint method",
    nameUz: "Foiz o'zgarish — o'rta nuqta usuli",
    tex: "\\%\\,\\Delta X = \\frac{X_2 - X_1}{(X_1 + X_2)/2} \\times 100\\%",
    symbols: [{ tex: "(X_1 + X_2)/2", meaning: tr("boshlang'ich va oxirgi qiymat o'rtachasi", 'the average of the starting and ending values') }],
    example: {
      setup: tr("Narx $4 → $6.", 'The price goes from $4 to $6.'),
      steps: [tr("O'rta nuqta \\(= (4 + 6)/2 = 5\\).", 'The midpoint \\(= (4 + 6)/2 = 5\\).'), tr("\\(\\%\\Delta P = (6 - 4)/5 = 40\\%\\). Teskari yo'nalishda ham 40%.", '\\(\\%\\Delta P = (6 - 4)/5 = 40\\%\\). In the reverse direction it is also 40%.')],
    },
    note: tr("Oddiy usulda $4 → $6 = 50%, $6 → $4 = 33% — har xil. Midpoint shu muammoni hal qiladi.", 'With the simple method $4 → $6 is 50% and $6 → $4 is 33% — different. The midpoint method fixes this.'),
  },
  {
    id: "ped-midpoint",
    chapter: 5,
    nameEn: "Elasticity between two points (midpoint formula)",
    nameUz: "Ikki nuqta orasidagi egiluvchanlik",
    tex: "E_d = \\frac{(Q_2 - Q_1)/[(Q_2 + Q_1)/2]}{(P_2 - P_1)/[(P_2 + P_1)/2]}",
    symbols: [{ tex: "(Q_1, P_1),\\ (Q_2, P_2)", meaning: tr("talab egri chizig'idagi ikki nuqta", 'two points on the demand curve') }],
    example: {
      setup: tr("A: $4, 120 dona; B: $6, 80 dona.", 'A: $4, 120 units; B: $6, 80 units.'),
      steps: ["\\(\\%\\Delta Q = (80 - 120)/100 = -40\\%\\).", "\\(\\%\\Delta P = (6 - 4)/5 = 40\\%\\).", "\\(E_d = |-40/40| = 1\\) — unit elastic."],
    },
  },
  {
    id: "tr",
    chapter: 5,
    nameEn: "Total revenue",
    nameUz: "Umumiy tushum",
    tex: "TR = P \\times Q",
    symbols: [{ tex: "P,\\ Q", meaning: tr("narx va sotilgan miqdor", 'the price and the quantity sold') }],
    example: {
      setup: tr("Figure 3: inelastic demand, narx $4 → $5, miqdor 100 → 90.", 'Figure 3: inelastic demand, the price goes $4 → $5 and the quantity 100 → 90.'),
      steps: ["\\(TR_1 = 4 \\times 100 = 400\\).", tr("\\(TR_2 = 5 \\times 90 = 450\\) — narx oshdi, tushum oshdi.", '\\(TR_2 = 5 \\times 90 = 450\\) — the price rose and revenue rose.')],
    },
  },
  {
    id: "tr-rules",
    chapter: 5,
    nameEn: "Elasticity and total revenue",
    nameUz: "Egiluvchanlik va tushum qoidasi",
    tex: "E_d < 1:\\ P \\uparrow \\Rightarrow TR \\uparrow \\qquad E_d > 1:\\ P \\uparrow \\Rightarrow TR \\downarrow \\qquad E_d = 1:\\ TR\\ \\text{const}",
    symbols: [{ tex: "E_d", meaning: tr("talabning narx egiluvchanligi", 'the price elasticity of demand') }],
    example: {
      setup: tr("Figure 3(b): elastic demand, narx $4 → $5, miqdor 100 → 70.", 'Figure 3(b): elastic demand, the price goes $4 → $5 and the quantity 100 → 70.'),
      steps: ["\\(TR\\): $400 → $350.", tr("Narx oshdi, tushum tushdi — elastic holat.", 'The price rose and revenue fell — the elastic case.')],
    },
  },
  {
    id: "linear-point",
    chapter: 5,
    nameEn: "Elasticity along a linear demand curve",
    nameUz: "Chiziqli talab bo'ylab egiluvchanlik",
    tex: "E_d = \\left|\\frac{\\Delta Q}{\\Delta P}\\right| \\cdot \\frac{P}{Q}",
    symbols: [
      { tex: "\\Delta Q/\\Delta P", meaning: tr("chiziqda doimiy (nishabning teskarisi)", 'constant along the line (the inverse of the slope)') },
      { tex: "P/Q", meaning: tr("chiziq bo'ylab o'zgaradi: yuqorida katta, pastda kichik", 'varies along the line: large at the top, small at the bottom') },
    ],
    example: {
      setup: "Figure 4: \\(Q = 14 - 2P\\), demak \\(|\\Delta Q/\\Delta P| = 2\\).",
      steps: [tr("\\(P = 3.5,\\ Q = 7\\): \\(E = 2 \\cdot 3.5/7 = 1\\) — o'rtada unit elastic.", '\\(P = 3.5,\\ Q = 7\\): \\(E = 2 \\cdot 3.5/7 = 1\\) — unit elastic in the middle.'), "\\(P = 6,\\ Q = 2\\): \\(E = 6\\) — elastic; \\(P = 1,\\ Q = 12\\): \\(E \\approx 0.17\\) — inelastic."],
    },
    note: tr("Bu nuqtaviy (point) formula — kitobda faqat jadval orqali ko'rsatilgan, lekin xulosasi bir xil: nishab doimiy, egiluvchanlik esa yo'q.", 'This is the point formula — the book shows it only through a table, but the conclusion is the same: the slope is constant, the elasticity is not.'),
  },
  {
    id: "income-elasticity",
    chapter: 5,
    nameEn: "Income elasticity of demand",
    nameUz: "Talabning daromad egiluvchanligi",
    tex: "E_I = \\frac{\\%\\,\\Delta Q^D}{\\%\\,\\Delta \\text{Income}}",
    symbols: [{ tex: "E_I > 0", meaning: "normal tovar; \\(E_I < 0\\) — inferior" }],
    example: {
      setup: tr("Problem 7: pitsa narxi $12, daromad $20,000 → $24,000, miqdor 24 → 30.", 'Problem 7: pizza at $12, income $20,000 → $24,000, quantity 24 → 30.'),
      steps: ["\\(\\%\\Delta Q = 6/27 = 22.2\\%\\), \\(\\%\\Delta I = 4000/22000 = 18.2\\%\\).", "\\(E_I = 22.2/18.2 \\approx 1.22\\) — normal tovar."],
    },
  },
  {
    id: "cross-price",
    chapter: 5,
    nameEn: "Cross-price elasticity of demand",
    nameUz: "Kesishgan narx egiluvchanligi",
    tex: "E_{12} = \\frac{\\%\\,\\Delta Q^D_1}{\\%\\,\\Delta P_2}",
    symbols: [{ tex: "E_{12} > 0", meaning: tr("o'rinbosarlar; \\(E_{12} < 0\\) — to'ldiruvchilar", 'substitutes; \\(E_{12} < 0\\) — complements') }],
    example: {
      setup: tr("Hot dog narxi 10% oshdi, gamburger talabi 5% oshdi.", 'The price of hot dogs rose 10% and the demand for hamburgers rose 5%.'),
      steps: [tr("\\(E = 5/10 = 0.5 > 0\\) — o'rinbosarlar.", '\\(E = 5/10 = 0.5 > 0\\) — substitutes.')],
    },
  },
  {
    id: "pes",
    chapter: 5,
    nameEn: "Price elasticity of supply",
    nameUz: "Taklifning narx egiluvchanligi",
    tex: "E_s = \\frac{\\%\\,\\Delta Q^S}{\\%\\,\\Delta P}",
    symbols: [{ tex: "\\%\\,\\Delta Q^S", meaning: tr("taklif miqdorining foiz o'zgarishi", 'the percentage change in quantity supplied') }],
    example: {
      setup: tr("Sut $2.85 → $3.15, ishlab chiqarish 9,000 → 11,000 gallon.", 'Milk goes $2.85 → $3.15 and production 9,000 → 11,000 gallons.'),
      steps: ["\\(\\%\\Delta P = 0.30/3.00 = 10\\%\\).", "\\(\\%\\Delta Q = 2000/10000 = 20\\%\\).", "\\(E_s = 20/10 = 2\\) — elastic supply."],
    },
  },
];
