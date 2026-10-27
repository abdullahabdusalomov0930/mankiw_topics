import { useState } from 'react';
import { fmt } from '../../lib/econ';
import { Segmented, Slider } from '../ui/Kit';
import { makeFrame, sx, sy } from './plot';
import { useWidth } from './useWidth';
import { Axes, Card } from './WidgetCard';

/** Linear monopoly: demand P = a − bQ, MR = a − 2bQ, MC = c + dQ, fixed cost F. */
export interface LinearMonopoly {
  a: number;
  b: number;
  c: number;
  d: number;
  F: number;
}
export function monopolyOutcome(m: LinearMonopoly) {
  const qm = Math.max(0, (m.a - m.c) / (2 * m.b + m.d));
  const pm = m.a - m.b * qm;
  const qc = Math.max(0, (m.a - m.c) / (m.b + m.d));
  const pc = m.a - m.b * qc;
  const mcAtQm = m.c + m.d * qm;
  const tc = (q: number) => m.F + m.c * q + 0.5 * m.d * q * q;
  const profit = pm * qm - tc(qm);
  const dwl = 0.5 * (qc - qm) * (pm - mcAtQm);
  const cs = 0.5 * qm * (m.a - pm);
  return { qm, pm, qc, pc, mcAtQm, profit, dwl, cs, atc: qm ? tc(qm) / qm : 0 };
}

const PRESETS: Record<string, { label: string; m: LinearMonopoly; note: string; unit?: string }> = {
  potter: { label: 'Potter quduq (P8)', m: { a: 70, b: 1, c: 10, d: 1, F: 0 }, note: "Problem 8: P = 70 − Q, MC = 10 + Q." },
  wiknam: { label: 'Wiknam to‘p (P9)', m: { a: 10, b: 1, c: 1, d: 1, F: 3 }, note: "Problem 9: P = 10 − Q, TC = 3 + Q + 0.5Q², MC = 1 + Q." },
  p10: { label: 'Yangi mahsulot (P10)', m: { a: 1000, b: 10, c: 100, d: 10, F: 0 }, note: "Problem 10: P = 1,000 − 10Q, MC = 100 + 10Q." },
  drug: { label: 'Dori (Figure 6)', m: { a: 100, b: 1, c: 20, d: 0, F: 0 }, note: "Figure 6 g'oyasi: MC o'zgarmas. Patent davrida — monopoliya narxi; patent tugagach generiklar kiradi va narx MC gacha tushadi (model raqamlari)." },
};

