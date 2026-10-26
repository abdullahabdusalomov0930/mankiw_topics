import { useState } from 'react';
import { fmt } from '../../lib/econ';
import { Segmented, Slider } from '../ui/Kit';
import { RichText } from '../ui/RichText';
import { makeFrame, sx, sy } from './plot';
import { useWidth } from './useWidth';
import { Axes, Card } from './WidgetCard';

/** Ounces per hour (book Figure 1: Frank 60 min/oz meat, 15 min/oz potatoes; Ruby 20 and 10). */
const FRANK = { meat: 1, pot: 4 };
const RUBY = { meat: 3, pot: 6 };
const HOURS = 8;

function MiniPPF({ who, rate, prod, cons, noTrade, width }: { who: string; rate: { meat: number; pot: number }; prod: [number, number]; cons: [number, number]; noTrade: [number, number]; width: number }) {
  const xMax = Math.max(50, Math.ceil(cons[0] / 10) * 10);
  const yMax = Math.max(26, Math.ceil(cons[1] / 5) * 5);
  const f = makeFrame(Math.max(260, width), xMax, yMax, 0.8);
  const outside = cons[1] > (rate.meat * (HOURS - cons[0] / rate.pot)) + 1e-9;
  return (
    <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label={`${who} PPF`}>
      <Axes f={f} x="Potatoes (oz)" y="Meat (oz)" />
      <polygon points={`${sx(f, 0)},${sy(f, 0)} ${sx(f, 0)},${sy(f, rate.meat * HOURS)} ${sx(f, rate.pot * HOURS)},${sy(f, 0)}`} className="fill-pen/10" />
      <line x1={sx(f, 0)} y1={sy(f, rate.meat * HOURS)} x2={sx(f, rate.pot * HOURS)} y2={sy(f, 0)} className="stroke-pen" strokeWidth={3} />
      <text x={sx(f, rate.pot * HOURS * 0.08) + 8} y={sy(f, rate.meat * HOURS * 0.92) - 8} className="fill-pen text-[11px] font-bold">
        {who}'s PPF
      </text>
      <circle cx={sx(f, noTrade[0])} cy={sy(f, noTrade[1])} r={5} className="fill-muted" />
      <text x={sx(f, noTrade[0]) - 8} y={sy(f, noTrade[1]) + 16} textAnchor="end" className="fill-muted text-[11px] font-bold">
        {who === 'Frank' ? 'A' : 'B'} ({noTrade[0]}, {noTrade[1]})
      </text>
      <circle cx={sx(f, prod[0])} cy={sy(f, prod[1])} r={7} className="fill-surface stroke-ink" strokeWidth={2.5} />
      <line x1={sx(f, prod[0])} y1={sy(f, prod[1])} x2={sx(f, cons[0])} y2={sy(f, cons[1])} className="stroke-tax" strokeWidth={2} strokeDasharray="5 4" />
      <circle cx={sx(f, cons[0])} cy={sy(f, cons[1])} r={9} className={outside ? 'fill-good stroke-ink' : 'fill-warn stroke-ink'} strokeWidth={2.5} />
      <text x={sx(f, cons[0]) + 12} y={sy(f, cons[1]) - 8} className="fill-ink text-[12px] font-bold">
        {who === 'Frank' ? 'A*' : 'B*'} ({fmt(cons[0], 1)}, {fmt(cons[1], 1)})
      </text>
    </svg>
  );
}

