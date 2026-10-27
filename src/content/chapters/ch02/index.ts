import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';
import { tr } from '../../../lib/lang';

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
    { id: 'card:ch02:markets', chapter: 2, front: tr("Aylanma oqimda kim nimani sotadi?", 'In the circular flow, who sells what?'), back: tr("Tovar bozori: **firms sell**, households buy.\n\nOmillar bozori: **households sell** (labor, land, capital), firms buy.", 'Markets for goods and services: **firms sell**, households buy.\n\nMarkets for factors of production: **households sell** (labor, land, capital), firms buy.') },
    { id: 'card:ch02:ppf-points', chapter: 2, front: tr("PPF: ustida, ichida va tashqarida nuqtalar?", 'PPF: points on, inside, and outside it?'), back: tr("Ustida — **efficient**; ichida — feasible, lekin **inefficient**; tashqarida — **unattainable**.", 'On it — **efficient**; inside — feasible but **inefficient**; outside — **unattainable**.') },
    { id: 'card:ch02:bowed', chapter: 2, front: tr("Nega PPF tashqariga bo'rtgan?", 'Why is the PPF bowed outward?'), back: tr("Resurslar bir xil emas: mashina ko'p bo'lganda, eng yaxshi kompyuter mutaxassislari ham mashinaga o'tkaziladi → mashinaning **OC** oshadi, chegara tiklashadi.", 'Resources are not all alike: when the economy makes many cars, even the best computer experts are moved to cars → the **OC** of a car rises and the frontier gets steeper.') },
    { id: 'card:ch02:disagree', chapter: 2, front: tr("Iqtisodchilar kelishmasligining ikki sababi?", 'Two reasons economists disagree?'), back: tr("1) **Ilmiy baholar** (nazariya, parametr hajmi). 2) **Qadriyatlar** (siyosat maqsadi).", '1) **Scientific judgments** (theory, size of parameters). 2) **Values** (the goals of policy).') },
    { id: 'card:ch02:causality', chapter: 2, front: tr("Grafikdan sababiyat chiqarishdagi ikki tuzoq?", 'Two pitfalls in reading causation from graphs?'), back: tr("**Omitted variable** (zajigalka → saraton; aslida chekish). **Reverse causality** (politsiya ↔ jinoyat; miniven ↔ bola).", '**Omitted variable** (lighters → cancer; really smoking). **Reverse causality** (police ↔ crime; minivan ↔ baby).') },
  ],
};
