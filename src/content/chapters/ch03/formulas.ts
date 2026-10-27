import type { Formula } from '../../types';
import { tr } from '../../../lib/lang';

export const formulas: Formula[] = [
  {
    id: "oc-from-time",
    chapter: 3,
    nameEn: "Opportunity cost from time requirements",
    nameUz: "Vaqt sarfidan imkoniyat xarajati",
    tex: "OC_X = \\frac{\\text{time per unit of } X}{\\text{time per unit of } Y}\\ \\text{units of } Y = \\frac{\\text{output of } Y \\text{ per hour}}{\\text{output of } X \\text{ per hour}}",
    symbols: [{ tex: "OC_X", meaning: tr("bir birlik X uchun voz kechiladigan Y miqdori", 'the amount of Y given up for one unit of X') }],
    example: {
      setup: tr("Ruby: kartoshka 10 daq/oz, go'sht 20 daq/oz. Frank: 15 va 60.", 'Ruby: potatoes 10 min/oz, meat 20 min/oz. Frank: 15 and 60.'),
      steps: [tr("Ruby: 1 oz kartoshka = \\(10/20 = \\tfrac12\\) oz go'sht; 1 oz go'sht = 2 oz kartoshka.", 'Ruby: 1 oz potatoes = \\(10/20 = \\tfrac12\\) oz meat; 1 oz meat = 2 oz potatoes.'), tr("Frank: 1 oz kartoshka = \\(15/60 = \\tfrac14\\) oz go'sht; 1 oz go'sht = 4 oz kartoshka.", 'Frank: 1 oz potatoes = \\(15/60 = \\tfrac14\\) oz meat; 1 oz meat = 4 oz potatoes.')],
    },
    note: tr("Bir tovarning OC i ikkinchisining **teskarisi**: \\(OC_Y = 1/OC_X\\).", "The OC of one good is the **inverse** of the other's: \\(OC_Y = 1/OC_X\\)."),
  },
  {
    id: "trade-range",
    chapter: 3,
    nameEn: "Range of mutually beneficial prices",
    nameUz: "Ikki tomon yutadigan narx oralig'i",
    tex: "\\min(OC^A_X, OC^B_X) < P_X < \\max(OC^A_X, OC^B_X)",
    symbols: [
      { tex: "P_X", meaning: tr("1 birlik X ning narxi, Y birliklarida", 'the price of 1 unit of X, in units of Y') },
      { tex: "OC^A_X", meaning: tr("A uchun X ning imkoniyat xarajati", "A's opportunity cost of X") },
    ],
    example: {
      setup: tr("Go'sht: Ruby OC = 2, Frank OC = 4 oz kartoshka.", "Meat: Ruby's OC = 2, Frank's OC = 4 oz of potatoes."),
      steps: ["\\(2 < P_{\\text{meat}} < 4\\).", tr("Kitobdagi narx: 15 oz kartoshka / 5 oz go'sht = **3** — oraliqda ✓. Ruby uchun kartoshka narxi \\(5/15 = \\tfrac13\\) oz go'sht < uning OC \\(\\tfrac12\\).", "The book's price: 15 oz potatoes / 5 oz meat = **3** — inside the range ✓. For Ruby, the price of potatoes is \\(5/15 = \\tfrac13\\) oz of meat < her OC of \\(\\tfrac12\\).")],
    },
  },
];
