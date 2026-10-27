import type { Formula } from '../../types';
import { tr } from '../../../lib/lang';

export const formulas: Formula[] = [
  {
    id: "college-premium",
    chapter: 20,
    nameEn: "College wage premium (Table 1)",
    nameUz: "Kollej ish haqi mukofoti (Table 1)",
    tex: "\\text{premium} = \\frac{W_{\\text{college}}}{W_{\\text{high school}}} - 1",
    symbols: [{ tex: "W", meaning: tr("o'rtacha yillik daromad (2019 dollarida)", 'average annual earnings (in 2019 dollars)') }],
    example: {
      setup: tr("Erkaklar, 2019: kollej $97,554, o'rta maktab $52,677.", 'Men, 2019: college $97,554, high school $52,677.'),
      steps: [tr("\\(97{,}554 / 52{,}677 = 1.85\\) → mukofot **85%** (1974-yil: 42%).", '\\(97{,}554 / 52{,}677 = 1.85\\) → a premium of **85%** (1974: 42%).'), tr("Ayollar: \\(70{,}657 / 39{,}669 = 1.78\\) → 78% (1974: 35%).", 'Women: \\(70{,}657 / 39{,}669 = 1.78\\) → 78% (1974: 35%).')],
    },
    note: tr("Kitob jadvalda “185%” deb yozadi — bu nisbat (1.85), mukofot 85%.", "The book's table says “185%” — that's the ratio (1.85); the premium is 85%."),
  },
  {
    id: "earnings-gap",
    chapter: 20,
    nameEn: "Earnings gap between groups (Table 2)",
    nameUz: "Guruhlar orasidagi daromad farqi (Table 2)",
    tex: "\\text{gap} = 1 - \\frac{W_B}{W_A}",
    symbols: [{ tex: "W_A, W_B", meaning: tr("ikki guruhning median daromadi", 'the median earnings of the two groups') }],
    example: {
      setup: tr("2019: oq tanli erkak $60,017, qora tanli erkak $45,644.", '2019: white men $60,017, Black men $45,644.'),
      steps: ["\\(1 - 45{,}644/60{,}017 = 0.24\\) → 24%.", tr("Oq tanli ayol \\(1 - 48{,}845/60{,}017 \\approx 19\\%\\) kam (QQ 5: 20; 20).", 'White women earn \\(1 - 48{,}845/60{,}017 \\approx 19\\%\\) less (QQ 5: 20; 20).')],
    },
    note: tr("Farq o'z-o'zidan diskriminatsiya o'lchovi emas — human capital va ish xususiyatlarini nazorat qilish kerak.", 'The gap is not in itself a measure of discrimination — human capital and job characteristics must be controlled for.'),
  },
];
