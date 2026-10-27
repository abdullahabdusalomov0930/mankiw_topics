import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { cloudEnabled, loadProgress, saveProgress, signInWithGoogle, signOutUser, watchUser, type CloudUser } from './cloud';
import { emptyProgress, mergeProgress, useProgress, type ProgressState } from './progress';

type SyncStatus = 'idle' | 'syncing' | 'saved' | 'error';

interface AuthApi {
  /** false when Firebase is not configured: the sign-in button is hidden */
  enabled: boolean;
  user: CloudUser | null;
  status: SyncStatus;
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
  const stateRef = useRef(state);
  stateRef.current = state;
  /** uid whose cloud copy has been merged in; saving waits for it so an empty state never overwrites the cloud */
  const syncedUid = useRef<string | null>(null);
  const prevUid = useRef<string | null>(null);

  useEffect(
    () =>
      watchUser(async (u) => {
        setUser(u);
        if (!u) {
          // Signed out on this device: don't leave this person's progress for the next one.
          if (prevUid.current) replace(emptyProgress);
          prevUid.current = null;
          syncedUid.current = null;
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
        } catch (e) {
          console.error('Progress sync failed', e);
          setStatus('error');
        }
      }),
    [replace],
  );

  // Save changes a moment after they happen (answers often come in bursts).
  useEffect(() => {
    const uid = user?.uid;
    if (!uid || syncedUid.current !== uid) return;
    const t = setTimeout(() => {
      setStatus('syncing');
      saveProgress(uid, stateRef.current)
        .then(() => setStatus('saved'))
        .catch((e) => {
          console.error('Progress save failed', e);
          setStatus('error');
        });
    }, 1500);
    return () => clearTimeout(t);
  }, [state, user]);

  const signIn = useCallback(async () => {
    try {
      await signInWithGoogle();
    } catch (e) {
      // closing the Google popup is not an error worth showing
      if (!String((e as { code?: string })?.code).includes('popup-closed')) {
        console.error('Sign-in failed', e);
        setStatus('error');
      }
    }
  }, []);

  const signOut = useCallback(async () => {
    const uid = user?.uid;
    if (uid && syncedUid.current === uid) await saveProgress(uid, stateRef.current).catch(() => {});
    await signOutUser();
  }, [user]);

  const api = useMemo<AuthApi>(() => ({ enabled: cloudEnabled, user, status, signIn, signOut }), [user, status, signIn, signOut]);
  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useAuth(): AuthApi {
  const v = useContext(Ctx);
  if (!v) throw new Error('useAuth outside AuthProvider');
  return v;
}
