import { AdSignal, MarketStructureQuiz, MonopCompLab } from '../../../components/graphs/Ch17Widgets';
import { Callout } from '../../../components/ui/Kit';
import { BookTable, BoxLink } from '../../../components/ui/Lesson';
import { T } from '../../../components/ui/Term';
import type { ChapterPageContent } from '../../types';
import { checks } from './quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        Kitob do'konida James Patterson trilleri, Maya Angelou memuari, Ron Chernow tarixiy kitobi… Bu qanday bozor? Bir tomondan — raqobatli: yuzlab muallif va nashriyot; istalgan odam kitob yozishi mumkin, soha
        unchalik foydali emas. Boshqa tomondan — monopolistik: har bir kitob noyob, narx MC dan ancha yuqori (qattiq muqovali roman ~$30, qo'shimcha nusxa &lt; $10; e-kitob ~$15, MC = 0).
      </p>
      <p>
        Ko'p real bozorlar mukammal raqobat va monopoliya orasida — <T id="imperfect-competition" />. Bu bob — <T id="monopolistic-competition" /> haqida: “jumbo krevetka” kabi oksimoron tuyuladi, lekin aynan shunday —
        ba'zi jihatlarda monopolistik, ba'zilarida raqobatli. Toshkentdagi kafe, sartaroshxona va kiyim do'konlari — shu bozor.
      </p>
    </div>
  );
}

const S171 = () => (
  <div className="prose-uz">
    <p>
      Nomukammal raqobatning bir turi — <T id="oligopoly" />: bir necha sotuvchi, ular orasida strategik o'zaro ta'sir (18-bob). O'lchov — <T id="concentration-ratio" />: AQShda ko'p sohalarda 50% dan past; samolyot,
      tamaki, avtomobil ijarasi, ekspress yetkazib berishda 90% dan yuqori.
    </p>
    <p>Monopolistik raqobat xususiyatlari:</p>
    <ul>
      <li><b>Many sellers</b> — ko'p firma bir xil mijozlar uchun raqobatlashadi;</li>
      <li><T id="product-differentiation" /> — har firmaning talab egri chizig'i pastga qaragan;</li>
      <li><b>Free entry and exit</b> — firmalar soni foyda 0 bo'lguncha moslashadi.</li>
    </ul>
    <p>
      Figure 1: <b>Nechta firma?</b> Bitta — monopoly; bir nechta — oligopoly; ko'p — keyingi savol: <b>mahsulot?</b> Bir xil — perfect competition; farqli — monopolistic competition. Chegaralar bahsli: AQShdagi ~12
      avtomobil kompaniyasi oligopoliyami? Turli brend sutlari bir xilmi?
    </p>
    <MarketStructureQuiz />
  </div>
);

const S172a = () => (
  <div className="prose-uz">
    <p>
      Qisqa muddatda monopolistik raqobatchi monopolistga o'xshaydi: talab pastga qaragan, MR = MC da miqdor, narx — talab egri chizig'idan. Figure 2: (a) P &gt; ATC — foyda; (b) P &lt; ATC — zararni minimallashtiradi.
    </p>
  </div>
);

const S172b = () => (
  <div className="prose-uz">
    <p>
      Foyda → yangi firmalar kiradi → mijozlar ko'proq mahsulotga bo'linadi → har bir mavjud firmaning talabi <b>chapga</b> siljiydi. Zarar → chiqish → qolganlarining talabi <b>o'ngga</b>. Jarayon foyda nol bo'lguncha:
      talab egri chizig'i ATC ga <b>urinadi</b> (tangency), va aynan shu miqdorda MR = MC (Figure 3).
    </p>
    <ul>
      <li>Monopoliyadagi kabi: <b>P &gt; MC</b> (MR = MC va MR &lt; P).</li>
      <li>Raqobatdagi kabi: <b>P = ATC</b> (erkin kirish-chiqish foydani 0 ga tushiradi). Monopoliyadan farqi — uzoq muddatda foyda yo'q.</li>
    </ul>
    <MonopCompLab />
  </div>
);

const S172c = () => (
  <div className="prose-uz">
    <p>Figure 4 — ikki farq:</p>
    <ul>
      <li>
        <T id="excess-capacity" />: monopolistik raqobatchi ATC ning tushayotgan qismida — efficient scale dan kam ishlab chiqaradi. Ko'proq sotish uchun barcha birliklar narxini tushirishi kerak — shuning uchun
        ortiqcha quvvat bilan ishlash foydaliroq. Mukammal raqobatchi esa ATC minimumida.
      </li>
      <li>
        <T id="markup" />: P &gt; MC. Nol foyda faqat P = ATC ni kafolatlaydi, P = MC ni emas; ATC tushayotgan joyda MC &lt; ATC = P. “Joriy narxda yana bir xaridor kirsinmi?” — raqobatchi befarq (P = MC), monopolistik
        raqobatchi xursand. Hazil: monopolistik raqobatli bozor — sotuvchilar xaridorlarga <b>bayram tabriknomalari</b> yuboradigan bozor.
      </li>
    </ul>
  </div>
);

