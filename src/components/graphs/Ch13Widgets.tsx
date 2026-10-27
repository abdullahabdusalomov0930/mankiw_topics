import { useState } from 'react';
import { fmt } from '../../lib/econ';
import { Segmented, Slider } from '../ui/Kit';
import { makeFrame, sx, sy } from './plot';
import { useWidth } from './useWidth';
import { Axes, Card } from './WidgetCard';
import { tr } from '../../lib/lang';

type Bracket = [number, number]; // [lower bound, rate]
/** Book Table 2 (as printed): the second bracket is printed as 15 percent. */
export const BOOK_2020: Bracket[] = [
  [0, 0.1],
  [9875, 0.15],
  [40125, 0.22],
  [85525, 0.24],
  [163300, 0.32],
  [207350, 0.35],
  [518400, 0.37],
];
const SIMPLE: Bracket[] = [
  [0, 0.2],
  [50000, 0.5],
];
const EXEMPT: Bracket[] = [
  [0, 0],
  [20000, 0.25],
];

export function taxOwed(brackets: Bracket[], income: number): number {
  let tax = 0;
  for (let i = 0; i < brackets.length; i++) {
    const [lo, rate] = brackets[i];
    const hi = i + 1 < brackets.length ? brackets[i + 1][0] : Infinity;
    if (income > lo) tax += (Math.min(income, hi) - lo) * rate;
  }
  return tax;
}
export function marginalRate(brackets: Bracket[], income: number): number {
  let r = brackets[0][1];
  for (const [lo, rate] of brackets) if (income > lo) r = rate;
  return r;
}

type Sys = 'book' | 'simple' | 'exempt' | 'lump' | 'p2';
const SYS: Record<Sys, { label: string; note: string }> = {
  book: { label: 'Table 2 (2020)', note: tr("Kitobdagi Table 2 (yolg'iz soliq to'lovchi). Diqqat: kitobda 2-pog'ona **15%** deb chop etilgan; 2020-yil qonunida u 12% edi. Hisob kitob raqamlari bo'yicha.", 'Table 2 in the book (single filer). Note: the book prints the second bracket as **15%**; under the 2020 law it was 12%. The calculation uses the book’s numbers.') },
  simple: { label: '20% / 50%', note: tr("Matndagi misol: $50,000 gacha 20%, undan yuqorisi 50%. $60,000 da soliq $15,000, o'rtacha 25%, marjinal 50%.", 'The example in the text: 20% up to $50,000, 50% above that. At $60,000 the tax is $15,000, the average rate 25%, the marginal rate 50%.') },
  exempt: { label: tr('QQ 4: $20k ozod', 'QQ 4: $20k exempt'), note: tr("QuickQuiz 4: birinchi $20,000 soliqsiz, qolganiga 25%. $50,000 da soliq $7,500 → o'rtacha 15%, marjinal 25%.", 'QuickQuiz 4: the first $20,000 is exempt, the rest is taxed at 25%. At $50,000 the tax is $7,500 → average 15%, marginal 25%.') },
  lump: { label: '$8,000 lump-sum', note: tr("Hamma $8,000 to'laydi: marjinal stavka **0** (eng samarali soliq — DWL yo'q), lekin o'rtacha stavka kam daromadlilarda yuqori — adolatsiz deb qaraladi.", 'Everyone pays $8,000: the marginal rate is **0** (the most efficient tax — no DWL), but the average rate is high for low earners — widely seen as unfair.') },
  p2: { label: tr('Problem 2: hammasi', 'Problem 2: all taxes'), note: tr("Problem 2: shtat solig'i 4% + payroll 15.3% + Table 2 bo'yicha federal soliq (taxable income = daromad deb olinadi).", 'Problem 2: state tax 4% + payroll tax 15.3% + federal tax from Table 2 (taxable income is taken to equal income).') },
};

function totalTax(sys: Sys, y: number) {
  if (sys === 'lump') return 8000;
  if (sys === 'simple') return taxOwed(SIMPLE, y);
  if (sys === 'exempt') return taxOwed(EXEMPT, y);
  if (sys === 'book') return taxOwed(BOOK_2020, y);
  return 0.04 * y + 0.153 * y + taxOwed(BOOK_2020, y);
}
function mRate(sys: Sys, y: number) {
  if (sys === 'lump') return 0;
  if (sys === 'simple') return marginalRate(SIMPLE, y);
  if (sys === 'exempt') return marginalRate(EXEMPT, y);
  if (sys === 'book') return marginalRate(BOOK_2020, y);
  return 0.04 + 0.153 + marginalRate(BOOK_2020, y);
}

