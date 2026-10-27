import { describe, expect, it } from 'vitest';
import { emptyProgress, mergeProgress, type ProgressState } from './progress';

const base = (over: Partial<ProgressState>): ProgressState => ({ ...emptyProgress, ...over });

describe('mergeProgress', () => {
  it('keeps work from both devices', () => {
    const a = base({ xp: 50, read: { 1: ['s-1-1'] }, answers: { q1: { correct: true, at: 10 } } });
    const b = base({ xp: 80, read: { 1: ['s-1-2'], 2: ['s-2-1'] }, answers: { q2: { correct: false, at: 20 } }, mistakes: { q2: { chapter: 1, at: 20 } } });
    const m = mergeProgress(a, b);
    expect(m.xp).toBe(80);
    expect(m.read[1].sort()).toEqual(['s-1-1', 's-1-2']);
    expect(m.read[2]).toEqual(['s-2-1']);
    expect(Object.keys(m.answers).sort()).toEqual(['q1', 'q2']);
    expect(m.mistakes.q2).toBeDefined();
  });

  it('the newer attempt wins and a fixed mistake disappears', () => {
    const a = base({ answers: { q: { correct: false, at: 1 } }, mistakes: { q: { chapter: 1, at: 1 } } });
    const b = base({ answers: { q: { correct: true, at: 5 } } });
    const m = mergeProgress(a, b);
    expect(m.answers.q.correct).toBe(true);
    expect(m.mistakes.q).toBeUndefined();
  });

  it('does not duplicate exams', () => {
    const e = { at: 7, chapters: [1], total: 10, correct: 8, byTopic: {} };
    expect(mergeProgress(base({ exams: [e] }), base({ exams: [e] })).exams).toHaveLength(1);
  });
});
