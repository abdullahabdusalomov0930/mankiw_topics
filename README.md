# Iqtisodiyot asoslari — Mankiw, *Principles of Economics* (10e)

Interactive study site for Chapters 1–10, explanations in Uzbek (Latin), terms in English.
Vite + React + TypeScript + Tailwind, KaTeX for formulas, custom SVG graphs, progress in localStorage.

## Run locally

```
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173) and open any chapter (1–10).

## Test and build

```
npm test        # unit tests for the economics math (src/lib/econ.ts)
npm run build   # static site in dist/
```

## Deploy

- **Netlify:** build command `npm run build`, publish directory `dist` (`public/_redirects` handles routes).
- **Vercel:** import the repo; framework "Vite" (`vercel.json` handles routes).
- **GitHub Pages:** build with `VITE_BASE=/<repo-name>/ npm run build` and publish `dist/` (a `404.html` copy is created so routes work).

## Structure

- `content/inventory.md` — checklist of everything in Chapters 1–10 and where it is taught.
- `src/lib/econ.ts` — pure, tested math (equilibrium, controls, taxes, elasticity, surplus, DWL, trade, externalities).
- `src/components/graphs/SupplyDemandGraph.tsx` — the main reusable widget.
- `src/content/chapters/chNN/` — one folder per chapter; see `ADDING_A_CHAPTER.md`.
- `src/chapterRegistry.ts` — list of chapters.
