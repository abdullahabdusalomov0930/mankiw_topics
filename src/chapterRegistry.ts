import { ch01 } from './content/chapters/ch01';
import { ch02 } from './content/chapters/ch02';
import { ch03 } from './content/chapters/ch03';
import { ch06 } from './content/chapters/ch06';
import { ch04 } from './content/chapters/ch04';
import { ch05 } from './content/chapters/ch05';
import { ch07 } from './content/chapters/ch07';
import { ch08 } from './content/chapters/ch08';
import { ch09 } from './content/chapters/ch09';
import { ch10 } from './content/chapters/ch10';
import type { ChapterData, ChapterPageContent, Term } from './content/types';

/**
 * Every chapter of the site. To add a chapter: create src/content/chapters/chNN/
 * (index.ts with the ChapterData, page.tsx with the lessons) and set `data` and `loadPage`
 * on its line below. See ADDING_A_CHAPTER.md.
 */
export interface ChapterEntry {
  number: number;
  titleEn: string;
  titleUz: string;
  part: string;
  /** light data used by glossary, formula sheet, exam mode and flashcards */
  data?: ChapterData;
  /** lessons and widgets, loaded only when the chapter page opens */
  loadPage?: () => Promise<{ page: ChapterPageContent }>;
  /** terms already written for a chapter that isn't built yet (shared with built chapters) */
  earlyTerms?: Term[];
}

export const chapters: ChapterEntry[] = [
  { number: 1, titleEn: ch01.titleEn, titleUz: ch01.titleUz, part: ch01.part, data: ch01, loadPage: () => import('./content/chapters/ch01/page') },
  { number: 2, titleEn: ch02.titleEn, titleUz: ch02.titleUz, part: ch02.part, data: ch02, loadPage: () => import('./content/chapters/ch02/page') },
  { number: 3, titleEn: ch03.titleEn, titleUz: ch03.titleUz, part: ch03.part, data: ch03, loadPage: () => import('./content/chapters/ch03/page') },
  { number: 4, titleEn: ch04.titleEn, titleUz: ch04.titleUz, part: ch04.part, data: ch04, loadPage: () => import('./content/chapters/ch04/page') },
  { number: 5, titleEn: ch05.titleEn, titleUz: ch05.titleUz, part: ch05.part, data: ch05, loadPage: () => import('./content/chapters/ch05/page') },
  {
    number: 6,
    titleEn: ch06.titleEn,
    titleUz: ch06.titleUz,
    part: ch06.part,
    data: ch06,
    loadPage: () => import('./content/chapters/ch06/page'),
  },
  { number: 7, titleEn: ch07.titleEn, titleUz: ch07.titleUz, part: ch07.part, data: ch07, loadPage: () => import('./content/chapters/ch07/page') },
  { number: 8, titleEn: ch08.titleEn, titleUz: ch08.titleUz, part: ch08.part, data: ch08, loadPage: () => import('./content/chapters/ch08/page') },
  { number: 9, titleEn: ch09.titleEn, titleUz: ch09.titleUz, part: ch09.part, data: ch09, loadPage: () => import('./content/chapters/ch09/page') },
  { number: 10, titleEn: ch10.titleEn, titleUz: ch10.titleUz, part: ch10.part, data: ch10, loadPage: () => import('./content/chapters/ch10/page') },
];

export const readyChapters = (): ChapterData[] => chapters.filter((c) => c.data).map((c) => c.data!);

export const getChapter = (n: number) => chapters.find((c) => c.number === n);
