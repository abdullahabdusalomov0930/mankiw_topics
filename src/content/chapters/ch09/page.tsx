import { InternationalTradeGraph } from '../../../components/graphs/InternationalTradeGraph';
import { Callout } from '../../../components/ui/Kit';
import { AskExperts, BookTable, BoxLink, Source } from '../../../components/ui/Lesson';
import { T } from '../../../components/ui/Term';
import { demandThrough, supplyThrough } from '../../../lib/econ';
import type { ChapterPageContent } from '../../types';
import { checks } from './quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        Kiyimingiz yorlig'iga qarang: “Made in China”, “Made in Bangladesh”, “Made in Turkey”… yoki “Made in Uzbekistan”. Bir asr oldin AQShda
        kiyimning deyarli hammasi ichkarida tikilgan. Xorijiy fabrikalar arzonroq ishlab chiqara boshlagach, amerika fabrikalari yopildi, ishchilar
        ishsiz qoldi.
      </p>
      <p>
        Xalqaro savdo farovonlikka qanday ta'sir qiladi? Kim yutadi, kim yutqazadi va yutuqlar yo'qotishlardan kattami? 3-bob savdo nima uchun
        foydali ekanini comparative advantage bilan tushuntirdi. Bu bob talab, taklif va surplus vositalari bilan <b>kim</b> va <b>qancha</b>{' '}
        yutishini o'lchaydi.
      </p>
    </div>
  );
}

const S91a = () => (
  <div className="prose-uz">
    <p>
      Xayoliy <b>Isoland</b> mamlakatining to'qimachilik bozori. Hukumat farmoni bilan import va eksport taqiqlangan — bozorda faqat ichki xaridor
      va sotuvchilar. Narx ichki talab va taklifni tenglashtiradi (Figure 1).
    </p>
    <p>
      Yangi prezident Olivia Openminded iqtisodchilarga uch savol beradi: (1) savdo ochilsa narx va miqdor qanday o'zgaradi? (2) kim yutadi, kim
      yutqazadi va yutuqlar yo'qotishlardan kattami? (3) tarif (import solig'i) yangi siyosatning qismi bo'lishi kerakmi?
    </p>
  </div>
);

const S91b = () => (
  <div className="prose-uz">
    <p>
      Isoland eksportchi bo'ladimi yoki importchi? Iqtisodchilar ichki narxni boshqa mamlakatlardagi narx — <T id="world-price" /> bilan
      solishtiradi. Jahon narxi yuqori bo'lsa, ishlab chiqaruvchilar tashqarida sotishga intiladi — <b>eksport</b>. Past bo'lsa, iste'molchilar
      xorijdan sotib oladi — <b>import</b>.
    </p>
    <p>
      Bu aslida comparative advantage savoli: <T id="domestic-price" /> — tovarning Isolanddagi imkoniyat xarajati. Ichki narx past — Isoland
      to'qimachilikda comparative advantage ga ega; yuqori — boshqa mamlakatlar ega.
    </p>
  </div>
);

const S92a = () => (
  <div className="prose-uz">
    <p>
      Soddalashtirish: Isoland jahon bozoriga nisbatan kichik — <T id="small-economy" />. U jahon narxini o'zgartira olmaydi, price taker. Bu farazsiz
      ham xulosalar o'zgarmaydi, lekin tahlil soddalashadi.
    </p>
    <p>
      Savdo ochilgach ichki narx jahon narxiga ko'tariladi (hech bir sotuvchi undan kamga sotmaydi, hech bir xaridor undan ko'p to'lamaydi). Ichki
      taklif miqdori talab miqdoridan ko'p — farq eksport qilinadi. Jahon narxidagi gorizontal chiziq — dunyoning Isoland tovariga talabi
      (mutlaqo egiluvchan).
    </p>
    <InternationalTradeGraph worldPrice={7} title="Figure 2 — Eksport qiluvchi mamlakat (sariq chiziqni torting)" />
    <BookTable
      head={['', 'Before Trade', 'After Trade', 'Change']}
      rows={[
        ['Consumer Surplus', 'A + B', 'A', '−B'],
        ['Producer Surplus', 'C', 'B + C + D', '+(B + D)'],
        ['Total Surplus', 'A + B + C', 'A + B + C + D', '**+D**'],
      ]}
    />
    <ul>
      <li>Mamlakat savdoga ochilib eksportchi bo'lsa, ichki <b>ishlab chiqaruvchilar yutadi</b>, ichki <b>iste'molchilar yutqazadi</b>.</li>
      <li>Savdo xalq farovonligini oshiradi: yutganlarning yutug'i yutqazganlarning yo'qotishidan katta.</li>
    </ul>
  </div>
);

