import { Sticker } from '../../../../components/ui/Sticker';
import { SupplyDemandGraph } from '../../../../components/graphs/SupplyDemandGraph';
import { Callout, PollBar } from '../../../../components/ui/Kit';
import { BoxLink, Source } from '../../../../components/ui/Lesson';
import { Math as M } from '../../../../components/ui/Math';
import { T } from '../../../../components/ui/Term';
import { box, sec } from '../../../enPage';
import type { ChapterPageContent } from '../../../types';
import {
  gasLines,
  iceCeiling,
  iceFloor,
  iceMarket,
  iceTaxBuyers,
  iceTaxSellers,
  incidence,
  luxuryTax,
  minimumWage,
  payrollTax,
  problem10,
  rentControl,
} from '../presets';
import { checks } from '../quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        You have probably heard how much apartment rents in Tashkent have risen in recent years. Suppose the city announces:{' '}
        <b>“Rent for a one-room apartment may not exceed $300 a month!”</b> Students and young families are delighted. But a year or two later an empty apartment is
        almost impossible to find, landlords stop making repairs, and apartments go “through connections” or for extra money under the table. Why does a
        well-meant law have such results?
      </p>
      <p>
        Or another question: the government taxes every phone sold, and the law says “the store pays the tax.” So you, the buyer, lose nothing? This chapter's most
        surprising answer: <b>who bears a tax is decided not by the law but by the market</b>.
      </p>
    </div>
  );
}

const S61 = () => (
  <div className="prose-uz">
    <p>
      Back to the ice-cream market (Chapter 4). In a competitive market the price balances supply and demand; say the <T id="equilibrium-price" /> is <b>$3</b> a cone.
    </p>
    <p>
      Not everyone is happy with this outcome. The American Association of Ice-Cream Eaters says $3 is too high; the National Organization of Ice-Cream Makers
      says $3 is too low (the result of “cutthroat competition”). Both lobby the government to control the price by law:
    </p>
    <ul>
      <li>
        If buyers win — a legal <b>maximum</b> price: a <T id="price-ceiling" />. The price can't rise <i>above</i> it.
      </li>
      <li>
        If sellers win — a legal <b>minimum</b> price: a <T id="price-floor" />. The price can't fall <i>below</i> it.
      </li>
    </ul>
    <div className="not-prose my-7 grid gap-6 sm:grid-cols-2">
      <div className="postit tape rotate-[0.6deg] bg-postit-pink p-4 pt-5">
        <div className="text-2xl" aria-hidden>
          <Sticker name="up" /><Sticker name="no" />
        </div>
        <div className="mt-1 font-display font-bold">Ceiling</div>
        <p className="mt-1 text-sm text-muted">Like a room's ceiling: the price can't rise above it. Meant to “protect” buyers.</p>
      </div>
      <div className="postit tape -rotate-[0.6deg] bg-postit-blue p-4 pt-5">
        <div className="text-2xl" aria-hidden>
          <Sticker name="down" /><Sticker name="no" />
        </div>
        <div className="mt-1 font-display font-bold">Floor</div>
        <p className="mt-1 text-sm text-muted">Like a room's floor: the price can't fall below it. Meant to “protect” sellers.</p>
      </div>
    </div>
  </div>
);

