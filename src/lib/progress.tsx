import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

/** Everything the learner does is stored in localStorage under one key. */
const KEY = 'mankiw-progress-v1';

export interface CardState {
  /** Leitner box 1..5 */
  box: number;
  /** next due date, YYYY-MM-DD */
  due: string;
  reviews: number;
}

export interface Attempt {
  correct: boolean;
  at: number;
}

export interface ExamRecord {
  at: number;
  chapters: number[];
  total: number;
  correct: number;
  byTopic: Record<string, { total: number; correct: number }>;
}

export interface ProgressState {
  xp: number;
  streak: { count: number; last: string | null };
  /** section ids marked as read, per chapter number */
  read: Record<number, string[]>;
  /** last attempt per question id */
  answers: Record<string, Attempt>;
  /** question ids that were answered wrong at least once and not yet fixed */
  mistakes: Record<string, { chapter: number; at: number }>;
  cards: Record<string, CardState>;
  exams: ExamRecord[];
  last: { chapter: number; section?: string } | null;
}

const empty: ProgressState = {
  xp: 0,
  streak: { count: 0, last: null },
  read: {},
  answers: {},
  mistakes: {},
  cards: {},
  exams: [],
  last: null,
};

/** Days to wait after a correct review, by Leitner box. */
const INTERVALS = [0, 1, 2, 4, 8, 16];

export function today(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function addDays(date: string, n: number): string {
  const [y, m, d] = date.split('-').map(Number);
  return today(new Date(y, m - 1, d + n));
}

function load(): ProgressState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty;
    return { ...empty, ...JSON.parse(raw) };
  } catch {
    return empty;
  }
}

function save(s: ProgressState) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    // storage full or blocked: progress just won't persist
  }
}

function bumpStreak(s: ProgressState): ProgressState['streak'] {
  const t = today();
  if (s.streak.last === t) return s.streak;
  const yesterday = addDays(t, -1);
  return { count: s.streak.last === yesterday ? s.streak.count + 1 : 1, last: t };
}

interface Api {
  state: ProgressState;
  /** last XP gain, for the small floating animation */
  lastGain: { amount: number; key: number } | null;
  markRead: (chapter: number, section: string) => void;
  isRead: (chapter: number, section: string) => boolean;
  recordAnswer: (id: string, chapter: number, correct: boolean) => void;
  reviewCard: (id: string, knew: boolean) => void;
  isDue: (id: string) => boolean;
  recordExam: (r: ExamRecord) => void;
  setLast: (chapter: number, section?: string) => void;
  reset: () => void;
}

const Ctx = createContext<Api | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(load);
  const [lastGain, setLastGain] = useState<Api['lastGain']>(null);

  useEffect(() => save(state), [state]);

  const gain = useCallback((amount: number) => {
    if (amount > 0) setLastGain({ amount, key: Date.now() + Math.random() });
  }, []);

  const markRead = useCallback(
    (chapter: number, section: string) => {
      setState((s) => {
        const list = s.read[chapter] ?? [];
        if (list.includes(section)) return s;
        gain(10);
        return {
          ...s,
          xp: s.xp + 10,
          streak: bumpStreak(s),
          read: { ...s.read, [chapter]: [...list, section] },
          last: { chapter, section },
        };
      });
    },
    [gain],
  );

  const recordAnswer = useCallback(
    (id: string, chapter: number, correct: boolean) => {
      setState((s) => {
        const firstCorrect = correct && !s.answers[id]?.correct;
        const xp = firstCorrect ? 5 : 0;
        if (xp) gain(xp);
        const mistakes = { ...s.mistakes };
        if (correct) delete mistakes[id];
        else mistakes[id] = { chapter, at: Date.now() };
        return {
          ...s,
          xp: s.xp + xp,
          streak: bumpStreak(s),
          answers: { ...s.answers, [id]: { correct, at: Date.now() } },
          mistakes,
        };
      });
    },
    [gain],
  );

  const reviewCard = useCallback(
    (id: string, knew: boolean) => {
      setState((s) => {
        const prev = s.cards[id];
        const box = knew ? Math.min(5, (prev?.box ?? 0) + 1) : 1;
        const due = addDays(today(), knew ? INTERVALS[box] : 0);
        gain(2);
        return {
          ...s,
          xp: s.xp + 2,
          streak: bumpStreak(s),
          cards: { ...s.cards, [id]: { box, due, reviews: (prev?.reviews ?? 0) + 1 } },
        };
      });
    },
    [gain],
  );

  const recordExam = useCallback(
    (r: ExamRecord) => {
      setState((s) => {
        gain(20);
        return { ...s, xp: s.xp + 20, streak: bumpStreak(s), exams: [r, ...s.exams].slice(0, 30) };
      });
    },
    [gain],
  );

  const api = useMemo<Api>(
    () => ({
      state,
      lastGain,
      markRead,
      isRead: (c, sec) => (state.read[c] ?? []).includes(sec),
      recordAnswer,
      reviewCard,
      isDue: (id) => {
        const c = state.cards[id];
        return !c || c.due <= today();
      },
      recordExam,
      setLast: (chapter, section) =>
        setState((s) =>
          s.last?.chapter === chapter && s.last?.section === section ? s : { ...s, last: { chapter, section } },
        ),
      reset: () => setState(empty),
    }),
    [state, lastGain, markRead, recordAnswer, reviewCard, recordExam],
  );

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useProgress(): Api {
  const v = useContext(Ctx);
  if (!v) throw new Error('useProgress outside ProgressProvider');
  return v;
}

export interface Mastery {
  /** 0..100 */
  percent: number;
  readPct: number;
  quizPct: number;
  cardsPct: number;
  mastered: boolean;
}

/**
 * Mastery of a chapter: 40% lessons read, 40% objective questions answered correctly
 * (last attempt), 20% flashcards reviewed at least once.
 * "Mastered" needs quiz ≥ 80% and every flashcard reviewed.
 */
export function chapterMastery(
  s: ProgressState,
  chapter: number,
  sectionIds: string[],
  questionIds: string[],
  cardIds: string[],
): Mastery {
  const read = s.read[chapter] ?? [];
  const readPct = sectionIds.length ? sectionIds.filter((id) => read.includes(id)).length / sectionIds.length : 0;
  const quizPct = questionIds.length
    ? questionIds.filter((id) => s.answers[id]?.correct).length / questionIds.length
    : 0;
  const cardsPct = cardIds.length ? cardIds.filter((id) => s.cards[id]).length / cardIds.length : 0;
  const percent = Math.round(100 * (0.4 * readPct + 0.4 * quizPct + 0.2 * cardsPct));
  return {
    percent,
    readPct: Math.round(readPct * 100),
    quizPct: Math.round(quizPct * 100),
    cardsPct: Math.round(cardsPct * 100),
    mastered: quizPct >= 0.8 && cardsPct === 1,
  };
}