/** Ch. 16 Figures 3–8: monopoly profit maximization, profit, and deadweight loss. */
export function MonopolyLab() {
  const [key, setKey] = useState<keyof typeof PRESETS>('potter');
  const [m, setM] = useState<LinearMonopoly>(PRESETS.potter.m);
  const [ceiling, setCeiling] = useState<number | null>(null);
  const [generic, setGeneric] = useState(false);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const o = monopolyOutcome(m);
  const qMax = m.a / m.b;
  const f = makeFrame(width, qMax, m.a * 1.05);
  const line = (fn: (q: number) => number) => {
    const pts: string[] = [];
    for (let i = 0; i <= 100; i++) {
      const q = (qMax * i) / 100;
      const y = fn(q);
      if (y >= 0 && y <= f.yMax) pts.push(`${sx(f, q)},${sy(f, y)}`);
    }
    return pts.join(' ');
  };
  // price ceiling (P8): the monopolist becomes a price taker up to the ceiling
  let ceilingText = '';
  let qCeil = 0;
  if (ceiling != null) {
    const qd = Math.max(0, (m.a - ceiling) / m.b);
    const qmc = m.d > 0 ? Math.max(0, (ceiling - m.c) / m.d) : qd;
    qCeil = Math.min(qd, qmc);
    ceilingText = ` **Narx shifti $${fmt(ceiling, 2)}**: talab ${fmt(qd, 1)}; Potter MC ≤ shift bo'lgan birliklarni ishlab chiqaradi (${fmt(qmc, 1)} gacha) → sotiladi **${fmt(qCeil, 1)}**. ${qmc + 1e-9 >= qd ? "Taqchillik **yo'q** — monopoliyada shift miqdorni oshirishi mumkin!" : `**Taqchillik ${fmt(qd - qmc, 1)}** — shift juda past, MC uni qoplamaydi.`}`;
  }
  const showP = generic ? o.pc : o.pm;
  const showQ = generic ? o.qc : o.qm;
  const explain = `${PRESETS[key].note} Monopolist **MR = MC** da: Q = **${fmt(o.qm, 2)}**, keyin talab egri chizig'idan narx P = **$${fmt(o.pm, 2)}** (A → B). P > MR = MC — raqobatdan asosiy farq. Samarali miqdor (talab = MC): Q = ${fmt(o.qc, 2)}, P = $${fmt(o.pc, 2)}. Monopoliya kam ishlab chiqaradi va qimmat sotadi → **DWL = $${fmt(o.dwl, 2)}** (talab va MC orasidagi uchburchak). Foyda $${fmt(o.profit, 2)} — o'zi ijtimoiy muammo emas, xaridordan sotuvchiga transfer; muammo — yo'qolgan savdolar.${generic ? ` **Patent tugadi**: generiklar raqobati narxni MC ($${fmt(m.c, 2)}) gacha tushiradi, miqdor ${fmt(o.qc, 1)}, DWL yo'qoladi.` : ''}${ceilingText}`;
  return (
    <Card
      title="Figures 4–8 — Monopoliya: MR = MC, foyda va deadweight loss"
      tabs={
        <>
          <Segmented
            size="sm"
            value={key}
            onChange={(v) => {
              setKey(v);
              setM(PRESETS[v].m);
              setCeiling(null);
              setGeneric(false);
            }}
            options={Object.entries(PRESETS).map(([v, x]) => ({ value: v as keyof typeof PRESETS, label: x.label }))}
          />
          {key === 'potter' && (
            <>
              <button className="btn-ghost btn-sm" onClick={() => setCeiling(ceiling === 45 ? null : 45)}>
                {ceiling === 45 ? '✓ ' : ''}Shift −10% ($45)
              </button>
              <button className="btn-ghost btn-sm" onClick={() => setCeiling(ceiling === 25 ? null : 25)}>
                {ceiling === 25 ? '✓ ' : ''}Shift −50% ($25)
              </button>
            </>
          )}
          {key === 'drug' && (
            <button className="btn-ghost btn-sm" onClick={() => setGeneric((g) => !g)}>
              {generic ? '✓ ' : ''}Patent tugadi (generiklar)
            </button>
          )}
        </>
      }
      explain={explain}
      controls={
        <>
          <Slider label="Talab: maksimal narx a" value={m.a} min={PRESETS[key].m.a * 0.5} max={PRESETS[key].m.a * 1.5} step={PRESETS[key].m.a / 50} onChange={(v) => setM({ ...m, a: v })} display={`$${fmt(m.a, 1)}`} color="--demand" />
          <Slider label="MC kesmasi c" value={m.c} min={0} max={PRESETS[key].m.a * 0.6} step={PRESETS[key].m.a / 100} onChange={(v) => setM({ ...m, c: v })} display={`$${fmt(m.c, 1)}`} color="--supply" />
        </>
      }
    >
      <div ref={wrapRef} className="min-w-0 p-1">
        <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="monopoly">
          <Axes f={f} x="Quantity" y="Costs and Revenue" money />
          {!generic && (
            <polygon
              points={`${sx(f, o.qm)},${sy(f, o.pm)} ${sx(f, o.qc)},${sy(f, o.pc)} ${sx(f, o.qm)},${sy(f, o.mcAtQm)}`}
              className="fill-bad/30 stroke-bad"
            />
          )}
          <polygon points={`${sx(f, 0)},${sy(f, m.a)} ${sx(f, showQ)},${sy(f, showP)} ${sx(f, 0)},${sy(f, showP)}`} className="fill-demand/15" />
          <polyline points={line((q) => m.a - m.b * q)} fill="none" className="stroke-demand" strokeWidth={3} />
          <polyline points={line((q) => m.a - 2 * m.b * q)} fill="none" className="stroke-pen" strokeWidth={2.5} strokeDasharray="7 5" />
          <polyline points={line((q) => m.c + m.d * q)} fill="none" className="stroke-supply" strokeWidth={3} />
          {ceiling != null && <line x1={sx(f, 0)} x2={sx(f, qMax)} y1={sy(f, ceiling)} y2={sy(f, ceiling)} className="stroke-tax" strokeWidth={2.5} />}
          <line x1={sx(f, o.qm)} x2={sx(f, o.qm)} y1={sy(f, o.pm)} y2={sy(f, 0)} className="stroke-muted" strokeDasharray="4 4" />
          <line x1={sx(f, 0)} x2={sx(f, o.qm)} y1={sy(f, o.pm)} y2={sy(f, o.pm)} className="stroke-muted" strokeDasharray="4 4" />
          <circle cx={sx(f, o.qm)} cy={sy(f, o.mcAtQm)} r={6} className="fill-pen stroke-ink" strokeWidth={2} />
          <text x={sx(f, o.qm) + 8} y={sy(f, o.mcAtQm) + 14} className="fill-pen text-[11px] font-bold">A (MR = MC)</text>
          <circle cx={sx(f, o.qm)} cy={sy(f, o.pm)} r={7} className="fill-marker stroke-ink" strokeWidth={2} />
          <text x={sx(f, o.qm) + 8} y={sy(f, o.pm) - 8} className="fill-ink text-[11px] font-bold">B (monopoly price)</text>
          {ceiling != null && <circle cx={sx(f, qCeil)} cy={sy(f, ceiling)} r={6} className="fill-tax stroke-ink" strokeWidth={2} />}
          <text x={sx(f, qMax * 0.75)} y={sy(f, m.a - m.b * qMax * 0.75) - 8} className="fill-demand text-[11px] font-bold">Demand</text>
          <text x={sx(f, qMax * 0.42)} y={sy(f, Math.max(2, m.a - 2 * m.b * qMax * 0.42)) + 14} className="fill-pen text-[11px] font-bold">MR</text>
          <text x={f.W - f.mr - 4} y={sy(f, Math.min(f.yMax * 0.95, m.c + m.d * qMax * 0.9)) - 6} textAnchor="end" className="fill-supply text-[11px] font-bold">MC</text>
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-2 px-4 pb-3 text-center text-xs sm:grid-cols-4">
        {[
          ['Monopoly Q, P', `${fmt(o.qm, 1)}, $${fmt(o.pm, 2)}`],
          ['Efficient Q, P', `${fmt(o.qc, 1)}, $${fmt(o.pc, 2)}`],
          ['Profit', `$${fmt(o.profit, 2)}`],
          ['DWL', `$${fmt(o.dwl, 2)}`],
        ].map(([a2, b2]) => (
          <div key={a2} className="rounded-lg border-2 border-ink p-2">
            <div className="text-muted">{a2}</div>
            <div className="num font-bold">{b2}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/** Ch. 16 Table 1: a monopoly's total, average, and marginal revenue — the output and price effects. */
export function MonopolyRevenue() {
  const [q, setQ] = useState(4);
  const price = (x: number) => 11 - x;
  const tr = (x: number) => x * price(x);
  const mr = tr(q) - tr(q - 1);
  const outputEffect = price(q);
  const priceEffect = -(q - 1);
  const explain = `${q}-gallonni sotish uchun narx $${price(q - 1)} → $${price(q)} ga tushadi. **Output effect**: yangi gallon +$${outputEffect}. **Price effect**: oldingi ${q - 1} gallonning har biri $1 arzonlashadi → ${priceEffect < 0 ? '−' : ''}$${Math.abs(priceEffect)}. MR = ${outputEffect} ${priceEffect < 0 ? '−' : '+'} ${Math.abs(priceEffect)} = **$${mr}** ${mr < price(q) ? `< P = $${price(q)}` : ''}. Monopoliyada **MR < P** (birinchi birlikdan keyin); price effect katta bo'lsa MR **manfiy** (6 → 7 gallon). Raqobatchi firmada price effect yo'q — MR = P.`;
  return (
    <Card title="Table 1 / Figure 3 — Monopoliya tushumi: suv kompaniyasi" explain={explain} controls={<Slider label="Gallonlar soni" value={q} min={1} max={8} step={1} onChange={setQ} display={`${q}`} />}>
      <div className="overflow-x-auto p-4">
        <table className="num w-full min-w-[420px] text-right text-sm">
          <thead>
            <tr className="border-b-2 border-ink">
              {['Q', 'P', 'TR = P×Q', 'AR = TR/Q', 'MR = ΔTR/ΔQ'].map((h) => (
                <th key={h} className="px-2 py-1 font-sans">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 9 }, (_, x) => (
              <tr key={x} className={`border-b border-line ${x === q ? 'bg-marker/40 font-bold' : ''}`}>
                <td className="px-2 py-1">{x}</td>
                <td className="px-2">${price(x)}</td>
                <td className="px-2">${tr(x)}</td>
                <td className="px-2">{x ? `$${price(x)}` : '—'}</td>
                <td className={`px-2 ${x && tr(x) - tr(x - 1) < 0 ? 'text-bad' : ''}`}>{x ? `${tr(x) - tr(x - 1) < 0 ? '−' : ''}$${Math.abs(tr(x) - tr(x - 1))}` : ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

/** Ch. 16-4: price discrimination — the Readalot parable and perfect price discrimination (Figure 9). */
export function PriceDiscrimination() {
  const [tab, setTab] = useState<'readalot' | 'perfect' | 'play'>('readalot');
  const [fans, setFans] = useState(100);
  const [fanWtp, setFanWtp] = useState(30);
  const [casual, setCasual] = useState(400);
  const [casualWtp, setCasualWtp] = useState(5);
  const [arbitrage, setArbitrage] = useState(false);
  const [single, setSingle] = useState(false);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  if (tab === 'readalot') {
    const author = 2; // $ million
    const high = (fans * fanWtp) / 1000 - author;
    const low = ((fans + casual) * casualWtp) / 1000 - author;
    const single = Math.max(high, low);
    const singlePrice = high >= low ? fanWtp : casualWtp;
    const disc = arbitrage ? single : (fans * fanWtp + casual * casualWtp) / 1000 - author;
    const dwlSingle = singlePrice === fanWtp ? (casual * casualWtp) / 1000 : 0;
    const explain = `Mualliflik haqi $${author} mln, bosma xarajati 0. **Yagona narx**: $${fanWtp} → ${fans}k nusxa, foyda $${fmt(high, 2)} mln; $${casualWtp} → ${fans + casual}k, foyda $${fmt(low, 2)} mln → tanlov **$${singlePrice}**, foyda **$${fmt(single, 2)} mln**${dwlSingle ? `, DWL **$${fmt(dwlSingle, 2)} mln** (${casual}k kitobxon kitobni MC dan yuqori qadrlaydi, lekin olmaydi)` : ''}. **Narx diskriminatsiyasi** (Avstraliya $${fanWtp}, AQSh $${casualWtp}): ${arbitrage ? '**arbitraj** tufayli imkonsiz — Avstraliya do\'konlari AQShda arzon olib qayta sotadi.' : `foyda **$${fmt(disc, 2)} mln**, hamma kitob oladi — DWL yo'q, lekin butun o'sish **ishlab chiqaruvchiga** (CS = 0).`} Saboqlar: (1) diskriminatsiya — ratsional strategiya; (2) xaridorlarni WTP bo'yicha ajratish kerak (arbitraj to'sqinlik qiladi); (3) u umumiy farovonlikni oshirishi mumkin.`;
    return (
      <Card
        title="16-4a — Readalot Publishing: narx diskriminatsiyasi masali"
        tabs={
          <>
            <Segmented size="sm" value={tab} onChange={setTab} options={[{ value: 'readalot', label: 'Readalot' }, { value: 'perfect', label: 'Figure 9: mukammal' }, { value: 'play', label: 'Problem 6: spektakl' }]} />
            <button className="btn-ghost btn-sm" onClick={() => setArbitrage((x) => !x)}>
              {arbitrage ? '✓ ' : ''}Arbitraj mumkin
            </button>
          </>
        }
        explain={explain}
        controls={
          <>
            <Slider label="Muxlislar (ming)" value={fans} min={0} max={500} step={10} onChange={setFans} display={`${fans}k`} />
            <Slider label="Muxlislar WTP" value={fanWtp} min={5} max={60} step={1} onChange={setFanWtp} display={`$${fanWtp}`} color="--demand" />
            <Slider label="Oddiy kitobxonlar (ming)" value={casual} min={0} max={1000} step={10} onChange={setCasual} display={`${casual}k`} />
            <Slider label="Oddiy kitobxonlar WTP" value={casualWtp} min={1} max={30} step={1} onChange={setCasualWtp} display={`$${casualWtp}`} color="--demand" />
          </>
        }
      >
        <div className="grid gap-3 p-4 sm:grid-cols-2">
          <div className="rounded-xl border-2 border-ink bg-surface2 p-3 text-center">
            <div className="text-xs font-semibold text-muted">Yagona narx: ${singlePrice}</div>
            <div className="num font-display text-2xl font-bold">${fmt(single, 2)} mln</div>
          </div>
          <div className="rounded-xl border-2 border-ink bg-postit-green p-3 text-center text-[#111]">
            <div className="text-xs font-semibold">Diskriminatsiya</div>
            <div className="num font-display text-2xl font-bold">${fmt(disc, 2)} mln</div>
          </div>
        </div>
      </Card>
    );
  }
  if (tab === 'play') {
    const adults = (p: number) => (p >= 10 ? 0 : p === 9 ? 100 : p === 8 ? 200 : 300);
    const kids = (p: number) => (p >= 6 ? 0 : p === 5 ? 100 : 200);
    const prices = Array.from({ length: 11 }, (_, i) => i);
    const bestA = prices.reduce((b, p) => (p * adults(p) > b * adults(b) ? p : b), 0);
    const bestK = prices.reduce((b, p) => (p * kids(p) > b * kids(b) ? p : b), 0);
    const bestS = prices.reduce((b, p) => (p * (adults(p) + kids(p)) > b * (adults(b) + kids(b)) ? p : b), 0);
    const fc = 2000;
    const discP = bestA * adults(bestA) + bestK * kids(bestK) - fc;
    const singleP = bestS * (adults(bestS) + kids(bestS)) - fc;
    const explain = `300 kattalar va 200 bola; fixed cost $${fc}, MC = 0. Diskriminatsiya: kattalar **$${bestA}**, bolalar **$${bestK}** → foyda **$${discP}**. Bitta narx qonuni: **$${bestS}** → foyda **$${singleP}** (bolalar kelmaydi). Qonun ishlab chiqaruvchiga $${discP - singleP} zarar, bolalarga $100 CS zarar (WTP $5 bo'lgan 100 bola $4 da $1 dan), kattalar uchun farq yo'q. FC $2,500 bo'lsa: diskriminatsiyada foyda $400 — spektakl bo'ladi; bitta narxda −$400 → spektakl **umuman bo'lmaydi**, hamma yutqazadi.`;
    return (
      <Card
        title="Problem 6 — Spektakl: kattalar va bolalar"
        tabs={<Segmented size="sm" value={tab} onChange={setTab} options={[{ value: 'readalot', label: 'Readalot' }, { value: 'perfect', label: 'Figure 9: mukammal' }, { value: 'play', label: 'Problem 6: spektakl' }]} />}
        explain={explain}
      >
        <div className="overflow-x-auto p-4">
          <table className="num w-full min-w-[420px] text-right text-sm">
            <thead>
              <tr className="border-b-2 border-ink">
                {['Price', 'Adults', 'Children', 'TR adults', 'TR children', 'TR single price'].map((h) => (
                  <th key={h} className="px-2 py-1 font-sans">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {prices
                .slice()
                .reverse()
                .map((p) => (
                  <tr key={p} className="border-b border-line">
                    <td className="px-2 py-1">${p}</td>
                    <td className="px-2">{adults(p)}</td>
                    <td className="px-2">{kids(p)}</td>
                    <td className={`px-2 ${p === bestA ? 'bg-marker/50 font-bold' : ''}`}>${p * adults(p)}</td>
                    <td className={`px-2 ${p === bestK ? 'bg-marker/50 font-bold' : ''}`}>${p * kids(p)}</td>
                    <td className={`px-2 ${p === bestS ? 'bg-marker/50 font-bold' : ''}`}>${p * (adults(p) + kids(p))}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Card>
    );
  }
  // perfect price discrimination on a linear demand with constant MC (Figure 9)
  const a = 100;
  const mc = 20;
  const qc = a - mc;
  const qm = qc / 2;
  const pm = a - qm;
  const f = makeFrame(width, 100, 105);
  const perfect = !single;
  const profitSingle = (pm - mc) * qm;
  const csSingle = 0.5 * qm * (a - pm);
  const dwlSingle = 0.5 * (qc - qm) * (pm - mc);
  const explain = perfect
    ? `**Mukammal narx diskriminatsiyasi** (panel b): har bir xaridorga aynan uning WTP i. MC dan yuqori qadrlaydigan hamma oladi → **DWL yo'q**, butun surplus ($${fmt(profitSingle + csSingle + dwlSingle)}) — monopolist foydasi; **CS = 0**. Problem 12: X = foyda, Y = CS, Z = DWL bo'lsa, diskriminatsiya foydani Y + Z ga, umumiy surplusni faqat Z ga oshiradi. Agar diskriminatsiya C xarajat talab qilsa, firma Y + Z > C da qiladi, jamiyat uchun esa faqat Z > C da foydali.`
    : `**Yagona narx** (panel a): P = $${pm}, Q = ${qm}. Foyda (X) $${fmt(profitSingle)}, CS (Y) $${fmt(csSingle)}, DWL (Z) $${fmt(dwlSingle)}. Haqiqiy diskriminatsiya odatda nomukammal (yosh, hafta kuni, kupon…) va umumiy surplusni oshirishi, kamaytirishi yoki o'zgartirmasligi mumkin; aniq faqat — foyda oshadi.`;
  return (
    <Card
      title="Figure 9 — Welfare with and without Price Discrimination (model)"
      tabs={
        <>
          <Segmented size="sm" value={tab} onChange={setTab} options={[{ value: 'readalot', label: 'Readalot' }, { value: 'perfect', label: 'Figure 9: mukammal' }, { value: 'play', label: 'Problem 6: spektakl' }]} />
          <Segmented size="sm" value={perfect ? 'perfect' : 'single'} onChange={(v) => setSingle(v === 'single')} options={[{ value: 'single', label: '(a) Yagona narx' }, { value: 'perfect', label: '(b) Mukammal diskriminatsiya' }]} />
        </>
      }
      explain={explain}
    >
      <div ref={wrapRef} className="min-w-0 p-1">
        <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="price discrimination welfare">
          <Axes f={f} x="Quantity" y="Price" money />
          {perfect ? (
            <polygon points={`${sx(f, 0)},${sy(f, a)} ${sx(f, qc)},${sy(f, mc)} ${sx(f, 0)},${sy(f, mc)}`} className="fill-good/35 stroke-good" />
          ) : (
            <>
              <polygon points={`${sx(f, 0)},${sy(f, a)} ${sx(f, qm)},${sy(f, pm)} ${sx(f, 0)},${sy(f, pm)}`} className="fill-demand/25" />
              <rect x={sx(f, 0)} y={sy(f, pm)} width={sx(f, qm) - sx(f, 0)} height={sy(f, mc) - sy(f, pm)} className="fill-good/35 stroke-good" />
              <polygon points={`${sx(f, qm)},${sy(f, pm)} ${sx(f, qc)},${sy(f, mc)} ${sx(f, qm)},${sy(f, mc)}`} className="fill-bad/30 stroke-bad" />
              <line x1={sx(f, 0)} y1={sy(f, a)} x2={sx(f, a / 2)} y2={sy(f, 0)} className="stroke-pen" strokeWidth={2} strokeDasharray="6 4" />
              <text x={sx(f, qm / 2)} y={sy(f, (pm + mc) / 2)} textAnchor="middle" className="fill-ink text-[12px] font-bold">Profit (X)</text>
              <text x={sx(f, qm / 3)} y={sy(f, pm + (a - pm) / 3)} textAnchor="middle" className="fill-ink text-[11px] font-bold">CS (Y)</text>
              <text x={sx(f, qm + (qc - qm) / 3)} y={sy(f, mc + (pm - mc) / 3)} textAnchor="middle" className="fill-bad text-[11px] font-bold">Z</text>
            </>
          )}
          {perfect && (
            <text x={sx(f, qc / 3)} y={sy(f, mc + (a - mc) / 3)} textAnchor="middle" className="fill-ink text-[13px] font-bold">Profit = all surplus</text>
          )}
          <line x1={sx(f, 0)} y1={sy(f, a)} x2={sx(f, a)} y2={sy(f, 0)} className="stroke-demand" strokeWidth={3} />
          <line x1={sx(f, 0)} x2={sx(f, 100)} y1={sy(f, mc)} y2={sy(f, mc)} className="stroke-supply" strokeWidth={3} />
          <text x={sx(f, 98)} y={sy(f, mc) - 6} textAnchor="end" className="fill-supply text-[11px] font-bold">Marginal cost</text>
        </svg>
      </div>
    </Card>
  );
}

/** Ch. 16 Figure 10: regulating a natural monopoly — marginal-cost versus average-cost pricing. */
export function NaturalMonopolyRegulation() {
  const [rule, setRule] = useState<'monopoly' | 'mc' | 'ac'>('mc');
  const [F, setF] = useState(1200);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const a = 100;
  const b = 1;
  const c = 20;
  const atc = (q: number) => c + F / q;
  const qMC = (a - c) / b;
  // average-cost pricing: a − bq = c + F/q  → b q² − (a − c) q + F = 0, larger root
  const disc = (a - c) ** 2 - 4 * b * F;
  const qAC = disc >= 0 ? ((a - c) + Math.sqrt(disc)) / (2 * b) : NaN;
  const qM = (a - c) / (2 * b);
  const q = rule === 'mc' ? qMC : rule === 'ac' ? qAC : qM;
  const p = a - b * q;
  const profit = (p - c) * q - F;
  const dwl = 0.5 * (qMC - q) * (p - c);
  const f = makeFrame(width, 100, 105);
  const atcPts: string[] = [];
  for (let x = 5; x <= 100; x += 1) {
    const y = atc(x);
    if (y <= 105) atcPts.push(`${sx(f, x)},${sy(f, y)}`);
  }
  const explain =
    rule === 'mc'
      ? `**Marginal-cost pricing**: P = MC = $${c} → samarali miqdor ${fmt(qMC)}. Lekin tabiiy monopoliyada ATC tushib boradi, MC < ATC → **zarar $${fmt(-profit)}** (kulrang to'rtburchak). Subsidiya kerak (soliq — o'z DWL i bilan) yoki firma chiqib ketadi. Ikkinchi muammo: xarajatni kamaytirishga rag'bat yo'q.`
      : rule === 'ac'
        ? Number.isNaN(qAC)
          ? 'Fixed cost juda katta — hech qanday narxda ATC qoplanmaydi; bozor faqat subsidiya bilan ishlaydi.'
          : `**Average-cost pricing**: P = ATC = $${fmt(p, 2)}, Q = ${fmt(q, 1)} → foyda 0, lekin P > MC → **DWL $${fmt(dwl)}** — bu monopoliya mahsulotiga soliq kabi. Rag'bat muammosi qoladi; regulyatorlar xarajat kamaysa foydaning bir qismini qoldirishga ruxsat beradi.`
        : `**Tartibga solinmagan monopoliya**: MR = MC → Q = ${fmt(q)}, P = $${fmt(p)}, foyda $${fmt(profit)}, DWL $${fmt(dwl)}.`;
  return (
    <Card
      title="Figure 10 — Natural monopoly regulation (model)"
      tabs={<Segmented size="sm" value={rule} onChange={setRule} options={[{ value: 'monopoly', label: 'Tartibsiz monopoliya' }, { value: 'mc', label: 'P = MC' }, { value: 'ac', label: 'P = ATC' }]} />}
      explain={explain}
      controls={<Slider label="Fixed cost (quvurlar tarmog'i)" value={F} min={200} max={1600} step={50} onChange={setF} display={`$${F}`} color="--tax" />}
    >
      <div ref={wrapRef} className="min-w-0 p-1">
        <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="natural monopoly regulation">
          <Axes f={f} x="Quantity" y="Price" money />
          {Number.isFinite(q) && profit < -1 && <rect x={sx(f, 0)} y={sy(f, atc(q))} width={sx(f, q) - sx(f, 0)} height={sy(f, p) - sy(f, atc(q))} className="fill-muted/30 stroke-muted" />}
          {Number.isFinite(q) && dwl > 0.5 && <polygon points={`${sx(f, q)},${sy(f, p)} ${sx(f, qMC)},${sy(f, c)} ${sx(f, q)},${sy(f, c)}`} className="fill-bad/30 stroke-bad" />}
          <line x1={sx(f, 0)} y1={sy(f, a)} x2={sx(f, a / b)} y2={sy(f, 0)} className="stroke-demand" strokeWidth={3} />
          <polyline points={atcPts.join(' ')} fill="none" className="stroke-pen" strokeWidth={3} />
          <line x1={sx(f, 0)} x2={sx(f, 100)} y1={sy(f, c)} y2={sy(f, c)} className="stroke-supply" strokeWidth={3} />
          <text x={sx(f, 98)} y={sy(f, c) - 6} textAnchor="end" className="fill-supply text-[11px] font-bold">Marginal cost</text>
          <text x={sx(f, 98)} y={sy(f, atc(98)) - 6} textAnchor="end" className="fill-pen text-[11px] font-bold">Average total cost</text>
          {Number.isFinite(q) && <circle cx={sx(f, q)} cy={sy(f, p)} r={7} className="fill-marker stroke-ink" strokeWidth={2} />}
        </svg>
      </div>
    </Card>
  );
}