const S61a = () => (
  <div className="prose-uz">
    <p>When the government imposes a price ceiling, two outcomes are possible:</p>
    <ul>
      <li>
        <b>A $4 ceiling</b> is <b>above</b> equilibrium ($3). The market still goes to $3, and the ceiling has no effect. Such a ceiling is <b>not binding</b>.
      </li>
      <li>
        <b>A $2 ceiling</b> is <b>below</b> equilibrium. Now it is a <T id="binding-constraint" />: the price wants to rise to $3, but the law holds it at $2. At that price{' '}
        <b>125</b> cones are demanded and only <b>75</b> supplied: a <T id="shortage" /> of <b>50 cones</b>.
      </li>
    </ul>
    <p>Drag the red line up and down on the graph or use the slider. Watch what changes when it crosses $3.</p>
    <SupplyDemandGraph config={iceCeiling} />
    <p>
      In a shortage, who gets the good? The price can't do the job, so other <T id="rationing" label="rationing mechanisms" /> appear: <b>long lines</b> (whoever comes
      early or sends someone to wait gets it) or the seller's <b>personal biases</b> — friends, relatives, members of their own group, or those who do favors.
    </p>
    <p>
      So a law meant to help buyers doesn't help all of them: some pay less (but waste time in line), and others get nothing. Lines are <b>inefficient</b> (time is
      wasted), and favoritism is both inefficient (the good doesn't go to whoever values it most) and <b>unfair</b>. In a free market rationing is simple and
      impersonal: you don't need to know the ice-cream seller — you just need to be willing to pay $3.
    </p>
    <Callout kind="exam">
      <p>
        <b>Binding or not binding?</b> A ceiling matters only if it is <b>below</b> equilibrium. If an exam says “a $50 ceiling,” first find the equilibrium price: if it is
        below $50, nothing changes (see Problem 3c).
      </p>
      <p>
        <b>How much is sold?</b> In a shortage the quantity sold = the <b>quantity supplied</b> (the “short side” of the market), not the quantity demanded.
      </p>
    </Callout>
    <BoxLink id="cs-gas-lines">Case Study: How to Create Long Lines at the Gas Pump</BoxLink>
    <BoxLink id="cs-rent-control">Case Study: Why Rent Control Causes Housing Shortages, Especially in the Long Run</BoxLink>
  </div>
);

const S61b = () => (
  <div className="prose-uz">
    <p>Now suppose the producers' lobby wins and the government imposes a <T id="price-floor" />. Again two cases:</p>
    <ul>
      <li>
        <b>A $2 floor</b> is <b>below</b> equilibrium: the market price is still $3, and the floor is <b>not binding</b>.
      </li>
      <li>
        <b>A $4 floor</b> is <b>above</b> equilibrium: now it binds. At $4 sellers offer <b>120</b> cones and buyers take only <b>80</b>: a <T id="surplus" /> (excess
        supply) of <b>40 cones</b>.
      </li>
    </ul>
    <SupplyDemandGraph config={iceFloor} />
    <p>
      Like the shortage under a ceiling, the surplus under a floor leads to undesirable rationing: buyers are few and sellers many, so the sellers who appeal to{' '}
      <b>buyers' personal biases</b> get to sell. In a free market the price itself rations: sellers may dislike the equilibrium price, but they can sell all they want.
    </p>
    <Callout kind="exam">
      To remember: a <b>ceiling below, a floor above</b> — only then do they “bite.” A ceiling → a <b>shortage</b>, a floor → a <b>surplus</b>. Many students say it the
      other way round.
    </Callout>
    <BoxLink id="cs-minimum-wage">Case Study: Controversies over the Minimum Wage</BoxLink>
    <BoxLink id="news-15">In the News: Should the Minimum Wage Be $15 an Hour?</BoxLink>
  </div>
);

const S61c = () => (
  <div className="prose-uz">
    <p>
      <b>Why do economists usually oppose price controls?</b> A Chapter 1 principle: <i>markets are usually a good way to organize economic activity</i>. A price is
      not a random number — it is the result of millions of decisions by firms and consumers. Its job is to balance supply and demand and so allocate resources.
      When the government sets the price, these signals get blurred.
    </p>
    <p>
      On the other hand, another principle: <i>governments can sometimes improve market outcomes</i>. Price controls are often introduced for <b>fairness</b> — to help
      the poor: rent control aims to make housing affordable, the minimum wage to lift people out of poverty.
    </p>
    <p>
      The trouble is that price controls can hurt the very people they are meant to help: rent control makes housing worse and harder to find; the minimum wage
      raises some people's incomes but leaves others unemployed.
    </p>
    <p>
      There are <b>alternatives</b>: the government can pay part of poor families' rent (a <T id="subsidy" />) or give them cash — which doesn't reduce the supply of
      housing or create a shortage. A wage subsidy improves the lives of low-wage workers without discouraging firms from hiring them; the U.S. example is the{' '}
      <T id="earned-income-tax-credit" />.
    </p>
    <p>
      But these alternatives aren't perfect either: applying can be hard for the poor, and subsidies cost the government money — which means <b>taxes</b>. The next
      section shows that taxes have costs of their own.
    </p>
    <Callout kind="uz">
      For example, if instead of capping the price of bread by law, low-income families got direct cash help, bakeries wouldn't bake less bread, no lines would
      form — and the help would go exactly to those in need.
    </Callout>
  </div>
);

