import { CommonsLab, GoodsSorter, LifeValueCalc, PublicGoodVote } from '../../../components/graphs/Ch11Widgets';
import { Callout } from '../../../components/ui/Kit';
import { AskExperts, BoxLink, Source } from '../../../components/ui/Lesson';
import { T } from '../../../components/ui/Term';
import type { ChapterPageContent } from '../../types';
import { checks } from './quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        “Hayotdagi eng yaxshi narsalar — tekin.” Daryolar, tog'lar, plyajlar — tabiat sovg'asi; bog'lar, o'yin maydonchalari, bayram mushakbozliklari — ko'pincha davlat
        hisobidan. Narxi yo'q tovarlar oldingi tahlilimizga sig'maydi: u yerda narx xaridor va sotuvchilarni samarali taqsimotga yo'naltirardi.
      </p>
      <p>
        Narx bo'lmasa, xususiy bozor bunday tovarlarni to'g'ri miqdorda ta'minlay olmaydi va to'g'ri ishlatilishini kafolatlay olmaydi. Bu bob 1-bobdagi tamoyilni
        ko'rsatadi: <b>davlat ba'zan bozor natijalarini yaxshilay oladi</b>. Toshkentdagi tirbandlik, Oroldagi suv, mahalla mushakbozligi — hammasi shu bobning mavzusi.
      </p>
    </div>
  );
}

const S111 = () => (
  <div className="prose-uz">
    <p>
      Bozor muzqaymoq uchun samarali, toza havo uchun — yo'q. Tovarlarni ikki xususiyat bo'yicha tasniflaymiz: <T id="excludability" /> va <T id="rivalry" />. Ular to'rt
      toifani beradi:
    </p>
    <ol>
      <li><T id="private-goods" /> — excludable va rival (muzqaymoq). 4–9-boblardagi tahlil aynan shularga tegishli edi.</li>
      <li><T id="public-goods" /> — na excludable, na rival (kichik shaharchadagi tornado sirenasi).</li>
      <li><T id="common-resources" /> — rival, lekin not excludable (okeandagi baliq).</li>
      <li><T id="club-goods" /> — excludable, lekin not rival (sun'iy yo'ldosh TV). Keyinroq ko'ramiz: ular — tabiiy monopoliya turi.</li>
    </ol>
    <GoodsSorter />
    <p>
      Chegaralar noaniq bo'lishi mumkin: katta qirg'oq qo'riqlash xizmati baliqni qisman excludable qiladi; baliqchilar kam bo'lsa (Yevropaliklar kelishidan oldingi Shimoliy
      Amerika), baliq deyarli not rival. Bu bob <b>not excludable</b> tovarlar haqida: ular tekin, va qimmatli narsaning narxi bo'lmasa — <b>tashqi effekt</b> paydo bo'ladi.
      Jamoat tovarini ta'minlovchi boshqalarga ijobiy, umumiy resursdan foydalanuvchi — salbiy effekt beradi.
    </p>
  </div>
);

const S112a = () => (
  <div className="prose-uz">
    <p>
      Smalltown'ning <b>500 aholisi</b> 4-iyul mushakbozligini har biri <b>$10</b> ga baholaydi — jami $5,000. Xarajat — <b>$1,000</b>. Foyda xarajatdan katta — demak samarali.
      Lekin tadbirkor Zoe chipta sota olmaydi: mushakbozlikni chiptasiz ham ko'rish mumkin — har kim <T id="free-rider" /> bo'lishni afzal ko'radi.
    </p>
    <p>
      Bu — tashqi effekt: Zoe tomoshabinlarga to'lanmagan foyda beradi, lekin qaror qilganda uni hisobga olmaydi. Yechim: shahar kengashi har kimdan <b>$2</b> soliq olib, Zoe'ni yollaydi —
      har kim <b>$8</b> yutadi. Umumiy saboq: jamoat tovarlari not excludable bo'lgani uchun xususiy bozor ularni ta'minlamaydi; jami foyda xarajatdan katta bo'lsa, davlat ularni soliq
      hisobidan ta'minlab, hammani yaxshilashi mumkin.
    </p>
    <PublicGoodVote />
  </div>
);

