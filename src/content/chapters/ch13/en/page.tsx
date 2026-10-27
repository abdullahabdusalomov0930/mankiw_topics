import { PizzaDWL, SavingTax, TaxBurden, TaxRateCalc } from '../../../../components/graphs/Ch13Widgets';
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
        Al “Scarface” Capone was never convicted of his violent crimes — but he was finally jailed for <b>tax evasion</b>. Ben Franklin (1789): “in this world nothing can be said to be
        certain, except death and taxes.” Back then Americans paid less than 5% of their income in taxes; today all taxes together take more than a quarter of income.
      </p>
      <p>
        Taxes are inevitable: markets rely on property rights and the rule of law (police, courts), and government corrects externalities and provides public goods. Chapters 6, 8, and
        10 showed how taxes work. Now the question: what does a good tax system look like? Two goals — <b>efficiency</b> and <b>equity</b>. Easy to state, hard to achieve.
      </p>
    </div>
  );
}

const S131 = () => (
  <div className="prose-uz">
    <p>
      Figure 1: government (federal + state + local) revenue was <b>7%</b> of GDP in 1902 and nearly <b>30%</b> in recent years. As the economy grew, tax revenue grew even faster.
    </p>
    <p>
      Figure 2 (OECD, 2019) — an international comparison: the U.S. tax burden is lower than in many advanced countries. European countries finance more generous social safety nets
      with higher taxes.
    </p>
    <BookTable
      caption="Figure 2 — Total government tax revenue, % of GDP (2019)"
      head={['Country', '%', 'Country', '%']}
      rows={[
        ['Denmark', '46', 'Canada', '33'],
        ['France', '45', 'Japan', '32'],
        ['Sweden', '43', 'Australia', '29'],
        ['Italy', '42', 'South Korea', '27'],
        ['Germany', '39', 'United States', '**24**'],
        ['Greece', '39', 'Ireland', '23'],
        ['Spain', '35', 'Turkey', '23'],
        ['United Kingdom', '33', 'Chile', '21'],
        ['', '', 'Mexico', '16'],
      ]}
    />
    <Callout kind="note" title="About the figure">
      Figure 2 is printed as an image; the percentages and the order of countries were reconstructed from its text layer. The order of the Spain/UK/Canada and Ireland/Turkey pairs
      couldn't be read reliably from the image (values 35/33/33 and 23/23) — they were placed according to OECD 2019 data.
    </Callout>
  </div>
);

const S131a = () => (
  <div className="prose-uz">
    <p>The federal government collects ~two-thirds of taxes. In 2020, $3.7 trillion — <b>$11,069</b> per person:</p>
    <BookTable
      caption="Table 1 — Receipts of the Federal Government: 2020"
      head={['Tax', 'Amount (billions)', 'Per person', 'Percent']}
      rows={[
        ['Personal income taxes', '$1,690', '$5,106', '46%'],
        ['Social insurance taxes', '1,421', '4,293', '39'],
        ['Corporate income taxes', '199', '601', '5'],
        ['Other', '354', '1,069', '10'],
        ['**Total**', '**$3,664**', '**$11,069**', '**100%**'],
      ]}
    />
    <ul>
      <li>
        The <b>individual income tax</b> is the largest source. Taxable income = total income − amounts for dependents − deductible expenses (mortgage interest, charitable giving).
        Then the Table 2 schedule: each rate applies <b>only to its own bracket</b>.
      </li>
      <li>
        <b>Payroll (social insurance) taxes</b> fund Social Security and Medicare: in 2020, 15.3% up to $137,700 and 2.9% above (+0.9% for high earners). For many middle-class families
        the largest tax.
      </li>
      <li>
        The <b>corporate income tax</b> — profit is taxed twice: on the corporation's profit and on dividends. Compensation: a lower rate on dividends (max 20% vs. 37% on ordinary
        income, +3.8% on both).
      </li>
      <li><b>Other</b> (10%): excise taxes (gasoline, cigarettes, alcohol), the estate tax, customs duties.</li>
    </ul>
    <BookTable
      caption="Table 2 — The Federal Income Tax Rates: 2020 (single taxpayers, as printed in the book)"
      head={['On taxable income…', 'The tax rate is…']}
      rows={[
        ['$0 – $9,875', '10%'],
        ['$9,876 – $40,125', '15%*'],
        ['$40,126 – $85,525', '22%'],
        ['$85,526 – $163,300', '24%'],
        ['$163,301 – $207,350', '32%'],
        ['$207,351 – $518,400', '35%'],
        ['$518,401 and above', '37%'],
      ]}
    />
    <Callout kind="note" title="* About the book's figure">
      The book's table and its notes print the second bracket as 15%; under the actual 2020 law it was 12%. Calculations on this site follow the book's (and the exam's) figure — 15%.
    </Callout>
  </div>
);

