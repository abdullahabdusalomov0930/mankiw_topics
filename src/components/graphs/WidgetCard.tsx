import { Sticker } from '../ui/Sticker';
import type { ReactNode } from 'react';
import { fmt } from '../../lib/econ';
import { tr } from '../../lib/lang';
import { RichText } from '../ui/RichText';
import { sx, sy, ticks, type Frame } from './plot';

/** Shared shell for the small chapter widgets: yellow title bar, optional tabs and controls, explanation footer. */
export function Card({ title, tabs, children, explain, controls, bare = false }: { title: string; tabs?: ReactNode; children: ReactNode; explain: string; controls?: ReactNode; /** children render their own explanation footer */ bare?: boolean }) {
  return (
    <figure className="card my-6 overflow-hidden">
      <div className="border-b-2 border-ink bg-marker px-4 py-3 text-[#111]">
        <figcaption className="font-display text-[14px] font-bold">
          <RichText text={title} />
        </figcaption>
      </div>
      {tabs && <div className="flex flex-wrap items-center gap-2 px-4 pt-3">{tabs}</div>}
      {children}
      {controls && <div className="grid gap-x-6 border-t-2 border-dashed border-ink/30 px-4 py-3 sm:grid-cols-2">{controls}</div>}
      {!bare && (
        <div className="border-t-2 border-ink bg-pen/[0.07] px-4 py-3">
          <div className="kicker mb-1 text-[16px]">{tr("Nimani ko'ryapsiz?", 'What are you seeing?')} <Sticker name="pencil" /></div>
          <RichText text={explain} block className="prose-uz text-[15px]" />
        </div>
      )}
    </figure>
  );
}

export function Axes({ f, x, y, money = false }: { f: Frame; x: string; y: string; money?: boolean }) {
  return (
    <g>
      {ticks(f.yMax).map((t) => (
        <g key={`y${t}`}>
          <line x1={f.ml} x2={f.W - f.mr} y1={sy(f, t)} y2={sy(f, t)} className="stroke-line" opacity={t === 0 ? 0 : 0.6} />
          <text x={f.ml - 8} y={sy(f, t) + 4} textAnchor="end" className="num fill-muted text-[11px]">
            {money ? `$${fmt(t)}` : t.toLocaleString('en-US')}
          </text>
        </g>
      ))}
      {ticks(f.xMax).map((t) => (
        <text key={`x${t}`} x={sx(f, t)} y={f.H - f.mb + 16} textAnchor="middle" className="num fill-muted text-[11px]">
          {t.toLocaleString('en-US')}
        </text>
      ))}
      <line x1={f.ml} y1={f.mt - 6} x2={f.ml} y2={f.H - f.mb} className="stroke-ink" strokeWidth={1.5} />
      <line x1={f.ml} y1={f.H - f.mb} x2={f.W - f.mr + 10} y2={f.H - f.mb} className="stroke-ink" strokeWidth={1.5} />
      <text x={f.ml + 6} y={f.mt + 2} className="fill-ink text-[12px] font-semibold">
        {y}
      </text>
      <text x={f.W - f.mr + 8} y={f.H - f.mb + 32} textAnchor="end" className="fill-ink text-[12px] font-semibold">
        {x}
      </text>
    </g>
  );
}

