import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';
import { tr } from '../../../lib/lang';

export const ch01: ChapterData = {
  number: 1,
  slug: 'ten-principles',
  titleEn: 'Ten Principles of Economics',
  titleUz: "Iqtisodiyotning o'nta tamoyili",
  part: 'Part I · Introduction',
  sectionIds: ['s-1-1', 's-1-1a', 's-1-1b', 's-1-1c', 's-1-1d', 's-1-2a', 's-1-2b', 's-1-2c', 's-1-3a', 's-1-3b', 's-1-3c', 's-1-4'],
  terms,
  formulas,
  questions,
  problems: [...review, ...problems],
  extraCards: [
    { id: 'card:ch01:ten', chapter: 1, front: tr("O'nta tamoyilning uch guruhi?", 'The three groups of the ten principles?'), back: tr("**Qarorlar** (1–4): trade-offs, opportunity cost, margin, incentives.\n\n**O'zaro ta'sir** (5–7): trade, markets, government.\n\n**Butun iqtisodiyot** (8–10): productivity, money → inflation, inflation–unemployment trade-off.", '**How people make decisions** (1–4): trade-offs, opportunity cost, the margin, incentives.\n\n**How people interact** (5–7): trade, markets, government.\n\n**How the economy as a whole works** (8–10): productivity, money → inflation, the inflation–unemployment trade-off.') },
    { id: 'card:ch01:pie', chapter: 1, front: tr("Efficiency va equality — pirog metaforasi?", 'Efficiency and equality — the pie metaphor?'), back: tr("Efficiency — pirogning **hajmi**; equality — pirog qanchalik **teng kesilgani**. Teng kesish ba'zan pirogni kichraytiradi.", 'Efficiency is the **size** of the pie; equality is how **evenly** it is sliced. Slicing it evenly sometimes shrinks the pie.') },
    { id: 'card:ch01:failure', chapter: 1, front: tr("Market failure'ning ikki sababi va misoli?", 'Two causes of market failure, with examples?'), back: tr("**Externality** (ifloslanish) va **market power** (yagona quduq egasi).", "**Externalities** (pollution) and **market power** (the town's only well).") },
    { id: 'card:ch01:water', chapter: 1, front: tr("Suv–olmos paradoksi qanday yechiladi?", 'How is the water–diamond paradox resolved?'), back: tr("WTP **marjinal** foydaga bog'liq: suv ko'p → qo'shimcha stakan arzon; olmos kam → qo'shimcha tosh qimmat.", 'WTP depends on the **marginal** benefit: water is plentiful → an extra glass is cheap; diamonds are rare → an extra stone is costly.') },
    { id: 'card:ch01:peltzman', chapter: 1, front: tr("Peltzman: xavfsizlik kamari qonunlari natijasi?", 'Peltzman: the effect of seat-belt laws?'), back: tr("Avariyada o'lim ↓, avariyalar ↑ → haydovchilar o'limi deyarli o'zgarmadi, piyodalar o'limi ↑.", 'Deaths per accident ↓, accidents ↑ → driver deaths barely changed, pedestrian deaths ↑.') },
  ],
};
