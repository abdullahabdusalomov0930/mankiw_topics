import { GrowthLab, MarginalLab } from '../../../components/graphs/Ch1Widgets';
import { Callout } from '../../../components/ui/Kit';
import { BookTable, BoxLink, Source } from '../../../components/ui/Lesson';
import { T } from '../../../components/ui/Term';
import type { ChapterPageContent } from '../../types';
import { checks } from './quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        <b>Economy</b> so'zi yunoncha <i>oikonomos</i> — “uy xo'jaligini boshqaruvchi” so'zidan. Bog'liqlik g'alati tuyuladi, lekin har bir oilada ham kim
        ovqat pishiradi, kim qo'shimcha shirinlik oladi, kim mashinani haydaydi — degan cheksiz qarorlar bor. Daromad katta bo'ladimi, kichikmi — vaqt, shirinlik,
        mashina yurgan kilometrlar <b>muqobil foydalanishlar orasida taqsimlanishi</b> kerak.
      </p>
      <p>
        Jamiyat ham shunday: kim non yetishtiradi, kim kiyim tikadi, kim dastur yozadi; kim kartoshka, kim ikra yeydi. Sabab bitta —{' '}
        <T id="scarcity" />. <T id="economics" /> — jamiyat cheklangan resurslarni qanday boshqarishini o'rganadi. Bu bob — butun kitobning “treyleri”: o'nta tamoyil,
        keyingi boblarda har biri batafsil ochiladi.
      </p>
    </div>
  );
}

const S11 = () => (
  <div className="prose-uz">
    <p>
      Iqtisodiyot — Toshkentmi, O'zbekistonmi yoki butun sayyorami — shunchaki hayot davomida bir-biri bilan muomala qiladigan odamlar guruhi. Iqtisodiyot xatti-harakati
      undagi individlar xatti-harakatini aks ettirgani uchun birinchi to'rt tamoyil <b>individual qaror qabul qilish</b> haqida.
    </p>
    <BookTable
      caption="Table 1 — Ten Principles of Economics"
      head={['Guruh', 'Tamoyil']}
      rows={[
        ['How People Make Decisions', '1. People face trade-offs.'],
        ['', '2. The cost of something is what you give up to get it.'],
        ['', '3. Rational people think at the margin.'],
        ['', '4. People respond to incentives.'],
        ['How People Interact', '5. Trade can make everyone better off.'],
        ['', '6. Markets are usually a good way to organize economic activity.'],
        ['', '7. Governments can sometimes improve market outcomes.'],
        ['How the Economy as a Whole Works', "8. A country's standard of living depends on its ability to produce goods and services."],
        ['', '9. Prices rise when the government prints too much money.'],
        ['', '10. Society faces a short-run trade-off between inflation and unemployment.'],
      ]}
    />
  </div>
);

