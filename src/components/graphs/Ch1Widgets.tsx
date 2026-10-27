import { useState } from 'react';
import { fmt, money } from '../../lib/econ';
import { Segmented, Slider } from '../ui/Kit';
import { Axes, Card } from './WidgetCard';
import { makeFrame, sx, sy } from './plot';
import { useWidth } from './useWidth';
import { tr } from '../../lib/lang';

/** Ch. 1 Principle 3: average cost vs marginal cost (streaming service, standby passenger). */
export function MarginalLab() {
  const [tab, setTab] = useState<'stream' | 'plane'>('plane');
  const [fee, setFee] = useState(30);
  const [movies, setMovies] = useState(5);
  const [flightCost, setFlightCost] = useState(100000);
  const [seats, setSeats] = useState(200);
  const [wtp, setWtp] = useState(300);
  const [mc, setMc] = useState(20);
  if (tab === 'stream') {
    const avg = fee / movies;
    return (
      <Card
        title={tr("Principle 3 — Marginal thinking: yana bitta film", 'Principle 3 — Marginal thinking: one more movie')}
        tabs={<Segmented size="sm" value={tab} onChange={setTab} options={[{ value: 'plane', label: tr('Standby yo‘lovchi', 'Standby passenger') }, { value: 'stream', label: tr('Striming', 'Streaming') }]} />}
        explain={tr(`Oylik obuna **${money(fee)}**, oyiga **${movies}** ta film → o'rtacha xarajat **${money(avg)}** bir film. Lekin bugun kechqurun yana bitta film ko'rish qaroriga **marjinal xarajat** kerak: obuna baribir to'lanadi, shuning uchun qo'shimcha pul xarajati **$0**. Yagona xarajat — vaqt (ish yoki — yaxshisi — shu darslik!). Obuna narxini o'zgartiring: marjinal xarajat baribir nol.`, `A monthly subscription costs **${money(fee)}** and you watch **${movies}** movies a month → average cost **${money(avg)}** per movie. But the decision to watch one more movie tonight needs the **marginal cost**: the subscription is paid anyway, so the extra money cost is **$0**. The only cost is your time (work, or better, this course!). Change the fee: the marginal cost stays zero.`)}
        controls={
          <>
            <Slider label={tr('Oylik obuna', 'Monthly subscription')} value={fee} min={5} max={60} step={1} onChange={setFee} display={money(fee)} />
            <Slider label={tr("Oyiga ko'rilgan filmlar", 'Movies watched per month')} value={movies} min={1} max={20} step={1} onChange={setMovies} display={`${movies}`} />
          </>
        }
      >
        <div className="grid gap-3 p-4 sm:grid-cols-2">
          <div className="rounded-xl border-2 border-ink bg-surface2 p-4 text-center">
            <div className="text-xs font-semibold text-muted">{tr("Average cost (o'rtacha)", 'Average cost')}</div>
            <div className="num mt-1 font-display text-3xl font-bold line-through decoration-bad decoration-2">{money(avg)}</div>
            <div className="mt-1 text-xs text-muted">{tr('qaror uchun ahamiyatsiz', 'irrelevant for the decision')}</div>
          </div>
          <div className="rounded-xl border-2 border-ink bg-postit-green p-4 text-center text-[#111]">
            <div className="text-xs font-semibold">{tr('Marginal cost (marjinal)', 'Marginal cost')}</div>
            <div className="num mt-1 font-display text-3xl font-bold">$0.00</div>
            <div className="mt-1 text-xs">{tr('+ vaqtingizning imkoniyat xarajati', '+ the opportunity cost of your time')}</div>
          </div>
        </div>
      </Card>
    );
  }
  const avg = flightCost / seats;
  const gain = wtp - mc;
  return (
    <Card
      title={tr("Principle 3 — Marginal thinking: standby yo'lovchi Stanley", 'Principle 3 — Marginal thinking: Stanley the standby passenger')}
      tabs={<Segmented size="sm" value={tab} onChange={setTab} options={[{ value: 'plane', label: tr('Standby yo‘lovchi', 'Standby passenger') }, { value: 'stream', label: tr('Striming', 'Streaming') }]} />}
      explain={tr(`${seats} o'rinli samolyot uchishi **${`$${fmt(flightCost, 0)}`}** turadi → bir o'rinning o'rtacha xarajati **${money(avg)}**. Samolyotda bo'sh o'rin bor, Stanley **${money(wtp, 0)}** to'lashga tayyor. Bo'sh o'ringa yana bir yo'lovchi qo'shishning **marjinal xarajati** — bir banka gazli suv va ozgina yoqilg'i (~${money(mc, 0)}). ${gain > 0 ? `WTP > MC, demak chipta sotish aviakompaniyaga **${money(gain, 0)} foyda** keltiradi — garchi narx o'rtacha xarajatdan past bo'lsa ham.` : `WTP ≤ MC — bu holda sotish foydasiz.`} **Qoida: MB > MC bo'lsagina harakat qiling.**`, `Flying a ${seats}-seat plane costs **${`$${fmt(flightCost, 0)}`}** → the average cost of a seat is **${money(avg)}**. The plane has an empty seat and Stanley is willing to pay **${money(wtp, 0)}**. The **marginal cost** of one more passenger in an empty seat is a can of soda and a little fuel (~${money(mc, 0)}). ${gain > 0 ? `WTP > MC, so selling the ticket earns the airline **${money(gain, 0)} profit**, even though the price is below average cost.` : `WTP ≤ MC — here selling would not pay.`} **Rule: act only if MB > MC.**`)}
      controls={
        <>
          <Slider label={tr('Reys xarajati', 'Cost of the flight')} value={flightCost} min={20000} max={200000} step={5000} onChange={setFlightCost} display={`$${fmt(flightCost, 0)}`} />
          <Slider label={tr("O'rinlar soni", 'Number of seats')} value={seats} min={50} max={400} step={10} onChange={setSeats} display={`${seats}`} />
          <Slider label={tr("Stanley'ning WTP", "Stanley's WTP")} value={wtp} min={0} max={800} step={10} onChange={setWtp} display={money(wtp, 0)} color="--demand" />
          <Slider label={tr("Qo'shimcha yo'lovchining marjinal xarajati", 'Marginal cost of one more passenger')} value={mc} min={0} max={200} step={5} onChange={setMc} display={money(mc, 0)} color="--supply" />
        </>
      }
    >
      <div className="grid gap-3 p-4 sm:grid-cols-3">
        <div className="rounded-xl border-2 border-ink bg-surface2 p-3 text-center">
          <div className="text-xs font-semibold text-muted">{tr("O'rtacha xarajat / o'rin", 'Average cost per seat')}</div>
          <div className="num mt-1 font-display text-2xl font-bold">{money(avg)}</div>
        </div>
        <div className="rounded-xl border-2 border-ink bg-surface2 p-3 text-center">
          <div className="text-xs font-semibold text-muted">MB (WTP) vs MC</div>
          <div className="num mt-1 font-display text-2xl font-bold">
            {money(wtp, 0)} {wtp > mc ? '>' : '≤'} {money(mc, 0)}
          </div>
        </div>
        <div className={`rounded-xl border-2 border-ink p-3 text-center text-[#111] ${gain > 0 ? 'bg-postit-green' : 'bg-postit-pink'}`}>
          <div className="text-xs font-semibold">{tr('Qaror', 'Decision')}</div>
          <div className="mt-1 font-display text-2xl font-bold">{gain > 0 ? tr('Soting ✓', 'Sell ✓') : tr('Sotmang ✗', "Don't sell ✗")}</div>
          <div className="num text-xs">{tr('foyda', 'profit')}: {money(gain, 0)}</div>
        </div>
      </div>
    </Card>
  );
}

