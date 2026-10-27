import { CoaseLab, ExternalityGraph, PermitsGraph } from '../../../../components/graphs/ExternalityWidgets';
import { SupplyDemandGraph } from '../../../../components/graphs/SupplyDemandGraph';
import { Callout } from '../../../../components/ui/Kit';
import { AskExperts, BoxLink, Source } from '../../../../components/ui/Lesson';
import { Math as M } from '../../../../components/ui/Math';
import { T } from '../../../../components/ui/Term';
import { box, sec } from '../../../enPage';
import type { ChapterPageContent } from '../../../types';
import { checks } from '../quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        Paper mills release <b>dioxin</b> as a by-product of production — a chemical linked to cancer and birth defects. Neither the buyer nor the seller of paper pays for
        this harm: the people who live along the river “pay” for it.
      </p>
      <p>
        Chapters 4–9 showed that markets are usually efficient. But the invisible hand does not make the mill emit less dioxin. This chapter returns to another principle:{' '}
        <b>governments can sometimes improve market outcomes</b>. Summer smog in Tashkent, a neighbor's loud music at night, an unvaccinated child — all are forms of a single
        idea.
      </p>
    </div>
  );
}

const S10intro = () => (
  <div className="prose-uz">
    <p>
      An <T id="externality" /> arises when a person's action affects the well-being of a bystander and no compensation is paid. If the effect is harmful, it is negative; if
      beneficial, positive (<T id="negative-positive-externality" label="negative / positive externality" />). Because buyers and sellers ignore the effects on bystanders, the
      equilibrium is not efficient.
    </p>
    <ul>
      <li><b>Car exhaust</b> — negative: smog and climate change. Responses: emission standards, gasoline taxes, public transit, bike lanes.</li>
      <li><b>Restored historic buildings</b> — positive: passersby enjoy them. Responses: limits on demolition, tax breaks for restoration.</li>
      <li><b>Barking dogs</b> — negative: neighbors' sleep. Response: laws against “disturbing the peace.”</li>
      <li><b>Research into new technologies</b> — positive: the knowledge benefits others too. Response: the patent system.</li>
      <li><b>Crowded restaurants at the height of a pandemic</b> — negative: disease spreads. Response: temporary takeout-only rules (and compensation).</li>
    </ul>
  </div>
);

const S101a = () => (
  <div className="prose-uz">
    <p>
      From Chapter 7: the demand curve shows the value to consumers (WTP), the supply curve shows producers' costs. Without externalities, the equilibrium of the steel market{' '}
      <M tex="Q_{\text{MARKET}}" /> maximizes consumers' value minus producers' costs — it is efficient (Figure 1).
    </p>
    <SupplyDemandGraph
      config={{ title: 'Figure 1 — The market for steel (no externality)', demand: { a: 9, b: 0.08 }, supply: { c: 1, d: 0.06 }, xMax: 100, yMax: 10, modes: ['market'], surplus: true, surplusOn: true, labels: { demand: 'Demand (private value)', supply: 'Supply (private cost)', x: 'Quantity of Steel', y: 'Price of Steel' }, qtyDigits: 0 }}
    />
  </div>
);

const S101b = () => (
  <div className="prose-uz">
    <p>
      Now steel mills emit smoke: each ton of steel harms health and the climate. The cost to society is producers' private cost <b>plus</b> the harm to bystanders: the{' '}
      <T id="social-cost" />. The social-cost curve lies above supply; the gap is the external cost.
    </p>
    <p>
      A benevolent social planner would choose the quantity where demand meets <b>social cost</b> — <M tex="Q_{\text{OPTIMUM}}" />. The market sees only private cost and produces
      more: <M tex="Q_{\text{MARKET}} > Q_{\text{OPTIMUM}}" />. At the market equilibrium the marginal consumer values steel at less than its social cost — reducing production
      raises welfare.
    </p>
    <ExternalityGraph initial="negative" />
    <p>
      The remedy: a tax on each ton. If the tax equals the external cost, supply coincides with social cost and the market produces the optimal quantity. Such a tax{' '}
      <T id="internalizing-the-externality" label="internalizes" /> the externality — producers take the cost of pollution into account, and consumers respond to the higher price
      (“people respond to incentives”).
    </p>
  </div>
);

