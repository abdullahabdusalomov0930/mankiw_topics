import { CompetitiveFirmLab, EntryExitLab } from '../../../../components/graphs/CompetitiveWidgets';
import { Callout } from '../../../../components/ui/Kit';
import { BookTable, BoxLink } from '../../../../components/ui/Lesson';
import { Math as M } from '../../../../components/ui/Math';
import { T } from '../../../../components/ui/Term';
import { box, sec } from '../../../enPage';
import type { ChapterPageContent } from '../../../types';
import { checks } from '../quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        If one gas station in your neighborhood raised its price by 20%, customers would go elsewhere at once. If the water company raised the price of water by 20%, it would lose
        almost no one: there is no other source of water. The difference is <b>market structure</b>: many gas stations, one water company.
      </p>
      <p>
        This chapter is about competitive firms (the next one covers firms with <T id="market-power" />). They are simpler and yield an efficient allocation (Chapter 7) — a benchmark
        for the other structures. The question: which of a firm's costs — fixed, variable, average, marginal — matter for its supply decision? The answer: all of them, each in its
        place. A tomato seller at Chorsu bazaar obeys the same rules.
      </p>
    </div>
  );
}

const S151a = () => (
  <div className="prose-uz">
    <p>
      A <T id="competitive-market-15" />: (1) many buyers and sellers; (2) nearly identical goods. In the milk market no buyer or farm can affect the price: a seller can sell as much
      as it wants at the market price — there's no reason to charge less; if it charges more, buyers leave. Everyone is a <T id="price-taker" />. Often a third condition: (3){' '}
      <b>free entry and exit</b> — not needed to be a price taker, but it determines the long-run equilibrium.
    </p>
  </div>
);

const S151b = () => (
  <div className="prose-uz">
    <p>The Vaca family dairy farm: TR = P × Q. At $6 a gallon, 1,000 gallons → $6,000; if it doubles output, revenue doubles too ($12,000) — the price doesn't change.</p>
    <BookTable
      caption="Table 1 — Total, Average, and Marginal Revenue for a Competitive Firm"
      head={['Q', 'P', 'TR = P × Q', 'AR = TR/Q', 'MR = ΔTR/ΔQ']}
      rows={[
        ['1 gallon', '$6', '$6', '$6', '$6'],
        ['2', '6', '12', '6', '6'],
        ['3', '6', '18', '6', '6'],
        ['4', '6', '24', '6', '6'],
        ['5', '6', '30', '6', '6'],
        ['6', '6', '36', '6', '6'],
        ['7', '6', '42', '6', '6'],
        ['8', '6', '48', '6', '6'],
      ]}
    />
    <p>
      <T id="average-revenue" /> = P — for <b>all</b> firms. <T id="marginal-revenue" /> = P — only for <b>competitive</b> firms.
    </p>
  </div>
);

const S152a = () => (
  <div className="prose-uz">
    <p>
      Table 2: the Vaca farm's fixed cost is $3. Profit is −$3 at 0 gallons, $1 at 1, $4 at 2 … <b>$7 at 4 or 5 gallons</b> — the maximum. The marginal approach: the 1st gallon's MR is
      $6, MC $2 → profit +$4; the 2nd: +$3; … the 6th: MR $6 &lt; MC $7 → profit −$1. MR &gt; MC — increase; MR &lt; MC — decrease.
    </p>
    <CompetitiveFirmLab />
  </div>
);

const S152b = () => (
  <div className="prose-uz">
    <p>Figure 1: at Q₁, MR &gt; MC — increasing output raises profit; at Q₂, MC &gt; MR — decreasing it raises profit. Three rules (for any profit-maximizing firm):</p>
    <ul>
      <li>if MR &gt; MC — increase output;</li>
      <li>if MC &gt; MR — decrease output;</li>
      <li>at the profit maximum, <b>MR = MC</b>.</li>
    </ul>
    <p>
      For a competitive firm MR = P, so <M tex="P = MC" />. If the price rises from P₁ to P₂ (Figure 2), the firm produces more along its MC curve: <b>the MC curve is the competitive
      firm's supply curve</b> (with some caveats — see the next sections).
    </p>
  </div>
);

