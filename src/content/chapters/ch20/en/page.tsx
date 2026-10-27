import { DiscriminationLab, GapsAndStatistics, SkillPremium, WageDeviations } from '../../../../components/graphs/EarningsWidgets';
import { Callout } from '../../../../components/ui/Kit';
import { AskExperts, BookTable, BoxLink } from '../../../../components/ui/Lesson';
import { T } from '../../../../components/ui/Term';
import { box, sec } from '../../../enPage';
import type { ChapterPageContent } from '../../../types';
import { checks } from '../quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        In 2020 in the U.S., fast-food cooks earned ~$24,000 a year, schoolteachers ~$67,000, family doctors ~$214,000, and the CEOs of the largest companies ~$12 million; Taylor Swift —
        $24 million. These differences explain why some people live in mansions and others in small apartments.
      </p>
      <p>
        Chapter 19: wages are set by supply and demand and in equilibrium equal the <T id="value-of-marginal-product" />. That's only the start. Now we look at what determines supply and
        demand for different kinds of labor, why wages sometimes deviate from equilibrium, and how <T id="discrimination" /> affects them.
      </p>
    </div>
  );
}

const S201 = () => (
  <div className="prose-uz">
    <p>First we look at how the characteristics of jobs and workers affect labor supply, labor demand, and equilibrium wages.</p>
  </div>
);

