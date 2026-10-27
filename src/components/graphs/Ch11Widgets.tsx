import { Sticker } from '../ui/Sticker';
import { useState } from 'react';
import { fmt } from '../../lib/econ';
import { Segmented, Slider } from '../ui/Kit';
import { makeFrame, sx, sy } from './plot';
import { useWidth } from './useWidth';
import { Axes, Card } from './WidgetCard';
import { isEn, tr } from '../../lib/lang';

type Kind = 'private' | 'club' | 'common' | 'public';
const KIND: Record<Kind, { en: string; uz: string; ex: boolean; rival: boolean; cls: string }> = {
  private: { en: 'Private goods', uz: 'xususiy tovarlar', ex: true, rival: true, cls: 'bg-postit-yellow' },
  club: { en: 'Club goods', uz: 'klub tovarlari', ex: true, rival: false, cls: 'bg-postit-blue' },
  common: { en: 'Common resources', uz: 'umumiy resurslar', ex: false, rival: true, cls: 'bg-postit-green' },
  public: { en: 'Public goods', uz: 'jamoat tovarlari', ex: false, rival: false, cls: 'bg-postit-pink' },
};
const ITEMS: { name: string; kind: Kind; why: string }[] = [
  { name: tr('Muzqaymoq', 'Ice-cream cone'), kind: 'private', why: tr("Pul to'lamasangiz bermaydi (excludable), siz yesangiz boshqa yeya olmaydi (rival).", "You don't get one unless you pay (excludable), and if you eat it nobody else can (rival).") },
  { name: tr('Kiyim', 'Clothing'), kind: 'private', why: tr('Excludable va rival.', 'Excludable and rival.') },
  { name: tr("Tirbandlikdagi pullik yo'l", 'Congested toll road'), kind: 'private', why: tr("To'lov bilan cheklanadi va tirband — har bir mashina boshqalarni sekinlatadi.", 'Access is limited by the toll, and it is congested — each car slows the others.') },
  { name: tr("Tornado sirenasi", 'Tornado siren'), kind: 'public', why: tr("Eshitishdan hech kimni to'xtatib bo'lmaydi, birovning eshitishi boshqasiga xalaqit bermaydi.", 'Nobody can be stopped from hearing it, and one person hearing it does not stop another.') },
  { name: tr('Milliy mudofaa', 'National defense'), kind: 'public', why: tr('Klassik jamoat tovari: na excludable, na rival.', 'The classic public good: neither excludable nor rival.') },
  { name: tr('Fundamental bilim (teorema)', 'Basic knowledge (a theorem)'), kind: 'public', why: tr("Teoremani patentlab bo'lmaydi va undan hamma foydalanishi mumkin.", 'A theorem cannot be patented, and everyone can use it.') },
  { name: tr("Bo'sh (tirbandliksiz) yo'l", 'Uncongested free road'), kind: 'public', why: tr("Bepul va tirband emas — birovning yurishi boshqaga ta'sir qilmaydi.", "It is free and uncongested — one person's driving doesn't affect anyone else.") },
  { name: tr("Okeandagi baliq", 'Fish in the ocean'), kind: 'common', why: tr("Ovlashni to'xtatish qiyin (not excludable), lekin ovlangan baliq boshqaga qolmaydi (rival).", 'Hard to stop people fishing (not excludable), but a fish caught is not left for anyone else (rival).') },
  { name: tr("Tirbandlikdagi bepul yo'l", 'Congested free road'), kind: 'common', why: tr("Hamma kira oladi, lekin har bir qo'shimcha mashina boshqalarni sekinlatadi.", 'Anyone can enter, but each extra car slows everyone else.') },
  { name: tr('Toza havo', 'Clean air'), kind: 'common', why: tr("Hech kimni nafas olishdan to'xtatib bo'lmaydi, lekin ifloslantirish boshqalarga zarar.", "Nobody can be stopped from breathing it, but polluting it harms others.") },
  { name: tr('Yovvoyi fillar', 'Wild elephants'), kind: 'common', why: tr("Egasi yo'q — brakonerlar imkoni boricha ovlaydi.", 'Nobody owns them — poachers take as many as they can.') },
  { name: tr('Sun’iy yo‘ldosh TV', 'Satellite TV'), kind: 'club', why: tr("To'lamasangiz uziladi (excludable), signal boshqalarga kamaymaydi (not rival).", "Stop paying and you're cut off (excludable); the signal isn't used up by others (not rival).") },
  { name: tr('Bo‘sh kinoteatr', 'Uncrowded movie theater'), kind: 'club', why: tr("Chipta kerak, lekin zal bo'sh bo'lsa sizning tomoshangiz boshqaga xalaqit bermaydi.", "You need a ticket, but if the theater is empty your watching doesn't get in anyone's way.") },
  { name: tr('Pullik striming xizmati', 'Paid streaming service'), kind: 'club', why: tr("Obunasiz kirib bo'lmaydi (excludable), sizning ko'rishingiz boshqalarnikini kamaytirmaydi (not rival). Kitob: klub tovarlari — tabiiy monopoliya turi (16-bob).", "You can't get in without a subscription (excludable), and your watching doesn't reduce anyone else's (not rival). The book: club goods are a type of natural monopoly (Chapter 16).") },
  { name: tr('Mayoq (ko‘p kemalar uchun)', 'Lighthouse (used by many ships)'), kind: 'public', why: tr("Case Study: ko'p kapitan foydalanadi va hech kimni chetlatib bo'lmaydi. Agar faqat bitta port egasiga xizmat qilsa — xususiy tovarga yaqin.", "Case Study: many captains use it and none can be excluded. If it serves only one port owner, it is closer to a private good.") },
  { name: tr('Shahar mushakbozligi', 'City fireworks display'), kind: 'public', why: tr("Osmonga qarashdan hech kimni to'xtatib bo'lmaydi. Disney World ichida esa — kirish pullik, xususiy tovarga yaqin.", "Nobody can be stopped from looking at the sky. Inside Disney World, though, entry is paid — closer to a private good.") },
];