const S11a = () => (
  <div className="prose-uz">
    <p>
      “<i>There ain't no such thing as a free lunch</i>” — tekin tushlik yo'q. Bir narsani olish uchun odatda boshqa narsadan voz kechasiz: bu{' '}
      <T id="trade-off" />.
    </p>
    <ul>
      <li>
        <b>Selena</b> eng qimmatli resursi — vaqtini taqsimlaydi: iqtisodga sarflagan har bir soat — psixologiya, uyqu, velosiped, video o'yin yoki qo'shimcha pul
        topish uchun ishdan voz kechilgan soat.
      </li>
      <li>Uning ota-onasi oila daromadini ovqat, kiyim, Selenaning kontrakti, pensiya jamg'armasi yoki ta'til orasida taqsimlaydi.</li>
      <li>
        Jamiyat: <b>“guns and butter”</b> — mudofaaga ko'proq sarflansa, iste'mol tovarlariga kamroq qoladi. <b>Toza muhit ↔ daromad</b>: ifloslanishni kamaytirish
        talabi firma xarajatini oshiradi → kam foyda, past maosh, yuqori narx.
      </li>
    </ul>
    <p>
      Eng muhim ijtimoiy trade-off — <T id="efficiency" /> va <T id="equality" /> o'rtasida. Samaradorlik — <b>iqtisodiy pirogning hajmi</b>, tenglik — pirog
      qanchalik <b>teng kesilgani</b>. Ijtimoiy yordam, ishsizlik sug'urtasi va progressiv daromad solig'i tenglikni oshiradi, lekin mehnat uchun mukofotni kamaytiradi —
      odamlar kamroq ishlaydi. Pirog teng bo'laklarga kesilganda, u ba'zan <b>kichrayadi</b>.
    </p>
    <Callout kind="mistake">
      Trade-off'ni tan olish qaysi qaror eng yaxshi ekanini aytmaydi. Talaba psixologiyani tashlamasligi, jamiyat ifloslanishga ko'nikmasligi, davlat kambag'allarni e'tiborsiz
      qoldirmasligi kerak — lekin <b>imkoniyatlarni tushungan</b> odam yaxshiroq tanlaydi.
    </Callout>
  </div>
);

const S11b = () => (
  <div className="prose-uz">
    <p>
      Universitetga borish qarori. Foydasi — intellektual boyish va butun umr yaxshiroq ish imkoniyatlari. Xarajati? Kontrakt, kitob, yotoqxona va ovqatni qo'shish
      xato, ikki sababga ko'ra:
    </p>
    <ol>
      <li>
        <b>Haqiqiy xarajat bo'lmagan narsalar kiritilgan</b>: o'qimasangiz ham yashash va ovqatlanish kerak — faqat uydagidan <b>oshgan</b> qismi xarajat.
      </li>
      <li>
        <b>Eng katta xarajat tashlab ketilgan — vaqtingiz</b>: ma'ruzada o'tirganda ishlab pul topa olmaysiz. Ko'pchilik talabalar uchun boy berilgan maosh — ta'limning
        eng katta xarajati.
      </li>
    </ol>
    <p>
      <T id="opportunity-cost" /> — biror narsani olish uchun voz kechiladigan narsa. Millionlab dollar topa oladigan sportchi-talabalar uchun o'qishning imkoniyat
      xarajati juda yuqori — shuning uchun ular ba'zan o'qishni tashlab professional sportga o'tadi.
    </p>
    <Callout kind="exam">
      Imtihonda “opportunity cost” savoli: pul xarajatlari <b>+ vaqt qiymati</b> (boy berilgan maosh yoki eng yaxshi muqobil faoliyat). “Zavq olsam, xarajat nol” —
      noto'g'ri (QuickQuiz 2).
    </Callout>
  </div>
);

const S11c = () => (
  <div className="prose-uz">
    <p>
      Iqtisodchilar odamlarni <T id="rational-people" label="rational" /> deb faraz qiladi: mavjud imkoniyatlar doirasida maqsadiga erishish uchun tizimli va maqsadli
      ravishda eng yaxshisini qiladi. Hayot oq-qora emas: kechki ovqatda “ochlik e'lon qilaymi yoki to'yguncha yeymi?” emas, “yana bir qoshiq kartoshka pyuresi
      olaymi?” deb so'raysiz. Bu <T id="marginal-change" />. Ratsional odam <T id="marginal-benefit-cost" label="marginal benefit va marginal cost" />ni solishtiradi.
    </p>
    <MarginalLab />
    <p>
      <b>Suv va olmos paradoksi.</b> Suv hayot uchun zarur, olmos faqat yaltiraydi — lekin olmos qimmat. Sabab: WTP <b>marjinal foydaga</b> asoslanadi, u esa qancha
      birlik borligiga bog'liq. Suv ko'p — qo'shimcha stakanning foydasi kichik. Olmos kam — qo'shimcha toshning foydasi katta.
    </p>
    <Callout kind="exam">
      Qoida: harakatni <b>faqat va faqat MB &gt; MC</b> bo'lganda qiling. O'rtacha xarajat va allaqachon sarflangan (sunk) xarajat qarorga kirmaydi (Problem 5).
    </Callout>
  </div>
);