function FrankRuby() {
  const [fh, setFh] = useState(4);
  const [rh, setRh] = useState(4);
  const [price, setPrice] = useState(3);
  const [traded, setTraded] = useState(0);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const two = width > 640;
  const half = Math.max(260, (width - 24) / (two ? 2 : 1));
  const fProd: [number, number] = [FRANK.pot * (HOURS - fh), FRANK.meat * fh];
  const rProd: [number, number] = [RUBY.pot * (HOURS - rh), RUBY.meat * rh];
  const pots = traded * price;
  const fCons: [number, number] = [fProd[0] - pots, fProd[1] + traded];
  const rCons: [number, number] = [rProd[0] + pots, rProd[1] - traded];
  const feasible = fCons[0] >= 0 && rCons[1] >= 0;
  const fGain = [fCons[0] - 16, fCons[1] - 4];
  const rGain = [rCons[0] - 24, rCons[1] - 12];
  const both = fGain[0] >= 0 && fGain[1] >= 0 && rGain[0] >= 0 && rGain[1] >= 0 && fGain.concat(rGain).some((g) => g > 0);
  const inRange = price > 2 && price < 4;
  const g = (v: number) => (v > 0 ? `+${fmt(v, 1)}` : fmt(v, 1));
  const explain = !feasible
    ? "Bunday bitim imkonsiz: kimdir o'zida bor narsadan ko'proq beradi. Ishlab chiqarishni yoki savdo hajmini o'zgartiring."
    : traded === 0
      ? `Savdo yo'q: har kim o'zi ishlab chiqarganini iste'mol qiladi — PPF = iste'mol imkoniyatlari chegarasi. Total: kartoshka **${fProd[0] + rProd[0]}**, go'sht **${fProd[1] + rProd[1]}** oz. “Kitobdagi bitim” tugmasini bosing yoki Frank'ni kartoshkaga, Ruby'ni go'shtga ixtisoslashtiring.`
      : `Frank ${traded} oz go'sht uchun ${fmt(pots, 1)} oz kartoshka beradi — go'shtning narxi **${fmt(price, 1)} oz kartoshka**. Frank uchun go'shtning imkoniyat xarajati **4**, Ruby uchun **2**. ${inRange ? `Narx 2 va 4 orasida — ikkalasi ham o'z OC idan arzonroq sotib oladi.` : `Narx 2–4 oralig'idan tashqarida — kimdir yutqazadi.`} ${both ? `**Ikkalasi ham yutdi**: iste'mol nuqtalari (yashil) o'z PPF idan **tashqarida** — savdosiz erishib bo'lmaydi!` : `Hozircha ikkalasi ham yutmayapti — bitim shartlarini o'zgartiring.`} Jami ishlab chiqarish: kartoshka ${fProd[0] + rProd[0]} (savdosiz 40), go'sht ${fProd[1] + rProd[1]} (savdosiz 16).`;
  return (
    <>
      <div className="flex flex-wrap gap-2 px-4 pt-3">
        <button
          className="btn-primary btn-sm"
          onClick={() => {
            setFh(0);
            setRh(6);
            setPrice(3);
            setTraded(5);
          }}
        >
          ★ Kitobdagi bitim (Figure 2)
        </button>
        <button
          className="btn-ghost btn-sm"
          onClick={() => {
            setFh(4);
            setRh(4);
            setTraded(0);
            setPrice(3);
          }}
        >
          ↺ Savdosiz (A va B)
        </button>
      </div>
      <div ref={wrapRef} className={`grid min-w-0 gap-2 p-2 ${two ? 'grid-cols-2' : ''}`}>
        <div className="min-w-0">
          <MiniPPF who="Frank" rate={FRANK} prod={fProd} cons={fCons} noTrade={[16, 4]} width={half} />
        </div>
        <div className="min-w-0">
          <MiniPPF who="Ruby" rate={RUBY} prod={rProd} cons={rCons} noTrade={[24, 12]} width={half} />
        </div>
      </div>
      <div className="overflow-x-auto px-4 pb-2">
        <table className="w-full min-w-[480px] border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-ink text-left">
              <th className="py-1.5" />
              <th>Frank: meat</th>
              <th>potatoes</th>
              <th>Ruby: meat</th>
              <th>potatoes</th>
            </tr>
          </thead>
          <tbody className="num">
            <tr className="border-b border-line"><td className="py-1 font-sans text-muted">Without trade</td><td>4</td><td>16</td><td>12</td><td>24</td></tr>
            <tr className="border-b border-line"><td className="py-1 font-sans text-muted">Production</td><td>{fProd[1]}</td><td>{fProd[0]}</td><td>{rProd[1]}</td><td>{rProd[0]}</td></tr>
            <tr className="border-b border-line"><td className="py-1 font-sans text-muted">Trade</td><td>gets {traded}</td><td>gives {fmt(pots, 1)}</td><td>gives {traded}</td><td>gets {fmt(pots, 1)}</td></tr>
            <tr className="border-b border-line font-semibold"><td className="py-1 font-sans">Consumption</td><td>{fmt(fCons[1], 1)}</td><td>{fmt(fCons[0], 1)}</td><td>{fmt(rCons[1], 1)}</td><td>{fmt(rCons[0], 1)}</td></tr>
            <tr className="font-bold"><td className="py-1 font-sans">Gains</td>{[fGain[1], fGain[0], rGain[1], rGain[0]].map((v, i) => <td key={i} className={v > 0 ? 'text-good' : v < 0 ? 'text-bad' : ''}>{g(v)}</td>)}</tr>
          </tbody>
        </table>
      </div>
      <div className="grid gap-x-6 border-t-2 border-dashed border-ink/30 px-4 py-3 sm:grid-cols-2">
        <Slider label="Frank: go'shtga soat" value={fh} min={0} max={8} step={1} onChange={setFh} display={`${fh} / 8 soat`} />
        <Slider label="Ruby: go'shtga soat" value={rh} min={0} max={8} step={1} onChange={setRh} display={`${rh} / 8 soat`} />
        <Slider label="Go'sht narxi (oz kartoshka)" value={price} min={1} max={5} step={0.5} onChange={setPrice} display={fmt(price, 1)} color="--tax" />
        <Slider label="Ruby → Frank go'sht (oz)" value={traded} min={0} max={12} step={1} onChange={setTraded} display={`${traded} oz`} color="--demand" />
      </div>
      <div className="border-t-2 border-ink bg-pen/[0.07] px-4 py-3">
        <ExplainText text={explain} />
      </div>
    </>
  );
}