const S131b = () => (
  <div className="prose-uz">
    <p>State and local governments collect ~one-third of taxes: $3 trillion in 2020, $9,157 per person.</p>
    <BookTable
      caption="Table 3 — Receipts of State and Local Governments: 2020"
      head={['Tax', 'Amount (billions)', 'Per person', 'Percent']}
      rows={[
        ['Property taxes', '$586', '$1,770', '19%'],
        ['Personal income taxes', '466', '1,408', '15'],
        ['Sales taxes', '426', '1,287', '14'],
        ['Excise taxes', '209', '631', '7'],
        ['Corporate income taxes', '76', '230', '3'],
        ['Federal government', '873', '2,637', '29'],
        ['Other', '395', '1,193', '13'],
        ['**Total**', '**$3,031**', '**$9,157**', '**100%**'],
      ]}
    />
    <p>
      The <b>property tax</b> is a percentage of the value of land and buildings. Some states levy no income tax at all. The <b>sales tax</b> is a percentage of retail purchases
      (sometimes exempting food and clothing). Federal transfers redistribute from richer states to poorer ones and are tied to programs such as Medicaid. “Other”: hunting licenses,
      tolls, bus and subway fares.
    </p>
  </div>
);

const S132a = () => (
  <div className="prose-uz">
    <p>
      One tax system is more efficient than another if it raises the same revenue at <b>a smaller cost</b> to taxpayers. The costs: the tax payment itself (unavoidable) + two more:{' '}
      <b>deadweight losses</b> and the <T id="administrative-burden" />.
    </p>
    <p>
      People respond to incentives: a tax on ice cream → more frozen yogurt; a tax on housing → smaller houses; a tax on labor income → less work, more leisure. The DWL is the
      reduction in taxpayers' welfare beyond the revenue raised.
    </p>
    <PizzaDWL />
    <Callout kind="exam">
      The DWL comes not from the taxpayer (Khalil) but from the person who <b>changed their behavior</b> (Carmen). With an externality, a corrective tax can instead <b>raise</b> efficiency
      (Chapter 10).
    </Callout>
    <BoxLink id="cs-income-consumption">Case Study: Should Income or Consumption Be Taxed?</BoxLink>
  </div>
);

const S132b = () => (
  <div className="prose-uz">
    <p>
      Filling out tax forms is an “unpleasant but necessary chore,” somewhere between flossing and cleaning the toilet. The administrative burden: forms, record-keeping all year,
      government enforcement resources. High earners hire lawyers and accountants — legal <b>tax avoidance</b> (unlike illegal <b>tax evasion</b>). Judge Learned Hand: no one is obliged
      to choose the pattern most profitable to the Treasury.
    </p>
    <p>
      “Loopholes” are sometimes Congress's mistakes, but often deliberate (e.g., the exemption for municipal bonds makes borrowing easier for states but also benefits the rich).
      Resources spent on compliance are also a DWL: the government gets only the tax, while the taxpayer also loses time and money. Simplifying is politically hard — everyone wants to
      close others' loopholes, not their own.
    </p>
  </div>
);

