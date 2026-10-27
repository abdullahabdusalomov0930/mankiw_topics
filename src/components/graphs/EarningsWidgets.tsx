import { useState } from 'react';
import { fmt } from '../../lib/econ';
import { Segmented, Slider } from '../ui/Kit';
import { makeFrame, sx, sy } from './plot';
import { useWidth } from './useWidth';
import { Axes, Card } from './WidgetCard';

const TABLE1 = {
  men: { label: 'Erkaklar', hs: [56855, 52677], col: [80973, 97554] },
  women: { label: 'Ayollar', hs: [32675, 39669], col: [44200, 70657] },
};

/** Ch. 20 Case Study “The Increasing Value of Skills”: Table 1 and the skill-biased demand shift. */
export function SkillPremium() {
  const [g, setG] = useState<keyof typeof TABLE1>('men');
  const [trade, setTrade] = useState(false);
  const [tech, setTech] = useState(false);
  const d = TABLE1[g];
  const prem = [0, 1].map((i) => (d.col[i] / d.hs[i] - 1) * 100);
  const max = 100000;
  // stylised: each force raises skilled demand by 10 and lowers unskilled demand by 10 (W = a − L, S: W = 20 + L)
  const shift = (trade ? 10 : 0) + (tech ? 10 : 0);
  const wSkilled = (140 + shift + 20) / 2;
  const wUnskilled = (100 - shift + 20) / 2;
  const explain = `Table 1 (2019 dollarida, to'liq stavkada ishlovchilar): ${d.label.toLowerCase()} uchun kollej mukofoti 1974-yil **${fmt(prem[0])}%**, 2019-yil **${fmt(prem[1])}%** (kitob “142% → 185%” ko'rinishida yozadi: kollej bitiruvchisi o'rta maktab bitiruvchisi daromadining 1.42 → 1.85 barobari). Ikki gipoteza — ikkalasi ham malakali mehnatga **nisbiy talabni** oshiradi: (1) **xalqaro savdo** (import 5% → 13%, eksport 6% → 10% YaIM; AQSh kam malakali mehnat bilan ishlab chiqarilgan tovarni import qiladi), (2) **skill-biased technological change** (kompyuter fayl kotiblarini almashtirdi, dasturchilarga talab oshdi). Model: malakali ish haqi ${fmt(wSkilled)}, malakasiz ${fmt(wUnskilled)} → nisbat **${fmt(wSkilled / wUnskilled, 2)}**.`;
  return (
    <Card
      title="Table 1 — Average Annual Earnings by Educational Attainment"
      tabs={<Segmented size="sm" value={g} onChange={setG} options={Object.entries(TABLE1).map(([v, x]) => ({ value: v as keyof typeof TABLE1, label: x.label }))} />}
      explain={explain}
      controls={
        <>
          <label className="flex items-center gap-2 text-sm font-semibold"><input type="checkbox" checked={trade} onChange={(e) => setTrade(e.target.checked)} /> Savdo kengaydi</label>
          <label className="flex items-center gap-2 text-sm font-semibold"><input type="checkbox" checked={tech} onChange={(e) => setTech(e.target.checked)} /> Skill-biased texnologiya</label>
        </>
      }
    >
      <div className="grid gap-4 p-4 sm:grid-cols-2">
        <div className="space-y-3">
          {[0, 1].map((i) => (
            <div key={i}>
              <div className="mb-1 text-sm font-semibold">{i ? 2019 : 1974} · mukofot {fmt(prem[i])}%</div>
              {[
                ['O‘rta maktab', d.hs[i], 'bg-muted/50'],
                ['Kollej', d.col[i], 'bg-good'],
              ].map(([l, v, cls]) => (
                <div key={l as string} className="mb-1 grid grid-cols-[5.5rem_1fr_4.5rem] items-center gap-2 text-xs">
                  <span className="text-muted">{l as string}</span>
                  <div className="h-4 rounded bg-surface2">
                    <div className={`h-4 rounded border border-ink ${cls as string}`} style={{ width: `${((v as number) / max) * 100}%` }} />
                  </div>
                  <span className="num text-right font-bold">${fmt(v as number)}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 self-center">
          {[
            ['Malakali ish haqi', fmt(wSkilled)],
            ['Malakasiz ish haqi', fmt(wUnskilled)],
            ['Nisbat', fmt(wSkilled / wUnskilled, 2)],
            ['Talab siljishi', shift ? `±${shift}` : '—'],
          ].map(([a, b]) => (
            <div key={a} className="rounded-xl border-2 border-ink bg-surface2 p-3 text-center">
              <div className="text-xs font-semibold text-muted">{a}</div>
              <div className="num font-display text-xl font-bold">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

type Mode = 'competitive' | 'monopsony' | 'floor';

/** Ch. 20-1f/g: below-equilibrium (monopsony) and above-equilibrium (minimum wage, unions, efficiency wages) wages. */
export function WageDeviations() {
  const [mode, setMode] = useState<Mode>('monopsony');
  const [floor, setFloor] = useState(90);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  // demand (VMP): W = 120 − L; supply: W = 20 + L; monopsony marginal cost of labor: 20 + 2L
  const Lc = 50;
  const Wc = 70;
  const Lm = 100 / 3;
  const Wm = 20 + Lm;
  const Ld = 120 - floor;
  const Ls = floor - 20;
  const f = makeFrame(width, 100, 140);
  let explain: string;
  if (mode === 'competitive') explain = `Raqobatli bozor: ko'p xaridor va sotuvchi. Muvozanat L = ${Lc}, **W = $${Wc} = VMP**. Ko'p ish haqi farqlari aynan shu muvozanatdan (compensating differentials, human capital, qobiliyat) kelib chiqadi.`;
  else if (mode === 'monopsony')
    explain = `**Monopsony** — yagona xaridor (kichik shahardagi yirik ish beruvchi). Ko'proq yollash uchun hammaga ish haqini oshirishi kerak, shuning uchun qo'shimcha ishchining xarajati (MCL = 20 + 2L) ish haqidan yuqori. Firma VMP = MCL da yollaydi: L ≈ **${fmt(Lm)}** < ${Lc}, ish haqi taklif egri chizig'idan: **W ≈ $${fmt(Wm)}** < $${Wc}. Monopoliya kabi: faoliyat kamayadi, **deadweight loss** (sariq) paydo bo'ladi. Joan Robinson (1930-lar); NCAA (2021, Oliy sud); non-compete bandlari.`;
  else if (floor <= Wc) explain = `Ish haqi tagi $${floor} muvozanatdan ($${Wc}) past — **ta'sirsiz** (ko'p ishchilar uchun eng kam ish haqi shunday).`;
  else
    explain = `Ish haqi muvozanatdan yuqori: $${floor} > $${Wc}. Sabablari: **eng kam ish haqi qonuni**, **kasaba uyushmalari** (ish tashlash — strike — tahdidi; a'zolar ~10–20% ko'p topadi), **efficiency wages** (yuqori ish haqi kadrlar qo'nimsizligini kamaytiradi, harakatni oshiradi, yaxshi nomzodlarni jalb qiladi). Har uchalasida: taklif ${fmt(Ls)}, talab ${fmt(Ld)} → **ortiqcha mehnat (ishsizlik) ${fmt(Ls - Ld)}**.`;
  return (
    <Card
      title="20-1f/g — Muvozanatdan past va yuqori ish haqi"
      tabs={<Segmented size="sm" value={mode} onChange={setMode} options={[{ value: 'competitive', label: 'Raqobat' }, { value: 'monopsony', label: 'Monopsony' }, { value: 'floor', label: 'Min. ish haqi / union / efficiency' }]} />}
      explain={explain}
      controls={mode === 'floor' ? <Slider label="Ish haqi darajasi" value={floor} min={40} max={115} step={5} onChange={setFloor} display={`$${floor}`} color="--supply" /> : undefined}
    >
      <div ref={wrapRef} className="min-w-0 p-1">
        <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="labor market wage deviations">
          <Axes f={f} x="Quantity of Labor" y="Wage" money />
          {mode === 'monopsony' && (
            <>
              <polygon points={[[Lm, 120 - Lm], [Lc, Wc], [Lm, Wm]].map(([x, y]) => `${sx(f, x)},${sy(f, y)}`).join(' ')} className="fill-marker/70" />
              <line x1={sx(f, 0)} y1={sy(f, 20)} x2={sx(f, 60)} y2={sy(f, 140)} className="stroke-bad" strokeWidth={2.5} strokeDasharray="6 4" />
              <text x={sx(f, 46) + 6} y={sy(f, 110)} className="fill-bad text-[11px] font-bold">MC of labor</text>
              <line x1={sx(f, Lm)} y1={sy(f, 120 - Lm)} x2={sx(f, Lm)} y2={sy(f, 0)} className="stroke-muted" strokeDasharray="3 3" />
              <circle cx={sx(f, Lm)} cy={sy(f, Wm)} r={7} className="fill-marker stroke-ink" strokeWidth={2} />
              <text x={sx(f, Lm) - 8} y={sy(f, Wm) + 18} textAnchor="end" className="fill-ink text-[11px] font-bold">W ${fmt(Wm)}</text>
            </>
          )}
          {mode === 'floor' && floor > Wc && (
            <>
              <line x1={sx(f, Ld)} x2={sx(f, Ls)} y1={sy(f, floor)} y2={sy(f, floor)} className="stroke-bad" strokeWidth={6} opacity={0.5} />
              <text x={(sx(f, Ld) + sx(f, Ls)) / 2} y={sy(f, floor) - 8} textAnchor="middle" className="fill-bad text-[11px] font-bold">surplus (unemployment)</text>
            </>
          )}
          {mode === 'floor' && <line x1={sx(f, 0)} x2={sx(f, 100)} y1={sy(f, floor)} y2={sy(f, floor)} className="stroke-ink" strokeWidth={2} />}
          <line x1={sx(f, 0)} y1={sy(f, 120)} x2={sx(f, 100)} y2={sy(f, 20)} className="stroke-demand" strokeWidth={3} />
          <line x1={sx(f, 0)} y1={sy(f, 20)} x2={sx(f, 100)} y2={sy(f, 120)} className="stroke-supply" strokeWidth={3} />
          <text x={sx(f, 96)} y={sy(f, 24) - 6} textAnchor="end" className="fill-demand text-[11px] font-bold">Demand (VMP)</text>
          <text x={sx(f, 96)} y={sy(f, 116) + 16} textAnchor="end" className="fill-supply text-[11px] font-bold">Supply</text>
          <circle cx={sx(f, Lc)} cy={sy(f, Wc)} r={mode === 'competitive' ? 8 : 5} className={mode === 'competitive' ? 'fill-marker stroke-ink' : 'fill-muted'} strokeWidth={2} />
        </svg>
      </div>
    </Card>
  );
}

type Disc = 'employer' | 'customer' | 'government';

/** Ch. 20-2b/c: the profit motive versus employer, customer, and government discrimination (blondes and brunettes). */
export function DiscriminationLab() {
  const [src, setSrc] = useState<Disc>('employer');
  const [taste, setTaste] = useState(20);
  const [year, setYear] = useState(0);
  // initial gap 30%; entry of profit-only firms closes the employer-driven part at 35% per period
  const floorGap = src === 'customer' ? taste * 0.6 : src === 'government' ? 30 : 0;
  const gap = floorGap + (30 - floorGap) * Math.pow(0.65, year);
  const blondeFirms = src === 'government' ? 0 : Math.round(100 * (1 - Math.pow(0.65, year)));
  const text: Record<Disc, string> = {
    employer: "**Ish beruvchi diskriminatsiyasi**: brunetkalarni afzal ko'rish blondinkalar ish haqini tushiradi. Lekin tadbirkorlar arzon blondinkalarni yollab xarajatni kamaytiradi; “blonde” firmalar kiradi, “brunette” firmalar zarar ko'rib chiqadi → ish haqi farqi **yo'qoladi**. Foyda motivi — tabiiy davo (Greenspan ayol iqtisodchilarni yollagan — P8).",
    customer: "**Mijozlar diskriminatsiyasi**: mijozlar brunetka ofitsiantlarni afzal ko'rib, ko'proq to'lashga tayyor bo'lsa, raqobat farqni yo'qotmaydi. Ikki xil restoran: arzon “blonde” va qimmat “brunette” — mutaassib mijozlar diskriminatsiya uchun yuqori narx to'laydi. Sport: 1988-yil tadqiqoti — qora tanli basketbolchilar 20% kam topgan; beysbol kartochkalari 10–13% arzon.",
    government: "**Hukumat diskriminatsiyasi**: qonun blondinkalarni faqat idish yuvishga ruxsat bersa, raqobat kuchi bostiriladi — farq **saqlanadi**. Misollar: AQSh janubidagi segregatsiyalangan tramvaylar (kompaniyalar qonunga qarshi edi — “bo'sh joy tashib yuramiz”), Janubiy Afrikadagi apartheid (1990-gacha).",
  };
  const explain = `${text[src]} Model: ${year}-davr, “blonde” firmalar ulushi ~${blondeFirms}%, ish haqi farqi **${fmt(gap, 1)}%**.`;
  return (
    <Card
      title="20-2b/c — Diskriminatsiya va foyda motivi (blondinkalar va brunetkalar)"
      tabs={<Segmented size="sm" value={src} onChange={(v) => { setSrc(v); setYear(0); }} options={[{ value: 'employer', label: 'Ish beruvchi' }, { value: 'customer', label: 'Mijozlar' }, { value: 'government', label: 'Hukumat' }]} />}
      explain={explain}
      controls={
        <>
          <Slider label="Vaqt (kirish davrlari)" value={year} min={0} max={10} step={1} onChange={setYear} display={`${year}`} />
          {src === 'customer' && <Slider label="Mijozlar “didi” (to'lashga tayyorlik)" value={taste} min={0} max={50} step={5} onChange={setTaste} display={`${taste}`} color="--demand" />}
        </>
      }
    >
      <div className="space-y-3 p-4">
        <div>
          <div className="mb-1 flex justify-between text-xs font-semibold"><span>Ish haqi farqi (brunetka − blondinka)</span><span className="num">{fmt(gap, 1)}%</span></div>
          <div className="h-5 rounded bg-surface2">
            <div className="h-5 rounded border border-ink bg-bad/70 transition-all" style={{ width: `${(gap / 30) * 100}%` }} />
          </div>
        </div>
        <div className="flex flex-wrap gap-1" aria-label="firms">
          {Array.from({ length: 40 }, (_, i) => (
            <span key={i} className={`h-5 w-5 rounded-full border border-ink ${i < (blondeFirms * 40) / 100 ? 'bg-marker' : 'bg-pen/60'}`} title={i < (blondeFirms * 40) / 100 ? 'blonde firm' : 'brunette firm'} />
          ))}
        </div>
        <div className="text-xs text-muted">Sariq — faqat foydani o'ylaydigan (“blonde”) firmalar; ko'k — diskriminatsiya qiluvchi (“brunette”) firmalar.</div>
      </div>
    </Card>
  );
}

/** Ch. 20-2a/d: measuring discrimination (Table 2, résumé experiments) and statistical discrimination. */
export function GapsAndStatistics() {
  const [tab, setTab] = useState<'table' | 'stat'>('table');
  const [blueLate, setBlueLate] = useState(10);
  const [brownLate, setBrownLate] = useState(5);
  if (tab === 'stat') {
    const explain = `**Statistical discrimination**: ish beruvchi punktuallikni (muhim, lekin ko'rinmaydigan) bilmaydi, ko'z rangini (ahamiyatsiz, lekin ko'rinadigan) ko'radi. Ko'k ko'zlilarning ${blueLate}% i, jigarranglarning ${brownLate}% i surunkali kechikadi → ish beruvchi jigarrang ko'zlilarni afzal ko'radi. Natija: ko'k ko'zlilarning **${100 - blueLate}%** i punktual bo'lsa ham, guruh o'rtachasi bilan stereotiplanadi. Real misol: “ban the box” qonunlari sudlanganlikni so'rashni taqiqlaydi → ba'zi ish beruvchilar sudlanmagan yosh qora tanli erkaklarni ham yollamaydi; tadqiqotlar ularning bandligi kamayganini ko'rsatgan.`;
    return (
      <Card title="20-2d — Statistical discrimination" tabs={<Segmented size="sm" value={tab} onChange={setTab} options={[{ value: 'table', label: 'Table 2 va tajribalar' }, { value: 'stat', label: 'Statistik diskriminatsiya' }]} />} explain={explain}
        controls={
          <>
            <Slider label="Ko‘k ko‘zlilar kechikadi" value={blueLate} min={0} max={30} step={1} onChange={setBlueLate} display={`${blueLate}%`} color="--demand" />
            <Slider label="Jigarrang ko‘zlilar kechikadi" value={brownLate} min={0} max={30} step={1} onChange={setBrownLate} display={`${brownLate}%`} color="--supply" />
          </>
        }
      >
        <div className="grid gap-4 p-4 sm:grid-cols-2">
          {[
            ['Ko‘k ko‘zlilar', blueLate, 'bg-pen'],
            ['Jigarrang ko‘zlilar', brownLate, 'bg-supply'],
          ].map(([l, late, cls]) => (
            <div key={l as string}>
              <div className="mb-2 text-sm font-semibold">{l as string}: {100 - (late as number)}% punktual</div>
              <div className="grid grid-cols-10 gap-1">
                {Array.from({ length: 100 }, (_, i) => (
                  <span key={i} className={`h-3 w-3 rounded-full ${i < (late as number) ? 'bg-bad' : (cls as string)}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    );
  }
  const explain = "**Table 2** (2019, median yillik daromad): qora tanli erkaklar oq tanlilardan 24%, qora tanli ayollar oq tanli ayollardan 16% kam; oq tanli ayollar oq tanli erkaklardan 19%, qora tanli ayollar qora tanli erkaklardan 10% kam. Lekin bu farqlar o'z-o'zidan diskriminatsiya o'lchovi emas: **human capital** (bakalavr: oq tanlilar 36%, qora tanlilar 26%; maktab sifati), **tajriba** (25–44 yoshda ayollarning 24% i, erkaklarning 10% i mehnat bozoridan tashqarida) va **compensating differentials** ham bor. Kuchli dalil — dala tajribalari: Bertrand–Mullainathan (~5,000 rezyume) — “oq” ismlar **~50%** ko'p qo'ng'iroq olgan; Oreopoulos (Kanada) — inglizcha ismlar **39%** ko'p.";
  const rows: [string, number, number][] = [
    ['Erkaklar', 60017, 45644],
    ['Ayollar', 48845, 41098],
  ];
  return (
    <Card title="Table 2 — Median Annual Earnings by Race and Sex" tabs={<Segmented size="sm" value={tab} onChange={setTab} options={[{ value: 'table', label: 'Table 2 va tajribalar' }, { value: 'stat', label: 'Statistik diskriminatsiya' }]} />} explain={explain}>
      <div className="space-y-3 p-4">
        {rows.map(([g, w, b]) => (
          <div key={g}>
            <div className="mb-1 text-sm font-semibold">{g} · farq {fmt((1 - b / w) * 100)}%</div>
            {[
              ['Oq tanli', w, 'bg-pen'],
              ['Qora tanli', b, 'bg-supply'],
            ].map(([l, v, cls]) => (
              <div key={l as string} className="mb-1 grid grid-cols-[5.5rem_1fr_4.5rem] items-center gap-2 text-xs">
                <span className="text-muted">{l as string}</span>
                <div className="h-4 rounded bg-surface2">
                  <div className={`h-4 rounded border border-ink ${cls as string}`} style={{ width: `${((v as number) / 65000) * 100}%` }} />
                </div>
                <span className="num text-right font-bold">${fmt(v as number)}</span>
              </div>
            ))}
          </div>
        ))}
        <div className="grid grid-cols-2 gap-2">
          {[
            ['Bertrand–Mullainathan (2004)', '+50% qo‘ng‘iroq'],
            ['Oreopoulos (2011, Kanada)', '+39% qo‘ng‘iroq'],
          ].map(([a, b]) => (
            <div key={a} className="rounded-xl border-2 border-ink bg-surface2 p-3 text-center">
              <div className="text-xs font-semibold text-muted">{a}</div>
              <div className="num font-display text-lg font-bold">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
