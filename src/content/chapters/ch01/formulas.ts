import type { Formula } from '../../types';
import { tr } from '../../../lib/lang';

export const formulas: Formula[] = [
  {
    id: "marginal-rule",
    chapter: 1,
    nameEn: "Marginal decision rule",
    nameUz: "Marjinal qaror qoidasi",
    tex: "\\text{Do it} \\iff MB > MC",
    symbols: [
      { tex: "MB", meaning: tr("marginal benefit — yana bir birlikdan qo'shimcha foyda", 'marginal benefit — the extra benefit from one more unit') },
      { tex: "MC", meaning: tr("marginal cost — yana bir birlikning qo'shimcha xarajati", 'marginal cost — the extra cost of one more unit') },
    ],
    example: {
      setup: tr("Samolyotda bo'sh o'rin bor. Stanley $300 to'lashga tayyor, o'rtacha xarajat $500, qo'shimcha yo'lovchining xarajati ~$20.", 'The plane has an empty seat. Stanley will pay $300; average cost is $500, and an extra passenger costs ~$20.'),
      steps: [tr("O'rtacha xarajat ($500) qarorga ahamiyatsiz.", 'Average cost ($500) is irrelevant to the decision.'), tr("\\(MB = 300 > MC \\approx 20\\) → chipta **soting**, foyda ≈ $280.", '\\(MB = 300 > MC \\approx 20\\) → **sell** the ticket, profit ≈ $280.')],
    },
    note: tr("Problem 5 (sunk cost): allaqachon sarflangan $5 mln qarorga kirmaydi — faqat qo'shimcha xarajat ($1 mln) va qo'shimcha tushum ($3 mln) solishtiriladi.", 'Problem 5 (sunk cost): the $5 million already spent does not enter the decision — compare only the extra cost ($1 million) and the extra revenue ($3 million).'),
  },
  {
    id: "average-cost",
    chapter: 1,
    nameEn: "Average cost",
    nameUz: "O'rtacha xarajat",
    tex: "AC = \\frac{\\text{Total cost}}{\\text{Quantity}}",
    symbols: [{ tex: "AC", meaning: tr("bir birlikka to'g'ri keladigan o'rtacha xarajat", 'average cost per unit') }],
    example: { setup: tr("200 o'rinli reys $100,000 turadi.", 'A 200-seat flight costs $100,000.'), steps: [tr("\\(AC = 100{,}000 / 200 = \\$500\\) bir o'rin.", '\\(AC = 100{,}000 / 200 = \\$500\\) per seat.'), tr("Striming: \\(30 / 5 = \\$6\\) bir film — lekin marjinal xarajat $0.", 'Streaming: \\(30 / 5 = \\$6\\) per movie — but the marginal cost is $0.')] },
  },
  {
    id: "doubling-time",
    chapter: 1,
    nameEn: "Compound growth and doubling time",
    nameUz: "Murakkab o'sish va ikki barobar bo'lish vaqti",
    tex: "X_t = X_0 (1+g)^t, \\qquad t_{\\times 2} \\approx \\frac{70}{g\\,(\\%)}",
    symbols: [
      { tex: "g", meaning: tr("yillik o'sish sur'ati (daromad yoki narxlar)", 'annual growth rate (of income or prices)') },
      { tex: "t_{\\times 2}", meaning: tr("ikki barobar bo'lish uchun kerakli yillar", 'years needed to double') },
    ],
    example: {
      setup: tr("Kitob: AQSh daromadi va XXI asr inflyatsiyasi yiliga ~2%.", 'The book: U.S. income and 21st-century inflation grow about 2% a year.'),
      steps: [tr("\\(70 / 2 = 35\\) yil — daromad (yoki narxlar) 35 yilda ikki barobar.", '\\(70 / 2 = 35\\) years — income (or prices) double in 35 years.'), "\\(1.02^{35} \\approx 2.0\\) ✓"],
    },
    note: tr("70 qoidasi kitobda nomi bilan berilmagan — bu hisoblash yordamchisi; kitobdagi raqam (2% → 35 yil) bilan mos keladi.", "The rule of 70 is not named in the book — it is a calculation aid; it matches the book's number (2% → 35 years)."),
  },
];
