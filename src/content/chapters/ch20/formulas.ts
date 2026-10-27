import type { Formula } from '../../types';

export const formulas: Formula[] = [
  {
    id: "college-premium",
    chapter: 20,
    nameEn: "College wage premium (Table 1)",
    nameUz: "Kollej ish haqi mukofoti (Table 1)",
    tex: "\\text{premium} = \\frac{W_{\\text{college}}}{W_{\\text{high school}}} - 1",
    symbols: [{ tex: "W", meaning: "o'rtacha yillik daromad (2019 dollarida)" }],
    example: {
      setup: "Erkaklar, 2019: kollej $97,554, o'rta maktab $52,677.",
      steps: ["\\(97{,}554 / 52{,}677 = 1.85\\) → mukofot **85%** (1974-yil: 42%).", "Ayollar: \\(70{,}657 / 39{,}669 = 1.78\\) → 78% (1974: 35%)."],
    },
    note: "Kitob jadvalda “185%” deb yozadi — bu nisbat (1.85), mukofot 85%.",
  },
  {
    id: "earnings-gap",
    chapter: 20,
    nameEn: "Earnings gap between groups (Table 2)",
    nameUz: "Guruhlar orasidagi daromad farqi (Table 2)",
    tex: "\\text{gap} = 1 - \\frac{W_B}{W_A}",
    symbols: [{ tex: "W_A, W_B", meaning: "ikki guruhning median daromadi" }],
    example: {
      setup: "2019: oq tanli erkak $60,017, qora tanli erkak $45,644.",
      steps: ["\\(1 - 45{,}644/60{,}017 = 0.24\\) → 24%.", "Oq tanli ayol \\(1 - 48{,}845/60{,}017 \\approx 19\\%\\) kam (QQ 5: 20; 20)."],
    },
    note: "Farq o'z-o'zidan diskriminatsiya o'lchovi emas — human capital va ish xususiyatlarini nazorat qilish kerak.",
  },
];
