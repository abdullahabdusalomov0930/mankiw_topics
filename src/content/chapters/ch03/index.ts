import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';

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
    { id: 'card:ch03:table1', chapter: 3, front: "Table 1: Frank va Ruby uchun imkoniyat xarajatlari?", back: "Frank: 1 go'sht = 4 kartoshka, 1 kartoshka = ¼ go'sht.\n\nRuby: 1 go'sht = 2 kartoshka, 1 kartoshka = ½ go'sht." },
    { id: 'card:ch03:deal', chapter: 3, front: "Kitobdagi bitim natijasi (Figure 2)?", back: "Frank 0 + 32 ishlab chiqaradi, 15 kartoshka ↔ 5 go'sht → **5 go'sht + 17 kartoshka**.\n\nRuby 18 + 12 → **13 go'sht + 27 kartoshka**." },
    { id: 'card:ch03:range', chapter: 3, front: "Ikki tomon yutadigan narx qayerda?", back: "Ikki tomonning **OC lari orasida**: go'sht 2 dan 4 oz kartoshkagacha." },
    { id: 'card:ch03:osaka', chapter: 3, front: "Osaka va Hari: kimda qanday ustunlik?", back: "Osaka — **mutlaq** (2 soat < 4). Hari — **qiyosiy** (OC $50 < $30,000). To'lov $50 va $30,000 orasida." },
  ],
};
