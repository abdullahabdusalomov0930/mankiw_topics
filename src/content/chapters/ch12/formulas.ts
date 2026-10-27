import type { Formula } from '../../types';

export const formulas: Formula[] = [
  {
    id: "fair-premium",
    chapter: 12,
    nameEn: "Actuarially fair premium",
    nameUz: "Adolatli sug'urta badali",
    tex: "\\text{Premium} = p \\times \\text{Cost of treatment}\\ (+\\ \\text{expenses and profit})",
    symbols: [{ tex: "p", meaning: "kasallanish ehtimoli" }],
    example: { setup: "Kasallik 2% ga uriladi, davolash $30,000.", steps: ["100 kishidan 2 tasi kasal → $60,000.", "\\(0.02 \\times 30{,}000 = \\$600\\) kishi boshiga."] },
  },
  {
    id: "pool-price",
    chapter: 12,
    nameEn: "Community-rated price and the buy decision",
    nameUz: "Umumiy narx va sotib olish qarori",
    tex: "P = \\overline{\\text{cost}}_{\\text{pool}} + \\text{load};\\qquad \\text{buy} \\iff \\text{cost}_i + V_{\\text{certainty}} \\ge P",
    symbols: [
      { tex: "\\overline{\\text{cost}}_{\\text{pool}}", meaning: "sug'urtalanganlarning o'rtacha kutilgan xarajati" },
      { tex: "V_{\\text{certainty}}", meaning: "noaniqlikdan qutulish qiymati" },
    ],
    example: {
      setup: "Problem 4: xarajatlar $1,000…$5,000, load $700, noaniqlik qiymati $1,000.",
      steps: ["\\(P = 3{,}000 + 700 = 3{,}700\\) → cost ≥ 2,700 bo'lganlar (C, D, E) oladi.", "\\(P = 4{,}000 + 700 = 4{,}700\\) → D, E; keyin \\(5{,}200\\) → E; \\(5{,}700\\) → E — muvozanat."],
    },
  },
  {
    id: "insurance-surplus",
    chapter: 12,
    nameEn: "Consumer surplus from insurance",
    nameUz: "Sug'urtadan iste'molchi surplusi",
    tex: "CS_i = V_{\\text{certainty}} + \\text{cost}_i - P",
    symbols: [{ tex: "CS_i", meaning: "i-turdagi odamning sof yutug'i" }],
    example: { setup: "Mandate: hamma oladi, P = $3,700.", steps: ["A: \\(1{,}000 + 1{,}000 - 3{,}700 = -1{,}700\\); E: \\(+2{,}300\\).", "Jami: \\(-1700 - 700 + 300 + 1300 + 2300 = \\$1{,}500\\)."] },
  },
];