const S152c = () => (
  <div className="prose-uz">
    <p>
      A <T id="shutdown" /> (short run; fixed cost is paid anyway) differs from an <T id="exit" /> (long run; all costs are saved). If a farm leaves its land fallow for a season, the
      land's cost isn't recovered (sunk); if it leaves farming altogether, it sells the land.
    </p>
    <p>
      If it shuts down: it loses its revenue and saves its variable cost. So <M tex="\text{Shut down if } TR < VC \iff P < AVC" />. The short-run supply curve is <b>the part of MC
      above AVC</b> (Figure 3).
    </p>
  </div>
);

const S152d = () => (
  <div className="prose-uz">
    <p>
      A <T id="sunk-cost" /> can't be recovered; rational decisions ignore it. In the short run fixed cost is sunk — its size doesn't affect the shutdown decision. In everyday life: you
      value a movie at $15, the ticket is $10, and you lose it → pay $10 again ($15 &gt; $10); the lost $10 is spilt milk.
    </p>
    <BoxLink id="cs-empty-restaurants">Case Study: Near-Empty Restaurants and Off-Season Miniature Golf</BoxLink>
  </div>
);

const S152e = () => (
  <div className="prose-uz">
    <p>
      On exit, fixed cost is saved too: <M tex="\text{Exit if } TR < TC \iff P < ATC" />; entry is the reverse: <M tex="\text{Enter if } P > ATC" />. The long-run supply curve is{' '}
      <b>the part of MC above ATC</b> (Figure 4).
    </p>
  </div>
);

const S152f = () => (
  <div className="prose-uz">
    <p>
      <M tex="\text{Profit} = TR - TC = (P - ATC) \times Q" /> — on the graph a <b>rectangle</b>: height P − ATC, width Q (Figure 5a — profit). With a loss (5b) the height is ATC − P;
      producing where P = MC minimizes the loss, but in the long run the firm exits.
    </p>
  </div>
);

const S152g = () => (
  <div className="prose-uz">
    <p>Fred and Wilma bought a granite quarry. Wilma (an economics graduate) wrote down the rules — carved in granite:</p>
    <BookTable
      caption="Table 3 — Profit-Maximizing Rules for a Competitive Firm"
      head={['#', 'Rule']}
      rows={[
        ['1', 'Find Q at which **P = MC**.'],
        ['2', 'If **P < AVC**, shut down immediately and remain out of business.'],
        ['3', 'If **AVC < P < ATC**, operate in the short run but exit in the long run.'],
        ['4', 'If **ATC < P**, stay in business and enjoy your profits!'],
      ]}
    />
    <Callout kind="exam">QQ 5: MC (= P) is between AVC and ATC → operate in the short run, exit in the long run.</Callout>
  </div>
);

const S153a = () => (
  <div className="prose-uz">
    <p>
      1,000 identical firms: each produces where P = MC (if P &gt; AVC). Market supply is the <b>horizontal sum</b> of the individual supply curves (like Ben and Jerry in Chapter 4):
      at $1 each supplies 100 → market 100,000; at $2, 200 → 200,000 (Figure 6).
    </p>
  </div>
);

const S153b = () => (
  <div className="prose-uz">
    <p>
      Suppose everyone has the same technology and inputs. If there is profit, new firms enter → supply rises → price and profit fall; if there are losses, firms exit → the price rises.
      When the process ends, profit is <b>zero</b>: P = ATC. At the profit maximum, P = MC. Both hold at once only at the <b>ATC minimum</b>. So in the long run firms operate at the{' '}
      <T id="efficient-scale" /> — the <T id="zero-profit-equilibrium" />. The LR market supply curve is <b>horizontal</b> at min ATC (Figure 7).
    </p>
    <EntryExitLab />
  </div>
);

