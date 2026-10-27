import { InternationalTradeGraph } from '../../../../components/graphs/InternationalTradeGraph';
import { Callout } from '../../../../components/ui/Kit';
import { AskExperts, BookTable, BoxLink, Source } from '../../../../components/ui/Lesson';
import { T } from '../../../../components/ui/Term';
import { demandThrough, supplyThrough } from '../../../../lib/econ';
import { box, sec } from '../../../enPage';
import type { ChapterPageContent } from '../../../types';
import { checks } from '../quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        Check the labels on your clothes: “Made in China,” “Made in Bangladesh,” “Made in Turkey”… or “Made in Uzbekistan.” A century ago almost all clothing in the
        United States was made at home. When foreign factories learned to produce more cheaply, American factories closed and their workers lost their jobs.
      </p>
      <p>
        How does international trade affect economic well-being? Who gains, who loses, and do the gains exceed the losses? Chapter 3 explained why trade is beneficial
        using comparative advantage. This chapter uses the tools of supply, demand, and surplus to measure <b>who</b> gains and <b>how much</b>.
      </p>
    </div>
  );
}

const S91a = () => (
  <div className="prose-uz">
    <p>
      Consider the textile market of the imaginary country <b>Isoland</b>. By government decree imports and exports are banned — the market has only domestic buyers and
      sellers. The price balances domestic supply and demand (Figure 1).
    </p>
    <p>
      The newly elected president, Olivia Openminded, asks her economists three questions: (1) if trade opens, how will the price and quantity change? (2) who gains, who
      loses, and do the gains exceed the losses? (3) should a tariff (a tax on imports) be part of the new policy?
    </p>
  </div>
);

const S91b = () => (
  <div className="prose-uz">
    <p>
      Will Isoland become an exporter or an importer? Economists compare the domestic price with the price in other countries — the <T id="world-price" />. If the world
      price is higher, producers will want to sell abroad — <b>exports</b>. If it is lower, consumers will buy from abroad — <b>imports</b>.
    </p>
    <p>
      This is really a question of comparative advantage: the <T id="domestic-price" /> is the good's opportunity cost in Isoland. If the domestic price is low, Isoland has a
      comparative advantage in textiles; if it is high, other countries do.
    </p>
  </div>
);

const S92a = () => (
  <div className="prose-uz">
    <p>
      A simplification: Isoland is small relative to the world market — a <T id="small-economy" />. It cannot change the world price; it is a price taker. The conclusions
      hold without this assumption, but the analysis is simpler.
    </p>
    <p>
      Once trade opens, the domestic price rises to the world price (no seller would accept less and no buyer would pay more). Domestic quantity supplied exceeds quantity
      demanded — the difference is exported. The horizontal line at the world price is the world's demand for Isoland's good (perfectly elastic).
    </p>
    <InternationalTradeGraph worldPrice={7} title="Figure 2 — An exporting country (drag the yellow line)" />
    <BookTable
      head={['', 'Before Trade', 'After Trade', 'Change']}
      rows={[
        ['Consumer Surplus', 'A + B', 'A', '−B'],
        ['Producer Surplus', 'C', 'B + C + D', '+(B + D)'],
        ['Total Surplus', 'A + B + C', 'A + B + C + D', '**+D**'],
      ]}
    />
    <ul>
      <li>When a country opens to trade and becomes an exporter, domestic <b>producers gain</b> and domestic <b>consumers lose</b>.</li>
      <li>Trade raises the nation's economic well-being: the winners' gains exceed the losers' losses.</li>
    </ul>
  </div>
);

const S92b = () => (
  <div className="prose-uz">
    <p>
      Now suppose the domestic price without trade is <b>above</b> the world price. Once trade opens the price falls; domestic demand exceeds supply — the difference is
      imported. The horizontal line at the world price is the world's supply.
    </p>
    <InternationalTradeGraph worldPrice={3} title="Figure 3 — An importing country" />
    <BookTable
      head={['', 'Before Trade', 'After Trade', 'Change']}
      rows={[
        ['Consumer Surplus', 'A', 'A + B + D', '+(B + D)'],
        ['Producer Surplus', 'B + C', 'C', '−B'],
        ['Total Surplus', 'A + B + C', 'A + B + C + D', '**+D**'],
      ]}
    />
    <p>
      This refines the Chapter 1 principle that “trade can make everyone better off”: trade enlarges the pie, so the winners <b>could</b> compensate the losers and still be
      better off. In practice compensation is rare — some get a smaller slice. That is why trade policy is contentious: when the losers (for example, domestic producers) are
      better organized, they lobby for tariffs or quotas.
    </p>
  </div>
);

