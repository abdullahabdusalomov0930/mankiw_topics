/**
 * Google sign-in and cloud storage of progress (Firebase Auth + Realtime Database).
 * Configured through VITE_FIREBASE_* environment variables; without them the site runs
 * exactly as before, with progress only in localStorage. Firebase is loaded on demand,
 * so it never slows down the first page load.
 */
import type { Auth } from 'firebase/auth';
import type { Database } from 'firebase/database';

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string | undefined,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string | undefined,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string | undefined,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL as string | undefined,
};

export const cloudEnabled = Boolean(config.apiKey && config.authDomain && config.projectId && config.appId && config.databaseURL);

export interface CloudUser {
  uid: string;
  name: string;
  email: string;
  photo: string | null;
}

let services: Promise<{ auth: Auth; db: Database }> | null = null;

function load() {
  services ??= (async () => {
    const [{ initializeApp }, { getAuth }, { getDatabase }] = await Promise.all([
      import('firebase/app'),
      import('firebase/auth'),
      import('firebase/database'),
    ]);
    const app = initializeApp(config);
    return { auth: getAuth(app), db: getDatabase(app) };
  })();
  return services;
}

/** Calls `cb` now and on every sign-in / sign-out. Returns an unsubscribe function. */
export function watchUser(cb: (u: CloudUser | null) => void): () => void {
  if (!cloudEnabled) {
    cb(null);
    return () => {};
  }
  let unsub = () => {};
  let cancelled = false;
  void Promise.all([load(), import('firebase/auth')]).then(([{ auth }, { onAuthStateChanged }]) => {
    if (cancelled) return;
    unsub = onAuthStateChanged(auth, (u) =>
      cb(u ? { uid: u.uid, name: u.displayName ?? u.email ?? '', email: u.email ?? '', photo: u.photoURL } : null),
    );
  });
  return () => {
    cancelled = true;
    unsub();
  };
}

export async function signInWithGoogle(): Promise<void> {
  const [{ auth }, { GoogleAuthProvider, signInWithPopup, signInWithRedirect }] = await Promise.all([load(), import('firebase/auth')]);
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (e) {
    // Some phone browsers block popups: sign in on a full page instead.
    if ((e as { code?: string }).code === 'auth/popup-blocked') await signInWithRedirect(auth, provider);
    else throw e;
  }
}

export async function signOutUser(): Promise<void> {
  const [{ auth }, { signOut }] = await Promise.all([load(), import('firebase/auth')]);
  await signOut(auth);
}

/**
 * One record per learner: progress/{uid}. The state is stored as a JSON string so that question ids
 * with dots ("ch01.qq.4"), which Realtime Database does not allow as keys, need no escaping.
 */
export async function loadProgress<T>(uid: string): Promise<T | null> {
  const [{ db }, { ref, get }] = await Promise.all([load(), import('firebase/database')]);
  const data = (await get(ref(db, `progress/${uid}`))).val() as { json?: string } | null;
  return data?.json ? (JSON.parse(data.json) as T) : null;
}

export async function saveProgress(uid: string, state: unknown): Promise<void> {
  const [{ db }, { ref, set, serverTimestamp }] = await Promise.all([load(), import('firebase/database')]);
  await set(ref(db, `progress/${uid}`), { json: JSON.stringify(state), updatedAt: serverTimestamp() });
}
