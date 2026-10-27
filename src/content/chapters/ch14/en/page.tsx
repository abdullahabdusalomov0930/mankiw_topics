import { CostCurvesLab, LongRunATC, ProductionFunctionLab, ProfitViews } from '../../../../components/graphs/CostWidgets';
import { Callout } from '../../../../components/ui/Kit';
import { BookTable, BoxLink, Source } from '../../../../components/ui/Lesson';
import { Math as M } from '../../../../components/ui/Math';
import { T } from '../../../../components/ui/Term';
import { box, sec } from '../../../enPage';
import type { ChapterPageContent } from '../../../types';
import { checks } from '../quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        The economy has thousands of firms: General Motors makes cars and General Mills makes cereal — giants with thousands of workers and shareholders; the corner store, barbershop,
        or café — small firms owned by a single family. In earlier chapters we summarized firms' decisions with the supply curve. Now we study the decisions behind the supply curve —{' '}
        <b>industrial organization</b>: how does the number of firms in a market affect prices and efficiency?
      </p>
      <p>
        First, costs. The book says frankly that this topic is somewhat technical, even dull. But the more interesting chapters that follow (competition, monopoly, oligopoly) are built
        on exactly this foundation. A samsa shop in Tashkent and a car plant in Andijan obey the same cost curves.
      </p>
    </div>
  );
}

const S141a = () => (
  <div className="prose-uz">
    <p>
      Chloe's cookie factory. Economists assume the firm's goal is to maximize profit. <T id="total-revenue" /> is what it receives from sales (10,000 × $2 = $20,000),{' '}
      <T id="total-cost" /> is the market value of its inputs, and <T id="profit" /> = TR − TC.
    </p>
  </div>
);

const S141b = () => (
  <div className="prose-uz">
    <p>
      The cost of something is what you give up to get it. <T id="explicit-costs" /> require an outlay of money ($1,000 for flour, wages). <T id="implicit-costs" /> don't: Chloe could
      earn $100 an hour as a programmer; every hour she works at the factory she gives up that $100. Economists count both (it affects decisions: if programmers earned $300, Chloe
      might close the factory); accountants count only explicit costs.
    </p>
  </div>
);

const S141c = () => (
  <div className="prose-uz">
    <p>
      Chloe bought the factory with $300,000 of her savings; at 5% interest she would have earned $15,000 a year — an implicit cost the accountant doesn't see. If it was $100,000 of her
      own money and a $200,000 bank loan (5%): the accountant sees $10,000 of loan interest; for the economist the cost of capital is still <b>$15,000</b> ($10,000 explicit + $5,000
      implicit).
    </p>
  </div>
);

const S141d = () => (
  <div className="prose-uz">
    <p>
      <T id="economic-profit" /> = TR − (explicit + implicit); <T id="accounting-profit" /> = TR − explicit. Accounting profit is always larger. If economic profit is positive the
      firm stays (all opportunity costs are covered with a reward left for the owner); if it is negative (an economic loss), the owners will eventually exit unless conditions change.
    </p>
    <ProfitViews />
  </div>
);

const S142a = () => (
  <div className="prose-uz">
    <p>
      The short run: Chloe's factory size is fixed; she varies only the number of workers. The relationship between workers and output is the <T id="production-function" />. The{' '}
      <T id="marginal-product" /> is the output an extra worker adds. It falls: 50, 40, 30, 20, 10, 5 — <T id="diminishing-marginal-product" />: workers share equipment and the kitchen
      gets crowded.
    </p>
    <BookTable
      caption="Table 1 — A Production Function and Total Cost: Chloe's Cookie Factory"
      head={['Workers', 'Output (cookies/hour)', 'Marginal product', 'Cost of factory', 'Cost of workers', 'Total cost']}
      rows={[
        ['0', '0', '', '$30', '$0', '$30'],
        ['1', '50', '50', '30', '10', '40'],
        ['2', '90', '40', '30', '20', '50'],
        ['3', '120', '30', '30', '30', '60'],
        ['4', '140', '20', '30', '40', '70'],
        ['5', '150', '10', '30', '50', '80'],
        ['6', '155', '5', '30', '60', '90'],
      ]}
    />
  </div>
);

