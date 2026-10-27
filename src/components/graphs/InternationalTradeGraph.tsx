import { Sticker } from '../ui/Sticker';
import { useRef, useState, type PointerEvent as RPointerEvent } from 'react';
import { consumerSurplus, equilibrium, fmt, freeTrade, producerSurplus, qd, qs, tariff as tariffOutcome, type Demand, type Supply } from '../../lib/econ';
import { Segmented, Slider } from '../ui/Kit';
import { RichText } from '../ui/RichText';
import { clipLine, iy, makeFrame, polygon, svgPoint, sx, sy, ticks, type Frame } from './plot';
import { useWidth } from './useWidth';
import { tr } from '../../lib/lang';

type Mode = 'trade' | 'tariff';
type Region = { id: string; pts: [number, number][]; cls: string };

/**
 * Ch. 9 Figures 1–4: a small country facing a world price. In "trade" mode the world price can be
 * dragged above or below the domestic price (exporter or importer). In "tariff" mode an importer
 * adds a tariff (or an equivalent import quota) and the areas A–G of Figure 4 are shaded.
 */
export function InternationalTradeGraph({
  demand = { a: 10, b: 0.1 },
  supply = { c: 0, d: 0.1 },
  xMax = 100,
  yMax = 10,
  mode: initialMode = 'trade',
  worldPrice = 3,
  tariff: initialTariff = 1,
  title,
  labels = { x: 'Quantity of Textiles', y: 'Price of Textiles' },
}: {
  demand?: Demand;
  supply?: Supply;
  xMax?: number;
  yMax?: number;
  mode?: Mode;
  worldPrice?: number;
  tariff?: number;
  title?: string;
  labels?: { x: string; y: string };
}) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [pw, setPw] = useState(worldPrice);
  const [t, setT] = useState(initialTariff);
  const [quota, setQuota] = useState(false);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const svgRef = useRef<SVGSVGElement>(null);
  const dragging = useRef(false);
  const f: Frame = makeFrame(width, xMax, yMax);
  const D = demand;
  const S = supply;
  const eq = equilibrium(D, S);
  const P0 = eq.P;
  const Q0 = eq.Q;
  // In tariff mode the world price must be below the no-trade price.
  const world = mode === 'tariff' ? Math.min(pw, P0 - 0.05 * yMax) : pw;
  const ft = freeTrade(D, S, world);
  const tar = tariffOutcome(D, S, world, t);
  const regions: Region[] = [];
  const qd1 = qd(D, world);
  const qs1 = qs(S, world);
  const sStart = (P: number): [number, number][] => (S.c < 0 ? [[0, 0]] : [[0, Math.min(S.c, P)]]);

  if (mode === 'trade' && ft.role === 'exporter') {
    regions.push({ id: 'A', pts: [[0, D.a], [qd1, world], [0, world]], cls: 'fill-demand/30' });
    regions.push({ id: 'B', pts: [[0, world], [qd1, world], [Q0, P0], [0, P0]], cls: 'fill-marker/70' });
    regions.push({ id: 'C', pts: [[0, P0], [Q0, P0], ...sStart(P0)], cls: 'fill-supply/30' });
    regions.push({ id: 'D', pts: [[qd1, world], [qs1, world], [Q0, P0]], cls: 'fill-good/50' });
  } else if (mode === 'trade' && ft.role === 'importer') {
    regions.push({ id: 'A', pts: [[0, D.a], [Q0, P0], [0, P0]], cls: 'fill-demand/30' });
    regions.push({ id: 'B', pts: [[0, P0], [Q0, P0], [qs1, world], [0, world]], cls: 'fill-marker/70' });
    regions.push({ id: 'C', pts: [[0, world], [qs1, world], ...sStart(world)], cls: 'fill-supply/30' });
    regions.push({ id: 'D', pts: [[qs1, world], [Q0, P0], [qd1, world]], cls: 'fill-good/50' });
  } else if (mode === 'trade') {
    regions.push({ id: 'CS', pts: [[0, D.a], [Q0, P0], [0, P0]], cls: 'fill-demand/30' });
    regions.push({ id: 'PS', pts: [[0, P0], [Q0, P0], ...sStart(P0)], cls: 'fill-supply/30' });
  } else {
    const pt = tar.price;
    const { qd2, qs2 } = tar;
    regions.push({ id: 'A', pts: [[0, D.a], [Q0, P0], [0, P0]], cls: 'fill-demand/30' });
    regions.push({ id: 'B', pts: [[0, P0], [Q0, P0], [qd2, pt], [0, pt]], cls: 'fill-demand/15' });
    regions.push({ id: 'C', pts: [[0, pt], [qs2, pt], [qs1, world], [0, world]], cls: 'fill-marker/70' });
    regions.push({ id: 'D', pts: [[qs1, world], [qs2, pt], [qs2, world]], cls: 'fill-bad/45' });
    regions.push({ id: 'E', pts: [[qs2, pt], [qd2, pt], [qd2, world], [qs2, world]], cls: 'fill-tax/35' });
    regions.push({ id: 'F', pts: [[qd2, pt], [qd1, world], [qd2, world]], cls: 'fill-bad/45' });
    regions.push({ id: 'G', pts: [[0, world], [qs1, world], ...sStart(world)], cls: 'fill-supply/30' });
  }

  const centroid = (pts: [number, number][]) => {
    const n = pts.length;
    return [pts.reduce((s, p) => s + p[0], 0) / n, pts.reduce((s, p) => s + p[1], 0) / n] as [number, number];
  };

  const onDown = (e: RPointerEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return;
    const { y } = svgPoint(svg, e.clientX, e.clientY);
    if (Math.abs(y - sy(f, world)) < 22) {
      dragging.current = true;
      svg.setPointerCapture(e.pointerId);
    }
  };
  const onMove = (e: RPointerEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg || !dragging.current) return;
    const { y } = svgPoint(svg, e.clientX, e.clientY);
    setPw(Math.max(0.05 * yMax, Math.min(0.95 * yMax, iy(f, y))));
  };

  const dSeg = clipLine(f, D.a, -D.b);
  const sSeg = clipLine(f, S.c, S.d);
  const money = (x: number) => `${x < -1e-9 ? "−" : ""}$${fmt(Math.abs(x), 2)}`;

  // welfare table
  const base = { cs: consumerSurplus(D, P0), ps: producerSurplus(S, P0) };
  const rows =
    mode === 'trade'
      ? [
          ['Consumer surplus', money(base.cs), money(ft.cs), money(ft.dCS)],
          ['Producer surplus', money(base.ps), money(ft.ps), money(ft.dPS)],
          ['Total surplus', money(base.cs + base.ps), money(ft.total), money(ft.dTotal)],
        ]
      : [
          ['Consumer surplus', money(consumerSurplus(D, world)), money(consumerSurplus(D, tar.price)), money(tar.dCS)],
          ['Producer surplus', money(producerSurplus(S, world)), money(producerSurplus(S, tar.price)), money(tar.dPS)],
          [quota ? 'Licence holders (E)' : 'Government revenue (E)', '$0', money(tar.revenue), money(tar.revenue)],
          ['Total surplus', '', '', money(-tar.dwl)],
        ];

  const explain =
    mode === 'trade'
      ? ft.role === 'exporter'
        ? tr(`Jahon narxi (${money(world)}) ichki narxdan (${money(P0)}) **yuqori** → mamlakat bu tovarda **comparative advantage**ga ega va **eksportchi** bo'ladi: ichkarida ${fmt(qs1, 1)} ishlab chiqariladi, ${fmt(qd1, 1)} iste'mol qilinadi, **eksport ${fmt(qs1 - qd1, 1)}**.\n\nIshlab chiqaruvchilar yutadi (PS: C → B + C + D), iste'molchilar yutqazadi (CS: A + B → A). Yutuq yo'qotishdan **D** maydoniga ko'p — bu **gains from trade**.`, `The world price (${money(world)}) is **above** the domestic price (${money(P0)}) → the country has a **comparative advantage** in this good and becomes an **exporter**: it produces ${fmt(qs1, 1)}, consumes ${fmt(qd1, 1)}, and **exports ${fmt(qs1 - qd1, 1)}**.\n\nProducers gain (PS: C → B + C + D), consumers lose (CS: A + B → A). The gains exceed the losses by area **D** — the **gains from trade**.`)
        : ft.role === 'importer'
          ? tr(`Jahon narxi (${money(world)}) ichki narxdan (${money(P0)}) **past** → boshqa mamlakatlarda comparative advantage, bu mamlakat **importchi**: ichkarida ${fmt(qs1, 1)} ishlab chiqariladi, ${fmt(qd1, 1)} iste'mol qilinadi, **import ${fmt(qd1 - qs1, 1)}**.\n\nIste'molchilar yutadi (CS: A → A + B + D), ishlab chiqaruvchilar yutqazadi (PS: B + C → C). Sof yutuq — **D** maydoni.`, `The world price (${money(world)}) is **below** the domestic price (${money(P0)}) → other countries have the comparative advantage and this country is an **importer**: it produces ${fmt(qs1, 1)}, consumes ${fmt(qd1, 1)}, and **imports ${fmt(qd1 - qs1, 1)}**.\n\nConsumers gain (CS: A → A + B + D), producers lose (PS: B + C → C). The net gain is area **D**.`)
          : tr(`Jahon narxi ichki narxga teng — savdo yo'q. Sariq chiziqni yuqoriga yoki pastga torting.`, `The world price equals the domestic price — no trade. Drag the yellow line up or down.`)
      : tr(`Tarif ${money(t)}: ichki narx ${money(world)} → **${money(tar.price)}**. Import ${fmt(tar.imports1, 1)} → ${fmt(tar.imports2, 1)}. Ishlab chiqaruvchilar **C** ni yutadi, ${quota ? 'litsenziya egalari' : 'davlat'} **E** ni oladi, iste'molchilar C + D + E + F ni yo'qotadi.\n\n**D** — ortiqcha ishlab chiqarish (dunyo narxidan qimmat ishlab chiqarilgan birliklar), **F** — kam iste'mol. Sof yo'qotish **D + F = ${money(tar.dwl)}**.${quota ? '\n\nImport kvotasi xuddi shu narx va miqdorlarni beradi; farq faqat **E** kimga tegishida — davlatga emas, import litsenziyasi egalariga (ko\'pincha xorijiy firmalarga).' : ''}`, `A tariff of ${money(t)}: the domestic price goes from ${money(world)} to **${money(tar.price)}**. Imports ${fmt(tar.imports1, 1)} → ${fmt(tar.imports2, 1)}. Producers gain **C**, ${quota ? 'licence holders' : 'the government'} get **E**, consumers lose C + D + E + F.\n\n**D** is overproduction (units made at a cost above the world price), **F** is underconsumption. Deadweight loss **D + F = ${money(tar.dwl)}**.${quota ? '\n\nAn import quota gives the same prices and quantities; the only difference is who gets **E** — not the government but the holders of import licences (often foreign firms).' : ''}`);

  return (
    <figure className="card my-6 overflow-hidden">
      <div className="border-b-2 border-ink bg-marker px-4 py-3 text-[#111]">
        <figcaption className="font-display text-[14px] font-bold">
          <RichText text={title ?? (mode === 'trade' ? tr('Figures 2–3 — Eksport va import qiluvchi mamlakat', 'Figures 2–3 — An exporting and an importing country') : tr("Figure 4 — Tarifning ta'siri", 'Figure 4 — The effects of a tariff'))} />
        </figcaption>
      </div>
      <div className="flex flex-wrap gap-3 px-4 pt-3">
        <Segmented size="sm" value={mode} onChange={setMode} options={[{ value: 'trade', label: tr('Erkin savdo', 'Free trade') }, { value: 'tariff', label: tr('Tarif / kvota', 'Tariff / quota') }]} />
        {mode === 'tariff' && (
          <Segmented size="sm" value={quota ? 'q' : 't'} onChange={(v) => setQuota(v === 'q')} options={[{ value: 't', label: 'Tariff' }, { value: 'q', label: 'Import quota' }]} />
        )}
      </div>
      <div className="grid md:grid-cols-[minmax(0,1fr)_16rem]">
        <div ref={wrapRef} className="min-w-0 p-1">
          <svg
            ref={svgRef}
            width={f.W}
            height={f.H}
            viewBox={`0 0 ${f.W} ${f.H}`}
            className="block touch-pan-y select-none"
            onPointerDown={onDown}
            onPointerMove={onMove}
            onPointerUp={() => (dragging.current = false)}
            onPointerCancel={() => (dragging.current = false)}
            role="img"
            aria-label="international trade graph"
          >
            {ticks(yMax).map((v) => (
              <g key={`y${v}`}>
                <line x1={f.ml} x2={f.W - f.mr} y1={sy(f, v)} y2={sy(f, v)} className="stroke-line" opacity={v === 0 ? 0 : 0.6} />
                <text x={f.ml - 8} y={sy(f, v) + 4} textAnchor="end" className="num fill-muted text-[11px]">
                  ${fmt(v)}
                </text>
              </g>
            ))}
            {ticks(xMax).map((v) => (
              <text key={`x${v}`} x={sx(f, v)} y={f.H - f.mb + 16} textAnchor="middle" className="num fill-muted text-[11px]">
                {fmt(v)}
              </text>
            ))}
            <line x1={f.ml} y1={f.mt - 6} x2={f.ml} y2={f.H - f.mb} className="stroke-ink" strokeWidth={1.5} />
            <line x1={f.ml} y1={f.H - f.mb} x2={f.W - f.mr + 10} y2={f.H - f.mb} className="stroke-ink" strokeWidth={1.5} />
            <text x={f.ml + 6} y={f.mt + 2} className="fill-ink text-[12px] font-semibold">
              {labels.y}
            </text>
            <text x={f.W - f.mr + 8} y={f.H - f.mb + 32} textAnchor="end" className="fill-ink text-[12px] font-semibold">
              {labels.x}
            </text>
            {regions.map((r) => {
              const [cx, cy] = centroid(r.pts);
              return (
                <g key={r.id}>
                  <polygon points={polygon(f, r.pts)} className={r.cls} />
                  <text x={sx(f, cx)} y={sy(f, cy) + 4} textAnchor="middle" className="fill-ink text-[12px] font-bold">
                    {r.id}
                  </text>
                </g>
              );
            })}
            {dSeg && <line x1={sx(f, dSeg[0])} y1={sy(f, dSeg[1])} x2={sx(f, dSeg[2])} y2={sy(f, dSeg[3])} className="stroke-demand" strokeWidth={3} />}
            {sSeg && <line x1={sx(f, sSeg[0])} y1={sy(f, sSeg[1])} x2={sx(f, sSeg[2])} y2={sy(f, sSeg[3])} className="stroke-supply" strokeWidth={3} />}
            {dSeg && (
              <text x={sx(f, dSeg[2]) - 4} y={sy(f, dSeg[3]) - 8} textAnchor="end" className="fill-demand text-[12px] font-bold">
                Domestic demand
              </text>
            )}
            {sSeg && (
              <text x={sx(f, sSeg[2]) - 4} y={sy(f, sSeg[3]) + 16} textAnchor="end" className="fill-supply text-[12px] font-bold">
                Domestic supply
              </text>
            )}
            <circle cx={sx(f, Q0)} cy={sy(f, P0)} r={5} className="fill-surface stroke-ink" strokeWidth={2} />
            <text x={sx(f, Q0) + 8} y={sy(f, P0) - 6} className="fill-ink text-[11px] font-semibold">
              no trade ${fmt(P0)}
            </text>
            {/* world price */}
            <line x1={f.ml} x2={f.W - f.mr} y1={sy(f, world)} y2={sy(f, world)} className="stroke-ink" strokeWidth={3} />
            <circle cx={f.ml + 16} cy={sy(f, world)} r={8} className="fill-marker stroke-ink" strokeWidth={2.5} />
            <text x={f.W - f.mr} y={sy(f, world) + 16} textAnchor="end" className="fill-ink text-[12px] font-bold">
              World price ${fmt(world)}
            </text>
            {mode === 'tariff' && (
              <>
                <line x1={f.ml} x2={f.W - f.mr} y1={sy(f, tar.price)} y2={sy(f, tar.price)} className="stroke-tax" strokeWidth={2.5} strokeDasharray="7 5" />
                <text x={f.W - f.mr} y={sy(f, tar.price) - 6} textAnchor="end" className="fill-tax text-[12px] font-bold">
                  Price with {quota ? 'quota' : 'tariff'} ${fmt(tar.price)}
                </text>
              </>
            )}
            {/* exports / imports bracket */}
            {mode === 'trade' && ft.role !== 'no trade' && (
              <g>
                <line x1={sx(f, Math.min(qd1, qs1))} x2={sx(f, Math.max(qd1, qs1))} y1={sy(f, world) - 10} y2={sy(f, world) - 10} className="stroke-pen" strokeWidth={2.5} />
                <text x={sx(f, (qd1 + qs1) / 2)} y={sy(f, world) - 16} textAnchor="middle" className="fill-pen text-[12px] font-bold">
                  {ft.role === 'exporter' ? 'Exports' : 'Imports'}
                </text>
              </g>
            )}
          </svg>
        </div>
        <div className="border-t-2 border-dashed border-ink/30 p-4 text-sm md:border-l-2 md:border-t-0">
          <div className="kicker mb-2">{mode === 'trade' ? (ft.role === 'exporter' ? tr('Eksportchi', 'Exporter') : ft.role === 'importer' ? tr('Importchi', 'Importer') : tr("Savdo yo'q", 'No trade')) : tr('Tarif natijasi', 'Effect of the tariff')}</div>
          <table className="w-full text-xs">
            <thead>
              <tr className="text-left text-muted">
                <th />
                <th className="py-1">{mode === 'trade' ? 'Before' : 'Free trade'}</th>
                <th className="py-1">{mode === 'trade' ? 'After' : 'Tariff'}</th>
                <th className="py-1">Δ</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]} className="border-t border-dashed border-ink/20">
                  <td className="py-1 pr-1 font-semibold">{r[0]}</td>
                  <td className="num py-1">{r[1]}</td>
                  <td className="num py-1">{r[2]}</td>
                  <td className="num py-1 font-bold">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {mode === 'tariff' && (
            <div className="mt-3 space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-muted">DWL: D (overproduction)</span>
                <span className="num font-semibold">{money(tar.dwlProduction)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">DWL: F (underconsumption)</span>
                <span className="num font-semibold">{money(tar.dwlConsumption)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="grid gap-x-6 border-t-2 border-dashed border-ink/30 px-4 py-3 sm:grid-cols-2">
        <Slider label={tr('World price (jahon narxi)', 'World price')} value={world} min={0.05 * yMax} max={0.95 * yMax} step={yMax / 400} onChange={setPw} display={money(world)} />
        {mode === 'tariff' && <Slider label={quota ? tr("Kvota ta'siri (narx farqi)", 'Effect of the quota (price gap)') : tr('Tariff (bojxona boji)', 'Tariff')} value={t} min={0} max={Math.max(0.01, P0 - world)} step={yMax / 400} onChange={setT} display={money(t)} color="--tax" />}
      </div>
      <div className="border-t-2 border-ink bg-pen/[0.07] px-4 py-3">
        <div className="kicker mb-1 text-[16px]">{tr("Nimani ko'ryapsiz?", 'What are you seeing?')} <Sticker name="pencil" /></div>
        <RichText text={explain} block className="prose-uz text-[15px]" />
      </div>
    </figure>
  );
}
