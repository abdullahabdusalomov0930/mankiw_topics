import { useState } from 'react';
import { fmt } from '../../lib/econ';
import { Segmented, Slider } from '../ui/Kit';
import { makeFrame, sx, sy } from './plot';
import { useWidth } from './useWidth';
import { Axes, Card } from './WidgetCard';
import { tr } from '../../lib/lang';

const TYPES = ['A', 'B', 'C', 'D', 'E'];

/** Ch. 12 Problem 4: adverse selection and the insurance death spiral, with an optional mandate. */
export function DeathSpiral() {
  const [costs, setCosts] = useState([1000, 2000, 3000, 4000, 5000]);
  const [load, setLoad] = useState(700);
  const [certainty, setCertainty] = useState(1000);
  const [mandate, setMandate] = useState(false);
  const [step, setStep] = useState(0);
  // iterate: price = avg cost of pool + load; buyers = those with cost + certainty >= price
  const rounds: { pool: number[]; price: number }[] = [];
  let pool = [0, 1, 2, 3, 4];
  for (let k = 0; k < 8; k++) {
    const price = pool.length ? pool.reduce((s, i) => s + costs[i], 0) / pool.length + load : NaN;
    rounds.push({ pool, price });
    if (mandate || !pool.length) break;
    const next = [0, 1, 2, 3, 4].filter((i) => costs[i] + certainty >= price);
    if (next.length === pool.length && next.every((v, j) => v === pool[j])) break;
    pool = next;
  }
  const shown = rounds[Math.min(step, rounds.length - 1)];
  const final = rounds[rounds.length - 1];
  const surplus = (i: number, price: number) => certainty + costs[i] - price;
  const totalCS = final.pool.reduce((s, i) => s + surplus(i, final.price), 0);
  const explain = mandate
    ? tr(`**Majburiy sug'urta (mandate)**: hamma sotib oladi, narx = o'rtacha xarajat $${fmt(rounds[0].price - load)} + $${load} = **$${fmt(rounds[0].price)}**. Har bir turning surplusi = $${certainty} (noaniqlikdan qutulish) + kutilgan xarajat − narx: ${TYPES.map((t, i) => `${t} ${surplus(i, rounds[0].price) >= 0 ? '+' : '−'}$${fmt(Math.abs(surplus(i, rounds[0].price)))}`).join(', ')}. Jami **$${fmt(TYPES.reduce((s, _, i) => s + surplus(i, rounds[0].price), 0))}**. Sog'lomlar (A, B) sog'lom bo'lmaganlarni subsidiyalaydi; ularni majburlash uchun jarima ular yo'qotishidan katta bo'lishi kerak (A uchun $${fmt(Math.max(0, -surplus(0, rounds[0].price)))} dan ko'p).`, `**Mandatory insurance (a mandate)**: everyone buys, and the price = average cost $${fmt(rounds[0].price - load)} + $${load} = **$${fmt(rounds[0].price)}**. Each type's surplus = $${certainty} (value of certainty) + expected cost − price: ${TYPES.map((t, i) => `${t} ${surplus(i, rounds[0].price) >= 0 ? '+' : '−'}$${fmt(Math.abs(surplus(i, rounds[0].price)))}`).join(', ')}. Total **$${fmt(TYPES.reduce((s, _, i) => s + surplus(i, rounds[0].price), 0))}**. The healthy (A, B) subsidize the less healthy; to make them buy, the penalty must exceed what they lose (more than $${fmt(Math.max(0, -surplus(0, rounds[0].price)))} for A).`)
    : tr(`Kompaniya hammaga bir xil narx qo'yishi shart. ${step + 1}-qadam: sug'urtalanganlar **${shown.pool.map((i) => TYPES[i]).join(', ') || "hech kim"}**, narx **$${fmt(shown.price)}** (o'rtacha xarajat + $${load}). Odam faqat narx o'z kutilgan xarajatidan $${certainty} dan ko'p oshmasa sotib oladi → eng sog'lomlar chiqib ketadi, pool kasalroq bo'ladi, narx yana oshadi — **death spiral**. Yakun: faqat **${final.pool.map((i) => TYPES[i]).join(', ') || 'hech kim'}**, narx $${fmt(final.price)}, consumer surplus jami **$${fmt(totalCS)}**. Mandate tugmasini bosib solishtiring.`, `The company must charge everyone the same price. Step ${step + 1}: insured **${shown.pool.map((i) => TYPES[i]).join(', ') || 'nobody'}**, price **$${fmt(shown.price)}** (average cost + $${load}). A person buys only if the price exceeds their expected cost by no more than $${certainty} → the healthiest drop out, the pool gets sicker, the price rises again — a **death spiral**. End: only **${final.pool.map((i) => TYPES[i]).join(', ') || 'nobody'}**, price $${fmt(final.price)}, total consumer surplus **$${fmt(totalCS)}**. Press the mandate button to compare.`);
  return (
    <Card
      title={tr("Problem 4 — Adverse selection va death spiral", 'Problem 4 — Adverse selection and the death spiral')}
      tabs={
        <>
          <Segmented
            size="sm"
            value={mandate ? 'mandate' : 'free'}
            onChange={(v) => {
              setMandate(v === 'mandate');
              setStep(0);
            }}
            options={[
              { value: 'free', label: tr('Ixtiyoriy sug‘urta', 'Voluntary insurance') },
              { value: 'mandate', label: tr('Majburiy (mandate)', 'Mandate') },
            ]}
          />
          {!mandate && (
            <>
              <button className="btn-ghost btn-sm" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))}>
                {tr('← Oldingi', '← Previous')}
              </button>
              <button className="btn-primary btn-sm" disabled={step >= rounds.length - 1} onClick={() => setStep((s) => s + 1)}>
                {tr('Keyingi qadam →', 'Next step →')}
              </button>
            </>
          )}
        </>
      }
      explain={explain}
      controls={
        <>
          <Slider label={tr("Ma'muriy xarajat + foyda", 'Administrative cost + profit')} value={load} min={0} max={2000} step={100} onChange={(v) => { setLoad(v); setStep(0); }} display={`$${load}`} color="--tax" />
          <Slider label={tr('Noaniqlikdan qutulish qiymati', 'Value of certainty')} value={certainty} min={0} max={3000} step={100} onChange={(v) => { setCertainty(v); setStep(0); }} display={`$${certainty}`} color="--good" />
        </>
      }
    >
      <div className="grid grid-cols-5 gap-2 p-4">
        {TYPES.map((t, i) => {
          const inPool = (mandate ? rounds[0] : shown).pool.includes(i);
          return (
            <div key={t} className={`rounded-xl border-2 border-ink p-2 text-center text-[#111] transition ${inPool ? 'bg-postit-green' : 'bg-surface2 opacity-50'}`}>
              <div className="font-display text-xl font-bold">{t}</div>
              <input
                type="number"
                step={500}
                value={costs[i]}
                onChange={(e) => {
                  const c = [...costs];
                  c[i] = Math.max(0, Number(e.target.value));
                  setCosts(c);
                  setStep(0);
                }}
                className="num mt-1 w-full rounded-md border border-ink/40 bg-white/70 px-1 text-center text-xs"
                aria-label={`${t} expected cost`}
              />
              <div className="mt-1 text-[11px]">{inPool ? tr('sug‘urtada', 'insured') : tr('chiqdi', 'dropped out')}</div>
            </div>
          );
        })}
      </div>
      <div className="px-4 pb-3 text-sm">
        <span className="font-semibold">{tr('Narx tarixi: ', 'Price history: ')}</span>
        <span className="num">{(mandate ? [rounds[0]] : rounds.slice(0, step + 1)).map((r) => `$${fmt(r.price)}`).join(' → ')}</span>
      </div>
    </Card>
  );
}

