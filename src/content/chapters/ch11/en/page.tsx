import { CommonsLab, GoodsSorter, LifeValueCalc, PublicGoodVote } from '../../../../components/graphs/Ch11Widgets';
import { Callout } from '../../../../components/ui/Kit';
import { AskExperts, BoxLink, Source } from '../../../../components/ui/Lesson';
import { T } from '../../../../components/ui/Term';
import { box, sec } from '../../../enPage';
import type { ChapterPageContent } from '../../../types';
import { checks } from '../quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        “The best things in life are free.” Rivers, mountains, beaches — gifts of nature; parks, playgrounds, holiday fireworks — often paid for by the government. Goods without a
        price don't fit our earlier analysis, in which prices guided buyers and sellers to an efficient allocation.
      </p>
      <p>
        Without prices, private markets cannot ensure that such goods are produced in the right amounts or used properly. This chapter illustrates a principle from Chapter 1:{' '}
        <b>governments can sometimes improve market outcomes</b>. Traffic jams in Tashkent, water in the Aral basin, a neighborhood fireworks show — all are topics of this chapter.
      </p>
    </div>
  );
}

const S111 = () => (
  <div className="prose-uz">
    <p>
      Markets work well for ice cream but not for clean air. We classify goods by two characteristics: <T id="excludability" /> and <T id="rivalry" />. They give four categories:
    </p>
    <ol>
      <li><T id="private-goods" /> — excludable and rival (ice cream). The analysis of Chapters 4–9 applied to exactly these.</li>
      <li><T id="public-goods" /> — neither excludable nor rival (a tornado siren in a small town).</li>
      <li><T id="common-resources" /> — rival but not excludable (fish in the ocean).</li>
      <li><T id="club-goods" /> — excludable but not rival (satellite TV). We'll see later that they are a kind of natural monopoly.</li>
    </ol>
    <GoodsSorter />
    <p>
      The lines can be blurry: a big coast guard makes fish partly excludable; with few fishermen (North America before the Europeans arrived), fish are almost not rival. This
      chapter is about goods that are <b>not excludable</b>: they are free, and when something valuable has no price, <b>externalities</b> arise. Providing a public good benefits
      others; using a common resource harms others.
    </p>
  </div>
);

const S112a = () => (
  <div className="prose-uz">
    <p>
      Smalltown's <b>500 residents</b> each value the Fourth of July fireworks at <b>$10</b> — $5,000 in all. The cost is <b>$1,000</b>. The benefit exceeds the cost — so it is
      efficient. But entrepreneur Zoe can't sell tickets: the fireworks can be seen without one — everyone prefers to be a <T id="free-rider" />.
    </p>
    <p>
      This is an externality: Zoe gives the spectators an unpaid benefit but ignores it when deciding. The solution: the town council taxes everyone <b>$2</b> and hires Zoe — each
      gains <b>$8</b>. The general lesson: because public goods are not excludable, the private market fails to provide them; if the total benefit exceeds the cost, the government
      can provide them out of taxes and make everyone better off.
    </p>
    <PublicGoodVote />
  </div>
);

const S112b = () => (
  <div className="prose-uz">
    <ul>
      <li>
        <b>National defense</b> — the classic public good and one of the most expensive: in 2020 the U.S. spent $886 billion, or $2,682 per person. Even advocates of small
        government agree defense should be provided by the government.
      </li>
      <li>
        <b>Basic research.</b> Specific technological knowledge (a longer-lasting battery) can be made excludable with a <T id="patent" />. General knowledge (a theorem) is a public
        good — firms free ride on knowledge others create. The government subsidizes research in medicine, mathematics, physics, even economics through the NIH and NSF; but how
        much, and for which research, is hard to decide.
      </li>
      <li>
        <b>Fighting poverty</b>: TANF, SNAP, Medicaid, the EITC. Living in a society without poverty is a “good” that is neither rival nor excludable: private charity falls short
        because of free riding; taxing the rich to help the poor can make both groups better off.
      </li>
    </ul>
    <BoxLink id="cs-lighthouses">Case Study: Are Lighthouses Public Goods?</BoxLink>
  </div>
);

