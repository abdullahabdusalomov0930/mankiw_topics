import { CostCurvesLab, LongRunATC, ProductionFunctionLab, ProfitViews } from '../../../components/graphs/CostWidgets';
import { Callout } from '../../../components/ui/Kit';
import { BookTable, BoxLink, Source } from '../../../components/ui/Lesson';
import { Math as M } from '../../../components/ui/Math';
import { T } from '../../../components/ui/Term';
import type { ChapterPageContent } from '../../types';
import { checks } from './quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        Iqtisodiyotda minglab firmalar bor: General Motors mashina, General Mills yorma ishlab chiqaradi — minglab ishchi va aksiyadorli gigantlar; mahalla do'koni, sartaroshxona yoki kafe —
        bitta oilaga tegishli kichik firmalar. Oldingi boblarda firmalar qarorini taklif egri chizig'i bilan qisqacha ifodaladik. Endi taklif egri chizig'i ortidagi qarorlarni o'rganamiz —{' '}
        <b>industrial organization</b>: bozordagi firmalar soni narxlar va samaradorlikka qanday ta'sir qiladi?
      </p>
      <p>
        Avval — xarajatlar. Kitob ochiq aytadi: bu mavzu biroz texnik, hatto zerikarli. Lekin keyingi qiziqarli boblar (raqobat, monopoliya, oligopoliya) aynan shu poydevorga quriladi. Toshkentdagi somsaxona,
        Andijondagi avtozavod — hammasi bir xil xarajat egri chiziqlariga bo'ysunadi.
      </p>
    </div>
  );
}

const S141a = () => (
  <div className="prose-uz">
    <p>
      Chloe'ning pechene fabrikasi. Iqtisodchilar firma maqsadi — foydani maksimallashtirish deb faraz qiladi. <T id="total-revenue" /> — sotuvdan tushum (10,000 × $2 = $20,000), <T id="total-cost" /> —
      resurslar bozor qiymati, <T id="profit" /> = TR − TC.
    </p>
  </div>
);

const S141b = () => (
  <div className="prose-uz">
    <p>
      Narsaning xarajati — undan voz kechilgan narsa. <T id="explicit-costs" /> pul to'lashni talab qiladi (un uchun $1,000, ish haqi). <T id="implicit-costs" /> — yo'q: Chloe dasturchi bo'lib soatiga
      $100 topardi; fabrikada ishlagan har soati shu $100 dan voz kechish. Iqtisodchi ikkalasini hisoblaydi (qarorga ta'sir qiladi: dasturchi maoshi $300 bo'lsa, Chloe fabrikani yopishi mumkin), buxgalter —
      faqat explicit xarajatlarni.
    </p>
  </div>
);

const S141c = () => (
  <div className="prose-uz">
    <p>
      Chloe fabrikani $300,000 jamg'armasiga sotib oldi; 5% foizda yiliga $15,000 olardi — bu implicit xarajat, buxgalter uni ko'rmaydi. Agar $100,000 o'z puli va $200,000 bank krediti (5%) bo'lsa:
      buxgalter $10,000 kredit foizini ko'radi; iqtisodchi uchun kapital xarajati baribir <b>$15,000</b> ($10,000 explicit + $5,000 implicit).
    </p>
  </div>
);

const S141d = () => (
  <div className="prose-uz">
    <p>
      <T id="economic-profit" /> = TR − (explicit + implicit); <T id="accounting-profit" /> = TR − explicit. Buxgalteriya foydasi har doim katta. Iqtisodiy foyda musbat bo'lsa firma qoladi (barcha imkoniyat
      xarajatlari qoplanadi va egasiga mukofot qoladi); manfiy bo'lsa (iqtisodiy zarar) — sharoit o'zgarmasa, egalar oxir-oqibat chiqib ketadi.
    </p>
    <ProfitViews />
  </div>
);