const S11d = () => (
  <div className="prose-uz">
    <p>
      <T id="incentive" /> — jazo yoki mukofot istiqboli kabi odamni harakatga undaydigan narsa. Bir iqtisodchi butun fanni shunday xulosa qilgan:{' '}
      <i>“People respond to incentives. The rest is commentary.”</i>
    </p>
    <p>
      Olma qimmatlasa — odamlar kamroq olma yeydi, bog'lar esa ko'proq ishchi yollab, ko'proq hosil yig'adi. Benzin solig'i tejamkor va elektr mashinalarga, sheriklikda
      yurishga, jamoat transportiga, ishga yaqin yashashga undaydi: soliq yuqori <b>Norvegiyada</b> elektromobillar ko'p, past <b>AQShda</b> katta SUVlar mashhur.
    </p>
    <p>
      <b>Kutilmagan oqibatlar: xavfsizlik kamari.</b> 1965-yil Ralph Nader'ning <i>Unsafe at Any Speed</i> kitobidan keyin Kongress yangi mashinalarga kamarni majburiy qildi.
      Bevosita ta'sir — avariyada omon qolish ehtimoli oshdi. Bilvosita ta'sir — kamar avariyani “arzonlashtirdi”, xuddi yo'llar xavfsizroq bo'lgandek: haydovchilar
      tezroq va beparvoroq yura boshladi. Sam Peltzman (1975): avariyalar <b>ko'paydi</b>, haydovchilar o'limi deyarli o'zgarmadi, <b>piyodalar o'limi oshdi</b>.
    </p>
    <Callout kind="tip">Har qanday siyosatni tahlil qilganda faqat bevosita emas, <b>rag'batlar orqali ishlaydigan bilvosita ta'sirlarni</b> ham ko'ring.</Callout>
  </div>
);

const S12a = () => (
  <div className="prose-uz">
    <p>
      Yangiliklarda Xitoy — AQShning raqibi. Kiyim, o'yinchoq, quyosh panellari bozorida ular raqobatlashadi. Lekin mamlakatlar savdosi sport o'yini emas: savdo{' '}
      <b>ikkala mamlakatni ham</b> boyitishi mumkin.
    </p>
    <p>
      Oila misoli: oilalar ish va xarid uchun raqobatlashadi, lekin oila boshqalardan ajralib qolsa — o'zi ovqat yetishtirishi, kiyim tikishi, uy qurishi kerak bo'lardi.
      Savdo har kimga eng yaxshi qiladigan ishiga (dehqonchilik, tikuvchilik, qurilish) <b>ixtisoslashish</b> va ko'proq turdagi tovarni <b>arzonroq</b> olish imkonini
      beradi. Xitoyliklar, fransuzlar, braziliyaliklar — AQShning raqibi bo'lgani kabi <b>hamkori</b> hamdir. (Batafsil — 3 va 9-boblar.)
    </p>
  </div>
);

