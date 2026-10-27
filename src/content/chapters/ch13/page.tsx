import { PizzaDWL, SavingTax, TaxBurden, TaxRateCalc } from '../../../components/graphs/Ch13Widgets';
import { Callout } from '../../../components/ui/Kit';
import { AskExperts, BookTable, BoxLink, Source } from '../../../components/ui/Lesson';
import { T } from '../../../components/ui/Term';
import type { ChapterPageContent } from '../../types';
import { checks } from './quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        Al “Scarface” Capone zo'ravonlik jinoyatlari uchun hech qachon sudlanmagan — lekin oxiri <b>soliqdan bo'yin tovlash</b> uchun qamalgan. Ben Franklin (1789): “bu dunyoda o'lim va
        soliqlardan boshqa hech narsa aniq emas”. O'shanda amerikaliklar daromadining 5% dan kamini soliqqa to'lardi; bugun barcha soliqlar daromadning chorak qismidan ko'pini oladi.
      </p>
      <p>
        Soliqlar muqarrar: bozorlar mulk huquqi va qonun ustuvorligiga tayanadi (politsiya, sud), davlat tashqi effektlarni tuzatadi va jamoat tovarlarini ta'minlaydi. 6, 8 va 10-boblarda soliqlarning
        ta'sirini ko'rdik. Endi savol: yaxshi soliq tizimi qanday bo'ladi? Ikki maqsad — <b>samaradorlik</b> va <b>adolat</b>. Ularni aytish oson, bajarish qiyin.
      </p>
    </div>
  );
}

const S131 = () => (
  <div className="prose-uz">
    <p>
      Figure 1: davlat (federal + shtat + mahalliy) tushumi 1902-yilda YaIMning <b>7%</b> i edi, so'nggi yillarda — deyarli <b>30%</b>. Iqtisodiyot o'sgani sari soliq tushumi undan ham tezroq o'sgan.
    </p>
    <p>
      Figure 2 (OECD, 2019) — xalqaro taqqoslash: AQSh soliq yuki ko'p rivojlangan davlatlardan past. Yevropa davlatlari yuqori soliqlar bilan saxiyroq ijtimoiy himoyani moliyalaydi.
    </p>
    <BookTable
      caption="Figure 2 — Total government tax revenue, % of GDP (2019)"
      head={['Mamlakat', '%', 'Mamlakat', '%']}
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
    <Callout kind="note" title="Rasm haqida">
      Figure 2 rasm sifatida berilgan; foizlar va mamlakatlar ketma-ketligi matn qatlamidan tiklangan. Spain/UK/Canada va Ireland/Turkey juftliklari tartibi rasmdan ishonchli o'qilmadi (qiymatlar 35/33/33
      va 23/23) — OECD 2019 ma'lumotiga mos joylashtirildi.
    </Callout>
  </div>
);

const S131a = () => (
  <div className="prose-uz">
    <p>Federal hukumat soliqlarning ~uchdan ikkisini yig'adi. 2020-yilda $3.7 trln — kishi boshiga <b>$11,069</b>:</p>
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
        <b>Shaxsiy daromad solig'i</b> — eng katta manba. Taxable income = jami daromad − qaramog'idagilar uchun summa − chegiriladigan xarajatlar (ipoteka foizi, xayriya). Keyin Table 2 shkalasi:
        har bir stavka <b>faqat o'z oralig'iga</b> qo'llanadi.
      </li>
      <li>
        <b>Payroll (social insurance) soliqlari</b> — Social Security va Medicare uchun: 2020-yilda $137,700 gacha 15.3%, undan yuqorisiga 2.9% (+0.9% yuqori daromadlilarga). Ko'p o'rta sinf oilalari uchun eng katta soliq.
      </li>
      <li>
        <b>Korporativ daromad solig'i</b> — foyda ikki marta soliqqa tortiladi: korporatsiya foydasida va dividendda. Kompensatsiya: dividendga past stavka (max 20% vs oddiy daromadda 37%, ikkalasiga +3.8%).
      </li>
      <li><b>Boshqalar</b> (10%): aksizlar (benzin, sigaret, alkogol), meros solig'i, bojxona to'lovlari.</li>
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
    <Callout kind="note" title="* Kitobdagi raqam haqida">
      Kitob jadvalida va izohida ikkinchi pog'ona 15% deb chop etilgan; 2020-yilgi haqiqiy qonunda bu stavka 12% edi. Saytdagi hisob-kitoblar kitob (va imtihon) raqami bo'yicha — 15%.
    </Callout>
  </div>
);