/** Ch. 11 Figure 1: classify goods by excludability and rivalry. */
export function GoodsSorter() {
  const [i, setI] = useState(0);
  const [answer, setAnswer] = useState<Kind | null>(null);
  const [score, setScore] = useState({ ok: 0, n: 0 });
  const item = ITEMS[i % ITEMS.length];
  const pick = (k: Kind) => {
    if (answer) return;
    setAnswer(k);
    setScore((s) => ({ ok: s.ok + (k === item.kind ? 1 : 0), n: s.n + 1 }));
  };
  const next = () => {
    setAnswer(null);
    setI((v) => v + 1);
  };
  const explain = answer
    ? `${answer === item.kind ? tr("✓ To'g'ri!", '✓ Correct!') : tr(`✗ Bu **${KIND[item.kind].en}** (${KIND[item.kind].uz}).`, `✗ This is one of the **${KIND[item.kind].en}**.`)} ${item.why}`
    : tr("Tovarni to'g'ri katakka joylang. Ikki savol bering: (1) **Excludable?** — odamni foydalanishdan to'xtatish mumkinmi? (2) **Rival in consumption?** — bir kishining foydalanishi boshqalarnikini kamaytiradimi? Chegara ba'zan noaniq: tirbandlik, qirg'oq qo'riqlash xizmati darajasi o'zgartiradi.", 'Put the good in the right box. Ask two questions: (1) **Excludable?** — can people be prevented from using it? (2) **Rival in consumption?** — does one person’s use reduce another’s? The line is sometimes blurry: congestion or the level of a service like coastal protection can change the answer.');
  return (
    <Card title={tr("Figure 1 — Four Types of Goods: tovarni joylang", 'Figure 1 — Four Types of Goods: sort the good')} explain={explain}>
      <div className="p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="rounded-xl border-2 border-ink bg-surface2 px-4 py-2 font-display text-lg font-bold">{item.name}</div>
          <div className="num text-sm text-muted">
            {tr('Ball', 'Score')}: {score.ok}/{score.n}
          </div>
        </div>
        <div className="grid grid-cols-[auto_1fr_1fr] gap-2 text-sm">
          <div />
          <div className="text-center text-xs font-bold text-muted">Rival: Yes</div>
          <div className="text-center text-xs font-bold text-muted">Rival: No</div>
          {([true, false] as const).map((ex) => (
            <div key={String(ex)} className="contents">
              <div className="flex items-center text-xs font-bold text-muted [writing-mode:vertical-rl] sm:[writing-mode:horizontal-tb]">Excludable: {ex ? 'Yes' : 'No'}</div>
              {([true, false] as const).map((rv) => {
                const k = (Object.keys(KIND) as Kind[]).find((kk) => KIND[kk].ex === ex && KIND[kk].rival === rv)!;
                const right = answer && k === item.kind;
                const wrong = answer === k && k !== item.kind;
                return (
                  <button
                    key={k}
                    onClick={() => pick(k)}
                    className={`min-h-[84px] rounded-xl border-2 border-ink p-3 text-left text-[#111] transition ${KIND[k].cls} ${right ? 'ring-4 ring-good' : ''} ${wrong ? 'opacity-50 ring-4 ring-bad' : ''}`}
                  >
                    <div className="font-display font-bold">{KIND[k].en}</div>
                    {!isEn && <div className="text-xs">{KIND[k].uz}</div>}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
        {answer && (
          <button className="btn-primary btn-sm mt-3" onClick={next}>
            {tr('Keyingi tovar →', 'Next good →')}
          </button>
        )}
      </div>
    </Card>
  );
}

const TOWNS = {
  smallville: { label: 'Smallville (QQ 5)', cost: 120, people: [['Clark', 80], ['Lana', 50], ['Pete', -30]] as [string, number][] },
  bayport: { label: 'Bayport (P7a)', cost: 360, people: [['Frank', 50], ['Joe', 100], ['Callie', 300]] as [string, number][] },
  river: { label: 'River Heights (P7c)', cost: 360, people: [['Nancy', 20], ['Bess', 140], ['Ned', 160]] as [string, number][] },
  smalltown: { label: 'Smalltown (500 × $10)', cost: 1000, people: [[tr('Har bir aholi (500 kishi)', 'Each resident (500 people)'), 10]] as [string, number][] },
};

/** Ch. 11: cost–benefit analysis vs majority voting with equal cost shares (QuickQuiz 5, Problem 7). */
export function PublicGoodVote() {
  const [town, setTown] = useState<keyof typeof TOWNS>('bayport');
  const t = TOWNS[town];
  const n = town === 'smalltown' ? 500 : t.people.length;
  const share = t.cost / n;
  const total = town === 'smalltown' ? 5000 : t.people.reduce((s, p) => s + p[1], 0);
  const yes = town === 'smalltown' ? 500 : t.people.filter((p) => p[1] > share).length;
  const passes = yes > n / 2;
  const cba = total > t.cost;
  const explain = tr(`Jami qiymat **$${fmt(total)}** vs xarajat **$${fmt(t.cost)}** → cost–benefit tahlili: **${cba ? 'quring' : 'qurmang'}**. Teng ulush $${fmt(share, 2)}; o'z qiymati ulushdan katta bo'lganlar “ha” deydi → ${yes} / ${n} → ovoz: **${passes ? "o'tadi" : "o'tmaydi"}**. ${cba === passes ? 'Bu safar ovoz va samaradorlik mos keldi.' : '**Ovoz samarali natijani bermadi!** Ko\'pchilik qoidasi qiymatlarning **kuchini** emas, faqat **sonini** hisoblaydi.'} ${town === 'smalltown' ? "Davlat har kimdan $2 soliq olib, Zoe'ni yollasa — har kim $8 yutadi." : ''}`, `Total value **$${fmt(total)}** vs cost **$${fmt(t.cost)}** → the cost–benefit analysis says: **${cba ? 'build it' : "don't build it"}**. An equal share is $${fmt(share, 2)}; people whose value exceeds their share vote “yes” → ${yes} / ${n} → the vote **${passes ? 'passes' : 'fails'}**. ${cba === passes ? 'This time the vote and efficiency agree.' : '**The vote did not give the efficient outcome!** Majority rule counts only the **number** of supporters, not the **strength** of their values.'} ${town === 'smalltown' ? 'If the government taxes everyone $2 and hires Zoe, everyone gains $8.' : ''}`);
  return (
    <Card
      title={tr("Public goods — cost–benefit tahlili va ovoz berish", 'Public goods — cost–benefit analysis and voting')}
      tabs={<Segmented size="sm" value={town} onChange={setTown} options={Object.entries(TOWNS).map(([k, v]) => ({ value: k as keyof typeof TOWNS, label: v.label }))} />}
      explain={explain}
    >
      <div className="overflow-x-auto p-4">
        <table className="w-full min-w-[420px] text-sm">
          <thead>
            <tr className="border-b-2 border-ink text-left">
              <th className="py-1.5">{tr('Aholi', 'Resident')}</th>
              <th>{tr('Qiymat', 'Value')}</th>
              <th>{tr('Ulush', 'Share')}</th>
              <th>{tr('Sof', 'Net')}</th>
              <th>{tr('Ovoz', 'Vote')}</th>
            </tr>
          </thead>
          <tbody className="num">
            {t.people.map(([name, v]) => (
              <tr key={name} className="border-b border-line">
                <td className="py-1.5 font-sans font-semibold">{name}</td>
                <td>${fmt(v)}</td>
                <td>${fmt(share, 2)}</td>
                <td className={v - share >= 0 ? 'text-good' : 'text-bad'}>{v - share >= 0 ? '+' : '−'}${fmt(Math.abs(v - share), 2)}</td>
                <td className="font-sans">{v > share ? <><Sticker name="thumbs-up" /> {tr('ha', 'yes')}</> : <><Sticker name="thumbs-down" /> {tr('yo‘q', 'no')}</>}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <div className={`rounded-xl border-2 border-ink p-3 text-[#111] ${cba ? 'bg-postit-green' : 'bg-postit-pink'}`}>
            <div className="text-xs font-bold">Cost–benefit</div>
            <div className="font-display text-lg font-bold">{cba ? tr('Samarali: quring', 'Efficient: build') : tr('Samarasiz: qurmang', "Inefficient: don't build")}</div>
          </div>
          <div className={`rounded-xl border-2 border-ink p-3 text-[#111] ${passes ? 'bg-postit-green' : 'bg-postit-pink'}`}>
            <div className="text-xs font-bold">{tr("Ko'pchilik ovozi (teng ulush)", 'Majority vote (equal shares)')}</div>
            <div className="font-display text-lg font-bold">{passes ? tr("O'tadi", 'Passes') : tr("O'tmaydi", 'Fails')}</div>
          </div>
        </div>
      </div>
    </Card>
  );
}

/** Ch. 11-3a: Tragedy of the Commons — each family adds sheep while its own gain is positive. */
export function CommonsLab() {
  const [families, setFamilies] = useState(5);
  const [tax, setTax] = useState(0);
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  // wool value per sheep falls with the total flock: v(S) = A - B·S; cost per sheep C
  const A = 100;
  const B = 1;
  const C = 20;
  const social = (A - C) / (2 * B); // maximizes S·(A - B·S - C)
  const nash = Math.max(0, (families * (A - C - tax)) / (B * (families + 1)));
  const welfare = (S: number) => S * (A - B * S - C);
  const f = makeFrame(width, 100, 1800);
  const pts: string[] = [];
  for (let S = 0; S <= 80; S++) pts.push(`${sx(f, S)},${sy(f, Math.max(0, welfare(S)))}`);
  const pigou = (B * social) * (families - 1) / families; // tax that makes the Nash flock equal to the optimum
  const explain = tr(`Yaylovda ${families} oila bor. Har bir qo'y yung beradi, lekin qo'y ko'paygan sari o't kamayadi va **hamma** qo'ylarning qiymati tushadi. Har oila faqat o'z foydasini ko'radi va boshqalarga zararni (salbiy tashqi effekt) e'tiborsiz qoldiradi → jami **${fmt(nash, 0)}** qo'y (jamiyat foydasi $${fmt(welfare(nash), 0)}). Jamiyat uchun optimal — **${fmt(social, 0)}** qo'y ($${fmt(welfare(social), 0)}). Oilalar ko'paysa — tragediya kuchayadi. Yechimlar: qo'y soniga cheklov, **qo'yga soliq** (bu modelda ≈ $${fmt(pigou, 0)} soliq optimumni beradi), yaylov ruxsatnomalarini auksionga qo'yish yoki yerni bo'lib, xususiy mulkka aylantirish (enclosure movement).`, `${families} families share the town common. Each sheep produces wool, but the more sheep there are, the less grass, and the value of **all** the sheep falls. Each family counts only its own gain and ignores the harm to others (a negative externality) → **${fmt(nash, 0)}** sheep in total (social surplus $${fmt(welfare(nash), 0)}). The social optimum is **${fmt(social, 0)}** sheep ($${fmt(welfare(social), 0)}). More families make the tragedy worse. Remedies: a limit on sheep, a **tax per sheep** (in this model a tax of ≈ $${fmt(pigou, 0)} gives the optimum), auctioning grazing permits, or dividing the land among families (the enclosure movement).`);
  return (
    <Card
      title={tr("11-3a — Tragedy of the Commons: yaylovdagi qo'ylar (model)", "11-3a — Tragedy of the Commons: sheep on the town common (model)")}
      explain={explain}
      controls={
        <>
          <Slider label={tr('Oilalar soni', 'Number of families')} value={families} min={1} max={30} step={1} onChange={setFamilies} display={`${families}`} />
          <Slider label={tr("Har bir qo'yga soliq", 'Tax per sheep')} value={tax} min={0} max={80} step={1} onChange={setTax} display={`$${tax}`} color="--tax" />
        </>
      }
    >
      <div ref={wrapRef} className="min-w-0 p-1">
        <svg width={f.W} height={f.H} viewBox={`0 0 ${f.W} ${f.H}`} className="block" role="img" aria-label="tragedy of the commons">
          <Axes f={f} x="Total sheep on the commons" y="Total surplus ($)" />
          <polyline points={pts.join(' ')} fill="none" className="stroke-good" strokeWidth={3} />
          <line x1={sx(f, social)} x2={sx(f, social)} y1={sy(f, 0)} y2={sy(f, welfare(social))} className="stroke-good" strokeDasharray="5 4" />
          <text x={sx(f, social) + 6} y={sy(f, welfare(social)) - 8} className="fill-good text-[11px] font-bold">
            optimum {fmt(social, 0)}
          </text>
          <line x1={sx(f, nash)} x2={sx(f, nash)} y1={sy(f, 0)} y2={sy(f, Math.max(0, welfare(nash)))} className="stroke-bad" strokeWidth={2.5} />
          <circle cx={sx(f, nash)} cy={sy(f, Math.max(0, welfare(nash)))} r={8} className="fill-bad stroke-ink" strokeWidth={2} />
          <text x={sx(f, nash) + 8} y={sy(f, Math.max(0, welfare(nash))) + 18} className="fill-bad text-[11px] font-bold">
            {families} {tr('oila', 'families')}: {fmt(nash, 0)} {tr("qo'y", 'sheep')}
          </text>
        </svg>
      </div>
      <p className="px-4 pb-2 text-xs text-muted">
        {tr(
          "Model kitobda raqamlar bilan berilmagan — g'oyani ko'rsatish uchun tuzilgan: qo'y yungi qiymati = 100 − (jami qo'ylar), xarajat $20.",
          'The book gives no numbers here; this model illustrates the idea: wool value per sheep = 100 − (total sheep), cost $20.',
        )}
      </p>
    </Card>
  );
}

/** Ch. 11 case study "How Much Is a Life Worth?" — expected benefit of a traffic light. */
export function LifeValueCalc() {
  const [cost, setCost] = useState(10000);
  const [before, setBefore] = useState(1.6);
  const [after, setAfter] = useState(1.1);
  const [vsl, setVsl] = useState(10);
  const dr = Math.max(0, before - after) / 100;
  const benefit = dr * vsl * 1e6;
  const explain = tr(`Svetofor halokatli baxtsiz hodisa xavfini ${fmt(before, 1)}% dan ${fmt(after, 1)}% gacha kamaytiradi → **${fmt(dr * 100, 1)} foiz punkt**. Inson hayotining qiymati (value of a statistical life) ~$${vsl} mln (xavfli kasblardagi qo'shimcha maoshdan baholangan). Kutilgan foyda = ${fmt(dr, 3)} × $${vsl} mln = **$${fmt(benefit, 0)}** ${benefit > cost ? '>' : '≤'} xarajat $${fmt(cost, 0)} → **${benefit > cost ? "o'rnating" : "o'rnatmang"}**. Hayotni “cheksiz qimmat” desak — har bir chorrahaga svetofor qo'yish kerak bo'lardi; odamlar esa pul tejash uchun ham xavfga boradi.`, `The traffic light cuts the risk of a fatal accident from ${fmt(before, 1)}% to ${fmt(after, 1)}% → **${fmt(dr * 100, 1)} percentage points**. The value of a statistical life is ~$${vsl} million (estimated from the extra pay in risky jobs). Expected benefit = ${fmt(dr, 3)} × $${vsl} million = **$${fmt(benefit, 0)}** ${benefit > cost ? '>' : '≤'} cost $${fmt(cost, 0)} → **${benefit > cost ? 'install it' : "don't install it"}**. If a life were “priceless”, we would need a traffic light at every corner; yet people take risks to save money all the time.`);
  return (
    <Card
      title={tr("Case Study — How Much Is a Life Worth? (svetofor)", 'Case Study — How Much Is a Life Worth? (a traffic light)')}
      explain={explain}
      controls={
        <>
          <Slider label={tr('Svetofor xarajati', 'Cost of the traffic light')} value={cost} min={1000} max={100000} step={1000} onChange={setCost} display={`$${fmt(cost, 0)}`} />
          <Slider label={tr('Hayot qiymati (mln $)', 'Value of a life ($ million)')} value={vsl} min={1} max={20} step={1} onChange={setVsl} display={`$${vsl} ${tr('mln', 'm')}`} />
          <Slider label={tr('Xavf: svetoforsiz', 'Risk without the light')} value={before} min={0} max={5} step={0.1} onChange={setBefore} display={`${fmt(before, 1)}%`} color="--bad" />
          <Slider label={tr('Xavf: svetofor bilan', 'Risk with the light')} value={after} min={0} max={5} step={0.1} onChange={setAfter} display={`${fmt(after, 1)}%`} color="--good" />
        </>
      }
    >
      <div className="grid gap-3 p-4 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-ink bg-surface2 p-3 text-center">
          <div className="text-xs font-semibold text-muted">{tr('Kutilgan foyda', 'Expected benefit')}</div>
          <div className="num font-display text-2xl font-bold">${fmt(benefit, 0)}</div>
        </div>
        <div className={`rounded-xl border-2 border-ink p-3 text-center text-[#111] ${benefit > cost ? 'bg-postit-green' : 'bg-postit-pink'}`}>
          <div className="text-xs font-semibold">{tr('Qaror', 'Decision')}</div>
          <div className="font-display text-2xl font-bold">{benefit > cost ? tr("O'rnating ✓", 'Install ✓') : tr("O'rnatmang ✗", "Don't install ✗")}</div>
        </div>
      </div>
    </Card>
  );
}