const S92b = () => (
  <div className="prose-uz">
    <p>
      Endi savdosiz ichki narx jahon narxidan <b>yuqori</b>. Savdo ochilgach narx tushadi, ichki talab taklifdan ko'p — farq import qilinadi. Jahon
      narxidagi gorizontal chiziq — dunyoning taklifi.
    </p>
    <InternationalTradeGraph worldPrice={3} title="Figure 3 — Import qiluvchi mamlakat" />
    <BookTable
      head={['', 'Before Trade', 'After Trade', 'Change']}
      rows={[
        ['Consumer Surplus', 'A', 'A + B + D', '+(B + D)'],
        ['Producer Surplus', 'B + C', 'C', '−B'],
        ['Total Surplus', 'A + B + C', 'A + B + C + D', '**+D**'],
      ]}
    />
    <p>
      Bu 1-bobdagi “trade can make everyone better off” tamoyilini aniqlashtiradi: savdo pirogni kattalashtiradi, yutganlar yutqazganlarni
      kompensatsiya qilib, baribir yutishi <b>mumkin</b>. Lekin amalda kompensatsiya kamdan-kam bo'ladi — ba'zilar kichikroq bo'lak oladi. Shuning
      uchun savdo siyosati bahsli: yutqazganlar (masalan, mahalliy ishlab chiqaruvchilar) yaxshiroq uyushgan bo'lsa, tarif yoki kvota uchun lobbi
      qiladi.
    </p>
  </div>
);

const S92c = () => (
  <div className="prose-uz">
    <p>
      <T id="tariff" /> — import tovariga soliq. Isoland eksportchi bo'lsa, tarif ahamiyatsiz (hech kim import qilmaydi). Importchi bo'lsa: tarif
      import narxini jahon narxidan tarif miqdoricha oshiradi, xorijiy raqobatchilar bilan raqobatlashadigan ichki ishlab chiqaruvchilar ham shu narxda
      sotadi. Narx savdosiz muvozanatga yaqinlashadi.
    </p>
    <InternationalTradeGraph mode="tariff" worldPrice={3} tariff={1} />
    <BookTable
      head={['', 'Before Tariff', 'After Tariff', 'Change']}
      rows={[
        ['Consumer Surplus', 'A + B + C + D + E + F', 'A + B', '−(C + D + E + F)'],
        ['Producer Surplus', 'G', 'C + G', '+C'],
        ['Government Revenue', 'None', 'E', '+E'],
        ['Total Surplus', 'A + B + C + D + E + F + G', 'A + B + C + E + G', '**−(D + F)**'],
      ]}
    />
    <p>
      Tarif DWL yaratadi, chunki har qanday soliq kabi rag'batlarni buzadi: (1) <b>D</b> — ichki ishlab chiqaruvchilar jahon narxidan qimmatga
      tushadigan birliklarni ham ishlab chiqaradi (Q₁ˢ → Q₂ˢ) — ortiqcha ishlab chiqarish; (2) <b>F</b> — iste'molchilar jahon narxidan ko'proq
      qadrlaydigan birliklarni ham olmaydi (Q₁ᴰ → Q₂ᴰ) — kam iste'mol.
    </p>
    <BoxLink id="fyi-quotas">FYI: Import Quotas: Another Way to Restrict Trade</BoxLink>
  </div>
);