const S12b = () => (
  <div className="prose-uz">
    <p>
      1980-yillar oxiri — 1990-yillar boshida Sovet Ittifoqi va Sharqiy Yevropada kommunizm qulashi — o'tgan asrning eng muhim voqealaridan. U yerda{' '}
      <b>markaziy rejalashtiruvchilar</b> nima, qancha ishlab chiqarilishini va kim iste'mol qilishini hal qilardi. O'zbekiston ham shu tizimdan chiqib, bozor
      islohotlarini boshlagan mamlakatlardan.
    </p>
    <p>
      <T id="market-economy" />da rejalashtiruvchi o'rnini millionlab firma va uy xo'jaliklari egallaydi; ularni <b>narxlar va shaxsiy manfaat</b> boshqaradi. Hech kim
      jamiyat farovonligi haqida qayg'urmayotgandek tuyulsa ham, bozor iqtisodiyotlari farovonlikni ajoyib darajada oshirdi.
    </p>
    <p>
      Adam Smit (1776, <i>The Wealth of Nations</i>): raqobatli bozorlardagi firma va uy xo'jaliklari go'yo <T id="invisible-hand" /> boshqarayotgandek istalgan natijaga
      keladi. Uning quroli — <b>narxlar</b>: narx ham sotuvchi xarajatini, ham xaridor uchun qiymatni aks ettiradi.
    </p>
    <Callout kind="exam" title="Muhim xulosa (corollary)">
      Davlat narxlarning talab-taklifga moslashishiga to'sqinlik qilsa, ko'rinmas qo'l ishlay olmaydi. Shu sabab: soliqlar resurslar taqsimotini buzadi (8-bob), ijara
      nazorati muammo tug'diradi (6-bob), kommunistik rejalashtirish muvaffaqiyatsiz bo'ldi — rejalashtiruvchilar “bir qo'lini orqasiga bog'lab” ishladi.
    </Callout>
    <BoxLink id="fyi-smith">FYI: Adam Smith and the Invisible Hand</BoxLink>
    <BoxLink id="cs-uber">Case Study: Adam Smith Would Have Loved Uber</BoxLink>
  </div>
);

const S12c = () => (
  <div className="prose-uz">
    <p>
      Ko'rinmas qo'l shunchalik yaxshi bo'lsa, davlatga nima qoladi? Birinchidan, bozor faqat davlat qoidalarni ijro etib, <T id="property-rights" />ni himoya qilganda
      ishlaydi: hosil o'g'irlanishini kutgan dehqon ekin ekmaydi, mijozlar to'lamay ketsa restoran ochilmaydi, filmlar qaroqchilik qilinsa kino suratga olinmaydi.
    </p>
    <p>Ikkinchidan, ko'rinmas qo'l qudratli, lekin hamma narsaga qodir emas. Davlat aralashuvining ikki sababi:</p>
    <ul>
      <li>
        <b>Samaradorlik</b> (pirogni kattalashtirish). <T id="market-failure" /> sabablari: <T id="externality" /> (ifloslanish — 10-bob) va <T id="market-power" />{' '}
        (shahardagi yagona quduq egasi).
      </li>
      <li>
        <b>Tenglik</b> (pirogni boshqacha kesish). Bozor odamlarni boshqalar to'lashga tayyor bo'lgan narsani ishlab chiqarish qobiliyatiga qarab mukofotlaydi: eng yaxshi
        basketbolchi eng yaxshi shaxmatchidan ko'p topadi. Ko'rinmas qo'l hammaga ovqat, kiyim va tibbiyotni kafolatlamaydi.
      </li>
    </ul>
    <Callout kind="mistake">
      “Davlat yaxshilay oladi” ≠ “davlat har doim yaxshilaydi”. Siyosatni farishtalar emas, nomukammal siyosiy jarayon yaratadi: ba'zan kuchlilarni mukofotlaydi, ba'zan
      yaxshi niyatli, lekin kam ma'lumotli rahbarlar qiladi.
    </Callout>
  </div>
);