/** Ch. 13-2c/d: average versus marginal tax rates for several tax schedules. */
export function TaxRateCalc() {
  const [sys, setSys] = useState<Sys>('book');
  const [income, setIncome] = useState(60000);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const tax = totalTax(sys, income);
  const avg = tax / income;
  const mr = mRate(sys, income);
  const xMax = 250000;
  const f = makeFrame(width, xMax, 60);
  const avgPts: string[] = [];
  const mPts: string[] = [];
  for (let y = 2000; y <= xMax; y += 2000) {
    avgPts.push(`${sx(f, y)},${sy(f, Math.min(60, (totalTax(sys, y) / y) * 100))}`);
    mPts.push(`${sx(f, y)},${sy(f, mRate(sys, y) * 100)}`);
  }
  const explain = tr(`${SYS[sys].note}\n\nDaromad **$${fmt(income)}** → soliq **$${fmt(tax)}**. **O'rtacha stavka** = soliq / daromad = **${fmt(avg * 100, 1)}%** — to'lovchining qurbonligini o'lchaydi. **Marjinal stavka** = keyingi $1 dan soliq = **${fmt(mr * 100, 1)}%** — ko'proq ishlash rag'batiga ta'sir qiladi va **DWL ni belgilaydi**. Har bir stavka faqat o'z oralig'idagi daromadga qo'llanadi: millioner ham birinchi $9,875 dan 10% to'laydi.`, `${SYS[sys].note}\n\nIncome **$${fmt(income)}** → tax **$${fmt(tax)}**. The **average tax rate** = tax / income = **${fmt(avg * 100, 1)}%** — it measures the taxpayer's sacrifice. The **marginal tax rate** = tax on the next $1 = **${fmt(mr * 100, 1)}%** — it affects the incentive to work more and **determines the DWL**. Each rate applies only to income within its bracket: even a millionaire pays 10% on the first $9,875.`);
  return (
    <Card
      title={tr("13-2c — Marginal va average tax rate kalkulyatori", '13-2c — Marginal and average tax rate calculator')}
      tabs={<Segmented size="sm" value={sys} onChange={setSys} options={(Object.keys(SYS) as Sys[]).map((k) => ({ value: k, label: SYS[k].label }))} />}
      explain={explain}
      controls={<Slider label={tr('Daromad (taxable income)', 'Taxable income')} value={income} min={5000} max={250000} step={1000} onChange={setIncome} display={`$${fmt(income)}`} />}
    >
      <div className="grid gap-3 px-4 pt-3 sm:grid-cols-3">
        {[
          [tr('Soliq', 'Tax'), `$${fmt(tax)}`, 'bg-surface2'],
          ['Average tax rate', `${fmt(avg * 100, 1)}%`, 'bg-postit-blue text-[#111]'],
          ['Marginal tax rate', `${fmt(mr * 100, 1)}%`, 'bg-postit-pink text-[#111]'],
        ].map(([a, b, c]) => (
          <div key={a} className={`rounded-xl border-2 border-ink p-3 text-center ${c}`}>
            <div className="text-xs font-semibold opacity-80">{a}</div>
            <div className="num font-display text-2xl font-bold">{b}</div>
          </div>
        ))}
      </div>
      <div ref={wrapRef} className="min-w-0 p-1">
        <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="tax rates">
          <Axes f={f} x="Income ($)" y="Tax rate (%)" />
          <polyline points={mPts.join(' ')} fill="none" className="stroke-bad" strokeWidth={3} />
          <polyline points={avgPts.join(' ')} fill="none" className="stroke-pen" strokeWidth={3} />
          <text x={sx(f, xMax) - 4} y={sy(f, mRate(sys, xMax) * 100) - 6} textAnchor="end" className="fill-bad text-[11px] font-bold">marginal</text>
          <text x={sx(f, xMax) - 4} y={sy(f, Math.min(60, (totalTax(sys, xMax) / xMax) * 100)) + 14} textAnchor="end" className="fill-pen text-[11px] font-bold">average</text>
          <line x1={sx(f, income)} x2={sx(f, income)} y1={sy(f, 0)} y2={sy(f, 60)} className="stroke-muted" strokeDasharray="4 4" />
          <circle cx={sx(f, income)} cy={sy(f, Math.min(60, avg * 100))} r={6} className="fill-pen stroke-ink" strokeWidth={2} />
          <circle cx={sx(f, income)} cy={sy(f, mr * 100)} r={6} className="fill-bad stroke-ink" strokeWidth={2} />
        </svg>
      </div>
    </Card>
  );
}

