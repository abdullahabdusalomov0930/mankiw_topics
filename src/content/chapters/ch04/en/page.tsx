import { ScheduleBuilder } from '../../../../components/graphs/ScheduleBuilder';
import { ShiftTable } from '../../../../components/graphs/ShiftTable';
import { SupplyDemandGraph } from '../../../../components/graphs/SupplyDemandGraph';
import { Callout, PollBar } from '../../../../components/ui/Kit';
import { BookTable, BoxLink, Source } from '../../../../components/ui/Lesson';
import { T } from '../../../../components/ui/Term';
import { box, sec } from '../../../enPage';
import type { ChapterPageContent } from '../../../types';
import {
  ben,
  catherine,
  demandShifts,
  equilibrium,
  hurricane,
  iceMarketTable,
  marketD,
  marketDemand,
  marketS,
  marketSupply,
  pizzaTable,
  smoking,
  supplyShifts,
  ticketsTable,
} from '../presets';
import { checks } from '../quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        Why do tomatoes cost several times more in winter than in summer? Why do restaurant and banquet-hall prices rise in wedding season, while discounts begin
        in the middle of winter? Why does the price of lemons jump at the bazaar as soon as the weather turns cold?
      </p>
      <p>
        Behind all of these lie two words: <b>supply and demand</b>. These two words, the ones economists use most, are what make market economies work: they
        decide how much of each good is produced and the price at which it is sold. This chapter is the foundation for the whole book.
      </p>
    </div>
  );
}

const S41a = () => (
  <div className="prose-uz">
    <p>
      A <T id="market" /> is a group of buyers and sellers of a particular good or service. Together the buyers determine the <b>demand</b> and the sellers the{' '}
      <b>supply</b>.
    </p>
    <p>
      Markets take many forms. Some are highly organized: on wheat and corn exchanges, buyers and sellers meet at a specific time and place, and an auctioneer
      finds the price that balances supply and demand. Many markets are less organized: in a town's market for ice cream, buyers and sellers never gather in one
      place — each shop posts its own price and each buyer decides where and how much to buy. Still, they are closely connected — this is a market too.
    </p>
    <Callout kind="uz">
      All the apple sellers at Chorsu or Oloy bazaar are in one place. But all the taxi drivers and passengers across Tashkent also form one “taxi market,” even
      though they never gather in one spot.
    </Callout>
  </div>
);

