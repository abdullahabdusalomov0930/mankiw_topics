import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';

export const ch20: ChapterData = {
  number: 20,
  slug: 'earnings-and-discrimination',
  titleEn: 'Earnings and Discrimination',
  titleUz: 'Daromadlar va diskriminatsiya',
  part: 'Part VI · The Economics of Labor Markets',
  sectionIds: ['s-20-1', 's-20-1a', 's-20-1b', 's-20-1c', 's-20-1d', 's-20-1e', 's-20-1f', 's-20-1g', 's-20-2', 's-20-2a', 's-20-2b', 's-20-2c', 's-20-2d', 's-20-3'],
  terms,
  formulas,
  questions,
  problems: [...review, ...problems],
  extraCards: [
    { id: 'card:ch20:four', chapter: 20, front: "QQ 1–4: qayta o'qish / hojatxona tozalash / ikki barobar maosh / matematika diplomi?", back: "Human capital / compensating differential / efficiency wages / signaling." },
    { id: 'card:ch20:above', chapter: 20, front: "Muvozanatdan past va yuqori ish haqi sabablari?", back: "Past: **monopsony**.\n\nYuqori: **minimum wage**, **unions**, **efficiency wages** → ishsizlik." },
    { id: 'card:ch20:superstar', chapter: 20, front: "Superyulduz bozorining ikki sharti?", back: "1) Har bir mijoz eng yaxshisini xohlaydi.\n\n2) Texnologiya eng yaxshilarga hammaga arzon xizmat ko'rsatishga imkon beradi." },
    { id: 'card:ch20:competition', chapter: 20, front: "Raqobat qaysi diskriminatsiyani yo'qotadi?", back: "**Ish beruvchilar** diskriminatsiyasini. Mijozlar yoki hukumat diskriminatsiyasi saqlanishi mumkin." },
  ],
};
