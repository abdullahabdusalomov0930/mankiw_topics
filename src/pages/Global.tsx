import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { chapters, readyChapters } from '../chapterRegistry';
import { SupplyDemandGraph } from '../components/graphs/SupplyDemandGraph';
import { FlashcardDeck } from '../components/quiz/FlashcardDeck';
import { QuestionView } from '../components/quiz/QuestionView';
import { Segmented } from '../components/ui/Kit';
import { RichText } from '../components/ui/RichText';
import { glossary } from '../content/glossary';
import type { Question } from '../content/types';
import { buildDeck } from '../lib/cards';
import { useProgress } from '../lib/progress';
import { FormulaCard } from './ChapterPage';

function PageHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <header className="py-8 sm:py-10">
      <h1 className="text-3xl font-extrabold tracking-[-0.03em] sm:text-5xl">{title}</h1>
      {sub && <p className="mt-2 max-w-2xl text-muted">{sub}</p>}
    </header>
  );
}

// ---------- Glossary ----------

export function GlossaryPage() {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const [ch, setCh] = useState<string>('all');
  const norm = (s: string) => s.toLowerCase().replace(/[‘’ʻʼ`]/g, "'");
  const list = glossary.filter(
    (t) =>
      (ch === 'all' || String(t.chapter) === ch) &&
      (!q || norm(t.en).includes(norm(q)) || norm(t.uz).includes(norm(q)) || norm(t.defUz).includes(norm(q))),
  );
  const chs = [...new Set(glossary.map((t) => t.chapter))].sort((a, b) => a - b);
  return (
    <div className="mx-auto max-w-5xl px-4 pb-10">
      <PageHead title="Lug'at (Glossary)" sub="Inglizcha yoki o'zbekcha qidiring. Har bir atama kitobdagi ta'rif va o'zbekcha tushuntirish bilan." />
      <input
        value={q}
        onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {}, { replace: true })}
        placeholder="Masalan: price ceiling yoki taqchillik"
        className="w-full rounded-[0.95rem] border-2 border-ink bg-surface px-4 py-3 text-[15px] shadow-hard outline-none focus:ring-4 focus:ring-pen/30"
      />
      <div className="mt-3">
        <Segmented
          size="sm"
          value={ch}
          onChange={setCh}
          options={[{ value: 'all', label: 'Hammasi' }, ...chs.map((c) => ({ value: String(c), label: `${c}-bob` }))]}
        />
      </div>
      <p className="mt-3 text-sm text-muted">{list.length} ta atama</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {list.map((t) => (
          <div key={t.id} className="card p-4">
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-display text-lg font-bold">{t.en}</span>
              <span className="chip">{t.chapter}-bob</span>
            </div>
            <div className="font-hand text-[16px] font-semibold text-pen">{t.uz}</div>
            <p className="mt-2 text-[13px] italic text-muted">“{t.defEn}”</p>
            <RichText text={t.defUz} block className="prose-uz mt-2 text-[15px] leading-6" />
            {t.example && (
              <p className="mt-2 rounded-lg bg-surface2 p-2 text-sm">
                <b>Misol: </b>
                <RichText text={t.example} />
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- Formula sheet ----------

export function FormulasPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-10">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <PageHead title="Formulalar varag'i" sub="Barcha boblardagi formulalar bir joyda. Chop etish mumkin." />
        <button className="btn-ghost mb-8 print:hidden" onClick={() => window.print()}>
          🖨 Chop etish
        </button>
      </div>
      {readyChapters().map((c) => (
        <section key={c.number} className="mb-10 break-inside-avoid">
          <h2 className="h-section mb-3">
            {c.number}-bob · {c.titleEn}
          </h2>
          <div className="space-y-4">
            {c.formulas.map((f) => (
              <FormulaCard key={f.id} f={f} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

// ---------- Graph gallery ----------

type GalleryItem = { key: string; ch: number; title: string; render: () => JSX.Element };

export function GraphsPage() {
  const sd: GalleryItem[] = useMemo(
    () => readyChapters().flatMap((c) => (c.graphs ?? []).map((g, i) => ({ key: `${c.number}-sd-${i}`, ch: c.number, title: g.title ?? 'Grafik', render: () => <SupplyDemandGraph config={g} /> }))),
    [],
  );
  const [widgets, setWidgets] = useState<GalleryItem[]>([]);
  useEffect(() => {
    let alive = true;
    // chapter pages are separate chunks; load them all once for the gallery's own widgets
    Promise.all(chapters.filter((c) => c.loadPage).map((c) => c.loadPage!().then((m) => ({ ch: c.number, gallery: m.page.gallery ?? [] })))).then((list) => {
      if (!alive) return;
      setWidgets(list.flatMap(({ ch, gallery }) => gallery.map((g, i) => ({ key: `${ch}-w-${i}`, ch, title: g.title, render: () => <g.Component /> }))));
    });
    return () => {
      alive = false;
    };
  }, []);
  const all = [...widgets, ...sd].sort((x, y) => x.ch - y.ch);
  const [chFilter, setChFilter] = useState<number | 'all'>('all');
  const shown = all.filter((x) => chFilter === 'all' || x.ch === chFilter);
  const [pick, setPick] = useState<string | undefined>();
  const cur = all.find((x) => x.key === pick) ?? shown[0];
  return (
    <div className="mx-auto max-w-5xl px-4 pb-10">
      <PageHead title="Grafiklar galereyasi" sub="Barcha interaktiv grafiklar va laboratoriyalar, 1–10-boblar. Tanlang va o'ynab ko'ring." />
      <div className="mb-3 flex flex-wrap gap-1.5">
        {(['all', ...readyChapters().map((c) => c.number)] as const).map((n) => (
          <button key={n} className={chFilter === n ? 'btn-primary btn-sm' : 'btn-ghost btn-sm'} onClick={() => setChFilter(n)}>
            {n === 'all' ? 'Hammasi' : `${n}-bob`}
          </button>
        ))}
      </div>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((x) => (
          <button key={x.key} onClick={() => setPick(x.key)} className={`card card-lift p-3 text-left text-sm ${cur?.key === x.key ? 'bg-marker text-[#111]' : ''}`}>
            <span className="chip mr-2">{x.ch}-bob</span>
            <RichText text={x.title} />
          </button>
        ))}
      </div>
      {widgets.length === 0 && <p className="mt-4 text-sm text-muted">Laboratoriyalar yuklanmoqda…</p>}
      {cur && <div key={cur.key}>{cur.render()}</div>}
    </div>
  );
}

// ---------- Flashcard review ----------

export function ReviewPage() {
  const deck = useMemo(() => readyChapters().flatMap(buildDeck), []);
  return (
    <div className="mx-auto max-w-2xl px-4 pb-10">
      <PageHead title="Kartochkalar" sub="Bugun takrorlanishi kerak bo'lgan barcha kartochkalar (Leitner tizimi)." />
      <FlashcardDeck cards={deck} title="Barcha boblar" />
    </div>
  );
}

// ---------- Mistakes ----------

export function MistakesPage() {
  const { state } = useProgress();
  const all = useMemo(() => new Map(readyChapters().flatMap((c) => c.questions).map((q) => [q.id, q])), []);
  // keep the list stable while the learner fixes answers on this page
  const [ids] = useState(() => Object.keys(state.mistakes));
  const items = ids.map((id) => all.get(id)).filter(Boolean) as Question[];
  return (
    <div className="mx-auto max-w-3xl px-4 pb-10">
      <PageHead title="Xatolar ustida ishlash" sub="Noto'g'ri javob bergan savollaringiz. To'g'ri javob bersangiz, ro'yxatdan chiqadi." />
      {items.length === 0 ? (
        <div className="card p-8 text-center text-muted">Hozircha xato yo'q. 🎉</div>
      ) : (
        <div className="space-y-4">
          {items.map((q, i) => (
            <div key={q.id} className={state.mistakes[q.id] ? '' : 'opacity-60'}>
              <QuestionView q={q} index={i + 1} />
              {!state.mistakes[q.id] && <p className="mt-1 text-sm text-good">✓ Tuzatildi</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ---------- Exam mode ----------

export function ExamPage() {
  const { recordExam, state } = useProgress();
  const ready = readyChapters();
  const [sel, setSel] = useState<number[]>(ready.map((c) => c.number));
  const [count, setCount] = useState(10);
  const [minutes, setMinutes] = useState(15);
  const [run, setRun] = useState<{ qs: Question[]; answers: Record<string, boolean>; end: number } | null>(null);
  const [done, setDone] = useState(false);
  const [now, setNow] = useState(Date.now());
  const saved = useRef(false);

  useEffect(() => {
    if (!run || done) return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [run, done]);
  useEffect(() => {
    if (run && !done && minutes > 0 && now >= run.end) setDone(true);
  }, [now, run, done, minutes]);

  useEffect(() => {
    if (!done || !run || saved.current) return;
    saved.current = true;
    const byTopic: Record<string, { total: number; correct: number }> = {};
    for (const q of run.qs) {
      const k = `${q.chapter}-bob · ${q.topic}`;
      byTopic[k] ??= { total: 0, correct: 0 };
      byTopic[k].total++;
      if (run.answers[q.id]) byTopic[k].correct++;
    }
    recordExam({ at: Date.now(), chapters: sel, total: run.qs.length, correct: run.qs.filter((q) => run.answers[q.id]).length, byTopic });
  }, [done, run, sel, recordExam]);

  const start = () => {
    const pool = ready.filter((c) => sel.includes(c.number)).flatMap((c) => c.questions).filter((q) => q.kind !== 'graph');
    const qs = [...pool].sort(() => Math.random() - 0.5).slice(0, count);
    saved.current = false;
    setDone(false);
    setRun({ qs, answers: {}, end: Date.now() + minutes * 60_000 });
    setNow(Date.now());
  };

  if (!run) {
    return (
      <div className="mx-auto max-w-2xl px-4 pb-10">
        <PageHead title="Imtihon rejimi" sub="Tasodifiy aralash test. Javoblar va izohlar oxirida ko'rsatiladi." />
        <div className="card space-y-5 p-5">
          <div>
            <div className="kicker mb-2">Boblar</div>
            <div className="flex flex-wrap gap-2">
              {chapters.map((c) => (
                <button
                  key={c.number}
                  disabled={!c.data}
                  onClick={() => setSel((s) => (s.includes(c.number) ? s.filter((x) => x !== c.number) : [...s, c.number]))}
                  className={`btn-sm btn border ${sel.includes(c.number) ? 'border-accent bg-accent/10 text-accent' : 'border-line'}`}
                >
                  {c.number}-bob
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <label className="text-sm">
              <div className="kicker mb-1">Savollar soni</div>
              <select value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-full rounded-lg border border-line bg-surface p-2">
                {[5, 10, 15, 20, 30].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </label>
            <label className="text-sm">
              <div className="kicker mb-1">Vaqt (daqiqa)</div>
              <select value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} className="w-full rounded-lg border border-line bg-surface p-2">
                {[0, 5, 10, 15, 20, 30].map((n) => (
                  <option key={n} value={n}>
                    {n === 0 ? 'Cheklovsiz' : n}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button className="btn-primary w-full" disabled={sel.length === 0} onClick={start}>
            Boshlash
          </button>
        </div>
        {state.exams.length > 0 && (
          <div className="mt-6">
            <div className="kicker mb-2">Oldingi natijalar</div>
            <ul className="space-y-1 text-sm">
              {state.exams.slice(0, 8).map((e) => (
                <li key={e.at} className="card flex justify-between p-3">
                  <span>{new Date(e.at).toLocaleString()}</span>
                  <span className="num font-semibold">
                    {e.correct}/{e.total} ({Math.round((100 * e.correct) / Math.max(1, e.total))}%)
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  const correct = run.qs.filter((q) => run.answers[q.id]).length;
  const answered = Object.keys(run.answers).length;
  const left = Math.max(0, Math.round((run.end - now) / 1000));

  return (
    <div className="mx-auto max-w-3xl px-4 pb-10">
      <div className="sticky top-16 z-30 -mx-4 mb-4 flex items-center justify-between border-b-2 border-ink bg-bg/95 px-4 py-2 backdrop-blur">
        <span className="num text-sm">
          {answered}/{run.qs.length} javob
        </span>
        {!done && minutes > 0 && <span className={`num font-semibold ${left < 60 ? 'text-bad' : ''}`}>⏱ {Math.floor(left / 60)}:{String(left % 60).padStart(2, '0')}</span>}
        {!done ? (
          <button className="btn-primary btn-sm" onClick={() => setDone(true)}>
            Yakunlash
          </button>
        ) : (
          <button className="btn-ghost btn-sm" onClick={() => setRun(null)}>
            Yangi imtihon
          </button>
        )}
      </div>
      {done && (
        <div className="card animate-pop mb-6 p-5">
          <div className="text-2xl font-bold">
            Natija: {correct}/{run.qs.length} ({Math.round((100 * correct) / run.qs.length)}%)
          </div>
          <ExamReport qs={run.qs} answers={run.answers} />
          <p className="mt-3 text-sm text-muted">Pastda har bir savolning izohini ko'ring.</p>
        </div>
      )}
      <div className="space-y-4">
        {run.qs.map((q, i) => (
          <QuestionView
            key={`${q.id}-${done}`}
            q={q}
            index={i + 1}
            hideFeedback={!done}
            onAnswered={(ok) => !done && setRun((r) => (r ? { ...r, answers: { ...r.answers, [q.id]: ok } } : r))}
          />
        ))}
      </div>
    </div>
  );
}

function ExamReport({ qs, answers }: { qs: Question[]; answers: Record<string, boolean> }) {
  const groups = new Map<string, { t: number; c: number }>();
  for (const q of qs) {
    const k = `${q.chapter}-bob · ${q.topic}`;
    const g = groups.get(k) ?? { t: 0, c: 0 };
    g.t++;
    if (answers[q.id]) g.c++;
    groups.set(k, g);
  }
  return (
    <table className="mt-4 w-full text-sm">
      <thead>
        <tr className="text-left text-muted">
          <th className="py-1">Mavzu</th>
          <th className="py-1 text-right">Natija</th>
        </tr>
      </thead>
      <tbody>
        {[...groups].map(([k, g]) => (
          <tr key={k} className="border-t border-line">
            <td className="py-1.5">{k}</td>
            <td className={`num py-1.5 text-right font-semibold ${g.c === g.t ? 'text-good' : g.c === 0 ? 'text-bad' : ''}`}>
              {g.c}/{g.t}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
