import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import {
  cloudEnabled,
  loadProfile,
  loadProgress,
  NICKNAME_MAX,
  NICKNAME_MIN,
  redirectSignInError,
  saveProfile,
  saveProgress,
  signInWithGoogle,
  signOutUser,
  watchUser,
  type CloudUser,
} from './cloud';
import { tr } from './lang';
import { emptyProgress, mergeProgress, useProgress, type ProgressState } from './progress';

type SyncStatus = 'idle' | 'syncing' | 'saved' | 'error';

interface AuthApi {
  /** false when Firebase is not configured: the sign-in button is hidden */
  enabled: boolean;
  user: CloudUser | null;
  /** false until Firebase has said whether someone is signed in */
  ready: boolean;
  status: SyncStatus;
  /** why the last sign-in attempt failed, in the learner's language */
  error: string | null;
  /** name shown on the leaderboard (defaults to the Google name) */
  nickname: string;
  /** saves a new nickname; rejects with a readable message if it is not allowed */
  setNickname: (name: string) => Promise<void>;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

const Ctx = createContext<AuthApi | null>(null);

/**
 * Keeps the learner's progress in their Google account. On sign-in the progress in this browser
 * is merged with the cloud copy (nothing is lost), then every change is saved shortly after it happens.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const { state, replace } = useProgress();
  const [user, setUser] = useState<CloudUser | null>(null);
  const [status, setStatus] = useState<SyncStatus>('idle');
  const [ready, setReady] = useState(!cloudEnabled);
  const [error, setError] = useState<string | null>(null);
  const [nickname, setNick] = useState('');
  const nickRef = useRef('');
  /** XP last written to the public profile, to skip writes that change nothing */
  const profileXp = useRef<number | null>(null);
  const stateRef = useRef(state);
  stateRef.current = state;
  /** uid whose cloud copy has been merged in; saving waits for it so an empty state never overwrites the cloud */
  const syncedUid = useRef<string | null>(null);
  const prevUid = useRef<string | null>(null);

  useEffect(
    () =>
      watchUser(async (u) => {
        setUser(u);
        setReady(true);
        if (u) setError(null);
        if (!u) {
          // Signed out on this device: don't leave this person's progress for the next one.
          if (prevUid.current) replace(emptyProgress);
          prevUid.current = null;
          syncedUid.current = null;
          nickRef.current = '';
          setNick('');
          profileXp.current = null;
          setStatus('idle');
          return;
        }
        prevUid.current = u.uid;
        setStatus('syncing');
        try {
          const remote = await loadProgress<ProgressState>(u.uid);
          const merged = remote ? mergeProgress(stateRef.current, { ...emptyProgress, ...remote }) : stateRef.current;
          replace(merged);
          await saveProgress(u.uid, merged);
          syncedUid.current = u.uid;
          setStatus('saved');
          // The public profile is separate: if it fails (e.g. database rules not yet updated) progress still syncs.
          try {
            const profile = await loadProfile(u.uid);
            const name = profile?.name ?? defaultNickname(u);
            nickRef.current = name;
            setNick(name);
            await saveProfile(u.uid, name, merged.xp);
            profileXp.current = merged.xp;
          } catch (e) {
            console.warn('Leaderboard profile unavailable', e);
            if (!nickRef.current) setNick(defaultNickname(u));
          }
        } catch (e) {
          console.error('Progress sync failed', e);
          setStatus('error');
        }
      }),
    [replace],
  );

  // A full-page sign-in that failed reports its error only after coming back.
  useEffect(() => {
    void redirectSignInError().then((code) => code && setError(signInMessage(code)));
  }, []);

