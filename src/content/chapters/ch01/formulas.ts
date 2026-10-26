import type { Formula } from '../../types';

export const formulas: Formula[] = [
  {
    id: "marginal-rule",
    chapter: 1,
    nameEn: "Marginal decision rule",
    nameUz: "Marjinal qaror qoidasi",
    tex: "\\text{Do it} \\iff MB > MC",
    symbols: [
      { tex: "MB", meaning: "marginal benefit — yana bir birlikdan qo'shimcha foyda" },
      { tex: "MC", meaning: "marginal cost — yana bir birlikning qo'shimcha xarajati" },
    ],
    example: {
      setup: "Samolyotda bo'sh o'rin bor. Stanley $300 to'lashga tayyor, o'rtacha xarajat $500, qo'shimcha yo'lovchining xarajati ~$20.",
      steps: ["O'rtacha xarajat ($500) qarorga ahamiyatsiz.", "\\(MB = 300 > MC \\approx 20\\) → chipta **soting**, foyda ≈ $280."],
    },
    note: "Problem 5 (sunk cost): allaqachon sarflangan $5 mln qarorga kirmaydi — faqat qo'shimcha xarajat ($1 mln) va qo'shimcha tushum ($3 mln) solishtiriladi.",
  },
  {
    id: "average-cost",
    chapter: 1,
    nameEn: "Average cost",
    nameUz: "O'rtacha xarajat",
    tex: "AC = \\frac{\\text{Total cost}}{\\text{Quantity}}",
    symbols: [{ tex: "AC", meaning: "bir birlikka to'g'ri keladigan o'rtacha xarajat" }],
    example: { setup: "200 o'rinli reys $100,000 turadi.", steps: ["\\(AC = 100{,}000 / 200 = \\$500\\) bir o'rin.", "Striming: \\(30 / 5 = \\$6\\) bir film — lekin marjinal xarajat $0."] },
  },
  {
    id: "doubling-time",
    chapter: 1,
    nameEn: "Compound growth and doubling time",
    nameUz: "Murakkab o'sish va ikki barobar bo'lish vaqti",
    tex: "X_t = X_0 (1+g)^t, \\qquad t_{\\times 2} \\approx \\frac{70}{g\\,(\\%)}",
    symbols: [
      { tex: "g", meaning: "yillik o'sish sur'ati (daromad yoki narxlar)" },
      { tex: "t_{\\times 2}", meaning: "ikki barobar bo'lish uchun kerakli yillar" },
    ],
    example: {
      setup: "Kitob: AQSh daromadi va XXI asr inflyatsiyasi yiliga ~2%.",
      steps: ["\\(70 / 2 = 35\\) yil — daromad (yoki narxlar) 35 yilda ikki barobar.", "\\(1.02^{35} \\approx 2.0\\) ✓"],
    },
    note: "70 qoidasi kitobda nomi bilan berilmagan — bu hisoblash yordamchisi; kitobdagi raqam (2% → 35 yil) bilan mos keladi.",
  },
];
