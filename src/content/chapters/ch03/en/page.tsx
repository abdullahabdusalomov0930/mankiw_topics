import { ComparativeAdvantageLab } from '../../../../components/graphs/ComparativeAdvantageLab';
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
        An ordinary day: juice from Fergana apples, coffee from Brazilian beans, the news on a tablet made in China, a shirt sewn in Turkey, a bicycle assembled from
        parts made in a dozen countries, a textbook written in the United States and printed somewhere else. Every day you rely on thousands of people you will
        never meet.
      </p>
      <p>
        They do it not out of generosity or because a government orders them to, but because they get something in return. This chapter develops Principle 5 from
        Chapter 1: <b>trade can make everyone better off</b>. What exactly do people gain from trade? Why do they choose to become interdependent? A haircut at the
        barber's and a T-shirt sewn on the other side of the world follow the same logic.
      </p>
    </div>
  );
}

const S31 = () => (
  <div className="prose-uz">
    <p>
      Imagine a world with only two goods — <b>meat and potatoes</b> — and two people — <b>Ruby</b> the rancher and <b>Frank</b> the farmer. Both would like to eat
      both. If Ruby could produce only meat and Frank only potatoes, the gain from trade would be obvious: a steak with a baked potato beats months of roast,
      stewed meat or mashed and fried potatoes. The same is true if each could grow the other good only at great cost.
    </p>
    <p>The gains are less obvious when one person is <b>better at everything</b>. Ruby is better at both. Should she trade with Frank?</p>
  </div>
);

const S31a = () => (
  <div className="prose-uz">
    <p>Each works 8 hours a day:</p>
    <BookTable
      caption="Figure 1 (a) — Production Opportunities"
      head={['', 'Minutes per oz: Meat', 'Potatoes', 'Produced in 8 hours: Meat', 'Potatoes']}
      rows={[
        ['Frank the farmer', '60 min/oz', '15 min/oz', '8 oz', '32 oz'],
        ['Ruby the rancher', '20 min/oz', '10 min/oz', '24 oz', '48 oz'],
      ]}
    />
    <p>
      If Frank spends 8 hours growing potatoes he gets 32 oz; all on meat, 8 oz; half and half, 16 oz of potatoes and 4 oz of meat. Ruby: 48 oz or 24 oz; half and
      half, 24 and 12. These are their <T id="production-possibilities-frontier" label="production possibilities frontiers" />. Unlike those in Chapter 2, they
      are <b>straight lines</b>: whenever Frank moves an hour from meat to potatoes he always gives up 1 oz of meat and gains 4 oz of potatoes — a constant rate.
    </p>
    <p>
      Without trade, each consumes what he or she produces: the PPF is also the <b>consumption possibilities frontier</b>. Given their tastes, Frank chooses A
      (16 oz potatoes, 4 oz meat) and Ruby B (24, 12).
    </p>
  </div>
);

const S31b = () => (
  <div className="prose-uz">
    <p>
      After several years Ruby has an idea: “Frank, grow only potatoes — 32 oz. Give me 15 oz and I'll give you 5 oz of meat. You'll eat 17 oz of potatoes and 5 oz
      of meat — more of both than now!” Frank is suspicious: “If it's so good for me, it can't be good for you.” Ruby: “I'll spend 6 hours on meat and 2 on potatoes
      — 18 oz of meat and 12 oz of potatoes. Trading 5 oz of meat for 15 oz of potatoes leaves me 13 oz of meat and 27 oz of potatoes — I gain too!”
    </p>
    <BookTable
      caption="Figure 2 (c) — The Gains from Trade: A Summary"
      head={['', 'Frank: Meat', 'Potatoes', 'Ruby: Meat', 'Potatoes']}
      rows={[
        ['Without trade: production & consumption', '4 oz', '16 oz', '12 oz', '24 oz'],
        ['With trade: production', '0 oz', '32 oz', '18 oz', '12 oz'],
        ['Trade', 'gets 5 oz', 'gives 15 oz', 'gives 5 oz', 'gets 15 oz'],
        ['Consumption', '5 oz', '17 oz', '13 oz', '27 oz'],
        ['**Gains from trade**', '**+1 oz**', '**+1 oz**', '**+1 oz**', '**+3 oz**'],
      ]}
    />
    <ComparativeAdvantageLab />
    <p>
      Both consume more meat and more potatoes without working an hour longer: points A* and B* lie <b>outside</b> their PPFs — these are the{' '}
      <T id="gains-from-trade" />. The puzzle: if Ruby is better at both, how can Frank specialize in “what he does best”?
    </p>
    <Callout kind="note" title="About the book's table">
      The “Increase in Consumption” row of the printed table was garbled in the text extraction; the +1/+1/+1/+3 values above were recomputed from the table's
      consumption numbers (5−4, 17−16, 13−12, 27−24).
    </Callout>
  </div>
);

