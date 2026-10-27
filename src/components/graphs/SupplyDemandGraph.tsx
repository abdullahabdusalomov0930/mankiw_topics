import { useEffect, useMemo, useRef, useState, type PointerEvent as RPointerEvent } from 'react';
import {
  consumerSurplus,
  demandElasticityAt,
  equilibrium,
  fmt,
  marketWelfare,
  money,
  priceCeiling,
  priceFloor,
  producerSurplus,
  qd,
  qs,
  supplyElasticityAt,
  tax as taxOutcome,
  type Demand,
  type Supply,
  type TaxedSide,
} from '../../lib/econ';
import { RichText } from '../ui/RichText';
import { Segmented, Slider } from '../ui/Kit';
import { clipLine, iy, ix, makeFrame, polygon, svgPoint, sx, sy, ticks, type Frame } from './plot';
import { useWidth } from './useWidth';
import { isEn, tr } from '../../lib/lang';

export type SDMode = 'market' | 'ceiling' | 'floor' | 'tax';
export type SDContext = 'goods' | 'labor' | 'housing';

export interface SDPreset {
  label: string;
  demand?: Demand;
  supply?: Supply;
  mode?: SDMode;
  control?: number;
  tax?: number;
  taxOn?: TaxedSide;
  note?: string;
  /** curves to compare against while this preset is active (drawn dashed) */
  compare?: { demand?: Demand; supply?: Supply };
}

export interface SDConfig {
  demand: Demand;
  supply: Supply;
  xMax: number;
  yMax: number;
  title?: string;
  context?: SDContext;
  labels?: { x?: string; xUz?: string; y?: string; yUz?: string; demand?: string; supply?: string; unit?: string };
  modes?: SDMode[];
  mode?: SDMode;
  control?: number;
  tax?: number;
  taxOn?: TaxedSide;
  taxMax?: number;
  /** let the reader choose who legally pays the tax */
  taxSideToggle?: boolean;
  /** elasticity sliders that rotate a curve around the equilibrium */
  slopeControls?: boolean;
  /** sliders + dragging to shift curves (default true) */
  shiftControls?: boolean;
  /** "movement along the curve" view in market mode */
  moveAlong?: boolean;
  /** show the consumer/producer surplus toggle */
  surplus?: boolean;
  surplusOn?: boolean;
  presets?: SDPreset[];
  priceDigits?: number;
  qtyDigits?: number;
  /** prefix prices with $ (default true) */
  dollars?: boolean;
  /** show total revenue P × Q (Ch. 5) as a rectangle and a readout */
  showRevenue?: boolean;
  /** hide the explanation box */
  compact?: boolean;
}

export interface SDState {
  D: Demand;
  S: Supply;
  mode: SDMode;
  control: number;
  tax: number;
  taxOn: TaxedSide;
  view: 'shift' | 'move';
  probe: number;
  surplusOn: boolean;
  preset: number | null;
}

type Vocab = Record<SDContext, { price: string; buyers: string; sellers: string; good: string; surplus: string; shortage: string }>;
const VOCAB_EN: Vocab = {
  goods: { price: 'price', buyers: 'buyers', sellers: 'sellers', good: 'good', surplus: 'surplus', shortage: 'shortage' },
  labor: { price: 'wage', buyers: 'firms (employers)', sellers: 'workers', good: 'labor', surplus: 'unemployment (labor surplus)', shortage: 'labor shortage' },
  housing: { price: 'rent', buyers: 'tenants', sellers: 'landlords', good: 'apartment', surplus: 'empty apartments (surplus)', shortage: 'housing shortage' },
};
const VOCAB: Vocab = isEn ? VOCAB_EN : {
  goods: { price: 'narx', buyers: 'xaridorlar', sellers: 'sotuvchilar', good: 'tovar', surplus: "ortiqcha tovar (surplus)", shortage: 'taqchillik (shortage)' },
  labor: { price: 'ish haqi', buyers: 'firmalar (ish beruvchilar)', sellers: 'ishchilar', good: 'mehnat', surplus: 'ishsizlik (labor surplus)', shortage: 'ishchi kuchi taqchilligi' },
  housing: { price: 'ijara haqi', buyers: 'ijarachilar', sellers: 'uy egalari', good: 'kvartira', surplus: "bo'sh kvartiralar (surplus)", shortage: 'uy-joy taqchilligi (shortage)' },
};

const MODE_LABEL: Record<SDMode, string> = tr(
  { market: 'Erkin bozor', ceiling: 'Narx shifti', floor: 'Narx tubi', tax: 'Soliq' },
  { market: 'Free market', ceiling: 'Price ceiling', floor: 'Price floor', tax: 'Tax' },
);

function initialState(c: SDConfig): SDState {
  const eq = equilibrium(c.demand, c.supply);
  return {
    D: c.demand,
    S: c.supply,
    mode: c.mode ?? 'market',
    control: c.control ?? eq.P * 0.75,
    tax: c.tax ?? eq.P * 0.2,
    taxOn: c.taxOn ?? 'sellers',
    view: 'shift',
    probe: eq.P * 1.25,
    surplusOn: c.surplusOn ?? false,
    preset: c.presets ? 0 : null,
  };
}

interface Props {
  config: SDConfig;
  onChange?: (s: SDState) => void;
  /** curves to compare against (drawn dashed); defaults to the config or active preset */
  baseline?: { D: Demand; S: Supply };
}

type DragTarget = 'demand' | 'supply' | 'control' | 'probe';

