import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';

export const ch15: ChapterData = {
  number: 15,
  slug: 'firms-in-competitive-markets',
  titleEn: 'Firms in Competitive Markets',
  titleUz: 'Raqobatli bozorlardagi firmalar',
  part: 'Part V · Firm Behavior and the Organization of Industry',
  sectionIds: ['s-15-1a', 's-15-1b', 's-15-2a', 's-15-2b', 's-15-2c', 's-15-2d', 's-15-2e', 's-15-2f', 's-15-2g', 's-15-3a', 's-15-3b', 's-15-3c', 's-15-3d', 's-15-3e', 's-15-4'],
  terms,
  formulas,
  questions,
  problems: [...review, ...problems],
  extraCards: [
    { id: 'card:ch15:table3', chapter: 15, front: "Table 3: raqobatchi firmaning to'rt qoidasi?", back: "1) P = MC. 2) P < AVC — yoping. 3) AVC < P < ATC — qisqa muddatda ishlang, uzoqda chiqing. 4) P > ATC — qoling." },
    { id: 'card:ch15:supply', chapter: 15, front: "Qisqa va uzoq muddatli firma taklif egri chizig'i?", back: "SR: MC ning **AVC** dan yuqori qismi. LR: MC ning **ATC** dan yuqori qismi." },
    { id: 'card:ch15:lr', chapter: 15, front: "Uzoq muddatli raqobat muvozanati sharti?", back: "**P = MC = min ATC**, iqtisodiy foyda 0, firmalar efficient scale da; LR taklif gorizontal (bir xil xarajatlarda)." },
    { id: 'card:ch15:vaca', chapter: 15, front: "Vaca fermasi (P = $6): optimal miqdor va foyda?", back: "**4 yoki 5** gallon, foyda **$7**." },
  ],
};
