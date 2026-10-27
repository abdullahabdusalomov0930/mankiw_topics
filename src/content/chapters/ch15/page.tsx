import { CompetitiveFirmLab, EntryExitLab } from '../../../components/graphs/CompetitiveWidgets';
import { Callout } from '../../../components/ui/Kit';
import { BookTable, BoxLink } from '../../../components/ui/Lesson';
import { Math as M } from '../../../components/ui/Math';
import { T } from '../../../components/ui/Term';
import type { ChapterPageContent } from '../../types';
import { checks } from './quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        Mahalladagi bitta yoqilg'i quyish shoxobchasi benzin narxini 20% oshirsa, mijozlar darhol boshqasiga ketadi. Suv ta'minoti kompaniyasi suv narxini 20% oshirsa — deyarli hech kimni yo'qotmaydi:
        boshqa suv manbai yo'q. Farq — <b>bozor tuzilmasida</b>: ko'p benzin shoxobchasi, bitta suv kompaniyasi.
      </p>
      <p>
        Bu bob raqobatchi firmalar haqida (navbatdagisi — <T id="market-power" />ga ega firmalar). Ular oddiyroq va samarali taqsimot beradi (7-bob) — boshqa tuzilmalar uchun mezon. Savol: firma xarajatlarining
        qaysi biri — fixed, variable, average, marginal — taklif qaroriga ta'sir qiladi? Javob: hammasi, har biri o'z o'rnida. Chorsu bozoridagi pomidor sotuvchi ham shu qoidalarga bo'ysunadi.
      </p>
    </div>
  );
}

const S151a = () => (
  <div className="prose-uz">
    <p>
      <T id="competitive-market-15" />: (1) ko'p xaridor va sotuvchi; (2) tovarlar deyarli bir xil. Sut bozorida hech bir xaridor ham, ferma ham narxga ta'sir qila olmaydi: sotuvchi bozor narxida xohlagancha
      sota oladi — arzonlashtirishga sabab yo'q; qimmatlashtirsa — xaridorlar ketadi. Hamma — <T id="price-taker" />. Uchinchi shart ko'pincha: (3) <b>erkin kirish va chiqish</b> — price taker bo'lish uchun
      shart emas, lekin uzoq muddatli muvozanatni belgilaydi.
    </p>
  </div>
);

const S151b = () => (
  <div className="prose-uz">
    <p>
      Vaca oilaviy sut fermasi: TR = P × Q. Gallon $6, 1,000 gallon → $6,000; ikki barobar ishlab chiqarsa — tushum ham ikki barobar ($12,000), narx o'zgarmaydi.
    </p>
    <BookTable
      caption="Table 1 — Total, Average, and Marginal Revenue for a Competitive Firm"
      head={['Q', 'P', 'TR = P × Q', 'AR = TR/Q', 'MR = ΔTR/ΔQ']}
      rows={[
        ['1 gallon', '$6', '$6', '$6', '$6'],
        ['2', '6', '12', '6', '6'],
        ['3', '6', '18', '6', '6'],
        ['4', '6', '24', '6', '6'],
        ['5', '6', '30', '6', '6'],
        ['6', '6', '36', '6', '6'],
        ['7', '6', '42', '6', '6'],
        ['8', '6', '48', '6', '6'],
      ]}
    />
    <p>
      <T id="average-revenue" /> = P — <b>barcha</b> firmalar uchun. <T id="marginal-revenue" /> = P — faqat <b>raqobatchi</b> firmalar uchun.
    </p>
  </div>
);

const S152a = () => (
  <div className="prose-uz">
    <p>
      Table 2: Vaca fermasining fixed cost $3. Foyda 0 gallonda −$3, 1 da $1, 2 da $4 … <b>4 yoki 5 gallonda $7</b> — maksimum. Marjinal yondashuv: 1-gallon MR $6, MC $2 → foyda +$4; 2-gallon: +$3; …
      6-gallon: MR $6 &lt; MC $7 → foyda −$1. MR &gt; MC — ko'paytiring; MR &lt; MC — kamaytiring.
    </p>
    <CompetitiveFirmLab />
  </div>
);

