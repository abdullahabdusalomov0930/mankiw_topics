import { Sticker } from './Sticker';
import type { ReactNode } from 'react';
import { PollBar } from './Kit';
import { RichText } from './RichText';

/** Link from a lesson to a case study / news box further down the page. */
export function BoxLink({ id, children }: { id: string; children: ReactNode }) {
  return (
    <a
      href={`#${id}`}
      className="my-3 flex items-center gap-2 rounded-[0.95rem] border-2 border-dashed border-ink/60 bg-surface px-3 py-2 text-sm font-semibold transition hover:border-solid hover:bg-marker hover:text-[#111]"
    >
      <Sticker name="clip" />
      <span>{children}</span>
      <span className="ml-auto">→</span>
    </a>
  );
}

/** A book table (Table 1, 2 …) with a marker-yellow header row. Cells accept rich text. */
export function BookTable({ head, rows, caption }: { head: string[]; rows: string[][]; caption?: string }) {
  return (
    <div className="not-prose card my-5 overflow-x-auto p-0">
      {caption && <div className="border-b-2 border-ink px-3 py-2 font-display text-sm font-bold">{caption}</div>}
      <table className="w-full text-sm">
        <thead className="bg-marker text-[#111]">
          <tr>
            {head.map((h, i) => (
              <th key={i} className="border-b-2 border-ink px-3 py-2 text-left font-bold">
                <RichText text={h} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-dashed border-ink/20">
              {r.map((c, j) => (
                <td key={j} className={`px-3 py-2 ${j === 0 ? 'font-semibold' : ''}`}>
                  <RichText text={c} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** "Ask the Experts" poll card (IGM Economic Experts Panel). */
export function AskExperts({
  title,
  source,
  statement,
  agree,
  uncertain,
  disagree,
  note,
}: {
  title: string;
  source: string;
  statement: string;
  agree?: number;
  uncertain?: number;
  disagree?: number;
  note?: string;
}) {
  return (
    <div className="not-prose card my-5 p-4">
      <div className="kicker">
        Ask the Experts · {title} ({source})
      </div>
      <p className="mt-2 text-[15px] italic">“{statement}”</p>
      {agree != null && uncertain != null && disagree != null && <PollBar agree={agree} uncertain={uncertain} disagree={disagree} />}
      {note && (
        <p className="mt-2 text-sm text-muted">
          <RichText text={note} />
        </p>
      )}
    </div>
  );
}

/** News box header line: author, outlet, year. */
export function Source({ children }: { children: ReactNode }) {
  return <p className="text-sm text-muted">{children}</p>;
}
