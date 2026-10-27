import type { Formula } from '../../types';

export const formulas: Formula[] = [
  {
    id: "profit-def",
    chapter: 14,
    nameEn: "Economic and accounting profit",
    nameUz: "Iqtisodiy va buxgalteriya foydasi",
    tex: "\\pi_{\\text{econ}} = TR - (\\text{explicit} + \\text{implicit}),\\qquad \\pi_{\\text{acct}} = TR - \\text{explicit}",
    symbols: [
      { tex: "TR", meaning: "total revenue = P × Q" },
      { tex: "\\pi", meaning: "foyda" },
    ],
    example: { setup: "QQ 2: Xavier $60 limonad sotdi, ingrediyent $10, shu vaqtda maysazor o'rib $40 topardi.", steps: ["Buxgalteriya: \\(60 - 10 = \\$50\\).", "Iqtisodiy: \\(60 - 10 - 40 = \\$10\\)."] },
  },
  {
    id: "marginal-product",
    chapter: 14,
    nameEn: "Marginal product of labor",
    nameUz: "Mehnatning marjinal mahsuloti",
    tex: "MP_L = \\frac{\\Delta Q}{\\Delta L}",
    symbols: [{ tex: "L", meaning: "ishchilar soni" }],
    example: { setup: "Chloe: 2 ishchi — 90, 3 ishchi — 120 pechene.", steps: ["\\(MP = 120 - 90 = 30\\) pechene."] },
  },
  {
    id: "cost-identities",
    chapter: 14,
    nameEn: "Cost identities",
    nameUz: "Xarajat ayniyatlari",
    tex: "TC = FC + VC,\\quad AFC = \\frac{FC}{Q},\\quad AVC = \\frac{VC}{Q},\\quad ATC = \\frac{TC}{Q} = AFC + AVC",
    symbols: [
      { tex: "FC", meaning: "fixed cost" },
      { tex: "VC", meaning: "variable cost" },
    ],
    example: { setup: "Caleb, Q = 4: TC $5.40, FC $3.00.", steps: ["VC = 2.40; AFC = 0.75; AVC = 0.60; ATC = 1.35 = 0.75 + 0.60."] },
  },
  {
    id: "marginal-cost",
    chapter: 14,
    nameEn: "Marginal cost",
    nameUz: "Marjinal xarajat",
    tex: "MC = \\frac{\\Delta TC}{\\Delta Q} = \\frac{\\Delta VC}{\\Delta Q}",
    symbols: [{ tex: "\\Delta", meaning: "o'zgarish" }],
    example: {
      setup: "QQ 5: 1,000 birlik — $5,000; 1,001 birlik — $5,008.",
      steps: ["\\(MC = 5{,}008 - 5{,}000 = \\$8\\).", "\\(ATC = 5{,}000 / 1{,}000 = \\$5\\)."],
    },
    note: "Fixed cost Q bilan o'zgarmagani uchun MC ni TC dan ham, VC dan ham hisoblash bir xil natija beradi (Problem 6).",
  },
  {
    id: "mc-atc-rule",
    chapter: 14,
    nameEn: "Marginal–average rule",
    nameUz: "Marjinal va o'rtacha qoidasi",
    tex: "MC < ATC \\Rightarrow ATC \\downarrow;\\quad MC > ATC \\Rightarrow ATC \\uparrow;\\quad MC = ATC \\text{ at } \\min ATC",
    symbols: [{ tex: "\\min ATC", meaning: "efficient scale" }],
    example: { setup: "QQ 6: 20 birlik, ATC $25, MC $15; 21-birlikka o'tildi.", steps: ["MC (15) < ATC (25) → ATC **tushadi**.", "MC ning o'zi oshadimi-yo'qmi — ma'lumot yetarli emas."] },
  },
];
