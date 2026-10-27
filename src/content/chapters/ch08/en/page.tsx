import { useState } from 'react';
import { SupplyDemandGraph } from '../../../../components/graphs/SupplyDemandGraph';
import { TaxSizeLab } from '../../../../components/graphs/TaxSizeLab';
import { Callout, Slider } from '../../../../components/ui/Kit';
import { AskExperts, BookTable, BoxLink } from '../../../../components/ui/Lesson';
import { Math as M } from '../../../../components/ui/Math';
import { T } from '../../../../components/ui/Term';
import { demandFromQ, demandThrough, supplyFromQ, supplyThrough } from '../../../../lib/econ';
import { box, sec } from '../../../enPage';
import type { ChapterPageContent } from '../../../types';
import { baseD, baseS, dwlElasticities, taxWelfare } from '../presets';
import { checks } from '../quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        In 1776 Americans angered by British taxes started a revolution. More than two centuries later, taxes remain among the hottest political debates. Justice
        Oliver Wendell Holmes said: “Taxes are what we pay for civilized society.”
      </p>
      <p>
        Taxes pay for roads, schools, and hospitals. But what do they cost? This chapter's key conclusion: a tax takes <b>more</b> from buyers and sellers than the
        money the government collects. The difference is a loss that goes to nobody — it simply vanishes: the <b>deadweight loss</b>.
      </p>
    </div>
  );
}

const S81 = () => (
  <div className="prose-uz">
    <p>
      Recall from Chapter 6: a tax has the same final effect whether it is levied on buyers or sellers. It places a <b>wedge</b> between the price buyers pay and the
      price sellers receive and reduces the quantity sold — the market shrinks (Figure 1). To keep the graphs simple, this chapter doesn't show which curve shifts —
      only the wedge.
    </p>
  </div>
);

const S81a = () => (
  <div className="prose-uz">
    <p>
      To measure a tax's gains and losses we look at three parties: buyers (<T id="consumer-surplus" label="consumer surplus" />), sellers (
      <T id="producer-surplus" label="producer surplus" />), and the government. The government collects <T id="tax-revenue" />: <M tex="T \times Q" />. This money really
      benefits not the government but the people it is spent on (roads, police, education, welfare).
    </p>
    <SupplyDemandGraph config={taxWelfare} />
    <p>The accounting with the letters of Figure 3:</p>
    <BookTable
      head={['', 'Without Tax', 'With Tax', 'Change']}
      rows={[
        ['Consumer Surplus', 'A + B + C', 'A', '−(B + C)'],
        ['Producer Surplus', 'D + E + F', 'F', '−(D + E)'],
        ['Tax Revenue', 'none', 'B + D', '+(B + D)'],
        ['Total Surplus', 'A + B + C + D + E + F', 'A + B + D + F', '**−(C + E)**'],
      ]}
    />
    <p>
      The losses of buyers and sellers exceed the government's revenue by <b>C + E</b>. This fall in total surplus when a tax (or another policy) distorts an efficient
      market is the <T id="deadweight-loss" />.
    </p>
    <p>
      Why? One of the ten principles: <b>people respond to incentives</b>. A tax raises the buyers' price and lowers the sellers': buyers consume less and sellers produce
      less. The market shrinks below its optimum (Q₁ → Q₂). Because taxes distort incentives, resources are allocated inefficiently.
    </p>
  </div>
);

function MalikMei() {
  const [t, setT] = useState(0);
  const gains = 120 - 80;
  const deal = t < gains;
  return (
    <div className="not-prose card my-5 p-4">
      <div className="kicker mb-2">Malik and Mei: set the tax yourself</div>
      <Slider label="Tax on cleaning services" value={t} min={0} max={60} step={5} onChange={setT} display={`$${t}`} color="--tax" />
      <div className="mt-3 grid gap-2 text-sm sm:grid-cols-4">
        <div className="rounded-lg border-2 border-ink/30 p-2">Value to Mei: <b>$120</b></div>
        <div className="rounded-lg border-2 border-ink/30 p-2">Malik's cost: <b>$80</b></div>
        <div className="rounded-lg border-2 border-ink/30 p-2">Gains from trade: <b>$40</b></div>
        <div className={`rounded-lg border-2 border-ink p-2 font-semibold text-[#111] ${deal ? 'bg-postit-green' : 'bg-postit-pink'}`}>{deal ? `The deal happens: revenue $${t}, DWL $0` : `The deal is off: revenue $0, DWL $${gains}`}</div>
      </div>
      <p className="mt-3 text-sm">
        {deal
          ? `The tax ($${t}) is smaller than the gains from trade ($40) — Mei can pay Malik any price from $${80 + t} to $120 and both gain; the tax transfers part of their $40 gain to the government.`
          : `The tax ($${t}) exceeds the gain: Mei will pay at most $120, but after tax Malik would keep $${120 - t} — less than his $80 cost. For Malik to keep $80, Mei would have to pay $${80 + t} — more than $120. The deal disappears: each loses $20 and the government gets nothing — a pure $40 deadweight loss.`}
      </p>
    </div>
  );
}

