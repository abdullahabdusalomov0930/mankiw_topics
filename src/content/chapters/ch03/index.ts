import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';
import { tr } from '../../../lib/lang';

export const ch03: ChapterData = {
  number: 3,
  slug: 'gains-from-trade',
  titleEn: 'Interdependence and the Gains from Trade',
  titleUz: "O'zaro bog'liqlik va savdodan yutuq",
  part: 'Part I · Introduction',
  sectionIds: ['s-3-1', 's-3-1a', 's-3-1b', 's-3-2a', 's-3-2b', 's-3-2c', 's-3-2d', 's-3-3a', 's-3-3b', 's-3-4'],
  terms,
  formulas,
  questions,
  problems: [...review, ...problems],
  extraCards: [
    { id: 'card:ch03:table1', chapter: 3, front: tr("Table 1: Frank va Ruby uchun imkoniyat xarajatlari?", 'Table 1: opportunity costs for Frank and Ruby?'), back: tr("Frank: 1 go'sht = 4 kartoshka, 1 kartoshka = ¼ go'sht.\n\nRuby: 1 go'sht = 2 kartoshka, 1 kartoshka = ½ go'sht.", 'Frank: 1 meat = 4 potatoes, 1 potato = ¼ meat.\n\nRuby: 1 meat = 2 potatoes, 1 potato = ½ meat.') },
    { id: 'card:ch03:deal', chapter: 3, front: tr("Kitobdagi bitim natijasi (Figure 2)?", "The result of the book's deal (Figure 2)?"), back: tr("Frank 0 + 32 ishlab chiqaradi, 15 kartoshka ↔ 5 go'sht → **5 go'sht + 17 kartoshka**.\n\nRuby 18 + 12 → **13 go'sht + 27 kartoshka**.", 'Frank produces 0 + 32, trades 15 potatoes ↔ 5 meat → **5 meat + 17 potatoes**.\n\nRuby 18 + 12 → **13 meat + 27 potatoes**.') },
    { id: 'card:ch03:range', chapter: 3, front: tr("Ikki tomon yutadigan narx qayerda?", 'Where is the price at which both gain?'), back: tr("Ikki tomonning **OC lari orasida**: go'sht 2 dan 4 oz kartoshkagacha.", '**Between the two OCs**: meat between 2 and 4 oz of potatoes.') },
    { id: 'card:ch03:osaka', chapter: 3, front: tr("Osaka va Hari: kimda qanday ustunlik?", 'Osaka and Hari: who has which advantage?'), back: tr("Osaka — **mutlaq** (2 soat < 4). Hari — **qiyosiy** (OC $50 < $30,000). To'lov $50 va $30,000 orasida.", 'Osaka — **absolute** (2 hours < 4). Hari — **comparative** (OC $50 < $30,000). The payment lies between $50 and $30,000.') },
  ],
};
