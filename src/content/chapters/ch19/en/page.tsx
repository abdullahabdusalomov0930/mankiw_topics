import { CobbDouglasLab, LaborMarketLab, ProductivityWages, VMPLab } from '../../../../components/graphs/LaborWidgets';
import { Callout } from '../../../../components/ui/Kit';
import { AskExperts, BookTable, BoxLink } from '../../../../components/ui/Lesson';
import { Math as M } from '../../../../components/ui/Math';
import { T } from '../../../../components/ui/Term';
import { box, sec } from '../../../enPage';
import type { ChapterPageContent } from '../../../types';
import { checks } from '../quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        After you finish school, your income will depend mainly on your job: a computer programmer earns more than a gas-station attendant. But no law or moral principle requires this. So
        what determines it?
      </p>
      <p>
        In 2021 U.S. national income was ~$20 trillion. Workers received about two-thirds of it (wages and benefits); the rest went to landowners and owners of <T id="capital" /> (rent,
        profit, interest). The answer is again supply and demand, this time in the markets for the <T id="factors-of-production" />. This chapter lays the foundation for Chapters 20 and 21
        (earnings differences, inequality). It matters for Uzbekistan too: the wages of the hundreds of thousands of our citizens working abroad are set by exactly this logic.
      </p>
    </div>
  );
}

const S191 = () => (
  <div className="prose-uz">
    <p>
      The key feature of factor markets: the demand for a factor is a <T id="derived-demand" /> — it derives from a firm's decision to supply a good in another market. Figure 1: the
      price of apples comes from the demand for and supply of apples; apple pickers' wages from the demand for and supply of pickers.
    </p>
  </div>
);

const S191a = () => (
  <div className="prose-uz">
    <p>
      An apple producer decides each week how many pickers to hire. Two assumptions: (1) the firm is <b>competitive</b> both in the apple market (as a seller) and in the pickers' market
      (as a buyer) — it takes the price and wage as given; (2) the firm <b>maximizes profit</b>.
    </p>
  </div>
);

const S191b = () => (
  <div className="prose-uz">
    <p>
      Table 1: 1 worker — 100 bushels, 2 — 180, 3 — 240, 4 — 280, 5 — 300 (the <T id="production-function" />). The <T id="marginal-product-of-labor" />: 100, 80, 60, 40, 20 —{' '}
      <T id="diminishing-marginal-product" />: the first pickers take the low apples, later ones climb ladders to reach higher ones.
    </p>
    <BookTable
      caption="Table 1 — How the Competitive Firm Decides How Much Labor to Hire (P = $10, W = $500)"
      head={['Labor L', 'Output Q', 'MPL', 'VMPL = P × MPL', 'Wage W', 'ΔProfit = VMPL − W']}
      rows={[
        ['0', '0', '', '', '', ''],
        ['1', '100', '100', '$1,000', '$500', '$500'],
        ['2', '180', '80', '800', '500', '300'],
        ['3', '240', '60', '600', '500', '100'],
        ['4', '280', '40', '400', '500', '−100'],
        ['5', '300', '20', '200', '500', '−300'],
      ]}
    />
  </div>
);

const S191c = () => (
  <div className="prose-uz">
    <p>
      The firm cares about money, not apples: the <T id="value-of-marginal-product" /> <M tex="VMPL = P \times MPL" />. At $10 an apple bushel, the 2nd worker brings in $800. With a $500
      wage: the 1st worker +$500, the 2nd +$300, the 3rd +$100, the 4th −$100 → <b>3 workers</b>. The rule: hire until <b>VMPL = W</b>. So <b>the VMPL curve is the competitive firm's
      labor-demand curve</b>.
    </p>
    <VMPLab />
    <BoxLink id="fyi-two-sides">FYI: Input Demand and Output Supply: Two Sides of the Same Coin</BoxLink>
  </div>
);