const S62 = () => (
  <div className="prose-uz">
    <p>Governments raise taxes to pay for roads, schools, and defense. How do taxes affect prices and quantities?</p>
    <p>
      Imagine a town that wants to hold an annual ice-cream celebration (a parade, fireworks, speeches) and plans to pay for it with a <b>$0.50 tax on every cone
      sold</b>. The lobbies spring into action: “Buyers are struggling — make sellers pay!” and “Sellers are barely surviving — make buyers pay!” The mayor proposes a
      compromise: <b>buyers pay half and sellers pay half</b>.
    </p>
    <p>
      The key question: who <b>really</b> bears the burden of a tax? This is the question of <T id="tax-incidence" />. The answer surprises many people: the mayor
      can't settle it by law.
    </p>
  </div>
);

const S62a = () => (
  <div className="prose-uz">
    <p>First suppose the tax is levied on <b>sellers</b>: $0.50 to the government for every cone sold. We analyze it with the three steps of Chapter 4.</p>
    <ol>
      <li>
        <b>Which curve shifts?</b> Buyers aren't taxed — demand stays put. For sellers, the business is less profitable at any price — <b>supply</b> shifts.
      </li>
      <li>
        <b>In which direction, and by how much?</b> Whatever the market price, sellers keep $0.50 less (at $2.00, they keep $1.50). To supply the same quantity as before,
        the market price must be $0.50 higher. So supply shifts <b>up by exactly $0.50</b> (to the left): S₁ → S₂.
      </li>
      <li>
        <b>The new equilibrium:</b> the price goes <b>$3.00 → $3.30</b> and the quantity <b>100 → 90</b>.
      </li>
    </ol>
    <SupplyDemandGraph config={iceTaxSellers} />
    <p>
      Although sellers send the tax to the government, the burden is <b>shared</b>: buyers pay $0.30 more, and sellers receive $3.30, hand $0.50 to the government, and
      keep <b>$2.80</b> — $0.20 less than before. Two lessons:
    </p>
    <ul>
      <li>
        <b>Taxes discourage market activity</b>: less is sold at the new equilibrium.
      </li>
      <li>
        <b>Buyers and sellers share the burden</b>: one side pays more, the other receives less.
      </li>
    </ul>
    <p className="text-sm text-muted">
      The purple rectangle on the graph is the tax revenue (<M tex="T \times Q" />). Press “Surplus areas” to also see consumer and producer surplus and the{' '}
      <T id="deadweight-loss" label="deadweight loss" /> (Chapter 8).
    </p>
  </div>
);

const S62b = () => (
  <div className="prose-uz">
    <p>Now suppose the same $0.50 is paid by <b>buyers</b>.</p>
    <ol>
      <li>
        <b>Which curve?</b> Nothing changed for sellers — supply stays put. Buyers pay the tax on top of the price — <b>demand</b> shifts.
      </li>
      <li>
        <b>By how much?</b> For a buyer the real price = the market price + $0.50 (a $2.00 sticker really costs $2.50). To buy the same quantity as before, the market
        price must be $0.50 lower: demand shifts <b>down by exactly $0.50</b> (D₁ → D₂).
      </li>
      <li>
        <b>The new equilibrium:</b> the market price goes <b>$3.00 → $2.80</b> (what sellers receive), buyers pay <b>$3.30</b> in total, and the quantity goes{' '}
        <b>100 → 90</b>.
      </li>
    </ol>
    <p>On the graph below, switch the “Who pays the tax by law?” button.</p>
    <SupplyDemandGraph config={iceTaxBuyers} />
    <p>
      <b>The surprising conclusion: a tax on sellers and a tax on buyers have the same effect.</b> Either way the tax places a <T id="tax-wedge" /> between the price
      buyers pay and the price sellers receive:
    </p>
    <M tex="P_B - P_S = T" display />
    <p>
      The only difference is who carries the money to the government. Imagine the government puts a bowl on every store counter. If the tax is on sellers, the
      seller drops $0.50 in the bowl after each sale; if on buyers, the buyer does. Whether the money goes straight from the buyer's pocket into the bowl, or first
      into the seller's hand and then the bowl, doesn't matter. Once the market reaches its new equilibrium, the burden is shared the same way.
    </p>
    <Callout kind="exam">
      <p>
        A tax on sellers → supply shifts <b>up</b> (left) by T. A tax on buyers → demand shifts <b>down</b> (left) by T. Either way: <M tex="P_B" /> ↑, <M tex="P_S" /> ↓,{' '}
        <M tex="Q" /> ↓ — <b>exactly the same numbers</b>.
      </p>
      <p>“A tax on buyers shifts demand up” — wrong! Down.</p>
    </Callout>
    <BoxLink id="cs-payroll-tax">Case Study: Can Congress Distribute the Burden of a Payroll Tax?</BoxLink>
  </div>
);

