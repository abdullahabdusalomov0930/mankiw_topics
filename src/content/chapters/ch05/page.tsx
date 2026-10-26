import { ElasticityCalculator, ElasticityCategories, ElasticityLab } from '../../../components/graphs/ElasticityLab';
import { SupplyDemandGraph } from '../../../components/graphs/SupplyDemandGraph';
import { Callout } from '../../../components/ui/Kit';
import { BookTable, BoxLink, Source } from '../../../components/ui/Lesson';
import { Math as M } from '../../../components/ui/Math';
import { T } from '../../../components/ui/Term';
import type { ChapterPageContent } from '../../types';
import { drugs, opec, wheat } from './presets';
import { checks } from './quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        Benzin narxi 10% oshdi. Odamlar kamroq yoqilg'i quyadi — bu aniq. Lekin <b>qanchaga</b> kamroq? 1% gami yoki 20%
        gami? Bu savolga javob davlat soliq siyosati uchun ham, zapravka egasi uchun ham, Uber uchun ham hal qiluvchi.
      </p>
      <p>
        Tadqiqotlar ko'rsatadiki, benzin 10% qimmatlasa, bir yildan keyin iste'mol taxminan <b>2.5%</b>, besh yildan keyin
        esa <b>6%</b> kamayadi: odamlar avval kamroq yuradi, keyin tejamkor yoki elektr mashinaga o'tadi. Mana shu
        “qanchalik sezgir” degan o'lchov — <T id="elasticity" />.
      </p>
    </div>
  );
}

const S51a = () => (
  <div className="prose-uz">
    <p>
      Talab qonuni aytadi: narx tushsa, talab miqdori oshadi. <T id="price-elasticity-of-demand" /> esa <b>qanchaga</b>{' '}
      oshishini o'lchaydi. Miqdor narxga kuchli javob bersa — talab <b>elastic</b>, sust javob bersa — <b>inelastic</b>{' '}
      (<T id="elastic-inelastic" label="elastic/inelastic" />).
    </p>
    <p>Universal qoida yo'q, lekin to'rtta “rule of thumb” bor (<T id="determinants-elasticity" label="determinants" />):</p>
    <ul>
      <li>
        <b>Yaqin o'rinbosarlar.</b> Sariyog' qimmatlasa, ko'pchilik margaringa o'tadi — talab egiluvchan. Tuxumning yaqin
        o'rinbosari yo'q — talab noegiluvchan.
      </li>
      <li>
        <b>Zarurat va hashamat.</b> Shifokor qabuli qimmatlasa ham odamlar boradi (noegiluvchan); yelkanli qayiq qimmatlasa — keskin
        kamroq olinadi (egiluvchan). Bu tovarning o'ziga emas, xaridorning afzalligiga bog'liq: ishtiyoqli dengizchi uchun qayiq
        zarurat bo'lishi mumkin.
      </li>
      <li>
        <b>Bozorning ta'rifi.</b> “Oziq-ovqat” — keng, o'rinbosari yo'q, noegiluvchan; “muzqaymoq” — torroq, egiluvchanroq; “vanil
        muzqaymoq” — juda tor, juda egiluvchan.
      </li>
      <li>
        <b>Vaqt.</b> Uzoq muddatda talab egiluvchanroq: benzin qimmatlasa, dastlab biroz kam yuriladi, yillar o'tib esa odamlar
        mashinasini almashtiradi, sheriklashib yuradi, ishga yaqinroq ko'chadi.
      </li>
    </ul>
  </div>
);

const S51b = () => (
  <div className="prose-uz">
    <p>Formulasi:</p>
    <M tex="\text{Price elasticity of demand} = \frac{\text{Percentage change in quantity demanded}}{\text{Percentage change in price}}" display />
    <p>
      Muzqaymoq 10% qimmatlasa va siz 20% kam olsangiz, egiluvchanlik <M tex="20/10 = 2" /> — miqdor narxdan ikki barobar kuchliroq
      o'zgaradi. Narx va miqdor qarama-qarshi yo'nalishda harakat qilgani uchun natija manfiy chiqadi, lekin kitob (va
      imtihon) minus belgisini tashlab, <b>absolyut qiymatni</b> yozadi. Katta son = kuchliroq javob.
    </p>
  </div>
);

