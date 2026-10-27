import type { Formula } from '../../types';
import { tr } from '../../../lib/lang';

export const formulas: Formula[] = [
  {
    id: "oligopoly-ranking",
    chapter: 18,
    nameEn: "Oligopoly between monopoly and competition",
    nameUz: "Oligopoliya monopoliya va raqobat orasida",
    tex: "Q_M < Q_{\\text{oligopoly}} < Q_C,\\qquad P_C < P_{\\text{oligopoly}} < P_M",
    symbols: [
      { tex: "Q_M, P_M", meaning: tr("monopoliya (kartel) natijasi", 'the monopoly (cartel) outcome') },
      { tex: "Q_C, P_C", meaning: tr("raqobat natijasi (P = MC)", 'the competitive outcome (P = MC)') },
    ],
    example: { setup: "Table 1: P = 120 − Q, MC = 0.", steps: [tr("Monopoliya/kartel: 60 gallon, $60 (foyda $3,600).", 'Monopoly/cartel: 60 gallons, $60 (profit $3,600).'), "Duopoliya Nash: 40 + 40 = 80 gallon, $40.", tr("Raqobat: 120 gallon, $0.", 'Competition: 120 gallons, $0.')] },
  },
  {
    id: "n-firm-nash",
    chapter: 18,
    nameEn: "Symmetric Nash quantity with N firms (linear demand, zero MC)",
    nameUz: "N firmali simmetrik Nash miqdori (chiziqli talab, MC = 0)",
    tex: "P = a - Q \\;\\Rightarrow\\; q_i = \\frac{a}{N+1},\\quad Q = \\frac{N}{N+1}\\,a,\\quad P = \\frac{a}{N+1}",
    symbols: [{ tex: "N", meaning: tr("firmalar soni", 'number of firms') }],
    example: { setup: "a = 120 (Table 1).", steps: [tr("N = 1: Q = 60, P = 60 (monopoliya).", 'N = 1: Q = 60, P = 60 (monopoly).'), tr("N = 2: Q = 80, P = 40 (Jack va Jill).", 'N = 2: Q = 80, P = 40 (Jack and Jill).'), tr("N → ∞: Q → 120, P → 0 (raqobat).", 'N → ∞: Q → 120, P → 0 (competition).')] },
    note: tr("Kitob bu formulani bermaydi — bu “sotuvchilar ko'paysa bozor raqobatga yaqinlashadi” xulosasining hisob-kitob ko'rinishi (Cournot modeli).", "The book doesn't give this formula — it's the computational form of the conclusion that “as the number of sellers grows, the market approaches competition” (the Cournot model)."),
  },
  {
    id: "repeated-game",
    chapter: 18,
    nameEn: "When cooperation is sustained in a repeated game",
    nameUz: "Takroriy o'yinda hamkorlik sharti",
    tex: "\\text{one-time gain from cheating} < \\text{present value of future losses}",
    symbols: [{ tex: "\\text{cheating}", meaning: tr("kelishuvni buzish", 'breaking the agreement') }],
    example: { setup: tr("Jack va Jill har hafta o'ynaydi; buzsa, ikkalasi abadiy 40 ishlab chiqaradi.", 'Jack and Jill play every week; if one cheats, both produce 40 forever.'), steps: [tr("Buzish foydasi: bir hafta $2,000 − $1,800 = $200.", 'The gain from cheating: one week of $2,000 − $1,800 = $200.'), tr("Keyin har hafta $1,600 − $1,800 = −$200 abadiy — kelajakni qadrlasa, buzmaydi.", "Then −$200 every week forever ($1,600 − $1,800) — if they value the future, they won't cheat.")] },
  },
];
