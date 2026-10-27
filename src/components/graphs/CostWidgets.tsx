import { useState } from 'react';
import { fmt } from '../../lib/econ';
import { Segmented, Slider } from '../ui/Kit';
import { makeFrame, sx, sy } from './plot';
import { useWidth } from './useWidth';
import { Axes, Card } from './WidgetCard';

export interface CostRow {
  q: number;
  tc: number;
}
export interface CostMeasures extends CostRow {
  fc: number;
  vc: number;
  afc: number | null;
  avc: number | null;
  atc: number | null;
  /** marginal cost of moving from the previous row to this one */
  mc: number | null;
}

/** All the cost measures of Table 2 from a schedule of (quantity, total cost); the first row must be Q = 0. */
export function costMeasures(rows: CostRow[]): CostMeasures[] {
  const fc = rows[0].tc;
  return rows.map((r, i) => ({
    ...r,
    fc,
    vc: r.tc - fc,
    afc: r.q ? fc / r.q : null,
    avc: r.q ? (r.tc - fc) / r.q : null,
    atc: r.q ? r.tc / r.q : null,
    mc: i ? (r.tc - rows[i - 1].tc) / (r.q - rows[i - 1].q) : null,
  }));
}

/** The quantities at which average total cost is lowest (the efficient scale). */
export function efficientScale(rows: CostRow[]): number[] {
  const m = costMeasures(rows).filter((r) => r.atc != null);
  const min = Math.min(...m.map((r) => r.atc!));
  return m.filter((r) => Math.abs(r.atc! - min) < 1e-9).map((r) => r.q);
}

const seq = (tcs: number[]): CostRow[] => tcs.map((tc, q) => ({ q, tc }));
export const COST_PRESETS = {
  caleb: { label: "Caleb's Coffee (Table 2)", unit: 'cups', money: 2, rows: seq([3, 3.3, 3.8, 4.5, 5.4, 6.5, 7.8, 9.3, 11, 12.9, 15]) },
  jane: { label: "Jane's Juice (P9)", unit: 'vats', money: 2, rows: seq([30, 40, 55, 75, 100, 130, 165]) },
  pizza: { label: 'Pizzeria (P6)', unit: 'dozen', money: 0, rows: seq([300, 350, 390, 420, 450, 490, 540]) },
  vinnie: { label: "Vinnie (P7)", unit: 'houses', money: 0, rows: seq([200, 210, 220, 240, 280, 360, 520, 840]) },
  nimbus: {
    label: 'Nimbus brooms (P4)',
    unit: 'brooms',
    money: 2,
    rows: [0, 20, 50, 90, 120, 140, 150, 155].map((q, w) => ({ q, tc: 200 + 100 * w })),
  },
};
type PresetKey = keyof typeof COST_PRESETS;

