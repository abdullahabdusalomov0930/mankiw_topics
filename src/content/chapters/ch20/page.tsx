import { DiscriminationLab, GapsAndStatistics, SkillPremium, WageDeviations } from '../../../components/graphs/EarningsWidgets';
import { Callout } from '../../../components/ui/Kit';
import { AskExperts, BookTable, BoxLink } from '../../../components/ui/Lesson';
import { T } from '../../../components/ui/Term';
import type { ChapterPageContent } from '../../types';
import { checks } from './quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        2020-yilda AQShda fast-fud oshpazlari yiliga ~$24,000, maktab o'qituvchilari ~$67,000, oilaviy shifokorlar ~$214,000, eng yirik kompaniyalar rahbarlari ~$12 mln topgan; Taylor Swift — $24 mln. Bu farqlar
        kimdir saroyda, kimdir kichik kvartirada yashashini tushuntiradi.
      </p>
      <p>
        19-bob: ish haqi talab va taklif bilan, muvozanatda <T id="value-of-marginal-product" /> ga teng. Bu — faqat boshlanish. Endi turli mehnat turlariga talab va taklifni nima belgilashini, nega ba'zan ish haqi
        muvozanatdan chetlashishini va <T id="discrimination" /> qanday ta'sir qilishini ko'ramiz.
      </p>
    </div>
  );
}

const S201 = () => (
  <div className="prose-uz">
    <p>Avval ish va ishchilarning xususiyatlari mehnat taklifi, talabi va muvozanat ish haqiga qanday ta'sir qilishini ko'ramiz.</p>
  </div>
);

const S201a = () => (
  <div className="prose-uz">
    <p>
      Ish haqi — ish tanlashdagi omillardan biri xolos. Ish qanchalik yoqimli bo'lsa, berilgan ish haqida shuncha ko'p odam uni bajarishga tayyor — taklif ko'p, muvozanat ish haqi past. Plyaj shaharchasida ikki yozgi ish:
      plyaj chiptalarini tekshiruvchi va axlat yig'uvchi. Ish haqi teng bo'lsa, ko'pchilik plyajni tanlaydi — shuning uchun shahar axlat yig'uvchilarga ko'proq to'lashi kerak. Bu —{' '}
      <T id="compensating-differential" />:
    </p>
    <ul>
      <li>Tom yopuvchilar o'xshash ta'limdagilardan ko'proq — qatron hidi va baxtsiz hodisa xavfi;</li>
      <li>Tungi smena ishchilari ko'proq — kechasi ishlab, kunduzi uxlash;</li>
      <li>Professorlar huquqshunos va shifokorlardan kam — o'qitishning intellektual mamnuniyati (iqtisodiyot o'qitish shunchalik qiziqki, umuman maosh berilishi ajablanarli!).</li>
    </ul>
  </div>
);

const S201b = () => (
  <div className="prose-uz">
    <p>
      Jismoniy kapitaldan tashqari <T id="human-capital" /> bor — odamlarga investitsiyalar to'plami, eng muhimi ta'lim. AQShda kollej bitiruvchilari o'rta maktab bitiruvchilaridan deyarli ikki barobar ko'p topadi;
      kam rivojlangan mamlakatlarda (malakali ishchilar tanqis) farq yana katta. Firmalar ko'proq to'laydi — MP yuqori; ishchilar ta'lim xarajatini ko'taradi — mukofot kutadi. Ish haqi farqini human capital olish
      xarajati uchun kompensatsion farq deb ham qarash mumkin.
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
    <Callout kind="note">Kitob jadvali “142% → 185%” ko'rinishida (nisbat), matnda esa “42 foiz → 85 foiz” (mukofot). Ikkalasi bir narsa.</Callout>
    <SkillPremium />
    <AskExperts title="Inequality and Skills" source="IGM, January 24, 2012" statement="One of the leading reasons for rising U.S. income inequality over the past three decades is that technological change has affected workers with some skill sets differently than others." agree={88} uncertain={8} disagree={4} />
    <BoxLink id="cs-skills">Case Study: The Increasing Value of Skills</BoxLink>
  </div>
);

