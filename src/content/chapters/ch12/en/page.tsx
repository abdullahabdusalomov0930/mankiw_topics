import { DeathSpiral, HealthFacts, InsuranceCalc, MoralHazardGraph } from '../../../../components/graphs/Ch12Widgets';
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
        We all want to live long and healthy lives — free of the surgeon's scalpel, the nurse's needle, and the dentist's drill. But health usually requires scarce resources, so it
        is partly an <b>economic problem</b>. More than one of every six dollars spent in the United States goes to healthcare.
      </p>
      <p>
        The healthcare market differs from the supply-and-demand model in many ways, which is why governments in nearly every country are deeply involved in it (especially during
        the 2020–2021 pandemic). The chapter has two parts: the economic features of the healthcare market and key facts about the U.S. system. These same ideas are needed to
        understand Uzbekistan's reforms toward mandatory health insurance.
      </p>
    </div>
  );
}

const S121 = () => (
  <div className="prose-uz">
    <BookTable
      head={['The standard supply-and-demand model', 'The market for healthcare']}
      rows={[
        ['The main interested parties are the buyer and the seller', 'Third parties (insurers, government, bystanders) also have a stake'],
        ['Buyers can judge well what they are getting', 'Patients often don’t know what they need and can’t evaluate treatment'],
        ['Buyers pay sellers directly', 'Doctors are often paid by insurance (private or public)'],
        ['Prices coordinate decisions', 'An insurer’s rules allocate resources'],
        ['The invisible hand yields an efficient allocation', 'The invisible hand fails — the allocation can be very inefficient'],
      ]}
    />
  </div>
);

const S121a = () => (
  <div className="prose-uz">
    <p>
      From Chapter 10: when there is an <T id="externality" />, the market outcome is inefficient. Healthcare is full of externalities:
    </p>
    <ul>
      <li>
        <b>Vaccines.</b> If Vicki gets vaccinated, she won't carry the disease — a positive effect on others. Vaccination has a cost (money, time, discomfort), so left alone the
        market vaccinates too few people. The government mandates, promotes, rewards, or subsidizes production.
      </li>
      <li>
        <b>Medical research</b> — new knowledge benefits others. The government grants a <T id="patent" /> (a temporary monopoly internalizes the externality), but the monopoly
        price is above marginal cost → too little consumption, a DWL (Chapter 16), and a burden on the poor. With vaccines there is a tension: patents encourage research, but high
        prices slow vaccination. Michael Kremer's proposal: the government should <b>buy</b> the patent. Another route is direct subsidy: the NIH budget exceeds $40 billion a year
        (~$130 per person).
      </li>
    </ul>
    <BoxLink id="cs-vaccine">Case Study: Vaccine Hesitancy</BoxLink>
  </div>
);

const S121b = () => (
  <div className="prose-uz">
    <p>
      Normally consumers know what they want and can judge the result afterward. Not in healthcare: when you are sick you don't know which treatment is best, and even afterward you
      can't judge reliably (sometimes even the best medicine fails, while a wrong treatment can seem to “work” because the body heals itself).
    </p>
    <ul>
      <li>The government requires <b>licenses</b> for doctors, dentists, and nurses; the FDA tests new drugs for safety and effectiveness.</li>
      <li>The profession polices itself too: accreditation of medical schools, professional norms, trust between doctor and patient.</li>
      <li>Drawbacks: opening a medical school is hard — the profession limits the number of doctors like a monopoly; the FDA is very slow — some patients go without experimental treatments.</li>
    </ul>
  </div>
);

const S121c = () => (
  <div className="prose-uz">
    <p>
      We don't know when we'll get sick — health costs are unpredictable. Most people have <T id="risk-aversion" />: they prefer a certain $100,000 to a 50–50 chance of $50,000 or
      $150,000. Insurance transfers risk to the insurer in exchange for a <T id="premium" />.
    </p>
    <InsuranceCalc />
    <p>Two problems impair the insurance market:</p>
    <ul>
      <li>
        <T id="moral-hazard" />: an insured patient sees a doctor for minor symptoms, and the doctor orders dubious tests. The response: a <b>co-pay</b> (say, $20 per visit) and
        strict rules.
      </li>
      <li>
        <T id="adverse-selection" />: people with hidden illnesses are more likely to buy insurance → the price must suit sicker people → people of average health drop out too. The
        worst case is a <T id="death-spiral" />.
      </li>
    </ul>
    <DeathSpiral />
    <p>
      The <b>Affordable Care Act</b> (Obamacare, 2010) banned charging more for preexisting conditions — a recipe for adverse selection. That is why it required everyone to buy
      insurance (with a penalty) and subsidized low-income people. The uninsured share under 65 fell from 18% (2010) to 11% (2020). The mandate was politically contentious and was
      repealed at the end of 2017; so far no death spiral has begun — perhaps most people value insurance anyway.
    </p>
    <Callout kind="exam">
      People buy insurance to reduce <b>uncertainty</b> (QQ 2). Access rules counter <b>moral hazard</b> (QQ 3). If the healthy don't buy — <b>adverse selection</b> (QQ 4).
    </Callout>
  </div>
);