const S191d = () => (
  <div className="prose-uz">
    <p>The labor-demand curve reflects VMP, so it shifts with the following (<T id="labor-demand-shifters" />):</p>
    <ul>
      <li><b>The output price</b>: if apples get more expensive — VMP ↑ — demand shifts right.</li>
      <li>
        <b>Technology</b>: from 1960 to 2020 output per worker-hour rose 236%. Technology is usually <b>labor-augmenting</b> (a carpenter with a nail gun) — demand shifts right;{' '}
        <b>labor-saving</b> change, like a cheap industrial robot, pushes demand left. Historically most change has been labor-augmenting: even though real wages rose 201%, firms roughly
        doubled employment.
      </li>
      <li><b>The supply of other factors</b>: if ladders become scarce, pickers' MP and the demand for them fall.</li>
    </ul>
  </div>
);

const S192a = () => (
  <div className="prose-uz">
    <p>
      Behind labor supply is the <T id="work-leisure-tradeoff" />. If you earn $20 an hour, the opportunity cost of an hour of leisure is $20; if your wage rises to $25, leisure gets
      more expensive. Upward-sloping supply: when the wage rises you work more. But being richer, you might also choose more leisure — backward-bending supply. Chapter 22 covers the{' '}
      <b>income effect</b> and the <b>substitution effect</b>; for now we assume substitution dominates.
    </p>
  </div>
);

const S192b = () => (
  <div className="prose-uz">
    <p><T id="labor-supply-shifters" />:</p>
    <ul>
      <li><b>Tastes</b>: women's labor-force participation 34% (1950) → 56% (2020) — families got smaller and more mothers chose to work.</li>
      <li><b>Alternative opportunities</b>: if pear pickers' pay rises, some apple pickers switch — the supply of apple pickers falls.</li>
      <li>
        <b>Immigration</b>: workers who come for the fall harvest raise supply in the north and lower it at orange plants in the south; when immigrants come to the U.S., supply rises in the
        U.S. and falls in their home countries. Much of the immigration debate is about its effect on equilibrium wages.
      </li>
    </ul>
  </div>
);

const S193 = () => (
  <div className="prose-uz">
    <p>
      In a competitive labor market, two facts: the wage balances supply and demand, and the wage equals VMPL. They don't conflict: in equilibrium every firm has hired until VMPL = W
      (Figure 4). So any event that changes supply or demand changes the equilibrium wage and VMP <b>by the same amount</b>.
    </p>
  </div>
);

const S193a = () => (
  <div className="prose-uz">
    <p>
      If immigration increases the number of apple pickers (Figure 5): supply S₁ → S₂, the wage falls W₁ → W₂, employment rises, more workers per orchard → VMP falls. The Israeli example
      studied by Joshua Angrist: in 1988 political unrest restricted the flow of Palestinian workers — the number working in Israel fell by half, and the wages of those remaining rose
      ~50%.
    </p>
    <p>
      The economy isn't one labor market but many: if immigrants become apple pickers, pickers' wages fall; if they become doctors and spend part of their income on apples, doctors' wages
      fall and apple pickers' wages rise (<b>general equilibrium effects</b>).
    </p>
    <LaborMarketLab />
    <AskExperts title="Immigration (highly educated)" source="IGM, February 12, 2013" statement="The average U.S. citizen would be better off if a larger number of highly educated foreign workers were legally allowed to immigrate to the U.S. each year." agree={95} uncertain={5} disagree={0} />
    <AskExperts title="Immigration (low-skilled)" source="IGM, December 10, 2013" statement="The average U.S. citizen would be better off if a larger number of low-skilled foreign workers were legally allowed to enter the U.S. each year." agree={63} uncertain={27} disagree={10} />
    <AskExperts title="Immigration (distribution)" source="IGM, December 10, 2013" statement="Unless they were compensated by others, many low-skilled American workers would be substantially worse off if a larger number of low-skilled foreign workers were legally allowed to enter the U.S. each year." agree={60} uncertain={29} disagree={11} />
    <BoxLink id="cs-immigration">Case Study: The Immigration Debate</BoxLink>
  </div>
);

