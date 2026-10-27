import { describe, expect, it } from 'vitest';
import type { ChapterData } from './types';

/**
 * In the full-English mode no Uzbek text may reach the learner. This test loads every chapter's
 * data with the language set to English and looks for Uzbek words in all its strings
 * (except the fields that hold the Uzbek names on purpose).
 */
const UZBEK = /[a-z][‘’ʻ'](?=[a-z])(?<=\b[og][‘’ʻ'])|\b[a-z]*[a-pr-z]q[aeio][a-z]*\b|\b(va|bilan|uchun|emas|lekin|yoki|kerak|bo['‘’]l\w*|qiladi|narx\w*|talab\w*|taklif\w*|soliq\w*|miqdor\w*|xarajat\w*|foyda\w*|daromad\w*|hamma|faqat|chunki|agar|bob|misol|savol|javob|kitobda|yil|ta'sir|da|ta|ga|dan|ni|ning|gacha|yo['‘’]q|ishchi\w*|bozor\w*|kam|ko['‘’]p|oladi|qiladi|beradi|bo['‘’]lsa)\b/i;
const KEEP = new Set(['uz', 'titleUz', 'nameUz', 'xUz', 'yUz', 'unit']);

function strings(v: unknown, path: string, out: [string, string][]) {
  if (typeof v === 'string') out.push([path, v]);
  else if (Array.isArray(v)) v.forEach((x, i) => strings(x, `${path}[${i}]`, out));
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (!KEEP.has(k)) strings(x, `${path}.${k}`, out);
}

describe('English mode has no Uzbek text', async () => {
  (globalThis as { window?: unknown }).window = { location: { search: '?lang=en' } };
  const { isEn } = await import('../lib/lang');
  const mods = import.meta.glob('./chapters/ch*/index.ts');
  const chapters = (await Promise.all(Object.values(mods).map((m) => m()))).map((m) => Object.values(m as Record<string, ChapterData>)[0]);
  it('language is English', () => expect(isEn).toBe(true));
  for (const ch of chapters.sort((a, b) => a.number - b.number)) {
    it(`chapter ${ch.number}`, () => {
      const out: [string, string][] = [];
      strings(ch, `ch${ch.number}`, out);
      const bad = out.filter(([, s]) => UZBEK.test(s.replace(/\[\[[^\]]*\]\]/g, '')));
      expect(bad.map(([p, s]) => `${p}: ${s.slice(0, 80)}`)).toEqual([]);
    });
  }
});
