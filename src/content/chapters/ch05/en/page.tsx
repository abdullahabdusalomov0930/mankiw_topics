import { ElasticityCalculator, ElasticityCategories, ElasticityLab } from '../../../../components/graphs/ElasticityLab';
import { SupplyDemandGraph } from '../../../../components/graphs/SupplyDemandGraph';
import { Callout } from '../../../../components/ui/Kit';
import { BookTable, BoxLink, Source } from '../../../../components/ui/Lesson';
import { Math as M } from '../../../../components/ui/Math';
import { T } from '../../../../components/ui/Term';
import { box, sec } from '../../../enPage';
import type { ChapterPageContent } from '../../../types';
import { drugs, opec, wheat } from '../presets';
import { checks } from '../quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        The price of gasoline rises 10%. People will buy less fuel — that much is clear. But <b>how much</b> less? 1% or 20%? The answer matters for the
        government's tax policy, for the gas-station owner, and for Uber.
      </p>
      <p>
        Studies show that when gasoline gets 10% more expensive, consumption falls about <b>2.5%</b> after a year and about <b>6%</b> after five years: people
        first drive less, then switch to fuel-efficient or electric cars. This measure of “how responsive” is <T id="elasticity" />.
      </p>
    </div>
  );
}

const S51a = () => (
  <div className="prose-uz">
    <p>
      The law of demand says that when the price falls, the quantity demanded rises. The <T id="price-elasticity-of-demand" /> measures <b>how much</b> it rises. If
      quantity responds strongly to the price, demand is <b>elastic</b>; if weakly, <b>inelastic</b> (<T id="elastic-inelastic" label="elastic/inelastic" />).
    </p>
    <p>There is no universal rule, but there are four rules of thumb (<T id="determinants-elasticity" label="determinants" />):</p>
    <ul>
      <li>
        <b>Availability of close substitutes.</b> When butter gets pricier many people switch to margarine — demand is elastic. Eggs have no close substitute —
        demand is inelastic.
      </li>
      <li>
        <b>Necessities versus luxuries.</b> People still go to the doctor when visits cost more (inelastic); when sailboats get pricier, far fewer are bought
        (elastic). It depends not on the good itself but on the buyer's preferences: for an avid sailor a boat may be a necessity.
      </li>
      <li>
        <b>Definition of the market.</b> “Food” is broad with no substitute — inelastic; “ice cream” narrower — more elastic; “vanilla ice cream” very narrow — very
        elastic.
      </li>
      <li>
        <b>Time horizon.</b> Demand is more elastic over longer periods: when gasoline gets pricier, people drive a bit less at first, but over the years they change
        cars, carpool, and move closer to work.
      </li>
    </ul>
  </div>
);

const S51b = () => (
  <div className="prose-uz">
    <p>The formula:</p>
    <M tex="\text{Price elasticity of demand} = \frac{\text{Percentage change in quantity demanded}}{\text{Percentage change in price}}" display />
    <p>
      If the price of ice cream rises 10% and you buy 20% less, the elasticity is <M tex="20/10 = 2" /> — quantity changes twice as strongly as the price. Because
      price and quantity move in opposite directions the result is negative, but the book (and the exam) drops the minus sign and reports the <b>absolute
      value</b>. A larger number = a stronger response.
    </p>
  </div>
);

const S51c = () => (
  <div className="prose-uz">
    <p>
      The problem: going from A ($4, 120) to B ($6, 80), the price rises 50% and the quantity falls 33% → E = 0.66. Going back from B to A, the price falls 33% and
      the quantity rises 50% → E = 1.5. The same event, two different answers — because the percentages are computed from different bases.
    </p>
    <p>
      The <T id="midpoint-method" /> divides the change by the <b>average</b> rather than the starting value: the midpoint of $4 and $6 is $5, so the change is 40% in
      both directions. For quantity the midpoint is 100, and the change is also 40%. The elasticity is 1, whichever way you go.
    </p>
    <M tex="E_d = \frac{(Q_2 - Q_1)/[(Q_2 + Q_1)/2]}{(P_2 - P_1)/[(P_2 + P_1)/2]}" display />
    <p>Pick two points in the lab below — the calculation is shown step by step:</p>
    <ElasticityLab start={[4, 5]} />
    <Callout kind="exam">
      The book: “If you ever need to calculate elasticities, use this formula.” Unless told otherwise on an exam, always use the <b>midpoint</b> method and report
      a positive number.
    </Callout>
  </div>
);

