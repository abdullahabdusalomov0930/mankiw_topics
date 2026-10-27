import { chapters } from '../chapterRegistry';
import type { Term } from './types';

let cache: { list: Term[]; byId: Map<string, Term> } | undefined;

function build() {
  if (cache && cache.list.length) return cache;
  const list = chapters.flatMap((c) => c.data?.terms ?? []).sort((a, b) => a.en.localeCompare(b.en));
  const byId = new Map(list.map((t) => [t.id, t]));
  if (import.meta.env.DEV && byId.size !== list.length) console.warn('Duplicate glossary ids found');
  cache = { list, byId };
  return cache;
}

/** All glossary terms of the site (EN + UZ + definition + chapter), collected from the loaded chapters. */
export function getGlossary(): Term[] {
  return build().list;
}

export function getTerm(id: string): Term | undefined {
  return build().byId.get(id);
}
