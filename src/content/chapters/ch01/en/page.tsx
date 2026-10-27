import { GrowthLab, MarginalLab } from '../../../../components/graphs/Ch1Widgets';
import { Callout } from '../../../../components/ui/Kit';
import { BookTable, BoxLink, Source } from '../../../../components/ui/Lesson';
import { T } from '../../../../components/ui/Term';
import type { ChapterPageContent } from '../../../types';
import { box, sec } from '../../../enPage';
import { checks } from '../quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        The word <b>economy</b> comes from the Greek <i>oikonomos</i>, “one who manages a household.” The link seems odd at first, but every household faces
        endless decisions — who cooks, who gets the extra dessert, who drives the car. Whether income is large or small, time, desserts, and miles driven must be{' '}
        <b>allocated among competing uses</b>.
      </p>
      <p>
        Society is the same: someone grows bread, someone sews clothes, someone writes software; someone eats potatoes and someone caviar. The reason is one
        word — <T id="scarcity" />. <T id="economics" label="Economics" /> studies how society manages its scarce resources. This chapter is the “trailer” for the whole book: ten
        principles, each developed in detail in later chapters.
      </p>
    </div>
  );
}

const S11 = () => (
  <div className="prose-uz">
    <p>
      An economy — of Tashkent, of Uzbekistan, or of the whole world — is simply a group of people dealing with one another as they go about their lives. Because
      the behavior of an economy reflects the behavior of the individuals in it, the first four principles concern <b>individual decision making</b>.
    </p>
    <BookTable
      caption="Table 1 — Ten Principles of Economics"
      head={['Group', 'Principle']}
      rows={[
        ['How People Make Decisions', '1. People face trade-offs.'],
        ['', '2. The cost of something is what you give up to get it.'],
        ['', '3. Rational people think at the margin.'],
        ['', '4. People respond to incentives.'],
        ['How People Interact', '5. Trade can make everyone better off.'],
        ['', '6. Markets are usually a good way to organize economic activity.'],
        ['', '7. Governments can sometimes improve market outcomes.'],
        ['How the Economy as a Whole Works', "8. A country's standard of living depends on its ability to produce goods and services."],
        ['', '9. Prices rise when the government prints too much money.'],
        ['', '10. Society faces a short-run trade-off between inflation and unemployment.'],
      ]}
    />
  </div>
);

const S11a = () => (
  <div className="prose-uz">
    <p>
      “<i>There ain't no such thing as a free lunch.</i>” To get something you like, you usually have to give up something else you like: a{' '}
      <T id="trade-off" />.
    </p>
    <ul>
      <li>
        <b>Selena</b> allocates her most valuable resource, her time: every hour spent studying economics is an hour not spent on psychology, sleeping, biking,
        video games, or working for extra money.
      </li>
      <li>Her parents divide the family income among food, clothing, Selena's tuition, retirement saving, or a vacation.</li>
      <li>
        Society: <b>“guns and butter”</b> — the more it spends on defense, the less is left for consumer goods. <b>A clean environment ↔ income</b>: rules that
        cut pollution raise firms' costs → smaller profits, lower wages, higher prices.
      </li>
    </ul>
    <p>
      The most important social trade-off is between <T id="efficiency" /> and <T id="equality" />. Efficiency is the <b>size of the economic pie</b>; equality is
      how <b>evenly the pie is sliced</b>. Welfare, unemployment insurance, and a progressive income tax promote equality but reduce the reward for working — so
      people work less. When the pie is cut into more equal slices, it sometimes <b>shrinks</b>.
    </p>
    <Callout kind="mistake">
      Recognizing a trade-off does not tell us which decision is best. The student shouldn't drop psychology, society shouldn't accept pollution, and government
      shouldn't ignore the poor — but people who <b>understand their options</b> choose better.
    </Callout>
  </div>
);

