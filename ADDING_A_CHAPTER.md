# Adding a chapter (Chapter 11 and later)

Adding a chapter = **one folder** + **one line in `src/chapterRegistry.ts`**. Use `src/content/chapters/ch06/` as the template.

## 1. Create the folder `src/content/chapters/chNN/`

| File | What goes in it |
|---|---|
| `terms.ts` | `Term[]` — every Key Concept and bold term: `id` (unique across the book, e.g. `"public-good"`), `en`, `uz`, `defEn` (book definition), `defUz` (Uzbek explanation), optional `example`. |
| `formulas.ts` | `Formula[]` — LaTeX in `tex`, every symbol explained, a worked numeric example. |
| `presets.ts` | Graph set-ups (`SDConfig`) for the chapter's figures. Use `demandThrough` / `supplyThrough` from `src/lib/econ.ts` so the curves pass through the book's numbers. |
| `quiz.ts` | `quickQuiz` (the book's QuickQuiz, `source: "quickquiz"`, an explanation for **every** option), `checks` (one "Tekshirib ko'r" question per lesson section, keyed by section id), new practice questions and graph tasks. Export `questions` = all of them. |
| `problems.ts` | `review` (Questions for Review) and `problems` (Problems and Applications) with `steps` revealed one at a time and a final `answer`. `widget: "key"` attaches an interactive graph from `page.tsx`. |
| `page.tsx` | Lessons (one `LessonSection` per book section, e.g. `11-2a`), the hook, goals, exam traps, common mistakes, boxes (Case Study / In the News / Ask the Experts / FYI), summary, and the `widgets` map. |
| `index.ts` | The `ChapterData` object: number, titles, `sectionIds` (same ids and order as `page.tsx`), terms, formulas, questions, problems, `graphs: Object.values(presets)`, optional `extraCards`. |

Text fields accept a small markup: `**bold**`, `*italic*`, `\\( inline LaTeX \\)`, `\\[ display LaTeX \\]`, `[[term-id]]` (shows "English (o'zbekcha)" with a popover) or `[[term-id|label]]`. Inside JSX use `<T id="term-id" />` and `<M tex="..." />`. Write Uzbek with the plain apostrophe (`o'`, `g'`) inside double-quoted strings.

If an earlier chapter already wrote some of your terms in `earlyTerms` (e.g. `ch07/terms.ts` holds `consumer-surplus`), keep them in that file and add the rest — ids must stay unique.

## 2. Register it

In `src/chapterRegistry.ts`, replace the chapter's placeholder line with:

```ts
{ number: 11, titleEn: ch11.titleEn, titleUz: ch11.titleUz, part: ch11.part, data: ch11, loadPage: () => import('./content/chapters/ch11/page') },
```

and add `import { ch11 } from './content/chapters/ch11';` at the top.

That's all: the home page, glossary, formula sheet, graph gallery, exam mode, mistakes review and flashcards pick the chapter up automatically.

## 3. New kinds of graphs

Put the math in `src/lib/econ.ts` as pure functions **with tests** in `src/lib/econ.test.ts`, then build the widget in `src/components/graphs/` using the helpers in `plot.ts` (`makeFrame`, `sx`, `sy`, `clipLine`, `svgPoint`) and `useWidth`.

## 4. Check

```
npm test
npm run build
```

Then update `content/inventory.md`: mark each item `✅ /chapter/NN#anchor`.