const S62c = () => (
  <div className="prose-uz">
    <p>
      In what proportions is the burden divided? Rarely equally. It all depends on the relative <T id="elasticity" label="elasticities" /> of supply and demand (Figure 9).
      The graph shows only the wedge — which curve shifts doesn't matter for the burden.
    </p>
    <ul>
      <li>
        <b>(a) Very elastic supply, relatively inelastic demand.</b> Sellers are price-sensitive (flat supply), buyers less so (steep demand). The price sellers receive
        barely falls, while the price buyers pay rises a lot → most of the burden falls on <b>buyers</b>.
      </li>
      <li>
        <b>(b) Inelastic supply, very elastic demand.</b> The reverse: the buyers' price rises a little, the sellers' price falls a lot → the burden is mostly on{' '}
        <b>sellers</b>.
      </li>
    </ul>
    <p>Open cases (a) and (b) with the buttons, then rotate the curves yourself with the sliders:</p>
    <SupplyDemandGraph config={incidence} />
    <p>
      <b>The general rule: a tax burden falls more heavily on the side of the market that is less elastic.</b> Why? Elasticity measures the willingness to leave the
      market when conditions get worse. A small elasticity of demand means buyers have no good alternatives to the good; a small elasticity of supply means sellers
      have no good alternatives to producing it. When a tax arrives, the side with fewer alternatives can't walk away and bears more of the burden.
    </p>
    <p>The precise form of the rule the book states in words (for small taxes):</p>
    <M tex="\frac{\text{Buyers' share}}{\text{Sellers' share}} = \frac{E_s}{E_d}" display />
    <p>
      The same logic applies to the payroll tax: economists have found that <b>labor supply is less elastic than labor demand</b>, so most of the burden falls on{' '}
      <b>workers</b>, not firms — far from the 50/50 lawmakers intended.
    </p>
    <Callout kind="exam">
      The answer to “Who bears the burden of the tax?” is <b>never</b> “whoever it is levied on.” Always compare elasticities: <b>the less elastic side bears more</b>.
    </Callout>
    <BoxLink id="cs-luxury-tax">Case Study: Who Pays the Luxury Tax?</BoxLink>
  </div>
);

const S63 = () => (
  <div className="prose-uz">
    <p>
      The economy is governed by two kinds of laws: the <b>laws of supply and demand</b> and the <b>laws that governments enact</b>. This chapter showed how they
      interact: a price ceiling creates a shortage, a floor a surplus, and the market splits a tax whatever the law says about who pays it.
    </p>
    <p>
      Later chapters look at taxes more closely (Chapter 8 — the costs of taxation, deadweight loss) and at other policies. But the main lesson stays the same:{' '}
      <b>supply and demand are the first and most useful tools for analyzing government policy.</b>
    </p>
    <p>Test yourself: on the graph below, switch among the four modes (free market, ceiling, floor, tax) and compare a “movement along a curve” with a “shift.”</p>
    <SupplyDemandGraph config={iceMarket} />
  </div>
);

