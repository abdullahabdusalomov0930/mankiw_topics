import { CircularFlow, GraphingSandbox, PPFExplorer } from '../../../../components/graphs/Ch2Widgets';
import { Callout } from '../../../../components/ui/Kit';
import { AskExperts, BookTable, BoxLink, Source } from '../../../../components/ui/Lesson';
import { Math as M } from '../../../../components/ui/Math';
import { T } from '../../../../components/ui/Term';
import { box, sec } from '../../../enPage';
import type { ChapterPageContent } from '../../../types';
import { checks } from '../quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        Mathematicians talk about axioms and integrals, psychologists about the ego and cognitive dissonance, lawyers about torts and estoppel. Economists have a
        language of their own too: <i>supply, demand, elasticity, comparative advantage, consumer surplus, deadweight loss</i>. Learning these words is part of
        learning the subject — they are exactly the words you will meet in the book and on the exam.
      </p>
      <p>
        This chapter is about method: how does an economist approach a question? Whether you are following the news, running a household budget, or judging a
        politician's promise on anything from traffic to climate change, “thinking like an economist” leads to better decisions.
      </p>
    </div>
  );
}

const S21 = () => (
  <div className="prose-uz">
    <p>
      Economists study the economy with the <b>objectivity of a scientist</b>, much as a physicist studies matter or a biologist studies life: they devise
      theories, collect data, and analyze the data to confirm or refute their theories. They have no test tubes or white coats, but the essence of science is the{' '}
      <T id="scientific-method" />. Einstein: “The whole of science is nothing more than the refinement of everyday thinking.”
    </p>
  </div>
);

const S21a = () => (
  <div className="prose-uz">
    <p>
      Newton saw an apple fall and developed the theory of gravity; later tests confirmed it in many (but not all, as Einstein showed) circumstances. Economics
      works the same way: an economist living in a country with rapidly rising prices might develop the theory that “printing a lot of money causes inflation”
      and test it with data on money and prices from many countries. If the two are correlated (as in fact they usually are), confidence in the theory grows.
    </p>
    <p>
      The problem: experiments are often <b>impossible</b> — a country cannot manipulate its monetary policy just to study inflation. So economists, like
      astronomers, use history's <b>natural experiments</b>: when a war in the Middle East interrupts the flow of oil and prices spike, it is a chance to study
      how a key natural resource affects the economy.
    </p>
  </div>
);

const S21b = () => (
  <div className="prose-uz">
    <p>
      How long does a marble dropped from a ten-story building take to hit the ground? A physicist assumes it falls in a vacuum. That is false, but air friction
      is so small that it barely affects the answer. For a <b>beach ball</b> of the same weight, however, the assumption would lead to a large error.
    </p>
    <p>
      Economists make <T id="assumptions" /> too: to study trade, we assume the world has only 2 countries and 2 goods (Chapter 3). Different questions call for
      different assumptions: for the <b>short-run</b> effects of a change in the quantity of money, prices are nearly sticky (a magazine changes its price only
      every few years); in the <b>long run</b> they are fully flexible.
    </p>
    <Callout kind="tip">The art of scientific thinking is deciding which assumptions to make. An assumption is not bad in itself; the wrong assumption for the question is.</Callout>
  </div>
);

const S21c = () => (
  <div className="prose-uz">
    <p>
      A high-school biology teacher uses a plastic model of the human body: it lacks most muscles and blood vessels but shows how the organs fit together — useful
      precisely because it is unrealistic. <T id="economic-model" label="Economic models" /> are similar, except that they are made of diagrams and equations. All
      models are built on assumptions and are revised when the facts demand it. The statistician George Box: <i>“All models are wrong, but some are useful.”</i>
    </p>
  </div>
);