const S92c = () => (
  <div className="prose-uz">
    <p>
      A <T id="tariff" /> is a tax on imported goods. If Isoland is an exporter, a tariff has no effect (nobody imports). If it is an importer: the tariff raises the price of
      imports above the world price by the amount of the tariff, and domestic producers who compete with foreign producers sell at that price too. The price moves toward
      the no-trade equilibrium.
    </p>
    <InternationalTradeGraph mode="tariff" worldPrice={3} tariff={1} />
    <BookTable
      head={['', 'Before Tariff', 'After Tariff', 'Change']}
      rows={[
        ['Consumer Surplus', 'A + B + C + D + E + F', 'A + B', '−(C + D + E + F)'],
        ['Producer Surplus', 'G', 'C + G', '+C'],
        ['Government Revenue', 'None', 'E', '+E'],
        ['Total Surplus', 'A + B + C + D + E + F + G', 'A + B + C + E + G', '**−(D + F)**'],
      ]}
    />
    <p>
      A tariff creates a DWL because, like any tax, it distorts incentives: (1) <b>D</b> — domestic producers make units that cost more than the world price (Q₁ˢ → Q₂ˢ) —
      overproduction; (2) <b>F</b> — consumers give up units they value above the world price (Q₁ᴰ → Q₂ᴰ) — underconsumption.
    </p>
    <BoxLink id="fyi-quotas">FYI: Import Quotas: Another Way to Restrict Trade</BoxLink>
  </div>
);

const S92d = () => (
  <div className="prose-uz">
    <p>The Isoland economists' letter to the president (in brief):</p>
    <div className="postit tape my-6 -rotate-[0.5deg] bg-postit-yellow p-5 pt-6">
      <p className="font-hand text-[17px] font-semibold text-[#1f4fb8]">Dear President Openminded,</p>
      <ol className="mt-2 list-decimal space-y-2 pl-5 text-[15px]">
        <li>
          <b>Price and quantity:</b> once trade opens, the domestic price will equal the world price. If the domestic price is low, the price will rise; we will consume less,
          produce more, and export (we have a comparative advantage). If it is high, the price will fall and we will import.
        </li>
        <li>
          <b>Who gains:</b> if the price rises, producers; if it falls, consumers. In both cases the gains exceed the losses — free trade raises total welfare.
        </li>
        <li>
          <b>Tariff:</b> it matters only if we are importers; it moves us toward the no-trade equilibrium and creates a DWL. Producers and the government gain, but consumers
          lose more. From the standpoint of efficiency, trade without a tariff is best.
        </li>
      </ol>
      <p className="mt-3 text-[15px]">Keep in mind: free trade also creates losers — let a social safety net soften their losses.</p>
      <p className="mt-2 font-hand text-[16px] font-semibold text-[#1f4fb8]">Your faithful servants, Isoland's economists</p>
    </div>
  </div>
);

const S92e = () => (
  <div className="prose-uz">
    <p>The standard analysis (supply, demand, surplus) showed the benefits of free trade. But trade has additional benefits too:</p>
    <ul>
      <li>
        <b>Increased variety.</b> Goods from different countries are not identical (German beer ≠ American beer). Trade widens the choice.
      </li>
      <li>
        <b><T id="economies-of-scale" label="Economies of scale" />.</b> Some goods are cheap only when produced in large quantities; a small domestic market doesn't allow
        it, the world market does.
      </li>
      <li>
        <b>Competition.</b> A firm shielded from foreign competitors gains market power and raises its price. Trade increases competition and gives the invisible hand room
        to work.
      </li>
      <li>
        <b>Productivity.</b> The most productive firms expand their markets and the least productive exit — overall productivity rises.
      </li>
      <li>
        <b>Flow of ideas.</b> Technology often travels with goods: a poor agricultural nation may learn about the computer revolution fastest by buying computers.
      </li>
    </ul>
  </div>
);

