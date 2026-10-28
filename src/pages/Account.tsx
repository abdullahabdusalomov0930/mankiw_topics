import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { readyChapters } from '../chapterRegistry';
import { Sticker } from '../components/ui/Sticker';
import { useAuth } from '../lib/auth';
import { NICKNAME_MAX, rankFor, topProfiles, type Profile } from '../lib/cloud';
import { masteryOf } from '../lib/chapterStats';
import { tr } from '../lib/lang';
import { useProgress } from '../lib/progress';
import { PageHead } from './Global';

function Avatar({ name, photo, size = 'h-16 w-16 text-2xl' }: { name: string; photo?: string | null; size?: string }) {
  return (
    <div className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-ink bg-marker font-bold text-[#111] ${size}`}>
      {photo ? <img src={photo} alt="" referrerPolicy="no-referrer" className="h-full w-full object-cover" /> : (name.trim().charAt(0) || '?').toUpperCase()}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="card p-4">
      <div className="font-hand text-sm font-semibold text-pen">{label}</div>
      <div className="num mt-1 font-display text-2xl font-bold">{value}</div>
    </div>
  );
}

/** Where the learner stands on the leaderboard; null while loading or if the board is unavailable. */
function useRank(xp: number) {
  const [rank, setRank] = useState<{ rank: number; total: number } | null>(null);
  useEffect(() => {
    let live = true;
    rankFor(xp).then(
      (r) => live && setRank(r),
      () => live && setRank(null),
    );
    return () => {
      live = false;
    };
  }, [xp]);
  return rank;
}

// ---------- Account ----------

export function AccountPage() {
  const { user, nickname, setNickname, signOut, status } = useAuth();
  const { state } = useProgress();
  const [draft, setDraft] = useState(nickname);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [saving, setSaving] = useState(false);
  const rank = useRank(state.xp);
  useEffect(() => setDraft(nickname), [nickname]);

  const chapters = readyChapters();
  const mastered = useMemo(() => chapters.filter((c) => masteryOf(state, c).mastered).length, [chapters, state]);
  const answered = Object.keys(state.answers).length;
  const correct = Object.values(state.answers).filter((a) => a.correct).length;

  if (!user) return null;

  const save = async () => {
    setSaving(true);
    setMsg(null);
    try {
      await setNickname(draft);
      setMsg({ ok: true, text: tr('Saqlandi! Reytingda yangi ismingiz ko‘rinadi.', 'Saved! Your new name now shows on the leaderboard.') });
    } catch (e) {
      setMsg({ ok: false, text: (e as Error).message });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 pb-10">
      <PageHead title={tr('Hisobim', 'My account')} sub={tr('Ismingizni o‘zgartiring va natijalaringizni ko‘ring.', 'Change your name and see your results.')} />

      <div className="card flex flex-wrap items-center gap-4 p-5">
        <Avatar name={nickname || user.name} photo={user.photo} />
        <div className="min-w-0 flex-1">
          <div className="truncate font-display text-xl font-bold">{nickname || user.name}</div>
          <div className="truncate text-sm text-muted">{user.email}</div>
          <div className="mt-1 text-xs text-muted">
            {status === 'error'
              ? tr('Saqlab bo‘lmadi — internetni tekshiring', 'Could not save — check your connection')
              : tr('Progress hisobingizda saqlanadi', 'Progress is saved to your account')}
          </div>
        </div>
        <button className="btn-ghost btn-sm" onClick={() => void signOut()}>
          {tr('Chiqish', 'Sign out')}
        </button>
      </div>

      <section className="card mt-5 p-5">
        <label htmlFor="nickname" className="font-hand text-lg font-semibold text-pen">
          {tr('Reytingdagi ismingiz (nickname)', 'Your name on the leaderboard (nickname)')} <Sticker name="pencil" />
        </label>
        <div className="mt-2 flex flex-wrap gap-2">
          <input
            id="nickname"
            value={draft}
            maxLength={NICKNAME_MAX}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && void save()}
            className="min-w-0 flex-1 rounded-[0.95rem] border-2 border-ink bg-surface px-3 py-2 text-[15px] outline-none focus:ring-4 focus:ring-pen/30"
          />
          <button className="btn-primary" disabled={saving || draft.trim() === nickname} onClick={() => void save()}>
            {saving ? tr('Saqlanmoqda…', 'Saving…') : tr('Saqlash', 'Save')}
          </button>
        </div>
        <p className="mt-2 text-xs text-muted">
          {tr('Boshqa o‘quvchilar faqat shu ismni va XP ingizni ko‘radi. Emailingiz ko‘rinmaydi.', 'Other learners see only this name and your XP. Your email is never shown.')}
        </p>
        {msg && (
          <div className={`mt-3 rounded-[0.8rem] border-2 border-ink p-3 text-sm text-[#111] ${msg.ok ? 'bg-postit-green' : 'bg-postit-pink'}`} role="status">
            {msg.text}
          </div>
        )}
      </section>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="XP" value={state.xp} />
        <Stat
          label={tr('Reytingdagi o‘rin', 'Leaderboard place')}
          value={
            <>
              <Sticker name="trophy" /> {rank ? `${rank.rank}/${rank.total}` : '—'}
            </>
          }
        />
        <Stat
          label={tr('Kunlik seriya', 'Daily streak')}
          value={
            <>
              <Sticker name="fire" /> {state.streak.count}
            </>
          }
        />
        <Stat label={tr('O‘zlashtirilgan boblar', 'Chapters mastered')} value={`${mastered}/${chapters.length}`} />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <Stat label={tr('Javob berilgan savollar', 'Questions answered')} value={answered} />
        <Stat label={tr('To‘g‘ri javoblar', 'Correct answers')} value={answered ? `${correct} (${Math.round((100 * correct) / answered)}%)` : '0'} />
      </div>

      <Link to="/leaderboard" className="btn-primary mt-6 inline-flex items-center gap-2">
        <Sticker name="trophy" /> {tr('Reytingni ko‘rish', 'See the leaderboard')}
      </Link>
    </div>
  );
}

// ---------- Leaderboard ----------

const MEDAL = ['bg-[#ffd84d]', 'bg-[#d9dde3]', 'bg-[#e8b27d]'];

export function LeaderboardPage() {
  const { user, nickname } = useAuth();
  const { state } = useProgress();
  const [rows, setRows] = useState<Profile[] | null>(null);
  const [failed, setFailed] = useState(false);
  const rank = useRank(state.xp);

  useEffect(() => {
    let live = true;
    topProfiles(50).then(
      (r) => live && setRows(r),
      () => live && setFailed(true),
    );
    return () => {
      live = false;
    };
  }, [state.xp]);

  const meInTop = rows?.some((r) => r.uid === user?.uid);

  return (
    <div className="mx-auto max-w-2xl px-4 pb-10">
      <PageHead
        title={tr('Reyting', 'Leaderboard')}
        sub={tr('Saytga Google orqali kirgan hamma o‘quvchilar XP bo‘yicha. Dars o‘qish, savollar va kartochkalar XP beradi.', 'Everyone who signed in with Google, ranked by XP. Reading lessons, answering questions and reviewing cards earn XP.')}
      />
      {failed ? (
        <div className="card p-6 text-center text-muted">{tr('Reytingni yuklab bo‘lmadi. Keyinroq qayta urinib ko‘ring.', 'Could not load the leaderboard. Please try again later.')}</div>
      ) : !rows ? (
        <div className="card p-6 text-center font-hand text-lg text-muted">{tr('Yuklanmoqda…', 'Loading…')}</div>
      ) : (
        <ol className="space-y-2">
          {rows.map((r, i) => {
            const me = r.uid === user?.uid;
            return (
              <li
                key={r.uid}
                className={`flex items-center gap-3 rounded-[0.95rem] border-2 p-3 ${me ? 'border-ink bg-marker/60 text-[#111]' : 'border-ink/25 bg-surface'}`}
              >
                <span className={`num flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink text-sm font-bold text-[#111] ${MEDAL[i] ?? 'bg-surface2'}`}>
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1 truncate font-semibold">
                  {me ? nickname || r.name : r.name}
                  {me && <span className="ml-2 text-xs font-medium opacity-70">({tr('siz', 'you')})</span>}
                </span>
                <span className="num font-bold">{r.xp} XP</span>
              </li>
            );
          })}
          {rows.length === 0 && <li className="card p-6 text-center text-muted">{tr('Hali hech kim yo‘q.', 'Nobody here yet.')}</li>}
          {!meInTop && rank && (
            <li className="flex items-center gap-3 rounded-[0.95rem] border-2 border-dashed border-ink bg-marker/40 p-3 text-[#111]">
              <span className="num flex h-9 min-w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-surface px-1 text-sm font-bold">{rank.rank}</span>
              <span className="min-w-0 flex-1 truncate font-semibold">
                {nickname} <span className="ml-1 text-xs font-medium opacity-70">({tr('siz', 'you')})</span>
              </span>
              <span className="num font-bold">{state.xp} XP</span>
            </li>
          )}
        </ol>
      )}
    </div>
  );
}