const S51d = () => (
  <div className="prose-uz">
    <p>
      Demand curves are classified by elasticity: E &gt; 1 — <b>elastic</b>, E &lt; 1 — <b>inelastic</b>, E = 1 — <T id="unit-elastic" />. The extreme cases: E = 0 —{' '}
      <T id="perfectly-inelastic" /> (a vertical line), E → ∞ — <T id="perfectly-elastic" /> (a horizontal line).
    </p>
    <p>A useful rule: the <b>flatter</b> the curve at a given point, the greater the elasticity; the <b>steeper</b>, the smaller.</p>
    <ElasticityCategories />
    <Callout kind="tip" title="A way to remember">
      An <b>I</b>nelastic curve looks like the letter “<b>I</b>” — steep (fully vertical if perfectly inelastic). The book suggests the same: “not a deep insight,
      but it might help on your next exam.”
    </Callout>
  </div>
);

const S51e = () => (
  <div className="prose-uz">
    <p>
      <T id="total-revenue" label="Total revenue" /> is the amount buyers pay and sellers receive: <M tex="TR = P \times Q" />. On a graph it is the rectangle under the
      demand curve (Figure 2: $4 × 100 = $400).
    </p>
    <p>How does revenue change when the price changes? It depends on elasticity (Figure 3):</p>
    <ul>
      <li>
        <b>Inelastic</b> (E &lt; 1): the price goes $4 → $5 and the quantity 100 → 90, so revenue goes <b>$400 → $450</b>. The gain from the higher price (area A)
        exceeds the loss from the smaller quantity (B).
      </li>
      <li>
        <b>Elastic</b> (E &gt; 1): the price goes $4 → $5 and the quantity 100 → 70, so revenue goes <b>$400 → $350</b>.
      </li>
    </ul>
    <BookTable
      head={['Demand', 'Price ↑ ⇒ Total revenue', 'Price ↓ ⇒ Total revenue']}
      rows={[
        ['Inelastic (E < 1)', '↑ (same direction)', '↓'],
        ['Unit elastic (E = 1)', 'unchanged', 'unchanged'],
        ['Elastic (E > 1)', '↓ (opposite)', '↑'],
      ]}
    />
    <Callout kind="exam">
      This is the rule examined most often: <b>inelastic — price and revenue move together; elastic — in opposite directions</b>. Try it with the rectangles in the lab.
    </Callout>
    <BoxLink id="fyi-elasticities">FYI: A Few Elasticities from the Real World</BoxLink>
  </div>
);

const S51f = () => (
  <div className="prose-uz">
    <p>
      A linear demand curve has a constant slope: in Figure 4, a $1 rise in the price always lowers the quantity by 2. But the <b>elasticity is not constant</b>:
      slope is the ratio of changes, elasticity the ratio of <i>percentage</i> changes.
    </p>
    <BookTable
      caption="Figure 4 table: Q = 14 − 2P"
      head={['Price', 'Quantity', 'Total Revenue', 'Elasticity (midpoint)', 'Description']}
      rows={[
        ['$7', '0', '$0', '13.0 ($7→$6)', 'Elastic'],
        ['$6', '2', '$12', '3.7 ($6→$5)', 'Elastic'],
        ['$5', '4', '$20', '1.8 ($5→$4)', 'Elastic'],
        ['$4', '6', '$24', '1.0 ($4→$3)', 'Unit elastic'],
        ['$3', '8', '$24', '0.6 ($3→$2)', 'Inelastic'],
        ['$2', '10', '$20', '0.3 ($2→$1)', 'Inelastic'],
        ['$1', '12', '$12', '0.1 ($1→$0)', 'Inelastic'],
        ['$0', '14', '$0', '', ''],
      ]}
    />
    <p>
      The reason is the arithmetic of percentages. When the price is low and the quantity high, a $1 price increase is a large percentage and a 2-unit fall a small
      one → a small elasticity. When the price is high and the quantity low — the reverse. Revenue follows: raising the price from $1 to $2 raises revenue
      (inelastic), from $5 to $6 lowers it (elastic), and at $3 and $4 it is the same ($24).
    </p>
    <ElasticityLab start={[1, 2]} title="Figure 4 — Elasticity along a linear demand curve" />
    <p>The lesson: a linear demand curve never has a constant elasticity; a curve with a constant elasticity is a special case.</p>
  </div>
);

