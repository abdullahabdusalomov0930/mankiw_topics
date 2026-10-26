import { CircularFlow, GraphingSandbox, PPFExplorer } from '../../../components/graphs/Ch2Widgets';
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
        Matematiklar aksioma va integral haqida, psixologlar ego va kognitiv dissonans haqida, huquqshunoslar tort va estoppel haqida gapiradi. Iqtisodchilarning ham o'z
        tili bor: <i>supply, demand, elasticity, comparative advantage, consumer surplus, deadweight loss</i>. Bu sayt aynan shuning uchun har bir atamani inglizcha
        beradi — imtihonda va kitobda shu so'zlar uchraydi.
      </p>
      <p>
        Bu bob — metodologiya: iqtisodchi savolga qanday yondashadi? Yangiliklarni tushunish, oila byudjetini boshqarish yoki siyosatchining tirbandlikdan iqlim o'zgarishigacha
        bergan va'dasini baholashda “iqtisodchi kabi fikrlash” yaxshiroq qarorlarga olib keladi.
      </p>
    </div>
  );
}

const S21 = () => (
  <div className="prose-uz">
    <p>
      Iqtisodchilar fizik materiyani, biolog hayotni o'rgangandek iqtisodiyotni <b>olim xolisligi</b> bilan o'rganadi: nazariya tuzadi, ma'lumot yig'adi va nazariyani tasdiqlash
      yoki rad etish uchun tahlil qiladi. Ularda probirka va oq xalat yo'q, lekin fanning mohiyati — <T id="scientific-method" />. Eynshteyn: “Butun fan — kundalik
      fikrlashning sayqallanishi.”
    </p>
  </div>
);

const S21a = () => (
  <div className="prose-uz">
    <p>
      Nyuton olma tushganini ko'rib, tortishish nazariyasini yaratdi; keyingi sinovlar uni ko'p holatlarda tasdiqladi (lekin hammasida emas — Eynshteyn ko'rsatgandek).
      Iqtisodda ham shunday: narxlar tez o'sayotgan mamlakatdagi iqtisodchi “ko'p pul bosilsa, inflyatsiya bo'ladi” degan nazariya tuzadi va ko'p mamlakatlarning pul va narx
      ma'lumotlari bilan sinaydi. Ular korrelyatsiyalashsa (aslida ko'pincha shunday) — nazariyaga ishonch oshadi.
    </p>
    <p>
      Muammo: tajriba o'tkazish ko'pincha <b>imkonsiz</b> — inflyatsiyani o'rganish uchun mamlakat pul siyosatini manipulyatsiya qilib bo'lmaydi. Shuning uchun iqtisodchilar
      astronomlar kabi tarixning <b>tabiiy tajribalaridan</b> foydalanadi: Yaqin Sharqdagi urush neft ta'minotini uzib, narxni keskin oshirsa — asosiy tabiiy resursning
      iqtisodiyotga ta'sirini o'rganish imkoniyati.
    </p>
  </div>
);

