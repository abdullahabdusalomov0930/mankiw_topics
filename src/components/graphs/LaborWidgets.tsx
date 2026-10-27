import { useState } from 'react';
import { fmt } from '../../lib/econ';
import { Segmented, Slider } from '../ui/Kit';
import { makeFrame, sx, sy } from './plot';
import { useWidth } from './useWidth';
import { Axes, Card } from './WidgetCard';

const SCHEDULES = {
  apples: { label: 'Olma bog‘i (Table 1)', input: 'ishchi', output: 'bushel', q: [0, 100, 180, 240, 280, 300], price: 10, factorPrice: 500, factor: 'Ish haqi (haftalik)' },
  p3: { label: 'Problem 3', input: 'kun', output: 'birlik', q: [0, 7, 13, 19, 25, 28, 29, 29], price: 10, factorPrice: 50, factor: 'Kunlik ish haqi' },
  robots: { label: 'Smiling Cow robotlari (P4)', input: 'robot', output: 'gallon', q: [0, 50, 85, 115, 140, 150, 155], price: 4, factorPrice: 100, factor: 'Robot ijarasi (kunlik)' },
};

/** Ch. 19 Table 1 / Figure 3: the value of the marginal product and the demand for a factor. */
export function VMPLab() {
  const [key, setKey] = useState<keyof typeof SCHEDULES>('apples');
  const s = SCHEDULES[key];
  const [price, setPrice] = useState(s.price);
  const [w, setW] = useState(s.factorPrice);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const mp = s.q.slice(1).map((v, i) => v - s.q[i]);
  const vmp = mp.map((m) => m * price);
  const hire = vmp.filter((v) => v >= w).length; // hire while VMP ≥ factor price (ties hired)
  const profit = vmp.slice(0, hire).reduce((a, v) => a + v - w, 0);
  const n = mp.length;
  const yMax = Math.max(vmp[0] * 1.15, w * 1.2, 1);
  const f = makeFrame(width, n + 0.5, yMax);
  const explain = `Narx $${price}, ${s.factor.toLowerCase()} $${w}. Har bir ${s.input}ning qiymati: **VMP = P × MP** (${vmp.map((v) => `$${fmt(v)}`).join(', ')}). Raqobatchi firma VMP ≥ narx bo'lguncha yollaydi → **${hire} ${s.input}**; shu yollashdan qo'shimcha foyda $${fmt(profit)}. VMP egri chizig'i — firmaning **resursga talab egri chizig'i** (derived demand). Mahsulot narxi oshsa — VMP va talab yuqoriga siljiydi; texnologiya MP ni oshirsa ham shunday.${key === 'apples' ? ' Kitob: $10 va $500 da 3 ishchi (4-ishchi VMP $400 < $500).' : key === 'robots' ? " P4: 4-robotda VMP = $100 = ijara — 3 yoki 4 robot farqsiz." : ''}`;
  return (
    <Card
      title="Table 1 / Figure 3 — Value of the marginal product va resursga talab"
      tabs={<Segmented size="sm" value={key} onChange={(v) => { setKey(v); setPrice(SCHEDULES[v].price); setW(SCHEDULES[v].factorPrice); }} options={Object.entries(SCHEDULES).map(([v, x]) => ({ value: v as keyof typeof SCHEDULES, label: x.label }))} />}
      explain={explain}
      controls={
        <>
          <Slider label="Mahsulot narxi" value={price} min={1} max={s.price * 2} step={key === 'robots' ? 0.5 : 1} onChange={setPrice} display={`$${price}`} color="--demand" />
          <Slider label={s.factor} value={w} min={0} max={Math.round(s.q[1] * s.price * 1.6)} step={key === 'apples' ? 25 : 5} onChange={setW} display={`$${w}`} color="--supply" />
        </>
      }
    >
      <div ref={wrapRef} className="min-w-0 p-1">
        <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="value of marginal product">
          <Axes f={f} x={`Quantity (${s.input})`} y="Value of the marginal product" money />
          {vmp.map((v, i) => (
            <rect key={i} x={sx(f, i + 0.1)} y={sy(f, v)} width={sx(f, i + 0.9) - sx(f, i + 0.1)} height={sy(f, 0) - sy(f, v)} className={i < hire ? 'fill-good/50 stroke-good' : 'fill-muted/30 stroke-muted'} />
          ))}
          <line x1={sx(f, 0)} x2={sx(f, n + 0.5)} y1={sy(f, w)} y2={sy(f, w)} className="stroke-supply" strokeWidth={3} />
          <text x={sx(f, n + 0.5) - 4} y={sy(f, w) - 6} textAnchor="end" className="fill-supply text-[11px] font-bold">
            factor price ${w}
          </text>
          <text x={sx(f, 0.15)} y={f.mt + 14} className="fill-good text-[11px] font-bold">VMP = P × MP (demand for {s.input}s)</text>
        </svg>
      </div>
      <div className="overflow-x-auto px-4 pb-3">
        <table className="num w-full min-w-[420px] text-right text-xs">
          <thead>
            <tr className="border-b-2 border-ink">
              {[s.input, s.output, 'MP', 'VMP', 'VMP − price'].map((h) => (
                <th key={h} className="px-2 py-1 font-sans">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {s.q.map((q, i) => (
              <tr key={i} className={`border-b border-line ${i === hire ? 'bg-marker/40 font-bold' : ''}`}>
                <td className="px-2 py-1">{i}</td>
                <td className="px-2">{q}</td>
                <td className="px-2">{i ? mp[i - 1] : ''}</td>
                <td className="px-2">{i ? `$${fmt(vmp[i - 1])}` : ''}</td>
                <td className={`px-2 ${i && vmp[i - 1] - w < 0 ? 'text-bad' : 'text-good'}`}>{i ? `${vmp[i - 1] - w < 0 ? '−' : '+'}$${fmt(Math.abs(vmp[i - 1] - w))}` : ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

type Ev = 'none' | 'immigration' | 'price' | 'ladders' | 'plague';
const EVENTS: Record<Ev, { label: string; dD: number; dS: number; text: string }> = {
  none: { label: 'Boshlang‘ich', dD: 0, dS: 0, text: "Muvozanatda ish haqi = VMP: har bir firma VMP = W gacha yollagan." },
  immigration: { label: 'Immigratsiya', dD: 0, dS: 40, text: "**Figure 5**: olma teruvchilar ko'paydi → taklif o'ngga → ish haqi tushadi, bandlik oshadi; har bog'da ishchi ko'p → MP va VMP tushadi. (Isroil, 1988: falastinlik ishchilar yarmiga kamaygach, qolganlarining maoshi ~50% oshgan — teskari yo'nalish.)" },
  price: { label: 'Olma narxi oshdi', dD: 40, dS: 0, text: "**Figure 6**: olma qimmatladi → har bir ishchining VMP i oshdi → talab o'ngga → ish haqi va bandlik oshadi. Soha firmalari va ishchilari farovonligi bog'liq (neft konchilari maoshi neft narxiga bog'liq)." },
  ladders: { label: 'Bo‘ron narvonlarni buzdi', dD: -40, dS: 0, text: "Narvonlar kam → olma teruvchilarning MP i tushadi → mehnatga talab chapga → ish haqi tushadi. Narvon ijarasi esa oshadi. **Bir omil taklifi o'zgarsa, barcha omillar daromadi o'zgaradi.**" },
  plague: { label: 'Qora o‘lim (vabo)', dD: 0, dS: -40, text: "**Black Death** (XIV asr): aholining ~⅓ i nobud bo'ldi → ishchilar kam → mehnatning MP i oshdi → ish haqi **~2 barobar**; yerning MP i tushdi → ijara **50%+ kamaydi**." },
};

/** Ch. 19-3 Figures 4–6 and Problem 5: shifts in labor supply and demand; the Ectenia orchards. */
export function LaborMarketLab() {
  const [tab, setTab] = useState<'shift' | 'ectenia'>('shift');
  const [ev, setEv] = useState<Ev>('none');
  const [pApple, setPApple] = useState(2);
  const [orchards, setOrchards] = useState(20);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  if (tab === 'ectenia') {
    // VMP = P(100 − 2L) = W  → per orchard L = 50 − W/(2P); market: orchards × that = 200 workers
    const W = 2 * pApple * (50 - 200 / orchards);
    const Lper = 200 / orchards;
    const Q = 100 * Lper - Lper * Lper;
    const profit = pApple * Q - W * Lper;
    const total = orchards * pApple * Q;
    const explain = `Problem 5: ${orchards} bog', olma $${pApple}, Q = 100L − L², MPL = 100 − 2L, 200 ishchi (taklif inelastik). Bog' talabi: ${pApple}(100 − 2L) = W → L = 50 − W/${2 * pApple}; bozor: ${orchards} × L = 200 → **W = $${fmt(W)}**, har bog' **${fmt(Lper)}** ishchi, ${fmt(Q)} olma, egasi foydasi **$${fmt(profit)}**. Ectenia daromadi: $${fmt(total)} (ishchilar $${fmt(W * 200)}, egalar $${fmt(profit * orchards)}). Kitob holatlari: $2 va 20 bog' → W = 160, foyda 200; narx $4 → ikkalasi ikki barobar (320, 400); bo'ron yarim bog'ni buzsa (10 bog') → W = 120, qolgan egalar foydasi 800, Ectenia jami daromadi 36,000 dan 32,000 ga tushadi.`;
    return (
      <Card
        title="Problem 5 — Ectenia olma bog'lari"
        tabs={<Segmented size="sm" value={tab} onChange={setTab} options={[{ value: 'shift', label: 'Siljishlar (Figures 4–6)' }, { value: 'ectenia', label: 'Ectenia (P5)' }]} />}
        explain={explain}
        controls={
          <>
            <Segmented size="sm" value={String(pApple)} onChange={(v) => setPApple(Number(v))} options={[{ value: '2', label: 'Olma $2' }, { value: '4', label: 'Olma $4' }]} />
            <Segmented size="sm" value={String(orchards)} onChange={(v) => setOrchards(Number(v))} options={[{ value: '20', label: '20 bog‘' }, { value: '10', label: '10 bog‘ (bo‘ron)' }]} />
          </>
        }
      >
        <div className="grid gap-2 p-4 sm:grid-cols-4">
          {[
            ['Ish haqi (kunlik)', `$${fmt(W)}`],
            ['Ishchi / bog‘', fmt(Lper)],
            ['Ega foydasi', `$${fmt(profit)}`],
            ['Ectenia daromadi', `$${fmt(total)}`],
          ].map(([a, b]) => (
            <div key={a} className="rounded-xl border-2 border-ink bg-surface2 p-3 text-center">
              <div className="text-xs font-semibold text-muted">{a}</div>
              <div className="num font-display text-xl font-bold">{b}</div>
            </div>
          ))}
        </div>
      </Card>
    );
  }
  const e = EVENTS[ev];
  const dA = 120 + e.dD; // demand: W = dA − L
  const sC = 20 - e.dS; // supply: W = sC + L
  const L = (dA - sC) / 2;
  const W = dA - L;
  const L0 = 50;
  const W0 = 70;
  const f = makeFrame(width, 120, 160);
  const explain = `${e.text} Model: muvozanat ${ev === 'none' ? '' : `L ${fmt(L0)} → **${fmt(L)}**, W $${fmt(W0)} → **$${fmt(W)}**. `}Har doim **W = VMP** — ish haqi va VMP birga o'zgaradi.`;
  return (
    <Card
      title="Figures 4–6 — Mehnat bozori muvozanati va siljishlar (model)"
      tabs={
        <>
          <Segmented size="sm" value={tab} onChange={setTab} options={[{ value: 'shift', label: 'Siljishlar (Figures 4–6)' }, { value: 'ectenia', label: 'Ectenia (P5)' }]} />
          <Segmented size="sm" value={ev} onChange={setEv} options={(Object.keys(EVENTS) as Ev[]).map((k) => ({ value: k, label: EVENTS[k].label }))} />
        </>
      }
      explain={explain}
    >
      <div ref={wrapRef} className="min-w-0 p-1">
        <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="labor market">
          <Axes f={f} x="Quantity of Labor" y="Wage" money />
          {ev !== 'none' && (
            <>
              <line x1={sx(f, 0)} y1={sy(f, 120)} x2={sx(f, 120)} y2={sy(f, 0)} className="stroke-demand" strokeWidth={2} strokeDasharray="6 5" opacity={0.6} />
              <line x1={sx(f, 0)} y1={sy(f, 20)} x2={sx(f, 120)} y2={sy(f, 140)} className="stroke-supply" strokeWidth={2} strokeDasharray="6 5" opacity={0.6} />
              <circle cx={sx(f, L0)} cy={sy(f, W0)} r={5} className="fill-muted" />
            </>
          )}
          <line x1={sx(f, 0)} y1={sy(f, dA)} x2={sx(f, Math.min(120, dA))} y2={sy(f, Math.max(0, dA - 120))} className="stroke-demand" strokeWidth={3} />
          <line x1={sx(f, 0)} y1={sy(f, Math.max(0, sC))} x2={sx(f, 120)} y2={sy(f, Math.min(160, sC + 120))} className="stroke-supply" strokeWidth={3} />
          <circle cx={sx(f, L)} cy={sy(f, W)} r={8} className="fill-marker stroke-ink" strokeWidth={2} />
          <text x={sx(f, L) + 10} y={sy(f, W) - 8} className="fill-ink text-[11px] font-bold">W = VMP = ${fmt(W)}</text>
          <text x={sx(f, 4)} y={sy(f, dA) + 14} className="fill-demand text-[11px] font-bold">Demand (VMP)</text>
          <text x={sx(f, 116)} y={sy(f, Math.min(155, sC + 116)) + 14} textAnchor="end" className="fill-supply text-[11px] font-bold">Supply</text>
        </svg>
      </div>
    </Card>
  );
}

/** Ch. 19 Problem 9: the Cobb–Douglas production function and the stable labor share. */
export function CobbDouglasLab() {
  const [P, setP] = useState(2);
  const [A, setA] = useState(3);
  const [K, setK] = useState(1_000_000);
  const [L, setL] = useState(1000);
  const Y = A * Math.cbrt(K) * Math.cbrt(L) ** 2;
  const MPL = (2 / 3) * A * Math.cbrt(K / L);
  const W = P * MPL;
  const share = (W * L) / (P * Y);
  const explain = `Y = A·K^⅓·L^⅔ = **${fmt(Y)}**, PY = $${fmt(P * Y)}. MPL = (2/3)·A·(K/L)^⅓ = ${fmt(MPL, 2)} → raqobatda **W = P × MPL = $${fmt(W, 2)}**, real ish haqi W/P = **${fmt(MPL, 2)}**. Mehnat ulushi WL/PY = **${fmt(share * 100, 1)}%** — har qanday P, A, K, L da ⅔! Kitob holatlari: (i) P 2 → 3: Y va W/P o'zgarmaydi, W 40 → 60; (ii) A 3 → 9: Y, W, W/P uch barobar; (iii) K 1 mln → 8 mln: Y va W/P ikki barobar; (iv) L 1,000 → 125 (vabo): Y 30,000 → 7,500, W/P ikki barobar (20 → 40). AQShda mehnat ulushi barqarorligi Cobb–Douglas bilan mos.`;
  return (
    <Card
      title="Problem 9 — Cobb–Douglas ishlab chiqarish funksiyasi"
      tabs={
        <>
          <button className="btn-ghost btn-sm" onClick={() => { setP(2); setA(3); setK(1_000_000); setL(1000); }}>Boshlang'ich</button>
          <button className="btn-ghost btn-sm" onClick={() => setP(3)}>(i) P = 3</button>
          <button className="btn-ghost btn-sm" onClick={() => setA(9)}>(ii) A = 9</button>
          <button className="btn-ghost btn-sm" onClick={() => setK(8_000_000)}>(iii) K = 8 mln</button>
          <button className="btn-ghost btn-sm" onClick={() => setL(125)}>(iv) L = 125</button>
        </>
      }
      explain={explain}
      controls={
        <>
          <Slider label="Narx P" value={P} min={1} max={5} step={0.5} onChange={setP} display={fmt(P, 1)} />
          <Slider label="Texnologiya A" value={A} min={1} max={12} step={1} onChange={setA} display={`${A}`} />
          <Slider label="Kapital K" value={K} min={125_000} max={8_000_000} step={125_000} onChange={setK} display={fmt(K)} />
          <Slider label="Mehnat L" value={L} min={125} max={8000} step={125} onChange={setL} display={fmt(L)} />
        </>
      }
    >
      <div className="grid gap-2 p-4 sm:grid-cols-4">
        {[
          ['Output Y', fmt(Y)],
          ['Wage W', `$${fmt(W, 2)}`],
          ['Real wage W/P', fmt(MPL, 2)],
          ['Labor share', `${fmt(share * 100, 1)}%`],
        ].map(([a, b]) => (
          <div key={a} className="rounded-xl border-2 border-ink bg-surface2 p-3 text-center">
            <div className="text-xs font-semibold text-muted">{a}</div>
            <div className="num font-display text-xl font-bold">{b}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

const FIG7 = [
  ['1960–1973', 2.9, 2.7],
  ['1973–1995', 1.5, 1.2],
  ['1995–2010', 2.7, 2.2],
  ['2010–2020', 1.5, 1.1],
] as [string, number, number][];

/** Ch. 19 Figure 7: growth in productivity and real wages by period. */
export function ProductivityWages() {
  const explain = "Figure 7 (BLS): unumdorlik tez o'sgan davrlarda real ish haqi ham tez o'sgan, sekin o'sganda — sekin. 1960–2020: unumdorlik yiliga ~2.0%, real ish haqi ~1.9% — 35 yilda ikki barobar. QuickQuiz 8: 1973-yil atrofida unumdorlik o'sishi **sekinlashgan** va real ish haqi o'sishi ham **sekinlashgan**. (Ma'lumotlar rasm sifatida; juftliklar matn qatlamidan tiklangan.)";
  const max = 3.5;
  return (
    <Card title="Figure 7 — Growth in Productivity and Real Wages" explain={explain}>
      <div className="space-y-3 p-4">
        {FIG7.map(([period, prod, wage]) => (
          <div key={period}>
            <div className="mb-1 text-sm font-semibold">{period}</div>
            {[
              ['Productivity', prod, 'bg-pen'],
              ['Real wages', wage, 'bg-good'],
            ].map(([l, v, cls]) => (
              <div key={l as string} className="mb-1 grid grid-cols-[6.5rem_1fr_2.5rem] items-center gap-2 text-xs">
                <span className="text-muted">{l as string}</span>
                <div className="h-4 rounded bg-surface2">
                  <div className={`h-4 rounded border border-ink ${cls as string}`} style={{ width: `${((v as number) / max) * 100}%` }} />
                </div>
                <span className="num text-right font-bold">{v as number}%</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
}