const S101c = () => (
  <div className="prose-uz">
    <p>
      Some activities benefit bystanders. Most benefits of education are private (higher wages, a broader outlook), but it also has positive externalities: better-informed voters
      — better government; less crime; faster technological progress — higher productivity and wages for everyone.
    </p>
    <p>
      Now the <T id="social-value" /> curve lies above the demand curve. The optimum is where social value meets supply, and it is <b>larger</b> than the market quantity: the
      market provides too little education. The remedy is the reverse: a <b>subsidy</b>. In reality education is heavily subsidized through public schools, grants, and tax breaks.
    </p>
    <ExternalityGraph initial="positive" />
    <Callout kind="exam">
      Negative externality → the market produces <b>too much</b> → <b>tax</b>. Positive externality → the market produces <b>too little</b> → <b>subsidy</b>. The ideal tax/subsidy
      = the external cost/benefit per unit.
    </Callout>
    <BoxLink id="cs-tech-spillovers">Case Study: Technology Spillovers, Industrial Policy, and Patent Protection</BoxLink>
  </div>
);

const S102a = () => (
  <div className="prose-uz">
    <p>
      Governments respond to externalities in two ways: <T id="command-and-control" /> — regulating behavior directly; and{' '}
      <T id="market-based-policy" label="market-based policies" /> — providing incentives so that people solve the problem themselves. Economists usually prefer the second, but the
      first is sometimes needed.
    </p>
    <p>
      Dumping toxic chemicals into the water supply is a crime: the external cost far exceeds the benefit, so a ban is right. But in most cases you can't ban everything: nearly all
      transportation (even a horse!) produces some pollution. Society must weigh costs and benefits to decide how much pollution to allow. In the U.S. this is the EPA's job: it sets
      limits or requires particular technologies. The problem: the regulator needs detailed knowledge of the industry's technologies, while firms have an incentive to hide it and
      exaggerate their costs.
    </p>
    <AskExperts
      title="Covid Vaccines"
      source="IGM, 2020"
      statement="Given the positive externalities from vaccination, an effective Covid-19 vaccine should be mandatory for every US resident (except those with health exceptions, such as infants and people with compromised immunity) with the cost covered by the federal government."
      agree={85}
      uncertain={10}
      disagree={5}
    />
  </div>
);

const S102b = () => (
  <div className="prose-uz">
    <p>
      A tax against a negative externality is a <T id="corrective-tax" /> (a Pigovian tax, after Arthur Pigou, 1877–1959). The ideal corrective tax equals the external cost, and
      the ideal subsidy equals the external benefit.
    </p>
    <p>
      <b>Example.</b> A paper mill and a steel mill each dump 500 tons of “glop” into a river every year. The EPA wants to reduce it:
    </p>
    <ul>
      <li><b>Regulation:</b> each plant must cut its pollution to 300 tons.</li>
      <li><b>Corrective tax:</b> $50,000 for each ton of glop.</li>
    </ul>
    <p>Most economists prefer the tax:</p>
    <ol>
      <li>The tax reduces pollution just as effectively: by choosing the tax level the EPA can reach any pollution level it wants.</li>
      <li>
        The tax does it <b>more cheaply</b>: if the paper mill can clean up more cheaply, it cuts a lot, while the steel mill cuts less and pays the tax. The tax allocates the right to
        pollute to the plants for which reducing it is most costly.
      </li>
      <li>The tax is better for the environment too: once it reaches 300 tons regulation stops providing an incentive, while a tax gives a continuing incentive for clean technology.</li>
    </ol>
    <p>
      Corrective taxes differ from other taxes: the taxes in Chapter 8 distort incentives and create a DWL, while a corrective tax <b>corrects</b> incentives — it both raises revenue
      and raises efficiency.
    </p>
    <BoxLink id="cs-gasoline">Case Study: Why Is Gasoline Taxed So Heavily?</BoxLink>
  </div>
);

