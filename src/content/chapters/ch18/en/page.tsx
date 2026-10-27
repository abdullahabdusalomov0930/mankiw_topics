import { BundlingLab, DuopolyLab, GameLab, Tournament } from '../../../../components/graphs/GameWidgets';
import { Callout } from '../../../../components/ui/Kit';
import { AskExperts, BookTable, BoxLink, Source } from '../../../../components/ui/Lesson';
import { T } from '../../../../components/ui/Term';
import { box, sec } from '../../../enPage';
import type { ChapterPageContent } from '../../../types';
import { checks } from '../quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        If you play tennis, your ball probably comes from Penn, Wilson, Dunlop, Prince, or Babolat. These few companies supply most of the tennis balls in the U.S. and together determine
        quantity and price — an <T id="oligopoly" />. The essence: there are few sellers, so each one's actions strongly affect the others' profits.
      </p>
      <p>
        The analysis leads us to <T id="game-theory" /> — how people behave in strategic situations, in chess as in business. In an oligopoly there is constant tension between cooperation
        and self-interest. The same logic works in Uzbekistan's few-player markets such as cement, mobile communications, or air travel.
      </p>
    </div>
  );
}

const S181a = () => (
  <div className="prose-uz">
    <p>
      The simplest oligopoly is a <T id="duopoly" />. In a small town only Jack's and Jill's wells give clean water; every Saturday they decide how much water to pump, with MC = 0. So
      revenue = profit.
    </p>
    <BookTable
      caption="Table 1 — The Demand Schedule for Water"
      head={['Quantity', 'Price', 'Total revenue (and profit)']}
      rows={[
        ['0 gallons', '$120', '$0'],
        ['10', '110', '1,100'],
        ['20', '100', '2,000'],
        ['30', '90', '2,700'],
        ['40', '80', '3,200'],
        ['50', '70', '3,500'],
        ['**60**', '**60**', '**3,600**'],
        ['70', '50', '3,500'],
        ['80', '40', '3,200'],
        ['90', '30', '2,700'],
        ['100', '20', '2,000'],
        ['110', '10', '1,100'],
        ['120', '0', '0'],
      ]}
    />
  </div>
);

const S181b = () => (
  <div className="prose-uz">
    <p>
      Under competition P = MC = 0, Q = 120 — efficient. Under monopoly profit is maximized: 60 gallons, $60. If Jack and Jill agree — <T id="collusion" /> — they become a{' '}
      <T id="cartel" />: in effect a monopoly, 60 gallons, $60. A cartel must agree not only on total quantity but also on each member's share: if they split it equally, each produces 30
      gallons and earns $1,800.
    </p>
  </div>
);

const S181c = () => (
  <div className="prose-uz">
    <p>
      Cartels are often impossible: disputes over dividing profits, antitrust laws (even talking with a rival about prices can be a crime). What if they decide independently? Jack: “If
      Jill makes 30, I could make 30 too — $1,800. But if I make 40: the total is 70, the price $50, and I get $2,000!” Jill reasons the same way → 40 + 40 = 80, price $40, $1,600 each.
      Going from 40 to 50 would give Jack $1,500 — not worthwhile.
    </p>
    <p>
      40 + 40 is a <T id="nash-equilibrium" />: each chooses its best given the other's choice. The result: oligopoly quantity is <b>greater than monopoly but less than competition</b>;
      the price is below monopoly and above competition (MC).
    </p>
    <DuopolyLab />
  </div>
);

const S181d = () => (
  <div className="prose-uz">
    <p>
      Jude and Jade also find wells — 4 sellers. As a cartel grows, agreeing and hiding from antitrust become harder. Without a cartel, each well owner weighs two effects of an extra
      gallon:
    </p>
    <ul>
      <li><b>The output effect</b>: P &gt; MC — selling one more gallon raises profit;</li>
      <li><b>The price effect</b>: total quantity rises and the price falls — profit on the other gallons falls.</li>
    </ul>
    <p>
      As firms multiply, each one's share is small → the price effect shrinks; with very many it disappears, and firms produce up to P = MC like competitors. International trade: if each
      country has two car makers (Toyota–Honda, VW–BMW, Ford–GM), opening trade makes a 6-member oligopoly and prices move toward MC — another benefit of free trade beyond comparative
      advantage.
    </p>
    <AskExperts
      title="Market Share and Market Power"
      source="IGM, September 25, 2018"
      statement="If a small number of firms have a large combined market share in a properly defined market, it is strong evidence that those firms have substantial market power."
      agree={54}
      uncertain={21}
      disagree={25}
    />
  </div>
);