/** Ch. 12 Problem 1: moral hazard — co-pays below the true cost lead to excessive use. */
export function MoralHazardGraph() {
  const [copay, setCopay] = useState(20);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const cost = 100;
  const A = 200; // demand P = 200 - 2Q
  const B = 2;
  const q = (p: number) => Math.max(0, (A - p) / B);
  const qEff = q(cost);
  const qIns = q(copay);
  const dwl = 0.5 * (qIns - qEff) * (cost - copay);
  const f = makeFrame(width, 100, 220);
  const explain = tr(`Muolaja jamiyatga **$${cost}** turadi, lekin sug'urtalangan bemor faqat **$${copay}** to'laydi (qolganini sug'urta to'laydi, premium esa muolajalar soniga bog'liq emas). Bemor ${fmt(qEff)} emas, **${fmt(qIns)}** ta muolaja oladi. ${fmt(qEff)} dan ${fmt(qIns)} gacha bo'lgan muolajalarning qiymati (talab) $${cost} dan past — ular total surplusni **$${fmt(dwl)}** ga kamaytiradi (qizil uchburchak). Bu **moral hazard**: sug'urta xarajatni kamaytirish rag'batini susaytiradi. Yechimlar: co-pay va deductibles, kirish qoidalari (yiliga bitta tekshiruv, mutaxassisga yo'llanma).`, `A procedure costs society **$${cost}**, but an insured patient pays only **$${copay}** (insurance pays the rest, and the premium does not depend on the number of procedures). The patient gets **${fmt(qIns)}** procedures instead of ${fmt(qEff)}. Procedures between ${fmt(qEff)} and ${fmt(qIns)} are worth less than $${cost} to the patient (the demand curve) — they reduce total surplus by **$${fmt(dwl)}** (red triangle). This is **moral hazard**: insurance weakens the incentive to economize. Remedies: co-pays and deductibles, and access rules (one check-up a year, referrals to specialists).`);
  return (
    <Card
      title={tr("Problem 1 — Sug'urta va moral hazard (model)", 'Problem 1 — Insurance and moral hazard (model)')}
      explain={explain}
      controls={<Slider label={tr("Bemor to'laydigan qism (co-pay)", 'What the patient pays (co-pay)')} value={copay} min={0} max={100} step={5} onChange={setCopay} display={`$${copay}`} color="--demand" />}
    >
      <div ref={wrapRef} className="min-w-0 p-1">
        <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="moral hazard">
          <Axes f={f} x="Number of Medical Procedures" y="Price" money />
          <polygon points={`${sx(f, qEff)},${sy(f, cost)} ${sx(f, qIns)},${sy(f, cost)} ${sx(f, qIns)},${sy(f, copay)}`} className="fill-bad/30" />
          <line x1={sx(f, 0)} y1={sy(f, A)} x2={sx(f, A / B)} y2={sy(f, 0)} className="stroke-demand" strokeWidth={3} />
          <text x={sx(f, 8)} y={sy(f, A - 20)} className="fill-demand text-[12px] font-bold">Demand (value to patients)</text>
          <line x1={sx(f, 0)} x2={sx(f, 100)} y1={sy(f, cost)} y2={sy(f, cost)} className="stroke-supply" strokeWidth={3} />
          <text x={sx(f, 100) - 4} y={sy(f, cost) - 6} textAnchor="end" className="fill-supply text-[12px] font-bold">Cost to society $100</text>
          <line x1={sx(f, 0)} x2={sx(f, 100)} y1={sy(f, copay)} y2={sy(f, copay)} className="stroke-tax" strokeWidth={2} strokeDasharray="6 4" />
          <text x={sx(f, 100) - 4} y={sy(f, copay) - 6} textAnchor="end" className="fill-tax text-[12px] font-bold">Patient pays ${copay}</text>
          {[qEff, qIns].map((v, i) => (
            <g key={i}>
              <line x1={sx(f, v)} x2={sx(f, v)} y1={sy(f, i ? copay : cost)} y2={sy(f, 0)} className="stroke-muted" strokeDasharray="4 4" />
              <text x={sx(f, v)} y={sy(f, 0) - 6} textAnchor="middle" className="fill-ink text-[11px] font-bold">{i ? 'Q insured' : 'Q efficient'}</text>
            </g>
          ))}
        </svg>
      </div>
    </Card>
  );
}

