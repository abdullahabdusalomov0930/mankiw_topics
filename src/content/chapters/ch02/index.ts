import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';

export const ch02: ChapterData = {
  number: 2,
  slug: 'thinking-like-an-economist',
  titleEn: 'Thinking Like an Economist',
  titleUz: 'Iqtisodchi kabi fikrlash',
  part: 'Part I · Introduction',
  sectionIds: ['s-2-1', 's-2-1a', 's-2-1b', 's-2-1c', 's-2-1d', 's-2-1e', 's-2-1f', 's-2-2a', 's-2-2b', 's-2-2c', 's-2-3', 's-2-3a', 's-2-3b', 's-2-3c', 's-2-4', 's-2-app'],
  terms,
  formulas,
  questions,
  problems: [...review, ...problems],
  extraCards: [
    { id: 'card:ch02:markets', chapter: 2, front: "Aylanma oqimda kim nimani sotadi?", back: "Tovar bozori: **firms sell**, households buy.\n\nOmillar bozori: **households sell** (labor, land, capital), firms buy." },
    { id: 'card:ch02:ppf-points', chapter: 2, front: "PPF: ustida, ichida va tashqarida nuqtalar?", back: "Ustida — **efficient**; ichida — feasible, lekin **inefficient**; tashqarida — **unattainable**." },
    { id: 'card:ch02:bowed', chapter: 2, front: "Nega PPF tashqariga bo'rtgan?", back: "Resurslar bir xil emas: mashina ko'p bo'lganda, eng yaxshi kompyuter mutaxassislari ham mashinaga o'tkaziladi → mashinaning **OC** oshadi, chegara tiklashadi." },
    { id: 'card:ch02:disagree', chapter: 2, front: "Iqtisodchilar kelishmasligining ikki sababi?", back: "1) **Ilmiy baholar** (nazariya, parametr hajmi). 2) **Qadriyatlar** (siyosat maqsadi)." },
    { id: 'card:ch02:causality', chapter: 2, front: "Grafikdan sababiyat chiqarishdagi ikki tuzoq?", back: "**Omitted variable** (zajigalka → saraton; aslida chekish). **Reverse causality** (politsiya ↔ jinoyat; miniven ↔ bola)." },
  ],
};
