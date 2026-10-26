import type { Formula } from '../../types';

export const formulas: Formula[] = [
  {
    id: "revenue",
    chapter: 8,
    nameEn: "Tax revenue",
    nameUz: "Soliq tushumi",
    tex: "\\text{Tax revenue} = T \\times Q_{\\text{tax}}",
    symbols: [
      { tex: "T", meaning: "bir birlikka soliq" },
      { tex: "Q_{\\text{tax}}", meaning: "soliq bilan sotilgan miqdor" },
    ],
    example: { setup: "Problem 9: $10 soliq, 900 xona.", steps: ["Tushum \\(= 10 \\times 900 = \\$9{,}000\\)."] },
  },
  {
    id: "dwl",
    chapter: 8,
    nameEn: "Deadweight loss of a tax",
    nameUz: "Soliqning sof yo'qotishi",
    tex: "DWL = \\tfrac12 \\times T \\times (Q_1 - Q_2)",
    symbols: [
      { tex: "Q_1", meaning: "soliqsiz miqdor" },
      { tex: "Q_2", meaning: "soliq bilan miqdor" },
      { tex: "T", meaning: "uchburchak balandligi (pona)" },
    ],
    example: { setup: "Problem 9: 1,000 → 900 xona, $10 soliq.", steps: ["\\(DWL = \\tfrac12 \\times 10 \\times 100 = \\$500\\)."] },
  },
  {
    id: "dwl-square",
    chapter: 8,
    nameEn: "DWL grows with the square of the tax",
    nameUz: "DWL soliq kvadratiga proporsional",
    tex: "DWL = \\frac{T^2}{2\\,(b + d)} \\quad\\Rightarrow\\quad T \\times 2 \\Rightarrow DWL \\times 4,\\quad T \\times 3 \\Rightarrow DWL \\times 9",
    symbols: [{ tex: "b,\\ d", meaning: "talab va taklif egri chiziqlarining nishablari (\\(P = a - bQ\\), \\(P = c + dQ\\))" }],
    example: {
      setup: "Problem 9: $10 → $20 soliq.",
      steps: ["Miqdor kamayishi 100 → 200 (ikki barobar), balandlik 10 → 20 (ikki barobar).", "\\(DWL\\): $500 → \\(\\tfrac12 \\cdot 20 \\cdot 200 = \\$2{,}000\\) — **to'rt barobar**."],
    },
  },
  {
    id: "welfare-table",
    chapter: 8,
    nameEn: "How a tax changes welfare (Figure 3)",
    nameUz: "Soliqning farovonlikka ta'siri",
    tex: "\\Delta CS = -(B + C),\\quad \\Delta PS = -(D + E),\\quad \\Delta\\text{Rev} = +(B + D),\\quad \\Delta TS = -(C + E)",
    symbols: [
      { tex: "B + D", meaning: "soliq tushumi (iste'molchi va ishlab chiqaruvchidan o'tgan qism)" },
      { tex: "C + E", meaning: "sof yo'qotish — hech kimga o'tmagan" },
    ],
    example: { setup: "Har qanday soliq.", steps: ["Yo'qotishlar \\((B+C)+(D+E)\\) tushumdan \\((B+D)\\) ko'p.", "Farq \\(C + E\\) — deadweight loss."] },
  },
  {
    id: "revenue-of-T",
    chapter: 8,
    nameEn: "Revenue and DWL as functions of T (Problem 10)",
    nameUz: "Tushum va DWL — T funksiyasi sifatida",
    tex: "Q^S = 2P,\\ Q^D = 300 - (P + T):\\quad Q = 200 - \\tfrac{2T}{3},\\quad R(T) = T\\left(200 - \\tfrac{2T}{3}\\right),\\quad DWL = \\tfrac{T^2}{3}",
    symbols: [{ tex: "R(T)", meaning: "tushum — parabola, T = 150 da maksimal (Laffer cho'qqisi)" }],
    example: {
      setup: "\\(T = 200\\) va \\(T = 100\\) ni solishtiring.",
      steps: ["\\(R(200) = 200 \\cdot 66.7 = 13{,}333\\), \\(DWL = 13{,}333\\).", "\\(R(100) = 100 \\cdot 133.3 = 13{,}333\\), \\(DWL = 3{,}333\\) — xuddi shu tushum, to'rt barobar kam yo'qotish!"],
    },
  },
];