const S131b = () => (
  <div className="prose-uz">
    <p>Shtat va mahalliy hukumatlar soliqlarning ~uchdan birini yig'adi: 2020-yilda $3 trln, kishi boshiga $9,157.</p>
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
      <b>Mulk solig'i</b> — yer va binolar qiymatining foizi. Ba'zi shtatlar daromad solig'ini umuman olmaydi. <b>Savdo solig'i</b> chakana xaridlar foizi (ba'zan oziq-ovqat va kiyim istisno).
      Federal transfertlar boy shtatlardan kambag'al shtatlarga qayta taqsimlaydi va Medicaid kabi dasturlarga bog'langan. “Other”: ov litsenziyalari, yo'l to'lovlari, avtobus va metro yo'l haqi.
    </p>
  </div>
);

const S132a = () => (
  <div className="prose-uz">
    <p>
      Bir soliq tizimi bir xil tushumni soliq to'lovchilarga <b>kamroq xarajat</b> bilan yig'sa — samaraliroq. Xarajatlar: soliqning o'zi (muqarrar) + ikkita qo'shimcha: <b>deadweight losses</b> va{' '}
      <T id="administrative-burden" />.
    </p>
    <p>
      Odamlar rag'batlarga javob beradi: muzqaymoqqa soliq → ko'proq muzlatilgan yogurt; uy-joyga soliq → kichikroq uylar; mehnat daromadiga soliq → kamroq ish, ko'proq dam. DWL — soliq to'lovchilar
      farovonligining tushumdan oshgan qismi.
    </p>
    <PizzaDWL />
    <Callout kind="exam">
      DWL soliq to'lovchidan (Khalil) emas, <b>xatti-harakatini o'zgartirgan</b>dan (Carmen) keladi. Tashqi effekt bo'lsa, korrektiv soliq aksincha samaradorlikni <b>oshirishi</b> mumkin (10-bob).
    </Callout>
    <BoxLink id="cs-income-consumption">Case Study: Should Income or Consumption Be Taxed?</BoxLink>
  </div>
);

const S132b = () => (
  <div className="prose-uz">
    <p>
      Soliq formalarini to'ldirish — tish ipi va hojatxona tozalash orasidagi “yoqimsiz, lekin muhim ish”. Ma'muriy yuk: formalar, yil davomida hujjat yuritish, davlatning nazorat resurslari.
      Yuqori daromadlilar advokat va buxgalterlar yollaydi — qonuniy <b>tax avoidance</b> (noqonuniy <b>tax evasion</b> dan farqli). Sudya Learned Hand: hech kim xazinaga eng foydali yo'lni tanlashga
      majbur emas.
    </p>
    <p>
      “Loopholes” ba'zan Kongress xatosi, ko'pincha ataylab (masalan, munitsipal obligatsiyalarga imtiyoz shtatlarga qarz olishni osonlashtiradi, lekin boylarga ham foydali). Rioya qilishga sarflangan
      resurslar ham DWL: davlat faqat soliqni oladi, to'lovchi esa vaqt va pulni ham yo'qotadi. Soddalashtirish siyosiy jihatdan qiyin — hamma boshqalarning loophole'ini yopishni xohlaydi, o'zinikini emas.
    </p>
  </div>
);

const S132c = () => (
  <div className="prose-uz">
    <p>
      <T id="average-tax-rate" /> — jami soliq / jami daromad. <T id="marginal-tax-rate-13" /> — qo'shimcha dollardan soliq. Misol: 20% ($50k gacha) va 50% (undan yuqori). $60,000 daromad: soliq
      $10,000 + $5,000 = $15,000 → o'rtacha <b>25%</b>, marjinal <b>50%</b>.
    </p>
    <p>
      Qurbonlikni o'lchash uchun — o'rtacha stavka; rag'batlarni (bir necha soat ko'proq ishlashmi?) va DWL ni o'lchash uchun — <b>marjinal stavka</b> (ratsional odamlar marjinal fikrlaydi).
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
      Hammadan $8,000 — <T id="lump-sum-tax" />. $40,000 daromadda o'rtacha stavka 20%, $80,000 da 10%; ikkalasida marjinal stavka <b>0</b>. Eng samarali soliq: qarorlar summaga ta'sir qilmaydi →
      DWL yo'q; hisoblash oson → ma'muriy yuk minimal. Nega kam? Chunki <b>samaradorlik hammasi emas</b>: kambag'al va boydan bir xil summa olish ko'pchilikka adolatsiz tuyuladi.
    </p>
  </div>
);

