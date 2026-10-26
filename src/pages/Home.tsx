import { Link } from 'react-router-dom';
import { chapters, readyChapters } from '../chapterRegistry';
import { Ring } from '../components/ui/Kit';
import { buildDeck } from '../lib/cards';
import { masteryOf } from '../lib/chapterStats';
import { useProgress } from '../lib/progress';

export function Home() {
  const { state, isDue } = useProgress();
  const ready = readyChapters();
  const dueCards = ready.flatMap(buildDeck).filter((c) => isDue(c.id)).length;
  const mistakes = Object.keys(state.mistakes).length;
  const last = state.last ? chapters.find((c) => c.number === state.last!.chapter) : undefined;

  return (
    <div className="mx-auto max-w-6xl px-4 pb-10">
      <section className="grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div>
          <div className="kicker flex -rotate-2 items-center gap-2 text-xl sm:text-[1.4rem]">
            Bugungi dars: narx shifti va soliqlar <span aria-hidden>✎</span>
          </div>
          <h1 className="mt-4 text-[2.6rem] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-6xl">
            Iqtisodiyotni <span className="marker">o'ynab</span> o'rganing
          </h1>
          <p className="mt-5 text-[17px] font-semibold">Mankiw, Principles of Economics (10e) · 1–10-boblar.</p>
          <p className="mt-2 max-w-xl text-[16px] leading-7 text-muted">
            Har bir grafikni o'zingiz torting, atamalarni inglizcha va o'zbekcha yodlang, kitobning barcha QuickQuiz va
            masalalarini bosqichma-bosqich yeching. Imtihon ingliz tilida — tushuntirish o'zbekcha.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {last?.data ? (
              <Link to={`/chapter/${last.number}${state.last?.section ? `#${state.last.section}` : ''}`} className="btn-primary px-5 py-3 text-base">
                Davom ettirish: {last.number}-bob →
              </Link>
            ) : (
              <Link to="/chapter/6" className="btn-primary px-5 py-3 text-base">
                6-bobdan boshlash →
              </Link>
            )}
            <Link to="/review" className="btn-ghost px-5 py-3 text-base">
              Kartochkalar <span className="num chip">{dueCards}</span>
            </Link>
            {mistakes > 0 && (
              <Link to="/mistakes" className="btn-ghost px-5 py-3 text-base">
                Xatolar <span className="num chip">{mistakes}</span>
              </Link>
            )}
          </div>
        </div>

        <div className="relative mx-auto hidden h-[25rem] w-full max-w-sm sm:block">
          <svg className="absolute -left-16 top-24 hidden text-pen lg:block" width="80" height="70" viewBox="0 0 80 70" fill="none" aria-hidden>
            <path d="M4 8 C 30 0, 60 20, 64 56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M54 48 L64 58 L72 46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <Link to="/chapter/6#s-6-1a" className="postit tape absolute left-0 top-4 w-60 -rotate-3 bg-postit-yellow p-5 transition hover:rotate-0">
            <div className="font-hand text-sm font-semibold text-[#1f4fb8]">6-bob · Grafik</div>
            <div className="mt-1 font-display text-lg font-bold leading-snug">Price ceiling — taqchillik</div>
            <div className="mt-2 text-sm text-[#4f4f4f]">$2 shift → 50 dona shortage</div>
          </Link>
          <Link to="/glossary" className="postit tape absolute right-0 top-36 w-56 rotate-2 bg-postit-pink p-5 transition hover:rotate-0">
            <div className="font-hand text-sm font-semibold text-[#1f4fb8]">Lug'at · EN ↔ UZ</div>
            <div className="mt-1 font-display text-lg font-bold leading-snug">tax incidence</div>
            <div className="mt-2 text-sm text-[#4f4f4f]">soliq yukining taqsimlanishi</div>
          </Link>
          <Link to="/exam" className="postit tape absolute bottom-0 left-6 w-56 -rotate-1 bg-postit-blue p-5 transition hover:rotate-0">
            <div className="font-hand text-sm font-semibold text-[#1f4fb8]">Imtihon rejimi</div>
            <div className="mt-1 font-display text-lg font-bold leading-snug">Tasodifiy test + taymer</div>
            <div className="mt-2 text-sm text-[#4f4f4f]">mavzular bo'yicha hisobot</div>
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Tajriba (XP)" value={state.xp} />
        <Stat label="Kunlik seriya" value={`🔥 ${state.streak.count}`} />
        <Stat label="Takrorlash kerak" value={dueCards} hint="kartochka" />
        <Stat label="Ochiq xatolar" value={mistakes} hint="savol" />
      </section>

      <h2 className="h-section mt-14">
        Kitob — <span className="marker">10 ta bob</span>
      </h2>
      <p className="mt-1 text-sm text-muted">
        Bob “o'zlashtirilgan” hisoblanadi, agar savollarning kamida 80% iga to'g'ri javob bergan va barcha kartochkalarni
        takrorlagan bo'lsangiz.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {chapters.map((c) => {
          const m = c.data ? masteryOf(state, c.data) : null;
          const body = (
            <>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="kicker">
                    {c.number}-bob · {c.part.split('·')[1]?.trim()}
                  </div>
                  <div className="mt-1 font-display text-[17px] font-bold leading-snug">{c.titleEn}</div>
                  <div className="mt-0.5 text-sm text-muted">{c.titleUz}</div>
                </div>
                {m ? <Ring value={m.percent} /> : <span className="chip shrink-0">Tez orada</span>}
              </div>
              {m && (
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="chip">Darslar {m.readPct}%</span>
                  <span className="chip">Savollar {m.quizPct}%</span>
                  <span className="chip">Kartochkalar {m.cardsPct}%</span>
                  {m.mastered && <span className="chip border-solid bg-postit-green text-[#111]">✓ O'zlashtirildi</span>}
                </div>
              )}
            </>
          );
          return c.data ? (
            <Link key={c.number} to={`/chapter/${c.number}`} className="card card-lift block p-5">
              {body}
            </Link>
          ) : (
            <div key={c.number} className="rounded-[1.125rem] border-2 border-dashed border-ink/40 bg-surface/70 p-5">
              {body}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Stat({ label, value, hint }: { label: string; value: string | number; hint?: string }) {
  return (
    <div className="card p-4">
      <div className="font-hand text-sm font-semibold text-pen">{label}</div>
      <div className="num mt-1 font-display text-2xl font-bold">
        {value}
        {hint && <span className="ml-1 text-xs font-medium text-muted">{hint}</span>}
      </div>
    </div>
  );
}
