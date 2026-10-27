import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';
import { tr } from '../../../lib/lang';

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
    { id: 'card:ch18:water', chapter: 18, front: tr("Table 1 (P = 120 − Q, MC = 0): raqobat, kartel va duopoliya Nash natijalari?", 'Table 1 (P = 120 − Q, MC = 0): the competitive, cartel, and duopoly Nash outcomes?'), back: tr("Raqobat: 120, $0. Kartel: 60, $60 (har biri $1,800). Nash: 40 + 40, $40 (har biri $1,600).", 'Competition: 120, $0. Cartel: 60, $60 ($1,800 each). Nash: 40 + 40, $40 ($1,600 each).') },
    { id: 'card:ch18:pd', chapter: 18, front: tr("Mahbuslar dilemmasi to'lovlari va natijasi?", "The prisoners' dilemma payoffs and outcome?"), back: tr("Jim–jim: 1 yil; iqror–iqror: 8; biri iqror: 0 va 20. Iqror dominant → (8, 8).", 'Both silent: 1 year; both confess: 8; one confesses: 0 and 20. Confessing is dominant → (8, 8).') },
    { id: 'card:ch18:effects', chapter: 18, front: tr("Oligopolist qo'shimcha birlik haqida qaysi ikki effektni tortadi?", 'Which two effects does an oligopolist weigh for an extra unit?'), back: tr("**Output effect** (+, P > MC) va **price effect** (−, barcha birliklar arzonlashadi). Firmalar ko'paysa price effect kichrayadi.", 'The **output effect** (+, P > MC) and the **price effect** (−, all units get cheaper). With more firms the price effect shrinks.') },
    { id: 'card:ch18:controversies', chapter: 18, front: tr("Uchta bahsli antitrust amaliyot?", 'Three controversial antitrust practices?'), back: "Resale price maintenance · predatory pricing · bundling." },
  ],
};
