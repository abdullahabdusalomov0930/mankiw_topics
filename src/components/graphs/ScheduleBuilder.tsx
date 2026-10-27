import { Fragment, useMemo, useState } from 'react';
import { fmt, scheduleEquilibrium, sumSchedules } from '../../lib/econ';
import { RichText } from '../ui/RichText';
import { makeFrame, sx, sy, ticks } from './plot';
import { useWidth } from './useWidth';
import { tr } from '../../lib/lang';

export interface ScheduleGroup {
  role: 'demand' | 'supply';
  /** label of the summed column, e.g. "Market demand" */
  label: string;
  people: { name: string; q: number[] }[];
}

export interface ScheduleConfig {
  title: string;
  prices: number[];
  groups: ScheduleGroup[];
  editable?: boolean;
  unit?: string;
  priceLabel?: string;
  qLabel?: string;
  /** extra rows of people that can be switched on (Problem 11: new students) */
  optional?: { label: string; groupIndex: number; person: { name: string; q: number[] } };
}

const DEMAND_SHADES = ['rgb(var(--tax))', 'rgb(var(--good))', 'rgb(var(--warn))'];
const SUPPLY_SHADES = ['rgb(var(--warn))', 'rgb(var(--bad))', 'rgb(var(--tax))'];

/**
 * Schedule tables with their curves: individual schedules are summed horizontally into
 * the market schedule (Ch. 4 Figures 1, 2, 5, 6). With a demand and a supply group it also
 * finds the equilibrium and marks shortages and surpluses row by row (Figure 9, Problems 8 and 11).
 */