const S132c = () => (
  <div className="prose-uz">
    <p>
      The <T id="average-tax-rate" /> is total tax / total income. The <T id="marginal-tax-rate-13" /> is the tax on an extra dollar. Example: 20% (up to $50k) and 50% (above). Income
      of $60,000: tax $10,000 + $5,000 = $15,000 → average <b>25%</b>, marginal <b>50%</b>.
    </p>
    <p>
      To gauge sacrifice — the average rate; to gauge incentives (work a few more hours?) and the DWL — the <b>marginal rate</b> (rational people think at the margin).
    </p>
    <TaxRateCalc />
    <AskExperts
      title="Top Marginal Tax Rates"
      source="IGM, January 16, 2019"
      statement="Raising the top federal marginal tax on earned personal income to 70 percent (and holding the rest of the current tax code, including the top bracket definition, fixed) would raise substantially more revenue (federal and state, combined) without lowering economic activity."
      agree={21}
      uncertain={16}
      disagree={63}
    />
  </div>
);

const S132d = () => (
  <div className="prose-uz">
    <p>
      $8,000 from everyone — a <T id="lump-sum-tax" />. On $40,000 of income the average rate is 20%, on $80,000 it is 10%; the marginal rate is <b>0</b> for both. The most efficient
      tax: decisions don't affect the amount → no DWL; easy to compute → minimal administrative burden. Why is it rare? Because <b>efficiency isn't everything</b>: taking the same amount
      from the poor and the rich seems unfair to most people.
    </p>
  </div>
);

const S133a = () => (
  <div className="prose-uz">
    <p>
      Senator Russell Long's ditty: “Don't tax you. Don't tax me. Tax that fella behind the tree.” Someone has to pay — how can it be fair? The <T id="benefits-principle" />: pay
      according to the benefit you get from government services (whoever eats a lot of ice cream pays more). Examples: gasoline taxes for roads (because of electric cars, a
      “vehicle-miles-traveled” tax is being proposed); the rich benefit more from the police; if the rich value a society without poverty more, they should fund antipoverty programs
      more too.
    </p>
  </div>
);

const S133b = () => (
  <div className="prose-uz">
    <p>
      The <T id="ability-to-pay-principle" />: “equal sacrifice” — a $1,000 tax on a low-income person may weigh more than a $10,000 tax on a rich one. Two consequences:{' '}
      <T id="vertical-equity" /> and <T id="horizontal-equity" />.
    </p>
    <BookTable
      caption="Table 4 — Three Tax Systems"
      head={['Income', 'Proportional: tax', '%', 'Regressive: tax', '%', 'Progressive: tax', '%']}
      rows={[
        ['$50,000', '$12,500', '25%', '$15,000', '30%', '$10,000', '20%'],
        ['100,000', '25,000', '25', '25,000', '25', '25,000', '25'],
        ['200,000', '50,000', '25', '40,000', '20', '60,000', '30'],
      ]}
    />
    <p>
      <T id="proportional-tax" />, <T id="regressive-tax" />, <T id="progressive-tax" /> — in all three the rich pay a larger <b>amount</b>; the difference is the <b>fraction</b>.
      Which is fair? Economic theory can't say — “equity, like beauty, is in the eye of the beholder.”
    </p>
    <TaxBurden />
    <p>
      <b>Horizontal equity</b> is hard: the Garcias and the Jacksons each earn $100,000. The Garcias have no children but $30,000 in medical bills; the Jacksons have three children, two
      in college — $60,000 in tuition. Is the same tax fair? Who deserves a break? The tax code is full of special rules based on a family's circumstances.
    </p>
    <BoxLink id="cs-tax-burden">Case Study: How the Tax Burden Is Distributed</BoxLink>
  </div>
);

