import { useState } from 'react';
import { consumerSurplus, equilibrium, fmt, producerSurplus, qd, qs, type Demand, type Supply } from '../../lib/econ';
import { Segmented, Slider } from '../ui/Kit';
import { RichText } from '../ui/RichText';
import { makeFrame, polygon, sx, sy, ticks, type Frame } from './plot';
import { useWidth } from './useWidth';

function Axes({ f, xLabel, yLabel, xStep }: { f: Frame; xLabel: string; yLabel: string; xStep?: number }) {
  const xt = xStep ? Array.from({ length: Math.floor(f.xMax / xStep) + 1 }, (_, i) => i * xStep) : ticks(f.xMax);
  return (
    <g>
      {ticks(f.yMax).map((t) => (
        <g key={`y${t}`}>
          <line x1={f.ml} x2={f.W - f.mr} y1={sy(f, t)} y2={sy(f, t)} className="stroke-line" opacity={t === 0 ? 0 : 0.6} />
          <text x={f.ml - 8} y={sy(f, t) + 4} textAnchor="end" className="num fill-muted text-[11px]">
            ${fmt(t)}
          </text>
        </g>
      ))}
      {xt.map((t) => (
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

function Card({ title, children, explain }: { title: string; children: React.ReactNode; explain: string }) {
  return (
    <figure className="card my-6 overflow-hidden">
      <div className="border-b-2 border-ink bg-marker px-4 py-3 text-[#111]">
        <figcaption className="font-display text-[14px] font-bold">
          <RichText text={title} />
        </figcaption>
      </div>
      {children}
      <div className="border-t-2 border-ink bg-pen/[0.07] px-4 py-3">
        <div className="kicker mb-1 text-[16px]">Nimani ko'ryapsiz? ✎</div>
        <RichText text={explain} block className="prose-uz text-[15px]" />
      </div>
    </figure>
  );
}

const PERSON_COLORS = ['--demand', '--good', '--tax', '--warn', '--supply', '--bad'];

/**
 * Ch. 7 Figures 1–2 and 4–5: an auction with a few buyers (willingness to pay) or sellers (cost).
 * The step curve is drawn from the values; each trader's surplus is a rectangle.
 */
export function StepSurplus({
  kind,
  people,
  title,
  initialPrice,
  maxPrice,
  unitLabel,
}: {
  kind: 'buyers' | 'sellers';
  people: { name: string; value: number }[];
  title: string;
  initialPrice: number;
  maxPrice: number;
  unitLabel: string;
}) {
  const [price, setPrice] = useState(initialPrice);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const sorted = [...people].sort((a, b) => (kind === 'buyers' ? b.value - a.value : a.value - b.value));
  const f = makeFrame(width, sorted.length + 0.6, maxPrice * 1.1, 0.6);
  // A trader whose value equals the price is indifferent; as in the book's auctions, they drop out.
  const trades = sorted.filter((p) => (kind === 'buyers' ? p.value > price + 1e-9 : p.value < price - 1e-9));
  const total = trades.reduce((s, p) => s + Math.abs(p.value - price), 0);
  const fill = kind === 'buyers' ? 'fill-demand' : 'fill-supply';

  // Step curve: buyers — height of each unit is that buyer's WTP; sellers — cost.
  const stepPts: [number, number][] = [];
  sorted.forEach((p, i) => {
    stepPts.push([i, p.value], [i + 1, p.value]);
  });

  const who = trades.map((p) => `${p.name} (${kind === 'buyers' ? `$${fmt(p.value)} − $${fmt(price)}` : `$${fmt(price)} − $${fmt(p.value)}`} = **$${fmt(Math.abs(p.value - price))}**)`);
  const explain =
    trades.length === 0
      ? kind === 'buyers'
        ? `Narx $${fmt(price)} — hech kimning to'lashga tayyorligi bundan yuqori emas, hech kim sotib olmaydi. Narxni pasaytiring.`
        : `Narx $${fmt(price)} — hech kimning xarajati bundan past emas, hech kim ishni olmaydi. Narxni oshiring.`
      : `Narx **$${fmt(price)}** da ${trades.length} ta ${kind === 'buyers' ? 'xaridor sotib oladi' : 'sotuvchi sotadi'}: ${who.join(', ')}. Jami **${kind === 'buyers' ? 'consumer' : 'producer'} surplus = $${fmt(total)}**.\n\n${
          kind === 'buyers'
            ? "Talab egri chizig'ining balandligi har bir miqdorda **marginal xaridor**ning to'lashga tayyorligini ko'rsatadi. Narx ostidagi emas, **talab ostidagi va narx ustidagi** maydon — consumer surplus."
            : "Taklif egri chizig'ining balandligi **marginal sotuvchi**ning xarajatini ko'rsatadi. **Narx ostidagi va taklif ustidagi** maydon — producer surplus."
        }`;

  return (
    <Card title={title} explain={explain}>
      <div className="grid md:grid-cols-[minmax(0,1fr)_15rem]">
        <div ref={wrapRef} className="min-w-0 p-1">
          <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label={title}>
            <Axes f={f} xLabel={unitLabel} yLabel="Price" xStep={1} />
            {trades.map((p) => {
              const i = sorted.indexOf(p);
              const top = Math.max(p.value, price);
              const bottom = Math.min(p.value, price);
              return (
                <g key={p.name}>
                  <rect x={sx(f, i)} y={sy(f, top)} width={sx(f, i + 1) - sx(f, i)} height={sy(f, bottom) - sy(f, top)} className={`${fill}/25`} />
                  <text x={(sx(f, i) + sx(f, i + 1)) / 2} y={(sy(f, top) + sy(f, bottom)) / 2 + 4} textAnchor="middle" className="num fill-ink text-[11px] font-bold">
                    ${fmt(top - bottom)}
                  </text>
                </g>
              );
            })}
            <polyline points={stepPts.map(([q, p]) => `${sx(f, q)},${sy(f, p)}`).join(' ')} fill="none" className={kind === 'buyers' ? 'stroke-demand' : 'stroke-supply'} strokeWidth={3} />
            {sorted.map((p, i) => (
              <text key={p.name} x={(sx(f, i) + sx(f, i + 1)) / 2} y={sy(f, p.value) - 6} textAnchor="middle" className="fill-ink text-[11px] font-semibold">
                {p.name}
              </text>
            ))}
            <line x1={f.ml} x2={f.W - f.mr} y1={sy(f, price)} y2={sy(f, price)} className="stroke-pen" strokeWidth={2.5} />
            <text x={f.W - f.mr} y={sy(f, price) - 6} textAnchor="end" className="num fill-pen text-[12px] font-bold">
              P = ${fmt(price)}
            </text>
          </svg>
        </div>
        <div className="border-t-2 border-dashed border-ink/30 p-4 text-sm md:border-l-2 md:border-t-0">
          <div className="kicker mb-2">{kind === 'buyers' ? 'Willingness to pay' : 'Cost'}</div>
          <ul className="space-y-1">
            {sorted.map((p, i) => {
              const inn = trades.includes(p);
              return (
                <li key={p.name} className={`flex justify-between ${inn ? 'font-semibold' : 'text-muted line-through'}`}>
                  <span>
                    <span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-sm" style={{ background: `rgb(var(${PERSON_COLORS[i % PERSON_COLORS.length]}))` }} />
                    {p.name}
                  </span>
                  <span className="num">${fmt(p.value)}</span>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 rounded-lg border-2 border-ink bg-marker px-2 py-1 text-center font-bold text-[#111]">
            {kind === 'buyers' ? 'CS' : 'PS'} = ${fmt(total)}
          </div>
        </div>
      </div>
      <div className="border-t-2 border-dashed border-ink/30 px-4 py-3">
        <Slider label="Bozor narxi (auksion natijasi)" value={price} min={0} max={maxPrice} step={maxPrice / 200} onChange={setPrice} display={`$${fmt(price)}`} />
      </div>
    </Card>
  );
}

/** Ch. 7 Figures 3 and 6: how a price change splits into a gain for existing traders and for new ones. */
export function PriceChangeSurplus({ side }: { side: 'consumers' | 'producers' }) {
  const D: Demand = { a: 10, b: 0.1 };
  const S: Supply = { c: 0, d: 0.1 };
  const isC = side === 'consumers';
  const [p1, setP1] = useState(isC ? 6 : 4);
  const [p2, setP2] = useState(isC ? 4 : 6);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const f = makeFrame(width, 100, 10, 0.62);
  const q = (P: number) => (isC ? qd(D, P) : qs(S, P));
  const q1 = q(p1);
  const q2 = q(p2);
  const surplus = (P: number) => (isC ? consumerSurplus(D, P) : producerSurplus(S, P));
  const s1 = surplus(p1);
  const s2 = surplus(p2);
  const better = isC ? p2 < p1 : p2 > p1;
  const lo = Math.min(p1, p2);
  const hi = Math.max(p1, p2);
  const qMin = Math.min(q1, q2);
  const qMaxV = Math.max(q1, q2);
  const rect = Math.abs(p1 - p2) * qMin;
  const tri = 0.5 * Math.abs(p1 - p2) * (qMaxV - qMin);
  const curve = isC ? (Q: number) => D.a - D.b * Q : (Q: number) => S.c + S.d * Q;
  const baseP = better ? p1 : p2; // the "initial" (smaller-surplus) price
  const triangle: [number, number][] = isC ? [[0, D.a], [Math.min(q1, q2), curve(Math.min(q1, q2))], [0, curve(Math.min(q1, q2))]] : [[0, S.c], [Math.min(q1, q2), curve(Math.min(q1, q2))], [0, curve(Math.min(q1, q2))]];
  const explain = better
    ? `Narx $${fmt(p1)} → $${fmt(p2)}: ${isC ? "xaridorlar uchun yaxshi" : "sotuvchilar uchun yaxshi"}. ${isC ? 'Consumer' : 'Producer'} surplus $${fmt(s1)} → **$${fmt(s2)}**. O'sish ikki qismdan iborat:\n\n- **To'rtburchak (BCED)** = $${fmt(rect)}: avval ham ${isC ? 'sotib olayotganlar endi kamroq to\'laydi' : 'sotayotganlar endi ko\'proq oladi'}.\n- **Uchburchak (CEF)** = $${fmt(tri)}: narx o'zgargani uchun bozorga **yangi ${isC ? 'xaridorlar' : 'sotuvchilar'}** kirdi.`
    : `Narx $${fmt(p1)} → $${fmt(p2)}: ${isC ? 'xaridorlar' : 'sotuvchilar'} uchun yomon. Surplus $${fmt(s1)} → $${fmt(s2)} ga kamaydi (to'rtburchak $${fmt(rect)} + uchburchak $${fmt(tri)} yo'qoldi). Ikkinchi narxni ${isC ? 'pastroq' : 'yuqoriroq'} qilib ko'ring.`;
  return (
    <Card title={isC ? 'Figure 3 — Narx tushsa consumer surplus qanday oshadi' : 'Figure 6 — Narx oshsa producer surplus qanday oshadi'} explain={explain}>
      <div className="grid md:grid-cols-[minmax(0,1fr)_15rem]">
        <div ref={wrapRef} className="min-w-0 p-1">
          <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="price change surplus">
            <Axes f={f} xLabel="Quantity" yLabel="Price" />
            <polygon points={polygon(f, triangle)} className={isC ? 'fill-demand/25' : 'fill-supply/25'} />
            <polygon points={polygon(f, [[0, lo], [qMin, lo], [qMin, hi], [0, hi]])} className="fill-marker/60" />
            <polygon points={polygon(f, isC ? [[qMin, hi], [qMaxV, lo], [qMin, lo]] : [[qMin, lo], [qMaxV, hi], [qMin, hi]])} className="fill-good/40" />
            <line x1={sx(f, 0)} y1={sy(f, curve(0))} x2={sx(f, 100)} y2={sy(f, curve(100))} className={isC ? 'stroke-demand' : 'stroke-supply'} strokeWidth={3} />
            {[p1, p2].map((P, i) => (
              <g key={i}>
                <line x1={f.ml} x2={sx(f, q(P))} y1={sy(f, P)} y2={sy(f, P)} className="stroke-ink" strokeDasharray="4 4" />
                <line x1={sx(f, q(P))} x2={sx(f, q(P))} y1={sy(f, P)} y2={f.H - f.mb} className="stroke-ink" strokeDasharray="4 4" />
                <text x={f.ml + 6} y={sy(f, P) - 5} className="num fill-ink text-[11px] font-bold">
                  P{i + 1} ${fmt(P)}
                </text>
              </g>
            ))}
            <text x={sx(f, qMin / 2)} y={(sy(f, lo) + sy(f, hi)) / 2 + 4} textAnchor="middle" className="fill-ink text-[11px] font-bold">
              BCED
            </text>
            <text x={sx(f, (qMin * 2 + qMaxV) / 3)} y={(sy(f, lo) * 2 + sy(f, hi)) / 3 + (isC ? 0 : 0)} textAnchor="middle" className="fill-ink text-[11px] font-bold">
              CEF
            </text>
          </svg>
        </div>
        <div className="border-t-2 border-dashed border-ink/30 p-4 text-sm md:border-l-2 md:border-t-0">
          <div className="space-y-1.5">
            <Row k={`Surplus at P1`} v={`$${fmt(s1)}`} />
            <Row k={`Surplus at P2`} v={`$${fmt(s2)}`} />
            <Row k="BCED (eski ishtirokchilar)" v={`$${fmt(rect)}`} />
            <Row k="CEF (yangi ishtirokchilar)" v={`$${fmt(tri)}`} />
          </div>
          <p className="mt-3 text-xs text-muted">Sariq — to'rtburchak, yashil — uchburchak, ko'k/to'q sariq — {baseP === p1 ? "boshlang'ich" : 'qolgan'} ortiqchalik.</p>
        </div>
      </div>
      <div className="grid gap-x-6 border-t-2 border-dashed border-ink/30 px-4 py-3 sm:grid-cols-2">
        <Slider label="P1 (boshlang'ich narx)" value={p1} min={0.5} max={9.5} step={0.25} onChange={setP1} display={`$${fmt(p1)}`} />
        <Slider label="P2 (yangi narx)" value={p2} min={0.5} max={9.5} step={0.25} onChange={setP2} display={`$${fmt(p2)}`} />
      </div>
    </Card>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-2">
      <span className="text-muted">{k}</span>
      <span className="num font-semibold">{v}</span>
    </div>
  );
}

/** Ch. 7 Figure 8: total surplus is largest at the equilibrium quantity. */
export function EfficiencyExplorer() {
  const D: Demand = { a: 10, b: 0.1 };
  const S: Supply = { c: 1, d: 0.08 };
  const eq = equilibrium(D, S);
  const [Q, setQ] = useState(Math.round(eq.Q * 0.6));
  const [mode, setMode] = useState<'quantity' | 'allocation'>('quantity');
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const f = makeFrame(width, 100, 10, 0.62);
  const dP = (q: number) => D.a - D.b * q;
  const sP = (q: number) => S.c + S.d * q;
  // total surplus produced when exactly Q units are traded by the highest-value buyers and lowest-cost sellers
  const ts = (q: number) => (D.a - S.c) * q - ((D.b + S.d) * q * q) / 2;
  const best = ts(eq.Q);
  const now = ts(Q);
  const below = Q < eq.Q;
  const explain =
    Math.abs(Q - eq.Q) < 0.6
      ? `Q = ${fmt(Q)} ≈ muvozanat miqdori (${fmt(eq.Q, 1)}). Total surplus **maksimal** ($${fmt(best)}). Hech qanday qayta taqsimlash yoki miqdorni o'zgartirish uni oshira olmaydi — bozor **samarali** (efficient).`
      : below
        ? `Q = ${fmt(Q)} muvozanatdan **kam**. Oxirgi birlikda marginal xaridor uchun qiymat ($${fmt(dP(Q))}) marginal sotuvchi xarajatidan ($${fmt(sP(Q))}) **katta** — yana sotib-sotish ikkala tomonga foydali. Yo'qotilgan surplus (qizil) = **$${fmt(best - now)}**.`
        : `Q = ${fmt(Q)} muvozanatdan **ko'p**. Oxirgi birliklarda sotuvchi xarajati ($${fmt(sP(Q))}) xaridor qiymatidan ($${fmt(dP(Q))}) **katta** — ularni ishlab chiqarish surplusni kamaytiradi. Yo'qotish (qizil) = **$${fmt(best - now)}**.`;
  const qa = Math.min(Q, eq.Q);
  const qb = Math.max(Q, eq.Q);
  return (
    <Card title="Figure 8 — Muvozanat miqdori nega samarali" explain={mode === 'quantity' ? explain : "Muvozanatda **eng yuqori** to'lashga tayyorlikka ega xaridorlar (AE segmenti) sotib oladi va **eng past** xarajatli sotuvchilar (CE segmenti) sotadi. Agar tovarni EB dagi (past qiymatli) xaridorga yoki ED dagi (yuqori xarajatli) sotuvchiga bersak, total surplus kamayadi. Bu — bozor samaradorligining birinchi ikki xulosasi."}>
      <div className="px-4 pt-3">
        <Segmented size="sm" value={mode} onChange={setMode} options={[{ value: 'quantity', label: 'Miqdorni tanlash (3-xulosa)' }, { value: 'allocation', label: 'Kim sotadi/oladi (1–2-xulosa)' }]} />
      </div>
      <div className="grid md:grid-cols-[minmax(0,1fr)_15rem]">
        <div ref={wrapRef} className="min-w-0 p-1">
          <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="efficiency">
            <Axes f={f} xLabel="Quantity" yLabel="Price" />
            {mode === 'quantity' ? (
              <>
                <polygon points={polygon(f, [[0, D.a], [qa, dP(qa)], [qa, sP(qa)], [0, S.c]])} className="fill-good/30" />
                {Q !== eq.Q && <polygon points={polygon(f, [[qa, dP(qa)], [qb, dP(qb)], [qb, sP(qb)], [qa, sP(qa)]])} className="fill-bad/35" />}
                <line x1={sx(f, Q)} x2={sx(f, Q)} y1={sy(f, Math.max(dP(Q), sP(Q)))} y2={f.H - f.mb} className="stroke-pen" strokeWidth={2.5} />
                <circle cx={sx(f, Q)} cy={sy(f, dP(Q))} r={5.5} className="fill-demand" />
                <circle cx={sx(f, Q)} cy={sy(f, sP(Q))} r={5.5} className="fill-supply" />
                <text x={sx(f, Q) + 6} y={f.H - f.mb - 8} className="num fill-pen text-[12px] font-bold">
                  Q = {fmt(Q)}
                </text>
              </>
            ) : (
              <>
                <line x1={sx(f, 0)} y1={sy(f, D.a)} x2={sx(f, eq.Q)} y2={sy(f, eq.P)} className="stroke-good" strokeWidth={9} opacity={0.45} />
                <line x1={sx(f, 0)} y1={sy(f, S.c)} x2={sx(f, eq.Q)} y2={sy(f, eq.P)} className="stroke-good" strokeWidth={9} opacity={0.45} />
                <text x={sx(f, 5)} y={sy(f, D.a) + 4} className="fill-ink text-[13px] font-bold">A</text>
                <text x={sx(f, 95)} y={sy(f, dP(95)) + 18} className="fill-ink text-[13px] font-bold">B</text>
                <text x={sx(f, 4)} y={sy(f, S.c) - 8} className="fill-ink text-[13px] font-bold">C</text>
                <text x={sx(f, 95)} y={sy(f, Math.min(9.6, sP(95))) - 8} className="fill-ink text-[13px] font-bold">D</text>
                <line x1={f.ml} x2={f.W - f.mr} y1={sy(f, eq.P)} y2={sy(f, eq.P)} className="stroke-ink" strokeDasharray="4 4" />
              </>
            )}
            <line x1={sx(f, 0)} y1={sy(f, D.a)} x2={sx(f, 100)} y2={sy(f, dP(100))} className="stroke-demand" strokeWidth={3} />
            <line x1={sx(f, 0)} y1={sy(f, S.c)} x2={sx(f, 100)} y2={sy(f, Math.min(10, sP(100)))} className="stroke-supply" strokeWidth={3} />
            <circle cx={sx(f, eq.Q)} cy={sy(f, eq.P)} r={6} className="fill-marker stroke-ink" strokeWidth={2} />
            <text x={sx(f, eq.Q) + 9} y={sy(f, eq.P) - 8} className="fill-ink text-[12px] font-bold">
              E
            </text>
            <text x={sx(f, 100) - 4} y={sy(f, dP(100)) - 8} textAnchor="end" className="fill-demand text-[12px] font-bold">
              Demand (value to buyers)
            </text>
            <text x={sx(f, 100) - 4} y={sy(f, Math.min(10, sP(100))) + 16} textAnchor="end" className="fill-supply text-[12px] font-bold">
              Supply (cost to sellers)
            </text>
          </svg>
        </div>
        <div className="border-t-2 border-dashed border-ink/30 p-4 text-sm md:border-l-2 md:border-t-0">
          <div className="space-y-1.5">
            <Row k="Muvozanat Q*" v={fmt(eq.Q, 1)} />
            <Row k="Maks. total surplus" v={`$${fmt(best)}`} />
            {mode === 'quantity' && (
              <>
                <Row k="Tanlangan Q" v={fmt(Q)} />
                <Row k="Value to buyers (marginal)" v={`$${fmt(dP(Q))}`} />
                <Row k="Cost to sellers (marginal)" v={`$${fmt(sP(Q))}`} />
                <Row k="Total surplus" v={`$${fmt(now)}`} />
                <Row k="Yo'qotish" v={`$${fmt(best - now)}`} />
              </>
            )}
          </div>
        </div>
      </div>
      {mode === 'quantity' && (
        <div className="border-t-2 border-dashed border-ink/30 px-4 py-3">
          <Slider label="Ishlab chiqarilgan va iste'mol qilingan miqdor" value={Q} min={0} max={100} step={1} onChange={setQ} display={fmt(Q)} />
        </div>
      )}
    </Card>
  );
}
