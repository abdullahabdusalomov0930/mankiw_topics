import type { ComponentType } from 'react';
import type { SDConfig, SDState } from '../components/graphs/SupplyDemandGraph';

/**
 * Text fields marked `Rich` accept a small markup (see components/ui/RichText.tsx):
 *   **bold**   *italic*   \( LaTeX \) inline   \[ LaTeX \] display   [[term-id]] or [[term-id|label]]
 */
export type Rich = string;

export interface Term {
  /** glossary id, unique across the whole book, e.g. "price-ceiling" */
  id: string;
  chapter: number;
  en: string;
  uz: string;
  /** short English definition (book wording or close to it) */
  defEn: string;
  /** explanation in Uzbek */
  defUz: Rich;
  example?: Rich;
}

export interface Formula {
  id: string;
  chapter: number;
  nameEn: string;
  nameUz: string;
  tex: string;
  symbols: { tex: string; meaning: Rich }[];
  example: { setup: Rich; steps: Rich[] };
  note?: Rich;
}

interface QuestionBase {
  id: string;
  chapter: number;
  /** short topic label used in exam reports, e.g. "Narx shifti" */
  topic: string;
  source: 'quickquiz' | 'new';
  prompt: Rich;
}

export interface MCQ extends QuestionBase {
  kind: 'mcq';
  options: { text: Rich; correct?: boolean; why: Rich }[];
}

export interface TrueFalse extends QuestionBase {
  kind: 'tf';
  answer: boolean;
  why: Rich;
}

export interface Numeric extends QuestionBase {
  kind: 'numeric';
  answer: number;
  tolerance: number;
  unit?: string;
  why: Rich;
  /** typical wrong answers and what mistake produces them */
  traps?: { value: number; why: Rich }[];
}

export interface Matching extends QuestionBase {
  kind: 'match';
  pairs: { left: Rich; right: Rich }[];
  why?: Rich;
}

export interface GraphTask extends QuestionBase {
  kind: 'graph';
  graph: SDConfig;
  check: (s: SDState) => { ok: boolean; msg: Rich };
}

export type Question = MCQ | TrueFalse | Numeric | Matching | GraphTask;

/** A Question for Review or a Problem and Application, solved step by step. */
export interface Problem {
  id: string;
  chapter: number;
  kind: 'review' | 'problem';
  number: number;
  prompt: Rich;
  steps: Rich[];
  answer: Rich;
  /** key into the chapter's `widgets` map for an interactive helper */
  widget?: string;
}

export interface Flashcard {
  id: string;
  chapter: number;
  front: Rich;
  back: Rich;
}

export interface LessonSection {
  id: string;
  /** book section code, e.g. "6-1a" */
  code: string;
  titleEn: string;
  titleUz: string;
  Body: ComponentType;
  check?: Question;
}

export interface Box {
  id: string;
  kind: 'Case Study' | 'In the News' | 'Ask the Experts' | 'FYI';
  titleEn: string;
  titleUz: string;
  Body: ComponentType;
}

/** Light data that the registry loads eagerly (glossary, exam mode, flashcards). */
export interface ChapterData {
  number: number;
  slug: string;
  titleEn: string;
  titleUz: string;
  part: string;
  /** ids of the lesson sections in page.tsx, in order (used for progress without loading the page) */
  sectionIds: string[];
  terms: Term[];
  formulas: Formula[];
  questions: Question[];
  problems: Problem[];
  extraCards?: Flashcard[];
  /** every interactive graph of the chapter, for the graph gallery */
  graphs?: SDConfig[];
}

/** Heavy page content, loaded lazily when the chapter page opens. */
export interface ChapterPageContent {
  hook: ComponentType;
  goals: Rich[];
  sections: LessonSection[];
  examTraps: { title: string; body: Rich }[];
  mistakes: { wrong: Rich; right: Rich }[];
  boxes: Box[];
  summary: Rich[];
  /** interactive helpers referenced by Problem.widget */
  widgets?: Record<string, ComponentType>;
  /** interactive widgets shown in the graph gallery */
  gallery?: { title: string; Component: ComponentType }[];
}