const S133c = () => (
  <div className="prose-uz">
    <p>
      <T id="tax-incidence" /> — who bears the burden — is central to judging equity. Taxes change prices and affect people the law doesn't name as payers. Many discussions rest on the{' '}
      <T id="flypaper-theory" />, which is almost always wrong. A tax on fur coats: if rich buyers switch to other luxuries, the burden falls on fur workers, who aren't rich.
    </p>
    <BoxLink id="cs-corporate">Case Study: Who Pays the Corporate Income Tax?</BoxLink>
  </div>
);

const S134 = () => (
  <div className="prose-uz">
    <p>Equity (especially progressivity) and efficiency often conflict; people weigh them differently. The history of the top marginal rate is a pendulum:</p>
    <BookTable
      head={['Period', 'Top marginal rate', 'Argument']}
      rows={[
        ['1980 (Reagan elected)', '50% (70% on interest)', ''],
        ['Reforms of 1981, 1986 → 1989', '28%', 'Efficiency: high rates distort work and saving'],
        ['1993 (Clinton)', '~40%', 'Vertical equity: the rich aren’t paying their share'],
        ['2003 (G. W. Bush)', '35%', 'Efficiency'],
        ['2013 (Obama)', '~40%', 'Vertical equity'],
        ['2018 (Trump)', '37%', 'Efficiency'],
        ['2021 (Biden proposal)', '45% (above $25 million)', 'Vertical equity'],
      ]}
    />
    <p>
      Economics alone can't determine the best balance — that is a matter of political philosophy too. But economists can show the trade-offs and help avoid policies that{' '}
      <b>sacrifice efficiency without enhancing equity</b>.
    </p>
    <BoxLink id="news-vat">In the News: The Value-Added Tax</BoxLink>
  </div>
);

function IncomeConsumption() {
  return (
    <div className="prose-uz">
      <p>
        The income tax discourages work (Chapter 8) and has another distortion — <b>against saving</b>. If 25-year-old Sammy puts $1,000 away at 6% interest, at 65 he will have $10,286.
        If a quarter of the interest is taxed every year, the effective rate is 4.5% → only $5,816 (43% less).
      </p>
      <SavingTax />
      <p>
        The alternative is a <T id="consumption-tax" />: saved income is untaxed until spent. IRA and 401(k) accounts work this way in the U.S. Europe has the <b>VAT</b>: similar to a
        retail sales tax but collected at every stage of the production chain. Alan Greenspan (2005): a consumption tax would encourage saving and capital accumulation, but the
        transition from the current system would be complex.
      </p>
    </div>
  );
}

function TaxBurdenCase() {
  return (
    <div className="prose-uz">
      <p>
        Table 5 (CBO, 2018): households are divided by income into five equal groups (<b>quintiles</b>), plus the top 1% separately. All federal taxes (income, payroll, corporate,
        excise), excluding state taxes. Market income — wages, business income, interest, capital gains, dividends, pensions.
      </p>
      <BookTable
        caption="Table 5 — The Burden of Federal Taxes"
        head={['Quintile', 'Average market income', 'Taxes, % of income', 'Taxes less transfers, %']}
        rows={[
          ['Lowest', '$16,600', '0.0%', '−127.1%'],
          ['Second', '35,900', '11.1', '−44.0'],
          ['Middle', '63,900', '15.5', '−11.1'],
          ['Fourth', '104,000', '18.8', '4.6'],
          ['Highest', '310,000', '25.4', '21.3'],
          ['Top 1%', '1,987,500', '30.3', '29.7'],
        ]}
      />
      <p>
        The system is progressive. If transfers are counted as negative taxes, the bottom three quintiles receive more than they pay: the lowest quintile's market income is $16,600, and
        after taxes and transfers it is $37,700. The lesson: to understand progressivity fully, count both what people pay and what they receive. (2021: Biden proposed raising taxes on
        the rich and expanding credits for low-income families with children.)
      </p>
    </div>
  );
}