const S133a = () => (
  <div className="prose-uz">
    <p>
      Senator Russell Long qo'shig'i: “Don't tax you. Don't tax me. Tax that fella behind the tree.” Kimdir to'lashi kerak — qanday qilib adolatli? <T id="benefits-principle" />: davlat xizmatidan
      olgan foydangizga qarab to'lang (ko'p muzqaymoq yegan ko'proq to'laydi). Misollar: benzin solig'i yo'llarga (elektromobillar tufayli “bosib o'tilgan mil” solig'i taklif qilinmoqda); boylar
      politsiyadan ko'proq foyda ko'radi; agar boylar qashshoqliksiz jamiyatni ko'proq qadrlasa — qashshoqlikka qarshi dasturlarni ham ular ko'proq moliyalashi kerak.
    </p>
  </div>
);

const S133b = () => (
  <div className="prose-uz">
    <p>
      <T id="ability-to-pay-principle" />: “teng qurbonlik” — kam daromadlining $1,000 solig'i boyning $10,000 solig'idan og'irroq bo'lishi mumkin. Ikki natija: <T id="vertical-equity" /> va{' '}
      <T id="horizontal-equity" />.
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
      <T id="proportional-tax" />, <T id="regressive-tax" />, <T id="progressive-tax" /> — uchalasida ham boylar ko'proq <b>summa</b> to'laydi; farq — <b>ulushda</b>. Qaysi biri adolatli? Iqtisodiy nazariya
      javob bermaydi — “adolat, go'zallik kabi, ko'ruvchining ko'zida”.
    </p>
    <TaxBurden />
    <p>
      <b>Gorizontal tenglik</b> qiyin: Garcialar va Jacksonlar daromadi $100,000. Garcialarda farzand yo'q, lekin $30,000 tibbiy xarajat; Jacksonlarda uch farzand, ikkitasi kollejda — $60,000
      kontrakt. Bir xil soliq adolatlimi? Kimga imtiyoz kerak? Soliq kodeksi oilaning holatiga qarab ko'p maxsus qoidalarga to'la.
    </p>
    <BoxLink id="cs-tax-burden">Case Study: How the Tax Burden Is Distributed</BoxLink>
  </div>
);

const S133c = () => (
  <div className="prose-uz">
    <p>
      <T id="tax-incidence" /> — yukni kim ko'taradi — adolatni baholashda markaziy. Soliq narxlarni o'zgartirib, qonunda to'lovchi deb ko'rsatilmaganlarga ham ta'sir qiladi. Ko'p muhokamalar{' '}
      <T id="flypaper-theory" />ga asoslanadi — bu deyarli har doim noto'g'ri. Mo'yna paltoga soliq: boy xaridorlar boshqa hashamatga o'tsa, yuk boy bo'lmagan mo'yna ishchilariga tushadi.
    </p>
    <BoxLink id="cs-corporate">Case Study: Who Pays the Corporate Income Tax?</BoxLink>
  </div>
);

const S134 = () => (
  <div className="prose-uz">
    <p>
      Adolat (ayniqsa progressivlik) va samaradorlik ko'pincha to'qnashadi; odamlar ularga turlicha vazn beradi. Top marjinal stavka tarixi — mayatnik:
    </p>
    <BookTable
      head={['Davr', 'Top marjinal stavka', 'Dalil']}
      rows={[
        ['1980 (Reagan saylandi)', '50% (foizga 70%)', ''],
        ['1981, 1986 islohotlari → 1989', '28%', 'Samaradorlik: yuqori stavka ish va jamg‘armani buzadi'],
        ['1993 (Clinton)', '~40%', 'Vertikal tenglik: boylar ulushini to‘lamayapti'],
        ['2003 (G. W. Bush)', '35%', 'Samaradorlik'],
        ['2013 (Obama)', '~40%', 'Vertikal tenglik'],
        ['2018 (Trump)', '37%', 'Samaradorlik'],
        ['2021 (Biden taklifi)', '45% ($25 mln dan yuqori)', 'Vertikal tenglik'],
      ]}
    />
    <p>
      Iqtisodiyot yolg'iz eng yaxshi muvozanatni aniqlay olmaydi — bu siyosiy falsafa ham. Lekin iqtisodchilar trade-offlarni ko'rsatib, <b>tenglikni oshirmasdan samaradorlikni qurbon qiladigan</b>{' '}
      siyosatlardan saqlanishga yordam beradi.
    </p>
    <BoxLink id="news-vat">In the News: The Value-Added Tax</BoxLink>
  </div>
);

