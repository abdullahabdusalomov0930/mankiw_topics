import { AdSignal, MarketStructureQuiz, MonopCompLab } from '../../../../components/graphs/Ch17Widgets';
import { Callout } from '../../../../components/ui/Kit';
import { BookTable, BoxLink } from '../../../../components/ui/Lesson';
import { T } from '../../../../components/ui/Term';
import { box, sec } from '../../../enPage';
import type { ChapterPageContent } from '../../../types';
import { checks } from '../quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        At a bookstore: a James Patterson thriller, a Maya Angelou memoir, a Ron Chernow history… What kind of market is this? On one hand, competitive: hundreds of authors and
        publishers; anyone can write a book, and the industry isn't very profitable. On the other, monopolistic: every book is unique and the price is far above MC (a hardcover novel
        ~$30, an extra copy &lt; $10; an e-book ~$15, MC = 0).
      </p>
      <p>
        Many real markets lie between perfect competition and monopoly — <T id="imperfect-competition" />. This chapter is about <T id="monopolistic-competition" />: it sounds like an
        oxymoron, like “jumbo shrimp,” but that's exactly what it is — monopolistic in some ways, competitive in others. Cafés, barbershops, and clothing stores in Tashkent are such a
        market.
      </p>
    </div>
  );
}

const S171 = () => (
  <div className="prose-uz">
    <p>
      One type of imperfect competition is <T id="oligopoly" />: a few sellers with strategic interaction among them (Chapter 18). The measure is the <T id="concentration-ratio" />:
      below 50% in most U.S. industries; above 90% in aircraft, tobacco, car rental, and express delivery.
    </p>
    <p>The features of monopolistic competition:</p>
    <ul>
      <li><b>Many sellers</b> — many firms compete for the same customers;</li>
      <li><T id="product-differentiation" /> — each firm's demand curve slopes down;</li>
      <li><b>Free entry and exit</b> — the number of firms adjusts until profit is 0.</li>
    </ul>
    <p>
      Figure 1: <b>How many firms?</b> One — monopoly; a few — oligopoly; many — the next question: <b>the product?</b> Identical — perfect competition; differentiated — monopolistic
      competition. The lines are debatable: are the ~12 U.S. car companies an oligopoly? Are different brands of milk identical?
    </p>
    <MarketStructureQuiz />
  </div>
);

const S172a = () => (
  <div className="prose-uz">
    <p>
      In the short run a monopolistic competitor resembles a monopolist: demand slopes down, quantity where MR = MC, price from the demand curve. Figure 2: (a) P &gt; ATC — profit; (b)
      P &lt; ATC — it minimizes its loss.
    </p>
  </div>
);

const S172b = () => (
  <div className="prose-uz">
    <p>
      Profit → new firms enter → customers are spread over more products → each existing firm's demand shifts <b>left</b>. Losses → exit → the remaining firms' demand shifts{' '}
      <b>right</b>. The process continues until profit is zero: the demand curve is <b>tangent</b> to ATC (tangency), and at exactly that quantity MR = MC (Figure 3).
    </p>
    <ul>
      <li>As under monopoly: <b>P &gt; MC</b> (MR = MC and MR &lt; P).</li>
      <li>As under competition: <b>P = ATC</b> (free entry and exit drive profit to 0). Unlike monopoly, there's no long-run profit.</li>
    </ul>
    <MonopCompLab />
  </div>
);

const S172c = () => (
  <div className="prose-uz">
    <p>Figure 4 — two differences:</p>
    <ul>
      <li>
        <T id="excess-capacity" />: a monopolistic competitor is on the falling part of ATC — it produces less than the efficient scale. To sell more it would have to cut the price on all
        units — so operating with excess capacity is more profitable. A perfect competitor, by contrast, is at the ATC minimum.
      </li>
      <li>
        <T id="markup" />: P &gt; MC. Zero profit guarantees only P = ATC, not P = MC; where ATC is falling, MC &lt; ATC = P. “Would you like another customer at the current price?” — the
        competitor is indifferent (P = MC), the monopolistic competitor is delighted. The joke: a monopolistically competitive market is one where sellers send customers{' '}
        <b>holiday cards</b>.
      </li>
    </ul>
  </div>
);

const S172d = () => (
  <div className="prose-uz">
    <p>Is monopolistic competition efficient? Two inefficiencies:</p>
    <ol>
      <li>
        <b>The markup</b> — buyers who value the good above MC but below the price don't buy: the usual DWL of monopoly. It's hard to fix: there are huge numbers of differentiated
        products — regulating them all is an enormous administrative burden; firms are already at zero profit — forcing P = MC would mean losses and require a subsidy (with the DWL of
        taxes).
      </li>
      <li>
        <b>The number of firms may not be ideal</b>: an entrant considers only its own profit, but there are two externalities — the <T id="product-variety-externality" /> (+) and the{' '}
        <T id="business-stealing-externality" /> (−). Depending on which is larger, there are too many or too few products. Under perfect competition these effects don't exist
        (identical products, P = MC).
      </li>
    </ol>
    <Callout kind="note">
      Conclusion: monopolistic competition lacks all the desirable properties of perfect competition, and the invisible hand doesn't maximize total surplus. But the inefficiencies are
      subtle, hard to measure and fix — policy can't easily improve on the market outcome.
    </Callout>
  </div>
);

