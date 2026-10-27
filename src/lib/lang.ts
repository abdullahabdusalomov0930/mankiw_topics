/**
 * Site language. 'uz' = explanations in Uzbek with English terms (the original mode);
 * 'en' = everything in English. The choice is read once at start-up; switching reloads the page,
 * so content modules can pick their language at import time.
 */
export type Lang = 'uz' | 'en';

function read(): Lang {
  try {
    const q = new URLSearchParams(window.location.search).get('lang');
    if (q === 'en' || q === 'uz') return q;
    return localStorage.getItem('lang') === 'en' ? 'en' : 'uz';
  } catch {
    return 'uz';
  }
}

export const lang: Lang = typeof window === 'undefined' ? 'uz' : read();
export const isEn = lang === 'en';

if (typeof document !== 'undefined') document.documentElement.lang = lang;

/** Pick the string for the current language: tr('Uzbek', 'English'). */
export function tr<T>(uz: T, en: T): T {
  return isEn ? en : uz;
}

export function setLang(next: Lang) {
  try {
    localStorage.setItem('lang', next);
  } catch {
    // ignore: the URL parameter below still switches for this visit
  }
  const url = new URL(window.location.href);
  url.searchParams.delete('lang');
  if (next === 'en') {
    try {
      if (localStorage.getItem('lang') !== 'en') url.searchParams.set('lang', 'en');
    } catch {
      url.searchParams.set('lang', 'en');
    }
  }
  window.location.replace(url.toString());
}
