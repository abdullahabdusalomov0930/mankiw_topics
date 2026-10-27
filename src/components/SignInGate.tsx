import type { ReactNode } from 'react';
import { useAuth } from '../lib/auth';
import { tr } from '../lib/lang';
import { GoogleG } from './AccountButton';
import { Sticker } from './ui/Sticker';

/**
 * The site is for signed-in learners only: until someone signs in with Google, this page
 * replaces the content. When Firebase is not configured it lets everything through.
 */
export function SignInGate({ children }: { children: ReactNode }) {
  const { enabled, ready, user, error, signIn } = useAuth();
  if (!enabled || user) return <>{children}</>;

  if (!ready)
    return (
      <div className="flex min-h-[60vh] items-center justify-center font-hand text-lg text-muted" role="status">
        {tr('Yuklanmoqda…', 'Loading…')}
      </div>
    );

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl items-center px-4 py-12">
      <div className="postit tape w-full -rotate-[0.6deg] bg-postit-yellow p-7 pt-9 text-[#111] sm:p-9">
        <div className="mb-2 font-hand text-lg font-semibold text-[#1f4fb8]">
          {tr('Mankiw · Principles of Economics', 'Mankiw · Principles of Economics')} <Sticker name="pencil" />
        </div>
        <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
          {tr('Davom etish uchun Google orqali kiring', 'Sign in with Google to continue')}
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed">
          {tr(
            'XP, testlar, foizlar va kartochkalar hisobingizda saqlanadi — sayt yangilansa ham, boshqa telefon yoki kompyuterdan kirsangiz ham hammasi joyida turadi.',
            'Your XP, tests, percentages and flashcards are saved to your account — they stay put when the site updates and when you sign in from another phone or computer.',
          )}
        </p>
        <button
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-[0.95rem] border-2 border-ink bg-white px-5 py-3 text-[16px] font-semibold text-[#111] shadow-[3px_3px_0_0_rgba(17,17,17,1)] transition hover:-translate-y-0.5 active:translate-y-0"
          onClick={() => void signIn()}
        >
          <GoogleG className="h-5 w-5" />
          {tr('Google bilan kirish', 'Sign in with Google')}
        </button>
        {error && (
          <div className="mt-4 rounded-[0.8rem] border-2 border-ink bg-postit-pink p-3 text-sm" role="alert">
            <Sticker name="warning" /> {error}
          </div>
        )}
        <p className="mt-4 text-xs text-[#111]/70">
          {tr('Faqat ismingiz, emailingiz va o‘quv natijalaringiz saqlanadi.', 'Only your name, email and study results are stored.')}
        </p>
      </div>
    </div>
  );
}