/** Ch. 1 Principles 8–9: compounding of income growth and of inflation. */
export function GrowthLab() {
  const [mode, setMode] = useState<'income' | 'prices'>('income');
  const [g, setG] = useState(2);
  const [years, setYears] = useState(35);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const mult = Math.pow(1 + g / 100, years);
  const exactDouble = Math.log(2) / Math.log(1 + g / 100);
  const yMax = Math.max(2, Math.ceil(Math.pow(1 + g / 100, 100) > 20 ? 20 : Math.pow(1 + g / 100, 100)));
  const f = makeFrame(width, 100, yMax);
  const pts: string[] = [];
  for (let t = 0; t <= 100; t++) {
    const v = Math.min(Math.pow(1 + g / 100, t), yMax);
    pts.push(`${sx(f, t)},${sy(f, v)}`);
  }
  const what = mode === 'income' ? tr("o'rtacha daromad", 'average income') : tr('narxlar darajasi', 'the price level');
  return (
    <Card
      title={tr("Principles 8–9 — O'sish va inflyatsiya qanday “yig'iladi”", 'Principles 8–9 — How growth and inflation compound')}
      tabs={
        <Segmented
          size="sm"
          value={mode}
          onChange={setMode}
          options={[
            { value: 'income', label: tr('Daromad o‘sishi (unumdorlik)', 'Income growth (productivity)') },
            { value: 'prices', label: tr('Inflyatsiya (pul)', 'Inflation (money)') },
          ]}
        />
      }
      explain={tr(`Yillik **${fmt(g, 1)}%** o'sishda ${what} **${years} yilda ${fmt(mult, 2)} marta** oshadi va taxminan har **${fmt(exactDouble, 1)} yilda** ikki barobar bo'ladi (“70 qoidasi”: 70 / ${fmt(g, 1)} ≈ ${fmt(70 / g, 1)}). Kitob: AQShda daromad yiliga ~2% o'sgan → 35 yilda ikki barobar, bir asrda ~8 marta. ${mode === 'income' ? "Bu o'sishning manbai — **unumdorlik** (Principle 8)." : "XXI asr boshida AQSh inflyatsiyasi ~2% edi — narxlar 35 yilda ikki barobar. Katta inflyatsiya sababi — **pul miqdorining** tez o'sishi (Principle 9). Germaniya 1920-yillarda: narxlar har oy **uch barobar**!"}`, `At **${fmt(g, 1)}%** a year, ${what} grows **${fmt(mult, 2)} times in ${years} years** and doubles roughly every **${fmt(exactDouble, 1)} years** (“rule of 70”: 70 / ${fmt(g, 1)} ≈ ${fmt(70 / g, 1)}). The book: U.S. income has grown about 2% a year → it doubles in 35 years and rises ~8-fold in a century. ${mode === 'income' ? 'The source of this growth is **productivity** (Principle 8).' : 'Early in the 21st century U.S. inflation was about 2% — prices double in 35 years. Big inflations come from fast growth in the **quantity of money** (Principle 9). Germany in the 1920s: prices **tripled** every month!'}`)}
      controls={
        <>
          <Slider label={tr("Yillik o'sish sur'ati", 'Annual growth rate')} value={g} min={0.5} max={10} step={0.5} onChange={setG} display={`${fmt(g, 1)}%`} color={mode === 'income' ? '--good' : '--bad'} />
          <Slider label={tr('Yillar', 'Years')} value={years} min={1} max={100} step={1} onChange={setYears} display={`${years}`} />
        </>
      }
    >
      <div ref={wrapRef} className="min-w-0 p-1">
        <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="compound growth">
          <Axes f={f} x="Years" y={mode === 'income' ? 'Income (× start)' : 'Price level (× start)'} />
          <line x1={sx(f, 0)} x2={sx(f, 100)} y1={sy(f, 2)} y2={sy(f, 2)} className="stroke-muted" strokeDasharray="5 5" />
          <text x={sx(f, 100) - 4} y={sy(f, 2) - 5} textAnchor="end" className="fill-muted text-[11px]">×2</text>
          <polyline points={pts.join(' ')} fill="none" className={mode === 'income' ? 'stroke-good' : 'stroke-bad'} strokeWidth={3.5} />
          {mult <= yMax && <circle cx={sx(f, years)} cy={sy(f, mult)} r={7} className="fill-marker stroke-ink" strokeWidth={2} />}
        </svg>
      </div>
    </Card>
  );
}