export function SupplyDemandGraph({ config, onChange, baseline }: Props) {
  const [s, setS] = useState<SDState>(() => {
    const st = initialState(config);
    const p = config.presets?.[0];
    return p ? applyPreset(st, p) : st;
  });
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const svgRef = useRef<SVGSVGElement>(null);
  const drag = useRef<{ target: DragTarget; q0: number; p0: number; D: Demand; S: Supply; v: number } | null>(null);
  const [dragging, setDragging] = useState<DragTarget | null>(null);

  useEffect(() => {
    onChange?.(s);
  }, [s, onChange]);

  const f: Frame = useMemo(() => makeFrame(width, config.xMax, config.yMax), [width, config.xMax, config.yMax]);
  const V = VOCAB[config.context ?? 'goods'];
  const modes = config.modes ?? ['market'];
  const pd = config.priceDigits ?? 2;
  const qdg = config.qtyDigits ?? 0;
  const price = (x: number) => (config.dollars === false ? fmt(x, pd) : money(x, pd));
  const qty = (x: number) => fmt(x, qdg);
  const unit = config.labels?.unit ?? '';

  // Baseline (the preset or config before the reader touched anything)
  const base = useMemo(() => {
    if (baseline) return baseline;
    const p = s.preset != null ? config.presets?.[s.preset] : undefined;
    return { D: p?.compare?.demand ?? p?.demand ?? config.demand, S: p?.compare?.supply ?? p?.supply ?? config.supply };
  }, [s.preset, config, baseline]);
  const eq0 = equilibrium(base.D, base.S);
  const eq = equilibrium(s.D, s.S);

  const ceiling = s.mode === 'ceiling' ? priceCeiling(s.D, s.S, s.control) : null;
  const floor = s.mode === 'floor' ? priceFloor(s.D, s.S, s.control) : null;
  const tx = s.mode === 'tax' ? taxOutcome(s.D, s.S, s.tax, s.taxOn) : null;

  const shiftedD = Math.abs(s.D.a - base.D.a) > 1e-9 || Math.abs(s.D.b - base.D.b) > 1e-9;
  const shiftedS = Math.abs(s.S.c - base.S.c) > 1e-9 || Math.abs(s.S.d - base.S.d) > 1e-9;

  // ---------- pointer handling ----------
  const hitTest = (px: number, py: number): DragTarget | null => {
    const q = ix(f, px);
    const cands: { t: DragTarget; d: number }[] = [];
    if (s.mode === 'ceiling' || s.mode === 'floor') cands.push({ t: 'control', d: Math.abs(sy(f, s.control) - py) });
    if (s.mode === 'market' && s.view === 'move') cands.push({ t: 'probe', d: Math.abs(sy(f, s.probe) - py) });
    const canShift = config.shiftControls !== false && !(s.mode === 'market' && s.view === 'move');
    if (canShift && q >= 0 && q <= f.xMax) {
      cands.push({ t: 'demand', d: Math.abs(sy(f, s.D.a - s.D.b * q) - py) });
      cands.push({ t: 'supply', d: Math.abs(sy(f, s.S.c + s.S.d * q) - py) });
    }
    cands.sort((a, b) => a.d - b.d);
    return cands[0] && cands[0].d < 22 ? cands[0].t : null;
  };

  const onPointerDown = (e: RPointerEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return;
    const { x, y } = svgPoint(svg, e.clientX, e.clientY);
    const t = hitTest(x, y);
    if (!t) return;
    e.preventDefault();
    svg.setPointerCapture(e.pointerId);
    drag.current = { target: t, q0: ix(f, x), p0: iy(f, y), D: s.D, S: s.S, v: t === 'control' ? s.control : s.probe };
    setDragging(t);
  };

  const onPointerMove = (e: RPointerEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    const d = drag.current;
    if (!svg || !d) return;
    const { x, y } = svgPoint(svg, e.clientX, e.clientY);
    const dq = ix(f, x) - d.q0;
    const dp = iy(f, y) - d.p0;
    const ymax = config.yMax;
    setS((st) => {
      switch (d.target) {
        case 'demand':
          return { ...st, D: { ...st.D, a: clampNum(d.D.a + dp + d.D.b * dq, ymax * 0.15, ymax * 3) } };
        case 'supply':
          return { ...st, S: { ...st.S, c: clampNum(d.S.c + dp - d.S.d * dq, -ymax * 1.5, ymax * 0.9) } };
        case 'control':
          return { ...st, control: clampNum(d.v + dp, 0, ymax * 0.98) };
        case 'probe':
          return { ...st, probe: clampNum(d.v + dp, 0, ymax * 0.98) };
      }
    });
  };

  const endDrag = () => {
    drag.current = null;
    setDragging(null);
  };

  // Stop the page from scrolling when a touch starts on something draggable.
  const hitTestRef = useRef(hitTest);
  hitTestRef.current = hitTest;
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      const { x, y } = svgPoint(svg, t.clientX, t.clientY);
      if (hitTestRef.current(x, y)) e.preventDefault();
    };
    svg.addEventListener('touchstart', onTouch, { passive: false });
    return () => svg.removeEventListener('touchstart', onTouch);
  }, []);

  // ---------- sliders ----------
  const shiftD = qd(s.D, eq0.P) - eq0.Q;
  const shiftS = qs(s.S, eq0.P) - eq0.Q;
  const setShiftD = (v: number) => setS((st) => ({ ...st, D: { ...st.D, a: eq0.P + st.D.b * (eq0.Q + v) } }));
  const setShiftS = (v: number) => setS((st) => ({ ...st, S: { ...st.S, c: eq0.P - st.S.d * (eq0.Q + v) } }));
  const slopeD = Math.log10(base.D.b / s.D.b);
  const slopeS = Math.log10(base.S.d / s.S.d);
  const rotateD = (v: number) =>
    setS((st) => {
      const e = equilibrium(st.D, st.S);
      const b = base.D.b / 10 ** v;
      return { ...st, D: { a: e.P + b * e.Q, b } };
    });
  const rotateS = (v: number) =>
    setS((st) => {
      const e = equilibrium(st.D, st.S);
      const d = base.S.d / 10 ** v;
      return { ...st, S: { c: e.P - d * e.Q, d } };
    });

  const reset = () =>
    setS((st) => {
      const fresh = initialState(config);
      const p = st.preset != null ? config.presets?.[st.preset] : undefined;
      return p ? { ...applyPreset(fresh, p), preset: st.preset } : { ...fresh, mode: st.mode };
    });

  // ---------- drawing ----------
  const dSeg = clipLine(f, s.D.a, -s.D.b);
  const sSeg = clipLine(f, s.S.c, s.S.d);
  const dBase = shiftedD ? clipLine(f, base.D.a, -base.D.b) : null;
  const sBase = shiftedS ? clipLine(f, base.S.c, base.S.d) : null;
  const taxCurve =
    tx && s.tax > 0
      ? s.taxOn === 'sellers'
        ? clipLine(f, s.S.c + s.tax, s.S.d)
        : clipLine(f, s.D.a - s.tax, -s.D.b)
      : null;

  const welfare = marketWelfare(s.D, s.S);
  const showSurplus = s.surplusOn;

  // Surplus polygons
  const surplusShapes = (() => {
    if (!showSurplus) return null;
    const out: { pts: [number, number][]; cls: string; label: string }[] = [];
    const supplyAt = (q: number) => Math.max(0, s.S.c + s.S.d * q);
    const sStart: [number, number][] = s.S.c < 0 ? [[0, 0], [-s.S.c / s.S.d, 0]] : [[0, s.S.c]];
    if (tx && s.tax > 0) {
      const Q = tx.Q;
      out.push({ pts: [[0, s.D.a], [Q, tx.Pb], [0, tx.Pb]], cls: 'fill-demand/25', label: 'CS' });
      out.push({ pts: [[0, tx.Ps], [Q, tx.Ps], [Q, supplyAt(Q)], ...[...sStart].reverse()], cls: 'fill-supply/25', label: 'PS' });
      out.push({ pts: [[0, tx.Pb], [Q, tx.Pb], [Q, tx.Ps], [0, tx.Ps]], cls: 'fill-tax/25', label: 'Tax revenue' });
      out.push({ pts: [[Q, tx.Pb], [eq.Q, eq.P], [Q, tx.Ps]], cls: 'fill-muted/30', label: 'DWL' });
    } else {
      const ctl = ceiling?.binding ? ceiling : floor?.binding ? floor : null;
      const P = ctl ? ctl.P : eq.P;
      const Q = ctl ? ctl.Q : eq.Q;
      out.push({ pts: [[0, s.D.a], [Q, s.D.a - s.D.b * Q], [Q, P], [0, P]], cls: 'fill-demand/25', label: 'CS' });
      out.push({ pts: [[0, P], [Q, P], [Q, supplyAt(Q)], ...[...sStart].reverse()], cls: 'fill-supply/25', label: 'PS' });
      if (ctl) out.push({ pts: [[Q, s.D.a - s.D.b * Q], [eq.Q, eq.P], [Q, supplyAt(Q)]], cls: 'fill-muted/30', label: 'DWL' });
    }
    return out;
  })();

  const labelD = config.labels?.demand ?? 'D';
  const labelS = config.labels?.supply ?? 'S';
  const yTicks = ticks(config.yMax);
  const xTicks = ticks(config.xMax);

  // ---------- readouts ----------
  const rows: { k: string; v: string; tone?: 'good' | 'bad' | 'muted' | 'demand' | 'supply' | 'tax' }[] = [];
  if (s.mode === 'market' && s.view === 'move') {
    const dq = qd(s.D, s.probe);
    const sq = qs(s.S, s.probe);
    rows.push({ k: tr(`Tanlangan ${V.price}`, `Chosen ${V.price}`), v: price(s.probe) });
    rows.push({ k: tr('Talab miqdori (Qd)', 'Quantity demanded (Qd)'), v: qty(dq), tone: 'demand' });
    rows.push({ k: tr('Taklif miqdori (Qs)', 'Quantity supplied (Qs)'), v: qty(sq), tone: 'supply' });
    rows.push({ k: dq > sq ? tr('Taqchillik', 'Shortage') : tr('Ortiqcha', 'Surplus'), v: qty(Math.abs(dq - sq)), tone: Math.abs(dq - sq) < 1e-6 ? 'muted' : 'bad' });
  } else if (ceiling || floor) {
    const o = (ceiling ?? floor)!;
    rows.push({ k: ceiling ? tr('Narx shifti', 'Price ceiling') : tr('Narx tubi', 'Price floor'), v: price(s.control) });
    rows.push({ k: tr('Muvozanat narxi P*', 'Equilibrium price P*'), v: price(eq.P), tone: 'muted' });
    rows.push({ k: tr('Holat', 'Status'), v: o.binding ? tr("binding (ta'sirli)", 'binding') : 'not binding', tone: o.binding ? 'bad' : 'good' });
    rows.push({ k: tr('Talab miqdori (Qd)', 'Quantity demanded (Qd)'), v: qty(o.qd), tone: 'demand' });
    rows.push({ k: tr('Taklif miqdori (Qs)', 'Quantity supplied (Qs)'), v: qty(o.qs), tone: 'supply' });
    rows.push({ k: ceiling ? tr('Taqchillik', 'Shortage') : config.context === 'labor' ? tr('Ishsizlik', 'Unemployment') : tr('Ortiqcha', 'Surplus'), v: qty(o.gap), tone: o.gap > 0 ? 'bad' : 'muted' });
    rows.push({ k: tr('Sotilgan miqdor', 'Quantity sold'), v: qty(o.Q) });
  } else if (tx) {
    rows.push({ k: tr('Soliq (T)', 'Tax (T)'), v: price(s.tax), tone: 'tax' });
    rows.push({ k: tr(`${cap(V.buyers)} to'laydi (P_B)`, `${cap(V.buyers)} pay (P_B)`), v: price(tx.Pb), tone: 'demand' });
    rows.push({ k: tr(`${cap(V.sellers)} oladi (P_S)`, `${cap(V.sellers)} receive (P_S)`), v: price(tx.Ps), tone: 'supply' });
    rows.push({ k: tr('Soliqsiz narx P*', 'Price without tax P*'), v: price(eq.P), tone: 'muted' });
    rows.push({ k: tr('Miqdor', 'Quantity'), v: `${qty(eq.Q)} → ${qty(tx.Q)}` });
    rows.push({ k: tr('Soliq tushumi (T×Q)', 'Tax revenue (T×Q)'), v: price(tx.revenue), tone: 'tax' });
    if (showSurplus) rows.push({ k: tr("Sof yo'qotish (DWL)", 'Deadweight loss (DWL)'), v: price(0.5 * s.tax * (eq.Q - tx.Q)), tone: 'bad' });
  } else {
    rows.push({ k: tr(`Muvozanat ${V.price}i P*`, `Equilibrium ${V.price} P*`), v: price(eq.P) });
    rows.push({ k: tr('Muvozanat miqdori Q*', 'Equilibrium quantity Q*'), v: qty(eq.Q) });
    if (shiftedD || shiftedS) rows.push({ k: tr("Boshlang'ich muvozanat", 'Initial equilibrium'), v: `${price(eq0.P)}, ${qty(eq0.Q)}`, tone: 'muted' });
    if (config.showRevenue) {
      rows.push({ k: tr('Umumiy tushum P×Q', 'Total revenue P×Q'), v: price(eq.P * eq.Q), tone: 'tax' });
      if (shiftedD || shiftedS) rows.push({ k: tr('Avvalgi tushum', 'Previous revenue'), v: price(eq0.P * eq0.Q), tone: 'muted' });
    }
  }
  if (showSurplus && !tx && !(s.mode === 'market' && s.view === 'move')) {
    const ctl = ceiling?.binding ? ceiling : floor?.binding ? floor : null;
    const P = ctl ? ctl.P : eq.P;
    const Q = ctl ? ctl.Q : eq.Q;
    const cs = consumerSurplus(s.D, P, Q);
    const ps = producerSurplus(s.S, P, Q);
    rows.push({ k: tr("Iste'molchi ortiqchaligi (CS)", 'Consumer surplus (CS)'), v: price(cs), tone: 'demand' });
    rows.push({ k: tr('Ishlab chiqaruvchi ortiqchaligi (PS)', 'Producer surplus (PS)'), v: price(ps), tone: 'supply' });
    if (ctl) rows.push({ k: tr("Sof yo'qotish (DWL)", 'Deadweight loss (DWL)'), v: price(welfare.total - cs - ps), tone: 'bad' });
  }
  if (config.slopeControls) {
    const p = tx ? { Q: eq.Q, P: eq.P } : eq;
    rows.push({ k: tr('Talab egiluvchanligi (E_d)', 'Elasticity of demand (E_d)'), v: fmt(demandElasticityAt(s.D, p), 2), tone: 'demand' });
    rows.push({ k: tr('Taklif egiluvchanligi (E_s)', 'Elasticity of supply (E_s)'), v: fmt(supplyElasticityAt(s.S, p), 2), tone: 'supply' });
  }

  const explanation = (isEn ? explainEn : explain)({ s, eq, eq0, ceiling, floor, tx, V, price, qty, unit, shiftedD, shiftedS, base, ctx: config.context ?? 'goods' });

  return (
    <figure className="card my-6 overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink bg-marker px-4 py-3 text-[#111]">
        <figcaption className="font-display text-[14px] font-bold">
          <RichText text={config.title ?? tr('Talab va taklif grafigi', 'Supply and demand graph')} />
        </figcaption>
        <div className="flex flex-wrap items-center gap-2">
          {config.surplus && (
            <button
              className={`btn-ghost btn-sm ${s.surplusOn ? '!bg-ink !text-marker' : ''}`}
              onClick={() => setS((st) => ({ ...st, surplusOn: !st.surplusOn }))}
            >
              {s.surplusOn ? '✓ ' : ''}{tr('Ortiqchalik maydonlari', 'Surplus areas')}
            </button>
          )}
          <button className="btn-ghost btn-sm" onClick={reset} title={tr("Boshlang'ich holatga qaytarish", 'Reset to the start')}>
            ↺ Reset
          </button>
        </div>
      </div>

      {(modes.length > 1 || config.presets || (config.moveAlong && s.mode === 'market')) && (
        <div className="flex flex-wrap items-center gap-3 px-4 pt-3">
          {modes.length > 1 && (
            <Segmented
              size="sm"
              value={s.mode}
              onChange={(m) =>
                setS((st) => {
                  const e = equilibrium(st.D, st.S);
                  const control = m === 'ceiling' ? Math.min(st.control, e.P * 0.75) : m === 'floor' ? Math.max(st.control, e.P * 1.25) : st.control;
                  return { ...st, mode: m, view: 'shift', control: clampNum(control, 0, config.yMax * 0.95) };
                })
              }
              options={modes.map((m) => ({ value: m, label: MODE_LABEL[m] }))}
            />
          )}
          {config.moveAlong && s.mode === 'market' && (
            <Segmented
              size="sm"
              value={s.view}
              onChange={(v) => setS((st) => ({ ...st, view: v }))}
              options={[
                { value: 'shift', label: tr('Egri chiziqni siljitish', 'Shift a curve') },
                { value: 'move', label: tr("Egri chiziq bo'ylab harakat", 'Move along a curve') },
              ]}
            />
          )}
          {config.presets && (
            <Segmented
              size="sm"
              value={String(s.preset ?? 0)}
              onChange={(v) => setS((st) => ({ ...applyPreset({ ...st, surplusOn: st.surplusOn }, config.presets![Number(v)]), preset: Number(v) }))}
              options={config.presets.map((p, i) => ({ value: String(i), label: p.label }))}
            />
          )}
        </div>
      )}

      <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_15.5rem]">
        <div ref={wrapRef} className="relative min-w-0 px-1 pt-2">
          <svg
            ref={svgRef}
            width={f.W}
            height={f.H}
            viewBox={`0 0 ${f.W} ${f.H}`}
            className={`block select-none ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            role="img"
            aria-label={`${(config.title ?? 'Supply and demand graph').replace(/\\[()]/g, '')}. ${explanation.replace(/\*\*/g, '')}`}
          >
            {/* grid */}
            {yTicks.map((t) => (
              <g key={`y${t}`}>
                <line x1={f.ml} x2={f.W - f.mr} y1={sy(f, t)} y2={sy(f, t)} className="stroke-line" strokeWidth={1} opacity={t === 0 ? 0 : 0.6} />
                <text x={f.ml - 8} y={sy(f, t) + 4} textAnchor="end" className="num fill-muted text-[11px]">
                  {config.dollars === false ? fmt(t, 2) : `$${fmt(t, 2)}`}
                </text>
              </g>
            ))}
            {xTicks.map((t) => (
              <text key={`x${t}`} x={sx(f, t)} y={f.H - f.mb + 16} textAnchor="middle" className="num fill-muted text-[11px]">
                {fmt(t, 2)}
              </text>
            ))}
            {/* axes */}
            <line x1={f.ml} y1={f.mt - 6} x2={f.ml} y2={f.H - f.mb} className="stroke-ink" strokeWidth={1.5} />
            <line x1={f.ml} y1={f.H - f.mb} x2={f.W - f.mr + 10} y2={f.H - f.mb} className="stroke-ink" strokeWidth={1.5} />
            <text x={f.ml + 6} y={f.mt + 2} className="fill-ink text-[12px] font-semibold">
              <title>{config.labels?.yUz ?? 'Narx'}</title>
              {config.labels?.y ?? 'Price'}
            </text>
            <text x={f.W - f.mr + 8} y={f.H - f.mb + 32} textAnchor="end" className="fill-ink text-[12px] font-semibold">
              <title>{config.labels?.xUz ?? 'Miqdor'}</title>
              {config.labels?.x ?? 'Quantity'}
            </text>

            {/* surplus areas */}
            {surplusShapes?.map((sh) => (
              <polygon key={sh.label} points={polygon(f, sh.pts)} className={sh.cls} />
            ))}

            {/* tax revenue box without full surplus view */}
            {tx && s.tax > 0 && !showSurplus && (
              <polygon
                points={polygon(f, [[0, tx.Pb], [tx.Q, tx.Pb], [tx.Q, tx.Ps], [0, tx.Ps]])}
                className="fill-tax/15"
              />
            )}

            {config.showRevenue && s.mode === 'market' && s.view === 'shift' && (
              <>
                {(shiftedD || shiftedS) && (
                  <rect x={sx(f, 0)} y={sy(f, eq0.P)} width={sx(f, eq0.Q) - sx(f, 0)} height={sy(f, 0) - sy(f, eq0.P)} fill="none" className="stroke-muted" strokeDasharray="5 4" strokeWidth={1.5} />
                )}
                <rect x={sx(f, 0)} y={sy(f, eq.P)} width={sx(f, eq.Q) - sx(f, 0)} height={sy(f, 0) - sy(f, eq.P)} className="fill-tax/15" />
                <text x={sx(f, eq.Q / 2)} y={(sy(f, eq.P) + sy(f, 0)) / 2} textAnchor="middle" className="fill-tax text-[12px] font-bold">
                  TR = {price(eq.P * eq.Q)}
                </text>
              </>
            )}

            {/* original curves */}
            {dBase && <Seg f={f} seg={dBase} cls="stroke-demand" dashed faint />}
            {sBase && <Seg f={f} seg={sBase} cls="stroke-supply" dashed faint />}

            {/* curves */}
            {dSeg && <Seg f={f} seg={dSeg} cls="stroke-demand" width={dragging === 'demand' ? 4.5 : 3} />}
            {sSeg && <Seg f={f} seg={sSeg} cls="stroke-supply" width={dragging === 'supply' ? 4.5 : 3} />}
            {dSeg && <CurveLabel f={f} q={dSeg[2]} p={dSeg[3]} text={shiftedD ? `${labelD}₂` : labelD} cls="fill-demand" anchor="end" dy={-8} />}
            {sSeg && <CurveLabel f={f} q={sSeg[2]} p={sSeg[3]} text={shiftedS ? `${labelS}₂` : labelS} cls="fill-supply" anchor="end" dy={-8} />}
            {dBase && <CurveLabel f={f} q={dBase[2]} p={dBase[3]} text={`${labelD}₁`} cls="fill-demand" anchor="end" dy={-8} faint />}
            {sBase && <CurveLabel f={f} q={sBase[2]} p={sBase[3]} text={`${labelS}₁`} cls="fill-supply" anchor="end" dy={-8} faint />}
            {taxCurve && (
              <>
                <Seg f={f} seg={taxCurve} cls="stroke-tax" dashed />
                <CurveLabel
                  f={f}
                  q={taxCurve[2]}
                  p={taxCurve[3]}
                  text={s.taxOn === 'sellers' ? `${labelS} + tax` : `${labelD} − tax`}
                  cls="fill-tax"
                  anchor="end"
                  dy={s.taxOn === 'sellers' ? -8 : 14}
                />
              </>
            )}

            {/* equilibrium */}
            {!(s.mode === 'tax' && s.tax > 0) && !(ceiling?.binding || floor?.binding) && eq.Q > 0 && (
              <EqPoint f={f} q={eq.Q} p={eq.P} label="E" price={price(eq.P)} qty={qty(eq.Q)} />
            )}
            {(shiftedD || shiftedS) && s.mode === 'market' && s.view === 'shift' && (
              <circle cx={sx(f, eq0.Q)} cy={sy(f, eq0.P)} r={4.5} className="fill-surface stroke-muted" strokeWidth={2} />
            )}

            {/* tax wedge */}
            {tx && s.tax > 0 && tx.Q > 0 && (
              <g>
                <circle cx={sx(f, eq.Q)} cy={sy(f, eq.P)} r={4.5} className="fill-surface stroke-muted" strokeWidth={2} />
                <Guide f={f} q={tx.Q} p={tx.Pb} label={`P_B ${price(tx.Pb)}`} cls="stroke-demand" textCls="fill-demand" />
                <Guide f={f} q={tx.Q} p={tx.Ps} label={`P_S ${price(tx.Ps)}`} cls="stroke-supply" textCls="fill-supply" noX />
                <line x1={sx(f, tx.Q)} x2={sx(f, tx.Q)} y1={sy(f, tx.Pb)} y2={sy(f, tx.Ps)} className="stroke-tax" strokeWidth={4} strokeLinecap="round" />
                <text x={sx(f, tx.Q) + 8} y={(sy(f, tx.Pb) + sy(f, tx.Ps)) / 2 + 4} className="fill-tax text-[12px] font-semibold">
                  T = {price(s.tax)}
                </text>
                <circle cx={sx(f, tx.Q)} cy={sy(f, tx.Pb)} r={5} className="fill-demand" />
                <circle cx={sx(f, tx.Q)} cy={sy(f, tx.Ps)} r={5} className="fill-supply" />
              </g>
            )}

            {/* price control line */}
            {(ceiling || floor) && (
              <ControlLine
                f={f}
                price={s.control}
                o={(ceiling ?? floor)!}
                kind={ceiling ? 'ceiling' : 'floor'}
                active={dragging === 'control'}
                fmtPrice={price}
                gapLabel={ceiling ? 'Shortage' : config.context === 'labor' ? 'Unemployment' : 'Surplus'}
              />
            )}

            {/* movement along the curve */}
            {s.mode === 'market' && s.view === 'move' && (
              <ProbeLine f={f} price={s.probe} D={s.D} S={s.S} eqP={eq.P} active={dragging === 'probe'} fmtPrice={price} />
            )}

            {/* drag hints */}
            {config.shiftControls !== false && !dragging && !(s.mode === 'market' && s.view === 'move') && dSeg && sSeg && (
              <>
                <Grip f={f} seg={dSeg} t={0.18} cls="stroke-demand" />
                <Grip f={f} seg={sSeg} t={0.82} cls="stroke-supply" />
              </>
            )}
          </svg>
          {tx && s.tax > 0 && (
            <div className="px-3 pb-3">
              <BurdenBar buyers={tx.buyerShare} buyersLabel={cap(V.buyers)} sellersLabel={cap(V.sellers)} />
            </div>
          )}
        </div>

        <div className="border-t-2 border-dashed border-ink/30 p-4 md:border-l-2 md:border-t-0">
          <div className="kicker mb-2">{tr("Ko'rsatkichlar", 'Numbers')}</div>
          <dl className="space-y-1.5 text-sm">
            {rows.map((r) => (
              <div key={r.k} className="flex items-baseline justify-between gap-3">
                <dt className="text-muted">{r.k}</dt>
                <dd className={`num font-semibold ${toneCls(r.tone)}`}>{r.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* controls */}
      <div className="grid gap-x-6 gap-y-2 border-t-2 border-dashed border-ink/30 px-4 py-3 sm:grid-cols-2">
        {(s.mode === 'ceiling' || s.mode === 'floor') && (
          <Slider
            label={s.mode === 'ceiling' ? tr('Narx shifti (price ceiling)', 'Price ceiling') : tr('Narx tubi (price floor)', 'Price floor')}
            value={s.control}
            min={0}
            max={config.yMax * 0.95}
            step={config.yMax / 400}
            onChange={(v) => setS((st) => ({ ...st, control: v }))}
            display={price(s.control)}
            color="--bad"
          />
        )}
        {s.mode === 'tax' && (
          <Slider
            label={tr('Soliq miqdori (T)', 'Size of the tax (T)')}
            value={s.tax}
            min={0}
            max={config.taxMax ?? config.yMax * 0.6}
            step={config.yMax / 400}
            onChange={(v) => setS((st) => ({ ...st, tax: v }))}
            display={price(s.tax)}
            color="--tax"
          />
        )}
        {s.mode === 'tax' && config.taxSideToggle !== false && (
          <div>
            <div className="mb-1 text-xs font-medium text-muted">{tr("Soliqni qonun bo'yicha kim to'laydi?", 'Who pays the tax by law?')}</div>
            <Segmented
              size="sm"
              value={s.taxOn}
              onChange={(v) => setS((st) => ({ ...st, taxOn: v }))}
              options={[
                { value: 'sellers', label: cap(V.sellers) },
                { value: 'buyers', label: cap(V.buyers) },
              ]}
            />
          </div>
        )}
        {s.mode === 'market' && s.view === 'move' && (
          <Slider
            label={tr(`${cap(V.price)} (bozor narxi)`, `${cap(V.price)} (market price)`)}
            value={s.probe}
            min={0}
            max={config.yMax * 0.95}
            step={config.yMax / 400}
            onChange={(v) => setS((st) => ({ ...st, probe: v }))}
            display={price(s.probe)}
          />
        )}
        {config.shiftControls !== false && !(s.mode === 'market' && s.view === 'move') && (
          <>
            <Slider
              label={tr('Talabni siljitish (shift demand)', 'Shift demand')}
              value={shiftD}
              min={-config.xMax * 0.45}
              max={config.xMax * 0.45}
              step={config.xMax / 400}
              onChange={setShiftD}
              display={`${shiftD >= 0 ? '+' : ''}${qty(shiftD)}`}
              color="--demand"
            />
            <Slider
              label={tr('Taklifni siljitish (shift supply)', 'Shift supply')}
              value={shiftS}
              min={-config.xMax * 0.45}
              max={config.xMax * 0.45}
              step={config.xMax / 400}
              onChange={setShiftS}
              display={`${shiftS >= 0 ? '+' : ''}${qty(shiftS)}`}
              color="--supply"
            />
          </>
        )}
        {config.slopeControls && (
          <>
            <Slider
              label={tr('Talab: noegiluvchan ← → egiluvchan', 'Demand: inelastic ← → elastic')}
              value={slopeD}
              min={-1}
              max={1}
              step={0.01}
              onChange={rotateD}
              color="--demand"
            />
            <Slider
              label={tr('Taklif: noegiluvchan ← → egiluvchan', 'Supply: inelastic ← → elastic')}
              value={slopeS}
              min={-1}
              max={1}
              step={0.01}
              onChange={rotateS}
              color="--supply"
            />
          </>
        )}
      </div>

      {!config.compact && (
        <div className="border-t-2 border-ink bg-pen/[0.07] px-4 py-3">
          <div className="kicker mb-1 text-[16px]">{tr("Nimani ko'ryapsiz? ✎", 'What are you seeing? ✎')}</div>
          <RichText text={explanation} block className="prose-uz text-[15px]" />
          {s.preset != null && config.presets?.[s.preset]?.note && (
            <p className="mt-2 text-sm text-muted">
              <RichText text={config.presets[s.preset].note!} />
            </p>
          )}
        </div>
      )}
    </figure>
  );
}

function applyPreset(st: SDState, p: SDPreset): SDState {
  return {
    ...st,
    D: p.demand ?? st.D,
    S: p.supply ?? st.S,
    mode: p.mode ?? st.mode,
    control: p.control ?? st.control,
    tax: p.tax ?? st.tax,
    taxOn: p.taxOn ?? st.taxOn,
    view: 'shift',
  };
}

function clampNum(x: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, x));
}

function cap(x: string) {
  return x.charAt(0).toUpperCase() + x.slice(1);
}

function toneCls(t?: string) {
  switch (t) {
    case 'good':
      return 'text-good';
    case 'bad':
      return 'text-bad';
    case 'muted':
      return 'text-muted';
    case 'demand':
      return 'text-demand';
    case 'supply':
      return 'text-supply';
    case 'tax':
      return 'text-tax';
    default:
      return 'text-ink';
  }
}

// ---------- small SVG parts ----------

function Seg({ f, seg, cls, dashed, faint, width = 3 }: { f: Frame; seg: [number, number, number, number]; cls: string; dashed?: boolean; faint?: boolean; width?: number }) {
  return (
    <line
      x1={sx(f, seg[0])}
      y1={sy(f, seg[1])}
      x2={sx(f, seg[2])}
      y2={sy(f, seg[3])}
      className={cls}
      strokeWidth={width}
      strokeLinecap="round"
      strokeDasharray={dashed ? '7 6' : undefined}
      opacity={faint ? 0.45 : 1}
    />
  );
}

function CurveLabel({ f, q, p, text, cls, anchor, dy = 0, faint }: { f: Frame; q: number; p: number; text: string; cls: string; anchor: 'start' | 'end'; dy?: number; faint?: boolean }) {
  return (
    <text x={sx(f, q) + (anchor === 'end' ? 18 : 6)} y={sy(f, p) + dy} textAnchor={anchor} className={`${cls} text-[13px] font-bold`} opacity={faint ? 0.55 : 1}>
      {text}
    </text>
  );
}

function Guide({ f, q, p, label, cls = 'stroke-muted', textCls = 'fill-muted', noX }: { f: Frame; q: number; p: number; label?: string; cls?: string; textCls?: string; noX?: boolean }) {
  return (
    <g>
      <line x1={f.ml} x2={sx(f, q)} y1={sy(f, p)} y2={sy(f, p)} className={cls} strokeDasharray="3 4" strokeWidth={1.3} />
      {!noX && <line x1={sx(f, q)} x2={sx(f, q)} y1={sy(f, p)} y2={f.H - f.mb} className={cls} strokeDasharray="3 4" strokeWidth={1.3} />}
      {label && (
        <text x={f.ml + 6} y={sy(f, p) - 5} className={`${textCls} num text-[11px] font-semibold`}>
          {label}
        </text>
      )}
    </g>
  );
}

function EqPoint({ f, q, p, label, price, qty }: { f: Frame; q: number; p: number; label: string; price: string; qty: string }) {
  return (
    <g>
      <Guide f={f} q={q} p={p} />
      <text x={f.ml + 6} y={sy(f, p) - 5} className="num fill-ink text-[11px] font-semibold">
        P* {price}
      </text>
      <text x={sx(f, q) + 5} y={f.H - f.mb - 6} className="num fill-ink text-[11px] font-semibold">
        Q* {qty}
      </text>
      <circle cx={sx(f, q)} cy={sy(f, p)} r={6} className="fill-ink stroke-surface" strokeWidth={2.5} />
      <text x={sx(f, q) + 10} y={sy(f, p) - 8} className="fill-ink text-[12px] font-bold">
        {label}
      </text>
    </g>
  );
}

function ControlLine({
  f,
  price,
  o,
  kind,
  active,
  fmtPrice,
  gapLabel,
}: {
  f: Frame;
  price: number;
  o: { binding: boolean; qd: number; qs: number };
  kind: 'ceiling' | 'floor';
  active: boolean;
  fmtPrice: (x: number) => string;
  gapLabel: string;
}) {
  const y = sy(f, price);
  const cls = o.binding ? 'stroke-bad' : 'stroke-muted';
  const lo = Math.min(o.qd, o.qs);
  const hi = Math.max(o.qd, o.qs);
  return (
    <g>
      <line x1={f.ml} x2={f.W - f.mr} y1={y} y2={y} className={cls} strokeWidth={active ? 4 : 2.5} strokeDasharray={o.binding ? undefined : '8 5'} />
      <text x={f.W - f.mr} y={y + (kind === 'ceiling' ? 15 : -7)} textAnchor="end" className={`${o.binding ? 'fill-bad' : 'fill-muted'} text-[12px] font-semibold`}>
        {kind === 'ceiling' ? 'Price ceiling' : 'Price floor'} {fmtPrice(price)}
      </text>
      {o.binding && (
        <>
          <rect x={sx(f, lo)} y={y - 7} width={Math.max(0, sx(f, hi) - sx(f, lo))} height={14} rx={4} className="fill-bad/20" />
          <line x1={sx(f, lo)} x2={sx(f, lo)} y1={y} y2={f.H - f.mb} className="stroke-muted" strokeDasharray="3 4" />
          <line x1={sx(f, hi)} x2={sx(f, hi)} y1={y} y2={f.H - f.mb} className="stroke-muted" strokeDasharray="3 4" />
          <circle cx={sx(f, o.qs)} cy={y} r={5.5} className="fill-supply stroke-surface" strokeWidth={2} />
          <circle cx={sx(f, o.qd)} cy={y} r={5.5} className="fill-demand stroke-surface" strokeWidth={2} />
          <text x={(sx(f, lo) + sx(f, hi)) / 2} y={y + (kind === 'ceiling' ? 24 : -14)} textAnchor="middle" className="fill-bad text-[12px] font-bold">
            {gapLabel}
          </text>
        </>
      )}
      <circle cx={f.ml + 16} cy={y} r={active ? 9 : 7} className="fill-bad stroke-surface" strokeWidth={2.5} />
    </g>
  );
}

function ProbeLine({ f, price, D, S, eqP, active, fmtPrice }: { f: Frame; price: number; D: Demand; S: Supply; eqP: number; active: boolean; fmtPrice: (x: number) => string }) {
  const y = sy(f, price);
  const d = qd(D, price);
  const s = qs(S, price);
  const lo = Math.min(d, s);
  const hi = Math.max(d, s);
  const above = price > eqP + 1e-9;
  const below = price < eqP - 1e-9;
  return (
    <g>
      <line x1={f.ml} x2={f.W - f.mr} y1={y} y2={y} className="stroke-accent" strokeWidth={active ? 3.5 : 2} />
      {(above || below) && (
        <>
          <rect x={sx(f, lo)} y={y - 6} width={Math.max(0, sx(f, hi) - sx(f, lo))} height={12} rx={4} className="fill-bad/20" />
          <text x={(sx(f, lo) + sx(f, hi)) / 2} y={y + (above ? -12 : 22)} textAnchor="middle" className="fill-bad text-[12px] font-bold">
            {above ? 'Surplus' : 'Shortage'}
          </text>
          <text x={f.ml + 30} y={y + (above ? 18 : -10)} className="fill-accent text-[16px] font-bold">
            {above ? '↓' : '↑'}
          </text>
        </>
      )}
      <circle cx={sx(f, d)} cy={y} r={6} className="fill-demand stroke-surface" strokeWidth={2} />
      <circle cx={sx(f, s)} cy={y} r={6} className="fill-supply stroke-surface" strokeWidth={2} />
      <text x={f.W - f.mr} y={y - 6} textAnchor="end" className="num fill-accent text-[12px] font-semibold">
        P = {fmtPrice(price)}
      </text>
      <circle cx={f.ml + 16} cy={y} r={active ? 9 : 7} className="fill-accent stroke-surface" strokeWidth={2.5} />
    </g>
  );
}

function Grip({ f, seg, t, cls }: { f: Frame; seg: [number, number, number, number]; t: number; cls: string }) {
  const q = seg[0] + (seg[2] - seg[0]) * t;
  const p = seg[1] + (seg[3] - seg[1]) * t;
  return (
    <g className="pointer-events-none" opacity={0.9}>
      <circle cx={sx(f, q)} cy={sy(f, p)} r={9} className={`fill-surface ${cls}`} strokeWidth={2.5} />
      <text x={sx(f, q)} y={sy(f, p) + 3.5} textAnchor="middle" className="fill-muted text-[9px] font-bold">
        ⇆
      </text>
    </g>
  );
}

export function BurdenBar({ buyers, buyersLabel, sellersLabel }: { buyers: number; buyersLabel: string; sellersLabel: string }) {
  const b = Math.round(buyers * 100);
  return (
    <div>
      <div className="mb-1 flex justify-between text-xs font-medium">
        <span className="text-demand">
          {buyersLabel}: <span className="num">{b}%</span>
        </span>
        <span className="text-muted">Soliq yuki (tax burden)</span>
        <span className="text-supply">
          {sellersLabel}: <span className="num">{100 - b}%</span>
        </span>
      </div>
      <div className="flex h-3.5 overflow-hidden rounded-full border-2 border-ink">
        <div className="bg-demand transition-all duration-300" style={{ width: `${b}%` }} />
        <div className="bg-supply transition-all duration-300" style={{ width: `${100 - b}%` }} />
      </div>
    </div>
  );
}

// ---------- explanations (Uzbek, then English) ----------

function explain(x: {
  s: SDState;
  eq: { P: number; Q: number };
  eq0: { P: number; Q: number };
  ceiling: ReturnType<typeof priceCeiling> | null;
  floor: ReturnType<typeof priceFloor> | null;
  tx: ReturnType<typeof taxOutcome> | null;
  V: (typeof VOCAB)[SDContext];
  price: (n: number) => string;
  qty: (n: number) => string;
  unit: string;
  shiftedD: boolean;
  shiftedS: boolean;
  base: { D: Demand; S: Supply };
  ctx: SDContext;
}): string {
  const { s, eq, eq0, ceiling, floor, tx, V, price, qty, unit } = x;
  const u = unit ? ` ${unit}` : '';

  if (s.mode === 'market' && s.view === 'move') {
    const d = qd(s.D, s.probe);
    const sq = qs(s.S, s.probe);
    if (Math.abs(d - sq) < Math.max(0.5, eq.Q * 0.01))
      return `Bu narx muvozanatga teng: ${V.buyers} ${qty(d)}${u} olishni, ${V.sellers} ${qty(sq)}${u} sotishni xohlaydi. Hech qanday bosim yo'q — bozor "tozalangan".`;
    if (s.probe > eq.P)
      return `Narx ${price(s.probe)} muvozanatdan (${price(eq.P)}) **yuqori**. Taklif miqdori ${qty(sq)}, talab miqdori esa ${qty(d)} — **${V.surplus}** ${qty(sq - d)}${u}. Sotuvchilar narxni tushira boshlaydi.\n\nE'tibor bering: egri chiziqlar joyidan qimirlamadi. Narx o'zgarganda biz faqat **egri chiziq bo'ylab harakatlanamiz** (movement along the curve) — bu "talab miqdori" va "taklif miqdori"ning o'zgarishi, talab yoki taklifning o'zi emas.`;
    return `Narx ${price(s.probe)} muvozanatdan (${price(eq.P)}) **past**. Talab miqdori ${qty(d)}, taklif miqdori atigi ${qty(sq)} — **${V.shortage}** ${qty(d - sq)}${u}. Navbatlar paydo bo'ladi, sotuvchilar narxni ko'taradi.\n\nEgri chiziqlar joyida turibdi: bu **egri chiziq bo'ylab harakat**, siljish emas.`;
  }

  if (ceiling) {
    if (!ceiling.binding)
      return `Narx shifti ${price(s.control)} muvozanat narxidan (${price(eq.P)}) **yuqori**, shuning uchun u **not binding** (ta'sirsiz): bozor o'z muvozanatiga yetadi, ${qty(eq.Q)}${u} sotiladi. Shiftni muvozanatdan pastga suring — nima bo'lishini ko'ring.`;
    return `Narx shifti ${price(s.control)} muvozanat narxidan (${price(eq.P)}) **past** — demak u **binding** (ta'sirli). Bu narxda ${V.buyers} ${qty(ceiling.qd)}${u} xohlaydi, ${V.sellers} esa faqat ${qty(ceiling.qs)}${u} taklif qiladi: **${V.shortage}** ${qty(ceiling.gap)}${u}.\n\nNarx ko'tarila olmagani uchun tovar navbat, tanish-bilish yoki pora orqali taqsimlanadi. Sotilgan miqdor qisqa tomon — **taklif** bilan belgilanadi (${qty(ceiling.Q)}${u}).`;
  }

  if (floor) {
    if (!floor.binding)
      return `Narx tubi ${price(s.control)} muvozanat narxidan (${price(eq.P)}) **past**, shuning uchun u **not binding**: bozor narxi baribir ${price(eq.P)} bo'ladi. Tubni muvozanatdan yuqoriga ko'taring.`;
    const labor = x.ctx === 'labor';
    return `Narx tubi ${price(s.control)} muvozanatdan (${price(eq.P)}) **yuqori** — u **binding**. ${cap(V.sellers)} ${qty(floor.qs)}${u} taklif qiladi, ${V.buyers} esa faqat ${qty(floor.qd)}${u} oladi: **${V.surplus}** ${qty(floor.gap)}${u}.${
      labor
        ? '\n\nIsh topgan ishchilar yuqoriroq maosh oladi, lekin ba\'zilar umuman ish topa olmaydi — eng kam ish haqining asosiy "narxi" shu.'
        : '\n\nSotilgan miqdor endi **talab** bilan cheklangan: kim sotishga ulgursa (yoki tanish orqali), o\'sha sotadi.'
    }`;
  }

  if (tx) {
    if (s.tax <= 0) return `Soliq nolga teng. Slayderni suring: soliq ${V.buyers} to'laydigan narx bilan ${V.sellers} oladigan narx orasiga "pona" (wedge) qo'yadi.`;
    const who = s.taxOn === 'sellers' ? V.sellers : V.buyers;
    const curve = s.taxOn === 'sellers' ? 'taklif egri chizig\'i **yuqoriga**' : 'talab egri chizig\'i **pastga**';
    const b = Math.round(tx.buyerShare * 100);
    const heavier =
      b > 55 ? `Yukning katta qismi **${V.buyers}** zimmasida — demak talab taklifga qaraganda kamroq egiluvchan.` : b < 45 ? `Yukning katta qismi **${V.sellers}** zimmasida — demak taklif talabga qaraganda kamroq egiluvchan.` : 'Yuk taxminan teng bo\'lingan: ikki egri chiziq egiluvchanligi o\'xshash.';
    return `Qonun bo'yicha soliqni **${who}** to'laydi, shuning uchun ${curve} ${price(s.tax)} ga siljiydi. Natijada ${V.buyers} ${price(tx.Pb)} to'laydi (${price(eq.P)} edi), ${V.sellers} esa soliqdan keyin ${price(tx.Ps)} oladi. Miqdor ${qty(eq.Q)} → ${qty(tx.Q)}${u} ga kamaydi.\n\n${heavier} Soliqni kim to'lashini o'zgartirib ko'ring — **P_B, P_S va Q aynan bir xil qoladi**.`;
  }

  // market, shift view
  if (!x.shiftedD && !x.shiftedS)
    return `Muvozanat (equilibrium) — talab va taklif kesishgan nuqta: ${price(eq.P)} narxda ${V.buyers} xohlagan miqdor (${qty(eq.Q)}${u}) ${V.sellers} sotmoqchi bo'lgan miqdorga teng. Egri chiziqlarni sichqoncha/barmoq bilan torting yoki slayderlardan foydalaning.`;
  const parts: string[] = [];
  const dDir = qd(s.D, eq0.P) - eq0.Q;
  const sDir = qs(s.S, eq0.P) - eq0.Q;
  if (x.shiftedD) parts.push(dDir > 0 ? "talab **o'ngga** siljidi (increase in demand)" : dDir < 0 ? 'talab **chapga** siljidi (decrease in demand)' : 'talab egri chizig\'i burildi');
  if (x.shiftedS) parts.push(sDir > 0 ? "taklif **o'ngga** siljidi (increase in supply)" : sDir < 0 ? 'taklif **chapga** siljidi (decrease in supply)' : 'taklif egri chizig\'i burildi');
  const dirWord = (a: number, b: number) => (b > a + 1e-6 ? 'oshdi' : b < a - 1e-6 ? 'kamaydi' : "o'zgarmadi");
  return `${cap(parts.join(', '))}. Yangi muvozanat: ${V.price} ${price(eq0.P)} → ${price(eq.P)} (${dirWord(eq0.P, eq.P)}), miqdor ${qty(eq0.Q)} → ${qty(eq.Q)} (${dirWord(eq0.Q, eq.Q)}).\n\nKulrang uzuq chiziqlar — eski egri chiziqlar. Egri chiziq **siljiganda** (shift) har bir narxdagi miqdor o'zgaradi; bu narxdan boshqa omil (daromad, xomashyo narxi, texnologiya…) o'zgarganini bildiradi.`;
}

