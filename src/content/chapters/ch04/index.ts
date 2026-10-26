import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { demandShifts, equilibrium, smoking, supplyShifts } from './presets';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';

export const ch04: ChapterData = {
  number: 4,
  slug: 'market-forces-supply-demand',
  titleEn: 'The Market Forces of Supply and Demand',
  titleUz: 'Talab va taklifning bozor kuchlari',
  part: 'Part II · How Markets Work',
  sectionIds: ['s-4-1a', 's-4-1b', 's-4-2a', 's-4-2b', 's-4-2c', 's-4-3a', 's-4-3b', 's-4-3c', 's-4-4a', 's-4-4b', 's-4-5'],
  terms,
  formulas,
  questions,
  problems: [...review, ...problems],
  graphs: [equilibrium, demandShifts, supplyShifts, smoking],
  extraCards: [
    { id: 'card:ch04:demand-shifters', chapter: 4, front: "Talabni siljituvchi **5 omil**?", back: "Income · Prices of related goods · Tastes · Expectations · Number of buyers." },
    { id: 'card:ch04:supply-shifters', chapter: 4, front: "Taklifni siljituvchi **4 omil**?", back: "Input prices · Technology · Expectations · Number of sellers." },
    { id: 'card:ch04:three-steps', chapter: 4, front: "Muvozanat o'zgarishini tahlil qilishning **uch qadami**?", back: "1) Qaysi egri chiziq siljiydi? 2) Qaysi tomonga? 3) Yangi va eski muvozanatni solishtiring." },
    { id: 'card:ch04:shift-vs-move', chapter: 4, front: "“Change in demand” va “change in quantity demanded” farqi?", back: "Change in demand — egri chiziq **siljishi** (narxdan boshqa omil). Change in quantity demanded — egri chiziq **bo'ylab harakat** (o'z narxi)." },
    { id: 'card:ch04:table4', chapter: 4, front: "Talab ↑ va taklif ↓ bo'lsa?", back: "Narx **oshadi**, miqdor **noaniq** (ambiguous)." },
  ],
};