const S201a = () => (
  <div className="prose-uz">
    <p>
      The wage is only one factor in choosing a job. The more pleasant a job, the more people are willing to do it at a given wage — more supply, a lower equilibrium wage. Two summer jobs
      in a beach town: checking beach tickets and collecting garbage. At equal wages most would choose the beach — so the town must pay garbage collectors more. This is a{' '}
      <T id="compensating-differential" />:
    </p>
    <ul>
      <li>Roofers earn more than others with similar education — the smell of tar and the risk of accidents;</li>
      <li>Night-shift workers earn more — working at night and sleeping in the day;</li>
      <li>Professors earn less than lawyers and doctors — the intellectual satisfaction of teaching (teaching economics is so much fun it's surprising professors get paid at all!).</li>
    </ul>
  </div>
);

const S201b = () => (
  <div className="prose-uz">
    <p>
      Besides physical capital there is <T id="human-capital" /> — the accumulation of investments in people, the most important being education. In the U.S. college graduates earn almost
      twice as much as high-school graduates; in less developed countries (where skilled workers are scarce) the gap is even larger. Firms pay more because MP is higher; workers bear the
      cost of education because they expect a reward. The wage gap can also be seen as a compensating differential for the cost of acquiring human capital.
    </p>
    <BookTable
      caption="Table 1 — Average Annual Earnings by Educational Attainment (2019 dollars)"
      head={['', '1974', '2019']}
      rows={[
        ['**Men** — high school, no college', '$56,855', '$52,677'],
        ['Men — college graduates', '$80,973', '$97,554'],
        ['Percent extra for college grads', '142%', '185%'],
        ['**Women** — high school, no college', '$32,675', '$39,669'],
        ['Women — college graduates', '$44,200', '$70,657'],
        ['Percent extra for college grads', '135%', '178%'],
      ]}
    />
    <Callout kind="note">The book's table shows “142% → 185%” (a ratio), while the text says “42 percent → 85 percent” (the premium). They mean the same thing.</Callout>
    <SkillPremium />
    <AskExperts title="Inequality and Skills" source="IGM, January 24, 2012" statement="One of the leading reasons for rising U.S. income inequality over the past three decades is that technological change has affected workers with some skill sets differently than others." agree={88} uncertain={8} disagree={4} />
    <BoxLink id="cs-skills">Case Study: The Increasing Value of Skills</BoxLink>
  </div>
);

const S201c = () => (
  <div className="prose-uz">
    <p>
      Major league baseball players earn more than minor league players — neither a compensating differential nor human capital: simply <b>ability</b>. Close to it is <b>effort</b>
      (salespeople on commission, bonuses). There's <b>chance</b> too: repairmen who learned to fix vacuum-tube TVs were made obsolete by semiconductors; self-driving trucks may affect
      drivers; even one's birthplace is luck.
    </p>
    <p>
      Labor economists relate wages to measurable variables (education, experience, age, job characteristics) — these have the effects theory predicts, but explain <b>less than half</b>{' '}
      of the variation. So omitted ability, effort, and chance matter.
    </p>
    <BoxLink id="cs-beauty">Case Study: The Benefits of Beauty</BoxLink>
  </div>
);

const S201d = () => (
  <div className="prose-uz">
    <p>
      The human-capital view: schooling raises productivity. The alternative is <T id="signaling-education" />: firms use education to sort high-ability from low-ability workers; it's
      easier for able people to earn a degree. Like the advertising signal in Chapter 17: the action is taken not for its own benefit but because it conveys private information.
    </p>
    <p>
      Both theories explain why the educated earn more, but their policy predictions differ sharply: human capital — raising everyone's education raises all wages; signaling — it doesn't
      change them. The truth is probably in between; the relative size of the two effects is an open question.
    </p>
  </div>
);

const S201e = () => (
  <div className="prose-uz">
    <p>
      Many actors make a living as waiters, while Scarlett Johansson earns millions per film; Daniil Medvedev earns millions from tennis. Yet the best carpenters and plumbers don't earn
      such fortunes. The <T id="superstar-phenomenon" /> arises in markets with two features: (1) every customer wants the services of the best (two films by a half-good actor don't
      substitute for one); (2) technology lets the best serve everyone cheaply (copies of films, TV broadcasts). A plumber serves a limited number of customers — so even an average plumber
      makes a good living.
    </p>
  </div>
);

const S201f = () => (
  <div className="prose-uz">
    <p>
      Labor markets are usually assumed to be competitive. But the only large employer in a small town has great influence over wages — a <T id="monopsony" /> (a single buyer). Just as a
      monopoly (Chapter 16) raises its price by selling less, a monopsony hires fewer workers, moving down the supply curve — lower wages, higher profit. Both reduce activity below the
      social optimum and create a <T id="deadweight-loss" />.
    </p>
    <p>
      The book doesn't give a formal model — pure monopsonies are rare. But Joan Robinson's (1930s) concept matters in some cases: in 2021 the U.S. Supreme Court recognized that the NCAA, as
      a monopsony, had denied student-athletes compensation; an executive order by the Biden administration; <b>non-compete</b> clauses limit competition and keep wages low.
    </p>
    <WageDeviations />
    <AskExperts title="Competition in Labor Markets" source="IGM, August 3, 2021" statement="The use of non-compete clauses in U.S. employment contracts reduces workers' mobility and wages by more than is justified by the protection of employers' intellectual property and trade secrets." agree={86} uncertain={11} disagree={3} />
    <BoxLink id="news-covid-schooling">In the News: The Aftereffects of the Covid Pandemic</BoxLink>
  </div>
);

const S201g = () => (
  <div className="prose-uz">
    <p>Some workers, by contrast, are paid <b>above</b> equilibrium. Three reasons:</p>
    <ul>
      <li><T id="minimum-wage" /> laws (Chapter 6) — mainly affecting the least skilled and experienced.</li>
      <li>
        The market power of a <T id="union" /> — with the threat of a <T id="strike" />. Sometimes a counterweight to monopsony, sometimes acting like a monopolist. Union members earn
        ~<b>10–20%</b> more than similar nonunion workers.
      </li>
      <li><T id="efficiency-wages" />: high wages reduce turnover, increase effort, and attract good applicants.</li>
    </ul>
    <p>In all three cases quantity supplied rises and quantity demanded falls → a surplus of labor — <b>unemployment</b> (a topic of macroeconomics).</p>
    <Callout kind="exam"><b>Below</b> equilibrium: monopsony. <b>Above</b> equilibrium: minimum wage, unions, efficiency wages (QR 5).</Callout>
  </div>
);

const S202 = () => (
  <div className="prose-uz">
    <p>
      <T id="discrimination" /> is offering or denying opportunities based on race, ethnicity, sex, age, religion, sexual orientation, or other characteristics. It reflects broader
      prejudices in society; economists study its extent and sources.
    </p>
  </div>
);

const S202a = () => (
  <div className="prose-uz">
    <BookTable
      caption="Table 2 — Median Annual Earnings by Race and Sex (2019)"
      head={['', 'White', 'Black', 'Lower for Black workers']}
      rows={[
        ['Men', '$60,017', '$45,644', '24%'],
        ['Women', '$48,845', '$41,098', '16%'],
        ['Lower for women workers', '19%', '10%', ''],
      ]}
    />
    <p>
      These look like undeniable evidence of discrimination. But wages differ even in a market without discrimination: <b>human capital</b> (bachelor's degrees at age 25+: whites 36%,
      Blacks 26%; school quality), <b>experience</b> (at ages 25–44, 24% of women and 10% of men are out of the labor force), <b>compensating differentials</b> (different occupational
      choices). The conclusion is negative: average wage gaps between groups don't by themselves measure the extent of discrimination. Most economists believe discrimination exists, but how
      much is uncertain.
    </p>
    <p>
      Human-capital differences may themselves reflect discrimination: girls historically steered into less demanding curricula, Black students into worse schools — this happens{' '}
      <b>before</b> the labor market: the disease is political, the symptom economic.
    </p>
    <GapsAndStatistics />
    <BoxLink id="cs-emily-lakisha">Case Study: Is Emily More Employable Than Lakisha?</BoxLink>
  </div>
);

const S202b = () => (
  <div className="prose-uz">
    <p>
      Who is to blame? Apparently employers. But many economists are skeptical: a competitive market has a natural remedy — the <b>profit motive</b>. Imagine a world where workers differ
      only in hair color: employers prefer brunettes → demand and wages for blondes are low. Entrepreneurs hire blondes and operate more cheaply; “blonde” firms enter and costly
      “brunette” firms make losses and exit → demand for blondes rises and for brunettes falls → the gap disappears. Owners who care only about money beat those who discriminate.
    </p>
    <DiscriminationLab />
    <BoxLink id="cs-streetcars">Case Study: Segregated Streetcars and the Profit Motive</BoxLink>
  </div>
);

const S202c = () => (
  <div className="prose-uz">
    <p>
      The power of the profit motive is limited. <b>Customers</b>: if customers prefer brunette waiters and pay for it, “blonde” restaurants can't enter and eliminate the gap — there are two
      kinds of restaurants: cheap “blonde” ones and expensive “brunette” ones; bigoted customers pay a higher price for their taste. <b>Government</b>: if the law allows blondes only to wash
      dishes, the gap persists (segregated streetcars, apartheid in South Africa until 1990).
    </p>
    <Callout kind="exam">QQ 7: competition with free entry and exit eliminates only gaps caused by <b>employer</b> discrimination; customer or government discrimination can persist.</Callout>
    <BoxLink id="cs-sports">Case Study: Discrimination in Sports</BoxLink>
  </div>
);

const S202d = () => (
  <div className="prose-uz">
    <p>
      <T id="statistical-discrimination" />: the employer's information is incomplete. If 10% of blue-eyed people and 5% of brown-eyed people are chronically late, an employer may prefer
      brown-eyed people — even though 90% of blue-eyed people are punctual. Each person is stereotyped by the group average.
    </p>
    <p>
      A real example: “ban the box” laws forbid asking about criminal records on job applications (the goal is to help ex-offenders reenter society). An unintended consequence: because a
      larger share of Black men have been incarcerated, some employers stop hiring Black men without records too; studies show these laws significantly reduced employment of young Black
      men without college degrees. Policymakers should help ex-offenders in ways that don't increase statistical discrimination.
    </p>
  </div>
);

const S203 = () => (
  <div className="prose-uz">
    <p>
      In competitive markets workers earn the value of their marginal contribution. But much affects VMP: firms pay more to talented, hardworking, experienced, and educated workers; less to
      workers customers discriminate against — because they contribute less to revenue. The theory explains who earns more, but doesn't say whether the resulting distribution is equal, fair,
      or desirable — that's the subject of Chapter 21.
    </p>
  </div>
);

function SkillsCase() {
  return (
    <div className="prose-uz">
      <p>
        “The rich get richer, and the poor get poorer” — not always true, but in recent decades the earnings gap between high- and low-skilled workers in the U.S. has grown substantially. In
        1974 a man with a college degree earned 42% more than one without; in 2019, 85%. For women 35% → 78%.
      </p>
      <p>Two hypotheses — both say the relative demand for skilled labor has risen:</p>
      <ul>
        <li>
          <b>International trade</b>: imports went from 5% of GDP (1970) to 13% (2020), exports from 6% to 10%. Unskilled labor is cheap in many countries, so the U.S. imports goods made with
          unskilled labor and exports goods made with skilled labor → demand for skilled labor rises.
        </li>
        <li>
          <b>Technological change</b>: computer databases replaced file clerks and increased demand for programmers and analysts; robots replaced unskilled workers but need engineers. This is{' '}
          <b>skill-biased technological change</b>.
        </li>
      </ul>
      <p>There's probably no single cause; Chapter 21 examines inequality in detail.</p>
    </div>
  );
}

function Beauty() {
  return (
    <div className="prose-uz">
      <p>
        Actress Gal Gadot (a former beauty-pageant winner) earned ~$30 million in 2020. But how widespread is the economic benefit of beauty? Hamermesh and Biddle (AER, 1994) studied U.S. and
        Canadian survey data in which interviewers rated respondents' looks: those more attractive than average earn <b>5%</b> more than average-looking people, and average-looking people{' '}
        <b>5–10%</b> more than those below average; similar for men and women.
      </p>
      <ul>
        <li><b>Innate ability</b>: in jobs serving the public (acting, modeling, sales, waiting tables), attractiveness reflects customers' tastes.</li>
        <li><b>An indirect measure of other abilities</b>: dress, hairstyle, demeanor — someone who can project an attractive image may succeed at other tasks too.</li>
        <li>A form of <b>discrimination</b>.</li>
      </ul>
    </div>
  );
}

function CovidSchooling() {
  return (
    <div className="prose-uz">
      <p>
        Jon Hilsenrath (WSJ, 2021): after a shock, does the economy bounce back like rubber or stay crumpled like paper? A long-lasting scar is <b>hysteresis</b>. Margaret Raymond: in 18 states and
        Washington, children lost on average 116 days of reading and 215 days of math instruction early in the pandemic; more in rural, Black, and Hispanic areas.
      </p>
      <p>
        Eric Hanushek: the 2020 “skills shock” will cost $25–30 trillion of output over the next century, and affected students' lifetime earnings will be 6–9% lower (in Germany the shortened
        1966–67 school years cut that generation's earnings by 5%). Blanchard and Summers (1986) found hysteresis in European unemployment; after the 2007–09 crisis the evidence was weaker
        than expected. This shows the importance of <b>human capital</b>: lost education reduces future productivity and wages.
      </p>
    </div>
  );
}

function EmilyLakisha() {
  return (
    <div className="prose-uz">
      <p>
        Bertrand and Mullainathan sent ~5,000 fake résumés to more than 1,300 job ads in Boston and Chicago: half with names common among African Americans (Lakisha Washington, Jamal Jones), half
        with names common among whites (Emily Walsh, Greg Baker); everything else similar (AER, 2004). The “white” names got ~<b>50%</b> more callbacks — even from employers advertising
        themselves as “Equal Opportunity Employers.”
      </p>
      <p>
        Philip Oreopoulos (Canada, 2011): English names got <b>39%</b> more callbacks than Indian, Pakistani, Chinese, and Greek names; mixed names like “James Liu” did too. Recruiters cited
        language skills, but the discrimination appeared even with Canadian education and experience and for jobs not requiring language skills.
      </p>
    </div>
  );
}

function Streetcars() {
  return (
    <div className="prose-uz">
      <p>
        In the early 20th century, streetcars in southern cities were segregated. Jennifer Roback (1986): segregation began not with the companies but with <b>laws</b>; before them racial
        separation was rare, while separating smokers from nonsmokers was more common. The companies opposed the laws — separate seating raised costs and cut profits (one manager: “we have to
        haul around a lot of empty space”). Roback: the executives may or may not have liked Black people, but they weren't willing to give up profit for this prejudice.
      </p>
      <p>The lesson: business owners usually care about profit; discrimination often comes not from firms but from elsewhere — in this case, the law.</p>
    </div>
  );
}

function Sports() {
  return (
    <div className="prose-uz">
      <p>To measure discrimination you must control for productivity — in sports that's easy (points, assists, rebounds).</p>
      <ul>
        <li>Basketball (Journal of Labor Economics, 1988): Black players earned <b>20%</b> less than white players of similar ability; teams with more white players drew more fans — <b>customer discrimination</b>.</li>
        <li>Baseball (late 1960s): Black players earned less; games pitched by Black pitchers drew smaller crowds, even though their records were better. More recent studies found no gap.</li>
        <li>Old baseball cards (QJE, 1990): cards of Black hitters sold for <b>10%</b> less and of pitchers <b>13%</b> less — fan discrimination.</li>
      </ul>
    </div>
  );
}

const Skills = () => <SkillPremium />;
const Wages = () => <WageDeviations />;
const Disc = () => <DiscriminationLab />;
const Gaps = () => <GapsAndStatistics />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    'The sources of wage differences: **compensating differentials**, **human capital**, ability, effort, and chance',
    'Compare the **human-capital** and **signaling** theories of education; the **superstar** phenomenon',
    'Below-equilibrium (monopsony) and above-equilibrium (minimum wage, unions, efficiency wages) wages',
    'Why discrimination is hard to measure, and field experiments',
    'How competition limits employer discrimination; customer, government, and **statistical** discrimination',
  ],
  sections: [
    sec('s-20-1', '20-1', 'What Determines Wages?', S201),
    sec('s-20-1a', '20-1a', 'Compensating Differentials', S201a, checks['s-20-1a']),
    sec('s-20-1b', '20-1b', 'Human Capital', S201b, checks['s-20-1b']),
    sec('s-20-1c', '20-1c', 'Ability, Effort, and Chance', S201c, checks['s-20-1c']),
    sec('s-20-1d', '20-1d', 'An Alternative View of Education: Signaling', S201d, checks['s-20-1d']),
    sec('s-20-1e', '20-1e', 'The Superstar Phenomenon', S201e, checks['s-20-1e']),
    sec('s-20-1f', '20-1f', 'Below-Equilibrium Wages: Monopsony', S201f, checks['s-20-1f']),
    sec('s-20-1g', '20-1g', 'Above-Equilibrium Wages: Minimum-Wage Laws, Unions, and Efficiency Wages', S201g, checks['s-20-1g']),
    sec('s-20-2', '20-2', 'The Economics of Discrimination', S202),
    sec('s-20-2a', '20-2a', 'Measuring Labor-Market Discrimination', S202a, checks['s-20-2a']),
    sec('s-20-2b', '20-2b', 'Discrimination by Employers', S202b, checks['s-20-2b']),
    sec('s-20-2c', '20-2c', 'Discrimination by Customers and Governments', S202c, checks['s-20-2c']),
    sec('s-20-2d', '20-2d', 'Statistical Discrimination', S202d, checks['s-20-2d']),
    sec('s-20-3', '20-3', 'Conclusion', S203),
  ],
  examTraps: [
    { title: 'The QQ 1–4 set', body: 'Retraining → **human capital**; an unpleasant job → **compensating differential**; voluntarily high wages → **efficiency wages**; an unused degree → **signaling**.' },
    { title: 'Below vs. above', body: 'Below equilibrium — **monopsony**; above — minimum wage, unions, efficiency wages (they create unemployment).' },
    { title: 'Whom does competition correct?', body: 'Only **employer** discrimination (QQ 7). Customer and government discrimination can persist.' },
    { title: 'A raw gap ≠ discrimination', body: 'The Table 2 gaps also reflect human capital and job characteristics (QQ 6).' },
    { title: 'Table 2 numbers', body: 'White women earn ~19–20% less, Black men ~24% less (QQ 5: 20; 20).' },
  ],
  mistakes: [
    { wrong: '“According to signaling theory, education raises everyone’s wages.”', right: 'Signaling: raising everyone’s education **doesn’t change** wages; that’s the human-capital prediction.' },
    { wrong: '“There are superstars in every occupation.”', right: 'Only in markets where the best can serve everyone with cheap technology.' },
    { wrong: '“Statistical discrimination is hatred.”', right: 'It arises even without animus: incomplete information and group averages.' },
    { wrong: '“An efficiency wage is the firm’s charity.”', right: 'It’s profit-maximizing: higher productivity covers the higher cost.' },
  ],
  boxes: [
    box('cs-skills', 'Case Study', 'The Increasing Value of Skills', SkillsCase),
    box('cs-beauty', 'Case Study', 'The Benefits of Beauty', Beauty),
    box('news-covid-schooling', 'In the News', 'The Aftereffects of the Covid Pandemic', CovidSchooling),
    box('cs-emily-lakisha', 'Case Study', 'Is Emily More Employable Than Lakisha?', EmilyLakisha),
    box('cs-streetcars', 'Case Study', 'Segregated Streetcars and the Profit Motive', Streetcars),
    box('cs-sports', 'Case Study', 'Discrimination in Sports', Sports),
  ],
  summary: [
    'One reason wages differ is to compensate for job characteristics: other things equal, hard and unpleasant jobs pay more than easy and pleasant ones.',
    'Workers with more **human capital** earn more. The return to accumulating human capital is high and has risen in recent decades.',
    'Education, experience, and job characteristics affect earnings as theory predicts, but they leave much variation unexplained — the unexplained part is mostly **ability, effort, and chance**.',
    '**Signaling** theory: the educated earn more because education signals high ability. If true, raising everyone’s education would not raise the level of wages.',
    'Wages sometimes deviate from equilibrium: below — **monopsony**; above — minimum-wage laws, unions, and **efficiency wages**.',
    'Some differences arise from **discrimination** by race, sex, and other factors. It is hard to measure — human capital and job characteristics must be controlled for.',
    'Competitive markets limit discriminatory wage gaps: firms that don’t discriminate are more profitable. But discrimination persists if customers are willing to pay for it or the government requires it.',
    'Discrimination also occurs for **statistical** reasons: with incomplete information an employer may discriminate against a whole group based on its average characteristics.',
  ],
  widgets: { skills: Skills, wages: Wages, disc: Disc, gaps: Gaps },
  gallery: [
    { title: 'The college premium and skill-biased demand (Table 1)', Component: Skills },
    { title: 'Monopsony, minimum wage, unions, efficiency wages', Component: Wages },
    { title: 'Discrimination and the profit motive', Component: Disc },
    { title: 'Table 2, résumé experiments, and statistical discrimination', Component: Gaps },
  ],
};
