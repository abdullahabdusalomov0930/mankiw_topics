import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';
import { tr } from '../../../lib/lang';

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
    { id: 'card:ch10:neg-pos', chapter: 10, front: tr("Salbiy va ijobiy tashqi effektda bozor miqdori optimumga nisbatan qanday?", 'How does the market quantity compare with the optimum for negative and positive externalities?'), back: tr("Salbiy → **ko'p** (Q_mkt > Q_opt), soliq kerak. Ijobiy → **kam**, subsidiya kerak.", 'Negative → **too much** (Q_mkt > Q_opt), a tax is needed. Positive → **too little**, a subsidy is needed.') },
    { id: 'card:ch10:tax-vs-permits', chapter: 10, front: tr("Korrektiv soliq va ruxsatnomalar farqi?", 'The difference between a corrective tax and permits?'), back: tr("Soliq **narxni**, ruxsatnomalar **miqdorni** belgilaydi. Ikkalasi ham ifloslanishni qimmatlashtirib internallashtiradi.", 'A tax sets the **price**, permits set the **quantity**. Both internalize the externality by making pollution costly.') },
    { id: 'card:ch10:coase', chapter: 10, front: tr("Coase teoremasi qachon ishlamaydi?", 'When does the Coase theorem fail?'), back: tr("Transaction costs yuqori, savdolashuv buziladi (holdouts) yoki tomonlar juda ko'p bo'lganda.", 'When transaction costs are high, bargaining breaks down (holdouts), or there are too many parties.') },
    { id: 'card:ch10:private', chapter: 10, front: tr("Tashqi effektlarning 4 xususiy yechimi?", '4 private solutions to externalities?'), back: tr("Axloqiy me'yorlar · Xayriya · Biznesni birlashtirish · Shartnoma.", 'Moral codes · Charities · Merging businesses · Contracts.') },
  ],
};
