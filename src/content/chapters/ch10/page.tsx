import { CoaseLab, ExternalityGraph, PermitsGraph } from '../../../components/graphs/ExternalityWidgets';
import { SupplyDemandGraph } from '../../../components/graphs/SupplyDemandGraph';
import { Callout } from '../../../components/ui/Kit';
import { AskExperts, BoxLink, Source } from '../../../components/ui/Lesson';
import { Math as M } from '../../../components/ui/Math';
import { T } from '../../../components/ui/Term';
import type { ChapterPageContent } from '../../types';
import { checks } from './quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        Qog'oz fabrikalari ishlab chiqarish jarayonida <b>dioksin</b> chiqaradi — saraton va tug'ma nuqsonlarga sabab bo'ladigan kimyoviy modda. Qog'oz
        xaridori ham, sotuvchisi ham bu zararni to'lamaydi: uni daryo bo'yida yashaydiganlar “to'laydi”.
      </p>
      <p>
        4–9-boblar bozor odatda samarali ekanini ko'rsatdi. Lekin ko'rinmas qo'l fabrikani kam dioksin chiqarishga majbur qilmaydi. Bu bob boshqa tamoyilga
        qaytadi: <b>hukumat ba'zan bozor natijalarini yaxshilay oladi</b>. Toshkentdagi yozgi tutun, qo'shnining kechasi baland musiqasi, emlanmagan bola —
        hammasi bitta tushunchaning ko'rinishlari.
      </p>
    </div>
  );
}

const S10intro = () => (
  <div className="prose-uz">
    <p>
      <T id="externality" /> — biror kishining harakati begona (bystander) farovonligiga ta'sir qilsa va buning uchun kompensatsiya to'lanmasa. Ta'sir
      zararli bo'lsa — salbiy, foydali bo'lsa — ijobiy (<T id="negative-positive-externality" label="negative / positive externality" />). Xaridor va sotuvchilar
      begonalarga ta'sirni hisobga olmagani uchun muvozanat samarali bo'lmaydi.
    </p>
    <ul>
      <li><b>Avtomobil chiqindisi</b> — salbiy: tutun va iqlim o'zgarishi. Javob: emissiya standartlari, benzin solig'i, jamoat transporti, velosiped yo'laklari.</li>
      <li><b>Tiklangan tarixiy binolar</b> — ijobiy: o'tkinchilar zavqlanadi. Javob: buzishni cheklash, tiklashga soliq imtiyozi.</li>
      <li><b>Huradigan itlar</b> — salbiy: qo'shnilarning uyqusi. Javob: “jamoat tinchligini buzish”ni taqiqlash.</li>
      <li><b>Yangi texnologiyalar tadqiqoti</b> — ijobiy: bilim boshqalarga ham foyda. Javob: patent tizimi.</li>
      <li><b>Pandemiya cho'qqisida gavjum restoranlar</b> — salbiy: kasallik tarqaladi. Javob: vaqtincha faqat olib ketish (va kompensatsiya).</li>
    </ul>
  </div>
);

const S101a = () => (
  <div className="prose-uz">
    <p>
      7-bobdan: talab egri chizig'i iste'molchilar uchun qiymatni (WTP), taklif egri chizig'i ishlab chiqaruvchilar xarajatini ko'rsatadi. Tashqi effekt
      bo'lmasa, po'lat bozori muvozanati <M tex="Q_{\text{MARKET}}" /> iste'molchilar qiymati minus ishlab chiqaruvchilar xarajatini maksimal qiladi — samarali (Figure 1).
    </p>
    <SupplyDemandGraph
      config={{ title: "Figure 1 — Po'lat bozori (tashqi effektsiz)", demand: { a: 9, b: 0.08 }, supply: { c: 1, d: 0.06 }, xMax: 100, yMax: 10, modes: ['market'], surplus: true, surplusOn: true, labels: { demand: 'Demand (private value)', supply: 'Supply (private cost)', x: 'Quantity of Steel', y: 'Price of Steel' }, qtyDigits: 0 }}
    />
  </div>
);

