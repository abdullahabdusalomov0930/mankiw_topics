import { Sticker } from '../components/ui/Sticker';
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getChapter } from '../chapterRegistry';
import { FlashcardDeck } from '../components/quiz/FlashcardDeck';
import { QuestionView } from '../components/quiz/QuestionView';
import { ProgressBar, Ring, Segmented, StepReveal } from '../components/ui/Kit';
import { Math as M } from '../components/ui/Math';
import { RichText } from '../components/ui/RichText';
import type { ChapterData, ChapterPageContent, Formula, Problem, Term } from '../content/types';
import { buildDeck } from '../lib/cards';
import { masteryOf } from '../lib/chapterStats';
import { isEn, tr } from '../lib/lang';
import { useProgress } from '../lib/progress';

export function ChapterPage() {
  const { n } = useParams();
  const entry = getChapter(Number(n));
  const [page, setPage] = useState<ChapterPageContent | null>(null);

  useEffect(() => {
    setPage(null);
    entry?.loadPage?.().then((m) => setPage(m.page));
  }, [entry]);

  if (!entry?.data) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">{tr('Bu bob hali tayyor emas', 'This chapter is not ready yet')}</h1>
        <p className="mt-2 text-muted">{entry ? `${tr(`${entry.number}-bob`, `Chapter ${entry.number}`)}: ${entry.titleEn}` : tr('Bunday bob topilmadi.', 'No such chapter.')}</p>
        <Link to="/" className="btn-primary mt-6">
          {tr('Bosh sahifaga', 'Back to home')}
        </Link>
      </div>
    );
  }
  if (!page) return <div className="py-24 text-center text-muted">{tr('Yuklanmoqda…', 'Loading…')}</div>;
  return <Chapter data={entry.data} page={page} />;
}

const PARTS = [
  { id: 'hook', label: tr('Hayotiy savol', 'Real-life question') },
  { id: 'goals', label: tr('Maqsadlar', 'Goals') },
  { id: 'lessons', label: tr('Darslar', 'Lessons') },
  { id: 'exam', label: tr("Imtihonda so'raladi", 'On the exam') },
  { id: 'mistakes', label: tr('Keng tarqalgan xatolar', 'Common mistakes') },
  { id: 'boxes', label: tr('Case studies va boshqalar', 'Case studies and more') },
  { id: 'terms', label: tr('Atamalar', 'Key terms') },
  { id: 'formulas', label: tr('Formulalar', 'Formulas') },
  { id: 'summary', label: tr('Bob xulosasi', 'Summary') },
  { id: 'practice', label: tr('Mashqlar', 'Practice') },
  { id: 'flashcards', label: tr('Kartochkalar', 'Flashcards') },
];