const S193b = () => (
  <div className="prose-uz">
    <p>
      Apples become popular and their price rises (Figure 6): MPL doesn't change, but VMP rises → demand D₁ → D₂, and wages and employment rise. The prosperity of an industry's firms and
      of its workers are linked: when apples get more expensive, both producers' profits and pickers' wages rise. Oil workers know this well.
    </p>
    <Callout kind="exam">Always: <b>W = VMP</b>. Supply shifts right → W ↓, L ↑. Demand shifts right → W ↑, L ↑. QQ 7: technology that raises MPL — <b>demand shifts right</b>.</Callout>
    <BoxLink id="cs-productivity-wages">Case Study: Productivity and Wages</BoxLink>
  </div>
);

const S194a = () => (
  <div className="prose-uz">
    <p>
      <T id="capital" /> is the equipment and structures produced in the past and used now (ladders, trucks, warehouses, even the apple trees). Two prices: the <b>purchase price</b>
      (owning it indefinitely) and the <b>rental price</b> (using it for a limited time). The wage is the rental price of labor; by the same logic the rental prices of land and capital
      come from supply and demand, and demand from VMP (Figure 8). For competitive firms each factor's rental price = VMP: labor, land, and capital each earn their marginal contribution.
      The purchase price depends on current and expected future VMP (the stream of rents).
    </p>
    <BoxLink id="fyi-capital-income">FYI: What Is Capital Income?</BoxLink>
  </div>
);

const S194b = () => (
  <div className="prose-uz">
    <p>
      Because of diminishing MP, a plentiful factor is cheap and a scarce one expensive. But factors are used together: when the supply of one factor changes, the earnings of <b>all</b>{' '}
      factors change. If a hurricane destroys ladders: the rental price of ladders rises, but pickers' MPL falls → labor demand and wages fall.
    </p>
    <CobbDouglasLab />
    <BoxLink id="cs-black-death">Case Study: The Economics of the Black Death</BoxLink>
  </div>
);

const S195 = () => (
  <div className="prose-uz">
    <p>
      This is the <T id="neoclassical-distribution" />: the payment to each factor depends on its supply and demand, and demand depends on marginal productivity; in equilibrium each factor
      earns the value of its marginal contribution. Most economists begin explaining how the U.S.'s $20 trillion of income is distributed with this theory.
    </p>
    <p>
      The question from the start of the chapter: why does a programmer earn more than a gas-station attendant? Because they produce a good the market values more: people pay a lot for a
      good video game and little for having their gas pumped and windshield washed. If people got bored with computers and drove more, prices and wages would change too.
    </p>
  </div>
);

function TwoSides() {
  return (
    <div className="prose-uz">
      <p>
        Chapter 15: a competitive firm sells where P = MC. Chapter 19: it hires where W = VMPL. Because the production function links inputs and outputs, these are two sides of one decision.
        If an extra worker costs $500 and adds 50 bushels, the MC of a bushel is $500/50 = $10: in general <M tex="MC = W / MPL" />.
      </p>
      <p>
        <M tex="P \times MPL = W \Rightarrow P = W/MPL = MC" />. Diminishing marginal product means rising marginal cost: as the orchard fills with workers, each extra worker adds less (MPL
        ↓) and each extra bushel gets more expensive (MC ↑).
      </p>
    </div>
  );
}

