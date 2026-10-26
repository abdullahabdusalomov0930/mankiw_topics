import { SupplyDemandGraph } from '../../../components/graphs/SupplyDemandGraph';
import { Callout, PollBar } from '../../../components/ui/Kit';
import { Math as M } from '../../../components/ui/Math';
import { T } from '../../../components/ui/Term';
import type { ChapterPageContent } from '../../types';
import {
  gasLines,
  iceCeiling,
  iceFloor,
  iceMarket,
  iceTaxBuyers,
  iceTaxSellers,
  incidence,
  luxuryTax,
  minimumWage,
  payrollTax,
  problem10,
  rentControl,
} from './presets';
import { checks } from './quiz';

function BoxLink({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <a
      href={`#${id}`}
      className="my-3 flex items-center gap-2 rounded-[0.95rem] border-2 border-dashed border-ink/60 bg-surface px-3 py-2 text-sm font-semibold transition hover:border-solid hover:bg-marker hover:text-[#111]"
    >
      <span aria-hidden>📎</span>
      <span>{children}</span>
      <span className="ml-auto">→</span>
    </a>
  );
}

// ---------------- Hook ----------------

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        Toshkentda kvartira ijarasi so'nggi yillarda qanchalik qimmatlaganini eshitgandirsiz. Faraz qiling, hokimiyat
        qaror chiqardi: <b>“Bir xonali kvartira ijarasi oyiga $300 dan oshmasin!”</b> Talabalar va yosh oilalar
        xursand. Lekin bir-ikki yildan keyin bo'sh kvartira topish deyarli imkonsiz bo'lib qoladi, uy egalari
        ta'mirdan voz kechadi, “tanish orqali” yoki qo'shimcha “stol ostidan” pul bilan ijara topiladi. Nega yaxshi
        niyatli qonun shunday natija beradi?
      </p>
      <p>
        Yoki boshqa savol: davlat har bir sotilgan telefonga soliq qo'ydi va qonunda “soliqni do'kon to'laydi” deb
        yozildi. Demak, siz — xaridor — hech narsa yo'qotmaysizmi? Bu bobning eng kutilmagan javobi:{' '}
        <b>soliqni kim to'lashini qonun emas, bozor hal qiladi</b>.
      </p>
    </div>
  );
}

// ---------------- Sections ----------------

function S61() {
  return (
    <div className="prose-uz">
      <p>
        Muzqaymoq bozoriga qaytamiz (4-bob). Raqobatli bozorda narx talab va taklifni tenglashtiradi; aytaylik,{' '}
        <T id="equilibrium-price" /> bir dona uchun <b>$3</b>.
      </p>
      <p>
        Hamma ham bu natijadan mamnun emas. “Muzqaymoq ixlosmandlari assotsiatsiyasi” $3 ni juda qimmat deydi,
        “Muzqaymoq ishlab chiqaruvchilari tashkiloti” esa $3 ni juda arzon (“shafqatsiz raqobat” natijasi) deydi.
        Ikkala guruh ham hukumatni narxni qonun bilan nazorat qilishga undaydi:
      </p>
      <ul>
        <li>
          Xaridorlar yutsa — qonuniy <b>eng yuqori</b> narx: <T id="price-ceiling" />. Narx bundan{' '}
          <i>yuqoriga</i> chiqolmaydi.
        </li>
        <li>
          Sotuvchilar yutsa — qonuniy <b>eng past</b> narx: <T id="price-floor" />. Narx bundan <i>pastga</i>{' '}
          tusholmaydi.
        </li>
      </ul>
      <div className="not-prose my-7 grid gap-6 sm:grid-cols-2">
        <div className="postit tape bg-postit-pink p-4 pt-5 rotate-[0.6deg]">
          <div className="text-2xl" aria-hidden>
            ⬆︎🚫
          </div>
          <div className="mt-1 font-display font-bold">Ceiling = shift (tom)</div>
          <p className="mt-1 text-sm text-muted">Xonaning shifti kabi: narx undan yuqori ko'tarila olmaydi. Xaridorlarni “himoya” qilish uchun.</p>
        </div>
        <div className="postit tape bg-postit-blue p-4 pt-5 -rotate-[0.6deg]">
          <div className="text-2xl" aria-hidden>
            ⬇︎🚫
          </div>
          <div className="mt-1 font-display font-bold">Floor = pol (tub)</div>
          <p className="mt-1 text-sm text-muted">Xonaning poli kabi: narx undan pastga tusha olmaydi. Sotuvchilarni “himoya” qilish uchun.</p>
        </div>
      </div>
    </div>
  );
}

