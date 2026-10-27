import { useState } from 'react';
import { fmt } from '../../lib/econ';
import { Segmented, Slider } from '../ui/Kit';
import { makeFrame, sx, sy } from './plot';
import { useWidth } from './useWidth';
import { Axes, Card } from './WidgetCard';
import { tr } from '../../lib/lang';

/** A smooth "typical firm" (Figure 3/4 shapes): VC = q³/30 − q² + 12q, FC adjustable. */
export const firm = {
  vc: (q: number) => q ** 3 / 30 - q ** 2 + 12 * q,
  mc: (q: number) => q ** 2 / 10 - 2 * q + 12,
  avc: (q: number) => q ** 2 / 30 - q + 12,
};
export const atc = (q: number, fc: number) => firm.avc(q) + fc / q;
/** profit-maximizing quantity on the rising part of MC (q ≥ 10), or 0 if the firm shuts down */
export function supplyQ(p: number, fc: number, longRun = false): number {
  if (p <= firm.mc(10)) return 0;
  const q = 10 + Math.sqrt(10 * (p - 2)); // MC(q) = p on the rising branch
  const floor = longRun ? atc(q, fc) : firm.avc(q);
  return p >= floor ? q : 0;
}
export function minATC(fc: number): { q: number; c: number } {
  let best = { q: 1, c: Infinity };
  for (let q = 1; q <= 40; q += 0.01) {
    const c = atc(q, fc);
    if (c < best.c) best = { q, c };
  }
  return best;
}

const VACA = [3, 5, 8, 12, 17, 23, 30, 38, 47];

