import { SupplyDemandGraph } from '../../../components/graphs/SupplyDemandGraph';
import { EfficiencyExplorer, PriceChangeSurplus, StepSurplus } from '../../../components/graphs/SurplusWidgets';
import { Callout } from '../../../components/ui/Kit';
import { AskExperts, BookTable, BoxLink, Source } from '../../../components/ui/Lesson';
import { Math as M } from '../../../components/ui/Math';
import { T } from '../../../components/ui/Term';
import type { ChapterPageContent } from '../../types';
import { checks } from './quiz';

const buyers = [
  { name: 'Whitney', value: 1000 },
  { name: 'Ella', value: 800 },
  { name: 'Mariah', value: 700 },
  { name: 'Karen', value: 500 },
];
const painters = [
  { name: 'Vincent', value: 3600 },
  { name: 'Claude', value: 3200 },
  { name: 'Pablo', value: 2400 },
  { name: 'Andy', value: 2000 },
];

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        Bozorda pomidor kilosi qimmatlashsa, xaridorlar norozi; arzonlashsa — dehqonlar. Har kim o'z tomonini o'ylaydi. Lekin{' '}
        <b>jamiyat uchun</b> “to'g'ri narx” bormi? Pomidor juda kam yetishtirilyaptimi, juda ko'pmi yoki aynan kerakli miqdordami?
      </p>
      <p>
        Oldingi boblar bozor narx va miqdorni <i>qanday</i> belgilashini ko'rsatdi. Bu bob boshqa savol beradi: bu natija{' '}
        <b>yaxshimi</b>? Javob kutilmagan: raqobatli bozor muvozanati xaridor va sotuvchilarning <b>umumiy</b> yutug'ini maksimal
        qiladi — go'yo ko'rinmas qo'l boshqarayotgandek.
      </p>
    </div>
  );
}

const S71a = () => (
  <div className="prose-uz">
    <p>
      Bu bob — <T id="welfare-economics" />: resurslar taqsimoti iqtisodiy farovonlikka qanday ta'sir qilishini o'rganamiz.
    </p>
    <p>
      Buvingizdan Elvis Preslining birinchi albomining noyob nusxasi meros qoldi. Siz Elvisni yoqtirmaysiz va uni auktsionda
      sotasiz. To'rt muxlis keldi; har biri ma'lum summadan ko'p to'lamaydi — bu uning <T id="willingness-to-pay" />:
    </p>
    <BookTable head={['Buyer (Table 1)', 'Willingness to Pay']} rows={buyers.map((b) => [b.name, `$${b.value.toLocaleString('en-US')}`])} />
    <p>
      Narx $100 dan ko'tarila boshlaydi. Whitney $800 (yoki biroz ko'proq) taklif qilganda Ella, Mariah va Karen to'xtaydi. Albom
      uni eng ko'p qadrlaganga — Whitneyga ketadi.
    </p>
    <p>
      Whitney $1,000 ga tayyor edi, $800 to'ladi: uning <T id="consumer-surplus" /> — <b>$200</b>. Consumer surplus xaridor bozorda
      qatnashishdan qancha yutganini o'lchaydi. Agar ikkita album bo'lsa, narx $700 da to'xtaydi: Whitney $300, Ella $100 — jami{' '}
      <b>$400</b>.
    </p>
    <StepSurplus kind="buyers" people={buyers} title="Table 1 / Figure 2 — Elvis albomi auktsioni" initialPrice={800} maxPrice={1100} unitLabel="Albums" />
  </div>
);