const S142b = () => (
  <div className="prose-uz">
    <p>
      The factory costs $30/hour, a worker $10/hour. The key relationship is between output (column 2) and total cost (column 6): the <b>total-cost curve</b>. It gets steeper while the
      production function gets flatter — for one reason: in a crowded kitchen extra cookies take a lot of labor.
    </p>
    <ProductionFunctionLab />
  </div>
);

const S143a = () => (
  <div className="prose-uz">
    <p>
      Chloe's neighbor is <b>Caleb's Coffee Shop</b>. His costs fall into two types: <T id="fixed-costs" /> (rent, a full-time bookkeeper — $3.00) and <T id="variable-costs" /> (coffee
      beans, milk, sugar, cups, extra workers). TC = FC + VC.
    </p>
  </div>
);

const S143b = () => (
  <div className="prose-uz">
    <p>Caleb asks two questions: “how much does a typical cup cost?” and “how much does one more cup cost?” The answers differ:</p>
    <ul>
      <li>
        <T id="average-total-cost" /> <M tex="ATC = TC/Q" /> = <T id="average-fixed-cost" /> + <T id="average-variable-cost" />. 2 cups: $3.80 / 2 = $1.90.
      </li>
      <li>
        <T id="marginal-cost" /> <M tex="MC = \Delta TC / \Delta Q" />. 2 → 3 cups: $4.50 − $3.80 = $0.70.
      </li>
    </ul>
  </div>
);

const S143c = () => (
  <div className="prose-uz">
    <p>Three properties (Figure 4):</p>
    <ol>
      <li><b>Rising marginal cost</b>: with little coffee the equipment is idle — an extra worker adds a lot, MC is small; with lots of coffee it's crowded — MC is large.</li>
      <li>
        <b>U-shaped ATC</b>: AFC always falls, AVC rises — a “tug-of-war.” The minimum is the <T id="efficient-scale" />: for Caleb 5 or 6 cups, ATC $1.30.
      </li>
      <li>
        <b>MC crosses ATC at its minimum</b>: MC &lt; ATC — ATC falls; MC &gt; ATC — it rises. Analogy: your GPA is ATC, your grade in the next course is MC; a low grade lowers your GPA,
        a high grade raises it.
      </li>
    </ol>
    <CostCurvesLab />
    <Callout kind="exam">
      If fixed cost (a license, a lump-sum tax) rises, only <b>AFC and ATC</b> shift (QQ 7). A per-unit tax shifts <b>AVC, ATC, and MC</b> (Problem 8).
    </Callout>
  </div>
);

const S143d = () => (
  <div className="prose-uz">
    <p>
      In real firms marginal product may not fall right away: the 2nd or 3rd worker adds more than the first — the team divides up tasks. In such a firm MC and AVC first fall and then rise
      (Figure 5, Nimbus — Problem 4). But the three properties hold: MC <b>eventually</b> rises; ATC is U-shaped; MC crosses ATC at its minimum.
    </p>
  </div>
);

const S144a = () => (
  <div className="prose-uz">
    <p>
      Ford can't change the number and size of its factories within a few months — in the short run they are a fixed cost. Over several years it can expand, build new ones, or close
      some — in the long run they are a variable cost. That is why the SR and LR curves differ: LR ATC is a flatter U, and every SR curve lies on or above it — in the long run the firm
      chooses whichever SR curve it wants.
    </p>
    <LongRunATC />
    <p>How long does it take to reach the long run? It depends on the firm: a car maker needs a year or more for a new factory; a coffee shop can get a new espresso machine in a few days.</p>
  </div>
);

