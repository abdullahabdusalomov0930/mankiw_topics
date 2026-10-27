import { MonopolyLab, MonopolyRevenue, NaturalMonopolyRegulation, PriceDiscrimination } from '../../../../components/graphs/MonopolyWidgets';
import { Callout } from '../../../../components/ui/Kit';
import { AskExperts, BookTable, BoxLink, Source } from '../../../../components/ui/Lesson';
import { Math as M } from '../../../../components/ui/Math';
import { T } from '../../../../components/ui/Term';
import { box, sec } from '../../../enPage';
import type { ChapterPageContent } from '../../../types';
import { checks } from '../quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        In the 1990s your personal computer almost certainly ran Windows. Microsoft holds the copyright — only it sells copies of Windows, for ~$100. The marginal cost of an extra copy is
        nearly zero, while the price is many times higher. A competitive firm is a <b>price taker</b>; a monopoly is a <b>price maker</b>.
      </p>
      <p>
        But why doesn't Microsoft charge $1,000 or $10,000? Because a high price reduces demand: people buy fewer computers, switch to another system, or make illegal copies. A monopoly
        controls its price, but its profit isn't unlimited. In competitive markets the invisible hand leads to total welfare; under monopoly it often doesn't. How does government
        respond? (1994: blocking the Microsoft–Intuit merger; 1998: the Internet Explorer case; today — Apple, Google, Amazon.)
      </p>
    </div>
  );
}

const S161 = () => (
  <div className="prose-uz">
    <p>
      A <T id="monopoly-firm" /> is the sole seller of a product without close substitutes. The fundamental cause is <T id="barriers-to-entry" />: (1) a key resource; (2) the government
      grants an exclusive right; (3) the production process — one firm can produce more cheaply than many.
    </p>
  </div>
);

const S161a = () => (
  <div className="prose-uz">
    <p>
      If a town has dozens of wells — competition, and the price equals the MC of pumping an extra gallon. If there's only one well, its owner is a monopolist and can charge a high
      price for a necessity. The classic example is <b>DeBeers</b> (1888, Cecil Rhodes): it controlled up to 80% of the world's diamond production — not a complete monopoly, but with
      great influence over the price. In practice such monopolies are rare: economies are large, resources are owned by many people, and goods are traded internationally.
    </p>
  </div>
);

const S161b = () => (
  <div className="prose-uz">
    <p>
      The government grants one firm an exclusive right — sometimes for political connections (kings to their friends), sometimes in the public interest: a <T id="patent" /> (a new drug,
      20 years) and copyright (a novel). The result: higher prices and profits (the cost), but incentives for research and creativity (the benefit). A struggling novelist may not feel
      like a monopolist — being the sole seller doesn't guarantee many buyers.
    </p>
  </div>
);

const S161c = () => (
  <div className="prose-uz">
    <p>
      In a <T id="natural-monopoly" /> ATC keeps falling over the relevant range of output (Figure 1): with many firms, each produces less at a higher ATC. A network of water pipes; a
      rarely used toll bridge (a club good — Chapter 11). A natural monopolist worries less about new rivals: an entrant gets a small share of the market at a higher cost. If the market
      grows, a natural monopoly may become a competitive market.
    </p>
  </div>
);

const S162a = () => (
  <div className="prose-uz">
    <p>
      A competitive firm faces a horizontal (perfectly elastic) demand curve — it sells as much as it wants at the market price. A monopolist faces the <b>market demand curve</b>
      (downward-sloping): if it raises its price, it sells less. It can choose any point on the demand curve, but not above it. It is a <T id="price-maker" />.
    </p>
  </div>
);

const S162b = () => (
  <div className="prose-uz">
    <p>
      The town's only water company (Table 1): 1 gallon at $10, 2 gallons at $9 each, 3 gallons at $8 each… AR = P (always). But going from 3 to 4 gallons, TR goes $24 → $28 —{' '}
      <b>MR = $4</b>, even though a gallon sells for $7: to sell the 4th gallon it must give up $1 on each of the first 3. This is the <T id="output-price-effect" />. Under monopoly{' '}
      <b>MR &lt; P</b>, and MR can even be negative.
    </p>
    <MonopolyRevenue />
  </div>
);