function IncomeConsumption() {
  return (
    <div className="prose-uz">
      <p>
        Daromad solig'i ishlashga rag'batni kamaytiradi (8-bob) va yana bir buzilish — <b>jamg'armaga qarshi</b>. 25 yoshli Sammy $1,000 ni 6% foizga qo'ysa, 65 yoshda $10,286 bo'ladi. Foizning
        to'rtdan biri har yili soliqqa olinsa, samarali stavka 4.5% → atigi $5,816 (43% kam).
      </p>
      <SavingTax />
      <p>
        Muqobil — <T id="consumption-tax" />: jamg'arilgan daromad sarflanguncha soliqsiz. AQShda IRA va 401(k) hisoblari shunday ishlaydi. Yevropa — <b>VAT</b>: chakana savdo solig'iga o'xshash, lekin
        ishlab chiqarish zanjirining har bosqichida yig'iladi. Alan Greenspan (2005): iste'mol solig'i jamg'arma va kapital to'planishini rag'batlantiradi, lekin hozirgi tizimdan o'tish murakkab.
      </p>
    </div>
  );
}

function TaxBurdenCase() {
  return (
    <div className="prose-uz">
      <p>
        Table 5 (CBO, 2018): uy xo'jaliklari daromadi bo'yicha beshta teng guruhga (<b>quintiles</b>) bo'lingan, alohida — top 1%. Barcha federal soliqlar (daromad, payroll, korporativ, aksiz), shtat
        soliqlarisiz. Market income — ish haqi, biznes daromadi, foiz, kapital daromadi, dividend, pensiya.
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
        Tizim progressiv. Transfertlar manfiy soliq sifatida hisoblansa, pastki uchta kvintil to'laganidan ko'proq oladi: eng past kvintilning bozor daromadi $16,600, soliq va transfertlardan keyin — $37,700.
        Saboq: progressivlikni to'liq tushunish uchun nima to'lanishini ham, nima olinishini ham hisobga oling. (2021: Bayden boylarga soliqni oshirish va farzandli kam daromadlilarga kreditlarni kengaytirishni taklif qildi.)
      </p>
    </div>
  );
}

function Corporate() {
  return (
    <div className="prose-uz">
      <p>
        Korporativ soliq ba'zi saylovchilarga yoqadi — “korporatsiya odam emas”. Lekin iqtisodchilar aniq biladi: <b>barcha soliqlarni odamlar to'laydi</b>. Korporatsiya — soliq to'lovchi emas, ko'proq
        soliq yig'uvchi; yuk egalari, xaridorlari yoki ishchilariga tushadi.
      </p>
      <p>
        Avtomobil kompaniyalari daromadiga soliq oshirilsa: avval egalar kamroq foyda oladi. Vaqt o'tib ular yangi zavodlarga kamroq investitsiya qiladi (boshqa soha yoki mamlakatlarga yo'naltiradi) →
        mashina taklifi va avtoishchilarga talab kamayadi → mashina narxi oshadi, avtoishchilar maoshi tushadi.
      </p>
      <p>
        2017-yilgi Trump qonuni korporativ stavkani 35% dan 21% ga tushirdi. Ma'muriyat: uzoq muddatda kapital, unumdorlik va maosh oshadi. Tanqidchilar: bu ta'sirlar kichik, asosiy foyda boy egalarga. Ikkala
        tomon bir narsada kelishdi: adolatni baholash uchun <b>tax incidence</b>ga diqqat bilan qarash kerak.
      </p>
    </div>
  );
}