const S92d = () => (
  <div className="prose-uz">
    <p>Isoland iqtisodchilarining prezidentga maktubi (qisqacha):</p>
    <div className="postit tape my-6 -rotate-[0.5deg] bg-postit-yellow p-5 pt-6">
      <p className="font-hand text-[17px] font-semibold text-[#1f4fb8]">Hurmatli Prezident Openminded,</p>
      <ol className="mt-2 list-decimal space-y-2 pl-5 text-[15px]">
        <li>
          <b>Narx va miqdor:</b> savdo ochilsa, ichki narx jahon narxiga tenglashadi. Ichki narx past bo'lsa — narx oshadi, biz kamroq iste'mol qilib,
          ko'proq ishlab chiqaramiz va eksport qilamiz (bizda comparative advantage bor). Yuqori bo'lsa — narx tushadi, import qilamiz.
        </li>
        <li>
          <b>Kim yutadi:</b> narx oshsa — ishlab chiqaruvchilar, tushsa — iste'molchilar. Ikkala holda yutuq yo'qotishdan katta — erkin savdo umumiy
          farovonlikni oshiradi.
        </li>
        <li>
          <b>Tarif:</b> faqat importchi bo'lsak ta'sir qiladi; u bizni savdosiz muvozanatga yaqinlashtiradi va DWL yaratadi. Ishlab chiqaruvchilar va
          davlat yutadi, lekin iste'molchilar ko'proq yo'qotadi. Samaradorlik nuqtai nazaridan eng yaxshisi — tarifsiz savdo.
        </li>
      </ol>
      <p className="mt-3 text-[15px]">
        Yodda tuting: erkin savdo yutqazuvchilarni ham yaratadi — ijtimoiy himoya tizimi ularning zararini yumshatsin.
      </p>
      <p className="mt-2 font-hand text-[16px] font-semibold text-[#1f4fb8]">Sodiq xizmatkorlaringiz, Isoland iqtisodchilari</p>
    </div>
  </div>
);

const S92e = () => (
  <div className="prose-uz">
    <p>Standart tahlil (talab, taklif, surplus) erkin savdo foydasini ko'rsatdi. Lekin savdoning qo'shimcha foydalari ham bor:</p>
    <ul>
      <li>
        <b>Xilma-xillik.</b> Turli mamlakat tovarlari bir xil emas (nemis pivosi ≠ amerika pivosi). Savdo tanlovni kengaytiradi.
      </li>
      <li>
        <b><T id="economies-of-scale" label="Economies of scale" />.</b> Ba'zi tovarlar faqat katta hajmda arzon ishlab chiqariladi; kichik ichki bozor
        bunga imkon bermaydi, jahon bozori beradi.
      </li>
      <li>
        <b>Raqobat.</b> Xorijiy raqobatdan himoyalangan firma bozor kuchiga ega bo'lib, narxni oshiradi. Savdo raqobatni kuchaytiradi — ko'rinmas qo'lga
        imkon beradi.
      </li>
      <li>
        <b>Unumdorlik.</b> Eng unumdor firmalar bozorini kengaytiradi, eng kam unumdorlari chiqib ketadi — umumiy unumdorlik oshadi.
      </li>
      <li>
        <b>G'oyalar oqimi.</b> Texnologiya ko'pincha tovarlar bilan birga keladi: kambag'al qishloq xo'jaligi mamlakati kompyuter inqilobini tezroq o'rganish
        uchun avvalo kompyuter sotib oladi.
      </li>
    </ul>
  </div>
);

