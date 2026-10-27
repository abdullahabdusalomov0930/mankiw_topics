import { Sticker } from '../ui/Sticker';
import { useRef, useState, type PointerEvent as RPointerEvent, type ReactNode } from 'react';
import { correlation, fmt, ppfOpportunityCost, ppfStatus, ppfY, slope, type PPF } from '../../lib/econ';
import { Segmented, Slider } from '../ui/Kit';
import { ix, iy, makeFrame, svgPoint, sx, sy } from './plot';
import { Axes, Card } from './WidgetCard';
import { useWidth } from './useWidth';
import { tr } from '../../lib/lang';

// ---------- PPF ----------

const BASE: PPF = { X: 1000, Y: 3000, p: 1, q: 3 };
const BOOK_POINTS = [
  { id: 'A', x: 600, y: 2200 },
  { id: 'B', x: 700, y: 2000 },
  { id: 'C', x: 800, y: 2500 },
  { id: 'D', x: 300, y: 1000 },
  { id: 'E', x: 950, y: ppfY(BASE, 950) },
  { id: 'F', x: 150, y: ppfY(BASE, 150) },
];

/** Ch. 2 Figures 2–3 (and Problems 2–4): a bowed-out PPF for cars and computers. */
export function PPFExplorer() {
  const [ppf, setPpf] = useState<PPF>(BASE);
  const [pt, setPt] = useState({ x: 600, y: 2200 });
  const [showBook, setShowBook] = useState(true);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const svgRef = useRef<SVGSVGElement>(null);
  const dragging = useRef(false);
  const f = makeFrame(width, 1400, 4500);
  const status = ppfStatus(ppf, pt.x, pt.y, 0.025);
  const xf = Math.min(pt.x, ppf.X * 0.999);
  const oc = ppfOpportunityCost(ppf, xf);
  const yf = ppfY(ppf, xf);
  const pts: string[] = [];
  for (let i = 0; i <= 120; i++) {
    const x = (ppf.X * i) / 120;
    pts.push(`${sx(f, x)},${sy(f, ppfY(ppf, x))}`);
  }
  const basePts: string[] = [];
  if (ppf.X !== BASE.X || ppf.Y !== BASE.Y)
    for (let i = 0; i <= 120; i++) {
      const x = (BASE.X * i) / 120;
      basePts.push(`${sx(f, x)},${sy(f, ppfY(BASE, x))}`);
    }
  const move = (e: RPointerEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return;
    const { x, y } = svgPoint(svg, e.clientX, e.clientY);
    setPt({ x: Math.max(0, Math.min(1400, Math.round(ix(f, x) / 10) * 10)), y: Math.max(0, Math.min(4500, Math.round(iy(f, y) / 50) * 50)) });
  };
  const tangent = (dx: number) => [xf + dx, yf - oc * dx] as const;
  const t1 = tangent(-150);
  const t2 = tangent(150);
  const statusUz = tr({ efficient: 'samarali (efficient)', inefficient: 'samarasiz (inefficient)', unattainable: 'erishib bo‘lmaydigan (unattainable)' }, { efficient: 'efficient', inefficient: 'inefficient', unattainable: 'unattainable' })[status];
  const explain =
    status === 'efficient'
      ? tr(`Nuqta (${fmt(pt.x)} mashina, ${fmt(pt.y)} kompyuter) chegara **ustida** — **samarali**: bitta tovarni ko'paytirish uchun ikkinchisini kamaytirish shart (trade-off). Shu yerda bir mashinaning **imkoniyat xarajati** ≈ **${fmt(oc, 2)} kompyuter** — bu chegaraning nishabi. Chegara bo'rtib chiqqan (bowed out): mashina ko'p bo'lgan sari (E nuqtasi) u qimmatlashadi, chunki kompyuterga mohir ishchilar ham mashina yasashga o'tkaziladi.`, `The point (${fmt(pt.x)} cars, ${fmt(pt.y)} computers) lies **on** the frontier, so it is **efficient**: producing more of one good means producing less of the other (a trade-off). Here the **opportunity cost** of one car ≈ **${fmt(oc, 2)} computers** — the slope of the frontier. The frontier is bowed out: the more cars the economy makes (point E), the costlier each extra car, because workers who are better at building computers are moved to cars.`)
      : status === 'inefficient'
        ? tr(`Nuqta chegara **ichida** — **samarasiz** (masalan, keng ishsizlik): mavjud resurslar bilan ikkala tovarni ham ko'paytirish mumkin. D (300, 1000) dan A (600, 2200) ga o'tish — ikkalasi ham oshadi.`, `The point lies **inside** the frontier, so it is **inefficient** (for example, widespread unemployment): with the resources available the economy could make more of both goods. Moving from D (300, 1000) to A (600, 2200) raises both.`)
        : tr(`Nuqta chegaradan **tashqarida** — mavjud resurslar va texnologiya bilan **erishib bo'lmaydi** (C nuqtasi). Faqat iqtisodiy o'sish (texnologik yutuq yoki ko'proq resurs) chegarani tashqariga siljitib, unga yetish imkonini beradi.`, `The point lies **outside** the frontier: it is **unattainable** with the existing resources and technology (point C). Only economic growth (better technology or more resources) can shift the frontier out so the economy can reach it.`);
  return (
    <Card
      title={tr("Figures 2–3 — Production possibilities frontier (mashina va kompyuter)", 'Figures 2–3 — Production possibilities frontier (cars and computers)')}
      tabs={
        <>
          <button className="btn-ghost btn-sm" onClick={() => setPpf({ ...ppf, Y: ppf.Y === 4000 ? 3000 : 4000 })}>
            {ppf.Y === 4000 ? '✓ ' : ''}{tr('Kompyuter texnologiyasi yaxshilandi', 'Better computer technology')}
          </button>
          <button className="btn-ghost btn-sm" onClick={() => setPpf({ ...ppf, X: ppf.X === 1300 ? 1000 : 1300 })}>
            {ppf.X === 1300 ? '✓ ' : ''}{tr('Mashina texnologiyasi yaxshilandi', 'Better car technology')}
          </button>
          <button className="btn-ghost btn-sm" onClick={() => setShowBook((b) => !b)}>
            {showBook ? '✓ ' : ''}{tr('Kitob nuqtalari A–F', 'Book points A–F')}
          </button>
          <button
            className="btn-ghost btn-sm"
            onClick={() => {
              setPpf(BASE);
              setPt({ x: 600, y: 2200 });
            }}
          >
            ↺ Reset
          </button>
        </>
      }
      explain={explain}
    >
      <div className="grid md:grid-cols-[minmax(0,1fr)_14rem]">
        <div ref={wrapRef} className="min-w-0 p-1">
          <svg
            ref={svgRef}
            width={f.W}
            height={f.H}
            viewBox={`0 0 ${f.W} ${f.H}`}
            className="block cursor-crosshair touch-none select-none"
            onPointerDown={(e) => {
              dragging.current = true;
              svgRef.current?.setPointerCapture(e.pointerId);
              move(e);
            }}
            onPointerMove={(e) => dragging.current && move(e)}
            onPointerUp={() => (dragging.current = false)}
            onPointerCancel={() => (dragging.current = false)}
            role="img"
            aria-label="production possibilities frontier"
          >
            <Axes f={f} x="Number of Cars Produced" y="Number of Computers Produced" />
            <polygon points={`${sx(f, 0)},${sy(f, 0)} ${pts.join(' ')} ${sx(f, ppf.X)},${sy(f, 0)}`} className="fill-good/10" />
            {basePts.length > 0 && <polyline points={basePts.join(' ')} fill="none" className="stroke-muted" strokeWidth={2} strokeDasharray="7 6" />}
            <polyline points={pts.join(' ')} fill="none" className="stroke-pen" strokeWidth={3.5} />
            <text x={sx(f, ppf.X * 0.3) + 8} y={sy(f, ppfY(ppf, ppf.X * 0.3)) - 10} className="fill-pen text-[12px] font-bold">
              PPF
            </text>
            {status !== 'unattainable' && (
              <line x1={sx(f, t1[0])} y1={sy(f, t1[1])} x2={sx(f, t2[0])} y2={sy(f, t2[1])} className="stroke-tax" strokeWidth={2.5} strokeDasharray="5 4" />
            )}
            {showBook &&
              BOOK_POINTS.map((b) => (
                <g key={b.id} opacity={0.75}>
                  <circle cx={sx(f, b.x)} cy={sy(f, b.y)} r={4} className="fill-ink" />
                  <text x={sx(f, b.x) + 6} y={sy(f, b.y) - 6} className="fill-ink text-[11px] font-bold">
                    {b.id}
                  </text>
                </g>
              ))}
            <circle cx={sx(f, pt.x)} cy={sy(f, pt.y)} r={9} className={`${status === 'efficient' ? 'fill-good' : status === 'inefficient' ? 'fill-warn' : 'fill-bad'} stroke-ink`} strokeWidth={2.5} />
          </svg>
        </div>
        <div className="border-t-2 border-dashed border-ink/30 p-4 text-sm md:border-l-2 md:border-t-0">
          <div className="kicker mb-2">{tr('Tanlangan nuqta', 'Selected point')}</div>
          <div className="space-y-1.5">
            <div className="flex justify-between"><span className="text-muted">{tr('Mashinalar', 'Cars')}</span><span className="num font-semibold">{fmt(pt.x)}</span></div>
            <div className="flex justify-between"><span className="text-muted">{tr('Kompyuterlar', 'Computers')}</span><span className="num font-semibold">{fmt(pt.y)}</span></div>
            <div className={`mt-2 rounded-lg border-2 border-ink px-2 py-1 text-center font-bold text-[#111] ${status === 'efficient' ? 'bg-postit-green' : status === 'inefficient' ? 'bg-postit-yellow' : 'bg-postit-pink'}`}>{statusUz}</div>
            <div className="flex justify-between pt-2"><span className="text-muted">{tr('1 mashinaning OC', 'OC of 1 car')}</span><span className="num font-semibold text-tax">{fmt(oc, 2)} {tr('komp.', 'comp.')}</span></div>
            <div className="flex justify-between"><span className="text-muted">{tr('Chegaradagi kompyuter', 'Computers on the frontier')}</span><span className="num">{fmt(yf, 0)}</span></div>
          </div>
          <p className="mt-3 font-hand text-sm font-semibold text-pen">{tr("Grafikka bosing yoki torting — nuqta ko'chadi", 'Click or drag on the graph to move the point')} <Sticker name="pencil" /></p>
        </div>
      </div>
    </Card>
  );
}

