import type { Formula } from '../../types';

export const formulas: Formula[] = [
  {
    id: "oligopoly-ranking",
    chapter: 18,
    nameEn: "Oligopoly between monopoly and competition",
    nameUz: "Oligopoliya monopoliya va raqobat orasida",
    tex: "Q_M < Q_{\\text{oligopoly}} < Q_C,\\qquad P_C < P_{\\text{oligopoly}} < P_M",
    symbols: [
      { tex: "Q_M, P_M", meaning: "monopoliya (kartel) natijasi" },
      { tex: "Q_C, P_C", meaning: "raqobat natijasi (P = MC)" },
    ],
    example: { setup: "Table 1: P = 120 − Q, MC = 0.", steps: ["Monopoliya/kartel: 60 gallon, $60 (foyda $3,600).", "Duopoliya Nash: 40 + 40 = 80 gallon, $40.", "Raqobat: 120 gallon, $0."] },
  },
  {
    id: "n-firm-nash",
    chapter: 18,
    nameEn: "Symmetric Nash quantity with N firms (linear demand, zero MC)",
    nameUz: "N firmali simmetrik Nash miqdori (chiziqli talab, MC = 0)",
    tex: "P = a - Q \\;\\Rightarrow\\; q_i = \\frac{a}{N+1},\\quad Q = \\frac{N}{N+1}\\,a,\\quad P = \\frac{a}{N+1}",
    symbols: [{ tex: "N", meaning: "firmalar soni" }],
    example: { setup: "a = 120 (Table 1).", steps: ["N = 1: Q = 60, P = 60 (monopoliya).", "N = 2: Q = 80, P = 40 (Jack va Jill).", "N → ∞: Q → 120, P → 0 (raqobat)."] },
    note: "Kitob bu formulani bermaydi — bu “sotuvchilar ko'paysa bozor raqobatga yaqinlashadi” xulosasining hisob-kitob ko'rinishi (Cournot modeli).",
  },
  {
    id: "repeated-game",
    chapter: 18,
    nameEn: "When cooperation is sustained in a repeated game",
    nameUz: "Takroriy o'yinda hamkorlik sharti",
    tex: "\\text{one-time gain from cheating} < \\text{present value of future losses}",
    symbols: [{ tex: "\\text{cheating}", meaning: "kelishuvni buzish" }],
    example: { setup: "Jack va Jill har hafta o'ynaydi; buzsa, ikkalasi abadiy 40 ishlab chiqaradi.", steps: ["Buzish foydasi: bir hafta $2,000 − $1,800 = $200.", "Keyin har hafta $1,600 − $1,800 = −$200 abadiy — kelajakni qadrlasa, buzmaydi."] },
  },
];