const S93a = () => (
  <div className="prose-uz">
    <p>Openminded asks the textile companies for their opinion — naturally, they want protection. Their arguments and the economists' responses:</p>
    <p>
      <b>“Free trade destroys jobs.”</b> Textile workers may lose their jobs — that's true. But trade also creates jobs: the money Isoland pays for imports lets other countries
      buy Isoland's goods, and workers move into industries with a comparative advantage. The transition can be hard — a social safety net helps. To the objection that
      “everything can be produced more cheaply abroad”: the gains rest on <b>comparative</b>, not <b>absolute</b>, advantage.
    </p>
  </div>
);
const S93b = () => (
  <div className="prose-uz">
    <p>
      <b>“The industry is vital for national security.”</b> Steel is needed for weapons; what if a war cut off supply? Economists accept protection when there is a real threat.
      But the argument is too easy to use: since protection is profitable, firms exaggerate their role. Look at who is making the argument — the military is also a consumer
      and gains from cheap steel.
    </p>
  </div>
);
const S93c = () => (
  <div className="prose-uz">
    <p>
      <b>“A new industry needs temporary protection.”</b> Economists are skeptical: the government would have to decide which industry will be profitable in the future —
      “picking winners” is very hard, the political process rewards industries with powerful lobbies, and “temporary” policy becomes permanent. There is also an objection in
      principle: if an industry really will be profitable in the long run, its owners can bear temporary losses themselves — many startups do exactly that.
    </p>
  </div>
);
const S93d = () => (
  <div className="prose-uz">
    <p>
      <b>“Competition is unfair.”</b> What if a neighbor subsidizes its textile industry? Isoland's producers lose, but its consumers gain from the low price — and their gain is
      larger. The neighbor's taxpayers pay the subsidy. The book's joke: Isoland should send its neighbor a <b>thank-you note</b>.
    </p>
  </div>
);
const S93e = () => (
  <div className="prose-uz">
    <p>
      <b>“Protection is a bargaining chip.”</b> Isoland might threaten a tariff on textiles unless Neighborland removes its tariff on wheat. If it works — trade is freer. If it
      doesn't, there are two bad choices: impose the tariff and reduce its own welfare (“shooting itself in the foot”) or back down and lose credibility.
    </p>
    <BoxLink id="cs-wto">Case Study: Trade Agreements and the World Trade Organization</BoxLink>
    <BoxLink id="news-development">In the News: Trade as a Tool for Economic Development</BoxLink>
  </div>
);

const S94 = () => (
  <div className="prose-uz">
    <p>
      The public is ambivalent about trade, while economists support it almost unanimously. The 50 U.S. states are a living experiment in free trade: Florida grows oranges,
      Texas pumps oil, California makes wine, and trade among them is unrestricted. If Americans consumed only what their own state produced, they couldn't enjoy today's
      standard of living.
    </p>
    <Callout kind="tip" title="A parable: Isabel the inventor">
      Openminded did not open trade. One day Isabel Inventor discovered a way to make textiles very cheaply: all it needed was wheat and almost no labor. Everyone hailed her as
      a genius: clothing got cheaper, textile workers moved to other industries, and some began growing wheat for Isabel. Years later a reporter sneaked into the factory and
      found that Isabel wasn't producing anything — she was shipping the wheat abroad and trading it for textiles! The government shut the factory, prices rose, workers went
      back to textiles, and living standards fell. Isabel went to prison. She wasn't an inventor after all, just an economist — all she had discovered were the{' '}
      <b>gains from trade</b>.
    </Callout>
  </div>
);

function Quotas() {
  return (
    <div className="prose-uz">
      <p>
        Besides tariffs, countries can limit the quantity of imports — an <T id="import-quota" />. The conclusion: a quota is very much like a tariff. Both reduce imports,
        raise the domestic price, hurt consumers, help producers, and create a DWL.
      </p>
      <p>
        The only difference: a tariff gives the government <b>revenue</b>, while a quota gives surplus to the <b>holders of import licenses</b> — they buy at the world price and
        sell at the domestic price. If the government sold the licenses for that difference, the quota would work exactly like a tariff.
      </p>
      <p>
        In practice licenses are rarely sold. For example, the U.S. has at times pressured Japan to “voluntarily” limit car exports — the Japanese government gave the licenses
        to Japanese firms and the surplus went to them. From the standpoint of U.S. welfare this is even worse than a tariff. Choose “Import quota” in the tariff graph above.
      </p>
    </div>
  );
}