function GasLines() {
  return (
    <div className="prose-uz">
      <p>
        As Chapter 5 showed, in 1973 OPEC cut crude-oil production and raised its price. Gasoline is made from oil, so the <b>supply of gasoline fell</b>. Long lines at
        gas stations became commonplace — drivers waited for hours to buy a few gallons.
      </p>
      <p>
        Many people blamed OPEC. Of course, without OPEC's cut there would have been no shortage. But economists found another culprit: <b>the U.S. government's
        ceiling on the price of gasoline</b>.
      </p>
      <ul>
        <li>
          <b>(a) Before OPEC:</b> the equilibrium price P₁ was below the ceiling — the ceiling had no effect.
        </li>
        <li>
          <b>(b) After OPEC:</b> supply shifted left from S₁ to S₂. In a free market the price would have risen to P₂ with no shortage. The ceiling held the price down:
          sellers wanted <M tex="Q_S" />, buyers <M tex="Q_D" />, and the gap <M tex="Q_D - Q_S" /> was the shortage.
        </li>
      </ul>
      <SupplyDemandGraph config={gasLines} />
      <p>
        Eventually the laws regulating gasoline prices were repealed: lawmakers realized they were partly to blame for the hours Americans lost in line. Today, when
        the price of crude oil changes, the price of gasoline adjusts freely.
      </p>
      <Callout kind="uz">
        Remember the long lines that sometimes form at methane filling stations in winter. An economist's first question: can the price adjust freely? If the price is
        regulated and supply falls (or demand rises) in the cold, exactly the panel (b) situation occurs — a shortage and lines.
      </Callout>
    </div>
  );
}

function RentControl() {
  return (
    <div className="prose-uz">
      <p>
        In many cities the local government places a ceiling on the rents landlords may charge — <T id="rent-control" />. The aim is to make housing more affordable for
        the poor. But economists criticize it as a highly inefficient way to help them; one economist even called it “the best way to destroy a city, other than
        bombing.”
      </p>
      <p>
        The damage isn't obvious at first, because it shows up over years. <b>In the short run</b> landlords have a fixed number of apartments and can't add more
        quickly, and tenants don't change homes quickly either. So short-run supply and demand are <b>inelastic</b> — the shortage is small and rents fall (tenants are
        happy).
      </p>
      <p>
        <b>In the long run</b> the picture is different: landlords stop building new apartments and maintaining old ones, while low rents encourage people to find their
        own apartments (rather than live with roommates or parents) and to move to the city. Supply and demand are <b>more elastic</b> — the shortage is large.
      </p>
      <SupplyDemandGraph config={rentControl} />
      <p>
        In rent-controlled cities landlords ration apartments in various ways: long waiting lists, a preference for tenants without children, racial discrimination,
        under-the-table payments (such bribes bring the total price closer to equilibrium).
      </p>
      <p>
        <b>People respond to incentives</b>: in a free market a landlord who keeps a building clean and safe can charge a higher rent. When rent control creates lines and
        waiting lists, that incentive disappears — people are lining up anyway. As a result tenants pay less, but the city has <b>fewer and worse</b> homes. Governments
        respond with new rules (bans on discrimination, minimum housing standards), but these are hard and costly to enforce. When rents are free, such rules are
        less needed — competition does the regulating.
      </p>
      <div className="not-prose card mt-4 p-4">
        <div className="kicker">Ask the Experts · Rent Control (IGM, 2012)</div>
        <p className="mt-2 text-[15px] italic">
          “Local ordinances that limit rent increases for some rental housing units, such as in New York and San Francisco, have had a positive impact over the past three
          decades on the amount and quality of broadly affordable rental housing in cities that have used them.”
        </p>
        <PollBar agree={1} uncertain={4} disagree={95} />
        <p className="mt-2 text-sm text-muted">Almost all economists (95%) disagree — a rare degree of consensus.</p>
      </div>
    </div>
  );
}