const S13a = () => (
  <div className="prose-uz">
    <p>
      2019-yilda o'rtacha amerikalik ~<b>$65,000</b>, nemis ~<b>$56,000</b>, xitoylik ~<b>$17,000</b>, nigeriyalik atigi ~<b>$5,000</b> topgan. Bu farq kompyuter,
      mashina, ovqatlanish, tibbiyot va umr uzunligida ham ko'rinadi. AQShda daromad tarixan yiliga ~2% o'sgan — 35 yilda ikki barobar, bir asrda ~8 barobar.
    </p>
    <p>
      Sabab oddiy: <T id="productivity" /> — bir mehnat birligi hisobiga ishlab chiqarilgan tovar va xizmatlar. AQSh ishchilarining “haqiqiy qahramoni” — saxiy
      ish beruvchilar yoki kuchli kasaba uyushmalari emas, <b>unumdorlik o'sishi</b>; 1970-yillar o'rtasidan daromad o'sishi sekinlashuvining “aybdori” — xalqaro raqobat
      emas, unumdorlik o'sishining susayishi.
    </p>
    <GrowthLab />
    <Callout kind="exam">
      Turmush darajasini oshirish uchun siyosat: ishchilar <b>yaxshi o'qitilgan</b>, kerakli <b>asbob-uskunaga</b> va eng yaxshi <b>texnologiyaga</b> ega bo'lishi.
    </Callout>
  </div>
);

const S13b = () => (
  <div className="prose-uz">
    <p>
      1921-yil yanvarida Germaniyada gazeta 0.30 marka turardi; 1922-yil noyabrida — <b>70,000,000 marka</b>. Bu — tarixdagi eng dahshatli <T id="inflation" />{' '}
      misollaridan. AQShda 1970-yillarda narxlar ikki barobardan ko'proq oshdi (prezident Ford inflyatsiyani “public enemy number one” degan); XXI asrning ilk ikki
      o'n yilligida esa ~2%.
    </p>
    <p>
      Sabab: deyarli barcha katta yoki uzoq inflyatsiyalarda — <b>pul miqdorining o'sishi</b>. Germaniyada narxlar har oy uch barobar oshganda pul miqdori ham har oy uch
      barobar oshgan. AQShda 1970-yillar inflyatsiyasi pulning tez o'sishi bilan, 1980-yillardagi pasayish — sekinlashuvi bilan bog'liq. 2022-yil fevralida AQSh
      inflyatsiyasi 7.9% — 40 yildagi eng yuqori: pandemiya davridagi katta davlat xarajatlari, pul miqdorining o'sishi va ta'minot uzilishlari.
    </p>
  </div>
);

const S13c = () => (
  <div className="prose-uz">
    <p>Uzoq muddatda pul asosan narxlarni oshiradi, lekin qisqa muddatda manzara murakkabroq:</p>
    <ol>
      <li>Pul ko'paysa — umumiy xarajatlar va tovarlarga talab oshadi.</li>
      <li>Yuqori talab vaqt o'tib narxlarni oshiradi, lekin hozircha firmalarni ko'proq ishchi yollab, ko'proq ishlab chiqarishga undaydi.</li>
      <li>Ko'proq yollash — kamroq ishsizlik.</li>
    </ol>
    <p>
      Natija: inflyatsiya va ishsizlik o'rtasida <b>qisqa muddatli trade-off</b> — bir-ikki yil ichida ko'p siyosatlar ularni qarama-qarshi yo'nalishga suradi. Bu{' '}
      <T id="business-cycle" />ni tahlil qilishda muhim. Siyosatchilar davlat xarajatlari, soliqlar va pul miqdori orqali talabga ta'sir qiladi — bu vositalardan qanday
      foydalanish doimiy bahs mavzusi.
    </p>
    <Callout kind="exam">QuickQuiz 10: talab kamaytirilsa → qisqa muddatda inflyatsiya <b>pastroq</b>, ishsizlik <b>yuqoriroq</b>.</Callout>
  </div>
);