const S93a = () => (
  <div className="prose-uz">
    <p>
      Openminded to'qimachilik kompaniyalarining fikrini so'raydi — ular, albatta, himoya talab qiladi. Ularning argumentlari va iqtisodchilarning
      javoblari:
    </p>
    <p>
      <b>“Erkin savdo ish o'rinlarini yo'q qiladi.”</b> To'qimachilik ishchilari ishsiz qolishi mumkin — bu haqiqat. Lekin savdo yangi ish o'rinlarini
      ham yaratadi: Isoland import uchun to'lagan pul boshqa mamlakatlarga Isoland tovarlarini sotib olish imkonini beradi, ishchilar comparative advantage
      sohalariga o'tadi. O'tish og'ir bo'lishi mumkin — ijtimoiy himoya yordam beradi. “Hamma narsani chet elda arzonroq ishlab chiqarish mumkin”
      degan e'tirozga javob: yutuq <b>absolute</b> emas, <b>comparative</b> advantage ga asoslanadi.
    </p>
  </div>
);
const S93b = () => (
  <div className="prose-uz">
    <p>
      <b>“Bu soha milliy xavfsizlik uchun muhim.”</b> Po'lat qurol uchun kerak; urush ta'minotni uzsa-chi? Iqtisodchilar haqiqiy xavf bo'lganda himoyani
      o'rinli deb tan oladi. Lekin bu argument juda oson ishlatiladi: himoya foydali bo'lgani uchun firmalar o'z rolini bo'rttiradi. Kim argument
      keltirayotganiga qarang — harbiylar ham iste'molchi va arzon po'latdan yutadi.
    </p>
  </div>
);
const S93c = () => (
  <div className="prose-uz">
    <p>
      <b>“Yosh sohani vaqtincha himoya qilish kerak.”</b> Iqtisodchilar shubhali: hukumat qaysi soha kelajakda foydali bo'lishini aniqlashi kerak —
      “picking winners” juda qiyin, siyosiy jarayon esa kuchli lobbili sohalarni rag'batlantiradi va “vaqtinchalik” siyosat doimiy bo'ladi. Printsipial
      e'tiroz ham bor: soha haqiqatan uzoq muddatda foydali bo'lsa, egalari vaqtinchalik zararga o'zi chidashi mumkin — ko'p startaplar shunday qiladi.
    </p>
  </div>
);
const S93d = () => (
  <div className="prose-uz">
    <p>
      <b>“Raqobat adolatsiz.”</b> Qo'shni davlat o'z to'qimachiligini subsidiyalasa-chi? Isoland ishlab chiqaruvchilari zarar ko'radi, lekin iste'molchilar
      arzon narxdan yutadi — ularning yutug'i katta. Subsidiyani qo'shnining soliq to'lovchilari to'laydi. Kitob hazili: Isoland qo'shnisiga{' '}
      <b>rahmat xati</b> yuborsin.
    </p>
  </div>
);
const S93e = () => (
  <div className="prose-uz">
    <p>
      <b>“Himoya — muzokaradagi koziri.”</b> Isoland Neighborland bug'doy tarifini olib tashlamasa, to'qimachilikka tarif qo'yaman deb tahdid qilishi
      mumkin. Ish bersa — savdo erkinroq. Ishlamasa, ikki yomon tanlov: tarifni joriy qilib o'z farovonligini kamaytirish (“o'z oyog'iga otish”) yoki
      orqaga chekinib obro' yo'qotish.
    </p>
    <BoxLink id="cs-wto">Case Study: Trade Agreements and the World Trade Organization</BoxLink>
    <BoxLink id="news-development">In the News: Trade as a Tool for Economic Development</BoxLink>
  </div>
);

