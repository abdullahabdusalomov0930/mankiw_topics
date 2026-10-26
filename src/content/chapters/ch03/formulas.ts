import type { Formula } from '../../types';

export const formulas: Formula[] = [
  {
    id: "oc-from-time",
    chapter: 3,
    nameEn: "Opportunity cost from time requirements",
    nameUz: "Vaqt sarfidan imkoniyat xarajati",
    tex: "OC_X = \\frac{\\text{time per unit of } X}{\\text{time per unit of } Y}\\ \\text{units of } Y = \\frac{\\text{output of } Y \\text{ per hour}}{\\text{output of } X \\text{ per hour}}",
    symbols: [{ tex: "OC_X", meaning: "bir birlik X uchun voz kechiladigan Y miqdori" }],
    example: {
      setup: "Ruby: kartoshka 10 daq/oz, go'sht 20 daq/oz. Frank: 15 va 60.",
      steps: ["Ruby: 1 oz kartoshka = \\(10/20 = \\tfrac12\\) oz go'sht; 1 oz go'sht = 2 oz kartoshka.", "Frank: 1 oz kartoshka = \\(15/60 = \\tfrac14\\) oz go'sht; 1 oz go'sht = 4 oz kartoshka."],
    },
    note: "Bir tovarning OC i ikkinchisining **teskarisi**: \\(OC_Y = 1/OC_X\\).",
  },
  {
    id: "trade-range",
    chapter: 3,
    nameEn: "Range of mutually beneficial prices",
    nameUz: "Ikki tomon yutadigan narx oralig'i",
    tex: "\\min(OC^A_X, OC^B_X) < P_X < \\max(OC^A_X, OC^B_X)",
    symbols: [
      { tex: "P_X", meaning: "1 birlik X ning narxi, Y birliklarida" },
      { tex: "OC^A_X", meaning: "A uchun X ning imkoniyat xarajati" },
    ],
    example: {
      setup: "Go'sht: Ruby OC = 2, Frank OC = 4 oz kartoshka.",
      steps: ["\\(2 < P_{\\text{meat}} < 4\\).", "Kitobdagi narx: 15 oz kartoshka / 5 oz go'sht = **3** — oraliqda ✓. Ruby uchun kartoshka narxi \\(5/15 = \\tfrac13\\) oz go'sht < uning OC \\(\\tfrac12\\)."],
    },
  },
];