const S41b = () => (
  <div className="prose-uz">
    <p>
      The market for ice cream is a <T id="competitive-market" />: buyers know there are many sellers to choose from, and sellers know their product is similar
      to others'. So price and quantity are set not by any single participant but by all of them together.
    </p>
    <p>In this chapter we assume markets are <T id="perfect-competition" label="perfectly competitive" />. Two conditions:</p>
    <ol>
      <li>the goods offered for sale are all <b>the same</b>;</li>
      <li>buyers and sellers are so <b>numerous</b> that no single one can influence the price.</li>
    </ol>
    <p>
      In such a market everyone accepts the price the market sets — they are <T id="price-taker" label="price takers" />. At the market price buyers can buy all
      they want and sellers can sell all they want. The wheat market comes very close.
    </p>
    <p>
      Not all markets are like this. A single seller that sets the price is a <T id="monopoly" /> (say, a town's only cable TV company). Most markets lie between
      the two extremes. But perfect competition is the easiest place to start, and its lessons carry over to more complicated markets.
    </p>
  </div>
);

const S42a = () => (
  <div className="prose-uz">
    <p>
      The <T id="quantity-demanded" /> is the amount buyers are <b>willing and able</b> to purchase. Many things affect it, but one plays a central role — the{' '}
      <b>price</b>. At $20 a scoop, few people buy ice cream; at $0.50, most do.
    </p>
    <p>
      This relationship holds for almost all goods, so it is called the <T id="law-of-demand" />: <i>other things equal</i>, when the price rises the quantity
      demanded falls, and when the price falls it rises.
    </p>
    <p>
      A table showing how many cones Catherine buys each month is a <T id="demand-schedule" />; its graph is a <T id="demand-curve" />. By convention the price is
      on the <b>vertical</b> axis and the quantity on the <b>horizontal</b> one.
    </p>
    <ScheduleBuilder config={catherine} />
  </div>
);

const S42b = () => (
  <div className="prose-uz">
    <p>
      To analyze a market we need not one person's demand but <T id="market-demand" /> — the sum of all individual demands. At each price we add Catherine's and
      Nicholas's quantities. On a graph this means adding the individual curves <b>horizontally</b>: at $4, 4 + 3 = 7 cones.
    </p>
    <ScheduleBuilder config={marketDemand} />
    <Callout kind="exam">
      The market demand curve adds individual curves <b>horizontally</b> (by quantity). Adding them vertically (adding prices) is a common mistake.
    </Callout>
  </div>
);

const S42c = () => (
  <div className="prose-uz">
    <p>
      The market demand curve rests on the assumption that “other things are equal.” If one of those other things changes, the quantity demanded at every price
      changes and the curve <b>shifts</b>: to the right — an <b>increase in demand</b>; to the left — a <b>decrease in demand</b> (Figure 3).
    </p>
    <SupplyDemandGraph config={demandShifts} />
    <p>The variables that shift demand:</p>
    <ul>
      <li>
        <b>Income.</b> A good for which demand falls when income falls is a <T id="normal-good" />. A good for which demand <i>rises</i> when income falls is an{' '}
        <T id="inferior-good" /> (bus rides, for example).
      </li>
      <li>
        <b>Prices of related goods.</b> When frozen yogurt gets cheaper, demand for ice cream falls — they are <T id="substitutes" />. When hot fudge gets cheaper,
        demand for ice cream rises — they are <T id="complements" />.
      </li>
      <li>
        <b>Tastes.</b> If you love pistachio ice cream, you buy more. Economists don't explain tastes, but they study what happens when tastes change.
      </li>
      <li>
        <b>Expectations.</b> If you expect a higher income next month, you spend more today; if you expect a lower price tomorrow, you wait.
      </li>
      <li>
        <b>Number of buyers.</b> If Peter also becomes an ice-cream lover, market demand rises at every price.
      </li>
    </ul>
    <BookTable
      head={['Variable (Table 1)', 'A change in this variable …']}
      rows={[
        ['Price of the good itself', 'Represents a movement along the demand curve'],
        ['Income', 'Shifts the demand curve'],
        ['Prices of related goods', 'Shifts the demand curve'],
        ['Tastes', 'Shifts the demand curve'],
        ['Expectations', 'Shifts the demand curve'],
        ['Number of buyers', 'Shifts the demand curve'],
      ]}
    />
    <Callout kind="exam">
      <p>
        <b>Shift or movement?</b> The rule (Chapter 2 appendix): when a variable <b>not shown</b> on the graph's axes changes, the curve <b>shifts</b>. The price
        is on the vertical axis — a change in it is a <b>movement along</b> the curve.
      </p>
      <p>
        Terms: a shift of the curve is a <b>change in demand</b>; a movement along it is a <b>change in quantity demanded</b>. Try the “Move along a curve” mode
        on the graph.
      </p>
    </Callout>
    <BoxLink id="cs-smoking">Case Study: Two Ways to Reduce Smoking</BoxLink>
  </div>
);

const S43a = () => (
  <div className="prose-uz">
    <p>
      The <T id="quantity-supplied" /> is the amount sellers are <b>willing and able</b> to sell. When the price is high, selling ice cream is profitable: sellers
      work long hours, buy more machines, and hire more workers. When the price is low, they produce less and some shut down. This is the{' '}
      <T id="law-of-supply" />: other things equal, when the price rises the quantity supplied rises too.
    </p>
    <p>
      Ben's table is a <T id="supply-schedule" /> and its graph a <T id="supply-curve" />. Below $2 Ben supplies no ice cream at all.
    </p>
    <ScheduleBuilder config={ben} />
  </div>
);

const S43b = () => (
  <div className="prose-uz">
    <p>
      Like market demand, <T id="market-supply" /> is the sum of the supplies of all sellers — individual supply curves added <b>horizontally</b>. At $4 Ben
      supplies 3 and Jerry 4 → the market supplies 7.
    </p>
    <ScheduleBuilder config={marketSupply} />
  </div>
);

const S43c = () => (
  <div className="prose-uz">
    <p>
      The market supply curve also holds constant every factor except the price. When one of them changes, the curve shifts: to the right — an{' '}
      <b>increase in supply</b>; to the left — a <b>decrease in supply</b> (Figure 7). If sugar gets cheaper, for example, selling ice cream becomes more
      profitable — supply shifts right.
    </p>
    <SupplyDemandGraph config={supplyShifts} />
    <ul>
      <li>
        <b>Input prices.</b> When cream, sugar, machines, buildings, or workers' labor get more expensive, supply falls. Supply moves in the <b>opposite</b>{' '}
        direction to input prices.
      </li>
      <li>
        <b>Technology.</b> Mechanized ice-cream machines cut the labor needed and raised supply. In the long run this is one of the most powerful forces.
      </li>
      <li>
        <b>Expectations.</b> A seller who expects a higher price later may store some of today's output and sell less today.
      </li>
      <li>
        <b>Number of sellers.</b> If Ben or Jerry retires, supply falls; if Edy opens a new shop, it rises.
      </li>
    </ul>
    <BookTable
      head={['Variable (Table 2)', 'A change in this variable …']}
      rows={[
        ['Price of the good itself', 'Represents a movement along the supply curve'],
        ['Input prices', 'Shifts the supply curve'],
        ['Technology', 'Shifts the supply curve'],
        ['Expectations', 'Shifts the supply curve'],
        ['Number of sellers', 'Shifts the supply curve'],
      ]}
    />
    <Callout kind="uz">
      A cotton gin gets new, more productive equipment — that shifts the <b>supply</b> of cotton fabric to the right (technology). Electricity gets more expensive
      — an input price increase for almost every producer, so supply shifts left.
    </Callout>
  </div>
);

const S44a = () => (
  <div className="prose-uz">
    <p>
      Now we put the two together. The supply and demand curves cross at one point — the market's <T id="equilibrium" />. The price there is the{' '}
      <T id="equilibrium-price" /> and the quantity the <T id="equilibrium-quantity" />. In the ice-cream market they are <b>$4</b> and <b>7 cones</b>.
    </p>
    <ScheduleBuilder config={iceMarketTable} />
    <p>
      At the equilibrium price the quantity buyers want exactly equals the quantity sellers want to sell. That is why it is called the{' '}
      <b>market-clearing price</b>: everyone is satisfied — buyers have bought all they want and sellers have sold all they want.
    </p>
    <p>What happens when the price is not at equilibrium? Turn on the “Move along a curve” mode and drag the price line:</p>
    <ul>
      <li>
        <b>A price of $5</b> (too high): quantity supplied 10, quantity demanded 4 → a <T id="surplus" /> (excess supply). Sellers' freezers fill up and they cut
        the price.
      </li>
      <li>
        <b>A price of $3</b> (too low): quantity demanded 10, quantity supplied 4 → a <T id="shortage" /> (excess demand). Lines form and sellers raise the price.
      </li>
    </ul>
    <SupplyDemandGraph config={equilibrium} />
    <p>
      Wherever the price starts, the actions of buyers and sellers push it toward equilibrium. This is so common that it is called the{' '}
      <T id="law-of-supply-and-demand" />: the price of any good adjusts to bring the quantities supplied and demanded into balance. In most markets surpluses and
      shortages are temporary, because prices adjust quickly.
    </p>
  </div>
);

const S44b = () => (
  <div className="prose-uz">
    <p>To analyze how an event affects equilibrium, the book proposes <b>three steps</b> (Table 3):</p>
    <ol>
      <li>Does the event shift the supply curve, the demand curve, or both?</li>
      <li>In which direction does the curve shift?</li>
      <li>Use the supply-and-demand diagram to compare the new equilibrium with the old one: how did price and quantity change?</li>
    </ol>
    <p>
      <b>Example 1: demand shifts (Figure 10).</b> The summer is very hot. (1) The weather changes buyers' tastes — demand shifts, supply stays. (2) Cold treats
      are more appealing in the heat — demand shifts <b>right</b>. (3) At the old price of $4 there is now a shortage, so the price rises: <b>$4 → $5</b>, quantity{' '}
      <b>7 → 10</b>.
    </p>
    <SupplyDemandGraph config={{ ...demandShifts, title: 'Figure 10 — A hot summer', presets: undefined, demand: { a: marketD.a + marketD.b * 6, b: marketD.b } }} baseline={{ D: marketD, S: marketS }} />
    <p>
      <b>Tell a shift from a movement.</b> When the hot weather raised the price, sellers sold more, but the supply curve stayed put. Economists say the{' '}
      <b>quantity supplied</b> rose while <b>supply</b> did not change. A shift of a curve is a “change in supply/demand”; a movement along it is a “change in the
      quantity supplied/demanded.”
    </p>
    <p>
      <b>Example 2: supply shifts (Figure 11).</b> A hurricane destroys part of the sugarcane crop and drives up the price of sugar. (1) Sugar is an input, so supply
      is affected. (2) Costs rise — supply shifts <b>left</b>. (3) The price goes <b>$4 → $5</b> and the quantity <b>7 → 4</b>.
    </p>
    <SupplyDemandGraph config={{ ...supplyShifts, title: 'Figure 11 — Sugar gets more expensive', supply: hurricane }} baseline={{ D: marketD, S: marketS }} />
    <p>
      <b>Example 3: both shift (Figure 12).</b> A hot summer and a hurricane at the same time. Demand shifts right, supply left. The price <b>definitely rises</b>,
      but the quantity depends on the relative size of the shifts: if demand shifts more, the quantity rises (panel a); if supply shifts more, it falls (panel b).
      This case is called <b>ambiguous</b>.
    </p>
    <p>Table 4 — every combination. Click a cell and the case is drawn on the graph:</p>
    <ShiftTable demand={marketD} supply={marketS} xMax={16} yMax={7} />
    <Callout kind="exam">
      You don't need to memorize Table 4 — understand the logic: a demand shift moves P and Q in the <b>same</b> direction, a supply shift in <b>opposite</b>{' '}
      directions. When two shifts happen together, the variable they push in opposite directions is <b>ambiguous</b>.
    </Callout>
    <BoxLink id="news-disasters">In the News: Price Increases after Disasters</BoxLink>
  </div>
);

const S45 = () => (
  <div className="prose-uz">
    <p>
      Chapter 1's principle: markets are usually a good way to organize economic activity. This chapter showed how markets work: supply and demand set the price,
      and the price acts as a <b>signal</b> that allocates resources.
    </p>
    <p>
      Beachfront land is limited — not everyone can live by the sea. Who does? Those willing and able to pay. The price adjusts until the supply of and demand for
      the land balance. Likewise, who becomes a farmer is decided not by a government planner but by food prices and farmers' pay, which ensure that enough
      people choose farming.
    </p>
    <p>
      Why don't the decentralized decisions of millions of people turn into chaos? The answer is one word — <b>prices</b>. If an invisible hand guides market
      economies, then, in the book's image, <b>the price system is the baton the invisible hand uses to conduct the economic orchestra</b>.
    </p>
    <div className="not-prose card mt-4 p-4">
      <div className="kicker">Ask the Experts · Price Gouging (IGM, 2020)</div>
      <p className="mt-2 text-[15px] italic">“Laws to prevent high prices for essential goods in short supply in a crisis would raise social welfare.”</p>
      <PollBar agree={35} uncertain={29} disagree={36} />
      <p className="mt-2 text-sm text-muted">Economists are almost evenly split on this — efficiency and fairness collide.</p>
    </div>
  </div>
);

function Smoking() {
  return (
    <div className="prose-uz">
      <p>Smoking harms smokers and the people around them. Policymakers want to reduce it. There are two ways:</p>
      <ul>
        <li>
          <b>Shift demand.</b> Public-service ads, warnings on packs, bans on cigarette ads on TV — all reduce the quantity demanded at any price: the demand curve
          shifts <b>left</b> (panel a: at $5, 20 → 10 cigarettes).
        </li>
        <li>
          <b>Raise the price.</b> A cigarette tax, much of which producers pass on in the price. People smoke less, but the demand curve <b>does not shift</b>: it
          is a movement up along the curve (panel b: $5 → $10, 20 → 12).
        </li>
      </ul>
      <SupplyDemandGraph config={smoking} />
      <p>
        How sensitive is smoking to the price? Studies: a <b>10% price increase cuts smoking by 4%</b>. Teenagers are much more sensitive: a 10% price increase
        cuts teen smoking by <b>12%</b>.
      </p>
      <p>
        How do cigarette prices affect other products, such as marijuana? Opponents of cigarette taxes argue they are substitutes, so pricier cigarettes push
        people toward marijuana. Many experts see tobacco as a “gateway drug.” The data fit the second view: when cigarettes are cheaper, more marijuana is used
        — so they are <b>complements</b>.
      </p>
    </div>
  );
}

function Disasters() {
  return (
    <div className="prose-uz">
      <Source>Richard Thaler, “The Law of Supply and Demand Isn't Fair,” New York Times, 2020 — summarized.</Source>
      <p>
        In the first weeks of the coronavirus, stores ran out of toilet paper, hand sanitizer, flour, and yeast; hospitals couldn't find masks and ventilators. Why
        didn't prices rise until the market cleared?
      </p>
      <ul>
        <li>
          Thaler (with Kahneman and Knetsch) found the answer in one word: <b>fairness</b>. Raising prices in an emergency is socially unacceptable: <b>82%</b> of
          respondents judged a store that raised the price of snow shovels from $15 to $20 after a storm to be unfair.
        </li>
        <li>
          Big retailers didn't raise prices but limited the quantity each buyer could take; Amazon and eBay banned “price gouging.” They think of long-run customer
          loyalty; “entrepreneurs” out for quick money behave differently.
        </li>
        <li>
          N95 masks: hospitals had paid <b>35 cents</b> under long-term contracts, but during the shortage one had to pay a foreign supplier <b>$6</b>.
        </li>
        <li>
          Tyler Cowen: high prices discourage panic buying and help goods reach those who really need them. Thaler: but who “really needs” something shouldn't be
          decided by willingness to pay alone.
        </li>
      </ul>
      <Callout kind="tip" title="Questions to discuss">
        <ol>
          <li>If sellers had been allowed to raise prices during the pandemic, would hand sanitizer have been easier to find? Why?</li>
          <li>If price increases are banned, how should scarce resources be allocated? What are the advantages and problems of your proposal?</li>
        </ol>
      </Callout>
    </div>
  );
}

const PizzaWidget = () => <ScheduleBuilder config={pizzaTable} />;
const TicketsWidget = () => <ScheduleBuilder config={ticketsTable} />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    'Define a **market**, a **competitive market**, and **perfect competition**',
    'Build demand and supply schedules and curves, and derive market curves from individual ones',
    'Know what shifts demand and supply, and distinguish a **shift** from a **movement along** a curve',
    'Find the equilibrium and explain how a **surplus** or a **shortage** brings the market back to it',
    'Use the **three steps** to analyze how any event affects price and quantity (Table 4)',
    'Explain how prices allocate resources',
  ],
  sections: [
    sec('s-4-1a', '4-1a', 'What Is a Market?', S41a),
    sec('s-4-1b', '4-1b', 'What Is Competition?', S41b, checks['s-4-1']),
    sec('s-4-2a', '4-2a', 'The Demand Curve: The Relationship between Price and Quantity Demanded', S42a, checks['s-4-2a']),
    sec('s-4-2b', '4-2b', 'Market Demand versus Individual Demand', S42b, checks['s-4-2b']),
    sec('s-4-2c', '4-2c', 'Shifts in the Demand Curve', S42c, checks['s-4-2c']),
    sec('s-4-3a', '4-3a', 'The Supply Curve: The Relationship between Price and Quantity Supplied', S43a, checks['s-4-3a']),
    sec('s-4-3b', '4-3b', 'Market Supply versus Individual Supply', S43b, checks['s-4-3b']),
    sec('s-4-3c', '4-3c', 'Shifts in the Supply Curve', S43c, checks['s-4-3c']),
    sec('s-4-4a', '4-4a', 'Equilibrium', S44a, checks['s-4-4a']),
    sec('s-4-4b', '4-4b', 'Three Steps to Analyzing Changes in Equilibrium', S44b, checks['s-4-4b']),
    sec('s-4-5', '4-5', 'Conclusion: How Prices Allocate Resources', S45),
  ],
  examTraps: [
    { title: 'Shift or movement?', body: "A change in the good's own price — a **movement along** (change in quantity demanded/supplied). A change in anything else — a **shift** (change in demand/supply)." },
    { title: 'Normal and inferior', body: 'Normal: income ↑ → demand ↑. Inferior: income ↑ → demand ↓. Inferior does not mean “low quality.”' },
    { title: 'Substitutes and complements', body: "A pricier substitute shifts demand **right**; a pricier complement shifts it **left**. Don't confuse this with the good's own price." },
    { title: 'The 5 demand shifters', body: 'Income, prices of related goods, tastes, expectations, number of buyers. The 4 **supply** shifters: input prices, technology, expectations, number of sellers.' },
    { title: 'Market curves', body: 'Individual curves are added **horizontally**: the sum of quantities at each price.' },
    { title: 'Two shifts — ambiguous', body: 'D↑ and S↓: P ↑ for sure, Q ambiguous. D↑ and S↑: Q ↑ for sure, P ambiguous. On an exam, “cannot be determined” can be the right answer.' },
  ],
  mistakes: [
    { wrong: '“The price fell, so demand rose.”', right: 'A lower price raises the **quantity demanded** (a movement). An increase in **demand** is a shift of the curve to the right.' },
    { wrong: '“When demand rises, supply rises too.”', right: 'The supply curve stays put; the **quantity supplied** rises (a movement up the curve).' },
    { wrong: '“With a shortage the price falls.”', right: 'A shortage means the price is **below** equilibrium: lines form and the price **rises**.' },
    { wrong: '“When an input gets pricier, demand falls.”', right: 'Input prices are a **supply** factor: supply shifts left, price ↑, quantity ↓.' },
    { wrong: '“At equilibrium nobody buys, because the market stops.”', right: 'Trade continues at equilibrium — there is just no **pressure** on the price to rise or fall.' },
    { wrong: '“Market demand is average demand.”', right: 'It is a sum: the quantities of all buyers are added.' },
  ],
  boxes: [
    box('cs-smoking', 'Case Study', 'Two Ways to Reduce Smoking', Smoking),
    box('news-disasters', 'In the News', 'Price Increases after Disasters', Disasters),
  ],
  summary: [
    'Economists use the **model of supply and demand** to analyze competitive markets. In a competitive market there are many buyers and sellers, each of whom has little or no influence on the market price.',
    'The **demand curve** shows how the quantity of a good demanded depends on the price. According to the law of demand, as the price of a good falls, the quantity demanded rises — so the demand curve slopes downward.',
    'In addition to price, other determinants of demand include **income, the prices of substitutes and complements, tastes, expectations, and the number of buyers**. If one of these changes, the demand curve shifts.',
    'The **supply curve** shows how the quantity of a good supplied depends on the price. According to the law of supply, as the price of a good rises, the quantity supplied rises — so the supply curve slopes upward.',
    'In addition to price, other determinants of supply include **input prices, technology, expectations, and the number of sellers**. If one of these changes, the supply curve shifts.',
    'The intersection of the supply and demand curves is the **market equilibrium**. At the equilibrium price, the quantity demanded equals the quantity supplied.',
    'The behavior of buyers and sellers naturally drives markets toward equilibrium: when the price is above it there is a **surplus**, which pushes the price down; when it is below there is a **shortage**, which pushes the price up.',
    'To analyze how any event influences a market, use the **three steps**: decide which curve shifts, in which direction, and compare the new equilibrium with the old one.',
    'In market economies **prices are the signals** that guide economic decisions and allocate scarce resources.',
  ],
  widgets: { pizza: PizzaWidget, tickets: TicketsWidget },
  gallery: [
    { title: 'Market demand: adding individual schedules', Component: () => <ScheduleBuilder config={marketDemand} /> },
    { title: 'Market supply: adding individual schedules', Component: () => <ScheduleBuilder config={marketSupply} /> },
    { title: 'Table 4: shifts in supply and demand', Component: () => <ShiftTable demand={marketD} supply={marketS} xMax={16} yMax={7} /> },
  ],
};
