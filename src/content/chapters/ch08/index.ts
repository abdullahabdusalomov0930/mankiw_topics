import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { dwlElasticities, taxWelfare } from './presets';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';

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
    { id: 'card:ch08:areas', chapter: 8, front: "Figure 3: soliq tushumi va DWL qaysi maydonlar?", back: "Tushum = **B + D**, DWL = **C + E**. ΔCS = −(B + C), ΔPS = −(D + E)." },
    { id: 'card:ch08:square', chapter: 8, front: "Soliq ikki barobar oshsa, DWL necha barobar oshadi?", back: "**To'rt** barobar (DWL ∝ T²). Uch barobar → to'qqiz." },
    { id: 'card:ch08:determinants', chapter: 8, front: "DWL ni nima belgilaydi?", back: "Talab va taklifning **narx egiluvchanligi**: egiluvchanroq → DWL kattaroq." },
    { id: 'card:ch08:laffer', chapter: 8, front: "Laffer curve nima?", back: "Soliq kattaligi va tushum orasidagi bog'liqlik: tushum avval oshadi, keyin kamayadi." },
  ],
};
