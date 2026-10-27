import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';
import { tr } from '../../../lib/lang';

export const ch13: ChapterData = {
  number: 13,
  slug: 'design-of-the-tax-system',
  titleEn: 'The Design of the Tax System',
  titleUz: 'Soliq tizimining tuzilishi',
  part: 'Part IV · The Economics of the Public Sector',
  sectionIds: ['s-13-1', 's-13-1a', 's-13-1b', 's-13-2a', 's-13-2b', 's-13-2c', 's-13-2d', 's-13-3a', 's-13-3b', 's-13-3c', 's-13-4'],
  terms,
  formulas,
  questions,
  problems: [...review, ...problems],
  extraCards: [
    { id: 'card:ch13:federal', chapter: 13, front: tr("AQSh federal tushumining ikki eng katta manbai?", 'The two largest sources of U.S. federal revenue?'), back: tr("Shaxsiy daromad solig'i (**46%**) va payroll/social insurance (**39%**). Korporativ — 5%.", 'The individual income tax (**46%**) and payroll/social insurance taxes (**39%**). Corporate — 5%.') },
    { id: 'card:ch13:costs', chapter: 13, front: tr("Soliqning to'lovdan tashqari ikki xarajati?", 'Two costs of a tax beyond the payment itself?'), back: tr("**Deadweight loss** (buzilgan qarorlar) va **administrative burden** (rioya qilish xarajatlari).", '**Deadweight loss** (distorted decisions) and the **administrative burden** (compliance costs).') },
    { id: 'card:ch13:atr-mtr', chapter: 13, front: tr("Qachon o'rtacha, qachon marjinal stavka muhim?", 'When does the average rate matter, and when the marginal rate?'), back: tr("Qurbonlik — **o'rtacha**; rag'batlar va DWL — **marjinal**.", 'Sacrifice — **average**; incentives and the DWL — **marginal**.') },
    { id: 'card:ch13:equity', chapter: 13, front: tr("Vertikal va gorizontal tenglik?", 'Vertical and horizontal equity?'), back: tr("**Vertikal**: qobiliyati kattalar ko'proq. **Gorizontal**: qobiliyati o'xshashlar bir xil.", '**Vertical**: those with greater ability pay more. **Horizontal**: those with similar ability pay the same.') },
    { id: 'card:ch13:top1', chapter: 13, front: tr("Top 1% federal soliqlarga daromadining necha foizini to'laydi (2018)?", 'What percentage of their income do the top 1% pay in federal taxes (2018)?'), back: tr("**30.3%** (transfertlardan keyin 29.7%). Eng past kvintil ~0%.", '**30.3%** (29.7% after transfers). The lowest quintile ~0%.') },
  ],
};