const S101b = () => (
  <div className="prose-uz">
    <p>
      Endi po'lat zavodlari tutun chiqaradi: har bir tonna po'lat sog'liq va iqlimga zarar. Jamiyat uchun xarajat — ishlab chiqaruvchilarning xususiy
      xarajati <b>plus</b> begonalar zarari: <T id="social-cost" />. Ijtimoiy xarajat egri chizig'i taklifdan yuqorida, farq — tashqi xarajat.
    </p>
    <p>
      Xayrixoh rejalashtiruvchi talab va <b>ijtimoiy xarajat</b> kesishgan miqdorni tanlaydi — <M tex="Q_{\text{OPTIMUM}}" />. Bozor esa faqat xususiy xarajatni ko'radi va
      ko'proq ishlab chiqaradi: <M tex="Q_{\text{MARKET}} > Q_{\text{OPTIMUM}}" />. Bozor muvozanatida marjinal iste'molchi po'latni ijtimoiy xarajatdan kam qadrlaydi —
      ishlab chiqarishni kamaytirish farovonlikni oshiradi.
    </p>
    <ExternalityGraph initial="negative" />
    <p>
      Yechim: har bir tonna uchun soliq. Soliq tashqi xarajatga teng bo'lsa, taklif ijtimoiy xarajat bilan ustma-ust tushadi va bozor optimal miqdorni ishlab
      chiqaradi. Bunday soliq tashqi effektni <T id="internalizing-the-externality" label="internalizes" /> — ishlab chiqaruvchilar ifloslanish xarajatini,
      iste'molchilar esa yuqori narxni hisobga oladi (“people respond to incentives”).
    </p>
  </div>
);

const S101c = () => (
  <div className="prose-uz">
    <p>
      Ba'zi faoliyatlar begonalarga foyda keltiradi. Ta'limning asosiy foydasi xususiy (yuqori maosh, keng dunyoqarash), lekin ijobiy tashqi effektlari ham bor:
      ma'lumotli saylovchilar — yaxshiroq hukumat; jinoyat kamroq; texnologik taraqqiyot tezroq — hammaning unumdorligi va maoshi oshadi.
    </p>
    <p>
      Endi <T id="social-value" /> talab egri chizig'idan yuqorida. Optimum — ijtimoiy qiymat va taklif kesishmasi, u bozor miqdoridan <b>katta</b>: bozor juda kam
      ta'lim beradi. Yechim — teskari: <b>subsidiya</b>. Haqiqatda ham ta'lim davlat maktablari, grantlar va soliq imtiyozlari orqali kuchli subsidiyalanadi.
    </p>
    <ExternalityGraph initial="positive" />
    <Callout kind="exam">
      Salbiy tashqi effekt → bozor <b>ko'p</b> ishlab chiqaradi → <b>soliq</b>. Ijobiy tashqi effekt → bozor <b>kam</b> ishlab chiqaradi → <b>subsidiya</b>.
      Ideal soliq/subsidiya = bir birlikka tashqi xarajat/foyda.
    </Callout>
    <BoxLink id="cs-tech-spillovers">Case Study: Technology Spillovers, Industrial Policy, and Patent Protection</BoxLink>
  </div>
);

const S102a = () => (
  <div className="prose-uz">
    <p>
      Hukumat tashqi effektlarga ikki yo'l bilan javob beradi: <T id="command-and-control" /> — xatti-harakatni bevosita boshqarish; va{' '}
      <T id="market-based-policy" label="market-based policies" /> — rag'bat berib, odamlar muammoni o'zi hal qilishi. Iqtisodchilar odatda ikkinchisini afzal
      ko'radi, lekin birinchisi ham ba'zan kerak.
    </p>
    <p>
      Zaharli kimyoviy moddalarni suv ta'minotiga tashlash — jinoyat: tashqi xarajat foydadan juda katta, taqiq — to'g'ri. Lekin ko'p hollarda hammasini taqiqlab
      bo'lmaydi: deyarli barcha transport (hatto ot ham!) qandaydir chiqindi chiqaradi. Jamiyat xarajat va foydani solishtirib, qancha ifloslanishga ruxsat
      berishni hal qilishi kerak. AQShda bu bilan EPA shug'ullanadi: chegara belgilaydi yoki muayyan texnologiyani talab qiladi. Muammo — regulyator sohaning
      texnologiyalari haqida batafsil ma'lumotga muhtoj, firmalar esa uni yashirishga va xarajatni bo'rttirishga rag'batlangan.
    </p>
    <AskExperts
      title="Covid Vaccines"
      source="IGM, 2020"
      statement="Given the positive externalities from vaccination, an effective Covid-19 vaccine should be mandatory for every US resident (except those with health exceptions, such as infants and people with compromised immunity) with the cost covered by the federal government."
      agree={85}
      uncertain={10}
      disagree={5}
    />
  </div>
);

