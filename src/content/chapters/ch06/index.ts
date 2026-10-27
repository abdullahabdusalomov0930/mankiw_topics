import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import * as presets from './presets';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';
import { tr } from '../../../lib/lang';

export const ch06: ChapterData = {
  number: 6,
  slug: 'supply-demand-government-policies',
  titleEn: 'Supply, Demand, and Government Policies',
  titleUz: "Talab, taklif va davlat siyosati",
  part: 'Part II · How Markets Work',
  sectionIds: ['s-6-1', 's-6-1a', 's-6-1b', 's-6-1c', 's-6-2', 's-6-2a', 's-6-2b', 's-6-2c', 's-6-3'],
  terms,
  formulas,
  questions,
  problems: [...review, ...problems],
  graphs: Object.values(presets),
  extraCards: [
    {
      id: 'card:ch06:binding-rule',
      chapter: 6,
      front: tr("Narx shifti va narx tubi qachon **binding** bo'ladi?", 'When are a price ceiling and a price floor **binding**?'),
      back: tr("Shift — muvozanatdan **past** bo'lsa (\\(P_{\\max} < P^*\\)) → shortage.\n\nTub — muvozanatdan **yuqori** bo'lsa (\\(P_{\\min} > P^*\\)) → surplus.", 'A ceiling — when it is **below** equilibrium (\\(P_{\\max} < P^*\\)) → shortage.\n\nA floor — when it is **above** equilibrium (\\(P_{\\min} > P^*\\)) → surplus.'),
    },
    {
      id: 'card:ch06:tax-shift',
      chapter: 6,
      front: tr("Sotuvchiga va xaridorga solingan soliq egri chiziqlarni qanday siljitadi?", 'How do taxes on sellers and on buyers shift the curves?'),
      back: tr("Sotuvchiga: **taklif T ga yuqoriga**.\n\nXaridorga: **talab T ga pastga**.\n\nNatija (\\(P_B\\), \\(P_S\\), \\(Q\\)) bir xil.", 'On sellers: **supply shifts up by T**.\n\nOn buyers: **demand shifts down by T**.\n\nThe outcome (\\(P_B\\), \\(P_S\\), \\(Q\\)) is the same.'),
    },
    {
      id: 'card:ch06:incidence-rule',
      chapter: 6,
      front: tr("Soliq yuki qaysi tomonga ko'proq tushadi?", 'Which side bears more of a tax?'),
      back: tr("**Kamroq egiluvchan** (less elastic) tomonga — chunki uning muqobillari kam va bozorni tark eta olmaydi.", "The **less elastic** side — it has fewer alternatives and can't easily leave the market."),
    },
    {
      id: 'card:ch06:rent-sr-lr',
      chapter: 6,
      front: tr("Ijara nazorati: taqchillik qachon kattaroq — qisqa yoki uzoq muddatda? Nega?", 'Rent control: is the shortage larger in the short run or the long run? Why?'),
      back: tr("**Uzoq muddatda**: talab va taklif egiluvchanroq (yangi uy qurilmaydi, ko'proq odam alohida yashashni xohlaydi).", '**In the long run**: supply and demand are more elastic (no new housing is built, more people want to live alone).'),
    },
    {
      id: 'card:ch06:minwage-total',
      chapter: 6,
      front: tr("Eng kam ish haqi oshsa, jami ish haqi to'lovi qachon kamayadi?", 'When does a higher minimum wage lower total wage payments?'),
      back: tr("Mehnat **talabi egiluvchan** (> 1) bo'lsa: bandlik ish haqidan ko'proq foizga kamayadi.", 'When labor **demand is elastic** (> 1): employment falls by a larger percentage than the wage rises.'),
    },
    {
      id: 'card:ch06:p10',
      chapter: 6,
      front: tr("Problem 10: \\(Q^S = 2P\\), \\(Q^D = 300 - P\\), $30 soliq. \\(P_B\\), \\(P_S\\), \\(Q\\)?", 'Problem 10: \\(Q^S = 2P\\), \\(Q^D = 300 - P\\), a $30 tax. \\(P_B\\), \\(P_S\\), \\(Q\\)?'),
      back: tr("\\(P_B = 120\\), \\(P_S = 90\\), \\(Q = 180\\) (soliqsiz: 100 va 200).", '\\(P_B = 120\\), \\(P_S = 90\\), \\(Q = 180\\) (without the tax: 100 and 200).'),
    },
  ],
};