const S201c = () => (
  <div className="prose-uz">
    <p>
      Major league beysbolchilar minor league o'yinchilaridan ko'p topadi — bu na kompensatsion farq, na human capital: shunchaki <b>qobiliyat</b>. Unga yaqin — <b>harakat</b> (sotuvchilar foizda, bonuslar).{' '}
      <b>Omad</b> ham bor: lampali televizorlarni tuzatishni o'rgangan ustalar yarimo'tkazgichlar tufayli eskirdi; o'zi boshqariladigan yuk mashinalari haydovchilarga ta'sir qilishi mumkin; tug'ilish joyi ham omad.
    </p>
    <p>
      Labor iqtisodchilari ish haqini o'lchanadigan o'zgaruvchilar (ta'lim, tajriba, yosh, ish xususiyatlari) bilan bog'laydi — ular nazariya bashorat qilgandek ta'sir qiladi, lekin o'zgaruvchanlikning{' '}
      <b>yarmidan kamini</b> tushuntiradi. Demak tushirib qoldirilgan qobiliyat, harakat va omad muhim.
    </p>
    <BoxLink id="cs-beauty">Case Study: The Benefits of Beauty</BoxLink>
  </div>
);

const S201d = () => (
  <div className="prose-uz">
    <p>
      Human capital qarashi: maktab unumdorlikni oshiradi. Muqobil — <T id="signaling-education" />: firmalar ta'limdan yuqori va past qobiliyatlilarni ajratish uchun foydalanadi; qobiliyatlilar uchun diplom olish
      osonroq. 17-bobdagi reklama signaliga o'xshash: harakat o'zining foydasi uchun emas, balki xususiy ma'lumotni yetkazgani uchun qilinadi.
    </p>
    <p>
      Ikkala nazariya ham ta'limlilar ko'p topishini tushuntiradi, lekin siyosat bo'yicha bashoratlari keskin farq qiladi: human capital — hammaning ta'limini oshirish barcha ish haqini oshiradi; signal — o'zgartirmaydi.
      Haqiqat ehtimol o'rtada; ikki ta'sirning nisbati — ochiq savol.
    </p>
  </div>
);

const S201e = () => (
  <div className="prose-uz">
    <p>
      Ko'p aktyorlar ofitsiant bo'lib kun ko'radi, Scarlett Johansson esa har filmga millionlar oladi; Daniil Medvedev tennisdan millionlar topadi. Eng yaxshi duradgor va santexniklar esa bunday boylik topmaydi.{' '}
      <T id="superstar-phenomenon" /> ikki xususiyatli bozorlarda paydo bo'ladi: (1) har bir mijoz eng yaxshilarning xizmatini xohlaydi (yarim yoqimli aktyorning ikki filmi o'rnini bosmaydi); (2) texnologiya eng
      yaxshilarga hammaga arzon xizmat ko'rsatish imkonini beradi (film nusxalari, TV efiri). Santexnik esa cheklangan mijozga xizmat qiladi — o'rtacha santexnik ham yaxshi yashaydi.
    </p>
  </div>
);

const S201f = () => (
  <div className="prose-uz">
    <p>
      Odatda mehnat bozorlari raqobatli deb faraz qilinadi. Lekin kichik shaharda yagona yirik ish beruvchi ish haqiga katta ta'sir qiladi — bu <T id="monopsony" /> (yagona xaridor). Monopoliya (16-bob) sotuvni
      kamaytirib narxni oshirgani kabi, monopsoniya kamroq ishchi yollab, taklif egri chizig'i bo'ylab pastga harakatlanadi — ish haqi past, foyda yuqori. Ikkalasi ham faoliyatni ijtimoiy optimumdan kamaytiradi va{' '}
      <T id="deadweight-loss" /> yaratadi.
    </p>
    <p>
      Kitob formal modelni bermaydi — sof monopsoniyalar kam uchraydi. Ammo Joan Robinson (1930-lar) tushunchasi ba'zi hollarda muhim: 2021-yilda AQSh Oliy sudi NCAA monopsoniya sifatida talaba-sportchilarni kompensatsiyadan
      mahrum qilganini tan oldi; Bayden ma'muriyati farmoni; <b>non-compete</b> bandlari raqobatni cheklab, ish haqini past tutadi.
    </p>
    <WageDeviations />
    <AskExperts title="Competition in Labor Markets" source="IGM, August 3, 2021" statement="The use of non-compete clauses in U.S. employment contracts reduces workers' mobility and wages by more than is justified by the protection of employers' intellectual property and trade secrets." agree={86} uncertain={11} disagree={3} />
    <BoxLink id="news-covid-schooling">In the News: The Aftereffects of the Covid Pandemic</BoxLink>
  </div>
);