  // Save changes a moment after they happen (answers often come in bursts).
  useEffect(() => {
    const uid = user?.uid;
    if (!uid || syncedUid.current !== uid) return;
    const t = setTimeout(() => {
      setStatus('syncing');
      saveProgress(uid, stateRef.current)
        .then(() => setStatus('saved'))
        .then(() => {
          const xp = stateRef.current.xp;
          if (!nickRef.current || profileXp.current === xp) return;
          return saveProfile(uid, nickRef.current, xp).then(
            () => void (profileXp.current = xp),
            (e) => console.warn('Leaderboard update failed', e),
          );
        })
        .catch((e) => {
          console.error('Progress save failed', e);
          setStatus('error');
        });
    }, 1500);
    return () => clearTimeout(t);
  }, [state, user]);

  const signIn = useCallback(async () => {
    setError(null);
    try {
      await signInWithGoogle();
    } catch (e) {
      const code = String((e as { code?: string })?.code ?? 'unknown');
      // closing the Google window is not an error worth showing
      if (code.includes('popup-closed') || code.includes('cancelled-popup')) return;
      console.error('Sign-in failed', e);
      setError(signInMessage(code));
    }
  }, []);

  const setNickname = useCallback(
    async (raw: string) => {
      const name = raw.replace(/\s+/g, ' ').trim();
      if (name.length < NICKNAME_MIN || name.length > NICKNAME_MAX)
        throw new Error(tr(`Ism ${NICKNAME_MIN}–${NICKNAME_MAX} ta belgidan iborat bo‘lsin.`, `The name must be ${NICKNAME_MIN}–${NICKNAME_MAX} characters.`));
      if (!user) throw new Error(tr('Avval tizimga kiring.', 'Please sign in first.'));
      try {
        await saveProfile(user.uid, name, stateRef.current.xp);
      } catch {
        throw new Error(tr('Saqlab bo‘lmadi. Internetni tekshiring yoki keyinroq urinib ko‘ring.', 'Could not save. Check your connection or try again later.'));
      }
      nickRef.current = name;
      profileXp.current = stateRef.current.xp;
      setNick(name);
    },
    [user],
  );

  const signOut = useCallback(async () => {
    const uid = user?.uid;
    if (uid && syncedUid.current === uid) await saveProgress(uid, stateRef.current).catch(() => {});
    await signOutUser();
  }, [user]);

  const api = useMemo<AuthApi>(
    () => ({ enabled: cloudEnabled, user, ready, status, error, nickname, setNickname, signIn, signOut }),
    [user, ready, status, error, nickname, setNickname, signIn, signOut],
  );
  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

function defaultNickname(u: CloudUser): string {
  const fromName = u.name.trim().slice(0, NICKNAME_MAX);
  if (fromName.length >= NICKNAME_MIN) return fromName;
  return (u.email.split('@')[0] || 'Learner').slice(0, NICKNAME_MAX);
}

function signInMessage(code: string): string {
  if (code.includes('api-key-not-valid'))
    return tr('Sayt sozlamasida xato: Firebase API kaliti noto‘g‘ri (Vercel → Environment Variables).', 'Site setup error: the Firebase API key is wrong (Vercel → Environment Variables).');
  if (code.includes('unauthorized-domain'))
    return tr('Bu manzil Firebase’da ruxsat etilmagan (Authentication → Settings → Authorized domains).', 'This address is not allowed in Firebase (Authentication → Settings → Authorized domains).');
  if (code.includes('operation-not-allowed'))
    return tr('Firebase’da Google orqali kirish yoqilmagan (Authentication → Sign-in method).', 'Google sign-in is not enabled in Firebase (Authentication → Sign-in method).');
  if (code.includes('network'))
    return tr('Internet aloqasi yo‘q. Qayta urinib ko‘ring.', 'No internet connection. Please try again.');
  if (code.includes('popup-blocked'))
    return tr('Brauzer Google oynasini blokladi. Qalqib chiquvchi oynalarga ruxsat bering.', 'The browser blocked the Google window. Please allow pop-ups.');
  return tr(`Kirib bo‘lmadi (${code}). Qayta urinib ko‘ring.`, `Could not sign in (${code}). Please try again.`);
}

export function useAuth(): AuthApi {
  const v = useContext(Ctx);
  if (!v) throw new Error('useAuth outside AuthProvider');
  return v;
}