const S102c = () => (
  <div className="prose-uz">
    <p>
      Suppose the EPA chose regulation: 300 tons per plant. Then the plants come with a proposal: the steel mill wants to emit 400 tons, and the paper mill agrees to cut to 200 tons
      in exchange for $5 million. The total is still 600 tons. Should it be allowed?
    </p>
    <p>
      From the standpoint of efficiency — <b>yes</b>: both plants agreed voluntarily (both gain), and total pollution is unchanged (no external effect). If such trades are allowed, a
      new scarce resource appears — <T id="pollution-permits" />. The market for permits allocates them to those who value them most — the firms for which abatement is most
      costly. The initial allocation does not affect efficiency.
    </p>
    <p>
      Permits and a corrective tax are very similar: in both cases firms pay to pollute (even those holding permits — they pay an opportunity cost by giving up the chance to sell
      them). A tax sets the <b>price</b>, permits set the <b>quantity</b> (Figure 4):
    </p>
    <PermitsGraph />
    <p>
      The choice matters when the demand curve is unknown: if the EPA wants an exact quantity (600 tons), it should auction permits and let the market find the price. If it knows
      the external cost precisely ($50,000/ton), it should set a tax and let the market find the quantity. A real success: the 1990 Clean Air Act amendments let power plants trade{' '}
      <b>SO₂</b> (a cause of acid rain) permits — pollution fell at low cost.
    </p>
  </div>
);

const S102d = () => (
  <div className="prose-uz">
    <p>
      “We cannot give anyone the option of polluting for a fee” — Senator Edmund Muskie (1972 Clean Water Act). In 1969 Cleveland's Cuyahoga River was so polluted that it
      caught fire. Many environmentalists regard clean air and water as priceless and economics as secondary or even distasteful.
    </p>
    <p>
      Many economists are environmentalists too, but they look through a different lens. The first principle: <b>people face trade-offs</b>. Eliminating pollution entirely is
      impossible — it would mean giving up the technologies that provide a high standard of living. Few people would accept poor food, poor medical care, or poor housing.
    </p>
    <p>
      It helps to see a clean environment as just another good: it is a normal good (rich countries spend more on a clean environment) and obeys the law of demand (the cheaper
      protection is, the more is demanded). Corrective taxes and permits make protection cheaper — so society will demand <b>more</b> of it.
    </p>
    <BoxLink id="cs-climate">Case Study: Climate Change and Carbon Taxes</BoxLink>
  </div>
);

const S103a = () => (
  <div className="prose-uz">
    <p>Government is not the only solution. Private solutions:</p>
    <ul>
      <li>
        <b>Moral codes and social sanctions.</b> Most people don't litter — even though the law is weakly enforced, it is wrong. “Do unto others as you would have them do unto you”
        — in economic terms: internalize externalities.
      </li>
      <li>
        <b>Charities.</b> The Sierra Club protects the environment; universities receive donations because education has positive externalities. The government encourages charity
        with tax deductions.
      </li>
      <li>
        <b>Merging businesses.</b> An apple orchard and a beekeeper benefit each other (the bees pollinate, the apple blossoms provide nectar), but each ignores this and keeps too
        few trees and too few bees. If they merge, one firm chooses the optimal numbers.
      </li>
      <li>
        <b>Contracts.</b> The orchard owner and the beekeeper can agree on the right number of trees and bees and on a payment.
      </li>
    </ul>
  </div>
);

const S103b = () => (
  <div className="prose-uz">
    <p>
      How effective is the private market? The <T id="coase-theorem" /> (Ronald Coase) answers: if private parties can bargain over the allocation of resources at <b>no cost</b>,
      the private market will always solve the problem of externalities.
    </p>
    <p>
      Emily's dog Clifford barks and bothers her neighbor Horace. The efficient outcome: if Emily's benefit exceeds Horace's cost, the dog stays; otherwise it goes to a new home.
      If Emily's benefit is $1,000 and Horace's cost is $1,500, Horace offers Emily $1,200 and she agrees — both gain. If Emily's benefit is $3,000, Horace won't offer more than
      $1,500 — the dog stays, which is also efficient.
    </p>
    <p>
      What if the right belonged to Horace? The outcome <b>doesn't change</b>: now Emily pays Horace and keeps the dog (if her benefit is larger). The right only determines{' '}
      <b>who pays whom</b> — that is, the distribution of welfare.
    </p>
    <CoaseLab />
  </div>
);