const CASES = {
  pizza: { label: 'Khalil & Carmen (pizza)', cost: 10, base: 10, buyers: [['Khalil', 16], ['Carmen', 12]] as [string, number][], tax: 4, good: 'pizza' },
  piano: { label: 'QQ 3: Betty (piano)', cost: 50, base: 60, buyers: [['Veronica', 90], ['Archie', 70]] as [string, number][], tax: 20, good: tr('dars', 'lesson') },
};

/** Ch. 13-2a: where the deadweight loss comes from — the buyer who stops buying. */
export function PizzaDWL() {
  const [c, setC] = useState<keyof typeof CASES>('pizza');
  const k = CASES[c];
  const [tax, setTax] = useState(k.tax);
  const price = k.base + tax;
  const margin = k.base - k.cost; // seller's surplus per unit (zero for the pizza example)
  const buyersBefore = k.buyers.filter(([, v]) => v >= k.base);
  const before = buyersBefore.reduce((s, [, v]) => s + (v - k.base + margin), 0);
  const buyers = k.buyers.filter(([, v]) => v >= price);
  const cs = buyers.reduce((s, [, v]) => s + (v - price), 0);
  const ps = margin * buyers.length;
  const revenue = tax * buyers.length;
  const dwl = before - cs - ps - revenue;
  const quitters = buyersBefore.filter(([, v]) => v < price).map(([n]) => n);
  const explain = tr(`${margin ? `Betty bir dars uchun $${k.cost} imkoniyat xarajatiga ega va $${k.base} oladi (har darsdan PS = $${margin}).` : `Taklif $${k.cost} da mukammal elastik (producer surplus 0).`} Soliqsiz total surplus **$${before}**. $${tax} soliq bilan xaridor narxi $${price}: ${buyers.length ? buyers.map(([n, v]) => `${n} (CS ${v} − ${price} = $${v - price})`).join(', ') : 'hech kim olmaydi'}. Endi CS $${cs} + PS $${ps} + tushum **$${revenue}** = $${cs + ps + revenue} → **DWL = $${dwl}**. ${quitters.length ? `DWL soliq to'lovchidan emas, **sotib olmay qo'ygan ${quitters.join(', ')}** dan keladi — u yo'qotgan savdo foydasiga mos tushum yo'q.` : "Hech kim xatti-harakatini o'zgartirmadi → DWL yo'q (soliq — sof transfer)."}`, `${margin ? `Betty's opportunity cost of a lesson is $${k.cost} and she charges $${k.base} (PS = $${margin} per lesson).` : `Supply is perfectly elastic at $${k.cost} (producer surplus 0).`} Total surplus without the tax is **$${before}**. With a $${tax} tax the buyer's price is $${price}: ${buyers.length ? buyers.map(([n, v]) => `${n} (CS ${v} − ${price} = $${v - price})`).join(', ') : 'nobody buys'}. Now CS $${cs} + PS $${ps} + revenue **$${revenue}** = $${cs + ps + revenue} → **DWL = $${dwl}**. ${quitters.length ? `The DWL comes not from the taxpayer but from **${quitters.join(', ')}, who stopped buying** — there is no revenue to match the lost gains from trade.` : 'Nobody changed their behavior → no DWL (the tax is a pure transfer).'}`);
  return (
    <Card
      title={tr("13-2a — Deadweight loss qayerdan keladi?", '13-2a — Where does the deadweight loss come from?')}
      tabs={
        <Segmented
          size="sm"
          value={c}
          onChange={(v) => {
            setC(v);
            setTax(CASES[v].tax);
          }}
          options={Object.entries(CASES).map(([v, x]) => ({ value: v as keyof typeof CASES, label: x.label }))}
        />
      }
      explain={explain}
      controls={<Slider label={tr('Soliq', 'Tax')} value={tax} min={0} max={c === 'pizza' ? 8 : 50} step={1} onChange={setTax} display={`$${tax}`} color="--tax" />}
    >
      <div className="grid gap-2 p-4 sm:grid-cols-2">
        {k.buyers.map(([n, v]) => {
          const buys = v >= price;
          return (
            <div key={n} className={`rounded-xl border-2 border-ink p-3 text-[#111] ${buys ? 'bg-postit-green' : 'bg-postit-pink'}`}>
              <div className="font-display font-bold">{n}</div>
              <div className="text-sm">WTP ${v} · {tr('narx', 'price')} ${price}</div>
              <div className="text-sm font-semibold">{buys ? tr(`oladi, CS = $${v - price}`, `buys, CS = $${v - price}`) : tr(`olmaydi (savdo foydasi $${Math.max(0, v - k.cost)} yo'qoldi)`, `doesn't buy (gains from trade of $${Math.max(0, v - k.cost)} lost)`)}</div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-3 gap-2 px-4 pb-3 text-center text-sm">
        <div className="rounded-lg border-2 border-ink p-2"><div className="text-xs text-muted">CS + PS</div><div className="num font-bold">${cs + ps}</div></div>
        <div className="rounded-lg border-2 border-ink p-2"><div className="text-xs text-muted">{tr('Tushum', 'Revenue')}</div><div className="num font-bold text-good">+${revenue}</div></div>
        <div className="rounded-lg border-2 border-ink bg-postit-yellow p-2 text-[#111]"><div className="text-xs">DWL</div><div className="num font-bold">${dwl}</div></div>
      </div>
    </Card>
  );
}

/** Ch. 13 case study: taxing interest income discourages saving (Sammy Saver). */
export function SavingTax() {
  const [rate, setRate] = useState(6);
  const [taxShare, setTaxShare] = useState(25);
  const [years, setYears] = useState(40);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const grow = (r: number, t: number) => 1000 * Math.pow(1 + r / 100, t);
  const net = rate * (1 - taxShare / 100);
  const a = grow(rate, years);
  const b = grow(net, years);
  const yMax = Math.max(2000, Math.ceil(grow(rate, 60) / 2000) * 2000);
  const f = makeFrame(width, 60, Math.min(yMax, 40000));
  const line = (r: number) => Array.from({ length: 61 }, (_, t) => `${sx(f, t)},${sy(f, Math.min(f.yMax, grow(r, t)))}`).join(' ');
  const explain = tr(`Sammy 25 yoshida $1,000 jamg'aradi. **${rate}%** foizda ${years} yilda: **$${fmt(a, 0)}**. Foiz daromadining ${taxShare}% i soliqqa olinsa, samarali stavka ${fmt(net, 2)}% → atigi **$${fmt(b, 0)}** — ${fmt((1 - b / a) * 100, 0)}% kam. Daromad solig'i jamg'armani kamroq jozibador qiladi. Muqobil — **iste'mol solig'i** (VAT, 401(k)/IRA hisoblari): jamg'arilgan daromad sarflanguncha soliqsiz qoladi. Kitob: 6% va ¼ soliq, 40 yil → $10,286 vs $5,816 (43% kam).`, `At age 25 Sammy saves $1,000. At **${rate}%** interest, in ${years} years it grows to **$${fmt(a, 0)}**. If ${taxShare}% of interest income is taxed, the effective rate is ${fmt(net, 2)}% → only **$${fmt(b, 0)}** — ${fmt((1 - b / a) * 100, 0)}% less. An income tax makes saving less attractive. The alternative is a **consumption tax** (a VAT, 401(k)/IRA accounts): income that is saved is not taxed until it is spent. The book: 6% and a ¼ tax for 40 years → $10,286 vs $5,816 (43% less).`);
  return (
    <Card
      title="Case Study — Should Income or Consumption Be Taxed? (Sammy Saver)"
      explain={explain}
      controls={
        <>
          <Slider label={tr('Foiz stavkasi', 'Interest rate')} value={rate} min={1} max={10} step={0.5} onChange={setRate} display={`${fmt(rate, 1)}%`} />
          <Slider label={tr('Foiz daromadiga soliq', 'Tax on interest income')} value={taxShare} min={0} max={60} step={5} onChange={setTaxShare} display={`${taxShare}%`} color="--tax" />
          <Slider label={tr('Yillar', 'Years')} value={years} min={1} max={60} step={1} onChange={setYears} display={`${years}`} />
        </>
      }
    >
      <div ref={wrapRef} className="min-w-0 p-1">
        <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="saving and taxes">
          <Axes f={f} x="Years" y="Value of $1,000 ($)" />
          <polyline points={line(rate)} fill="none" className="stroke-good" strokeWidth={3} />
          <polyline points={line(net)} fill="none" className="stroke-bad" strokeWidth={3} />
          <line x1={sx(f, years)} x2={sx(f, years)} y1={sy(f, 0)} y2={sy(f, f.yMax)} className="stroke-muted" strokeDasharray="4 4" />
          <text x={sx(f, 4)} y={sy(f, f.yMax * 0.92)} className="fill-good text-[11px] font-bold">{tr('soliqsiz', 'untaxed')}</text>
          <text x={sx(f, 4)} y={sy(f, f.yMax * 0.84)} className="fill-bad text-[11px] font-bold">{tr('foiz soliqqa tortilsa', 'interest taxed')}</text>
        </svg>
      </div>
    </Card>
  );
}

const T5 = [
  ['Lowest', 16600, 0.0, -127.1],
  ['Second', 35900, 11.1, -44.0],
  ['Middle', 63900, 15.5, -11.1],
  ['Fourth', 104000, 18.8, 4.6],
  ['Highest', 310000, 25.4, 21.3],
  ['Top 1%', 1987500, 30.3, 29.7],
] as [string, number, number, number][];

/** Ch. 13 Table 5: the burden of federal taxes, with and without transfers. */
export function TaxBurden() {
  const [transfers, setTransfers] = useState(false);
  const lo = transfers ? -130 : 0;
  const hi = 35;
  const pos = (v: number) => ((v - lo) / (hi - lo)) * 100;
  const explain = transfers
    ? tr("Transfertlar (Social Security, Medicare, Medicaid, SNAP, uy-joy yordami) **manfiy soliq** sifatida hisoblansa: eng past uch kvintil hukumatdan to'laganidan ko'proq oladi. Eng past kvintilning bozor daromadi $16,600, soliq va transfertlardan keyingi daromadi esa **$37,700**. Yuqori guruhlarda o'zgarish kichik.", "If transfers (Social Security, Medicare, Medicaid, SNAP, housing aid) are counted as **negative taxes**, the bottom three quintiles receive more from the government than they pay. The lowest quintile's market income is $16,600, but its income after taxes and transfers is **$37,700**. Higher groups change little.")
    : tr("Federal soliqlar (daromad, payroll, korporativ, aksiz) bozor daromadi foizida, 2018 (CBO). Tizim **progressiv**: eng past kvintil ~0% (payroll solig'i EITC bilan qoplanadi), o'rtasi 15.5%, eng yuqorisi 25.4%, top 1% — 30.3%. QuickQuiz 7: top 1% ≈ **30%**.", "Federal taxes (income, payroll, corporate, excise) as a share of market income, 2018 (CBO). The system is **progressive**: the lowest quintile pays ~0% (its payroll tax is offset by the EITC), the middle 15.5%, the highest 25.4%, the top 1% 30.3%. QuickQuiz 7: the top 1% ≈ **30%**.");
  return (
    <Card
      title="Table 5 — The Burden of Federal Taxes (2018)"
      tabs={<Segmented size="sm" value={transfers ? 'net' : 'tax'} onChange={(v) => setTransfers(v === 'net')} options={[{ value: 'tax', label: 'Taxes, % of income' }, { value: 'net', label: 'Taxes less transfers' }]} />}
      explain={explain}
    >
      <div className="space-y-2 p-4">
        {T5.map(([q, inc, t, n]) => {
          const v = transfers ? n : t;
          const zero = pos(0);
          const p = pos(v);
          return (
            <div key={q} className="grid grid-cols-[6.5rem_1fr_3.5rem] items-center gap-2 text-sm">
              <div>
                <div className="font-semibold">{q}</div>
                <div className="num text-[11px] text-muted">${fmt(inc)}</div>
              </div>
              <div className="relative h-6 rounded-md bg-surface2">
                <div className="absolute top-0 h-6 border-l-2 border-ink" style={{ left: `${zero}%` }} />
                <div className={`absolute top-0 h-6 rounded-sm border-2 border-ink ${v < 0 ? 'bg-good' : 'bg-marker'}`} style={{ left: `${Math.min(zero, p)}%`, width: `${Math.max(0.5, Math.abs(p - zero))}%` }} />
              </div>
              <div className="num text-right font-bold">{fmt(v, 1)}%</div>
            </div>
          );
        })}
        <p className="text-xs text-muted">Source: Congressional Budget Office ({tr('kitobdagi Table 5', 'Table 5 in the book')}).</p>
      </div>
    </Card>
  );
}