function WTO() {
  return (
    <div className="prose-uz">
      <p>
        There are two routes to free trade: <T id="unilateral-multilateral" label="unilateral" /> (removing restrictions on one's own — 19th-century Britain, later Chile and
        South Korea) and <b>multilateral</b> (by agreement with others).
      </p>
      <ul>
        <li>
          <b>NAFTA</b> (1993) lowered barriers among the U.S., Mexico, and Canada; its updated version is the USMCA (2020).
        </li>
        <li>
          <b>GATT</b> — negotiations begun after World War II (a response to the high tariffs of the Great Depression). The average tariff fell from over 20% to below 5% by
          2000.
        </li>
        <li>
          The <T id="wto" /> (1995, Geneva) enforces the GATT rules; in 2021 it had 164 members covering 98% of world trade.
        </li>
        <li>
          The road runs both ways: under the Trump administration the U.S. unilaterally raised tariffs on China, the EU, and others, and retaliatory tariffs followed. By the end
          of 2020 more than half of U.S. imports from China faced a ~20% tariff (and vice versa).
        </li>
      </ul>
      <p>
        The advantage of the multilateral approach: it also reduces restrictions abroad and is politically easier — even if Isoland's textile makers oppose it, Isoland's wheat
        farmers will support a deal if Neighborland lowers its wheat tariff. The drawback: if negotiations fail, trade may end up more restricted than under the unilateral
        approach.
      </p>
      <AskExperts title="Trade Deals and Tariffs" source="IGM, 2014" statement="Past major trade deals have benefited most Americans." agree={93} uncertain={7} disagree={0} />
      <AskExperts
        title="Trade Deals and Tariffs"
        source="IGM, 2013"
        statement="Refusing to liberalize trade unless partner countries adopt new labor or environmental rules is a bad policy, because even if the new standards would reduce distortions on some dimensions, such a policy involves threatening to maintain large distortions in the form of restricted trade."
        agree={49}
        uncertain={26}
        disagree={25}
      />
      <AskExperts title="Trade Deals and Tariffs" source="IGM, 2019" statement="The incidence of the latest round of U.S. import tariffs is likely to fall primarily on American households." agree={86} uncertain={14} disagree={0} />
      <AskExperts
        title="Trade Deals and Tariffs"
        source="IGM, 2019"
        statement="The impact of the tariffs—and any Chinese countermeasures—on U.S. prices and employment is likely to be felt most heavily by lower income groups and regions."
        agree={75}
        uncertain={25}
        disagree={0}
      />
    </div>
  );
}

function Development() {
  return (
    <div className="prose-uz">
      <Source>Arthur C. Brooks, “Andy Warhol's Guide to Public Policy,” New York Times, 2015 — summary.</Source>
      <ul>
        <li>
          Andy Warhol: “I like boring things.” The author argues that good policy is often “boring” too: cheap bed nets against malaria, incentives for children to attend school
          — and, above all, <b>trade</b>.
        </li>
        <li>
          For more than two decades the global poverty rate has fallen by ~1% a year — ~70 million people a year; since 1990 ~1 billion people have escaped poverty. The main
          reason is not the UN or aid but trade in open developing economies.
        </li>
        <li>Your “Made in China” mug is part of the process that has lifted 680 million Chinese out of absolute poverty since the 1980s.</li>
        <li>
          The author: exploitation and the environment are serious issues, but protectionism isn't the answer; according to World Bank and LIS data, global inequality has
          mostly fallen over the last 20 years.
        </li>
      </ul>
      <Callout kind="tip" title="Questions to discuss">
        <ol>
          <li>Which item you use every day was made abroad? Who gained — you or the foreign producer?</li>
          <li>How do you think trade between the U.S. and a poorer country affects workers in the poorer country?</li>
        </ol>
      </Callout>
    </div>
  );
}

