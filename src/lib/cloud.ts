/**
 * Google sign-in and cloud storage of progress (Firebase Auth + Realtime Database).
 * Firebase is loaded on demand, so it never slows down the first page load.
 */
import type { Auth } from 'firebase/auth';
import type { Database } from 'firebase/database';

/**
 * Firebase web config. These values are public by design (they identify the project, they are not
 * secrets); the database rules in database.rules.json decide who may read and write what.
 */
const config = {
  apiKey: 'AIzaSyCNFyRUajlDDmkBcEqFTAEdtZ7E2G6KXfc',
  authDomain: 'mankiw-topics.firebaseapp.com',
  projectId: 'mankiw-topics',
  appId: '1:839113137161:web:d9da1a04879d92bc00ecd8',
  databaseURL: 'https://mankiw-topics-default-rtdb.firebaseio.com',
};

export const cloudEnabled = true;

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

/** Error code from a full-page (redirect) sign-in that just came back, if it failed. */
export async function redirectSignInError(): Promise<string | null> {
  if (!cloudEnabled) return null;
  const [{ auth }, { getRedirectResult }] = await Promise.all([load(), import('firebase/auth')]);
  try {
    await getRedirectResult(auth);
    return null;
  } catch (e) {
    return (e as { code?: string }).code ?? 'unknown';
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

/**
 * Public profile for the leaderboard: profiles/{uid} = { name, xp, updatedAt }.
 * Only the nickname and XP are shared with other learners — no email or photo.
 */
export interface Profile {
  uid: string;
  name: string;
  xp: number;
}

export const NICKNAME_MIN = 2;
export const NICKNAME_MAX = 24;

export async function loadProfile(uid: string): Promise<Profile | null> {
  const [{ db }, { ref, get }] = await Promise.all([load(), import('firebase/database')]);
  const v = (await get(ref(db, `profiles/${uid}`))).val() as { name?: string; xp?: number } | null;
  return v?.name ? { uid, name: v.name, xp: v.xp ?? 0 } : null;
}

export async function saveProfile(uid: string, name: string, xp: number): Promise<void> {
  const [{ db }, { ref, set, serverTimestamp }] = await Promise.all([load(), import('firebase/database')]);
  await set(ref(db, `profiles/${uid}`), { name, xp, updatedAt: serverTimestamp() });
}

/** The `limit` learners with the most XP, best first. */
export async function topProfiles(limit: number): Promise<Profile[]> {
  const [{ db }, { ref, get, query, orderByChild, limitToLast }] = await Promise.all([load(), import('firebase/database')]);
  const snap = await get(query(ref(db, 'profiles'), orderByChild('xp'), limitToLast(limit)));
  const out: Profile[] = [];
  snap.forEach((c) => {
    const v = c.val() as { name?: string; xp?: number };
    if (v?.name) out.push({ uid: c.key!, name: v.name, xp: v.xp ?? 0 });
  });
  return out.sort((a, b) => b.xp - a.xp);
}

/** 1-based place of someone with `xp` XP: one more than the number of learners ahead of them. */
export async function rankFor(xp: number): Promise<{ rank: number; total: number }> {
  const [{ db }, { ref, get, query, orderByChild, startAt }] = await Promise.all([load(), import('firebase/database')]);
  const [ahead, all] = await Promise.all([
    get(query(ref(db, 'profiles'), orderByChild('xp'), startAt(xp + 1))),
    get(ref(db, 'profiles')),
  ]);
  return { rank: ahead.size + 1, total: all.size };
}