const S81b = () => (
  <div className="prose-uz">
    <p>
      An example: every week Malik cleans Mei's house for $100. Malik's time is worth $80 and a clean house is worth $120 to Mei — each gains $20, for total gains from
      trade of $40. Now the government puts a <b>$50</b> tax on cleaners.
    </p>
    <MalikMei />
    <p>
      This is the real source of deadweight loss: <b>taxes prevent buyers and sellers from realizing some of the gains from trade</b>. In Figure 4, for each unit from Q₂ to
      Q₁ the value to buyers exceeds the cost to sellers, but the difference is smaller than the tax — so these trades don't happen. These lost gains are the DWL triangle.
    </p>
  </div>
);

const S82 = () => (
  <div className="prose-uz">
    <p>
      What determines whether the DWL is large or small? The answer: the <b>price elasticities of supply and demand</b>. In Figure 5 demand and the tax are the same and
      only the elasticity of supply differs (a, b); then supply is the same and the elasticity of demand differs (c, d).
    </p>
    <SupplyDemandGraph config={dwlElasticities} />
    <p>
      The lesson: a tax creates a DWL because it <b>changes the behavior</b> of buyers and sellers. The more responsive they are to the price, the more the equilibrium
      quantity shrinks. <b>The greater the elasticities, the greater the DWL.</b>
    </p>
    <Callout kind="exam">
      Keep two questions apart: (1) <b>who</b> pays (incidence) — the less elastic side; (2) <b>how much</b> is lost (the DWL) — the more elastic both sides are, the more.
      Elasticity is the key to both.
    </Callout>
    <BoxLink id="cs-dwl-debate">Case Study: The Deadweight Loss Debate</BoxLink>
  </div>
);

const S83 = () => (
  <div className="prose-uz">
    <p>Taxes rarely stay put. What happens to the DWL and to revenue when the size of a tax changes? Figure 6: a small, a medium, and a large tax.</p>
    <ul>
      <li>
        The <b>DWL</b> is a triangle, whose area depends on the <b>square</b> of its size. Double the tax and both the base and the height of the triangle double → the DWL
        rises <b>fourfold</b>. Triple it → <b>ninefold</b>.
      </li>
      <li>
        <b>Revenue</b> is the rectangle <M tex="T \times Q" />. At first it rises with the tax; but a very large tax shrinks the market sharply and revenue starts to fall.
        With an enormous tax people stop trading altogether — revenue is zero.
      </li>
    </ul>
    <TaxSizeLab demand={baseD} supply={baseS} xMax={100} yMax={10} startTax={2} />
    <p>The revenue curve in panel (e) is the <T id="laffer-curve" />.</p>
    <BoxLink id="cs-laffer">Case Study: The Laffer Curve and Supply-Side Economics</BoxLink>
  </div>
);

const S84 = () => (
  <div className="prose-uz">
    <p>
      A Chapter 1 principle: markets are usually a good way to organize economic activity. Chapter 7 made it precise using surplus. This chapter showed that when the
      government taxes a good, resources are allocated less efficiently. Taxes are costly not only because they transfer resources from market participants to the
      government but also because they <b>distort incentives and create deadweight losses</b>.
    </p>
    <p>
      That is not the end of the story: microeconomists study how to design a tax system that balances efficiency and equality (Chapter 13), and when there is a market
      failure, a well-designed tax can fix it (Chapter 10). Macroeconomists study how taxes affect the economy as a whole.
    </p>
  </div>
);