const S172d = () => (
  <div className="prose-uz">
    <p>Monopolistik raqobat samaralimi? Ikki samarasizlik:</p>
    <ol>
      <li>
        <b>Markup</b> — MC dan yuqori, lekin narxdan past qadrlaydigan xaridorlar olmaydi: monopoliyaning odatiy DWL i. Tuzatish qiyin: farqli mahsulotlar juda ko'p — hammasini tartibga solish ma'muriy yuki ulkan;
        firmalar allaqachon nol foydada — P = MC majburlansa zarar, subsidiya (soliq DWL i bilan) kerak.
      </li>
      <li>
        <b>Firmalar soni ideal bo'lmasligi mumkin</b>: kiruvchi faqat o'z foydasini ko'radi, lekin ikki tashqi effekt bor — <T id="product-variety-externality" /> (+) va <T id="business-stealing-externality" /> (−).
        Qaysi biri katta bo'lishiga qarab mahsulotlar juda ko'p yoki juda kam. Mukammal raqobatda bu effektlar yo'q (bir xil mahsulot, P = MC).
      </li>
    </ol>
    <Callout kind="note">
      Xulosa: monopolistik raqobat mukammal raqobatning barcha yaxshi xossalariga ega emas, ko'rinmas qo'l umumiy surplusni maksimallashtirmaydi. Lekin samarasizliklar nozik, o'lchash va tuzatish qiyin — siyosat bozor
      natijasini oson yaxshilay olmaydi.
    </Callout>
  </div>
);

