import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { drugs, opec, wheat } from './presets';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';
import { tr } from '../../../lib/lang';

export const ch05: ChapterData = {
  number: 5,
  slug: 'elasticity',
  titleEn: 'Elasticity and Its Application',
  titleUz: "Egiluvchanlik va uning qo'llanilishi",
  part: 'Part II · How Markets Work',
  sectionIds: ['s-5-1a', 's-5-1b', 's-5-1c', 's-5-1d', 's-5-1e', 's-5-1f', 's-5-1g', 's-5-2a', 's-5-2b', 's-5-2c', 's-5-3a', 's-5-3b', 's-5-3c', 's-5-4'],
  terms,
  formulas,
  questions,
  problems: [...review, ...problems],
  graphs: [wheat, opec, drugs],
  extraCards: [
    { id: 'card:ch05:determinants', chapter: 5, front: tr("Talab egiluvchanligining **4 omili**?", 'The **4 determinants** of the elasticity of demand?'), back: "Close substitutes · Necessities vs luxuries · Definition of the market · Time horizon." },
    { id: 'card:ch05:tr-rule', chapter: 5, front: tr("Narx oshsa tushum qachon oshadi?", 'When does a higher price raise revenue?'), back: tr("Talab **inelastic** (E < 1) bo'lsa. Elastic bo'lsa — tushum kamayadi; unit — o'zgarmaydi.", 'When demand is **inelastic** (E < 1). If it is elastic, revenue falls; if unit elastic, it stays the same.') },
    { id: 'card:ch05:linear', chapter: 5, front: tr("Chiziqli talab egri chizig'ining qaysi qismi elastic?", 'Which part of a linear demand curve is elastic?'), back: tr("**Yuqori** qismi (narx baland, miqdor kam). Pastki qismi inelastic, o'rtada E = 1.", 'The **upper** part (high price, low quantity). The lower part is inelastic, and E = 1 in the middle.') },
    { id: 'card:ch05:signs', chapter: 5, front: tr("Income va cross-price elasticity ishoralari nimani bildiradi?", 'What do the signs of the income and cross-price elasticities tell you?'), back: "Income: + normal, − inferior. Cross-price: + substitutes, − complements." },
    { id: 'card:ch05:farm', chapter: 5, front: tr("Nega yangi texnologiya fermerlar tushumini kamaytirishi mumkin?", "Why can new technology lower farmers' revenue?"), back: tr("Taklif ↑ → narx ↓; oziq-ovqat talabi **inelastic** → miqdor narxdan kamroq foizga oshadi → TR ↓.", 'Supply ↑ → price ↓; food demand is **inelastic** → quantity rises by a smaller percentage than the price falls → TR ↓.') },
  ],
};