function DWLDebate() {
  return (
    <div className="prose-uz">
      <p>
        This theory bears on a deep political question: <b>how big should the government be?</b> If taxes create large DWLs, every government program costs more — an
        argument for smaller government. If the DWL is small, bigger government is cheaper. (Of course, the value of the programs is also part of the debate.)
      </p>
      <p>
        The most important tax is the <b>tax on labor</b> (Social Security, Medicare, income tax). For a typical worker the <T id="marginal-tax-rate" /> of all labor taxes
        together is about <b>40%</b>. The rate is known, but economists debate the DWL — because they disagree about the <b>elasticity of labor supply</b>.
      </p>
      <ul>
        <li>Those who say the <b>DWL is small</b>: most people work full time whatever the wage (especially middle-aged breadwinners) → supply is almost vertical.</li>
        <li>
          Those who say the <b>DWL is large</b>: some groups respond strongly — people who can choose extra hours; second earners in families (choosing between work at home and
          in the market); older people choosing when to retire; people who escape taxes in the <T id="underground-economy" />.
        </li>
      </ul>
      <p>
        In all these cases labor supply depends on the after-tax wage — so labor taxes encourage people to work less, stay home, retire early, and join the underground
        economy. When two politicians argue over “more services or lower taxes,” part of the argument is about this elasticity.
      </p>
    </div>
  );
}

function Laffer() {
  return (
    <div className="prose-uz">
      <p>
        In 1974 the economist Arthur Laffer sketched the relationship between tax rates and revenue on a napkin in a Washington restaurant — a curve like Figure 6(e). He
        claimed the U.S. was on the <b>downward-sloping</b> side, so cutting rates could raise revenue.
      </p>
      <p>
        Most economists agreed in theory but doubted it in practice. Still, the idea appealed to Ronald Reagan: there had been a 90% surtax during World War II; Reagan
        recalled that “you could only make four pictures and then you were in the top bracket, so we all quit working after four pictures.” Tax cuts became part of his
        1980 platform; the view came to be called <T id="supply-side-economics" />.
      </p>
      <ul>
        <li>Many economists believe later history refuted Laffer's conjecture; others read the 1980s as favoring the supporters.</li>
        <li>
          A middle view: an across-the-board tax cut normally lowers revenue, but cutting rates for those facing the <b>highest rates</b> may raise it. In Sweden in the early
          1980s the marginal rate was about <b>80%</b> — studies suggest a lower rate would have raised more revenue there.
        </li>
        <li>
          2016–2017: Laffer advised Donald Trump on large tax cuts; Trump said growth would be 3–6% and the deficit wouldn't rise. Most economists were skeptical and were proved
          right: growth over the next two years was <b>2.4%</b> and the deficit widened.
        </li>
      </ul>
      <p>
        The general lesson: how much the government gains or loses from a tax change can't be computed just by looking at tax rates — it depends on how the change affects
        people's behavior.
      </p>
      <AskExperts
        title="The Laffer Curve"
        source="IGM, 2012"
        statement="A cut in federal income tax rates in the United States right now would lead to higher national income within five years than without the tax cut."
        agree={43}
        uncertain={48}
        disagree={9}
      />
      <AskExperts
        title="The Laffer Curve"
        source="IGM, 2012"
        statement="A cut in federal income tax rates in the United States right now would raise taxable income enough so that the annual total tax revenue would be higher within five years than without the tax cut."
        agree={0}
        uncertain={4}
        disagree={96}
        note="Note: economists partly agree that tax cuts could raise **income**, but almost none believe they would raise **revenue**."
      />
    </div>
  );
}