const S173a = () => (
  <div className="prose-uz">
    <p>
      Reklama — monopolistik raqobatning tabiiy xususiyati: P &gt; MC bo'lgani uchun har bir firma ko'proq xaridor jalb qilmoqchi. Iste'mol tovarlari (dorilar, atir, gazli ichimlik, ustara, yorma, it ovqati) tushumning
      10–20% ini, sanoat tovarlari — juda kam, bir xil tovarlar (bug'doy, tuz, shakar, neft) — hech narsa sarflamaydi. Butun iqtisodiyotda ~2%.
    </p>
    <BookTable
      head={['Tanqidchilar', 'Himoyachilar']}
      rows={[
        ['Didlarni **manipulyatsiya** qiladi — reklama axborot emas, psixologik (plyajdagi baxtli odamlar va gazli ichimlik)', '**Axborot** beradi: narxlar, yangi mahsulotlar, qayerdan olish mumkin'],
        ['**Raqobatni bo‘g‘adi**: sun’iy farqlanish va brendga sodiqlik → kam elastik talab → katta markup', '**Raqobatni kuchaytiradi**: xaridorlar narx farqidan foydalanadi, yangi firmalar osonroq kiradi'],
      ]}
    />
    <p>
      Vaqt o'tib “reklama raqobatni oshiradi” qarashi kuchaydi: sudlar advokat, shifokor va farmatsevtlar reklamasini taqiqlovchi qonunlarni bekor qildi — ular asosan raqobatni cheklagan edi.
    </p>
    <BoxLink id="cs-ad-prices">Case Study: How Advertising Affects Prices</BoxLink>
  </div>
);

const S173b = () => (
  <div className="prose-uz">
    <p>
      Hech qanday aniq axborotsiz reklama ham axborot berishi mumkin: firmaning reklamaga <b>ko'p pul sarflashga tayyorligi</b> — sifat signali. General Mills va Kellogg yangi yorma ishlab chiqdi ($5 quti, MC = 0).
      $20 mln reklama 1 mln iste'molchini sinab ko'rishga undaydi.
    </p>
    <AdSignal />
    <p>
      Reklama mazmuni ahamiyatsiz — iste'molchilar reklama qimmat ekanini biladi. Arzon reklama signal bera olmaydi. Shuning uchun firmalar mashhur aktyorlarga katta haq to'laydi — axborot reklamaning mazmunida emas,
      uning mavjudligi va qimmatligida.
    </p>
  </div>
);

const S173c = () => (
  <div className="prose-uz">
    <p>
      Ko'p bozorda brend va generik mahsulotlar raqobatlashadi: Bayer va oddiy aspirin, Coke/Pepsi va kam tanilgan kolalar. Brendli firmalar ko'proq reklama qiladi va qimmatroq sotadi. <T id="brand-names" />:
    </p>
    <ul>
      <li>
        <b>Tanqid</b>: iste'molchilar mavjud bo'lmagan farqlarni ko'radi — reklama tufayli irratsionallik. Monopolistik raqobat nazariyasi asoschilaridan Edward Chamberlin davlat trademarklarni himoya qilmasligini
        taklif qilgan.
      </li>
      <li>
        <b>Himoya</b>: (1) oldindan baholab bo'lmaydigan sifat haqida axborot — notanish shaharda McDonald's bir xil mahsulot beradi; (2) sifatni saqlash rag'bati — bitta McDonald's'da zaharlanish butun brend
        obro'siga zarba, mahalliy restoranda esa faqat o'sha restoran yopiladi.
      </li>
    </ul>
  </div>
);

const S174 = () => (
  <div className="prose-uz">
    <BookTable
      caption="Table 1 — Monopolistic Competition: Between Perfect Competition and Monopoly"
      head={['', 'Perfect competition', 'Monopolistic competition', 'Monopoly']}
      rows={[
        ['*Barcha uchtasida*', '', '', ''],
        ['Goal of firms', 'Maximize profits', 'Maximize profits', 'Maximize profits'],
        ['Rule for maximizing', 'MR = MC', 'MR = MC', 'MR = MC'],
        ['SR economic profits?', 'Yes', 'Yes', 'Yes'],
        ['*Monopoliya bilan umumiy*', '', '', ''],
        ['Price taker?', 'Yes', 'No', 'No'],
        ['Price', 'P = MC', 'P > MC', 'P > MC'],
        ['Welfare-maximizing output?', 'Yes', 'No', 'No'],
        ['*Mukammal raqobat bilan umumiy*', '', '', ''],
        ['Number of firms', 'Many', 'Many', 'One'],
        ['Entry in the long run?', 'Yes', 'Yes', 'No'],
        ['LR economic profits?', 'No', 'No', 'Yes'],
      ]}
    />
    <p>
      Nazariya ko'p bozorlarni tasvirlaydi, lekin siyosat uchun oddiy maslahat bermaydi: nazariyotchi nuqtai nazaridan taqsimot mukammal emas, amaliy siyosatchi uchun esa uni yaxshilash uchun kam narsa qilish mumkin.
    </p>
  </div>
);

function AdPrices() {
  return (
    <div className="prose-uz">
      <p>
        Reklama narxlarga qanday ta'sir qiladi? Mahsulotlarni ko'proq farqli ko'rsatsa — kam elastik talab, yuqori narx. Eng arzon sotuvchini topishni osonlashtirsa — elastikroq talab, past narx.
      </p>
      <ul>
        <li>
          <b>Lee Benham (1972)</b>: 1960-yillarda shtatlar optometristlar reklamasiga turlicha qoidalar qo'ygan (Florida: “jamoat salomatligi, xavfsizligi va farovonligi manfaatida” taqiq, optometristlar qo'llagan).
          Tabiiy tajriba: taqiqlangan shtatlarda ko'zoynak o'rtacha <b>$33</b> (2021 dollarida $288), cheklanmaganlarda <b>$26</b> ($227) — reklama narxni 20% dan ko'p kamaytirgan.
        </li>
        <li>
          <b>Rhode Island, 1996</b>: Oliy sud alkogol narxlarini reklama qilish taqiqini bekor qildi. Milyo va Waldfogel (1999) qo'shni Massachusetts bilan solishtirdi: reklama qila boshlagan do'konlar narxni ko'pincha
          20% dan ko'p tushirgan — faqat o'zi yoki raqiblari reklama qilgan mahsulotlarda — va ko'proq xaridor jalb qilgan.
        </li>
      </ul>
      <p>Xulosa: ko'p bozorlarda reklama raqobatni kuchaytiradi va iste'molchilar uchun narxlarni pasaytiradi.</p>
    </div>
  );
}