const S182a = () => (
  <div className="prose-uz">
    <p>
      The <T id="prisoners-dilemma" />: Bonnie and Clyde are sure to get 1 year for an unregistered gun; the police can't prove the bank robbery. In separate rooms comes the offer:
      “Confess and implicate your partner — you go free and they get 20 years; if you both confess — 8 years each.”
    </p>
    <p>
      Bonnie: if Clyde stays silent, confessing sets me free (instead of 1 year); if he confesses, confessing gives me 8 years (instead of 20). Confessing is better either way — a{' '}
      <T id="dominant-strategy" />. Clyde reasons the same → both get 8 years (Nash), whereas staying silent would give 1 year. Even if they swore beforehand “we'll never confess,”
      self-interest wins in separate interrogations.
    </p>
    <GameLab />
  </div>
);

const S182b = () => (
  <div className="prose-uz">
    <p>
      Jack and Jill agreed on 30 + 30. Jack: if Jill makes 30 — $2,000 at 40 &gt; $1,800 at 30; if Jill makes 40 — $1,600 at 40 &gt; $1,500 at 30. 40 is dominant. The outcome — 40 + 40.
      The monopoly outcome is jointly rational, but each has an incentive to cheat.
    </p>
    <BoxLink id="cs-opec">Case Study: OPEC and the World Oil Market</BoxLink>
  </div>
);

const S182c = () => (
  <div className="prose-uz">
    <ul>
      <li>
        <b>The arms race</b> (Figure 3): arming is dominant for the U.S. and the USSR → both are at risk. It motivated much of the early work on game theory; today it applies to the U.S.,
        Russia, and China as well. Disarmament talks resemble cartel problems (who cuts how much, fear of cheating); transparency and strict verification can escape the dilemma.
      </li>
      <li>
        <b>Common resources</b> (Figure 4): $120 million of oil under ExxonMobil and Chevron, a well costs $10 million. One well each — $50 million each. A second well: the company with two
        wells gets ⅔ (60 million), the other ⅓ (30 million); if both drill — 40 million. Two wells is dominant → waste.
      </li>
    </ul>
  </div>
);

const S182d = () => (
  <div className="prose-uz">
    <p>
      Is the lack of cooperation bad for society? It depends: in the arms race and common-resource cases — <b>bad</b> (risk, waste). In oligopoly — <b>good</b>: the monopoly outcome hurts
      consumers, and the noncooperative quantity is closer to the efficient level. The invisible hand works efficiently only when markets are competitive, and markets are competitive when
      firms fail to cooperate. The prisoners' dilemma is a dilemma for the prisoners and a benefit for everyone else.
    </p>
  </div>
);

const S182e = () => (
  <div className="prose-uz">
    <p>
      Cooperation is hard but not impossible: when the game is <b>repeated</b>. Jack and Jill play every week and agree: “if one makes 40, both make 40 forever.” This penalty is easy to
      enforce. Cheating gives one week of $1,800 → $2,000, then $1,600 forever — if they value the future, cooperation holds.
    </p>
    <Tournament />
    <BoxLink id="cs-tournament">Case Study: The Prisoners' Dilemma Tournament</BoxLink>
  </div>
);

const S183a = () => (
  <div className="prose-uz">
    <p>
      Freedom of contract is a foundation of the market economy, yet for centuries English and American courts <b>refused to enforce</b> agreements among rivals to cut quantities and raise
      prices. The <b>Sherman Act (1890)</b> declared illegal every contract, combination, or conspiracy in restraint of trade — agreements became criminal conspiracies. The{' '}
      <b>Clayton Act (1914)</b>: an injured party can sue and recover <b>three times</b> its damages — encouraging private suits. Today both the Justice Department and private parties can
      bring antitrust suits.
    </p>
    <BoxLink id="cs-phone-call">Case Study: An Illegal Phone Call</BoxLink>
  </div>
);