function ExplainText({ text }: { text: string }) {
  return (
    <>
      <div className="kicker mb-1 text-[16px]">Nimani ko'ryapsiz? ✎</div>
      <RichText text={text} block className="prose-uz text-[15px]" />
    </>
  );
}

interface Case {
  label: string;
  a: string;
  b: string;
  x: string;
  y: string;
  unit: string;
  /** output per unit of time */
  ax: number;
  ay: number;
  bx: number;
  by: number;
}
const CASES: Case[] = [
  { label: 'Frank & Ruby', a: 'Frank', b: 'Ruby', x: 'meat', y: 'potatoes', unit: 'soatda (oz)', ax: 1, ay: 4, bx: 3, by: 6 },
  { label: 'Mateo & Sophia (QQ 3–5)', a: 'Mateo', b: 'Sophia', x: 'lawns', y: 'cars washed', unit: 'soatda', ax: 1, ay: 2, bx: 1, by: 3 },
  { label: 'US & Japan', a: 'US', b: 'Japan', x: 'cars', y: 'tons of food', unit: 'oyda (bir ishchi)', ax: 1, ay: 2, bx: 1, by: 1 },
  { label: 'Kayla (QQ 8)', a: 'Kayla', b: 'Roommate', x: 'dinners', y: 'laundry loads', unit: 'soatda', ax: 2, ay: 3, bx: 1, by: 1.5 },
  { label: 'Diego & Darnell (P3)', a: 'Diego', b: 'Darnell', x: 'pizzas', y: 'gal. root beer', unit: '12 soatda', ax: 6, ay: 3, bx: 3, by: 2 },
];

