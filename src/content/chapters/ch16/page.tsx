import { MonopolyLab, MonopolyRevenue, NaturalMonopolyRegulation, PriceDiscrimination } from '../../../components/graphs/MonopolyWidgets';
import { Callout } from '../../../components/ui/Kit';
import { AskExperts, BookTable, BoxLink, Source } from '../../../components/ui/Lesson';
import { Math as M } from '../../../components/ui/Math';
import { T } from '../../../components/ui/Term';
import type { ChapterPageContent } from '../../types';
import { checks } from './quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        1990-yillarda shaxsiy kompyuteringiz deyarli albatta Windows'da ishlagan. Microsoft mualliflik huquqiga ega — Windows nusxasini faqat u sotadi, ~$100 dan. Qo'shimcha nusxaning marjinal xarajati deyarli
        nol, narx esa undan ko'p marta yuqori. Raqobatchi firma — <b>price taker</b>, monopoliya — <b>price maker</b>.
      </p>
      <p>
        Lekin nega Microsoft $1,000 yoki $10,000 so'ramaydi? Chunki yuqori narx talabni kamaytiradi: odamlar kamroq kompyuter oladi, boshqa tizimga o'tadi yoki noqonuniy nusxa ko'chiradi. Monopoliya narxni
        nazorat qiladi, lekin foydasi cheksiz emas. Raqobatli bozorda ko'rinmas qo'l umumiy farovonlikka olib boradi; monopoliyada esa — ko'pincha yo'q. Hukumat bunga qanday javob beradi? (1994: Microsoft–Intuit
        birlashishini to'xtatish; 1998: Internet Explorer ishi; bugun — Apple, Google, Amazon.)
      </p>
    </div>
  );
}

const S161 = () => (
  <div className="prose-uz">
    <p>
      <T id="monopoly-firm" /> — yaqin o'rinbosari yo'q mahsulotning yagona sotuvchisi. Asosiy sabab — <T id="barriers-to-entry" />: (1) kalit resurs; (2) davlat yagona huquq beradi; (3) ishlab chiqarish
      jarayoni — bitta firma ko'p firmadan arzonroq.
    </p>
  </div>
);

const S161a = () => (
  <div className="prose-uz">
    <p>
      Shaharchada o'nlab quduq bo'lsa — raqobat, narx = qo'shimcha galonni tortish MC i. Yagona quduq bo'lsa — uning egasi monopolist: zarur tovar uchun yuqori narx so'ray oladi. Klassik misol — <b>DeBeers</b> (1888,
      Cecil Rhodes): dunyo olmos qazib olishining 80% gacha nazorat qilgan — to'liq monopoliya emas, lekin narxga katta ta'sir. Amalda bunday monopoliyalar kam: iqtisodiyotlar katta, resurslar ko'p kishiga tegishli,
      tovarlar xalqaro savdoda.
    </p>
  </div>
);

const S161b = () => (
  <div className="prose-uz">
    <p>
      Davlat bitta firmaga yagona huquq beradi — ba'zan siyosiy yaqinlik uchun (qirollar do'stlariga), ba'zan jamoat manfaati uchun: <T id="patent" /> (yangi dori, 20 yil) va mualliflik huquqi (roman). Natija: yuqori
      narx va foyda (xarajat), lekin tadqiqot va ijodga rag'bat (foyda). Kambag'al yozuvchi o'zini monopolist deb sezmasligi mumkin — yagona sotuvchi bo'lish ko'p xaridorni kafolatlamaydi.
    </p>
  </div>
);

const S161c = () => (
  <div className="prose-uz">
    <p>
      <T id="natural-monopoly" /> — kerakli hajm oralig'ida ATC tushib boradi (Figure 1): firmalar ko'p bo'lsa, har biri kamroq ishlab chiqaradi va ATC yuqori. Suv quvurlari tarmog'i; kamdan-kam ishlatiladigan
      pullik ko'prik (klub tovari — 11-bob). Tabiiy monopolist yangi raqiblardan kamroq qo'rqadi: kirgan firma bozorning kichik qismini oladi va uning xarajati yuqori. Bozor kattalashsa — tabiiy monopoliya
      raqobatli bozorga aylanishi mumkin.
    </p>
  </div>
);

