import type { Formula } from '../../types';

export const formulas: Formula[] = [
  {
    id: "average-rate",
    chapter: 13,
    nameEn: "Average tax rate",
    nameUz: "O'rtacha soliq stavkasi",
    tex: "\\text{ATR} = \\frac{\\text{Total taxes}}{\\text{Total income}}",
    symbols: [{ tex: "\\text{ATR}", meaning: "average tax rate" }],
    example: { setup: "20% ($50k gacha), 50% undan yuqori; daromad $60,000.", steps: ["Soliq: \\(0.2 \\times 50{,}000 + 0.5 \\times 10{,}000 = \\$15{,}000\\).", "\\(15{,}000 / 60{,}000 = 25\\%\\)."] },
  },
  {
    id: "marginal-rate",
    chapter: 13,
    nameEn: "Marginal tax rate",
    nameUz: "Marjinal soliq stavkasi",
    tex: "\\text{MTR} = \\frac{\\Delta \\text{Taxes}}{\\Delta \\text{Income}}",
    symbols: [{ tex: "\\text{MTR}", meaning: "keyingi dollar daromaddan soliq ulushi" }],
    example: { setup: "Shu tizimda $60,000 dan keyingi $1.", steps: ["Soliq $0.50 ga oshadi → MTR = 50%.", "Lump-sum soliqda MTR = 0."] },
    note: "Qurbonlik — o'rtacha stavka; rag'batlar va DWL — marjinal stavka.",
  },
  {
    id: "bracket-tax",
    chapter: 13,
    nameEn: "Tax under a bracket schedule",
    nameUz: "Pog'onali shkala bo'yicha soliq",
    tex: "T(Y) = \\sum_k r_k \\cdot \\max\\big(0,\\ \\min(Y, U_k) - L_k\\big)",
    symbols: [
      { tex: "r_k", meaning: "k-pog'ona stavkasi" },
      { tex: "L_k, U_k", meaning: "pog'onaning quyi va yuqori chegarasi" },
    ],
    example: {
      setup: "QuickQuiz 4: birinchi $20,000 ozod, qolganiga 25%; daromad $50,000.",
      steps: ["\\(T = 0.25 \\times 30{,}000 = \\$7{,}500\\).", "ATR = 7,500 / 50,000 = **15%**, MTR = **25%**."],
    },
  },
  {
    id: "interest-after-tax",
    chapter: 13,
    nameEn: "Compound growth with taxed interest",
    nameUz: "Foizi soliqqa tortilgan jamg'arma o'sishi",
    tex: "V = P\\big(1 + r(1-\\tau)\\big)^{n}",
    symbols: [
      { tex: "\\tau", meaning: "foiz daromadiga soliq ulushi" },
      { tex: "n", meaning: "yillar" },
    ],
    example: { setup: "Sammy: $1,000, 6%, 40 yil; soliq ¼.", steps: ["Soliqsiz: \\(1000 \\times 1.06^{40} = \\$10{,}286\\).", "Soliq bilan: \\(1000 \\times 1.045^{40} = \\$5{,}816\\) — 43% kam."] },
  },
];