const S11b = () => (
  <div className="prose-uz">
    <p>
      Consider the decision to go to college. The benefits are intellectual enrichment and a lifetime of better job opportunities. The cost? Adding up tuition,
      books, room, and board is wrong, for two reasons:
    </p>
    <ol>
      <li>
        <b>It includes things that are not really costs</b>: you would need a place to live and food even without college — only the part <b>above</b> what you
        would spend at home is a cost.
      </li>
      <li>
        <b>It leaves out the largest cost — your time</b>: while you sit in lectures you cannot work for pay. For most students the forgone wages are the biggest
        single cost of their education.
      </li>
    </ol>
    <p>
      The <T id="opportunity-cost" /> of an item is what you give up to get it. For student-athletes who could earn millions in professional sports, the
      opportunity cost of college is very high — which is why some of them leave school for the pros.
    </p>
    <Callout kind="exam">
      On an exam, opportunity cost = money costs <b>+ the value of your time</b> (forgone wages or the best alternative activity). “If I enjoy it, the cost is
      zero” is wrong (QuickQuiz 2).
    </Callout>
  </div>
);

const S11c = () => (
  <div className="prose-uz">
    <p>
      Economists assume that people are <T id="rational-people" label="rational" />: they systematically and purposefully do the best they can with the
      opportunities they have. Life is rarely black and white: at dinner you don't ask “fast or gorge?” but “should I take one more spoonful of mashed
      potatoes?” That is a <T id="marginal-change" />. Rational people compare <T id="marginal-benefit-cost" label="marginal benefit and marginal cost" />.
    </p>
    <MarginalLab />
    <p>
      <b>The water–diamond paradox.</b> Water is essential for life and diamonds merely sparkle — yet diamonds cost far more. The reason: willingness to pay is
      based on the <b>marginal benefit</b>, which depends on how many units one already has. Water is plentiful, so an extra glass is worth little; diamonds are
      rare, so an extra stone is worth a lot.
    </p>
    <Callout kind="exam">
      The rule: take an action <b>if and only if MB &gt; MC</b>. Average costs and costs already spent (sunk costs) do not enter the decision (Problem 5).
    </Callout>
  </div>
);

const S11d = () => (
  <div className="prose-uz">
    <p>
      An <T id="incentive" /> is something that induces a person to act, such as the prospect of a punishment or a reward. One economist summed up the whole
      field: <i>“People respond to incentives. The rest is commentary.”</i>
    </p>
    <p>
      When apples get more expensive, people eat fewer apples, while orchards hire more workers and harvest more. A gasoline tax encourages fuel-efficient and
      electric cars, carpooling, public transport, and living closer to work: in high-tax <b>Norway</b> electric cars are common, while in low-tax <b>America</b>{' '}
      big SUVs are popular.
    </p>
    <p>
      <b>Unintended consequences: seat belts.</b> After Ralph Nader's 1965 book <i>Unsafe at Any Speed</i>, Congress required seat belts in new cars. The direct
      effect: a better chance of surviving a crash. The indirect effect: belts made accidents “cheaper,” as if the roads were safer, so drivers drove faster and
      less carefully. Sam Peltzman (1975): accidents <b>increased</b>, driver deaths barely changed, and <b>pedestrian deaths rose</b>.
    </p>
    <Callout kind="tip">When analyzing any policy, look not only at the direct effects but also at the <b>indirect effects that work through incentives</b>.</Callout>
  </div>
);

const S12a = () => (
  <div className="prose-uz">
    <p>
      In the news, China is often called America's competitor: they compete in markets for clothing, toys, and solar panels. But trade between countries is not
      a sports contest: trade can make <b>both countries</b> better off.
    </p>
    <p>
      Think of a family: families compete for jobs and bargains, but a family that cut itself off would have to grow its own food, sew its own clothes, and
      build its own home. Trade lets each person <b>specialize</b> in what they do best (farming, sewing, building) and buy a greater variety of goods{' '}
      <b>more cheaply</b>. The Chinese, the French, and the Brazilians are America's <b>partners</b> as much as its competitors. (More in Chapters 3 and 9.)
    </p>
  </div>
);

