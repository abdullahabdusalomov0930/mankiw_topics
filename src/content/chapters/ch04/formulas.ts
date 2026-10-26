import type { Formula } from '../../types';

export const formulas: Formula[] = [
  {
    id: "market-demand",
    chapter: 4,
    nameEn: "Market demand = sum of individual demands",
    nameUz: "Bozor talabi — individual talablar yig'indisi",
    tex: "Q^D_{\\text{market}}(P) = \\sum_i Q^D_i(P)",
    symbols: [
      { tex: "Q^D_i(P)", meaning: "i-xaridorning P narxdagi talab miqdori" },
      { tex: "\\sum_i", meaning: "barcha xaridorlar bo'yicha yig'indi (gorizontal qo'shish)" },
    ],
    example: {
      setup: "Figure 2: $4 narxda Catherine 4 ta, Nicholas 3 ta muzqaymoq oladi.",
      steps: ["\\(Q^D_{\\text{market}}(4) = 4 + 3 = 7\\).", "Narxlar emas, **miqdorlar** qo'shiladi — shuning uchun “gorizontal”."],
    },
  },
  {
    id: "market-supply",
    chapter: 4,
    nameEn: "Market supply = sum of individual supplies",
    nameUz: "Bozor taklifi — individual takliflar yig'indisi",
    tex: "Q^S_{\\text{market}}(P) = \\sum_j Q^S_j(P)",
    symbols: [{ tex: "Q^S_j(P)", meaning: "j-sotuvchining P narxdagi taklif miqdori" }],
    example: {
      setup: "Figure 6: $4 da Ben 3 ta, Jerry 4 ta.",
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
      { tex: "P^*", meaning: "muvozanat narxi" },
      { tex: "Q^* = Q^D(P^*) = Q^S(P^*)", meaning: "muvozanat miqdori" },
    ],
    example: {
      setup: "Chiziqli shakl: \\(Q^D = 300 - P\\), \\(Q^S = 2P\\).",
      steps: ["Tenglashtiramiz: \\(300 - P = 2P\\).", "\\(3P = 300 \\Rightarrow P^* = 100\\).", "\\(Q^* = 2 \\cdot 100 = 200\\)."],
    },
    note: "Jadval berilganda: \\(Q^D = Q^S\\) bo'lgan qatorni toping (Problem 8: $6 va 81 ta pitsa).",
  },
  {
    id: "linear-equilibrium",
    chapter: 4,
    nameEn: "Equilibrium with linear curves",
    nameUz: "Chiziqli egri chiziqlarda muvozanat",
    tex: "Q^D = a - bP,\\; Q^S = c + dP \\;\\Rightarrow\\; P^* = \\frac{a - c}{b + d},\\quad Q^* = a - bP^*",
    symbols: [
      { tex: "a,\\ b", meaning: "talab: narx nol bo'lgandagi miqdor va narx 1 ga oshganda miqdor qanchaga kamayishi" },
      { tex: "c,\\ d", meaning: "taklif: kesishma va narx 1 ga oshganda miqdor qanchaga ko'payishi" },
    ],
    example: {
      setup: "\\(Q^D = 19 - 3P\\), \\(Q^S = -5 + 3P\\) (Figure 8 bozori).",
      steps: ["\\(P^* = (19 - (-5))/(3 + 3) = 24/6 = 4\\).", "\\(Q^* = 19 - 3 \\cdot 4 = 7\\) — Figure 8 dagi $4 va 7 ta ✓"],
    },
  },
  {
    id: "shortage-surplus",
    chapter: 4,
    nameEn: "Shortage and surplus",
    nameUz: "Taqchillik va ortiqcha taklif",
    tex: "P < P^*:\\ \\text{Shortage} = Q^D - Q^S \\qquad P > P^*:\\ \\text{Surplus} = Q^S - Q^D",
    symbols: [{ tex: "P", meaning: "hozirgi bozor narxi" }],
    example: {
      setup: "Figure 9: muvozanat $4.",
      steps: ["$5 da: \\(Q^S = 10\\), \\(Q^D = 4\\) → surplus 6, narx tushadi.", "$3 da: \\(Q^D = 10\\), \\(Q^S = 4\\) → shortage 6, narx ko'tariladi."],
    },
  },
];