const S153c = () => (
  <div className="prose-uz">
    <p>
      Why do they stay at zero profit? Because TC includes all opportunity costs. A farmer invested $1 million (could earn $40,000 a year in interest at the bank) and gave up a job paying
      $60,000 — an opportunity cost of $100,000. Even at zero economic profit, revenue covers these; the accountant sees $100,000 of <b>profit</b> — which is why the farmer stays.
    </p>
  </div>
);

const S153d = () => (
  <div className="prose-uz">
    <p>
      The milk market is in long-run equilibrium (A): P₁ = min ATC. Scientists discover a wonderful health benefit of milk → demand D₁ → D₂. Short run (B): the price rises to P₂, firms
      produce more along MC, P &gt; ATC — profit. Over time other farmers switch to milk → short-run supply S₁ → S₂ → the price returns to P₁ (C), quantity rises to Q₃, there are more
      firms, each again at the efficient scale (Figure 8).
    </p>
  </div>
);

const S153e = () => (
  <div className="prose-uz">
    <p>Two reasons long-run supply might slope upward:</p>
    <ol>
      <li><b>Limited inputs</b>: as farmers multiply, the price of land rises → all farmers' costs rise.</li>
      <li>
        <b>Differing costs</b>: painters differ in speed and in the alternative value of their time. Drawing in more painters requires a higher price. The price equals the{' '}
        <b>marginal firm</b>'s ATC — it earns zero profit, while cheaper firms earn <b>positive</b> profit even in the long run.
      </li>
    </ol>
    <p>The main lesson still holds: long-run supply is usually <b>more elastic</b> than short-run supply.</p>
  </div>
);

const S154 = () => (
  <div className="prose-uz">
    <p>
      Marginal analysis gave us a theory of the supply curve in a competitive market: when you buy from a competitive firm, the price you pay is close to the cost of producing it —{' '}
      <b>P = MC</b>; with free entry and exit, the price also equals the lowest possible average cost — <b>P = min ATC</b>. The next chapter looks at firms with market power:
      marginal analysis is useful again, but the results are very different.
    </p>
  </div>
);

function EmptyRestaurants() {
  return (
    <div className="prose-uz">
      <p>
        Why does a nearly empty restaurant stay open at lunch? Many costs — rent, kitchen equipment, tables, dishes — are fixed: closing at lunch doesn't reduce them (in the short run they
        are sunk). Only variable costs — extra food and staff wages — matter for the decision. The restaurant closes at lunch only if revenue doesn't cover variable cost.
      </p>
      <p>
        The same goes for a miniature-golf course in a resort town: the land and the course's construction are fixed and irrelevant to the short-run decision. The course should stay open
        only in the seasons when revenue exceeds variable cost. In Uzbekistan too: seasonal resorts in Chimgan closing in winter or summer follow exactly this P &lt; AVC logic.
      </p>
    </div>
  );
}

