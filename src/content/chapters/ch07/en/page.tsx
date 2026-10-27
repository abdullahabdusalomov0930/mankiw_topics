import { SupplyDemandGraph } from '../../../../components/graphs/SupplyDemandGraph';
import { EfficiencyExplorer, PriceChangeSurplus, StepSurplus } from '../../../../components/graphs/SurplusWidgets';
import { Callout } from '../../../../components/ui/Kit';
import { AskExperts, BookTable, BoxLink, Source } from '../../../../components/ui/Lesson';
import { Math as M } from '../../../../components/ui/Math';
import { T } from '../../../../components/ui/Term';
import { box, sec } from '../../../enPage';
import type { ChapterPageContent } from '../../../types';
import { checks } from '../quiz';

const buyers = [
  { name: 'Whitney', value: 1000 },
  { name: 'Ella', value: 800 },
  { name: 'Mariah', value: 700 },
  { name: 'Karen', value: 500 },
];
const painters = [
  { name: 'Vincent', value: 3600 },
  { name: 'Claude', value: 3200 },
  { name: 'Pablo', value: 2400 },
  { name: 'Andy', value: 2000 },
];

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        When tomatoes get pricier at the bazaar, buyers complain; when they get cheaper, farmers do. Each side thinks of itself. But is there a “right price”{' '}
        <b>for society</b>? Are too few tomatoes grown, too many, or just the right amount?
      </p>
      <p>
        Earlier chapters showed <i>how</i> markets set prices and quantities. This chapter asks a different question: is the outcome <b>good</b>? The answer is
        surprising: the equilibrium of a competitive market maximizes the <b>total</b> gain of buyers and sellers — as if guided by an invisible hand.
      </p>
    </div>
  );
}

const S71a = () => (
  <div className="prose-uz">
    <p>This chapter is about <T id="welfare-economics" />: how the allocation of resources affects economic well-being.</p>
    <p>
      You inherit a mint-condition copy of Elvis Presley's first album from your grandmother. You aren't an Elvis fan, so you auction it off. Four fans show up;
      each will pay no more than a certain amount — their <T id="willingness-to-pay" />:
    </p>
    <BookTable head={['Buyer (Table 1)', 'Willingness to Pay']} rows={buyers.map((b) => [b.name, `$${b.value.toLocaleString('en-US')}`])} />
    <p>
      The bidding starts at $100. When Whitney bids $800 (or slightly more), Ella, Mariah, and Karen drop out. The album goes to the buyer who values it most —
      Whitney.
    </p>
    <p>
      Whitney was willing to pay $1,000 and paid $800: her <T id="consumer-surplus" /> is <b>$200</b>. Consumer surplus measures how much a buyer gains from taking
      part in the market. With two albums the price stops at $700: Whitney gets $300 and Ella $100 — <b>$400</b> in total.
    </p>
    <StepSurplus kind="buyers" people={buyers} title="Table 1 / Figure 2 — Auctioning the Elvis album" initialPrice={800} maxPrice={1100} unitLabel="Albums" />
  </div>
);

const S71b = () => (
  <div className="prose-uz">
    <p>
      Willingness to pay gives the demand schedule: above $1,000 — 0 albums; $800–$1,000 — 1 (only Whitney); $700–$800 — 2, and so on. The demand curve is the graph of
      this schedule — a staircase (Figure 1).
    </p>
    <p>
      A key observation: at each quantity the height of the curve is the willingness to pay of the <T id="marginal-buyer" /> — the buyer who would leave first if the
      price rose slightly. At 4 albums the height is $500 (Karen), at 3 it is $700 (Mariah).
    </p>
    <p>
      So the demand curve also measures surplus: <b>the area below the demand curve and above the price is the consumer surplus in the market</b>. Set the price to $700
      on the graph above — the two rectangles ($300 + $100) give the book's $400.
    </p>
  </div>
);