const S112b = () => (
  <div className="prose-uz">
    <ul>
      <li>
        <b>Milliy mudofaa</b> — klassik jamoat tovari va eng qimmatlaridan: 2020-yilda AQSh $886 mlrd, ya'ni kishi boshiga $2,682 sarflagan. Kichik davlat tarafdorlari ham mudofaani davlat
        ta'minlashi kerak deydi.
      </li>
      <li>
        <b>Fundamental tadqiqot.</b> Aniq texnologik bilim (uzoq ishlaydigan batareya) <T id="patent" /> bilan excludable bo'ladi. Umumiy bilim (teorema) esa jamoat tovari — firmalar boshqalar
        yaratgan bilimdan free ride qiladi. Davlat NIH va NSF orqali tibbiyot, matematika, fizika, hatto iqtisodiyotdagi tadqiqotni subsidiyalaydi; lekin qaysi tadqiqotga qancha — aniqlash qiyin.
      </li>
      <li>
        <b>Qashshoqlikka qarshi kurash</b>: TANF, SNAP, Medicaid, EITC. Qashshoqsiz jamiyatda yashash — na rival, na excludable “tovar”: xususiy xayriya free-rider muammosi tufayli
        yetarli bo'lmaydi; boylarga soliq solib kambag'allarga yordam berish ikkala guruhni ham yaxshilashi mumkin.
      </li>
    </ul>
    <BoxLink id="cs-lighthouses">Case Study: Are Lighthouses Public Goods?</BoxLink>
  </div>
);

const S112c = () => (
  <div className="prose-uz">
    <p>
      Davlat ta'minlashi kerakligini aniqlash — birinchi qadam. Qaysi jamoat tovarini va qancha? Yangi avtomagistral uchun iqtisodchi va muhandislar <T id="cost-benefit-analysis" /> o'tkazadi.
      Qiyinchilik: yo'l bepul — <b>narx yo'q</b>. So'rovnoma ishonchsiz: foydalanuvchilar foydani bo'rttiradi, zarar ko'ruvchilar xarajatni bo'rttiradi. Xususiy tovar bozorida esa xaridor va
      sotuvchilar narx orqali o'z qiymat va xarajatini oshkor qiladi.
    </p>
    <LifeValueCalc />
    <BoxLink id="cs-life">Case Study: How Much Is a Life Worth?</BoxLink>
  </div>
);

const S113a = () => (
  <div className="prose-uz">
    <p>
      Umumiy resurslar ham bepul, lekin <b>rival</b> — shuning uchun muammo: ular qancha ishlatiladi? O'rta asr shaharchasida oilalar umumiy yaylovda (Town Commons) qo'y boqadi. Yer ko'p
      bo'lganda muammo yo'q. Aholi va qo'ylar ko'paygach, yaylov o'zini tiklay olmaydi, bo'sh qoladi, jun sanoati yo'qoladi — <T id="tragedy-of-the-commons" />.
    </p>
    <p>
      Sabab — <b>salbiy tashqi effekt</b>: har oila o'z qo'ylari boshqalar uchun yerni yomonlashtirishini e'tiborsiz qoldiradi; hech bir oila o'z podasini kamaytirishga rag'batli emas, chunki u
      muammoning kichik qismi. Yechimlar ifloslanishdagi kabi: qo'y sonini cheklash, qo'yga soliq, yaylov ruxsatnomalarini auksionga qo'yish — yoki oddiyroq: yerni oilalarga bo'lib, xususiy
      tovarga aylantirish (17-asr Angliyasidagi <b>enclosure movement</b>).
    </p>
    <CommonsLab />
    <Callout kind="exam">
      Jamoat tovarlari — <b>kam</b> ta'minlanadi (ijobiy tashqi effekt, free riders). Umumiy resurslar — <b>ortiqcha</b> ishlatiladi (salbiy tashqi effekt). QuickQuiz 4 va 7.
    </Callout>
  </div>
);

const S113b = () => (
  <div className="prose-uz">
    <ul>
      <li><b>Toza havo va suv</b> — ifloslanish yaylovni haddan tashqari boqishga o'xshaydi: zamonaviy Tragedy of the Commons.</li>
      <li>
        <b>Tirband yo'llar.</b> Bo'sh yo'l — jamoat tovari, tirband yo'l — umumiy resurs. Yechim — <b>to'lov</b> (tirbandlikka korrektiv soliq): London va Stokgolm muvaffaqiyatli qo'llaydi.
        Faqat tig'iz soatda tirband bo'lsa — o'sha paytda yuqori to'lov. Benzin solig'i — nomukammal yechim: bo'sh yo'llarda haydashni ham kamaytiradi va elektromobillarni qamramaydi.
      </li>
      <li>
        <b>Baliq, kitlar va yovvoyi hayvonlar.</b> Okeanlar eng kam tartibga solingan resurs: ko'p davlat foydalanadi (xalqaro kelishuv kerak) va nazorat qilish qiyin. AQShda ov litsenziyalari,
        mavsum cheklovlari, kichik baliqni qaytarish talablari bor.
      </li>
    </ul>
    <AskExperts
      title="Congestion Pricing"
      source="IGM, January 11, 2012"
      statement="In general, using more congestion charges in crowded transportation networks — such as higher tolls during peak travel times in cities, and peak fees for airplane takeoff and landing slots — and using the proceeds to lower other taxes would make citizens on average better off."
      agree={98}
      uncertain={2}
      disagree={0}
    />
    <BoxLink id="cs-cow">Case Study: Why the Cow Is Not Extinct</BoxLink>
    <BoxLink id="news-road-pricing">In the News: Road Pricing</BoxLink>
  </div>
);

