import { DeathSpiral, HealthFacts, InsuranceCalc, MoralHazardGraph } from '../../../components/graphs/Ch12Widgets';
import { Callout } from '../../../components/ui/Kit';
import { AskExperts, BookTable, BoxLink, Source } from '../../../components/ui/Lesson';
import { T } from '../../../components/ui/Term';
import type { ChapterPageContent } from '../../types';
import { checks } from './quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        Hammamiz uzoq va sog'lom yashashni xohlaymiz — jarroh pichog'i, hamshira ignasi va stomatolog burg'usisiz. Lekin sog'liq odatda cheklangan resurslarni talab qiladi, demak u qisman
        <b> iqtisodiy muammo</b>. AQShda sarflangan har oltita dollardan biridan ko'prog'i sog'liqni saqlashga ketadi.
      </p>
      <p>
        Sog'liq bozori talab-taklif modelidan ko'p jihatdan farq qiladi va shuning uchun deyarli hamma davlatlarda hukumat unda chuqur ishtirok etadi (2020–2021 pandemiyasida ayniqsa).
        Bob ikki qismdan iborat: sog'liq bozorining iqtisodiy xususiyatlari va AQSh tizimi haqidagi asosiy faktlar. O'zbekistondagi majburiy tibbiy sug'urta islohotlarini tushunish uchun ham
        aynan shu tushunchalar kerak.
      </p>
    </div>
  );
}

const S121 = () => (
  <div className="prose-uz">
    <BookTable
      head={['Standart talab-taklif modeli', 'Sog‘liqni saqlash bozori']}
      rows={[
        ['Asosiy manfaatdorlar — xaridor va sotuvchi', 'Uchinchi tomonlar (sug‘urtachi, davlat, begonalar) ham manfaatdor'],
        ['Xaridor nima olayotganini yaxshi baholaydi', 'Bemor ko‘pincha nima kerakligini bilmaydi va davolashni baholay olmaydi'],
        ['Xaridor sotuvchiga bevosita to‘laydi', 'Shifokorga ko‘pincha sug‘urta (xususiy yoki davlat) to‘laydi'],
        ['Narxlar qarorlarni muvofiqlashtiradi', 'Sug‘urtachi qoidalari resurslarni taqsimlaydi'],
        ['Ko‘rinmas qo‘l samarali taqsimot beradi', 'Ko‘rinmas qo‘l ishlamaydi — taqsimot juda samarasiz bo‘lishi mumkin'],
      ]}
    />
  </div>
);

const S121a = () => (
  <div className="prose-uz">
    <p>
      10-bobdan: <T id="externality" /> bo'lsa, bozor natijasi samarasiz. Sog'liqda tashqi effektlar juda ko'p:
    </p>
    <ul>
      <li>
        <b>Vaksinalar.</b> Vicki emlansa, u kasallik tashuvchisi bo'lmaydi — boshqalarga ijobiy effekt. Emlanishning narxi (pul, vaqt, noqulaylik) bor, shuning uchun bozor yolg'iz qolsa kam odam
        emlanadi. Davlat majburlaydi, targ'ib qiladi, rag'bat beradi yoki ishlab chiqarishni subsidiyalaydi.
      </li>
      <li>
        <b>Tibbiy tadqiqot</b> — yangi bilim boshqalarga foyda. Davlat <T id="patent" /> beradi (vaqtinchalik monopoliya tashqi effektni internallashtiradi), lekin monopoliya narxi marjinal
        xarajatdan yuqori → kam iste'mol, DWL (16-bob) va kambag'allarga og'ir. Vaksinalarda ziddiyat: patent tadqiqotni rag'batlantiradi, lekin yuqori narx emlashni sekinlashtiradi. Michael
        Kremer taklifi: davlat patentni <b>sotib olsin</b>. Yana bir yo'l — bevosita subsidiya: NIH byudjeti yiliga $40 mlrd dan ko'p (kishi boshiga ~$130).
      </li>
    </ul>
    <BoxLink id="cs-vaccine">Case Study: Vaccine Hesitancy</BoxLink>
  </div>
);

