import type { Formula } from '../../types';

export const formulas: Formula[] = [
  {
    id: "public-good-rule",
    chapter: 11,
    nameEn: "Provide a public good if total benefit exceeds cost",
    nameUz: "Jamoat tovari qoidasi",
    tex: "\\text{Provide} \\iff \\sum_i WTP_i > \\text{Cost}",
    symbols: [{ tex: "\\sum_i WTP_i", meaning: "**barcha** aholining qiymatlari yig'indisi (vertikal yig'indi)" }],
    example: {
      setup: "Smalltown: 500 aholi × $10, mushakbozlik $1,000.",
      steps: ["\\(500 \\times 10 = \\$5{,}000 > \\$1{,}000\\) → ta'minlash samarali.", "Har kimdan $2 soliq: har kim \\(10 - 2 = \\$8\\) yutadi."],
    },
    note: "QuickQuiz 5: Clark 80 + Lana 50 + Pete (−30) = 100 < 120 → ta'minlamaslik kerak, garchi ko'pchilik ulushdan ($40) ko'p qadrlasa ham.",
  },
  {
    id: "expected-benefit",
    chapter: 11,
    nameEn: "Expected benefit of a safety project",
    nameUz: "Xavfsizlik loyihasining kutilgan foydasi",
    tex: "\\text{Benefit} = \\Delta(\\text{probability of death}) \\times \\text{Value of a life}",
    symbols: [{ tex: "\\Delta", meaning: "xavfning kamayishi (ulush sifatida)" }],
    example: {
      setup: "Svetofor xavfni 1.6% dan 1.1% ga kamaytiradi; hayot qiymati $10 mln; xarajat $10,000.",
      steps: ["\\(0.005 \\times 10{,}000{,}000 = \\$50{,}000\\).", "\\(50{,}000 > 10{,}000\\) → o'rnating."],
    },
  },
];
