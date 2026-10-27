import type { Formula } from '../../types';
import { tr } from '../../../lib/lang';

export const formulas: Formula[] = [
  {
    id: "average-rate",
    chapter: 13,
    nameEn: "Average tax rate",
    nameUz: "O'rtacha soliq stavkasi",
    tex: "\\text{ATR} = \\frac{\\text{Total taxes}}{\\text{Total income}}",
    symbols: [{ tex: "\\text{ATR}", meaning: "average tax rate" }],
    example: { setup: tr("20% ($50k gacha), 50% undan yuqori; daromad $60,000.", '20% (up to $50k), 50% above; income $60,000.'), steps: [tr("Soliq: \\(0.2 \\times 50{,}000 + 0.5 \\times 10{,}000 = \\$15{,}000\\).", 'Tax: \\(0.2 \\times 50{,}000 + 0.5 \\times 10{,}000 = \\$15{,}000\\).'), "\\(15{,}000 / 60{,}000 = 25\\%\\)."] },
  },
  {
    id: "marginal-rate",
    chapter: 13,
    nameEn: "Marginal tax rate",
    nameUz: "Marjinal soliq stavkasi",
    tex: "\\text{MTR} = \\frac{\\Delta \\text{Taxes}}{\\Delta \\text{Income}}",
    symbols: [{ tex: "\\text{MTR}", meaning: tr("keyingi dollar daromaddan soliq ulushi", 'share of the next dollar of income paid in tax') }],
    example: { setup: tr("Shu tizimda $60,000 dan keyingi $1.", 'The next $1 above $60,000 in that system.'), steps: [tr("Soliq $0.50 ga oshadi → MTR = 50%.", 'Tax rises by $0.50 → MTR = 50%.'), tr("Lump-sum soliqda MTR = 0.", 'With a lump-sum tax, MTR = 0.')] },
    note: tr("Qurbonlik — o'rtacha stavka; rag'batlar va DWL — marjinal stavka.", 'Sacrifice — the average rate; incentives and the DWL — the marginal rate.'),
  },
  {
    id: "bracket-tax",
    chapter: 13,
    nameEn: "Tax under a bracket schedule",
    nameUz: "Pog'onali shkala bo'yicha soliq",
    tex: "T(Y) = \\sum_k r_k \\cdot \\max\\big(0,\\ \\min(Y, U_k) - L_k\\big)",
    symbols: [
      { tex: "r_k", meaning: tr("k-pog'ona stavkasi", 'the rate of bracket k') },
      { tex: "L_k, U_k", meaning: tr("pog'onaning quyi va yuqori chegarasi", 'the lower and upper limits of the bracket') },
    ],
    example: {
      setup: tr("QuickQuiz 4: birinchi $20,000 ozod, qolganiga 25%; daromad $50,000.", 'QuickQuiz 4: the first $20,000 is exempt, 25% on the rest; income $50,000.'),
      steps: ["\\(T = 0.25 \\times 30{,}000 = \\$7{,}500\\).", tr("ATR = 7,500 / 50,000 = **15%**, MTR = **25%**.", 'ATR = 7,500 / 50,000 = **15%**, MTR = **25%**.')],
    },
  },
  {
    id: "interest-after-tax",
    chapter: 13,
    nameEn: "Compound growth with taxed interest",
    nameUz: "Foizi soliqqa tortilgan jamg'arma o'sishi",
    tex: "V = P\\big(1 + r(1-\\tau)\\big)^{n}",
    symbols: [
      { tex: "\\tau", meaning: tr("foiz daromadiga soliq ulushi", 'the share of interest income paid in tax') },
      { tex: "n", meaning: "yillar" },
    ],
    example: { setup: tr("Sammy: $1,000, 6%, 40 yil; soliq ¼.", 'Sammy: $1,000, 6%, 40 years; tax ¼.'), steps: [tr("Soliqsiz: \\(1000 \\times 1.06^{40} = \\$10{,}286\\).", 'Without tax: \\(1000 \\times 1.06^{40} = \\$10{,}286\\).'), tr("Soliq bilan: \\(1000 \\times 1.045^{40} = \\$5{,}816\\) — 43% kam.", 'With tax: \\(1000 \\times 1.045^{40} = \\$5{,}816\\) — 43% less.')] },
  },
];