const S21b = () => (
  <div className="prose-uz">
    <p>
      O'n qavatli binodan tushgan marmar sharcha qancha vaqtda yerga yetadi? Fizik “vakuumda tushadi” deb faraz qiladi. Bu noto'g'ri, lekin havo ishqalanishi juda kichik —
      javobga deyarli ta'sir qilmaydi. Xuddi shu og'irlikdagi <b>plyaj to'pi</b> uchun esa bu faraz katta xatoga olib keladi.
    </p>
    <p>
      Iqtisodchilar ham <T id="assumptions" /> qiladi: savdoni o'rganish uchun dunyoda 2 mamlakat va 2 tovar bor deb faraz qilamiz (3-bob). Turli savollarga turli farazlar:
      pul miqdori o'zgarishining <b>qisqa muddatli</b> ta'sirida narxlar deyarli qotgan (jurnal narxi bir necha yilda bir o'zgaradi), <b>uzoq muddatda</b> — to'liq egiluvchan.
    </p>
    <Callout kind="tip">Ilmiy fikrlash san'ati — qaysi farazni qilishni tanlash. Faraz yomon emas; noto'g'ri savol uchun noto'g'ri faraz yomon.</Callout>
  </div>
);

const S21c = () => (
  <div className="prose-uz">
    <p>
      Maktab biologiya o'qituvchisi plastik odam modelidan foydalanadi: hamma mushak va tomir yo'q, lekin organlar qanday joylashganini ko'rsatadi — real emasligi tufayli
      foydali. <T id="economic-model" />lar ham shunday, faqat diagramma va tenglamalardan iborat. Hamma modellar farazlar asosida quriladi va faktlar talab qilsa qayta
      ko'rib chiqiladi. Statistik George Box: <i>“All models are wrong, but some are useful.”</i>
    </p>
  </div>
);

const S21d = () => (
  <div className="prose-uz">
    <p>
      Birinchi model — <T id="circular-flow-diagram" />. Unda faqat ikki qaror qabul qiluvchi: <b>firms</b> va <b>households</b>. Firmalar{' '}
      <T id="factors-of-production" /> (mehnat, yer, kapital) yordamida tovar ishlab chiqaradi; uy xo'jaliklari omillarga egalik qiladi va hamma tovarni iste'mol qiladi.
    </p>
    <ul>
      <li><b>Tovar va xizmatlar bozori</b>: uy xo'jaliklari — xaridor, firmalar — sotuvchi.</li>
      <li><b>Ishlab chiqarish omillari bozori</b>: uy xo'jaliklari — sotuvchi, firmalar — xaridor.</li>
    </ul>
    <CircularFlow />
    <p>
      Bir dollar sayohati: hamyoningizdagi $1 → qahvaxonada kofe → firma <b>tushumi</b> → ijara, barista maoshi yoki egasining <b>foydasi</b> → kimningdir <b>daromadi</b> →
      yana hamyonda. Realroq model davlat (soliqlar) va xalqaro savdoni (Keniyadagi dehqondan kofe donasi) qo'shadi, lekin asosiy tushuncha uchun shart emas.
    </p>
    <Callout kind="exam">QuickQuiz 2: omillar bozorida <b>households = sellers</b>, <b>firms = buyers</b>. Tovar bozorida — aksincha.</Callout>
  </div>
);

const S21e = () => (
  <div className="prose-uz">
    <p>
      Ikkinchi model matematikaga asoslangan — <T id="production-possibilities-frontier" />. Iqtisodiyot faqat mashina va kompyuter ishlab chiqaradi. Hamma resurs mashinaga —
      <b> 1,000 mashina</b>, hammasi kompyuterga — <b>3,000 kompyuter</b>. A: 600 mashina va 2,200 kompyuter; B: 700 va 2,000. C — erishib bo'lmaydi (resurs yetmaydi).
    </p>
    <ul>
      <li><b>Efficiency</b>: chegara ustidagi nuqta (A) — bitta tovarni ko'paytirish uchun ikkinchisini kamaytirish shart. D (300, 1,000) — samarasiz (masalan, keng ishsizlik): D → A da ikkalasi ham oshadi.</li>
      <li><b>Trade-off va opportunity cost</b>: A → B — 100 mashina uchun 200 kompyuter, ya'ni 1 mashina = <b>2 kompyuter</b>. Imkoniyat xarajati = chegaraning <b>nishabi</b>.</li>
      <li><b>Bowed out</b>: mashina ko'p (E, tik) — mashina qimmat, chunki eng yaxshi kompyuter mutaxassislari ham mashina yasashga o'tkaziladi; mashina kam (F, yotiq) — arzon, chunki kompyuterga yaroqsiz avtoustalar o'tkaziladi.</li>
      <li><b>Economic growth</b> (Figure 3): kompyuter texnologiyasi yaxshilansa — 1,000 mashina chekkasi o'zgarmaydi, kompyuter chekkasi 4,000 ga chiqadi, chegara tashqariga siljiydi. Jamiyat A dan G ga (650 mashina, 2,300 kompyuter) o'tishi mumkin — ikkalasi ham ko'proq.</li>
    </ul>
    <PPFExplorer />
    <Callout kind="note" title="Kitobdagi raqamlar haqida">
      Kitob faqat chekka nuqtalar, A, B, D va G raqamlarini beradi; C, E, F faqat rasmda. Grafikdagi egri chiziq kitob nuqtalariga mos keladigan silliq funksiya
      (A va B ≈ ±10 aniqlikda). G (650, 2,300) kitobda yangi chegara ustida chizilgan; bizning soddalashtirilgan siljishda u chegaraning ichida qoladi — kitob rasmi sxematik.
    </Callout>
  </div>
);

const S21f = () => (
  <div className="prose-uz">
    <p>
      Biologiya molekula, hujayra va turlar evolyutsiyasi darajalarida o'rganilgani kabi, iqtisodiyot ham turli darajalarda o'rganiladi. <T id="microeconomics" /> — uy xo'jaliklari va
      firmalar qarorlari va aniq bozorlar (Nyu-Yorkda ijara nazorati, chet el raqobatining avtosanoatga ta'siri, ta'limning maoshga ta'siri). <T id="macroeconomics" /> —
      butun iqtisodiyot (davlat qarzi, ishsizlik darajasi, turmush darajasini oshirish siyosati).
    </p>
    <p>
      Ular chambarchas bog'liq: daromad solig'ini kamaytirishning umumiy ishlab chiqarishga ta'sirini o'rganish uchun uy xo'jaliklari xarajat qarorlarini tahlil qilish kerak.
      Lekin savollari turlicha, shuning uchun modellari va kurslari ham alohida.
    </p>
  </div>
);

const S22a = () => (
  <div className="prose-uz">
    <p>
      Iqtisodchi dunyoni <b>tushuntirganda</b> — olim, uni <b>yaxshilash</b> bo'yicha maslahat berganda — siyosat maslahatchisi. Ikki da'vo:
    </p>
    <ul>
      <li><b>Prisha</b>: “Minimum-wage laws cause unemployment.” — olimdek: dunyo qanday ekanini tasvirlaydi.</li>
      <li><b>Noah</b>: “The government should raise the minimum wage.” — maslahatchidek: dunyo qanday bo'lishi kerakligini aytadi.</li>
    </ul>
    <p>
      Birinchisi — <T id="positive-statements" label="positive statement" /> (descriptive), ikkinchisi — <T id="normative-statements" label="normative statement" /> (prescriptive).
      Pozitivni dalillar bilan tekshirsa bo'ladi; normativ uchun <b>qadriyatlar</b> ham kerak. Ular bog'liq: Prisha da'vosi to'g'ri bo'lsa, u Noah xulosasini rad etishi mumkin;
      ishsizlik ta'siri kichik bo'lsa — qabul qilishi mumkin. Tadqiqotchi normativ qarashlarini chetga surib, ma'lumotni xolis tekshirishi kerak.
    </p>
    <Callout kind="mistake">“Positive” — “optimistik” degani emas. “Ishsizlik 2% oshadi” ham positive statement.</Callout>
    <BoxLink id="news-tech-economists">In the News: Why Tech Companies Hire Economists</BoxLink>
  </div>
);

const S22b = () => (
  <div className="prose-uz">
    <p>
      Prezident Truman “bir qo'lli iqtisodchi” istagan: maslahatchilari doim “<i>On the one hand… On the other hand…</i>” derdi. Sabab — 1-bob tamoyili: <b>trade-offs</b>.
      Siyosat samaradorlikni oshirib, tenglikni kamaytirishi; kelajak avlodga yordam berib, hozirgisiga zarar qilishi mumkin. “Hamma qaror oson” degan iqtisodchiga ishonmang.
    </p>
    <p>
      1946-yildan AQSh prezidentiga <b>Council of Economic Advisers</b> (3 a'zo, bir necha o'nlab iqtisodchi) maslahat beradi va har yili <i>Economic Report of the President</i>ni
      yozadi (kitob muallifi Mankiw 2003–2005 yillarda uning raisi bo'lgan). Iqtisodchilar OMB (xarajat rejalari), Treasury (soliq siyosati), Department of Labor, Department of
      Justice (antimonopoliya), Congressional Budget Office va Federal Reserve'da ishlaydi.
    </p>
    <p>
      Keynes (1935): iqtisodchilar va faylasuflar g'oyalari — to'g'ri bo'lsa ham, noto'g'ri bo'lsa ham — o'ylanganidan kuchliroq; amaliyotchilar ko'pincha “qandaydir o'tib
      ketgan iqtisodchining quli”. Bugun bunday ta'sirli “akademik yozuvchi” ko'pincha Keynesning o'zi.
    </p>
  </div>
);

const S22c = () => (
  <div className="prose-uz">
    <p>
      Darslik siyosatni go'yo <b>xayrixoh va qudratli qirol</b> yaratadigandek ko'radi. Real prezident iqtisodchilardan keyin kommunikatsiya maslahatchilari (jamoatchilikka
      qanday tushuntirish), matbuot (OAV va ijtimoiy tarmoqlar qanday yozadi), qonunchilik (Kongress qanday qabul qiladi) va siyosiy maslahatchilarni (qaysi guruhlar qo'llaydi
      yoki qarshi chiqadi) tinglaydi. Iqtisodchi maslahati — murakkab retseptning faqat bir ingrediyenti.
    </p>
  </div>
);

const S23 = () => (
  <div className="prose-uz">
    <p>
      Bernard Shou: “Hamma iqtisodchilarni bir qatorga yotqizsangiz ham, ular xulosaga yetmaydi.” Reygan: iqtisodchilar uchun <i>Trivial Pursuit</i>da 100 savol va 3,000 javob bo'lardi.
      Ikki asosiy sabab:
    </p>
    <ol>
      <li>Dunyo qanday ishlashi haqidagi <b>pozitiv nazariyalar</b> to'g'riligida kelishmaslik.</li>
      <li>Turli <b>qadriyatlar</b> → siyosat maqsadi haqida turli normativ qarashlar.</li>
    </ol>
  </div>
);

const S23a = () => (
  <div className="prose-uz">
    <p>
      Astronomlar bir paytlar Yer yoki Quyosh markazdami deb bahslashgan. Fan — davom etayotgan izlanish. Iqtisodchilar ham turli nazariyalar haqida turlicha “sezgi”ga ega yoki
      o'zgaruvchilar bog'liqligini o'lchaydigan <b>parametrlar hajmini</b> turlicha baholaydi.
    </p>
    <p>
      Misol: daromad solig'i o'rniga <b>iste'mol solig'i</b>. Tarafdorlar: jamg'arilgan daromad soliqqa tortilmaydi → jamg'arma ↑ → kapital ↑ → unumdorlik va turmush darajasi
      tezroq o'sadi. Raqiblar: jamg'arma soliqqa deyarli javob bermaydi. Turli normativ xulosa — turli <b>pozitiv</b> qarashdan.
    </p>
  </div>
);

const S23b = () => (
  <div className="prose-uz">
    <p>
      Jack va Jill shahar qudug'idan bir xil suv oladi; quduqni saqlash uchun soliq:
    </p>
    <BookTable
      head={['', 'Daromad', 'Soliq', 'Ulushi']}
      rows={[
        ['Jill', '$150,000', '$15,000', '10%'],
        ['Jack', '$40,000', '$6,000', '15%'],
      ]}
    />
    <p>
      Bu adolatlimi? Kim ko'p, kim kam to'layapti? Jack kam daromadi nogironlikdan yoki aktyorlik karyerasini tanlaganidanmi — farqi bormi? Jill boyligi meros yoki uzoq soatlik
      zerikarli ishdanmi? Bunday savollarga fan javob bermaydi: iqtisodiyot fanini mukammallashtirish Jack yoki Jill ko'p to'layotganini aytmaydi.
    </p>
  </div>
);

const S23c = () => (
  <div className="prose-uz">
    <p>
      Kelishmovchilikni bo'rttirmaslik kerak — iqtisodchilar o'ylanganidan ko'proq kelishadi:
    </p>
    <ul>
      <li>“<i>A ceiling on rents reduces the quantity and quality of housing available.</i>” — <b>93%</b> rozi (6-bob). Shunga qaramay ko'p shaharlar ijara nazoratini qo'llaydi.</li>
      <li>“<i>Tariffs and import quotas usually reduce general economic welfare.</i>” — <b>93%</b> rozi (9-bob).</li>
    </ul>
    <p>
      Nega bunday siyosatlar saqlanib qoladi? Siyosiy jarayon to'siqlari — yoki iqtisodchilar jamoatchilikni hali ishontira olmagani. Kitob davomida <b>Ask the Experts</b>{' '}
      qutilari IGM Economic Experts Panel so'rovlarini ko'rsatadi: qachon iqtisodchilar bir fikrda, qachon bo'lingan, qachon bilmaydi.
    </p>
    <AskExperts
      title="Ticket Resale"
      source="IGM, April 16, 2012"
      statement="Laws that limit the resale of tickets for entertainment and sports events make potential audience members for those events worse off on average."
      note="Foizlar kitobdagi diagrammada rasm sifatida berilgan va matndan o'qib bo'lmadi (inventory.md ga qarang). Kitob xulosasi: ko'p iqtisodchilar qonun chiqaruvchilar emas, chipta qayta sotuvchilar tomonida. 7-bobdagi “ticket resellers” bilan solishtiring."
    />
  </div>
);

const S24 = () => (
  <div className="prose-uz">
    <p>
      Keynes maslahati: iqtisodiyot oson fan tuyuladi, lekin unda kamdan-kam kishi ustun bo'ladi, chunki usta iqtisodchi ma'lum darajada <b>matematik, tarixchi, davlat arbobi va
      faylasuf</b> bo'lishi kerak: belgilarni tushunib, so'zlar bilan gapirishi; xususiyni umumiy nuqtai nazardan ko'rishi; kelajak uchun hozirni o'tmish nurida o'rganishi kerak.
      Bu og'ir talab, lekin mashq bilan iqtisodchi kabi fikrlashga ko'nikasiz.
    </p>
  </div>
);

const SApp = () => (
  <div className="prose-uz">
    <p>
      Grafiklar ikki maqsadga xizmat qiladi: nazariyani vizual ifodalash va ma'lumotdagi qonuniyatlarni topish. <b>Bitta o'zgaruvchi</b> grafiklari (Figure A-1): <b>pie chart</b>{' '}
      (AQSh milliy daromadi manbalari, 2020), <b>bar graph</b> (to'rt mamlakatda o'rtacha daromad), <b>time-series graph</b> (AQSh biznes sektorida mehnat unumdorligi).
    </p>
    <p>
      <b>Ikki o'zgaruvchi — koordinatalar tizimi.</b> Har bir talaba — <T id="ordered-pair" />: Albert E. (25 soat/hafta, 3.5 GPA), “what-me-worry?” sinfdoshi Alfred E. (5, 2.0).
      Bunday grafik — <T id="scatterplot" />. O'qish vaqti va GPA bir yo'nalishda — <T id="correlation" label="positive correlation" />; ziyofat vaqti va baho — negative.
    </p>
    <p>
      <b>Egri chiziqlar.</b> Iqtisodchilar ko'pincha boshqa hamma narsani o'zgarmas ushlab, bitta o'zgaruvchining ta'sirini ko'radi. Table A-1 — Emma qancha roman olishi narx
      va daromadga bog'liq:
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
      Narx tushsa ($8 → $7), Emma 13 dan 17 ga o'tadi — egri <b>bo'ylab harakat</b>. Daromad oshsa ($40k → $50k), $8 da 13 dan 16 ga — egri <b>siljiydi</b> (D1 → D2):{' '}
      <T id="movement-vs-shift" />. <T id="slope" />: <M tex="\Delta y/\Delta x = (6-8)/(21-13) = -1/4" />.
    </p>
    <GraphingSandbox />
    <p>
      <b>Sabab va oqibat.</b> Ikki tuzoq: <T id="omitted-variable" /> (zajigalkalar va saraton — haqiqiy sabab chekish; Big Brother Statistical Services zajigalkaga soliq taklif
      qiladi!) va <T id="reverse-causality" /> (politsiya va jinoyat — Anarxistlar assotsiatsiyasi politsiyani bekor qilishni taklif qiladi). Vaqt tartibi ham isbot emas: miniven
      bola tug'ilishidan oldin olinadi.
    </p>
    <Callout kind="exam">
      Grafikda sababiyat da'vo qilinsa, ikki savol bering: (1) ko'rinmayotgan <b>uchinchi o'zgaruvchi</b> buni tushuntira oladimi? (2) sabab <b>teskari</b> yo'nalishda emasmi?
    </Callout>
  </div>
);

function TechEconomists() {
  return (
    <div className="prose-uz">
      <Source>Steve Lohr, “Goodbye, Ivory Tower. Hello, Silicon Valley Candy Store,” New York Times, September 4, 2016</Source>
      <p>
        Jack Coles sakkiz yil Harvard Business School'da samarali bozorlar dizaynini o'rgangan (Nobel laureati Alvin Roth bilan). 2013-yilda u <b>Airbnb</b>ga o'tdi — katta
        ma'lumotlar va katta maoshlar bilan iqtisodchilarni jalb qilayotgan texnologik kompaniyalardan biri. Uning so'zlari bilan, bu iqtisodchilar uchun haqiqiy “shirinliklar do'koni”.
      </p>
      <ul>
        <li>Odatda firmalar iqtisodchilarni makro trendlar (tanazzullar, valyuta kurslari) uchun yollagan; texnologik iqtisodchilar esa <b>iste'molchi xatti-harakati izlarini</b> — mikro ma'lumotlarni — o'rganadi.</li>
        <li><b>Netflix</b>: Randall Lewis reklama samaradorligini o'lchaydi — <b>korrelyatsiyami yoki sababiyatmi</b>: qaysi harakatlar reklamadan keyin tasodifan, qaysilari reklama tufayli?</li>
        <li><b>Airbnb</b>: kechiktirish (procrastination) — bronlar oxirgi daqiqadami yoki haftalar oldinmi; yosh, jins va mamlakatga qarab farq qiladimi?</li>
        <li><b>Google</b>: Hal Varian (2002-yildan) AdWords auksion bozorini sayqallagan. <b>Amazon</b> — eng faol yollovchi; <b>Amazon va Microsoft</b> bulutli xizmatlarda peak-load muammosini auksion yoki chegirmalar bilan hal qilmoqda.</li>
        <li>Microsoft bosh iqtisodchisi Preston McAfee: iqtisodiyot qarorlarni <b>belgilamaydi</b>, ularga <b>ta'sir qiladi</b>.</li>
      </ul>
      <Callout kind="tip" title="Muhokama uchun savollar">
        <ol>
          <li>Tez-tez foydalanadigan firmalaringizni o'ylang (Uzum, Yandex Go, Click). Iqtisodchilar ularni qanday yaxshilashi mumkin?</li>
          <li>Iqtisodni o'rgangach, qaysi biznesda ishlash eng qiziq bo'lardi?</li>
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
    "Iqtisodiyot nima uchun **fan** ekanini, farazlar va modellar rolini tushuntirish",
    "**Circular-flow diagram** da pul va real oqimlarni kuzatish",
    "**PPF** yordamida samaradorlik, trade-off, imkoniyat xarajati va o'sishni ko'rsatish",
    "**Microeconomics** va **macroeconomics**, **positive** va **normative** da'volarni farqlash",
    "Nega iqtisodchilar kelishmasligini (ilmiy baho va qadriyatlar) va qayerda kelishishini bilish",
    "Appendix: scatterplot, **slope**, egri bo'ylab harakat vs siljish, **omitted variable** va **reverse causality**",
  ],
  sections: [
    { id: "s-2-1", code: "2-1", titleEn: "The Economist as Scientist", titleUz: "Iqtisodchi — olim", Body: S21 },
    { id: "s-2-1a", code: "2-1a", titleEn: "The Scientific Method: Observation, Theory, and More Observation", titleUz: "Ilmiy usul: kuzatish, nazariya va yana kuzatish", Body: S21a, check: checks["s-2-1a"] },
    { id: "s-2-1b", code: "2-1b", titleEn: "The Role of Assumptions", titleUz: "Farazlarning roli", Body: S21b, check: checks["s-2-1b"] },
    { id: "s-2-1c", code: "2-1c", titleEn: "Economic Models", titleUz: "Iqtisodiy modellar", Body: S21c, check: checks["s-2-1c"] },
    { id: "s-2-1d", code: "2-1d", titleEn: "Our First Model: The Circular-Flow Diagram", titleUz: "Birinchi model: aylanma oqim diagrammasi", Body: S21d, check: checks["s-2-1d"] },
    { id: "s-2-1e", code: "2-1e", titleEn: "Our Second Model: The Production Possibilities Frontier", titleUz: "Ikkinchi model: ishlab chiqarish imkoniyatlari chegarasi", Body: S21e, check: checks["s-2-1e"] },
    { id: "s-2-1f", code: "2-1f", titleEn: "Microeconomics and Macroeconomics", titleUz: "Mikro va makroiqtisodiyot", Body: S21f, check: checks["s-2-1f"] },
    { id: "s-2-2a", code: "2-2a", titleEn: "Positive versus Normative Analysis", titleUz: "Pozitiv va normativ tahlil", Body: S22a, check: checks["s-2-2a"] },
    { id: "s-2-2b", code: "2-2b", titleEn: "Economists in Washington", titleUz: "Vashingtondagi iqtisodchilar", Body: S22b, check: checks["s-2-2b"] },
    { id: "s-2-2c", code: "2-2c", titleEn: "Why Economists' Advice Is Often Not Followed", titleUz: "Nega iqtisodchilar maslahatiga ko'pincha amal qilinmaydi", Body: S22c, check: checks["s-2-2c"] },
    { id: "s-2-3", code: "2-3", titleEn: "Why Economists Disagree", titleUz: "Nega iqtisodchilar kelishmaydi", Body: S23 },
    { id: "s-2-3a", code: "2-3a", titleEn: "Differences in Scientific Judgments", titleUz: "Ilmiy baholardagi farqlar", Body: S23a, check: checks["s-2-3a"] },
    { id: "s-2-3b", code: "2-3b", titleEn: "Differences in Values", titleUz: "Qadriyatlardagi farqlar", Body: S23b, check: checks["s-2-3b"] },
    { id: "s-2-3c", code: "2-3c", titleEn: "Perception versus Reality", titleUz: "Tasavvur va haqiqat", Body: S23c, check: checks["s-2-3c"] },
    { id: "s-2-4", code: "2-4", titleEn: "Let's Get Going", titleUz: "Boshladik", Body: S24 },
    { id: "s-2-app", code: "App.", titleEn: "Appendix — Graphing: A Brief Review", titleUz: "Ilova — grafiklar: qisqa takrorlash", Body: SApp },
  ],
  examTraps: [
    { title: "Omillar bozori", body: "Households **sell** (mehnat, yer, kapital), firms **buy**. Tovar bozorida aksincha." },
    { title: "PPF nuqtalari", body: "Ustida — efficient; ichida — feasible, inefficient; tashqarida — unattainable. OC = |nishab|." },
    { title: "Bowed out", body: "Mashina ko'p (E) → OC yuqori, chegara tik. Mashina kam (F) → OC past, yotiq." },
    { title: "Positive ≠ optimistik", body: "Tekshirsa bo'ladigan — positive; “should/ought/yaxshi” — normative." },
    { title: "Mikro/makro", body: "Byudjet taqchilligi va iqtisodiy o'sish — **makro** (QuickQuiz 4)." },
    { title: "Siljish qoidasi", body: "O'qda **yo'q** o'zgaruvchi o'zgarsa — egri siljiydi; o'qdagi — egri bo'ylab harakat." },
  ],
  mistakes: [
    { wrong: "“Model qanchalik real bo'lsa, shuncha yaxshi.”", right: "Foydali model **soddalashtiradi**: “All models are wrong, but some are useful.”" },
    { wrong: "“PPF ichidagi nuqtaga erishib bo'lmaydi.”", right: "Erishsa bo'ladi, lekin **samarasiz** — erishib bo'lmaydigani tashqaridagi." },
    { wrong: "“Imkoniyat xarajati PPF bo'ylab o'zgarmas.”", right: "Bo'rtgan PPF da u **o'zgaradi**: tovar ko'p ishlab chiqarilgan sari qimmatlashadi." },
    { wrong: "“Korrelyatsiya bor — demak sabab bor.”", right: "Omitted variable va reverse causality tuzoqlarini tekshiring." },
    { wrong: "“Iqtisodchilar hech narsada kelishmaydi.”", right: "93% ijara nazorati va tariflarga qarshi." },
  ],
  boxes: [{ id: "news-tech-economists", kind: "In the News", titleEn: "Why Tech Companies Hire Economists", titleUz: "Nega texnologik kompaniyalar iqtisodchilarni yollaydi", Body: TechEconomists }],
  summary: [
    "Iqtisodchilar o'z fanini **olim xolisligi** bilan o'rganadi: mos farazlar qiladi va dunyoni tushunish uchun soddalashtirilgan **modellar** quradi. Ikki oddiy model: **circular-flow diagram** (uy xo'jaliklari va firmalar tovar va omillar bozorlarida qanday ta'sirlashishi) va **production possibilities frontier** (jamiyat turli tovarlar ishlab chiqarish o'rtasidagi trade-off).",
    "Iqtisodiyot ikki sohaga bo'linadi: **microeconomics** (uy xo'jaliklari va firmalar qarorlari va ularning bozordagi o'zaro ta'siri) va **macroeconomics** (butun iqtisodiyotga ta'sir qiladigan kuchlar va trendlar).",
    "**Positive** da'vo — dunyo qanday ekani haqida; **normative** — qanday bo'lishi kerakligi haqida. Pozitivlar fakt va ilmiy usul bilan baholanadi, normativlar qadriyat bahosini ham talab qiladi. Normativ da'vo qilganda iqtisodchi olim emas, siyosat maslahatchisi sifatida gapiradi.",
    "Iqtisodchilar ba'zan **ilmiy baholar** yoki **qadriyatlar** farqi tufayli turli maslahat beradi. Boshqa paytlarda ular bir fikrda, lekin siyosiy jarayon cheklovlari tufayli siyosatchilar maslahatni e'tiborsiz qoldiradi.",
  ],
  widgets: { flow: Flow, ppf: Ppf, graphing: Graphing },
  gallery: [
    { title: "Aylanma oqim diagrammasi", Component: Flow },
    { title: "Ishlab chiqarish imkoniyatlari chegarasi (PPF)", Component: Ppf },
    { title: "Grafiklar: scatterplot, siljish, nishab, sababiyat", Component: Graphing },
  ],
};