const S21d = () => (
  <div className="prose-uz">
    <p>
      Our first model is the <T id="circular-flow-diagram" />. It has just two decision makers: <b>firms</b> and <b>households</b>. Firms produce goods using the{' '}
      <T id="factors-of-production" /> (labor, land, capital); households own the factors and consume all the goods.
    </p>
    <ul>
      <li><b>Markets for goods and services</b>: households are buyers, firms are sellers.</li>
      <li><b>Markets for the factors of production</b>: households are sellers, firms are buyers.</li>
    </ul>
    <CircularFlow />
    <p>
      Follow a dollar: the $1 in your wallet → a coffee at a café → the firm's <b>revenue</b> → rent, the barista's wage, or the owner's <b>profit</b> → someone's{' '}
      <b>income</b> → back in a wallet. A more realistic model adds government (taxes) and international trade (coffee beans from a farmer in Kenya), but they are
      not needed for the basic idea.
    </p>
    <Callout kind="exam">QuickQuiz 2: in the factor markets <b>households = sellers</b> and <b>firms = buyers</b>. In the goods markets it is the other way round.</Callout>
  </div>
);

const S21e = () => (
  <div className="prose-uz">
    <p>
      Our second model is mathematical — the <T id="production-possibilities-frontier" />. The economy produces only cars and computers. With all resources in
      cars it makes <b>1,000 cars</b>; with all in computers, <b>3,000 computers</b>. A: 600 cars and 2,200 computers; B: 700 and 2,000. C is unattainable (not
      enough resources).
    </p>
    <ul>
      <li><b>Efficiency</b>: at a point on the frontier (A), producing more of one good requires producing less of the other. D (300, 1,000) is inefficient (widespread unemployment, say): moving D → A raises both.</li>
      <li><b>Trade-offs and opportunity cost</b>: A → B trades 200 computers for 100 cars, so 1 car = <b>2 computers</b>. The opportunity cost is the <b>slope</b> of the frontier.</li>
      <li><b>Bowed out</b>: with many cars (E, steep) a car is costly, because even the best computer experts are moved to building cars; with few cars (F, flat) it is cheap, because the workers moved are auto mechanics unsuited to computers.</li>
      <li><b>Economic growth</b> (Figure 3): better computer technology leaves the 1,000-car end point unchanged but pushes the computer end point to 4,000 — the frontier shifts out. Society can move from A to G (650 cars, 2,300 computers) — more of both.</li>
    </ul>
    <PPFExplorer />
    <Callout kind="note" title="About the book's numbers">
      The book gives numbers only for the end points and for A, B, D, and G; C, E, and F appear only in the figure. The curve here is a smooth function that fits
      the book's points (A and B within about ±10). G (650, 2,300) lies on the new frontier in the book; in our simplified shift it ends up just inside it — the
      book's figure is schematic.
    </Callout>
  </div>
);

const S21f = () => (
  <div className="prose-uz">
    <p>
      Just as biology is studied at the level of molecules, cells, and the evolution of species, economics is studied at various levels.{' '}
      <T id="microeconomics" label="Microeconomics" /> studies the decisions of households and firms and specific markets (rent control in New York, foreign
      competition and the auto industry, the effect of education on wages). <T id="macroeconomics" label="Macroeconomics" /> studies the whole economy (government
      debt, the unemployment rate, policies to raise living standards).
    </p>
    <p>
      The two are closely linked: to study how a cut in the income tax affects total output, one must analyze households' spending decisions. But they address
      different questions, so they use different models and are taught in separate courses.
    </p>
  </div>
);