const S12b = () => (
  <div className="prose-uz">
    <p>
      The collapse of communism in the Soviet Union and Eastern Europe in the late 1980s and early 1990s was one of the most important events of the last
      century. There, <b>central planners</b> decided what goods were produced, in what quantities, and who consumed them. Uzbekistan is one of the countries
      that left that system and began market reforms.
    </p>
    <p>
      In a <T id="market-economy" />, the planner is replaced by millions of firms and households, guided by <b>prices and self-interest</b>. Even though nobody
      seems to be looking after society's well-being, market economies have proved remarkably successful at promoting it.
    </p>
    <p>
      Adam Smith (1776, <i>The Wealth of Nations</i>): households and firms in competitive markets act as if guided by an <T id="invisible-hand" /> toward
      desirable outcomes. Its tool is <b>prices</b>: a price reflects both the seller's cost and the value to the buyer.
    </p>
    <Callout kind="exam" title="An important corollary">
      When government prevents prices from adjusting to supply and demand, the invisible hand cannot do its work. That is why taxes distort the allocation of
      resources (Chapter 8), rent control causes problems (Chapter 6), and communist planning failed — the planners worked with “one hand tied behind their
      backs.”
    </Callout>
    <BoxLink id="fyi-smith">FYI: Adam Smith and the Invisible Hand</BoxLink>
    <BoxLink id="cs-uber">Case Study: Adam Smith Would Have Loved Uber</BoxLink>
  </div>
);

