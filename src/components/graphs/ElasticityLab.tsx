import { useMemo, useState } from 'react';
import {
  classifyElasticity,
  fmt,
  midpointElasticity,
  midpointPct,
  signedMidpointElasticity,
  type ElasticityClass,
} from '../../lib/econ';
import { Segmented, Slider } from '../ui/Kit';
import { Math as M } from '../ui/Math';
import { RichText } from '../ui/RichText';
import { makeFrame, sx, sy, ticks, type Frame } from './plot';
import { useWidth } from './useWidth';

const CLASS_UZ: Record<ElasticityClass, string> = {
  'perfectly inelastic': 'mutlaqo noegiluvchan',
  inelastic: 'noegiluvchan',
  'unit elastic': 'birlik egiluvchan',
  elastic: 'egiluvchan',
  'perfectly elastic': 'mutlaqo egiluvchan',
};

function Axes({ f, xLabel, yLabel, dollars = true }: { f: Frame; xLabel: string; yLabel: string; dollars?: boolean }) {
  return (
    <g>
      {ticks(f.yMax).map((t) => (
        <g key={`y${t}`}>
          <line x1={f.ml} x2={f.W - f.mr} y1={sy(f, t)} y2={sy(f, t)} className="stroke-line" opacity={t === 0 ? 0 : 0.6} />
          <text x={f.ml - 8} y={sy(f, t) + 4} textAnchor="end" className="num fill-muted text-[11px]">
            {dollars ? `$${fmt(t)}` : fmt(t)}
          </text>
        </g>
      ))}
      {ticks(f.xMax).map((t) => (
        <text key={`x${t}`} x={sx(f, t)} y={f.H - f.mb + 16} textAnchor="middle" className="num fill-muted text-[11px]">
          {fmt(t)}
        </text>
      ))}
      <line x1={f.ml} y1={f.mt - 6} x2={f.ml} y2={f.H - f.mb} className="stroke-ink" strokeWidth={1.5} />
      <line x1={f.ml} y1={f.H - f.mb} x2={f.W - f.mr + 10} y2={f.H - f.mb} className="stroke-ink" strokeWidth={1.5} />
      <text x={f.ml + 6} y={f.mt + 2} className="fill-ink text-[12px] font-semibold">
        {yLabel}
      </text>
      <text x={f.W - f.mr + 8} y={f.H - f.mb + 32} textAnchor="end" className="fill-ink text-[12px] font-semibold">
        {xLabel}
      </text>
    </g>
  );
}

function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <figure className="card my-6 overflow-hidden">
      <div className="border-b-2 border-ink bg-marker px-4 py-3 text-[#111]">
        <figcaption className="font-display text-[14px] font-bold">{title}</figcaption>
      </div>
      {children}
    </figure>
  );
}

/**
 * Two points on a linear demand curve: midpoint elasticity step by step, total revenue as
 * rectangles, and the elastic / unit / inelastic parts of the line (Ch. 5 Figures 2–4).
 */