const S162a = () => (
  <div className="prose-uz">
    <p>
      Raqobatchi firma gorizontal (mukammal elastik) talab egri chizig'iga duch keladi — bozor narxida xohlagancha sotadi. Monopolist — <b>bozor talab egri chizig'i</b>ga (pastga qaragan): narxni oshirsa, kamroq
      sotadi. U talab egri chizig'idagi istalgan nuqtani tanlay oladi, lekin undan yuqorisini — yo'q. U — <T id="price-maker" />.
    </p>
  </div>
);

const S162b = () => (
  <div className="prose-uz">
    <p>
      Yagona suv kompaniyasi (Table 1): 1 gallon $10, 2 gallon $9 dan, 3 gallon $8 dan… AR = P (har doim). Lekin 3 dan 4 gallonga o'tishda TR $24 → $28 — <b>MR = $4</b>, garchi gallon $7 ga sotilsa ham: 4-gallonni
      sotish uchun dastlabki 3 gallonning har biridan $1 voz kechish kerak. Bu — <T id="output-price-effect" />. Monopoliyada <b>MR &lt; P</b> va MR manfiy ham bo'lishi mumkin.
    </p>
    <MonopolyRevenue />
  </div>
);

const S162c = () => (
  <div className="prose-uz">
    <p>
      Q₁ da MR &gt; MC — ko'paytiring; Q₂ da MC &gt; MR — kamaytiring. Monopolist <b>MR = MC</b> bo'lgan Q_MAX ni tanlaydi (A nuqta), keyin talab egri chizig'idan shu miqdorni sotadigan eng yuqori narxni oladi
      (B nuqta). Raqobatchi: <M tex="P = MR = MC" />; monopolist: <M tex="P > MR = MC" />. Raqobatda narx MC ga teng, monopoliyada undan <b>yuqori</b>.
    </p>
    <MonopolyLab />
    <BoxLink id="fyi-supply-curve">FYI: Why a Monopoly Does Not Have a Supply Curve</BoxLink>
  </div>
);

const S162d = () => (
  <div className="prose-uz">
    <p>
      <M tex="\text{Profit} = (P - ATC) \times Q" /> — Figure 5 dagi BCDE to'rtburchagi: balandligi BC = P − ATC, eni DC = Q_MAX.
    </p>
    <BookTable
      caption="Table 2 — Profit-Maximizing Rules for a Monopoly Firm"
      head={['#', 'Qoida']}
      rows={[
        ['1', 'Derive the MR curve from the demand curve.'],
        ['2', 'Find Q at which **MR = MC**.'],
        ['3', 'On the demand curve, find P at which consumers will buy Q.'],
        ['4', 'If **P > ATC**, the monopoly earns a profit.'],
      ]}
    />
    <Callout kind="exam">QQ 4: fixed cost oshsa — MR va MC o'zgarmaydi → <b>narx o'zgarmaydi</b>, foyda kamayadi.</Callout>
    <BoxLink id="cs-drugs">Case Study: Monopoly Drugs versus Generic Drugs</BoxLink>
  </div>
);