function Immigration() {
  return (
    <div className="prose-uz">
      <p>
        Comedian Pat Paulsen ran a mock presidential campaign every four years, saying all of America's problems came from the Native Americans' “lousy immigration policy.” The joke holds a
        deep truth: most Americans benefited from the policy that welcomed their ancestors. But immigration is controversial, partly because of its economic effects.
      </p>
      <ul>
        <li>Mirroring Chapter 9: immigration is an <b>import</b> of labor services. The “consumers” (hiring firms and their customers) gain, the “domestic producers” (competing native workers) lose; total surplus rises.</li>
        <li>George Borjas: the gain in total surplus is ~<b>0.25%</b> of U.S. national income; ~<b>2.5%</b> is redistributed from native workers who lose to those who gain (not counting the immigrants' own gains).</li>
        <li>A proposal: a special tax on immigrants or their employers, with the revenue used to cut native workers' taxes — sharing the gains more fairly.</li>
        <li>The debate isn't only economic — it also involves questions of culture and national identity.</li>
      </ul>
    </div>
  );
}

function ProductivityCase() {
  return (
    <div className="prose-uz">
      <p>
        A Chapter 1 principle: living standards depend on the ability to produce. In the labor market: the wage = VMPL, so productive workers earn a lot and less productive ones little.
        From 1960 to 2020 productivity grew ~2.0% a year and real wages ~1.9% — doubling every ~35 years.
      </p>
      <ProductivityWages />
    </div>
  );
}

function CapitalIncome() {
  return (
    <div className="prose-uz">
      <p>
        Labor income is simple — wages. Capital income is more complex: in the model we assumed households own capital and rent it to firms. In fact firms usually own capital themselves, and
        the income reaches households in several ways:
      </p>
      <ul>
        <li><b>Interest</b> — to households that lent to the firm (bondholders, bank depositors);</li>
        <li><b>Dividends</b> — to stockholders (a share of ownership);</li>
        <li><b>Retained earnings</b> — kept in the firm, increasing its assets and raising the value of its stock.</li>
      </ul>
      <p>Whatever the form, capital is paid according to its VMP.</p>
    </div>
  );
}

function BlackDeath() {
  return (
    <div className="prose-uz">
      <p>
        In 14th-century Europe the bubonic plague wiped out about a third of the population within a few years (the 2020–2021 COVID pandemic killed less than 1%). It was a grim natural
        experiment for the theory of factor markets.
      </p>
      <ul>
        <li>Fewer workers → labor's MP rises (diminishing MP in reverse) → <b>wages rise</b>.</li>
        <li>Land and labor are used together: fewer workers to work the land → land's MP falls → <b>rents fall</b>.</li>
      </ul>
      <p>History confirms it: wages roughly <b>doubled</b> and rents fell <b>50% or more</b> — prosperity for the surviving peasants, a fall in income for the landowning nobility.</p>
    </div>
  );
}

const Vmp = () => <VMPLab />;
const Market = () => <LaborMarketLab />;
const Cobb = () => <CobbDouglasLab />;
const Prod = () => <ProductivityWages />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    'Explain that the demand for a factor is a **derived demand** and that a competitive firm hires by the rule **VMP = price**',
    '**MPL**, diminishing marginal product, and the VMP curve as the demand for labor',
    'The factors that shift labor demand and supply; the trade-off between work and leisure',
    '**W = VMP** in equilibrium; immigration, price changes, productivity, and real wages',
    'The markets for land and capital, linkages among factors, and the **neoclassical theory of distribution**',
  ],
  sections: [
    sec('s-19-1', '19-1', 'The Demand for Labor', S191),
    sec('s-19-1a', '19-1a', 'The Competitive, Profit-Maximizing Firm', S191a, checks['s-19-1a']),
    sec('s-19-1b', '19-1b', 'The Production Function and the Marginal Product of Labor', S191b, checks['s-19-1b']),
    sec('s-19-1c', '19-1c', 'The Value of the Marginal Product and the Demand for Labor', S191c, checks['s-19-1c']),
    sec('s-19-1d', '19-1d', 'What Causes the Labor-Demand Curve to Shift?', S191d, checks['s-19-1d']),
    sec('s-19-2a', '19-2a', 'The Trade-Off between Work and Leisure', S192a, checks['s-19-2a']),
    sec('s-19-2b', '19-2b', 'What Causes the Labor-Supply Curve to Shift?', S192b, checks['s-19-2b']),
    sec('s-19-3', '19-3', 'Equilibrium in the Labor Market', S193),
    sec('s-19-3a', '19-3a', 'Shifts in Labor Supply', S193a, checks['s-19-3a']),
    sec('s-19-3b', '19-3b', 'Shifts in Labor Demand', S193b, checks['s-19-3b']),
    sec('s-19-4a', '19-4a', 'Equilibrium in the Markets for Land and Capital', S194a, checks['s-19-4a']),
    sec('s-19-4b', '19-4b', 'Linkages among the Factors of Production', S194b, checks['s-19-4b']),
    sec('s-19-5', '19-5', 'Conclusion', S195),
  ],
  examTraps: [
    { title: 'VMP = P × MP', body: 'Hiring: VMP = W. QQ 3: 20 × MPL = 10 → MPL = ½ (don’t divide the other way — 2).' },
    { title: 'Factor price = VMP', body: 'For capital too: 20 × MP = 30 → MP = 3/2 (QQ 9).' },
    { title: 'Linked factors', body: 'If capital falls: capital rent ↑, wages ↓ (QQ 10). If workers fall: wages ↑, land rent ↓ (the Black Death).' },
    { title: 'Income vs. substitution', body: 'Substitution > income → works more (QQ 5).' },
    { title: 'Demand or supply?', body: 'Technology, output price, other factors — **demand**; tastes, alternatives, immigration — **supply**.' },
  ],
  mistakes: [
    { wrong: '“A firm hires workers according to MP.”', right: 'According to **VMP** (in money terms): P × MP = W.' },
    { wrong: '“If the output price rises, MPL rises.”', right: 'MPL doesn’t change; **VMP** rises.' },
    { wrong: '“Immigration lowers all wages.”', right: 'It lowers them in competing markets; in others they may rise (general equilibrium).' },
    { wrong: '“Capital income is only dividends.”', right: 'Interest, dividends, and retained earnings — all are capital’s VMP.' },
  ],
  boxes: [
    box('fyi-two-sides', 'FYI', 'Input Demand and Output Supply: Two Sides of the Same Coin', TwoSides),
    box('cs-immigration', 'Case Study', 'The Immigration Debate', Immigration),
    box('cs-productivity-wages', 'Case Study', 'Productivity and Wages', ProductivityCase),
    box('fyi-capital-income', 'FYI', 'What Is Capital Income?', CapitalIncome),
    box('cs-black-death', 'Case Study', 'The Economics of the Black Death', BlackDeath),
  ],
  summary: [
    'The economy’s income is distributed in the markets for the factors of production. The three most important factors are **labor, land, and capital**.',
    'The demand for factors is a **derived demand** that comes from firms that use them to produce goods and services. Competitive, profit-maximizing firms hire each factor until its **VMP** equals its price.',
    'The supply of labor arises from people’s trade-off between **work and leisure**. An upward-sloping supply curve means people respond to a higher wage by working more and enjoying less leisure.',
    'In competitive factor markets the price of each factor adjusts to balance supply and demand. Because demand reflects VMP, in equilibrium each factor is paid according to its **marginal contribution**.',
    'Because factors are used together, each one’s MP depends on the quantities of all factors. When the supply of one factor changes, the equilibrium earnings of **all** factors change.',
  ],
  widgets: { vmp: Vmp, market: Market, cobb: Cobb, prod: Prod },
  gallery: [
    { title: 'VMP and factor demand (the orchard, robots)', Component: Vmp },
    { title: 'Labor-market shifts and Ectenia’s orchards', Component: Market },
    { title: 'Cobb–Douglas: a stable labor share', Component: Cobb },
    { title: 'Productivity and real wages (Figure 7)', Component: Prod },
  ],
};
