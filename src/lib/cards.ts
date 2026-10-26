import type { ChapterData, Flashcard } from '../content/types';

/** A chapter's flashcards: one per term, one per formula, plus any extra cards. */
export function buildDeck(ch: ChapterData): Flashcard[] {
  const termCards: Flashcard[] = ch.terms.map((t) => ({
    id: `card:term:${t.id}`,
    chapter: ch.number,
    front: `**${t.en}**`,
    back: `**${t.uz}**\n\n*“${t.defEn}”*\n\n${t.defUz}${t.example ? `\n\nMisol: ${t.example}` : ''}`,
  }));
  const formulaCards: Flashcard[] = ch.formulas.map((f) => ({
    id: `card:f:${f.id}`,
    chapter: ch.number,
    front: `Formula: **${f.nameEn}**\n\n${f.nameUz}`,
    back: `\\[${f.tex}\\]\n\n${f.symbols.map((s) => `- \\(${s.tex}\\) — ${s.meaning}`).join('\n')}`,
  }));
  return [...termCards, ...formulaCards, ...(ch.extraCards ?? [])];
}