const S142a = () => (
  <div className="prose-uz">
    <p>
      Qisqa muddat: Chloe fabrikasi hajmi o'zgarmas, faqat ishchilar sonini o'zgartiradi. Ishchilar soni va mahsulot orasidagi bog'liqlik — <T id="production-function" />.{' '}
      <T id="marginal-product" /> — qo'shimcha ishchi qo'shgan mahsulot. U kamayadi: 50, 40, 30, 20, 10, 5 — <T id="diminishing-marginal-product" />: ishchilar jihozni bo'lishadi, oshxona tiqilinch.
    </p>
    <BookTable
      caption="Table 1 — A Production Function and Total Cost: Chloe's Cookie Factory"
      head={['Workers', 'Output (cookies/hour)', 'Marginal product', 'Cost of factory', 'Cost of workers', 'Total cost']}
      rows={[
        ['0', '0', '', '$30', '$0', '$30'],
        ['1', '50', '50', '30', '10', '40'],
        ['2', '90', '40', '30', '20', '50'],
        ['3', '120', '30', '30', '30', '60'],
        ['4', '140', '20', '30', '40', '70'],
        ['5', '150', '10', '30', '50', '80'],
        ['6', '155', '5', '30', '60', '90'],
      ]}
    />
  </div>
);

const S142b = () => (
  <div className="prose-uz">
    <p>
      Fabrika $30/soat, ishchi $10/soat. Eng muhim bog'liqlik — mahsulot (2-ustun) va total cost (6-ustun): <b>total-cost curve</b>. U tiklashadi, ishlab chiqarish funksiyasi esa yotiqlashadi — bir sabab:
      tiqilinch oshxonada qo'shimcha pechene uchun ko'p mehnat kerak.
    </p>
    <ProductionFunctionLab />
  </div>
);

