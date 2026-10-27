import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { demandShifts, equilibrium, smoking, supplyShifts } from './presets';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';
import { tr } from '../../../lib/lang';

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
    { id: 'card:ch04:demand-shifters', chapter: 4, front: tr("Talabni siljituvchi **5 omil**?", 'The **5 factors** that shift demand?'), back: "Income · Prices of related goods · Tastes · Expectations · Number of buyers." },
    { id: 'card:ch04:supply-shifters', chapter: 4, front: tr("Taklifni siljituvchi **4 omil**?", 'The **4 factors** that shift supply?'), back: "Input prices · Technology · Expectations · Number of sellers." },
    { id: 'card:ch04:three-steps', chapter: 4, front: tr("Muvozanat o'zgarishini tahlil qilishning **uch qadami**?", 'The **three steps** for analyzing changes in equilibrium?'), back: tr("1) Qaysi egri chiziq siljiydi? 2) Qaysi tomonga? 3) Yangi va eski muvozanatni solishtiring.", '1) Which curve shifts? 2) In which direction? 3) Compare the new and old equilibria.') },
    { id: 'card:ch04:shift-vs-move', chapter: 4, front: tr("“Change in demand” va “change in quantity demanded” farqi?", 'The difference between a “change in demand” and a “change in quantity demanded”?'), back: tr("Change in demand — egri chiziq **siljishi** (narxdan boshqa omil). Change in quantity demanded — egri chiziq **bo'ylab harakat** (o'z narxi).", 'A change in demand is a **shift** of the curve (a factor other than the price). A change in quantity demanded is a **movement along** the curve (its own price).') },
    { id: 'card:ch04:table4', chapter: 4, front: tr("Talab ↑ va taklif ↓ bo'lsa?", 'What if demand ↑ and supply ↓?'), back: tr("Narx **oshadi**, miqdor **noaniq** (ambiguous).", 'The price **rises**; the quantity is **ambiguous**.') },
  ],
};
