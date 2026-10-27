import type { Formula } from '../../types';

export const formulas: Formula[] = [
  {
    id: "monopoly-mr",
    chapter: 16,
    nameEn: "Marginal revenue of a monopoly (linear demand)",
    nameUz: "Monopoliyaning marjinal tushumi (chiziqli talab)",
    tex: "P = a - bQ \\;\\Rightarrow\\; TR = aQ - bQ^2,\\quad MR = a - 2bQ < P",
    symbols: [
      { tex: "a", meaning: "talab egri chizig'ining vertikal kesmasi" },
      { tex: "b", meaning: "talab nishabi (mutlaq qiymati)" },
    ],
    example: { setup: "Problem 10: P = 1,000 − 10Q.", steps: ["TR = 1,000Q − 10Q².", "MR = 1,000 − 20Q — nishabi ikki barobar."] },
    note: "MR egri chizig'i talab bilan bir nuqtadan boshlanadi va ikki barobar tik tushadi.",
  },
  {
    id: "monopoly-rule",
    chapter: 16,
    nameEn: "Monopoly profit maximization",
    nameUz: "Monopoliya foydasini maksimallashtirish",
    tex: "MR(Q_M) = MC(Q_M),\\qquad P_M = a - bQ_M,\\qquad P_M > MR = MC",
    symbols: [
      { tex: "Q_M", meaning: "monopoliya miqdori" },
      { tex: "P_M", meaning: "monopoliya narxi (talab egri chizig'idan)" },
    ],
    example: {
      setup: "Problem 8: P = 70 − Q, MR = 70 − 2Q, MC = 10 + Q.",
      steps: ["\\(70 - 2Q = 10 + Q \\Rightarrow Q = 20\\).", "\\(P = 70 - 20 = \\$50\\)."],
    },
  },
  {
    id: "monopoly-profit",
    chapter: 16,
    nameEn: "Monopoly profit",
    nameUz: "Monopoliya foydasi",
    tex: "\\pi = (P - ATC) \\times Q",
    symbols: [{ tex: "ATC", meaning: "Q_M dagi o'rtacha umumiy xarajat" }],
    example: {
      setup: "Problem 9: P = 10 − Q, TC = 3 + Q + 0.5Q², MC = 1 + Q.",
      steps: ["\\(10 - 2Q = 1 + Q \\Rightarrow Q = 3,\\ P = 7\\).", "\\(\\pi = 21 - (3 + 3 + 4.5) = 10.5\\)."],
    },
  },
  {
    id: "monopoly-dwl",
    chapter: 16,
    nameEn: "Deadweight loss of monopoly",
    nameUz: "Monopoliya DWL i",
    tex: "DWL = \\tfrac12 (Q_{\\text{eff}} - Q_M)\\,(P_M - MC(Q_M)),\\qquad Q_{\\text{eff}}: P = MC",
    symbols: [{ tex: "Q_{\\text{eff}}", meaning: "talab va MC kesishmasi — samarali miqdor" }],
    example: {
      setup: "Problem 10: Q_M = 30, P_M = 700, MC(30) = 400; samarali: 1,000 − 10Q = 100 + 10Q → Q = 45.",
      steps: ["\\(DWL = \\tfrac12 (45 - 30)(700 - 400) = \\$2{,}250\\)."],
    },
  },
  {
    id: "pd-welfare",
    chapter: 16,
    nameEn: "Perfect price discrimination accounting (Problem 12)",
    nameUz: "Mukammal diskriminatsiya hisobi (Problem 12)",
    tex: "\\Delta\\pi = Y + Z,\\qquad \\Delta TS = Z;\\qquad \\text{firm: } Y + Z > C,\\ \\text{society: } Z > C",
    symbols: [
      { tex: "X, Y, Z", meaning: "yagona narxdagi foyda, CS va DWL" },
      { tex: "C", meaning: "diskriminatsiya qilish xarajati" },
    ],
    example: { setup: "Yagona narxdan mukammal diskriminatsiyaga o'tish.", steps: ["Foyda X → X + Y + Z; CS Y → 0; DWL Z → 0.", "Firma Y > 0 qismini jamiyat foydasi bo'lmasa ham oladi → ortiqcha diskriminatsiya mumkin (Y + Z > C > Z)."] },
  },
];