const S71c = () => (
  <div className="prose-uz">
    <p>
      With many buyers the steps are so small that the demand curve is smooth. When the price falls from P₁ to P₂, consumer surplus grows from triangle ABC to ADF.
      The increase (BCFD) has two parts:
    </p>
    <ul>
      <li>
        <b>Rectangle BCED</b> — those already buying now pay less;
      </li>
      <li>
        <b>Triangle CEF</b> — new buyers enter the market at the lower price (Q₁ → Q₂).
      </li>
    </ul>
    <PriceChangeSurplus side="consumers" />
  </div>
);

const S71d = () => (
  <div className="prose-uz">
    <p>
      Is consumer surplus a good measure of well-being? It measures the benefit buyers receive as they themselves perceive it — so it is a good measure if
      policymakers respect buyers' preferences.
    </p>
    <p>
      An exception: a drug addict is willing to pay a lot for drugs, yet policymakers wouldn't say he gets a great benefit from cheap drugs — he isn't acting in his
      own interest. In most markets, though, economists assume buyers are <b>rational</b> and respect their preferences: consumers are the best judges of how much
      benefit they get.
    </p>
  </div>
);

const S72a = () => (
  <div className="prose-uz">
    <p>
      Now the other side of the market. You want your house painted, and four painters offer their services. Each takes the job if the price exceeds their{' '}
      <T id="cost" />. Cost includes paint, brushes, and above all the value of their own time (opportunity cost). It is the lowest price they will accept.
    </p>
    <BookTable head={['Seller (Table 2)', 'Cost']} rows={painters.map((b) => [b.name, `$${b.value.toLocaleString('en-US')}`])} />
    <p>
      In the auction the price falls. When Andy bids $2,400 (or slightly less), he is the only one left. The job goes to whoever can do it most cheaply. Andy would
      have worked for $2,000 and received $2,400 — his <T id="producer-surplus" /> is <b>$400</b>. With two houses the price stops at $3,200: Andy $1,200, Pablo $800 —{' '}
      <b>$2,000</b> in total.
    </p>
    <StepSurplus kind="sellers" people={painters} title="Table 2 / Figure 5 — Auctioning the painting job" initialPrice={2400} maxPrice={4000} unitLabel="Houses Painted" />
  </div>
);

const S72b = () => (
  <div className="prose-uz">
    <p>
      Costs give the supply schedule: below $2,000 — 0; $2,000–$2,400 — 1 (Andy); $2,400–$3,200 — 2, and so on (Figure 4). The height of the supply curve is the cost of
      the <T id="marginal-seller" />: the seller who would leave first if the price fell slightly.
    </p>
    <p>
      So: <b>the area below the price and above the supply curve is the producer surplus in the market</b>. Set the price to $3,200 on the graph above and check the
      $2,000.
    </p>
  </div>
);

const S72c = () => (
  <div className="prose-uz">
    <p>When the price rises from P₁ to P₂, producer surplus grows from ABC to ADF (Figure 6):</p>
    <ul>
      <li>
        <b>BCED</b> — those already selling now receive more;
      </li>
      <li>
        <b>CEF</b> — the higher price brings new sellers into the market.
      </li>
    </ul>
    <PriceChangeSurplus side="producers" />
  </div>
);

const S73a = () => (
  <div className="prose-uz">
    <p>
      To evaluate the market outcome we introduce imaginary characters — <T id="benevolent-social-planner" label="benevolent social planners" />: all-powerful,
      all-knowing, and well-intentioned. To measure society's well-being they use <T id="total-surplus" />:
    </p>
    <M tex="\text{Total surplus} = (\text{Value to buyers} - \text{Amount paid}) + (\text{Amount received} - \text{Cost to sellers})" display />
    <p>What buyers pay equals what sellers receive, so these cancel:</p>
    <M tex="\text{Total surplus} = \text{Value to buyers} - \text{Cost to sellers}" display />
    <p>
      If an allocation maximizes total surplus, it is <T id="efficiency-surplus" label="efficient" />. Otherwise some gains from trade go unrealized — for example, if a
      good is produced by a high-cost rather than the lowest-cost producer, or consumed by a buyer who values it less rather than most.
    </p>
    <p>
      Planners may also care about <T id="equality" /> — how evenly well-being is distributed. Efficiency is how big the pie is; equality is how it is divided. This
      chapter focuses on efficiency, but real policymakers weigh both.
    </p>
  </div>
);