const S71b = () => (
  <div className="prose-uz">
    <p>
      To'lashga tayyorlikdan talab jadvali quriladi: narx $1,000 dan yuqori — 0 ta, $800–$1,000 — 1 ta (faqat Whitney), $700–$800 — 2
      ta va hokazo. Talab egri chizig'i shu jadvalning grafigi — zinapoya shaklida (Figure 1).
    </p>
    <p>
      Muhim kuzatuv: har bir miqdorda egri chiziq balandligi <T id="marginal-buyer" />ning to'lashga tayyorligi — narx sal oshsa
      birinchi chiqib ketadigan xaridorning. 4 ta albomda balandlik $500 (Karen), 3 tada — $700 (Mariah).
    </p>
    <p>
      Shuning uchun talab egri chizig'i surplusni ham o'lchaydi: <b>talab egri chizig'i ostida va narx ustidagi maydon — bozordagi
      consumer surplus</b>. Yuqoridagi grafikda narxni $700 ga qo'ying — ikki to'rtburchak ($300 + $100) kitobdagi $400 ni beradi.
    </p>
  </div>
);

const S71c = () => (
  <div className="prose-uz">
    <p>
      Ko'p xaridorli bozorda zinapoyalar shunchalik kichikki, talab egri chizig'i silliq bo'ladi. Narx P₁ dan P₂ ga tushsa, consumer
      surplus ABC uchburchagidan ADF ga kattalashadi. O'sish (BCFD) ikki qismdan iborat:
    </p>
    <ul>
      <li>
        <b>BCED to'rtburchagi</b> — avvaldan sotib olayotganlar endi kamroq to'laydi;
      </li>
      <li>
        <b>CEF uchburchagi</b> — past narxda bozorga yangi xaridorlar kiradi (Q₁ → Q₂).
      </li>
    </ul>
    <PriceChangeSurplus side="consumers" />
  </div>
);

const S71d = () => (
  <div className="prose-uz">
    <p>
      Consumer surplus farovonlikning yaxshi o'lchovimi? U xaridorlar o'zlari qanday his qilishiga ko'ra olgan foydani o'lchaydi —
      demak, siyosatchilar xaridorlarning afzalliklarini hurmat qilsa, yaxshi o'lchov.
    </p>
    <p>
      Istisno: giyohvand narkotik uchun juda ko'p to'lashga tayyor, lekin siyosatchilar u arzon narkotikdan katta foyda oladi deb
      hisoblamaydi — chunki u o'z manfaatini ko'zlamayapti. Aksariyat bozorlarda esa iqtisodchilar xaridorlarni <b>ratsional</b> deb
      faraz qiladi va ularning afzalliklarini hurmat qiladi: iste'molchi o'zi qancha foyda olishini eng yaxshi biladi.
    </p>
  </div>
);

const S72a = () => (
  <div className="prose-uz">
    <p>
      Endi bozorning narigi tomoni. Uyingizni bo'yatmoqchisiz; to'rt bo'yoqchi taklif bilan keldi. Har biri narx uning{' '}
      <T id="cost" />idan yuqori bo'lsa ishni oladi. Xarajat — bo'yoq, cho'tka va eng muhimi o'z vaqtining qiymati (imkoniyat
      xarajati). Bu — u qabul qiladigan eng past narx.
    </p>
    <BookTable head={['Seller (Table 2)', 'Cost']} rows={painters.map((b) => [b.name, `$${b.value.toLocaleString('en-US')}`])} />
    <p>
      Auktsionda narx pastga tushadi. Andy $2,400 (yoki biroz kamroq) taklif qilganda yolg'iz qoladi. Ish eng arzon ishlay oladiganga
      ketdi. Andy $2,000 ga tayyor edi, $2,400 oldi — uning <T id="producer-surplus" /> <b>$400</b>. Ikki uy bo'lsa, narx $3,200 da
      to'xtaydi: Andy $1,200, Pablo $800 — jami <b>$2,000</b>.
    </p>
    <StepSurplus kind="sellers" people={painters} title="Table 2 / Figure 5 — Bo'yoqchilar auktsioni" initialPrice={2400} maxPrice={4000} unitLabel="Houses Painted" />
  </div>
);