const S14 = () => (
  <div className="prose-uz">
    <p>
      Iqtisodiyot bir nechta katta g'oyaga asoslanadi va ular ko'p holatlarga qo'llanadi. Kitob davomida Table 1 dagi o'nta tamoyilga qayta-qayta qaytamiz — eng murakkab
      tahlil ham shu poydevorga quriladi. Masalan: 4-bob (rag'batlar va narxlar), 6-bob (ijara nazorati — narxni to'xtatish), 7-bob (ko'rinmas qo'l samaradorligi),
      9-bob (savdo yutug'i), 10-bob (tashqi effektlar).
    </p>
  </div>
);

function FyiSmith() {
  return (
    <div className="prose-uz">
      <p>
        <i>The Wealth of Nations</i> 1776-yilda — Amerika mustaqillik deklaratsiyasi imzolangan yili chiqdi. Ikki hujjat bir g'oyani bo'lishadi: odamlarni davlatning og'ir
        qo'lisiz o'z holiga qo'ygan ma'qul. Bu — bozor iqtisodiyoti va erkin jamiyatning intellektual poydevori.
      </p>
      <p>
        Bozor nega ishlaydi — odamlar bir-biriga mehribon bo'lgani uchunmi? Yo'q. Smitning eng mashhur fikri: <i>“It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner…”</i>
      </p>
      <Source>Adam Smith, The Wealth of Nations (1776)</Source>
      <p>
        Ya'ni qassob, pivo pishiruvchi va novvoy bizni xayrixohligi uchun emas, <b>o'z manfaati</b> uchun boqadi; har bir kishi faqat o'z yutug'ini ko'zlaydi, lekin
        “ko'rinmas qo'l” bilan jamiyat manfaatiga — ko'pincha uni ataylab ko'zlagandagidan ham samaraliroq — xizmat qiladi. Keyingi boblar bu xulosani aniqroq ifodalaydi
        va ko'rinmas qo'lning kuchli va zaif tomonlarini tahlil qiladi.
      </p>
    </div>
  );
}

function Uber() {
  return (
    <div className="prose-uz">
      <p>
        Ko'p shaharlarda taksi bozori qattiq tartibga solinadi: litsenziyalar (medallion) soni cheklanadi, narxlar belgilanadi, ruxsatsiz haydovchilar jarima yoki qamoq bilan
        to'xtatiladi. 2009-yilda bu bozorga <b>Uber</b> kirdi: yo'lovchi va haydovchini smartfon ilovasi orqali bog'laydi. Uber mashinalari ko'chada yo'lovchi izlamagani
        uchun texnik jihatdan taksi emas va bir xil tartibga bo'ysunmaydi, lekin xizmat o'xshash — va ko'pincha qulayroq: yomg'irda yo'l chetida kutish o'rniga uyda iliq
        o'tirib chaqirasiz.
      </p>
      <p>
        Uber ko'pincha arzonroq, lekin har doim emas: talab keskin oshganda (kuchli yomg'ir, Yangi yil kechasi) narx sezilarli oshadi — <b>surge pricing</b>. Tartibga
        solingan taksilarga esa bu odatda taqiqlanadi. Taksi haydovchilari daromadi kamaygani uchun norozi — sotuvchilar yangi raqobatchini yoqtirmaydi, lekin kuchli
        raqobat bozorni iste'molchi uchun yaxshi ishlatadi.
      </p>
      <ul>
        <li>2014-yildagi so'rov: Uber kabi xizmatlar iste'molchi farovonligini oshiradimi? — <b>har bir</b> iqtisodchi “Ha”.</li>
        <li>Surge pricing farovonlikni oshiradimi? — <b>85%</b> “Ha”: haydovchilar rag'batga javob berib, xizmat eng kerak paytda ko'payadi; xizmat uni eng ko'p qadrlaganlarga
          taqsimlanadi; kutish va izlash xarajati kamayadi.</li>
      </ul>
      <p>Adam Smit bugun tirik bo'lganida, telefonida albatta taksi-ilova bo'lardi. Toshkentda ham Yandex Go va boshqa ilovalar xuddi shu mantiq bilan ishlaydi.</p>
    </div>
  );
}

