import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useProgress } from '../lib/progress';
import { XPBurst } from './ui/Kit';

const NAV = [
  { to: '/', label: 'Bosh sahifa', end: true },
  { to: '/glossary', label: "Lug'at" },
  { to: '/formulas', label: 'Formulalar' },
  { to: '/graphs', label: 'Grafiklar' },
  { to: '/exam', label: 'Imtihon' },
  { to: '/mistakes', label: 'Xatolar' },
  { to: '/review', label: 'Kartochkalar' },
];

function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch {
      // ignore
    }
  }, [dark]);
  return [dark, setDark] as const;
}

export function Layout() {
  const { state, lastGain } = useProgress();
  const [dark, setDark] = useTheme();
  const [menu, setMenu] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    setMenu(false);
    if (!loc.hash) window.scrollTo(0, 0);
  }, [loc.pathname, loc.hash]);

  useEffect(() => {
    if (!loc.hash) return;
    const el = document.getElementById(decodeURIComponent(loc.hash.slice(1)));
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  }, [loc]);

  const mistakes = Object.keys(state.mistakes).length;

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b-2 border-ink bg-bg/90 backdrop-blur-md print:hidden">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4">
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="flex h-10 w-10 -rotate-3 items-center justify-center rounded-xl border-2 border-ink bg-marker shadow-hard-sm transition group-hover:rotate-0" aria-hidden>
              <svg width="22" height="22" viewBox="0 0 22 22">
                <path d="M4 5 L18 17" stroke="#1f4fb8" strokeWidth="2.6" strokeLinecap="round" />
                <path d="M4 17 L18 5" stroke="#e86828" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            </span>
            <span className="hidden font-display text-[17px] font-bold tracking-tight sm:inline">iqtisodiyot</span>
          </Link>
          <nav className="ml-4 hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) =>
                  `relative rounded-[0.7rem] border-2 px-3 py-1.5 text-sm font-semibold transition ${isActive ? 'border-ink bg-marker text-[#111]' : 'border-transparent text-ink hover:border-dashed hover:border-ink/60'}`
                }
              >
                {n.label}
                {n.to === '/mistakes' && mistakes > 0 && (
                  <span className="num ml-1 rounded-full bg-bad/15 px-1.5 text-[11px] text-bad">{mistakes}</span>
                )}
              </NavLink>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <div className="relative flex items-center gap-2 rounded-[0.95rem] border-2 border-ink bg-surface px-3 py-1.5 text-sm" title="Tajriba ballari va kunlik seriya">
              <span className="num font-semibold">{state.xp} XP</span>
              <span className="text-muted">·</span>
              <span title="Kunlik seriya (streak)">🔥 <span className="num">{state.streak.count}</span></span>
              {lastGain && <XPBurst key={lastGain.key} amount={lastGain.amount} />}
            </div>
            <button
              className="btn-ghost btn-sm h-9 w-9 !p-0"
              onClick={() => setDark((d) => !d)}
              aria-label={dark ? "Yorug' rejim" : "Qorong'i rejim"}
              title={dark ? "Yorug' rejim" : "Qorong'i rejim"}
            >
              {dark ? '☀︎' : '☾'}
            </button>
            <button className="btn-ghost btn-sm h-9 w-9 !p-0 lg:hidden" onClick={() => setMenu((m) => !m)} aria-label="Menyu" aria-expanded={menu}>
              {menu ? '✕' : '☰'}
            </button>
          </div>
        </div>
        {menu && (
          <nav className="border-t-2 border-ink bg-surface px-4 py-2 lg:hidden">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) => `block rounded-[0.7rem] px-3 py-2.5 text-[15px] font-semibold ${isActive ? 'bg-marker text-[#111]' : ''}`}
              >
                {n.label}
                {n.to === '/mistakes' && mistakes > 0 && <span className="num ml-2 text-sm text-bad">({mistakes})</span>}
              </NavLink>
            ))}
          </nav>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="mx-auto max-w-7xl px-4 py-10 text-center font-hand text-sm text-muted print:hidden">
        N. Gregory Mankiw, <i>Principles of Economics</i>, 10th ed. asosida o'quv qo'llanma. Grafiklar va matnlar qayta
        ishlangan; kitob o'rnini bosmaydi.
      </footer>
    </div>
  );
}
