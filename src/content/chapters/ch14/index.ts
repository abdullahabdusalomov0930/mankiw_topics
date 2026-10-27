import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';
import { tr } from '../../../lib/lang';

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
    { id: 'card:ch14:three', chapter: 14, front: tr("Tipik xarajat egri chiziqlarining uchta xossasi?", 'The three properties of typical cost curves?'), back: tr("1) MC oxir-oqibat oshadi. 2) ATC — U shaklida. 3) MC ATC ni **minimumida** kesadi.", '1) MC eventually rises. 2) ATC is U-shaped. 3) MC crosses ATC at its **minimum**.') },
    { id: 'card:ch14:caleb', chapter: 14, front: tr("Caleb: efficient scale va minimal ATC?", 'Caleb: efficient scale and minimum ATC?'), back: tr("**5 yoki 6** chashka, ATC = **$1.30**.", '**5 or 6** cups, ATC = **$1.30**.') },
    { id: 'card:ch14:shifts', chapter: 14, front: tr("Litsenziya to'lovi va birlik boshiga soliq — qaysi egri chiziqlar siljiydi?", 'A license fee and a per-unit tax — which curves shift?'), back: tr("Litsenziya (fixed): **AFC, ATC**.\n\nBirlik soliq (variable): **AVC, ATC, MC**.", `License (fixed): **AFC, ATC**.

Per-unit tax (variable): **AVC, ATC, MC**.`) },
    { id: 'card:ch14:profit', chapter: 14, front: tr("Xavier: $60 tushum, $10 ingrediyent, $40 boy berilgan daromad. Foydalar?", 'Xavier: $60 revenue, $10 ingredients, $40 forgone earnings. The profits?'), back: tr("Buxgalteriya: **$50**; iqtisodiy: **$10**.", 'Accounting: **$50**; economic: **$10**.') },
  ],
};