const S201g = () => (
  <div className="prose-uz">
    <p>Ba'zi ishchilar esa muvozanatdan <b>yuqori</b> oladi. Uch sabab:</p>
    <ul>
      <li><T id="minimum-wage" /> qonunlari (6-bob) — asosan eng kam malakali va tajribalilarga ta'sir qiladi.</li>
      <li>
        <T id="union" /> bozor kuchi — <T id="strike" /> tahdidi bilan. Ba'zan monopsoniyaga qarshi kuch, ba'zan monopolist kabi. Uyushma a'zolari o'xshash uyushmasiz ishchilardan ~<b>10–20%</b> ko'p topadi.
      </li>
      <li><T id="efficiency-wages" />: yuqori ish haqi qo'nimsizlikni kamaytiradi, harakatni oshiradi, yaxshi nomzodlarni jalb qiladi.</li>
    </ul>
    <p>Har uchalasida ham taklif miqdori oshadi, talab miqdori kamayadi → ortiqcha mehnat — <b>ishsizlik</b> (makroiqtisodiyot mavzusi).</p>
    <Callout kind="exam">Muvozanatdan <b>past</b>: monopsony. Muvozanatdan <b>yuqori</b>: minimum wage, unions, efficiency wages (QR 5).</Callout>
  </div>
);

const S202 = () => (
  <div className="prose-uz">
    <p>
      <T id="discrimination" /> — irq, millat, jins, yosh, din, jinsiy orientatsiya va boshqa xususiyatlar asosida imkoniyat berish yoki rad etish. U jamiyatdagi kengroq noto'g'ri qarashlarni aks ettiradi; iqtisodchilar uning
      ko'lami va manbalarini o'rganadi.
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
      Bular diskriminatsiyaning inkor etib bo'lmas dalili kabi ko'rinadi. Ammo diskriminatsiyasiz bozorda ham ish haqlari farq qiladi: <b>human capital</b> (25+ yoshda bakalavr: oq tanlilar 36%, qora tanlilar 26%;
      maktab sifati), <b>tajriba</b> (25–44 yoshda ayollarning 24% i, erkaklarning 10% i mehnat bozoridan tashqarida), <b>compensating differentials</b> (turli kasb tanlovi). Xulosa salbiy: guruhlar o'rtacha ish haqi
      farqlari o'z-o'zidan diskriminatsiya darajasini o'lchamaydi. Ko'pchilik iqtisodchilar diskriminatsiya bor deb hisoblaydi, lekin qanchaligi noaniq.
    </p>
    <p>
      Human capital farqlarining o'zi ham diskriminatsiyani aks ettirishi mumkin: qizlarga tarixan yengilroq o'quv dasturlari, qora tanlilarga yomonroq maktablar — bu mehnat bozoridan <b>oldin</b> sodir bo'ladi:
      kasallik siyosiy, simptomi iqtisodiy.
    </p>
    <GapsAndStatistics />
    <BoxLink id="cs-emily-lakisha">Case Study: Is Emily More Employable Than Lakisha?</BoxLink>
  </div>
);