const S32a = () => (
  <div className="prose-uz">
    <p>
      Who can produce potatoes at lower cost? One answer compares the inputs used: <T id="absolute-advantage" />. Here the only input is time. Ruby needs 20 minutes
      for meat (Frank 60) and 10 for potatoes (Frank 15) — an absolute advantage in <b>both</b>. Measured by inputs, potatoes are cheaper for Ruby.
    </p>
  </div>
);

const S32b = () => (
  <div className="prose-uz">
    <p>
      The other answer uses <T id="opportunity-cost" />. Ruby needs 10 minutes for 1 oz of potatoes; in that time she could produce ½ oz of meat → 1 oz of potatoes =
      <b> ½ oz of meat</b>. Frank needs 15 minutes; in that time he could make ¼ oz of meat → 1 oz of potatoes = <b>¼ oz of meat</b>.
    </p>
    <BookTable
      caption="Table 1 — The Opportunity Cost of Meat and Potatoes"
      head={['', '1 oz of Meat', '1 oz of Potatoes']}
      rows={[
        ['Frank the farmer', '4 oz potatoes', '¼ oz meat'],
        ['Ruby the rancher', '2 oz potatoes', '½ oz meat'],
      ]}
    />
    <p>
      The OC of meat is the <b>inverse</b> of the OC of potatoes. <T id="comparative-advantage" label="Comparative advantage" /> means producing a good at a lower
      opportunity cost: Frank has it in <b>potatoes</b> (¼ &lt; ½), Ruby in <b>meat</b> (2 &lt; 4).
    </p>
    <Callout kind="exam">
      One person can have an <b>absolute</b> advantage in both goods but cannot have a <b>comparative</b> advantage in both: if the OC of one good is high, the
      other's is low. If the OCs are equal there is no comparative advantage and no gain from trade (QuickQuiz 8).
    </Callout>
  </div>
);

const S32c = () => (
  <div className="prose-uz">
    <p>When each produces the good in which he or she has a comparative advantage, total production rises: potatoes <b>40 → 44</b>, meat <b>16 → 18</b> oz. The pie grows.</p>
    <p>
      The gains show up in the <b>implicit prices</b>: Frank gives 15 oz of potatoes for 5 oz of meat — 1 oz of meat costs him <b>3 oz of potatoes</b>, less than his
      OC (4). Ruby gets 15 oz of potatoes for 5 oz of meat — 1 oz of potatoes costs her <b>⅓ oz of meat</b>, less than her OC (½). Each buys a good for less than
      its opportunity cost to them.
    </p>
    <Callout kind="note" title="About the text">The book's PDF text shows “11/3 ounce” — an extraction error; the right figure is ⅓ (5/15).</Callout>
  </div>
);

const S32d = () => (
  <div className="prose-uz">
    <p>
      The general rule: for both parties to gain, the price at which they trade must lie <b>between their two opportunity costs</b> — the{' '}
      <T id="terms-of-trade" />. The price of meat must be between 2 (Ruby's OC) and 4 (Frank's OC) oz of potatoes; 3 need not be exactly in the middle.
    </p>
    <ul>
      <li>Price &lt; 2: both want to <b>buy</b> meat — there is no seller.</li>
      <li>Price &gt; 4: both want to <b>sell</b> meat — there is no buyer.</li>
      <li>2 &lt; price &lt; 4: Ruby sells meat for potatoes and Frank does the reverse — both gain.</li>
    </ul>
    <BoxLink id="fyi-smith-ricardo">FYI: The Legacy of Adam Smith and David Ricardo</BoxLink>
  </div>
);

const S33a = () => (
  <div className="prose-uz">
    <p>
      Tennis star <b>Naomi Osaka</b> can mow her lawn in 2 hours; in those 2 hours she could film a commercial and earn <b>$30,000</b>. Hari, the boy next door, takes
      4 hours, and in that time he could earn <b>$50</b> at McDonald's. Osaka has the <b>absolute</b> advantage (she is faster), but by OC — Osaka $30,000, Hari $50
      — the <b>comparative</b> advantage is Hari's.
    </p>
    <p>
      Osaka should film the commercial and hire Hari (unless mowing is her favorite way to relax). Any payment above $50 and below $30,000 makes both better off.
      As an input to production, <b>time</b> is the scarcest resource.
    </p>
  </div>
);

