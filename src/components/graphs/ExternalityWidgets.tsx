import { Sticker } from '../ui/Sticker';
import { useState } from 'react';
import { equilibrium, fmt, type Demand, type Supply } from '../../lib/econ';
import { Segmented, Slider } from '../ui/Kit';
import { RichText } from '../ui/RichText';
import { clipLine, makeFrame, polygon, sx, sy, ticks, type Frame } from './plot';
import { useWidth } from './useWidth';
import { isEn, tr } from '../../lib/lang';

function Shell({ title, controls, side, explain, children, tabs }: { title: string; controls: React.ReactNode; side: React.ReactNode; explain: string; children: React.ReactNode; tabs?: React.ReactNode }) {
  return (
    <figure className="card my-6 overflow-hidden">
      <div className="border-b-2 border-ink bg-marker px-4 py-3 text-[#111]">
        <figcaption className="font-display text-[14px] font-bold">
          <RichText text={title} />
        </figcaption>
      </div>
      {tabs && <div className="flex flex-wrap gap-3 px-4 pt-3">{tabs}</div>}
      <div className="grid md:grid-cols-[minmax(0,1fr)_15.5rem]">
        {children}
        <div className="border-t-2 border-dashed border-ink/30 p-4 text-sm md:border-l-2 md:border-t-0">{side}</div>
      </div>
      <div className="grid gap-x-6 border-t-2 border-dashed border-ink/30 px-4 py-3 sm:grid-cols-2">{controls}</div>
      <div className="border-t-2 border-ink bg-pen/[0.07] px-4 py-3">
        <div className="kicker mb-1 text-[16px]">{tr("Nimani ko'ryapsiz?", 'What are you seeing?')} <Sticker name="pencil" /></div>
        <RichText text={explain} block className="prose-uz text-[15px]" />
      </div>
    </figure>
  );
}

function Axes({ f, x, y }: { f: Frame; x: string; y: string }) {
  return (
    <g>
      {ticks(f.yMax).map((t) => (
        <g key={`y${t}`}>
          <line x1={f.ml} x2={f.W - f.mr} y1={sy(f, t)} y2={sy(f, t)} className="stroke-line" opacity={t === 0 ? 0 : 0.6} />
          <text x={f.ml - 8} y={sy(f, t) + 4} textAnchor="end" className="num fill-muted text-[11px]">
            ${fmt(t)}
          </text>
        </g>
      ))}
      {ticks(f.xMax).map((t) => (
        <text key={`x${t}`} x={sx(f, t)} y={f.H - f.mb + 16} textAnchor="middle" className="num fill-muted text-[11px]">
          {fmt(t)}
        </text>
      ))}
      <line x1={f.ml} y1={f.mt - 6} x2={f.ml} y2={f.H - f.mb} className="stroke-ink" strokeWidth={1.5} />
      <line x1={f.ml} y1={f.H - f.mb} x2={f.W - f.mr + 10} y2={f.H - f.mb} className="stroke-ink" strokeWidth={1.5} />
      <text x={f.ml + 6} y={f.mt + 2} className="fill-ink text-[12px] font-semibold">
        {y}
      </text>
      <text x={f.W - f.mr + 8} y={f.H - f.mb + 32} textAnchor="end" className="fill-ink text-[12px] font-semibold">
        {x}
      </text>
    </g>
  );
}

function Line({ f, i, s, cls, dash, label, labelBelow }: { f: Frame; i: number; s: number; cls: string; dash?: boolean; label?: string; labelBelow?: boolean }) {
  const seg = clipLine(f, i, s);
  if (!seg) return null;
  return (
    <g>
      <line x1={sx(f, seg[0])} y1={sy(f, seg[1])} x2={sx(f, seg[2])} y2={sy(f, seg[3])} className={`stroke-${cls}`} strokeWidth={3} strokeDasharray={dash ? '8 6' : undefined} strokeLinecap="round" />
      {label && (
        <text x={sx(f, seg[2]) - 4} y={sy(f, seg[3]) + (labelBelow ? 16 : -8)} textAnchor="end" className={`fill-${cls} text-[12px] font-bold`}>
          {label}
        </text>
      )}
    </g>
  );
}

