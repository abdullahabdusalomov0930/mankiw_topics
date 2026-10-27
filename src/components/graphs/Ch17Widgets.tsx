import { useState } from 'react';
import { fmt } from '../../lib/econ';
import { Segmented, Slider } from '../ui/Kit';
import { makeFrame, sx, sy } from './plot';
import { useWidth } from './useWidth';
import { Axes, Card } from './WidgetCard';

/** Problem 7 model: each of N firms faces P = 100/N − Q, MR = 100/N − 2Q, TC = 50 + Q², MC = 2Q. */
export function monopCompFirm(n: number) {
  const a = 100 / n;
  const q = a / 4; // a − 2q = 2q
  const p = a - q;
  const atc = 50 / q + q;
  const profit = p * q - 50 - q * q;
  return { a, q, p, mc: 2 * q, atc, profit };
}

/** Ch. 17 Figures 2–4: a monopolistic competitor in the short and long run, versus perfect competition. */
export function MonopCompLab() {
  const [n, setN] = useState(3);
  const [compare, setCompare] = useState(false);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const o = monopCompFirm(n);
  const effQ = Math.sqrt(50);
  const effP = 2 * effQ;
  const f = makeFrame(width, 30, 40);
  const curve = (fn: (q: number) => number, from = 0.5, to = 30) => {
    const pts: string[] = [];
    for (let q = from; q <= to; q += 0.1) {
      const y = fn(q);
      if (y >= 0 && y <= 40) pts.push(`${sx(f, q)},${sy(f, y)}`);
    }
    return pts.join(' ');
  };
  const lr = Math.abs(o.profit) < 0.05;
  const explain = `Bozorda **${n}** firma. Har biri farqli mahsulot sotadi — talab egri chizig'i pastga qaragan: P = 100/N − Q. MR = MC: Q = **${fmt(o.q, 2)}**, P = **$${fmt(o.p, 2)}**, ATC = $${fmt(o.atc, 2)} → foyda **$${fmt(o.profit, 2)}**. ${lr ? `**Uzoq muddatli muvozanat**: talab ATC ga **urinadi** (P = ATC = $${fmt(o.p, 2)}), foyda 0. Lekin P > MC ($${fmt(o.mc, 2)}) — **markup**, va Q (${fmt(o.q, 2)}) < efficient scale (${fmt(effQ, 2)}) — **excess capacity**.` : o.profit > 0 ? 'Foyda → yangi firmalar kiradi → har bir firmaning talabi **chapga** siljiydi. N ni oshiring yoki “Uzoq muddat” tugmasini bosing.' : 'Zarar → ba\'zi firmalar chiqadi → qolganlarining talabi **o\'ngga** siljiydi.'} Problem 7: foyda = 1,250/N² − 50 = 0 → **N = 5**.${compare ? ` Mukammal raqobatda esa firma efficient scale da: Q = ${fmt(effQ, 2)}, P = MC = min ATC = $${fmt(effP, 2)}.` : ''}`;
  return (
    <Card
      title="Figures 2–4 — Monopolistik raqobat: qisqa va uzoq muddat (Problem 7 modeli)"
      tabs={
        <>
          <button className="btn-primary btn-sm" onClick={() => setN(5)}>
            ⏩ Uzoq muddat (N = 5)
          </button>
          <button className="btn-ghost btn-sm" onClick={() => setCompare((c) => !c)}>
            {compare ? '✓ ' : ''}Mukammal raqobat bilan solishtirish
          </button>
        </>
      }
      explain={explain}
      controls={<Slider label="Firmalar soni N" value={n} min={2} max={9} step={0.5} onChange={setN} display={fmt(n, 1)} />}
    >
      <div ref={wrapRef} className="min-w-0 p-1">
        <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="monopolistic competition">
          <Axes f={f} x="Quantity (firm)" y="Price" money />
          {!lr && (
            <rect
              x={sx(f, 0)}
              y={sy(f, Math.max(o.p, o.atc))}
              width={sx(f, o.q) - sx(f, 0)}
              height={Math.abs(sy(f, o.p) - sy(f, o.atc))}
              className={o.profit > 0 ? 'fill-good/30 stroke-good' : 'fill-bad/30 stroke-bad'}
            />
          )}
          <polyline points={curve((q) => o.a - q, 0, o.a)} fill="none" className="stroke-demand" strokeWidth={3} />
          <polyline points={curve((q) => o.a - 2 * q, 0, o.a / 2)} fill="none" className="stroke-pen" strokeWidth={2.5} strokeDasharray="7 5" />
          <polyline points={curve((q) => 2 * q)} fill="none" className="stroke-bad" strokeWidth={3} />
          <polyline points={curve((q) => 50 / q + q, 1.5)} fill="none" className="stroke-ink" strokeWidth={3} />
          <line x1={sx(f, o.q)} x2={sx(f, o.q)} y1={sy(f, o.p)} y2={sy(f, 0)} className="stroke-muted" strokeDasharray="4 4" />
          <circle cx={sx(f, o.q)} cy={sy(f, o.p)} r={7} className="fill-marker stroke-ink" strokeWidth={2} />
          {lr && (
            <>
              <line x1={sx(f, o.q) + 14} x2={sx(f, o.q) + 14} y1={sy(f, o.p)} y2={sy(f, o.mc)} className="stroke-tax" strokeWidth={3} />
              <text x={sx(f, o.q) + 18} y={sy(f, (o.p + o.mc) / 2)} className="fill-tax text-[11px] font-bold">markup</text>
              <line x1={sx(f, o.q)} x2={sx(f, effQ)} y1={sy(f, 2)} y2={sy(f, 2)} className="stroke-tax" strokeWidth={3} />
              <text x={sx(f, (o.q + effQ) / 2)} y={sy(f, 2) - 6} textAnchor="middle" className="fill-tax text-[10px] font-bold">excess capacity</text>
            </>
          )}
          {compare && <circle cx={sx(f, effQ)} cy={sy(f, effP)} r={7} className="fill-good stroke-ink" strokeWidth={2} />}
          <text x={sx(f, Math.min(o.a - 1, 26))} y={sy(f, o.a - Math.min(o.a - 1, 26)) - 6} className="fill-demand text-[11px] font-bold">Demand</text>
          <text x={f.W - f.mr - 4} y={f.mt + 14} textAnchor="end" className="fill-bad text-[12px] font-bold">MC</text>
          <text x={f.W - f.mr - 4} y={f.mt + 29} textAnchor="end" className="fill-ink text-[12px] font-bold">ATC</text>
          <text x={f.W - f.mr - 4} y={f.mt + 44} textAnchor="end" className="fill-pen text-[12px] font-bold">MR</text>
        </svg>
      </div>
    </Card>
  );
}