export function ElasticityLab({
  a = 7,
  slope = 0.5,
  qMax = 14,
  start = [4, 5],
  title = 'Elasticity Lab — talab egiluvchanligi va umumiy tushum',
}: {
  /** demand P = a − slope·Q */
  a?: number;
  slope?: number;
  qMax?: number;
  start?: [number, number];
  title?: string;
}) {
  const [p1, setP1] = useState(start[0]);
  const [p2, setP2] = useState(start[1]);
  const [showZones, setShowZones] = useState(true);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const f = makeFrame(width, qMax * 1.05, a * 1.1);
  const Q = (P: number) => Math.max(0, (a - P) / slope);
  const q1 = Q(p1);
  const q2 = Q(p2);
  const e = midpointElasticity(q1, q2, p1, p2);
  const cls = classifyElasticity(e, 0.02);
  const dq = midpointPct(q1, q2);
  const dp = midpointPct(p1, p2);
  const tr1 = p1 * q1;
  const tr2 = p2 * q2;
  const unitQ = a / slope / 2;
  const unitP = a / 2;

  return (
    <Frame title={title}>
      <div className="grid md:grid-cols-[minmax(0,1fr)_17rem]">
        <div ref={wrapRef} className="min-w-0 p-1">
          <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label={title}>
            <Axes f={f} xLabel="Quantity" yLabel="Price" />
            {/* revenue rectangles */}
            <rect x={sx(f, 0)} y={sy(f, p1)} width={sx(f, q1) - sx(f, 0)} height={sy(f, 0) - sy(f, p1)} className="fill-demand/15 stroke-demand" strokeDasharray="4 3" />
            <rect x={sx(f, 0)} y={sy(f, p2)} width={sx(f, q2) - sx(f, 0)} height={sy(f, 0) - sy(f, p2)} className="fill-supply/15 stroke-supply" strokeDasharray="4 3" />
            {/* demand line, coloured by zone */}
            {showZones ? (
              <>
                <line x1={sx(f, 0)} y1={sy(f, a)} x2={sx(f, unitQ)} y2={sy(f, unitP)} className="stroke-bad" strokeWidth={4} strokeLinecap="round" />
                <line x1={sx(f, unitQ)} y1={sy(f, unitP)} x2={sx(f, a / slope)} y2={sy(f, 0)} className="stroke-pen" strokeWidth={4} strokeLinecap="round" />
                <circle cx={sx(f, unitQ)} cy={sy(f, unitP)} r={6} className="fill-marker stroke-ink" strokeWidth={2} />
                <text x={sx(f, unitQ) + 10} y={sy(f, unitP) - 8} className="fill-ink text-[11px] font-bold">
                  E = 1
                </text>
                <text x={sx(f, unitQ * 0.35) + 10} y={sy(f, a - slope * unitQ * 0.35) - 10} className="fill-bad text-[11px] font-bold">
                  Elastic (E &gt; 1)
                </text>
                <text x={sx(f, unitQ * 1.55) + 10} y={sy(f, a - slope * unitQ * 1.55) - 10} className="fill-pen text-[11px] font-bold">
                  Inelastic (E &lt; 1)
                </text>
              </>
            ) : (
              <line x1={sx(f, 0)} y1={sy(f, a)} x2={sx(f, a / slope)} y2={sy(f, 0)} className="stroke-demand" strokeWidth={3.5} />
            )}
            {[
              [q1, p1, 'A', 'fill-demand'],
              [q2, p2, 'B', 'fill-supply'],
            ].map(([q, p, l, c]) => (
              <g key={l as string}>
                <circle cx={sx(f, q as number)} cy={sy(f, p as number)} r={7} className={`${c} stroke-surface`} strokeWidth={2.5} />
                <text x={sx(f, q as number) + 10} y={sy(f, p as number) + 16} className="fill-ink text-[12px] font-bold">
                  {l as string} ({fmt(q as number, 1)}, ${fmt(p as number)})
                </text>
              </g>
            ))}
          </svg>
        </div>
        <div className="border-t-2 border-dashed border-ink/30 p-4 text-sm md:border-l-2 md:border-t-0">
          <div className="kicker mb-2">Midpoint method</div>
          <div className="space-y-1.5">
            <M tex={`\\%\\Delta Q = \\frac{${fmt(q2, 1)} - ${fmt(q1, 1)}}{(${fmt(q1, 1)} + ${fmt(q2, 1)})/2} = ${fmt(dq, 1)}\\%`} />
            <br />
            <M tex={`\\%\\Delta P = \\frac{${fmt(p2)} - ${fmt(p1)}}{(${fmt(p1)} + ${fmt(p2)})/2} = ${fmt(dp, 1)}\\%`} />
            <br />
            <M tex={`E_d = \\left|\\frac{${fmt(dq, 1)}}{${fmt(dp, 1)}}\\right| = ${Number.isFinite(e) ? fmt(e, 2) : '\\infty'}`} />
          </div>
          <div className="mt-3 rounded-lg border-2 border-ink bg-marker px-2 py-1 text-center font-bold text-[#111]">
            {cls} — {CLASS_UZ[cls]}
          </div>
          <div className="kicker mb-1 mt-4">Total revenue = P × Q</div>
          <div className="flex justify-between">
            <span className="text-demand">A: ${fmt(p1)} × {fmt(q1, 1)}</span>
            <span className="num font-semibold">${fmt(tr1, 1)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-supply">B: ${fmt(p2)} × {fmt(q2, 1)}</span>
            <span className="num font-semibold">${fmt(tr2, 1)}</span>
          </div>
          <div className="mt-1 text-xs text-muted">
            {Math.abs(tr2 - tr1) < 1e-6 ? "Tushum o'zgarmadi." : `Tushum ${tr2 > tr1 ? 'oshdi' : 'kamaydi'}: $${fmt(Math.abs(tr2 - tr1), 1)}.`}
          </div>
        </div>
      </div>
      <div className="grid gap-x-6 gap-y-2 border-t-2 border-dashed border-ink/30 px-4 py-3 sm:grid-cols-2">
        <Slider label="A nuqta narxi (P₁)" value={p1} min={0.25} max={a - 0.25} step={0.25} onChange={setP1} display={`$${fmt(p1)}`} color="--demand" />
        <Slider label="B nuqta narxi (P₂)" value={p2} min={0.25} max={a - 0.25} step={0.25} onChange={setP2} display={`$${fmt(p2)}`} color="--supply" />
        <label className="flex items-center gap-2 text-sm font-medium">
          <input type="checkbox" checked={showZones} onChange={(e) => setShowZones(e.target.checked)} className="h-4 w-4 accent-[rgb(var(--pen))]" />
          Egiluvchan / noegiluvchan qismlarni ko'rsatish
        </label>
      </div>
      <div className="border-t-2 border-ink bg-pen/[0.07] px-4 py-3 text-[15px]">
        <div className="kicker mb-1 text-[16px]">Nimani ko'ryapsiz? ✎</div>
        <p>
          Narx ${fmt(p1)} → ${fmt(p2)} bo'lganda talab miqdori {fmt(q1, 1)} → {fmt(q2, 1)}. Egiluvchanlik{' '}
          <b>{Number.isFinite(e) ? fmt(e, 2) : '∞'}</b> — <b>{CLASS_UZ[cls]}</b>.{' '}
          <RichText
            text={
              cls === 'unit elastic'
                ? "Narx va miqdor bir xil foizga o'zgardi — tushum o'zgarmaydi."
                : cls === 'elastic'
                  ? "Miqdor narxdan ko'proq foizga o'zgardi, shuning uchun narx va tushum **qarama-qarshi** yo'nalishda harakat qiladi."
                  : cls === 'inelastic'
                    ? "Miqdor narxdan kamroq foizga o'zgardi — narx va tushum **bir xil** yo'nalishda harakat qiladi."
                    : ''
            }
          />{' '}
          Chiziq to'g'ri (nishabi bir xil), lekin egiluvchanlik har joyda boshqa: yuqorida (narx baland, miqdor kam) — egiluvchan,
          pastda — noegiluvchan, o'rtada (P = ${fmt(unitP)}) — birlik.
        </p>
      </div>
    </Frame>
  );
}

// ---------- five categories ----------

type Cat = 'pi' | 'in' | 'unit' | 'el' | 'pe';
const CATS: { id: Cat; label: string; demand: { q2: number; text: string }; supply: { q2: number; text: string } }[] = [
  { id: 'pi', label: 'E = 0', demand: { q2: 100, text: "Narx 22% oshdi, talab miqdori o'zgarmadi — vertikal chiziq (insulin, hayotiy dori)." }, supply: { q2: 100, text: "Narx oshsa ham taklif miqdori o'zgarmaydi — vertikal (sohildagi yer, stadion o'rinlari)." } },
  { id: 'in', label: 'E < 1', demand: { q2: 90, text: '22% narx oshishi talab miqdorini atigi 11% kamaytirdi — tik chiziq.' }, supply: { q2: 110, text: "22% narx oshishi taklifni 10% oshirdi — tik chiziq." } },
  { id: 'unit', label: 'E = 1', demand: { q2: 80, text: '22% narx oshishi talab miqdorini 22% kamaytirdi.' }, supply: { q2: 125, text: "22% narx oshishi taklifni 22% oshirdi." } },
  { id: 'el', label: 'E > 1', demand: { q2: 50, text: "22% narx oshishi talab miqdorini 67% kamaytirdi — yotiq chiziq." }, supply: { q2: 200, text: "22% narx oshishi taklifni 67% oshirdi — yotiq chiziq." } },
  { id: 'pe', label: 'E = ∞', demand: { q2: 0, text: "$4 dan yuqorida hech kim sotib olmaydi, $4 da istalgan miqdor, pastda — cheksiz. Gorizontal chiziq." }, supply: { q2: 0, text: "$4 da istalgan miqdorni sotishga tayyor, pastda — nol. Gorizontal chiziq." } },
];

/** Ch. 5 Figures 1 and 5: the variety of demand and supply curves. */
export function ElasticityCategories() {
  const [side, setSide] = useState<'demand' | 'supply'>('demand');
  const [cat, setCat] = useState<Cat>('in');
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const f = makeFrame(width, 220, 6, 0.55);
  const c = CATS.find((x) => x.id === cat)!;
  const info = side === 'demand' ? c.demand : c.supply;
  const p1 = 4;
  const p2 = 5;
  const q1 = 100;
  const q2 = info.q2;
  const cls = 'stroke-' + (side === 'demand' ? 'demand' : 'supply');
  const line = useMemo(() => {
    if (cat === 'pi') return [100, 0, 100, 6];
    if (cat === 'pe') return [0, 4, 220, 4];
    // line through (q1,p1) and (q2,p2), extended across the frame
    const m = (p2 - p1) / (q2 - q1);
    const P = (q: number) => p1 + m * (q - q1);
    const qa = Math.max(0, Math.min(220, q1 + (0 - p1) / m));
    const qb = Math.max(0, Math.min(220, q1 + (6 - p1) / m));
    return [qa, P(qa), qb, P(qb)];
  }, [cat, q2]);
  return (
    <Frame title="Figures 1 & 5 — Egri chiziqlar va egiluvchanlik turlari">
      <div className="flex flex-wrap gap-3 px-4 pt-3">
        <Segmented size="sm" value={side} onChange={setSide} options={[{ value: 'demand', label: 'Demand' }, { value: 'supply', label: 'Supply' }]} />
        <Segmented size="sm" value={cat} onChange={setCat} options={CATS.map((x) => ({ value: x.id, label: x.label }))} />
      </div>
      <div ref={wrapRef} className="min-w-0 p-1">
        <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="elasticity categories">
          <Axes f={f} xLabel="Quantity" yLabel="Price" />
          <line x1={sx(f, line[0])} y1={sy(f, line[1])} x2={sx(f, line[2])} y2={sy(f, line[3])} className={cls} strokeWidth={3.5} strokeLinecap="round" />
          {cat !== 'pe' && (
            <>
              <circle cx={sx(f, q1)} cy={sy(f, p1)} r={6} className="fill-ink" />
              <circle cx={sx(f, q2)} cy={sy(f, p2)} r={6} className="fill-marker stroke-ink" strokeWidth={2} />
              <text x={sx(f, q2) + 8} y={sy(f, p2) - 8} className="fill-ink text-[11px] font-bold">
                ({q2}, $5)
              </text>
              <text x={sx(f, q1) + 8} y={sy(f, p1) + 16} className="fill-ink text-[11px] font-bold">
                (100, $4)
              </text>
            </>
          )}
        </svg>
      </div>
      <div className="border-t-2 border-ink bg-pen/[0.07] px-4 py-3 text-[15px]">
        <b>{CLASS_UZ[classifyElasticity(cat === 'pi' ? 0 : cat === 'pe' ? Infinity : midpointElasticity(q1, q2, p1, p2), 0.02)]}</b>: {info.text}{' '}
        <span className="text-muted">(Barcha foizlar midpoint usulida.)</span>
        {side === 'supply' && <span className="text-muted"> Taklif uchun raqamlar — namunaviy (kitob rasmida aniq son yo'q).</span>}
      </div>
    </Frame>
  );
}

// ---------- calculator ----------

type Kind = 'ped' | 'pes' | 'income' | 'cross';

/** Midpoint calculator for all four elasticities of Ch. 5, with interpretation. */
export function ElasticityCalculator() {
  const [kind, setKind] = useState<Kind>('ped');
  const [v, setV] = useState({ q1: 40, q2: 32, x1: 8, x2: 10 });
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement>) => setV((s) => ({ ...s, [k]: Number(e.target.value) }));
  const signed = signedMidpointElasticity(v.q1, v.q2, v.x1, v.x2);
  const abs = Math.abs(signed);
  const xName = kind === 'income' ? 'Income' : kind === 'cross' ? 'Price of good 2' : 'Price';
  let verdict = '';
  if (kind === 'ped' || kind === 'pes') verdict = `${classifyElasticity(abs, 0.02)} — ${CLASS_UZ[classifyElasticity(abs, 0.02)]}`;
  if (kind === 'income') verdict = signed < 0 ? 'Manfiy → inferior good' : signed < 1 ? 'Musbat, < 1 → normal tovar, zarurat (necessity)' : 'Musbat, > 1 → normal tovar, hashamat (luxury)';
  if (kind === 'cross') verdict = signed > 0 ? 'Musbat → substitutes (o\'rinbosarlar)' : signed < 0 ? "Manfiy → complements (to'ldiruvchilar)" : "Nol → bog'liq emas";
  const field = (k: keyof typeof v, label: string) => (
    <label className="text-sm">
      <div className="mb-1 font-semibold">{label}</div>
      <input type="number" value={v[k]} onChange={set(k)} className="num w-full rounded-[0.7rem] border-2 border-ink bg-surface px-2 py-1.5" />
    </label>
  );
  return (
    <Frame title="Midpoint kalkulyatori — barcha egiluvchanliklar">
      <div className="space-y-4 p-4">
        <Segmented
          size="sm"
          value={kind}
          onChange={setKind}
          options={[
            { value: 'ped', label: 'Price elasticity of demand' },
            { value: 'pes', label: 'Price elasticity of supply' },
            { value: 'income', label: 'Income elasticity' },
            { value: 'cross', label: 'Cross-price elasticity' },
          ]}
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {field('q1', kind === 'cross' ? 'Q₁ (good 1)' : 'Q₁')}
          {field('q2', kind === 'cross' ? 'Q₂ (good 1)' : 'Q₂')}
          {field('x1', `${xName} ₁`)}
          {field('x2', `${xName} ₂`)}
        </div>
        <div className="rounded-xl border-2 border-dashed border-ink/40 p-3">
          <M tex={`E = \\frac{(${v.q2} - ${v.q1}) / [(${v.q1} + ${v.q2})/2]}{(${v.x2} - ${v.x1}) / [(${v.x1} + ${v.x2})/2]} = \\frac{${fmt(midpointPct(v.q1, v.q2), 1)}\\%}{${fmt(midpointPct(v.x1, v.x2), 1)}\\%} = ${fmt(kind === 'ped' ? abs : signed, 3)}`} display />
        </div>
        <div className="rounded-lg border-2 border-ink bg-marker px-3 py-2 font-bold text-[#111]">{verdict}</div>
        <p className="text-sm text-muted">
          {kind === 'ped' ? "Talab egiluvchanligida minus belgisi tashlab yuboriladi (absolyut qiymat)." : kind === 'income' || kind === 'cross' ? "Bu yerda ishora muhim: u tovar turini ko'rsatadi." : 'Taklif egiluvchanligi odatda musbat.'}
        </p>
      </div>
    </Frame>
  );
}