function Corporate() {
  return (
    <div className="prose-uz">
      <p>
        The corporate tax appeals to some voters — “corporations aren't people.” But economists know for sure: <b>all taxes are paid by people</b>. A corporation is less a taxpayer than
        a tax collector; the burden falls on its owners, customers, or workers.
      </p>
      <p>
        If the tax on car companies' income rises: at first the owners earn less profit. Over time they invest less in new factories (shifting to other industries or countries) → the
        supply of cars and the demand for autoworkers fall → car prices rise and autoworkers' wages fall.
      </p>
      <p>
        Trump's 2017 law cut the corporate rate from 35% to 21%. The administration: in the long run capital, productivity, and wages will rise. Critics: these effects are small, and the
        main benefit goes to wealthy owners. Both sides agreed on one thing: judging equity requires careful attention to <b>tax incidence</b>.
      </p>
    </div>
  );
}

function Vat() {
  return (
    <div className="prose-uz">
      <Source>Seema Jayachandran, “How about This? A Tax That Discourages Tax Evasion,” New York Times, May 19, 2019</Source>
      <ul>
        <li>Nearly every major country has a VAT; the U.S. doesn't. Rich countries collect an average of 34% of GDP (the U.S. ~27%), low- and middle-income countries 10–20% — the informal economy is large and evasion is easy.</li>
        <li>
          A VAT taxes the value added at each stage: a wholesale bakery pays on bread sales minus the cost of flour and yeast. The sum over the whole chain is the retail price, so it is a{' '}
          <b>consumption tax</b>. The tax is collected from relatively few firms; in the U.S. the self-employed and farmers underreport more than 60% of their income.
        </li>
        <li>
          <b>Self-enforcement</b>: the baker reports its flour purchases (to get the deduction) — which reveals the flour producer's revenue. Dina Pomeranz (Chile, 2015): audit letters
          barely changed B2B reporting, but stores selling to consumers reported more revenue — the “last mile” problem.
        </li>
        <li>São Paulo (2007): ~1% rebates and lotteries for shoppers who asked for receipts — collections from retail rose 21% (Joana Naritomi).</li>
        <li>The drawback: a VAT can be regressive; it can be paired with tax credits for low-income people (William Gale).</li>
      </ul>
      <Callout kind="tip" title="Questions to discuss">
        <ol>
          <li>Would you support introducing a VAT in the U.S.? Why or why not?</li>
          <li>Why do you think the U.S. is one of the few countries without a VAT? (Uzbekistan has a VAT — QQS.)</li>
        </ol>
      </Callout>
    </div>
  );
}