function explainEn(x: Parameters<typeof explain>[0]): string {
  const { s, eq, eq0, ceiling, floor, tx, V, price, qty, unit } = x;
  const u = unit ? ` ${unit}` : '';

  if (s.mode === 'market' && s.view === 'move') {
    const d = qd(s.D, s.probe);
    const sq = qs(s.S, s.probe);
    if (Math.abs(d - sq) < Math.max(0.5, eq.Q * 0.01))
      return `This price is the equilibrium: ${V.buyers} want to buy ${qty(d)}${u} and ${V.sellers} want to sell ${qty(sq)}${u}. There is no pressure on the price — the market “clears”.`;
    if (s.probe > eq.P)
      return `The price ${price(s.probe)} is **above** equilibrium (${price(eq.P)}). Quantity supplied is ${qty(sq)} but quantity demanded only ${qty(d)} — a **${V.surplus}** of ${qty(sq - d)}${u}. Sellers start cutting the price.\n\nNotice that the curves did not move. When the price changes we only **move along the curves** — a change in “quantity demanded” and “quantity supplied”, not in demand or supply themselves.`;
    return `The price ${price(s.probe)} is **below** equilibrium (${price(eq.P)}). Quantity demanded is ${qty(d)} but quantity supplied only ${qty(sq)} — a **${V.shortage}** of ${qty(d - sq)}${u}. Queues form and sellers raise the price.\n\nThe curves stay put: this is a **movement along the curves**, not a shift.`;
  }

  if (ceiling) {
    if (!ceiling.binding)
      return `The price ceiling ${price(s.control)} is **above** the equilibrium price (${price(eq.P)}), so it is **not binding**: the market reaches its equilibrium and ${qty(eq.Q)}${u} are sold. Drag the ceiling below equilibrium and see what happens.`;
    return `The price ceiling ${price(s.control)} is **below** the equilibrium price (${price(eq.P)}), so it is **binding**. At this price ${V.buyers} want ${qty(ceiling.qd)}${u} but ${V.sellers} offer only ${qty(ceiling.qs)}${u}: a **${V.shortage}** of ${qty(ceiling.gap)}${u}.\n\nBecause the price cannot rise, the good is rationed by queues, connections, or bribes. The quantity sold is set by the short side — **supply** (${qty(ceiling.Q)}${u}).`;
  }

  if (floor) {
    if (!floor.binding)
      return `The price floor ${price(s.control)} is **below** the equilibrium price (${price(eq.P)}), so it is **not binding**: the market price is still ${price(eq.P)}. Raise the floor above equilibrium.`;
    const labor = x.ctx === 'labor';
    return `The price floor ${price(s.control)} is **above** equilibrium (${price(eq.P)}), so it is **binding**. ${cap(V.sellers)} offer ${qty(floor.qs)}${u} but ${V.buyers} take only ${qty(floor.qd)}${u}: a **${V.surplus}** of ${qty(floor.gap)}${u}.${
      labor
        ? '\n\nWorkers who find jobs earn more, but some cannot find work at all — that is the main “cost” of a minimum wage.'
        : '\n\nThe quantity sold is now limited by **demand**: whoever gets in first (or has connections) gets to sell.'
    }`;
  }

  if (tx) {
    if (s.tax <= 0) return `The tax is zero. Move the slider: a tax drives a “wedge” between the price ${V.buyers} pay and the price ${V.sellers} receive.`;
    const who = s.taxOn === 'sellers' ? V.sellers : V.buyers;
    const curve = s.taxOn === 'sellers' ? 'the supply curve shifts **up**' : 'the demand curve shifts **down**';
    const b = Math.round(tx.buyerShare * 100);
    const heavier =
      b > 55
        ? `Most of the burden falls on **${V.buyers}** — so demand is less elastic than supply.`
        : b < 45
          ? `Most of the burden falls on **${V.sellers}** — so supply is less elastic than demand.`
          : 'The burden is shared about equally: the two curves have similar elasticities.';
    return `By law the tax is paid by **${who}**, so ${curve} by ${price(s.tax)}. As a result ${V.buyers} pay ${price(tx.Pb)} (it was ${price(eq.P)}) and ${V.sellers} receive ${price(tx.Ps)} after tax. The quantity falls from ${qty(eq.Q)} to ${qty(tx.Q)}${u}.\n\n${heavier} Switch who pays the tax — **P_B, P_S, and Q stay exactly the same**.`;
  }

  if (!x.shiftedD && !x.shiftedS)
    return `Equilibrium is where supply and demand cross: at ${price(eq.P)} the quantity ${V.buyers} want (${qty(eq.Q)}${u}) equals the quantity ${V.sellers} want to sell. Drag the curves with the mouse or a finger, or use the sliders.`;
  const parts: string[] = [];
  const dDir = qd(s.D, eq0.P) - eq0.Q;
  const sDir = qs(s.S, eq0.P) - eq0.Q;
  if (x.shiftedD) parts.push(dDir > 0 ? 'demand shifted **right** (an increase in demand)' : dDir < 0 ? 'demand shifted **left** (a decrease in demand)' : 'the demand curve rotated');
  if (x.shiftedS) parts.push(sDir > 0 ? 'supply shifted **right** (an increase in supply)' : sDir < 0 ? 'supply shifted **left** (a decrease in supply)' : 'the supply curve rotated');
  const dirWord = (a: number, b: number) => (b > a + 1e-6 ? 'up' : b < a - 1e-6 ? 'down' : 'unchanged');
  return `${cap(parts.join(', '))}. New equilibrium: ${V.price} ${price(eq0.P)} → ${price(eq.P)} (${dirWord(eq0.P, eq.P)}), quantity ${qty(eq0.Q)} → ${qty(eq.Q)} (${dirWord(eq0.Q, eq.Q)}).\n\nThe grey dashed lines are the old curves. When a curve **shifts**, the quantity at every price changes; this means something other than the price (income, input prices, technology…) has changed.`;
}
