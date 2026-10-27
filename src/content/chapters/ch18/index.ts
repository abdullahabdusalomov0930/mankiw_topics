import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';

export const ch18: ChapterData = {
  number: 18,
  slug: 'oligopoly',
  titleEn: 'Oligopoly',
  titleUz: 'Oligopoliya',
  part: 'Part V · Firm Behavior and the Organization of Industry',
  sectionIds: ['s-18-1a', 's-18-1b', 's-18-1c', 's-18-1d', 's-18-2a', 's-18-2b', 's-18-2c', 's-18-2d', 's-18-2e', 's-18-3a', 's-18-3b', 's-18-4'],
  terms,
  formulas,
  questions,
  problems: [...review, ...problems],
  extraCards: [
    { id: 'card:ch18:water', chapter: 18, front: "Table 1 (P = 120 − Q, MC = 0): raqobat, kartel va duopoliya Nash natijalari?", back: "Raqobat: 120, $0. Kartel: 60, $60 (har biri $1,800). Nash: 40 + 40, $40 (har biri $1,600)." },
    { id: 'card:ch18:pd', chapter: 18, front: "Mahbuslar dilemmasi to'lovlari va natijasi?", back: "Jim–jim: 1 yil; iqror–iqror: 8; biri iqror: 0 va 20. Iqror dominant → (8, 8)." },
    { id: 'card:ch18:effects', chapter: 18, front: "Oligopolist qo'shimcha birlik haqida qaysi ikki effektni tortadi?", back: "**Output effect** (+, P > MC) va **price effect** (−, barcha birliklar arzonlashadi). Firmalar ko'paysa price effect kichrayadi." },
    { id: 'card:ch18:controversies', chapter: 18, front: "Uchta bahsli antitrust amaliyot?", back: "Resale price maintenance · predatory pricing · bundling." },
  ],
};