const S144b = () => (
  <div className="prose-uz">
    <p>
      The shape of LR ATC tells us about the firm's scale: if it falls — <T id="economies-of-scale-lr" />; if it rises — <T id="diseconomies-of-scale" />; if it stays the same —{' '}
      <T id="constant-returns-to-scale" />. The reasons: large output allows specialization (the assembly line); in a very large organization managers become overstretched and can't
      control costs. That is why LR ATC is often U-shaped too.
    </p>
    <BoxLink id="fyi-pin">FYI: Lessons from a Pin Factory</BoxLink>
  </div>
);

const S145 = () => (
  <div className="prose-uz">
    <BookTable
      caption="Table 3 — The Many Types of Cost: A Summary"
      head={['Term', 'Definition', 'Math']}
      rows={[
        ['Explicit costs', 'Costs that require an outlay of money by the firm', ''],
        ['Implicit costs', 'Costs that do not require an outlay of money by the firm', ''],
        ['Fixed costs', 'Costs that do not vary with the quantity of output produced', 'FC'],
        ['Variable costs', 'Costs that vary with the quantity of output produced', 'VC'],
        ['Total cost', 'The market value of all the inputs that a firm uses in production', '\\(TC = FC + VC\\)'],
        ['Average fixed cost', 'Fixed cost divided by the quantity of output', '\\(AFC = FC/Q\\)'],
        ['Average variable cost', 'Variable cost divided by the quantity of output', '\\(AVC = VC/Q\\)'],
        ['Average total cost', 'Total cost divided by the quantity of output', '\\(ATC = TC/Q\\)'],
        ['Marginal cost', 'The increase in total cost that arises from an extra unit of production', '\\(MC = \\Delta TC/\\Delta Q\\)'],
      ]}
    />
    <p>Cost curves alone don't tell us what a firm will decide, but they are a key ingredient — the next chapter shows how.</p>
  </div>
);

function PinFactory() {
  return (
    <div className="prose-uz">
      <p>
        “Jack of all trades, master of none.” To be productive a worker must master a few tasks thoroughly — possible only when a firm hires many workers and produces a lot.
      </p>
      <p>
        In <i>The Wealth of Nations</i> Adam Smith described a pin factory: one man draws out the wire, another straightens it, a third cuts it, a fourth points it, a fifth grinds the top;
        making and attaching the head are separate operations; whitening the pins and packing them in paper are trades of their own.
      </p>
      <Source>Adam Smith, The Wealth of Nations (1776) — summary</Source>
      <p>
        The result: thousands of pins per worker per day. Smith thought that working alone, each could not make twenty, perhaps not even one, a day. Today a builder still hires carpenters,
        plumbers, electricians, and painters to build a house. Economies of scale through specialization are one reason modern societies are so prosperous.
      </p>
    </div>
  );
}