const S72b = () => (
  <div className="prose-uz">
    <p>
      Xarajatlardan taklif jadvali quriladi: $2,000 dan past — 0, $2,000–$2,400 — 1 (Andy), $2,400–$3,200 — 2 va hokazo (Figure 4).
      Taklif egri chizig'ining balandligi — <T id="marginal-seller" />ning xarajati: narx sal tushsa birinchi chiqadigan sotuvchi.
    </p>
    <p>
      Demak: <b>narx ostidagi va taklif egri chizig'i ustidagi maydon — bozordagi producer surplus</b>. Yuqoridagi grafikda narxni
      $3,200 ga qo'yib, $2,000 ni tekshiring.
    </p>
  </div>
);

const S72c = () => (
  <div className="prose-uz">
    <p>Narx P₁ dan P₂ ga oshsa, producer surplus ABC dan ADF ga o'sadi (Figure 6):</p>
    <ul>
      <li>
        <b>BCED</b> — avvaldan sotayotganlar endi ko'proq oladi;
      </li>
      <li>
        <b>CEF</b> — yuqori narx yangi sotuvchilarni bozorga olib keladi.
      </li>
    </ul>
    <PriceChangeSurplus side="producers" />
  </div>
);

const S73a = () => (
  <div className="prose-uz">
    <p>
      Bozor natijasini baholash uchun xayoliy qahramonni kiritamiz — <T id="benevolent-social-planner" label="benevolent social planners" />:
      ular hamma narsaga qodir, hamma narsani biladi va faqat yaxshilik istaydi. Ular jamiyat farovonligini o'lchash uchun{' '}
      <T id="total-surplus" />dan foydalanadi:
    </p>
    <M tex="\text{Total surplus} = (\text{Value to buyers} - \text{Amount paid}) + (\text{Amount received} - \text{Cost to sellers})" display />
    <p>Xaridor to'lagani sotuvchi olganiga teng — ular qisqaradi:</p>
    <M tex="\text{Total surplus} = \text{Value to buyers} - \text{Cost to sellers}" display />
    <p>
      Agar taqsimot total surplusni maksimal qilsa, u <T id="efficiency-surplus" label="efficient" /> (samarali). Aks holda savdodan
      ba'zi yutuqlar amalga oshmay qoladi: masalan, tovarni eng arzon emas, qimmat ishlab chiqaruvchi ishlab chiqarsa yoki uni eng ko'p
      emas, kam qadrlovchi iste'mol qilsa.
    </p>
    <p>
      Rejalashtiruvchilar <T id="equality" /> haqida ham qayg'urishi mumkin — farovonlik qanchalik teng taqsimlangani. Samaradorlik —
      pirog qanchalik katta, tenglik — qanday bo'lingan. Bu bob samaradorlikka e'tibor beradi, lekin haqiqiy siyosatchilar ikkalasini
      ham o'ylaydi.
    </p>
  </div>
);