const Marginal = () => <MarginalLab />;
const Growth = () => <GrowthLab />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    "**Scarcity** va **economics** ta'riflarini bilish; iqtisodiyot nima uchun mavjudligini tushuntirish",
    "Individual qarorlar haqidagi to'rt tamoyil: **trade-offs**, **opportunity cost**, **marginal thinking**, **incentives**",
    "O'zaro ta'sir haqidagi uch tamoyil: savdo, bozorlar (**invisible hand**), davlat roli (**market failure**)",
    "Butun iqtisodiyot haqidagi uch tamoyil: **productivity**, **inflation**, qisqa muddatli inflyatsiya–ishsizlik trade-off",
    "Har bir tamoyilni kundalik va O'zbekiston hayotidagi misolga qo'llash",
  ],
  sections: [
    { id: "s-1-1", code: "1-1", titleEn: "How People Make Decisions", titleUz: "Odamlar qanday qaror qabul qiladi", Body: S11 },
    { id: "s-1-1a", code: "1-1a", titleEn: "Principle 1: People Face Trade-Offs", titleUz: "1-tamoyil: odamlar tanlov oldida turadi", Body: S11a, check: checks["s-1-1a"] },
    { id: "s-1-1b", code: "1-1b", titleEn: "Principle 2: The Cost of Something Is What You Give Up to Get It", titleUz: "2-tamoyil: narsaning xarajati — undan voz kechilgan narsa", Body: S11b, check: checks["s-1-1b"] },
    { id: "s-1-1c", code: "1-1c", titleEn: "Principle 3: Rational People Think at the Margin", titleUz: "3-tamoyil: ratsional odamlar marjinal fikrlaydi", Body: S11c, check: checks["s-1-1c"] },
    { id: "s-1-1d", code: "1-1d", titleEn: "Principle 4: People Respond to Incentives", titleUz: "4-tamoyil: odamlar rag'batlarga javob beradi", Body: S11d, check: checks["s-1-1d"] },
    { id: "s-1-2a", code: "1-2a", titleEn: "Principle 5: Trade Can Make Everyone Better Off", titleUz: "5-tamoyil: savdo hammani boyitishi mumkin", Body: S12a, check: checks["s-1-2a"] },
    { id: "s-1-2b", code: "1-2b", titleEn: "Principle 6: Markets Are Usually a Good Way to Organize Economic Activity", titleUz: "6-tamoyil: bozorlar odatda yaxshi tashkil etish usuli", Body: S12b, check: checks["s-1-2b"] },
    { id: "s-1-2c", code: "1-2c", titleEn: "Principle 7: Governments Can Sometimes Improve Market Outcomes", titleUz: "7-tamoyil: davlat ba'zan bozor natijalarini yaxshilaydi", Body: S12c, check: checks["s-1-2c"] },
    { id: "s-1-3a", code: "1-3a", titleEn: "Principle 8: A Country's Standard of Living Depends on Its Ability to Produce Goods and Services", titleUz: "8-tamoyil: turmush darajasi ishlab chiqarish qobiliyatiga bog'liq", Body: S13a, check: checks["s-1-3a"] },
    { id: "s-1-3b", code: "1-3b", titleEn: "Principle 9: Prices Rise When the Government Prints Too Much Money", titleUz: "9-tamoyil: davlat ko'p pul bossa, narxlar oshadi", Body: S13b, check: checks["s-1-3b"] },
    { id: "s-1-3c", code: "1-3c", titleEn: "Principle 10: Society Faces a Short-Run Trade-Off between Inflation and Unemployment", titleUz: "10-tamoyil: inflyatsiya va ishsizlik o'rtasida qisqa muddatli tanlov", Body: S13c, check: checks["s-1-3c"] },
    { id: "s-1-4", code: "1-4", titleEn: "Conclusion", titleUz: "Xulosa", Body: S14 },
  ],
  examTraps: [
    { title: "Opportunity cost = pul + vaqt", body: "Vaqt qiymatini (boy berilgan maosh) unutmang; uyda ham bo'ladigan xarajatlar (ovqat, joy) kiritilmaydi." },
    { title: "O'rtacha emas, marjinal", body: "Qaror **MB > MC** bo'yicha. O'rtacha xarajat ($500/o'rin, $6/film) va sunk cost ahamiyatsiz." },
    { title: "“All of the above”", body: "QuickQuiz 4 va 7 — rag'batlar va davlat roli savollarida barcha variantlar to'g'ri." },
    { title: "Market failure'ning ikki sababi", body: "**Externality** va **market power**. Tenglik — bozor muvaffaqiyatsizligi emas, alohida maqsad." },
    { title: "Inflyatsiya sababi", body: "Uzoq/katta inflyatsiya → **pul miqdori**. Kasaba uyushmalari, soliqlar yoki bozor hokimiyati emas." },
    { title: "Qisqa muddatli trade-off", body: "Talab ↓ → inflyatsiya ↓, ishsizlik ↑ (va aksincha)." },
  ],
  mistakes: [
    { wrong: "“Savdoda bir mamlakat yutsa, boshqasi yutqazadi.”", right: "Savdo **win–win** — ixtisoslashish ikkala tomonni boyitadi." },
    { wrong: "“Samaradorlik va tenglik — bir narsa.”", right: "Samaradorlik — pirog **hajmi**, tenglik — qanday **kesilgani**; ular ko'pincha to'qnashadi." },
    { wrong: "“Ko'rinmas qo'l — davlatning yashirin boshqaruvi.”", right: "Bu **bozor narxlari** orqali o'z manfaatini ko'zlaganlarning muvofiqlashuvi." },
    { wrong: "“Boy davlatlar kambag'allarni ekspluatatsiya qilgani uchun boy.”", right: "Kitob: turmush darajasi farqining deyarli hammasi **unumdorlik** farqi." },
    { wrong: "“Xavfsizlik kamari qonuni o'limni albatta kamaytiradi.”", right: "Rag'batlar orqali bilvosita ta'sir: avariyalar ko'payishi mumkin (Peltzman)." },
  ],
  boxes: [
    { id: "fyi-smith", kind: "FYI", titleEn: "Adam Smith and the Invisible Hand", titleUz: "Adam Smit va ko'rinmas qo'l", Body: FyiSmith },
    { id: "cs-uber", kind: "Case Study", titleEn: "Adam Smith Would Have Loved Uber", titleUz: "Adam Smit Uber'ni yaxshi ko'rgan bo'lardi", Body: Uber },
  ],
  summary: [
    "Individual qarorlar haqidagi asosiy saboqlar: odamlar muqobil maqsadlar o'rtasida **trade-off**ga duch keladi; har qanday harakatning xarajati **voz kechilgan imkoniyatlar** bilan o'lchanadi; ratsional odamlar **marjinal xarajat va marjinal foydani** solishtiradi; odamlar **rag'batlarga** javoban xatti-harakatini o'zgartiradi.",
    "Odamlar o'rtasidagi o'zaro ta'sir haqidagi saboqlar: savdo va o'zaro bog'liqlik **ikki tomonga foydali** bo'lishi mumkin; bozorlar odatda iqtisodiy faoliyatni muvofiqlashtirishning yaxshi usuli; davlat **bozor muvaffaqiyatsizligini** tuzatib yoki **tenglikni** oshirib bozor natijalarini yaxshilashi mumkin.",
    "Butun iqtisodiyot haqidagi saboqlar: **unumdorlik** — turmush darajasining asosiy manbai; **pul miqdorining** o'sishi — inflyatsiyaning asosiy manbai; jamiyat inflyatsiya va ishsizlik o'rtasida **qisqa muddatli** trade-offga duch keladi.",
  ],
  widgets: { marginal: Marginal, growth: Growth },
  gallery: [
    { title: "Marjinal fikrlash: striming va standby yo'lovchi", Component: Marginal },
    { title: "O'sish va inflyatsiya: murakkab foiz", Component: Growth },
  ],
};
