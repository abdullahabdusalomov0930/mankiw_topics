import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';
import { tr } from '../../../lib/lang';

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
    { id: 'card:ch16:barriers', chapter: 16, front: tr("Kirish to'siqlarining uch manbai?", 'The three sources of barriers to entry?'), back: tr("Monopol resurs (yagona quduq, DeBeers) · davlat huquqi (patent, mualliflik huquqi) · ishlab chiqarish jarayoni (tabiiy monopoliya).", 'A monopoly resource (the only well, DeBeers) · government-created rights (patents, copyrights) · the production process (natural monopoly).') },
    { id: 'card:ch16:steps', chapter: 16, front: tr("Monopoliya narxini qanday topamiz (Table 2)?", 'How do we find the monopoly price (Table 2)?'), back: tr("MR ni chiqaring → MR = MC da Q → talab egri chizig'idan P → P > ATC bo'lsa foyda.", 'Derive MR → Q where MR = MC → P from the demand curve → profit if P > ATC.') },
    { id: 'card:ch16:potter', chapter: 16, front: tr("P = 70 − Q, MC = 10 + Q: monopoliya Q va P?", 'P = 70 − Q, MC = 10 + Q: monopoly Q and P?'), back: "MR = 70 − 2Q = 10 + Q → **Q = 20, P = $50**." },
    { id: 'card:ch16:pd-lessons', chapter: 16, front: tr("Readalot masalining uch saboqi?", 'The three lessons of the Readalot parable?'), back: tr("1) Diskriminatsiya ratsional. 2) Xaridorlarni ajratish kerak (arbitraj buzadi). 3) Umumiy surplusni oshirishi mumkin.", '1) Discrimination is rational. 2) Buyers must be separated (arbitrage undermines it). 3) It can raise total surplus.') },
    { id: 'card:ch16:policies', chapter: 16, front: tr("Monopoliyaga qarshi to'rt siyosat?", 'Four policies toward monopoly?'), back: tr("Antitrust · regulyatsiya · davlat mulki · hech narsa qilmaslik (Stigler).", 'Antitrust · regulation · public ownership · doing nothing (Stigler).') },
  ],
};
