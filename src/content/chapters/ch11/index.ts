import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';

export const ch11: ChapterData = {
  number: 11,
  slug: 'public-goods-common-resources',
  titleEn: 'Public Goods and Common Resources',
  titleUz: 'Jamoat tovarlari va umumiy resurslar',
  part: 'Part IV · The Economics of the Public Sector',
  sectionIds: ['s-11-1', 's-11-2a', 's-11-2b', 's-11-2c', 's-11-3a', 's-11-3b', 's-11-4'],
  terms,
  formulas,
  questions,
  problems: [...review, ...problems],
  extraCards: [
    { id: 'card:ch11:grid', chapter: 11, front: "To'rt tovar turi (excludable × rival)?", back: "E+R — **private**; E, not R — **club**; R, not E — **common resource**; na E, na R — **public**." },
    { id: 'card:ch11:problems', chapter: 11, front: "Jamoat tovarlari va umumiy resurslarning muammosi?", back: "Public — **free riders** → kam ta'minlanadi.\n\nCommon — **Tragedy of the Commons** → ortiqcha ishlatiladi." },
    { id: 'card:ch11:vsl', chapter: 11, front: "Hayotning statistik qiymati qanday baholanadi va qancha?", back: "Xavfli va xavfsiz kasblar maoshi farqidan → ≈ **$10 mln**." },
    { id: 'card:ch11:cow', chapter: 11, front: "Nega sigir yo'qolmaydi, fil esa xavf ostida?", back: "Sigir — **xususiy tovar** (egasi bor), fil — **umumiy resurs**." },
  ],
};