const S202b = () => (
  <div className="prose-uz">
    <p>
      Kim aybdor? Ko'rinishidan — ish beruvchilar. Lekin ko'p iqtisodchilar shubhalanadi: raqobatli bozorda tabiiy davo bor — <b>foyda motivi</b>. Ishchilar faqat soch rangi bilan farq qiladigan dunyoni tasavvur qiling:
      ish beruvchilar brunetkalarni afzal ko'radi → blondinkalarga talab va ish haqi past. Tadbirkorlar blondinkalarni yollab arzonroq ishlaydi; “blonde” firmalar kiradi, qimmat “brunette” firmalar zarar ko'rib chiqadi →
      blondinkalarga talab oshadi, brunetkalarga kamayadi → farq yo'qoladi. Faqat pulni o'ylaydigan egalar diskriminatsiya qiluvchilardan ustun.
    </p>
    <DiscriminationLab />
    <BoxLink id="cs-streetcars">Case Study: Segregated Streetcars and the Profit Motive</BoxLink>
  </div>
);

const S202c = () => (
  <div className="prose-uz">
    <p>
      Foyda motivining kuchi cheklangan. <b>Mijozlar</b>: agar mijozlar brunetka ofitsiantlarni afzal ko'rsa va bunga pul to'lasa, “blonde” restoranlar kirib farqni yo'qota olmaydi — ikki xil restoran: arzon “blonde” va
      qimmat “brunette”; mutaassib mijozlar didi uchun yuqori narx to'laydi. <b>Hukumat</b>: qonun blondinkalarni faqat idish yuvishga ruxsat bersa, farq saqlanadi (segregatsiyalangan tramvaylar, Janubiy Afrikadagi
      apartheid 1990-gacha).
    </p>
    <Callout kind="exam">QQ 7: erkin kirish va chiqishli raqobat faqat <b>ish beruvchilar</b> diskriminatsiyasi farqini yo'qotadi; mijozlar yoki hukumat diskriminatsiyasi saqlanib qolishi mumkin.</Callout>
    <BoxLink id="cs-sports">Case Study: Discrimination in Sports</BoxLink>
  </div>
);

const S202d = () => (
  <div className="prose-uz">
    <p>
      <T id="statistical-discrimination" />: ish beruvchida ma'lumot to'liq emas. Ko'k ko'zlilarning 10% i, jigarrang ko'zlilarning 5% i surunkali kechiksa, ish beruvchi jigarrang ko'zlilarni afzal ko'rishi mumkin —
      ko'k ko'zlilarning 90% i punktual bo'lsa ham. Har bir kishi guruh o'rtachasi bilan stereotiplanadi.
    </p>
    <p>
      Real misol: “ban the box” qonunlari ariza shaklida sudlanganlikni so'rashni taqiqlaydi (maqsad — sobiq mahkumlarni jamiyatga qaytarish). Kutilmagan oqibat: qora tanli erkaklar orasida qamoqda o'tirganlar ulushi
      ko'proq bo'lgani uchun ba'zi ish beruvchilar sudlanmagan qora tanli erkaklarni ham yollamaydi; tadqiqotlar bu qonunlar kollej diplomisiz yosh qora tanli erkaklar bandligini sezilarli kamaytirganini ko'rsatgan.
      Siyosatchilar sobiq mahkumlarga statistik diskriminatsiyani oshirmaydigan usullar bilan yordam berishi kerak.
    </p>
  </div>
);

const S203 = () => (
  <div className="prose-uz">
    <p>
      Raqobatli bozorlarda ishchilar o'z marjinal hissasining qiymatini oladi. Lekin ko'p narsa VMP ga ta'sir qiladi: firmalar iqtidorli, mehnatkash, tajribali va ma'lumotli ishchilarga ko'proq to'laydi; mijozlar
      kamsitadigan ishchilarga kamroq — chunki ular daromadga kamroq hissa qo'shadi. Nazariya kim ko'p topishini tushuntiradi, lekin natijaviy taqsimot teng, adolatli yoki maqbul ekanini aytmaydi — bu 21-bob mavzusi.
    </p>
  </div>
);