const S173a = () => (
  <div className="prose-uz">
    <p>
      Advertising is a natural feature of monopolistic competition: because P &gt; MC, every firm wants to attract more buyers. Consumer goods (drugs, perfume, soft drinks, razors,
      cereal, dog food) spend 10–20% of revenue on it, industrial goods very little, identical commodities (wheat, salt, sugar, oil) nothing. Across the whole economy, ~2%.
    </p>
    <BookTable
      head={['Critics', 'Defenders']}
      rows={[
        ['It **manipulates** tastes — advertising is psychological, not informative (happy people on a beach and a soft drink)', 'It provides **information**: prices, new products, where to buy'],
        ['It **impedes competition**: artificial differentiation and brand loyalty → less elastic demand → a larger markup', 'It **promotes competition**: buyers exploit price differences, new firms enter more easily'],
      ]}
    />
    <p>
      Over time the view that “advertising increases competition” has gained ground: courts struck down laws banning advertising by lawyers, doctors, and pharmacists — laws that had
      mainly restricted competition.
    </p>
    <BoxLink id="cs-ad-prices">Case Study: How Advertising Affects Prices</BoxLink>
  </div>
);

const S173b = () => (
  <div className="prose-uz">
    <p>
      Even advertising with no apparent information can convey information: a firm's <b>willingness to spend a lot of money</b> on advertising is a signal of quality. General Mills and
      Kellogg each develop a new cereal ($5 a box, MC = 0). $20 million of advertising induces 1 million consumers to try it.
    </p>
    <AdSignal />
    <p>
      The content of the ad doesn't matter — consumers know advertising is expensive. Cheap advertising can't be a signal. That's why firms pay famous actors so much — the information
      is not in the ad's content but in its existence and expense.
    </p>
  </div>
);

const S173c = () => (
  <div className="prose-uz">
    <p>
      In many markets brand-name and generic products compete: Bayer and generic aspirin, Coke/Pepsi and lesser-known colas. Brand-name firms advertise more and charge more.{' '}
      <T id="brand-names" />:
    </p>
    <ul>
      <li>
        <b>Critics</b>: consumers perceive differences that don't exist — irrationality caused by advertising. Edward Chamberlin, a founder of the theory of monopolistic competition,
        proposed that the government stop protecting trademarks.
      </li>
      <li>
        <b>Defenders</b>: (1) information about quality that can't be judged in advance — in an unfamiliar town McDonald's offers the same product; (2) an incentive to maintain quality —
        food poisoning at one McDonald's damages the whole brand's reputation, while at a local restaurant only that restaurant closes.
      </li>
    </ul>
  </div>
);

const S174 = () => (
  <div className="prose-uz">
    <BookTable
      caption="Table 1 — Monopolistic Competition: Between Perfect Competition and Monopoly"
      head={['', 'Perfect competition', 'Monopolistic competition', 'Monopoly']}
      rows={[
        ['*Features that all three market structures share*', '', '', ''],
        ['Goal of firms', 'Maximize profits', 'Maximize profits', 'Maximize profits'],
        ['Rule for maximizing', 'MR = MC', 'MR = MC', 'MR = MC'],
        ['SR economic profits?', 'Yes', 'Yes', 'Yes'],
        ['*Features that monopolistic competition shares with monopoly*', '', '', ''],
        ['Price taker?', 'Yes', 'No', 'No'],
        ['Price', 'P = MC', 'P > MC', 'P > MC'],
        ['Welfare-maximizing output?', 'Yes', 'No', 'No'],
        ['*Features that monopolistic competition shares with competition*', '', '', ''],
        ['Number of firms', 'Many', 'Many', 'One'],
        ['Entry in the long run?', 'Yes', 'Yes', 'No'],
        ['LR economic profits?', 'No', 'No', 'Yes'],
      ]}
    />
    <p>
      The theory describes many markets but offers no simple policy advice: from the theorist's view the allocation is imperfect, but for the practical policymaker there's little that
      can be done to improve it.
    </p>
  </div>
);