const Firm = () => <CompetitiveFirmLab />;
const Market = () => <EntryExitLab />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    'The features of a competitive market and why **MR = AR = P** for a competitive firm',
    'The profit-maximizing rule **MR = MC** (⇔ P = MC) and the MC curve as the firm’s supply',
    '**Shutdown** (P < AVC) and **exit** (P < ATC) decisions; ignoring **sunk costs**',
    'Measuring profit on a graph as (P − ATC) × Q',
    'Short- and long-run market supply; free entry and exit and **zero profit**; the response to a demand shift',
  ],
  sections: [
    sec('s-15-1a', '15-1a', 'The Meaning of Competition', S151a, checks['s-15-1a']),
    sec('s-15-1b', '15-1b', 'The Revenue of a Competitive Firm', S151b, checks['s-15-1b']),
    sec('s-15-2a', '15-2a', 'A Simple Example of Profit Maximization', S152a, checks['s-15-2a']),
    sec('s-15-2b', '15-2b', "The Marginal-Cost Curve and the Firm's Supply Decision", S152b, checks['s-15-2b']),
    sec('s-15-2c', '15-2c', "The Firm's Short-Run Decision to Shut Down", S152c, checks['s-15-2c']),
    sec('s-15-2d', '15-2d', 'Spilt Milk and Other Sunk Costs', S152d, checks['s-15-2d']),
    sec('s-15-2e', '15-2e', "The Firm's Long-Run Decision to Exit or Enter a Market", S152e, checks['s-15-2e']),
    sec('s-15-2f', '15-2f', 'Measuring Profit in Our Graph for the Competitive Firm', S152f, checks['s-15-2f']),
    sec('s-15-2g', '15-2g', 'A Brief Recap', S152g, checks['s-15-2g']),
    sec('s-15-3a', '15-3a', 'The Short Run: Market Supply with a Fixed Number of Firms', S153a, checks['s-15-3a']),
    sec('s-15-3b', '15-3b', 'The Long Run: Market Supply with Entry and Exit', S153b, checks['s-15-3b']),
    sec('s-15-3c', '15-3c', 'Why Do Competitive Firms Stay in Business If They Make Zero Profit?', S153c, checks['s-15-3c']),
    sec('s-15-3d', '15-3d', 'A Shift in Demand in the Short Run and Long Run', S153d, checks['s-15-3d']),
    sec('s-15-3e', '15-3e', 'Why the Long-Run Supply Curve Might Slope Upward', S153e, checks['s-15-3e']),
    sec('s-15-4', '15-4', 'Conclusion: Behind the Supply Curve', S154),
  ],
  examTraps: [
    { title: 'SR vs. LR supply', body: 'SR: the part of MC above **AVC**. LR: the part of MC above **ATC** (QQ 4).' },
    { title: 'Three relationships', body: 'LR equilibrium: P = MC = ATC. Before entry: P = MC > ATC (QQ 6–7).' },
    { title: 'MR = MC — but on which branch?', body: 'Problem 4: at 1 case MC = 50 = MR, but on the **falling** part of MC — a profit minimum. Use the **rising** part of MC.' },
    { title: 'A fixed-cost tax', body: 'In the SR MC doesn’t change → quantity doesn’t change; in the LR exit → price ↑, quantity ↓ (QQ 8).' },
    { title: 'Zero economic profit ≠ zero accounting profit', body: 'Opportunity costs are covered — the accountant sees positive profit.' },
  ],
  mistakes: [
    { wrong: '“If it makes a loss, a firm should shut down immediately.”', right: 'Only if **P < AVC**; otherwise operating in the short run reduces the loss.' },
    { wrong: '“A competitive firm raises profit by raising its price.”', right: 'It’s a price taker: at a higher price it sells nothing.' },
    { wrong: '“In the long run competitive firms close for lack of profit.”', right: 'Zero **economic** profit — opportunity costs are covered; they stay.' },
    { wrong: '“Sunk costs affect decisions.”', right: 'Sunk costs are ignored — only future benefits and costs matter.' },
  ],
  boxes: [box('cs-empty-restaurants', 'Case Study', 'Near-Empty Restaurants and Off-Season Miniature Golf', EmptyRestaurants)],
  summary: [
    'Because a competitive firm is a price taker, its revenue is proportional to the amount of output it produces. The price of the good equals both the firm’s average revenue and its marginal revenue.',
    'To maximize profit, a firm chooses the quantity at which **MR = MC**. For a competitive firm MR = P, so **P = MC**. Thus the MC curve is the firm’s supply curve.',
    'In the short run, when fixed costs are sunk, the firm temporarily shuts down if the price is below **AVC**. In the long run, when it can recover all costs, it exits if the price is below **ATC**.',
    'In a market with free entry and exit, economic profit is driven to **zero** in the long run: all firms produce at the efficient scale, the price equals min ATC, and the number of firms adjusts to satisfy the quantity demanded at that price.',
    'Changes in demand have different effects over different time horizons. In the short run a rise in demand raises the price and leads to profits, a fall lowers the price and leads to losses. With free entry and exit, in the long run the number of firms adjusts to return the market to the zero-profit equilibrium.',
  ],
  widgets: { firm: Firm, market: Market },
  gallery: [
    { title: 'The competitive firm: P = MC, profit, shutdown, exit', Component: Firm },
    { title: 'Entry and exit: short- and long-run supply', Component: Market },
  ],
};