export function ScheduleBuilder({ config }: { config: ScheduleConfig }) {
  const [groups, setGroups] = useState(config.groups);
  const [extra, setExtra] = useState(false);
  const [hover, setHover] = useState<number | null>(null);
  const [wrapRef, width] = useWidth<HTMLDivElement>();

  const effective = useMemo(() => {
    if (!extra || !config.optional) return groups;
    return groups.map((g, i) => (i === config.optional!.groupIndex ? { ...g, people: [...g.people, config.optional!.person] } : g));
  }, [groups, extra, config.optional]);

  const totals = effective.map((g) => sumSchedules(g.people.map((p) => p.q)));
  const dIdx = effective.findIndex((g) => g.role === 'demand');
  const sIdx = effective.findIndex((g) => g.role === 'supply');
  const both = dIdx >= 0 && sIdx >= 0;
  const eq = both ? scheduleEquilibrium(config.prices, totals[dIdx], totals[sIdx]) : null;
  const multi = effective.some((g) => g.people.length > 1);

  const maxQ = Math.max(1, ...totals.flat(), ...effective.flatMap((g) => g.people.flatMap((p) => p.q)));
  const maxP = Math.max(...config.prices);
  const f = makeFrame(width, niceMax(maxQ), niceMax(maxP), 0.62);

  const edit = (gi: number, pi: number, row: number, v: number) =>
    setGroups((gs) =>
      gs.map((g, i) =>
        i !== gi ? g : { ...g, people: g.people.map((p, j) => (j !== pi ? p : { ...p, q: p.q.map((x, r) => (r === row ? v : x)) })) },
      ),
    );

  const series: { pts: [number, number][]; color: string; width: number; dash?: string; label: string }[] = [];
  effective.forEach((g, gi) => {
    const shades = g.role === 'demand' ? DEMAND_SHADES : SUPPLY_SHADES;
    if (multi)
      g.people.forEach((p, pi) =>
        series.push({ pts: config.prices.map((P, r) => [p.q[r], P]), color: shades[pi % shades.length], width: 1.8, dash: '5 4', label: p.name }),
      );
    series.push({
      pts: config.prices.map((P, r) => [totals[gi][r], P]),
      color: g.role === 'demand' ? 'rgb(var(--demand))' : 'rgb(var(--supply))',
      width: 3.2,
      label: g.label,
    });
  });

  const yT = ticks(f.yMax);
  const xT = ticks(f.xMax);

  return (
    <figure className="card my-6 overflow-hidden">
      <div className="border-b-2 border-ink bg-marker px-4 py-3 text-[#111]">
        <figcaption className="font-display text-[14px] font-bold">
          <RichText text={config.title} />
        </figcaption>
      </div>
      <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="overflow-x-auto p-3">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="px-2 py-1.5 font-semibold">{config.priceLabel ?? 'Price'}</th>
                {effective.map((g, gi) => (
                  <Fragment key={gi}>
                    {multi &&
                      g.people.map((p) => (
                        <th key={`${gi}-${p.name}`} className="px-2 py-1.5 font-semibold text-muted">
                          {p.name}
                        </th>
                      ))}
                    <th key={`t${gi}`} className={`px-2 py-1.5 font-bold ${g.role === 'demand' ? 'text-demand' : 'text-supply'}`}>
                      {g.label}
                    </th>
                  </Fragment>
                ))}
                {both && <th className="px-2 py-1.5 font-semibold">Holat</th>}
              </tr>
            </thead>
            <tbody>
              {config.prices.map((P, r) => {
                const gap = both ? totals[dIdx][r] - totals[sIdx][r] : 0;
                const isEq = both && gap === 0;
                return (
                  <tr
                    key={P}
                    onMouseEnter={() => setHover(r)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => setHover(r)}
                    className={`border-t border-dashed border-ink/20 ${hover === r ? 'bg-marker/30' : ''} ${isEq ? 'font-bold' : ''}`}
                  >
                    <td className="num px-2 py-1.5">${fmt(P)}</td>
                    {effective.map((g, gi) => (
                      <Fragment key={gi}>
                        {multi &&
                          g.people.map((p, pi) => (
                            <td key={`${gi}-${pi}`} className="num px-2 py-1">
                              {config.editable && groups[gi]?.people[pi] ? (
                                <input
                                  inputMode="numeric"
                                  value={p.q[r]}
                                  onChange={(e) => edit(gi, pi, r, Math.max(0, Number(e.target.value.replace(/\D/g, '')) || 0))}
                                  className="num w-14 rounded-md border-[1.5px] border-ink/40 bg-surface px-1.5 py-0.5"
                                  aria-label={`${p.name}, $${P}`}
                                />
                              ) : (
                                p.q[r].toLocaleString('en-US')
                              )}
                            </td>
                          ))}
                        <td key={`t${gi}`} className={`num px-2 py-1.5 font-semibold ${g.role === 'demand' ? 'text-demand' : 'text-supply'}`}>
                          {totals[gi][r].toLocaleString('en-US')}
                        </td>
                      </Fragment>
                    ))}
                    {both && (
                      <td className={`px-2 py-1.5 text-xs font-semibold ${isEq ? 'text-good' : 'text-bad'}`}>
                        {isEq ? 'Muvozanat ✓' : gap > 0 ? `Shortage ${gap.toLocaleString('en-US')}` : `Surplus ${(-gap).toLocaleString('en-US')}`}
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {config.optional && (
            <label className="mt-3 flex items-center gap-2 text-sm font-medium">
              <input type="checkbox" checked={extra} onChange={(e) => setExtra(e.target.checked)} className="h-4 w-4 accent-[rgb(var(--pen))]" />
              {config.optional.label}
            </label>
          )}
          {config.editable && <p className="mt-2 font-hand text-sm font-semibold text-pen">{tr("Raqamlarni o'zgartirib ko'ring — bozor ustuni va grafik darhol yangilanadi ✎", 'Change the numbers — the market column and the graph update at once ✎')}</p>}
        </div>
        <div ref={wrapRef} className="min-w-0 border-t-2 border-dashed border-ink/30 p-1 md:border-l-2 md:border-t-0">
          <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label={config.title}>
            {yT.map((t) => (
              <g key={`y${t}`}>
                <line x1={f.ml} x2={f.W - f.mr} y1={sy(f, t)} y2={sy(f, t)} className="stroke-line" opacity={t === 0 ? 0 : 0.6} />
                <text x={f.ml - 8} y={sy(f, t) + 4} textAnchor="end" className="num fill-muted text-[11px]">
                  ${fmt(t)}
                </text>
              </g>
            ))}
            {xT.map((t) => (
              <text key={`x${t}`} x={sx(f, t)} y={f.H - f.mb + 16} textAnchor="middle" className="num fill-muted text-[11px]">
                {t.toLocaleString('en-US')}
              </text>
            ))}
            <line x1={f.ml} y1={f.mt - 6} x2={f.ml} y2={f.H - f.mb} className="stroke-ink" strokeWidth={1.5} />
            <line x1={f.ml} y1={f.H - f.mb} x2={f.W - f.mr + 10} y2={f.H - f.mb} className="stroke-ink" strokeWidth={1.5} />
            <text x={f.ml + 6} y={f.mt + 2} className="fill-ink text-[12px] font-semibold">
              {config.priceLabel ?? 'Price'}
            </text>
            <text x={f.W - f.mr + 8} y={f.H - f.mb + 32} textAnchor="end" className="fill-ink text-[12px] font-semibold">
              {config.qLabel ?? 'Quantity'}
            </text>
            {series.map((s) => (
              <g key={s.label}>
                <polyline
                  points={s.pts.map(([q, p]) => `${sx(f, q)},${sy(f, p)}`).join(' ')}
                  fill="none"
                  stroke={s.color}
                  strokeWidth={s.width}
                  strokeDasharray={s.dash}
                  strokeLinejoin="round"
                />
                {s.width > 2 && s.pts.map(([q, p], i) => <circle key={i} cx={sx(f, q)} cy={sy(f, p)} r={3} fill={s.color} />)}
                {(() => {
                  const end = s.pts.reduce((m, pt) => (pt[0] > m[0] ? pt : m), s.pts[0]);
                  return (
                    <text x={sx(f, end[0]) + 4} y={sy(f, end[1]) - 8} textAnchor="start" fill={s.color} className="text-[11px] font-bold">
                      {s.label}
                    </text>
                  );
                })()}
              </g>
            ))}
            {hover != null && (
              <g>
                <line x1={f.ml} x2={f.W - f.mr} y1={sy(f, config.prices[hover])} y2={sy(f, config.prices[hover])} className="stroke-pen" strokeDasharray="4 4" />
                {series.map((s) => (
                  <circle key={s.label} cx={sx(f, s.pts[hover][0])} cy={sy(f, s.pts[hover][1])} r={s.width > 2 ? 6 : 4.5} fill={s.color} className="stroke-surface" strokeWidth={2} />
                ))}
              </g>
            )}
            {eq && (
              <g>
                <circle cx={sx(f, eq.Q)} cy={sy(f, eq.P)} r={7} className="fill-marker stroke-ink" strokeWidth={2.5} />
                <text x={sx(f, eq.Q) + 10} y={sy(f, eq.P) + 4} className="fill-ink text-[12px] font-bold">
                  E (${fmt(eq.P)}, {fmt(eq.Q)})
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>
      <div className="border-t-2 border-ink bg-pen/[0.07] px-4 py-3 text-[15px]">
        <div className="kicker mb-1 text-[16px]">{tr("Nimani ko'ryapsiz? ✎", 'What are you seeing? ✎')}</div>
        {hover != null && multi ? (
          <p>
            {tr('Narx', 'At a price of')} <b>${fmt(config.prices[hover])}</b>{tr(' da:', ':')}{' '}
            {effective.map((g, gi) => (
              <span key={gi}>
                {g.people.map((p) => p.q[hover].toLocaleString('en-US')).join(' + ')} = <b>{totals[gi][hover].toLocaleString('en-US')}</b> ({g.label}){gi < effective.length - 1 ? '; ' : '.'}{' '}
              </span>
            ))}
            {tr("Bozor egri chizig'i — individual miqdorlarni", 'The market curve adds individual quantities')} <b>{tr('gorizontal', 'horizontally')}</b>{tr(" qo'shish.", '.')}
          </p>
        ) : eq ? (
          <p>
            {tr('Muvozanat:', 'Equilibrium: at')} <b>${fmt(eq.P)}</b> {tr('narxda talab miqdori = taklif miqdori =', 'quantity demanded = quantity supplied =')} <b>{fmt(eq.Q)}</b>
            {config.unit ? ` ${config.unit}` : ''}.{' '}
            {tr(
              'Undan yuqori narxlarda — surplus, past narxlarda — shortage. Qatorlar ustiga sichqonchani olib boring (yoki bosing).',
              'Above that price there is a surplus, below it a shortage. Hover over (or tap) the rows.',
            )}
          </p>
        ) : (
          <p>{tr('Jadvaldagi qatorni tanlang: grafikda shu narxdagi nuqtalar belgilanadi.', 'Pick a row in the table: the points at that price are marked on the graph.')}</p>
        )}
      </div>
    </figure>
  );
}

function niceMax(x: number) {
  const pow = 10 ** Math.floor(Math.log10(x));
  const n = x / pow;
  const m = n <= 1 ? 1 : n <= 1.2 ? 1.2 : n <= 1.5 ? 1.5 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 3 ? 3 : n <= 4 ? 4 : n <= 5 ? 5 : n <= 6 ? 6 : n <= 8 ? 8 : 10;
  return m * pow * 1.0001 + (m * pow) * 0.08;
}
