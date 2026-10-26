import { chapters } from '../chapterRegistry';
import type { Term } from './types';

/** All glossary terms of the site (EN + UZ + definition + chapter), collected from the chapters. */
export const glossary: Term[] = chapters
  .flatMap((c) => [...(c.data?.terms ?? []), ...(c.earlyTerms ?? [])])
  .sort((a, b) => a.en.localeCompare(b.en));

const byId = new Map(glossary.map((t) => [t.id, t]));

if (import.meta.env.DEV && byId.size !== glossary.length) {
  console.warn('Duplicate glossary ids found');
}

export function getTerm(id: string): Term | undefined {
  return byId.get(id);
}