const S183b = () => (
  <div className="prose-uz">
    <p>Almost everyone agrees that price-fixing agreements should be illegal. But three practices are controversial:</p>
    <ul>
      <li>
        <T id="resale-price-maintenance" />: Superduper Electronics sells a smartphone for $400 and requires retailers to charge $500. It looks like a cartel, but defenders argue: the
        manufacturer would exercise any market power through the wholesale price and has no interest in a retailers' cartel; the goal is to stop discounters from <b>free riding</b> on
        showroom and knowledgeable-staff services.
      </li>
      <li>
        <T id="predatory-pricing" />: after Roadrunner Express enters, Coyote Air cuts prices below cost to drive it out. Some economists: rarely profitable — cheap fares attract more
        passengers, Coyote must fly more flights and bears more than 80% of the losses itself, while Roadrunner cuts back its flights.
      </li>
      <li>
        <T id="bundling" />: Makemoney Movies sells “Superheroes” and “Hamlet” together. The Supreme Court banned it (as extending market power). Stigler (1963): if Hamlet is valued at 0,
        bundling doesn't raise WTP; the real reason is price discrimination.
      </li>
    </ul>
    <BundlingLab />
    <Callout kind="exam">QQ 8: antitrust is controversial because some practices that seem to reduce competition may have <b>legitimate purposes</b>.</Callout>
    <AskExperts
      title="Antitrust in the Digital Economy (1)"
      source="IGM, November 3, 2020"
      statement="Google's dominance of the market for internet search arose mainly from a combination of economies of scale and a quality algorithm."
      agree={95}
      uncertain={5}
      disagree={0}
    />
    <AskExperts
      title="Antitrust in the Digital Economy (2)"
      source="IGM, November 3, 2020"
      statement="In light of Google's dominance, its current operating practices could have a substantial negative effect on social welfare in the long run."
      agree={52}
      uncertain={41}
      disagree={7}
    />
    <AskExperts
      title="Antitrust in the Digital Economy (3)"
      source="IGM, December 22, 2020"
      statement="The nature of the market dominance of technology giants in the digital economy warrants either the imposition of some kind of regulation or a fundamental change in antitrust policy."
      agree={53}
      uncertain={26}
      disagree={21}
    />
    <AskExperts
      title="Antitrust in the Digital Economy (4)"
      source="IGM, December 22, 2020"
      statement="Requiring Facebook to divest WhatsApp and Instagram is likely to make society better off."
      agree={59}
      uncertain={25}
      disagree={16}
    />
    <Callout kind="note" title="About the percentages">The four survey results are printed as images in the book; they were paired with the statements in the order of the text layer (95/5/0, 52/41/7, 53/26/21, 59/25/16).</Callout>
    <BoxLink id="cs-microsoft">Case Study: The Microsoft Case</BoxLink>
  </div>
);

const S184 = () => (
  <div className="prose-uz">
    <p>
      Oligopolists would like to act like a monopoly, but self-interest pushes them toward competition. Where they end up depends on the number of firms and how cooperative they are. The
      scope of antitrust laws is controversial: price fixing is clearly harmful, but some practices that seem to reduce competition may have subtle legitimate purposes — policymakers must
      be careful.
    </p>
    <BoxLink id="news-amazon">In the News: Amazon in the Crosshairs</BoxLink>
  </div>
);

function Opec() {
  return (
    <div className="prose-uz">
      <p>
        Replace water with crude oil and Jack and Jill with Saudi Arabia and Iraq — and you're close to reality. <b>OPEC</b> was formed in 1960 (Saudi Arabia, Iraq, Iran, the UAE,
        Kuwait, Venezuela, and others); in 2016 ten more countries led by Russia joined — <b>OPEC Plus</b>. The cartel sets production quotas for members; but each is tempted to pump more
        and raise its share of profit — and they often cheat.
      </p>
      <ul>
        <li>1973–1985 — success: oil went from $3 (1972) → $11 (1974) → $35 (1981).</li>
        <li>The mid-1980s — disputes over quotas: $13 in 1986.</li>
        <li>In recent years agreements have been weak; fracking increased world supply and reduced OPEC's power; price swings come mainly from supply and demand.</li>
      </ul>
    </div>
  );
}

function TournamentCase() {
  return (
    <div className="prose-uz">
      <p>
        If you played the prisoners' dilemma many times with the same person, what strategy would you choose? To encourage cooperation you must punish cheating; but Jack and Jill's “cheat
        once and I'll cheat forever” strategy is unforgiving. In a repeated game a strategy that allows a return to cooperation may be better.
      </p>
      <p>
        Political scientist <b>Robert Axelrod</b> held a contest: participants sent in computer programs to play the repeated prisoners' dilemma, each playing all the others round-robin,
        with the goal of the fewest years in jail. The winner was the simple <T id="tit-for-tat" />: cooperate first, then do whatever the rival did last time. It starts friendly,
        punishes, and forgives — and beat complex programs. “An eye for an eye, a tooth for a tooth” may be a good rule for the games of life.
      </p>
    </div>
  );
}