const S33b = () => (
  <div className="prose-uz">
    <p>
      Goods produced abroad and sold at home are <T id="imports" />; the reverse are <T id="exports" />. The U.S. and Japan: a worker in either country makes{' '}
      <b>1 car</b> a month; an American worker (on fertile land) grows <b>2 tons</b> of food, a Japanese worker <b>1 ton</b>.
    </p>
    <ul>
      <li>OC of 1 car: U.S. — 2 t, Japan — 1 t → <b>Japan</b> has the comparative advantage in cars and exports them.</li>
      <li>OC of 1 t of food: U.S. — ½ car, Japan — 1 → <b>the U.S.</b> in food, which it exports.</li>
    </ul>
    <p>
      Reality is more complex: trade affects an American farmer and an American autoworker differently — even when the country as a whole gains, some people may
      lose. But the lesson stands: international trade is not like war; it makes all countries more prosperous. The same holds for Uzbekistan: its exports of
      cotton and textiles, fruit and vegetables, and gold follow the logic of comparative advantage.
    </p>
    <AskExperts
      title="Trade between China and the United States"
      source="IGM, June 19, 2012"
      statement="Trade with China makes most Americans better off because, among other advantages, they can buy goods that are made or assembled more cheaply in China."
      note="A second statement: “Some Americans who work in the production of competing goods, such as clothing and furniture, are made worse off by trade with China.” The percentages for both statements are shown in the book as an image and could not be read from the text (inventory.md). The book's conclusion: trade benefits most people but hurts workers in competing industries."
    />
  </div>
);

const S34 = () => (
  <div className="prose-uz">
    <p>
      When Americans buy socks from China, when residents of Maine drink orange juice from Florida, and when a homeowner hires the kid next door to mow the lawn,
      the same economic forces are at work. In a two-person world Ruby and Frank strike a deal directly; in a world of billions, that job is done by the market
      forces of <b>supply and demand</b> (Chapter 4).
    </p>
    <BoxLink id="news-marriage">In the News: Economics within a Marriage</BoxLink>
  </div>
);

function SmithRicardo() {
  return (
    <div className="prose-uz">
      <p>
        Adam Smith (1776): it is the maxim of every prudent master of a family never to make at home what it will cost him more to make than to buy. The tailor does
        not make his own shoes, the shoemaker does not make his own clothes, the farmer makes neither — each puts his whole effort into the work in which he has
        some advantage over his neighbors and buys what he needs with part of his produce.
      </p>
      <Source>Adam Smith, The Wealth of Nations (1776) — paraphrased</Source>
      <p>
        Smith's book inspired <b>David Ricardo</b>, a millionaire stockbroker, to become an economist. In his 1817 book <i>On the Principles of Political Economy and
        Taxation</i> he developed the principle of comparative advantage as we know it today: two goods (wine and cloth), two countries (England and Portugal) — both
        gain from trade and specialization. As a member of Parliament, Ricardo opposed the <b>Corn Laws</b>, which restricted grain imports.
      </p>
      <p>
        Smith's and Ricardo's conclusions have stood the test of time: economists disagree about many policies, yet they support free trade almost unanimously — and
        the core argument is still comparative advantage.
      </p>
    </div>
  );
}

function Marriage() {
  return (
    <div className="prose-uz">
      <Source>Emily Oster, “You're Dividing the Chores Wrong,” Slate, November 21, 2012</Source>
      <p>
        Housework ranks in surveys among the least enjoyable activities (along with commuting). If each partner is good at different things, dividing it is easy.
        Often, though, one person is better at everything. The economist Emily Oster was better than her husband at both cooking and washing dishes. Once they had a
        baby, should she do both?
      </p>
      <ul>
        <li>Time-use data: women spend about 44 minutes a day more than men on housework (2 h 11 min versus 1 h 27 min); men spend more only on “lawn” and “exterior maintenance.”</li>
        <li>
          The first principle is <b>increasing marginal cost</b>: people get worse when tired. An “average” employee at 9 a.m. beats an exhausted “good” one at 2 a.m.
          So loading every task on one person is inefficient; equalize each person's productivity on their last task.
        </li>
        <li>
          Who does what? — <b>comparative advantage</b>. An example: Finland is better than Sweden at both reindeer hats and snowshoes, but much better at hats and
          only a little better at snowshoes → world output is greatest if Finland makes hats and Sweden snowshoes.
        </li>
        <li>
          Oster was “much” better at cooking and “a bit” better at dishes → her husband took over the dishes. A bonus: <b>learning by doing</b> — after 18 months his
          dishwasher loading became “a work of art” and Oster was banned from going near it.
        </li>
      </ul>
      <Callout kind="tip" title="Questions to discuss">
        <ol>
          <li>Are tasks in your family divided by comparative advantage? How could it be improved?</li>
          <li>Does marrying an economist help family harmony, or the opposite?</li>
        </ol>
      </Callout>
    </div>
  );
}

