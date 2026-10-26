import type { Formula } from '../../types';

export const formulas: Formula[] = [
  {
    id: "ped",
    chapter: 5,
    nameEn: "Price elasticity of demand",
    nameUz: "Talabning narx egiluvchanligi",
    tex: "E_d = \\frac{\\%\\,\\Delta Q^D}{\\%\\,\\Delta P}",
    symbols: [
      { tex: "\\%\\,\\Delta Q^D", meaning: "talab miqdorining foiz o'zgarishi" },
      { tex: "\\%\\,\\Delta P", meaning: "narxning foiz o'zgarishi" },
    ],
    example: {
      setup: "Muzqaymoq narxi 10% oshdi, siz 20% kam sotib oldingiz.",
      steps: ["\\(E_d = 20\\% / 10\\% = 2\\).", "Minus belgisi tashlanadi (absolyut qiymat) — demand **elastic**."],
    },
  },
  {
    id: "midpoint-pct",
    chapter: 5,
    nameEn: "Percentage change, midpoint method",
    nameUz: "Foiz o'zgarish — o'rta nuqta usuli",
    tex: "\\%\\,\\Delta X = \\frac{X_2 - X_1}{(X_1 + X_2)/2} \\times 100\\%",
    symbols: [{ tex: "(X_1 + X_2)/2", meaning: "boshlang'ich va oxirgi qiymat o'rtachasi" }],
    example: {
      setup: "Narx $4 → $6.",
      steps: ["O'rta nuqta \\(= (4 + 6)/2 = 5\\).", "\\(\\%\\Delta P = (6 - 4)/5 = 40\\%\\). Teskari yo'nalishda ham 40%."],
    },
    note: "Oddiy usulda $4 → $6 = 50%, $6 → $4 = 33% — har xil. Midpoint shu muammoni hal qiladi.",
  },
  {
    id: "ped-midpoint",
    chapter: 5,
    nameEn: "Elasticity between two points (midpoint formula)",
    nameUz: "Ikki nuqta orasidagi egiluvchanlik",
    tex: "E_d = \\frac{(Q_2 - Q_1)/[(Q_2 + Q_1)/2]}{(P_2 - P_1)/[(P_2 + P_1)/2]}",
    symbols: [{ tex: "(Q_1, P_1),\\ (Q_2, P_2)", meaning: "talab egri chizig'idagi ikki nuqta" }],
    example: {
      setup: "A: $4, 120 dona; B: $6, 80 dona.",
      steps: ["\\(\\%\\Delta Q = (80 - 120)/100 = -40\\%\\).", "\\(\\%\\Delta P = (6 - 4)/5 = 40\\%\\).", "\\(E_d = |-40/40| = 1\\) — unit elastic."],
    },
  },
  {
    id: "tr",
    chapter: 5,
    nameEn: "Total revenue",
    nameUz: "Umumiy tushum",
    tex: "TR = P \\times Q",
    symbols: [{ tex: "P,\\ Q", meaning: "narx va sotilgan miqdor" }],
    example: {
      setup: "Figure 3: inelastic demand, narx $4 → $5, miqdor 100 → 90.",
      steps: ["\\(TR_1 = 4 \\times 100 = 400\\).", "\\(TR_2 = 5 \\times 90 = 450\\) — narx oshdi, tushum oshdi."],
    },
  },
  {
    id: "tr-rules",
    chapter: 5,
    nameEn: "Elasticity and total revenue",
    nameUz: "Egiluvchanlik va tushum qoidasi",
    tex: "E_d < 1:\\ P \\uparrow \\Rightarrow TR \\uparrow \\qquad E_d > 1:\\ P \\uparrow \\Rightarrow TR \\downarrow \\qquad E_d = 1:\\ TR\\ \\text{const}",
    symbols: [{ tex: "E_d", meaning: "talabning narx egiluvchanligi" }],
    example: {
      setup: "Figure 3(b): elastic demand, narx $4 → $5, miqdor 100 → 70.",
      steps: ["\\(TR\\): $400 → $350.", "Narx oshdi, tushum tushdi — elastic holat."],
    },
  },
  {
    id: "linear-point",
    chapter: 5,
    nameEn: "Elasticity along a linear demand curve",
    nameUz: "Chiziqli talab bo'ylab egiluvchanlik",
    tex: "E_d = \\left|\\frac{\\Delta Q}{\\Delta P}\\right| \\cdot \\frac{P}{Q}",
    symbols: [
      { tex: "\\Delta Q/\\Delta P", meaning: "chiziqda doimiy (nishabning teskarisi)" },
      { tex: "P/Q", meaning: "chiziq bo'ylab o'zgaradi: yuqorida katta, pastda kichik" },
    ],
    example: {
      setup: "Figure 4: \\(Q = 14 - 2P\\), demak \\(|\\Delta Q/\\Delta P| = 2\\).",
      steps: ["\\(P = 3.5,\\ Q = 7\\): \\(E = 2 \\cdot 3.5/7 = 1\\) — o'rtada unit elastic.", "\\(P = 6,\\ Q = 2\\): \\(E = 6\\) — elastic; \\(P = 1,\\ Q = 12\\): \\(E \\approx 0.17\\) — inelastic."],
    },
    note: "Bu nuqtaviy (point) formula — kitobda faqat jadval orqali ko'rsatilgan, lekin xulosasi bir xil: nishab doimiy, egiluvchanlik esa yo'q.",
  },
  {
    id: "income-elasticity",
    chapter: 5,
    nameEn: "Income elasticity of demand",
    nameUz: "Talabning daromad egiluvchanligi",
    tex: "E_I = \\frac{\\%\\,\\Delta Q^D}{\\%\\,\\Delta \\text{Income}}",
    symbols: [{ tex: "E_I > 0", meaning: "normal tovar; \\(E_I < 0\\) — inferior" }],
    example: {
      setup: "Problem 7: pitsa narxi $12, daromad $20,000 → $24,000, miqdor 24 → 30.",
      steps: ["\\(\\%\\Delta Q = 6/27 = 22.2\\%\\), \\(\\%\\Delta I = 4000/22000 = 18.2\\%\\).", "\\(E_I = 22.2/18.2 \\approx 1.22\\) — normal tovar."],
    },
  },
  {
    id: "cross-price",
    chapter: 5,
    nameEn: "Cross-price elasticity of demand",
    nameUz: "Kesishgan narx egiluvchanligi",
    tex: "E_{12} = \\frac{\\%\\,\\Delta Q^D_1}{\\%\\,\\Delta P_2}",
    symbols: [{ tex: "E_{12} > 0", meaning: "o'rinbosarlar; \\(E_{12} < 0\\) — to'ldiruvchilar" }],
    example: {
      setup: "Hot dog narxi 10% oshdi, gamburger talabi 5% oshdi.",
      steps: ["\\(E = 5/10 = 0.5 > 0\\) — o'rinbosarlar."],
    },
  },
  {
    id: "pes",
    chapter: 5,
    nameEn: "Price elasticity of supply",
    nameUz: "Taklifning narx egiluvchanligi",
    tex: "E_s = \\frac{\\%\\,\\Delta Q^S}{\\%\\,\\Delta P}",
    symbols: [{ tex: "\\%\\,\\Delta Q^S", meaning: "taklif miqdorining foiz o'zgarishi" }],
    example: {
      setup: "Sut $2.85 → $3.15, ishlab chiqarish 9,000 → 11,000 gallon.",
      steps: ["\\(\\%\\Delta P = 0.30/3.00 = 10\\%\\).", "\\(\\%\\Delta Q = 2000/10000 = 20\\%\\).", "\\(E_s = 20/10 = 2\\) — elastic supply."],
    },
  },
];