const S51c = () => (
  <div className="prose-uz">
    <p>
      Muammo: A ($4, 120) dan B ($6, 80) ga borsak, narx 50% oshib, miqdor 33% kamayadi → E = 0.66. Teskarisiga B dan A ga
      borsak, narx 33% tushib, miqdor 50% oshadi → E = 1.5. Bir xil voqea, ikki xil javob — chunki foizlar turli asosdan
      hisoblangan.
    </p>
    <p>
      <T id="midpoint-method" /> o'zgarishni boshlang'ich qiymatga emas, <b>o'rtachaga</b> bo'ladi: $4 va $6 ning o'rtasi $5,
      shuning uchun ikkala yo'nalishda ham o'zgarish 40%. Miqdor uchun o'rta nuqta 100, o'zgarish ham 40%. Egiluvchanlik — 1,
      yo'nalishdan qat'i nazar.
    </p>
    <M tex="E_d = \frac{(Q_2 - Q_1)/[(Q_2 + Q_1)/2]}{(P_2 - P_1)/[(P_2 + P_1)/2]}" display />
    <p>Pastdagi laboratoriyada ikki nuqtani tanlang — hisob-kitob qadam-baqadam ko'rsatiladi:</p>
    <ElasticityLab start={[4, 5]} />
    <Callout kind="exam">
      Kitob: “If you ever need to calculate elasticities, use this formula.” Imtihonda boshqacha aytilmagan bo'lsa, doim{' '}
      <b>midpoint</b> usulini ishlating va javobni musbat son bilan yozing.
    </Callout>
  </div>
);

const S51d = () => (
  <div className="prose-uz">
    <p>
      Egiluvchanlikka qarab talab egri chiziqlari tasniflanadi: E &gt; 1 — <b>elastic</b>, E &lt; 1 — <b>inelastic</b>, E = 1 —{' '}
      <T id="unit-elastic" />. Ekstremal holatlar: E = 0 — <T id="perfectly-inelastic" /> (vertikal chiziq), E → ∞ —{' '}
      <T id="perfectly-elastic" /> (gorizontal chiziq).
    </p>
    <p>
      Foydali qoida: berilgan nuqtada egri chiziq qanchalik <b>yotiq</b> bo'lsa, egiluvchanlik shunchalik katta; qanchalik{' '}
      <b>tik</b> bo'lsa — shunchalik kichik.
    </p>
    <ElasticityCategories />
    <Callout kind="tip" title="Eslab qolish usuli">
      <b>I</b>nelastic egri chiziq “<b>I</b>” harfiga o'xshaydi — tik (mutlaqo noegiluvchan bo'lsa, butunlay vertikal). Kitob
      ham shuni tavsiya qiladi: “not a deep insight, but it might help on your next exam”.
    </Callout>
  </div>
);

const S51e = () => (
  <div className="prose-uz">
    <p>
      <T id="total-revenue" /> — xaridorlar to'laydigan va sotuvchilar oladigan summa: <M tex="TR = P \times Q" />. Grafikda — talab
      egri chizig'i ostidagi to'rtburchak (Figure 2: $4 × 100 = $400).
    </p>
    <p>Narx o'zgarganda tushum qanday o'zgaradi? Bu egiluvchanlikka bog'liq (Figure 3):</p>
    <ul>
      <li>
        <b>Inelastic</b> (E &lt; 1): narx $4 → $5, miqdor 100 → 90, tushum <b>$400 → $450</b>. Narx oshishidan yutuq (A
        maydoni) miqdor kamayishidan yo'qotishdan (B) katta.
      </li>
      <li>
        <b>Elastic</b> (E &gt; 1): narx $4 → $5, miqdor 100 → 70, tushum <b>$400 → $350</b>.
      </li>
    </ul>
    <BookTable
      head={['Demand', 'Price ↑ ⇒ Total revenue', 'Price ↓ ⇒ Total revenue']}
      rows={[
        ['Inelastic (E < 1)', "↑ (bir xil yo'nalish)", '↓'],
        ['Unit elastic (E = 1)', "o'zgarmaydi", "o'zgarmaydi"],
        ['Elastic (E > 1)', '↓ (qarama-qarshi)', '↑'],
      ]}
    />
    <Callout kind="exam">
      Bu qoida imtihonda eng ko'p so'raladi: <b>inelastic — narx va tushum bir tomonga; elastic — qarama-qarshi tomonga</b>.
      Laboratoriyadagi to'rtburchaklar bilan sinab ko'ring.
    </Callout>
    <BoxLink id="fyi-elasticities">FYI: A Few Elasticities from the Real World</BoxLink>
  </div>
);

