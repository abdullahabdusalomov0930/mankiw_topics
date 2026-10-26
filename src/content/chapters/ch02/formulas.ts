import type { Formula } from '../../types';

export const formulas: Formula[] = [
  {
    id: "slope",
    chapter: 2,
    nameEn: "Slope of a line",
    nameUz: "Chiziq nishabi",
    tex: "\\text{slope} = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}",
    symbols: [
      { tex: "\\Delta", meaning: "o'zgarish (delta)" },
      { tex: "\\Delta y", meaning: "“rise” — vertikal o'zgarish" },
      { tex: "\\Delta x", meaning: "“run” — gorizontal o'zgarish" },
    ],
    example: {
      setup: "Figure A-5: Emma $40,000 daromadda $8 da 13 ta, $6 da 21 ta roman oladi.",
      steps: ["\\(\\Delta y = 6 - 8 = -2\\), \\(\\Delta x = 21 - 13 = 8\\).", "\\(\\text{slope} = -2/8 = -1/4\\). Istalgan boshqa ikki nuqta ham −1/4 beradi."],
    },
    note: "Kichik manfiy nishab (nolga yaqin) — yotiq chiziq, narxga kuchli javob; katta manfiy — tik chiziq, kuchsiz javob.",
  },
  {
    id: "ppf-oc",
    chapter: 2,
    nameEn: "Opportunity cost on the PPF",
    nameUz: "PPF dagi imkoniyat xarajati",
    tex: "OC_{x} = -\\frac{\\Delta y}{\\Delta x} = |\\text{slope of the PPF}|",
    symbols: [
      { tex: "OC_x", meaning: "bir birlik x (mashina) uchun voz kechiladigan y (kompyuter)" },
    ],
    example: {
      setup: "Figure 2: A (600 mashina, 2,200 kompyuter) → B (700, 2,000).",
      steps: ["\\(\\Delta x = +100\\) mashina, \\(\\Delta y = -200\\) kompyuter.", "Bir mashinaning imkoniyat xarajati = \\(200/100 = 2\\) kompyuter."],
    },
    note: "Bo'rtgan PPF da OC o'zgaruvchan: mashina ko'p bo'lganda (E) — yuqori, kam bo'lganda (F) — past.",
  },
];