const S162c = () => (
  <div className="prose-uz">
    <p>
      At Q₁, MR &gt; MC — increase output; at Q₂, MC &gt; MR — decrease it. The monopolist chooses Q_MAX where <b>MR = MC</b> (point A), then uses the demand curve to find the highest
      price at which it can sell that quantity (point B). Competitive firm: <M tex="P = MR = MC" />; monopolist: <M tex="P > MR = MC" />. Under competition the price equals MC; under
      monopoly it is <b>above</b> MC.
    </p>
    <MonopolyLab />
    <BoxLink id="fyi-supply-curve">FYI: Why a Monopoly Does Not Have a Supply Curve</BoxLink>
  </div>
);

const S162d = () => (
  <div className="prose-uz">
    <p>
      <M tex="\text{Profit} = (P - ATC) \times Q" /> — the BCDE rectangle in Figure 5: height BC = P − ATC, width DC = Q_MAX.
    </p>
    <BookTable
      caption="Table 2 — Profit-Maximizing Rules for a Monopoly Firm"
      head={['#', 'Rule']}
      rows={[
        ['1', 'Derive the MR curve from the demand curve.'],
        ['2', 'Find Q at which **MR = MC**.'],
        ['3', 'On the demand curve, find P at which consumers will buy Q.'],
        ['4', 'If **P > ATC**, the monopoly earns a profit.'],
      ]}
    />
    <Callout kind="exam">QQ 4: if fixed cost rises, MR and MC don't change → <b>the price doesn't change</b>, profit falls.</Callout>
    <BoxLink id="cs-drugs">Case Study: Monopoly Drugs versus Generic Drugs</BoxLink>
  </div>
);