const S73b = () => (
  <div className="prose-uz">
    <p>
      Muvozanatda: CS — narx ustidagi va talab ostidagi, PS — narx ostidagi va taklif ustidagi maydon; total surplus — muvozanat
      miqdorigacha talab va taklif orasidagi maydon (Figure 7).
    </p>
    <SupplyDemandGraph
      config={{ title: 'Figure 7 — Muvozanatdagi consumer va producer surplus', demand: { a: 10, b: 0.1 }, supply: { c: 1, d: 0.08 }, xMax: 100, yMax: 10, modes: ['market', 'ceiling', 'floor'], surplus: true, surplusOn: true, qtyDigits: 0 }}
    />
    <p>Muvozanat taqsimoti samaralimi? Narx kim qatnashishini hal qiladi va bu uchta xulosaga olib keladi:</p>
    <ol>
      <li>
        <b>Raqobatli bozorlar tovarni uni eng ko'p qadrlovchi xaridorlarga beradi</b> (WTP &gt; narx bo'lganlar sotib oladi — AE segmenti).
      </li>
      <li>
        <b>Raqobatli bozorlar talabni eng arzon ishlab chiqaruvchi sotuvchilarga beradi</b> (xarajat &lt; narx bo'lganlar sotadi — CE).
      </li>
      <li>
        <b>Raqobatli bozorlar consumer va producer surplus yig'indisini maksimal qiladigan miqdorni ishlab chiqaradi.</b>
      </li>
    </ol>
    <p>
      Uchinchisini tekshiring (Figure 8): muvozanatdan kam miqdorda (Q₁) marjinal xaridor uchun qiymat marjinal sotuvchi xarajatidan
      katta — miqdorni oshirish surplusni oshiradi. Muvozanatdan ko'p miqdorda (Q₂) — aksincha.
    </p>
    <EfficiencyExplorer />
    <p>
      Demak, samaradorlikni o'ylagan rejalashtiruvchilar bozor natijasini o'zgartirmasligi kerak — <T id="laissez-faire" />. Jamiyatga
      omad: haqiqiy hayotda bunday qahramonlar yo'q. Diktatorlar deyarli hamma narsaga qodir bo'lishi mumkin, lekin kamdan-kam xayrixoh.
      Eng muhimi, ular har bir iste'molchining qiymatini va har bir ishlab chiqaruvchining xarajatini — minglab bozorlarda — bila
      olmaydi. Shuning uchun markazlashgan rejali iqtisodiyotlar samarasizlikka to'la.
    </p>
    <p>
      Rejalashtiruvchining ishi Adam Smitning <b>ko'rinmas qo'li</b> bilan oson: u xaridor va sotuvchilar haqidagi barcha ma'lumotni
      hisobga olib, hammani samaradorlik nuqtai nazaridan eng yaxshi natijaga yo'naltiradi.
    </p>
    <Callout kind="exam">
      “Three insights about market efficiency” — tez-tez so'raladi. Uchalasini yod biling: (1) highest-value buyers, (2) lowest-cost sellers,
      (3) quantity that maximizes total surplus.
    </Callout>
    <BoxLink id="cs-organs">Case Study: Should There Be a Market for Organs?</BoxLink>
  </div>
);

const S74 = () => (
  <div className="prose-uz">
    <p>
      Bu bob farovonlik iqtisodiyotining asosiy vositalarini kiritdi va talab–taklif kuchlari resurslarni samarali taqsimlashini ko'rsatdi.
      Lekin bu xulosa ikki farazga tayanadi:
    </p>
    <ul>
      <li>
        <b>Mukammal raqobat.</b> Ba'zi bozorlarda bitta yoki bir nechta ishtirokchi narxni nazorat qila oladi — <T id="market-power" />.
        Bu narx va miqdorni muvozanatdan chetlashtirib, bozorni samarasiz qiladi.
      </li>
      <li>
        <b>Natija faqat xaridor va sotuvchilarga ta'sir qiladi.</b> Aslida ba'zan bozor qarorlari begonalarga ta'sir qiladi: pestitsid
        nafaqat zavod va fermerga, balki ifloslangan havo va suvdan foydalanuvchilarga ham ta'sir qiladi. Bunday yon ta'sirlar —{' '}
        <T id="externality" label="externalities" />.
      </li>
    </ul>
    <p>
      Ikkalasi ham <T id="market-failure" />ning ko'rinishlari — tartibga solinmagan bozor resurslarni samarali taqsimlay olmaydi. Bunda davlat
      siyosati vaziyatni yaxshilashi mumkin (10-bob). Shunga qaramay, ko'p bozorlarda bu bobning farazlari yaxshi ishlaydi. Keyingi ikki bob bu
      vositalarni ikki muhim siyosatga qo'llaydi: soliqlar (8-bob) va xalqaro savdo (9-bob).
    </p>
    <BoxLink id="news-ticket-resellers">In the News: How Ticket Resellers Help Allocate Scarce Resources</BoxLink>
  </div>
);