/** Ch. 14 Table 2 and Figure 4: every measure of cost, plotted, for several book schedules. */
export function CostCurvesLab({ initial = 'caleb', price }: { initial?: PresetKey; price?: number }) {
  const [key, setKey] = useState<PresetKey>(initial);
  const [extraFC, setExtraFC] = useState(0);
  const [show, setShow] = useState({ mc: true, atc: true, avc: true, afc: true });
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const p = COST_PRESETS[key];
  const rows = p.rows.map((r) => ({ q: r.q, tc: r.tc + extraFC }));
  const m = costMeasures(rows);
  const qMax = rows[rows.length - 1].q;
  const ys = m.flatMap((r) => [r.mc ?? 0, Math.min(r.atc ?? 0, 4 * (m[m.length - 1].atc ?? 1))]);
  const yMax = Math.max(...ys) * 1.1 || 1;
  const f = makeFrame(width, qMax, yMax);
  const series = (sel: (r: CostMeasures) => number | null) =>
    m
      .filter((r) => sel(r) != null && r.q > 0)
      .map((r) => `${sx(f, r.q)},${sy(f, Math.min(yMax, sel(r)!))}`)
      .join(' ');
  const mcPts = m.filter((_, i) => i > 0).map((r, i) => `${sx(f, (r.q + rows[i].q) / 2)},${sy(f, Math.min(yMax, r.mc!))}`).join(' ');
  const es = efficientScale(rows);
  const dg = p.money;
  const money = (v: number | null) => (v == null ? '—' : `$${v.toFixed(dg)}`);
  const explain = `Fixed cost **${money(rows[0].tc)}** (Q = 0 dagi xarajat). Efficient scale (min ATC) — **${es.join(' yoki ')} ${p.unit}**, ATC = ${money(Math.min(...m.filter((r) => r.atc != null).map((r) => r.atc!)))}. Uchta qonuniyat: (1) MC oxir-oqibat oshadi — kamayuvchi marjinal mahsulot; (2) ATC **U** shaklida — AFC tushadi, AVC oshadi (“arqon tortish”); (3) **MC egri chizig'i ATC ni uning minimumida kesadi**: MC < ATC bo'lsa ATC tushadi, MC > ATC bo'lsa oshadi — xuddi keyingi fan bahosi va GPA kabi. ${extraFC ? `Qo'shimcha fixed cost $${extraFC} (masalan, litsenziya) faqat **AFC va ATC** ni siljitdi — MC va AVC o'zgarmadi (QQ 7, Problem 8).` : "Fixed cost slayderini o'zgartirib ko'ring: qaysi egri chiziqlar siljiydi?"}${price != null ? ` Narx $${price}.` : ''}`;
  return (
    <Card
      title="Table 2 / Figure 4 — Xarajatlarning barcha o'lchovlari"
      tabs={
        <>
          <Segmented size="sm" value={key} onChange={(v) => { setKey(v); setExtraFC(0); }} options={(Object.keys(COST_PRESETS) as PresetKey[]).map((k) => ({ value: k, label: COST_PRESETS[k].label }))} />
          {(['mc', 'atc', 'avc', 'afc'] as const).map((c) => (
            <button key={c} className="btn-ghost btn-sm" onClick={() => setShow({ ...show, [c]: !show[c] })}>
              {show[c] ? '✓ ' : ''}
              {c.toUpperCase()}
            </button>
          ))}
        </>
      }
      explain={explain}
      controls={<Slider label="Qo'shimcha fixed cost (litsenziya, lump-sum soliq)" value={extraFC} min={0} max={key === 'caleb' ? 5 : key === 'jane' ? 50 : 500} step={key === 'caleb' ? 0.5 : 10} onChange={setExtraFC} display={`+$${extraFC}`} color="--tax" />}
    >
      <div ref={wrapRef} className="min-w-0 p-1">
        <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="cost curves">
          <Axes f={f} x={`Quantity (${p.unit})`} y="Costs" money />
          {price != null && <line x1={sx(f, 0)} x2={sx(f, qMax)} y1={sy(f, price)} y2={sy(f, price)} className="stroke-demand" strokeWidth={2} strokeDasharray="6 4" />}
          {show.afc && <polyline points={series((r) => r.afc)} fill="none" className="stroke-muted" strokeWidth={2.5} />}
          {show.avc && <polyline points={series((r) => r.avc)} fill="none" className="stroke-good" strokeWidth={2.5} />}
          {show.atc && <polyline points={series((r) => r.atc)} fill="none" className="stroke-pen" strokeWidth={3} />}
          {show.mc && <polyline points={mcPts} fill="none" className="stroke-bad" strokeWidth={3} />}
          {show.atc &&
            es.map((q) => {
              const r = m.find((x) => x.q === q)!;
              return <circle key={q} cx={sx(f, q)} cy={sy(f, r.atc!)} r={6} className="fill-marker stroke-ink" strokeWidth={2} />;
            })}
          {[
            ['MC', 'fill-bad', show.mc],
            ['ATC', 'fill-pen', show.atc],
            ['AVC', 'fill-good', show.avc],
            ['AFC', 'fill-muted', show.afc],
          ]
            .filter((x) => x[2])
            .map(([l, c], i) => (
              <text key={l as string} x={f.W - f.mr - 4} y={f.mt + 14 + i * 15} textAnchor="end" className={`${c} text-[12px] font-bold`}>
                {l as string}
              </text>
            ))}
        </svg>
      </div>
      <div className="overflow-x-auto px-4 pb-3">
        <table className="num w-full min-w-[560px] text-right text-xs">
          <thead>
            <tr className="border-b-2 border-ink">
              {['Q', 'TC', 'FC', 'VC', 'AFC', 'AVC', 'ATC', 'MC'].map((h) => (
                <th key={h} className="px-1.5 py-1 font-sans">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {m.map((r) => (
              <tr key={r.q} className={`border-b border-line ${es.includes(r.q) ? 'bg-marker/30' : ''}`}>
                <td className="px-1.5 py-1">{r.q}</td>
                <td className="px-1.5">{money(r.tc)}</td>
                <td className="px-1.5">{money(r.fc)}</td>
                <td className="px-1.5">{money(r.vc)}</td>
                <td className="px-1.5">{money(r.afc)}</td>
                <td className="px-1.5">{money(r.avc)}</td>
                <td className="px-1.5 font-bold">{money(r.atc)}</td>
                <td className="px-1.5 text-bad">{money(r.mc)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-1 text-[11px] text-muted">MC — oldingi qatordan shu qatorgacha: ΔTC / ΔQ (kitobda qatorlar orasida yozilgan).</p>
      </div>
    </Card>
  );
}

const CHLOE = [0, 50, 90, 120, 140, 150, 155];

/** Ch. 14 Table 1 and Figure 2: Chloe's production function and total-cost curve. */
export function ProductionFunctionLab() {
  const [workers, setWorkers] = useState(3);
  const [wage, setWage] = useState(10);
  const [factory, setFactory] = useState(30);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const two = width > 640;
  const w = Math.max(260, (width - 16) / (two ? 2 : 1));
  const f1 = makeFrame(w, 6, 160, 0.8);
  const tc = (n: number) => factory + wage * n;
  const f2 = makeFrame(w, 160, Math.max(100, tc(6) * 1.1), 0.8);
  const mp = workers ? CHLOE[workers] - CHLOE[workers - 1] : null;
  const explain = `${workers} ishchi → **${CHLOE[workers]}** pechene soatiga, jami xarajat $${factory} + ${workers} × $${wage} = **$${tc(workers)}**. ${mp != null ? `${workers}-ishchining marjinal mahsuloti: **${mp}** pechene.` : ''} Marjinal mahsulot 50 → 40 → 30 → 20 → 10 → 5 kamayadi (**diminishing marginal product**): oshxona tiqilinch, ishchilar jihozni kutadi. Shuning uchun ishlab chiqarish funksiyasi **yotiqlashadi**, total-cost egri chizig'i esa **tiklashadi** — bir tanganing ikki tomoni (QQ 4).`;
  return (
    <Card
      title="Table 1 / Figure 2 — Chloe's Cookie Factory: production function va total cost"
      explain={explain}
      controls={
        <>
          <Slider label="Ishchilar soni" value={workers} min={0} max={6} step={1} onChange={setWorkers} display={`${workers}`} />
          <Slider label="Ishchi maoshi (soatiga)" value={wage} min={5} max={30} step={1} onChange={setWage} display={`$${wage}`} color="--supply" />
          <Slider label="Fabrika xarajati (soatiga)" value={factory} min={0} max={60} step={5} onChange={setFactory} display={`$${factory}`} color="--tax" />
        </>
      }
    >
      <div ref={wrapRef} className={`grid min-w-0 gap-2 p-1 ${two ? 'grid-cols-2' : ''}`}>
        <svg width={f1.W} height={f1.H} viewBox={`0 0 ${f1.W} ${f1.H}`} className="block" role="img" aria-label="production function">
          <Axes f={f1} x="Workers" y="Cookies per hour" />
          <polyline points={CHLOE.map((q, n) => `${sx(f1, n)},${sy(f1, q)}`).join(' ')} fill="none" className="stroke-good" strokeWidth={3} />
          {CHLOE.map((q, n) => (
            <circle key={n} cx={sx(f1, n)} cy={sy(f1, q)} r={n === workers ? 7 : 3.5} className={n === workers ? 'fill-marker stroke-ink' : 'fill-good'} strokeWidth={2} />
          ))}
          <text x={f1.ml + 8} y={f1.mt + 14} className="fill-good text-[11px] font-bold">(a) Production function</text>
        </svg>
        <svg width={f2.W} height={f2.H} viewBox={`0 0 ${f2.W} ${f2.H}`} className="block" role="img" aria-label="total cost curve">
          <Axes f={f2} x="Cookies per hour" y="Total cost" money />
          <polyline points={CHLOE.map((q, n) => `${sx(f2, q)},${sy(f2, tc(n))}`).join(' ')} fill="none" className="stroke-bad" strokeWidth={3} />
          {CHLOE.map((q, n) => (
            <circle key={n} cx={sx(f2, q)} cy={sy(f2, tc(n))} r={n === workers ? 7 : 3.5} className={n === workers ? 'fill-marker stroke-ink' : 'fill-bad'} strokeWidth={2} />
          ))}
          <text x={f2.ml + 8} y={f2.mt + 14} className="fill-bad text-[11px] font-bold">(b) Total-cost curve</text>
        </svg>
      </div>
    </Card>
  );
}

const PROFIT_CASES = {
  chloe: { label: 'Chloe (kapital)', revenue: 40000, explicit: 20000, implicit: 15000, note: "Chloe $300,000 jamg'armasini fabrikaga qo'ydi; 5% foizda u yiliga $15,000 olardi — **implicit** xarajat. (Daromad va explicit xarajat — misol uchun.)" },
  xavier: { label: 'Xavier (QQ 2)', revenue: 60, explicit: 10, implicit: 40, note: 'Xavier 2 soat limonad sotdi: ingrediyent $10 (explicit), shu vaqtda maysazor o‘rib $40 topardi (implicit).' },
  buffy: { label: 'Buffy (P2)', revenue: 400000, explicit: 350000, implicit: 80000, note: "Buffy: ijara va tovar $350,000 (explicit), vampir ovchisi ishidan voz kechish $80,000 (implicit)." },
};

/** Ch. 14 Figure 1: economic profit versus accounting profit. */
export function ProfitViews() {
  const [k, setK] = useState<keyof typeof PROFIT_CASES>('xavier');
  const c = PROFIT_CASES[k];
  const [rev, setRev] = useState(c.revenue);
  const acc = rev - c.explicit;
  const eco = rev - c.explicit - c.implicit;
  const H = 220;
  const scale = H / Math.max(rev, c.explicit + c.implicit);
  const Bar = ({ parts }: { parts: [string, number, string][] }) => (
    <div className="flex flex-col-reverse rounded-lg border-2 border-ink" style={{ height: H }}>
      {parts.map(([l, v, cls]) =>
        v > 0 ? (
          <div key={l} className={`flex items-center justify-center border-t border-ink/30 px-1 text-center text-[11px] font-bold text-[#111] ${cls}`} style={{ height: v * scale }}>
            {l}: ${fmt(v)}
          </div>
        ) : null,
      )}
    </div>
  );
  const explain = `${c.note} Accounting profit = tushum − explicit = **$${fmt(acc)}**. Economic profit = tushum − explicit − implicit = **$${fmt(eco)}**. ${eco > 0 ? "Iqtisodiy foyda musbat — biznes barcha imkoniyat xarajatlarini qoplaydi, qolishga arziydi." : eco === 0 ? 'Iqtisodiy foyda nol — biznes imkoniyat xarajatlarini aniq qoplaydi.' : "Iqtisodiy zarar — buxgalter foyda ko'rsatsa ham, egasi boshqa yo'l bilan ko'proq topardi; sharoit o'zgarmasa, u chiqib ketadi."}`;
  return (
    <Card
      title="Figure 1 — Economists versus Accountants"
      tabs={<Segmented size="sm" value={k} onChange={(v) => { setK(v); setRev(PROFIT_CASES[v].revenue); }} options={Object.entries(PROFIT_CASES).map(([v, x]) => ({ value: v as keyof typeof PROFIT_CASES, label: x.label }))} />}
      explain={explain}
      controls={<Slider label="Tushum (total revenue)" value={rev} min={0} max={c.revenue * 2} step={c.revenue / 40} onChange={setRev} display={`$${fmt(rev)}`} color="--good" />}
    >
      <div className="grid grid-cols-2 gap-4 p-4 sm:px-16">
        <div>
          <div className="mb-1 text-center text-xs font-bold">Iqtisodchi</div>
          <Bar parts={[['Explicit', c.explicit, 'bg-postit-pink'], ['Implicit', c.implicit, 'bg-postit-blue'], ['Econ. profit', Math.max(0, eco), 'bg-postit-green']]} />
        </div>
        <div>
          <div className="mb-1 text-center text-xs font-bold">Buxgalter</div>
          <Bar parts={[['Explicit', c.explicit, 'bg-postit-pink'], ['Acct. profit', Math.max(0, acc), 'bg-postit-green']]} />
        </div>
      </div>
    </Card>
  );
}

const LR = (q: number) => (q < 1000 ? 10000 + 0.01 * (1000 - q) ** 2 : q <= 1200 ? 10000 : 10000 + 0.01 * (q - 1200) ** 2);
const LRd = (q: number) => (q < 1000 ? -0.02 * (1000 - q) : q <= 1200 ? 0 : 0.02 * (q - 1200));
const FACTORIES = [
  { id: 'small', label: 'Kichik', at: 600 },
  { id: 'medium', label: "O'rta", at: 1000 },
  { id: 'large', label: 'Katta', at: 1200 },
];
const srATC = (at: number, q: number) => LR(at) + LRd(at) * (q - at) + 0.05 * (q - at) ** 2;

/** Ch. 14 Figure 6: short-run ATC curves for three factory sizes and the long-run envelope. */
export function LongRunATC() {
  const [q, setQ] = useState(1200);
  const [fac, setFac] = useState('medium');
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const f = makeFrame(width, 1800, 20000);
  const at = FACTORIES.find((x) => x.id === fac)!.at;
  const sr = srATC(at, q);
  const lr = LR(q);
  const curve = (fn: (x: number) => number, from = 50, to = 1800) => {
    const pts: string[] = [];
    for (let x = from; x <= to; x += 10) {
      const y = fn(x);
      if (y <= 20000) pts.push(`${sx(f, x)},${sy(f, y)}`);
    }
    return pts.join(' ');
  };
  const scale = q < 1000 ? '**economies of scale** (LR ATC tushmoqda: ixtisoslashuv, konveyer)' : q <= 1200 ? '**constant returns to scale** (LR ATC o\'zgarmas)' : '**diseconomies of scale** (LR ATC o\'smoqda: katta tashkilotda muvofiqlashtirish muammolari)';
  const explain = `Qisqa muddatda Ford ${FACTORIES.find((x) => x.id === fac)!.label.toLowerCase()} fabrikada qoladi: ${fmt(q)} mashina/kun → SR ATC **$${fmt(sr)}**. Uzoq muddatda fabrika hajmini tanlaydi → LR ATC **$${fmt(lr)}**. Kitob: o'rta fabrikada 1,000 dan 1,200 ga o'tilsa SR ATC $10,000 → $12,000, LR da yana $10,000. Barcha SR egri chiziqlar LR egri chizig'idan **pastda emas** — uzoq muddatda firma o'zi xohlagan SR egri chiziqni tanlaydi. Bu nuqtada: ${scale}.`;
  return (
    <Card
      title="Figure 6 — Average Total Cost in the Short and Long Runs (model)"
      tabs={<Segmented size="sm" value={fac} onChange={setFac} options={FACTORIES.map((x) => ({ value: x.id, label: `${x.label} fabrika` }))} />}
      explain={explain}
      controls={<Slider label="Mashinalar soni (kuniga)" value={q} min={200} max={1700} step={50} onChange={setQ} display={fmt(q)} />}
    >
      <div ref={wrapRef} className="min-w-0 p-1">
        <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="long-run average total cost">
          <Axes f={f} x="Quantity of Cars per Day" y="Average Total Cost" money />
          {FACTORIES.map((x) => (
            <polyline key={x.id} points={curve((v) => srATC(x.at, v), Math.max(50, x.at - 500), Math.min(1800, x.at + 500))} fill="none" className={x.id === fac ? 'stroke-pen' : 'stroke-muted'} strokeWidth={x.id === fac ? 3 : 1.8} strokeDasharray={x.id === fac ? undefined : '5 4'} />
          ))}
          <polyline points={curve(LR)} fill="none" className="stroke-bad" strokeWidth={3.5} />
          <text x={sx(f, 1700)} y={sy(f, LR(1700)) - 8} textAnchor="end" className="fill-bad text-[12px] font-bold">ATC in long run</text>
          <circle cx={sx(f, q)} cy={sy(f, Math.min(20000, sr))} r={7} className="fill-pen stroke-ink" strokeWidth={2} />
          <circle cx={sx(f, q)} cy={sy(f, lr)} r={7} className="fill-bad stroke-ink" strokeWidth={2} />
        </svg>
      </div>
      <p className="px-4 pb-2 text-xs text-muted">Kitobda Figure 6 sxematik; faqat $10,000 va $12,000 nuqtalari (1,000 va 1,200 mashina) raqam bilan berilgan. Qolgan shakl — model.</p>
    </Card>
  );
}