/** Ch. 12-1c: the value of insurance for a risk-averse person. */
export function InsuranceCalc() {
  const [prob, setProb] = useState(2);
  const [cost, setCost] = useState(30000);
  const [n, setN] = useState(100);
  const sick = (prob / 100) * n;
  const premium = (prob / 100) * cost;
  const explain = tr(`Kasallik aholining **${prob}%** ini uradi, davolash **$${fmt(cost)}**. Har ${n} kishidan o'rtacha ${fmt(sick, 1)} kishi kasallanadi → jami $${fmt(sick * cost)}, ya'ni kishi boshiga **$${fmt(premium)}**. **Risk averse** odam ${prob}% ehtimol bilan $${fmt(cost)} to'lashdan ko'ra aniq $${fmt(premium)} to'lashni afzal ko'radi — sug'urta kompaniyasi shu (yoki biroz ko'proq) **premium** oladi. Bu bozorni ikki muammo buzadi: **moral hazard** va **adverse selection**.`, `An illness strikes **${prob}%** of people, and treatment costs **$${fmt(cost)}**. Out of every ${n} people, on average ${fmt(sick, 1)} get sick → $${fmt(sick * cost)} in total, or **$${fmt(premium)}** per person. A **risk-averse** person prefers paying a certain $${fmt(premium)} to a ${prob}% chance of paying $${fmt(cost)} — the insurer charges that (or a little more) as a **premium**. Two problems disrupt this market: **moral hazard** and **adverse selection**.`);
  return (
    <Card
      title={tr("12-1c — Sug'urtaning qiymati (risk aversion)", '12-1c — The value of insurance (risk aversion)')}
      explain={explain}
      controls={
        <>
          <Slider label={tr('Kasallanish ehtimoli', 'Probability of illness')} value={prob} min={0.5} max={20} step={0.5} onChange={setProb} display={`${fmt(prob, 1)}%`} color="--bad" />
          <Slider label={tr('Davolash narxi', 'Cost of treatment')} value={cost} min={1000} max={100000} step={1000} onChange={setCost} display={`$${fmt(cost)}`} />
          <Slider label={tr('Guruhdagi odamlar', 'People in the group')} value={n} min={10} max={1000} step={10} onChange={setN} display={`${n}`} />
        </>
      }
    >
      <div className="grid gap-3 p-4 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-ink bg-surface2 p-3">
          <div className="text-xs font-semibold text-muted">{tr("Sug'urtasiz", 'Without insurance')}</div>
          <div className="mt-1 text-sm">
            {fmt(100 - prob, 1)}% {tr('ehtimol', 'chance')}: <b className="num">$0</b>
            <br />
            {fmt(prob, 1)}% {tr('ehtimol', 'chance')}: <b className="num text-bad">${fmt(cost)}</b>
          </div>
        </div>
        <div className="rounded-xl border-2 border-ink bg-postit-green p-3 text-[#111]">
          <div className="text-xs font-semibold">{tr("Sug'urta bilan (adolatli premium)", 'With insurance (fair premium)')}</div>
          <div className="num mt-1 font-display text-2xl font-bold">${fmt(premium)}</div>
          <div className="text-xs">{tr('aniq, har yili', 'certain, every year')}</div>
        </div>
      </div>
    </Card>
  );
}