const S102b = () => (
  <div className="prose-uz">
    <p>
      Salbiy tashqi effektga qarshi soliq — <T id="corrective-tax" /> (Pigovian tax, Arthur Pigou, 1877–1959). Ideal korrektiv soliq tashqi xarajatga, ideal
      subsidiya tashqi foydaga teng.
    </p>
    <p>
      <b>Misol.</b> Qog'oz fabrikasi va po'lat zavodi har yili daryoga 500 tonnadan “glop” tashlaydi. EPA uni kamaytirmoqchi:
    </p>
    <ul>
      <li><b>Regulyatsiya:</b> har bir zavod 300 tonnagacha kamaytirsin.</li>
      <li><b>Korrektiv soliq:</b> har bir tonna glop uchun $50,000.</li>
    </ul>
    <p>Ko'pchilik iqtisodchilar soliqni afzal ko'radi:</p>
    <ol>
      <li>Soliq ham xuddi shunday samarali kamaytiradi: EPA soliq darajasi bilan istalgan ifloslanish darajasiga erisha oladi.</li>
      <li>
        Soliq buni <b>arzonroq</b> qiladi: agar qog'oz fabrikasi arzonroq tozalay olsa, u ko'p kamaytiradi, po'lat zavodi esa kamroq kamaytirib, soliq to'laydi.
        Soliq ifloslanish huquqini kamaytirish eng qimmat bo'lgan zavodlarga taqsimlaydi.
      </li>
      <li>Soliq atrof-muhit uchun ham yaxshiroq: 300 tonnaga yetgach regulyatsiya rag'batni to'xtatadi, soliq esa toza texnologiyaga doimiy rag'bat beradi.</li>
    </ol>
    <p>
      Korrektiv soliqlar boshqa soliqlardan farq qiladi: 8-bobdagi soliqlar rag'batlarni buzib DWL yaratadi, korrektiv soliq esa rag'batlarni <b>to'g'rilaydi</b> —
      ham tushum beradi, ham samaradorlikni oshiradi.
    </p>
    <BoxLink id="cs-gasoline">Case Study: Why Is Gasoline Taxed So Heavily?</BoxLink>
  </div>
);

const S102c = () => (
  <div className="prose-uz">
    <p>
      EPA regulyatsiyani tanladi deylik: har bir zavod 300 tonna. Keyin zavodlar taklif bilan keladi: po'lat zavodi 400 tonna chiqarmoqchi, qog'oz fabrikasi esa $5 mln
      evaziga 200 tonnaga tushishga rozi. Jami baribir 600 tonna. Ruxsat berish kerakmi?
    </p>
    <p>
      Samaradorlik nuqtai nazaridan — <b>ha</b>: ikkala zavod ixtiyoriy kelishdi (ikkalasi yutadi), jami ifloslanish o'zgarmadi (tashqi ta'sir yo'q). Bunday savdoga
      ruxsat berilsa, yangi cheklangan resurs paydo bo'ladi — <T id="pollution-permits" />. Ruxsatnomalar bozori ularni eng ko'p qadrlaganlarga — kamaytirish
      eng qimmat bo'lgan firmalarga beradi. Dastlabki taqsimot samaradorlikka ta'sir qilmaydi.
    </p>
    <p>
      Ruxsatnomalar va korrektiv soliq juda o'xshash: ikkalasida ham firmalar ifloslanish uchun to'laydi (ruxsatnomasi borlar ham — uni sotish imkoniyatidan voz
      kechib, imkoniyat xarajatini to'laydi). Soliq <b>narxni</b> belgilaydi, ruxsatnomalar — <b>miqdorni</b> (Figure 4):
    </p>
    <PermitsGraph />
    <p>
      Talab egri chizig'i noma'lum bo'lganda tanlov muhim: EPA aniq miqdorni (600 tonna) xohlasa — ruxsatnomalarni auktsionda sotsin, narxni bozor topadi. Tashqi
      xarajatni aniq bilsa ($50,000/tonna) — soliq qo'ysin, miqdorni bozor topadi. Haqiqiy muvaffaqiyat: 1990 yilgi Clean Air Act tuzatishlari elektr stansiyalariga{' '}
      <b>SO₂</b> (kislotali yomg'ir sababi) ruxsatnomalarini savdo qilishga ruxsat berdi — ifloslanish kam xarajat bilan kamaydi.
    </p>
  </div>
);

const S102d = () => (
  <div className="prose-uz">
    <p>
      “We cannot give anyone the option of polluting for a fee” — senator Edmund Muskie (1972 Clean Water Act). 1969 yilda Klivlenddagi Cuyahoga daryosi
      shunchalik ifloslangan ediki, u yonib ketgan. Ko'p ekologlar toza havo va suvni bebaho, iqtisodni esa ikkinchi darajali yoki hatto jirkanch deb hisoblaydi.
    </p>
    <p>
      Iqtisodchilarning ko'pi ham ekolog, lekin boshqa linzadan qaraydi. Birinchi tamoyil: <b>odamlar trade-offlarga duch keladi</b>. Ifloslanishni butunlay yo'q qilish
      imkonsiz — buning uchun yuqori turmush darajasini beradigan texnologiyalardan voz kechish kerak bo'lardi. Kam odam yomon ovqat, yomon tibbiyot va yomon uy-joyga
      rozi bo'ladi.
    </p>
    <p>
      Toza muhitni boshqa tovar sifatida ko'rish foydali: u normal tovar (boy mamlakatlar toza muhitga ko'proq sarflaydi) va talab qonuniga bo'ysunadi (himoya arzon
      bo'lsa, ko'proq talab qilinadi). Korrektiv soliq va ruxsatnomalar himoyani arzonlashtiradi — demak jamiyat <b>ko'proq</b> himoya talab qiladi.
    </p>
    <BoxLink id="cs-climate">Case Study: Climate Change and Carbon Taxes</BoxLink>
  </div>
);

