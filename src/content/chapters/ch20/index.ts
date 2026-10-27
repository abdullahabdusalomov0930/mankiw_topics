import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';
import { tr } from '../../../lib/lang';

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
    { id: 'card:ch20:four', chapter: 20, front: tr("QQ 1–4: qayta o'qish / hojatxona tozalash / ikki barobar maosh / matematika diplomi?", 'QQ 1–4: retraining / cleaning toilets / double pay / a math degree?'), back: "Human capital / compensating differential / efficiency wages / signaling." },
    { id: 'card:ch20:above', chapter: 20, front: tr("Muvozanatdan past va yuqori ish haqi sabablari?", 'The reasons for wages below and above equilibrium?'), back: tr("Past: **monopsony**.\n\nYuqori: **minimum wage**, **unions**, **efficiency wages** → ishsizlik.", `Below: **monopsony**.

Above: **minimum wage**, **unions**, **efficiency wages** → unemployment.`) },
    { id: 'card:ch20:superstar', chapter: 20, front: tr("Superyulduz bozorining ikki sharti?", 'The two conditions for a superstar market?'), back: tr("1) Har bir mijoz eng yaxshisini xohlaydi.\n\n2) Texnologiya eng yaxshilarga hammaga arzon xizmat ko'rsatishga imkon beradi.", `1) Every customer wants the best.

2) Technology lets the best serve everyone cheaply.`) },
    { id: 'card:ch20:competition', chapter: 20, front: tr("Raqobat qaysi diskriminatsiyani yo'qotadi?", 'Which discrimination does competition eliminate?'), back: tr("**Ish beruvchilar** diskriminatsiyasini. Mijozlar yoki hukumat diskriminatsiyasi saqlanishi mumkin.", 'Discrimination by **employers**. Discrimination by customers or the government can persist.') },
  ],
};