const S152b = () => (
  <div className="prose-uz">
    <p>
      Figure 1: Q₁ da MR &gt; MC — ko'paytirish foydani oshiradi; Q₂ da MC &gt; MR — kamaytirish oshiradi. Uchta qoida (har qanday foydani maksimallashtiruvchi firma uchun):
    </p>
    <ul>
      <li>MR &gt; MC — mahsulotni oshiring;</li>
      <li>MC &gt; MR — mahsulotni kamaytiring;</li>
      <li>foyda maksimumida <b>MR = MC</b>.</li>
    </ul>
    <p>
      Raqobatchi firmada MR = P, demak <M tex="P = MC" />. Narx P₁ dan P₂ ga oshsa (Figure 2), firma MC egri chizig'i bo'ylab ko'proq ishlab chiqaradi: <b>MC egri chizig'i — raqobatchi firmaning taklif egri chizig'i</b>{' '}
      (ba'zi shartlar bilan — keyingi bo'limlar).
    </p>
  </div>
);

const S152c = () => (
  <div className="prose-uz">
    <p>
      <T id="shutdown" /> (qisqa muddat, fixed cost baribir to'lanadi) va <T id="exit" /> (uzoq muddat, barcha xarajatlar tejaladi) farqlanadi. Ferma bir mavsum ekin ekmasa — yer bo'sh, uning xarajati
      qaytmaydi (sunk); fermerlikni butunlay tashlasa — yerni sotadi.
    </p>
    <p>
      Yopilsa: tushum yo'qoladi, o'zgaruvchan xarajat tejaladi. Demak <M tex="\text{Shut down if } TR < VC \iff P < AVC" />. Qisqa muddatli taklif egri chizig'i — <b>MC ning AVC dan yuqori qismi</b> (Figure 3).
    </p>
  </div>
);

const S152d = () => (
  <div className="prose-uz">
    <p>
      <T id="sunk-cost" /> — qaytarib bo'lmaydigan xarajat; ratsional qarorda e'tiborsiz qoldiriladi. Qisqa muddatda fixed cost sunk — uning hajmi shutdown qaroriga ta'sir qilmaydi. Hayotda: kinoni $15 ga baholaysiz, chipta
      $10, uni yo'qotdingiz → yana $10 to'lang ($15 &gt; $10); yo'qolgan $10 — to'kilgan sut.
    </p>
    <BoxLink id="cs-empty-restaurants">Case Study: Near-Empty Restaurants and Off-Season Miniature Golf</BoxLink>
  </div>
);

const S152e = () => (
  <div className="prose-uz">
    <p>
      Chiqishda fixed cost ham tejaladi: <M tex="\text{Exit if } TR < TC \iff P < ATC" />; kirish — teskari: <M tex="\text{Enter if } P > ATC" />. Uzoq muddatli taklif egri chizig'i — <b>MC ning ATC dan yuqori qismi</b> (Figure 4).
    </p>
  </div>
);

const S152f = () => (
  <div className="prose-uz">
    <p>
      <M tex="\text{Profit} = TR - TC = (P - ATC) \times Q" /> — grafikda <b>to'rtburchak</b>: balandligi P − ATC, eni Q (Figure 5a — foyda). Zararda (5b) balandligi ATC − P; P = MC da ishlab chiqarish zararni minimallashtiradi,
      lekin uzoq muddatda firma chiqadi.
    </p>
  </div>
);

const S152g = () => (
  <div className="prose-uz">
    <p>Fred va Wilma granit karyerini sotib olishdi. Wilma (iqtisod bitiruvchisi) qoidalarni — granitga o'yib — yozdi:</p>
    <BookTable
      caption="Table 3 — Profit-Maximizing Rules for a Competitive Firm"
      head={['#', 'Qoida']}
      rows={[
        ['1', 'Find Q at which **P = MC**.'],
        ['2', 'If **P < AVC**, shut down immediately and remain out of business.'],
        ['3', 'If **AVC < P < ATC**, operate in the short run but exit in the long run.'],
        ['4', 'If **ATC < P**, stay in business and enjoy your profits!'],
      ]}
    />
    <Callout kind="exam">QQ 5: MC (= P) AVC va ATC orasida → qisqa muddatda ishlang, uzoq muddatda chiqing.</Callout>
  </div>
);

const S153a = () => (
  <div className="prose-uz">
    <p>
      1,000 bir xil firma: har biri P = MC da (P &gt; AVC bo'lsa). Bozor taklifi — individual taklif egri chiziqlarining <b>gorizontal yig'indisi</b> (4-bobdagi Ben va Jerry kabi): $1 da har biri 100 → bozor 100,000;
      $2 da 200 → 200,000 (Figure 6).
    </p>
  </div>
);

const S153b = () => (
  <div className="prose-uz">
    <p>
      Hamma bir xil texnologiya va resurslarga ega deylik. Foyda bo'lsa — yangi firmalar kiradi → taklif oshadi → narx va foyda tushadi; zarar bo'lsa — chiqadi → narx oshadi. Jarayon tugaganda foyda <b>nol</b>:
      P = ATC. Foyda maksimumida P = MC. Ikkalasi bir vaqtda faqat <b>ATC minimumida</b>. Demak: uzoq muddatda firmalar <T id="efficient-scale" /> da ishlaydi — <T id="zero-profit-equilibrium" />. LR bozor
      taklif egri chizig'i min ATC da <b>gorizontal</b> (Figure 7).
    </p>
    <EntryExitLab />
  </div>
);

const S153c = () => (
  <div className="prose-uz">
    <p>
      Nega nol foydada qolishadi? Chunki TC barcha imkoniyat xarajatlarini o'z ichiga oladi. Fermer $1 mln investitsiya qilgan (bankda yiliga $40,000 foiz olardi) va $60,000 maoshli ishdan voz kechgan — imkoniyat
      xarajati $100,000. Iqtisodiy foyda nol bo'lsa ham, tushum shularni qoplaydi; buxgalter $100,000 <b>foyda</b> ko'radi — shuning uchun fermer qoladi.
    </p>
  </div>
);

const S153d = () => (
  <div className="prose-uz">
    <p>
      Sut bozori uzoq muddatli muvozanatda (A): P₁ = min ATC. Olimlar sutning ajoyib foydasini topdi → talab D₁ → D₂. Qisqa muddat (B): narx P₂ ga oshadi, firmalar MC bo'ylab ko'proq ishlab chiqaradi, P &gt; ATC —
      foyda. Vaqt o'tib boshqa fermerlar sutga o'tadi → qisqa muddatli taklif S₁ → S₂ → narx P₁ ga qaytadi (C), miqdor Q₃ ga oshadi, firmalar ko'proq, har biri yana efficient scale da (Figure 8).
    </p>
  </div>
);

const S153e = () => (
  <div className="prose-uz">
    <p>LR taklif yuqoriga qaragan bo'lishining ikki sababi:</p>
    <ol>
      <li><b>Cheklangan resurslar</b>: fermerlar ko'paysa yer narxi oshadi → hamma fermerlarning xarajati oshadi.</li>
      <li>
        <b>Turli xarajatlar</b>: bo'yoqchilar tezligi va vaqtining muqobil qiymati turlicha. Ko'proq bo'yoqchini jalb qilish uchun narx oshishi kerak. Narx <b>marjinal firma</b>ning ATC iga teng — u nol foyda,
        arzonroqlar esa uzoq muddatda ham <b>musbat</b> foyda ko'radi.
      </li>
    </ol>
    <p>Baribir asosiy saboq qoladi: uzoq muddatli taklif odatda qisqa muddatlidan <b>elastikroq</b>.</p>
  </div>
);

const S154 = () => (
  <div className="prose-uz">
    <p>
      Marjinal tahlil raqobatli bozorda taklif egri chizig'i nazariyasini berdi: raqobatchi firmadan sotib olganingizda to'lagan narxingiz ishlab chiqarish xarajatiga yaqin — <b>P = MC</b>; erkin kirish-chiqish bo'lsa,
      narx eng past mumkin bo'lgan o'rtacha xarajatga ham teng — <b>P = min ATC</b>. Keyingi bob bozor hokimiyatiga ega firmalarni ko'radi: marjinal tahlil yana foydali, lekin natijalar juda boshqacha.
    </p>
  </div>
);

function EmptyRestaurants() {
  return (
    <div className="prose-uz">
      <p>
        Tushlikda deyarli bo'sh restoran nega ochiq? Ko'p xarajatlar — ijara, oshxona jihozlari, stol, idishlar — fixed: tushlikda yopish ularni kamaytirmaydi (qisqa muddatda sunk). Qarorga faqat o'zgaruvchan xarajatlar
        — qo'shimcha oziq-ovqat va xodimlar maoshi — ta'sir qiladi. Restoran tushlikda faqat tushum o'zgaruvchan xarajatni qoplamasa yopiladi.
      </p>
      <p>
        Kurort shaharchasidagi mini-golf maydoni ham: yer va maydon qurilishi — fixed, qisqa muddatli qarorga ahamiyatsiz. Maydon faqat tushum o'zgaruvchan xarajatdan oshgan mavsumda ochiq bo'lishi kerak.
        O'zbekistonda ham: Chimgandagi mavsumiy dam olish maskanlari qishda yoki yozda yopilishi — aynan shu P &lt; AVC mantiqi.
      </p>
    </div>
  );
}

const Firm = () => <CompetitiveFirmLab />;
const Market = () => <EntryExitLab />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    "Raqobatli bozor xususiyatlari va nega raqobatchi firmada **MR = AR = P**",
    "Foydani maksimallashtirish qoidasi **MR = MC** (⇔ P = MC) va MC egri chizig'i — firma taklifi",
    "**Shutdown** (P < AVC) va **exit** (P < ATC) qarorlari; **sunk cost** e'tiborsiz qoldirilishi",
    "Foydani grafikda (P − ATC) × Q sifatida o'lchash",
    "Qisqa va uzoq muddatli bozor taklifi; erkin kirish-chiqish va **nol foyda**; talab siljishiga javob",
  ],
  sections: [
    { id: "s-15-1a", code: "15-1a", titleEn: "The Meaning of Competition", titleUz: "Raqobat ma'nosi", Body: S151a, check: checks["s-15-1a"] },
    { id: "s-15-1b", code: "15-1b", titleEn: "The Revenue of a Competitive Firm", titleUz: "Raqobatchi firma tushumi", Body: S151b, check: checks["s-15-1b"] },
    { id: "s-15-2a", code: "15-2a", titleEn: "A Simple Example of Profit Maximization", titleUz: "Foydani maksimallashtirish misoli", Body: S152a, check: checks["s-15-2a"] },
    { id: "s-15-2b", code: "15-2b", titleEn: "The Marginal-Cost Curve and the Firm's Supply Decision", titleUz: "MC egri chizig'i va taklif qarori", Body: S152b, check: checks["s-15-2b"] },
    { id: "s-15-2c", code: "15-2c", titleEn: "The Firm's Short-Run Decision to Shut Down", titleUz: "Qisqa muddatli to'xtatish qarori", Body: S152c, check: checks["s-15-2c"] },
    { id: "s-15-2d", code: "15-2d", titleEn: "Spilt Milk and Other Sunk Costs", titleUz: "To'kilgan sut va boshqa sunk xarajatlar", Body: S152d, check: checks["s-15-2d"] },
    { id: "s-15-2e", code: "15-2e", titleEn: "The Firm's Long-Run Decision to Exit or Enter a Market", titleUz: "Uzoq muddatli chiqish yoki kirish qarori", Body: S152e, check: checks["s-15-2e"] },
    { id: "s-15-2f", code: "15-2f", titleEn: "Measuring Profit in Our Graph for the Competitive Firm", titleUz: "Grafikda foydani o'lchash", Body: S152f, check: checks["s-15-2f"] },
    { id: "s-15-2g", code: "15-2g", titleEn: "A Brief Recap", titleUz: "Qisqacha xulosa", Body: S152g, check: checks["s-15-2g"] },
    { id: "s-15-3a", code: "15-3a", titleEn: "The Short Run: Market Supply with a Fixed Number of Firms", titleUz: "Qisqa muddat: firmalar soni o'zgarmas", Body: S153a, check: checks["s-15-3a"] },
    { id: "s-15-3b", code: "15-3b", titleEn: "The Long Run: Market Supply with Entry and Exit", titleUz: "Uzoq muddat: kirish va chiqish", Body: S153b, check: checks["s-15-3b"] },
    { id: "s-15-3c", code: "15-3c", titleEn: "Why Do Competitive Firms Stay in Business If They Make Zero Profit?", titleUz: "Nol foydada nega qolishadi?", Body: S153c, check: checks["s-15-3c"] },
    { id: "s-15-3d", code: "15-3d", titleEn: "A Shift in Demand in the Short Run and Long Run", titleUz: "Talab siljishi: qisqa va uzoq muddat", Body: S153d, check: checks["s-15-3d"] },
    { id: "s-15-3e", code: "15-3e", titleEn: "Why the Long-Run Supply Curve Might Slope Upward", titleUz: "Nega LR taklif yuqoriga qarashi mumkin", Body: S153e, check: checks["s-15-3e"] },
    { id: "s-15-4", code: "15-4", titleEn: "Conclusion: Behind the Supply Curve", titleUz: "Xulosa: taklif egri chizig'i ortida", Body: S154 },
  ],
  examTraps: [
    { title: "SR vs LR taklif", body: "SR: MC ning **AVC** dan yuqori qismi. LR: MC ning **ATC** dan yuqori qismi (QQ 4)." },
    { title: "Uch munosabat", body: "LR muvozanat: P = MC = ATC. Kirish oldidan: P = MC > ATC (QQ 6–7)." },
    { title: "MR = MC — lekin qaysi tarmoqda?", body: "Problem 4: 1-qutida MC = 50 = MR, lekin MC **tushayotgan** qismda — foyda minimum. MC ning **oshayotgan** qismini oling." },
    { title: "Fixed-cost soliq", body: "SR da MC o'zgarmaydi → miqdor o'zgarmaydi; LR da chiqish → narx ↑, miqdor ↓ (QQ 8)." },
    { title: "Nol iqtisodiy foyda ≠ nol buxgalteriya foydasi", body: "Imkoniyat xarajatlari qoplanadi — buxgalter musbat foyda ko'radi." },
  ],
  mistakes: [
    { wrong: "“Zarar ko'rsa, firma darhol yopilishi kerak.”", right: "Faqat **P < AVC** bo'lsa; aks holda qisqa muddatda ishlash zararni kamaytiradi." },
    { wrong: "“Raqobatchi firma narxni oshirib foydani oshiradi.”", right: "Price taker: yuqori narxda hech narsa sotmaydi." },
    { wrong: "“Uzoq muddatda raqobatchi firmalar foydasiz yopiladi.”", right: "Nol **iqtisodiy** foyda — imkoniyat xarajatlari qoplangan; ular qoladi." },
    { wrong: "“Sunk cost qarorga ta'sir qiladi.”", right: "Sunk cost e'tiborsiz qoldiriladi — faqat kelajakdagi foyda va xarajatlar muhim." },
  ],
  boxes: [{ id: "cs-empty-restaurants", kind: "Case Study", titleEn: "Near-Empty Restaurants and Off-Season Miniature Golf", titleUz: "Bo'sh restoranlar va mavsumdan tashqari mini-golf", Body: EmptyRestaurants }],
  summary: [
    "Raqobatchi firma price taker bo'lgani uchun uning tushumi mahsulot miqdoriga proporsional. Tovar narxi firmaning o'rtacha tushumiga ham, marjinal tushumiga ham teng.",
    "Foydani maksimallashtirish uchun firma **MR = MC** bo'lgan miqdorni tanlaydi. Raqobatchi firmada MR = P, demak **P = MC**. Shuning uchun MC egri chizig'i — firma taklif egri chizig'i.",
    "Qisqa muddatda, fixed cost sunk bo'lganda, firma narx **AVC** dan past bo'lsa vaqtincha yopiladi. Uzoq muddatda, barcha xarajatlarni tejay olganda, narx **ATC** dan past bo'lsa bozordan chiqadi.",
    "Erkin kirish-chiqishli bozorda uzoq muddatda iqtisodiy foyda **nolga** tushadi: barcha firmalar efficient scale da ishlaydi, narx min ATC ga teng va firmalar soni shu narxdagi talabni qondirishga moslashadi.",
    "Talab o'zgarishi turli vaqt gorizontlarida turlicha ta'sir qiladi. Qisqa muddatda talab oshsa narx oshadi va foyda paydo bo'ladi, kamaysa — narx tushadi va zarar. Erkin kirish-chiqishda uzoq muddatda firmalar soni bozorni nol foydali muvozanatga qaytaradi.",
  ],
  widgets: { firm: Firm, market: Market },
  gallery: [
    { title: "Raqobatchi firma: P = MC, foyda, shut down, exit", Component: Firm },
    { title: "Kirish va chiqish: qisqa va uzoq muddatli taklif", Component: Market },
  ],
};