const S163a = () => (
  <div className="prose-uz">
    <p>
      If a benevolent social planner ran the monopoly (Figure 7), it would choose the <b>efficient quantity</b> where demand (consumers' value) meets MC — P = MC. The monopolist produces
      less, where MR = MC (Figure 8) — so the price is too high. Buyers who value the good above MC but below the monopoly price don't buy — mutually beneficial trades don't happen. The
      DWL is the triangle between demand and MC.
    </p>
    <Callout kind="note" title="The parallel with a tax">
      A monopolist is like a private tax collector: both a tax and a monopoly price drive a “wedge” between WTP and cost and reduce quantity. The difference: a tax gives the government
      revenue, a monopoly price gives the firm profit.
    </Callout>
  </div>
);

const S163b = () => (
  <div className="prose-uz">
    <p>
      There's an objection that “monopolies get rich at the public's expense.” But in economic analysis profit itself isn't the problem: an extra dollar paid by consumers goes to the
      producer — total surplus is unchanged, the pie is just divided differently (a normative question of equity). The problem is the <b>small quantity</b>: the pie shrinks by the DWL.
    </p>
    <p>An exception: if a monopoly spends resources to preserve its position (e.g., hiring lobbyists), the social loss is those costs plus the DWL.</p>
  </div>
);

const S164a = () => (
  <div className="prose-uz">
    <p>
      <T id="price-discrimination" /> is selling the same good to different buyers at different prices (even when costs are the same). It isn't possible in a competitive market — only
      with market power.
    </p>
    <p>
      <b>Readalot Publishing</b>: $2 million to the author, printing cost 0. 100,000 die-hard fans will pay up to $30, 400,000 casual readers up to $5. A single price: $30 → $3 million
      revenue, $1 million profit; $5 → $2.5 million revenue, $0.5 million profit → $30. The DWL: 400,000 readers × $5 = <b>$2 million</b>. Suppose the fans are in Australia and the
      others in the U.S.: Australia $30, the U.S. $5 → revenue $5 million, profit <b>$3 million</b>. In real life: hardcover, e-book, and paperback editions.
    </p>
    <PriceDiscrimination />
  </div>
);

const S164b = () => (
  <div className="prose-uz">
    <ol>
      <li>Price discrimination is a <b>rational</b> strategy for a profit-maximizing monopolist: the price moves closer to each buyer's WTP.</li>
      <li>
        Buyers must be <b>separated</b> by WTP (geography, age, income). Consequently, <T id="arbitrage" /> undermines discrimination — if Australian stores bought cheaply in the U.S.
        and resold.
      </li>
      <li>
        Discrimination can <b>raise total surplus</b>: at Readalot everyone gets the book and the DWL disappears. But the gain goes to the producer — consumers pay their WTP, CS = 0.
      </li>
    </ol>
  </div>
);

const S164c = () => (
  <div className="prose-uz">
    <p>
      <T id="perfect-price-discrimination" />: the monopolist knows each buyer's WTP exactly (Figure 9b). Every mutually beneficial trade happens, there's no DWL, and the entire
      surplus is profit. In real life discrimination is imperfect (by group), and its effect on total surplus is <b>ambiguous</b> — only the rise in profit is certain (otherwise the firm
      would charge a single price).
    </p>
    <Callout kind="exam">QQ 8: moving from a single price to perfect discrimination <b>lowers CS</b> (to zero), while profit, quantity, and total surplus rise.</Callout>
  </div>
);

const S164d = () => (
  <div className="prose-uz">
    <ul>
      <li><b>Movie tickets</b>: children and those 65+ — lower WTP; a seat's MC is the same for everyone.</li>
      <li><b>Airfares</b>: cheaper with a Saturday-night stay — separating business travelers (high WTP, no weekend meetings) from leisure travelers.</li>
      <li><b>Coupons and discount days</b>: busy, wealthy executives don't clip coupons; those willing to spend time usually have lower WTP.</li>
      <li><b>Financial aid</b>: high tuition + need-based aid — a price based on the family's ability to pay.</li>
      <li><b>Quantity discounts</b>: a donut for $0.50, a dozen for $5 — a buyer's WTP for later units falls.</li>
    </ul>
  </div>
);

const S165a = () => (
  <div className="prose-uz">
    <p>
      The government has four options: increase competition, regulate behavior, turn the monopoly into a public enterprise, or do nothing. <T id="antitrust-laws" />: if Coca-Cola and
      PepsiCo wanted to merge, the Justice Department could sue. <b>Horizontal</b> mergers (rivals in the same market) get more scrutiny than <b>vertical</b> ones (a tire maker + a car
      maker). The Sherman Act (1890) was meant to curb “trusts”; the Clayton Act (1914) strengthened it. The Supreme Court: antitrust is “a comprehensive charter of economic liberty
      aimed at preserving free and unfettered competition.”
    </p>
    <p>
      But mergers can produce <b>synergies</b> (banks cutting administrative costs). Whether the government can accurately weigh the benefits against the costs of reduced competition is
      debatable.
    </p>
    <AskExperts
      title="Mergers and Competition (airlines)"
      source="IGM, August 28, 2013"
      statement="If regulators had not approved mergers in the past decade between major networked airlines, travelers would be better off today."
      agree={29}
      uncertain={45}
      disagree={26}
    />
    <AskExperts
      title="Mergers and Competition (telecom)"
      source="IGM, July 20, 2021"
      statement="Americans pay too much for broadband, cable television, and telecommunications services, in part because of a lack of adequate competition."
      agree={91}
      uncertain={7}
      disagree={2}
    />
  </div>
);

const S165b = () => (
  <div className="prose-uz">
    <p>
      In natural monopolies (water, electricity) prices are often regulated. <T id="marginal-cost-pricing" /> seems efficient, but there are two problems: (1) because ATC is falling, MC
      &lt; ATC → the firm makes losses (Figure 10) — a subsidy (from taxes, with their own DWL) or exit; with P = ATC there are no losses, but a DWL remains — like a tax on the product.
      (2) There's no incentive to cut costs: the regulator lowers the price. In practice firms are allowed to keep part of the gains from cost savings.
    </p>
    <NaturalMonopolyRegulation />
  </div>
);

const S165c = () => (
  <div className="prose-uz">
    <p>
      <T id="public-ownership" />: telephone, water, and electricity in Europe; the postal service and many municipal water/electric utilities in the U.S. Many economists prefer private
      ownership: private owners profit from cutting costs and fire bad managers; if government employees do a poor job, consumers and taxpayers bear the cost and can act only through the
      political system. “The ballot box is less reliable than the profit motive.”
    </p>
  </div>
);

const S165d = () => (
  <div className="prose-uz">
    <p>
      Every policy has drawbacks. Nobel laureate George Stigler argued that real economies fall short of ideal competition (“market failure”), but in the U.S. this is much smaller than
      the “political failure” that imperfect policies bring. Sometimes (but not always) doing nothing is wise.
    </p>
    <BoxLink id="news-antitrust">In the News: Will the Biden Administration Expand the Scope of Antitrust Policy?</BoxLink>
  </div>
);

const S166 = () => (
  <div className="prose-uz">
    <BookTable
      caption="Table 3 — Competition versus Monopoly: A Summary Comparison"
      head={['', 'Competition', 'Monopoly']}
      rows={[
        ['*Similarities*', '', ''],
        ['Goal of firms', 'Maximize profits', 'Maximize profits'],
        ['Rule for maximizing', 'MR = MC', 'MR = MC'],
        ['Economic profits in the short run?', 'Yes', 'Yes'],
        ['*Differences*', '', ''],
        ['Number of firms', 'Many', 'One'],
        ['Marginal revenue', 'MR = P', 'MR < P'],
        ['Price', 'P = MC', 'P > MC'],
        ['Welfare-maximizing output?', 'Yes', 'No'],
        ['Entry in the long run?', 'Yes', 'No'],
        ['Economic profits in the long run?', 'No', 'Yes'],
        ['Price discrimination possible?', 'No', 'Yes'],
      ]}
    />
    <p>
      How common are monopolies? In one sense, very: many firms have some influence over their price (a Tesla ≠ an electric Mustang, Ben & Jerry's ≠ Breyers). But <b>substantial</b>{' '}
      monopoly power is rare: most goods have close substitutes. Monopoly power is a matter of degree; in many cases assuming firms are competitive isn't a big mistake.
    </p>
  </div>
);

function SupplyCurveFyi() {
  return (
    <div className="prose-uz">
      <p>In competitive markets the two most important words are “supply” and “demand.” Under monopoly we used demand and cost curves — where is the supply curve?</p>
      <p>
        A supply curve tells how much firms supply at <b>each given price</b> — sensible for price takers. But a monopolist is a price maker: the question “how much at this price?” makes
        no sense — when it chooses a quantity, it also sets the price along the demand curve. The shape of demand determines the shape of MR, and MR determines the optimal quantity; so a
        monopoly's supply decision can't be separated from demand, and <b>a monopoly has no supply curve</b>.
      </p>
    </div>
  );
}

function Drugs() {
  return (
    <div className="prose-uz">
      <p>
        The drug market shows both structures: during the patent — monopoly; after it expires — competition. Theory (Figure 6, MC roughly constant): during the patent the price is set by
        MR = MC, well above MC; when the patent expires, generics enter and the price falls to MC.
      </p>
      <p>
        Experience confirms it: chemically identical generics are much cheaper. But the former monopolist doesn't lose all its power — some consumers are loyal to the brand (fearing the
        generic is “different”). For example, the antidepressant <b>fluoxetine</b>: Prozac's patent expired in 2001, but Prozac still costs much more than generic fluoxetine.
      </p>
    </div>
  );
}

function Antitrust() {
  return (
    <div className="prose-uz">
      <Source>Greg Ip, “Antitrust's New Mission: Preserving Democracy, Not Efficiency,” The Wall Street Journal, July 8, 2021</Source>
      <ul>
        <li>Amazon's purchase of the MGM film studio wouldn't normally raise antitrust concerns (MGM's share is small). But Amazon is the largest e-commerce and cloud company, and Bezos owns the Washington Post — a concentration of economic and cultural influence.</li>
        <li>Lina Khan (FTC chair at 32 in 2021): antitrust's historic role is to protect the economy and democracy from unchecked monopoly power. The “neo-Brandeisians”: Louis Brandeis (1914) — bigness itself isn't a crime, but how it is achieved and used can be harmful.</li>
        <li>From the 1970s, Robert Bork: the only legitimate goal of antitrust is <b>consumer welfare</b>; firms grow large because they are efficient. This standard prevailed for decades.</li>
        <li>The last decade: concentration and profit margins have risen and new firms have declined. Big Tech is cheap or free and popular (no problem by the consumer-welfare standard), but platforms leave sellers, developers, and users little bargaining power.</li>
        <li>The risks: cases without evidence lose in court (the Facebook case was dismissed); banning bigness forgoes benefits only large firms can provide; antitrust can become politicized (AT&T–Time Warner, 2018).</li>
      </ul>
      <Callout kind="tip" title="Questions to discuss">
        <ol>
          <li>Should policymakers care about more than just the economic effects of big businesses? Why or why not?</li>
          <li>What are the risks of broadening the scope of antitrust laws?</li>
        </ol>
      </Callout>
    </div>
  );
}

const Mono = () => <MonopolyLab />;
const Rev = () => <MonopolyRevenue />;
const Pd = () => <PriceDiscrimination />;
const Reg = () => <NaturalMonopolyRegulation />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    'The causes of monopoly: **barriers to entry** — a key resource, a government right, **natural monopoly**',
    'Why **MR < P** under monopoly (output and price effects) and how the price is set from **MR = MC**',
    'Monopoly profit and the **deadweight loss**; why profit itself isn’t a social problem',
    '**Price discrimination**: Readalot, arbitrage, perfect discrimination, real examples',
    'Public policy: **antitrust**, regulation (P = MC vs. P = ATC), public ownership, doing nothing',
  ],
  sections: [
    sec('s-16-1', '16-1', 'Why Monopolies Arise', S161),
    sec('s-16-1a', '16-1a', 'Monopoly Resources', S161a, checks['s-16-1a']),
    sec('s-16-1b', '16-1b', 'Government-Created Monopolies', S161b, checks['s-16-1b']),
    sec('s-16-1c', '16-1c', 'Natural Monopolies', S161c, checks['s-16-1c']),
    sec('s-16-2a', '16-2a', 'Monopoly versus Competition', S162a, checks['s-16-2a']),
    sec('s-16-2b', '16-2b', "A Monopoly's Revenue", S162b, checks['s-16-2b']),
    sec('s-16-2c', '16-2c', 'Profit Maximization', S162c, checks['s-16-2c']),
    sec('s-16-2d', '16-2d', "A Monopoly's Profit", S162d, checks['s-16-2d']),
    sec('s-16-3a', '16-3a', 'The Deadweight Loss', S163a, checks['s-16-3a']),
    sec('s-16-3b', '16-3b', "The Monopoly's Profit: A Social Cost?", S163b, checks['s-16-3b']),
    sec('s-16-4a', '16-4a', 'A Parable about Pricing', S164a, checks['s-16-4a']),
    sec('s-16-4b', '16-4b', 'The Moral of the Story', S164b, checks['s-16-4b']),
    sec('s-16-4c', '16-4c', 'The Analytics of Price Discrimination', S164c, checks['s-16-4c']),
    sec('s-16-4d', '16-4d', 'Examples of Price Discrimination', S164d, checks['s-16-4d']),
    sec('s-16-5a', '16-5a', 'Increasing Competition with Antitrust Laws', S165a, checks['s-16-5a']),
    sec('s-16-5b', '16-5b', 'Regulation', S165b, checks['s-16-5b']),
    sec('s-16-5c', '16-5c', 'Public Ownership', S165c, checks['s-16-5c']),
    sec('s-16-5d', '16-5d', 'Above All, Do No Harm', S165d, checks['s-16-5d']),
    sec('s-16-6', '16-6', 'Conclusion: The Prevalence of Monopolies', S166),
  ],
  examTraps: [
    { title: 'The price comes from the demand curve', body: 'MR = MC gives the quantity; take the price from the **demand** curve (point B), not from MC.' },
    { title: 'P > MR = MC', body: 'Competitive firm: P = MR = MC. Monopolist: P > MR = MC (QQ 3).' },
    { title: 'Fixed cost doesn’t affect the price', body: 'QQ 4, Problem 1e, Problem 3c: if fixed cost rises, the price doesn’t change and profit falls.' },
    { title: 'The cause of the DWL', body: 'Not profit, but buyers who **don’t buy** even though they value the good above MC (QQ 6).' },
    { title: 'Perfect discrimination', body: 'CS → 0, DWL → 0, profit and total surplus ↑ (QQ 8).' },
    { title: 'The inelastic part', body: 'A monopolist never operates on the inelastic (MR < 0) part of demand (Problem 5).' },
  ],
  mistakes: [
    { wrong: '“A monopolist can charge any price it wants.”', right: 'The demand curve constrains it — at a high price it sells little.' },
    { wrong: '“Monopoly profit is the DWL.”', right: 'Profit is a transfer; the DWL is the triangle of lost trades.' },
    { wrong: '“Under monopoly a price ceiling always causes a shortage.”', right: 'Problem 8: a $45 ceiling raises quantity from 20 to 25, with no shortage.' },
    { wrong: '“Price discrimination is always harmful.”', right: 'It can raise total surplus (Readalot).' },
    { wrong: '“P = MC is ideal for a natural monopoly.”', right: 'MC < ATC → losses; a subsidy, or P = ATC with a DWL.' },
  ],
  boxes: [
    box('fyi-supply-curve', 'FYI', 'Why a Monopoly Does Not Have a Supply Curve', SupplyCurveFyi),
    box('cs-drugs', 'Case Study', 'Monopoly Drugs versus Generic Drugs', Drugs),
    box('news-antitrust', 'In the News', 'Will the Biden Administration Expand the Scope of Antitrust Policy?', Antitrust),
  ],
  summary: [
    'A monopoly is the sole seller in its market. It arises when a single firm owns a key resource, when the government gives a firm the exclusive right to produce a good, or when a single firm can supply the entire market at a lower cost than many firms could.',
    'A monopoly faces a downward-sloping demand curve. When it increases production by 1 unit, the price falls, reducing the revenue earned on all units. As a result, a monopoly’s **MR is always below the price**.',
    'Like a competitive firm, a monopoly maximizes profit at **MR = MC**, then sets the price at which consumers will buy that quantity. Unlike a competitive firm, its price exceeds MR, so **its price exceeds MC**.',
    'A monopolist’s profit-maximizing quantity is **below** the quantity that maximizes total surplus: some consumers who value the good above MC don’t buy it. A monopoly causes **DWLs** similar to those of taxes.',
    'A monopolist can often raise profit by charging different prices for the same good based on buyers’ WTP. **Price discrimination** can raise welfare by getting the good to consumers who otherwise wouldn’t buy. With perfect discrimination the DWL disappears and the entire surplus goes to the monopolist; with imperfect discrimination welfare may rise or fall.',
    'Policymakers can respond to the inefficiency of monopoly in several ways: increasing competition with **antitrust** laws, **regulating** monopoly prices, turning the monopoly into a **public enterprise**, or — if the market failure is small compared with the inevitable imperfections of policy — **doing nothing**.',
  ],
  widgets: { monopoly: Mono, revenue: Rev, pd: Pd, regulation: Reg },
  gallery: [
    { title: 'Monopoly: MR = MC, profit, DWL (problems)', Component: Mono },
    { title: 'Monopoly revenue: output and price effects', Component: Rev },
    { title: 'Price discrimination: Readalot, Figure 9, the play', Component: Pd },
    { title: 'Regulating a natural monopoly', Component: Reg },
  ],
};
