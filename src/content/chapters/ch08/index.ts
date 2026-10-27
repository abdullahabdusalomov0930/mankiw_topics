import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { dwlElasticities, taxWelfare } from './presets';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';
import { tr } from '../../../lib/lang';

export const ch08: ChapterData = {
  number: 8,
  slug: 'costs-of-taxation',
  titleEn: 'Application: The Costs of Taxation',
  titleUz: "Qo'llanma: soliqlarning xarajatlari",
  part: 'Part III · Markets and Welfare',
  sectionIds: ['s-8-1', 's-8-1a', 's-8-1b', 's-8-2', 's-8-3', 's-8-4'],
  terms,
  formulas,
  questions,
  problems: [...review, ...problems],
  graphs: [taxWelfare, dwlElasticities],
  extraCards: [
    { id: 'card:ch08:areas', chapter: 8, front: tr("Figure 3: soliq tushumi va DWL qaysi maydonlar?", 'Figure 3: which areas are tax revenue and DWL?'), back: tr("Tushum = **B + D**, DWL = **C + E**. ΔCS = −(B + C), ΔPS = −(D + E).", 'Revenue = **B + D**, DWL = **C + E**. ΔCS = −(B + C), ΔPS = −(D + E).') },
    { id: 'card:ch08:square', chapter: 8, front: tr("Soliq ikki barobar oshsa, DWL necha barobar oshadi?", 'If a tax doubles, how many times larger does the DWL get?'), back: tr("**To'rt** barobar (DWL ∝ T²). Uch barobar → to'qqiz.", '**Four** times (DWL ∝ T²). Triple the tax → nine times.') },
    { id: 'card:ch08:determinants', chapter: 8, front: tr("DWL ni nima belgilaydi?", 'What determines the DWL?'), back: tr("Talab va taklifning **narx egiluvchanligi**: egiluvchanroq → DWL kattaroq.", 'The **price elasticities** of supply and demand: more elastic → a larger DWL.') },
    { id: 'card:ch08:laffer', chapter: 8, front: tr("Laffer curve nima?", 'What is the Laffer curve?'), back: tr("Soliq kattaligi va tushum orasidagi bog'liqlik: tushum avval oshadi, keyin kamayadi.", 'The relationship between the size of a tax and revenue: revenue first rises, then falls.') },
  ],
};
