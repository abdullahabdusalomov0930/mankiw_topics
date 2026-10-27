import type { Formula } from '../../types';
import { tr } from '../../../lib/lang';

export const formulas: Formula[] = [
  {
    id: "profit-def",
    chapter: 14,
    nameEn: "Economic and accounting profit",
    nameUz: "Iqtisodiy va buxgalteriya foydasi",
    tex: "\\pi_{\\text{econ}} = TR - (\\text{explicit} + \\text{implicit}),\\qquad \\pi_{\\text{acct}} = TR - \\text{explicit}",
    symbols: [
      { tex: "TR", meaning: "total revenue = P × Q" },
      { tex: "\\pi", meaning: tr("foyda", "profit") },
    ],
    example: { setup: tr("QQ 2: Xavier $60 limonad sotdi, ingrediyent $10, shu vaqtda maysazor o'rib $40 topardi.", 'QQ 2: Xavier sold $60 of lemonade, ingredients cost $10, and in that time he could have earned $40 mowing lawns.'), steps: [tr("Buxgalteriya: \\(60 - 10 = \\$50\\).", 'Accounting: \\(60 - 10 = \\$50\\).'), tr("Iqtisodiy: \\(60 - 10 - 40 = \\$10\\).", 'Economic: \\(60 - 10 - 40 = \\$10\\).')] },
  },
  {
    id: "marginal-product",
    chapter: 14,
    nameEn: "Marginal product of labor",
    nameUz: "Mehnatning marjinal mahsuloti",
    tex: "MP_L = \\frac{\\Delta Q}{\\Delta L}",
    symbols: [{ tex: "L", meaning: tr("ishchilar soni", 'number of workers') }],
    example: { setup: tr("Chloe: 2 ishchi — 90, 3 ishchi — 120 pechene.", 'Chloe: 2 workers — 90, 3 workers — 120 cookies.'), steps: [tr("\\(MP = 120 - 90 = 30\\) pechene.", '\\(MP = 120 - 90 = 30\\) cookies.')] },
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
    example: { setup: "Caleb, Q = 4: TC $5.40, FC $3.00.", steps: [tr("VC = 2.40; AFC = 0.75; AVC = 0.60; ATC = 1.35 = 0.75 + 0.60.", 'VC = 2.40; AFC = 0.75; AVC = 0.60; ATC = 1.35 = 0.75 + 0.60.')] },
  },
  {
    id: "marginal-cost",
    chapter: 14,
    nameEn: "Marginal cost",
    nameUz: "Marjinal xarajat",
    tex: "MC = \\frac{\\Delta TC}{\\Delta Q} = \\frac{\\Delta VC}{\\Delta Q}",
    symbols: [{ tex: "\\Delta", meaning: tr("o'zgarish", 'change') }],
    example: {
      setup: tr("QQ 5: 1,000 birlik — $5,000; 1,001 birlik — $5,008.", 'QQ 5: 1,000 units — $5,000; 1,001 units — $5,008.'),
      steps: ["\\(MC = 5{,}008 - 5{,}000 = \\$8\\).", tr("\\(ATC = 5{,}000 / 1{,}000 = \\$5\\).", '\\(ATC = 5{,}000 / 1{,}000 = \\$5\\).')],
    },
    note: tr("Fixed cost Q bilan o'zgarmagani uchun MC ni TC dan ham, VC dan ham hisoblash bir xil natija beradi (Problem 6).", "Because fixed cost doesn't change with Q, computing MC from TC or from VC gives the same result (Problem 6)."),
  },
  {
    id: "mc-atc-rule",
    chapter: 14,
    nameEn: "Marginal–average rule",
    nameUz: "Marjinal va o'rtacha qoidasi",
    tex: "MC < ATC \\Rightarrow ATC \\downarrow;\\quad MC > ATC \\Rightarrow ATC \\uparrow;\\quad MC = ATC \\text{ at } \\min ATC",
    symbols: [{ tex: "\\min ATC", meaning: "efficient scale" }],
    example: { setup: tr("QQ 6: 20 birlik, ATC $25, MC $15; 21-birlikka o'tildi.", 'QQ 6: 20 units, ATC $25, MC $15; production moves to the 21st unit.'), steps: [tr("MC (15) < ATC (25) → ATC **tushadi**.", 'MC (15) < ATC (25) → ATC **falls**.'), tr("MC ning o'zi oshadimi-yo'qmi — ma'lumot yetarli emas.", "Whether MC itself rises — there isn't enough information.")] },
  },
];