const Lab = () => <ComparativeAdvantageLab />;
const Calc = () => <ComparativeAdvantageLab initial="calc" />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    'Use the **PPF** in the Frank-and-Ruby example to show consumption possibilities and the gains from trade',
    'Distinguish **absolute advantage** from **comparative advantage** and compute opportunity costs',
    'Explain why the price of a trade must lie **between** the opportunity costs',
    'Apply comparative advantage to people (Osaka) and countries (U.S.–Japan); **imports** and **exports**',
    'Understand that trade can make a country richer while hurting some groups',
  ],
  sections: [
    sec('s-3-1', '3-1', 'A Parable for the Modern Economy', S31),
    sec('s-3-1a', '3-1a', 'Production Possibilities', S31a, checks['s-3-1a']),
    sec('s-3-1b', '3-1b', 'Specialization and Trade', S31b, checks['s-3-1b']),
    sec('s-3-2a', '3-2a', 'Absolute Advantage', S32a, checks['s-3-2a']),
    sec('s-3-2b', '3-2b', 'Opportunity Cost and Comparative Advantage', S32b, checks['s-3-2b']),
    sec('s-3-2c', '3-2c', 'Comparative Advantage and Trade', S32c, checks['s-3-2c']),
    sec('s-3-2d', '3-2d', 'The Price of the Trade', S32d, checks['s-3-2d']),
    sec('s-3-3a', '3-3a', 'Should Naomi Osaka Mow Her Own Lawn?', S33a, checks['s-3-3a']),
    sec('s-3-3b', '3-3b', 'Should the United States Trade with Other Countries?', S33b, checks['s-3-3b']),
    sec('s-3-4', '3-4', 'Conclusion', S34),
  ],
  examTraps: [
    { title: 'Absolute ≠ comparative', body: 'Absolute — fewer **inputs**; comparative — a lower **OC**. **Comparative** advantage sets the direction of trade.' },
    { title: 'Which way to divide', body: 'With times: OC(X) = time(X) / time(Y). With outputs: OC(X) = Y per hour ÷ X per hour. Don’t flip them.' },
    { title: 'The price range', body: 'Both gain ⇔ the price lies **between** the two OCs (meat: 2 < P < 4).' },
    { title: 'Equal OCs', body: 'If the OCs are equal there is no gain, even if someone has an absolute advantage in both (QuickQuiz 8).' },
    { title: 'Imports', body: 'A country imports goods in which **other countries have the comparative advantage** (QuickQuiz 6).' },
  ],
  mistakes: [
    { wrong: '“Ruby is better at everything, so she gains nothing from trade.”', right: 'Ruby gains too: 12 + 24 → 13 + 27.' },
    { wrong: '“A talented person has a comparative advantage in everything.”', right: 'Nobody can have a comparative advantage in both goods.' },
    { wrong: '“In trade, when one side wins the other loses.”', right: 'Voluntary trade makes **both** sides better off.' },
    { wrong: '“Trade is good for the country, so it is good for everyone.”', right: 'Workers in competing industries may be hurt.' },
    { wrong: '“A straight-line PPF is the same as a bowed-out one.”', right: 'A straight line means a **constant** OC (Frank, Ruby).' },
  ],
  boxes: [
    box('fyi-smith-ricardo', 'FYI', 'The Legacy of Adam Smith and David Ricardo', SmithRicardo),
    box('news-marriage', 'In the News', 'Economics within a Marriage', Marriage),
  ],
  summary: [
    'Each person consumes goods and services produced by many other people both in the United States and around the world. Interdependence and trade are desirable because they allow everyone to enjoy a greater quantity and variety of goods and services.',
    'There are two ways to compare the ability of two people in producing a good. The person who can produce the good with the **smaller quantity of inputs** has an **absolute advantage**. The person who has the **smaller opportunity cost** of producing the good has a **comparative advantage**. The gains from trade are based on comparative advantage, not absolute advantage.',
    'Trade makes everyone better off because it allows people to specialize in those activities in which they have a **comparative advantage**.',
    'The principle of comparative advantage applies to **countries** as well as to people. Economists use it to advocate **free trade** among countries.',
  ],
  widgets: { ca: Lab, 'ca-calc': Calc },
  gallery: [
    { title: 'Frank and Ruby: specialization and trade', Component: Lab },
    { title: 'Absolute and comparative advantage calculator', Component: Calc },
  ],
};