const Rates = () => <TaxRateCalc />;
const Dwl = () => <PizzaDWL />;
const Saving = () => <SavingTax />;
const Burden = () => <TaxBurden />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    'Know the structure of the U.S. tax system: federal (income, payroll, corporate) and state/local (property, income, sales) taxes',
    'Explain the two costs of a tax beyond the payment — the **DWL** and the **administrative burden**',
    'Compute **average** and **marginal tax rates**; show why a **lump-sum tax** is the most efficient',
    'The **benefits** and **ability-to-pay** principles; **vertical/horizontal equity**; proportional, regressive, and progressive taxes',
    '**Tax incidence** and the flypaper mistake; the trade-off between efficiency and equity',
  ],
  sections: [
    sec('s-13-1', '13-1', 'U.S. Taxation: The Big Picture', S131),
    sec('s-13-1a', '13-1a', 'Taxes Collected by the Federal Government', S131a, checks['s-13-1a']),
    sec('s-13-1b', '13-1b', 'Taxes Collected by State and Local Governments', S131b, checks['s-13-1b']),
    sec('s-13-2a', '13-2a', 'Deadweight Losses', S132a, checks['s-13-2a']),
    sec('s-13-2b', '13-2b', 'Administrative Burden', S132b, checks['s-13-2b']),
    sec('s-13-2c', '13-2c', 'Marginal Tax Rates versus Average Tax Rates', S132c, checks['s-13-2c']),
    sec('s-13-2d', '13-2d', 'Lump-Sum Taxes', S132d, checks['s-13-2d']),
    sec('s-13-3a', '13-3a', 'The Benefits Principle', S133a, checks['s-13-3a']),
    sec('s-13-3b', '13-3b', 'The Ability-to-Pay Principle', S133b, checks['s-13-3b']),
    sec('s-13-3c', '13-3c', 'Tax Incidence and Tax Equity', S133c, checks['s-13-3c']),
    sec('s-13-4', '13-4', 'Conclusion: The Trade-Off between Equity and Efficiency', S134),
  ],
  examTraps: [
    { title: 'Bracket schedules', body: 'Each rate applies only to income **within its own bracket**. Don’t apply the top rate to all income.' },
    { title: 'ATR vs. MTR', body: 'Sacrifice → average; incentives and DWL → marginal. Lump-sum: MTR = 0, ATR > 0 (QQ 5).' },
    { title: 'The QQ 3 trap', body: 'DWL = the departing buyer’s CS **+** the seller’s PS from that trade: $10 + $10 = $20.' },
    { title: 'Federal sources', body: 'The two largest: the individual income tax (46%) and payroll taxes (39%). Corporate — 5%.' },
    { title: 'Three systems', body: 'In all of them the rich pay a larger **amount**; the difference is the **fraction of income**.' },
  ],
  mistakes: [
    { wrong: '“If I move into a higher bracket, all my income is taxed more.”', right: 'Only the part above the threshold is taxed at the higher rate.' },
    { wrong: '“Under a regressive tax the rich pay a smaller amount.”', right: 'They may pay a larger amount but a smaller **fraction** (Table 4).' },
    { wrong: '“Corporations pay the corporate tax.”', right: 'People — owners, customers, workers — bear the burden.' },
    { wrong: '“A lump-sum tax is fair, so it’s used everywhere.”', right: 'It’s the most **efficient**, but most people consider it **unfair**.' },
  ],
  boxes: [
    box('cs-income-consumption', 'Case Study', 'Should Income or Consumption Be Taxed?', IncomeConsumption),
    box('cs-tax-burden', 'Case Study', 'How the Tax Burden Is Distributed', TaxBurdenCase),
    box('cs-corporate', 'Case Study', 'Who Pays the Corporate Income Tax?', Corporate),
    box('news-vat', 'In the News', 'The Value-Added Tax', Vat),
  ],
  summary: [
    'Governments raise revenue with various taxes. The most important for the U.S. federal government are **individual income taxes** and **social insurance (payroll) taxes**; for state and local governments, **property**, individual income, and **sales** taxes.',
    'The efficiency of a tax system depends on the costs it imposes on taxpayers. Beyond the transfer of resources to the government there are two costs: the **DWL** from distorted incentives and the **administrative burden** of complying with tax laws.',
    'Equity concerns whether the tax burden is distributed fairly. The **benefits principle**: pay according to the benefits received from government; the **ability-to-pay principle**: pay according to the capacity to bear the burden. When judging equity, remember the lesson of **tax incidence**: the distribution of tax burdens is not the same as the distribution of tax bills.',
    'When changing tax laws, policymakers often face a trade-off between **efficiency and equity**; much of the debate arises because people weigh these two goals differently.',
  ],
  widgets: { rates: Rates, dwl: Dwl, saving: Saving, burden: Burden },
  gallery: [
    { title: 'Marginal and average tax rate calculator', Component: Rates },
    { title: 'Where the DWL comes from: pizza and piano lessons', Component: Dwl },
    { title: 'Taxing interest and saving (Sammy Saver)', Component: Saving },
    { title: 'Distribution of the federal tax burden (Table 5)', Component: Burden },
  ],
};