function Chapter({ data, page }: { data: ChapterData; page: ChapterPageContent }) {
  const progress = useProgress();
  const { state } = progress;
  const mastery = masteryOf(state, data);
  const deck = useMemo(() => buildDeck(data), [data]);
  const [active, setActive] = useState('hook');
  const [tocOpen, setTocOpen] = useState(false);

  if (import.meta.env.DEV) {
    const ids = page.sections.map((s) => s.id).join();
    if (ids !== data.sectionIds.join()) console.warn('sectionIds in index.ts do not match page.tsx sections');
  }

  useEffect(() => {
    document.title = `${tr(`${data.number}-bob`, `Chapter ${data.number}`)} · ${data.titleEn}`;
    const ids = [...PARTS.map((p) => p.id), ...page.sections.map((s) => s.id), ...page.boxes.map((b) => b.id)];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: '-80px 0px -60% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [data, page]);

  // Lessons load lazily, so jump to a #section link once they are on the page.
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (el) requestAnimationFrame(() => el.scrollIntoView({ block: 'start' }));
  }, [hash, page]);

  const { setLast } = progress;
  useEffect(() => {
    if (data.sectionIds.includes(active)) setLast(data.number, active);
  }, [active, data, setLast]);

  const toc = (
    <nav className="space-y-0.5 text-sm">
      {PARTS.map((p) => (
        <div key={p.id}>
          <a
            href={`#${p.id}`}
            onClick={() => setTocOpen(false)}
            className={`block rounded-[0.7rem] border-2 px-3 py-1.5 font-semibold transition ${active === p.id ? 'border-ink bg-marker text-[#111]' : 'border-transparent text-ink hover:border-dashed hover:border-ink/50'}`}
          >
            {p.label}
          </a>
          {p.id === 'lessons' &&
            page.sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setTocOpen(false)}
                className={`flex items-center gap-2 rounded-lg py-1 pl-6 pr-2 text-[13px] transition ${active === s.id ? 'font-semibold text-pen' : 'text-muted hover:text-ink'}`}
              >
                <span className="num w-9 shrink-0 text-xs">{s.code}</span>
                <span className="truncate">{tr(s.titleUz, s.titleEn)}</span>
                {progress.isRead(data.number, s.id) && <span className="ml-auto text-good">✓</span>}
              </a>
            ))}
        </div>
      ))}
    </nav>
  );

  const objective = data.questions;
  const qq = objective.filter((q) => q.source === 'quickquiz');
  const fresh = objective.filter((q) => q.source === 'new' && !q.id.includes('.check.') && q.kind !== 'graph');
  const graphs = objective.filter((q) => q.kind === 'graph');
  const review = data.problems.filter((p) => p.kind === 'review');
  const problems = data.problems.filter((p) => p.kind === 'problem');

  return (
    <div className="mx-auto max-w-7xl px-4">
      {/* header */}
      <header className="py-8 sm:py-10">
        <Link to="/" className="font-hand text-[15px] font-semibold text-pen hover:underline">
          {tr('← Boblar', '← Chapters')}
        </Link>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="kicker">
              {tr(`${data.number}-bob`, `Chapter ${data.number}`)} · {data.part}
            </div>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.03em] sm:text-5xl">{data.titleEn}</h1>
            {!isEn && <p className="mt-2 text-lg font-semibold"><span className="marker">{data.titleUz}</span></p>}
          </div>
          <div className="card flex items-center gap-4 p-4">
            <Ring value={mastery.percent} size={64} />
            <div className="space-y-1.5 text-xs">
              <MiniBar label={tr('Darslar', 'Lessons')} v={mastery.readPct} />
              <MiniBar label={tr('Savollar', 'Questions')} v={mastery.quizPct} />
              <MiniBar label={tr('Kartochkalar', 'Flashcards')} v={mastery.cardsPct} />
              {mastery.mastered ? (
                <div className="font-semibold text-good">{tr("✓ Bob o'zlashtirildi", '✓ Chapter mastered')}</div>
              ) : (
                <div className="text-muted">{tr("O'zlashtirish: savollar ≥ 80% + barcha kartochkalar", 'Mastery: questions ≥ 80% + all flashcards')}</div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* mobile TOC */}
      <div className="sticky top-16 z-30 -mx-4 border-b-2 border-ink bg-bg/95 px-4 py-2 backdrop-blur lg:hidden">
        <button className="btn-ghost btn-sm w-full justify-between" onClick={() => setTocOpen((o) => !o)}>
          <span>{tr('Mundarija', 'Contents')}</span>
          <span className="truncate text-muted">{labelFor(active, page)}</span>
          <span>{tocOpen ? '▲' : '▼'}</span>
        </button>
        {tocOpen && <div className="max-h-[60vh] overflow-y-auto py-2">{toc}</div>}
      </div>

      <div className="grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pb-6 pr-1">{toc}</div>
        </aside>

        <article className="min-w-0 max-w-4xl pb-16">
          <Part id="hook" title={tr('Hayotiy savol', 'A real-life question')} kicker="1 · Hook">
            <div className="postit tape -rotate-[0.4deg] bg-postit-yellow p-6 pt-7">
              <page.hook />
            </div>
          </Part>

          <Part id="goals" title={tr('Bu bobdan keyin siz…', 'After this chapter you will…')} kicker="2 · Learning goals">
            <ul className="grid gap-2 sm:grid-cols-2">
              {page.goals.map((g, i) => (
                <li key={i} className="flex gap-3 rounded-xl border-2 border-dashed border-ink/50 bg-surface p-3 text-[15px]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 border-ink bg-marker text-[11px] text-[#111]">✓</span>
                  <RichText text={g} />
                </li>
              ))}
            </ul>
          </Part>

          <Part id="lessons" title={tr('Darslar', 'Lessons')} kicker="3 · Lessons">
            <p className="text-sm text-muted">
              {tr(
                "Har bir bo'lim kitobdagi bo'limga mos. Grafiklarni torting, “Tekshirib ko'r” savoliga javob bering va “O'qidim” tugmasini bosing (+10 XP).",
                'Each lesson matches a section of the book. Drag the graphs, answer the “Check yourself” question and press “Done reading” (+10 XP).',
              )}
            </p>
            {page.sections.map((s) => {
              const read = progress.isRead(data.number, s.id);
              return (
                <section key={s.id} id={s.id} className="mt-12 scroll-mt-28 border-t-2 border-dashed border-ink/30 pt-10">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="num -rotate-2 rounded-lg border-2 border-ink bg-marker px-2 py-0.5 text-sm font-bold text-[#111]">{s.code}</span>
                    <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">{s.titleEn}</h3>
                  </div>
                  {!isEn && <p className="mt-1 font-hand text-[17px] font-semibold text-pen">{s.titleUz}</p>}
                  <div className="mt-4">
                    <s.Body />
                  </div>
                  {s.check && (
                    <div className="mt-6">
                      <div className="kicker mb-2">{tr("Tekshirib ko'r", 'Check yourself')}</div>
                      <QuestionView q={s.check} />
                    </div>
                  )}
                  <div className="mt-4 flex justify-end">
                    <button
                      className={read ? 'btn-ghost text-good' : 'btn-primary'}
                      disabled={read}
                      onClick={() => progress.markRead(data.number, s.id)}
                    >
                      {read ? tr("✓ O'qilgan", '✓ Read') : tr("O'qidim ✓", 'Done reading ✓')}
                    </button>
                  </div>
                </section>
              );
            })}
          </Part>

          <Part id="exam" title={tr("Imtihonda so'raladi", 'What the exam asks')} kicker="4 · Exam traps">
            <div className="grid gap-3 sm:grid-cols-2">
              {page.examTraps.map((t, i) => (
                <div key={t.title} className={`postit tape mt-3 bg-postit-yellow p-4 pt-5 ${i % 2 ? 'rotate-[0.7deg]' : '-rotate-[0.7deg]'}`}>
                  <div className="mb-1 font-hand text-[16px] font-semibold text-[#1f4fb8]"><Sticker name="target" /> {t.title}</div>
                  <RichText text={t.body} block className="prose-uz text-[15px]" />
                </div>
              ))}
            </div>
          </Part>

          <Part id="mistakes" title={tr('Keng tarqalgan xatolar', 'Common mistakes')} kicker="5 · Common mistakes">
            <div className="card divide-y-2 divide-dashed divide-ink/20 overflow-hidden">
              {page.mistakes.map((m, i) => (
                <div key={i} className="grid gap-2 p-4 sm:grid-cols-2 sm:gap-6">
                  <div className="text-[15px]">
                    <span className="mr-1 font-semibold text-bad">✗</span>
                    <RichText text={m.wrong} />
                  </div>
                  <div className="text-[15px]">
                    <span className="mr-1 font-semibold text-good">✓</span>
                    <RichText text={m.right} />
                  </div>
                </div>
              ))}
            </div>
          </Part>

          <Part id="boxes" title="Case Studies, In the News, Ask the Experts" kicker="6 · Case studies">
            {page.boxes.map((b) => (
              <section key={b.id} id={b.id} className="card mt-6 scroll-mt-28 p-5 sm:p-6">
                <span className={`inline-block -rotate-2 rounded-lg border-2 border-ink px-2.5 py-0.5 text-xs font-bold text-[#111] ${b.kind === 'Case Study' ? 'bg-postit-pink' : b.kind === 'In the News' ? 'bg-postit-blue' : 'bg-postit-green'}`}>
                  {b.kind}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight">{b.titleEn}</h3>
                {!isEn && <p className="mt-1 font-hand text-[17px] font-semibold text-pen">{b.titleUz}</p>}
                <div className="mt-4">
                  <b.Body />
                </div>
              </section>
            ))}
          </Part>

          <Part id="terms" title={tr('Asosiy atamalar (Key Concepts)', 'Key Concepts')} kicker="7 · Key terms">
            <div className="grid gap-3 sm:grid-cols-2">
              {data.terms.map((t) => (
                <TermCard key={t.id} t={t} />
              ))}
            </div>
          </Part>

          <Part id="formulas" title={tr('Formulalar', 'Formulas')} kicker="8 · Formulas">
            <div className="space-y-4">
              {data.formulas.map((f) => (
                <FormulaCard key={f.id} f={f} />
              ))}
            </div>
          </Part>

          <Part id="summary" title={tr('Bob xulosasi (Chapter in a Nutshell)', 'Chapter in a Nutshell')} kicker="9 · Summary">
            <ul className="space-y-3">
              {page.summary.map((s, i) => (
                <li key={i} className="card flex gap-3 p-4 text-[15px] leading-7">
                  <span className="font-display text-xl font-bold text-pen">{i + 1}.</span>
                  <RichText text={s} />
                </li>
              ))}
            </ul>
          </Part>

          <Part id="practice" title={tr('Mashqlar', 'Practice')} kicker="10 · Practice">
            <Practice
              tabs={[
                { id: 'qq', label: `QuickQuiz (${qq.length})`, node: <QList qs={qq} /> },
                { id: 'review', label: `Questions for Review (${review.length})`, node: <PList ps={review} widgets={page.widgets} /> },
                { id: 'problems', label: `Problems & Applications (${problems.length})`, node: <PList ps={problems} widgets={page.widgets} /> },
                { id: 'new', label: `${tr('Yangi savollar', 'New questions')} (${fresh.length})`, node: <QList qs={fresh} /> },
                { id: 'graph', label: `${tr('Grafik topshiriqlar', 'Graph tasks')} (${graphs.length})`, node: <QList qs={graphs} /> },
              ]}
            />
          </Part>

          <Part id="flashcards" title={tr('Kartochkalar', 'Flashcards')} kicker="11 · Flashcards">
            <FlashcardDeck cards={deck} title={tr(`${data.number}-bob kartochkalari`, `Chapter ${data.number} flashcards`)} />
          </Part>
        </article>
      </div>
    </div>
  );
}