// ---------- circular flow ----------

type FlowKey = 'spending' | 'revenue' | 'goods-bought' | 'goods-sold' | 'factors' | 'labor' | 'wages' | 'income';
const FLOW_TEXT: Record<FlowKey, string> = tr({
  spending: "**Spending** — uy xo'jaliklari tovar va xizmatlar uchun pul sarflaydi (siz qahvaxonada kofe uchun $1 to'laysiz).",
  revenue: "**Revenue** — shu pul firmalarga tushum bo'ladi (dollar qahvaxona kassasiga tushadi).",
  'goods-bought': "**Goods and services bought** — uy xo'jaliklari tovar bozorida sotib olgan narsalar (kofe).",
  'goods-sold': "**Goods and services sold** — firmalar tovar bozorida sotadigan mahsulot.",
  factors: "**Factors of production** — firmalar omillar bozorida mehnat, yer va kapitalni sotib oladi.",
  labor: "**Labor, land, and capital** — uy xo'jaliklari ular egalik qiladigan omillarni sotadi (barista o'z mehnatini).",
  wages: "**Wages, rent, and profit** — firmalar omillar uchun to'laydi: ish haqi, ijara, foyda (qahvaxona barista maoshi va ijarani to'laydi, qolgani — egasining foydasi).",
  income: "**Income** — bu pul uy xo'jaliklarining daromadiga aylanadi va dollar yana kimningdir hamyoniga qaytadi — doira yopiladi.",
}, {
  spending: '**Spending** — households spend money on goods and services (you pay $1 for a coffee at a café).',
  revenue: "**Revenue** — that money becomes firms' revenue (the dollar goes into the café's till).",
  'goods-bought': '**Goods and services bought** — what households buy in the market for goods and services (the coffee).',
  'goods-sold': '**Goods and services sold** — the output firms sell in the market for goods and services.',
  factors: '**Factors of production** — firms buy labor, land, and capital in the markets for the factors of production.',
  labor: '**Labor, land, and capital** — households sell the factors they own (the barista sells his labor).',
  wages: "**Wages, rent, and profit** — firms pay for the factors: wages, rent, profit (the café pays the barista's wage and the rent; what's left is the owner's profit).",
  income: "**Income** — this money becomes households' income, and the dollar ends up in someone's wallet again — the circle closes.",
});

