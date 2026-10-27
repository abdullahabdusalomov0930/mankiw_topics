import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';

export const ch17: ChapterData = {
  number: 17,
  slug: 'monopolistic-competition',
  titleEn: 'Monopolistic Competition',
  titleUz: 'Monopolistik raqobat',
  part: 'Part V · Firm Behavior and the Organization of Industry',
  sectionIds: ['s-17-1', 's-17-2a', 's-17-2b', 's-17-2c', 's-17-2d', 's-17-3a', 's-17-3b', 's-17-3c', 's-17-4'],
  terms,
  formulas,
  questions,
  problems: [...review, ...problems],
  extraCards: [
    { id: 'card:ch17:attrs', chapter: 17, front: "Monopolistik raqobatning uch xususiyati?", back: "Ko'p sotuvchi · mahsulot farqlanishi · erkin kirish-chiqish." },
    { id: 'card:ch17:lr', chapter: 17, front: "Monopolistik raqobatchining uzoq muddatli muvozanati?", back: "Talab ATC ga **urinadi**: P = ATC (foyda 0), MR = MC, **P > MC**, Q < efficient scale." },
    { id: 'card:ch17:diffs', chapter: 17, front: "Mukammal raqobatdan ikki farq?", back: "**Excess capacity** va **markup** (P > MC)." },
    { id: 'card:ch17:externalities', chapter: 17, front: "Kirishning ikki tashqi effekti?", back: "**Product-variety** (+, iste'molchilarga) va **business-stealing** (−, mavjud firmalarga)." },
  ],
};