const S51f = () => (
  <div className="prose-uz">
    <p>
      Chiziqli talab egri chizig'ining nishabi doimiy: Figure 4 da narx $1 oshsa, miqdor doim 2 ga kamayadi. Lekin{' '}
      <b>egiluvchanlik doimiy emas</b>: nishab — o'zgarishlar nisbati, egiluvchanlik — <i>foiz</i> o'zgarishlar nisbati.
    </p>
    <BookTable
      caption="Figure 4 jadvali: Q = 14 − 2P"
      head={['Price', 'Quantity', 'Total Revenue', 'Elasticity (midpoint)', 'Description']}
      rows={[
        ['$7', '0', '$0', '13.0 ($7→$6)', 'Elastic'],
        ['$6', '2', '$12', '3.7 ($6→$5)', 'Elastic'],
        ['$5', '4', '$20', '1.8 ($5→$4)', 'Elastic'],
        ['$4', '6', '$24', '1.0 ($4→$3)', 'Unit elastic'],
        ['$3', '8', '$24', '0.6 ($3→$2)', 'Inelastic'],
        ['$2', '10', '$20', '0.3 ($2→$1)', 'Inelastic'],
        ['$1', '12', '$12', '0.1 ($1→$0)', 'Inelastic'],
        ['$0', '14', '$0', '', ''],
      ]}
    />
    <p>
      Sabab — foizlar arifmetikasi. Narx past va miqdor katta bo'lganda, $1 narx oshishi — katta foiz, 2 dona kamayish — kichik
      foiz → kichik egiluvchanlik. Narx yuqori va miqdor kichik bo'lganda — aksincha. Tushum ham shunga mos: $1 dan $2 ga oshganda
      tushum oshadi (inelastic), $5 dan $6 ga — kamayadi (elastic), $3 va $4 da bir xil ($24).
    </p>
    <ElasticityLab start={[1, 2]} title="Figure 4 — chiziqli talab bo'ylab egiluvchanlik" />
    <p>Xulosa: chiziqli talab egri chizig'ining egiluvchanligi hech qachon doimiy emas; doimiy egiluvchanlikli egri chiziq — maxsus holat.</p>
  </div>
);

const S51g = () => (
  <div className="prose-uz">
    <p>
      <b>Daromad egiluvchanligi</b> — <T id="income-elasticity" />:
    </p>
    <M tex="\text{Income elasticity of demand} = \frac{\%\,\Delta\, Q^D}{\%\,\Delta\, \text{Income}}" display />
    <ul>
      <li>Normal tovarlarda <b>musbat</b>, inferior tovarlarda (avtobus) <b>manfiy</b>.</li>
      <li>
        Zaruratlarda (oziq-ovqat) kichik: <T id="engels-law" /> — oila boyigan sari daromadining ovqatga ketadigan ulushi
        kamayadi (E_I &lt; 1). Hashamatda (olmos, yelkanli qayiq) katta.
      </li>
    </ul>
    <p>
      <b>Kesishgan narx egiluvchanligi</b> — <T id="cross-price-elasticity" />:
    </p>
    <M tex="\text{Cross-price elasticity} = \frac{\%\,\Delta\, Q^D_{\text{good 1}}}{\%\,\Delta\, P_{\text{good 2}}}" display />
    <p>
      <b>Musbat</b> — o'rinbosarlar (hot dog qimmat → gamburger ko'proq), <b>manfiy</b> — to'ldiruvchilar (kompyuter qimmat →
      dastur kamroq).
    </p>
    <ElasticityCalculator />
  </div>
);