/** Ch. 2 Figure 1: the circular-flow diagram with animated money and real flows. */
export function CircularFlow() {
  const [view, setView] = useState<'both' | 'money' | 'real'>('both');
  const [sel, setSel] = useState<FlowKey>('spending');
  const W = 640;
  const H = 440;
  const showMoney = view !== 'real';
  const showReal = view !== 'money';
  // outer loop (money) and inner loop (real)
  const outerTop = 'M 110 200 C 110 60, 250 50, 320 50 C 390 50, 530 60, 530 200';
  const outerBottom = 'M 530 240 C 530 380, 390 390, 320 390 C 250 390, 110 380, 110 240';
  const innerTop = 'M 470 200 C 470 120, 400 105, 320 105 C 240 105, 170 120, 170 200';
  const innerBottom = 'M 170 240 C 170 320, 240 335, 320 335 C 400 335, 470 320, 470 240';
  const label = (k: FlowKey, x: number, y: number, text: string, money: boolean) => (
    <g key={k} className="cursor-pointer" onClick={() => setSel(k)}>
      <rect x={x - 62} y={y - 13} width={124} height={24} rx={7} className={`${sel === k ? 'fill-marker' : 'fill-surface'} ${money ? 'stroke-good' : 'stroke-pen'}`} strokeWidth={2} />
      <text x={x} y={y + 4} textAnchor="middle" className={`text-[11px] font-bold ${sel === k ? 'fill-[#111]' : 'fill-ink'}`}>
        {text}
      </text>
    </g>
  );
  const dots = (path: string, cls: string, n = 4, dur = 6) =>
    Array.from({ length: n }, (_, i) => (
      <circle key={i} r={5} className={cls}>
        <animateMotion dur={`${dur}s`} repeatCount="indefinite" path={path} begin={`${(-dur * i) / n}s`} />
      </circle>
    ));
  return (
    <Card
      title={tr("Figure 1 — Circular-flow diagram (aylanma oqim)", 'Figure 1 — Circular-flow diagram')}
      tabs={
        <Segmented
          size="sm"
          value={view}
          onChange={setView}
          options={[
            { value: 'both', label: tr('Ikkalasi', 'Both') },
            { value: 'money', label: tr('Pul oqimi (tashqi halqa)', 'Flow of money (outer loop)') },
            { value: 'real', label: tr('Tovar va omillar (ichki halqa)', 'Goods and factors (inner loop)') },
          ]}
        />
      }
      explain={tr(`${FLOW_TEXT[sel]}\n\nModel faqat ikki qaror qabul qiluvchini ko'radi: **households** (uy xo'jaliklari) va **firms**. Tovar bozorida uy xo'jaliklari — xaridor, firmalar — sotuvchi; omillar bozorida — aksincha. Ichki halqa — **real oqim** (tovarlar va omillar), tashqi halqa — **pul oqimi**. Murakkabroq modelga davlat va xalqaro savdo qo'shiladi. Yorliqlarni bosing.`, `${FLOW_TEXT[sel]}\n\nThe model has just two decision makers: **households** and **firms**. In the markets for goods and services households are buyers and firms are sellers; in the markets for the factors of production it is the other way round. The inner loop is the **flow of inputs and outputs**, the outer loop the **flow of dollars**. A richer model adds government and international trade. Click the labels.`)}
    >
      <div className="overflow-x-auto p-2">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block w-full max-w-[640px]" role="img" aria-label="circular flow diagram">
          <defs>
            <marker id="cf-arrow-g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" className="fill-good" />
            </marker>
            <marker id="cf-arrow-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" className="fill-pen" />
            </marker>
          </defs>
          {/* boxes */}
          <g>
            <rect x={250} y={165} width={140} height={110} rx={14} className="fill-surface stroke-ink" strokeWidth={0} />
            <rect x={20} y={185} width={150} height={70} rx={14} className="fill-postit-yellow stroke-ink" strokeWidth={2.5} />
            <text x={95} y={216} textAnchor="middle" className="fill-[#111] font-display text-[15px] font-bold">
              HOUSEHOLDS
            </text>
            <text x={95} y={236} textAnchor="middle" className="fill-[#111] text-[10px]">
              Buy & consume goods · own & sell factors
            </text>
            <rect x={470} y={185} width={150} height={70} rx={14} className="fill-postit-blue stroke-ink" strokeWidth={2.5} />
            <text x={545} y={216} textAnchor="middle" className="fill-[#111] font-display text-[15px] font-bold">
              FIRMS
            </text>
            <text x={545} y={236} textAnchor="middle" className="fill-[#111] text-[10px]">
              Produce & sell goods · hire & use factors
            </text>
            <rect x={225} y={25} width={190} height={50} rx={12} className="fill-postit-green stroke-ink" strokeWidth={2.5} />
            <text x={320} y={48} textAnchor="middle" className="fill-[#111] text-[12px] font-bold">
              MARKETS FOR
            </text>
            <text x={320} y={64} textAnchor="middle" className="fill-[#111] text-[12px] font-bold">
              GOODS AND SERVICES
            </text>
            <rect x={225} y={365} width={190} height={50} rx={12} className="fill-postit-pink stroke-ink" strokeWidth={2.5} />
            <text x={320} y={388} textAnchor="middle" className="fill-[#111] text-[12px] font-bold">
              MARKETS FOR
            </text>
            <text x={320} y={404} textAnchor="middle" className="fill-[#111] text-[12px] font-bold">
              FACTORS OF PRODUCTION
            </text>
          </g>
          {showMoney && (
            <g>
              <path d="M 110 185 C 110 90, 180 60, 225 55" fill="none" className="stroke-good" strokeWidth={3} markerEnd="url(#cf-arrow-g)" />
              <path d="M 415 55 C 470 60, 530 90, 530 185" fill="none" className="stroke-good" strokeWidth={3} markerEnd="url(#cf-arrow-g)" />
              <path d="M 530 255 C 530 350, 470 380, 415 385" fill="none" className="stroke-good" strokeWidth={3} markerEnd="url(#cf-arrow-g)" />
              <path d="M 225 385 C 180 380, 110 350, 110 255" fill="none" className="stroke-good" strokeWidth={3} markerEnd="url(#cf-arrow-g)" />
              {dots(outerTop, 'fill-good')}
              {dots(outerBottom, 'fill-good')}
              {label('spending', 120, 105, 'Spending ($)', true)}
              {label('revenue', 520, 105, 'Revenue ($)', true)}
              {label('wages', 520, 335, 'Wages, rent, profit', true)}
              {label('income', 120, 335, 'Income ($)', true)}
            </g>
          )}
          {showReal && (
            <g>
              <path d="M 470 200 C 460 120, 400 90, 330 80" fill="none" className="stroke-pen" strokeWidth={3} markerEnd="url(#cf-arrow-b)" />
              <path d="M 310 80 C 240 90, 180 120, 170 195" fill="none" className="stroke-pen" strokeWidth={3} markerEnd="url(#cf-arrow-b)" />
              <path d="M 170 245 C 180 320, 240 350, 310 360" fill="none" className="stroke-pen" strokeWidth={3} markerEnd="url(#cf-arrow-b)" />
              <path d="M 330 360 C 400 350, 460 320, 470 250" fill="none" className="stroke-pen" strokeWidth={3} markerEnd="url(#cf-arrow-b)" />
              {dots(innerTop, 'fill-pen', 3, 7)}
              {dots(innerBottom, 'fill-pen', 3, 7)}
              {label('goods-sold', 405, 150, 'Goods & services sold', false)}
              {label('goods-bought', 235, 150, 'Goods & services bought', false)}
              {label('labor', 235, 292, 'Labor, land, capital', false)}
              {label('factors', 405, 292, 'Factors of production', false)}
            </g>
          )}
        </svg>
      </div>
    </Card>
  );
}