function PhoneCall() {
  return (
    <div className="prose-uz">
      <p>
        Adam Smith: people of the same trade seldom meet together, but the conversation ends in a conspiracy against the public or a contrivance to raise prices. A modern example from the
        early 1980s, the New York Times (February 24, 1983): American Airlines president Robert Crandall called Braniff Airways president Howard Putnam, said it was dumb for them to be
        “beating each other's brains out” and making no money, and proposed: <i>raise your fares 20%, and I'll raise mine the next morning</i>. Putnam: “We can't talk about pricing!”
      </p>
      <p>
        Putnam was right — the Sherman Act forbids rival executives even to talk about prices. He gave the tape to the Justice Department, which sued Crandall. Two years later a settlement:
        Crandall agreed to restrictions on his business activities, including his contacts with other airline executives.
      </p>
    </div>
  );
}

function Microsoft() {
  return (
    <div className="prose-uz">
      <p>
        1998: the U.S. Justice Department versus Microsoft (Bill Gates). For the government, MIT professor Franklin Fisher; for Microsoft, his former student Richard Schmalensee. The key
        issue was <b>bundling</b>: including Internet Explorer in Windows.
      </p>
      <ul>
        <li>The government: Microsoft was extending its power in operating systems into the browser market and impeding other developers; more than 80% of new computers ran Windows — in effect a monopoly.</li>
        <li>Microsoft: adding new features to an old product is technological progress (CD players in cars, flashes in cameras); Windows always competes with Mac and Linux; its price is ~$50 (~3% of a computer) — its power is limited.</li>
        <li>1999: Judge Penfield Jackson ruled that Microsoft had illegally abused monopoly power; in 2000 he ordered it split into two companies. 2001: an appeals court overturned that; 2002: a settlement — some restrictions, the browser stays in Windows.</li>
        <li>June 2021: Microsoft retired Explorer and replaced it with Edge. Some analysts say the settlement opened the way for the rise of Chrome and Safari.</li>
      </ul>
    </div>
  );
}

function Amazon() {
  return (
    <div className="prose-uz">
      <Source>Gilad Edelman, “A New Antitrust Case Cuts to the Core of Amazon's Identity,” Wired, May 25, 2021</Source>
      <ul>
        <li>Bezos: Amazon is “Earth's most customer-centric company.” A lawsuit by Washington, D.C., Attorney General Karl Racine challenges that narrative.</li>
        <li>A <b>most-favored-nation</b> clause: third-party sellers may not sell more cheaply on other sites (even their own) — this raises prices across the internet and keeps rival platforms from competing on price.</li>
        <li>Amazon dropped its “price parity” rule in Europe in 2013 and in the U.S. in 2019, but according to the suit its “Marketplace Fair Pricing Policy” has the same effect: sellers who sell more cheaply elsewhere lose the <b>Buy Box</b>.</li>
        <li>Seller Jason Boyce: after he cut prices on Walmart and Sears, the “Add to Cart” button disappeared on Amazon and sales and advertising fell; when he raised prices everywhere, it all came back within 24 hours.</li>
        <li>Such clauses aren't illegal in themselves — the problem is a dominant firm: Amazon has 50–70% of U.S. online retail, and 74% of consumers go straight to Amazon.</li>
      </ul>
      <Callout kind="tip" title="Questions to discuss">
        <ol>
          <li>Have you bought from Amazon? Were the price and service good?</li>
          <li>Should Amazon be banned from favoring sellers who offer its customers the lowest prices? Why or why not?</li>
        </ol>
      </Callout>
    </div>
  );
}

