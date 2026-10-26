import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';

export const ch07: ChapterData = {
  number: 7,
  slug: 'consumers-producers-efficiency',
  titleEn: 'Consumers, Producers, and the Efficiency of Markets',
  titleUz: "Iste'molchilar, ishlab chiqaruvchilar va bozor samaradorligi",
  part: 'Part III · Markets and Welfare',
  sectionIds: ['s-7-1a', 's-7-1b', 's-7-1c', 's-7-1d', 's-7-2a', 's-7-2b', 's-7-2c', 's-7-3a', 's-7-3b', 's-7-4'],
  terms,
  formulas,
  questions,
  problems: [...review, ...problems],
  graphs: [
    { title: 'Figure 7 — Muvozanatdagi consumer va producer surplus', demand: { a: 10, b: 0.1 }, supply: { c: 1, d: 0.08 }, xMax: 100, yMax: 10, modes: ['market', 'ceiling', 'floor'], surplus: true, surplusOn: true, qtyDigits: 0 },
  ],
  extraCards: [
    { id: 'card:ch07:three-insights', chapter: 7, front: "Bozor samaradorligining **uch xulosasi**?", back: "1) Tovar eng ko'p qadrlovchi xaridorlarga boradi. 2) Eng arzon ishlab chiqaruvchilar sotadi. 3) Muvozanat miqdori total surplusni maksimal qiladi." },
    { id: 'card:ch07:price-fall', chapter: 7, front: "Narx tushganda CS o'sishi qanday ikki qismdan iborat?", back: "**BCED** — eski xaridorlar kamroq to'laydi; **CEF** — yangi xaridorlar bozorga kiradi." },
    { id: 'card:ch07:ts', chapter: 7, front: "Total surplus formulasi?", back: "CS + PS = Value to buyers − Cost to sellers." },
    { id: 'card:ch07:failures', chapter: 7, front: "Samaradorlik xulosasi qaysi ikki farazga tayanadi?", back: "Mukammal raqobat (market power yo'q) va externalities yo'qligi." },
  ],
};