const S94 = () => (
  <div className="prose-uz">
    <p>
      Jamoatchilik savdo haqida ikkilanadi, iqtisodchilar esa uni deyarli bir ovozdan qo'llab-quvvatlaydi. AQShning 50 shtati — erkin savdoning tirik
      tajribasi: Florida apelsin, Texas neft, Kaliforniya vino ishlab chiqaradi va ular o'rtasida savdo cheklanmagan. Faqat o'z shtatida ishlab chiqarilgan
      narsani iste'mol qilsa, amerikaliklar bugungi turmush darajasiga erisha olmasdi.
    </p>
    <Callout kind="tip" title="Masal: ixtirochi Isabel">
      Openminded savdoni ochmadi. Bir kuni Isabel Inventor to'qimani juda arzon ishlab chiqarish usulini topdi: unga faqat bug'doy kerak, ishchi kuchi deyarli
      kerak emas. Hamma uni daho deb maqtadi: kiyim arzonladi, to'qimachilar boshqa sohalarga o'tdi, ba'zilari Isabel uchun bug'doy yetishtira boshladi. Bir
      necha yil o'tib jurnalist fabrikaga yashirincha kirdi va ko'rdi: Isabel hech narsa ishlab chiqarmayapti — u bug'doyni chet elga olib chiqib, to'qimaga
      almashtiryapti! Hukumat fabrikani yopdi, narxlar oshdi, ishchilar to'qimachilikka qaytdi, turmush darajasi tushdi. Isabel qamoqqa tushdi. Axir u
      ixtirochi emas, shunchaki iqtisodchi edi — u faqat <b>savdodan yutuqni</b> kashf etgandi.
    </Callout>
  </div>
);

function Quotas() {
  return (
    <div className="prose-uz">
      <p>
        Tariflardan tashqari mamlakatlar import miqdorini cheklashi mumkin — <T id="import-quota" />. Xulosa: kvota tarifga juda o'xshaydi. Ikkalasi ham
        importni kamaytiradi, ichki narxni oshiradi, iste'molchilarga zarar, ishlab chiqaruvchilarga foyda keltiradi va DWL yaratadi.
      </p>
      <p>
        Yagona farq: tarif davlatga <b>tushum</b> beradi, kvota esa import <b>litsenziyasi egalariga</b> surplus beradi — ular jahon narxida sotib olib,
        ichki narxda sotadi. Agar davlat litsenziyalarni shu farqqa teng narxda sotsa, kvota aynan tarifdek ishlaydi.
      </p>
      <p>
        Amalda litsenziyalar kamdan-kam sotiladi. Masalan, AQSh ba'zan Yaponiyaga avtomobil eksportini “ixtiyoriy” cheklash uchun bosim qilgan — litsenziyalarni
        Yaponiya hukumati yapon firmalariga bergan va surplus ularga ketgan. AQSh farovonligi nuqtai nazaridan bu tarifdan ham yomonroq. Yuqoridagi tarif
        grafikida “Import quota” ni tanlang.
      </p>
    </div>
  );
}

function WTO() {
  return (
    <div className="prose-uz">
      <p>
        Erkin savdoga ikki yo'l bor: <T id="unilateral-multilateral" label="unilateral" /> (o'zi cheklovlarni olib tashlash — XIX asr Britaniya, keyinroq Chili,
        Janubiy Koreya) va <b>multilateral</b> (boshqalar bilan kelishib).
      </p>
      <ul>
        <li>
          <b>NAFTA</b> (1993) AQSh, Meksika va Kanada o'rtasidagi to'siqlarni kamaytirdi; yangilangan versiyasi — USMCA (2020).
        </li>
        <li>
          <b>GATT</b> — Ikkinchi jahon urushidan keyin boshlangan muzokaralar (Buyuk depressiya davridagi yuqori tariflarga javob). O'rtacha tarif 20% dan
          ortiqdan 2000 yilga kelib 5% dan pastga tushdi.
        </li>
        <li>
          <T id="wto" /> (1995, Jeneva) GATT qoidalarini nazorat qiladi; 2021 yilda 164 a'zo, jahon savdosining 98% i.
        </li>
        <li>
          Yo'l bir tomonlama emas: Trump ma'muriyati davrida AQSh Xitoy, EI va boshqalarga tariflarni bir tomonlama oshirdi; javob tariflari ham bo'ldi. 2020
          yil oxirida AQShning Xitoydan importining yarmidan ko'pi ~20% tarifga tortildi (va aksincha).
        </li>
      </ul>
      <p>
        Multilateral yondashuvning afzalligi: u chet eldagi cheklovlarni ham kamaytiradi va siyosiy jihatdan osonroq — Isoland to'qimachilari qarshi bo'lsa ham,
        Neighborland bug'doy tarifini kamaytirsa, Isoland bug'doy fermerlari bitimni qo'llab-quvvatlaydi. Kamchiligi: muzokaralar barbod bo'lsa, savdo
        unilateral yo'ldagidan ham cheklanganroq bo'lishi mumkin.
      </p>
      <AskExperts title="Trade Deals and Tariffs" source="IGM, 2014" statement="Past major trade deals have benefited most Americans." agree={93} uncertain={7} disagree={0} />
      <AskExperts
        title="Trade Deals and Tariffs"
        source="IGM, 2013"
        statement="Refusing to liberalize trade unless partner countries adopt new labor or environmental rules is a bad policy, because even if the new standards would reduce distortions on some dimensions, such a policy involves threatening to maintain large distortions in the form of restricted trade."
        agree={49}
        uncertain={26}
        disagree={25}
      />
      <AskExperts title="Trade Deals and Tariffs" source="IGM, 2019" statement="The incidence of the latest round of U.S. import tariffs is likely to fall primarily on American households." agree={86} uncertain={14} disagree={0} />
      <AskExperts
        title="Trade Deals and Tariffs"
        source="IGM, 2019"
        statement="The impact of the tariffs—and any Chinese countermeasures—on U.S. prices and employment is likely to be felt most heavily by lower income groups and regions."
        agree={75}
        uncertain={25}
        disagree={0}
      />
    </div>
  );
}

