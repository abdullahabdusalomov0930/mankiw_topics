import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';
import { tr } from '../../../lib/lang';

export const ch09: ChapterData = {
  number: 9,
  slug: 'international-trade',
  titleEn: 'Application: International Trade',
  titleUz: "Qo'llanma: xalqaro savdo",
  part: 'Part III · Markets and Welfare',
  sectionIds: ['s-9-1a', 's-9-1b', 's-9-2a', 's-9-2b', 's-9-2c', 's-9-2d', 's-9-2e', 's-9-3a', 's-9-3b', 's-9-3c', 's-9-3d', 's-9-3e', 's-9-4'],
  terms,
  formulas,
  questions,
  problems: [...review, ...problems],
  extraCards: [
    { id: 'card:ch09:who-wins', chapter: 9, front: tr("Eksportchi va importchi mamlakatda kim yutadi?", 'Who wins in an exporting and in an importing country?'), back: tr("Eksportchi: **ishlab chiqaruvchilar** yutadi, iste'molchilar yutqazadi. Importchi: **iste'molchilar** yutadi, ishlab chiqaruvchilar yutqazadi. Ikkalasida ΔTS = +D.", 'Exporter: **producers** gain, consumers lose. Importer: **consumers** gain, producers lose. In both, ΔTS = +D.') },
    { id: 'card:ch09:tariff', chapter: 9, front: tr("Tarifning DWL i qaysi maydonlar va nima uchun?", "Which areas are the tariff's DWL, and why?"), back: tr("**D** — ortiqcha ishlab chiqarish, **F** — kam iste'mol. Tushum — E.", '**D** — overproduction, **F** — underconsumption. Revenue — E.') },
    { id: 'card:ch09:arguments', chapter: 9, front: tr("Savdoni cheklashning 5 argumenti?", 'The 5 arguments for restricting trade?'), back: "Jobs · National security · Infant industry · Unfair competition · Protection as a bargaining chip." },
    { id: 'card:ch09:benefits', chapter: 9, front: tr("Savdoning qo'shimcha 5 foydasi?", '5 additional benefits of trade?'), back: "Variety · Economies of scale · Competition · Productivity · Flow of ideas." },
  ],
};
