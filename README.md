# Iqtisodiyot asoslari — Mankiw, *Principles of Economics* (10e)

Interactive study site for Chapters 1–20 with two language modes, switched with the **EN+UZ / EN** toggle in the header:

- **EN+UZ** (default) — explanations in Uzbek (Latin), terms in English.
- **EN** — everything in English. Also reachable with `?lang=en`; the choice is remembered in localStorage.

Vite + React + TypeScript + Tailwind, KaTeX for formulas, custom SVG graphs, progress in localStorage.

## Run locally

```
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173) and open any chapter (1–20).

## Test and build

```
npm test        # unit tests for the economics math (src/lib/econ.ts)
npm run build   # static site in dist/
```

## Google sign-in (progress in the cloud)

Learners can sign in with Google; their XP, answers, flashcards and exam results are then stored in
Firebase Realtime Database (`progress/{uid}`) and follow them to any device. Progress made before signing in is merged in.
The site can only be used after signing in. The Firebase web config lives in `src/lib/cloud.ts`
(it is public by design; access is controlled by `database.rules.json`).

1. [console.firebase.google.com](https://console.firebase.google.com) → **Add project**.
2. **Build → Authentication → Get started → Sign-in method → Google → Enable**.
3. **Authentication → Settings → Authorized domains → Add domain**: `mankiw-topics.vercel.app`.
4. **Build → Realtime Database → Create database** (locked mode), then **Rules**: paste `database.rules.json` → **Publish**.
5. **Project settings → Your apps → Web (`</>`)** → register an app → put `apiKey`, `authDomain`, `projectId`, `appId`,
   `databaseURL` into `config` in `src/lib/cloud.ts`.

## Deploy

- **Netlify:** build command `npm run build`, publish directory `dist` (`public/_redirects` handles routes).
- **Vercel:** import the repo; framework "Vite" (`vercel.json` handles routes).
- **GitHub Pages:** build with `VITE_BASE=/<repo-name>/ npm run build` and publish `dist/` (a `404.html` copy is created so routes work).

## Structure

- `content/inventory.md` — checklist of everything in Chapters 1–20 and where it is taught.
- `src/lib/econ.ts` — pure, tested math (equilibrium, controls, taxes, elasticity, surplus, DWL, trade, externalities).
- `src/components/graphs/SupplyDemandGraph.tsx` — the main reusable widget.
- `src/content/chapters/chNN/` — one folder per chapter; see `ADDING_A_CHAPTER.md`.
- `src/chapterRegistry.ts` — list of chapters; in English mode it loads `chNN/en/page.tsx` instead of `chNN/page.tsx`.
- `src/lib/lang.ts` — the language switch; data files write bilingual strings as `tr('uzbek', 'english')`.
- `src/content/english.test.ts` — fails if any Uzbek text reaches the English mode.