const hotelD = demandThrough({ Q: 1000, P: 100 }, { Q: 900, P: 108 });
const hotelS = supplyThrough({ Q: 1000, P: 100 }, { Q: 900, P: 98 });
const HotelWidget = () => (
  <SupplyDemandGraph
    config={{ title: 'Problem 9 — Smalltown hotels', demand: hotelD, supply: hotelS, xMax: 1600, yMax: 200, modes: ['tax'], mode: 'tax', tax: 10, taxMax: 40, shiftControls: false, surplus: true, surplusOn: true, taxSideToggle: false, priceDigits: 0 }}
  />
);
const LafferWidget = () => <TaxSizeLab demand={demandFromQ(300, 1)} supply={supplyFromQ(0, 2)} xMax={320} yMax={320} startTax={200} />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    'Show how a tax affects consumer surplus, producer surplus, and government revenue using areas A–F',
    'Define **deadweight loss** and explain that its source is lost gains from trade',
    'Show how the DWL depends on the elasticities of supply and demand',
    'Compute that the DWL is proportional to the **square** of the tax (\\(DWL = \\tfrac12 T \\Delta Q\\))',
    'Evaluate the **Laffer curve** and the debate over supply-side economics',
  ],
  sections: [
    sec('s-8-1', '8-1', 'The Deadweight Loss of Taxation', S81),
    sec('s-8-1a', '8-1a', 'How a Tax Affects Market Participants', S81a, checks['s-8-1a']),
    sec('s-8-1b', '8-1b', 'Deadweight Losses and the Gains from Trade', S81b, checks['s-8-1b']),
    sec('s-8-2', '8-2', 'The Determinants of the Deadweight Loss', S82, checks['s-8-2']),
    sec('s-8-3', '8-3', 'Deadweight Loss and Tax Revenue as Taxes Vary', S83, checks['s-8-3']),
    sec('s-8-4', '8-4', 'Conclusion', S84),
  ],
  examTraps: [
    { title: 'The DWL formula', body: '\\(DWL = \\tfrac12 \\times T \\times \\Delta Q\\). Don’t forget the ½ — it is a triangle.' },
    { title: 'Quadratic growth', body: 'T × 2 → DWL × 4; T × 1.5 → DWL × 2.25 (QuickQuiz 8). Revenue grows **more slowly** than T (QuickQuiz 9).' },
    { title: 'The Figure 3 table', body: 'ΔCS = −(B+C), ΔPS = −(D+E), Revenue = B+D, DWL = C+E. This table often appears on exams.' },
    { title: 'When the DWL is zero', body: 'Perfectly inelastic supply or demand (a land tax) — DWL 0. If the deal happens anyway (Sophie and Sky) — DWL 0.' },
    { title: 'Laffer', body: 'Cutting a tax raises revenue only on the **downward-sloping** side of the curve. Problem 10: the peak is at T = 150.' },
  ],
  mistakes: [
    { wrong: '“DWL = tax revenue.”', right: 'Revenue is money passed to the government (B + D). The DWL is a loss passed to nobody (C + E).' },
    { wrong: '“Doubling a tax doubles revenue.”', right: 'Because the quantity falls, revenue rises by **less** than double.' },
    { wrong: '“Taxing an elastic market is good — lots of revenue.”', right: 'In an elastic market the quantity shrinks a lot: little revenue, a large DWL.' },
    { wrong: '“A subsidy is a reverse tax, so it reduces the DWL.”', right: 'A subsidy also distorts the market and creates a DWL (overproduction).' },
    { wrong: '“If the seller pays the tax but the price doesn’t change, there is a DWL.”', right: 'If the deal happens and the quantity doesn’t change, the DWL = 0 (just a redistribution).' },
  ],
  boxes: [box('cs-dwl-debate', 'Case Study', 'The Deadweight Loss Debate', DWLDebate), box('cs-laffer', 'Case Study', 'The Laffer Curve and Supply-Side Economics', Laffer)],
  summary: [
    'A tax on a good reduces the welfare of buyers and sellers, and the fall in consumer and producer surplus usually exceeds the revenue raised by the government. The fall in total surplus (CS + PS + revenue) is the **deadweight loss** of the tax.',
    'Taxes have deadweight losses because they cause buyers to consume less and sellers to produce less, shrinking the market below the level that maximizes total surplus. The greater the elasticities, the greater the deadweight loss.',
    'As a tax grows larger, it distorts incentives more and its deadweight loss grows quickly. Tax revenue first rises with the size of the tax, but eventually a large enough tax shrinks the market so much that revenue falls (the Laffer curve).',
  ],
  widgets: { hotel: HotelWidget, laffer: LafferWidget },
  gallery: [{ title: 'Tax Size Lab: the DWL and the Laffer curve', Component: () => <TaxSizeLab demand={baseD} supply={baseS} xMax={100} yMax={10} startTax={2} /> }],
};