const S163a = () => (
  <div className="prose-uz">
    <p>
      Xayrixoh ijtimoiy rejalashtiruvchilar monopoliyani boshqarsa (Figure 7): talab (iste'molchi qiymati) va MC kesishgan <b>samarali miqdor</b>ni tanlaydi — P = MC. Monopolist MR = MC da kamroq ishlab chiqaradi
      (Figure 8) — ya'ni narx juda yuqori. MC dan yuqori, lekin monopoliya narxidan past qadrlaydigan xaridorlar sotib olmaydi — foydali savdolar amalga oshmaydi. DWL — talab va MC orasidagi uchburchak.
    </p>
    <Callout kind="note" title="Soliq bilan o'xshashlik">
      Monopolist — xususiy soliq yig'uvchiga o'xshaydi: soliq ham, monopoliya narxi ham WTP va xarajat orasida “pona” hosil qiladi va miqdorni kamaytiradi. Farqi: soliq davlatga tushum, monopoliya narxi firmaga foyda beradi.
    </Callout>
  </div>
);

const S163b = () => (
  <div className="prose-uz">
    <p>
      “Monopoliya xalq hisobiga boyiydi” degan e'tiroz bor. Lekin iqtisodiy tahlilda foydaning o'zi muammo emas: iste'molchi to'lagan qo'shimcha dollar ishlab chiqaruvchiga o'tadi — umumiy surplus o'zgarmaydi,
      faqat pirog boshqacha bo'linadi (bu tenglik haqidagi normativ masala). Muammo — <b>kam miqdor</b>: pirog DWL miqdorida kichrayadi.
    </p>
    <p>
      Istisno: monopoliya o'z mavqeini saqlash uchun xarajat qilsa (masalan, lobbichilar yollasa), ijtimoiy yo'qotish shu xarajatlar va DWL yig'indisi.
    </p>
  </div>
);

const S164a = () => (
  <div className="prose-uz">
    <p>
      <T id="price-discrimination" /> — bir xil tovarni turli xaridorlarga turli narxda sotish (xarajat bir xil bo'lsa ham). Raqobatli bozorda mumkin emas — faqat bozor hokimiyati bo'lsa.
    </p>
    <p>
      <b>Readalot Publishing</b>: muallifga $2 mln, bosma xarajati 0. 100,000 muxlis $30 gacha, 400,000 oddiy kitobxon $5 gacha to'laydi. Yagona narx: $30 → $3 mln tushum, $1 mln foyda; $5 → $2.5 mln tushum,
      $0.5 mln foyda → $30. DWL: 400,000 kitobxon × $5 = <b>$2 mln</b>. Muxlislar Avstraliyada, qolganlari AQShda ekan: Avstraliya $30, AQSh $5 → tushum $5 mln, foyda <b>$3 mln</b>. Real hayotda: qattiq muqovali,
      elektron va yumshoq muqovali nashrlar.
    </p>
    <PriceDiscrimination />
  </div>
);

const S164b = () => (
  <div className="prose-uz">
    <ol>
      <li>Narx diskriminatsiyasi — foydani maksimallashtiruvchi monopolist uchun <b>ratsional</b> strategiya: narx har bir xaridorning WTP iga yaqinlashadi.</li>
      <li>
        Xaridorlarni WTP bo'yicha <b>ajratish</b> kerak (geografiya, yosh, daromad). Natija: <T id="arbitrage" /> diskriminatsiyani buzadi — Avstraliya do'konlari AQShda arzon olib sotsa.
      </li>
      <li>
        Diskriminatsiya <b>umumiy surplusni oshirishi</b> mumkin: Readalot'da hamma kitob oladi, DWL yo'qoladi. Lekin o'sish ishlab chiqaruvchiga — iste'molchilar to'lagan narx WTP iga teng, CS = 0.
      </li>
    </ol>
  </div>
);

const S164c = () => (
  <div className="prose-uz">
    <p>
      <T id="perfect-price-discrimination" />: monopolist har bir xaridorning WTP ini aniq biladi (Figure 9b). Har bir foydali savdo amalga oshadi, DWL yo'q, butun surplus — foyda. Real hayotda diskriminatsiya
      nomukammal (guruhlar bo'yicha) va uning umumiy surplusga ta'siri <b>noaniq</b> — faqat foyda oshishi aniq (aks holda firma yagona narx qo'yardi).
    </p>
    <Callout kind="exam">QQ 8: yagona narxdan mukammal diskriminatsiyaga o'tish <b>CS ni kamaytiradi</b> (nolga), foyda, miqdor va umumiy surplus oshadi.</Callout>
  </div>
);

const S164d = () => (
  <div className="prose-uz">
    <ul>
      <li><b>Kino chiptalari</b>: bolalar va 65+ — WTP past; o'rindiq MC i hammaga bir xil.</li>
      <li><b>Aviachipta</b>: shanba kechasi qolsa arzon — biznes sayohatchilarni (WTP yuqori, dam olish kunlari uchrashuv yo'q) dam oluvchilardan ajratadi.</li>
      <li><b>Kuponlar va chegirma kunlari</b>: band va boy rahbarlar kupon qirqmaydi; vaqt sarflashga tayyorlar odatda WTP i past.</li>
      <li><b>Moliyaviy yordam (grant)</b>: yuqori kontrakt + daromadga qarab grant — oilaning to'lash qobiliyatiga qarab narx.</li>
      <li><b>Ko'p miqdorga chegirma</b>: donut $0.50, o'n ikkitasi $5 — bir xaridorning keyingi birliklarga WTP i kamayadi.</li>
    </ul>
  </div>
);

const S165a = () => (
  <div className="prose-uz">
    <p>
      Davlatning to'rt yo'li: raqobatni oshirish, xatti-harakatni tartibga solish, davlat mulkiga aylantirish yoki hech narsa qilmaslik. <T id="antitrust-laws" />: Coca-Cola va PepsiCo birlashmoqchi bo'lsa,
      Adliya vazirligi sudga berishi mumkin. <b>Gorizontal</b> birlashishlar (bir bozordagi raqiblar) <b>vertikal</b>lardan (shina zavodi + avtozavod) qattiqroq tekshiriladi. Sherman Act (1890) “trest”larni
      cheklash uchun, Clayton Act (1914) kuchaytirdi. Oliy sud: antitrust — “erkin raqobatni saqlashga qaratilgan iqtisodiy erkinlik xartiyasi”.
    </p>
    <p>
      Lekin birlashishlar <b>synergies</b> berishi mumkin (banklar ma'muriy xarajatni kamaytiradi). Davlat foyda va raqobat kamayishi xarajatini aniq solishtira oladimi — munozarali.
    </p>
    <AskExperts
      title="Mergers and Competition (airlines)"
      source="IGM, August 28, 2013"
      statement="If regulators had not approved mergers in the past decade between major networked airlines, travelers would be better off today."
      agree={29}
      uncertain={45}
      disagree={26}
    />
    <AskExperts
      title="Mergers and Competition (telecom)"
      source="IGM, July 20, 2021"
      statement="Americans pay too much for broadband, cable television, and telecommunications services, in part because of a lack of adequate competition."
      agree={91}
      uncertain={7}
      disagree={2}
    />
  </div>
);

const S165b = () => (
  <div className="prose-uz">
    <p>
      Tabiiy monopoliyalarda (suv, elektr) narx ko'pincha tartibga solinadi. <T id="marginal-cost-pricing" /> samarali ko'rinadi, lekin ikki muammo: (1) ATC tushayotgani uchun MC &lt; ATC → firma zarar ko'radi
      (Figure 10) — subsidiya (soliq hisobidan, o'z DWL i bilan) yoki chiqish; P = ATC bo'lsa zarar yo'q, lekin DWL qoladi — mahsulotga soliq kabi. (2) Xarajatni kamaytirishga rag'bat yo'q: regulyator narxni tushiradi.
      Amalda firmaga xarajat tejashdan foydaning bir qismini qoldirishadi.
    </p>
    <NaturalMonopolyRegulation />
  </div>
);

const S165c = () => (
  <div className="prose-uz">
    <p>
      <T id="public-ownership" />: Yevropada telefon, suv, elektr; AQShda pochta xizmati va ko'p munitsipal suv/elektr korxonalari. Ko'p iqtisodchilar xususiyni afzal ko'radi: xususiy egalar xarajatni kamaytirishdan
      foyda oladi va yomon menejerni ishdan bo'shatadi; davlat xodimlari yomon ishlasa, zarar iste'molchi va soliq to'lovchiga, ular faqat siyosiy tizim orqali ta'sir qila oladi. “Saylov qutisi foyda motividan
      ishonchsizroq.”
    </p>
  </div>
);

const S165d = () => (
  <div className="prose-uz">
    <p>
      Har bir siyosatning kamchiligi bor. Nobel laureati George Stigler fikricha, haqiqiy iqtisodiyot ideal raqobatdan ortda qoladi (“market failure”), lekin AQShda bu nomukammal siyosatlar keltiradigan “political
      failure” dan ancha kichik. Ba'zan (lekin har doim emas) hech narsa qilmaslik oqilona.
    </p>
    <BoxLink id="news-antitrust">In the News: Will the Biden Administration Expand the Scope of Antitrust Policy?</BoxLink>
  </div>
);

const S166 = () => (
  <div className="prose-uz">
    <BookTable
      caption="Table 3 — Competition versus Monopoly: A Summary Comparison"
      head={['', 'Competition', 'Monopoly']}
      rows={[
        ['*Similarities*', '', ''],
        ['Goal of firms', 'Maximize profits', 'Maximize profits'],
        ['Rule for maximizing', 'MR = MC', 'MR = MC'],
        ['Economic profits in the short run?', 'Yes', 'Yes'],
        ['*Differences*', '', ''],
        ['Number of firms', 'Many', 'One'],
        ['Marginal revenue', 'MR = P', 'MR < P'],
        ['Price', 'P = MC', 'P > MC'],
        ['Welfare-maximizing output?', 'Yes', 'No'],
        ['Entry in the long run?', 'Yes', 'No'],
        ['Economic profits in the long run?', 'No', 'Yes'],
        ['Price discrimination possible?', 'No', 'Yes'],
      ]}
    />
    <p>
      Monopoliyalar qanchalik keng tarqalgan? Bir ma'noda — juda: ko'p firmalar narxga biroz ta'sir qiladi (Tesla ≠ elektr Mustang, Ben & Jerry's ≠ Breyers). Lekin <b>katta</b> monopoliya kuchi kam: ko'p tovarning
      o'xshash o'rinbosari bor. Monopoliya kuchi — daraja masalasi; ko'p hollarda firmalarni raqobatchi deb faraz qilish katta xato emas.
    </p>
  </div>
);

function SupplyCurveFyi() {
  return (
    <div className="prose-uz">
      <p>
        Raqobatli bozorlarda eng muhim ikki so'z — “supply” va “demand”. Monopoliyada esa talab va xarajat egri chiziqlaridan foydalandik — taklif egri chizig'i qani?
      </p>
      <p>
        Taklif egri chizig'i berilgan <b>har bir narxda</b> firmalar qancha taklif qilishini aytadi — price taker uchun mantiqli. Monopolist esa price maker: “shu narxda qancha?” degan savol ma'nosiz — u miqdorni
        tanlaganda talab egri chizig'i bilan birga narxni ham belgilaydi. Talab shakli MR shaklini, MR esa optimal miqdorni belgilaydi; shuning uchun monopoliyaning taklif qarorini talabdan ajratib bo'lmaydi va
        <b> monopoliyaning taklif egri chizig'i yo'q</b>.
      </p>
    </div>
  );
}

function Drugs() {
  return (
    <div className="prose-uz">
      <p>
        Dori bozori ikkala tuzilmani ham ko'rsatadi: patent davrida — monopoliya, patent tugagach — raqobat. Nazariya (Figure 6, MC taxminan o'zgarmas): patent davrida narx MR = MC dan, ya'ni MC dan ancha yuqori;
        patent tugagach generiklar kiradi va narx MC gacha tushadi.
      </p>
      <p>
        Tajriba tasdiqlaydi: kimyoviy jihatdan bir xil generiklar ancha arzon. Lekin sobiq monopolist kuchini butunlay yo'qotmaydi — ba'zi iste'molchilar brendga sodiq (generik “boshqa” deb qo'rqadi). Masalan,
        antidepressant <b>fluoxetine</b>: Prozac patenti 2001-yilda tugagan, lekin Prozac hamon generik fluoxetine'dan ancha qimmat.
      </p>
    </div>
  );
}

function Antitrust() {
  return (
    <div className="prose-uz">
      <Source>Greg Ip, “Antitrust's New Mission: Preserving Democracy, Not Efficiency,” The Wall Street Journal, July 8, 2021</Source>
      <ul>
        <li>Amazon'ning MGM kinostudiyasini sotib olishi odatda antitrust xavotiri tug'dirmasdi (MGM ulushi kichik). Lekin Amazon — eng yirik e-tijorat va bulut kompaniyasi, Bezos esa Washington Post egasi — iqtisodiy va madaniy ta'sir to'planishi.</li>
        <li>Lina Khan (2021-yilda 32 yoshida FTC raisi): antitrustning tarixiy roli — iqtisodiyot va demokratiyani nazoratsiz monopoliya kuchidan himoya qilish. “Neo-Brandeischilar”: Louis Brandeis (1914) — kattalik o'zi jinoyat emas, lekin qanday erishilgani va ishlatilishi zararli bo'lishi mumkin.</li>
        <li>1970-yillardan Robert Bork: antitrustning yagona qonuniy maqsadi — <b>iste'molchi farovonligi</b>; firmalar samaradorlik tufayli kattalashadi. Bu standart o'n yilliklar hukmron bo'ldi.</li>
        <li>So'nggi o'n yillik: konsentratsiya va foyda marjalari oshgan, yangi firmalar kamaygan. Big Tech — arzon yoki bepul va mashhur (iste'molchi farovonligi bo'yicha muammo yo'q), lekin platformalar sotuvchi, dasturchi va foydalanuvchilarga deyarli savdolashish kuchi qoldirmaydi.</li>
        <li>Xavflar: dalilsiz ishlar sudda yutqazadi (Facebook ishi rad etildi); kattalikni taqiqlash faqat yirik firmalar bera oladigan foydalardan mahrum qiladi; antitrust siyosiylashishi mumkin (AT&T–Time Warner, 2018).</li>
      </ul>
      <Callout kind="tip" title="Muhokama uchun savollar">
        <ol>
          <li>Siyosatchilar yirik bizneslarning faqat iqtisodiy ta'siridan ko'proq narsa bilan qiziqishi kerakmi? Nega?</li>
          <li>Antitrust qonunlari doirasini kengaytirishda qanday xavflar bor?</li>
        </ol>
      </Callout>
    </div>
  );
}

const Mono = () => <MonopolyLab />;
const Rev = () => <MonopolyRevenue />;
const Pd = () => <PriceDiscrimination />;
const Reg = () => <NaturalMonopolyRegulation />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    "Monopoliya sabablari: **barriers to entry** — kalit resurs, davlat huquqi, **natural monopoly**",
    "Nega monopoliyada **MR < P** (output va price effect) va qanday qilib **MR = MC** dan narx belgilanadi",
    "Monopoliya foydasi va **deadweight loss**; foyda nega o'zi ijtimoiy muammo emasligi",
    "**Price discrimination**: Readalot, arbitraj, mukammal diskriminatsiya, real misollar",
    "Davlat siyosati: **antitrust**, regulyatsiya (P = MC vs P = ATC), davlat mulki, hech narsa qilmaslik",
  ],
  sections: [
    { id: "s-16-1", code: "16-1", titleEn: "Why Monopolies Arise", titleUz: "Monopoliyalar nega paydo bo'ladi", Body: S161 },
    { id: "s-16-1a", code: "16-1a", titleEn: "Monopoly Resources", titleUz: "Monopol resurslar", Body: S161a, check: checks["s-16-1a"] },
    { id: "s-16-1b", code: "16-1b", titleEn: "Government-Created Monopolies", titleUz: "Davlat yaratgan monopoliyalar", Body: S161b, check: checks["s-16-1b"] },
    { id: "s-16-1c", code: "16-1c", titleEn: "Natural Monopolies", titleUz: "Tabiiy monopoliyalar", Body: S161c, check: checks["s-16-1c"] },
    { id: "s-16-2a", code: "16-2a", titleEn: "Monopoly versus Competition", titleUz: "Monopoliya va raqobat", Body: S162a, check: checks["s-16-2a"] },
    { id: "s-16-2b", code: "16-2b", titleEn: "A Monopoly's Revenue", titleUz: "Monopoliya tushumi", Body: S162b, check: checks["s-16-2b"] },
    { id: "s-16-2c", code: "16-2c", titleEn: "Profit Maximization", titleUz: "Foydani maksimallashtirish", Body: S162c, check: checks["s-16-2c"] },
    { id: "s-16-2d", code: "16-2d", titleEn: "A Monopoly's Profit", titleUz: "Monopoliya foydasi", Body: S162d, check: checks["s-16-2d"] },
    { id: "s-16-3a", code: "16-3a", titleEn: "The Deadweight Loss", titleUz: "Sof yo'qotish", Body: S163a, check: checks["s-16-3a"] },
    { id: "s-16-3b", code: "16-3b", titleEn: "The Monopoly's Profit: A Social Cost?", titleUz: "Monopoliya foydasi — ijtimoiy xarajatmi?", Body: S163b, check: checks["s-16-3b"] },
    { id: "s-16-4a", code: "16-4a", titleEn: "A Parable about Pricing", titleUz: "Narx haqida masal", Body: S164a, check: checks["s-16-4a"] },
    { id: "s-16-4b", code: "16-4b", titleEn: "The Moral of the Story", titleUz: "Masal saboqlari", Body: S164b, check: checks["s-16-4b"] },
    { id: "s-16-4c", code: "16-4c", titleEn: "The Analytics of Price Discrimination", titleUz: "Narx diskriminatsiyasi tahlili", Body: S164c, check: checks["s-16-4c"] },
    { id: "s-16-4d", code: "16-4d", titleEn: "Examples of Price Discrimination", titleUz: "Narx diskriminatsiyasi misollari", Body: S164d, check: checks["s-16-4d"] },
    { id: "s-16-5a", code: "16-5a", titleEn: "Increasing Competition with Antitrust Laws", titleUz: "Antimonopol qonunlar bilan raqobatni oshirish", Body: S165a, check: checks["s-16-5a"] },
    { id: "s-16-5b", code: "16-5b", titleEn: "Regulation", titleUz: "Regulyatsiya", Body: S165b, check: checks["s-16-5b"] },
    { id: "s-16-5c", code: "16-5c", titleEn: "Public Ownership", titleUz: "Davlat mulki", Body: S165c, check: checks["s-16-5c"] },
    { id: "s-16-5d", code: "16-5d", titleEn: "Above All, Do No Harm", titleUz: "Avvalo — zarar yetkazmang", Body: S165d, check: checks["s-16-5d"] },
    { id: "s-16-6", code: "16-6", titleEn: "Conclusion: The Prevalence of Monopolies", titleUz: "Xulosa: monopoliyalar qanchalik keng tarqalgan", Body: S166 },
  ],
  examTraps: [
    { title: "Narx — talab egri chizig'idan", body: "MR = MC miqdorni beradi; narxni **talab** egri chizig'idan oling (B nuqta), MC dan emas." },
    { title: "P > MR = MC", body: "Raqobatchi: P = MR = MC. Monopolist: P > MR = MC (QQ 3)." },
    { title: "Fixed cost narxga ta'sir qilmaydi", body: "QQ 4, Problem 1e, Problem 3c: fixed cost oshsa narx o'zgarmaydi, foyda kamayadi." },
    { title: "DWL sababi", body: "Foyda emas, **sotib olmagan** va MC dan yuqori qadrlaydigan xaridorlar (QQ 6)." },
    { title: "Mukammal diskriminatsiya", body: "CS → 0, DWL → 0, foyda va umumiy surplus ↑ (QQ 8)." },
    { title: "Inelastik qism", body: "Monopolist hech qachon talab inelastik (MR < 0) qismida ishlamaydi (Problem 5)." },
  ],
  mistakes: [
    { wrong: "“Monopolist xohlagan narxni qo'ya oladi.”", right: "Talab egri chizig'i cheklaydi — yuqori narxda kam sotadi." },
    { wrong: "“Monopoliya foydasi — DWL.”", right: "Foyda — transfer; DWL — yo'qolgan savdolar uchburchagi." },
    { wrong: "“Monopoliyada narx shifti doim taqchillik beradi.”", right: "Problem 8: $45 shift miqdorni 20 dan 25 ga oshiradi, taqchillik yo'q." },
    { wrong: "“Narx diskriminatsiyasi doim zararli.”", right: "Umumiy surplusni oshirishi mumkin (Readalot)." },
    { wrong: "“Tabiiy monopoliyada P = MC ideal.”", right: "MC < ATC → zarar; subsidiya yoki DWL bilan P = ATC." },
  ],
  boxes: [
    { id: "fyi-supply-curve", kind: "FYI", titleEn: "Why a Monopoly Does Not Have a Supply Curve", titleUz: "Nega monopoliyaning taklif egri chizig'i yo'q", Body: SupplyCurveFyi },
    { id: "cs-drugs", kind: "Case Study", titleEn: "Monopoly Drugs versus Generic Drugs", titleUz: "Monopol dorilar va generiklar", Body: Drugs },
    { id: "news-antitrust", kind: "In the News", titleEn: "Will the Biden Administration Expand the Scope of Antitrust Policy?", titleUz: "Antitrust siyosati kengayadimi?", Body: Antitrust },
  ],
  summary: [
    "Monopoliya — o'z bozoridagi yagona sotuvchi. U bitta firma kalit resursga egalik qilganda, davlat unga yagona huquq berganda yoki bitta firma butun bozorni ko'p firmalardan arzonroq ta'minlay olganda paydo bo'ladi.",
    "Monopoliya pastga qaragan talab egri chizig'iga duch keladi. U 1 birlik ko'proq ishlab chiqarsa, narx tushadi va barcha birliklardan tushum kamayadi. Shuning uchun monopoliyaning **MR i har doim narxdan past**.",
    "Raqobatchi firma kabi monopoliya ham foydani **MR = MC** da maksimallashtiradi, keyin iste'molchilar shu miqdorni sotib oladigan narxni belgilaydi. Raqobatchi firmadan farqli ravishda uning narxi MR dan, demak **MC dan yuqori**.",
    "Monopolistning foydani maksimallashtiruvchi miqdori umumiy surplusni maksimallashtiruvchi miqdordan **kam**: MC dan yuqori qadrlaydigan ba'zi iste'molchilar sotib olmaydi. Monopoliya soliqlarga o'xshash **DWL** keltiradi.",
    "Monopolist ko'pincha xaridorning WTP iga qarab bir xil tovarga turli narx qo'yib foydani oshiradi. **Narx diskriminatsiyasi** aks holda sotib olmaydigan iste'molchilarga tovar yetkazib, farovonlikni oshirishi mumkin. Mukammal diskriminatsiyada DWL yo'qoladi va butun surplus monopolistga o'tadi; nomukammal holatda farovonlik oshishi ham, kamayishi ham mumkin.",
    "Siyosatchilar monopoliya samarasizligiga turlicha javob beradi: **antitrust** qonunlari bilan raqobatni oshirish, monopoliya narxlarini **tartibga solish**, uni **davlat korxonasi**ga aylantirish yoki — agar bozor muvaffaqiyatsizligi siyosatning muqarrar nomukammalligiga nisbatan kichik bo'lsa — **hech narsa qilmaslik**.",
  ],
  widgets: { monopoly: Mono, revenue: Rev, pd: Pd, regulation: Reg },
  gallery: [
    { title: "Monopoliya: MR = MC, foyda, DWL (masalalar)", Component: Mono },
    { title: "Monopoliya tushumi: output va price effect", Component: Rev },
    { title: "Narx diskriminatsiyasi: Readalot, Figure 9, spektakl", Component: Pd },
    { title: "Tabiiy monopoliyani tartibga solish", Component: Reg },
  ],
};