function MinimumWageBox() {
  return (
    <div className="prose-uz">
      <p>
        The <T id="minimum-wage" /> is an important and controversial price floor: the lowest price an employer may pay for labor. Congress introduced it in 1938 (the Fair
        Labor Standards Act). In 2021 the federal minimum was <b>$7.25</b> an hour; many states and cities set higher ones (<b>$16.69</b> for large employers in Seattle).
        In France average income is about 30% lower than in the U.S., but the minimum wage is more than 50% higher.
      </p>
      <p>
        In the labor market workers are the <b>supply</b> side and firms the <b>demand</b> side. If the minimum is above equilibrium, the quantity of labor supplied exceeds
        the quantity demanded: a <b>surplus of labor — unemployment</b>. Those who find jobs earn more; those who can't find jobs earn nothing.
      </p>
      <SupplyDemandGraph config={minimumWage} />
      <p>
        An important nuance: the economy has not one but many labor markets. Skilled workers' equilibrium wages are far above the minimum — the floor doesn't bind for
        them. The biggest effect is in the <b>teen</b> labor market: teenagers are the least skilled and experienced and are often willing to work for less in exchange for
        training (there are even unpaid internships — if the minimum applied to them, such opportunities might disappear).
      </p>
      <ul>
        <li>
          Studies: a <b>10% higher minimum wage cuts teen employment by 1–3%</b>. Many studies measure the short run; in the long run the effect may be larger, because
          firms have time to reorganize production.
        </li>
        <li>
          The minimum also changes <b>supply</b>: more teenagers look for work; some students drop out of school to take jobs, displacing earlier dropouts, who become
          unemployed.
        </li>
      </ul>
      <p>
        <b>Supporters:</b> it is a humane way to raise the incomes of the working poor. In 2021 two adults working full time at $7.25 earned only <b>$30,160</b> a year —
        about 40% of the U.S. median family income. Some argue that labor markets don't fit the competitive model; others accept the negative effects but consider
        them small.
      </p>
      <p>
        <b>Opponents:</b> it is not the best tool against poverty — it causes unemployment, encourages dropping out, denies some workers on-the-job training, and is{' '}
        <b>poorly targeted</b>: fewer than a third of minimum-wage earners are in poor families; many are middle-class teenagers.
      </p>
      <p>
        In 2021 President Biden proposed raising the minimum to <b>$15</b> by 2025. The Congressional Budget Office (CBO) estimated: <b>17 million</b> people would get raises,{' '}
        <b>900,000</b> would be lifted out of poverty, and <b>1.4 million</b> would lose their jobs.
      </p>
      <div className="not-prose card mt-4 p-4">
        <div className="kicker">Ask the Experts · The Minimum Wage (IGM, 2021)</div>
        <p className="mt-2 text-[15px] italic">“A federal minimum wage of $15 per hour would lower employment for low-wage workers in many states.”</p>
        <PollBar agree={50} uncertain={34} disagree={16} />
      </div>
      <Callout kind="uz">
        Uzbekistan also sets a minimum wage. Think about whom it binds: a programmer in the capital, or a young unskilled worker in a region? The answer: the groups
        whose equilibrium wage is below the minimum.
      </Callout>
    </div>
  );
}

function News15() {
  return (
    <div className="prose-uz">
      <Source>David Neumark, “Raising the Minimum Wage Will Definitely Cost Jobs,” The Wall Street Journal, 2021 — summarized.</Source>
      <p>
        After the CBO estimated that a $15 minimum would cost 1.4 million jobs, some commentators claimed “a new consensus among economists: raising the minimum wage has
        raised pay without significant job losses.” Neumark disagrees.
      </p>
      <ul>
        <li>He and Peter Shirley asked the authors of nearly every U.S. study from the past 30 years for their best estimate of the employment <b>elasticity</b>.</li>
        <li>
          The result: <b>79%</b> of studies found the minimum wage <b>reduced</b> employment (46% statistically significant); only 21% found a small positive effect (4%
          significant).
        </li>
        <li>
          The average elasticity ≈ <b>−0.15</b>: a 10% higher minimum cuts low-skilled employment by 1.5%. $7.25 → $15 is a 107% increase, implying roughly a{' '}
          <b>16%</b> fall in employment (consistent with the CBO).
        </li>
        <li>The more precisely studies focus on workers directly affected by the minimum, the stronger the negative effect (−0.24 for those with a high-school education or less).</li>
        <li>
          Much of the income gain goes to <b>higher-income</b> families. The <b>EITC</b>, by contrast, is far better targeted at poor families, reduces poverty, and creates
          jobs.
        </li>
      </ul>
      <Callout kind="tip" title="Questions to discuss">
        <ol>
          <li>If you were an economist designing a policy to help low-wage workers — the minimum wage or the EITC? Why?</li>
          <li>Now you are a politician running for office. Which is easier to campaign on? Why?</li>
        </ol>
      </Callout>
    </div>
  );
}