const S112c = () => (
  <div className="prose-uz">
    <p>
      Deciding that the government should provide something is only the first step. Which public goods, and how much? For a new highway, economists and engineers conduct a{' '}
      <T id="cost-benefit-analysis" />. The difficulty: the road is free — <b>there is no price</b>. Surveys are unreliable: users exaggerate the benefits and those harmed
      exaggerate the costs. In a market for a private good, by contrast, buyers and sellers reveal their values and costs through prices.
    </p>
    <LifeValueCalc />
    <BoxLink id="cs-life">Case Study: How Much Is a Life Worth?</BoxLink>
  </div>
);

const S113a = () => (
  <div className="prose-uz">
    <p>
      Common resources are also free, but they are <b>rival</b> — so the question is how much they get used. In a medieval town families graze sheep on the common pasture (the
      Town Commons). When land is plentiful there's no problem. As people and sheep multiply, the pasture can't regenerate, becomes barren, and the wool industry disappears —
      the <T id="tragedy-of-the-commons" />.
    </p>
    <p>
      The cause is a <b>negative externality</b>: each family ignores that its sheep make the land worse for others; no family has an incentive to shrink its flock, because it is
      only a small part of the problem. The solutions are like those for pollution: limit the number of sheep, tax sheep, auction grazing permits — or, more simply, divide the land
      among families, turning it into a private good (the <b>enclosure movement</b> in 17th-century England).
    </p>
    <CommonsLab />
    <Callout kind="exam">
      Public goods are <b>underprovided</b> (positive externality, free riders). Common resources are <b>overused</b> (negative externality). QuickQuiz 4 and 7.
    </Callout>
  </div>
);

const S113b = () => (
  <div className="prose-uz">
    <ul>
      <li><b>Clean air and water</b> — pollution is like overgrazing the pasture: a modern Tragedy of the Commons.</li>
      <li>
        <b>Congested roads.</b> An empty road is a public good; a congested road is a common resource. The solution is a <b>toll</b> (a corrective tax on congestion): London and
        Stockholm use it successfully. If a road is congested only at rush hour, the toll should be high only then. The gas tax is an imperfect solution: it also reduces driving
        on empty roads and doesn't cover electric cars.
      </li>
      <li>
        <b>Fish, whales, and other wildlife.</b> The oceans are among the least regulated resources: many countries use them (international agreement is needed) and enforcement is
        hard. The U.S. has hunting licenses, season limits, and rules for throwing back small fish.
      </li>
    </ul>
    <AskExperts
      title="Congestion Pricing"
      source="IGM, January 11, 2012"
      statement="In general, using more congestion charges in crowded transportation networks — such as higher tolls during peak travel times in cities, and peak fees for airplane takeoff and landing slots — and using the proceeds to lower other taxes would make citizens on average better off."
      agree={98}
      uncertain={2}
      disagree={0}
    />
    <BoxLink id="cs-cow">Case Study: Why the Cow Is Not Extinct</BoxLink>
    <BoxLink id="news-road-pricing">In the News: Road Pricing</BoxLink>
  </div>
);

