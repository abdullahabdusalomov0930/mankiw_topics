import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../lib/auth';
import { tr } from '../lib/lang';

/** Google's “G” mark, as Google's sign-in branding guidelines ask for. */
export function GoogleG({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={`${className} shrink-0`} aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

const STATUS = {
  idle: '',
  syncing: tr('Saqlanmoqda…', 'Saving…'),
  saved: tr('Progress hisobingizda saqlangan', 'Progress saved to your account'),
  error: tr('Saqlab bo‘lmadi — internetni tekshiring', 'Could not save — check your connection'),
};

export function AccountButton() {
  const { enabled, user, status, nickname, signIn, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => !box.current?.contains(e.target as Node) && setOpen(false);
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);

  if (!enabled) return null;

  if (!user)
    return (
      <button
        className="btn-ghost btn-sm flex items-center gap-1.5"
        onClick={() => void signIn()}
        title={tr('Google orqali kiring — progressingiz hamma qurilmada saqlanadi', 'Sign in with Google — your progress is saved on every device')}
      >
        <GoogleG />
        <span className="hidden sm:inline">{tr('Kirish', 'Sign in')}</span>
      </button>
    );

  const initial = (user.name || user.email || '?').trim().charAt(0).toUpperCase();
  return (
    <div className="relative" ref={box}>
      <button
        className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-ink bg-marker font-bold text-[#111]"
        onClick={() => setOpen((o) => !o)}
        aria-label={tr('Hisob', 'Account')}
        aria-expanded={open}
      >
        {user.photo ? <img src={user.photo} alt="" referrerPolicy="no-referrer" className="h-full w-full object-cover" /> : initial}
      </button>
      {status === 'error' && <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-surface bg-bad" />}
      {open && (
        <div className="card absolute right-0 top-11 z-50 w-64 p-3 text-sm">
          <div className="truncate font-semibold">{nickname || user.name}</div>
          <div className="truncate text-xs text-muted">{user.email}</div>
          <div className={`mt-2 text-xs ${status === 'error' ? 'text-bad' : 'text-muted'}`}>{STATUS[status]}</div>
          <Link to="/account" className="btn-primary btn-sm mt-3 flex w-full justify-center" onClick={() => setOpen(false)}>
            {tr('Hisobim', 'My account')}
          </Link>
          <Link to="/leaderboard" className="btn-ghost btn-sm mt-2 flex w-full justify-center" onClick={() => setOpen(false)}>
            {tr('Reyting', 'Leaderboard')}
          </Link>
          <button className="btn-ghost btn-sm mt-2 w-full" onClick={() => void signOut().then(() => setOpen(false))}>
            {tr('Chiqish', 'Sign out')}
          </button>
        </div>
      )}
    </div>
  );
}