function Development() {
  return (
    <div className="prose-uz">
      <Source>Arthur C. Brooks, “Andy Warhol's Guide to Public Policy”, New York Times, 2015 — qisqacha mazmuni.</Source>
      <ul>
        <li>
          Andy Warhol: “I like boring things.” Muallif fikricha, yaxshi siyosat ham ko'pincha “zerikarli”: bezgakdan himoya qiluvchi arzon pashshaxona to'rlari,
          bolalarni maktabga kelishga undash — va eng muhimi, <b>savdo</b>.
        </li>
        <li>
          So'nggi yigirma yildan ortiq vaqt davomida jahon qashshoqlik darajasi har yili ~1% ga kamaygan — yiliga ~70 mln kishi; 1990 yildan beri ~1 mlrd kishi
          qashshoqlikdan chiqqan. Asosiy sabab — BMT yoki yordam emas, ochiq rivojlanayotgan iqtisodiyotlardagi savdo.
        </li>
        <li>“Made in China” krujkangiz 1980-yillardan beri 680 mln xitoylikni mutlaq qashshoqlikdan chiqargan jarayonning bir qismi.</li>
        <li>
          Muallif: ekspluatatsiya va ekologiya — jiddiy masalalar, lekin protektsionizm javob emas; Jahon banki va LIS ma'lumotlariga ko'ra, so'nggi 20 yilda
          jahon tengsizligi asosan kamaygan.
        </li>
      </ul>
      <Callout kind="tip" title="Muhokama uchun savollar">
        <ol>
          <li>Doim ishlatadigan qaysi buyumingiz chet elda ishlab chiqarilgan? Kim yutdi — siz yoki xorijiy ishlab chiqaruvchi?</li>
          <li>AQSh va kambag'alroq mamlakat o'rtasidagi savdo kambag'al mamlakat ishchilariga qanday ta'sir qiladi deb o'ylaysiz?</li>
        </ol>
      </Callout>
    </div>
  );
}

