import { useCallback, useState } from 'react';
import { deadweightLoss, fmt, revenueMaximizingTax, tax, taxSchedule, type Demand, type Supply } from '../../lib/econ';
import { RichText } from '../ui/RichText';
import { makeFrame, sx, sy, ticks, type Frame } from './plot';
import { SupplyDemandGraph, type SDConfig, type SDState } from './SupplyDemandGraph';
import { useWidth } from './useWidth';
import { tr } from '../../lib/lang';

/**
 * Ch. 8 Figure 6: the tax graph on top, and below it deadweight loss and tax revenue as
 * functions of the tax size (panels d and e). Elasticity sliders change both curves.
 */
export function TaxSizeLab({ demand, supply, xMax, yMax, startTax }: { demand: Demand; supply: Supply; xMax: number; yMax: number; startTax: number }) {
  const [st, setSt] = useState<{ D: Demand; S: Supply; T: number }>({ D: demand, S: supply, T: startTax });
  const onChange = useCallback((s: SDState) => setSt({ D: s.D, S: s.S, T: s.tax }), []);
  const config: SDConfig = {
    title: tr("Figure 6 — Soliq kattaligi, sof yo'qotish va tushum", 'Figure 6 — Tax size, deadweight loss, and revenue'),
    demand,
    supply,
    xMax,
    yMax,
    modes: ['tax'],
    mode: 'tax',
    tax: startTax,
    taxMax: demand.a - supply.c,
    taxSideToggle: false,
    slopeControls: true,
    shiftControls: false,
    surplus: true,
    surplusOn: true,
    compact: true,
  };
  const maxT = Math.max(0.01, st.D.a - st.S.c);
  const sched = taxSchedule(st.D, st.S, maxT, 80);
  const tStar = revenueMaximizingTax(st.D, st.S);
  const cur = tax(st.D, st.S, st.T);
  const dwl = deadweightLoss(st.D, st.S, st.T);
  const half = deadweightLoss(st.D, st.S, st.T / 2);
  const ratio = half > 0 ? dwl / half : 0;
  const side = st.T > tStar + 1e-6 ? 'down' : st.T < tStar - 1e-6 ? 'up' : 'top';
  const explain = tr(`Soliq **$${fmt(st.T)}**: tushum $${fmt(cur.revenue)}, sof yo'qotish (DWL) $${fmt(dwl)}. Soliqni ikki barobar oshirsangiz, DWL **${fmt(ratio || 4, 1)} barobar** oshadi — u soliq kvadratiga proporsional (\\(DWL = T^2 / 2(b+d)\\)).\n\nTushum esa avval oshadi, keyin kamayadi — **Laffer curve**. Maksimal tushum \\(T = $${fmt(tStar)}\\) da. ${
    side === 'down'
      ? "Hozir siz egri chiziqning **pasayuvchi** tomonidasiz: soliqni kamaytirish tushumni **oshiradi**."
      : side === 'up'
        ? "Hozir siz o'suvchi tomondasiz: soliqni oshirish tushumni oshiradi (lekin DWL tezroq o'sadi)."
        : 'Siz aynan cho\'qqidasiz.'
  }\n\nEgiluvchanlik slayderlarini suring: egri chiziqlar qanchalik egiluvchan bo'lsa, bir xil soliqda DWL shunchalik katta.`, `A tax of **$${fmt(st.T)}**: revenue $${fmt(cur.revenue)}, deadweight loss (DWL) $${fmt(dwl)}. Double the tax and the DWL rises **${fmt(ratio || 4, 1)}-fold** — it is proportional to the square of the tax (\\(DWL = T^2 / 2(b+d)\\)).\n\nRevenue first rises, then falls — the **Laffer curve**. Revenue peaks at \\(T = $${fmt(tStar)}\\). ${
    side === 'down'
      ? 'You are now on the **falling** side of the curve: cutting the tax **raises** revenue.'
      : side === 'up'
        ? 'You are on the rising side: raising the tax raises revenue (but the DWL grows faster).'
        : 'You are exactly at the peak.'
  }\n\nMove the elasticity sliders: the more elastic the curves, the bigger the DWL from the same tax.`);

  return (
    <div className="my-6">
      <SupplyDemandGraph config={config} onChange={onChange} />
      <figure className="card -mt-2 overflow-hidden">
        <div className="grid sm:grid-cols-2">
          <MiniChart title="(d) Deadweight loss vs tax size" data={sched.map((r) => [r.T, r.dwl])} cur={[st.T, dwl]} color="bad" maxT={maxT} />
          <MiniChart title="(e) Tax revenue: the Laffer curve" data={sched.map((r) => [r.T, r.revenue])} cur={[st.T, cur.revenue]} color="tax" maxT={maxT} peak={tStar} border />
        </div>
        <div className="border-t-2 border-ink bg-pen/[0.07] px-4 py-3">
          <div className="kicker mb-1 text-[16px]">{tr("Nimani ko'ryapsiz? ✎", 'What are you seeing? ✎')}</div>
          <RichText text={explain} block className="prose-uz text-[15px]" />
        </div>
      </figure>
    </div>
  );
}