const S143a = () => (
  <div className="prose-uz">
    <p>
      Chloe'ning qo'shnisi — <b>Caleb's Coffee Shop</b>. Uning xarajatlari ikki turga bo'linadi: <T id="fixed-costs" /> (ijara, doimiy buxgalter — $3.00) va <T id="variable-costs" /> (qahva doni, sut,
      shakar, stakanlar, qo'shimcha ishchilar). TC = FC + VC.
    </p>
  </div>
);

const S143b = () => (
  <div className="prose-uz">
    <p>Caleb ikki savol beradi: “tipik chashka qancha turadi?” va “yana bir chashka qancha turadi?”. Javoblar har xil:</p>
    <ul>
      <li>
        <T id="average-total-cost" /> <M tex="ATC = TC/Q" /> = <T id="average-fixed-cost" /> + <T id="average-variable-cost" />. 2 chashka: $3.80 / 2 = $1.90.
      </li>
      <li>
        <T id="marginal-cost" /> <M tex="MC = \Delta TC / \Delta Q" />. 2 → 3 chashka: $4.50 − $3.80 = $0.70.
      </li>
    </ul>
  </div>
);

const S143c = () => (
  <div className="prose-uz">
    <p>Uchta xossa (Figure 4):</p>
    <ol>
      <li><b>Rising marginal cost</b>: kam qahvada jihoz bo'sh — qo'shimcha ishchi ko'p qo'shadi, MC kichik; ko'p qahvada tiqilinch — MC katta.</li>
      <li>
        <b>U-shaped ATC</b>: AFC doimo tushadi, AVC oshadi — “arqon tortish”. Minimum — <T id="efficient-scale" />: Caleb uchun 5 yoki 6 chashka, ATC $1.30.
      </li>
      <li>
        <b>MC ATC ni minimumida kesadi</b>: MC &lt; ATC — ATC tushadi; MC &gt; ATC — oshadi. O'xshatish: GPA — ATC, keyingi fan bahosi — MC; past baho GPA ni tushiradi, yuqori baho oshiradi.
      </li>
    </ol>
    <CostCurvesLab />
    <Callout kind="exam">
      Fixed cost (litsenziya, lump-sum soliq) oshsa — faqat <b>AFC va ATC</b> siljiydi (QQ 7). Birlik boshiga soliq — <b>AVC, ATC va MC</b> siljiydi (Problem 8).
    </Callout>
  </div>
);

const S143d = () => (
  <div className="prose-uz">
    <p>
      Haqiqiy firmalarda marjinal mahsulot darhol kamaymasligi mumkin: 2- yoki 3-ishchi birinchisidan ko'proq qo'shadi — jamoa vazifalarni bo'lishadi. Bunday firmada MC va AVC avval tushadi, keyin oshadi
      (Figure 5, Nimbus — Problem 4). Lekin uchta xossa saqlanadi: MC <b>oxir-oqibat</b> oshadi; ATC — U; MC ATC ni minimumida kesadi.
    </p>
  </div>
);

const S144a = () => (
  <div className="prose-uz">
    <p>
      Ford bir necha oy ichida fabrikalar soni va hajmini o'zgartira olmaydi — qisqa muddatda ular fixed cost. Bir necha yilda esa kengaytirishi, yangisini qurishi yoki yopishi mumkin — uzoq muddatda
      variable cost. Shuning uchun SR va LR egri chiziqlar farq qiladi: LR ATC yotiqroq U, va barcha SR egri chiziqlar unga teng yoki undan yuqori — uzoq muddatda firma o'zi xohlagan SR egri chiziqni
      tanlaydi.
    </p>
    <LongRunATC />
    <p>
      Uzoq muddatga o'tish qancha vaqt oladi? Firmaga bog'liq: avtozavod yangi fabrika uchun bir yil va undan ko'p; qahvaxona yangi kofe mashinasini bir necha kunda oladi.
    </p>
  </div>
);

const S144b = () => (
  <div className="prose-uz">
    <p>
      LR ATC shakli firma miqyosi haqida gapiradi: tushsa — <T id="economies-of-scale-lr" />, oshsa — <T id="diseconomies-of-scale" />, o'zgarmasa — <T id="constant-returns-to-scale" />. Sabablar: ko'p
      ishlab chiqarish ixtisoslashuvga imkon beradi (konveyer); juda katta tashkilotda menejerlar haddan tashqari band bo'lib, xarajatlarni nazorat qila olmaydi. Shuning uchun LR ATC ham ko'pincha U shaklida.
    </p>
    <BoxLink id="fyi-pin">FYI: Lessons from a Pin Factory</BoxLink>
  </div>
);

const S145 = () => (
  <div className="prose-uz">
    <BookTable
      caption="Table 3 — The Many Types of Cost: A Summary"
      head={['Term', 'Definition', 'Math']}
      rows={[
        ['Explicit costs', "Pul to'lashni talab qiladigan xarajatlar", ''],
        ['Implicit costs', "Pul to'lashni talab qilmaydigan xarajatlar", ''],
        ['Fixed costs', "Mahsulot miqdoriga bog'liq emas", 'FC'],
        ['Variable costs', 'Mahsulot miqdori bilan o‘zgaradi', 'VC'],
        ['Total cost', 'Barcha resurslar bozor qiymati', '\\(TC = FC + VC\\)'],
        ['Average fixed cost', 'FC / mahsulot', '\\(AFC = FC/Q\\)'],
        ['Average variable cost', 'VC / mahsulot', '\\(AVC = VC/Q\\)'],
        ['Average total cost', 'TC / mahsulot', '\\(ATC = TC/Q\\)'],
        ['Marginal cost', "Qo'shimcha birlik uchun TC o'sishi", '\\(MC = \\Delta TC/\\Delta Q\\)'],
      ]}
    />
    <p>Xarajat egri chiziqlari o'zi firma qarorini aytmaydi, lekin uning asosiy tarkibiy qismi — keyingi bob buni ko'rsatadi.</p>
  </div>
);

function PinFactory() {
  return (
    <div className="prose-uz">
      <p>
        “Hamma ishning ustasi — hech birining ustasi emas.” Ishchi unumdor bo'lishi uchun oz sonli vazifani mukammal o'zlashtirishi kerak — bu faqat firma ko'p ishchi yollab, ko'p ishlab chiqarganda mumkin.
      </p>
      <p>
        Adam Smit <i>The Wealth of Nations</i> da to'g'nag'ich fabrikasini tasvirlagan: biri sim tortadi, ikkinchisi to'g'rilaydi, uchinchisi kesadi, to'rtinchisi uchini o'tkirlaydi, beshinchisi boshini
        jilolaydi; boshini yasash va qo'yish — alohida operatsiyalar; oqartirish va qog'ozga o'rash ham alohida hunar.
      </p>
      <Source>Adam Smith, The Wealth of Nations (1776) — qisqacha bayon</Source>
      <p>
        Natija: har bir ishchiga kuniga minglab to'g'nag'ich. Smit fikricha, alohida ishlasa, har biri kuniga yigirmatani ham, ehtimol bittani ham yasay olmasdi. Bugun ham uy qurish uchun quruvchi duradgor,
        santexnik, elektrik, bo'yoqchilarni yollaydi. Ixtisoslashuv orqali miqyos samarasi — zamonaviy jamiyatlar farovonligining sabablaridan biri.
      </p>
    </div>
  );
}

const Costs = () => <CostCurvesLab />;
const Production = () => <ProductionFunctionLab />;
const Profit = () => <ProfitViews />;
const Lr = () => <LongRunATC />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    "**Explicit** va **implicit** xarajatlarni, **economic** va **accounting profit**ni farqlash",
    "**Production function**, **marginal product** va **diminishing marginal product** dan total-cost egri chizig'ini chiqarish",
    "TC, FC, VC, AFC, AVC, **ATC**, **MC** ni jadvaldan hisoblash va grafikda ko'rsatish",
    "Nega ATC U shaklida va nega **MC ATC ni minimumida kesishini** tushuntirish (efficient scale)",
    "Qisqa va uzoq muddatli ATC; **economies/diseconomies of scale** va **constant returns**",
  ],
  sections: [
    { id: "s-14-1a", code: "14-1a", titleEn: "Total Revenue, Total Cost, and Profit", titleUz: "Tushum, xarajat va foyda", Body: S141a, check: checks["s-14-1a"] },
    { id: "s-14-1b", code: "14-1b", titleEn: "Why Opportunity Costs Matter", titleUz: "Nega imkoniyat xarajatlari muhim", Body: S141b, check: checks["s-14-1b"] },
    { id: "s-14-1c", code: "14-1c", titleEn: "The Cost of Capital Is an Opportunity Cost", titleUz: "Kapital xarajati — imkoniyat xarajati", Body: S141c, check: checks["s-14-1c"] },
    { id: "s-14-1d", code: "14-1d", titleEn: "Economists and Accountants Measure Profit Differently", titleUz: "Iqtisodchi va buxgalter foydani turlicha o'lchaydi", Body: S141d, check: checks["s-14-1d"] },
    { id: "s-14-2a", code: "14-2a", titleEn: "The Production Function", titleUz: "Ishlab chiqarish funksiyasi", Body: S142a, check: checks["s-14-2a"] },
    { id: "s-14-2b", code: "14-2b", titleEn: "From the Production Function to the Total-Cost Curve", titleUz: "Ishlab chiqarish funksiyasidan total-cost egri chizig'iga", Body: S142b, check: checks["s-14-2b"] },
    { id: "s-14-3a", code: "14-3a", titleEn: "Fixed and Variable Costs", titleUz: "Doimiy va o'zgaruvchan xarajatlar", Body: S143a, check: checks["s-14-3a"] },
    { id: "s-14-3b", code: "14-3b", titleEn: "Average and Marginal Cost", titleUz: "O'rtacha va marjinal xarajat", Body: S143b, check: checks["s-14-3b"] },
    { id: "s-14-3c", code: "14-3c", titleEn: "Cost Curves and Their Shapes", titleUz: "Xarajat egri chiziqlari va shakli", Body: S143c, check: checks["s-14-3c"] },
    { id: "s-14-3d", code: "14-3d", titleEn: "Typical Cost Curves", titleUz: "Tipik xarajat egri chiziqlari", Body: S143d, check: checks["s-14-3d"] },
    { id: "s-14-4a", code: "14-4a", titleEn: "The Relationship between Short-Run and Long-Run Average Total Cost", titleUz: "Qisqa va uzoq muddatli ATC", Body: S144a, check: checks["s-14-4a"] },
    { id: "s-14-4b", code: "14-4b", titleEn: "Economies and Diseconomies of Scale", titleUz: "Miqyos samarasi va samarasizligi", Body: S144b, check: checks["s-14-4b"] },
    { id: "s-14-5", code: "14-5", titleEn: "Conclusion", titleUz: "Xulosa", Body: S145 },
  ],
  examTraps: [
    { title: "Implicit xarajatni unutmang", body: "Total cost = explicit + implicit (QQ 1: $100 + 10 × $20 = $300). Iqtisodiy foyda < buxgalteriya foydasi." },
    { title: "MC — qatorlar orasida", body: "MC = ΔTC/ΔQ; jadvalda ikki qator orasida. Q birlab o'smasa (Nimbus), ΔQ ga bo'ling." },
    { title: "MC va ATC", body: "MC < ATC ⇒ ATC tushadi (MC ning o'zi tushishi shart emas!). QQ 6." },
    { title: "Qaysi egri chiziq siljiydi", body: "Fixed cost → AFC, ATC. Birlik boshiga xarajat → AVC, ATC, MC." },
    { title: "Miqyos — uzoq muddat", body: "Economies/diseconomies — **LR ATC** haqida, SR MC haqida emas (QQ 9)." },
  ],
  mistakes: [
    { wrong: "“Marjinal mahsulot kamaysa, ishlab chiqarish kamayadi.”", right: "Mahsulot hali o'sadi, faqat **sekinroq**." },
    { wrong: "“ATC minimumida MC ham minimal.”", right: "MC ATC ni **ATC minimumida** kesadi; MC ning minimumi chaproqda." },
    { wrong: "“Qaror uchun o'rtacha xarajat muhim.”", right: "Qo'shimcha birlik qarori — **MC** bo'yicha (Problem 5: $901 > $550)." },
    { wrong: "“Lump-sum soliq MC ni oshiradi.”", right: "Fixed cost MC ga ta'sir qilmaydi." },
  ],
  boxes: [{ id: "fyi-pin", kind: "FYI", titleEn: "Lessons from a Pin Factory", titleUz: "To'g'nag'ich fabrikasi saboqlari", Body: PinFactory }],
  summary: [
    "Firma maqsadi — **foydani maksimallashtirish**; foyda = umumiy tushum − umumiy xarajat.",
    "Firma xatti-harakatini tahlil qilishda barcha imkoniyat xarajatlarini hisobga oling. Ba'zilari **explicit** (ishchilarga ish haqi), ba'zilari **implicit** (egasining boy bergan maoshi). Buxgalteriya foydasi faqat explicit, iqtisodiy foyda — ikkalasini hisobga oladi.",
    "Firma xarajatlari uning ishlab chiqarish jarayonini aks ettiradi. Tipik **production function** resurs ko'paygan sari yotiqlashadi — **diminishing marginal product**; shuning uchun total-cost egri chizig'i tiklashadi.",
    "Umumiy xarajat **fixed** (mahsulot miqdori o'zgarganda o'zgarmaydi) va **variable** (o'zgaradi) xarajatlarga bo'linadi.",
    "Umumiy xarajatdan ikki o'lchov: **ATC** = TC / Q va **MC** — mahsulot 1 birlik oshganda TC qanchaga oshishi.",
    "Tipik firmada MC mahsulot bilan oshadi; ATC avval tushadi, keyin oshadi; **MC egri chizig'i ATC ni har doim uning minimumida kesadi**.",
    "Xarajatlar ko'pincha vaqt gorizontiga bog'liq: ko'p xarajatlar qisqa muddatda fixed, uzoq muddatda variable. Shuning uchun ishlab chiqarish o'zgarganda ATC qisqa muddatda uzoq muddatdagidan ko'proq oshishi mumkin.",
  ],
  widgets: { costs: Costs, production: Production, profit: Profit, lr: Lr },
  gallery: [
    { title: "Xarajat egri chiziqlari laboratoriyasi (Caleb va masalalar)", Component: Costs },
    { title: "Chloe: production function va total cost", Component: Production },
    { title: "Iqtisodiy va buxgalteriya foydasi", Component: Profit },
    { title: "Qisqa va uzoq muddatli ATC (Ford)", Component: Lr },
  ],
};
