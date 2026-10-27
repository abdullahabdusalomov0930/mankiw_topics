import type { Formula } from '../../types';
import { tr } from '../../../lib/lang';

export const formulas: Formula[] = [
  {
    id: "market-demand",
    chapter: 4,
    nameEn: "Market demand = sum of individual demands",
    nameUz: "Bozor talabi — individual talablar yig'indisi",
    tex: "Q^D_{\\text{market}}(P) = \\sum_i Q^D_i(P)",
    symbols: [
      { tex: "Q^D_i(P)", meaning: tr("i-xaridorning P narxdagi talab miqdori", 'quantity demanded by buyer i at price P') },
      { tex: "\\sum_i", meaning: tr("barcha xaridorlar bo'yicha yig'indi (gorizontal qo'shish)", 'the sum over all buyers (horizontal addition)') },
    ],
    example: {
      setup: tr("Figure 2: $4 narxda Catherine 4 ta, Nicholas 3 ta muzqaymoq oladi.", 'Figure 2: at $4, Catherine buys 4 cones and Nicholas 3.'),
      steps: ["\\(Q^D_{\\text{market}}(4) = 4 + 3 = 7\\).", tr("Narxlar emas, **miqdorlar** qo'shiladi — shuning uchun “gorizontal”.", 'We add **quantities**, not prices — that is why it is “horizontal.”')],
    },
  },
  {
    id: "market-supply",
    chapter: 4,
    nameEn: "Market supply = sum of individual supplies",
    nameUz: "Bozor taklifi — individual takliflar yig'indisi",
    tex: "Q^S_{\\text{market}}(P) = \\sum_j Q^S_j(P)",
    symbols: [{ tex: "Q^S_j(P)", meaning: tr("j-sotuvchining P narxdagi taklif miqdori", 'quantity supplied by seller j at price P') }],
    example: {
      setup: tr("Figure 6: $4 da Ben 3 ta, Jerry 4 ta.", "Figure 6: at $4, Ben sells 3 and Jerry 4."),
      steps: ["\\(Q^S_{\\text{market}}(4) = 3 + 4 = 7\\)."],
    },
  },
  {
    id: "equilibrium",
    chapter: 4,
    nameEn: "Equilibrium condition",
    nameUz: "Muvozanat sharti",
    tex: "Q^D(P^*) = Q^S(P^*)",
    symbols: [
      { tex: "P^*", meaning: tr("muvozanat narxi", 'equilibrium price') },
      { tex: "Q^* = Q^D(P^*) = Q^S(P^*)", meaning: tr("muvozanat miqdori", 'equilibrium quantity') },
    ],
    example: {
      setup: tr("Chiziqli shakl: \\(Q^D = 300 - P\\), \\(Q^S = 2P\\).", 'Linear form: \\(Q^D = 300 - P\\), \\(Q^S = 2P\\).'),
      steps: [tr("Tenglashtiramiz: \\(300 - P = 2P\\).", 'Set them equal: \\(300 - P = 2P\\).'), tr("\\(3P = 300 \\Rightarrow P^* = 100\\).", '\\(3P = 300 \\Rightarrow P^* = 100\\).'), "\\(Q^* = 2 \\cdot 100 = 200\\)."],
    },
    note: tr("Jadval berilganda: \\(Q^D = Q^S\\) bo'lgan qatorni toping (Problem 8: $6 va 81 ta pitsa).", 'With a table: find the row where \\(Q^D = Q^S\\) (Problem 8: $6 and 81 pizzas).'),
  },
  {
    id: "linear-equilibrium",
    chapter: 4,
    nameEn: "Equilibrium with linear curves",
    nameUz: "Chiziqli egri chiziqlarda muvozanat",
    tex: "Q^D = a - bP,\\; Q^S = c + dP \\;\\Rightarrow\\; P^* = \\frac{a - c}{b + d},\\quad Q^* = a - bP^*",
    symbols: [
      { tex: "a,\\ b", meaning: tr("talab: narx nol bo'lgandagi miqdor va narx 1 ga oshganda miqdor qanchaga kamayishi", 'demand: the quantity at a zero price, and how much quantity falls when the price rises by 1') },
      { tex: "c,\\ d", meaning: tr("taklif: kesishma va narx 1 ga oshganda miqdor qanchaga ko'payishi", 'supply: the intercept, and how much quantity rises when the price rises by 1') },
    ],
    example: {
      setup: tr("\\(Q^D = 19 - 3P\\), \\(Q^S = -5 + 3P\\) (Figure 8 bozori).", '\\(Q^D = 19 - 3P\\), \\(Q^S = -5 + 3P\\) (the Figure 8 market).'),
      steps: ["\\(P^* = (19 - (-5))/(3 + 3) = 24/6 = 4\\).", tr("\\(Q^* = 19 - 3 \\cdot 4 = 7\\) — Figure 8 dagi $4 va 7 ta ✓", '\\(Q^* = 19 - 3 \\cdot 4 = 7\\) — the $4 and 7 cones of Figure 8 ✓')],
    },
  },
  {
    id: "shortage-surplus",
    chapter: 4,
    nameEn: "Shortage and surplus",
    nameUz: "Taqchillik va ortiqcha taklif",
    tex: "P < P^*:\\ \\text{Shortage} = Q^D - Q^S \\qquad P > P^*:\\ \\text{Surplus} = Q^S - Q^D",
    symbols: [{ tex: "P", meaning: tr("hozirgi bozor narxi", 'the current market price') }],
    example: {
      setup: tr("Figure 9: muvozanat $4.", 'Figure 9: equilibrium at $4.'),
      steps: [tr("$5 da: \\(Q^S = 10\\), \\(Q^D = 4\\) → surplus 6, narx tushadi.", 'At $5: \\(Q^S = 10\\), \\(Q^D = 4\\) → a surplus of 6; the price falls.'), tr("$3 da: \\(Q^D = 10\\), \\(Q^S = 4\\) → shortage 6, narx ko'tariladi.", 'At $3: \\(Q^D = 10\\), \\(Q^S = 4\\) → a shortage of 6; the price rises.')],
    },
  },
];
