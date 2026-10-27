import type { Formula } from '../../types';
import { tr } from '../../../lib/lang';

export const formulas: Formula[] = [
  {
    id: "monopoly-mr",
    chapter: 16,
    nameEn: "Marginal revenue of a monopoly (linear demand)",
    nameUz: "Monopoliyaning marjinal tushumi (chiziqli talab)",
    tex: "P = a - bQ \\;\\Rightarrow\\; TR = aQ - bQ^2,\\quad MR = a - 2bQ < P",
    symbols: [
      { tex: "a", meaning: tr("talab egri chizig'ining vertikal kesmasi", 'the vertical intercept of the demand curve') },
      { tex: "b", meaning: tr("talab nishabi (mutlaq qiymati)", 'the slope of demand (absolute value)') },
    ],
    example: { setup: "Problem 10: P = 1,000 − 10Q.", steps: ["TR = 1,000Q − 10Q².", tr("MR = 1,000 − 20Q — nishabi ikki barobar.", 'MR = 1,000 − 20Q — twice the slope.')] },
    note: tr("MR egri chizig'i talab bilan bir nuqtadan boshlanadi va ikki barobar tik tushadi.", 'The MR curve starts at the same point as demand and falls twice as steeply.'),
  },
  {
    id: "monopoly-rule",
    chapter: 16,
    nameEn: "Monopoly profit maximization",
    nameUz: "Monopoliya foydasini maksimallashtirish",
    tex: "MR(Q_M) = MC(Q_M),\\qquad P_M = a - bQ_M,\\qquad P_M > MR = MC",
    symbols: [
      { tex: "Q_M", meaning: tr("monopoliya miqdori", 'monopoly quantity') },
      { tex: "P_M", meaning: tr("monopoliya narxi (talab egri chizig'idan)", 'monopoly price (from the demand curve)') },
    ],
    example: {
      setup: "Problem 8: P = 70 − Q, MR = 70 − 2Q, MC = 10 + Q.",
      steps: [tr("\\(70 - 2Q = 10 + Q \\Rightarrow Q = 20\\).", '\\(70 - 2Q = 10 + Q \\Rightarrow Q = 20\\).'), "\\(P = 70 - 20 = \\$50\\)."],
    },
  },
  {
    id: "monopoly-profit",
    chapter: 16,
    nameEn: "Monopoly profit",
    nameUz: "Monopoliya foydasi",
    tex: "\\pi = (P - ATC) \\times Q",
    symbols: [{ tex: "ATC", meaning: tr("Q_M dagi o'rtacha umumiy xarajat", 'average total cost at Q_M') }],
    example: {
      setup: "Problem 9: P = 10 − Q, TC = 3 + Q + 0.5Q², MC = 1 + Q.",
      steps: [tr("\\(10 - 2Q = 1 + Q \\Rightarrow Q = 3,\\ P = 7\\).", '\\(10 - 2Q = 1 + Q \\Rightarrow Q = 3,\\ P = 7\\).'), "\\(\\pi = 21 - (3 + 3 + 4.5) = 10.5\\)."],
    },
  },
  {
    id: "monopoly-dwl",
    chapter: 16,
    nameEn: "Deadweight loss of monopoly",
    nameUz: "Monopoliya DWL i",
    tex: "DWL = \\tfrac12 (Q_{\\text{eff}} - Q_M)\\,(P_M - MC(Q_M)),\\qquad Q_{\\text{eff}}: P = MC",
    symbols: [{ tex: "Q_{\\text{eff}}", meaning: tr("talab va MC kesishmasi — samarali miqdor", 'where demand meets MC — the efficient quantity') }],
    example: {
      setup: tr("Problem 10: Q_M = 30, P_M = 700, MC(30) = 400; samarali: 1,000 − 10Q = 100 + 10Q → Q = 45.", 'Problem 10: Q_M = 30, P_M = 700, MC(30) = 400; efficient: 1,000 − 10Q = 100 + 10Q → Q = 45.'),
      steps: [tr("\\(DWL = \\tfrac12 (45 - 30)(700 - 400) = \\$2{,}250\\).", '\\(DWL = \\tfrac12 (45 - 30)(700 - 400) = \\$2{,}250\\).')],
    },
  },
  {
    id: "pd-welfare",
    chapter: 16,
    nameEn: "Perfect price discrimination accounting (Problem 12)",
    nameUz: "Mukammal diskriminatsiya hisobi (Problem 12)",
    tex: "\\Delta\\pi = Y + Z,\\qquad \\Delta TS = Z;\\qquad \\text{firm: } Y + Z > C,\\ \\text{society: } Z > C",
    symbols: [
      { tex: "X, Y, Z", meaning: tr("yagona narxdagi foyda, CS va DWL", 'profit, CS, and DWL at a single price') },
      { tex: "C", meaning: tr("diskriminatsiya qilish xarajati", 'cost of price discrimination') },
    ],
    example: { setup: tr("Yagona narxdan mukammal diskriminatsiyaga o'tish.", 'Moving from a single price to perfect price discrimination.'), steps: [tr("Foyda X → X + Y + Z; CS Y → 0; DWL Z → 0.", 'Profit X → X + Y + Z; CS Y → 0; DWL Z → 0.'), tr("Firma Y > 0 qismini jamiyat foydasi bo'lmasa ham oladi → ortiqcha diskriminatsiya mumkin (Y + Z > C > Z).", "The firm captures Y > 0 even though it isn't a gain to society → excessive discrimination is possible (Y + Z > C > Z).")] },
  },
];