const S73b = () => (
  <div className="prose-uz">
    <p>
      At equilibrium: CS is the area above the price and below demand, PS the area below the price and above supply; total surplus is the area between demand and
      supply up to the equilibrium quantity (Figure 7).
    </p>
    <SupplyDemandGraph
      config={{ title: 'Figure 7 — Consumer and producer surplus in market equilibrium', demand: { a: 10, b: 0.1 }, supply: { c: 1, d: 0.08 }, xMax: 100, yMax: 10, modes: ['market', 'ceiling', 'floor'], surplus: true, surplusOn: true, qtyDigits: 0 }}
    />
    <p>Is the equilibrium allocation efficient? The price decides who takes part, which leads to three insights:</p>
    <ol>
      <li>
        <b>Free markets allocate the supply of goods to the buyers who value them most highly</b> (those with WTP &gt; price buy — segment AE).
      </li>
      <li>
        <b>Free markets allocate the demand for goods to the sellers who can produce them at the lowest cost</b> (those with cost &lt; price sell — CE).
      </li>
      <li>
        <b>Free markets produce the quantity of goods that maximizes the sum of consumer and producer surplus.</b>
      </li>
    </ol>
    <p>
      Check the third (Figure 8): at a quantity below equilibrium (Q₁) the value to the marginal buyer exceeds the marginal seller's cost — raising the quantity raises
      surplus. Above equilibrium (Q₂) — the reverse.
    </p>
    <EfficiencyExplorer />
    <p>
      So a planner who cares about efficiency should leave the market outcome alone — <T id="laissez-faire" />. Luckily for society, such heroes don't exist.
      Dictators may be nearly all-powerful, but they are rarely benevolent. Above all, they can't know every consumer's valuation and every producer's cost across
      thousands of markets. That is why centrally planned economies are full of inefficiency.
    </p>
    <p>
      Adam Smith's <b>invisible hand</b> makes the planner's job easy: it takes into account all the information about buyers and sellers and guides everyone to the
      best outcome as judged by efficiency.
    </p>
    <Callout kind="exam">
      The “three insights about market efficiency” come up often. Know all three: (1) highest-value buyers, (2) lowest-cost sellers, (3) the quantity that maximizes
      total surplus.
    </Callout>
    <BoxLink id="cs-organs">Case Study: Should There Be a Market for Organs?</BoxLink>
  </div>
);

const S74 = () => (
  <div className="prose-uz">
    <p>
      This chapter introduced the basic tools of welfare economics and showed that the forces of supply and demand allocate resources efficiently. But the
      conclusion rests on two assumptions:
    </p>
    <ul>
      <li>
        <b>Perfect competition.</b> In some markets one or a few participants can control the price — <T id="market-power" />. That moves price and quantity away from
        equilibrium and makes the market inefficient.
      </li>
      <li>
        <b>The outcome affects only buyers and sellers.</b> In reality market decisions sometimes affect bystanders: a pesticide affects not only the factory and the
        farmer but also people who breathe the polluted air and drink the water. Such side effects are <T id="externality" label="externalities" />.
      </li>
    </ul>
    <p>
      Both are forms of <T id="market-failure" /> — an unregulated market failing to allocate resources efficiently. Then public policy may improve matters (Chapter 10).
      Even so, in many markets this chapter's assumptions work well. The next two chapters apply these tools to two important policies: taxes (Chapter 8) and
      international trade (Chapter 9).
    </p>
    <BoxLink id="news-ticket-resellers">In the News: How Ticket Resellers Help Allocate Scarce Resources</BoxLink>
  </div>
);