function SkillsCase() {
  return (
    <div className="prose-uz">
      <p>
        “Boylar boyib, kambag'allar kambag'allashadi” — har doim to'g'ri emas, lekin so'nggi o'n yilliklarda AQShda yuqori va past malakali ishchilar daromad farqi sezilarli oshdi. 1974-yilda kollej diplomli erkak
        diplomsizdan 42% ko'p topgan; 2019-yilda — 85%. Ayollarda 35% → 78%.
      </p>
      <p>Ikki gipoteza — ikkalasi ham malakali mehnatga nisbiy talab oshganini aytadi:</p>
      <ul>
        <li>
          <b>Xalqaro savdo</b>: import YaIMning 5% (1970) → 13% (2020), eksport 6% → 10%. Kam malakali mehnat ko'p mamlakatlarda arzon, shuning uchun AQSh kam malakali mehnat bilan ishlab chiqarilgan tovarlarni import,
          malakali mehnat bilan ishlab chiqarilganini eksport qiladi → malakali mehnatga talab oshadi.
        </li>
        <li>
          <b>Texnologik o'zgarish</b>: kompyuter bazalari fayl kotiblarini almashtirdi, dasturchi va analitiklarga talab oshdi; robotlar malakasiz ishchilarni almashtirdi, lekin muhandislar kerak. Bu —{' '}
          <b>skill-biased technological change</b>.
        </li>
      </ul>
      <p>Yagona sabab yo'q bo'lsa kerak; 21-bob tengsizlikni batafsil ko'radi.</p>
    </div>
  );
}

function Beauty() {
  return (
    <div className="prose-uz">
      <p>
        Aktrisa Gal Gadot (sobiq go'zallik tanlovi g'olibi) 2020-yilda ~$30 mln topgan. Lekin go'zallik iqtisodiy foydasi qanchalik keng? Hamermesh va Biddle (AER, 1994) AQSh va Kanada so'rovlarida intervyuerlar
        respondentlar tashqi ko'rinishini baholagan ma'lumotlarni o'rganishdi: o'rtachadan chiroyliroqlar o'rtachalardan <b>5%</b> ko'p, o'rtachalar o'rtachadan pastlardan <b>5–10%</b> ko'p topadi; erkak va ayollarda
        o'xshash.
      </p>
      <ul>
        <li><b>Tug'ma qobiliyat</b>: ommaga xizmat ko'rsatish ishlarida (aktyorlik, modellik, savdo, ofitsiantlik) jozibadorlik — mijozlar didini aks ettiradi.</li>
        <li><b>Boshqa qobiliyatning bilvosita o'lchovi</b>: kiyinish, soch turmagi, o'zini tutish — jozibali obraz yarata olgan odam boshqa ishlarda ham muvaffaqiyatli bo'lishi mumkin.</li>
        <li><b>Diskriminatsiya</b> turi.</li>
      </ul>
    </div>
  );
}