function Organs() {
  return (
    <div className="prose-uz">
      <p>
        The Boston Globe bir onaning hikoyasini yozgan: o'g'liga buyrak kerak, lekin onaning buyragi mos kelmagan. Shifokor taklif qildi: agar
        u buyragini notanish odamga bersa, o'g'li navbatning boshiga o'tadi. Ona rozi bo'ldi — ikki bemor transplantatsiya oldi.
      </p>
      <p>
        Lekin savollar tug'iladi: buyrakni qimmat saraton davolashiga almashtirish mumkinmi? O'g'lining tibbiyot maktabidagi o'qishiga-chi? Uni
        sotib, yangi mashina olish-chi? Ko'pchilik organ savdosini axloqan jirkanch deb biladi va bu qonunan taqiqlangan.
      </p>
      <p>
        Iqtisodiy nuqtai nazardan: hukumat buyrak bozorida <b>nolga teng narx shifti</b> qo'ygan. Har qanday ta'sirli shift kabi natija —{' '}
        <b>taqchillik</b>: bemorlar yillab kutadi, har yili minglab odam mos buyrak topilmay vafot etadi. Odamlar ikki buyrak bilan tug'iladi, odatda
        bittasi yetarli. Bozor tarafdorlari: narx talab va taklifni tenglashtiradi, sotuvchilar pul oladi, xaridorlar hayotini saqlaydi.
      </p>
      <p>
        Tanqidchilar adolat masalasini ko'taradi: organlar to'lashga eng qodir bo'lganlarga — boylarga ketadi. Lekin hozirgi tizim adolatlimi?
        Ko'pchiligimiz ortiqcha organ bilan yuramiz, ba'zilarimiz esa uni topolmay o'lyapmiz.
      </p>
      <AskExperts
        title="Supplying Kidneys"
        source="IGM, 2014"
        statement="A market that allows payment for human kidneys should be established on a trial basis to help extend the lives of patients with kidney disease."
        agree={57}
        uncertain={27}
        disagree={16}
      />
    </div>
  );
}

function TicketResellers() {
  return (
    <div className="prose-uz">
      <Source>Tracy C. Miller, “Scalping Isn't Scamming”, U.S. News and World Report, 2016 — qisqacha mazmuni.</Source>
      <ul>
        <li>
          “Hamilton” musiqiy spektaklining o'rtacha chipta narxi $189 bo'lsa-da, qayta sotuvchilar (scalpers) $1,000 va undan ko'p so'ragan.
          Senator Schumer chipta sotib oluvchi botlarni taqiqlashni taklif qildi.
        </li>
        <li>
          Muallif: narx scalperlar tufayli emas, <b>katta talab va cheklangan taklif</b> tufayli yuqori. Scalping chiptani uni eng ko'p
          qadrlaganga yetkazadi — oxirgi daqiqada qaror qilgan odam ham chipta topa oladi.
        </li>
        <li>
          Scalperlar tashkilotchilarga ham foyda: tadbirdan ancha oldin daromad, talab tushib ketish xavfini scalper o'z zimmasiga oladi.
          Raqobat ko'p bo'lsa, ularning ustamasi kichrayadi.
        </li>
        <li>
          Xulosa: scalpingga qarshi qonunlar o'zaro foydali bitimlarni to'xtatadi — bu bobning “samaradorlik” mantig'i.
        </li>
      </ul>
      <Callout kind="tip" title="Muhokama uchun savollar">
        <ol>
          <li>Nega “Hamilton” prodyuserlari chiptani qayta sotuvchilardan ancha arzon sotadi deb o'ylaysiz?</li>
          <li>Chiptani nominal qiymatidan qimmat sotishni taqiqlash kerakmi? Nega?</li>
        </ol>
      </Callout>
    </div>
  );
}