const S52a = () => (
  <div className="prose-uz">
    <p>
      <T id="price-elasticity-of-supply" /> taklif miqdori narxga qanchalik javob berishini o'lchaydi. U sotuvchilarning
      ishlab chiqarishni o'zgartirish <b>imkoniyatiga</b> bog'liq: sohildagi yer — noegiluvchan (Mark Twain: “Buy land,
      they're not making it anymore”); kitob, mashina, televizor — egiluvchan (zavod uzoqroq ishlashi mumkin).
    </p>
    <p>
      Eng muhim omil — <b>vaqt</b>. Qisqa muddatda firmalar smenalarni uzaytirishi mumkin, lekin zavod hajmini o'zgartira
      olmaydi. Uzoq muddatda yangi zavod quriladi, eskisi yopiladi, yangi firmalar kiradi, eskilari chiqadi — taklif ancha
      egiluvchan.
    </p>
  </div>
);

const S52b = () => (
  <div className="prose-uz">
    <M tex="E_s = \frac{\%\,\Delta\, Q^S}{\%\,\Delta\, P}" display />
    <p>
      Misol: sut $2.85 → $3.15, ishlab chiqarish 9,000 → 11,000 gallon. Midpoint: <M tex="\%\Delta P = 0.30/3.00 = 10\%" />,
      <M tex="\%\Delta Q = 2000/10000 = 20\%" />, <M tex="E_s = 2" /> — miqdor narxdan ikki barobar ko'proq o'zgaradi.
    </p>
  </div>
);

const S52c = () => (
  <div className="prose-uz">
    <p>
      Taklif egri chiziqlari ham besh turga bo'linadi (Figure 5): E = 0 — vertikal, E → ∞ — gorizontal. Yuqoridagi “Figures 1 &
      5” vidjetida <b>Supply</b> ni tanlang.
    </p>
    <p>
      Ba'zi bozorlarda egiluvchanlik egri chiziq bo'ylab <b>o'zgaradi</b> (Figure 6). Zavodlar sig'imi cheklangan bo'lsa, past
      miqdorlarda bo'sh quvvat bor: narxning ozgina oshishi ishlab chiqarishni keskin oshiradi — egiluvchan. Sig'im chegarasiga
      yaqinlashganda esa yangi zavod qurish kerak, buning uchun narx juda oshishi kerak — noegiluvchan.
    </p>
    <BookTable
      caption="Figure 6 raqamlari (midpoint)"
      head={["Narx o'zgarishi", "Miqdor o'zgarishi", 'Egiluvchanlik']}
      rows={[
        ['$3 → $4 (+29%)', '100 → 200 (+67%)', '≈ 2.3 — elastic'],
        ['$12 → $15 (+22%)', '500 → 525 (+5%)', '≈ 0.2 — inelastic'],
      ]}
    />
  </div>
);

const S53a = () => (
  <div className="prose-uz">
    <p>
      Siz Kanzaslik bug'doy fermerisiz. Universitet hosildorlikni <b>20%</b> oshiradigan yangi gibrid yaratdi. Uni ekasizmi? Bu
      kashfiyot sizni boyitadimi? Uch qadam: (1) gibrid <b>taklifga</b> ta'sir qiladi; (2) taklif <b>o'ngga</b>; (3) narx $3 → $2,
      miqdor 100 → 110.
    </p>
    <SupplyDemandGraph config={wheat} />
    <p>
      Bug'doy — asosiy oziq-ovqat, arzon va o'rinbosari kam, shuning uchun talab <b>noegiluvchan</b>. Noegiluvchan talabda narx
      tushishi tushumni kamaytiradi: <b>$300 → $220</b>. Yangi gibrid fermerlarni kambag'allashtirdi!
    </p>
    <p>
      Unda nega ular ekadi? Har bir fermer bozorning juda kichik qismi va narxni berilgan deb oladi (price taker): har qanday narxda
      ko'proq sotish yaxshiroq. Lekin hamma shunday qilsa, narx tushib, hammasi yutqazadi.
    </p>
    <p>
      Bu tarixiy o'zgarishni tushuntiradi: 1900 yilda AQShda <b>12 mln</b> kishi (ishchi kuchining 40%) fermada ishlagan, 2020 yilda —{' '}
      <b>3 mln</b> (2%). Texnologiya taklifni oshirdi, noegiluvchan talab tushumni tushirdi, odamlar fermerlikni tark etdi — lekin
      to'rt barobar ko'p aholini boqishdi. Shu sabab ba'zi davlat dasturlari fermerlarga <b>ekmaslik</b> uchun pul to'laydi: kam
      taklif → yuqori narx → yuqori jami tushum. Ammo bu iste'molchilar (qimmat ovqat) va soliq to'lovchilar hisobiga.
    </p>
    <Callout kind="uz">
      O'zbekistondagi g'alla yoki paxta haqida o'ylang: agar barcha fermer xo'jaliklari bir yilda hosilni keskin oshirsa va narx erkin
      bo'lsa, bu fermerlar uchun “yaxshi yangilik”mi? Javob talab egiluvchanligiga bog'liq — va eksport imkoniyatiga (9-bob).
    </Callout>
  </div>
);

const S53b = () => (
  <div className="prose-uz">
    <p>
      1970-yillarda OPEC neft taklifini birgalikda kamaytirib, narxni ko'tardi: 1973–74 yillarda real narx <b>50%</b> dan ko'proq,
      1979–81 yillarda <b>ikki barobar</b> oshdi. Lekin 1982–85 yillarda narx har yili ~10% tushdi, 1986 yilda hamkorlik buzilib,
      narx <b>45%</b> qulab tushdi; 1990 yilga kelib real narx 1970 yildagi darajaga qaytdi.
    </p>
    <p>
      Sabab — qisqa va uzoq muddatli egiluvchanlik farqi. <b>Qisqa muddatda</b> neft zaxiralari va qazib olish quvvati tez
      o'zgarmaydi, odatlar ham — ikkala egri chiziq tik, kichik siljish narxni ko'p oshiradi. <b>Uzoq muddatda</b> OPECdan
      tashqaridagi ishlab chiqaruvchilar ko'proq qidiradi va qazadi, iste'molchilar tejamkor mashinaga o'tadi — egri chiziqlar
      yotiq, xuddi o'sha siljish narxni kam oshiradi.
    </p>
    <SupplyDemandGraph config={opec} />
    <p>
      XXI asrning birinchi yigirma yilida neft narxi yana keskin o'zgardi, lekin asosiy sabab OPEC emas: jahon iqtisodiyotidagi
      boom va inqirozlar (talab) hamda fracking texnologiyasi (taklif). Kelajakda esa asosiy kuch — iqlim o'zgarishi sabab qazilma
      yoqilg'idan voz kechish.
    </p>
  </div>
);

const S53c = () => (
  <div className="prose-uz">
    <p>
      Hukumat narkotiklarning mamlakatga kirishini to'xtatishga (interdiction) milliardlab dollar sarflaydi. Bu jinoyatni kamaytiradimi?
      Interdiction <b>sotuvchilarga</b> ta'sir qiladi: xarajat oshadi, taklif chapga siljiydi, narx oshadi, miqdor kamayadi —
      iste'mol kamayadi.
    </p>
    <p>
      Lekin giyohvandlar yuqori narx sabab kamdan-kam tashlaydi — talab <b>noegiluvchan</b>. Demak narx miqdordan ko'proq foizga oshadi
      va giyohvandlar <b>jami ko'proq pul</b> to'laydi. Pul topish uchun jinoyat oshishi mumkin. (Bunga ijro amaliyotining ayrim
      jamoalarga yetkazadigan zarari qo'shilmagan.)
    </p>
    <SupplyDemandGraph config={drugs} />
    <p>
      Muqobil — <b>talabni</b> kamaytirish (drug education, ba'zi yengil narkotiklarni qonuniylashtirish): talab chapga siljiydi, narx
      ham, miqdor ham, jami to'lov ham kamayadi — ham iste'mol, ham jinoyat kamayadi.
    </p>
    <p>
      Interdiction tarafdorlari: uzoq muddatda talab egiluvchanroq bo'lishi mumkin — yuqori narx yoshlarni sinab ko'rishdan to'xtatadi va
      vaqt o'tib giyohvandlar kamayadi. Unda interdiction qisqa muddatda jinoyatni oshirib, uzoq muddatda kamaytirishi mumkin.
    </p>
    <BoxLink id="news-rideshare">In the News: Elasticity of Supply and Demand in the Ride-share Market</BoxLink>
  </div>
);

const S54 = () => (
  <div className="prose-uz">
    <p>
      Eski hazil: “to'tiqush ham 'supply and demand’ deyishni o'rgansa, iqtisodchi bo'ladi”. Bu ikki bob shuni ko'rsatdiki, unda katta
      haqiqat bor: talab, taklif va egiluvchanlik — iqtisodiyotdagi hodisa va siyosatlarni tahlil qilishning eng foydali vositalari.
      Siz iqtisodchi (yoki kamida yaxshi o'qigan to'tiqush) bo'lish yo'lidasiz.
    </p>
  </div>
);

function FYIElasticities() {
  return (
    <div className="prose-uz">
      <p>Iqtisodchilar bozor ma'lumotlaridan statistik usullar bilan egiluvchanliklarni baholaydi. Turli tadqiqotlardan:</p>
      <BookTable
        head={['Good', 'Price elasticity of demand', '']}
        rows={[
          ['Eggs', '0.1', 'Juda noegiluvchan'],
          ['Healthcare', '0.2', ''],
          ['Cigarettes', '0.4', ''],
          ['Rice', '0.5', ''],
          ['Housing', '0.7', ''],
          ['Beef', '1.6', ''],
          ['Peanut Butter', '1.7', ''],
          ['Restaurant Meals', '2.3', ''],
          ['Cheerios', '3.7', ''],
          ['Mountain Dew', '4.4', 'Juda egiluvchan'],
        ]}
      />
      <p>
        Bu raqamlarga ehtiyotkorlik bilan qarang: statistik usullar (<T id="econometrics" />) dunyo haqida farazlarga tayanadi, ular har doim
        ham to'g'ri bo'lmasligi mumkin. Bundan tashqari, egiluvchanlik egri chiziqning har bir nuqtasida bir xil bo'lishi shart emas.
        Shuning uchun turli tadqiqotlar bir tovar uchun turli egiluvchanlik topsa, ajablanmang.
      </p>
      <Callout kind="tip">E'tibor bering: tor ta'riflangan brendlar (Cheerios, Mountain Dew) eng egiluvchan, asosiy zaruratlar (tuxum, tibbiyot) eng noegiluvchan — 5-1a dagi omillarning aynan isboti.</Callout>
    </div>
  );
}

function RideShare() {
  return (
    <div className="prose-uz">
      <Source>Austan Goolsbee, “Passengers May Pay a Lot More. Drivers Won't Accept Much Less.”, New York Times, 2019 — qisqacha mazmuni.</Source>
      <p>
        Uber va Lyft ko'p yillar zarar ko'rgan. Kelajakda foyda qayerdan keladi — yo'lovchilar ko'proq to'laydimi yoki haydovchilar
        kamroq oladimi? Goolsbee javobi: “relative price sensitivity” — nisbiy narx sezgirligi.
      </p>
      <ul>
        <li>
          Yo'lovchilar <b>noegiluvchan</b>: narx 10% oshsa (surge pricing), talab atigi ~5% kamayadi.
        </li>
        <li>
          Haydovchilar <b>juda egiluvchan</b>: maosh 10% oshsa, ish soatlarini 20% oshiradi — yo'lovchilar reaksiyasidan to'rt barobar
          kuchli. Bozorga kirish to'siqsiz: maosh oshsa, yangi haydovchilar kiradi va o'rtacha maoshni “outside option” darajasiga
          qaytaradi (1848 yil Kaliforniya oltin isitmasi: konchilar daromadi $20 dan $3 ga tushdi, chunki juda ko'p odam keldi).
        </li>
        <li>
          Xulosa: haydovchilar to'rt barobar sezgirroq bo'lgani uchun narx yukining taxminan <b>80%</b> i yo'lovchilarga, <b>20%</b> i
          haydovchilarga tushadi — bu 6-bobdagi tax incidence mantiqining o'zi.
        </li>
      </ul>
      <Callout kind="tip" title="Muhokama uchun savollar">
        <ol>
          <li>Ride-share narxi 10% oshsa, siz qanchalik kam foydalanardingiz? Sizning egiluvchanligingiz qancha?</li>
          <li>Nega bu bozorda taklif talabdan egiluvchanroq deb o'ylaysiz?</li>
        </ol>
      </Callout>
    </div>
  );
}

const Calc = () => <ElasticityCalculator />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    "**Price elasticity of demand** ni ta'riflash va uni belgilovchi to'rt omilni bilish",
    "Ikki nuqta orasidagi egiluvchanlikni **midpoint method** bilan hisoblash",
    "Besh xil talab va taklif egri chizig'ini (perfectly inelastic → perfectly elastic) chizish",
    "Egiluvchanlik va **total revenue** orasidagi bog'liqlikni qo'llash; chiziqli talab bo'ylab egiluvchanlik o'zgarishini tushuntirish",
    "**Income** va **cross-price elasticity** ishorasidan tovar turini aniqlash",
    "Fermerlik, OPEC va narkotiklar misollarini talab–taklif–egiluvchanlik bilan tahlil qilish",
  ],
  sections: [
    { id: "s-5-1a", code: "5-1a", titleEn: "The Price Elasticity of Demand and Its Determinants", titleUz: "Talab egiluvchanligi va uning omillari", Body: S51a, check: checks["s-5-1a"] },
    { id: "s-5-1b", code: "5-1b", titleEn: "The Price Elasticity of Demand, with Numbers", titleUz: "Talab egiluvchanligi raqamlarda", Body: S51b },
    { id: "s-5-1c", code: "5-1c", titleEn: "The Midpoint Method", titleUz: "O'rta nuqta usuli", Body: S51c, check: checks["s-5-1c"] },
    { id: "s-5-1d", code: "5-1d", titleEn: "The Variety of Demand Curves", titleUz: "Talab egri chiziqlarining xilma-xilligi", Body: S51d, check: checks["s-5-1d"] },
    { id: "s-5-1e", code: "5-1e", titleEn: "Total Revenue and the Price Elasticity of Demand", titleUz: "Umumiy tushum va egiluvchanlik", Body: S51e, check: checks["s-5-1e"] },
    { id: "s-5-1f", code: "5-1f", titleEn: "Elasticity and Total Revenue along a Linear Demand Curve", titleUz: "Chiziqli talab bo'ylab egiluvchanlik va tushum", Body: S51f, check: checks["s-5-1f"] },
    { id: "s-5-1g", code: "5-1g", titleEn: "Other Demand Elasticities", titleUz: "Boshqa talab egiluvchanliklari", Body: S51g, check: checks["s-5-1g"] },
    { id: "s-5-2a", code: "5-2a", titleEn: "The Price Elasticity of Supply and Its Determinants", titleUz: "Taklif egiluvchanligi va uning omillari", Body: S52a },
    { id: "s-5-2b", code: "5-2b", titleEn: "The Price Elasticity of Supply, with Numbers", titleUz: "Taklif egiluvchanligi raqamlarda", Body: S52b },
    { id: "s-5-2c", code: "5-2c", titleEn: "The Variety of Supply Curves", titleUz: "Taklif egri chiziqlarining xilma-xilligi", Body: S52c, check: checks["s-5-2b"] },
    { id: "s-5-3a", code: "5-3a", titleEn: "Can Good News for Farming Be Bad News for Farmers?", titleUz: "Fermerlik uchun yaxshi yangilik fermerlar uchun yomon bo'lishi mumkinmi?", Body: S53a, check: checks["s-5-3a"] },
    { id: "s-5-3b", code: "5-3b", titleEn: "Why Has OPEC Failed to Keep the Price of Oil High?", titleUz: "Nega OPEC neft narxini yuqori ushlab tura olmadi?", Body: S53b, check: checks["s-5-3b"] },
    { id: "s-5-3c", code: "5-3c", titleEn: "Does Drug Interdiction Increase or Decrease Drug-Related Crime?", titleUz: "Narkotiklarga qarshi kurash jinoyatni oshiradimi yoki kamaytiradimi?", Body: S53c, check: checks["s-5-3c"] },
    { id: "s-5-4", code: "5-4", titleEn: "Conclusion", titleUz: "Xulosa", Body: S54 },
  ],
  examTraps: [
    { title: "Midpoint usuli", body: "Foizni **o'rtachaga** bo'ling: \\((X_2 - X_1)/[(X_1 + X_2)/2]\\). Javobni musbat son bilan yozing." },
    { title: "Elasticity ≠ slope", body: "Chiziqli talabda nishab doimiy, egiluvchanlik esa yo'q: yuqorida elastic, pastda inelastic, o'rtada unit." },
    { title: "Tushum qoidasi", body: "Inelastic: P ↑ → TR ↑. Elastic: P ↑ → TR ↓. Unit: TR o'zgarmaydi." },
    { title: "Ishora muhim bo'lgan holatlar", body: "**Income elasticity**: manfiy → inferior. **Cross-price**: musbat → substitutes, manfiy → complements. Narx egiluvchanligida ishora tashlanadi." },
    { title: "Vaqt omili", body: "Talab ham, taklif ham **uzoq muddatda** egiluvchanroq (OPEC, benzin, ijara)." },
    { title: "Fermerlik paradoksi", body: "Taklif ↑ + inelastic demand → tushum ↓. Lekin individual fermer price taker bo'lgani uchun baribir texnologiyani qabul qiladi." },
  ],
  mistakes: [
    { wrong: "“Tik talab egri chizig'i — egiluvchan.”", right: "Tik — **noegiluvchan** (I harfi). Yotiq — egiluvchan." },
    { wrong: "“E = ΔQ/ΔP.”", right: "E — **foiz** o'zgarishlar nisbati: %ΔQ/%ΔP." },
    { wrong: "“Narx oshsa tushum har doim oshadi.”", right: "Faqat talab noegiluvchan bo'lsa." },
    { wrong: "“Income elasticity 0.5 — inferior tovar.”", right: "Musbat — normal (zarurat). Inferior — **manfiy**." },
    { wrong: "“Kesishgan egiluvchanlik musbat — to'ldiruvchilar.”", right: "Musbat — **o'rinbosarlar**." },
    { wrong: "“Mutlaqo egiluvchan talab — vertikal chiziq.”", right: "Mutlaqo egiluvchan — **gorizontal**; vertikal — mutlaqo noegiluvchan." },
  ],
  boxes: [
    { id: "fyi-elasticities", kind: "FYI", titleEn: "A Few Elasticities from the Real World", titleUz: "Haqiqiy dunyodagi ba'zi egiluvchanliklar", Body: FYIElasticities },
    { id: "news-rideshare", kind: "In the News", titleEn: "Elasticity of Supply and Demand in the Ride-share Market", titleUz: "Ride-share bozorida talab va taklif egiluvchanligi", Body: RideShare },
  ],
  summary: [
    "**Price elasticity of demand** talab miqdorining narxga sezgirligini o'lchaydi. Yaqin o'rinbosarlar bo'lsa, tovar hashamat bo'lsa, bozor tor ta'riflansa yoki xaridorlarda moslashish uchun ko'p vaqt bo'lsa, talab egiluvchanroq.",
    "U talab miqdorining foiz o'zgarishini narxning foiz o'zgarishiga bo'lib hisoblanadi. Miqdor narxdan kamroq o'zgarsa — E < 1, **inelastic**; ko'proq o'zgarsa — E > 1, **elastic**.",
    "**Total revenue** — narx × sotilgan miqdor. Noegiluvchan talabda tushum narx bilan bir yo'nalishda, egiluvchan talabda qarama-qarshi yo'nalishda harakat qiladi.",
    "**Income elasticity** talab miqdorining daromadga, **cross-price elasticity** esa boshqa tovar narxiga sezgirligini o'lchaydi.",
    "**Price elasticity of supply** taklif miqdorining narxga sezgirligini o'lchaydi; u ko'pincha vaqtga bog'liq — aksariyat bozorlarda uzoq muddatda egiluvchanroq.",
    "U taklif miqdorining foiz o'zgarishini narxning foiz o'zgarishiga bo'lib hisoblanadi: E < 1 — inelastic, E > 1 — elastic.",
    "Talab va taklif vositalari ko'p bozorlarga qo'llanadi: bu bob bug'doy, neft va noqonuniy narkotiklar bozorlarini tahlil qildi.",
  ],
  widgets: { calc: Calc },
  gallery: [
    { title: "Elasticity Lab: midpoint va umumiy tushum", Component: () => <ElasticityLab /> },
    { title: "Egiluvchanlikning besh turi (talab va taklif)", Component: () => <ElasticityCategories /> },
    { title: "Midpoint kalkulyatori", Component: () => <ElasticityCalculator /> },
  ],
};