function CovidSchooling() {
  return (
    <div className="prose-uz">
      <p>
        Jon Hilsenrath (WSJ, 2021): iqtisodiyot zarbadan keyin rezina kabi qaytadimi yoki qog'oz kabi g'ijimlangan qoladimi? Uzoq muddatli iz — <b>hysteresis</b>. Margaret Raymond: 18 shtat va Vashingtonda bolalar
        pandemiyaning boshida o'rtacha 116 kunlik o'qish va 215 kunlik matematika mashg'ulotini yo'qotgan; qishloq, qora tanli va ispan tilli hududlarda ko'proq.
      </p>
      <p>
        Eric Hanushek: 2020-yilgi “malaka zarbasi” keyingi asrda $25–30 trln ishlab chiqarishni yo'qotadi, zarar ko'rgan o'quvchilarning umrbod daromadi 6–9% past bo'ladi (Germaniyada 1966–67 qisqartirilgan o'quv yili
        o'sha avlod daromadini 5% kamaytirgan). Blanchard va Summers (1986) Yevropa ishsizligidagi gisterezisni topgan; 2007–09 inqirozidan keyin dalil kutilganidan zaifroq chiqqan. Bu — <b>human capital</b> ning
        muhimligi: yo'qotilgan ta'lim kelajakdagi unumdorlik va ish haqini kamaytiradi.
      </p>
    </div>
  );
}

function EmilyLakisha() {
  return (
    <div className="prose-uz">
      <p>
        Bertrand va Mullainathan Boston va Chikagodagi 1,300 dan ortiq e'longa ~5,000 soxta rezyume yuborishdi: yarmi afroamerikaliklar orasida keng tarqalgan ismlar (Lakisha Washington, Jamal Jones), yarmi oq tanlilarniki
        (Emily Walsh, Greg Baker); qolgani o'xshash (AER, 2004). “Oq” ismlilar ~<b>50%</b> ko'p qo'ng'iroq olgan — hatto “Equal Opportunity Employer” deb e'lon qilganlardan ham.
      </p>
      <p>
        Philip Oreopoulos (Kanada, 2011): inglizcha ismlar hind, pokiston, xitoy va yunon ismlariga nisbatan <b>39%</b> ko'p qo'ng'iroq olgan; “James Liu” kabi aralash ismlarda ham. Rekruterlar til ko'nikmasini sabab qilgan,
        lekin diskriminatsiya kanadacha ta'lim va tajriba bo'lganda ham, til talab qilinmagan ishlarda ham kuzatilgan.
      </p>
    </div>
  );
}

function Streetcars() {
  return (
    <div className="prose-uz">
      <p>
        XX asr boshida janubiy shaharlarda tramvaylar segregatsiya qilingan edi. Jennifer Roback (1986): segregatsiya kompaniyalardan emas, <b>qonunlardan</b> boshlangan; undan oldin irqiy ajratish kam, chekuvchi va
        chekmaydiganlarni ajratish ko'proq bo'lgan. Kompaniyalar qonunlarga qarshi chiqqan — alohida joylar xarajatni oshirib, foydani kamaytirgan (bir menejer: “ko'p bo'sh joyni tashib yurishga majburmiz”). Roback:
        rahbarlar qora tanlilarni yoqtirgan-yoqtirmagan, lekin bu noto'g'ri qarash uchun foydadan voz kechishga tayyor bo'lmagan.
      </p>
      <p>Saboq: biznes egalari odatda foydani o'ylaydi; diskriminatsiya ko'pincha firmalardan emas, boshqa joydan — bu holda qonundan kelgan.</p>
    </div>
  );
}

function Sports() {
  return (
    <div className="prose-uz">
      <p>Diskriminatsiyani o'lchash uchun unumdorlikni nazorat qilish kerak — sportda bu oson (ochkolar, assistlar, rebaundlar).</p>
      <ul>
        <li>Basketbol (Journal of Labor Economics, 1988): qora tanli o'yinchilar o'xshash qobiliyatli oq tanlilardan <b>20%</b> kam topgan; oq tanli o'yinchilar ko'p jamoalarga tomoshabin ko'proq — <b>mijozlar diskriminatsiyasi</b>.</li>
        <li>Beysbol (1960-yillar oxiri): qora tanlilar kam topgan; qora tanli pitcher o'yinlariga tomoshabin kam, garchi ularning natijalari yaxshiroq bo'lsa ham. Yaqin yillardagi tadqiqotlar farq topmagan.</li>
        <li>Eski beysbol kartochkalari (QJE, 1990): qora tanli hitterlar kartochkasi <b>10%</b>, pitcherlarniki <b>13%</b> arzon — muxlislar diskriminatsiyasi.</li>
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
    "Ish haqi farqlarining manbalari: **compensating differentials**, **human capital**, qobiliyat, harakat va omad",
    "Ta'limning **human capital** va **signal** nazariyalarini solishtirish; **superyulduz** hodisasi",
    "Muvozanatdan past (monopsony) va yuqori (minimum wage, unions, efficiency wages) ish haqi",
    "Diskriminatsiyani o'lchash qiyinligi va dala tajribalari",
    "Raqobat ish beruvchi diskriminatsiyasini qanday cheklashi; mijozlar, hukumat va **statistik** diskriminatsiya",
  ],
  sections: [
    { id: "s-20-1", code: "20-1", titleEn: "What Determines Wages?", titleUz: "Ish haqini nima belgilaydi?", Body: S201 },
    { id: "s-20-1a", code: "20-1a", titleEn: "Compensating Differentials", titleUz: "Kompensatsion farqlar", Body: S201a, check: checks["s-20-1a"] },
    { id: "s-20-1b", code: "20-1b", titleEn: "Human Capital", titleUz: "Inson kapitali", Body: S201b, check: checks["s-20-1b"] },
    { id: "s-20-1c", code: "20-1c", titleEn: "Ability, Effort, and Chance", titleUz: "Qobiliyat, harakat va omad", Body: S201c, check: checks["s-20-1c"] },
    { id: "s-20-1d", code: "20-1d", titleEn: "An Alternative View of Education: Signaling", titleUz: "Ta'limga muqobil qarash: signal", Body: S201d, check: checks["s-20-1d"] },
    { id: "s-20-1e", code: "20-1e", titleEn: "The Superstar Phenomenon", titleUz: "Superyulduz hodisasi", Body: S201e, check: checks["s-20-1e"] },
    { id: "s-20-1f", code: "20-1f", titleEn: "Below-Equilibrium Wages: Monopsony", titleUz: "Muvozanatdan past ish haqi: monopsoniya", Body: S201f, check: checks["s-20-1f"] },
    { id: "s-20-1g", code: "20-1g", titleEn: "Above-Equilibrium Wages: Minimum-Wage Laws, Unions, and Efficiency Wages", titleUz: "Muvozanatdan yuqori ish haqi", Body: S201g, check: checks["s-20-1g"] },
    { id: "s-20-2", code: "20-2", titleEn: "The Economics of Discrimination", titleUz: "Diskriminatsiya iqtisodiyoti", Body: S202 },
    { id: "s-20-2a", code: "20-2a", titleEn: "Measuring Labor-Market Discrimination", titleUz: "Mehnat bozoridagi diskriminatsiyani o'lchash", Body: S202a, check: checks["s-20-2a"] },
    { id: "s-20-2b", code: "20-2b", titleEn: "Discrimination by Employers", titleUz: "Ish beruvchilar diskriminatsiyasi", Body: S202b, check: checks["s-20-2b"] },
    { id: "s-20-2c", code: "20-2c", titleEn: "Discrimination by Customers and Governments", titleUz: "Mijozlar va hukumat diskriminatsiyasi", Body: S202c, check: checks["s-20-2c"] },
    { id: "s-20-2d", code: "20-2d", titleEn: "Statistical Discrimination", titleUz: "Statistik diskriminatsiya", Body: S202d, check: checks["s-20-2d"] },
    { id: "s-20-3", code: "20-3", titleEn: "Conclusion", titleUz: "Xulosa", Body: S203 },
  ],
  examTraps: [
    { title: "QQ 1–4 to'rtligi", body: "Qayta o'qish → **human capital**; yoqimsiz ish → **compensating differential**; ixtiyoriy yuqori ish haqi → **efficiency wages**; ishlatilmaydigan diplom → **signaling**." },
    { title: "Past vs yuqori", body: "Muvozanatdan past — **monopsony**; yuqori — minimum wage, unions, efficiency wages (ishsizlik yaratadi)." },
    { title: "Raqobat kimni tuzatadi?", body: "Faqat **ish beruvchi** diskriminatsiyasini (QQ 7). Mijozlar va hukumat diskriminatsiyasi saqlanishi mumkin." },
    { title: "Xom farq ≠ diskriminatsiya", body: "Table 2 farqlari human capital va ish xususiyatlarini ham aks ettiradi (QQ 6)." },
    { title: "Table 2 raqamlari", body: "Oq tanli ayollar ~19–20%, qora tanli erkaklar ~24% kam (QQ 5: 20; 20)." },
  ],
  mistakes: [
    { wrong: "“Signal nazariyasiga ko'ra ta'lim hammaning ish haqini oshiradi.”", right: "Signal: hammaning ta'limini oshirish ish haqini **o'zgartirmaydi**; bu human capital bashorati." },
    { wrong: "“Superyulduzlar har qanday kasbda bo'ladi.”", right: "Faqat eng yaxshilar arzon texnologiya bilan hammaga xizmat qila oladigan bozorlarda." },
    { wrong: "“Statistik diskriminatsiya — nafrat.”", right: "Nafratsiz ham paydo bo'ladi: to'liq bo'lmagan ma'lumot va guruh o'rtachalari." },
    { wrong: "“Efficiency wage — firmaning xayriyasi.”", right: "Foydani maksimallashtirish: unumdorlik oshishi yuqori xarajatni qoplaydi." },
  ],
  boxes: [
    { id: "cs-skills", kind: "Case Study", titleEn: "The Increasing Value of Skills", titleUz: "Malakaning oshib borayotgan qiymati", Body: SkillsCase },
    { id: "cs-beauty", kind: "Case Study", titleEn: "The Benefits of Beauty", titleUz: "Go'zallikning foydasi", Body: Beauty },
    { id: "news-covid-schooling", kind: "In the News", titleEn: "The Aftereffects of the Covid Pandemic", titleUz: "Covid pandemiyasining asoratlari", Body: CovidSchooling },
    { id: "cs-emily-lakisha", kind: "Case Study", titleEn: "Is Emily More Employable Than Lakisha?", titleUz: "Emily Lakishadan ko'ra ishga yaroqliroqmi?", Body: EmilyLakisha },
    { id: "cs-streetcars", kind: "Case Study", titleEn: "Segregated Streetcars and the Profit Motive", titleUz: "Segregatsiyalangan tramvaylar va foyda motivi", Body: Streetcars },
    { id: "cs-sports", kind: "Case Study", titleEn: "Discrimination in Sports", titleUz: "Sportdagi diskriminatsiya", Body: Sports },
  ],
  summary: [
    "Ish haqi farqlarining bir sababi — ish xususiyatlarini kompensatsiya qilish: boshqa narsalar teng bo'lsa, og'ir va yoqimsiz ishlar yengil va yoqimli ishlardan ko'proq to'lanadi.",
    "**Human capital** ko'proq bo'lgan ishchilar ko'proq topadi. Human capital to'plash qaytimi yuqori va so'nggi o'n yilliklarda oshgan.",
    "Ta'lim, tajriba va ish xususiyatlari nazariya bashorat qilgandek ta'sir qiladi, lekin ko'p farqlarni tushuntirmaydi — tushuntirilmagan qism asosan **qobiliyat, harakat va omad**.",
    "**Signal** nazariyasi: ta'limlilar ko'p topadi, chunki ta'lim yuqori qobiliyatni ko'rsatadi. To'g'ri bo'lsa, hammaning ta'limini oshirish ish haqi darajasini oshirmaydi.",
    "Ish haqi ba'zan muvozanatdan chetlashadi: past — **monopsoniya**; yuqori — eng kam ish haqi qonunlari, kasaba uyushmalari va **efficiency wages**.",
    "Ba'zi farqlar irq, jins va boshqa omillar bo'yicha **diskriminatsiya** dan. Uni o'lchash qiyin — human capital va ish xususiyatlarini nazorat qilish kerak.",
    "Raqobatli bozorlar diskriminatsion farqlarni cheklaydi: diskriminatsiya qilmaydigan firmalar foydaliroq. Lekin mijozlar diskriminatsiya uchun to'lashga tayyor bo'lsa yoki hukumat talab qilsa, u saqlanadi.",
    "Diskriminatsiya **statistik** sabablarga ko'ra ham yuz beradi: ma'lumot to'liq bo'lmasa, ish beruvchi butun guruhni o'rtacha xususiyati bo'yicha kamsitishi mumkin.",
  ],
  widgets: { skills: Skills, wages: Wages, disc: Disc, gaps: Gaps },
  gallery: [
    { title: "Kollej mukofoti va skill-biased talab (Table 1)", Component: Skills },
    { title: "Monopsoniya, eng kam ish haqi, uyushmalar, efficiency wages", Component: Wages },
    { title: "Diskriminatsiya va foyda motivi", Component: Disc },
    { title: "Table 2, rezyume tajribalari va statistik diskriminatsiya", Component: Gaps },
  ],
};