const Costs = () => <CostCurvesLab />;
const Production = () => <ProductionFunctionLab />;
const Profit = () => <ProfitViews />;
const Lr = () => <LongRunATC />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    'Distinguish **explicit** and **implicit** costs, and **economic** and **accounting profit**',
    'Derive the total-cost curve from the **production function**, **marginal product**, and **diminishing marginal product**',
    'Compute TC, FC, VC, AFC, AVC, **ATC**, and **MC** from a table and show them on a graph',
    'Explain why ATC is U-shaped and why **MC crosses ATC at its minimum** (efficient scale)',
    'Short- and long-run ATC; **economies/diseconomies of scale** and **constant returns**',
  ],
  sections: [
    sec('s-14-1a', '14-1a', 'Total Revenue, Total Cost, and Profit', S141a, checks['s-14-1a']),
    sec('s-14-1b', '14-1b', 'Why Opportunity Costs Matter', S141b, checks['s-14-1b']),
    sec('s-14-1c', '14-1c', 'The Cost of Capital Is an Opportunity Cost', S141c, checks['s-14-1c']),
    sec('s-14-1d', '14-1d', 'Economists and Accountants Measure Profit Differently', S141d, checks['s-14-1d']),
    sec('s-14-2a', '14-2a', 'The Production Function', S142a, checks['s-14-2a']),
    sec('s-14-2b', '14-2b', 'From the Production Function to the Total-Cost Curve', S142b, checks['s-14-2b']),
    sec('s-14-3a', '14-3a', 'Fixed and Variable Costs', S143a, checks['s-14-3a']),
    sec('s-14-3b', '14-3b', 'Average and Marginal Cost', S143b, checks['s-14-3b']),
    sec('s-14-3c', '14-3c', 'Cost Curves and Their Shapes', S143c, checks['s-14-3c']),
    sec('s-14-3d', '14-3d', 'Typical Cost Curves', S143d, checks['s-14-3d']),
    sec('s-14-4a', '14-4a', 'The Relationship between Short-Run and Long-Run Average Total Cost', S144a, checks['s-14-4a']),
    sec('s-14-4b', '14-4b', 'Economies and Diseconomies of Scale', S144b, checks['s-14-4b']),
    sec('s-14-5', '14-5', 'Conclusion', S145),
  ],
  examTraps: [
    { title: 'Don’t forget implicit costs', body: 'Total cost = explicit + implicit (QQ 1: $100 + 10 × $20 = $300). Economic profit < accounting profit.' },
    { title: 'MC sits between rows', body: 'MC = ΔTC/ΔQ; in a table it lies between two rows. If Q doesn’t rise by one (Nimbus), divide by ΔQ.' },
    { title: 'MC and ATC', body: 'MC < ATC ⇒ ATC falls (MC itself need not be falling!). QQ 6.' },
    { title: 'Which curve shifts', body: 'Fixed cost → AFC, ATC. Per-unit cost → AVC, ATC, MC.' },
    { title: 'Scale is long run', body: 'Economies/diseconomies are about **LR ATC**, not SR MC (QQ 9).' },
  ],
  mistakes: [
    { wrong: '“If marginal product falls, output falls.”', right: 'Output still rises, just **more slowly**.' },
    { wrong: '“At the ATC minimum, MC is at its minimum too.”', right: 'MC crosses ATC **at ATC’s minimum**; MC’s own minimum is further left.' },
    { wrong: '“Average cost is what matters for decisions.”', right: 'The decision about an extra unit uses **MC** (Problem 5: $901 > $550).' },
    { wrong: '“A lump-sum tax raises MC.”', right: 'A fixed cost doesn’t affect MC.' },
  ],
  boxes: [box('fyi-pin', 'FYI', 'Lessons from a Pin Factory', PinFactory)],
  summary: [
    'The goal of firms is to **maximize profit**, which equals total revenue minus total cost.',
    'When analyzing a firm’s behavior, include all opportunity costs. Some are **explicit** (wages paid to workers), some **implicit** (the owner’s forgone salary). Accounting profit counts only explicit costs; economic profit counts both.',
    'A firm’s costs reflect its production process. A typical **production function** gets flatter as the input increases — **diminishing marginal product**; so the total-cost curve gets steeper.',
    'Total cost divides into **fixed** costs (which don’t change with output) and **variable** costs (which do).',
    'Two measures come from total cost: **ATC** = TC / Q and **MC** — how much TC rises when output rises by 1 unit.',
    'For a typical firm, MC rises with output; ATC first falls and then rises; **the MC curve always crosses ATC at its minimum**.',
    'Costs often depend on the time horizon: many costs are fixed in the short run and variable in the long run. So when output changes, ATC may rise more in the short run than in the long run.',
  ],
  widgets: { costs: Costs, production: Production, profit: Profit, lr: Lr },
  gallery: [
    { title: 'Cost curves lab (Caleb and the problems)', Component: Costs },
    { title: 'Chloe: production function and total cost', Component: Production },
    { title: 'Economic and accounting profit', Component: Profit },
    { title: 'Short- and long-run ATC (Ford)', Component: Lr },
  ],
};