const S121d = () => (
  <div className="prose-uz">
    <p>
      If a water park gets expensive and low-income people stop going, few would call it unfair. But not treating a sick person because their income is low seems wrong: healthcare
      is often regarded as a <b>human right</b> (a judgment beyond economics, but one that must be taken into account).
    </p>
    <p>
      Healthcare is like food (assisted through SNAP), but with a difference: food prices grew more slowly than incomes, while modern medicine became expensive fast. Canada and
      England have a <T id="single-payer" />. In the U.S. most people have private insurance through their employer, but the government's role is large: <b>Medicare</b> (65+),{' '}
      <b>Medicaid</b> (low income), the Veterans Health Administration, the ACA.
    </p>
  </div>
);

const S121e = () => (
  <div className="prose-uz">
    <p>
      A typical market (Figure 1a): the seller provides a good and the buyer pays the price. The healthcare market (Figure 1b): <b>patient → insurer</b> premiums or taxes;{' '}
      <b>insurer → doctor</b> payment; <b>doctor → patient</b> care. This requires three kinds of rules — <T id="healthcare-rules" />:
    </p>
    <div className="not-prose my-5 grid gap-3 sm:grid-cols-3">
      {[
        ['Financing', 'Who pays how much: the tax system or premiums (the government may limit price differences by age, sex, or illness).'],
        ['Access', 'When a patient gets care: one checkup a year, only in-network doctors, a referral for specialists — against moral hazard.'],
        ['Payment', 'How much the insurer pays for which treatment; if it isn’t covered (cosmetic surgery), the market reverts to the typical form (a).'],
      ].map(([a, b]) => (
        <div key={a} className="card p-4">
          <div className="font-display font-bold">{a} rules</div>
          <p className="mt-1 text-sm">{b}</p>
        </div>
      ))}
    </div>
  </div>
);

const S122a = () => (
  <div className="prose-uz">
    <p>
      The good news: life expectancy was <b>47.3</b> years in 1900, <b>68.2</b> in 1950, and <b>78.8</b> in 2019. Temporary declines: the 1918 flu pandemic (more than 10 years),
      World War II (−2.9 years from 1942 to 1943), the opioid epidemic, and COVID-19 in 2020 (−1.5 years). Much of the increase comes from lower <b>infant mortality</b>: ~10% →
      under 0.6%.
    </p>
    <p>
      The causes: medical technology (vaccines), sanitation (clean water, sewers), less smoking (&gt;50% less per person since 1960), safer cars (traffic deaths half the 1950 rate).
    </p>
    <HealthFacts />
  </div>
);

const S122b = () => (
  <div className="prose-uz">
    <p>Healthcare spending rose from 5% of GDP (1960) to 18% (2019). Four forces:</p>
    <ol>
      <li>
        <T id="baumol-cost-disease" />: a doctor's visit is a personal service like a haircut or a teacher's class, and its productivity grows slowly; because wages rise in other
        sectors, they must rise here too → the price rises. Because demand is inelastic, spending rises too.
      </li>
      <li><b>Medical technology</b>: once there was nothing for many illnesses but rest and “wait and see” (and leeches!); new treatments extend life but are expensive.</li>
      <li><b>Demographics</b>: births fell from ~3 to ~2 children and lives got longer → the 65+ share went from 9% (1960) to 17% (2020).</li>
      <li><b>Rising incomes</b>: income per person is more than 3 times the 1960 level. The marginal value of food falls fast, that of extra years of life slowly → the income elasticity of health ≈ <b>1.3</b> (&gt; 1).</li>
    </ol>
    <AskExperts
      title="Baumol's Cost Disease"
      source="IGM, May 16, 2017"
      statement="Because labor markets across different sectors are connected, rising productivity in manufacturing leads the cost of labor-intensive services — such as education and health care — to rise."
      agree={88}
      uncertain={8}
      disagree={4}
    />
  </div>
);

const S122c = () => (
  <div className="prose-uz">
    <p>
      The U.S. spends ~17%, other advanced countries 9–12% (Figure 4). <b>Critics</b>: Canada, France, and Japan have longer lives and lower costs; single-payer saves on
      administrative costs and insurance profits. <b>Defenders</b>: international comparisons are unreliable — for example, obesity is more common in the U.S., which shortens
      lives and raises costs.
    </p>
    <p>
      <b>Drug prices</b>: Canadians spend ~30% less on drugs — a centralized system tightly controls prices. Critics urge the U.S. to do the same; defenders: price controls reduce
      the incentive to research new drugs — cheap today, fewer treatments tomorrow; countries with price controls <b>free ride</b> on research funded by the U.S.
    </p>
  </div>
);

