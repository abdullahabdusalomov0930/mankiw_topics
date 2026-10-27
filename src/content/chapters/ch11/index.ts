import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';
import { tr } from '../../../lib/lang';

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
    { id: 'card:ch11:problems', chapter: 11, front: tr("Jamoat tovarlari va umumiy resurslarning muammosi?", 'The problem with public goods and common resources?'), back: tr("Public — **free riders** → kam ta'minlanadi.\n\nCommon — **Tragedy of the Commons** → ortiqcha ishlatiladi.", `Public — **free riders** → underprovided.

Common — **Tragedy of the Commons** → overused.`) },
    { id: 'card:ch11:vsl', chapter: 11, front: tr("Hayotning statistik qiymati qanday baholanadi va qancha?", 'How is the statistical value of a life estimated, and what is it?'), back: tr("Xavfli va xavfsiz kasblar maoshi farqidan → ≈ **$10 mln**.", 'From the wage difference between risky and safe jobs → ≈ **$10 million**.') },
    { id: 'card:ch11:cow', chapter: 11, front: tr("Nega sigir yo'qolmaydi, fil esa xavf ostida?", 'Why are cows not in danger of extinction while elephants are?'), back: tr("Sigir — **xususiy tovar** (egasi bor), fil — **umumiy resurs**.", 'A cow is a **private good** (it has an owner); an elephant is a **common resource**.') },
  ],
};