const S103a = () => (
  <div className="prose-uz">
    <p>Davlat yagona yechim emas. Xususiy yechimlar:</p>
    <ul>
      <li>
        <b>Axloqiy me'yorlar va ijtimoiy sanksiyalar.</b> Ko'pchilik axlat tashlamaydi — qonun qattiq ijro etilmasa ham, bu noto'g'ri. “Boshqalarga o'zingizga
        qanday munosabat xohlasangiz, shunday munosabatda bo'ling” — iqtisod tilida: tashqi effektlarni internallashtiring.
      </li>
      <li>
        <b>Xayriya.</b> Sierra Club atrof-muhitni himoya qiladi; universitetlar xayriya oladi, chunki ta'lim ijobiy tashqi effekt beradi. Davlat xayriyaga soliq imtiyozi bilan
        rag'bat beradi.
      </li>
      <li>
        <b>Biznesni birlashtirish.</b> Olma bog'i va asalarichilik bir-biriga ijobiy ta'sir qiladi (asalarilar changlatadi, olma guli nektar beradi), lekin har biri buni hisobga
        olmay, kam daraxt va kam ari tutadi. Birlashsa — bitta firma optimal sonni tanlaydi.
      </li>
      <li>
        <b>Shartnoma.</b> Bog'bon va asalarichi kerakli daraxt va ari sonini va to'lovni kelishib olishi mumkin.
      </li>
    </ul>
  </div>
);

