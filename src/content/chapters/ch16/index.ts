import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';

export const ch16: ChapterData = {
  number: 16,
  slug: 'monopoly',
  titleEn: 'Monopoly',
  titleUz: 'Monopoliya',
  part: 'Part V · Firm Behavior and the Organization of Industry',
  sectionIds: ['s-16-1', 's-16-1a', 's-16-1b', 's-16-1c', 's-16-2a', 's-16-2b', 's-16-2c', 's-16-2d', 's-16-3a', 's-16-3b', 's-16-4a', 's-16-4b', 's-16-4c', 's-16-4d', 's-16-5a', 's-16-5b', 's-16-5c', 's-16-5d', 's-16-6'],
  terms,
  formulas,
  questions,
  problems: [...review, ...problems],
  extraCards: [
    { id: 'card:ch16:barriers', chapter: 16, front: "Kirish to'siqlarining uch manbai?", back: "Monopol resurs (yagona quduq, DeBeers) · davlat huquqi (patent, mualliflik huquqi) · ishlab chiqarish jarayoni (tabiiy monopoliya)." },
    { id: 'card:ch16:steps', chapter: 16, front: "Monopoliya narxini qanday topamiz (Table 2)?", back: "MR ni chiqaring → MR = MC da Q → talab egri chizig'idan P → P > ATC bo'lsa foyda." },
    { id: 'card:ch16:potter', chapter: 16, front: "P = 70 − Q, MC = 10 + Q: monopoliya Q va P?", back: "MR = 70 − 2Q = 10 + Q → **Q = 20, P = $50**." },
    { id: 'card:ch16:pd-lessons', chapter: 16, front: "Readalot masalining uch saboqi?", back: "1) Diskriminatsiya ratsional. 2) Xaridorlarni ajratish kerak (arbitraj buzadi). 3) Umumiy surplusni oshirishi mumkin." },
    { id: 'card:ch16:policies', chapter: 16, front: "Monopoliyaga qarshi to'rt siyosat?", back: "Antitrust · regulyatsiya · davlat mulki · hech narsa qilmaslik (Stigler)." },
  ],
};
