import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';

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
    { id: 'card:ch01:ten', chapter: 1, front: "O'nta tamoyilning uch guruhi?", back: "**Qarorlar** (1–4): trade-offs, opportunity cost, margin, incentives.\n\n**O'zaro ta'sir** (5–7): trade, markets, government.\n\n**Butun iqtisodiyot** (8–10): productivity, money → inflation, inflation–unemployment trade-off." },
    { id: 'card:ch01:pie', chapter: 1, front: "Efficiency va equality — pirog metaforasi?", back: "Efficiency — pirogning **hajmi**; equality — pirog qanchalik **teng kesilgani**. Teng kesish ba'zan pirogni kichraytiradi." },
    { id: 'card:ch01:failure', chapter: 1, front: "Market failure'ning ikki sababi va misoli?", back: "**Externality** (ifloslanish) va **market power** (yagona quduq egasi)." },
    { id: 'card:ch01:water', chapter: 1, front: "Suv–olmos paradoksi qanday yechiladi?", back: "WTP **marjinal** foydaga bog'liq: suv ko'p → qo'shimcha stakan arzon; olmos kam → qo'shimcha tosh qimmat." },
    { id: 'card:ch01:peltzman', chapter: 1, front: "Peltzman: xavfsizlik kamari qonunlari natijasi?", back: "Avariyada o'lim ↓, avariyalar ↑ → haydovchilar o'limi deyarli o'zgarmadi, piyodalar o'limi ↑." },
  ],
};
