import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';

export const ch10: ChapterData = {
  number: 10,
  slug: 'externalities',
  titleEn: 'Externalities',
  titleUz: 'Tashqi effektlar',
  part: 'Part IV · The Economics of the Public Sector',
  sectionIds: ['s-10-0', 's-10-1a', 's-10-1b', 's-10-1c', 's-10-2a', 's-10-2b', 's-10-2c', 's-10-2d', 's-10-3a', 's-10-3b', 's-10-3c', 's-10-4'],
  terms,
  formulas,
  questions,
  problems: [...review, ...problems],
  extraCards: [
    { id: 'card:ch10:neg-pos', chapter: 10, front: "Salbiy va ijobiy tashqi effektda bozor miqdori optimumga nisbatan qanday?", back: "Salbiy → **ko'p** (Q_mkt > Q_opt), soliq kerak. Ijobiy → **kam**, subsidiya kerak." },
    { id: 'card:ch10:tax-vs-permits', chapter: 10, front: "Korrektiv soliq va ruxsatnomalar farqi?", back: "Soliq **narxni**, ruxsatnomalar **miqdorni** belgilaydi. Ikkalasi ham ifloslanishni qimmatlashtirib internallashtiradi." },
    { id: 'card:ch10:coase', chapter: 10, front: "Coase teoremasi qachon ishlamaydi?", back: "Transaction costs yuqori, savdolashuv buziladi (holdouts) yoki tomonlar juda ko'p bo'lganda." },
    { id: 'card:ch10:private', chapter: 10, front: "Tashqi effektlarning 4 xususiy yechimi?", back: "Axloqiy me'yorlar · Xayriya · Biznesni birlashtirish · Shartnoma." },
  ],
};