// ---------- graphing appendix ----------

const STUDENTS = [
  [5, 2.0], [8, 2.3], [10, 2.6], [12, 2.4], [15, 2.9], [18, 3.0], [20, 3.2], [22, 2.9], [25, 3.5], [28, 3.4], [30, 3.7], [35, 3.8],
] as [number, number][];
const EMMA = [
  [5, 10], [9, 9], [13, 8], [17, 7], [21, 6], [25, 5],
] as [number, number][];

/** Ch. 2 appendix: scatterplots and correlation, slope, omitted variables and reverse causality. */
export function GraphingSandbox() {
  const [tab, setTab] = useState<'scatter' | 'shift' | 'slope' | 'omitted' | 'reverse'>('scatter')
  const [income, setIncome] = useState<30 | 40 | 50>(40);
  const [price, setPrice] = useState(8);;
  const [neg, setNeg] = useState(false);
  const [i1, setI1] = useState(2);
  const [i2, setI2] = useState(4);
  const [showSmokers, setShowSmokers] = useState(false);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  let content: ReactNode = null;
  let explain = '';
  if (tab === 'scatter') {
    const f = makeFrame(width, 40, 4);
    const data = neg ? STUDENTS.map(([x, y]) => [x, 5.6 - y] as [number, number]) : STUDENTS;
    const r = correlation(data.map((d) => d[0]), data.map((d) => d[1]));
    explain = tr(`Har bir nuqta — bitta talaba: **ordered pair** (x, y). x-koordinata — ${neg ? 'ziyofatlarga sarflangan soat' : "o'qishga sarflangan soat"}, y-koordinata — GPA. Bu **scatterplot**. Korrelyatsiya koeffitsienti r = **${fmt(r, 2)}**: ${r > 0 ? '**positive correlation** — o\'zgaruvchilar bir yo\'nalishda harakatlanadi' : '**negative correlation** — qarama-qarshi yo\'nalishda'}. (Statistika talabasi sifatida: r −1 dan 1 gacha. Kitob r ni hisoblamaydi, faqat yo'nalishni aytadi.)`, `Each dot is one student: an **ordered pair** (x, y). The x-coordinate is ${neg ? 'hours spent partying' : 'hours spent studying'}, the y-coordinate is GPA. This is a **scatterplot**. The correlation coefficient r = **${fmt(r, 2)}**: ${r > 0 ? '**positive correlation** — the variables move in the same direction' : '**negative correlation** — they move in opposite directions'}. (For statistics students: r runs from −1 to 1. The book does not compute r, only the direction.)`);
    content = (
      <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="scatterplot">
        <Axes f={f} x={neg ? 'Party time (hours/week)' : 'Study time (hours/week)'} y="GPA" />
        {data.map(([x, y], i) => (
          <circle key={i} cx={sx(f, x)} cy={sy(f, y)} r={6} className="fill-pen stroke-surface" strokeWidth={2} />
        ))}
        {!neg && (
          <>
            <text x={sx(f, 5) + 8} y={sy(f, 2.0) + 16} className="fill-ink text-[11px] font-bold">Alfred E. (5, 2.0)</text>
            <text x={sx(f, 25) - 8} y={sy(f, 3.5) - 10} textAnchor="end" className="fill-ink text-[11px] font-bold">Albert E. (25, 3.5)</text>
          </>
        )}
      </svg>
    );
  } else if (tab === 'shift') {
    const f = makeFrame(width, 30, 11);
    const curves: Record<30 | 40 | 50, number[]> = { 30: [2, 6, 10, 14, 18, 22], 40: [5, 9, 13, 17, 21, 25], 50: [8, 12, 16, 20, 24, 28] };
    const prices = [10, 9, 8, 7, 6, 5];
    const q = curves[income][prices.indexOf(price)];
    const name = { 30: 'D3', 40: 'D1', 50: 'D2' }[income];
    explain = tr(`Table A-1: Emma $${income},000 daromadda, roman narxi $${price} bo'lsa, **${q} ta** roman oladi. **Narxni** o'zgartirsangiz — nuqta o'sha egri chiziq bo'ylab yuradi (**movement along the curve**). **Daromadni** o'zgartirsangiz — butun egri chiziq siljiydi (**shift**): $50,000 → D2 o'ngga, $30,000 → D3 chapga. Qoida: **o'qlarda yo'q** o'zgaruvchi (daromad, kutubxona yopilishi, kino narxi) o'zgarsa — egri chiziq siljiydi; o'qdagi o'zgaruvchi (narx) o'zgarsa — egri bo'ylab harakat.`, `Table A-1: with income $${income},000 and a novel price of $${price}, Emma buys **${q}** novels. Change the **price** and the point moves along the same curve (a **movement along the curve**). Change **income** and the whole curve **shifts**: $50,000 → D2 to the right, $30,000 → D3 to the left. Rule: when a variable **not on the axes** changes (income, the library closing, the price of movies), the curve shifts; when a variable on an axis (price) changes, we move along the curve.`);
    content = (
      <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="movement vs shift">
        <Axes f={f} x="Quantity of Novels Purchased" y="Price of Novels" money />
        {([30, 40, 50] as const).map((inc) => (
          <g key={inc} opacity={inc === income ? 1 : 0.3}>
            <polyline points={prices.map((pr, i) => `${sx(f, curves[inc][i])},${sy(f, pr)}`).join(' ')} fill="none" className="stroke-demand" strokeWidth={inc === income ? 3.5 : 2} strokeDasharray={inc === 40 ? undefined : '6 5'} />
            <text x={sx(f, curves[inc][5]) + 6} y={sy(f, 5) + 4} className="fill-demand text-[11px] font-bold">{{ 30: 'D3', 40: 'D1', 50: 'D2' }[inc]}</text>
          </g>
        ))}
        <line x1={sx(f, 0)} x2={sx(f, q)} y1={sy(f, price)} y2={sy(f, price)} className="stroke-muted" strokeDasharray="4 4" />
        <line x1={sx(f, q)} x2={sx(f, q)} y1={sy(f, price)} y2={sy(f, 0)} className="stroke-muted" strokeDasharray="4 4" />
        <circle cx={sx(f, q)} cy={sy(f, price)} r={8} className="fill-marker stroke-ink" strokeWidth={2} />
        <text x={sx(f, q) + 10} y={sy(f, price) - 10} className="fill-ink text-[12px] font-bold">({q}, ${price}) on {name}</text>
      </svg>
    );
  } else if (tab === 'slope') {
    const f = makeFrame(width, 30, 11);
    const a = EMMA[Math.min(i1, i2)];
    const b = EMMA[Math.max(i1, i2)];
    const m = slope(a[0], a[1], b[0], b[1]);
    explain = tr(`Emma'ning talab egri chizig'i (daromad $40,000). Ikki nuqta: (${a[0]}, $${a[1]}) va (${b[0]}, $${b[1]}).\n\n\\[\\text{slope} = \\frac{\\Delta y}{\\Delta x} = \\frac{${b[1]} - ${a[1]}}{${b[0]} - ${a[0]}} = \\frac{${b[1] - a[1]}}{${b[0] - a[0]}} = ${fmt(m, 3)}\\]\n\nIstalgan ikki nuqtani tanlang — to'g'ri chiziqda nishab **har doim bir xil** (−1/4). Manfiy nishab — narx va miqdor teskari bog'langan; kichik (nolga yaqin) manfiy son — yotiq chiziq, Emma narxga kuchli javob beradi.`, `Emma's demand curve (income $40,000). Two points: (${a[0]}, $${a[1]}) and (${b[0]}, $${b[1]}).\n\n\\[\\text{slope} = \\frac{\\Delta y}{\\Delta x} = \\frac{${b[1]} - ${a[1]}}{${b[0]} - ${a[0]}} = \\frac{${b[1] - a[1]}}{${b[0] - a[0]}} = ${fmt(m, 3)}\\]\n\nPick any two points: on a straight line the slope is **always the same** (−1/4). A negative slope means price and quantity move in opposite directions; a small negative number (close to zero) means a flat line — Emma responds strongly to the price.`);
    content = (
      <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="slope">
        <Axes f={f} x="Quantity of Novels Purchased" y="Price of Novels" money />
        <polyline points={EMMA.map(([x, y]) => `${sx(f, x)},${sy(f, y)}`).join(' ')} fill="none" className="stroke-demand" strokeWidth={3} />
        <line x1={sx(f, a[0])} y1={sy(f, a[1])} x2={sx(f, b[0])} y2={sy(f, a[1])} className="stroke-tax" strokeWidth={2.5} strokeDasharray="5 4" />
        <line x1={sx(f, b[0])} y1={sy(f, a[1])} x2={sx(f, b[0])} y2={sy(f, b[1])} className="stroke-bad" strokeWidth={2.5} strokeDasharray="5 4" />
        <text x={(sx(f, a[0]) + sx(f, b[0])) / 2} y={sy(f, a[1]) - 6} textAnchor="middle" className="fill-tax text-[11px] font-bold">
          Δx = {b[0] - a[0]}
        </text>
        <text x={sx(f, b[0]) + 6} y={(sy(f, a[1]) + sy(f, b[1])) / 2} className="fill-bad text-[11px] font-bold">
          Δy = {b[1] - a[1]}
        </text>
        {EMMA.map(([x, y], i) => (
          <circle key={i} cx={sx(f, x)} cy={sy(f, y)} r={i === i1 || i === i2 ? 7 : 4} className={i === i1 || i === i2 ? 'fill-marker stroke-ink' : 'fill-demand'} strokeWidth={2} />
        ))}
      </svg>
    );
  } else if (tab === 'omitted') {
    const f = makeFrame(width, 6, 60);
    const homes = [
      [0, 6, false], [1, 9, false], [1, 12, false], [2, 14, false], [2, 30, true], [3, 34, true], [3, 18, false], [4, 40, true], [4, 42, true], [5, 48, true], [5, 21, false], [6, 52, true],
    ] as [number, number, boolean][];
    explain = showSmokers
      ? tr("Endi **omitted variable** (tushirib qoldirilgan o'zgaruvchi) ko'rindi: qizil nuqtalar — chekadigan uylar. Saraton xavfini zajigalkalar emas, **sigaretalar** oshiradi; zajigalkasi ko'p uylarda ko'proq chekishadi. Grafik sabab-oqibatni isbotlamaydi.", 'Now the **omitted variable** appears: the red dots are homes where someone smokes. It is **cigarettes**, not lighters, that raise the risk of cancer; homes with many lighters are homes where people smoke more. A graph alone does not prove cause and effect.')
      : tr('“Big Brother Statistical Services”: uyda zajigalka qancha ko\'p bo\'lsa, saraton xavfi shuncha yuqori. Zajigalkalarga soliq solish kerakmi? “Chekuvchilarni ko\'rsatish” tugmasini bosing.', '“Big Brother Statistical Services”: the more lighters in a house, the higher the risk of cancer. Should lighters be taxed? Press “Show smokers”.');
    content = (
      <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="omitted variable">
        <Axes f={f} x="Number of Lighters in House" y="Risk of Cancer (%)" />
        {homes.map(([x, y, smoker], i) => (
          <circle key={i} cx={sx(f, x)} cy={sy(f, y)} r={7} className={showSmokers && smoker ? 'fill-bad stroke-surface' : 'fill-pen stroke-surface'} strokeWidth={2} />
        ))}
      </svg>
    );
  } else {
    const f = makeFrame(width, 6, 60);
    const cities = [
      [1, 8], [1.5, 12], [2, 15], [2.5, 20], [3, 24], [3.5, 30], [4, 33], [4.5, 38], [5, 44],
    ] as [number, number][];
    explain = tr("“Anarxistlar assotsiatsiyasi” grafigi: politsiyachi ko'p shaharlarda jinoyat ham ko'p — demak politsiya jinoyatga sabab? Yo'q, ehtimol teskarisi: **jinoyati ko'p shaharlar ko'proq politsiya yollaydi** — bu **reverse causality**. Qaysi o'zgaruvchi oldin o'zgarganiga qarash ham yetmaydi: odamlar kutishlarga javob beradi — er-xotin bola tug'ilishini kutib miniven sotib oladi, lekin miniven bola tug'ilishiga sabab emas! Yechim — nazorat qilinadigan tajriba (randomized experiment).", 'The “Association of American Anarchists” graph: cities with more police have more crime — so do police cause crime? No; more likely the reverse: **cities with a lot of crime hire more police** — **reverse causality**. Looking at which variable moves first is not enough either: people respond to expectations — a couple buys a minivan expecting a baby, but the minivan does not cause the baby! The fix is a controlled (randomized) experiment.');
    content = (
      <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="reverse causality">
        <Axes f={f} x="Police Officers (per 1,000 people)" y="Violent Crimes (per 1,000 people)" />
        <polyline points={cities.map(([x, y]) => `${sx(f, x)},${sy(f, y)}`).join(' ')} fill="none" className="stroke-pen" strokeWidth={3} />
        <text x={sx(f, 3)} y={sy(f, 50)} textAnchor="middle" className="fill-ink text-[13px] font-bold">
          police → crime ?   crime → police ?
        </text>
      </svg>
    );
  }
  return (
    <Card
      title="Appendix — Graphing: scatterplot, slope, cause and effect"
      tabs={
        <>
          <Segmented
            size="sm"
            value={tab}
            onChange={setTab}
            options={[
              { value: 'scatter', label: 'Scatterplot' },
              { value: 'shift', label: 'Movement vs shift' },
              { value: 'slope', label: 'Slope' },
              { value: 'omitted', label: 'Omitted variable' },
              { value: 'reverse', label: 'Reverse causality' },
            ]}
          />
          {tab === 'scatter' && (
            <button className="btn-ghost btn-sm" onClick={() => setNeg((n) => !n)}>
              {neg ? tr("O'qish vaqti", 'Study time') : tr('Ziyofat vaqti (negative)', 'Party time (negative)')}
            </button>
          )}
          {tab === 'omitted' && (
            <button className="btn-ghost btn-sm" onClick={() => setShowSmokers((v) => !v)}>
              {showSmokers ? '✓ ' : ''}{tr("Chekuvchilarni ko'rsatish", 'Show smokers')}
            </button>
          )}
        </>
      }
      explain={explain}
      controls={
        tab === 'shift' ? (
          <>
            <Slider label={tr("Roman narxi (o'qda)", 'Price of novels (on an axis)')} value={price} min={5} max={10} step={1} onChange={setPrice} display={`$${price}`} color="--demand" />
            <div>
              <div className="mb-1 text-xs font-medium text-muted">{tr("Daromad (o'qda emas)", 'Income (not on an axis)')}</div>
              <Segmented size="sm" value={String(income)} onChange={(v) => setIncome(Number(v) as 30 | 40 | 50)} options={[{ value: '30', label: '$30,000' }, { value: '40', label: '$40,000' }, { value: '50', label: '$50,000' }]} />
            </div>
          </>
        ) : tab === 'slope' ? (
          <>
            <Slider label={tr('1-nuqta', 'Point 1')} value={i1} min={0} max={5} step={1} onChange={setI1} display={`(${EMMA[i1][0]}, $${EMMA[i1][1]})`} />
            <Slider label={tr('2-nuqta', 'Point 2')} value={i2} min={0} max={5} step={1} onChange={setI2} display={`(${EMMA[i2][0]}, $${EMMA[i2][1]})`} />
          </>
        ) : undefined
      }
    >
      <div ref={wrapRef} className="min-w-0 p-1">
        {content}
      </div>
    </Card>
  );
}