function Calculator() {
  const [c, setC] = useState<Case>(CASES[1]);
  const set = (k: 'ax' | 'ay' | 'bx' | 'by', v: number) => setC({ ...c, [k]: Math.max(0.1, v), label: 'custom' });
  const ocAx = c.ay / c.ax; // cost of 1 x in y for A
  const ocBx = c.by / c.bx;
  const absX = c.ax === c.bx ? 'hech kim' : c.ax > c.bx ? c.a : c.b;
  const absY = c.ay === c.by ? 'hech kim' : c.ay > c.by ? c.a : c.b;
  const same = Math.abs(ocAx - ocBx) < 1e-9;
  const caX = same ? null : ocAx < ocBx ? c.a : c.b;
  const caY = same ? null : caX === c.a ? c.b : c.a;
  const lo = Math.min(ocAx, ocBx);
  const hi = Math.max(ocAx, ocBx);
  const inp = (k: 'ax' | 'ay' | 'bx' | 'by') => (
    <input type="number" min={0.1} step={0.5} value={c[k]} onChange={(e) => set(k, Number(e.target.value))} className="num w-20 rounded-lg border-2 border-ink bg-surface px-2 py-1" />
  );
  const explain = same
    ? `Ikkalasining imkoniyat xarajati **bir xil** (1 ${c.x} = ${fmt(ocAx, 2)} ${c.y}). Hech kimda qiyosiy ustunlik yo'q — **savdodan yutuq yo'q**, garchi ${absX !== 'hech kim' ? absX : absY} mutlaq ustun bo'lsa ham (QuickQuiz 8).`
    : `**Mutlaq ustunlik** (kim ko'proq ishlab chiqaradi): ${c.x} — **${absX}**, ${c.y} — **${absY}**. **Qiyosiy ustunlik** (kimning OC kichik): ${c.x} — **${caX}** (${fmt(Math.min(ocAx, ocBx), 2)} ${c.y}), ${c.y} — **${caY}**. ${caX} ${c.x} ga, ${caY} ${c.y} ga ixtisoslashadi. Ikkalasi yutishi uchun 1 ${c.x} narxi **${fmt(lo, 2)} va ${fmt(hi, 2)} ${c.y}** orasida bo'lishi kerak. Bir kishi ikkala tovarda mutlaq ustun bo'lishi mumkin, lekin ikkalasida **qiyosiy** ustun bo'la olmaydi — OC lar o'zaro teskari.`;
  return (
    <>
      <div className="flex flex-wrap gap-2 px-4 pt-3">
        {CASES.map((k) => (
          <button key={k.label} className={c.label === k.label ? 'btn-primary btn-sm' : 'btn-ghost btn-sm'} onClick={() => setC(k)}>
            {k.label}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto p-4">
        <table className="w-full min-w-[520px] border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-ink text-left">
              <th className="py-1.5">Ishlab chiqarish ({c.unit})</th>
              <th>{c.x}</th>
              <th>{c.y}</th>
              <th>OC of 1 {c.x}</th>
              <th>OC of 1 {c.y}</th>
            </tr>
          </thead>
          <tbody>
            {([
              [c.a, 'ax', 'ay', ocAx] as const,
              [c.b, 'bx', 'by', ocBx] as const,
            ]).map(([name, kx, ky, oc]) => (
              <tr key={name} className="border-b border-line">
                <td className="py-2 font-semibold">{name}</td>
                <td>{inp(kx)}</td>
                <td>{inp(ky)}</td>
                <td className={`num font-semibold ${!same && name === caX ? 'text-good' : ''}`}>{fmt(oc, 2)} {c.y}</td>
                <td className={`num font-semibold ${!same && name === caY ? 'text-good' : ''}`}>{fmt(1 / oc, 2)} {c.x}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-xs text-muted">Yashil — qiyosiy ustunlik (kichikroq imkoniyat xarajati). Raqamlarni o'zgartirib o'z misolingizni tuzing.</p>
      </div>
      <div className="border-t-2 border-ink bg-pen/[0.07] px-4 py-3">
        <ExplainText text={explain} />
      </div>
    </>
  );
}

/** Ch. 3: specialization and trade between Frank and Ruby, plus an absolute/comparative advantage calculator. */
export function ComparativeAdvantageLab({ initial = 'trade' }: { initial?: 'trade' | 'calc' }) {
  const [tab, setTab] = useState<'trade' | 'calc'>(initial);
  return (
    <Card
      title="Figures 1–2, Table 1 — Comparative advantage laboratoriyasi"
      tabs={
        <Segmented
          size="sm"
          value={tab}
          onChange={setTab}
          options={[
            { value: 'trade', label: 'Frank & Ruby savdosi' },
            { value: 'calc', label: 'Ustunlik kalkulyatori' },
          ]}
        />
      }
      explain=""
      bare
    >
      {tab === 'trade' ? <FrankRuby /> : <Calculator />}
    </Card>
  );
}
