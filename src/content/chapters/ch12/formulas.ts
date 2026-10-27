import type { Formula } from '../../types';
import { tr } from '../../../lib/lang';

export const formulas: Formula[] = [
  {
    id: "fair-premium",
    chapter: 12,
    nameEn: "Actuarially fair premium",
    nameUz: "Adolatli sug'urta badali",
    tex: "\\text{Premium} = p \\times \\text{Cost of treatment}\\ (+\\ \\text{expenses and profit})",
    symbols: [{ tex: "p", meaning: tr("kasallanish ehtimoli", 'probability of getting sick') }],
    example: { setup: tr("Kasallik 2% ga uriladi, davolash $30,000.", 'An illness strikes 2% of people; treatment costs $30,000.'), steps: [tr("100 kishidan 2 tasi kasal → $60,000.", '2 of every 100 people get sick → $60,000.'), tr("\\(0.02 \\times 30{,}000 = \\$600\\) kishi boshiga.", '\\(0.02 \\times 30{,}000 = \\$600\\) per person.')] },
  },
  {
    id: "pool-price",
    chapter: 12,
    nameEn: "Community-rated price and the buy decision",
    nameUz: "Umumiy narx va sotib olish qarori",
    tex: "P = \\overline{\\text{cost}}_{\\text{pool}} + \\text{load};\\qquad \\text{buy} \\iff \\text{cost}_i + V_{\\text{certainty}} \\ge P",
    symbols: [
      { tex: "\\overline{\\text{cost}}_{\\text{pool}}", meaning: tr("sug'urtalanganlarning o'rtacha kutilgan xarajati", 'average expected cost of those insured') },
      { tex: "V_{\\text{certainty}}", meaning: tr("noaniqlikdan qutulish qiymati", 'value of escaping uncertainty') },
    ],
    example: {
      setup: tr("Problem 4: xarajatlar $1,000…$5,000, load $700, noaniqlik qiymati $1,000.", 'Problem 4: costs $1,000…$5,000, load $700, value of uncertainty $1,000.'),
      steps: [tr("\\(P = 3{,}000 + 700 = 3{,}700\\) → cost ≥ 2,700 bo'lganlar (C, D, E) oladi.", '\\(P = 3{,}000 + 700 = 3{,}700\\) → those with cost ≥ 2,700 (C, D, E) buy.'), tr("\\(P = 4{,}000 + 700 = 4{,}700\\) → D, E; keyin \\(5{,}200\\) → E; \\(5{,}700\\) → E — muvozanat.", '\\(P = 4{,}000 + 700 = 4{,}700\\) → D, E; then \\(5{,}200\\) → E; \\(5{,}700\\) → E — equilibrium.')],
    },
  },
  {
    id: "insurance-surplus",
    chapter: 12,
    nameEn: "Consumer surplus from insurance",
    nameUz: "Sug'urtadan iste'molchi surplusi",
    tex: "CS_i = V_{\\text{certainty}} + \\text{cost}_i - P",
    symbols: [{ tex: "CS_i", meaning: tr("i-turdagi odamning sof yutug'i", 'net gain of a type-i person') }],
    example: { setup: tr("Mandate: hamma oladi, P = $3,700.", 'Mandate: everyone buys, P = $3,700.'), steps: ["A: \\(1{,}000 + 1{,}000 - 3{,}700 = -1{,}700\\); E: \\(+2{,}300\\).", "Jami: \\(-1700 - 700 + 300 + 1300 + 2300 = \\$1{,}500\\)."] },
  },
];
