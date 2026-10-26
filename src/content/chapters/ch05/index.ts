import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { drugs, opec, wheat } from './presets';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';

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
    { id: 'card:ch05:determinants', chapter: 5, front: "Talab egiluvchanligining **4 omili**?", back: "Close substitutes · Necessities vs luxuries · Definition of the market · Time horizon." },
    { id: 'card:ch05:tr-rule', chapter: 5, front: "Narx oshsa tushum qachon oshadi?", back: "Talab **inelastic** (E < 1) bo'lsa. Elastic bo'lsa — tushum kamayadi; unit — o'zgarmaydi." },
    { id: 'card:ch05:linear', chapter: 5, front: "Chiziqli talab egri chizig'ining qaysi qismi elastic?", back: "**Yuqori** qismi (narx baland, miqdor kam). Pastki qismi inelastic, o'rtada E = 1." },
    { id: 'card:ch05:signs', chapter: 5, front: "Income va cross-price elasticity ishoralari nimani bildiradi?", back: "Income: + normal, − inferior. Cross-price: + substitutes, − complements." },
    { id: 'card:ch05:farm', chapter: 5, front: "Nega yangi texnologiya fermerlar tushumini kamaytirishi mumkin?", back: "Taklif ↑ → narx ↓; oziq-ovqat talabi **inelastic** → miqdor narxdan kamroq foizga oshadi → TR ↓." },
  ],
};