function S61a() {
  return (
    <div className="prose-uz">
      <p>Hukumat narx shifti qo'yganda ikki holat bo'lishi mumkin:</p>
      <ul>
        <li>
          <b>Shift $4</b> — muvozanatdan ($3) <b>yuqori</b>. Bozor baribir $3 ga keladi, shiftning hech qanday ta'siri
          yo'q. Bunday shift <b>not binding</b> (ta'sirsiz).
        </li>
        <li>
          <b>Shift $2</b> — muvozanatdan <b>past</b>. Endi u <T id="binding-constraint" />: narx $3 ga
          ko'tarilmoqchi, lekin qonun uni $2 da ushlab turadi. Bu narxda <b>125</b> dona talab qilinadi, faqat{' '}
          <b>75</b> dona taklif qilinadi: <b>50 dona</b> <T id="shortage" />.
        </li>
      </ul>
      <p>Grafikda qizil chiziqni yuqoriga-pastga torting yoki slayderdan foydalaning. $3 chegarasini kesib o'tganda nima o'zgarishini kuzating.</p>
      <SupplyDemandGraph config={iceCeiling} />
      <p>
        Taqchillik bo'lganda tovarni kim oladi? Narx bu ishni qila olmaydi, shuning uchun boshqa{' '}
        <T id="rationing" />
        lar paydo bo'ladi: <b>uzun navbatlar</b> (erta kelgan yoki navbatga birovni qo'ygan oladi) yoki sotuvchining{' '}
        <b>shaxsiy tanlovi</b> — do'stlar, qarindoshlar, “o'zimizniki”lar, yoki evaziga xizmat qilganlar.
      </p>
      <p>
        Natijada xaridorlarga yordam bermoqchi bo'lgan qonun hammaga ham yordam bermaydi: ba'zilar arzonroq oladi
        (lekin navbatda vaqt yo'qotadi), boshqalar umuman ololmaydi. Navbatlar <b>samarasiz</b> (vaqt isrof bo'ladi),
        tanish-bilish esa ham samarasiz (tovar uni eng ko'p qadrlaganga bormaydi), ham <b>adolatsiz</b>. Erkin bozorda
        esa taqsimlash oddiy va shaxssiz: muzqaymoqchining tanishi bo'lish shart emas — $3 to'lashga tayyor bo'lsangiz
        kifoya.
      </p>
      <Callout kind="exam">
        <p>
          <b>Binding yoki not binding?</b> Shift faqat muvozanatdan <b>past</b> bo'lsa ta'sir qiladi. Imtihonda “$50
          lik shift” deyilsa, avval muvozanat narxini toping: u $50 dan kichik bo'lsa — hech narsa o'zgarmaydi (Problem
          3c ga qarang).
        </p>
        <p>
          <b>Qancha sotiladi?</b> Taqchillikda sotilgan miqdor = <b>taklif miqdori</b> (bozorning “qisqa tomoni”), talab
          miqdori emas.
        </p>
      </Callout>
      <BoxLink id="cs-gas-lines">Case Study: How to Create Long Lines at the Gas Pump</BoxLink>
      <BoxLink id="cs-rent-control">Case Study: Why Rent Control Causes Housing Shortages, Especially in the Long Run</BoxLink>
    </div>
  );
}

function S61b() {
  return (
    <div className="prose-uz">
      <p>
        Endi ishlab chiqaruvchilar lobbisi yutdi va hukumat <T id="price-floor" label="narx tubi" /> qo'ydi. Yana ikki
        holat:
      </p>
      <ul>
        <li>
          <b>Tub $2</b> — muvozanatdan <b>past</b>: bozor narxi baribir $3, tub <b>not binding</b>.
        </li>
        <li>
          <b>Tub $4</b> — muvozanatdan <b>yuqori</b>: endi u binding. $4 da sotuvchilar <b>120</b> dona taklif qiladi,
          xaridorlar faqat <b>80</b> dona oladi: <b>40 dona</b> <T id="surplus" /> (excess supply).
        </li>
      </ul>
      <SupplyDemandGraph config={iceFloor} />
      <p>
        Shiftdagi taqchillik kabi, tubdagi ortiqcha ham noxush taqsimlashga olib keladi: xaridorlar kam, sotuvchilar
        ko'p — endi <b>xaridorning shaxsiy tanloviga</b> yoqqan sotuvchilar sotadi. Erkin bozorda esa narxning o'zi
        taqsimlaydi: sotuvchilar muvozanat narxidan norozi bo'lishi mumkin, lekin xohlagancha sota oladi.
      </p>
      <Callout kind="exam">
        Esda saqlash uchun: <b>shift — pastda, tub — tepada</b> bo'lsagina “tishlaydi”. Shift → <b>shortage</b>, tub →{' '}
        <b>surplus</b>. Ko'p talabalar buni teskari aytadi.
      </Callout>
      <BoxLink id="cs-minimum-wage">Case Study: Controversies over the Minimum Wage</BoxLink>
      <BoxLink id="news-15">In the News: Should the Minimum Wage Be $15 an Hour?</BoxLink>
    </div>
  );
}

function S61c() {
  return (
    <div className="prose-uz">
      <p>
        <b>Nega iqtisodchilar odatda narx nazoratiga qarshi?</b> 1-bobdagi tamoyil: <i>bozorlar odatda iqtisodiy
        faoliyatni tashkil qilishning yaxshi usuli</i>. Narx tasodifiy son emas — u millionlab firma va iste'molchi
        qarorlarining natijasi. Narxning vazifasi — talab va taklifni tenglashtirish va shu orqali resurslarni
        taqsimlash. Davlat narxni belgilasa, bu signallar xiralashadi.
      </p>
      <p>
        Boshqa tomondan, yana bir tamoyil: <i>hukumat ba'zan bozor natijalarini yaxshilay oladi</i>. Narx nazorati
        ko'pincha <b>adolat</b> uchun — kambag'allarga yordam berish uchun joriy qilinadi: ijara nazorati uy-joyni
        arzon qilmoqchi, eng kam ish haqi qashshoqlikdan chiqarmoqchi.
      </p>
      <p>
        Muammo shundaki, narx nazorati aynan yordam bermoqchi bo'lgan odamlarga ham zarar yetkazishi mumkin: ijara
        nazorati uylarni yomonlashtiradi va topishni qiyinlashtiradi; eng kam ish haqi ba'zilarning daromadini
        oshiradi, boshqalarni esa ishsiz qoldiradi.
      </p>
      <p>
        <b>Muqobil yo'llar</b> bor: hukumat kambag'al oilalar ijarasining bir qismini to'lashi (<T id="subsidy" />)
        yoki ularga naqd pul berishi mumkin — bu uy-joy taklifini kamaytirmaydi va taqchillik yaratmaydi. Ish haqi
        subsidiyasi esa past maoshli ishchilarning turmushini firmalarni ishchi yollashdan qaytarmasdan yaxshilaydi;
        AQShdagi misol — <T id="earned-income-tax-credit" />.
      </p>
      <p>
        Lekin bu muqobillar ham mukammal emas: kambag'allar uchun ariza topshirish qiyin bo'lishi mumkin, subsidiyalar
        esa davlatga pul turadi — demak <b>soliqlar</b> kerak. Keyingi bo'lim ko'rsatadiki, soliqlarning ham o'z
        xarajati bor.
      </p>
      <Callout kind="uz">
        Masalan, nonning narxini qonun bilan cheklash o'rniga kam ta'minlangan oilalarga to'g'ridan-to'g'ri pul yordami
        berilsa, nonvoyxonalar non yopishni kamaytirmaydi, navbatlar paydo bo'lmaydi — yordam esa aynan muhtojlarga
        boradi.
      </Callout>
    </div>
  );
}