const textD = demandThrough({ Q: 3, P: 20 }, { Q: 4, P: 16 });
const textS = supplyThrough({ Q: 3, P: 20 }, { Q: 1, P: 16 });
const tvD = demandThrough({ Q: 1, P: 500 }, { Q: 1.2, P: 400 });
const tvS = supplyThrough({ Q: 0.4, P: 500 }, { Q: 0.2, P: 400 });
const Trade = () => <InternationalTradeGraph worldPrice={3} />;
const Tariff = () => <InternationalTradeGraph mode="tariff" worldPrice={3} tariff={1.5} />;
const Textilia = () => <InternationalTradeGraph demand={textD} supply={textS} xMax={8} yMax={32} worldPrice={16} title="Problem 5 — Textilia's T-shirt market (millions)" labels={{ x: 'T-shirts (millions)', y: 'Price' }} />;
const TV = () => <InternationalTradeGraph demand={tvD} supply={tvS} xMax={1.6} yMax={1000} mode="tariff" worldPrice={400} tariff={100} title="Problem 9 — The U.S. TV market (millions)" labels={{ x: 'TVs (millions)', y: 'Price' }} />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    'Compare the domestic price without trade and the **world price** to tell whether a country exports or imports',
    'Show who gains and who loses in an exporting and an importing country using CS, PS, and areas A–D',
    'Compute the effects of a **tariff** and its two DWL triangles (D and F); compare it with an **import quota**',
    'List the additional benefits of trade',
    'Know the five arguments for restricting trade and the economists’ responses; distinguish unilateral and multilateral approaches',
  ],
  sections: [
    sec('s-9-1a', '9-1a', 'The Equilibrium without Trade', S91a),
    sec('s-9-1b', '9-1b', 'The World Price and Comparative Advantage', S91b, checks['s-9-1b']),
    sec('s-9-2a', '9-2a', 'The Gains and Losses of an Exporting Country', S92a, checks['s-9-2a']),
    sec('s-9-2b', '9-2b', 'The Gains and Losses of an Importing Country', S92b, checks['s-9-2b']),
    sec('s-9-2c', '9-2c', 'The Effects of a Tariff', S92c, checks['s-9-2c']),
    sec('s-9-2d', '9-2d', 'The Lessons for Trade Policy', S92d),
    sec('s-9-2e', '9-2e', 'Other Benefits of International Trade', S92e, checks['s-9-2e']),
    sec('s-9-3a', '9-3a', 'The Jobs Argument', S93a, checks['s-9-3']),
    sec('s-9-3b', '9-3b', 'The National-Security Argument', S93b),
    sec('s-9-3c', '9-3c', 'The Infant-Industry Argument', S93c),
    sec('s-9-3d', '9-3d', 'The Unfair-Competition Argument', S93d),
    sec('s-9-3e', '9-3e', 'The Protection-as-a-Bargaining-Chip Argument', S93e),
    sec('s-9-4', '9-4', 'Conclusion', S94),
  ],
  examTraps: [
    { title: 'Who gains?', body: '**Exporter**: producers gain, consumers lose. **Importer**: the reverse. In both, ΔTS = +D.' },
    { title: 'The tariff table', body: 'ΔCS = −(C+D+E+F), ΔPS = +C, Revenue = +E, DWL = D + F. D — overproduction, F — underconsumption.' },
    { title: 'Tariff vs. quota', body: 'The same price and quantity; the difference is who gets E: the government with a tariff, license holders with a quota.' },
    { title: 'The link to comparative advantage', body: 'Domestic price without trade = opportunity cost. Low → comparative advantage → exports.' },
    { title: 'Export subsidy / export tax', body: 'Both create a DWL: a subsidy raises the domestic price, a tax lowers it (Problems 6, 10).' },
  ],
  mistakes: [
    { wrong: '“When trade opens, everyone gains.”', right: 'The country as a whole gains, but one group (consumers in an exporter, producers in an importer) loses.' },
    { wrong: '“A tariff protects consumers.”', right: 'A tariff protects domestic **producers**; consumers lose the most.' },
    { wrong: '“Without an absolute advantage there is no gain from trade.”', right: 'The gains come from comparative advantage.' },
    { wrong: '“A foreign subsidy hurts us — we should respond with a tariff.”', right: 'Cheap imports benefit our consumers; a tariff creates a DWL for us.' },
    { wrong: '“A quota is better than a tariff because it doesn’t raise the price.”', right: 'A quota raises the price too and often hands surplus E to foreign firms.' },
  ],
  boxes: [
    box('fyi-quotas', 'FYI', 'Import Quotas: Another Way to Restrict Trade', Quotas),
    box('cs-wto', 'Case Study', 'Trade Agreements and the World Trade Organization', WTO),
    box('news-development', 'In the News', 'Trade as a Tool for Economic Development', Development),
  ],
  summary: [
    'The effects of free trade can be determined by comparing the domestic price without trade to the world price. A low domestic price indicates a comparative advantage, and the country will become an **exporter**; a high one indicates the rest of the world has the comparative advantage, and the country will become an **importer**.',
    'When a country becomes an exporter, producers are better off and consumers worse off; when it becomes an importer, the reverse. In both cases the gains from trade exceed the losses.',
    'A **tariff** moves a market closer to the equilibrium without trade and reduces the gains from trade. Domestic producers and the government gain, but consumers’ losses exceed these gains.',
    'Trade has benefits beyond comparative advantage: more variety, **economies of scale**, more competition, higher productivity, and better access to technology.',
    'Arguments for restricting trade: jobs, national security, infant industries, unfair competition, and responding to foreign restrictions. Some have merit in some cases, but most economists believe free trade is usually the better policy.',
  ],
  widgets: { trade: Trade, tariff: Tariff, textilia: Textilia, tv: TV },
  gallery: [
    { title: 'International trade: exporter and importer', Component: () => <InternationalTradeGraph worldPrice={3} /> },
    { title: 'Tariff and import quota', Component: () => <InternationalTradeGraph mode="tariff" worldPrice={3} tariff={1} /> },
  ],
};
