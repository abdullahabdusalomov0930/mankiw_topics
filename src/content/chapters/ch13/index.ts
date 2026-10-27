import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';

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
    { id: 'card:ch13:federal', chapter: 13, front: "AQSh federal tushumining ikki eng katta manbai?", back: "Shaxsiy daromad solig'i (**46%**) va payroll/social insurance (**39%**). Korporativ — 5%." },
    { id: 'card:ch13:costs', chapter: 13, front: "Soliqning to'lovdan tashqari ikki xarajati?", back: "**Deadweight loss** (buzilgan qarorlar) va **administrative burden** (rioya qilish xarajatlari)." },
    { id: 'card:ch13:atr-mtr', chapter: 13, front: "Qachon o'rtacha, qachon marjinal stavka muhim?", back: "Qurbonlik — **o'rtacha**; rag'batlar va DWL — **marjinal**." },
    { id: 'card:ch13:equity', chapter: 13, front: "Vertikal va gorizontal tenglik?", back: "**Vertikal**: qobiliyati kattalar ko'proq. **Gorizontal**: qobiliyati o'xshashlar bir xil." },
    { id: 'card:ch13:top1', chapter: 13, front: "Top 1% federal soliqlarga daromadining necha foizini to'laydi (2018)?", back: "**30.3%** (transfertlardan keyin 29.7%). Eng past kvintil ~0%." },
  ],
};