const S103c = () => (
  <div className="prose-uz">
    <p>Despite Coase's logic, private bargains often fail in practice:</p>
    <ul>
      <li>
        <b><T id="transaction-costs" label="Transaction costs" />.</b> If Emily and Horace speak different languages and need an interpreter, it may cost more than the bargain is
        worth. In reality — the costs of lawyers and contracts.
      </li>
      <li>
        <b>Bargaining breaks down.</b> Wars and strikes show how hard agreement can be. Emily demands $1,400, Horace offers $1,100 — even though an efficient deal is possible, they
        haggle and the dog keeps barking.
      </li>
      <li>
        <b>Too many parties.</b> A factory polluting a lake and hundreds of fishermen — coordinating them all is nearly impossible. Climate change is the most striking example.
      </li>
    </ul>
    <p>When private bargaining fails, the government — an institution for collective action — can act on the fishermen's behalf.</p>
    <BoxLink id="news-recline">In the News: The Coase Theorem in Action</BoxLink>
  </div>
);

const S104 = () => (
  <div className="prose-uz">
    <p>
      The invisible hand is powerful but not omnipotent. A market equilibrium maximizes CS + PS; if buyers and sellers are the only interested parties, this is efficient. With
      externalities, the well-being of bystanders must be counted too — and the market may allocate resources inefficiently.
    </p>
    <p>
      Sometimes people solve the problem themselves (Coase). If not, the government steps in — but even then it is better to <b>harness</b> market forces: corrective taxes and
      permits make participants bear the full cost of their actions. Properly directed market forces are often the best remedy for market failure.
    </p>
  </div>
);

function TechSpillovers() {
  return (
    <div className="prose-uz">
      <p>
        A <T id="technology-spillover" /> is the effect of one firm's research and production efforts on other firms' access to technology. Take industrial robots: each time a
        new robot is built, a new design may be discovered and added to society's pool of knowledge — a positive externality.
      </p>
      <p>The government could subsidize robot production: supply shifts down by the amount of the subsidy and the quantity rises. The ideal subsidy = the value of the spillover.</p>
      <ul>
        <li>
          Some economists say spillovers are pervasive and the industries with the largest spillovers should be encouraged (computer chips &gt; potato chips). The U.S. tax code
          favors R&amp;D; some countries subsidize particular industries — this is <T id="industrial-policy" />.
        </li>
        <li>
          Others are skeptical: spillovers are very hard to measure; the political system may subsidize the industries with the most powerful lobbies; the policy may be used to
          shield firms from competition.
        </li>
        <li>
          Another route is the <T id="patent" />: a property right for the inventor for a limited time. Others who use the invention need permission and pay royalties. The drawback
          — technology spreads more slowly, but the incentive for research is strong.
        </li>
      </ul>
    </div>
  );
}

function Gasoline() {
  return (
    <div className="prose-uz">
      <p>In many countries gasoline is among the most heavily taxed goods. The gas tax can be seen as a corrective tax against three negative externalities:</p>
      <ul>
        <li><b>Pollution:</b> smog increases heart and lung disease; fossil fuels are a main cause of climate change.</li>
        <li><b>Congestion:</b> the tax encourages public transit, cycling, carpooling, and living closer to work.</li>
        <li><b>Accidents:</b> the owner of a big SUV makes themselves safer but puts others at risk; the tax makes drivers take that risk into account.</li>
      </ul>
      <p>
        Unlike other taxes, the gas tax <b>improves</b> the economy: cleaner air, less congestion, safer roads. A 2007 study put the optimal tax at <b>$2.28/gallon</b> in 2005
        dollars (~<b>$3.20</b> in 2021 dollars). The actual U.S. tax in 2021 was only ~<b>55 cents</b>. The revenue could be used to cut other distorting taxes (income taxes); fuel
        economy mandates and electric-car subsidies would be unnecessary. But a high gas tax has never been politically popular.
      </p>
    </div>
  );
}