const S103b = () => (
  <div className="prose-uz">
    <p>
      Xususiy bozor qanchalik samarali? <T id="coase-theorem" /> (Ronald Coase) javobi: agar tomonlar resurs taqsimoti bo'yicha <b>xarajatsiz</b> kelisha olsa, xususiy bozor
      tashqi effekt muammosini doim hal qiladi.
    </p>
    <p>
      Emily'ning iti Clifford huradi va qo'shnisi Horace bezovta. Samarali natija: Emily foydasi Horace zararidan katta bo'lsa — it qoladi, aks holda — yangi uyga.
      Emily foydasi $1,000, Horace zarari $1,500 bo'lsa, Horace Emilyga $1,200 taklif qiladi va Emily rozi bo'ladi — ikkalasi yutadi. Emily foydasi $3,000 bo'lsa,
      Horace $1,500 dan ortiq taklif qilmaydi — it qoladi, bu ham samarali.
    </p>
    <p>
      Huquq Horacega berilsa-chi? Natija <b>o'zgarmaydi</b>: endi Emily Horacega to'lab, itni saqlab qoladi (agar foydasi kattaroq bo'lsa). Huquq faqat <b>kim kimga
      to'lashini</b> — ya'ni farovonlik taqsimotini belgilaydi.
    </p>
    <CoaseLab />
  </div>
);

const S103c = () => (
  <div className="prose-uz">
    <p>Coase mantiqiga qaramay, amalda xususiy kelishuvlar ko'pincha amalga oshmaydi:</p>
    <ul>
      <li>
        <b><T id="transaction-costs" label="Transaction costs" />.</b> Emily va Horace turli tilda gaplashsa va tarjimon kerak bo'lsa, u kelishuv foydasidan qimmat bo'lishi
        mumkin. Haqiqatda — advokatlar va shartnomalar xarajati.
      </li>
      <li>
        <b>Savdolashuv buziladi.</b> Urushlar va ish tashlashlar kelishuv qiyinligini ko'rsatadi. Emily $1,400 talab qiladi, Horace $1,100 taklif qiladi — samarali kelishuv mumkin
        bo'lsa ham, ular tortishib turadi va it huraveradi.
      </li>
      <li>
        <b>Tomonlar juda ko'p.</b> Ko'lni ifloslantirayotgan zavod va yuzlab baliqchilar — hammani muvofiqlashtirish deyarli imkonsiz. Iqlim o'zgarishi — eng yorqin misol.
      </li>
    </ul>
    <p>Xususiy kelishuv ishlamasa, hukumat — jamoaviy harakat instituti — baliqchilar nomidan harakat qilishi mumkin.</p>
    <BoxLink id="news-recline">In the News: The Coase Theorem in Action</BoxLink>
  </div>
);

const S104 = () => (
  <div className="prose-uz">
    <p>
      Ko'rinmas qo'l kuchli, lekin qudratli emas. Bozor muvozanati CS + PS ni maksimal qiladi; agar xaridor va sotuvchilar yagona manfaatdor tomon bo'lsa, bu samarali.
      Tashqi effektlar bo'lsa, begonalar farovonligini ham hisobga olish kerak — va bozor resurslarni samarasiz taqsimlashi mumkin.
    </p>
    <p>
      Ba'zan odamlar muammoni o'zi hal qiladi (Coase). Bo'lmasa, hukumat aralashadi — lekin hatto unda ham bozor kuchlaridan <b>foydalanish</b> yaxshiroq: korrektiv soliqlar
      va ruxsatnomalar ishtirokchilarga o'z harakatlarining to'liq xarajatini ko'taradi. To'g'ri yo'naltirilgan bozor kuchlari ko'pincha bozor muvaffaqiyatsizligining eng
      yaxshi davosi.
    </p>
  </div>
);

function TechSpillovers() {
  return (
    <div className="prose-uz">
      <p>
        <T id="technology-spillover" /> — bir firmaning tadqiqot va ishlab chiqarish harakatlari boshqa firmalarning texnologiyaga kirishiga ta'siri. Masalan, sanoat robotlari:
        har bir yangi robot yaratilganda yangi dizayn kashf etilishi mumkin va u umumiy bilim zaxirasiga qo'shiladi — ijobiy tashqi effekt.
      </p>
      <p>
        Hukumat robot ishlab chiqarishni subsidiyalashi mumkin: taklif subsidiya miqdoricha pastga siljiydi, miqdor oshadi. Ideal subsidiya = spillover qiymati.
      </p>
      <ul>
        <li>
          Ba'zi iqtisodchilar spilloverlar keng tarqalgan va eng katta spillover beradigan sohalarni rag'batlantirish kerak deydi (kompyuter chiplari &gt; kartoshka chipslari). AQSh
          soliq kodeksi R&amp;D ga imtiyoz beradi; ba'zi mamlakatlar muayyan sohalarni subsidiyalaydi — bu <T id="industrial-policy" />.
        </li>
        <li>
          Boshqalar shubhali: spilloverni o'lchash juda qiyin; siyosiy tizim eng kuchli lobbili sohalarni subsidiyalashi mumkin; siyosat raqobatdan himoya uchun ishlatilishi mumkin.
        </li>
        <li>
          Boshqa yo'l — <T id="patent" />: ixtirochiga cheklangan muddatga mulk huquqi. Boshqalar foydalansa, ruxsat oladi va royalti to'laydi. Kamchiligi — texnologiya sekinroq
          tarqaladi, lekin tadqiqotga rag'bat katta.
        </li>
      </ul>
    </div>
  );
}

function Gasoline() {
  return (
    <div className="prose-uz">
      <p>Ko'p mamlakatlarda benzin eng ko'p soliqqa tortiladigan tovarlardan. Benzin solig'ini uch salbiy tashqi effektga qarshi korrektiv soliq deb ko'rish mumkin:</p>
      <ul>
        <li><b>Ifloslanish:</b> tutun yurak va o'pka kasalliklarini oshiradi; qazilma yoqilg'i — iqlim o'zgarishining asosiy sababi.</li>
        <li><b>Tirbandlik:</b> soliq jamoat transporti, velosiped, sheriklik va ishga yaqin yashashga undaydi.</li>
        <li><b>Baxtsiz hodisalar:</b> katta SUV egasi o'zini xavfsizroq qiladi, lekin boshqalarni xavfga qo'yadi; soliq bu xavfni hisobga olishga majbur qiladi.</li>
      </ul>
      <p>
        Boshqa soliqlardan farqli o'laroq, benzin solig'i iqtisodiyotni <b>yaxshilaydi</b>: toza havo, kam tirbandlik, xavfsizroq yo'llar. 2007 yilgi tadqiqot optimal soliqni
        2005 yil narxida <b>$2.28/gallon</b> deb baholagan (2021 yil narxida ~<b>$3.20</b>). AQShdagi haqiqiy soliq 2021 yilda atigi ~<b>55 sent</b>. Tushum boshqa buzuvchi
        soliqlarni (daromad solig'i) kamaytirishga ishlatilishi mumkin; yoqilg'i tejamkorligi talablari va elektromobil subsidiyalari keraksiz bo'lardi. Lekin yuqori benzin solig'i
        hech qachon siyosiy jihatdan ommabop bo'lmagan.
      </p>
    </div>
  );
}

function Climate() {
  return (
    <div className="prose-uz">
      <p>
        Inson faoliyatidagi uglerod chiqindilari iqlim o'zgarishiga sabab — klassik salbiy tashqi effekt. Yoram ismli fuqaro uglerod izini kamaytirmoqchi: gibrid yoki elektr
        mashina, sheriklikda yurish, jamoat transporti, ishga yaqin ko'chish, kichikroq uy, termostatni sozlash, quyosh panellari, tejamkor maishiy texnika, mahalliy oziq-ovqat,
        mol go'shtidan voz kechish… Har kuni hammamiz shunday shaxsiy, lekin global ta'sirli tanlovlar qilamiz.
      </p>
      <p>Siyosatchilarning uchta yo'li:</p>
      <ol>
        <li><b>Ijtimoiy mas'uliyatga murojaat</b> — ba'zilar qiladi, lekin ko'pchilikdan buni kutish real emas.</li>
        <li>
          <b>Regulyatsiya</b> — masalan, AQShdagi CAFE (yoqilg'i tejamkorligi) standartlari. Muammolar: iste'molchi xohishi va ishlab chiqaruvchiga ruxsat berilgan narsa ziddiyati
          (Robert Lutz: “CAFE is like trying to cure obesity by requiring clothing manufacturers to make smaller sizes”); eng muhimi — regulyatsiya bir nechta qarorga ta'sir qiladi,
          Yoramning qayerda yashashini yoki kim bilan yurishini emas.
        </li>
        <li>
          <b>Uglerodga narx</b> — <T id="carbon-tax" /> yoki cap-and-trade. Benzin, elektr, mol go'shti sotuvchilari uglerod uchun to'lasa, bu narxlarga kiradi va har bir
          iste'molchi barcha qarorlarida global ta'sirni hisobga oladi. Yevropada samarali ishlagan, AQShda hali joriy etilmagan.
        </li>
      </ol>
      <AskExperts
        title="Carbon Taxes"
        source="IGM, 2012"
        statement="A U.S. carbon tax of $20 per ton, increasing at 4 percent per year, … would involve fewer harmful net distortions to the U.S. economy than a tax increase that generated the same revenue by raising marginal tax rates on labor income across the board."
        agree={98}
        uncertain={2}
        disagree={0}
      />
      <AskExperts title="Carbon Taxes" source="IGM, 2011" statement="A tax on the carbon content of fuels would be a less expensive way to reduce carbon dioxide emissions than would a collection of policies such as ‘corporate average fuel economy’ requirements for automobiles." agree={95} uncertain={3} disagree={2} />
      <AskExperts title="Carbon Taxes" source="IGM, 2018" statement="Carbon taxes are a better way to implement climate policy than cap-and-trade." agree={79} uncertain={21} disagree={0} />
    </div>
  );
}

function Recline() {
  return (
    <div className="prose-uz">
      <Source>Josh Barro, “Don't Want Me to Recline My Airline Seat? You Can Pay Me”, New York Times, 2014 — qisqacha mazmuni.</Source>
      <ul>
        <li>
          United Airlines reysida bir yo'lovchi oldingi o'rindiq orqaga yotmasligi uchun $21.95 lik “Knee Defender” o'rnatdi; oldingi yo'lovchi unga suv sepdi; samolyot
          Chikagoga qo'nib, ikkalasini tushirdi.
        </li>
        <li>
          Muallif: chipta sotib olganda o'rindiqni yotqizish huquqini ham sotib olasiz. Orqadagi yo'lovchi bezovta bo'lsa, u sizga to'lab, huquqni sotib olishi kerak — bu{' '}
          <b>Coase teoremasi</b>: huquq aniq belgilansa va bitim xarajati kam bo'lsa, u eng ko'p qadrlaganga o'tadi.
        </li>
        <li>
          Donald Marron e'tirozi: notanish odam bilan savdolashish — bitim xarajati (ba'zan yuzga suv bilan tugaydi!). Shuning uchun huquqni dastlab uni eng ko'p qadrlashi
          mumkin bo'lganga (orqadagi yo'lovchiga) berish kerak. Barro: yuzlab reyslarda hech kim unga to'lashni taklif qilmagan — demak, bu huquqni ular unchalik qadrlamaydi.
        </li>
      </ul>
      <Callout kind="tip" title="Muhokama uchun savollar">
        <ol>
          <li>Oldingi yo'lovchiga o'rindiqni yotqizmaslik uchun pul taklif qila olasizmi? Nega?</li>
          <li>Orqadagi yo'lovchi sizga pul taklif qilsa, qanday javob berasiz? Nega?</li>
        </ol>
      </Callout>
    </div>
  );
}

const Ext = () => <ExternalityGraph />;
const Permits = () => <PermitsGraph />;
const Coase = () => <CoaseLab />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    "**Externality** ni ta'riflash va salbiy/ijobiy tashqi effektlarga misollar keltirish",
    "**Social cost** va **social value** egri chiziqlari bilan bozor va optimal miqdorni solishtirish, DWL ni ko'rsatish",
    "**Corrective (Pigovian) tax** va subsidiya qanday internallashtirishini tushuntirish",
    "Regulyatsiya, korrektiv soliq va **tradable permits** ni taqqoslash",
    "**Coase theorem** va xususiy yechimlar nima uchun ba'zan ishlamasligini (transaction costs) tushuntirish",
  ],
  sections: [
    { id: "s-10-0", code: "10", titleEn: "Externalities", titleUz: "Tashqi effektlar: kirish", Body: S10intro },
    { id: "s-10-1a", code: "10-1a", titleEn: "Welfare Economics: A Recap", titleUz: "Farovonlik iqtisodiyoti: takrorlash", Body: S101a },
    { id: "s-10-1b", code: "10-1b", titleEn: "Negative Externalities", titleUz: "Salbiy tashqi effektlar", Body: S101b, check: checks["s-10-1b"] },
    { id: "s-10-1c", code: "10-1c", titleEn: "Positive Externalities", titleUz: "Ijobiy tashqi effektlar", Body: S101c, check: checks["s-10-1c"] },
    { id: "s-10-2a", code: "10-2a", titleEn: "Command-and-Control Policies: Regulation", titleUz: "Buyruq va nazorat: regulyatsiya", Body: S102a, check: checks["s-10-2a"] },
    { id: "s-10-2b", code: "10-2b", titleEn: "Market-Based Policy 1: Corrective Taxes and Subsidies", titleUz: "Bozor siyosati 1: korrektiv soliq va subsidiyalar", Body: S102b, check: checks["s-10-2b"] },
    { id: "s-10-2c", code: "10-2c", titleEn: "Market-Based Policy 2: Tradable Pollution Permits", titleUz: "Bozor siyosati 2: sotiladigan ruxsatnomalar", Body: S102c, check: checks["s-10-2c"] },
    { id: "s-10-2d", code: "10-2d", titleEn: "Objections to the Economic Analysis of Pollution", titleUz: "Ifloslanishning iqtisodiy tahliliga e'tirozlar", Body: S102d, check: checks["s-10-2d"] },
    { id: "s-10-3a", code: "10-3a", titleEn: "The Types of Private Solutions", titleUz: "Xususiy yechimlar turlari", Body: S103a },
    { id: "s-10-3b", code: "10-3b", titleEn: "The Coase Theorem", titleUz: "Coase teoremasi", Body: S103b, check: checks["s-10-3b"] },
    { id: "s-10-3c", code: "10-3c", titleEn: "Why Private Solutions Do Not Always Work", titleUz: "Nega xususiy yechimlar har doim ishlamaydi", Body: S103c, check: checks["s-10-3c"] },
    { id: "s-10-4", code: "10-4", titleEn: "Conclusion", titleUz: "Xulosa", Body: S104 },
  ],
  examTraps: [
    { title: "Qaysi egri chiziq siljiydi?", body: "Ishlab chiqarishdagi salbiy effekt → **social cost** taklifdan yuqori. Iste'moldagi ijobiy effekt → **social value** talabdan yuqori." },
    { title: "Ko'p yoki kam?", body: "Negative → Q_market > Q_optimum (ko'p). Positive → Q_market < Q_optimum (kam)." },
    { title: "Korrektiv soliq DWL yaratmaydi", body: "Tashqi effekt bo'lganda u samaradorlikni **oshiradi** (QuickQuiz 4)." },
    { title: "Soliq vs ruxsatnoma", body: "Soliq **narxni**, ruxsatnoma **miqdorni** belgilaydi. Texnologiya yaxshilansa: soliqda Q ↓, ruxsatnomada P ↓." },
    { title: "Coase", body: "Bitim xarajatsiz → huquq qanday bo'lmasin samarali natija; huquq faqat **kim to'lashini** belgilaydi. Transaction costs yoki ko'p tomon → ishlamaydi." },
  ],
  mistakes: [
    { wrong: "“Tashqi effekt — bozor narxining oshishi.”", right: "Tashqi effekt — **begona** shaxsga kompensatsiyasiz ta'sir." },
    { wrong: "“Ijobiy effektga soliq kerak.”", right: "Ijobiy → **subsidiya**; salbiy → soliq." },
    { wrong: "“Eng yaxshisi — ifloslanishni nolga tushirish.”", right: "Optimal ifloslanish odatda noldan katta — trade-offs." },
    { wrong: "“Coase teoremasiga ko'ra huquq kimda bo'lishi muhim emas.”", right: "Samaradorlik uchun muhim emas, lekin **farovonlik taqsimoti** uchun muhim." },
    { wrong: "“Ruxsatnomalarni kimga berish samaradorlikni belgilaydi.”", right: "Savdo bo'lsa, dastlabki taqsimot samaradorlikka ta'sir qilmaydi." },
  ],
  boxes: [
    { id: "cs-tech-spillovers", kind: "Case Study", titleEn: "Technology Spillovers, Industrial Policy, and Patent Protection", titleUz: "Texnologik spillover, sanoat siyosati va patentlar", Body: TechSpillovers },
    { id: "cs-gasoline", kind: "Case Study", titleEn: "Why Is Gasoline Taxed So Heavily?", titleUz: "Nega benzinga soliq shunchalik yuqori?", Body: Gasoline },
    { id: "cs-climate", kind: "Case Study", titleEn: "Climate Change and Carbon Taxes", titleUz: "Iqlim o'zgarishi va uglerod solig'i", Body: Climate },
    { id: "news-recline", kind: "In the News", titleEn: "The Coase Theorem in Action", titleUz: "Coase teoremasi amalda", Body: Recline },
  ],
  summary: [
    "Xaridor va sotuvchi o'rtasidagi bitim uchinchi shaxsga bevosita ta'sir qilsa — bu **externality**. Salbiy effektda (ifloslanish) ijtimoiy optimal miqdor bozor muvozanatidan **kam**; ijobiy effektda (texnologik spillover) — **ko'p**.",
    "Hukumat tashqi effektlar samarasizligini tuzatishi mumkin: ba'zan xatti-harakatni **regulyatsiya** qiladi, ba'zan **korrektiv soliqlar** bilan internallashtiradi, ba'zan **ruxsatnomalar** chiqaradi — ruxsatnomalar natijasi korrektiv soliqqa o'xshash.",
    "Tashqi effektdan zarar ko'rganlar ba'zan muammoni o'zi hal qiladi: biznesni birlashtirish yoki shartnoma. **Coase theorem**ga ko'ra, kelishuv xarajatsiz bo'lsa, tomonlar resurslarni samarali taqsimlaydigan kelishuvga keladi. Ammo ko'p hollarda tomonlar ko'pligi sabab kelishuv qiyin va teorema qo'llanmaydi.",
  ],
  widgets: { ext: Ext, permits: Permits, coase: Coase },
  gallery: [
    { title: "Tashqi effektlar va Pigou solig'i/subsidiyasi", Component: () => <ExternalityGraph /> },
    { title: "Korrektiv soliq va ifloslanish ruxsatnomalari", Component: () => <PermitsGraph /> },
    { title: "Coase teoremasi laboratoriyasi", Component: () => <CoaseLab /> },
  ],
};