const BertWidget = () => (
  <StepSurplus kind="buyers" people={[{ name: '1st', value: 7 }, { name: '2nd', value: 5 }, { name: '3rd', value: 3 }, { name: '4th', value: 1 }]} title="Problem 4 — Bertning suv shishalari" initialPrice={4} maxPrice={8} unitLabel="Bottles" />
);
const ErnieWidget = () => (
  <StepSurplus kind="sellers" people={[{ name: '1st', value: 1 }, { name: '2nd', value: 3 }, { name: '3rd', value: 5 }, { name: '4th', value: 7 }]} title="Problem 5 — Ernining xarajatlari" initialPrice={4} maxPrice={8} unitLabel="Bottles" />
);

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    "**Willingness to pay**, **consumer surplus** va talab egri chizig'i orasidagi bog'liqlikni tushuntirish",
    "**Cost**, **producer surplus** va taklif egri chizig'ini bog'lash",
    "Narx o'zgarganda CS va PS qanday o'zgarishini (eski va yangi ishtirokchilar) hisoblash",
    "**Total surplus** va **efficiency** ni ta'riflash; samaradorlik va tenglikni farqlash",
    "Bozor samaradorligining **uch xulosasini** isbotlash",
    "Bozor muvaffaqiyatsizligining ikki sababini (market power, externalities) aytish",
  ],
  sections: [
    { id: "s-7-1a", code: "7-1a", titleEn: "Willingness to Pay", titleUz: "To'lashga tayyorlik", Body: S71a, check: checks["s-7-1a"] },
    { id: "s-7-1b", code: "7-1b", titleEn: "Using the Demand Curve to Measure Consumer Surplus", titleUz: "Talab egri chizig'i bilan CS ni o'lchash", Body: S71b, check: checks["s-7-1b"] },
    { id: "s-7-1c", code: "7-1c", titleEn: "How a Lower Price Raises Consumer Surplus", titleUz: "Past narx CS ni qanday oshiradi", Body: S71c, check: checks["s-7-1c"] },
    { id: "s-7-1d", code: "7-1d", titleEn: "What Does Consumer Surplus Measure?", titleUz: "Consumer surplus nimani o'lchaydi?", Body: S71d, check: checks["s-7-1d"] },
    { id: "s-7-2a", code: "7-2a", titleEn: "Cost and the Willingness to Sell", titleUz: "Xarajat va sotishga tayyorlik", Body: S72a, check: checks["s-7-2a"] },
    { id: "s-7-2b", code: "7-2b", titleEn: "Using the Supply Curve to Measure Producer Surplus", titleUz: "Taklif egri chizig'i bilan PS ni o'lchash", Body: S72b },
    { id: "s-7-2c", code: "7-2c", titleEn: "How a Higher Price Raises Producer Surplus", titleUz: "Yuqori narx PS ni qanday oshiradi", Body: S72c },
    { id: "s-7-3a", code: "7-3a", titleEn: "Benevolent Social Planners", titleUz: "Xayrixoh ijtimoiy rejalashtiruvchilar", Body: S73a, check: checks["s-7-3a"] },
    { id: "s-7-3b", code: "7-3b", titleEn: "Evaluating the Market Equilibrium", titleUz: "Bozor muvozanatini baholash", Body: S73b, check: checks["s-7-3b"] },
    { id: "s-7-4", code: "7-4", titleEn: "Conclusion: Market Efficiency and Market Failure", titleUz: "Xulosa: bozor samaradorligi va muvaffaqiyatsizligi", Body: S74, check: checks["s-7-4"] },
  ],
  examTraps: [
    { title: "CS va PS maydonlari", body: "CS — **talab ostida, narx ustida**. PS — **narx ostida, taklif ustida**. Uchburchak yuzi: ½ × asos × balandlik." },
    { title: "Narx tushsa CS qancha oshadi?", body: "To'rtburchak (eski xaridorlar: ΔP × Q₁) **+** uchburchak (yangi xaridorlar). Shuning uchun “more than ΔP × Q₁” (QuickQuiz 3)." },
    { title: "Xarajat = imkoniyat xarajati", body: "Sotuvchining xarajatiga **vaqt qiymati** kiradi: 2 soat × $60 = $120 (QuickQuiz 7)." },
    { title: "Efficiency ≠ equality", body: "Efficiency — total surplus maksimal (pirog kattaligi). Equality — teng taqsimot (bo'linishi)." },
    { title: "Uch xulosa", body: "1) highest WTP buyers, 2) lowest-cost sellers, 3) Q maximizing TS. Muvozanatdan ko'p ishlab chiqarish ham samarasiz." },
  ],
  mistakes: [
    { wrong: "“CS = WTP yig'indisi.”", right: "CS = Σ(WTP − narx) — faqat sotib olganlar uchun." },
    { wrong: "“Ko'proq ishlab chiqarish har doim yaxshi.”", right: "Muvozanatdan keyin xarajat qiymatdan oshadi — total surplus kamayadi." },
    { wrong: "“Samarali bozor — adolatli bozor.”", right: "Samaradorlik taqsimot adolatini kafolatlamaydi." },
    { wrong: "“Producer surplus = foyda = tushum.”", right: "PS = narx − xarajat (imkoniyat xarajatini ham hisobga olgan holda)." },
    { wrong: "“Taklif egri chizig'i balandligi — narx.”", right: "Balandlik — **marjinal sotuvchining xarajati**." },
  ],
  boxes: [
    { id: "cs-organs", kind: "Case Study", titleEn: "Should There Be a Market for Organs?", titleUz: "Organlar bozori bo'lishi kerakmi?", Body: Organs },
    { id: "news-ticket-resellers", kind: "In the News", titleEn: "How Ticket Resellers Help Allocate Scarce Resources", titleUz: "Chipta qayta sotuvchilari cheklangan resurslarni qanday taqsimlaydi", Body: TicketResellers },
  ],
  summary: [
    "**Consumer surplus** — xaridorlarning to'lashga tayyorligi minus haqiqatda to'lagani; u bozorda qatnashishdan olgan foydani o'lchaydi. Talab egri chizig'i ostida va narx ustidagi maydon.",
    "**Producer surplus** — sotuvchilar olgan narx minus ishlab chiqarish xarajati; u sotuvchilarning foydasini o'lchaydi. Narx ostida va taklif egri chizig'i ustidagi maydon.",
    "Total surplusni (CS + PS) maksimal qiladigan taqsimot — **efficient**. Siyosatchilar samaradorlik bilan birga **equality** haqida ham qayg'uradi.",
    "Odatdagi sharoitda talab va taklif muvozanati total surplusni maksimal qiladi: raqobatli bozorlarda ko'rinmas qo'l resurslarni samarali taqsimlaydi.",
    "**Market power** yoki **externalities** kabi bozor muvaffaqiyatsizliklari bo'lganda bozorlar resurslarni samarali taqsimlamaydi.",
  ],
  widgets: { bert: BertWidget, ernie: ErnieWidget },
  gallery: [
    { title: "Auktsion: to'lashga tayyorlik va consumer surplus", Component: () => <StepSurplus kind="buyers" people={buyers} title="Elvis albomi auktsioni" initialPrice={700} maxPrice={1100} unitLabel="Albums" /> },
    { title: "Narx tushsa CS: eski va yangi xaridorlar", Component: () => <PriceChangeSurplus side="consumers" /> },
    { title: "Narx oshsa PS: eski va yangi sotuvchilar", Component: () => <PriceChangeSurplus side="producers" /> },
    { title: "Muvozanat miqdorining samaradorligi", Component: () => <EfficiencyExplorer /> },
  ],
};