type Structure = 'monopoly' | 'oligopoly' | 'monopolistic' | 'perfect';
const STRUCT: Record<Structure, string> = {
  monopoly: 'Monopoly',
  oligopoly: 'Oligopoly',
  monopolistic: 'Monopolistic competition',
  perfect: 'Perfect competition',
};
const MARKETS: { name: string; s: Structure; why: string }[] = [
  { name: "Vodoprovod suvi", s: 'monopoly', why: 'Bitta firma — tabiiy monopoliya (quvurlar tarmog‘i).' },
  { name: "Shisha suv", s: 'monopolistic', why: 'Ko‘p brend, biroz farqli mahsulot, erkin kirish.' },
  { name: 'Kola', s: 'oligopoly', why: 'Asosan ikki-uch yirik ishlab chiqaruvchi (Coca-Cola, PepsiCo).' },
  { name: 'Pivo', s: 'oligopoly', why: "Bir necha yirik firma bozorning katta qismini egallaydi (ko'p kichik pivoxonalar bo'lsa ham — bahsli)." },
  { name: '2-raqamli yog‘och qalam', s: 'perfect', why: 'Ko‘p ishlab chiqaruvchi, deyarli bir xil mahsulot.' },
  { name: 'Mis', s: 'perfect', why: 'Bir xil xom ashyo, ko‘p sotuvchi, jahon narxi.' },
  { name: 'Mahalliy elektr ta’minoti', s: 'monopoly', why: 'Tabiiy monopoliya.' },
  { name: 'Yeryong‘oq pastasi', s: 'monopolistic', why: 'Ko‘p brend, farqli ta’m va o‘ram.' },
  { name: 'Lab bo‘yog‘i', s: 'monopolistic', why: 'Ko‘p firma, kuchli farqlanish (rang, brend).' },
  { name: 'Bug‘doy', s: 'perfect', why: 'QQ 2: ko‘p fermer, bir xil mahsulot.' },
  { name: 'Sartaroshxona', s: 'monopolistic', why: 'QQ 2: ko‘p sartarosh, xizmati va joylashuvi farqli.' },
  { name: 'Kitoblar', s: 'monopolistic', why: 'Bob boshidagi misol: har bir nom noyob, lekin minglab muallif raqobatlashadi.' },
  { name: 'Samolyot ishlab chiqarish', s: 'oligopoly', why: "To'rt firma konsentratsiyasi 90% dan yuqori." },
  { name: 'Restoranlar', s: 'monopolistic', why: 'Ko‘p restoran, har biri farqli menyu va muhit.' },
];