function Row({ k, v, tone }: { k: string; v: string; tone?: string }) {
  return (
    <div className="flex justify-between gap-2">
      <span className="text-muted">{k}</span>
      <span className={`num font-semibold ${tone ?? ''}`}>{v}</span>
    </div>
  );
}

/** Ch. 10 Figures 1–3: negative and positive externalities, optimum, DWL and a corrective tax or subsidy. */
export function ExternalityGraph({ initial = 'negative' as 'negative' | 'positive' }) {
  const [kind, setKind] = useState<'negative' | 'positive'>(initial);
  const [ext, setExt] = useState(2);
  const [policy, setPolicy] = useState(0);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const f = makeFrame(width, 100, 10);
  const D: Demand = { a: 9, b: 0.08 };
  const S: Supply = { c: 1, d: 0.06 };
  const market = equilibrium(D, S);
  const neg = kind === 'negative';
  const social = neg ? equilibrium(D, { c: S.c + ext, d: S.d }) : equilibrium({ a: D.a + ext, b: D.b }, S);
  // market outcome with the policy (tax shifts supply up; subsidy shifts demand up)
  const withPolicy = neg ? equilibrium(D, { c: S.c + policy, d: S.d }) : equilibrium({ a: D.a + policy, b: D.b }, S);
  const Q = withPolicy.Q;
  const Qo = social.Q;
  // social surplus lost relative to the optimum: triangle between the social curve and the other private curve
  const gapCost = (q: number) => (neg ? S.c + ext + S.d * q - (D.a - D.b * q) : D.a + ext - D.b * q - (S.c + S.d * q));
  const dwl = 0.5 * Math.abs(Q - Qo) * Math.abs(gapCost(Q));
  // The lost-surplus triangle runs from the optimum to the actual quantity, on either side.
  const tri: [number, number][] = neg
    ? [[Qo, D.a - D.b * Qo], [Q, S.c + ext + S.d * Q], [Q, D.a - D.b * Q]]
    : [[Qo, S.c + S.d * Qo], [Q, D.a + ext - D.b * Q], [Q, S.c + S.d * Q]];
  const revenue = policy * Q;
  const explainUz = neg
    ? `Har bir birlik ishlab chiqarish begonalarga **$${fmt(ext)}** zarar yetkazadi (external cost). **Social cost = private cost + external cost** — ijtimoiy xarajat egri chizig'i taklifdan $${fmt(ext)} yuqorida. Bozor faqat xususiy xarajatni hisobga oladi: Q = ${fmt(market.Q, 1)}, optimal esa Q = **${fmt(Qo, 1)}** — bozor **ko'p** ishlab chiqaradi.\n\n${
        policy === 0
          ? `Korrektiv (Pigovian) soliqni yoqing: soliq external cost ga teng bo'lganda ($${fmt(ext)}) bozor optimumga keladi — externality **internallashadi**.`
          : Math.abs(policy - ext) < 0.05
            ? `Soliq = external cost: bozor aynan optimal miqdorni ishlab chiqaradi, DWL = 0, davlat esa $${fmt(revenue)} tushum oladi. Bu soliq samaradorlikni **oshiradi**.`
            : `Soliq $${fmt(policy)} — ${policy < ext ? 'hali kichik' : 'juda katta'}: miqdor ${fmt(Q, 1)}, qolgan sof yo'qotish $${fmt(dwl)}.`
      }`
    : `Har bir birlik iste'moli begonalarga **$${fmt(ext)}** foyda keltiradi (external benefit). **Social value = private value + external benefit** — ijtimoiy qiymat talabdan yuqorida. Bozor Q = ${fmt(market.Q, 1)}, optimal Q = **${fmt(Qo, 1)}** — bozor **kam** ishlab chiqaradi (masalan, ta'lim).\n\n${
        policy === 0
          ? 'Korrektiv subsidiyani yoqing: subsidiya external benefit ga teng bo\'lganda bozor optimumga keladi.'
          : Math.abs(policy - ext) < 0.05
            ? `Subsidiya = external benefit: bozor optimal miqdorga yetdi, DWL = 0 (subsidiyaga $${fmt(revenue)} xarajat).`
            : `Subsidiya $${fmt(policy)}: miqdor ${fmt(Q, 1)}, qolgan yo'qotish $${fmt(dwl)}.`
      }`;
  const explainEn = neg
    ? `Each unit produced imposes **$${fmt(ext)}** of harm on bystanders (an external cost). **Social cost = private cost + external cost** — the social-cost curve lies $${fmt(ext)} above supply. The market counts only private cost: Q = ${fmt(market.Q, 1)}, while the optimum is Q = **${fmt(Qo, 1)}** — the market produces **too much**.\n\n${
        policy === 0
          ? `Turn on a corrective (Pigovian) tax: when the tax equals the external cost ($${fmt(ext)}), the market reaches the optimum — the externality is **internalized**.`
          : Math.abs(policy - ext) < 0.05
            ? `Tax = external cost: the market produces exactly the optimal quantity, DWL = 0, and the government collects $${fmt(revenue)}. This tax **raises** efficiency.`
            : `A tax of $${fmt(policy)} is ${policy < ext ? 'still too small' : 'too large'}: quantity ${fmt(Q, 1)}, remaining deadweight loss $${fmt(dwl)}.`
      }`
    : `Each unit consumed gives bystanders **$${fmt(ext)}** of benefit (an external benefit). **Social value = private value + external benefit** — social value lies above demand. The market gives Q = ${fmt(market.Q, 1)}, the optimum is Q = **${fmt(Qo, 1)}** — the market produces **too little** (education, for example).\n\n${
        policy === 0
          ? 'Turn on a corrective subsidy: when the subsidy equals the external benefit, the market reaches the optimum.'
          : Math.abs(policy - ext) < 0.05
            ? `Subsidy = external benefit: the market reaches the optimal quantity, DWL = 0 (the subsidy costs $${fmt(revenue)}).`
            : `A subsidy of $${fmt(policy)}: quantity ${fmt(Q, 1)}, remaining loss $${fmt(dwl)}.`
      }`;
  const explain = isEn ? explainEn : explainUz;

  return (
    <Shell
      title={neg ? tr('Figure 2 — Ifloslanish va ijtimoiy optimum (negative externality)', 'Figure 2 — Pollution and the social optimum') : tr("Figure 3 — Ta'lim va ijtimoiy optimum (positive externality)", 'Figure 3 — Education and the social optimum')}
      tabs={
        <Segmented
          size="sm"
          value={kind}
          onChange={(v) => {
            setKind(v);
            setPolicy(0);
          }}
          options={[
            { value: 'negative', label: 'Negative externality' },
            { value: 'positive', label: 'Positive externality' },
          ]}
        />
      }
      explain={explain}
      side={
        <div className="space-y-1.5">
          <Row k={tr('Q (bozor, siyosatsiz)', 'Q (market, no policy)')} v={fmt(market.Q, 1)} />
          <Row k="Q optimum" v={fmt(Qo, 1)} tone="text-good" />
          <Row k={tr('Q (siyosat bilan)', 'Q (with policy)')} v={fmt(Q, 1)} />
          <Row k={neg ? tr('External cost / birlik', 'External cost / unit') : tr('External benefit / birlik', 'External benefit / unit')} v={`$${fmt(ext)}`} />
          <Row k={neg ? 'Corrective tax' : 'Corrective subsidy'} v={`$${fmt(policy)}`} tone="text-tax" />
          <Row k={neg ? tr('Soliq tushumi', 'Tax revenue') : tr('Subsidiya xarajati', 'Cost of the subsidy')} v={`$${fmt(revenue)}`} />
          <Row k={tr("Sof yo'qotish (DWL)", 'Deadweight loss (DWL)')} v={`$${fmt(dwl)}`} tone="text-bad" />
        </div>
      }
      controls={
        <>
          <Slider label={neg ? tr('External cost (begonalarga zarar)', 'External cost (harm to bystanders)') : tr('External benefit (begonalarga foyda)', 'External benefit (to bystanders)')} value={ext} min={0} max={4} step={0.1} onChange={setExt} display={`$${fmt(ext)}`} color="--bad" />
          <Slider label={neg ? 'Pigovian (corrective) tax' : 'Corrective subsidy'} value={policy} min={0} max={4} step={0.1} onChange={setPolicy} display={`$${fmt(policy)}`} color="--tax" />
        </>
      }
    >
      <div ref={wrapRef} className="min-w-0 p-1">
        <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="externality graph">
          <Axes f={f} x="Quantity" y="Price" />
          {dwl > 0.01 && <polygon points={polygon(f, tri)} className="fill-bad/35" />}
          <Line f={f} i={D.a} s={-D.b} cls="demand" label="Demand (private value)" />
          <Line f={f} i={S.c} s={S.d} cls="supply" label="Supply (private cost)" labelBelow />
          {neg ? <Line f={f} i={S.c + ext} s={S.d} cls="bad" dash label="Social cost" /> : <Line f={f} i={D.a + ext} s={-D.b} cls="good" dash label="Social value" />}
          {policy > 0 && (neg ? <Line f={f} i={S.c + policy} s={S.d} cls="tax" dash /> : <Line f={f} i={D.a + policy} s={-D.b} cls="tax" dash />)}
          {[
            { q: market.Q, p: market.P, l: 'Q market', c: 'fill-ink' },
            { q: Qo, p: social.P, l: 'Q optimum', c: 'fill-good' },
          ].map((pt) => (
            <g key={pt.l}>
              <line x1={sx(f, pt.q)} x2={sx(f, pt.q)} y1={sy(f, pt.p)} y2={f.H - f.mb} className="stroke-muted" strokeDasharray="4 4" />
              <circle cx={sx(f, pt.q)} cy={sy(f, pt.p)} r={6} className={`${pt.c} stroke-surface`} strokeWidth={2} />
              <text x={sx(f, pt.q) + 4} y={f.H - f.mb - 6 - (pt.l === 'Q optimum' ? 14 : 0)} className="fill-ink text-[11px] font-bold">
                {pt.l}
              </text>
            </g>
          ))}
          {policy > 0 && <circle cx={sx(f, Q)} cy={sy(f, withPolicy.P)} r={6} className="fill-tax stroke-surface" strokeWidth={2} />}
        </svg>
      </div>
    </Shell>
  );
}

/** Ch. 10 Figure 4: a corrective tax sets the price of pollution; permits set the quantity. */
export function PermitsGraph() {
  const [mode, setMode] = useState<'tax' | 'permits'>('tax');
  const [price, setPrice] = useState(50);
  const [permits, setPermits] = useState(500);
  const [better, setBetter] = useState(false);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const f = makeFrame(width, 1000, 120);
  // demand for pollution rights: P = a − bQ ; cleaner technology lowers it
  const D: Demand = better ? { a: 70, b: 0.1 } : { a: 100, b: 0.1 };
  const qAtPrice = Math.max(0, (D.a - price) / D.b);
  const pAtQ = Math.max(0, D.a - D.b * permits);
  const P = mode === 'tax' ? price : pAtQ;
  const Q = mode === 'tax' ? qAtPrice : permits;
  const explain =
    mode === 'tax'
      ? tr(`**Corrective tax** ifloslanish **narxini** belgilaydi ($${fmt(price)}): taklif — shu narxdagi gorizontal chiziq. Firmalar o'zi qancha ifloslantirishni tanlaydi: **${fmt(Q, 0)}** tonna. Har bir firma ifloslanishni kamaytirish arzonroq bo'lsa kamaytiradi, qimmat bo'lsa soliq to'laydi — kamaytirish eng arzon joyda bo'ladi.${better ? '\n\nTexnologiya yaxshilandi: talab chapga siljidi — soliq ostida ifloslanish **miqdori** kamaydi, narx o\'zgarmadi.' : ''}`, `A **corrective tax** sets the **price** of pollution ($${fmt(price)}): supply is a horizontal line at that price. Firms choose how much to pollute: **${fmt(Q, 0)}** tons. Each firm cuts pollution if that is cheaper than paying the tax, so the reduction happens where it is cheapest.${better ? '\n\nTechnology improved: demand shifted left — under the tax the **quantity** of pollution fell and the price stayed the same.' : ''}`)
      : tr(`**Pollution permits** ifloslanish **miqdorini** belgilaydi (${fmt(permits, 0)} tonna): taklif — vertikal chiziq. Ruxsatnomalar bozori narxni aniqlaydi: **$${fmt(P)}**. Ruxsatnoma kimga dastlab berilganidan qat'i nazar, kamaytirish qimmat bo'lgan firmalar sotib oladi, arzon bo'lganlar sotadi — taqsimot samarali.${better ? '\n\nTexnologiya yaxshilandi: talab chapga siljidi — ruxsatnomalar ostida ifloslanish **narxi** tushdi, miqdor o\'zgarmadi.' : ''}`, `**Pollution permits** set the **quantity** of pollution (${fmt(permits, 0)} tons): supply is a vertical line. The permit market sets the price: **$${fmt(P)}**. Whoever gets the permits first, firms for which cutting pollution is costly buy them and firms for which it is cheap sell — the allocation is efficient.${better ? '\n\nTechnology improved: demand shifted left — with permits the **price** of pollution fell and the quantity stayed the same.' : ''}`);
  return (
    <Shell
      title={tr("Figure 4 — Corrective tax va pollution permits ekvivalentligi", 'Figure 4 — The equivalence of corrective taxes and pollution permits')}
      tabs={
        <>
          <Segmented size="sm" value={mode} onChange={setMode} options={[{ value: 'tax', label: '(a) Corrective tax' }, { value: 'permits', label: '(b) Pollution permits' }]} />
          <button className={`btn-ghost btn-sm ${better ? '!bg-ink !text-marker' : ''}`} onClick={() => setBetter((b) => !b)}>
            {better ? '✓ ' : ''}Toza texnologiya (Problem 7)
          </button>
        </>
      }
      explain={explain}
      side={
        <div className="space-y-1.5">
          <Row k={tr('Ifloslanish narxi', 'Price of pollution')} v={`$${fmt(P)}`} />
          <Row k={tr('Ifloslanish miqdori', 'Quantity of pollution')} v={fmt(Q, 0)} />
          <Row k={mode === 'tax' ? tr('Soliq tushumi', 'Tax revenue') : tr('Auksion tushumi', 'Auction revenue')} v={`$${fmt(P * Q, 0)}`} tone="text-tax" />
        </div>
      }
      controls={
        mode === 'tax' ? (
          <Slider label={tr('Corrective tax (1 tonna uchun)', 'Corrective tax (per ton)')} value={price} min={0} max={100} step={1} onChange={setPrice} display={`$${price}`} color="--tax" />
        ) : (
          <Slider label={tr('Ruxsatnomalar soni (tonna)', 'Number of permits (tons)')} value={permits} min={0} max={1000} step={10} onChange={setPermits} display={fmt(permits, 0)} color="--tax" />
        )
      }
    >
      <div ref={wrapRef} className="min-w-0 p-1">
        <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="permits graph">
          <Axes f={f} x="Quantity of Pollution" y="Price of Pollution" />
          {better && <Line f={f} i={100} s={-0.1} cls="muted" dash />}
          <Line f={f} i={D.a} s={-D.b} cls="demand" label="Demand for pollution rights" />
          {mode === 'tax' ? (
            <line x1={f.ml} x2={f.W - f.mr} y1={sy(f, price)} y2={sy(f, price)} className="stroke-tax" strokeWidth={3} />
          ) : (
            <line x1={sx(f, permits)} x2={sx(f, permits)} y1={f.mt} y2={f.H - f.mb} className="stroke-tax" strokeWidth={3} />
          )}
          <text x={mode === 'tax' ? f.W - f.mr : sx(f, permits) + 6} y={mode === 'tax' ? sy(f, price) - 6 : f.mt + 14} textAnchor={mode === 'tax' ? 'end' : 'start'} className="fill-tax text-[12px] font-bold">
            {mode === 'tax' ? 'Corrective tax' : 'Supply of permits'}
          </text>
          <circle cx={sx(f, Q)} cy={sy(f, P)} r={7} className="fill-marker stroke-ink" strokeWidth={2} />
          <line x1={f.ml} x2={sx(f, Q)} y1={sy(f, P)} y2={sy(f, P)} className="stroke-muted" strokeDasharray="4 4" />
          <line x1={sx(f, Q)} x2={sx(f, Q)} y1={sy(f, P)} y2={f.H - f.mb} className="stroke-muted" strokeDasharray="4 4" />
        </svg>
      </div>
    </Shell>
  );
}

/** Ch. 10-3b: the Coase theorem with Emily, Clifford the dog, and Horace. */
export function CoaseLab() {
  const [benefit, setBenefit] = useState(1000);
  const [cost, setCost] = useState(1500);
  const [rights, setRights] = useState<'emily' | 'horace'>('emily');
  const [tc, setTc] = useState(0);
  const efficientKeep = benefit >= cost;
  const gain = Math.abs(benefit - cost);
  const bargain = gain > tc;
  // what happens
  let outcome: string;
  let keep: boolean;
  if (rights === 'emily') {
    if (efficientKeep) {
      keep = true;
      outcome = tr(`Emily itni saqlaydi: Horace ko'pi bilan $${cost} taklif qila oladi, Emily esa $${benefit} dan kamiga rozi emas.`, `Emily keeps the dog: Horace can offer at most $${cost}, and Emily won't accept less than $${benefit}.`);
    } else if (bargain) {
      keep = false;
      outcome = tr(`Horace Emilyga $${benefit} dan $${cost} gacha (masalan $${Math.round((benefit + cost) / 2)}) to'laydi va Clifford yangi uyga ketadi.`, `Horace pays Emily between $${benefit} and $${cost} (say $${Math.round((benefit + cost) / 2)}) and Clifford moves to a new home.`);
    } else {
      keep = true;
      outcome = tr(`Bitim foydali bo'lardi, lekin transaction cost ($${tc}) yutuqdan ($${gain}) katta — kelishuv bo'lmaydi, it qoladi (samarasiz).`, `A deal would pay, but the transaction cost ($${tc}) exceeds the gain ($${gain}) — no agreement, the dog stays (inefficient).`);
    }
  } else {
    if (!efficientKeep) {
      keep = false;
      outcome = tr(`Horace huquqidan foydalanadi: Emily ko'pi bilan $${benefit} taklif qila oladi, Horace $${cost} dan kamiga rozi emas — it ketadi.`, `Horace uses his right: Emily can offer at most $${benefit}, and Horace won't accept less than $${cost} — the dog goes.`);
    } else if (bargain) {
      keep = true;
      outcome = tr(`Emily Horacega $${cost} dan $${benefit} gacha to'lab, itni saqlab qoladi.`, `Emily pays Horace between $${cost} and $${benefit} and keeps the dog.`);
    } else {
      keep = false;
      outcome = tr(`Kelishuv foydali, lekin transaction cost ($${tc}) yutuqdan ($${gain}) katta — it ketadi (samarasiz).`, `A deal would pay, but the transaction cost ($${tc}) exceeds the gain ($${gain}) — the dog goes (inefficient).`);
    }
  }
  const efficient = keep === efficientKeep;
  const explain = tr(`**Samarali natija:** ${efficientKeep ? `itni saqlash (Emily foydasi $${benefit} ≥ Horace zarari $${cost})` : `itni boshqa uyga berish (Horace zarari $${cost} > Emily foydasi $${benefit})`}.\n\n**Haqiqiy natija:** ${outcome} ${efficient ? '✓ Samarali.' : '✗ Samarasiz.'}\n\nHuquqni almashtirib ko'ring: transaction cost nol bo'lsa, natija **bir xil** (Coase theorem) — faqat kim kimga pul to'lashi o'zgaradi. Transaction cost yutuqdan oshsa, kelishuv buziladi.`, `**Efficient outcome:** ${efficientKeep ? `keep the dog (Emily's benefit $${benefit} ≥ Horace's cost $${cost})` : `move the dog (Horace's cost $${cost} > Emily's benefit $${benefit})`}.\n\n**Actual outcome:** ${outcome} ${efficient ? '✓ Efficient.' : '✗ Inefficient.'}\n\nSwitch the property right: with zero transaction costs the outcome is **the same** (the Coase theorem) — only who pays whom changes. If transaction costs exceed the gain, the deal falls apart.`);
  return (
    <Shell
      title={tr("Coase theorem — Emily, Clifford va Horace", 'The Coase theorem — Emily, Clifford, and Horace')}
      tabs={
        <Segmented
          size="sm"
          value={rights}
          onChange={setRights}
          options={[
            { value: 'emily', label: tr('Huquq: Emily (it saqlash)', 'Right: Emily (keep the dog)') },
            { value: 'horace', label: tr('Huquq: Horace (tinchlik)', 'Right: Horace (peace and quiet)') },
          ]}
        />
      }
      explain={explain}
      side={
        <div className="space-y-2">
          <div className={`rounded-lg border-2 border-ink p-3 text-center font-bold text-[#111] ${keep ? 'bg-postit-yellow' : 'bg-postit-blue'}`}>{keep ? <><Sticker name="dog" /> {tr('Clifford qoladi', 'Clifford stays')}</> : <><Sticker name="house" /> {tr('Clifford yangi uyga ketadi', 'Clifford moves to a new home')}</>}</div>
          <div className={`rounded-lg border-2 border-ink p-2 text-center text-sm font-semibold text-[#111] ${efficient ? 'bg-postit-green' : 'bg-postit-pink'}`}>{efficient ? tr('Samarali', 'Efficient') : tr('Samarasiz', 'Inefficient')}</div>
        </div>
      }
      controls={
        <>
          <Slider label={tr("Emily'ning itdan foydasi", "Emily's benefit from the dog")} value={benefit} min={0} max={3000} step={100} onChange={setBenefit} display={`$${benefit}`} color="--demand" />
          <Slider label={tr("Horace'ning hurishdan zarari", "Horace's cost from the barking")} value={cost} min={0} max={3000} step={100} onChange={setCost} display={`$${cost}`} color="--supply" />
          <Slider label={tr('Transaction cost (tarjimon, advokat…)', 'Transaction cost (lawyers, translators…)')} value={tc} min={0} max={2000} step={50} onChange={setTc} display={`$${tc}`} color="--bad" />
        </>
      }
    >
      <div className="flex min-w-0 items-center justify-center gap-6 p-6 text-center">
        <div>
          <div className="text-5xl">
            <Sticker name="woman" size="1em" />
          </div>
          <div className="mt-1 font-semibold">Emily</div>
          <div className="num text-sm text-demand">+${benefit}</div>
        </div>
        <div className="text-5xl" aria-hidden>
          {keep ? <Sticker name="dog" size="1em" /> : <><Sticker name="right" size="1em" /><Sticker name="house" size="1em" /></>}
        </div>
        <div>
          <div className="text-5xl">
            <Sticker name="man" size="1em" />
          </div>
          <div className="mt-1 font-semibold">Horace</div>
          <div className="num text-sm text-supply">−${cost}</div>
        </div>
      </div>
    </Shell>
  );
}