const S122d = () => (
  <div className="prose-uz">
    <p>
      The out-of-pocket share fell from 55% (1960) to 13% (2019); third-party payments rose from 45% to 87% (a bit under half private insurance, a bit over half Medicare and
      Medicaid). Many economists think the U.S. system relies <b>too much</b> on insurance even for small, routine expenses → stronger moral hazard.
    </p>
    <p>
      The cause is the tax code: employer-provided insurance is tax-exempt, cash wages aren't. The ACA tried to fix this with the “Cadillac tax” (a tax on expensive plans); it was
      delayed and repealed in 2019.
    </p>
    <AskExperts
      title="Cadillac Tax"
      source="IGM, May 17, 2016"
      statement="The 'Cadillac tax' on expensive employer-provided health insurance plans will reduce costly distortions in U.S. health care if it is allowed to take effect as scheduled in 2018."
      agree={84}
      uncertain={16}
      disagree={0}
    />
    <MoralHazardGraph />
  </div>
);

const S123 = () => (
  <div className="prose-uz">
    <p>
      The ideas above are widely accepted among economists, but the political debate continues. <b>The left</b>: the government's role should be large; private insurers put profit
      above people; a “public option” or Canadian-style single-payer. <b>The right</b>: shrink the government's role, lighter regulation, competition among private insurers and
      doctors; a centralized system limits freedom, rations care, and stifles innovation (long waits in Canada).
    </p>
    <p>
      This is part of Chapter 1's <b>equality versus efficiency</b> trade-off: universal coverage requires taxing the rich (which distorts incentives and shrinks the pie), while a
      small government means fewer resources for the needy.
    </p>
    <BoxLink id="news-pandemic">In the News: Lessons from the Pandemic of 2020</BoxLink>
  </div>
);

function Vaccine() {
  return (
    <div className="prose-uz">
      <p>
        Measles is highly contagious and dangerous, especially for children. Before the vaccine was developed in 1963, 3–4 million Americans caught it each year, tens of thousands were
        hospitalized, and hundreds died. By 2000 measles was nearly eliminated — about 60 cases a year in the following decade. Vaccine research yielded an enormous positive externality.
      </p>
      <p>
        An unintended consequence: some parents let down their guard — believing (as scientists have refuted) that the vaccine is dangerous, or for religious reasons, they didn't
        vaccinate their children. Cases rose to 372 in 2018 and over 1,000 in 2019. Some states tightened requirements (exemptions only for medical reasons). Critics see a violation
        of personal liberty; supporters see the externality of contagious disease.
      </p>
      <p>
        COVID-19 (2020–2021): the vaccines were free, but many people hesitated. Some economists proposed <b>paying</b> people to get vaccinated — a Pigovian subsidy internalizing the
        externality. New York gave vaccinated people vouchers for a Shake Shack burger.
      </p>
    </div>
  );
}

function Pandemic() {
  return (
    <div className="prose-uz">
      <Source>Amy Finkelstein, “Why It's So Hard to Cut Waste in Health Care,” New York Times, January 24, 2021</Source>
      <p>
        MIT economist Finkelstein: cutting wasteful spending while keeping valuable care is the “holy grail” of health policy. The pandemic showed how hard that is: in the first 9 months
        of 2020 spending fell 10%, but <b>everything</b> declined — hospital admissions for severe heart attacks and strokes, childhood vaccinations, and overprescribed tests alike.
      </p>
      <ul>
        <li>Healthcare is nearly a fifth of the U.S. economy; studies suggest a quarter or more of it is waste (administrative costs, high prices, wrong treatment).</li>
        <li>“Skin in the game” (high deductibles): patients use less — fewer unnecessary scans, but also fewer diabetes and cholesterol drugs.</li>
        <li>Medicaid increased both preventive care and emergency-room visits — a “blunt instrument.”</li>
        <li>A fixed payment to doctors per patient (say, $25,000 for a knee replacement) increases attention to costs but may also reduce optimal care.</li>
        <li>The saying about advertising applies to healthcare too: “half the spending is wasted — we just don't know which half.”</li>
      </ul>
      <Callout kind="tip" title="Questions to discuss">
        <ol>
          <li>If your co-pay for a doctor's visit went up, how often would you go? Why?</li>
          <li>Can you judge well when you need a doctor and when your body will heal itself? Give examples.</li>
          <li>How much do you trust your doctor in ordering tests? Why?</li>
        </ol>
      </Callout>
    </div>
  );
}

