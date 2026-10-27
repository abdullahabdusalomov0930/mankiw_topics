import { useState } from 'react';
import { fmt } from '../../lib/econ';
import { Segmented, Slider } from '../ui/Kit';
import { makeFrame, sx, sy } from './plot';
import { useWidth } from './useWidth';
import { Axes, Card } from './WidgetCard';

/** Town water demand from Table 1: P = 120 − Q (Q in gallons), marginal cost zero. */
const waterPrice = (q: number) => Math.max(0, 120 - q);

/** Ch. 18 Table 1 / 18-1c–d: duopoly quantities, Nash equilibrium, and the effect of more sellers. */
export function DuopolyLab() {
  const [tab, setTab] = useState<'duo' | 'n'>('duo');
  const [jack, setJack] = useState(30);
  const [jill, setJill] = useState(30);
  const [n, setN] = useState(2);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  if (tab === 'n') {
    // symmetric Nash with N sellers on P = 120 − Q (continuous): each produces 120/(N+1)
    const q = 120 / (n + 1);
    const Q = n * q;
    const P = waterPrice(Q);
    const f = makeFrame(width, 120, 125);
    const pts = Array.from({ length: 20 }, (_, k) => k + 1).map((k) => [(120 * k) / (k + 1), 120 / (k + 1)] as const);
    const explain = `${n} ta sotuvchi kartelsiz: har biri boshqalarning miqdorini berilgan deb **output effect** va **price effect** ni muvozanatlaydi → har biri ${fmt(q, 1)} gallon, jami **${fmt(Q, 1)}**, narx **$${fmt(P, 1)}**. Sotuvchilar ko'paysa, har birining ulushi kichrayadi → price effect zaiflashadi → bozor **raqobatga** yaqinlashadi (P → MC = 0, Q → 120). Xalqaro savdo ham shunday: Toyota, Honda, VW, BMW, Ford, GM — savdo ochilsa oligopoliya 2 dan 6 a'zoga oshadi. (Uzluksiz model: kitob jadvali 10 gallonlik qadamlarda, ikki sotuvchida natija bir xil — 40 + 40.)`;
    return (
      <Card
        title="18-1d — Oligopoliya hajmi bozor natijasiga qanday ta'sir qiladi"
        tabs={<Segmented size="sm" value={tab} onChange={setTab} options={[{ value: 'duo', label: 'Jack va Jill (Table 1)' }, { value: 'n', label: 'N ta sotuvchi' }]} />}
        explain={explain}
        controls={<Slider label="Sotuvchilar soni" value={n} min={1} max={20} step={1} onChange={setN} display={`${n}`} />}
      >
        <div ref={wrapRef} className="min-w-0 p-1">
          <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="oligopoly size">
            <Axes f={f} x="Total quantity of water" y="Price" money />
            <line x1={sx(f, 0)} y1={sy(f, 120)} x2={sx(f, 120)} y2={sy(f, 0)} className="stroke-demand" strokeWidth={3} />
            {pts.map(([qq, pp], k) => (
              <circle key={k} cx={sx(f, qq)} cy={sy(f, pp)} r={k + 1 === n ? 8 : 3.5} className={k + 1 === n ? 'fill-marker stroke-ink' : 'fill-muted'} strokeWidth={2} />
            ))}
            <text x={sx(f, 60) + 8} y={sy(f, 60) - 8} className="fill-pen text-[11px] font-bold">monopoly (N = 1)</text>
            <text x={sx(f, 118)} y={sy(f, 0) - 8} textAnchor="end" className="fill-good text-[11px] font-bold">competition: P = MC = 0</text>
          </svg>
        </div>
      </Card>
    );
  }
  const Q = jack + jill;
  const P = waterPrice(Q);
  const pj = jack * P;
  const pl = jill * P;
  const best = (other: number) => {
    let b = 0;
    for (let q = 0; q <= 120; q += 10) if (q * waterPrice(q + other) > b * waterPrice(b + other)) b = q;
    return b;
  };
  const brJack = best(jill);
  const brJill = best(jack);
  const nash = brJack === jack && brJill === jill;
  const explain = `Jack ${jack} va Jill ${jill} gallon → jami ${Q}, narx **$${P}**, foyda: Jack **$${fmt(pj)}**, Jill **$${fmt(pl)}** (MC = 0). Jill ${jill} bo'lsa, Jack uchun eng yaxshisi — **${brJack}**; Jack ${jack} bo'lsa, Jill uchun — **${brJill}**. ${nash ? `**Nash muvozanati!** Hech biri o'zgartirishga rag'batli emas.${jack === 40 && jill === 40 ? ' Bu kitobdagi 40 + 40: jami 80, narx $40, har biri $1,600 — monopoliyadan (60, $60) ko\'p, raqobatdan (120, $0) kam.' : ''}` : 'Nash emas — kimdir miqdorni o\'zgartirib foydasini oshira oladi.'} Kartel (30 + 30) jami $3,600 — maksimal, lekin har biri 40 ga o'tib $2,000 olishga vasvasada.`;
  return (
    <Card
      title="Table 1 — Jack va Jill duopoliyasi: Nash muvozanatini toping"
      tabs={
        <>
          <Segmented size="sm" value={tab} onChange={setTab} options={[{ value: 'duo', label: 'Jack va Jill (Table 1)' }, { value: 'n', label: 'N ta sotuvchi' }]} />
          <button className="btn-ghost btn-sm" onClick={() => { setJack(30); setJill(30); }}>Kartel (30 + 30)</button>
          <button className="btn-ghost btn-sm" onClick={() => setJack(brJack)}>Jack eng yaxshi javob</button>
          <button className="btn-ghost btn-sm" onClick={() => setJill(brJill)}>Jill eng yaxshi javob</button>
        </>
      }
      explain={explain}
      controls={
        <>
          <Slider label="Jack (gallon)" value={jack} min={0} max={120} step={10} onChange={setJack} display={`${jack}`} color="--demand" />
          <Slider label="Jill (gallon)" value={jill} min={0} max={120} step={10} onChange={setJill} display={`${jill}`} color="--supply" />
        </>
      }
    >
      <div className="grid gap-2 p-4 sm:grid-cols-4">
        {[
          ['Jami Q', `${Q}`],
          ['Narx', `$${P}`],
          ['Jack foydasi', `$${fmt(pj)}`],
          ['Jill foydasi', `$${fmt(pl)}`],
        ].map(([a, b]) => (
          <div key={a} className={`rounded-xl border-2 border-ink p-3 text-center ${nash ? 'bg-postit-green text-[#111]' : 'bg-surface2'}`}>
            <div className="text-xs font-semibold opacity-80">{a}</div>
            <div className="num font-display text-xl font-bold">{b}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

interface Game {
  label: string;
  rowName: string;
  colName: string;
  rows: [string, string];
  cols: [string, string];
  /** payoffs[r][c] = [row player, column player]; higher is better unless lowerBetter */
  payoffs: [[number, number], [number, number]][];
  unit: (v: number) => string;
  lowerBetter?: boolean;
  note: string;
}
const years = (v: number) => (v === 0 ? 'ozod' : `${v} yil`);
const usd = (v: number) => `$${fmt(v)}`;
const mln = (v: number) => (v === 0 ? '0' : `${v < 0 ? '−' : ''}$${Math.abs(v)} mln`);
const GAMES: Record<string, Game> = {
  pd: {
    label: "Prisoners' dilemma",
    rowName: 'Bonnie',
    colName: 'Clyde',
    rows: ['Confess', 'Remain silent'],
    cols: ['Confess', 'Remain silent'],
    payoffs: [
      [[8, 8], [0, 20]],
      [[20, 0], [1, 1]],
    ],
    unit: years,
    lowerBetter: true,
    note: "Figure 1: Bonnie va Clyde. Iqror — ikkalasi uchun ham dominant strategiya; natija (8, 8) yil, garchi ikkalasi jim tursa (1, 1) bo'lardi. Mahbuslar uchun dilemma — jamiyat uchun foyda (politsiya ko'proq jinoyatchini qamaydi).",
  },
  water: {
    label: 'Jack va Jill',
    rowName: 'Jack',
    colName: 'Jill',
    rows: ['40 gallon', '30 gallon'],
    cols: ['40 gallon', '30 gallon'],
    payoffs: [
      [[1600, 1600], [2000, 1500]],
      [[1500, 2000], [1800, 1800]],
    ],
    unit: usd,
    note: "Figure 2: kelishuv 30 + 30 bo'lsa ham, 40 — dominant strategiya. Oligopolistlar uchun hamkorlikning yo'qligi jamiyat uchun **yaxshi** — miqdor samarali darajaga yaqinlashadi.",
  },
  arms: {
    label: 'Qurollanish poygasi',
    rowName: 'AQSh',
    colName: 'SSSR',
    rows: ['Arm', 'Disarm'],
    cols: ['Arm', 'Disarm'],
    payoffs: [
      [[1, 1], [3, 0]],
      [[0, 3], [2, 2]],
    ],
    unit: (v) => ['xavfda va zaif', 'xavfda', 'xavfsiz', 'xavfsiz va kuchli'][v],
    note: "Figure 3: har biri uchun qurollanish — dominant strategiya; natija — ikkalasi xavf ostida. Shaffoflik va tekshiruv mexanizmlari bilan dilemmadan chiqish mumkin. (Kitobda tartib bo'yicha natijalar; raqamlar — reyting.)",
  },
  oil: {
    label: 'Umumiy resurs (neft)',
    rowName: 'ExxonMobil',
    colName: 'Chevron',
    rows: ['Ikki quduq', 'Bitta quduq'],
    cols: ['Ikki quduq', 'Bitta quduq'],
    payoffs: [
      [[40, 40], [60, 30]],
      [[30, 60], [50, 50]],
    ],
    unit: mln,
    note: "Figure 4: $120 mln neft, quduq $10 mln. Ikki quduq — dominant; natija (40, 40) — qo'shimcha quduqlar sof isrof (jamiyat uchun ham yomon).",
  },
  trade: {
    label: 'AQSh–Meksika tariflar (P4)',
    rowName: 'AQSh',
    colName: 'Meksika',
    rows: ['Low tariffs', 'High tariffs'],
    cols: ['Low tariffs', 'High tariffs'],
    payoffs: [
      [[25, 25], [10, 30]],
      [[30, 10], [20, 20]],
    ],
    unit: (v) => `$${v} mlrd`,
    note: "Problem 4: yuqori tarif — har biri uchun dominant; Nash (20, 20). NAFTA (1993) bir vaqtda kamaytirish orqali (25, 25) ga chiqdi. Lekin 3 va 9-boblar bo'yicha bir tomonlama past tarif ham mamlakatga foydali — bu “rahbarlar idroki” to'lovlari haqiqiy farovonlikni aks ettirmasligi mumkin.",
  },
  rnd: {
    label: 'Synergy–Dynaco (P5)',
    rowName: 'Synergy',
    colName: 'Dynaco',
    rows: ['Large budget', 'Small budget'],
    cols: ['Large budget', 'Small budget'],
    payoffs: [
      [[20, 30], [30, 0]],
      [[0, 70], [40, 50]],
    ],
    unit: mln,
    note: "Problem 5 (kitob jadvali matndan tiklangan): Synergy'da dominant strategiya **yo'q** (Dynaco katta bo'lsa — katta, kichik bo'lsa — kichik), Dynaco uchun katta byudjet — dominant. Nash: Dynaco katta → Synergy katta → (20, 30). Nash uchun dominant strategiya shart emas.",
  },
  kona: {
    label: 'Little Kona–Big Brew (P9)',
    rowName: 'Little Kona',
    colName: 'Big Brew',
    rows: ['Enter', "Don't enter"],
    cols: ['High price', 'Low price'],
    payoffs: [
      [[2, 3], [-1, 1]],
      [[0, 7], [0, 2]],
    ],
    unit: mln,
    note: "Problem 9: Big Brew uchun yuqori narx — dominant (3 > 1, 7 > 2); Kona'da dominant yo'q, lekin Brew yuqori narx qo'yishini bilib **kiradi** → yagona Nash (Enter, High). “Kirsang past narx qo'yamiz” tahdidi **ishonchsiz**. Til biriktirsa: kirmaslik + yuqori narx — jami $7 mln.",
  },
  grades: {
    label: 'Guruh loyihasi (P6)',
    rowName: 'Siz',
    colName: 'Sherik',
    rows: ['Work', 'Shirk'],
    cols: ['Work', 'Shirk'],
    payoffs: [
      [[15, 15], [5, 30]],
      [[30, 5], [10, 10]],
    ],
    unit: (v) => `${v} birlik`,
    note: "Problem 6: A = 40, B = 30, D = 10 baxt, mehnat −25. Shirk — dominant; natija (10, 10) D baho. Butun yil bir sherik bilan ishlasangiz (takroriy o'yin), hamkorlik (A) mumkin.",
  },
  airlines: {
    label: 'American–Braniff (P7)',
    rowName: 'American',
    colName: 'Braniff',
    rows: ['$300', '$600'],
    cols: ['$300', '$600'],
    payoffs: [
      [[1, 1], [3, 0]],
      [[0, 3], [2, 2]],
    ],
    unit: (v) => ['juda past', 'past', "o'rtacha", 'yuqori'][v] + ' foyda',
    note: "Problem 7: $300 — dominant; Nash ($300, $300). Ikkalasi uchun yaxshiroq — ($600, $600), faqat til biriktirish bilan (Crandall qo'ng'irog'i!) — bunda yo'lovchilar yutqazadi.",
  },
};

/** Ch. 18-2: a 2×2 game explorer with dominant strategies and Nash equilibria. */
export function GameLab() {
  const [key, setKey] = useState<keyof typeof GAMES>('pd');
  const [pick, setPick] = useState<[number, number] | null>(null);
  const g = GAMES[key];
  const better = (a: number, b: number) => (g.lowerBetter ? a < b : a > b);
  const rowBest = (c: number) => (better(g.payoffs[0][c][0], g.payoffs[1][c][0]) ? 0 : better(g.payoffs[1][c][0], g.payoffs[0][c][0]) ? 1 : -1);
  const colBest = (r: number) => (better(g.payoffs[r][0][1], g.payoffs[r][1][1]) ? 0 : better(g.payoffs[r][1][1], g.payoffs[r][0][1]) ? 1 : -1);
  const rowDom: number = rowBest(0) === rowBest(1) && rowBest(0) !== -1 ? rowBest(0) : -1;
  const colDom: number = colBest(0) === colBest(1) && colBest(0) !== -1 ? colBest(0) : -1;
  const nash: [number, number][] = [];
  for (let r = 0; r < 2; r++) for (let c = 0; c < 2; c++) if (rowBest(c) === r && colBest(r) === c) nash.push([r, c]);
  const isNash = (r: number, c: number) => nash.some(([a, b]) => a === r && b === c);
  const explain = `${g.note}\n\nDominant strategiya: ${g.rowName} — **${rowDom >= 0 ? g.rows[rowDom] : "yo'q"}**; ${g.colName} — **${colDom >= 0 ? g.cols[colDom] : "yo'q"}**. Nash muvozanati: ${nash.map(([r, c]) => `**(${g.rows[r]}, ${g.cols[c]})**`).join(', ') || "yo'q"}.${pick ? ` Siz tanlagan katak: ${isNash(...pick) ? 'Nash ✓ — hech kim yolg\'iz o\'zgartirishdan yutmaydi.' : `Nash emas — ${rowBest(pick[1]) !== pick[0] && rowBest(pick[1]) !== -1 ? g.rowName : g.colName} boshqa strategiyaga o'tib yutadi.`}` : ' Katakni bosib tekshiring.'}`;
  return (
    <Card
      title="Figures 1–4 — Game theory: dominant strategiya va Nash muvozanati"
      tabs={<Segmented size="sm" value={key} onChange={(v) => { setKey(v); setPick(null); }} options={Object.entries(GAMES).map(([v, x]) => ({ value: v as keyof typeof GAMES, label: x.label }))} />}
      explain={explain}
    >
      <div className="overflow-x-auto p-4">
        <table className="mx-auto min-w-[420px] border-separate border-spacing-1 text-sm">
          <thead>
            <tr>
              <th className="text-right text-xs text-muted">
                {g.rowName} ↓ / {g.colName} →
              </th>
              {g.cols.map((c, i) => (
                <th key={c} className={`rounded-lg px-2 py-1 ${colDom === i ? 'bg-postit-blue text-[#111]' : ''}`}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {g.rows.map((rName, r) => (
              <tr key={rName}>
                <th className={`rounded-lg px-2 py-1 text-right ${rowDom === r ? 'bg-postit-yellow text-[#111]' : ''}`}>{rName}</th>
                {[0, 1].map((c) => {
                  const [a, b] = g.payoffs[r][c];
                  const sel = pick && pick[0] === r && pick[1] === c;
                  return (
                    <td key={c} className="p-0">
                      <button
                        onClick={() => setPick([r, c])}
                        className={`w-full rounded-xl border-2 border-ink p-3 text-left text-[#111] ${isNash(r, c) ? 'bg-postit-green' : 'bg-surface2 text-ink'} ${sel ? 'ring-4 ring-marker' : ''}`}
                      >
                        <div className={`text-xs ${rowBest(c) === r ? 'font-bold underline' : ''}`}>
                          {g.rowName}: {g.unit(a)}
                        </div>
                        <div className={`text-xs ${colBest(r) === c ? 'font-bold underline' : ''}`}>
                          {g.colName}: {g.unit(b)}
                        </div>
                        {isNash(r, c) && <div className="mt-1 text-[11px] font-bold">★ Nash</div>}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-center text-[11px] text-muted">Tagiga chizilgan — o'yinchining shu ustun/qatordagi eng yaxshi javobi. Sariq/ko'k — dominant strategiya.</p>
      </div>
    </Card>
  );
}

type Strat = 'tft' | 'alld' | 'allc' | 'grim' | 'random';
const STRATS: Record<Strat, string> = { tft: 'Tit-for-tat', alld: 'Always defect', allc: 'Always cooperate', grim: 'Grim trigger', random: 'Random' };
// years in jail per round (Figure 1): both silent 1, both confess 8, sucker 20, temptation 0
const YEARS = { cc: 1, dd: 8, cd: 20, dc: 0 };

function play(a: Strat, b: Strat, rounds: number, seed: number) {
  let rng = seed;
  const rand = () => {
    rng = (rng * 9301 + 49297) % 233280;
    return rng / 233280;
  };
  const ha: boolean[] = [];
  const hb: boolean[] = [];
  const move = (s: Strat, _mine: boolean[], theirs: boolean[]) => {
    if (s === 'alld') return false;
    if (s === 'allc') return true;
    if (s === 'random') return rand() < 0.5;
    if (s === 'grim') return !theirs.includes(false);
    return theirs.length ? theirs[theirs.length - 1] : true; // tit-for-tat
  };
  let ya = 0;
  let yb = 0;
  for (let t = 0; t < rounds; t++) {
    const ma = move(a, ha, hb);
    const mb = move(b, hb, ha);
    ha.push(ma);
    hb.push(mb);
    ya += ma && mb ? YEARS.cc : !ma && !mb ? YEARS.dd : ma ? YEARS.cd : YEARS.dc;
    yb += ma && mb ? YEARS.cc : !ma && !mb ? YEARS.dd : mb ? YEARS.cd : YEARS.dc;
  }
  return [ya, yb];
}

/** Ch. 18 case study: the prisoners' dilemma tournament (Axelrod). */
export function Tournament() {
  const [rounds, setRounds] = useState(20);
  const [players, setPlayers] = useState<Strat[]>(['tft', 'alld', 'allc', 'grim', 'random']);
  const totals = players.map((s, i) => {
    let tot = 0;
    players.forEach((o, j) => {
      if (i !== j) tot += play(s, o, rounds, 7 + i * 31 + j * 17)[0];
    });
    return { s, tot };
  });
  const sorted = [...totals].sort((a, b) => a.tot - b.tot);
  const maxT = Math.max(...totals.map((t) => t.tot), 1);
  const explain = `Har bir strategiya boshqalari bilan ${rounds} raunddan o'ynaydi (round-robin); maqsad — **eng kam qamoq yili** (raund: ikkalasi jim — 1, ikkalasi iqror — 8, aldangan — 20, aldagan — 0). G'olib: **${STRATS[sorted[0].s]}**. Robert Axelrod turnirida oddiy **tit-for-tat** — avval hamkorlik, keyin raqib oldingi raundda nima qilgan bo'lsa, shuni qilish — murakkab dasturlardan yaxshiroq natija ko'rsatgan: do'stona boshlaydi, jazolaydi va kechiradi. “Ko'zga ko'z, tishga tish.” Ishtirokchilarni olib tashlab, natija qanday o'zgarishini ko'ring.`;
  return (
    <Card
      title="Case Study — The Prisoners' Dilemma Tournament (simulyatsiya)"
      tabs={(Object.keys(STRATS) as Strat[]).map((s) => (
        <button
          key={s}
          className={players.includes(s) ? 'btn-primary btn-sm' : 'btn-ghost btn-sm'}
          onClick={() => setPlayers((p) => (p.includes(s) ? (p.length > 2 ? p.filter((x) => x !== s) : p) : [...p, s]))}
        >
          {STRATS[s]}
        </button>
      ))}
      explain={explain}
      controls={<Slider label="Raundlar soni" value={rounds} min={1} max={100} step={1} onChange={setRounds} display={`${rounds}`} />}
    >
      <div className="space-y-2 p-4">
        {sorted.map(({ s, tot }, i) => (
          <div key={s} className="grid grid-cols-[8.5rem_1fr_4.5rem] items-center gap-2 text-sm">
            <span className="font-semibold">
              {i === 0 ? '🏆 ' : ''}
              {STRATS[s]}
            </span>
            <div className="h-5 rounded-md bg-surface2">
              <div className={`h-5 rounded-md border-2 border-ink ${i === 0 ? 'bg-good' : 'bg-marker'}`} style={{ width: `${(tot / maxT) * 100}%` }} />
            </div>
            <span className="num text-right">{fmt(tot)} yil</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

/** Ch. 18-3b: Stigler's explanation of bundling as price discrimination. */
export function BundlingLab() {
  const [city, setCity] = useState<[number, number]>([150, 50]);
  const [country, setCountry] = useState<[number, number]>([50, 150]);
  const sepRevenue = (vals: number[]) => {
    const cands = [...new Set(vals)];
    return Math.max(...cands.map((p) => p * vals.filter((v) => v >= p).length));
  };
  const superRev = sepRevenue([city[0], country[0]]);
  const hamletRev = sepRevenue([city[1], country[1]]);
  const separate = superRev + hamletRev;
  const bundleVals = [city[0] + city[1], country[0] + country[1]];
  const bundle = sepRevenue(bundleVals);
  const explain = `Alohida narx: “Superheroes” dan eng ko'p tushum $${superRev}k, “Hamlet” dan $${hamletRev}k → jami **$${separate}k**. Paket (bundle): City $${bundleVals[0]}k, Country $${bundleVals[1]}k gacha to'laydi → paket tushumi **$${bundle}k**. ${bundle > separate ? "Teatrlar filmlarni **turlicha** baholaganda paketlash narx diskriminatsiyasi kabi ishlaydi — narx umumiy WTP ga yaqinlashadi (Stigler, 1963)." : "Bu holatda paketlash yutuq bermaydi."} Stiglerning birinchi dalili: agar teatr Hamlet'ni 0 ga baholasa, paketga ham faqat Superheroes qiymatini to'laydi — keraksiz filmni “majburlash” bozor hokimiyatini oshirmaydi.`;
  return (
    <Card
      title="18-3b — Bundling: Makemoney Movies (Stigler)"
      tabs={
        <>
          <button className="btn-ghost btn-sm" onClick={() => { setCity([150, 50]); setCountry([50, 150]); }}>Kitob raqamlari</button>
          <button className="btn-ghost btn-sm" onClick={() => { setCity([200, 0]); setCountry([200, 0]); }}>Hamlet qiymatsiz</button>
        </>
      }
      explain={explain}
      controls={
        <>
          <Slider label="City: Superheroes" value={city[0]} min={0} max={250} step={10} onChange={(v) => setCity([v, city[1]])} display={`$${city[0]}k`} />
          <Slider label="City: Hamlet" value={city[1]} min={0} max={250} step={10} onChange={(v) => setCity([city[0], v])} display={`$${city[1]}k`} />
          <Slider label="Country: Superheroes" value={country[0]} min={0} max={250} step={10} onChange={(v) => setCountry([v, country[1]])} display={`$${country[0]}k`} />
          <Slider label="Country: Hamlet" value={country[1]} min={0} max={250} step={10} onChange={(v) => setCountry([country[0], v])} display={`$${country[1]}k`} />
        </>
      }
    >
      <div className="grid gap-3 p-4 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-ink bg-surface2 p-3 text-center">
          <div className="text-xs font-semibold text-muted">Alohida narxlar</div>
          <div className="num font-display text-2xl font-bold">${separate}k</div>
        </div>
        <div className={`rounded-xl border-2 border-ink p-3 text-center text-[#111] ${bundle > separate ? 'bg-postit-green' : 'bg-postit-yellow'}`}>
          <div className="text-xs font-semibold">Paket</div>
          <div className="num font-display text-2xl font-bold">${bundle}k</div>
        </div>
      </div>
    </Card>
  );
}
