import type { Formula } from '../../types';

export const formulas: Formula[] = [
  {
    id: "competitive-revenue",
    chapter: 15,
    nameEn: "Revenue of a competitive firm",
    nameUz: "Raqobatchi firma tushumi",
    tex: "TR = P \\times Q,\\qquad AR = \\frac{TR}{Q} = P,\\qquad MR = \\frac{\\Delta TR}{\\Delta Q} = P",
    symbols: [{ tex: "P", meaning: "bozor narxi (firma uchun berilgan)" }],
    example: { setup: "Problem 6: TR = $500, MR = $10.", steps: ["Raqobatchi firma: P = MR = AR = $10.", "\\(Q = 500 / 10 = 50\\)."] },
  },
  {
    id: "profit-max",
    chapter: 15,
    nameEn: "Profit-maximizing rule",
    nameUz: "Foydani maksimallashtirish qoidasi",
    tex: "MR = MC \\;\\Rightarrow\\; P = MC \\text{ (competitive firm)}",
    symbols: [{ tex: "MC", meaning: "marginal cost" }],
    example: { setup: "Vaca fermasi, P = $6: MC 2, 3, 4, 5, 6, 7…", steps: ["5-gallonda MC = 6 = MR; 6-gallon MC = 7 > 6.", "4 yoki 5 gallon, foyda $7."] },
  },
  {
    id: "shutdown-exit",
    chapter: 15,
    nameEn: "Shutdown and exit rules",
    nameUz: "To'xtatish va chiqish qoidalari",
    tex: "\\text{Shut down if } P < AVC;\\qquad \\text{Exit if } P < ATC;\\qquad \\text{Enter if } P > ATC",
    symbols: [{ tex: "AVC, ATC", meaning: "P = MC dagi o'rtacha xarajatlar" }],
    example: {
      setup: "Problem 2: Leah bir maysazor uchun $27 oladi; 10 ta maysazor: TC $280, FC $30.",
      steps: ["AVC = 250/10 = $25 < $27 → qisqa muddatda ishlaydi.", "ATC = $28 > $27 → uzoq muddatda chiqadi."],
    },
  },
  {
    id: "profit-area",
    chapter: 15,
    nameEn: "Profit as a rectangle",
    nameUz: "Foyda — to'rtburchak yuzasi",
    tex: "\\text{Profit} = (P - ATC) \\times Q",
    symbols: [{ tex: "P - ATC", meaning: "birlik boshiga foyda (balandlik)" }],
    example: { setup: "Problem 7: AR = $10, ATC = $8, Q = 100, FC = $200.", steps: ["Foyda = (10 − 8) × 100 = $200.", "MC = P = $10; AVC = (800 − 200)/100 = $6; MC > ATC → efficient scale 100 dan kam."] },
  },
  {
    id: "lr-equilibrium",
    chapter: 15,
    nameEn: "Long-run competitive equilibrium",
    nameUz: "Uzoq muddatli raqobat muvozanati",
    tex: "P = MC = \\min ATC,\\qquad N = \\frac{Q^D(\\min ATC)}{q_{\\text{efficient}}}",
    symbols: [
      { tex: "N", meaning: "firmalar soni" },
      { tex: "q_{\\text{efficient}}", meaning: "har bir firmaning efficient scale dagi mahsuloti" },
    ],
    example: {
      setup: "Problem 9 (Ectenia): min ATC = $7 da q = 3 pirog; P = $7 da talab 600.",
      steps: ["\\(N = 600 / 3 = 200\\) ishlab chiqaruvchi, foyda 0."],
    },
  },
];
