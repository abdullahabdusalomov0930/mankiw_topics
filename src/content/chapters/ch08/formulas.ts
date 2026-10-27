import type { Formula } from '../../types';
import { tr } from '../../../lib/lang';

export const formulas: Formula[] = [
  {
    id: "revenue",
    chapter: 8,
    nameEn: "Tax revenue",
    nameUz: tr("Soliq tushumi", 'Tax revenue'),
    tex: "\\text{Tax revenue} = T \\times Q_{\\text{tax}}",
    symbols: [
      { tex: "T", meaning: tr("bir birlikka soliq", 'the tax per unit') },
      { tex: "Q_{\\text{tax}}", meaning: tr("soliq bilan sotilgan miqdor", 'the quantity sold with the tax') },
    ],
    example: { setup: tr("Problem 9: $10 soliq, 900 xona.", 'Problem 9: a $10 tax, 900 rooms.'), steps: [tr("Tushum \\(= 10 \\times 900 = \\$9{,}000\\).", 'Revenue \\(= 10 \\times 900 = \\$9{,}000\\).')] },
  },
  {
    id: "dwl",
    chapter: 8,
    nameEn: "Deadweight loss of a tax",
    nameUz: tr("Soliqning sof yo'qotishi", 'The deadweight loss of a tax'),
    tex: "DWL = \\tfrac12 \\times T \\times (Q_1 - Q_2)",
    symbols: [
      { tex: "Q_1", meaning: tr("soliqsiz miqdor", 'the quantity without the tax') },
      { tex: "Q_2", meaning: tr("soliq bilan miqdor", 'the quantity with the tax') },
      { tex: "T", meaning: tr("uchburchak balandligi (pona)", 'the height of the triangle (the wedge)') },
    ],
    example: { setup: tr("Problem 9: 1,000 → 900 xona, $10 soliq.", 'Problem 9: 1,000 → 900 rooms, a $10 tax.'), steps: [tr("\\(DWL = \\tfrac12 \\times 10 \\times 100 = \\$500\\).", '\\(DWL = \\tfrac12 \\times 10 \\times 100 = \\$500\\).')] },
  },
  {
    id: "dwl-square",
    chapter: 8,
    nameEn: "DWL grows with the square of the tax",
    nameUz: tr("DWL soliq kvadratiga proporsional", 'DWL is proportional to the square of the tax'),
    tex: "DWL = \\frac{T^2}{2\\,(b + d)} \\quad\\Rightarrow\\quad T \\times 2 \\Rightarrow DWL \\times 4,\\quad T \\times 3 \\Rightarrow DWL \\times 9",
    symbols: [{ tex: "b,\\ d", meaning: tr("talab va taklif egri chiziqlarining nishablari (\\(P = a - bQ\\), \\(P = c + dQ\\))", 'the slopes of the demand and supply curves (\\(P = a - bQ\\), \\(P = c + dQ\\))') }],
    example: {
      setup: tr("Problem 9: $10 → $20 soliq.", 'Problem 9: the tax goes $10 → $20.'),
      steps: [tr("Miqdor kamayishi 100 → 200 (ikki barobar), balandlik 10 → 20 (ikki barobar).", 'The fall in quantity 100 → 200 (doubles), the height 10 → 20 (doubles).'), tr("\\(DWL\\): $500 → \\(\\tfrac12 \\cdot 20 \\cdot 200 = \\$2{,}000\\) — **to'rt barobar**.", '\\(DWL\\): $500 → \\(\\tfrac12 \\cdot 20 \\cdot 200 = \\$2{,}000\\) — **four times** as large.')],
    },
  },
  {
    id: "welfare-table",
    chapter: 8,
    nameEn: "How a tax changes welfare (Figure 3)",
    nameUz: tr("Soliqning farovonlikka ta'siri", 'The welfare effects of a tax'),
    tex: "\\Delta CS = -(B + C),\\quad \\Delta PS = -(D + E),\\quad \\Delta\\text{Rev} = +(B + D),\\quad \\Delta TS = -(C + E)",
    symbols: [
      { tex: "B + D", meaning: tr("soliq tushumi (iste'molchi va ishlab chiqaruvchidan o'tgan qism)", 'tax revenue (the part passed from consumers and producers)') },
      { tex: "C + E", meaning: tr("sof yo'qotish — hech kimga o'tmagan", 'the deadweight loss — passed to nobody') },
    ],
    example: { setup: tr("Har qanday soliq.", 'Any tax.'), steps: [tr("Yo'qotishlar \\((B+C)+(D+E)\\) tushumdan \\((B+D)\\) ko'p.", 'The losses \\((B+C)+(D+E)\\) exceed the revenue \\((B+D)\\).'), "Farq \\(C + E\\) — deadweight loss."] },
  },
  {
    id: "revenue-of-T",
    chapter: 8,
    nameEn: "Revenue and DWL as functions of T (Problem 10)",
    nameUz: tr("Tushum va DWL — T funksiyasi sifatida", 'Revenue and DWL as functions of T'),
    tex: "Q^S = 2P,\\ Q^D = 300 - (P + T):\\quad Q = 200 - \\tfrac{2T}{3},\\quad R(T) = T\\left(200 - \\tfrac{2T}{3}\\right),\\quad DWL = \\tfrac{T^2}{3}",
    symbols: [{ tex: "R(T)", meaning: tr("tushum — parabola, T = 150 da maksimal (Laffer cho'qqisi)", 'revenue is a parabola, maximized at T = 150 (the top of the Laffer curve)') }],
    example: {
      setup: tr("\\(T = 200\\) va \\(T = 100\\) ni solishtiring.", 'Compare \\(T = 200\\) and \\(T = 100\\).'),
      steps: [tr("\\(R(200) = 200 \\cdot 66.7 = 13{,}333\\), \\(DWL = 13{,}333\\).", '\\(R(200) = 200 \\cdot 66.7 = 13{,}333\\), \\(DWL = 13{,}333\\).'), tr("\\(R(100) = 100 \\cdot 133.3 = 13{,}333\\), \\(DWL = 3{,}333\\) — xuddi shu tushum, to'rt barobar kam yo'qotish!", '\\(R(100) = 100 \\cdot 133.3 = 13{,}333\\), \\(DWL = 3{,}333\\) — the same revenue with a quarter of the loss!')],
    },
  },
];