function Organs() {
  return (
    <div className="prose-uz">
      <p>
        The Boston Globe told the story of a mother whose son needed a kidney, but hers was not a match. A doctor proposed: if she gave her kidney to a stranger, her
        son would move to the top of the waiting list. She agreed — and two patients got transplants.
      </p>
      <p>
        But questions arise: could she trade her kidney for expensive cancer treatment? For her son's medical-school tuition? Could she sell it and buy a new car? Many
        people find a trade in organs morally repugnant, and it is illegal.
      </p>
      <p>
        From an economic point of view, the government has imposed a <b>price ceiling of zero</b> in the market for kidneys. Like any binding ceiling, the result is a{' '}
        <b>shortage</b>: patients wait for years, and thousands die each year for lack of a compatible kidney. People are born with two kidneys and usually need only one.
        Supporters of a market argue that a price would balance supply and demand: sellers would earn money, and buyers would save their lives.
      </p>
      <p>
        Critics raise fairness: organs would go to those most able to pay — the rich. But is the current system fair? Most of us walk around with an extra organ, while
        some of us die for lack of one.
      </p>
      <AskExperts
        title="Supplying Kidneys"
        source="IGM, 2014"
        statement="A market that allows payment for human kidneys should be established on a trial basis to help extend the lives of patients with kidney disease."
        agree={57}
        uncertain={27}
        disagree={16}
      />
    </div>
  );
}

function TicketResellers() {
  return (
    <div className="prose-uz">
      <Source>Tracy C. Miller, “Scalping Isn't Scamming,” U.S. News and World Report, 2016 — summarized.</Source>
      <ul>
        <li>
          The average ticket to the musical “Hamilton” cost $189, yet resellers (scalpers) asked $1,000 or more. Senator Schumer proposed banning ticket-buying bots.
        </li>
        <li>
          The author: prices are high not because of scalpers but because of <b>high demand and limited supply</b>. Scalping gets the ticket to whoever values it most —
          even someone who decides at the last minute can find one.
        </li>
        <li>
          Scalpers help organizers too: revenue well before the event, with the scalper bearing the risk that demand falls. With more competition, their markups shrink.
        </li>
        <li>The conclusion: anti-scalping laws stop mutually beneficial deals — this chapter's logic of efficiency.</li>
      </ul>
      <Callout kind="tip" title="Questions to discuss">
        <ol>
          <li>Why do you think the producers of “Hamilton” sell tickets so much more cheaply than resellers do?</li>
          <li>Should selling tickets above face value be banned? Why?</li>
        </ol>
      </Callout>
    </div>
  );
}

