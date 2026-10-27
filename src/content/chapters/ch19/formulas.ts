import type { Formula } from '../../types';
import { tr } from '../../../lib/lang';

export const formulas: Formula[] = [
  {
    id: "vmp",
    chapter: 19,
    nameEn: "Value of the marginal product",
    nameUz: "Marjinal mahsulot qiymati",
    tex: "VMPL = P \\times MPL,\\qquad MPL = \\frac{\\Delta Q}{\\Delta L}",
    symbols: [
      { tex: "P", meaning: tr("mahsulot narxi", 'price of the good') },
      { tex: "MPL", meaning: tr("mehnatning marjinal mahsuloti", 'marginal product of labor') },
    ],
    example: { setup: tr("Table 1: olma $10/bushel; 3-ishchi 240 − 180 = 60 bushel.", 'Table 1: apples $10/bushel; the 3rd worker 240 − 180 = 60 bushels.'), steps: [tr("\\(VMPL = 10 \\times 60 = \\$600\\).", '\\(VMPL = 10 \\times 60 = \\$600\\).')] },
  },
  {
    id: "hiring-rule",
    chapter: 19,
    nameEn: "Profit-maximizing hiring rule",
    nameUz: "Foydani maksimallashtiruvchi yollash qoidasi",
    tex: "P \\times MPL = W \\iff P = \\frac{W}{MPL} = MC",
    symbols: [{ tex: "W", meaning: tr("ish haqi (mehnat narxi)", 'the wage (price of labor)') }],
    example: {
      setup: tr("QQ 3: tort $20, ish haqi $10/soat.", 'QQ 3: a cake is $20, the wage $10/hour.'),
      steps: [tr("\\(20 \\times MPL = 10 \\Rightarrow MPL = \\tfrac12\\) tort soatiga.", '\\(20 \\times MPL = 10 \\Rightarrow MPL = \\tfrac12\\) cake per hour.'), tr("QQ 9: pech ijarasi $30 → \\(20 \\times MP = 30 \\Rightarrow MP = 3/2\\) tort.", 'QQ 9: oven rental $30 → \\(20 \\times MP = 30 \\Rightarrow MP = 3/2\\) cakes.')],
    },
    note: tr("Har qanday omil uchun: ijara narxi = VMP (yer, kapital).", 'For any factor: rental price = VMP (land, capital).'),
  },
  {
    id: "labor-demand-from-mpl",
    chapter: 19,
    nameEn: "Labor demand from a production function (Problem 5)",
    nameUz: "Ishlab chiqarish funksiyasidan mehnatga talab (Problem 5)",
    tex: "Q = 100L - L^2,\\ MPL = 100 - 2L:\\quad P(100 - 2L) = W \\Rightarrow L = 50 - \\frac{W}{2P}",
    symbols: [{ tex: "L", meaning: tr("bir bog'dagi ishchilar", 'workers at one orchard') }],
    example: {
      setup: tr("20 bog', P = $2, 200 ishchi (inelastik taklif).", '20 orchards, P = $2, 200 workers (inelastic supply).'),
      steps: [tr("Bozor talabi: \\(20(50 - W/4) = 1000 - 5W = 200 \\Rightarrow W = 160\\).", 'Market demand: \\(20(50 - W/4) = 1000 - 5W = 200 \\Rightarrow W = 160\\).'), tr("Har bog' 10 ishchi, Q = 900, foyda \\(2 \\cdot 900 - 160 \\cdot 10 = \\$200\\).", 'Each orchard 10 workers, Q = 900, profit \\(2 \\cdot 900 - 160 \\cdot 10 = \\$200\\).')],
    },
  },
  {
    id: "cobb-douglas",
    chapter: 19,
    nameEn: "Cobb–Douglas production function (Problem 9)",
    nameUz: "Cobb–Douglas ishlab chiqarish funksiyasi (Problem 9)",
    tex: "Y = A K^{1/3} L^{2/3},\\qquad MPL = \\tfrac23 A \\left(\\frac{K}{L}\\right)^{1/3},\\qquad \\frac{WL}{PY} = \\frac23",
    symbols: [
      { tex: "A", meaning: tr("texnologiya darajasi", 'level of technology') },
      { tex: "K, L", meaning: tr("kapital va mehnat", 'capital and labor') },
    ],
    example: {
      setup: "P = 2, A = 3, K = 1,000,000, L = 1,000.",
      steps: ["\\(Y = 3 \\cdot 100 \\cdot 100 = 30{,}000\\), PY = 60,000.", tr("\\(MPL = 2 \\cdot 10 = 20\\) → W = 40, W/P = 20; ulush \\(40{,}000/60{,}000 = 2/3\\).", '\\(MPL = 2 \\cdot 10 = 20\\) → W = 40, W/P = 20; share \\(40{,}000/60{,}000 = 2/3\\).')],
    },
  },
];
