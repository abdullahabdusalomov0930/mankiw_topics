import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';
import { tr } from '../../../lib/lang';

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
    { id: 'card:ch17:attrs', chapter: 17, front: tr("Monopolistik raqobatning uch xususiyati?", 'The three features of monopolistic competition?'), back: tr("Ko'p sotuvchi · mahsulot farqlanishi · erkin kirish-chiqish.", 'Many sellers · product differentiation · free entry and exit.') },
    { id: 'card:ch17:lr', chapter: 17, front: tr("Monopolistik raqobatchining uzoq muddatli muvozanati?", 'The long-run equilibrium of a monopolistic competitor?'), back: tr("Talab ATC ga **urinadi**: P = ATC (foyda 0), MR = MC, **P > MC**, Q < efficient scale.", 'Demand is **tangent** to ATC: P = ATC (profit 0), MR = MC, **P > MC**, Q < efficient scale.') },
    { id: 'card:ch17:diffs', chapter: 17, front: tr("Mukammal raqobatdan ikki farq?", 'Two differences from perfect competition?'), back: tr("**Excess capacity** va **markup** (P > MC).", '**Excess capacity** and a **markup** (P > MC).') },
    { id: 'card:ch17:externalities', chapter: 17, front: tr("Kirishning ikki tashqi effekti?", 'The two externalities of entry?'), back: tr("**Product-variety** (+, iste'molchilarga) va **business-stealing** (−, mavjud firmalarga).", '**Product-variety** (+, to consumers) and **business-stealing** (−, to existing firms).') },
  ],
};