const S22a = () => (
  <div className="prose-uz">
    <p>When economists try to <b>explain</b> the world, they are scientists; when they try to help <b>improve</b> it, they are policy advisers. Two statements:</p>
    <ul>
      <li><b>Prisha</b>: “Minimum-wage laws cause unemployment.” — like a scientist: she describes how the world is.</li>
      <li><b>Noah</b>: “The government should raise the minimum wage.” — like a policy adviser: he says how the world ought to be.</li>
    </ul>
    <p>
      The first is a <T id="positive-statements" label="positive statement" /> (descriptive), the second a <T id="normative-statements" label="normative statement" />{' '}
      (prescriptive). A positive statement can be tested with evidence; a normative one also needs <b>values</b>. They are related: if Prisha is right, she may
      reject Noah's conclusion; if the unemployment effect is small, she may accept it. A researcher should set aside normative views and examine the data
      objectively.
    </p>
    <Callout kind="mistake">“Positive” does not mean “optimistic.” “Unemployment will rise by 2%” is a positive statement too.</Callout>
    <BoxLink id="news-tech-economists">In the News: Why Tech Companies Hire Economists</BoxLink>
  </div>
);

const S22b = () => (
  <div className="prose-uz">
    <p>
      President Truman once asked for a “one-armed economist,” because his advisers kept saying “<i>On the one hand… On the other hand…</i>” The reason is the
      Chapter 1 principle of <b>trade-offs</b>: a policy may raise efficiency but reduce equality, or help future generations but hurt the current one. Beware of
      an economist who says every decision is easy.
    </p>
    <p>
      Since 1946 the U.S. president has been advised by the <b>Council of Economic Advisers</b> (3 members and a few dozen economists), which writes the annual{' '}
      <i>Economic Report of the President</i> (the book's author, Mankiw, chaired it in 2003–2005). Economists also work at the OMB (spending plans), the Treasury
      (tax policy), the Department of Labor, the Department of Justice (antitrust), the Congressional Budget Office, and the Federal Reserve.
    </p>
    <p>
      Keynes (1935): the ideas of economists and philosophers, both when they are right and when they are wrong, are more powerful than is commonly understood;
      practical men are usually “the slaves of some defunct economist.” Today the influential “academic scribbler” is often Keynes himself.
    </p>
  </div>
);

const S22c = () => (
  <div className="prose-uz">
    <p>
      Textbooks treat policy as if it were made by a <b>benevolent and powerful king</b>. A real president, after hearing the economists, also listens to
      communications advisers (how to explain it to the public), the press (how the media and social networks will cover it), legislative advisers (how Congress
      will act), and political advisers (which groups will support or oppose it). An economist's advice is only one ingredient in a complex recipe.
    </p>
  </div>
);

const S23 = () => (
  <div className="prose-uz">
    <p>
      George Bernard Shaw: “If all economists were laid end to end, they would not reach a conclusion.” Reagan joked that a game of <i>Trivial Pursuit</i> for
      economists would have 100 questions and 3,000 answers. There are two basic reasons:
    </p>
    <ol>
      <li>Economists may disagree about the validity of alternative <b>positive theories</b> of how the world works.</li>
      <li>Economists may have different <b>values</b> and therefore different normative views about what policy should try to accomplish.</li>
    </ol>
  </div>
);

const S23a = () => (
  <div className="prose-uz">
    <p>
      Astronomers once debated whether the Earth or the Sun is at the center of the solar system. Science is an ongoing search. Economists, too, may have
      different hunches about competing theories or different estimates of the <b>size of the parameters</b> that measure how variables are related.
    </p>
    <p>
      Example: replacing the income tax with a <b>consumption tax</b>. Supporters: income that is saved would not be taxed → saving ↑ → capital ↑ → productivity
      and living standards grow faster. Opponents: saving barely responds to taxes. Different normative conclusions come from different <b>positive</b> views.
    </p>
  </div>
);

const S23b = () => (
  <div className="prose-uz">
    <p>Jack and Jill take the same amount of water from the town well, and a tax pays for its upkeep:</p>
    <BookTable
      head={['', 'Income', 'Tax', 'Share']}
      rows={[
        ['Jill', '$150,000', '$15,000', '10%'],
        ['Jack', '$40,000', '$6,000', '15%'],
      ]}
    />
    <p>
      Is this fair? Who pays too much, who too little? Does it matter whether Jack's low income is due to a disability or to his choice of an acting career?
      Whether Jill's wealth is inherited or comes from long hours at a dreary job? Science cannot answer such questions: perfecting the science of economics
      will not tell us whether Jack or Jill pays too much.
    </p>
  </div>
);

const S23c = () => (
  <div className="prose-uz">
    <p>Disagreement should not be overstated — economists agree more than people think:</p>
    <ul>
      <li>“<i>A ceiling on rents reduces the quantity and quality of housing available.</i>” — <b>93%</b> agree (Chapter 6). Yet many cities still use rent control.</li>
      <li>“<i>Tariffs and import quotas usually reduce general economic welfare.</i>” — <b>93%</b> agree (Chapter 9).</li>
    </ul>
    <p>
      Why do such policies persist? Obstacles in the political process — or economists have not yet convinced the public. Throughout the book, <b>Ask the Experts</b>{' '}
      boxes show surveys of the IGM Economic Experts Panel: when economists agree, when they are divided, and when they don't know.
    </p>
    <AskExperts
      title="Ticket Resale"
      source="IGM, April 16, 2012"
      statement="Laws that limit the resale of tickets for entertainment and sports events make potential audience members for those events worse off on average."
      note="The percentages are shown in the book's chart as an image and could not be read from the text (see inventory.md). The book's conclusion: most economists side with ticket resellers rather than the lawmakers. Compare with “ticket resellers” in Chapter 7."
    />
  </div>
);

const S24 = () => (
  <div className="prose-uz">
    <p>
      Keynes's advice: economics looks like an easy subject, yet few excel at it, because the master economist must be to some degree a{' '}
      <b>mathematician, historian, statesman, and philosopher</b>: understand symbols and speak in words; see the particular in terms of the general; study the
      present in the light of the past for the purposes of the future. It is a tall order, but with practice you will get used to thinking like an economist.
    </p>
  </div>
);

const SApp = () => (
  <div className="prose-uz">
    <p>
      Graphs serve two purposes: to express theories visually and to find patterns in data. <b>Single-variable</b> graphs (Figure A-1): the <b>pie chart</b>{' '}
      (sources of U.S. national income, 2020), the <b>bar graph</b> (average income in four countries), and the <b>time-series graph</b> (labor productivity in the
      U.S. business sector).
    </p>
    <p>
      <b>Two variables — the coordinate system.</b> Each student is an <T id="ordered-pair" />: Albert E. (25 hours/week, 3.5 GPA) and his “what-me-worry?”
      classmate Alfred E. (5, 2.0). Such a graph is a <T id="scatterplot" />. Study time and GPA move together — a <T id="correlation" label="positive correlation" />;
      party time and grades — negative.
    </p>
    <p>
      <b>Curves.</b> Economists often look at the effect of one variable while holding everything else constant. Table A-1 shows how many novels Emma buys
      depending on the price and her income:
    </p>
    <BookTable
      caption="Table A-1 — Novels Purchased by Emma"
      head={['Price', '$30,000 income (D3)', '$40,000 income (D1)', '$50,000 income (D2)']}
      rows={[
        ['$10', '2', '5', '8'],
        ['$9', '6', '9', '12'],
        ['$8', '10', '13', '16'],
        ['$7', '14', '17', '20'],
        ['$6', '18', '21', '24'],
        ['$5', '22', '25', '28'],
      ]}
    />
    <p>
      When the price falls ($8 → $7), Emma goes from 13 to 17 — a <b>movement along</b> the curve. When her income rises ($40k → $50k), at $8 she goes from 13 to 16 —
      the curve <b>shifts</b> (D1 → D2): <T id="movement-vs-shift" />. <T id="slope" label="Slope" />: <M tex="\Delta y/\Delta x = (6-8)/(21-13) = -1/4" />.
    </p>
    <GraphingSandbox />
    <p>
      <b>Cause and effect.</b> Two pitfalls: an <T id="omitted-variable" /> (lighters and cancer — the real cause is smoking; Big Brother Statistical Services
      proposes a tax on lighters!) and <T id="reverse-causality" /> (police and crime — the Association of American Anarchists proposes abolishing the police).
      Timing is no proof either: a minivan is bought before the baby is born.
    </p>
    <Callout kind="exam">
      When a graph is used to claim causation, ask two questions: (1) could an unseen <b>third variable</b> explain it? (2) could the causation run the{' '}
      <b>other way</b>?
    </Callout>
  </div>
);

function TechEconomists() {
  return (
    <div className="prose-uz">
      <Source>Steve Lohr, “Goodbye, Ivory Tower. Hello, Silicon Valley Candy Store,” New York Times, September 4, 2016</Source>
      <p>
        Jack Coles spent eight years at Harvard Business School studying how to design efficient markets (with Nobel laureate Alvin Roth). In 2013 he moved to{' '}
        <b>Airbnb</b> — one of the tech companies drawing economists with big data and big salaries. In his words, for economists it is a real “candy store.”
      </p>
      <ul>
        <li>Firms used to hire economists for macro trends (recessions, exchange rates); tech economists instead study the <b>digital traces of consumer behavior</b> — micro data.</li>
        <li><b>Netflix</b>: Randall Lewis measures how well ads work — <b>correlation or causation</b>: which actions merely happen after an ad, and which happen because of it?</li>
        <li><b>Airbnb</b>: procrastination — are bookings made at the last minute or weeks ahead, and does that differ by age, gender, and country?</li>
        <li><b>Google</b>: Hal Varian (since 2002) refined the AdWords auction market. <b>Amazon</b> is the most active recruiter; <b>Amazon and Microsoft</b> tackle the peak-load problem in cloud services with auctions or discounts.</li>
        <li>Microsoft's chief economist Preston McAfee: economics does not <b>dictate</b> decisions, it <b>informs</b> them.</li>
      </ul>
      <Callout kind="tip" title="Questions to discuss">
        <ol>
          <li>Think of firms you use often (Uzum, Yandex Go, Click). How might economists help them improve?</li>
          <li>After studying economics, in what kind of business would you most like to work?</li>
        </ol>
      </Callout>
    </div>
  );
}

const Flow = () => <CircularFlow />;
const Ppf = () => <PPFExplorer />;
const Graphing = () => <GraphingSandbox />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    'Explain why economics is a **science** and the role of assumptions and models',
    'Trace the flows of money and of goods in the **circular-flow diagram**',
    'Use the **PPF** to show efficiency, trade-offs, opportunity cost, and growth',
    'Distinguish **microeconomics** from **macroeconomics** and **positive** from **normative** statements',
    'Know why economists disagree (scientific judgments and values) and where they agree',
    'Appendix: scatterplots, **slope**, movement along versus shift of a curve, **omitted variables** and **reverse causality**',
  ],
  sections: [
    sec('s-2-1', '2-1', 'The Economist as Scientist', S21),
    sec('s-2-1a', '2-1a', 'The Scientific Method: Observation, Theory, and More Observation', S21a, checks['s-2-1a']),
    sec('s-2-1b', '2-1b', 'The Role of Assumptions', S21b, checks['s-2-1b']),
    sec('s-2-1c', '2-1c', 'Economic Models', S21c, checks['s-2-1c']),
    sec('s-2-1d', '2-1d', 'Our First Model: The Circular-Flow Diagram', S21d, checks['s-2-1d']),
    sec('s-2-1e', '2-1e', 'Our Second Model: The Production Possibilities Frontier', S21e, checks['s-2-1e']),
    sec('s-2-1f', '2-1f', 'Microeconomics and Macroeconomics', S21f, checks['s-2-1f']),
    sec('s-2-2a', '2-2a', 'Positive versus Normative Analysis', S22a, checks['s-2-2a']),
    sec('s-2-2b', '2-2b', 'Economists in Washington', S22b, checks['s-2-2b']),
    sec('s-2-2c', '2-2c', "Why Economists' Advice Is Often Not Followed", S22c, checks['s-2-2c']),
    sec('s-2-3', '2-3', 'Why Economists Disagree', S23),
    sec('s-2-3a', '2-3a', 'Differences in Scientific Judgments', S23a, checks['s-2-3a']),
    sec('s-2-3b', '2-3b', 'Differences in Values', S23b, checks['s-2-3b']),
    sec('s-2-3c', '2-3c', 'Perception versus Reality', S23c, checks['s-2-3c']),
    sec('s-2-4', '2-4', "Let's Get Going", S24),
    sec('s-2-app', 'App.', 'Appendix — Graphing: A Brief Review', SApp),
  ],
  examTraps: [
    { title: 'Factor markets', body: 'Households **sell** (labor, land, capital), firms **buy**. In the goods markets it is the reverse.' },
    { title: 'Points and the PPF', body: 'On it — efficient; inside — feasible but inefficient; outside — unattainable. OC = |slope|.' },
    { title: 'Bowed out', body: 'Many cars (E) → high OC, a steep frontier. Few cars (F) → low OC, flat.' },
    { title: 'Positive ≠ optimistic', body: 'Testable — positive; “should/ought/good” — normative.' },
    { title: 'Micro/macro', body: 'The budget deficit and economic growth are **macro** (QuickQuiz 4).' },
    { title: 'The shift rule', body: 'A variable **not** on the axes changes — the curve shifts; a variable on an axis — a movement along the curve.' },
  ],
  mistakes: [
    { wrong: '“The more realistic a model, the better.”', right: 'A useful model **simplifies**: “All models are wrong, but some are useful.”' },
    { wrong: "“A point inside the PPF can't be reached.”", right: 'It can, but it is **inefficient** — the unattainable points are outside.' },
    { wrong: '“Opportunity cost is constant along the PPF.”', right: 'On a bowed-out PPF it **changes**: a good gets costlier the more of it is made.' },
    { wrong: "“There's a correlation, so there's a cause.”", right: 'Check for the omitted-variable and reverse-causality traps.' },
    { wrong: '“Economists agree on nothing.”', right: '93% oppose rent control and tariffs.' },
  ],
  boxes: [box('news-tech-economists', 'In the News', 'Why Tech Companies Hire Economists', TechEconomists)],
  summary: [
    'Economists try to address their subject with a **scientist’s objectivity**. Like all scientists, they make appropriate assumptions and build simplified **models** to understand the world. Two simple models are the **circular-flow diagram** (how households and firms interact in the markets for goods and services and for the factors of production) and the **production possibilities frontier** (the trade-off society faces between producing different goods).',
    'The field of economics is divided into two subfields: **microeconomics** studies decision making by households and firms and their interactions in markets; **macroeconomics** studies the forces and trends that affect the economy as a whole.',
    'A **positive** statement is an assertion about how the world is; a **normative** statement is an assertion about how the world ought to be. Positive statements can be judged by facts and the scientific method, while normative statements also require value judgments. When economists make normative statements, they act more as policy advisers than as scientists.',
    'Economists who advise policymakers sometimes offer conflicting advice because of differences in **scientific judgments** or in **values**. At other times economists are united in the advice they offer, but policymakers may choose to ignore it because of the constraints of the political process.',
  ],
  widgets: { flow: Flow, ppf: Ppf, graphing: Graphing },
  gallery: [
    { title: 'The circular-flow diagram', Component: Flow },
    { title: 'The production possibilities frontier (PPF)', Component: Ppf },
    { title: 'Graphing: scatterplot, shifts, slope, causation', Component: Graphing },
  ],
};