const Spiral = () => <DeathSpiral />;
const MH = () => <MoralHazardGraph />;
const Ins = () => <InsuranceCalc />;
const Facts = () => <HealthFacts />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    'Explain the five ways the healthcare market differs from the standard supply-and-demand model',
    'Analyze **externalities** in healthcare (vaccines, research) and the difficulty of monitoring quality',
    'Show **risk aversion**, **moral hazard**, **adverse selection**, and the **death spiral** with calculations',
    'Financing, access, and payment rules; key facts about the U.S. system and **Baumol’s cost disease**',
    'See the health policy debate as a trade-off between equality and efficiency',
  ],
  sections: [
    sec('s-12-1', '12-1', 'The Special Characteristics of the Market for Healthcare', S121),
    sec('s-12-1a', '12-1a', 'Externalities Galore', S121a, checks['s-12-1a']),
    sec('s-12-1b', '12-1b', 'The Difficulty of Monitoring Quality', S121b, checks['s-12-1b']),
    sec('s-12-1c', '12-1c', 'The Insurance Market and Its Imperfections', S121c, checks['s-12-1c']),
    sec('s-12-1d', '12-1d', 'Healthcare as a Right', S121d, checks['s-12-1d']),
    sec('s-12-1e', '12-1e', 'The Rules Governing the Healthcare Marketplace', S121e, checks['s-12-1e']),
    sec('s-12-2a', '12-2a', 'People Are Living Longer', S122a, checks['s-12-2a']),
    sec('s-12-2b', '12-2b', 'Healthcare Spending Is a Growing Share of the Economy', S122b, checks['s-12-2b']),
    sec('s-12-2c', '12-2c', 'Healthcare Spending Is Especially High in the United States', S122c, checks['s-12-2c']),
    sec('s-12-2d', '12-2d', 'Out-of-Pocket Spending Is a Declining Share of Health Expenditure', S122d, checks['s-12-2d']),
    sec('s-12-3', '12-3', 'Conclusion: The Policy Debate over Healthcare', S123),
  ],
  examTraps: [
    { title: 'Three terms', body: '**Risk aversion** — why people demand insurance. **Moral hazard** — overuse after being insured (co-pays, access rules). **Adverse selection** — who buys (a mandate).' },
    { title: 'Death spiral calculations', body: 'Price = the pool’s average cost + load. Check the buying condition at each step; stop when the pool stops changing.' },
    { title: 'Baumol', body: 'The cause is **low** productivity growth in services (QQ 6), not demand.' },
    { title: 'Out-of-pocket payments', body: 'The share **fell** (55% → 13%) → moral hazard **grew** (QQ 7).' },
  ],
  mistakes: [
    { wrong: '“People buy insurance to reduce moral hazard.”', right: 'They buy it to reduce **uncertainty**; moral hazard is a side effect of insurance.' },
    { wrong: '“Raising the price of insurance will certainly raise profit.”', right: 'Adverse selection: the healthy leave and costs rise (Problem 2).' },
    { wrong: '“The U.S. spends a lot — so it’s proven to be inefficient.”', right: 'The book: there’s no simple explanation; factors such as lifestyle matter too.' },
    { wrong: '“A mandate eliminates moral hazard.”', right: 'A mandate counters **adverse selection**; moral hazard needs co-pays and rules.' },
  ],
  boxes: [box('cs-vaccine', 'Case Study', 'Vaccine Hesitancy', Vaccine), box('news-pandemic', 'In the News', 'Lessons from the Pandemic of 2020', Pandemic)],
  summary: [
    'The market for healthcare differs from most markets: (1) **externalities** are pervasive (vaccination, medical research); (2) because consumers can’t judge quality, private and public institutions help ensure proper treatment; (3) healthcare is often viewed as a **right** — the government ensures everyone gets it.',
    'Health costs are large and unpredictable; **insurance** reduces financial risk. But **moral hazard** and **adverse selection** reduce the efficiency of insurance markets. Insurers (private or public) set financing, access, and payment rules.',
    'Since 1900 U.S. life expectancy has risen by ~30 years — mainly thanks to medical technology.',
    'Over the past 60 years health spending has grown substantially as a share of national income: **Baumol’s cost disease**, medical technology, an aging population, and rising incomes.',
    'The U.S. spends a larger share of national income on healthcare than other advanced countries; there is no simple explanation — critics and defenders point to different causes.',
    'The share of health spending paid out of pocket has fallen sharply. Some economists argue that excessive reliance on insurance strengthens moral hazard and raises costs.',
  ],
  widgets: { spiral: Spiral, mh: MH, insurance: Ins, facts: Facts },
  gallery: [
    { title: 'Adverse selection: a death-spiral simulator', Component: Spiral },
    { title: 'Moral hazard: co-pays and overuse', Component: MH },
    { title: 'The value of insurance: a fair premium', Component: Ins },
    { title: 'Health spending: across countries and over time', Component: Facts },
  ],
};