const S114 = () => (
  <div className="prose-uz">
    <p>
      The common theme of Chapters 10 and 11: when something valuable <b>has no price</b>, the market doesn't allocate resources efficiently. This happens when{' '}
      <T id="property-rights" /> are not well established (sometimes they can't be): no one can put a price on clean air or national defense and profit from it.
    </p>
    <p>The government's three options:</p>
    <ul>
      <li>define property rights and unleash market forces (pollution permits);</li>
      <li>regulate private behavior (hunting-season limits);</li>
      <li>supply a good the market fails to provide, financed by taxes (national defense).</li>
    </ul>
  </div>
);

function Lighthouses() {
  return (
    <div className="prose-uz">
      <p>
        Some goods switch between public and private depending on circumstances: fireworks in a town are a public good, while those inside Disney World (paid admission) are closer to
        private.
      </p>
      <p>
        The lighthouse is the classic example of a public good: its benefit to ship captains is neither excludable nor rival → free riding → most lighthouses are run by governments.
        But in 19th-century England some lighthouses were private: the owner charged not the captains but the owner of the nearby <b>port</b>; if they didn't pay, the light was
        turned off and ships avoided that port.
      </p>
      <p>
        The lesson: who benefits, and can they be excluded? If the users are many and can't be excluded — a public good; if it mostly benefits one port owner — closer to a private
        good.
      </p>
    </div>
  );
}

function LifeWorth() {
  return (
    <div className="prose-uz">
      <p>
        A town engineer proposes spending $10,000 on a traffic light that cuts the risk of a fatal accident from 1.6% to 1.1%. To compare costs and benefits they must be in the
        same units — dollars — so life must be given a money value.
      </p>
      <ul>
        <li>“Life is priceless” (infinite value) leads to absurd results: traffic lights on every corner, big cars with every safety feature. In fact people accept risk to save money.</li>
        <li>The “lifetime earnings” method used in courts fails — a nonworker's life would be worth nothing.</li>
        <li>A better method: compare wages in risky jobs (high-rise construction) and safe jobs (controlling for education and experience) → the value of a life ≈ <b>$10 million</b>.</li>
      </ul>
      <p>The answer: 0.005 × $10 million = <b>$50,000</b> &gt; $10,000 → install the traffic light.</p>
    </div>
  );
}

function Cow() {
  return (
    <div className="prose-uz">
      <p>
        When Europeans arrived, North America had more than 60 million bison; by 1900 hunting had left ~400. In Africa elephants are hunted for ivory. Yet valuable beef protects the
        cow from extinction. Why?
      </p>
      <p>
        Elephants are a <b>common resource</b>: they roam ownerless, poachers are many, and none has an incentive to preserve the population. Cows are a <b>private good</b>: they
        live on private ranches, and their owners have a stake in keeping their herds.
      </p>
      <ul>
        <li>Kenya, Tanzania, Uganda: killing elephants and selling ivory is banned — enforcement is hard, the fight has turned violent, and populations kept shrinking.</li>
        <li>Botswana, Malawi, Namibia, Zimbabwe: elephants may be hunted only on one's own land — turning them into private goods; landowners preserve the species and some populations began to grow.</li>
      </ul>
    </div>
  );
}

function RoadPricing() {
  return (
    <div className="prose-uz">
      <Source>Clifford Winston, “How Federal Infrastructure Dollars Get Nickeled and Dimed,” Barron's, March 24, 2021</Source>
      <p>
        In 2021 President Biden proposed spending $2.25 trillion on infrastructure. Brookings economist Winston: because of inefficiencies in transportation policy, every dollar
        sets out on a “perilous journey,” shrinking along the way and often reaching the wrong destination.
      </p>
      <ul>
        <li><b>Inefficient pricing and investment</b>: no charges for congestion or pavement wear — so it's unclear where extra spending would help most; efficient prices would finance investment and cut budget deficits too.</li>
        <li><b>Inflated costs</b>: Davis-Bacon wage rules, “Buy American” requirements, long permitting and environmental reviews.</li>
        <li><b>Earmarks</b> and formula-allocated funds — “side trips to nowhere.”</li>
        <li><b>Slow adoption of new technology</b>; contracts go to the lowest bidder. Even autonomous vehicles won't deliver on their promise unless inefficient infrastructure policy changes.</li>
      </ul>
      <Callout kind="tip" title="Questions to discuss">
        <ol>
          <li>Would you support charging road and bridge users more? Why or why not?</li>
          <li>Would the public accept such charges? Why or why not?</li>
        </ol>
      </Callout>
    </div>
  );
}

const Sorter = () => <GoodsSorter />;
const Vote = () => <PublicGoodVote />;
const Commons = () => <CommonsLab />;
const Life = () => <LifeValueCalc />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    'Classify goods into four categories by **excludability** and **rivalry**',
    'Explain why the **free-rider** problem keeps private markets from providing public goods',
    'Apply **cost–benefit analysis** and the statistical value of a life; compare voting with efficiency',
    'The **Tragedy of the Commons** and policies for common resources (taxes, tolls, privatization)',
    'See that the common root of these problems is poorly defined **property rights**',
  ],
  sections: [
    sec('s-11-1', '11-1', 'The Different Kinds of Goods', S111, checks['s-11-1']),
    sec('s-11-2a', '11-2a', 'The Free-Rider Problem', S112a, checks['s-11-2a']),
    sec('s-11-2b', '11-2b', 'Some Important Public Goods', S112b, checks['s-11-2b']),
    sec('s-11-2c', '11-2c', 'The Difficult Job of Cost–Benefit Analysis', S112c, checks['s-11-2c']),
    sec('s-11-3a', '11-3a', 'The Tragedy of the Commons', S113a, checks['s-11-3a']),
    sec('s-11-3b', '11-3b', 'Some Important Common Resources', S113b, checks['s-11-3b']),
    sec('s-11-4', '11-4', 'Conclusion: Property Rights and Government Action', S114),
  ],
  examTraps: [
    { title: 'Four categories', body: 'Private: E+R. Club: E, not R. Common: R, not E. Public: neither E nor R. QuickQuiz 1–2 ask about exactly this table.' },
    { title: 'Too little or too much?', body: 'Public goods — **underprovided**; common resources — **overused**.' },
    { title: 'Total value', body: 'The provision rule: the sum of **all** residents’ values > cost (negative values too!). Not majority vote or the median (QQ 5).' },
    { title: 'Congestion tolls', body: 'If a road isn’t congested — not rival → the efficient toll is **zero** (QQ 8).' },
    { title: 'Percentage points', body: 'Risk 1.6% → 1.1%: a difference of 0.5 p.p. = **0.005** — multiply by $10 million.' },
  ],
  mistakes: [
    { wrong: '“Everything the government provides is a public good.”', right: 'Education is a private good (with externalities); a public good is defined by its characteristics, not by who provides it.' },
    { wrong: '“Common resources are underprovided.”', right: 'They are **overused**; underprovision is the problem of public goods.' },
    { wrong: '“Life is priceless — give it infinite value in cost–benefit analysis.”', right: 'That gives absurd results; economists use ≈ $10 million.' },
    { wrong: '“If the majority votes for it, it’s efficient.”', right: 'Bayport and River Heights: the vote and the CBA can disagree.' },
  ],
  boxes: [
    box('cs-lighthouses', 'Case Study', 'Are Lighthouses Public Goods?', Lighthouses),
    box('cs-life', 'Case Study', 'How Much Is a Life Worth?', LifeWorth),
    box('cs-cow', 'Case Study', 'Why the Cow Is Not Extinct', Cow),
    box('news-road-pricing', 'In the News', 'Road Pricing', RoadPricing),
  ],
  summary: [
    'Goods differ in whether they are **excludable** (people can be prevented from using them) and whether they are **rival in consumption** (one person’s use diminishes others’). Markets work best for **private goods**, which are both.',
    '**Public goods** are neither excludable nor rival: fireworks, national defense, basic knowledge. Because people are not charged, they **free ride**, making private provision unfeasible. The government can improve the outcome by providing them, deciding the quantity with **cost–benefit analysis**.',
    '**Common resources** are rival but not excludable: common grazing land, clean air, congested roads. Because people are not charged, they tend to **overuse** them. The government can limit use with regulation and corrective taxes.',
  ],
  widgets: { sorter: Sorter, vote: Vote, commons: Commons, life: Life },
  gallery: [
    { title: 'Four types of goods: a sorting game', Component: Sorter },
    { title: 'Public goods: cost–benefit and voting', Component: Vote },
    { title: 'Tragedy of the Commons simulator', Component: Commons },
    { title: 'The value of life and a traffic light', Component: Life },
  ],
};