function labelFor(id: string, page: ChapterPageContent) {
  return PARTS.find((p) => p.id === id)?.label ?? tr(page.sections.find((s) => s.id === id)?.titleUz, page.sections.find((s) => s.id === id)?.titleEn) ?? page.boxes.find((b) => b.id === id)?.titleEn ?? '';
}

function MiniBar({ label, v }: { label: string; v: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-20 text-muted">{label}</span>
      <ProgressBar value={v} className="w-24" />
      <span className="num w-8 text-right">{v}%</span>
    </div>
  );
}

function Part({ id, title, kicker, children }: { id: string; title: string; kicker: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 pt-10 first:pt-0">
      <div className="kicker -rotate-1">{kicker}</div>
      <h2 className="h-section mt-1">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Practice({ tabs }: { tabs: { id: string; label: string; node: ReactNode }[] }) {
  const [tab, setTab] = useState(tabs[0].id);
  return (
    <div>
      <div className="-mx-1 overflow-x-auto px-1 pb-1">
        <Segmented value={tab} onChange={setTab} options={tabs.map((t) => ({ value: t.id, label: t.label }))} />
      </div>
      <div className="mt-4">
        {tabs.map((t) => (
          <div key={t.id} hidden={t.id !== tab}>
            {t.node}
          </div>
        ))}
      </div>
    </div>
  );
}

function QList({ qs }: { qs: ChapterData['questions'] }) {
  return (
    <div className="space-y-4">
      {qs.map((q, i) => (
        <QuestionView key={q.id} q={q} index={i + 1} />
      ))}
    </div>
  );
}

function PList({ ps, widgets }: { ps: Problem[]; widgets?: ChapterPageContent['widgets'] }) {
  return (
    <div className="space-y-4">
      {ps.map((p) => {
        const W = p.widget ? widgets?.[p.widget] : undefined;
        return (
          <div key={p.id} id={p.id} className="card scroll-mt-28 p-4 sm:p-5">
            <div className="mb-2 flex items-center gap-2">
              <span className="num chip border-solid bg-marker text-[#111]">
                {p.kind === 'review' ? 'Review' : 'Problem'} {p.number}
              </span>
              {W && <span className="chip">{tr('interaktiv', 'interactive')}</span>}
            </div>
            <RichText text={p.prompt} block className="prose-uz font-medium" />
            {W && <W />}
            <StepReveal steps={p.steps} answer={p.answer} />
          </div>
        );
      })}
    </div>
  );
}

function TermCard({ t }: { t: Term }) {
  return (
    <div className="card p-4">
      <div className="font-display text-lg font-bold">{t.en}</div>
      {!isEn && <div className="mt-0.5 font-hand text-[16px] font-semibold text-pen">{t.uz}</div>}
      <p className="mt-2 text-[13px] italic leading-snug text-muted">“{t.defEn}”</p>
      <RichText text={t.defUz} block className="prose-uz mt-2 text-[15px] leading-6" />
      {t.example && (
        <p className="mt-3 rounded-lg border-[1.5px] border-dashed border-ink/40 p-2 text-sm">
          <span className="font-semibold">{tr('Misol: ', 'Example: ')}</span>
          <RichText text={t.example} />
        </p>
      )}
    </div>
  );
}

export function FormulaCard({ f }: { f: Formula }) {
  return (
    <div className="card p-4 sm:p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="font-display font-bold">{f.nameEn}</div>
        {!isEn && <div className="font-hand text-[16px] font-semibold text-pen">{f.nameUz}</div>}
      </div>
      <div className="my-3 rounded-xl border-2 border-ink bg-postit-yellow px-3 py-2 text-[#111]">
        <M tex={f.tex} display />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <div className="kicker mb-1">{tr('Belgilar', 'Symbols')}</div>
          <ul className="space-y-1 text-[15px]">
            {f.symbols.map((s) => (
              <li key={s.tex}>
                <M tex={s.tex} /> — <RichText text={s.meaning} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="kicker mb-1">{tr('Misol', 'Example')}</div>
          <RichText text={f.example.setup} block className="prose-uz text-[15px]" />
          <ol className="mt-1 list-decimal space-y-1 pl-5 text-[15px]">
            {f.example.steps.map((s, i) => (
              <li key={i}>
                <RichText text={s} />
              </li>
            ))}
          </ol>
        </div>
      </div>
      {f.note && (
        <p className="mt-3 text-sm text-muted">
          <RichText text={f.note} />
        </p>
      )}
    </div>
  );
}