function MiniChart({
  title,
  data,
  cur,
  color,
  maxT,
  peak,
  border,
}: {
  title: string;
  data: [number, number][];
  cur: [number, number];
  color: 'bad' | 'tax';
  maxT: number;
  peak?: number;
  border?: boolean;
}) {
  const [ref, width] = useWidth<HTMLDivElement>(300);
  const yMax = Math.max(1, ...data.map((d) => d[1])) * 1.12;
  const f: Frame = { ...makeFrame(width, maxT, yMax, 0.6), ml: 50, mr: 18 };
  return (
    <div ref={ref} className={`min-w-0 p-2 ${border ? 'border-t-2 border-dashed border-ink/30 sm:border-l-2 sm:border-t-0' : ''}`}>
      <div className="px-2 pt-1 text-xs font-bold">{title}</div>
      <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label={title}>
        {ticks(f.yMax, 4).map((t) => (
          <g key={t}>
            <line x1={f.ml} x2={f.W - f.mr} y1={sy(f, t)} y2={sy(f, t)} className="stroke-line" opacity={t === 0 ? 0 : 0.6} />
            <text x={f.ml - 6} y={sy(f, t) + 4} textAnchor="end" className="num fill-muted text-[10px]">
              {fmt(t, 0)}
            </text>
          </g>
        ))}
        {ticks(f.xMax, 4).map((t) => (
          <text key={t} x={sx(f, t)} y={f.H - f.mb + 15} textAnchor="middle" className="num fill-muted text-[10px]">
            {fmt(t)}
          </text>
        ))}
        <line x1={f.ml} y1={f.mt - 4} x2={f.ml} y2={f.H - f.mb} className="stroke-ink" strokeWidth={1.5} />
        <line x1={f.ml} y1={f.H - f.mb} x2={f.W - f.mr} y2={f.H - f.mb} className="stroke-ink" strokeWidth={1.5} />
        <text x={f.W - f.mr} y={f.H - f.mb + 30} textAnchor="end" className="fill-ink text-[11px] font-semibold">
          Tax size (T)
        </text>
        {peak != null && <line x1={sx(f, peak)} x2={sx(f, peak)} y1={f.mt} y2={f.H - f.mb} className="stroke-muted" strokeDasharray="4 4" />}
        <polyline points={data.map(([x, y]) => `${sx(f, x)},${sy(f, y)}`).join(' ')} fill="none" className={`stroke-${color}`} strokeWidth={3} />
        <circle cx={sx(f, cur[0])} cy={sy(f, cur[1])} r={6} className="fill-marker stroke-ink" strokeWidth={2} />
      </svg>
    </div>
  );
}
