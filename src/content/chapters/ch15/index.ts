import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';
import { tr } from '../../../lib/lang';

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
    { id: 'card:ch15:table3', chapter: 15, front: tr("Table 3: raqobatchi firmaning to'rt qoidasi?", 'Table 3: the four rules for a competitive firm?'), back: tr("1) P = MC. 2) P < AVC — yoping. 3) AVC < P < ATC — qisqa muddatda ishlang, uzoqda chiqing. 4) P > ATC — qoling.", '1) P = MC. 2) P < AVC — shut down. 3) AVC < P < ATC — operate in the short run, exit in the long run. 4) P > ATC — stay.') },
    { id: 'card:ch15:supply', chapter: 15, front: tr("Qisqa va uzoq muddatli firma taklif egri chizig'i?", 'The short- and long-run firm supply curves?'), back: tr("SR: MC ning **AVC** dan yuqori qismi. LR: MC ning **ATC** dan yuqori qismi.", 'SR: the part of MC above **AVC**. LR: the part of MC above **ATC**.') },
    { id: 'card:ch15:lr', chapter: 15, front: tr("Uzoq muddatli raqobat muvozanati sharti?", 'The condition for long-run competitive equilibrium?'), back: tr("**P = MC = min ATC**, iqtisodiy foyda 0, firmalar efficient scale da; LR taklif gorizontal (bir xil xarajatlarda).", '**P = MC = min ATC**, zero economic profit, firms at the efficient scale; LR supply is horizontal (with identical costs).') },
    { id: 'card:ch15:vaca', chapter: 15, front: tr("Vaca fermasi (P = $6): optimal miqdor va foyda?", "Vaca's farm (P = $6): the optimal quantity and profit?"), back: tr("**4 yoki 5** gallon, foyda **$7**.", '**4 or 5** gallons, profit **$7**.') },
  ],
};
