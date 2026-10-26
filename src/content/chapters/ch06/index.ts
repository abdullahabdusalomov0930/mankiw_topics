import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import * as presets from './presets';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';

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
      front: "Narx shifti va narx tubi qachon **binding** bo'ladi?",
      back: "Shift — muvozanatdan **past** bo'lsa (\\(P_{\\max} < P^*\\)) → shortage.\n\nTub — muvozanatdan **yuqori** bo'lsa (\\(P_{\\min} > P^*\\)) → surplus.",
    },
    {
      id: 'card:ch06:tax-shift',
      chapter: 6,
      front: "Sotuvchiga va xaridorga solingan soliq egri chiziqlarni qanday siljitadi?",
      back: "Sotuvchiga: **taklif T ga yuqoriga**.\n\nXaridorga: **talab T ga pastga**.\n\nNatija (\\(P_B\\), \\(P_S\\), \\(Q\\)) bir xil.",
    },
    {
      id: 'card:ch06:incidence-rule',
      chapter: 6,
      front: "Soliq yuki qaysi tomonga ko'proq tushadi?",
      back: "**Kamroq egiluvchan** (less elastic) tomonga — chunki uning muqobillari kam va bozorni tark eta olmaydi.",
    },
    {
      id: 'card:ch06:rent-sr-lr',
      chapter: 6,
      front: "Ijara nazorati: taqchillik qachon kattaroq — qisqa yoki uzoq muddatda? Nega?",
      back: "**Uzoq muddatda**: talab va taklif egiluvchanroq (yangi uy qurilmaydi, ko'proq odam alohida yashashni xohlaydi).",
    },
    {
      id: 'card:ch06:minwage-total',
      chapter: 6,
      front: "Eng kam ish haqi oshsa, jami ish haqi to'lovi qachon kamayadi?",
      back: "Mehnat **talabi egiluvchan** (> 1) bo'lsa: bandlik ish haqidan ko'proq foizga kamayadi.",
    },
    {
      id: 'card:ch06:p10',
      chapter: 6,
      front: "Problem 10: \\(Q^S = 2P\\), \\(Q^D = 300 - P\\), $30 soliq. \\(P_B\\), \\(P_S\\), \\(Q\\)?",
      back: "\\(P_B = 120\\), \\(P_S = 90\\), \\(Q = 180\\) (soliqsiz: 100 va 200).",
    },
  ],
};