function Climate() {
  return (
    <div className="prose-uz">
      <p>
        Carbon emissions from human activity cause climate change — a classic negative externality. A citizen named Yoram wants to shrink his carbon footprint: a hybrid or
        electric car, carpooling, public transit, moving closer to work, a smaller home, adjusting the thermostat, solar panels, efficient appliances, local food, giving up beef…
        Every day we all make such private choices with global effects.
      </p>
      <p>Policymakers have three options:</p>
      <ol>
        <li><b>Appeal to social responsibility</b> — some people will respond, but expecting it from most is unrealistic.</li>
        <li>
          <b>Regulation</b> — for example, the U.S. CAFE (fuel economy) standards. Problems: the conflict between what consumers want and what producers are allowed to make (Robert
          Lutz: “CAFE is like trying to cure obesity by requiring clothing manufacturers to make smaller sizes”); most importantly — regulation affects only a few decisions, not
          where Yoram lives or whom he rides with.
        </li>
        <li>
          <b>A price on carbon</b> — a <T id="carbon-tax" /> or cap-and-trade. If sellers of gasoline, electricity, and beef pay for carbon, it enters prices and every consumer takes
          the global effect into account in all their decisions. It has worked in Europe but has not yet been adopted in the U.S.
        </li>
      </ol>
      <AskExperts
        title="Carbon Taxes"
        source="IGM, 2012"
        statement="A U.S. carbon tax of $20 per ton, increasing at 4 percent per year, … would involve fewer harmful net distortions to the U.S. economy than a tax increase that generated the same revenue by raising marginal tax rates on labor income across the board."
        agree={98}
        uncertain={2}
        disagree={0}
      />
      <AskExperts title="Carbon Taxes" source="IGM, 2011" statement="A tax on the carbon content of fuels would be a less expensive way to reduce carbon dioxide emissions than would a collection of policies such as ‘corporate average fuel economy’ requirements for automobiles." agree={95} uncertain={3} disagree={2} />
      <AskExperts title="Carbon Taxes" source="IGM, 2018" statement="Carbon taxes are a better way to implement climate policy than cap-and-trade." agree={79} uncertain={21} disagree={0} />
    </div>
  );
}

function Recline() {
  return (
    <div className="prose-uz">
      <Source>Josh Barro, “Don't Want Me to Recline My Airline Seat? You Can Pay Me,” New York Times, 2014 — summary.</Source>
      <ul>
        <li>
          On a United Airlines flight a passenger installed a $21.95 “Knee Defender” so the seat in front couldn't recline; the passenger in front threw water at him; the plane landed
          in Chicago and removed both.
        </li>
        <li>
          The author: when you buy a ticket you also buy the right to recline. If the passenger behind is bothered, they should pay you to buy that right — this is the{' '}
          <b>Coase theorem</b>: when rights are clearly defined and transaction costs are low, the right goes to whoever values it most.
        </li>
        <li>
          Donald Marron's objection: bargaining with a stranger is a transaction cost (sometimes ending with water in the face!). So the right should initially go to whoever is likely
          to value it most (the passenger behind). Barro: on hundreds of flights nobody has ever offered to pay him — so they don't value that right very much.
        </li>
      </ul>
      <Callout kind="tip" title="Questions to discuss">
        <ol>
          <li>Would you offer the passenger in front money not to recline? Why or why not?</li>
          <li>If the passenger behind offered you money, how would you respond? Why?</li>
        </ol>
      </Callout>
    </div>
  );
}