const BertWidget = () => (
  <StepSurplus kind="buyers" people={[{ name: '1st', value: 7 }, { name: '2nd', value: 5 }, { name: '3rd', value: 3 }, { name: '4th', value: 1 }]} title="Problem 4 — Bert's bottles of water" initialPrice={4} maxPrice={8} unitLabel="Bottles" />
);
const ErnieWidget = () => (
  <StepSurplus kind="sellers" people={[{ name: '1st', value: 1 }, { name: '2nd', value: 3 }, { name: '3rd', value: 5 }, { name: '4th', value: 7 }]} title="Problem 5 — Ernie's costs" initialPrice={4} maxPrice={8} unitLabel="Bottles" />
);

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    'Explain the link between **willingness to pay**, **consumer surplus**, and the demand curve',
    'Link **cost**, **producer surplus**, and the supply curve',
    'Compute how CS and PS change when the price changes (existing and new participants)',
    'Define **total surplus** and **efficiency**; tell efficiency from equality',
    'Prove the **three insights** about market efficiency',
    'Name the two causes of market failure (market power, externalities)',
  ],
  sections: [
    sec('s-7-1a', '7-1a', 'Willingness to Pay', S71a, checks['s-7-1a']),
    sec('s-7-1b', '7-1b', 'Using the Demand Curve to Measure Consumer Surplus', S71b, checks['s-7-1b']),
    sec('s-7-1c', '7-1c', 'How a Lower Price Raises Consumer Surplus', S71c, checks['s-7-1c']),
    sec('s-7-1d', '7-1d', 'What Does Consumer Surplus Measure?', S71d, checks['s-7-1d']),
    sec('s-7-2a', '7-2a', 'Cost and the Willingness to Sell', S72a, checks['s-7-2a']),
    sec('s-7-2b', '7-2b', 'Using the Supply Curve to Measure Producer Surplus', S72b),
    sec('s-7-2c', '7-2c', 'How a Higher Price Raises Producer Surplus', S72c),
    sec('s-7-3a', '7-3a', 'Benevolent Social Planners', S73a, checks['s-7-3a']),
    sec('s-7-3b', '7-3b', 'Evaluating the Market Equilibrium', S73b, checks['s-7-3b']),
    sec('s-7-4', '7-4', 'Conclusion: Market Efficiency and Market Failure', S74, checks['s-7-4']),
  ],
  examTraps: [
    { title: 'The CS and PS areas', body: 'CS — **below demand, above the price**. PS — **below the price, above supply**. Area of a triangle: ½ × base × height.' },
    { title: 'How much does CS rise when the price falls?', body: 'The rectangle (existing buyers: ΔP × Q₁) **+** the triangle (new buyers). Hence “more than ΔP × Q₁” (QuickQuiz 3).' },
    { title: 'Cost = opportunity cost', body: "A seller's cost includes the **value of time**: 2 hours × $60 = $120 (QuickQuiz 7)." },
    { title: 'Efficiency ≠ equality', body: 'Efficiency — maximum total surplus (the size of the pie). Equality — an even distribution (how it is divided).' },
    { title: 'The three insights', body: '1) highest-WTP buyers, 2) lowest-cost sellers, 3) the Q that maximizes TS. Producing more than equilibrium is also inefficient.' },
  ],
  mistakes: [
    { wrong: '“CS = the sum of WTPs.”', right: 'CS = Σ(WTP − price) — only for those who buy.' },
    { wrong: '“Producing more is always better.”', right: 'Beyond equilibrium cost exceeds value — total surplus falls.' },
    { wrong: '“An efficient market is a fair market.”', right: 'Efficiency doesn’t guarantee a fair distribution.' },
    { wrong: '“Producer surplus = profit = revenue.”', right: 'PS = price − cost (including opportunity cost).' },
    { wrong: '“The height of the supply curve is the price.”', right: 'The height is **the cost of the marginal seller**.' },
  ],
  boxes: [
    box('cs-organs', 'Case Study', 'Should There Be a Market for Organs?', Organs),
    box('news-ticket-resellers', 'In the News', 'How Ticket Resellers Help Allocate Scarce Resources', TicketResellers),
  ],
  summary: [
    "**Consumer surplus** equals buyers' willingness to pay for a good minus the amount they actually pay; it measures the benefit buyers get from participating in a market. It is the area below the demand curve and above the price.",
    '**Producer surplus** equals the amount sellers receive for their goods minus their costs of production; it measures the benefit sellers get from participating in a market. It is the area below the price and above the supply curve.',
    'An allocation of resources that maximizes total surplus (CS + PS) is **efficient**. Policymakers are often concerned with **equality** as well as efficiency.',
    'Under normal conditions the equilibrium of supply and demand maximizes total surplus: the invisible hand of the marketplace leads buyers and sellers to allocate resources efficiently.',
    'Markets do not allocate resources efficiently in the presence of market failures such as **market power** or **externalities**.',
  ],
  widgets: { bert: BertWidget, ernie: ErnieWidget },
  gallery: [
    { title: 'Auction: willingness to pay and consumer surplus', Component: () => <StepSurplus kind="buyers" people={buyers} title="Auctioning the Elvis album" initialPrice={700} maxPrice={1100} unitLabel="Albums" /> },
    { title: 'CS when the price falls: existing and new buyers', Component: () => <PriceChangeSurplus side="consumers" /> },
    { title: 'PS when the price rises: existing and new sellers', Component: () => <PriceChangeSurplus side="producers" /> },
    { title: 'The efficiency of the equilibrium quantity', Component: () => <EfficiencyExplorer /> },
  ],
};