function PayrollTax() {
  return (
    <div className="prose-uz">
      <p>
        If you have ever been paid, you have seen taxes deducted from your pay. One U.S. tax is <b>FICA</b> (for Social Security and Medicare). It is a{' '}
        <T id="payroll-tax" />: a tax on the wages firms pay workers. In 2021 it totaled <b>15.3%</b> for a typical worker.
      </p>
      <p>
        Congress tried to split the burden: by law <b>half is paid by the firm and half by the worker</b> (the part deducted from your pay is the worker's share). But
        tax-incidence analysis shows that the law can't determine the real burden. Here the good is labor and the price is the wage. The tax drives a wedge between the{' '}
        <b>wage firms pay</b> and the <b>wage workers receive</b> (take-home pay).
      </p>
      <SupplyDemandGraph config={payrollTax} />
      <p>
        On the graph, switch whether “Firms” or “Workers” pay the tax — the result doesn't change. Elasticities decide the burden: because labor supply is less elastic
        than labor demand, most of the burden falls on <b>workers</b>. Lawmakers can decide whose pocket the tax comes out of, but they can't legislate its true burden.
      </p>
      <Callout kind="uz">
        In Uzbekistan the social tax is paid by the employer by law. By this chapter's logic, who really bears it? If workers keep working even when wages fall
        (inelastic supply), most of the burden passes to workers in the form of lower pay.
      </Callout>
    </div>
  );
}

function LuxuryTax() {
  return (
    <div className="prose-uz">
      <p>
        In 1990 Congress adopted a <T id="luxury-tax" /> on yachts, private planes, furs, jewelry, and expensive cars. The goal was to raise revenue from those most able to
        pay — the rich.
      </p>
      <p>
        The market decided otherwise. The demand for yachts is very <b>elastic</b>: a billionaire can easily do without a yacht — he can buy an island, take a luxurious
        trip, or leave more to his heirs. The supply of yachts, at least in the short run, is <b>inelastic</b>: shipyards can't easily be converted to other uses, and
        workers don't change jobs quickly.
      </p>
      <SupplyDemandGraph config={luxuryTax} />
      <p>
        The prediction is clear: with elastic demand and inelastic supply, the burden falls mostly on <b>the firms and workers who build yachts</b> — they get much less for
        their boats. And the workers aren't rich. So the luxury tax fell more on middle-class workers than on wealthy buyers. The mistake soon became apparent, and in
        1993 Congress repealed most of the tax.
      </p>
    </div>
  );
}

const P10Widget = () => <SupplyDemandGraph config={problem10} />;
const MinWageWidget = () => <SupplyDemandGraph config={{ ...minimumWage, slopeControls: true, title: 'Problem 8 — experimenting with elasticity' }} />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    'Tell a **price ceiling** from a **price floor** and determine when each is **binding**',
    'Show with graphs and numbers that a binding ceiling creates a **shortage** and a binding floor a **surplus**',
    'Explain rent control, gasoline lines, and the minimum wage (short run and long run)',
    'Show how the curves shift when a tax is levied on sellers or on buyers, and the **tax wedge**',
    'Compute **tax incidence** and link it to elasticities',
    'Evaluate alternatives to price controls (subsidies, the EITC)',
  ],
  sections: [
    sec('s-6-1', '6-1', 'The Surprising Effects of Price Controls', S61, checks['s-6-1']),
    sec('s-6-1a', '6-1a', 'How Price Ceilings Affect Market Outcomes', S61a, checks['s-6-1a']),
    sec('s-6-1b', '6-1b', 'How Price Floors Affect Market Outcomes', S61b, checks['s-6-1b']),
    sec('s-6-1c', '6-1c', 'Evaluating Price Controls', S61c, checks['s-6-1c']),
    sec('s-6-2', '6-2', 'The Surprising Study of Tax Incidence', S62, checks['s-6-2']),
    sec('s-6-2a', '6-2a', 'How Taxes on Sellers Affect Market Outcomes', S62a, checks['s-6-2a']),
    sec('s-6-2b', '6-2b', 'How Taxes on Buyers Affect Market Outcomes', S62b, checks['s-6-2b']),
    sec('s-6-2c', '6-2c', 'Elasticity and Tax Incidence', S62c, checks['s-6-2c']),
    sec('s-6-3', '6-3', 'Conclusion', S63),
  ],
  examTraps: [
    { title: 'Binding vs not binding', body: 'A ceiling binds only if \\(P_{\\max} < P^*\\), a floor only if \\(P_{\\min} > P^*\\). Always find the equilibrium first (Problems 3c, 10c).' },
    { title: 'Shortage or surplus?', body: 'A binding **ceiling → shortage** (\\(Q^D > Q^S\\)), a binding **floor → surplus** (\\(Q^S > Q^D\\)).' },
    { title: 'How much is sold?', body: 'Under a price control the quantity sold is the **short side**: \\(Q^S\\) under a ceiling, \\(Q^D\\) under a floor.' },
    { title: 'Which way does a tax shift a curve?', body: 'A tax on sellers — supply **up by T**; a tax on buyers — demand **down by T**. The outcome is the same.' },
    { title: 'Who bears the tax?', body: 'Not the law but **elasticity**: the burden falls on the **less elastic** side. Vertical supply (Fenway) → sellers bear it all; vertical demand → buyers bear it all.' },
    { title: 'Rent control: short and long run', body: 'In the long run elasticities are large → the shortage is **large**. This is QuickQuiz 3 and a frequent exam question.' },
    { title: 'The minimum wage and total pay', body: 'Total wages \\(= W \\times Q^D\\): they fall if demand is **elastic** and rise if it is inelastic. Employment depends only on the elasticity of demand; unemployment on both.' },
  ],
  mistakes: [
    { wrong: '“A price ceiling always lowers the price.”', right: 'Only if it is below equilibrium. Above it, it is not binding and nothing changes.' },
    { wrong: '“Shortage = \\(Q^S - Q^D\\).”', right: 'Shortage = \\(Q^D - Q^S\\) (demand is larger). Surplus = \\(Q^S - Q^D\\).' },
    { wrong: "“If sellers pay the tax, buyers aren't affected.”", right: 'The market price rises — the burden is shared. With ice cream, buyers bear $0.30 and sellers $0.20.' },
    { wrong: '“A tax on buyers shifts demand up.”', right: 'Down! At any quantity, buyers are willing to pay the seller T less.' },
    { wrong: '“Tax revenue = T × the old quantity.”', right: 'T × the **new** (smaller) quantity. Problem 10: 30 × 180, not 30 × 200.' },
    { wrong: '“A price floor creates a shortage because the price is high.”', right: 'A high price means many sellers and few buyers → a **surplus** (unemployment in the labor market).' },
    { wrong: '“The rich pay the yacht tax because they are rich.”', right: 'The burden depends on elasticity: demand is elastic and supply inelastic → yacht builders pay.' },
  ],
  boxes: [
    box('cs-gas-lines', 'Case Study', 'How to Create Long Lines at the Gas Pump', GasLines),
    box('cs-rent-control', 'Case Study', 'Why Rent Control Causes Housing Shortages, Especially in the Long Run', RentControl),
    box('cs-minimum-wage', 'Case Study', 'Controversies over the Minimum Wage', MinimumWageBox),
    box('news-15', 'In the News', 'Should the Minimum Wage Be $15 an Hour?', News15),
    box('cs-payroll-tax', 'Case Study', 'Can Congress Distribute the Burden of a Payroll Tax?', PayrollTax),
    box('cs-luxury-tax', 'Case Study', 'Who Pays the Luxury Tax?', LuxuryTax),
  ],
  summary: [
    'A **price ceiling** is a legal maximum on the price of a good or service (rent control, for example). If the ceiling is below the equilibrium price, it is **binding**: the quantity demanded exceeds the quantity supplied, and because of the resulting shortage, sellers must somehow ration the good among buyers.',
    'A **price floor** is a legal minimum on the price (the minimum wage, for example). If the floor is above the equilibrium price, it is binding: the quantity supplied exceeds the quantity demanded, and because of the resulting surplus, buyers must somehow choose among sellers.',
    'When the government levies a tax on a good, the equilibrium quantity of the good **falls** — a tax shrinks the market.',
    'A tax places a **wedge** between the price buyers pay and the price sellers receive: buyers pay more and sellers receive less — they share the burden. **Tax incidence** does not depend on whether the tax is levied on buyers or sellers.',
    'Tax incidence depends on the **price elasticities** of supply and demand: most of the burden falls on the **less elastic** side of the market, because that side cannot respond as easily to the tax by changing the quantity bought or sold.',
  ],
  widgets: { p10: P10Widget, minwage: MinWageWidget },
};