function S62() {
  return (
    <div className="prose-uz">
      <p>
        Davlatlar yo'llar, maktablar, mudofaa uchun soliq yig'adi. Soliqlar narx va miqdorga qanday ta'sir qiladi?
      </p>
      <p>
        Tasavvur qiling: shahar har yili muzqaymoq bayrami (parad, salyut, nutqlar) o'tkazmoqchi va pulni yig'ish
        uchun <b>har bir sotilgan muzqaymoqqa $0.50 soliq</b> qo'ymoqchi. Darhol lobbilar ishga tushadi: “Xaridorlar
        qiynalyapti — soliqni sotuvchilar to'lasin!” va “Sotuvchilar zo'rg'a yashayapti — soliqni xaridorlar to'lasin!”
        Mer esa murosa taklif qiladi: <b>yarmini xaridor, yarmini sotuvchi to'lasin</b>.
      </p>
      <p>
        Asosiy savol: soliqning yukini <b>haqiqatda</b> kim ko'taradi? Bu masala <T id="tax-incidence" /> deb ataladi.
        Javob ko'pchilikni hayron qoldiradi: mer buni qonun bilan hal qila olmaydi.
      </p>
    </div>
  );
}

function S62a() {
  return (
    <div className="prose-uz">
      <p>Avval soliq <b>sotuvchilarga</b> solingan deylik: har bir sotilgan muzqaymoq uchun $0.50 davlatga. 4-bobdagi uch qadam bilan tahlil qilamiz.</p>
      <ol>
        <li>
          <b>Qaysi egri chiziq siljiydi?</b> Xaridorlarga soliq yo'q — talab joyida. Sotuvchilar uchun esa biznes har
          qanday narxda kamroq foydali — <b>taklif</b> siljiydi.
        </li>
        <li>
          <b>Qaysi tomonga va qanchaga?</b> Bozor narxi qanday bo'lmasin, sotuvchining qo'lida $0.50 kam qoladi
          (narx $2.00 bo'lsa — $1.50). Avvalgi miqdorni taklif qilishi uchun bozor narxi $0.50 yuqori bo'lishi kerak.
          Demak, taklif <b>aynan $0.50 ga yuqoriga</b> (chapga) siljiydi: S₁ → S₂.
        </li>
        <li>
          <b>Yangi muvozanat:</b> narx <b>$3.00 → $3.30</b>, miqdor <b>100 → 90</b>.
        </li>
      </ol>
      <SupplyDemandGraph config={iceTaxSellers} />
      <p>
        Soliqni sotuvchilar davlatga olib borsa ham, yuk <b>bo'linadi</b>: xaridorlar $0.30 ko'proq to'laydi, sotuvchilar
        esa $3.30 olib, $0.50 ni davlatga berib, <b>$2.80</b> bilan qoladi — avvalgidan $0.20 kam. Ikki xulosa:
      </p>
      <ul>
        <li>
          <b>Soliqlar bozor faolligini kamaytiradi</b>: yangi muvozanatda kamroq sotiladi.
        </li>
        <li>
          <b>Xaridorlar va sotuvchilar yukni bo'lishadi</b>: biri ko'proq to'laydi, ikkinchisi kamroq oladi.
        </li>
      </ul>
      <p className="text-sm text-muted">
        Grafikda binafsha to'rtburchak — soliq tushumi (<M tex="T \times Q" />). “Ortiqchalik maydonlari” tugmasini bossangiz,
        iste'molchi va ishlab chiqaruvchi ortiqchaligi hamda <T id="deadweight-loss" label="deadweight loss" /> (8-bob)
        ham ko'rinadi.
      </p>
    </div>
  );
}

function S62b() {
  return (
    <div className="prose-uz">
      <p>Endi xuddi shu $0.50 ni <b>xaridorlar</b> to'laydi deylik.</p>
      <ol>
        <li>
          <b>Qaysi egri chiziq?</b> Sotuvchilar uchun hech narsa o'zgarmadi — taklif joyida. Xaridorlar esa narx ustiga
          soliq to'laydi — <b>talab</b> siljiydi.
        </li>
        <li>
          <b>Qanchaga?</b> Xaridor uchun haqiqiy narx = bozor narxi + $0.50 (yorliqda $2.00 bo'lsa, aslida $2.50). U
          avvalgi miqdorni olishi uchun bozor narxi $0.50 past bo'lishi kerak: talab <b>aynan $0.50 ga pastga</b> siljiydi
          (D₁ → D₂).
        </li>
        <li>
          <b>Yangi muvozanat:</b> bozor narxi <b>$3.00 → $2.80</b> (sotuvchi oladigani), xaridorning jami to'lovi{' '}
          <b>$3.30</b>, miqdor <b>100 → 90</b>.
        </li>
      </ol>
      <p>Pastdagi grafikda “Soliqni qonun bo'yicha kim to'laydi?” tugmasini almashtirib ko'ring.</p>
      <SupplyDemandGraph config={iceTaxBuyers} />
      <p>
        <b>Kutilmagan xulosa: sotuvchiga solingan soliq va xaridorga solingan soliq bir xil ta'sir qiladi.</b> Ikkala
        holda ham soliq xaridor to'laydigan narx bilan sotuvchi oladigan narx orasiga <T id="tax-wedge" /> qo'yadi:
      </p>
      <M tex="P_B - P_S = T" display />
      <p>
        Farq faqat bitta: pulni davlatga kim olib boradi. Tasavvur qiling, davlat har bir do'kon peshtaxtasiga stakan
        qo'ydi. Soliq sotuvchida bo'lsa, sotuvchi har bir muzqaymoqdan keyin stakanga $0.50 tashlaydi; xaridorda
        bo'lsa — xaridor. Pul xaridorning cho'ntagidan to'g'ridan-to'g'ri stakanga tushadimi yoki avval sotuvchining
        qo'liga, keyin stakanga — ahamiyati yo'q. Bozor yangi muvozanatga kelgach, yuk bir xil bo'linadi.
      </p>
      <Callout kind="exam">
        <p>
          Sotuvchiga soliq → taklif <b>yuqoriga</b> (chapga) T ga. Xaridorga soliq → talab <b>pastga</b> (chapga) T ga.
          Ikkala holda: <M tex="P_B" /> ↑, <M tex="P_S" /> ↓, <M tex="Q" /> ↓ — <b>raqamlar aynan bir xil</b>.
        </p>
        <p>
          “Xaridorga soliq solinganda talab yuqoriga siljiydi” — xato! Pastga.
        </p>
      </Callout>
      <BoxLink id="cs-payroll-tax">Case Study: Can Congress Distribute the Burden of a Payroll Tax?</BoxLink>
    </div>
  );
}

function S62c() {
  return (
    <div className="prose-uz">
      <p>
        Yuk qanday nisbatda bo'linadi? Juda kam hollarda teng. Hammasi talab va taklifning nisbiy{' '}
        <T id="elasticity" />
        iga bog'liq (Figure 9). Grafikda faqat ponani ko'rsatamiz — qaysi egri chiziq siljigani yuk uchun ahamiyatsiz.
      </p>
      <ul>
        <li>
          <b>(a) Taklif juda egiluvchan, talab nisbatan noegiluvchan.</b> Sotuvchilar narxga sezgir (taklif yotiq),
          xaridorlar unchalik emas (talab tik). Sotuvchilar oladigan narx deyarli tushmaydi, xaridorlar narxi esa
          ancha oshadi → yukning katta qismi <b>xaridorlarda</b>.
        </li>
        <li>
          <b>(b) Taklif noegiluvchan, talab juda egiluvchan.</b> Teskari: xaridor narxi kam oshadi, sotuvchi narxi
          ancha tushadi → yuk asosan <b>sotuvchilarda</b>.
        </li>
      </ul>
      <p>Tugmalar bilan (a) va (b) holatlarini oching, keyin slayderlar bilan egri chiziqlarni o'zingiz buring:</p>
      <SupplyDemandGraph config={incidence} />
      <p>
        <b>Umumiy qoida: soliq yuki bozorning kamroq egiluvchan tomoniga ko'proq tushadi.</b> Nega? Egiluvchanlik —
        sharoit yomonlashganda bozorni tark etishga tayyorlik. Talab egiluvchanligi kichik bo'lsa, xaridorlarda bu
        tovarga yaxshi muqobil yo'q; taklif egiluvchanligi kichik bo'lsa, sotuvchilarda bu tovarni ishlab chiqarishga
        yaxshi muqobil yo'q. Soliq kelganda muqobili kam tomon bozorni tashlab keta olmaydi va yukning ko'p qismini
        ko'taradi.
      </p>
      <p>Kitobdagi so'z bilan aytilgan qoidaning aniq ko'rinishi (kichik soliqlar uchun):</p>
      <M tex="\frac{\text{Buyers' share}}{\text{Sellers' share}} = \frac{E_s}{E_d}" display />
      <p>
        Shu mantiq ish haqi solig'iga ham qo'llanadi: iqtisodchilar <b>mehnat taklifi mehnat talabidan kamroq
        egiluvchan</b> ekanini aniqlagan, demak yukning katta qismini firmalar emas, <b>ishchilar</b> ko'taradi —
        qonunchilar ko'zlagan 50/50 dan ancha uzoq.
      </p>
      <Callout kind="exam">
        “Who bears the burden of the tax?” savoliga javob <b>hech qachon</b> “who it is levied on” emas. Doim
        egiluvchanliklarni solishtiring: <b>less elastic side bears more</b>.
      </Callout>
      <BoxLink id="cs-luxury-tax">Case Study: Who Pays the Luxury Tax?</BoxLink>
    </div>
  );
}

function S63() {
  return (
    <div className="prose-uz">
      <p>
        Iqtisodiyotni ikki xil qonun boshqaradi: <b>talab va taklif qonunlari</b> va <b>hukumat chiqaradigan
        qonunlar</b>. Bu bobda ular qanday to'qnashishini ko'rdik: narx shifti taqchillik, tub ortiqcha yaratadi,
        soliqni esa qonunda kim to'lashi yozilganidan qat'i nazar bozor bo'lib beradi.
      </p>
      <p>
        Keyingi boblarda soliqlarni chuqurroq (8-bob — soliqlarning xarajatlari, sof yo'qotish) va boshqa
        siyosatlarni o'rganamiz. Lekin asosiy saboq o'zgarmaydi: <b>hukumat siyosatini tahlil qilishda talab va taklif —
        birinchi va eng foydali vosita.</b>
      </p>
      <p>O'zingizni sinab ko'ring: pastdagi grafikda to'rtta rejimni (erkin bozor, shift, tub, soliq) almashtirib, “egri chiziq bo'ylab harakat” va “siljish”ni solishtiring.</p>
      <SupplyDemandGraph config={iceMarket} />
    </div>
  );
}

// ---------------- Boxes ----------------

function GasLines() {
  return (
    <div className="prose-uz">
      <p>
        5-bobda ko'rganimizdek, 1973 yilda OPEC xom neft qazib olishni kamaytirib, uning narxini oshirdi. Benzin
        neftdan olinadi, shuning uchun benzin <b>taklifi kamaydi</b>. Zapravkalarda uzun navbatlar odatiy holga
        aylandi — haydovchilar bir necha gallon benzin uchun soatlab kutardi.
      </p>
      <p>
        Ko'pchilik OPECni aybladi. Albatta, OPEC qazishni kamaytirmaganda taqchillik bo'lmasdi. Ammo iqtisodchilar
        boshqa aybdorni topdi: <b>AQSh hukumatining benzin narxiga qo'ygan shifti</b>.
      </p>
      <ul>
        <li>
          <b>(a) OPECgacha:</b> muvozanat narxi P₁ shiftdan past — shift ta'sirsiz.
        </li>
        <li>
          <b>(b) OPECdan keyin:</b> taklif S₁ → S₂ chapga siljidi. Erkin bozorda narx P₂ gacha ko'tarilardi va
          taqchillik bo'lmasdi. Shift esa narxni ushlab qoldi: sotuvchilar <M tex="Q_S" />, xaridorlar <M tex="Q_D" /> xohlaydi, farq{' '}
          <M tex="Q_D - Q_S" /> — taqchillik.
        </li>
      </ul>
      <SupplyDemandGraph config={gasLines} />
      <p>
        Oxir-oqibat benzin narxini cheklovchi qonunlar bekor qilindi: qonunchilar amerikaliklarning navbatda yo'qotgan
        soatlari uchun qisman o'zlari javobgar ekanini tushundi. Bugun xom neft narxi o'zgarsa, benzin narxi erkin
        moslashadi.
      </p>
      <Callout kind="uz">
        Qishda ba'zan metan quyish shoxobchalarida uzun navbatlar bo'lishini eslang. Iqtisodchi birinchi navbatda shunday
        so'raydi: narx erkin moslasha oladimi? Agar narx tartibga solingan bo'lsa va sovuqda taklif kamaysa (yoki talab
        oshsa), aynan (b) panelidagi holat yuz beradi — taqchillik va navbat.
      </Callout>
    </div>
  );
}

function RentControl() {
  return (
    <div className="prose-uz">
      <p>
        Ko'p shaharlarda mahalliy hokimiyat uy egalari oladigan ijara haqiga shift qo'yadi — bu <T id="rent-control" />
        . Maqsad — kambag'allarga uy-joyni arzonlashtirish. Ammo iqtisodchilar uni juda samarasiz usul deb tanqid qiladi;
        bir iqtisodchi uni hatto “the best way to destroy a city, other than bombing” deb atagan.
      </p>
      <p>
        Zarari darrov ko'rinmaydi, chunki u yillar davomida yuzaga chiqadi. <b>Qisqa muddatda</b> uy egalarida
        ma'lum sonli kvartira bor va ularni tez ko'paytira olmaydi; ijarachilar ham yashash joyini tez o'zgartirmaydi.
        Ya'ni qisqa muddatli talab va taklif <b>noegiluvchan</b> — taqchillik kichik, ijara esa arzonlashadi
        (ijarachilar xursand).
      </p>
      <p>
        <b>Uzoq muddatda</b> manzara boshqacha: uy egalari yangi uy qurmaydi va eskisini ta'mirlamaydi; arzon ijara
        esa odamlarni o'z kvartirasini topishga (sheriklar yoki ota-ona bilan yashamaslikka) va shaharga ko'chib
        kelishga undaydi. Talab va taklif <b>egiluvchanroq</b> — taqchillik katta.
      </p>
      <SupplyDemandGraph config={rentControl} />
      <p>
        Ijara nazorati bor shaharlarda uy egalari kvartiralarni turli usullar bilan taqsimlaydi: uzun kutish
        ro'yxatlari, bolasiz ijarachilarni afzal ko'rish, irqiy kamsitish, “stol ostidan” to'lovlar (bu pora umumiy
        narxni muvozanatga yaqinlashtiradi).
      </p>
      <p>
        <b>People respond to incentives</b>: oddiy bozorda uy egasi binoni toza va xavfsiz saqlasa, yuqoriroq ijara
        oladi. Ijara nazorati navbat va kutish ro'yxatlari yaratganda bu rag'bat yo'qoladi — baribir odamlar navbatda
        turibdi. Natijada ijarachilar kamroq to'laydi, lekin shaharda uylar <b>soni ham, sifati ham</b> kamayadi.
        Hukumat bunga yangi qoidalar (kamsitishni taqiqlash, minimal yashash sharoiti talablari) bilan javob beradi, ammo
        ularni nazorat qilish qiyin va qimmat. Ijara erkin bo'lsa, bunday qoidalarga ehtiyoj kamroq — raqobatning o'zi
        tartibga soladi.
      </p>
      <div className="not-prose card mt-4 p-4">
        <div className="kicker">Ask the Experts · Rent Control (IGM, 2012)</div>
        <p className="mt-2 text-[15px] italic">
          “Local ordinances that limit rent increases for some rental housing units, such as in New York and San
          Francisco, have had a positive impact over the past three decades on the amount and quality of broadly
          affordable rental housing in cities that have used them.”
        </p>
        <PollBar agree={1} uncertain={4} disagree={95} />
        <p className="mt-2 text-sm text-muted">Iqtisodchilarning deyarli hammasi (95%) bunga rozi emas — kamdan-kam uchraydigan yakdillik.</p>
      </div>
    </div>
  );
}

function MinimumWageBox() {
  return (
    <div className="prose-uz">
      <p>
        <T id="minimum-wage" /> — muhim va bahsli narx tubi: ish beruvchi mehnat uchun to'lashi mumkin bo'lgan eng past
        narx. AQSh Kongressi uni 1938 yilda (Fair Labor Standards Act) joriy qilgan. 2021 yilda federal minimum soatiga{' '}
        <b>$7.25</b> edi; ko'p shtat va shaharlarda bundan yuqori (Seattle'da yirik firmalar uchun <b>$16.69</b>).
        Fransiyada o'rtacha daromad AQShdan qariyb 30% past, lekin eng kam ish haqi 50% dan ko'proq yuqori.
      </p>
      <p>
        Mehnat bozorida ishchilar — <b>taklif</b>, firmalar — <b>talab</b> tomoni. Minimum muvozanatdan yuqori bo'lsa,
        taklif qilingan mehnat talab qilingandan ko'p: <b>mehnat ortiqchasi — ishsizlik</b>. Ish topganlar ko'proq oladi,
        ish topa olmaganlar esa daromadsiz qoladi.
      </p>
      <SupplyDemandGraph config={minimumWage} />
      <p>
        Muhim nuance: iqtisodiyotda bitta emas, ko'plab mehnat bozorlari bor. Yuqori malakali ishchilarning muvozanat
        maoshi minimumdan ancha yuqori — ular uchun tub ta'sirsiz. Eng katta ta'sir <b>o'smirlar</b> mehnat bozoriga
        tushadi: ular eng kam malakali va tajribasiz, ko'pincha o'qish evaziga kamroq maoshga ham rozi (hatto bepul
        stajyorlik ham bor — agar minimum ularga ham qo'llansa, bunday imkoniyatlar yo'qolishi mumkin).
      </p>
      <ul>
        <li>
          Tadqiqotlar: eng kam ish haqi <b>10% oshsa, o'smirlar bandligi 1–3% kamayadi</b>. Ko'p tadqiqot qisqa muddatni
          o'lchaydi; uzoq muddatda firmalar ish jarayonini qayta tashkil qilishga ulgurgani uchun ta'sir kattaroq bo'lishi
          mumkin.
        </li>
        <li>
          Minimum <b>taklifni</b> ham o'zgartiradi: ko'proq o'smir ish qidiradi; ba'zi maktab o'quvchilari o'qishni
          tashlab ishga kiradi va avvalroq o'qishni tashlaganlarni ishsiz qoldiradi.
        </li>
      </ul>
      <p>
        <b>Tarafdorlar:</b> bu ishlaydigan kambag'allar daromadini oshirishning insonparvar yo'li. 2021 yilda $7.25
        to'liq vaqt ishlagan ikki kattaning yillik daromadi atigi <b>$30,160</b> — AQSh median oilaviy daromadining
        taxminan 40% i. Ba'zilar mehnat bozorlari raqobatli bozor modeliga mos kelmaydi, deydi; boshqalar salbiy
        ta'sirlarni tan oladi, lekin ularni kichik deb hisoblaydi.
      </p>
      <p>
        <b>Raqiblar:</b> u qashshoqlikka qarshi eng yaxshi vosita emas — ishsizlik yaratadi, o'qishni tashlashga undaydi,
        ba'zi ishchilarni ish joyida o'qitishdan mahrum qiladi va <b>yomon yo'naltirilgan</b>: minimum maosh
        oluvchilarning uchdan biridan kamrog'i qashshoq oilalarda, ko'pchiligi o'rta sinf o'smirlari.
      </p>
      <p>
        2021 yilda Prezident Bayden minimumni 2025 yilgacha <b>$15</b> ga oshirishni taklif qildi. Kongress byudjet
        idorasi (CBO) baholadi: <b>17 mln</b> kishining maoshi oshadi, <b>900 ming</b> kishi qashshoqlikdan chiqadi,{' '}
        <b>1.4 mln</b> kishi ishsiz qoladi.
      </p>
      <div className="not-prose card mt-4 p-4">
        <div className="kicker">Ask the Experts · The Minimum Wage (IGM, 2021)</div>
        <p className="mt-2 text-[15px] italic">
          “A federal minimum wage of $15 per hour would lower employment for low-wage workers in many states.”
        </p>
        <PollBar agree={50} uncertain={34} disagree={16} />
      </div>
      <Callout kind="uz">
        O'zbekistonda ham eng kam ish haqi (EKIH) belgilanadi. Uning qaysi ishchilar uchun “binding” ekanini o'ylab
        ko'ring: poytaxtdagi dasturchi uchunmi yoki viloyatdagi malakasiz yosh ishchi uchunmi? Javob — muvozanat ish haqi
        minimumdan pastroq bo'lgan guruhlar uchun.
      </Callout>
    </div>
  );
}

function News15() {
  return (
    <div className="prose-uz">
      <p className="text-sm text-muted">David Neumark, “Raising the Minimum Wage Will Definitely Cost Jobs”, The Wall Street Journal, 2021 — qisqacha mazmuni.</p>
      <p>
        CBO $15 lik minimum 1.4 mln ish o'rnini yo'qotadi deb baholagach, ba'zi tahlilchilar “iqtisodchilar orasida yangi
        konsensus bor: minimumni oshirish sezilarli ishsizliksiz maoshni oshirgan” deb da'vo qildi. Neumark bunga qarshi.
      </p>
      <ul>
        <li>
          U va Peter Shirley so'nggi 30 yildagi deyarli barcha AQSh tadqiqotlari mualliflaridan bandlik{' '}
          <b>egiluvchanligi</b> bo'yicha eng yaxshi bahosini so'ragan.
        </li>
        <li>
          Natija: <b>79%</b> tadqiqot minimum bandlikni <b>kamaytirgan</b> deb topgan (46% — statistik ahamiyatli); faqat
          21% kichik ijobiy ta'sir topgan (4% — ahamiyatli).
        </li>
        <li>
          O'rtacha egiluvchanlik ≈ <b>−0.15</b>: minimum 10% oshsa, past malakali bandlik 1.5% kamayadi. $7.25 → $15 —
          bu 107% oshish, ya'ni taxminan <b>16%</b> bandlik kamayishi (CBO bilan mos).
        </li>
        <li>
          Minimumdan bevosita ta'sirlanadigan ishchilarga qanchalik aniq qaralsa, salbiy ta'sir shuncha kuchli (o'rta
          maktab ma'lumotiga ega yoki undan pastlar uchun −0.24).
        </li>
        <li>
          Daromad oshishining katta qismi <b>yuqoriroq daromadli</b> oilalarga boradi. <b>EITC</b> esa kambag'al
          oilalarga ancha aniq yo'naltirilgan, qashshoqlikni kamaytiradi va ish o'rni yaratadi.
        </li>
      </ul>
      <Callout kind="tip" title="Muhokama uchun savollar">
        <ol>
          <li>Siz past maoshli ishchilarga yordam siyosatini ishlab chiquvchi iqtisodchi bo'lsangiz — minimum wage yoki EITC? Nega?</li>
          <li>Endi siz saylovdagi siyosatchisiz. Qaysi biri bilan saylovoldi kampaniyasi o'tkazish osonroq? Nega?</li>
        </ol>
      </Callout>
    </div>
  );
}

function PayrollTax() {
  return (
    <div className="prose-uz">
      <p>
        Maosh olgan bo'lsangiz, undan soliqlar ushlanganini ko'rgansiz. AQShda ulardan biri — <b>FICA</b> (Social
        Security va Medicare uchun). Bu — <T id="payroll-tax" />: firmalar ishchilarga to'laydigan maoshdan olinadigan
        soliq. 2021 yilda odatiy ishchi uchun jami <b>15.3%</b>.
      </p>
      <p>
        Kongress yukni bo'lishga harakat qilgan: qonun bo'yicha <b>yarmini firma, yarmini ishchi</b> to'laydi (maoshingizdan
        ushlangan qism — ishchi ulushi). Lekin tax incidence tahlili ko'rsatadiki, qonun haqiqiy yukni belgilay olmaydi.
        Bu yerda tovar — mehnat, narx — ish haqi. Soliq <b>firmalar to'laydigan ish haqi</b> va <b>ishchilar oladigan ish
        haqi</b> (qo'lga tegadigan) orasiga pona qo'yadi.
      </p>
      <SupplyDemandGraph config={payrollTax} />
      <p>
        Grafikda soliqni “Firmalar” yoki “Ishchilar” to'lashiga almashtiring — natija o'zgarmaydi. Yukni egiluvchanliklar
        belgilaydi: mehnat taklifi talabdan kamroq egiluvchan bo'lgani uchun yukning katta qismi <b>ishchilarga</b>{' '}
        tushadi. Qonunchilar soliq kimning cho'ntagidan chiqishini hal qila oladi, lekin haqiqiy yukni qonun bilan
        belgilay olmaydi.
      </p>
      <Callout kind="uz">
        O'zbekistonda ijtimoiy soliqni qonun bo'yicha ish beruvchi to'laydi. Ushbu bob mantiqiga ko'ra, uning yukini
        haqiqatda kim ko'taradi? Agar ishchilar ish haqi pasaysa ham ishlashda davom etsa (taklif noegiluvchan), yukning
        katta qismi pastroq maosh ko'rinishida ishchilarga o'tadi.
      </Callout>
    </div>
  );
}

function LuxuryTax() {
  return (
    <div className="prose-uz">
      <p>
        1990 yilda Kongress yaxtalar, xususiy samolyotlar, mo'yna, zargarlik buyumlari va qimmat avtomobillarga{' '}
        <T id="luxury-tax" /> joriy qildi. Maqsad — soliqni to'lashga eng qodir bo'lganlardan, ya'ni boylardan
        tushum olish.
      </p>
      <p>
        Bozor esa boshqacha hal qildi. Yaxta talabi juda <b>egiluvchan</b>: milliarder yaxtadan osongina voz kechadi —
        pulga orol sotib olishi, hashamatli sayohat qilishi yoki merosxo'rlariga ko'proq qoldirishi mumkin. Yaxta
        taklifi esa, hech bo'lmaganda qisqa muddatda, <b>noegiluvchan</b>: kemasozlik zavodlarini boshqa narsaga
        moslash qiyin, ishchilar ham ishini tez o'zgartirmaydi.
      </p>
      <SupplyDemandGraph config={luxuryTax} />
      <p>
        Bashorat aniq: egiluvchan talab va noegiluvchan taklifda yuk asosan <b>yaxta quruvchi firmalar va ishchilar</b>{' '}
        zimmasiga tushadi — ular kemalari uchun ancha kam pul oladi. Ishchilar esa boy emas. Natijada hashamat solig'i
        boy xaridorlardan ko'ra o'rta sinf ishchilariga ko'proq tushdi. Bu xato tezda ma'lum bo'ldi va Kongress 1993
        yilda solig'ning katta qismini bekor qildi.
      </p>
    </div>
  );
}

function P10Widget() {
  return <SupplyDemandGraph config={problem10} />;
}

function MinWageWidget() {
  return <SupplyDemandGraph config={{ ...minimumWage, slopeControls: true, title: 'Problem 8 — egiluvchanlik bilan tajriba' }} />;
}

// ---------------- Page content ----------------

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    "**Price ceiling** va **price floor** ni ajrata olish, qachon **binding** bo'lishini aniqlash",
    "Ta'sirli shift **shortage**, ta'sirli tub **surplus** yaratishini grafik va raqamlar bilan ko'rsatish",
    "Ijara nazorati, benzin navbatlari va eng kam ish haqi misollarini tushuntirish (qisqa va uzoq muddat)",
    "Soliq sotuvchiga yoki xaridorga solinganda egri chiziqlar qanday siljishini va **tax wedge** ni ko'rsatish",
    "Soliq yukini (**tax incidence**) hisoblash va uni egiluvchanliklar bilan bog'lash",
    "Narx nazoratining muqobillarini (subsidiyalar, EITC) baholash",
  ],
  sections: [
    { id: "s-6-1", code: "6-1", titleEn: "The Surprising Effects of Price Controls", titleUz: "Narx nazoratining kutilmagan oqibatlari", Body: S61, check: checks["s-6-1"] },
    { id: "s-6-1a", code: "6-1a", titleEn: "How Price Ceilings Affect Market Outcomes", titleUz: "Narx shifti bozorga qanday ta'sir qiladi", Body: S61a, check: checks["s-6-1a"] },
    { id: "s-6-1b", code: "6-1b", titleEn: "How Price Floors Affect Market Outcomes", titleUz: "Narx tubi bozorga qanday ta'sir qiladi", Body: S61b, check: checks["s-6-1b"] },
    { id: "s-6-1c", code: "6-1c", titleEn: "Evaluating Price Controls", titleUz: "Narx nazoratini baholash", Body: S61c, check: checks["s-6-1c"] },
    { id: "s-6-2", code: "6-2", titleEn: "The Surprising Study of Tax Incidence", titleUz: "Soliq yuki: kutilmagan xulosalar", Body: S62, check: checks["s-6-2"] },
    { id: "s-6-2a", code: "6-2a", titleEn: "How Taxes on Sellers Affect Market Outcomes", titleUz: "Sotuvchilarga soliq", Body: S62a, check: checks["s-6-2a"] },
    { id: "s-6-2b", code: "6-2b", titleEn: "How Taxes on Buyers Affect Market Outcomes", titleUz: "Xaridorlarga soliq", Body: S62b, check: checks["s-6-2b"] },
    { id: "s-6-2c", code: "6-2c", titleEn: "Elasticity and Tax Incidence", titleUz: "Egiluvchanlik va soliq yuki", Body: S62c, check: checks["s-6-2c"] },
    { id: "s-6-3", code: "6-3", titleEn: "Conclusion", titleUz: "Xulosa", Body: S63 },
  ],
  examTraps: [
    { title: "Binding vs not binding", body: "Shift faqat \\(P_{\\max} < P^*\\) bo'lsa, tub faqat \\(P_{\\min} > P^*\\) bo'lsa ta'sir qiladi. Avval doim muvozanatni toping (Problem 3c, 10c)." },
    { title: "Shortage yoki surplus?", body: "Ta'sirli **ceiling → shortage** (\\(Q^D > Q^S\\)), ta'sirli **floor → surplus** (\\(Q^S > Q^D\\))." },
    { title: "Qancha sotiladi?", body: "Narx nazoratida sotilgan miqdor — **qisqa tomon**: shiftda \\(Q^S\\), tubda \\(Q^D\\)." },
    { title: "Soliq egri chizig'ini qayerga siljitadi?", body: "Sotuvchiga soliq — taklif **T ga yuqoriga**; xaridorga soliq — talab **T ga pastga**. Natija bir xil." },
    { title: "Who bears the tax?", body: "Qonun emas, **egiluvchanlik**: yuk **less elastic** tomonga tushadi. Vertikal taklif (Fenway) → sotuvchilar to'liq; vertikal talab → xaridorlar to'liq." },
    { title: "Rent control: qisqa va uzoq muddat", body: "Uzoq muddatda egiluvchanlik katta → taqchillik **katta**. Bu QuickQuiz 3 va tez-tez so'raladigan savol." },
    { title: "Eng kam ish haqi va jami to'lov", body: "Jami ish haqi \\(= W \\times Q^D\\): talab **egiluvchan** bo'lsa kamayadi, noegiluvchan bo'lsa oshadi. Bandlik faqat talab egiluvchanligiga, ishsizlik esa ikkalasiga bog'liq." },
  ],
  mistakes: [
    { wrong: "“Narx shifti har doim narxni tushiradi.”", right: "Faqat muvozanatdan past bo'lsagina. Yuqorida bo'lsa — not binding, hech narsa o'zgarmaydi." },
    { wrong: "“Shortage = \\(Q^S - Q^D\\).”", right: "Shortage = \\(Q^D - Q^S\\) (talab ko'p). Surplus = \\(Q^S - Q^D\\)." },
    { wrong: "“Soliqni sotuvchi to'lasa, xaridorlarga ta'sir qilmaydi.”", right: "Bozor narxi oshadi — yuk bo'linadi. Muzqaymoqda xaridorlar $0.30, sotuvchilar $0.20 ko'taradi." },
    { wrong: "“Xaridorga soliq talabni yuqoriga siljitadi.”", right: "Pastga! Xaridor har qanday miqdor uchun sotuvchiga T kam to'lashga tayyor." },
    { wrong: "“Soliq tushumi = T × eski miqdor.”", right: "T × **yangi** (kichikroq) miqdor. Problem 10: 30 × 180, 30 × 200 emas." },
    { wrong: "“Narx tubi taqchillik yaratadi, chunki narx yuqori.”", right: "Yuqori narx — ko'p sotuvchi, kam xaridor → **surplus** (ishsizlik mehnat bozorida)." },
    { wrong: "“Yaxta solig'ini boylar to'laydi, chunki ular boy.”", right: "Yuk egiluvchanlikka bog'liq: talab egiluvchan, taklif noegiluvchan → yaxta quruvchilar to'laydi." },
  ],
  boxes: [
    { id: "cs-gas-lines", kind: "Case Study", titleEn: "How to Create Long Lines at the Gas Pump", titleUz: "Benzin shoxobchalarida navbat qanday paydo bo'ladi", Body: GasLines },
    { id: "cs-rent-control", kind: "Case Study", titleEn: "Why Rent Control Causes Housing Shortages, Especially in the Long Run", titleUz: "Ijara nazorati nega (ayniqsa uzoq muddatda) uy taqchilligiga olib keladi", Body: RentControl },
    { id: "cs-minimum-wage", kind: "Case Study", titleEn: "Controversies over the Minimum Wage", titleUz: "Eng kam ish haqi atrofidagi bahslar", Body: MinimumWageBox },
    { id: "news-15", kind: "In the News", titleEn: "Should the Minimum Wage Be $15 an Hour?", titleUz: "Eng kam ish haqi soatiga $15 bo'lishi kerakmi?", Body: News15 },
    { id: "cs-payroll-tax", kind: "Case Study", titleEn: "Can Congress Distribute the Burden of a Payroll Tax?", titleUz: "Kongress ish haqi solig'i yukini bo'la oladimi?", Body: PayrollTax },
    { id: "cs-luxury-tax", kind: "Case Study", titleEn: "Who Pays the Luxury Tax?", titleUz: "Hashamat solig'ini kim to'laydi?", Body: LuxuryTax },
  ],
  summary: [
    "**Price ceiling** — tovar yoki xizmat narxining qonuniy maksimumi (masalan, ijara nazorati). Shift muvozanat narxidan past bo'lsa, u **binding**: talab miqdori taklif miqdoridan oshadi, taqchillik sabab sotuvchilar tovarni qandaydir yo'l bilan xaridorlar o'rtasida taqsimlashi kerak bo'ladi.",
    "**Price floor** — narxning qonuniy minimumi (masalan, eng kam ish haqi). Tub muvozanatdan yuqori bo'lsa, u binding: taklif miqdori talab miqdoridan oshadi, ortiqcha sabab xaridorlar sotuvchilarni qandaydir yo'l bilan tanlaydi.",
    "Hukumat tovarga soliq qo'ysa, tovarning muvozanat miqdori **kamayadi** — soliq bozorni kichraytiradi.",
    "Soliq xaridor to'laydigan narx va sotuvchi oladigan narx orasiga **pona** qo'yadi: xaridorlar ko'proq to'laydi, sotuvchilar kamroq oladi — yukni bo'lishadi. **Tax incidence** soliq xaridorga yoki sotuvchiga solinishiga bog'liq emas.",
    "Tax incidence talab va taklifning **narx egiluvchanligiga** bog'liq: yukning ko'p qismi **kamroq egiluvchan** tomonga tushadi, chunki u narx o'zgarishiga miqdorni o'zgartirib javob bera olmaydi.",
  ],
  widgets: { p10: P10Widget, minwage: MinWageWidget },
};