const S121b = () => (
  <div className="prose-uz">
    <p>
      Odatda iste'molchi nima istashini biladi va keyin natijani baholaydi. Sog'liqda — yo'q: kasal bo'lganingizda qaysi davolash eng yaxshi ekanini bilmaysiz, keyin ham ishonchli baholay olmaysiz
      (ba'zan eng yaxshi tibbiyot ham yordam bermaydi, noto'g'ri davolash esa organizm o'zi tiklangani uchun “ishlagan”dek ko'rinadi).
    </p>
    <ul>
      <li>Davlat shifokor, stomatolog, hamshiralarga <b>litsenziya</b> talab qiladi; FDA yangi dorilarni xavfsizlik va samaradorlikka tekshiradi.</li>
      <li>Kasbning o'zi ham nazorat qiladi: tibbiyot maktablari akkreditatsiyasi, kasbiy me'yorlar, shifokor-bemor ishonchi.</li>
      <li>Kamchiliklari: tibbiyot maktabi ochish qiyin — kasb monopoliyaga o'xshab shifokorlar sonini cheklaydi; FDA juda sekin — ba'zi bemorlar eksperimental davolashsiz qoladi.</li>
    </ul>
  </div>
);

const S121c = () => (
  <div className="prose-uz">
    <p>
      Qachon kasal bo'lishimiz noma'lum — sog'liq xarajati oldindan aytib bo'lmaydi. Ko'pchilik <T id="risk-aversion" /> ga ega: aniq $100,000 ni 50–50 ehtimolli $50,000 yoki $150,000 dan afzal
      ko'radi. Sug'urta — <T id="premium" /> evaziga xavfni sug'urtachiga o'tkazish.
    </p>
    <InsuranceCalc />
    <p>Sug'urta bozorini ikki muammo buzadi:</p>
    <ul>
      <li>
        <T id="moral-hazard" />: sug'urtalangan bemor kichik alomatda ham shifokorga boradi, shifokor shubhali tahlil buyuradi. Javob: <b>co-pay</b> (masalan, har tashrifga $20), qat'iy qoidalar.
      </li>
      <li>
        <T id="adverse-selection" />: yashirin kasalligi borlar sug'urtani ko'proq oladi → narx kasalroq odamga mos bo'lishi kerak → o'rtacha sog'lomlar ham chiqib ketadi. Eng yomoni —{' '}
        <T id="death-spiral" />.
      </li>
    </ul>
    <DeathSpiral />
    <p>
      <b>Affordable Care Act</b> (Obamacare, 2010) oldindan mavjud kasalliklar uchun qimmat narxni taqiqladi — adverse selection retsepti. Shuning uchun hammani sug'urta olishga majburladi
      (jarima bilan) va kam daromadlilarga subsidiya berdi. 65 yoshgacha sug'urtasizlar ulushi 18% (2010) → 11% (2020). Mandate siyosiy bahsli edi va 2017-yil oxirida bekor qilindi; hozircha
      death spiral boshlanmagan — ehtimol ko'pchilik sug'urtani baribir qadrlaydi.
    </p>
    <Callout kind="exam">
      Sug'urta <b>noaniqlikni</b> kamaytirish uchun olinadi (QQ 2). Kirish qoidalari — <b>moral hazard</b>ga qarshi (QQ 3). Sog'lomlar sotib olmasa — <b>adverse selection</b> (QQ 4).
    </Callout>
  </div>
);

const S121d = () => (
  <div className="prose-uz">
    <p>
      Akvapark qimmatlashib, kam daromadlilar bormasa — kam odam buni adolatsizlik deydi. Kasalni daromadi past bo'lgani uchun davolamaslik esa noto'g'ri tuyuladi: sog'liq ko'pincha{' '}
      <b>inson huquqi</b> deb qaraladi (bu iqtisodiyot doirasidan tashqari baho, lekin hisobga olinishi kerak).
    </p>
    <p>
      Sog'liq ovqatga o'xshaydi (SNAP orqali yordam), lekin farqi: oziq-ovqat narxi daromaddan sekin o'sgan, zamonaviy tibbiyot esa tez qimmatlashgan. Kanada va Angliyada <T id="single-payer" />.
      AQShda ko'pchilik ish beruvchi orqali xususiy sug'urtaga ega, lekin davlat roli katta: <b>Medicare</b> (65+), <b>Medicaid</b> (kam daromadlilar), Veterans Health Administration, ACA.
    </p>
  </div>
);

const S121e = () => (
  <div className="prose-uz">
    <p>
      Oddiy bozor (Figure 1a): sotuvchi tovarni beradi, xaridor narxni to'laydi. Sog'liq bozori (Figure 1b): <b>bemor → sug'urtachiga</b> premium yoki soliq; <b>sug'urtachi → shifokorga</b> to'lov;
      <b> shifokor → bemorga</b> xizmat. Bu uch xil qoidani talab qiladi — <T id="healthcare-rules" />:
    </p>
    <div className="not-prose my-5 grid gap-3 sm:grid-cols-3">
      {[
        ['Financing', "Kim qancha to'laydi: soliq tizimi yoki premiumlar (davlat yosh, jins, kasallik bo'yicha narx farqini cheklashi mumkin)."],
        ['Access', "Bemor qachon xizmat oladi: yiliga bitta tekshiruv, faqat shartnomadagi shifokorlar, mutaxassisga yo'llanma — moral hazardga qarshi."],
        ['Payment', "Sug'urtachi qaysi muolajaga qancha to'laydi; qoplanmasa (kosmetik jarrohlik) — bozor oddiy (a) shaklga qaytadi."],
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
      Yaxshi yangilik: umr ko'rish davomiyligi 1900-yil <b>47.3</b>, 1950-yil <b>68.2</b>, 2019-yil <b>78.8</b> yil. Vaqtinchalik pasayishlar: 1918 gripp pandemiyasi (10 yildan ko'p), Ikkinchi jahon
      urushi (1942→1943 da −2.9 yil), opioid epidemiyasi, 2020-yilgi COVID-19 (−1.5 yil). O'sishning katta qismi — <b>chaqaloqlar o'limining</b> kamayishi: ~10% → 0.6% dan kam.
    </p>
    <p>
      Sabablar: tibbiy texnologiya (vaksinalar), sanitariya (toza suv, kanalizatsiya), chekishning kamayishi (1960-yildan kishi boshiga &gt;50% kam), xavfsizroq mashinalar (halokatdan o'lim 1950-yildagining yarmi).
    </p>
    <HealthFacts />
  </div>
);

const S122b = () => (
  <div className="prose-uz">
    <p>Sog'liq xarajatlari YaIMning 5% (1960) dan 18% (2019) ga oshdi. To'rt kuch:</p>
    <ol>
      <li>
        <T id="baumol-cost-disease" />: shifokor qabuli — sartarosh yoki o'qituvchi darsi kabi shaxsiy xizmat, unumdorligi kam o'sadi; boshqa sohalarda maosh oshgani uchun bu sohada ham oshishi kerak →
        narx oshadi. Talab inelastik bo'lgani uchun xarajat ham oshadi.
      </li>
      <li><b>Tibbiy texnologiya</b>: ilgari ko'p kasallikka faqat dam olish va “kutib ko'rish” (va zuluklar!) bor edi; yangi davolash usullari umrni uzaytiradi, lekin qimmat.</li>
      <li><b>Demografiya</b>: tug'ilish ~3 dan ~2 bolaga tushdi, umr uzaydi → 65+ ulushi 9% (1960) → 17% (2020).</li>
      <li><b>Daromad o'sishi</b>: kishi boshiga daromad 1960-yildagidan 3 barobardan ko'p. Ovqatning marjinal qiymati tez tushadi, qo'shimcha yillar umrniki — sekin → sog'liq daromad elastikligi ≈ <b>1.3</b> (&gt; 1).</li>
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
      AQSh ~17%, boshqa rivojlangan davlatlar 9–12% (Figure 4). <b>Tanqidchilar</b>: Kanada, Fransiya, Yaponiyada umr uzoqroq, xarajat kam; single-payer ma'muriy xarajat va sug'urta
      foydasini tejaydi. <b>Himoyachilar</b>: xalqaro taqqoslash ishonchsiz — masalan, AQShda semizlik ko'proq, bu umrni qisqartiradi va xarajatni oshiradi.
    </p>
    <p>
      <b>Dori narxlari</b>: kanadaliklar dorilarga ~30% kam sarflaydi — markazlashgan tizim narxlarni qattiq nazorat qiladi. Tanqidchilar AQShni ham shunday qilishga chaqiradi; himoyachilar: narx nazorati
      yangi dori tadqiqotiga rag'batni kamaytiradi — bugun arzon, ertaga kamroq davolash usuli; narx nazorati qo'ygan davlatlar AQSh moliyalagan tadqiqotdan <b>free ride</b> qiladi.
    </p>
  </div>
);

const S122d = () => (
  <div className="prose-uz">
    <p>
      Cho'ntakdan to'lov ulushi 55% (1960) → 13% (2019); uchinchi tomon to'lovi 45% → 87% (yarmidan biroz kami xususiy sug'urta, yarmidan biroz ko'pi Medicare va Medicaid). Ko'p iqtisodchilar fikricha,
      AQSh tizimi kichik va oddiy xarajatlar uchun ham sug'urtaga <b>haddan tashqari</b> tayanadi → moral hazard kuchayadi.
    </p>
    <p>
      Sabab — soliq: ish beruvchi beradigan sug'urta soliqdan ozod, naqd maosh — yo'q. ACA buni “Cadillac tax” (qimmat rejalarga soliq) bilan tuzatmoqchi edi; u kechiktirildi va 2019-yilda bekor qilindi.
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
      Yuqoridagi g'oyalar iqtisodchilar orasida keng qabul qilingan, lekin siyosatda bahs davom etadi. <b>Chap</b>: davlat roli katta bo'lishi kerak; xususiy sug'urtachilar foydani odamlardan ustun
      qo'yadi; “public option” yoki Kanada kabi single-payer. <b>O'ng</b>: davlat rolini kamaytirish, yengilroq regulyatsiya, xususiy sug'urtachilar va shifokorlar raqobati; markazlashgan tizim erkinlikni
      cheklaydi, xizmatni ratsionlaydi, innovatsiyani bo'g'adi (Kanadadagi uzoq navbatlar).
    </p>
    <p>
      Bu — 1-bobdagi <b>tenglik va samaradorlik</b> trade-offining bir qismi: universal qamrov uchun boylarga soliq kerak (rag'batlarni buzadi, pirog kichrayadi); kichik davlat esa muhtojlarga kamroq resurs.
    </p>
    <BoxLink id="news-pandemic">In the News: Lessons from the Pandemic of 2020</BoxLink>
  </div>
);

function Vaccine() {
  return (
    <div className="prose-uz">
      <p>
        Qizamiq — juda yuqumli va xavfli, ayniqsa bolalar uchun. 1963-yilda vaksina yaratilishidan oldin AQShda har yili 3–4 mln kishi kasallangan, o'n minglab kasalxonaga tushgan, yuzlab o'lgan.
        2000-yilga kelib qizamiq deyarli yo'qotildi — keyingi o'n yilda yiliga ~60 holat. Vaksina tadqiqoti ulkan ijobiy tashqi effekt berdi.
      </p>
      <p>
        Kutilmagan oqibat: ba'zi ota-onalar hushyorligini yo'qotdi — vaksina xavfli degan (olimlar rad etgan) ishonch yoki diniy sabablar tufayli bolalarini emlamadi. Holatlar 2018-yilda 372 ta,
        2019-yilda 1,000 dan ko'p. Ba'zi shtatlar talabni kuchaytirdi (faqat tibbiy sabab bilan ozod qilish). Tanqidchilar — shaxsiy erkinlik buzilishi; tarafdorlar — yuqumli kasallik tashqi effekti.
      </p>
      <p>
        COVID-19 (2020–2021): vaksinalar bepul edi, lekin ko'pchilik ikkilandi. Ba'zi iqtisodchilar emlanganlarga <b>pul to'lashni</b> taklif qildi — tashqi effektni internallashtiruvchi Pigou subsidiyasi.
        Nyu-Yorkda emlanganlarga Shake Shack burgeri uchun vaucher berildi.
      </p>
    </div>
  );
}

function Pandemic() {
  return (
    <div className="prose-uz">
      <Source>Amy Finkelstein, “Why It's So Hard to Cut Waste in Health Care,” New York Times, January 24, 2021</Source>
      <p>
        MIT iqtisodchisi Finkelstein: ortiqcha xarajatni kesib, muhim davolashni saqlash — sog'liq siyosatining “muqaddas kosasi”. Pandemiya buning qiyinligini ko'rsatdi: 2020-yilning dastlabki 9 oyida
        xarajatlar 10% tushdi, lekin <b>hamma narsa</b> kamaydi — og'ir yurak xuruji va insult bilan kasalxonaga yotish, bolalar emlashi ham, ko'p buyuriladigan tekshiruvlar ham.
      </p>
      <ul>
        <li>Sog'liq — AQSh iqtisodiyotining deyarli beshdan biri; tadqiqotlarga ko'ra uning to'rtdan biri yoki ko'prog'i isrof (ma'muriy xarajat, yuqori narx, noto'g'ri davolash).</li>
        <li>“Skin in the game” (yuqori deductible): bemorlar kamroq foydalanadi — keraksiz skanerlar ham, diabet va xolesterin dorilari ham kamayadi.</li>
        <li>Medicaid profilaktikani ham, tez yordamga murojaatni ham oshirgan — “to'mtoq qurol”.</li>
        <li>Shifokorga bemor uchun belgilangan to'lov (masalan, tizza almashtirishga $25,000) xarajatga e'tiborni oshiradi, lekin optimal davolashni ham kamaytirishi mumkin.</li>
        <li>Reklama haqidagi maqol sog'liqqa ham tegishli: “xarajatning yarmi isrof — faqat qaysi yarmi ekanini bilmaymiz”.</li>
      </ul>
      <Callout kind="tip" title="Muhokama uchun savollar">
        <ol>
          <li>Shifokorga borishda co-pay oshsa, qanchalik tez-tez borardingiz? Nega?</li>
          <li>Qachon shifokor kerakligini va qachon organizm o'zi tuzalishini yaxshi baholay olasizmi? Misollar keltiring.</li>
          <li>Qaysi tahlillarni buyurishda shifokoringizga qanchalik ishonasiz? Nega?</li>
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
    "Sog'liq bozori standart talab-taklif modelidan qaysi besh jihatdan farq qilishini tushuntirish",
    "Sog'liqdagi **tashqi effektlar** (vaksina, tadqiqot) va sifatni nazorat qilish qiyinligini tahlil qilish",
    "**Risk aversion**, **moral hazard**, **adverse selection** va **death spiral**ni hisob-kitob bilan ko'rsatish",
    "Moliyalash, kirish va to'lov qoidalari; AQSh tizimi haqidagi asosiy faktlar va **Baumol's cost disease**",
    "Sog'liq siyosati bahsini tenglik va samaradorlik trade-offi sifatida ko'rish",
  ],
  sections: [
    { id: "s-12-1", code: "12-1", titleEn: "The Special Characteristics of the Market for Healthcare", titleUz: "Sog'liq bozorining o'ziga xosliklari", Body: S121 },
    { id: "s-12-1a", code: "12-1a", titleEn: "Externalities Galore", titleUz: "Tashqi effektlar ko'p", Body: S121a, check: checks["s-12-1a"] },
    { id: "s-12-1b", code: "12-1b", titleEn: "The Difficulty of Monitoring Quality", titleUz: "Sifatni nazorat qilish qiyinligi", Body: S121b, check: checks["s-12-1b"] },
    { id: "s-12-1c", code: "12-1c", titleEn: "The Insurance Market and Its Imperfections", titleUz: "Sug'urta bozori va uning kamchiliklari", Body: S121c, check: checks["s-12-1c"] },
    { id: "s-12-1d", code: "12-1d", titleEn: "Healthcare as a Right", titleUz: "Sog'liq — huquq sifatida", Body: S121d, check: checks["s-12-1d"] },
    { id: "s-12-1e", code: "12-1e", titleEn: "The Rules Governing the Healthcare Marketplace", titleUz: "Sog'liq bozorini boshqaruvchi qoidalar", Body: S121e, check: checks["s-12-1e"] },
    { id: "s-12-2a", code: "12-2a", titleEn: "People Are Living Longer", titleUz: "Odamlar uzoqroq yashamoqda", Body: S122a, check: checks["s-12-2a"] },
    { id: "s-12-2b", code: "12-2b", titleEn: "Healthcare Spending Is a Growing Share of the Economy", titleUz: "Sog'liq xarajati ulushi o'smoqda", Body: S122b, check: checks["s-12-2b"] },
    { id: "s-12-2c", code: "12-2c", titleEn: "Healthcare Spending Is Especially High in the United States", titleUz: "AQShda sog'liq xarajati ayniqsa yuqori", Body: S122c, check: checks["s-12-2c"] },
    { id: "s-12-2d", code: "12-2d", titleEn: "Out-of-Pocket Spending Is a Declining Share of Health Expenditure", titleUz: "Cho'ntakdan to'lov ulushi kamaymoqda", Body: S122d, check: checks["s-12-2d"] },
    { id: "s-12-3", code: "12-3", titleEn: "Conclusion: The Policy Debate over Healthcare", titleUz: "Xulosa: sog'liq siyosati bahsi", Body: S123 },
  ],
  examTraps: [
    { title: "Uch atama", body: "**Risk aversion** — sug'urtaga talab sababi. **Moral hazard** — sug'urtadan keyin ortiqcha foydalanish (co-pay, access rules). **Adverse selection** — kim sotib olishi (mandate)." },
    { title: "Death spiral hisob-kitobi", body: "Narx = poolning o'rtacha xarajati + load. Har qadamda sotib olish shartini tekshiring; pool o'zgarmaganda to'xtang." },
    { title: "Baumol", body: "Sabab — xizmat sohasida **past** unumdorlik o'sishi (QQ 6), talab emas." },
    { title: "Cho'ntakdan to'lov", body: "Ulush **kamaygan** (55% → 13%) → moral hazard **kuchaygan** (QQ 7)." },
  ],
  mistakes: [
    { wrong: "“Odamlar moral hazardni kamaytirish uchun sug'urta oladi.”", right: "Ular **noaniqlikni** kamaytirish uchun oladi; moral hazard sug'urtaning yon ta'siri." },
    { wrong: "“Sug'urta narxini oshirish foydani albatta oshiradi.”", right: "Adverse selection: sog'lomlar ketadi, xarajat oshadi (Problem 2)." },
    { wrong: "“AQSh ko'p sarflaydi — demak samarasiz, bu isbotlangan.”", right: "Kitob: oddiy izoh yo'q; turmush tarzi kabi omillar ham bor." },
    { wrong: "“Mandate moral hazardni yo'qotadi.”", right: "Mandate **adverse selection**ga qarshi; moral hazardga co-pay va qoidalar kerak." },
  ],
  boxes: [
    { id: "cs-vaccine", kind: "Case Study", titleEn: "Vaccine Hesitancy", titleUz: "Emlashdan ikkilanish", Body: Vaccine },
    { id: "news-pandemic", kind: "In the News", titleEn: "Lessons from the Pandemic of 2020", titleUz: "2020 pandemiyasi saboqlari", Body: Pandemic },
  ],
  summary: [
    "Sog'liq bozori ko'p bozorlardan farq qiladi: (1) keng tarqalgan **tashqi effektlar** (emlash, tibbiy tadqiqot); (2) iste'molchi sifatni baholay olmagani uchun xususiy va davlat institutlari davolash to'g'riligini ta'minlaydi; (3) sog'liq ko'pincha **huquq** sifatida qaraladi — davlat hammaga yetishini ta'minlaydi.",
    "Sog'liq xarajati katta va oldindan aytib bo'lmaydi; **sug'urta** moliyaviy xavfni kamaytiradi. Lekin **moral hazard** va **adverse selection** sug'urta bozori samaradorligini pasaytiradi. Sug'urtachi (xususiy yoki davlat) moliyalash, kirish va to'lov qoidalarini belgilaydi.",
    "1900-yildan beri AQShda umr ko'rish ~30 yilga oshgan — asosan tibbiy texnologiya tufayli.",
    "So'nggi 60 yilda sog'liq xarajati milliy daromad ulushi sifatida ancha o'sdi: **Baumol's cost disease**, tibbiy texnologiya, aholining qarishi va daromadlar o'sishi.",
    "AQSh milliy daromadining boshqa rivojlangan davlatlarnikidan katta qismini sog'liqqa sarflaydi; bunga oddiy izoh yo'q — tanqidchilar va himoyachilar turli sabablarni ko'rsatadi.",
    "Sog'liq xarajatining cho'ntakdan to'lanadigan qismi ancha kamaydi. Ba'zi iqtisodchilar sug'urtaga haddan tashqari tayanish moral hazardni kuchaytirib, xarajatlarni oshiradi deydi.",
  ],
  widgets: { spiral: Spiral, mh: MH, insurance: Ins, facts: Facts },
  gallery: [
    { title: "Adverse selection: death spiral simulyatori", Component: Spiral },
    { title: "Moral hazard: co-pay va ortiqcha foydalanish", Component: MH },
    { title: "Sug'urtaning qiymati: adolatli premium", Component: Ins },
    { title: "Sog'liq xarajatlari: davlatlar va vaqt bo'yicha", Component: Facts },
  ],
};