const FIG4 = [
  ['Italy', 8.7],
  ['United Kingdom', 10.1],
  ['Japan', 10.7],
  ['Canada', 10.8],
  ['Germany', 11.1],
  ['France', 11.7],
  ['United States', 16.8],
] as [string, number][];

/** Ch. 12 Figure 4 (data in the book) plus the key numbers behind Figures 2, 3 and 5. */
export function HealthFacts() {
  const [tab, setTab] = useState<'intl' | 'time'>('intl');
  const max = 20;
  const explain =
    tab === 'intl'
      ? tr("Figure 4 (World Bank, 2019): ko'p rivojlangan davlatlar YaIMning 9–12% ini, AQSh esa ~**17%** ini sog'liqqa sarflaydi. Tanqidchilar: Kanada, Fransiya, Yaponiyada umr uzunroq, xarajat kam — single-payer tizim ma'muriy xarajat va foydani tejaydi. Himoyachilar: AQShda semizlik ko'p — farqlar tizimni emas, turmush tarzini aks ettirishi mumkin. Kanadaliklar dorilarga ~30% kam sarflaydi (narx nazorati) — himoyachilar: bu yangi dorilar tadqiqotiga rag'batni kamaytiradi va boshqa davlatlar AQSh moliyalagan tadqiqotdan free ride qiladi.", "Figure 4 (World Bank, 2019): most advanced countries spend 9–12% of GDP on health care; the United States ~**17%**. Critics: Canada, France, and Japan have longer life expectancy at lower cost — a single-payer system saves on administration and profit. Defenders: obesity is more common in the U.S., so the gaps may reflect lifestyles rather than the system. Canadians spend ~30% less on drugs (price controls) — defenders reply that this weakens the incentive to research new drugs and lets other countries free ride on U.S.-funded research.")
      : tr("Figure 2: umr ko'rish davomiyligi 1900-yil **47.3**, 1950-yil **68.2**, 2019-yil **78.8** yil (1918 gripp pandemiyasida 10 yildan ko'p tushgan; 2020-yilda COVID-19 tufayli 1.5 yilga kamaygan). Figure 3: sog'liq xarajatlari YaIMning **5%** (1960) → **18%** (2019). Figure 5: cho'ntakdan to'lov ulushi **55%** (1960) → **13%** (2019); qolgani — xususiy sug'urta (yarmidan biroz kami) va davlat dasturlari (Medicare, Medicaid).", "Figure 2: life expectancy was **47.3** years in 1900, **68.2** in 1950, and **78.8** in 2019 (it fell by more than 10 years in the 1918 flu pandemic and by 1.5 years in 2020 because of COVID-19). Figure 3: health spending rose from **5%** of GDP (1960) to **18%** (2019). Figure 5: the out-of-pocket share fell from **55%** (1960) to **13%** (2019); the rest is private insurance (a little under half) and government programs (Medicare, Medicaid).");
  return (
    <Card
      title={tr("Figures 2–5 — AQSh sog'liqni saqlash tizimi: asosiy faktlar", 'Figures 2–5 — U.S. health care: the key facts')}
      tabs={<Segmented size="sm" value={tab} onChange={setTab} options={[{ value: 'intl', label: tr('Figure 4: davlatlar', 'Figure 4: countries') }, { value: 'time', label: tr('Figures 2, 3, 5: vaqt bo‘yicha', 'Figures 2, 3, 5: over time') }]} />}
      explain={explain}
    >
      {tab === 'intl' ? (
        <div className="space-y-2 p-4">
          {FIG4.map(([c, v]) => (
            <div key={c} className="grid grid-cols-[7.5rem_1fr] items-center gap-2 text-sm">
              <span className="truncate font-semibold">{c}</span>
              <div className="h-6 rounded-md bg-surface2">
                <div className={`flex h-6 items-center justify-end rounded-md border-2 border-ink px-1.5 text-xs font-bold text-[#111] ${c === 'United States' ? 'bg-bad' : 'bg-marker'}`} style={{ width: `${(v / max) * 100}%` }}>
                  {v}%
                </div>
              </div>
            </div>
          ))}
          <p className="text-xs text-muted">Health spending, percent of GDP, 2019. Source: The World Bank ({tr('kitobdagi Figure 4', 'Figure 4 in the book')}).</p>
        </div>
      ) : (
        <div className="grid gap-3 p-4 sm:grid-cols-3">
          {[
            [tr('Umr ko‘rish (yil)', 'Life expectancy (years)'), '47.3 → 68.2 → 78.8', '1900 · 1950 · 2019'],
            [tr('Sog‘liq xarajati, % YaIM', 'Health spending, % of GDP'), '5% → 18%', '1960 → 2019'],
            [tr('Cho‘ntakdan to‘lov ulushi', 'Out-of-pocket share'), '55% → 13%', '1960 → 2019'],
          ].map(([a, b, c]) => (
            <div key={a} className="rounded-xl border-2 border-ink bg-surface2 p-3">
              <div className="text-xs font-semibold text-muted">{a}</div>
              <div className="num mt-1 font-display text-xl font-bold">{b}</div>
              <div className="text-xs text-muted">{c}</div>
            </div>
          ))}
          <p className="text-xs text-muted sm:col-span-3">
            {tr("Kitobda Figures 2, 3, 5 grafik sifatida berilgan; bu yerda faqat matnda keltirilgan raqamlar ko'rsatilgan.", 'The book shows Figures 2, 3, and 5 as charts; only the numbers quoted in the text are shown here.')}
          </p>
        </div>
      )}
    </Card>
  );
}
