import type { Formula } from '../../types';

export const formulas: Formula[] = [
  {
    id: "vmp",
    chapter: 19,
    nameEn: "Value of the marginal product",
    nameUz: "Marjinal mahsulot qiymati",
    tex: "VMPL = P \\times MPL,\\qquad MPL = \\frac{\\Delta Q}{\\Delta L}",
    symbols: [
      { tex: "P", meaning: "mahsulot narxi" },
      { tex: "MPL", meaning: "mehnatning marjinal mahsuloti" },
    ],
    example: { setup: "Table 1: olma $10/bushel; 3-ishchi 240 − 180 = 60 bushel.", steps: ["\\(VMPL = 10 \\times 60 = \\$600\\)."] },
  },
  {
    id: "hiring-rule",
    chapter: 19,
    nameEn: "Profit-maximizing hiring rule",
    nameUz: "Foydani maksimallashtiruvchi yollash qoidasi",
    tex: "P \\times MPL = W \\iff P = \\frac{W}{MPL} = MC",
    symbols: [{ tex: "W", meaning: "ish haqi (mehnat narxi)" }],
    example: {
      setup: "QQ 3: tort $20, ish haqi $10/soat.",
      steps: ["\\(20 \\times MPL = 10 \\Rightarrow MPL = \\tfrac12\\) tort soatiga.", "QQ 9: pech ijarasi $30 → \\(20 \\times MP = 30 \\Rightarrow MP = 3/2\\) tort."],
    },
    note: "Har qanday omil uchun: ijara narxi = VMP (yer, kapital).",
  },
  {
    id: "labor-demand-from-mpl",
    chapter: 19,
    nameEn: "Labor demand from a production function (Problem 5)",
    nameUz: "Ishlab chiqarish funksiyasidan mehnatga talab (Problem 5)",
    tex: "Q = 100L - L^2,\\ MPL = 100 - 2L:\\quad P(100 - 2L) = W \\Rightarrow L = 50 - \\frac{W}{2P}",
    symbols: [{ tex: "L", meaning: "bir bog'dagi ishchilar" }],
    example: {
      setup: "20 bog', P = $2, 200 ishchi (inelastik taklif).",
      steps: ["Bozor talabi: \\(20(50 - W/4) = 1000 - 5W = 200 \\Rightarrow W = 160\\).", "Har bog' 10 ishchi, Q = 900, foyda \\(2 \\cdot 900 - 160 \\cdot 10 = \\$200\\)."],
    },
  },
  {
    id: "cobb-douglas",
    chapter: 19,
    nameEn: "Cobb–Douglas production function (Problem 9)",
    nameUz: "Cobb–Douglas ishlab chiqarish funksiyasi (Problem 9)",
    tex: "Y = A K^{1/3} L^{2/3},\\qquad MPL = \\tfrac23 A \\left(\\frac{K}{L}\\right)^{1/3},\\qquad \\frac{WL}{PY} = \\frac23",
    symbols: [
      { tex: "A", meaning: "texnologiya darajasi" },
      { tex: "K, L", meaning: "kapital va mehnat" },
    ],
    example: {
      setup: "P = 2, A = 3, K = 1,000,000, L = 1,000.",
      steps: ["\\(Y = 3 \\cdot 100 \\cdot 100 = 30{,}000\\), PY = 60,000.", "\\(MPL = 2 \\cdot 10 = 20\\) → W = 40, W/P = 20; ulush \\(40{,}000/60{,}000 = 2/3\\)."],
    },
  },
];