/** Ch. 15 Figures 1–5 and Tables 2–3: the competitive firm's output, profit, shutdown and exit decisions. */
export function CompetitiveFirmLab() {
  const [tab, setTab] = useState<'graph' | 'vaca'>('graph');
  const [p, setP] = useState(12);
  const [fc, setFc] = useState(60);
  const [vacaP, setVacaP] = useState(6);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  if (tab === 'vaca') {
    const rows = VACA.map((tc, q) => ({ q, tr: vacaP * q, tc, profit: vacaP * q - tc }));
    const best = Math.max(...rows.map((r) => r.profit));
    const qs = rows.filter((r) => r.profit === best).map((r) => r.q);
    const explain = tr(`Narx $${vacaP} — Vaca fermasi uchun MR = P = **$${vacaP}** (har bir gallon tushumni P ga oshiradi). Foyda maksimal: **${qs.join(' yoki ')} gallon**, foyda **$${best}**. Marjinal mantiq: MR > MC bo'lsa — ko'paytiring, MR < MC bo'lsa — kamaytiring; ${qs.length > 1 ? `${qs[0]}→${qs[1]} gallonda MR = MC (foyda o'zgarmaydi).` : 'optimumda MR ≈ MC.'} Kitob: $6 da 4 yoki 5 gallon, foyda $7.`, `At a price of $${vacaP}, the Vaca farm's MR = P = **$${vacaP}** (each gallon adds P to revenue). Profit is maximized at **${qs.join(' or ')} gallons**, profit **$${best}**. Marginal reasoning: if MR > MC, produce more; if MR < MC, produce less; ${qs.length > 1 ? `from ${qs[0]} to ${qs[1]} gallons MR = MC (profit doesn't change).` : 'at the optimum MR ≈ MC.'} The book: at $6, 4 or 5 gallons, profit $7.`);
    return (
      <Card
        title={tr("Table 2 — Vaca Family Dairy Farm: foydani maksimallashtirish", 'Table 2 — Vaca Family Dairy Farm: profit maximization')}
        tabs={<Segmented size="sm" value={tab} onChange={setTab} options={[{ value: 'graph', label: tr('Grafik (Figures 1–5)', 'Graph (Figures 1–5)') }, { value: 'vaca', label: tr('Table 2 (Vaca fermasi)', 'Table 2 (Vaca farm)') }]} />}
        explain={explain}
        controls={<Slider label={tr('Sut narxi (gallon)', 'Price of milk (gallon)')} value={vacaP} min={1} max={12} step={1} onChange={setVacaP} display={`$${vacaP}`} color="--demand" />}
      >
        <div className="overflow-x-auto p-4">
          <table className="num w-full min-w-[520px] text-right text-sm">
            <thead>
              <tr className="border-b-2 border-ink">
                {['Q', 'TR', 'TC', 'Profit', 'MR', 'MC', 'MR − MC'].map((h) => (
                  <th key={h} className="px-2 py-1 font-sans">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => {
                const mc = i ? r.tc - rows[i - 1].tc : null;
                return (
                  <tr key={r.q} className={`border-b border-line ${qs.includes(r.q) ? 'bg-marker/40 font-bold' : ''}`}>
                    <td className="px-2 py-1">{r.q}</td>
                    <td className="px-2">${r.tr}</td>
                    <td className="px-2">${r.tc}</td>
                    <td className={`px-2 ${r.profit < 0 ? 'text-bad' : ''}`}>{r.profit < 0 ? '−' : ''}${Math.abs(r.profit)}</td>
                    <td className="px-2">{i ? `$${vacaP}` : ''}</td>
                    <td className="px-2">{mc != null ? `$${mc}` : ''}</td>
                    <td className={`px-2 ${mc != null && vacaP - mc < 0 ? 'text-bad' : 'text-good'}`}>{mc != null ? `${vacaP - mc >= 0 ? '+' : '−'}$${Math.abs(vacaP - mc)}` : ''}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    );
  }
  const q = supplyQ(p, fc);
  const qMC = p > firm.mc(10) ? 10 + Math.sqrt(10 * (p - 2)) : 0;
  const a = q ? atc(q, fc) : 0;
  const profit = q ? (p - a) * q : -fc;
  const minAVC = firm.avc(15);
  const mATC = minATC(fc);
  const f = makeFrame(width, 32, 30);
  const curve = (fn: (x: number) => number, from: number) => {
    const pts: string[] = [];
    for (let x = from; x <= 32; x += 0.25) {
      const y = fn(x);
      if (y <= 30 && y >= 0) pts.push(`${sx(f, x)},${sy(f, y)}`);
    }
    return pts.join(' ');
  };
  const rule = p < minAVC ? 'shut' : p < mATC.c ? 'loss' : 'profit';
  const explain =
    rule === 'shut'
      ? tr(`Narx $${fmt(p, 2)} < min AVC ($${fmt(minAVC, 2)}) → **vaqtincha yopilish (shut down)**: ishlab chiqarsa tushum o'zgaruvchan xarajatni ham qoplamaydi. Zarar = fixed cost **$${fc}** (sunk cost). Agar narx shu darajada qolsa — uzoq muddatda bozordan chiqish.`, `Price $${fmt(p, 2)} < min AVC ($${fmt(minAVC, 2)}) → **shut down temporarily**: producing would not even cover variable cost. The loss = the fixed cost **$${fc}** (a sunk cost). If the price stays this low — exit the market in the long run.`)
      : rule === 'loss'
        ? tr(`P = MC da Q = **${fmt(q, 1)}**. AVC < P ($${fmt(p, 2)}) < ATC ($${fmt(a, 2)}) → **zarar** $${fmt(-profit, 0)} (qizil to'rtburchak: (ATC − P) × Q). Qisqa muddatda **ishlashda davom eting** — yopilsa zarar $${fc} (fixed cost) bo'lardi. Uzoq muddatda — **chiqing** (Table 3, 3-qoida).`, `At P = MC, Q = **${fmt(q, 1)}**. AVC < P ($${fmt(p, 2)}) < ATC ($${fmt(a, 2)}) → a **loss** of $${fmt(-profit, 0)} (red rectangle: (ATC − P) × Q). In the short run **keep operating** — shutting down would lose $${fc} (the fixed cost). In the long run — **exit** (Table 3, rule 3).`)
        : tr(`P = MC da Q = **${fmt(q, 1)}**, ATC = $${fmt(a, 2)} < P → **foyda** $${fmt(profit, 0)} (yashil to'rtburchak: (P − ATC) × Q). Yangi firmalar kirishga rag'batlanadi; uzoq muddatda narx **min ATC ≈ $${fmt(mATC.c, 2)}** gacha tushadi.`, `At P = MC, Q = **${fmt(q, 1)}**, ATC = $${fmt(a, 2)} < P → a **profit** of $${fmt(profit, 0)} (green rectangle: (P − ATC) × Q). New firms are tempted to enter; in the long run the price falls to **min ATC ≈ $${fmt(mATC.c, 2)}**.`);
  return (
    <Card
      title={tr("Figures 1–5 — Raqobatchi firma: Q, foyda, shut down va exit", 'Figures 1–5 — The competitive firm: output, profit, shutdown, and exit')}
      tabs={<Segmented size="sm" value={tab} onChange={setTab} options={[{ value: 'graph', label: tr('Grafik (Figures 1–5)', 'Graph (Figures 1–5)') }, { value: 'vaca', label: tr('Table 2 (Vaca fermasi)', 'Table 2 (Vaca farm)') }]} />}
      explain={explain}
      controls={
        <>
          <Slider label={tr('Bozor narxi P = MR = AR', 'Market price P = MR = AR')} value={p} min={1} max={28} step={0.25} onChange={setP} display={`$${fmt(p, 2)}`} color="--demand" />
          <Slider label="Fixed cost" value={fc} min={0} max={200} step={10} onChange={setFc} display={`$${fc}`} color="--tax" />
        </>
      }
    >
      <div ref={wrapRef} className="min-w-0 p-1">
        <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="competitive firm">
          <Axes f={f} x="Quantity (firm)" y="Costs and Revenue" money />
          {q > 0 && (
            <rect
              x={sx(f, 0)}
              y={sy(f, Math.max(p, a))}
              width={sx(f, q) - sx(f, 0)}
              height={Math.abs(sy(f, p) - sy(f, a))}
              className={profit >= 0 ? 'fill-good/30 stroke-good' : 'fill-bad/30 stroke-bad'}
            />
          )}
          <polyline points={curve(firm.mc, 1)} fill="none" className="stroke-bad" strokeWidth={3} />
          <polyline points={curve((x) => atc(x, fc), 1)} fill="none" className="stroke-pen" strokeWidth={3} />
          <polyline points={curve(firm.avc, 1)} fill="none" className="stroke-good" strokeWidth={2.5} />
          <line x1={sx(f, 0)} x2={sx(f, 32)} y1={sy(f, p)} y2={sy(f, p)} className="stroke-demand" strokeWidth={2.5} />
          <text x={sx(f, 32) - 4} y={sy(f, p) - 6} textAnchor="end" className="fill-demand text-[11px] font-bold">P = AR = MR</text>
          {qMC > 0 && <line x1={sx(f, qMC)} x2={sx(f, qMC)} y1={sy(f, p)} y2={sy(f, 0)} className="stroke-muted" strokeDasharray="4 4" />}
          {q > 0 && <circle cx={sx(f, q)} cy={sy(f, p)} r={7} className="fill-marker stroke-ink" strokeWidth={2} />}
          <line x1={sx(f, 0)} x2={sx(f, 32)} y1={sy(f, minAVC)} y2={sy(f, minAVC)} className="stroke-good" strokeDasharray="2 5" />
          <text x={sx(f, 0) + 4} y={sy(f, minAVC) + 13} className="fill-good text-[10px] font-bold">shutdown: min AVC</text>
          {[
            ['MC', 'fill-bad'],
            ['ATC', 'fill-pen'],
            ['AVC', 'fill-good'],
          ].map(([l, c], i) => (
            <text key={l} x={f.W - f.mr - 4} y={f.mt + 14 + i * 15} textAnchor="end" className={`${c} text-[12px] font-bold`}>
              {l}
            </text>
          ))}
        </svg>
      </div>
      <div className="grid gap-2 px-4 pb-3 text-center text-xs sm:grid-cols-3">
        {[
          ['P < AVC', tr('Darhol yoping', 'Shut down now'), rule === 'shut'],
          ['AVC < P < ATC', tr('Qisqa muddatda ishlang, uzoqda chiqing', 'Operate in the short run, exit in the long run'), rule === 'loss'],
          ['P > ATC', tr('Qoling, foydadan zavqlaning', 'Stay and enjoy the profit'), rule === 'profit'],
        ].map(([a2, b, on]) => (
          <div key={a2 as string} className={`rounded-lg border-2 border-ink p-2 ${on ? 'bg-marker text-[#111]' : 'opacity-60'}`}>
            <div className="font-bold">{a2}</div>
            <div>{b}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/** Ch. 15 Figures 6–8: short-run market supply with N firms, entry and exit, and a demand shift. */
export function EntryExitLab() {
  const fc = 60;
  const m = minATC(fc);
  const [demandShift, setDemandShift] = useState(0);
  const [n, setN] = useState(170);
  const [rising, setRising] = useState(false);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const A = 4000 + demandShift; // market demand Q = A − 120P
  const qd = (p: number) => Math.max(0, A - 120 * p);
  const qs = (p: number, firms: number) => firms * supplyQ(p, fc);
  // short-run equilibrium by bisection
  let lo = 0.5;
  let hi = 33;
  for (let k = 0; k < 60; k++) {
    const mid = (lo + hi) / 2;
    if (qs(mid, n) > qd(mid)) hi = mid;
    else lo = mid;
  }
  const pSR = (lo + hi) / 2;
  const qSR = qd(pSR);
  const qFirm = supplyQ(pSR, fc);
  const profit = qFirm ? (pSR - atc(qFirm, fc)) * qFirm : -fc;
  // long-run: price = min ATC (or rising with entry if costs differ)
  const lrPrice = (firms: number) => (rising ? m.c + Math.max(0, (firms - 100) * 0.02) : m.c);
  const lrN = (() => {
    let best = n;
    for (let k = 1; k <= 1000; k++) {
      const pl = lrPrice(k);
      if (k * m.q >= qd(pl)) {
        best = k;
        break;
      }
    }
    return best;
  })();
  const f = makeFrame(width, 6000, 30);
  const explain = tr(`Bozorda **${n}** ta bir xil firma. Qisqa muddatli taklif — ularning MC egri chiziqlari (AVC dan yuqori) gorizontal yig'indisi. Muvozanat: P ≈ **$${fmt(pSR, 2)}**, Q ≈ ${fmt(qSR, 0)}; har bir firma ${fmt(qFirm, 1)} birlik, foyda **$${fmt(profit, 0)}**. ${Math.abs(profit) < 5 ? 'Foyda ≈ 0 → kirish ham, chiqish ham yo\'q: **uzoq muddatli muvozanat** — P = MC = min ATC, firmalar efficient scale da.' : profit > 0 ? `Foyda musbat → yangi firmalar **kiradi** → taklif o'ngga, narx tushadi. “Uzoq muddat” tugmasi: ~${lrN} firma, narx $${fmt(lrPrice(lrN), 2)}.` : `Zarar → ba'zi firmalar **chiqadi** → narx ko'tariladi. “Uzoq muddat”: ~${lrN} firma.`} ${rising ? "Yangi kiruvchilarning xarajati yuqori (cheklangan yer, turli malakali bo'yoqchilar) → LR taklif **yuqoriga qaragan**." : 'Hamma bir xil xarajatga ega → LR taklif **gorizontal** min ATC da.'}`, `The market has **${n}** identical firms. Short-run supply is the horizontal sum of their MC curves (above AVC). Equilibrium: P ≈ **$${fmt(pSR, 2)}**, Q ≈ ${fmt(qSR, 0)}; each firm makes ${fmt(qFirm, 1)} units with profit **$${fmt(profit, 0)}**. ${Math.abs(profit) < 5 ? 'Profit ≈ 0 → no entry and no exit: **long-run equilibrium** — P = MC = min ATC, firms at their efficient scale.' : profit > 0 ? `Profit is positive → new firms **enter** → supply shifts right and the price falls. The “Long run” button: ~${lrN} firms, price $${fmt(lrPrice(lrN), 2)}.` : `Losses → some firms **exit** → the price rises. “Long run”: ~${lrN} firms.`} ${rising ? 'Newcomers have higher costs (limited land, painters of varying skill) → LR supply **slopes upward**.' : 'All firms have the same costs → LR supply is **horizontal** at min ATC.'}`);
  return (
    <Card
      title={tr("Figures 6–8 — Bozor taklifi: qisqa muddat, kirish va chiqish (model)", 'Figures 6–8 — Market supply: the short run, entry, and exit (model)')}
      tabs={
        <>
          <button className="btn-ghost btn-sm" onClick={() => setDemandShift((d) => d + 1200)}>
            {tr('↑ Talab oshdi (sut foydali!)', '↑ Demand rises (milk is healthy!)')}
          </button>
          <button className="btn-ghost btn-sm" onClick={() => setDemandShift((d) => d - 1200)}>
            {tr('↓ Talab kamaydi', '↓ Demand falls')}
          </button>
          <button className="btn-primary btn-sm" onClick={() => setN(lrN)}>
            {tr('⏩ Uzoq muddat (kirish/chiqish)', '⏩ Long run (entry/exit)')}
          </button>
          <button className="btn-ghost btn-sm" onClick={() => setRising((r) => !r)}>
            {rising ? '✓ ' : ''}{tr('Xarajatlari turlicha firmalar', 'Firms with different costs')}
          </button>
          <button
            className="btn-ghost btn-sm"
            onClick={() => {
              setDemandShift(0);
              setN(170);
            }}
          >
            ↺ Reset
          </button>
        </>
      }
      explain={explain}
      controls={<Slider label={tr('Firmalar soni', 'Number of firms')} value={n} min={20} max={400} step={1} onChange={setN} display={`${n}`} />}
    >
      <div ref={wrapRef} className="min-w-0 p-1">
        <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="market supply with entry and exit">
          <Axes f={f} x="Quantity (market)" y="Price" money />
          <line x1={sx(f, 0)} y1={sy(f, A / 120)} x2={sx(f, Math.min(6000, A))} y2={sy(f, Math.max(0, (A - Math.min(6000, A)) / 120))} className="stroke-demand" strokeWidth={3} />
          <polyline
            points={Array.from({ length: 200 }, (_, i) => 4.5 + i * 0.13)
              .map((pp) => [qs(pp, n), pp])
              .filter(([qq]) => qq > 0 && qq <= 6000)
              .map(([qq, pp]) => `${sx(f, qq)},${sy(f, pp)}`)
              .join(' ')}
            fill="none"
            className="stroke-supply"
            strokeWidth={3}
          />
          <polyline
            points={[0, 6000].map((qq) => `${sx(f, qq)},${sy(f, rising ? lrPrice(qq / m.q) : m.c)}`).join(' ')}
            fill="none"
            className="stroke-pen"
            strokeWidth={2.5}
            strokeDasharray="7 5"
          />
          <text x={sx(f, 6000) - 4} y={sy(f, rising ? lrPrice(6000 / m.q) : m.c) - 6} textAnchor="end" className="fill-pen text-[11px] font-bold">Long-run supply</text>
          <text x={sx(f, 200)} y={sy(f, A / 120) + 14} className="fill-demand text-[11px] font-bold">Demand</text>
          <circle cx={sx(f, qSR)} cy={sy(f, pSR)} r={7} className="fill-marker stroke-ink" strokeWidth={2} />
        </svg>
      </div>
      <p className="px-4 pb-2 text-xs text-muted">
        {tr(
          `Model: har bir firma — yuqoridagi “tipik firma” (FC $60, min ATC ≈ $${fmt(m.c, 2)} da q ≈ ${fmt(m.q, 1)}); talab Q = A − 120P. Kitobdagi Figure 6: 1,000 firma, har biri $1 da 100, $2 da 200 → bozor 100,000 va 200,000.`,
          `Model: every firm is the “typical firm” above (FC $60, min ATC ≈ $${fmt(m.c, 2)} at q ≈ ${fmt(m.q, 1)}); demand Q = A − 120P. Figure 6 in the book: 1,000 firms, each supplying 100 at $1 and 200 at $2 → market 100,000 and 200,000.`,
        )}
      </p>
    </Card>
  );
}