const Duo = () => <DuopolyLab />;
const Games = () => <GameLab />;
const Tour = () => <Tournament />;
const Bundle = () => <BundlingLab />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    'Explain the tension between cooperation and self-interest in an oligopoly: **cartel**, **collusion**',
    'Find a duopoly’s **Nash equilibrium** and compare it with monopoly and competition',
    'Show through the output and price effects that a market approaches competition as the number of firms grows',
    'The **prisoners’ dilemma**, **dominant strategy**; applications to oligopoly, arms races, common resources; repeated games and **tit-for-tat**',
    'Antitrust laws and controversial practices: resale price maintenance, predatory pricing, bundling',
  ],
  sections: [
    sec('s-18-1a', '18-1a', 'A Duopoly Example', S181a, checks['s-18-1a']),
    sec('s-18-1b', '18-1b', 'Competition, Monopolies, and Cartels', S181b, checks['s-18-1b']),
    sec('s-18-1c', '18-1c', 'The Equilibrium for an Oligopoly', S181c, checks['s-18-1c']),
    sec('s-18-1d', '18-1d', 'How the Size of an Oligopoly Affects the Market Outcome', S181d, checks['s-18-1d']),
    sec('s-18-2a', '18-2a', "The Prisoners' Dilemma", S182a, checks['s-18-2a']),
    sec('s-18-2b', '18-2b', "Oligopolies as a Prisoners' Dilemma", S182b, checks['s-18-2b']),
    sec('s-18-2c', '18-2c', "Other Examples of the Prisoners' Dilemma", S182c, checks['s-18-2c']),
    sec('s-18-2d', '18-2d', "The Prisoners' Dilemma and the Welfare of Society", S182d, checks['s-18-2d']),
    sec('s-18-2e', '18-2e', 'Why People Sometimes Cooperate', S182e, checks['s-18-2e']),
    sec('s-18-3a', '18-3a', 'Restraint of Trade and the Antitrust Laws', S183a, checks['s-18-3a']),
    sec('s-18-3b', '18-3b', 'Controversies over Antitrust Policy', S183b, checks['s-18-3b']),
    sec('s-18-4', '18-4', 'Conclusion', S184),
  ],
  examTraps: [
    { title: 'Three outcomes', body: 'Cartel = monopoly (60, $60). No cartel = Nash (80, $40). Competition (120, $0). QQ 2–4.' },
    { title: 'Nash ≠ the best outcome', body: 'A Nash equilibrium can be **worse** for both than cooperation (the prisoners’ dilemma, QQ 5).' },
    { title: 'A dominant strategy isn’t required', body: 'Synergy–Dynaco: there’s a Nash equilibrium even though one player has no dominant strategy.' },
    { title: 'Bad for whom?', body: 'In oligopoly the lack of cooperation is **good** for society; in arms races and common resources — **bad**.' },
    { title: 'A credible threat', body: 'Kona–Brew: a player won’t carry out a threat that goes against its own interest — not credible.' },
  ],
  mistakes: [
    { wrong: '“Oligopolists always earn monopoly profits.”', right: 'Because of the incentive to cheat, they often end up at the Nash outcome.' },
    { wrong: '“More firms — a price closer to monopoly.”', right: 'More firms — a price closer to **MC**.' },
    { wrong: '“Cooperation is impossible even in a repeated game.”', right: 'The threat of future punishment (tit-for-tat) sustains cooperation (QQ 6).' },
    { wrong: '“Bundling always extends market power.”', right: 'Stigler: often price discrimination; the debate continues.' },
  ],
  boxes: [
    box('cs-opec', 'Case Study', 'OPEC and the World Oil Market', Opec),
    box('cs-tournament', 'Case Study', "The Prisoners' Dilemma Tournament", TournamentCase),
    box('cs-phone-call', 'Case Study', 'An Illegal Phone Call', PhoneCall),
    box('cs-microsoft', 'Case Study', 'The Microsoft Case', Microsoft),
    box('news-amazon', 'In the News', 'Amazon in the Crosshairs', Amazon),
  ],
  summary: [
    'Oligopolists maximize their total profit by forming a cartel and acting like a monopolist. But if they make decisions individually, the quantity is **greater** and the price **lower** than under monopoly. The more firms in an oligopoly, the closer the quantity and price are to perfect competition.',
    'The **prisoners’ dilemma** shows that self-interest can prevent people from maintaining cooperation even when it is mutually beneficial. Its logic applies to arms races, common resources, and oligopolies.',
    'Policymakers use **antitrust** laws to prevent oligopolies from engaging in behavior that reduces competition. Applying them is controversial, because some practices that seem to reduce competition may have legitimate business purposes.',
  ],
  widgets: { duopoly: Duo, games: Games, tournament: Tour, bundling: Bundle },
  gallery: [
    { title: 'Duopoly: Jack and Jill, N sellers', Component: Duo },
    { title: 'Game theory: dominant strategy and Nash', Component: Games },
    { title: 'Axelrod’s tournament: tit-for-tat', Component: Tour },
    { title: 'Bundling: Stigler’s example', Component: Bundle },
  ],
};
