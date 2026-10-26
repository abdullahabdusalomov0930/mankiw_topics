# Prompt: Interactive learning website for Mankiw "Principles of Economics" (Ch. 1–10)

## Context

I am a university student in Uzbekistan (statistics major). My economics course uses N. Gregory Mankiw, *Principles of Economics* (10th edition). I have attached the book. Exams and class questions are asked **in English terminology**, but I learn best with explanations in **Uzbek (Latin script)**.

The book is dry. I want you to turn **Chapters 1–10** into one engaging, interactive study website where I can learn everything, play with every graph myself, practice, and memorize all terms and formulas. **Later I will add the rest of the book**, so the architecture must make adding new chapters easy.

**Non-negotiable goal: nothing from Chapters 1–10 may be missing.** Every key term, every formula, every figure, every case study, every "Ask the Experts", every QuickQuiz and every end-of-chapter problem must be covered.

---

## Step 0 — Read the book and build a content inventory FIRST

Before writing any UI code:

1. Read Chapters 1–10 of the attached book in full (including chapter appendices, e.g. Chapter 2's "Graphing: A Brief Review").
2. Create `content/inventory.md` with, for each chapter:
   - All **Key Concepts** (the list at the end of each chapter) and every other bold/defined term in the text
   - All **formulas** (write them in LaTeX)
   - All **figures** (number + what each panel shows)
   - All **case studies**, "In the News", "Ask the Experts", "FYI" boxes
   - All **QuickQuiz** questions with answers
   - All **Questions for Review** and **Problems and Applications**
3. Use this inventory as a checklist. At the end, run a coverage audit: every inventory item must link to the place on the site where it is taught. Report anything missing.

The checklist below is a **minimum**, not a replacement for reading the book.

---

## Language and tone

- All explanations in **Uzbek (Latin script)**, simple and friendly, like a smart older student explaining to a friend.
- Every economics term appears as: **English term** (o'zbekcha tarjima), e.g. **opportunity cost** (muqobil xarajat). English terms must be visually highlighted and hoverable/tappable to show the definition.
- Use everyday Uzbek examples where helpful (bozor, non narxi, taksi, Toshkent ijara narxlari, paxta, telefon) alongside the book's examples.
- Explain in your own words. Do not paste long passages from the book; short quotes of key definitions are fine. Redraw all figures as interactive components; never copy figure images from the PDF.
- Not childish. Fun, but serious about the material.

---

## Tech stack

- **Vite + React + TypeScript**, **Tailwind CSS**
- Interactive graphs: **Mafs** (React library for interactive math, supports draggable points) or custom SVG + React. All graphs must work with **touch (mobile)** and mouse.
- Formulas: **KaTeX**
- Routing: React Router
- Progress, XP, flashcard schedules, quiz history: **localStorage** (no backend)
- Must build to a static site deployable on Vercel / Netlify / GitHub Pages
- Mobile-first, dark mode + light mode, fast load

---

## Architecture (must support adding the rest of the book later)

```
src/
  content/
    chapters/
      ch01/ index.ts (metadata), lessons (MDX or TS data), quiz.ts, flashcards.ts, problems.ts
      ch02/ ...
      ...
    glossary.ts      (all terms EN + UZ + definition + chapter + example)
    formulas.ts      (all formulas with LaTeX + explanation + chapter)
  components/
    graphs/          (reusable interactive economics widgets — see below)
    quiz/            (MCQ, true/false, numeric, graph-task, matching)
    ui/
  chapterRegistry.ts (adding a chapter = adding one folder + one registry line)
```

Write a short `ADDING_A_CHAPTER.md` explaining exactly how to add Chapter 11+.

---

## Reusable interactive graph widgets

Build these as generic, parameterized components, reused across chapters. Every widget: sliders and/or draggable curves, live numeric readouts, clearly labeled axes (English labels with Uzbek tooltip), shaded areas where relevant, a "Reset" button, and a short "Nimani ko'ryapsiz?" explanation that updates as the user interacts.

1. **SupplyDemandGraph** — the core widget. Linear supply and demand with adjustable intercepts/slopes.
   - Drag curves to shift them; toggle "shift of curve" vs "movement along the curve"
   - Show equilibrium point, price, quantity
   - Modes: price ceiling, price floor (binding / not binding, shortage / surplus highlighted), tax on buyers, tax on sellers (show tax wedge, price buyers pay, price sellers receive, burden split in %), and later surplus shading
2. **PPFExplorer** — bowed-out PPF; drag a point to see efficient / inefficient / unattainable; slope readout = opportunity cost; button for technological advance shifting the frontier (also biased advance that shifts only one axis).
3. **CircularFlow** — animated circular-flow diagram (households, firms, goods market, factor market); toggle money flow vs real flow; click each arrow for explanation.
4. **ComparativeAdvantageLab** — enter output per hour for two people/countries and two goods; auto-compute opportunity costs, absolute and comparative advantage, range of mutually beneficial trade prices; show both PPFs, specialization, and consumption beyond the PPF after trade.
5. **ElasticityLab** — two points on a demand (or supply) curve; compute elasticity with the **midpoint method** step by step; classify (perfectly inelastic → perfectly elastic); show **total revenue** as a shaded rectangle that changes when price changes; show elasticity changing along a linear demand curve.
6. **SurplusGraph** — shade **consumer surplus**, **producer surplus**, **total surplus**; with tax: tax revenue rectangle and **deadweight loss** triangle; show numeric areas.
7. **TaxSizeLab** — slider for tax size; plot deadweight loss and tax revenue vs tax size (show DWL growing with the square of the tax and the **Laffer curve** shape of revenue); slider for elasticities to show how DWL depends on them.
8. **InternationalTradeGraph** — domestic supply/demand + world price line; drag world price above/below domestic price to switch exporter/importer; shade CS/PS changes and gains from trade; add a **tariff** and show the two DWL triangles and tariff revenue.
9. **ExternalityGraph** — private vs social cost (negative externality) and private vs social value (positive externality); show market vs optimal quantity, DWL; apply a **Pigovian (corrective) tax** or **subsidy** with a slider to internalize the externality.
10. **Simple demand-schedule builder** — individual demand schedules summed horizontally into market demand (Ch 4).
11. **Slope / correlation sandbox** — scatterplot, slope calculator, examples of omitted variable and reverse causality (Ch 2 appendix).

Graph math must be in pure, unit-tested functions (`src/lib/econ.ts`): equilibrium, shifts, ceiling/floor outcomes, tax incidence, elasticities (midpoint), surplus areas, DWL, trade outcomes. Write tests (Vitest) for these.

---

## Structure of every chapter page

1. **Hook** — a short real-life story or question that makes the chapter feel relevant (2–4 sentences)
2. **Learning goals** — what I will be able to do after this chapter
3. **Lessons** — one section per book section (e.g. 6-1a, 6-1b...). Each section: short explanation → interactive widget or diagram → "Tekshirib ko'r" mini question (instant feedback)
4. **"Imtihonda so'raladi"** callout boxes for typical exam traps (e.g. shift vs movement, binding vs non-binding, who bears the tax burden)
5. **Common mistakes** box
6. **Case studies** — each case study summarized and, where possible, made interactive (e.g. gas lines → ceiling widget preset; luxury tax → incidence widget preset)
7. **Key terms** — cards, EN term + UZ translation + definition + example
8. **Formulas** — every formula with KaTeX, what each symbol means, a worked numeric example
9. **Chapter summary** ("Chapter in a Nutshell" in my own language)
10. **Practice**:
    - The book's QuickQuiz questions (with explained answers)
    - The book's Questions for Review and Problems and Applications, solved step by step, with hidden solutions I can reveal step by step
    - New questions: multiple choice, true/false with explanation, numeric input with auto-checking, matching terms, and **graph tasks** ("drag the supply curve to show what happens when input prices rise", "set a binding price floor")
11. **Flashcards** for all terms and formulas of the chapter (spaced repetition, simple Leitner system)

Every wrong answer must show **why** it is wrong, not just the correct answer.

---

## Global pages

- **Home / dashboard** — chapters with progress %, mastery level, continue where I left off
- **Glossary** — search in English or Uzbek, filter by chapter
- **Formula sheet** — all formulas from all chapters on one page (also printable)
- **Graph gallery** — every interactive graph in one place
- **Exam mode** — random mixed test (choose chapters, number of questions, timer), score report by chapter and topic
- **Mistakes review** — all questions I got wrong, to retry
- **Flashcard review** — today's due cards across all chapters

## Gamification (motivating, not childish)

- XP for lessons, quizzes, flashcards; daily streak; mastery level per chapter (e.g. 0–100%)
- A chapter counts as "mastered" only when its quiz score ≥ 80% and all its flashcards have been reviewed
- Small satisfying animations on correct answers; nothing noisy

---

## Minimum content checklist (verify and extend from the book)

**Ch 1 – Ten Principles of Economics:** scarcity, economics, the 10 principles in 3 groups, efficiency, equality, opportunity cost, rational people, marginal change (MB vs MC, airline seat example, diamond–water paradox), incentive, market economy, invisible hand (Adam Smith), property rights, market failure, externality, market power, productivity, inflation, business cycle, short-run inflation–unemployment trade-off (Phillips curve).

**Ch 2 – Thinking Like an Economist:** scientific method, role of assumptions, economic models, circular-flow diagram, factors of production, PPF (efficient/inefficient/unattainable points, opportunity cost as slope, bowed-out shape, shift from technological advance), microeconomics vs macroeconomics, positive vs normative statements, why economists disagree. Appendix: coordinate system, ordered pair, scatterplot, positive/negative correlation, curves, slope = Δy/Δx, movement along vs shift, omitted variable, reverse causality.

**Ch 3 – Interdependence and the Gains from Trade:** production possibilities of two producers, specialization, absolute advantage, opportunity cost, comparative advantage, gains from trade, price of trade between the two opportunity costs, Adam Smith and David Ricardo, imports, exports, all numeric examples and figures.

**Ch 4 – Supply and Demand:** market, competitive market, quantity demanded, law of demand, demand schedule, demand curve, market vs individual demand, demand shifters (income: normal and inferior goods; prices of related goods: substitutes and complements; tastes; expectations; number of buyers), quantity supplied, law of supply, supply schedule, supply curve, supply shifters (input prices, technology, expectations, number of sellers), equilibrium, equilibrium price and quantity, surplus, shortage, law of supply and demand, three steps to analyze changes, shift vs movement, the table of what happens when supply and/or demand shift (including ambiguous cases).

**Ch 5 – Elasticity:** elasticity, price elasticity of demand and its determinants, computation and **midpoint method**, the 5 categories, total revenue and its relationship with elasticity, elasticity along a linear demand curve, income elasticity, cross-price elasticity, price elasticity of supply and its determinants and categories, applications (farm technology, OPEC, drug interdiction).

**Ch 6 – Government Policies:** price ceiling, price floor, binding vs non-binding, shortage/surplus, rationing mechanisms, gasoline lines case, rent control short run vs long run, minimum wage, evaluating price controls (alternatives: subsidies, EITC), tax incidence, tax on sellers vs buyers (equivalence, tax wedge), payroll tax, elasticity and tax incidence, luxury tax case, Problem 10 (QS = 2P, QD = 300 − P) solved interactively.

**Ch 7 – Consumers, Producers, and the Efficiency of Markets:** welfare economics, willingness to pay, consumer surplus (area under demand, above price), how price changes affect CS, cost, producer surplus (area above supply, below price), how price changes affect PS, total surplus = value to buyers − cost to sellers, efficiency, equality, the three insights about market efficiency, market failure, all case studies.

**Ch 8 – The Costs of Taxation:** deadweight loss, tax revenue = T × Q, how a tax affects CS/PS/revenue/total surplus, DWL = ½ × T × ΔQ, deadweight loss and gains from trade, determinants of DWL (elasticities), DWL and revenue as the tax size varies (DWL rises with the square of the tax), Laffer curve and supply-side economics, all case studies.

**Ch 9 – International Trade:** world price, domestic price, comparative advantage link, gains and losses of an exporting country, gains and losses of an importing country, tariff and its effects (including DWL), other benefits of trade, arguments for restricting trade (jobs, national security, infant industry, unfair competition, protection as a bargaining chip), trade agreements and the WTO, all case studies.

**Ch 10 – Externalities:** externality, negative and positive externalities, social cost = private cost + external cost, social value = private value + external benefit, internalizing an externality, technology spillovers, private solutions, Coase theorem, transaction costs, why private solutions do not always work, command-and-control policies, corrective (Pigovian) taxes and subsidies, tradable pollution permits, objections to the economic analysis of pollution, all case studies.

---

## How to work

1. Inventory first (Step 0). Show me the inventory summary.
2. Build the design system, layout, chapter registry and `econ.ts` with tests.
3. Build **Chapter 6** completely as the pilot (it uses the most widgets) and tell me how to run it, so I can review the style.
4. Then build Chapters 1–5 and 7–10 to the same standard.
5. Build the global pages (glossary, formula sheet, exam mode, etc.).
6. Run the coverage audit against the inventory and fix every gap.
7. Run the build and tests, check mobile layout, and give me deploy instructions.

If something in the book is unclear or a figure can't be read, tell me instead of guessing.