const Mc = () => <MonopCompLab />;
const Structure = () => <MarketStructureQuiz />;
const Signal = () => <AdSignal />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    "To'rt bozor tuzilmasini farqlash: monopoly, **oligopoly**, **monopolistic competition**, perfect competition",
    "Monopolistik raqobatchining qisqa va uzoq muddatli muvozanati — **tangency**, P = ATC, P > MC",
    "Mukammal raqobat bilan farqlar: **excess capacity** va **markup**",
    "Farovonlik: markup DWL i va kirishning ikki tashqi effekti",
    "Reklama bahsi, **reklama — sifat signali** va **brend nomlari**",
  ],
  sections: [
    { id: "s-17-1", code: "17-1", titleEn: "Between Monopoly and Perfect Competition", titleUz: "Monopoliya va mukammal raqobat orasida", Body: S171, check: checks["s-17-1"] },
    { id: "s-17-2a", code: "17-2a", titleEn: "The Monopolistically Competitive Firm in the Short Run", titleUz: "Qisqa muddatda monopolistik raqobatchi", Body: S172a, check: checks["s-17-2a"] },
    { id: "s-17-2b", code: "17-2b", titleEn: "The Long-Run Equilibrium", titleUz: "Uzoq muddatli muvozanat", Body: S172b, check: checks["s-17-2b"] },
    { id: "s-17-2c", code: "17-2c", titleEn: "Monopolistic versus Perfect Competition", titleUz: "Monopolistik va mukammal raqobat", Body: S172c, check: checks["s-17-2c"] },
    { id: "s-17-2d", code: "17-2d", titleEn: "Monopolistic Competition and the Welfare of Society", titleUz: "Monopolistik raqobat va jamiyat farovonligi", Body: S172d, check: checks["s-17-2d"] },
    { id: "s-17-3a", code: "17-3a", titleEn: "The Debate over Advertising", titleUz: "Reklama haqidagi bahs", Body: S173a, check: checks["s-17-3a"] },
    { id: "s-17-3b", code: "17-3b", titleEn: "Advertising as a Signal of Quality", titleUz: "Reklama — sifat signali", Body: S173b, check: checks["s-17-3b"] },
    { id: "s-17-3c", code: "17-3c", titleEn: "Brand Names", titleUz: "Brend nomlari", Body: S173c, check: checks["s-17-3c"] },
    { id: "s-17-4", code: "17-4", titleEn: "Conclusion", titleUz: "Xulosa", Body: S174 },
  ],
  examTraps: [
    { title: "Tangency", body: "Uzoq muddatda talab ATC ga **urinadi** (kesmaydi), shu Q da MR = MC. P = ATC, lekin P > MC." },
    { title: "Kirish sharti", body: "Kirish — **P > ATC** (QQ 4); ishlab chiqarishni oshirish — **MR > MC** (QQ 3)." },
    { title: "Reklama va elastiklik", body: "Sodiqlik → elastiklik ↓, markup ↑ (QQ 6). Axborot → elastiklik ↑, markup ↓ (QQ 7)." },
    { title: "Signal sharti", body: "Yaxshi mahsulot uchun mijoz jalb qilish foydasi katta bo'lsa; reklama mazmuni emas, narxi (QQ 8)." },
    { title: "Oligopoliya ≠ monopolistik raqobat", body: "Oligopoliya — **kam** firma; monopolistik raqobat — **ko'p** firma, farqli mahsulot." },
  ],
  mistakes: [
    { wrong: "“Monopolistik raqobatchi uzoq muddatda foyda oladi.”", right: "Erkin kirish foydani **nolga** tushiradi; LR foyda — monopoliya xususiyati." },
    { wrong: "“Nol foyda bo'lsa, P = MC.”", right: "Nol foyda faqat P = ATC; ATC tushayotgan joyda MC < ATC, shuning uchun P > MC." },
    { wrong: "“Monopolistik raqobatchi efficient scale da ishlaydi.”", right: "Undan **kam** — excess capacity." },
    { wrong: "“Reklama har doim narxlarni oshiradi.”", right: "Benham: reklama ko'zoynak narxini 20%+ tushirgan." },
  ],
  boxes: [{ id: "cs-ad-prices", kind: "Case Study", titleEn: "How Advertising Affects Prices", titleUz: "Reklama narxlarga qanday ta'sir qiladi", Body: AdPrices }],
  summary: [
    "Monopolistik raqobatli bozorning uch xususiyati: **ko'p firma**, **farqli mahsulotlar** va **erkin kirish-chiqish**.",
    "Monopolistik raqobatning uzoq muddatli muvozanati mukammal raqobatnikidan ikki jihatda farq qiladi: (1) har bir firmada **ortiqcha quvvat** — u ATC ning tushayotgan qismida ishlaydi; (2) har bir firma **MC dan yuqori narx** qo'yadi.",
    "Monopolistik raqobat mukammal raqobatning barcha yaxshi xossalariga ega emas: markup sababli monopoliyaning odatiy DWL i bor; firmalar (va mahsulot turlari) soni juda ko'p yoki juda kam bo'lishi mumkin. Amalda siyosatchilarning bu samarasizliklarni tuzatish imkoniyati cheklangan.",
    "Mahsulot farqlanishi **reklama** va **brend nomlari**ni keltirib chiqaradi. Tanqidchilar ular didlarni manipulyatsiya qiladi va raqobatni kamaytiradi deydi; himoyachilar — iste'molchilarni xabardor qiladi va narx hamda sifat bo'yicha raqobatni kuchaytiradi.",
  ],
  widgets: { mc: Mc, structure: Structure, signal: Signal },
  gallery: [
    { title: "Monopolistik raqobat: tangency, markup, excess capacity", Component: Mc },
    { title: "To'rt bozor tuzilmasi: tasniflash o'yini", Component: Structure },
    { title: "Reklama — sifat signali (General Mills va Kellogg)", Component: Signal },
  ],
};
