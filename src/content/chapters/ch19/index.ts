import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';

export const ch19: ChapterData = {
  number: 19,
  slug: 'markets-for-factors-of-production',
  titleEn: 'The Markets for the Factors of Production',
  titleUz: 'Ishlab chiqarish omillari bozorlari',
  part: 'Part VI · The Economics of Labor Markets',
  sectionIds: ['s-19-1', 's-19-1a', 's-19-1b', 's-19-1c', 's-19-1d', 's-19-2a', 's-19-2b', 's-19-3', 's-19-3a', 's-19-3b', 's-19-4a', 's-19-4b', 's-19-5'],
  terms,
  formulas,
  questions,
  problems: [...review, ...problems],
  extraCards: [
    { id: 'card:ch19:rule', chapter: 19, front: "Raqobatchi firma qancha mehnat yollaydi?", back: "**VMPL = P × MPL = W** bo'lguncha. VMPL egri chizig'i — mehnatga talab." },
    { id: 'card:ch19:table1', chapter: 19, front: "Table 1 (olma $10, ish haqi $500): nechta ishchi?", back: "VMP: 1,000, 800, 600, 400 → **3 ishchi**." },
    { id: 'card:ch19:shifters', chapter: 19, front: "Mehnatga talab va taklifni nimalar siljitadi?", back: "Talab: mahsulot narxi, texnologiya, boshqa omillar.\n\nTaklif: didlar, muqobil imkoniyatlar, immigratsiya." },
    { id: 'card:ch19:linkages', chapter: 19, front: "Kapital zaxirasi kamaysa (bo'ron) — ish haqi va kapital ijarasi?", back: "Ijara **oshadi**, ish haqi **tushadi** (MPL kamayadi)." },
  ],
};