/** Ch. 17 Figure 1: the four types of market structure. */
export function MarketStructureQuiz() {
  const [i, setI] = useState(0);
  const [ans, setAns] = useState<Structure | null>(null);
  const [score, setScore] = useState({ ok: 0, n: 0 });
  const m = MARKETS[i % MARKETS.length];
  const pick = (s: Structure) => {
    if (ans) return;
    setAns(s);
    setScore((x) => ({ ok: x.ok + (s === m.s ? 1 : 0), n: x.n + 1 }));
  };
  const explain = ans
    ? `${ans === m.s ? "✓ To'g'ri." : `✗ To'g'ri javob: **${STRUCT[m.s]}**.`} ${m.why}`
    : "Figure 1 savollari: (1) **Firmalar soni?** Bitta → monopoly; bir nechta → oligopoly; ko'p → (2) **Mahsulot turi?** Bir xil → perfect competition; farqli → monopolistic competition. Chegaralar ba'zan bahsli (AQShdagi ~12 avtomobil kompaniyasi — oligopolmi?).";
  return (
    <Card title="Figure 1 — The Four Types of Market Structure: bozorni tasniflang" explain={explain}>
      <div className="p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="rounded-xl border-2 border-ink bg-surface2 px-4 py-2 font-display text-lg font-bold">{m.name}</div>
          <div className="num text-sm text-muted">
            Ball: {score.ok}/{score.n}
          </div>
        </div>
        <div className="grid gap-2 text-sm sm:grid-cols-2">
          <div className="rounded-xl border-2 border-dashed border-ink/40 p-2">
            <div className="mb-1 text-xs font-bold text-muted">Firmalar soni: bitta / bir nechta</div>
            <div className="grid grid-cols-2 gap-2">
              {(['monopoly', 'oligopoly'] as Structure[]).map((s) => (
                <button key={s} onClick={() => pick(s)} className={`rounded-lg border-2 border-ink p-2 font-semibold ${ans && s === m.s ? 'bg-postit-green text-[#111]' : ans === s ? 'bg-postit-pink text-[#111]' : 'bg-surface'}`}>
                  {STRUCT[s]}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-xl border-2 border-dashed border-ink/40 p-2">
            <div className="mb-1 text-xs font-bold text-muted">Ko‘p firma: farqli / bir xil mahsulot</div>
            <div className="grid grid-cols-2 gap-2">
              {(['monopolistic', 'perfect'] as Structure[]).map((s) => (
                <button key={s} onClick={() => pick(s)} className={`rounded-lg border-2 border-ink p-2 font-semibold ${ans && s === m.s ? 'bg-postit-green text-[#111]' : ans === s ? 'bg-postit-pink text-[#111]' : 'bg-surface'}`}>
                  {STRUCT[s]}
                </button>
              ))}
            </div>
          </div>
        </div>
        {ans && (
          <button
            className="btn-primary btn-sm mt-3"
            onClick={() => {
              setAns(null);
              setI((v) => v + 1);
            }}
          >
            Keyingi bozor →
          </button>
        )}
      </div>
    </Card>
  );
}

/** Ch. 17-3b: advertising as a signal of quality (General Mills vs Kellogg). */
export function AdSignal() {
  const [adCost, setAdCost] = useState(20);
  const [price, setPrice] = useState(5);
  const [repeat, setRepeat] = useState(12);
  const [mode, setMode] = useState<'book' | 'custom'>('book');
  const trials = 1; // million consumers who try the cereal
  const badRevenue = trials * price * 1;
  const goodRevenue = trials * price * repeat;
  const badAds = badRevenue > adCost;
  const goodAds = goodRevenue > adCost;
  const separating = goodAds && !badAds;
  const explain = `Reklama $${adCost} mln turadi va 1 mln iste'molchini bir quti sinab ko'rishga undaydi ($${price}, MC = 0). **General Mills** donini yomon (gazetaga shakar sepilgandek) biladi: har kim faqat 1 quti oladi → $${badRevenue} mln ${badAds ? '>' : '<'} $${adCost} mln → ${badAds ? '**reklama qiladi**' : 'reklama **qilmaydi**'}. **Kellogg** donini a'lo biladi: har kim ${repeat} quti oladi → $${goodRevenue} mln ${goodAds ? '>' : '<'} $${adCost} mln → ${goodAds ? '**reklama qiladi**' : 'reklama qilmaydi'}. ${separating ? "**Signal ishlaydi**: faqat yaxshi mahsulot reklama qilinadi, shuning uchun reklama qilingan donni sinab ko'rish **ratsional** — reklama mazmuni emas, uning **qimmatligi** axborot beradi (mashhur aktyorlarga katta haq to'lash shuning uchun)." : badAds ? "Reklama **juda arzon** — yaxshi ham, yomon ham reklama qiladi, signal ishlamaydi; iste'molchilar bunday reklamani e'tiborsiz qoldirishni o'rganadi." : "Reklama juda qimmat — hech kim reklama qilmaydi."} QQ 8: signal yaxshi mahsulot uchun mijoz jalb qilish foydasi kattaroq bo'lsa ishlaydi.`;
  return (
    <Card
      title="17-3b — Advertising as a Signal of Quality"
      tabs={<Segmented size="sm" value={mode} onChange={(v) => { setMode(v); if (v === 'book') { setAdCost(20); setPrice(5); setRepeat(12); } }} options={[{ value: 'book', label: 'Kitob raqamlari' }, { value: 'custom', label: "O'zgartiring" }]} />}
      explain={explain}
      controls={
        mode === 'custom' ? (
          <>
            <Slider label="Reklama kampaniyasi (mln $)" value={adCost} min={1} max={80} step={1} onChange={setAdCost} display={`$${adCost} mln`} color="--tax" />
            <Slider label="Yaxshi don: yiliga necha quti" value={repeat} min={1} max={24} step={1} onChange={setRepeat} display={`${repeat}`} color="--good" />
          </>
        ) : undefined
      }
    >
      <div className="grid gap-3 p-4 sm:grid-cols-2">
        {[
          ['General Mills (yomon don)', badRevenue, badAds],
          ['Kellogg (yaxshi don)', goodRevenue, goodAds],
        ].map(([name, rev, ads]) => (
          <div key={name as string} className={`rounded-xl border-2 border-ink p-3 text-[#111] ${ads ? 'bg-postit-green' : 'bg-postit-pink'}`}>
            <div className="font-display font-bold">{name as string}</div>
            <div className="num text-sm">
              Sotuv ${rev as number} mln vs reklama ${adCost} mln
            </div>
            <div className="font-semibold">{ads ? '📣 Reklama qiladi' : '🤫 Reklama qilmaydi'}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
