import type { ChapterData } from '../content/types';
import { buildDeck } from './cards';
import { chapterMastery, type ProgressState } from './progress';

export function masteryOf(state: ProgressState, ch: ChapterData) {
  return chapterMastery(
    state,
    ch.number,
    ch.sectionIds,
    ch.questions.map((q) => q.id),
    buildDeck(ch).map((c) => c.id),
  );
}