const Ext = () => <ExternalityGraph />;
const Permits = () => <PermitsGraph />;
const Coase = () => <CoaseLab />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    'Define an **externality** and give examples of negative and positive externalities',
    'Compare the market and optimal quantities using **social cost** and **social value** curves and show the DWL',
    'Explain how a **corrective (Pigovian) tax** and subsidy internalize an externality',
    'Compare regulation, corrective taxes, and **tradable permits**',
    'Explain the **Coase theorem** and why private solutions sometimes fail (transaction costs)',
  ],
  sections: [
    sec('s-10-0', '10', 'Externalities', S10intro),
    sec('s-10-1a', '10-1a', 'Welfare Economics: A Recap', S101a),
    sec('s-10-1b', '10-1b', 'Negative Externalities', S101b, checks['s-10-1b']),
    sec('s-10-1c', '10-1c', 'Positive Externalities', S101c, checks['s-10-1c']),
    sec('s-10-2a', '10-2a', 'Command-and-Control Policies: Regulation', S102a, checks['s-10-2a']),
    sec('s-10-2b', '10-2b', 'Market-Based Policy 1: Corrective Taxes and Subsidies', S102b, checks['s-10-2b']),
    sec('s-10-2c', '10-2c', 'Market-Based Policy 2: Tradable Pollution Permits', S102c, checks['s-10-2c']),
    sec('s-10-2d', '10-2d', 'Objections to the Economic Analysis of Pollution', S102d, checks['s-10-2d']),
    sec('s-10-3a', '10-3a', 'The Types of Private Solutions', S103a),
    sec('s-10-3b', '10-3b', 'The Coase Theorem', S103b, checks['s-10-3b']),
    sec('s-10-3c', '10-3c', 'Why Private Solutions Do Not Always Work', S103c, checks['s-10-3c']),
    sec('s-10-4', '10-4', 'Conclusion', S104),
  ],
  examTraps: [
    { title: 'Which curve shifts?', body: 'A negative production externality → **social cost** above supply. A positive consumption externality → **social value** above demand.' },
    { title: 'Too much or too little?', body: 'Negative → Q_market > Q_optimum (too much). Positive → Q_market < Q_optimum (too little).' },
    { title: 'A corrective tax creates no DWL', body: 'With an externality it **raises** efficiency (QuickQuiz 4).' },
    { title: 'Tax vs. permits', body: 'A tax sets the **price**, permits set the **quantity**. If technology improves: with a tax Q ↓, with permits P ↓.' },
    { title: 'Coase', body: 'Costless bargaining → an efficient outcome whoever holds the right; the right only decides **who pays**. Transaction costs or many parties → it fails.' },
  ],
  mistakes: [
    { wrong: '“An externality is a rise in the market price.”', right: 'An externality is an uncompensated effect on a **bystander**.' },
    { wrong: '“A positive externality needs a tax.”', right: 'Positive → **subsidy**; negative → tax.' },
    { wrong: '“The best is to bring pollution to zero.”', right: 'The optimal amount of pollution is usually above zero — trade-offs.' },
    { wrong: '“By the Coase theorem it doesn’t matter who holds the right.”', right: 'It doesn’t matter for efficiency, but it matters for the **distribution of welfare**.' },
    { wrong: '“Who gets the permits determines efficiency.”', right: 'With trading, the initial allocation doesn’t affect efficiency.' },
  ],
  boxes: [
    box('cs-tech-spillovers', 'Case Study', 'Technology Spillovers, Industrial Policy, and Patent Protection', TechSpillovers),
    box('cs-gasoline', 'Case Study', 'Why Is Gasoline Taxed So Heavily?', Gasoline),
    box('cs-climate', 'Case Study', 'Climate Change and Carbon Taxes', Climate),
    box('news-recline', 'In the News', 'The Coase Theorem in Action', Recline),
  ],
  summary: [
    'When a transaction between a buyer and seller directly affects a third party, the effect is called an **externality**. With a negative externality (pollution) the socially optimal quantity is **less** than the equilibrium quantity; with a positive one (technology spillovers) it is **greater**.',
    'Governments can remedy the inefficiencies caused by externalities: sometimes by **regulating** behavior, sometimes by internalizing the externality with **corrective taxes**, and sometimes by issuing **pollution permits** — whose outcome is much like a corrective tax.',
    'Those affected by externalities can sometimes solve the problem privately: by merging businesses or writing a contract. According to the **Coase theorem**, if bargaining is costless, the parties will reach an agreement that allocates resources efficiently. In many cases, however, bargaining among many parties is difficult and the theorem does not apply.',
  ],
  widgets: { ext: Ext, permits: Permits, coase: Coase },
  gallery: [
    { title: 'Externalities and Pigovian taxes/subsidies', Component: () => <ExternalityGraph /> },
    { title: 'Corrective taxes and pollution permits', Component: () => <PermitsGraph /> },
    { title: 'Coase theorem lab', Component: () => <CoaseLab /> },
  ],
};