const S114 = () => (
  <div className="prose-uz">
    <p>
      10 va 11-boblarning umumiy mavzusi: qimmatli narsaning <b>narxi bo'lmasa</b>, bozor resurslarni samarali taqsimlamaydi. Bu <T id="property-rights" /> aniq belgilanmaganda (ba'zan
      belgilab bo'lmaganda) yuz beradi: hech kim toza havo yoki milliy mudofaaga narx qo'yib, foyda ololmaydi.
    </p>
    <p>Davlatning uch yo'li:</p>
    <ul>
      <li>mulk huquqini belgilab, bozor kuchlarini ishga solish (ifloslanish ruxsatnomalari);</li>
      <li>xususiy xatti-harakatni tartibga solish (ov mavsumi cheklovlari);</li>
      <li>bozor ta'minlamagan tovarni soliq hisobidan ta'minlash (milliy mudofaa).</li>
    </ul>
  </div>
);

function Lighthouses() {
  return (
    <div className="prose-uz">
      <p>
        Ba'zi tovarlar sharoitga qarab jamoat yoki xususiy bo'ladi: shahardagi mushakbozlik — jamoat tovari, Disney World ichidagisi esa (kirish pullik) — xususiyga yaqin.
      </p>
      <p>
        Mayoq — jamoat tovarining klassik misoli: kema kapitanlariga foydasi na excludable, na rival → free ride → ko'p mayoqlarni davlat boshqaradi. Lekin 19-asr Angliyasida ba'zi mayoqlar
        xususiy edi: egasi kapitanlardan emas, yaqindagi <b>port egasidan</b> haq olgan; to'lamasa — chiroqni o'chirgan va kemalar o'sha portga kirmagan.
      </p>
      <p>
        Saboq: kim foyda ko'radi va ularni chetlatish mumkinmi? Foydalanuvchilar ko'p va chetlatib bo'lmasa — jamoat tovari; asosan bitta port egasiga foyda bersa — xususiy tovarga yaqin.
      </p>
    </div>
  );
}

