import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';

export const ch14: ChapterData = {
  number: 14,
  slug: 'costs-of-production',
  titleEn: 'The Costs of Production',
  titleUz: 'Ishlab chiqarish xarajatlari',
  part: 'Part V · Firm Behavior and the Organization of Industry',
  sectionIds: ['s-14-1a', 's-14-1b', 's-14-1c', 's-14-1d', 's-14-2a', 's-14-2b', 's-14-3a', 's-14-3b', 's-14-3c', 's-14-3d', 's-14-4a', 's-14-4b', 's-14-5'],
  terms,
  formulas,
  questions,
  problems: [...review, ...problems],
  extraCards: [
    { id: 'card:ch14:three', chapter: 14, front: "Tipik xarajat egri chiziqlarining uchta xossasi?", back: "1) MC oxir-oqibat oshadi. 2) ATC — U shaklida. 3) MC ATC ni **minimumida** kesadi." },
    { id: 'card:ch14:caleb', chapter: 14, front: "Caleb: efficient scale va minimal ATC?", back: "**5 yoki 6** chashka, ATC = **$1.30**." },
    { id: 'card:ch14:shifts', chapter: 14, front: "Litsenziya to'lovi va birlik boshiga soliq — qaysi egri chiziqlar siljiydi?", back: "Litsenziya (fixed): **AFC, ATC**.\n\nBirlik soliq (variable): **AVC, ATC, MC**." },
    { id: 'card:ch14:profit', chapter: 14, front: "Xavier: $60 tushum, $10 ingrediyent, $40 boy berilgan daromad. Foydalar?", back: "Buxgalteriya: **$50**; iqtisodiy: **$10**." },
  ],
};