const S12c = () => (
  <div className="prose-uz">
    <p>
      If the invisible hand is so good, what is left for government? First, markets work only if government enforces the rules and protects{' '}
      <T id="property-rights" />: a farmer won't plant if he expects his crop to be stolen, a restaurant won't open if diners leave without paying, and films
      won't be made if they are widely pirated.
    </p>
    <p>Second, the invisible hand is powerful but not omnipotent. Two broad reasons for government to intervene:</p>
    <ul>
      <li>
        <b>Efficiency</b> (enlarging the pie). Causes of <T id="market-failure" />: an <T id="externality" /> (pollution — Chapter 10) and{' '}
        <T id="market-power" /> (the owner of the town's only well).
      </li>
      <li>
        <b>Equality</b> (slicing the pie differently). Markets reward people according to their ability to produce things others will pay for: the best
        basketball player earns more than the best chess player. The invisible hand does not guarantee everyone enough food, clothing, and health care.
      </li>
    </ul>
    <Callout kind="mistake">
      “Government can improve outcomes” ≠ “government always does.” Policy is made not by angels but by an imperfect political process: sometimes it rewards the
      politically powerful, and sometimes it is made by well-meaning but poorly informed leaders.
    </Callout>
  </div>
);

const S13a = () => (
  <div className="prose-uz">
    <p>
      In 2019 the average American earned ~<b>$65,000</b>, the average German ~<b>$56,000</b>, the average Chinese ~<b>$17,000</b>, and the average Nigerian only
      ~<b>$5,000</b>. The gap shows up in computers, cars, nutrition, health care, and life expectancy. U.S. income has historically grown about 2% a year —
      doubling every 35 years and rising about eightfold in a century.
    </p>
    <p>
      The explanation is simple: <T id="productivity" /> — the quantity of goods and services produced from each unit of labor. The “real hero” of American
      workers is not generous employers or strong unions but <b>productivity growth</b>; the slowdown in income growth since the mid-1970s is due not to
      foreign competition but to slower productivity growth.
    </p>
    <GrowthLab />
    <Callout kind="exam">
      Policies to raise living standards: make sure workers are <b>well educated</b>, have the <b>tools</b> they need, and have access to the best available{' '}
      <b>technology</b>.
    </Callout>
  </div>
);

const S13b = () => (
  <div className="prose-uz">
    <p>
      In January 1921 a newspaper in Germany cost 0.30 marks; by November 1922 it cost <b>70,000,000 marks</b> — one of the most spectacular examples of{' '}
      <T id="inflation" /> in history. In the United States prices more than doubled in the 1970s (President Ford called inflation “public enemy number one”);
      in the first two decades of the 21st century inflation ran about 2%.
    </p>
    <p>
      The cause: in almost all cases of large or persistent inflation, <b>growth in the quantity of money</b>. When German prices tripled each month, the
      quantity of money also tripled each month. U.S. inflation in the 1970s came with rapid money growth, and its decline in the 1980s with slower money
      growth. In February 2022 U.S. inflation hit 7.9%, a 40-year high: large pandemic-era government spending, rapid money growth, and supply disruptions.
    </p>
  </div>
);

const S13c = () => (
  <div className="prose-uz">
    <p>In the long run, more money mainly raises prices, but the short-run picture is more complex:</p>
    <ol>
      <li>More money raises overall spending and thus the demand for goods and services.</li>
      <li>Higher demand raises prices over time, but meanwhile it encourages firms to hire more workers and produce more.</li>
      <li>More hiring means less unemployment.</li>
    </ol>
    <p>
      The result is a <b>short-run trade-off</b> between inflation and unemployment: over a year or two, many policies push them in opposite directions. This
      matters for understanding the <T id="business-cycle" />. Policymakers influence demand through government spending, taxes, and the quantity of money —
      and how to use these tools is a constant topic of debate.
    </p>
    <Callout kind="exam">QuickQuiz 10: reducing demand → in the short run <b>lower</b> inflation and <b>higher</b> unemployment.</Callout>
  </div>
);

const S14 = () => (
  <div className="prose-uz">
    <p>
      Economics rests on a few big ideas that apply in many situations. Throughout the book we keep returning to the ten principles of Table 1 — even the most
      sophisticated analysis is built on this foundation. For example: Chapter 4 (incentives and prices), Chapter 6 (rent control — stopping prices from
      adjusting), Chapter 7 (the efficiency of the invisible hand), Chapter 9 (the gains from trade), Chapter 10 (externalities).
    </p>
  </div>
);

function FyiSmith() {
  return (
    <div className="prose-uz">
      <p>
        <i>The Wealth of Nations</i> appeared in 1776 — the year the American Declaration of Independence was signed. The two documents share an idea: people
        are usually best left to their own devices, without the heavy hand of government. This is the intellectual foundation of the market economy and of a
        free society.
      </p>
      <p>
        Why do markets work — because people are kind to each other? No. Smith's most famous passage: <i>“It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner…”</i>
      </p>
      <Source>Adam Smith, The Wealth of Nations (1776)</Source>
      <p>
        The butcher, the brewer, and the baker feed us not out of kindness but out of <b>self-interest</b>; each seeks only his own gain, yet is led by an
        “invisible hand” to promote the interest of society — often more effectively than if he had set out to do so. Later chapters state this conclusion more
        precisely and analyze both the strengths and the weaknesses of the invisible hand.
      </p>
    </div>
  );
}

function Uber() {
  return (
    <div className="prose-uz">
      <p>
        In many cities the taxi market is tightly regulated: the number of licenses (medallions) is limited, fares are set, and unlicensed drivers face fines or
        jail. In 2009 <b>Uber</b> entered this market, connecting riders and drivers through a smartphone app. Because Uber cars don't cruise the streets for
        passengers, they are technically not taxis and are not regulated the same way — but the service is similar, and often more convenient: instead of waiting
        at the curb in the rain, you call a car from your warm living room.
      </p>
      <p>
        Uber is often cheaper, but not always: when demand surges (a heavy storm, New Year's Eve) its price rises sharply — <b>surge pricing</b>, which regulated
        taxis are usually not allowed to do. Taxi drivers dislike Uber because it cuts their income — sellers rarely welcome a new competitor — but competition
        makes the market work better for consumers.
      </p>
      <ul>
        <li>A 2014 survey: do services like Uber raise consumer well-being? <b>Every</b> economist said “Yes.”</li>
        <li>
          Does surge pricing raise well-being? <b>85%</b> said “Yes”: drivers respond to the incentive, so service expands when it is most needed; rides go to
          those who value them most; and the costs of waiting and searching fall.
        </li>
      </ul>
      <p>If Adam Smith were alive today, he would surely have a ride-hailing app on his phone. In Tashkent, Yandex Go and other apps work on the same logic.</p>
    </div>
  );
}

const Marginal = () => <MarginalLab />;
const Growth = () => <GrowthLab />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    'Know the definitions of **scarcity** and **economics** and explain why economics exists',
    'The four principles of individual decision making: **trade-offs**, **opportunity cost**, **marginal thinking**, **incentives**',
    'The three principles of interaction: trade, markets (**the invisible hand**), and the role of government (**market failure**)',
    'The three principles of the economy as a whole: **productivity**, **inflation**, and the short-run inflation–unemployment trade-off',
    'Apply each principle to everyday examples, including examples from Uzbekistan',
  ],
  sections: [
    sec('s-1-1', '1-1', 'How People Make Decisions', S11),
    sec('s-1-1a', '1-1a', 'Principle 1: People Face Trade-Offs', S11a, checks['s-1-1a']),
    sec('s-1-1b', '1-1b', 'Principle 2: The Cost of Something Is What You Give Up to Get It', S11b, checks['s-1-1b']),
    sec('s-1-1c', '1-1c', 'Principle 3: Rational People Think at the Margin', S11c, checks['s-1-1c']),
    sec('s-1-1d', '1-1d', 'Principle 4: People Respond to Incentives', S11d, checks['s-1-1d']),
    sec('s-1-2a', '1-2a', 'Principle 5: Trade Can Make Everyone Better Off', S12a, checks['s-1-2a']),
    sec('s-1-2b', '1-2b', 'Principle 6: Markets Are Usually a Good Way to Organize Economic Activity', S12b, checks['s-1-2b']),
    sec('s-1-2c', '1-2c', 'Principle 7: Governments Can Sometimes Improve Market Outcomes', S12c, checks['s-1-2c']),
    sec('s-1-3a', '1-3a', "Principle 8: A Country's Standard of Living Depends on Its Ability to Produce Goods and Services", S13a, checks['s-1-3a']),
    sec('s-1-3b', '1-3b', 'Principle 9: Prices Rise When the Government Prints Too Much Money', S13b, checks['s-1-3b']),
    sec('s-1-3c', '1-3c', 'Principle 10: Society Faces a Short-Run Trade-Off between Inflation and Unemployment', S13c, checks['s-1-3c']),
    sec('s-1-4', '1-4', 'Conclusion', S14),
  ],
  examTraps: [
    { title: 'Opportunity cost = money + time', body: "Don't forget the value of time (forgone wages); costs you'd have at home anyway (food, housing) are not included." },
    { title: 'Marginal, not average', body: 'Decide by **MB > MC**. Average cost ($500 per seat, $6 per movie) and sunk costs are irrelevant.' },
    { title: '“All of the above”', body: 'QuickQuiz 4 and 7 — on incentives and the role of government, every option is correct.' },
    { title: 'Two causes of market failure', body: '**Externalities** and **market power**. Equality is a separate goal, not a market failure.' },
    { title: 'What causes inflation', body: 'Large or persistent inflation → the **quantity of money**. Not unions, taxes, or market power.' },
    { title: 'The short-run trade-off', body: 'Demand ↓ → inflation ↓, unemployment ↑ (and vice versa).' },
  ],
  mistakes: [
    { wrong: '“In trade, if one country wins the other loses.”', right: 'Trade is **win–win** — specialization makes both sides better off.' },
    { wrong: '“Efficiency and equality are the same thing.”', right: 'Efficiency is the **size** of the pie, equality how it is **sliced**; they often conflict.' },
    { wrong: '“The invisible hand is hidden government control.”', right: 'It is the coordination of self-interested people through **market prices**.' },
    { wrong: '“Rich countries are rich because they exploit poor ones.”', right: 'The book: almost all of the difference in living standards is a difference in **productivity**.' },
    { wrong: '“A seat-belt law will surely reduce deaths.”', right: 'Indirect effects through incentives: accidents may increase (Peltzman).' },
  ],
  boxes: [box('fyi-smith', 'FYI', 'Adam Smith and the Invisible Hand', FyiSmith), box('cs-uber', 'Case Study', 'Adam Smith Would Have Loved Uber', Uber)],
  summary: [
    'The fundamental lessons about individual decision making are that people face **trade-offs** among alternative goals, that the cost of any action is measured in terms of **forgone opportunities**, that rational people make decisions by comparing **marginal costs and marginal benefits**, and that people change their behavior in response to the **incentives** they face.',
    'The fundamental lessons about interactions among people are that trade and interdependence can be **mutually beneficial**, that markets are usually a good way of coordinating economic activity, and that government can potentially improve market outcomes by remedying a **market failure** or by promoting greater **economic equality**.',
    'The fundamental lessons about the economy as a whole are that **productivity** is the ultimate source of living standards, that growth in the **quantity of money** is the ultimate source of inflation, and that society faces a **short-run** trade-off between inflation and unemployment.',
  ],
  widgets: { marginal: Marginal, growth: Growth },
  gallery: [
    { title: 'Marginal thinking: streaming and the standby passenger', Component: Marginal },
    { title: 'Growth and inflation: compounding', Component: Growth },
  ],
};
