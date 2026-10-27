import type { Formula } from '../../types';
import { tr } from '../../../lib/lang';

export const formulas: Formula[] = [
  {
    id: "slope",
    chapter: 2,
    nameEn: "Slope of a line",
    nameUz: "Chiziq nishabi",
    tex: "\\text{slope} = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}",
    symbols: [
      { tex: "\\Delta", meaning: tr("o'zgarish (delta)", 'change (delta)') },
      { tex: "\\Delta y", meaning: tr("“rise” — vertikal o'zgarish", '“rise” — the vertical change') },
      { tex: "\\Delta x", meaning: tr("“run” — gorizontal o'zgarish", '“run” — the horizontal change') },
    ],
    example: {
      setup: tr("Figure A-5: Emma $40,000 daromadda $8 da 13 ta, $6 da 21 ta roman oladi.", 'Figure A-5: with income of $40,000, Emma buys 13 novels at $8 and 21 at $6.'),
      steps: ["\\(\\Delta y = 6 - 8 = -2\\), \\(\\Delta x = 21 - 13 = 8\\).", tr("\\(\\text{slope} = -2/8 = -1/4\\). Istalgan boshqa ikki nuqta ham −1/4 beradi.", '\\(\\text{slope} = -2/8 = -1/4\\). Any other two points also give −1/4.')],
    },
    note: tr("Kichik manfiy nishab (nolga yaqin) — yotiq chiziq, narxga kuchli javob; katta manfiy — tik chiziq, kuchsiz javob.", 'A small negative slope (close to zero) is a flat line — a strong response to price; a large negative slope is a steep line — a weak response.'),
  },
  {
    id: "ppf-oc",
    chapter: 2,
    nameEn: "Opportunity cost on the PPF",
    nameUz: "PPF dagi imkoniyat xarajati",
    tex: "OC_{x} = -\\frac{\\Delta y}{\\Delta x} = |\\text{slope of the PPF}|",
    symbols: [
      { tex: "OC_x", meaning: tr("bir birlik x (mashina) uchun voz kechiladigan y (kompyuter)", 'the amount of y (computers) given up for one unit of x (cars)') },
    ],
    example: {
      setup: tr("Figure 2: A (600 mashina, 2,200 kompyuter) → B (700, 2,000).", 'Figure 2: A (600 cars, 2,200 computers) → B (700, 2,000).'),
      steps: [tr("\\(\\Delta x = +100\\) mashina, \\(\\Delta y = -200\\) kompyuter.", '\\(\\Delta x = +100\\) cars, \\(\\Delta y = -200\\) computers.'), tr("Bir mashinaning imkoniyat xarajati = \\(200/100 = 2\\) kompyuter.", 'The opportunity cost of one car = \\(200/100 = 2\\) computers.')],
    },
    note: tr("Bo'rtgan PPF da OC o'zgaruvchan: mashina ko'p bo'lganda (E) — yuqori, kam bo'lganda (F) — past.", 'On a bowed-out PPF the OC varies: high when many cars are made (E), low when few are (F).'),
  },
];
