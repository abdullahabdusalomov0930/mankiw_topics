import type { ChapterData, ChapterPageContent } from './content/types';
import { isEn } from './lib/lang';

/**
 * Every chapter of the site, found automatically from src/content/chapters/chNN/.
 * index.ts holds the ChapterData; its texts use tr(uz, en), so one file serves both languages.
 * page.tsx holds the Uzbek+English lessons and en/page.tsx the full-English lessons (a chapter
 * without en/page.tsx falls back to page.tsx). Data is loaded once at start-up by
 * `loadChapters()` (see main.tsx); pages are loaded lazily when opened. See ADDING_A_CHAPTER.md.
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
}

type Loader<T> = Record<string, () => Promise<T>>;
const uzData = import.meta.glob('./content/chapters/ch*/index.ts') as Loader<Record<string, ChapterData>>;
const uzPages = import.meta.glob('./content/chapters/ch*/page.tsx') as Loader<{ page: ChapterPageContent }>;
const enPages = import.meta.glob('./content/chapters/ch*/en/page.tsx') as Loader<{ page: ChapterPageContent }>;

const folder = (path: string) => path.match(/chapters\/(ch\d+)\//)![1];

export const chapters: ChapterEntry[] = [];

let loading: Promise<void> | undefined;

/** Fill `chapters` for the current language. Safe to call more than once. */
export function loadChapters(english = isEn): Promise<void> {
  loading ??= (async () => {
    const enPageBy = new Map(Object.entries(enPages).map(([p, f]) => [folder(p), f]));
    const uzPageBy = new Map(Object.entries(uzPages).map(([p, f]) => [folder(p), f]));
    const entries = await Promise.all(
      Object.entries(uzData).map(async ([path, load]) => {
        const dir = folder(path);
        const useEn = english && enPageBy.has(dir);
        const mod = await load();
        const data = Object.values(mod)[0];
        const entry: ChapterEntry = {
          number: data.number,
          titleEn: data.titleEn,
          titleUz: data.titleUz,
          part: data.part,
          data,
          loadPage: useEn ? enPageBy.get(dir) : uzPageBy.get(dir),
        };
        return entry;
      }),
    );
    chapters.splice(0, chapters.length, ...entries.sort((a, b) => a.number - b.number));
  })();
  return loading;
}

export const readyChapters = (): ChapterData[] => chapters.filter((c) => c.data).map((c) => c.data!);

export const getChapter = (n: number) => chapters.find((c) => c.number === n);