function LifeWorth() {
  return (
    <div className="prose-uz">
      <p>
        Shahar muhandisi taklif qiladi: $10,000 ga svetofor o'rnatish halokatli avariya xavfini 1.6% dan 1.1% ga kamaytiradi. Xarajat va foydani solishtirish uchun ular bir xil birlikda — dollarda
        bo'lishi kerak, ya'ni hayotga pul qiymati berish kerak.
      </p>
      <ul>
        <li>“Hayot bebaho” (cheksiz qiymat) — absurd natija: har bir burchakka svetofor, hamma xavfsizlik jihozlari to'liq katta mashina. Aslida odamlar pul tejash uchun xavfga boradi.</li>
        <li>Sudlarda ishlatiladigan “butun umr topgan daromad” usuli — ishlamaydigan odam hayoti qiymatsiz bo'lib qoladi.</li>
        <li>Yaxshiroq usul: xavfli kasblar (baland binolardagi qurilish) va xavfsiz kasblar maoshini solishtirish (ta'lim, tajriba nazorat qilinadi) → hayot qiymati ≈ <b>$10 mln</b>.</li>
      </ul>
      <p>Javob: 0.005 × $10 mln = <b>$50,000</b> &gt; $10,000 → svetoforni o'rnating.</p>
    </div>
  );
}

function Cow() {
  return (
    <div className="prose-uz">
      <p>
        Yevropaliklar kelganda Shimoliy Amerikada 60 milliondan ortiq bizon bo'lgan; 1900-yilga kelib ov tufayli ~400 qolgan. Afrikada fillar fil suyagi uchun ovlanadi. Lekin qimmatli mol go'shti
        sigirni yo'qolib ketishdan himoya qiladi. Nega?
      </p>
      <p>
        Fillar — <b>umumiy resurs</b>: egasiz yuradi, brakonerlar ko'p va hech biri populyatsiyani saqlashga rag'batli emas. Sigirlar — <b>xususiy tovar</b>: xususiy ranchoda yashaydi, egasi podani
        saqlashdan manfaatdor.
      </p>
      <ul>
        <li>Keniya, Tanzaniya, Uganda: fil ovlash va fil suyagi sotish taqiqlangan — ijro qilish qiyin, kurash zo'ravonlashgan, populyatsiyalar kamayishda davom etgan.</li>
        <li>Botsvana, Malavi, Namibiya, Zimbabve: fillarni faqat o'z yerida ovlashga ruxsat — ya'ni xususiy tovarga aylantirish; yer egalari turni saqlaydi va ba'zi populyatsiyalar o'sa boshladi.</li>
      </ul>
    </div>
  );
}

function RoadPricing() {
  return (
    <div className="prose-uz">
      <Source>Clifford Winston, “How Federal Infrastructure Dollars Get Nickeled and Dimed,” Barron's, March 24, 2021</Source>
      <p>
        2021-yilda prezident Bayden infratuzilmaga $2.25 trln sarflashni taklif qildi. Brookings iqtisodchisi Winston: transport siyosatidagi samarasizliklar tufayli har bir dollar “xavfli sayohat”ga
        chiqadi va yo'lda kichrayib, ko'pincha noto'g'ri manzilga yetadi.
      </p>
      <ul>
        <li><b>Samarasiz narx va investitsiya</b>: tirbandlik to'lovlari va qoplama yeyilishi uchun haq olinmaydi — qayerga qo'shimcha sarflash eng foydali ekani ko'rinmaydi; samarali narxlar investitsiyani moliyalab, byudjet taqchilligini ham kamaytirardi.</li>
        <li><b>Qimmatlashtirilgan xarajatlar</b>: Davis-Bacon ish haqi qoidalari, “Buy American” talablari, uzoq ruxsat va ekologik jarayonlar.</li>
        <li><b>Earmarks</b> va formulaga ko'ra taqsimlangan mablag'lar — “hech qayerga olib bormaydigan yon sayohatlar”.</li>
        <li><b>Yangi texnologiyani sekin joriy etish</b>; shartnomalar eng arzon taklifga beriladi. Avtonom mashinalar ham samarasiz infratuzilma siyosati o'zgarmasa, va'dasini bajarmaydi.</li>
      </ul>
      <Callout kind="tip" title="Muhokama uchun savollar">
        <ol>
          <li>Yo'l va ko'priklardan foydalanuvchilarga ko'proq to'lov joriy qilishni qo'llaysizmi? Nega?</li>
          <li>Jamoatchilik bunday to'lovlarni qabul qiladimi? Nega?</li>
        </ol>
      </Callout>
    </div>
  );
}

const Sorter = () => <GoodsSorter />;
const Vote = () => <PublicGoodVote />;
const Commons = () => <CommonsLab />;
const Life = () => <LifeValueCalc />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    "Tovarlarni **excludability** va **rivalry** bo'yicha to'rt toifaga ajratish",
    "**Free-rider** muammosi nega xususiy bozorni jamoat tovarlarini ta'minlashdan to'xtatishini tushuntirish",
    "**Cost–benefit analysis** va hayotning statistik qiymatini qo'llash; ovoz berish va samaradorlikni solishtirish",
    "**Tragedy of the Commons** va umumiy resurslarga qarshi siyosatlar (soliq, to'lov, xususiylashtirish)",
    "Muammolarning umumiy ildizi — aniq belgilanmagan **property rights** ekanini ko'rish",
  ],
  sections: [
    { id: "s-11-1", code: "11-1", titleEn: "The Different Kinds of Goods", titleUz: "Tovarlarning turlari", Body: S111, check: checks["s-11-1"] },
    { id: "s-11-2a", code: "11-2a", titleEn: "The Free-Rider Problem", titleUz: "Free-rider muammosi", Body: S112a, check: checks["s-11-2a"] },
    { id: "s-11-2b", code: "11-2b", titleEn: "Some Important Public Goods", titleUz: "Muhim jamoat tovarlari", Body: S112b, check: checks["s-11-2b"] },
    { id: "s-11-2c", code: "11-2c", titleEn: "The Difficult Job of Cost–Benefit Analysis", titleUz: "Xarajat–foyda tahlilining qiyinligi", Body: S112c, check: checks["s-11-2c"] },
    { id: "s-11-3a", code: "11-3a", titleEn: "The Tragedy of the Commons", titleUz: "Umumiy mulk fojiasi", Body: S113a, check: checks["s-11-3a"] },
    { id: "s-11-3b", code: "11-3b", titleEn: "Some Important Common Resources", titleUz: "Muhim umumiy resurslar", Body: S113b, check: checks["s-11-3b"] },
    { id: "s-11-4", code: "11-4", titleEn: "Conclusion: Property Rights and Government Action", titleUz: "Xulosa: mulk huquqi va davlat", Body: S114 },
  ],
  examTraps: [
    { title: "To'rt toifa", body: "Private: E+R. Club: E, not R. Common: R, not E. Public: na E, na R. QuickQuiz 1–2 aynan shu jadvalni so'raydi." },
    { title: "Kam yoki ko'p?", body: "Public goods — **underprovided**; common resources — **overused**." },
    { title: "Jami qiymat", body: "Ta'minlash qoidasi: **barcha** aholi qiymatlari yig'indisi > xarajat (manfiy qiymatlar ham!). Ko'pchilik ovozi yoki mediana emas (QQ 5)." },
    { title: "Tirbandlik to'lovi", body: "Yo'l tirband bo'lmasa — not rival → samarali to'lov **nol** (QQ 8)." },
    { title: "Foiz punkt", body: "Xavf 1.6% → 1.1%: farq 0.5 p.p. = **0.005** — $10 mln ga ko'paytiring." },
  ],
  mistakes: [
    { wrong: "“Davlat ta'minlagan hamma narsa — jamoat tovari.”", right: "Ta'lim — xususiy tovar (tashqi effekt bilan); jamoat tovari ta'rifi xususiyatga bog'liq, kim ta'minlashiga emas." },
    { wrong: "“Umumiy resurslar kam ta'minlanadi.”", right: "Ular **ortiqcha ishlatiladi**; kam ta'minlanish — jamoat tovarlari muammosi." },
    { wrong: "“Hayot bebaho — xarajat–foyda tahlilida cheksiz qiymat beramiz.”", right: "Bu absurd natija beradi; iqtisodchilar ≈ $10 mln ishlatadi." },
    { wrong: "“Ko'pchilik ovoz bersa — samarali.”", right: "Bayport va River Heights: ovoz va CBA qarama-qarshi bo'lishi mumkin." },
  ],
  boxes: [
    { id: "cs-lighthouses", kind: "Case Study", titleEn: "Are Lighthouses Public Goods?", titleUz: "Mayoqlar jamoat tovarimi?", Body: Lighthouses },
    { id: "cs-life", kind: "Case Study", titleEn: "How Much Is a Life Worth?", titleUz: "Hayot qancha turadi?", Body: LifeWorth },
    { id: "cs-cow", kind: "Case Study", titleEn: "Why the Cow Is Not Extinct", titleUz: "Nega sigir yo'qolib ketmaydi", Body: Cow },
    { id: "news-road-pricing", kind: "In the News", titleEn: "Road Pricing", titleUz: "Yo'l to'lovlari", Body: RoadPricing },
  ],
  summary: [
    "Tovarlar **excludable** (foydalanishdan to'xtatish mumkin) va **rival in consumption** (bir kishining foydalanishi boshqalarnikini kamaytiradi) bo'lishi bilan farq qiladi. Bozor ikkalasi ham bo'lgan **xususiy tovarlar** uchun eng yaxshi ishlaydi.",
    "**Public goods** na excludable, na rival: mushakbozlik, milliy mudofaa, fundamental bilim. Odamlardan haq olinmagani uchun ular **free ride** qiladi va xususiy ta'minlash imkonsiz. Davlat ularni ta'minlab va miqdorini **cost–benefit analysis** bilan aniqlab, taqsimotni yaxshilashi mumkin.",
    "**Common resources** rival, lekin not excludable: umumiy yaylov, toza havo, tirband yo'llar. Haq olinmagani uchun ular **haddan tashqari** ishlatiladi. Davlat regulyatsiya va korrektiv soliqlar bilan foydalanishni cheklashi mumkin.",
  ],
  widgets: { sorter: Sorter, vote: Vote, commons: Commons, life: Life },
  gallery: [
    { title: "To'rt tovar turi: tasniflash o'yini", Component: Sorter },
    { title: "Jamoat tovari: xarajat–foyda va ovoz berish", Component: Vote },
    { title: "Tragedy of the Commons simulyatori", Component: Commons },
    { title: "Hayot qiymati va svetofor", Component: Life },
  ],
};