function AdPrices() {
  return (
    <div className="prose-uz">
      <p>
        How does advertising affect prices? If it makes products seem more different — less elastic demand, higher prices. If it makes it easier to find the cheapest seller — more
        elastic demand, lower prices.
      </p>
      <ul>
        <li>
          <b>Lee Benham (1972)</b>: in the 1960s states had different rules on advertising by optometrists (Florida: a ban “in the interest of public health, safety, and welfare,”
          supported by optometrists). A natural experiment: in states with bans eyeglasses averaged <b>$33</b> ($288 in 2021 dollars), in unrestricted states <b>$26</b> ($227) —
          advertising lowered the price by more than 20%.
        </li>
        <li>
          <b>Rhode Island, 1996</b>: the Supreme Court struck down a ban on advertising liquor prices. Milyo and Waldfogel (1999) compared it with neighboring Massachusetts: stores that
          began advertising often cut prices by more than 20% — only on products they or their rivals advertised — and attracted more customers.
        </li>
      </ul>
      <p>Conclusion: in many markets advertising fosters competition and lowers prices for consumers.</p>
    </div>
  );
}

const Mc = () => <MonopCompLab />;
const Structure = () => <MarketStructureQuiz />;
const Signal = () => <AdSignal />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    'Distinguish the four market structures: monopoly, **oligopoly**, **monopolistic competition**, perfect competition',
    'The short- and long-run equilibrium of a monopolistic competitor — **tangency**, P = ATC, P > MC',
    'The differences from perfect competition: **excess capacity** and the **markup**',
    'Welfare: the DWL of the markup and the two externalities of entry',
    'The advertising debate, **advertising as a signal of quality**, and **brand names**',
  ],
  sections: [
    sec('s-17-1', '17-1', 'Between Monopoly and Perfect Competition', S171, checks['s-17-1']),
    sec('s-17-2a', '17-2a', 'The Monopolistically Competitive Firm in the Short Run', S172a, checks['s-17-2a']),
    sec('s-17-2b', '17-2b', 'The Long-Run Equilibrium', S172b, checks['s-17-2b']),
    sec('s-17-2c', '17-2c', 'Monopolistic versus Perfect Competition', S172c, checks['s-17-2c']),
    sec('s-17-2d', '17-2d', 'Monopolistic Competition and the Welfare of Society', S172d, checks['s-17-2d']),
    sec('s-17-3a', '17-3a', 'The Debate over Advertising', S173a, checks['s-17-3a']),
    sec('s-17-3b', '17-3b', 'Advertising as a Signal of Quality', S173b, checks['s-17-3b']),
    sec('s-17-3c', '17-3c', 'Brand Names', S173c, checks['s-17-3c']),
    sec('s-17-4', '17-4', 'Conclusion', S174),
  ],
  examTraps: [
    { title: 'Tangency', body: 'In the long run demand is **tangent** to ATC (doesn’t cross it), and at that Q, MR = MC. P = ATC, but P > MC.' },
    { title: 'The entry condition', body: 'Entry — **P > ATC** (QQ 4); raising output — **MR > MC** (QQ 3).' },
    { title: 'Advertising and elasticity', body: 'Loyalty → elasticity ↓, markup ↑ (QQ 6). Information → elasticity ↑, markup ↓ (QQ 7).' },
    { title: 'The signaling condition', body: 'When attracting a customer is worth more for a good product; it’s the ad’s cost, not its content (QQ 8).' },
    { title: 'Oligopoly ≠ monopolistic competition', body: 'Oligopoly — **few** firms; monopolistic competition — **many** firms, differentiated products.' },
  ],
  mistakes: [
    { wrong: '“A monopolistic competitor earns profit in the long run.”', right: 'Free entry drives profit to **zero**; LR profit is a feature of monopoly.' },
    { wrong: '“With zero profit, P = MC.”', right: 'Zero profit means only P = ATC; where ATC is falling, MC < ATC, so P > MC.' },
    { wrong: '“A monopolistic competitor operates at the efficient scale.”', right: '**Below** it — excess capacity.' },
    { wrong: '“Advertising always raises prices.”', right: 'Benham: advertising cut eyeglass prices by 20%+.' },
  ],
  boxes: [box('cs-ad-prices', 'Case Study', 'How Advertising Affects Prices', AdPrices)],
  summary: [
    'A monopolistically competitive market has three features: **many firms**, **differentiated products**, and **free entry and exit**.',
    'The long-run equilibrium under monopolistic competition differs from perfect competition in two ways: (1) each firm has **excess capacity** — it operates on the falling part of ATC; (2) each firm charges a **price above MC**.',
    'Monopolistic competition lacks all the desirable properties of perfect competition: there is the usual DWL of monopoly caused by the markup, and the number of firms (and product varieties) can be too large or too small. In practice, policymakers’ ability to correct these inefficiencies is limited.',
    'Product differentiation leads to **advertising** and **brand names**. Critics argue they manipulate tastes and reduce competition; defenders argue they inform consumers and increase competition on price and quality.',
  ],
  widgets: { mc: Mc, structure: Structure, signal: Signal },
  gallery: [
    { title: 'Monopolistic competition: tangency, markup, excess capacity', Component: Mc },
    { title: 'Four market structures: a sorting game', Component: Structure },
    { title: 'Advertising as a signal of quality (General Mills and Kellogg)', Component: Signal },
  ],
};
