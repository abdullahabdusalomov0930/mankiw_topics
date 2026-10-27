import type { Formula } from '../../types';
import { tr } from '../../../lib/lang';

export const formulas: Formula[] = [
  {
    id: "competitive-revenue",
    chapter: 15,
    nameEn: "Revenue of a competitive firm",
    nameUz: "Raqobatchi firma tushumi",
    tex: "TR = P \\times Q,\\qquad AR = \\frac{TR}{Q} = P,\\qquad MR = \\frac{\\Delta TR}{\\Delta Q} = P",
    symbols: [{ tex: "P", meaning: tr("bozor narxi (firma uchun berilgan)", 'the market price (given to the firm)') }],
    example: { setup: "Problem 6: TR = $500, MR = $10.", steps: [tr("Raqobatchi firma: P = MR = AR = $10.", 'A competitive firm: P = MR = AR = $10.'), "\\(Q = 500 / 10 = 50\\)."] },
  },
  {
    id: "profit-max",
    chapter: 15,
    nameEn: "Profit-maximizing rule",
    nameUz: "Foydani maksimallashtirish qoidasi",
    tex: "MR = MC \\;\\Rightarrow\\; P = MC \\text{ (competitive firm)}",
    symbols: [{ tex: "MC", meaning: "marginal cost" }],
    example: { setup: tr("Vaca fermasi, P = $6: MC 2, 3, 4, 5, 6, 7…", "Vaca's farm, P = $6: MC 2, 3, 4, 5, 6, 7…"), steps: [tr("5-gallonda MC = 6 = MR; 6-gallon MC = 7 > 6.", "At the 5th gallon MC = 6 = MR; the 6th gallon's MC = 7 > 6."), tr("4 yoki 5 gallon, foyda $7.", '4 or 5 gallons, profit $7.')] },
  },
  {
    id: "shutdown-exit",
    chapter: 15,
    nameEn: "Shutdown and exit rules",
    nameUz: "To'xtatish va chiqish qoidalari",
    tex: "\\text{Shut down if } P < AVC;\\qquad \\text{Exit if } P < ATC;\\qquad \\text{Enter if } P > ATC",
    symbols: [{ tex: "AVC, ATC", meaning: tr("P = MC dagi o'rtacha xarajatlar", 'average costs at the Q where P = MC') }],
    example: {
      setup: tr("Problem 2: Leah bir maysazor uchun $27 oladi; 10 ta maysazor: TC $280, FC $30.", 'Problem 2: Leah charges $27 per lawn; 10 lawns: TC $280, FC $30.'),
      steps: [tr("AVC = 250/10 = $25 < $27 → qisqa muddatda ishlaydi.", 'AVC = 250/10 = $25 < $27 → operates in the short run.'), tr("ATC = $28 > $27 → uzoq muddatda chiqadi.", 'ATC = $28 > $27 → exits in the long run.')],
    },
  },
  {
    id: "profit-area",
    chapter: 15,
    nameEn: "Profit as a rectangle",
    nameUz: "Foyda — to'rtburchak yuzasi",
    tex: "\\text{Profit} = (P - ATC) \\times Q",
    symbols: [{ tex: "P - ATC", meaning: tr("birlik boshiga foyda (balandlik)", 'profit per unit (the height)') }],
    example: { setup: tr("Problem 7: AR = $10, ATC = $8, Q = 100, FC = $200.", 'Problem 7: AR = $10, ATC = $8, Q = 100, FC = $200.'), steps: [tr("Foyda = (10 − 8) × 100 = $200.", 'Profit = (10 − 8) × 100 = $200.'), tr("MC = P = $10; AVC = (800 − 200)/100 = $6; MC > ATC → efficient scale 100 dan kam.", 'MC = P = $10; AVC = (800 − 200)/100 = $6; MC > ATC → efficient scale is below 100.')] },
  },
  {
    id: "lr-equilibrium",
    chapter: 15,
    nameEn: "Long-run competitive equilibrium",
    nameUz: "Uzoq muddatli raqobat muvozanati",
    tex: "P = MC = \\min ATC,\\qquad N = \\frac{Q^D(\\min ATC)}{q_{\\text{efficient}}}",
    symbols: [
      { tex: "N", meaning: tr("firmalar soni", 'number of firms') },
      { tex: "q_{\\text{efficient}}", meaning: tr("har bir firmaning efficient scale dagi mahsuloti", "each firm's output at the efficient scale") },
    ],
    example: {
      setup: tr("Problem 9 (Ectenia): min ATC = $7 da q = 3 pirog; P = $7 da talab 600.", 'Problem 9 (Ectenia): at min ATC = $7, q = 3 pies; at P = $7 demand is 600.'),
      steps: [tr("\\(N = 600 / 3 = 200\\) ishlab chiqaruvchi, foyda 0.", '\\(N = 600 / 3 = 200\\) producers, profit 0.')],
    },
  },
];