const S51g = () => (
  <div className="prose-uz">
    <p>
      <b>Income elasticity</b> — the <T id="income-elasticity" />:
    </p>
    <M tex="\text{Income elasticity of demand} = \frac{\%\,\Delta\, Q^D}{\%\,\Delta\, \text{Income}}" display />
    <ul>
      <li><b>Positive</b> for normal goods, <b>negative</b> for inferior goods (bus rides).</li>
      <li>
        Small for necessities (food): <T id="engels-law" /> — as a family gets richer, the share of its income spent on food falls (E_I &lt; 1). Large for luxuries
        (diamonds, sailboats).
      </li>
    </ul>
    <p>
      <b>Cross-price elasticity</b> — the <T id="cross-price-elasticity" />:
    </p>
    <M tex="\text{Cross-price elasticity} = \frac{\%\,\Delta\, Q^D_{\text{good 1}}}{\%\,\Delta\, P_{\text{good 2}}}" display />
    <p>
      <b>Positive</b> — substitutes (hot dogs pricier → more hamburgers); <b>negative</b> — complements (computers pricier → less software).
    </p>
    <ElasticityCalculator />
  </div>
);

const S52a = () => (
  <div className="prose-uz">
    <p>
      The <T id="price-elasticity-of-supply" /> measures how much the quantity supplied responds to the price. It depends on sellers' <b>flexibility</b> to change
      output: beachfront land is inelastic (Mark Twain: “Buy land, they're not making it anymore”); books, cars, and TVs are elastic (factories can run longer).
    </p>
    <p>
      The key factor is <b>time</b>. In the short run firms can extend shifts but cannot change the size of their factories. In the long run new factories are built
      and old ones closed, new firms enter and old ones exit — supply is much more elastic.
    </p>
  </div>
);

const S52b = () => (
  <div className="prose-uz">
    <M tex="E_s = \frac{\%\,\Delta\, Q^S}{\%\,\Delta\, P}" display />
    <p>
      Example: milk goes $2.85 → $3.15 and production 9,000 → 11,000 gallons. Midpoint: <M tex="\%\Delta P = 0.30/3.00 = 10\%" />,{' '}
      <M tex="\%\Delta Q = 2000/10000 = 20\%" />, <M tex="E_s = 2" /> — quantity changes twice as much as the price.
    </p>
  </div>
);

const S52c = () => (
  <div className="prose-uz">
    <p>
      Supply curves also come in five types (Figure 5): E = 0 — vertical, E → ∞ — horizontal. Choose <b>Supply</b> in the “Figures 1 & 5” widget above.
    </p>
    <p>
      In some markets the elasticity <b>changes</b> along the curve (Figure 6). When factories have limited capacity, there is spare capacity at low quantities: a
      small price rise raises output sharply — elastic. Near the capacity limit, new factories must be built, which requires a much higher price — inelastic.
    </p>
    <BookTable
      caption="Figure 6 numbers (midpoint)"
      head={['Price change', 'Quantity change', 'Elasticity']}
      rows={[
        ['$3 → $4 (+29%)', '100 → 200 (+67%)', '≈ 2.3 — elastic'],
        ['$12 → $15 (+22%)', '500 → 525 (+5%)', '≈ 0.2 — inelastic'],
      ]}
    />
  </div>
);

const S53a = () => (
  <div className="prose-uz">
    <p>
      You are a wheat farmer in Kansas. A university develops a new hybrid that raises yields by <b>20%</b>. Should you plant it? Will the discovery make you richer?
      Three steps: (1) the hybrid affects <b>supply</b>; (2) supply shifts <b>right</b>; (3) the price goes $3 → $2 and the quantity 100 → 110.
    </p>
    <SupplyDemandGraph config={wheat} />
    <p>
      Wheat is a staple — cheap, with few substitutes — so demand is <b>inelastic</b>. With inelastic demand a lower price lowers revenue: <b>$300 → $220</b>. The new
      hybrid made farmers poorer!
    </p>
    <p>
      Then why plant it? Each farmer is a tiny part of the market and takes the price as given (a price taker): at any price, selling more is better. But when all
      of them do it, the price falls and they all lose.
    </p>
    <p>
      This explains a historical shift: in 1900, <b>12 million</b> Americans (40% of the labor force) worked on farms; in 2020, <b>3 million</b> (2%). Technology raised
      supply, inelastic demand lowered revenue, and people left farming — yet they fed four times as many people. That is why some government programs pay farmers
      <b> not to plant</b>: less supply → a higher price → more total revenue. But it comes at the expense of consumers (pricier food) and taxpayers.
    </p>
    <Callout kind="uz">
      Think of grain or cotton in Uzbekistan: if every farm sharply raised its harvest in one year and prices were free, would that be “good news” for farmers?
      The answer depends on the elasticity of demand — and on the chance to export (Chapter 9).
    </Callout>
  </div>
);

const S53b = () => (
  <div className="prose-uz">
    <p>
      In the 1970s OPEC jointly cut the supply of oil and raised its price: the real price rose more than <b>50%</b> in 1973–74 and <b>doubled</b> in 1979–81. But in
      1982–85 the price fell about 10% a year, and in 1986 cooperation broke down and the price collapsed <b>45%</b>; by 1990 the real price was back to its 1970
      level.
    </p>
    <p>
      The reason is the difference between short- and long-run elasticities. <b>In the short run</b> oil reserves, pumping capacity, and habits can't change quickly —
      both curves are steep, so a small shift raises the price a lot. <b>In the long run</b> producers outside OPEC explore and drill more, and consumers switch to
      fuel-efficient cars — the curves flatten, and the same shift raises the price only a little.
    </p>
    <SupplyDemandGraph config={opec} />
    <p>
      In the first two decades of the 21st century oil prices swung sharply again, but the main cause was not OPEC: booms and busts in the world economy (demand) and
      fracking technology (supply). In the future the main force will be the move away from fossil fuels because of climate change.
    </p>
  </div>
);

const S53c = () => (
  <div className="prose-uz">
    <p>
      The government spends billions to stop drugs entering the country (interdiction). Does it reduce crime? Interdiction affects <b>sellers</b>: their costs rise,
      supply shifts left, the price rises, and the quantity falls — drug use falls.
    </p>
    <p>
      But addicts rarely quit because of a higher price — demand is <b>inelastic</b>. So the price rises by a larger percentage than the quantity falls, and users pay{' '}
      <b>more in total</b>. Crime to raise the money may rise. (This leaves out the harm that enforcement itself can do to some communities.)
    </p>
    <SupplyDemandGraph config={drugs} />
    <p>
      The alternative is to reduce <b>demand</b> (drug education, legalizing some soft drugs): demand shifts left, and price, quantity, and total spending all fall —
      both use and crime fall.
    </p>
    <p>
      Supporters of interdiction argue that demand may be more elastic in the long run — high prices deter young people from trying drugs, and over time there are
      fewer addicts. Then interdiction could raise crime in the short run and lower it in the long run.
    </p>
    <BoxLink id="news-rideshare">In the News: Elasticity of Supply and Demand in the Ride-share Market</BoxLink>
  </div>
);

const S54 = () => (
  <div className="prose-uz">
    <p>
      An old joke says that even a parrot can become an economist by learning to say “supply and demand.” These two chapters show there is much truth in it: supply,
      demand, and elasticity are the most useful tools for analyzing events and policies in the economy. You are on your way to becoming an economist (or at least a
      well-educated parrot).
    </p>
  </div>
);

function FYIElasticities() {
  return (
    <div className="prose-uz">
      <p>Economists estimate elasticities from market data with statistical methods. From various studies:</p>
      <BookTable
        head={['Good', 'Price elasticity of demand', '']}
        rows={[
          ['Eggs', '0.1', 'Very inelastic'],
          ['Healthcare', '0.2', ''],
          ['Cigarettes', '0.4', ''],
          ['Rice', '0.5', ''],
          ['Housing', '0.7', ''],
          ['Beef', '1.6', ''],
          ['Peanut Butter', '1.7', ''],
          ['Restaurant Meals', '2.3', ''],
          ['Cheerios', '3.7', ''],
          ['Mountain Dew', '4.4', 'Very elastic'],
        ]}
      />
      <p>
        Treat these numbers with care: statistical methods (<T id="econometrics" />) rest on assumptions about the world that may not always hold. Moreover, the
        elasticity need not be the same at every point on a curve. So don't be surprised when different studies find different elasticities for the same good.
      </p>
      <Callout kind="tip">Notice that narrowly defined brands (Cheerios, Mountain Dew) are the most elastic and basic necessities (eggs, health care) the least — exactly the determinants of 5-1a at work.</Callout>
    </div>
  );
}

function RideShare() {
  return (
    <div className="prose-uz">
      <Source>Austan Goolsbee, “Passengers May Pay a Lot More. Drivers Won't Accept Much Less.,” New York Times, 2019 — summarized.</Source>
      <p>
        Uber and Lyft lost money for many years. Where will future profits come from — will riders pay more, or drivers earn less? Goolsbee's answer: “relative price
        sensitivity.”
      </p>
      <ul>
        <li>Riders are <b>inelastic</b>: when the price rises 10% (surge pricing), demand falls only about 5%.</li>
        <li>
          Drivers are <b>very elastic</b>: when pay rises 10% they work 20% more hours — a response four times stronger than riders'. Entry is free: when pay rises,
          new drivers come in and push average pay back to the “outside option” (the 1848 California gold rush: miners' earnings fell from $20 to $3 because so many
          people came).
        </li>
        <li>
          The conclusion: because drivers are four times more sensitive, about <b>80%</b> of the price burden falls on riders and <b>20%</b> on drivers — exactly the
          tax-incidence logic of Chapter 6.
        </li>
      </ul>
      <Callout kind="tip" title="Questions to discuss">
        <ol>
          <li>If ride-share prices rose 10%, how much less would you use them? What is your elasticity?</li>
          <li>Why do you think supply is more elastic than demand in this market?</li>
        </ol>
      </Callout>
    </div>
  );
}

const Calc = () => <ElasticityCalculator />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    'Define the **price elasticity of demand** and know its four determinants',
    'Compute the elasticity between two points with the **midpoint method**',
    'Draw the five kinds of demand and supply curves (perfectly inelastic → perfectly elastic)',
    'Apply the link between elasticity and **total revenue**; explain why elasticity changes along a linear demand curve',
    'Tell the type of good from the sign of the **income** and **cross-price elasticities**',
    'Analyze farming, OPEC, and illegal drugs with supply, demand, and elasticity',
  ],
  sections: [
    sec('s-5-1a', '5-1a', 'The Price Elasticity of Demand and Its Determinants', S51a, checks['s-5-1a']),
    sec('s-5-1b', '5-1b', 'The Price Elasticity of Demand, with Numbers', S51b),
    sec('s-5-1c', '5-1c', 'The Midpoint Method', S51c, checks['s-5-1c']),
    sec('s-5-1d', '5-1d', 'The Variety of Demand Curves', S51d, checks['s-5-1d']),
    sec('s-5-1e', '5-1e', 'Total Revenue and the Price Elasticity of Demand', S51e, checks['s-5-1e']),
    sec('s-5-1f', '5-1f', 'Elasticity and Total Revenue along a Linear Demand Curve', S51f, checks['s-5-1f']),
    sec('s-5-1g', '5-1g', 'Other Demand Elasticities', S51g, checks['s-5-1g']),
    sec('s-5-2a', '5-2a', 'The Price Elasticity of Supply and Its Determinants', S52a),
    sec('s-5-2b', '5-2b', 'The Price Elasticity of Supply, with Numbers', S52b),
    sec('s-5-2c', '5-2c', 'The Variety of Supply Curves', S52c, checks['s-5-2b']),
    sec('s-5-3a', '5-3a', 'Can Good News for Farming Be Bad News for Farmers?', S53a, checks['s-5-3a']),
    sec('s-5-3b', '5-3b', 'Why Has OPEC Failed to Keep the Price of Oil High?', S53b, checks['s-5-3b']),
    sec('s-5-3c', '5-3c', 'Does Drug Interdiction Increase or Decrease Drug-Related Crime?', S53c, checks['s-5-3c']),
    sec('s-5-4', '5-4', 'Conclusion', S54),
  ],
  examTraps: [
    { title: 'The midpoint method', body: 'Divide by the **average**: \\((X_2 - X_1)/[(X_1 + X_2)/2]\\). Report a positive number.' },
    { title: 'Elasticity ≠ slope', body: 'On linear demand the slope is constant but elasticity is not: elastic at the top, inelastic at the bottom, unit in the middle.' },
    { title: 'The revenue rule', body: 'Inelastic: P ↑ → TR ↑. Elastic: P ↑ → TR ↓. Unit: TR unchanged.' },
    { title: 'When the sign matters', body: '**Income elasticity**: negative → inferior. **Cross-price**: positive → substitutes, negative → complements. For the price elasticity the sign is dropped.' },
    { title: 'Time', body: 'Both demand and supply are more elastic **in the long run** (OPEC, gasoline, rents).' },
    { title: 'The farm paradox', body: 'Supply ↑ + inelastic demand → revenue ↓. But each farmer is a price taker, so each still adopts the technology.' },
  ],
  mistakes: [
    { wrong: '“A steep demand curve is elastic.”', right: 'Steep is **inelastic** (the letter I). Flat is elastic.' },
    { wrong: '“E = ΔQ/ΔP.”', right: 'E is the ratio of **percentage** changes: %ΔQ/%ΔP.' },
    { wrong: '“A higher price always raises revenue.”', right: 'Only when demand is inelastic.' },
    { wrong: '“An income elasticity of 0.5 means an inferior good.”', right: 'Positive means normal (a necessity). Inferior is **negative**.' },
    { wrong: '“A positive cross-price elasticity means complements.”', right: 'Positive means **substitutes**.' },
    { wrong: '“Perfectly elastic demand is a vertical line.”', right: 'Perfectly elastic is **horizontal**; vertical is perfectly inelastic.' },
  ],
  boxes: [
    box('fyi-elasticities', 'FYI', 'A Few Elasticities from the Real World', FYIElasticities),
    box('news-rideshare', 'In the News', 'Elasticity of Supply and Demand in the Ride-share Market', RideShare),
  ],
  summary: [
    'The **price elasticity of demand** measures how much the quantity demanded responds to changes in the price. Demand tends to be more elastic if close substitutes are available, if the good is a luxury rather than a necessity, if the market is narrowly defined, or if buyers have substantial time to react to a price change.',
    'It is calculated as the percentage change in quantity demanded divided by the percentage change in price. If quantity moves proportionately less than the price, the elasticity is below 1 and demand is **inelastic**; if it moves proportionately more, the elasticity is above 1 and demand is **elastic**.',
    '**Total revenue** is the price paid for a good times the quantity sold. For inelastic demand curves, total revenue moves in the same direction as the price; for elastic demand curves, in the opposite direction.',
    'The **income elasticity** of demand measures how much the quantity demanded responds to changes in consumers’ income; the **cross-price elasticity** measures how much the quantity demanded of one good responds to changes in the price of another.',
    'The **price elasticity of supply** measures how much the quantity supplied responds to changes in the price. It often depends on the time horizon: in most markets supply is more elastic in the long run than in the short run.',
    'It is calculated as the percentage change in quantity supplied divided by the percentage change in price: below 1 — inelastic, above 1 — elastic.',
    'The tools of supply and demand can be applied in many markets: this chapter analyzed the markets for wheat, oil, and illegal drugs.',
  ],
  widgets: { calc: Calc },
  gallery: [
    { title: 'Elasticity Lab: the midpoint method and total revenue', Component: () => <ElasticityLab /> },
    { title: 'The five kinds of elasticity (demand and supply)', Component: () => <ElasticityCategories /> },
    { title: 'Midpoint calculator', Component: () => <ElasticityCalculator /> },
  ],
};
