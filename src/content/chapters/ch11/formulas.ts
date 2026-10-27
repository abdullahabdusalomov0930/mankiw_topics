import type { Formula } from '../../types';
import { tr } from '../../../lib/lang';

export const formulas: Formula[] = [
  {
    id: "public-good-rule",
    chapter: 11,
    nameEn: "Provide a public good if total benefit exceeds cost",
    nameUz: "Jamoat tovari qoidasi",
    tex: "\\text{Provide} \\iff \\sum_i WTP_i > \\text{Cost}",
    symbols: [{ tex: "\\sum_i WTP_i", meaning: tr("**barcha** aholining qiymatlari yig'indisi (vertikal yig'indi)", 'the sum of the values of **all** residents (a vertical sum)') }],
    example: {
      setup: tr("Smalltown: 500 aholi × $10, mushakbozlik $1,000.", 'Smalltown: 500 residents × $10, fireworks $1,000.'),
      steps: [tr("\\(500 \\times 10 = \\$5{,}000 > \\$1{,}000\\) → ta'minlash samarali.", '\\(500 \\times 10 = \\$5{,}000 > \\$1{,}000\\) → providing it is efficient.'), tr("Har kimdan $2 soliq: har kim \\(10 - 2 = \\$8\\) yutadi.", 'A $2 tax on everyone: each gains \\(10 - 2 = \\$8\\).')],
    },
    note: tr("QuickQuiz 5: Clark 80 + Lana 50 + Pete (−30) = 100 < 120 → ta'minlamaslik kerak, garchi ko'pchilik ulushdan ($40) ko'p qadrlasa ham.", 'QuickQuiz 5: Clark 80 + Lana 50 + Pete (−30) = 100 < 120 → it should not be provided, even though a majority values it above their share ($40).'),
  },
  {
    id: "expected-benefit",
    chapter: 11,
    nameEn: "Expected benefit of a safety project",
    nameUz: "Xavfsizlik loyihasining kutilgan foydasi",
    tex: "\\text{Benefit} = \\Delta(\\text{probability of death}) \\times \\text{Value of a life}",
    symbols: [{ tex: "\\Delta", meaning: tr("xavfning kamayishi (ulush sifatida)", 'reduction in risk (as a fraction)') }],
    example: {
      setup: tr("Svetofor xavfni 1.6% dan 1.1% ga kamaytiradi; hayot qiymati $10 mln; xarajat $10,000.", 'A traffic light cuts the risk from 1.6% to 1.1%; the value of a life is $10 million; the cost is $10,000.'),
      steps: ["\\(0.005 \\times 10{,}000{,}000 = \\$50{,}000\\).", tr("\\(50{,}000 > 10{,}000\\) → o'rnating.", '\\(50{,}000 > 10{,}000\\) → install it.')],
    },
  },
];
