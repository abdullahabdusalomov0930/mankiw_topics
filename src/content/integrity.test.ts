import { describe, expect, it } from 'vitest';
import { readyChapters } from '../chapterRegistry';
import { buildDeck } from '../lib/cards';

const dups = (ids: string[]) => ids.filter((id, i) => ids.indexOf(id) !== i);

describe('content integrity', () => {
  const chs = readyChapters();
  it('chapters are numbered 1..n without gaps', () => expect(chs.map((c) => c.number)).toEqual(chs.map((_, i) => i + 1)));
  it('term ids are unique across the book', () => expect(dups(chs.flatMap((c) => c.terms.map((t) => t.id)))).toEqual([]));
  it('formula ids are unique', () => expect(dups(chs.flatMap((c) => c.formulas.map((f) => f.id)))).toEqual([]));
  it('question ids are unique', () => expect(dups(chs.flatMap((c) => c.questions.map((q) => q.id)))).toEqual([]));
  it('problem ids are unique', () => expect(dups(chs.flatMap((c) => c.problems.map((p) => p.id)))).toEqual([]));
  it('every MCQ has exactly one correct option', () => {
    for (const q of chs.flatMap((c) => c.questions)) if (q.kind === 'mcq') expect(q.options.filter((o) => o.correct).length, q.id).toBe(1);
  });
  it('every chapter has its QuickQuiz', () => {
    for (const c of chs) expect(c.questions.filter((q) => q.source === 'quickquiz').length, `ch${c.number}`).toBeGreaterThanOrEqual(4);
  });
  it('card ids are unique', () => expect(dups(chs.flatMap((ch) => buildDeck(ch)).map((c) => c.id))).toEqual([]));
});