function Vat() {
  return (
    <div className="prose-uz">
      <Source>Seema Jayachandran, “How about This? A Tax That Discourages Tax Evasion,” New York Times, May 19, 2019</Source>
      <ul>
        <li>Deyarli barcha yirik davlatlarda VAT bor, AQShda yo'q. Boy davlatlar YaIMning o'rtacha 34% ini (AQSh ~27%), kam va o'rta daromadli davlatlar 10–20% ini yig'adi — norasmiy iqtisodiyot ko'p, evasion oson.</li>
        <li>
          VAT har bosqichda qo'shilgan qiymatni soliqqa tortadi: ulgurji novvoyxona — non sotuvi minus un, xamirturush xarajati. Butun zanjir yig'indisi — chakana narx, ya'ni bu <b>iste'mol solig'i</b>.
          Soliq oz sonli firmalardan yig'iladi; AQShda o'z-o'zini band qilganlar va fermerlar daromadi 60% dan ko'p kam ko'rsatiladi.
        </li>
        <li>
          <b>O'z-o'zini nazorat</b>: novvoy un xaridini e'lon qiladi (chegirma uchun) — bu un ishlab chiqaruvchining daromadini oshkor qiladi. Dina Pomeranz (Chili, 2015): tekshiruv xatlari B2B
          hisobotlarni deyarli o'zgartirmadi, lekin iste'molchiga sotuvchi do'konlar ko'proq daromad ko'rsatdi — “oxirgi mil” muammosi.
        </li>
        <li>São Paulo (2007): chek so'ragan xaridorga ~1% qaytarish va lotereya — chakana savdodan yig'im 21% oshdi (Joana Naritomi).</li>
        <li>Kamchiligi: VAT regressiv bo'lishi mumkin; uni kam daromadlilarga soliq krediti bilan juftlash mumkin (William Gale).</li>
      </ul>
      <Callout kind="tip" title="Muhokama uchun savollar">
        <ol>
          <li>AQShda VAT joriy etilishini qo'llaysizmi? Nega?</li>
          <li>Nega AQSh VAT yo'q kam davlatlardan biri deb o'ylaysiz? (O'zbekistonda QQS — VAT mavjud.)</li>
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
    "AQSh soliq tizimi tuzilishini bilish: federal (daromad, payroll, korporativ) va shtat/mahalliy (mulk, daromad, savdo) soliqlari",
    "Soliqning to'lovdan tashqari ikki xarajati — **DWL** va **administrative burden** — ni tushuntirish",
    "**Average** va **marginal tax rate** ni hisoblash; nega **lump-sum tax** eng samarali ekanini ko'rsatish",
    "**Benefits** va **ability-to-pay** tamoyillari; **vertical/horizontal equity**; proporsional, regressiv, progressiv soliqlar",
    "**Tax incidence** va flypaper xatosi; samaradorlik va adolat o'rtasidagi trade-off",
  ],
  sections: [
    { id: "s-13-1", code: "13-1", titleEn: "U.S. Taxation: The Big Picture", titleUz: "AQSh soliqlari: umumiy manzara", Body: S131 },
    { id: "s-13-1a", code: "13-1a", titleEn: "Taxes Collected by the Federal Government", titleUz: "Federal hukumat soliqlari", Body: S131a, check: checks["s-13-1a"] },
    { id: "s-13-1b", code: "13-1b", titleEn: "Taxes Collected by State and Local Governments", titleUz: "Shtat va mahalliy soliqlar", Body: S131b, check: checks["s-13-1b"] },
    { id: "s-13-2a", code: "13-2a", titleEn: "Deadweight Losses", titleUz: "Sof yo'qotishlar", Body: S132a, check: checks["s-13-2a"] },
    { id: "s-13-2b", code: "13-2b", titleEn: "Administrative Burden", titleUz: "Ma'muriy yuk", Body: S132b, check: checks["s-13-2b"] },
    { id: "s-13-2c", code: "13-2c", titleEn: "Marginal Tax Rates versus Average Tax Rates", titleUz: "Marjinal va o'rtacha stavkalar", Body: S132c, check: checks["s-13-2c"] },
    { id: "s-13-2d", code: "13-2d", titleEn: "Lump-Sum Taxes", titleUz: "Lump-sum soliqlar", Body: S132d, check: checks["s-13-2d"] },
    { id: "s-13-3a", code: "13-3a", titleEn: "The Benefits Principle", titleUz: "Foyda tamoyili", Body: S133a, check: checks["s-13-3a"] },
    { id: "s-13-3b", code: "13-3b", titleEn: "The Ability-to-Pay Principle", titleUz: "To'lov qobiliyati tamoyili", Body: S133b, check: checks["s-13-3b"] },
    { id: "s-13-3c", code: "13-3c", titleEn: "Tax Incidence and Tax Equity", titleUz: "Soliq yuki va adolat", Body: S133c, check: checks["s-13-3c"] },
    { id: "s-13-4", code: "13-4", titleEn: "Conclusion: The Trade-Off between Equity and Efficiency", titleUz: "Xulosa: adolat va samaradorlik", Body: S134 },
  ],
  examTraps: [
    { title: "Pog'onali shkala", body: "Har bir stavka faqat **o'z oralig'idagi** daromadga. Butun daromadga eng yuqori stavkani qo'llamang." },
    { title: "ATR vs MTR", body: "Qurbonlik → o'rtacha; rag'bat va DWL → marjinal. Lump-sum: MTR = 0, ATR > 0 (QQ 5)." },
    { title: "QQ 3 tuzog'i", body: "DWL = ketgan xaridorning CS **+** sotuvchining shu savdodan PS: $10 + $10 = $20." },
    { title: "Federal manbalar", body: "Ikki eng katta: shaxsiy daromad solig'i (46%) va payroll (39%). Korporativ — 5%." },
    { title: "Uch tizim", body: "Hammasida boylar ko'proq **summa** to'laydi; farq — **daromad ulushi**." },
  ],
  mistakes: [
    { wrong: "“Yuqori pog'onaga o'tsam, butun daromadim ko'proq soliqqa tortiladi.”", right: "Faqat chegaradan oshgan qismi yuqori stavkada." },
    { wrong: "“Regressiv soliqda boylar kamroq summa to'laydi.”", right: "Ular ko'proq summa, lekin kamroq **ulush** to'lashi mumkin (Table 4)." },
    { wrong: "“Korporativ soliqni korporatsiyalar to'laydi.”", right: "Yukni odamlar — egalar, xaridorlar, ishchilar — ko'taradi." },
    { wrong: "“Lump-sum soliq adolatli, shuning uchun hamma joyda qo'llanadi.”", right: "Eng **samarali**, lekin ko'pchilik uni **adolatsiz** deb biladi." },
  ],
  boxes: [
    { id: "cs-income-consumption", kind: "Case Study", titleEn: "Should Income or Consumption Be Taxed?", titleUz: "Daromadni yoki iste'molni soliqqa tortish kerakmi?", Body: IncomeConsumption },
    { id: "cs-tax-burden", kind: "Case Study", titleEn: "How the Tax Burden Is Distributed", titleUz: "Soliq yuki qanday taqsimlangan", Body: TaxBurdenCase },
    { id: "cs-corporate", kind: "Case Study", titleEn: "Who Pays the Corporate Income Tax?", titleUz: "Korporativ soliqni kim to'laydi?", Body: Corporate },
    { id: "news-vat", kind: "In the News", titleEn: "The Value-Added Tax", titleUz: "Qo'shilgan qiymat solig'i", Body: Vat },
  ],
  summary: [
    "Hukumat turli soliqlar bilan daromad yig'adi. AQSh federal hukumati uchun eng muhimlari — **shaxsiy daromad solig'i** va **ijtimoiy sug'urta (payroll) soliqlari**; shtat va mahalliy hukumatlar uchun — **mulk**, shaxsiy daromad va **savdo** soliqlari.",
    "Soliq tizimining samaradorligi u soliq to'lovchilarga yuklaydigan xarajatlarga bog'liq. Resurslarning davlatga o'tishidan tashqari ikki xarajat bor: rag'batlar buzilishidan kelib chiqadigan **DWL** va soliq qonunlariga rioya qilishning **ma'muriy yuki**.",
    "Adolat — soliq yuki adolatli taqsimlanganmi. **Benefits principle**: davlatdan olgan foydaga qarab to'lash; **ability-to-pay principle**: moliyaviy yukni ko'tara olishga qarab. Adolatni baholashda **tax incidence** saboqini unutmang: soliq yukining taqsimoti soliq hisob-varaqlari taqsimoti bilan bir xil emas.",
    "Soliq qonunlarini o'zgartirishda siyosatchilar ko'pincha **samaradorlik va adolat** o'rtasidagi trade-offga duch keladi; bahsning katta qismi odamlar bu ikki maqsadga turlicha vazn berishidan kelib chiqadi.",
  ],
  widgets: { rates: Rates, dwl: Dwl, saving: Saving, burden: Burden },
  gallery: [
    { title: "Marjinal va o'rtacha soliq stavkasi kalkulyatori", Component: Rates },
    { title: "DWL qayerdan keladi: pizza va piano darslari", Component: Dwl },
    { title: "Foiz solig'i va jamg'arma (Sammy Saver)", Component: Saving },
    { title: "Federal soliq yuki taqsimoti (Table 5)", Component: Burden },
  ],
};