const textD = demandThrough({ Q: 3, P: 20 }, { Q: 4, P: 16 });
const textS = supplyThrough({ Q: 3, P: 20 }, { Q: 1, P: 16 });
const tvD = demandThrough({ Q: 1, P: 500 }, { Q: 1.2, P: 400 });
const tvS = supplyThrough({ Q: 0.4, P: 500 }, { Q: 0.2, P: 400 });
const Trade = () => <InternationalTradeGraph worldPrice={3} />;
const Tariff = () => <InternationalTradeGraph mode="tariff" worldPrice={3} tariff={1.5} />;
const Textilia = () => <InternationalTradeGraph demand={textD} supply={textS} xMax={8} yMax={32} worldPrice={16} title="Problem 5 — Textilia futbolka bozori (mln dona)" labels={{ x: 'T-shirts (millions)', y: 'Price' }} />;
const TV = () => <InternationalTradeGraph demand={tvD} supply={tvS} xMax={1.6} yMax={1000} mode="tariff" worldPrice={400} tariff={100} title="Problem 9 — AQSh televizor bozori (mln dona)" labels={{ x: 'TVs (millions)', y: 'Price' }} />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    "Savdosiz ichki narx va **world price** ni solishtirib eksportchi yoki importchi bo'lishni aniqlash",
    "Eksportchi va importchi mamlakatda kim yutishi va yutqazishini CS, PS va A–D maydonlari bilan ko'rsatish",
    "**Tariff** ning ta'sirini va ikki DWL uchburchagini (D va F) hisoblash; **import quota** bilan solishtirish",
    "Savdoning qo'shimcha foydalarini sanash",
    "Savdoni cheklashning besh argumentini va iqtisodchilar javobini bilish; unilateral va multilateral yondashuvlarni farqlash",
  ],
  sections: [
    { id: "s-9-1a", code: "9-1a", titleEn: "The Equilibrium without Trade", titleUz: "Savdosiz muvozanat", Body: S91a },
    { id: "s-9-1b", code: "9-1b", titleEn: "The World Price and Comparative Advantage", titleUz: "Jahon narxi va comparative advantage", Body: S91b, check: checks["s-9-1b"] },
    { id: "s-9-2a", code: "9-2a", titleEn: "The Gains and Losses of an Exporting Country", titleUz: "Eksport qiluvchi mamlakatning yutuq va yo'qotishlari", Body: S92a, check: checks["s-9-2a"] },
    { id: "s-9-2b", code: "9-2b", titleEn: "The Gains and Losses of an Importing Country", titleUz: "Import qiluvchi mamlakatning yutuq va yo'qotishlari", Body: S92b, check: checks["s-9-2b"] },
    { id: "s-9-2c", code: "9-2c", titleEn: "The Effects of a Tariff", titleUz: "Tarifning ta'siri", Body: S92c, check: checks["s-9-2c"] },
    { id: "s-9-2d", code: "9-2d", titleEn: "The Lessons for Trade Policy", titleUz: "Savdo siyosati uchun saboqlar", Body: S92d },
    { id: "s-9-2e", code: "9-2e", titleEn: "Other Benefits of International Trade", titleUz: "Xalqaro savdoning boshqa foydalari", Body: S92e, check: checks["s-9-2e"] },
    { id: "s-9-3a", code: "9-3a", titleEn: "The Jobs Argument", titleUz: "Ish o'rinlari argumenti", Body: S93a, check: checks["s-9-3"] },
    { id: "s-9-3b", code: "9-3b", titleEn: "The National-Security Argument", titleUz: "Milliy xavfsizlik argumenti", Body: S93b },
    { id: "s-9-3c", code: "9-3c", titleEn: "The Infant-Industry Argument", titleUz: "Yosh soha argumenti", Body: S93c },
    { id: "s-9-3d", code: "9-3d", titleEn: "The Unfair-Competition Argument", titleUz: "Nohaq raqobat argumenti", Body: S93d },
    { id: "s-9-3e", code: "9-3e", titleEn: "The Protection-as-a-Bargaining-Chip Argument", titleUz: "Himoya — muzokara koziri argumenti", Body: S93e },
    { id: "s-9-4", code: "9-4", titleEn: "Conclusion", titleUz: "Xulosa", Body: S94 },
  ],
  examTraps: [
    { title: "Kim yutadi?", body: "**Eksportchi**: ishlab chiqaruvchilar yutadi, iste'molchilar yutqazadi. **Importchi**: teskari. Ikkalasida ham ΔTS = +D." },
    { title: "Tarif jadvali", body: "ΔCS = −(C+D+E+F), ΔPS = +C, Revenue = +E, DWL = D + F. D — ortiqcha ishlab chiqarish, F — kam iste'mol." },
    { title: "Tarif va kvota", body: "Bir xil narx va miqdor; farq — E kimga: tarifda davlatga, kvotada litsenziya egalariga." },
    { title: "Comparative advantage bog'lanishi", body: "Savdosiz ichki narx = imkoniyat xarajati. Past → comparative advantage → eksport." },
    { title: "Eksport subsidiyasi / eksport solig'i", body: "Ikkalasi ham DWL yaratadi: subsidiya ichki narxni oshiradi, soliq — tushiradi (Problems 6, 10)." },
  ],
  mistakes: [
    { wrong: "“Savdo ochilsa hamma yutadi.”", right: "Mamlakat umuman yutadi, lekin bir guruh (eksportchida iste'molchilar, importchida ishlab chiqaruvchilar) yutqazadi." },
    { wrong: "“Tarif iste'molchilarni himoya qiladi.”", right: "Tarif ichki **ishlab chiqaruvchilarni** himoya qiladi; iste'molchilar eng ko'p yutqazadi." },
    { wrong: "“Absolute advantage bo'lmasa savdodan foyda yo'q.”", right: "Yutuq comparative advantage dan keladi." },
    { wrong: "“Xorijiy subsidiya bizga zarar — tarif bilan javob berish kerak.”", right: "Arzon import bizning iste'molchilarga foyda; tarif o'zimizga DWL keltiradi." },
    { wrong: "“Kvota tarifdan yaxshiroq, chunki narxni oshirmaydi.”", right: "Kvota ham narxni oshiradi va E surplusni ko'pincha xorijiy firmalarga beradi." },
  ],
  boxes: [
    { id: "fyi-quotas", kind: "FYI", titleEn: "Import Quotas: Another Way to Restrict Trade", titleUz: "Import kvotalari: savdoni cheklashning boshqa yo'li", Body: Quotas },
    { id: "cs-wto", kind: "Case Study", titleEn: "Trade Agreements and the World Trade Organization", titleUz: "Savdo bitimlari va Jahon savdo tashkiloti", Body: WTO },
    { id: "news-development", kind: "In the News", titleEn: "Trade as a Tool for Economic Development", titleUz: "Savdo — iqtisodiy rivojlanish vositasi", Body: Development },
  ],
  summary: [
    "Erkin savdo ta'sirini savdosiz ichki narxni jahon narxi bilan solishtirib aniqlash mumkin. Past ichki narx — comparative advantage, mamlakat **eksportchi** bo'ladi; yuqori — dunyoda comparative advantage, mamlakat **importchi** bo'ladi.",
    "Eksportchi bo'lganda ishlab chiqaruvchilar yutadi, iste'molchilar yutqazadi; importchi bo'lganda — aksincha. Ikkala holda ham savdodan yutuq yo'qotishdan katta.",
    "**Tariff** bozorni savdosiz muvozanatga yaqinlashtiradi va savdodan yutuqni kamaytiradi. Ishlab chiqaruvchilar va davlat yutadi, lekin iste'molchilar yo'qotishi bu yutuqlardan katta.",
    "Savdo comparative advantage dan tashqari foyda ham beradi: ko'proq xilma-xillik, **economies of scale**, kuchliroq raqobat, yuqoriroq unumdorlik, texnologiyaga yaxshiroq kirish.",
    "Savdoni cheklash argumentlari: ish o'rinlari, milliy xavfsizlik, yosh sohalar, nohaq raqobat, xorijiy cheklovlarga javob. Ba'zilari ba'zan o'rinli, lekin aksariyat iqtisodchilar erkin savdoni odatda yaxshiroq siyosat deb hisoblaydi.",
  ],
  widgets: { trade: Trade, tariff: Tariff, textilia: Textilia, tv: TV },
  gallery: [
    { title: "Xalqaro savdo: eksportchi va importchi", Component: () => <InternationalTradeGraph worldPrice={3} /> },
    { title: "Tarif va import kvotasi", Component: () => <InternationalTradeGraph mode="tariff" worldPrice={3} tariff={1} /> },
  ],
};
