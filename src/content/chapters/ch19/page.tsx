import { CobbDouglasLab, LaborMarketLab, ProductivityWages, VMPLab } from '../../../components/graphs/LaborWidgets';
import { Callout } from '../../../components/ui/Kit';
import { AskExperts, BookTable, BoxLink } from '../../../components/ui/Lesson';
import { Math as M } from '../../../components/ui/Math';
import { T } from '../../../components/ui/Term';
import type { ChapterPageContent } from '../../types';
import { checks } from './quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        O'qishni tugatgach daromadingiz asosan ishingizga bog'liq: dasturchi benzin quyuvchidan ko'p topadi. Lekin buni hech qanday qonun yoki axloqiy tamoyil talab qilmaydi. Unda nima belgilaydi?
      </p>
      <p>
        2021-yilda AQSh milliy daromadi ~$20 trln. Ishchilar uning ~uchdan ikki qismini (ish haqi va imtiyozlar), qolganini yer egalari va <T id="capital" /> egalari (ijara, foyda, foiz) olgan. Javob — yana talab va
        taklif, bu safar <T id="factors-of-production" /> bozorlarida. Bu bob 20 va 21-boblarga (daromad farqlari, tengsizlik) poydevor. O'zbekiston uchun ham dolzarb: chet elda ishlayotgan yuz minglab
        fuqarolarimiz ish haqi aynan shu mantiq bilan belgilanadi.
      </p>
    </div>
  );
}

const S191 = () => (
  <div className="prose-uz">
    <p>
      Omil bozorlarining asosiy farqi: resursga talab — <T id="derived-demand" />: firma boshqa bozorda tovar taklif qilish qaroridan kelib chiqadi. Figure 1: olma narxi olma talabi va taklifidan, olma teruvchilar
      ish haqi — teruvchilarga talab va taklifdan.
    </p>
  </div>
);

const S191a = () => (
  <div className="prose-uz">
    <p>
      Olma ishlab chiqaruvchi har hafta nechta teruvchi yollashni hal qiladi. Ikki faraz: (1) firma olma bozorida (sotuvchi) ham, teruvchilar bozorida (xaridor) ham <b>raqobatchi</b> — narx va ish haqini berilgan deb
      oladi; (2) firma <b>foydani maksimallashtiradi</b>.
    </p>
  </div>
);

const S191b = () => (
  <div className="prose-uz">
    <p>
      Table 1: 1 ishchi — 100 bushel, 2 — 180, 3 — 240, 4 — 280, 5 — 300 (<T id="production-function" />). <T id="marginal-product-of-labor" />: 100, 80, 60, 40, 20 —{' '}
      <T id="diminishing-marginal-product" />: birinchilar pastdagi olmalarni teradi, keyingilari narvonda balandga chiqadi.
    </p>
    <BookTable
      caption="Table 1 — How the Competitive Firm Decides How Much Labor to Hire (P = $10, W = $500)"
      head={['Labor L', 'Output Q', 'MPL', 'VMPL = P × MPL', 'Wage W', 'ΔProfit = VMPL − W']}
      rows={[
        ['0', '0', '', '', '', ''],
        ['1', '100', '100', '$1,000', '$500', '$500'],
        ['2', '180', '80', '800', '500', '300'],
        ['3', '240', '60', '600', '500', '100'],
        ['4', '280', '40', '400', '500', '−100'],
        ['5', '300', '20', '200', '500', '−300'],
      ]}
    />
  </div>
);

const S191c = () => (
  <div className="prose-uz">
    <p>
      Firmani olma emas, pul qiziqtiradi: <T id="value-of-marginal-product" /> <M tex="VMPL = P \times MPL" />. Olma $10 da 2-ishchi $800 olib keladi. Ish haqi $500: 1-ishchi +$500, 2-si +$300, 3-si +$100,
      4-si −$100 → <b>3 ishchi</b>. Qoida: <b>VMPL = W</b> gacha yollang. Demak <b>VMPL egri chizig'i — raqobatchi firmaning mehnatga talab egri chizig'i</b>.
    </p>
    <VMPLab />
    <BoxLink id="fyi-two-sides">FYI: Input Demand and Output Supply: Two Sides of the Same Coin</BoxLink>
  </div>
);

const S191d = () => (
  <div className="prose-uz">
    <p>Mehnatga talab egri chizig'i VMP ni aks ettiradi, demak u quyidagilar bilan siljiydi (<T id="labor-demand-shifters" />):</p>
    <ul>
      <li><b>Mahsulot narxi</b>: olma qimmatlasa — VMP ↑ — talab o'ngga.</li>
      <li>
        <b>Texnologiya</b>: 1960–2020 yillarda ishchining soatlik mahsuloti 236% oshgan. Odatda texnologiya <b>labor-augmenting</b> (mixlash pistoletli duradgor) — talab o'ngga; arzon sanoat roboti kabi{' '}
        <b>labor-saving</b> o'zgarish talabni chapga suradi. Tarixan ko'pi labor-augmenting: real ish haqi 201% oshgan bo'lsa ham, firmalar bandlikni ~2 barobar oshirgan.
      </li>
      <li><b>Boshqa omillar taklifi</b>: narvonlar kamaysa — teruvchilar MP i va talab kamayadi.</li>
    </ul>
  </div>
);

const S192a = () => (
  <div className="prose-uz">
    <p>
      Mehnat taklifi ortida — <T id="work-leisure-tradeoff" />. Soatiga $20 topsangiz, bir soat dam olishning imkoniyat xarajati $20; maosh $25 ga oshsa — qimmatlashadi. Yuqoriga qaragan taklif: maosh oshsa
      ko'proq ishlaysiz. Lekin boyroq bo'lgach ko'proq dam olishni ham tanlashingiz mumkin — orqaga egilgan taklif. 22-bobda: <b>income effect</b> va <b>substitution effect</b>; hozircha substitution ustun deb
      olamiz.
    </p>
  </div>
);

const S192b = () => (
  <div className="prose-uz">
    <p><T id="labor-supply-shifters" />:</p>
    <ul>
      <li><b>Didlar</b>: ayollarning mehnat bozoridagi ishtiroki 34% (1950) → 56% (2020) — oilalar kichiklashdi, ko'proq onalar ishlashni tanlaydi.</li>
      <li><b>Muqobil imkoniyatlar</b>: nok teruvchilar maoshi oshsa, ba'zi olma teruvchilar o'tadi — olma teruvchilar taklifi kamayadi.</li>
      <li>
        <b>Immigratsiya</b>: kuzgi hosilga keluvchilar shimolda taklifni oshirib, janubdagi apelsin zavodlarida kamaytiradi; AQShga immigrantlar kelsa — AQShda oshadi, ularning vatanida kamayadi. Immigratsiya
        bahsining katta qismi — uning muvozanat ish haqiga ta'siri.
      </li>
    </ul>
  </div>
);

const S193 = () => (
  <div className="prose-uz">
    <p>
      Raqobatli mehnat bozorida ikki fakt: ish haqi talab va taklifni muvozanatlaydi va ish haqi VMPL ga teng. Bu zid emas: muvozanatda har bir firma VMPL = W gacha yollagan (Figure 4). Shuning uchun talab yoki taklifni
      o'zgartiruvchi har qanday hodisa muvozanat ish haqi va VMP ni <b>bir xil miqdorda</b> o'zgartiradi.
    </p>
  </div>
);

const S193a = () => (
  <div className="prose-uz">
    <p>
      Immigratsiya olma teruvchilar sonini oshirsa (Figure 5): taklif S₁ → S₂, ish haqi W₁ → W₂ tushadi, bandlik oshadi, har bir bog'da ishchi ko'p → VMP tushadi. Joshua Angrist o'rgangan Isroil misoli: 1988-yilda
      siyosiy beqarorlik tufayli falastinlik ishchilar oqimi cheklandi — Isroilda ishlaganlar yarmiga kamaydi, qolganlarning maoshi ~50% oshdi.
    </p>
    <p>
      Iqtisodiyot bitta emas, ko'p mehnat bozorlaridan iborat: immigrantlar olma teruvchi bo'lsa — teruvchilar maoshi tushadi; ular shifokor bo'lib, daromadining bir qismiga olma sotib olsa — shifokorlar maoshi tushadi,
      olma teruvchilarniki esa oshadi (<b>general equilibrium effects</b>).
    </p>
    <LaborMarketLab />
    <AskExperts title="Immigration (highly educated)" source="IGM, February 12, 2013" statement="The average U.S. citizen would be better off if a larger number of highly educated foreign workers were legally allowed to immigrate to the U.S. each year." agree={95} uncertain={5} disagree={0} />
    <AskExperts title="Immigration (low-skilled)" source="IGM, December 10, 2013" statement="The average U.S. citizen would be better off if a larger number of low-skilled foreign workers were legally allowed to enter the U.S. each year." agree={63} uncertain={27} disagree={10} />
    <AskExperts title="Immigration (distribution)" source="IGM, December 10, 2013" statement="Unless they were compensated by others, many low-skilled American workers would be substantially worse off if a larger number of low-skilled foreign workers were legally allowed to enter the U.S. each year." agree={60} uncertain={29} disagree={11} />
    <BoxLink id="cs-immigration">Case Study: The Immigration Debate</BoxLink>
  </div>
);

const S193b = () => (
  <div className="prose-uz">
    <p>
      Olma ommabop bo'lib narxi oshdi (Figure 6): MPL o'zgarmaydi, lekin VMP oshadi → talab D₁ → D₂, ish haqi va bandlik oshadi. Soha firmalari farovonligi va ishchilar farovonligi bog'liq: olma qimmatlasa —
      ishlab chiqaruvchilar foydasi ham, teruvchilar maoshi ham oshadi. Neft konchilari buni yaxshi biladi.
    </p>
    <Callout kind="exam">Har doim: <b>W = VMP</b>. Taklif o'ngga → W ↓, L ↑. Talab o'ngga → W ↑, L ↑. QQ 7: MPL ni oshiruvchi texnologiya — <b>talab o'ngga</b>.</Callout>
    <BoxLink id="cs-productivity-wages">Case Study: Productivity and Wages</BoxLink>
  </div>
);

const S194a = () => (
  <div className="prose-uz">
    <p>
      <T id="capital" /> — o'tmishda ishlab chiqarilib, hozir ishlatilayotgan jihoz va inshootlar (narvonlar, yuk mashinalari, omborlar, hatto olma daraxtlari). Ikki narx: <b>sotib olish narxi</b> (abadiy egalik) va{' '}
      <b>ijara narxi</b> (cheklangan muddat). Ish haqi — mehnatning ijara narxi; xuddi shu mantiq bilan yer va kapitalning ijara narxi talab va taklifdan, talab esa VMP dan (Figure 8). Raqobatli firmalarda har bir
      omil ijara narxi = VMP: mehnat, yer va kapital har biri o'z marjinal hissasini oladi. Sotib olish narxi — hozirgi va kutilgan kelajakdagi VMP (ijara oqimi) ga bog'liq.
    </p>
    <BoxLink id="fyi-capital-income">FYI: What Is Capital Income?</BoxLink>
  </div>
);

const S194b = () => (
  <div className="prose-uz">
    <p>
      Kamayuvchi MP tufayli ko'p omil — arzon, kam omil — qimmat. Lekin omillar birga ishlatiladi: bir omil taklifi o'zgarsa, <b>barcha</b> omillar daromadi o'zgaradi. Bo'ron narvonlarni buzsa: narvon ijarasi oshadi, lekin
      teruvchilarning MPL i tushadi → mehnatga talab va ish haqi tushadi.
    </p>
    <CobbDouglasLab />
    <BoxLink id="cs-black-death">Case Study: The Economics of the Black Death</BoxLink>
  </div>
);

const S195 = () => (
  <div className="prose-uz">
    <p>
      Bu — <T id="neoclassical-distribution" />: har bir omilga to'lov uning talab va taklifiga, talab esa marjinal unumdorlikka bog'liq; muvozanatda har bir omil o'z marjinal hissasining qiymatini oladi. Ko'pchilik
      iqtisodchilar AQShning $20 trln daromadi taqsimotini tushuntirishni shu nazariyadan boshlaydi.
    </p>
    <p>
      Bob boshidagi savol: nega dasturchi benzin quyuvchidan ko'p topadi? Chunki u bozorda qimmatroq baholanadigan tovar yaratadi: odamlar yaxshi video o'yin uchun ko'p, benzin quyish va oyna yuvish uchun kam to'laydi.
      Odamlar kompyuterdan zerikib ko'proq mashina haydasa — narxlar va ish haqi ham o'zgaradi.
    </p>
  </div>
);

function TwoSides() {
  return (
    <div className="prose-uz">
      <p>
        15-bob: raqobatchi firma P = MC da sotadi. 19-bob: W = VMPL da yollaydi. Ishlab chiqarish funksiyasi kirim va chiqimni bog'lagani uchun bu — bir qarorning ikki tomoni. Qo'shimcha ishchi $500 turib, 50 bushel
        qo'shsa, bir bushelning MC i $500/50 = $10: umuman <M tex="MC = W / MPL" />.
      </p>
      <p>
        <M tex="P \times MPL = W \Rightarrow P = W/MPL = MC" />. Kamayuvchi marjinal mahsulot — o'suvchi marjinal xarajat: bog' ishchilar bilan to'lgach, har bir qo'shimcha ishchi kam qo'shadi (MPL ↓), har bir qo'shimcha
        bushel qimmatlashadi (MC ↑).
      </p>
    </div>
  );
}

function Immigration() {
  return (
    <div className="prose-uz">
      <p>
        Komik Pat Paulsen har to'rt yilda soxta saylov kampaniyasi o'tkazib aytardi: AQShdagi barcha muammolar amerikalik hindularning “nooqilona immigratsiya siyosati”dan. Hazilda chuqur haqiqat bor: ko'pchilik amerikaliklar
        ajdodlarini kutib olgan siyosatdan foyda ko'rgan. Lekin immigratsiya — bahsli mavzu, qisman iqtisodiy ta'siri tufayli.
      </p>
      <ul>
        <li>9-bob ko'zgusida: immigratsiya — mehnat xizmatlari <b>importi</b>. “Iste'molchilar” (yollovchi firmalar va ularning mijozlari) yutadi, “mahalliy ishlab chiqaruvchilar” (raqobatlashuvchi mahalliy ishchilar) yutqazadi; umumiy surplus oshadi.</li>
        <li>George Borjas: umumiy surplus o'sishi AQSh milliy daromadining ~<b>0.25%</b> i; ~<b>2.5%</b> i yutqazuvchi mahalliy ishchilardan yutuvchilarga qayta taqsimlanadi (immigrantlarning o'z yutug'i hisobga olinmagan).</li>
        <li>Taklif: immigrantlar yoki ularning ish beruvchilariga maxsus soliq, tushum mahalliy ishchilar soliqlarini kamaytirishga — yutuqni adolatliroq taqsimlash.</li>
        <li>Bahs faqat iqtisodiy emas — madaniy va milliy o'ziga xoslik masalalari ham bor.</li>
      </ul>
    </div>
  );
}

function ProductivityCase() {
  return (
    <div className="prose-uz">
      <p>
        1-bob tamoyili: turmush darajasi ishlab chiqarish qobiliyatiga bog'liq. Mehnat bozorida: ish haqi = VMPL, ya'ni unumdor ishchilar ko'p, kam unumdorlar kam oladi. 1960–2020 yillarda unumdorlik yiliga ~2.0%,
        real ish haqi ~1.9% o'sgan — har ~35 yilda ikki barobar.
      </p>
      <ProductivityWages />
    </div>
  );
}

function CapitalIncome() {
  return (
    <div className="prose-uz">
      <p>
        Mehnat daromadi oddiy — ish haqi. Kapital daromadi murakkabroq: modelda uy xo'jaliklari kapitalga egalik qilib, firmalarga ijaraga beradi deb faraz qildik. Aslida firmalar odatda kapitalga o'zi egalik qiladi va
        daromad turli yo'llar bilan uy xo'jaliklariga yetadi:
      </p>
      <ul>
        <li><b>Foiz</b> — firmaga qarz bergan uy xo'jaliklariga (obligatsiya egalari, bank omonatchilari);</li>
        <li><b>Dividend</b> — aksiyadorlarga (kompaniya egaligidan ulush);</li>
        <li><b>Taqsimlanmagan foyda</b> (retained earnings) — firmada qoladi, aktivlarni oshirib, aksiya qiymatini ko'taradi.</li>
      </ul>
      <p>Qaysi shaklda bo'lmasin, kapital o'z VMP iga ko'ra to'lov oladi.</p>
    </div>
  );
}

function BlackDeath() {
  return (
    <div className="prose-uz">
      <p>
        XIV asr Yevropasida bubon vabosi bir necha yilda aholining ~uchdan birini yo'q qildi (2020–2021 COVID pandemiyasi aholining 1% dan kamini o'ldirgan). Bu — omil bozorlari nazariyasining dahshatli tabiiy tajribasi.
      </p>
      <ul>
        <li>Ishchilar kam → mehnatning MP i oshadi (kamayuvchi MP teskari ishlaydi) → <b>ish haqi oshadi</b>.</li>
        <li>Yer va mehnat birga ishlatiladi: yerni ishlaydigan ishchi kam → yerning MP i tushadi → <b>ijara kamayadi</b>.</li>
      </ul>
      <p>Tarix tasdiqlaydi: ish haqi taxminan <b>ikki barobar</b> oshgan, ijara <b>50% va undan ko'p</b> tushgan — omon qolgan dehqonlar uchun farovonlik, zodagon yer egalari uchun daromad kamayishi.</p>
    </div>
  );
}

const Vmp = () => <VMPLab />;
const Market = () => <LaborMarketLab />;
const Cobb = () => <CobbDouglasLab />;
const Prod = () => <ProductivityWages />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    "Resursga talab — **derived demand**; raqobatchi firma **VMP = narx** qoidasi bilan yollashini tushuntirish",
    "**MPL**, kamayuvchi marjinal mahsulot va VMP egri chizig'i — mehnatga talab",
    "Mehnat talabi va taklifini siljituvchi omillar; ish va dam olish trade-offi",
    "Muvozanatda **W = VMP**; immigratsiya, narx o'zgarishi, unumdorlik va real ish haqi",
    "Yer va kapital bozorlari, omillar bog'liqligi va **neoklassik taqsimot nazariyasi**",
  ],
  sections: [
    { id: "s-19-1", code: "19-1", titleEn: "The Demand for Labor", titleUz: "Mehnatga talab", Body: S191 },
    { id: "s-19-1a", code: "19-1a", titleEn: "The Competitive, Profit-Maximizing Firm", titleUz: "Raqobatchi, foydani maksimallashtiruvchi firma", Body: S191a, check: checks["s-19-1a"] },
    { id: "s-19-1b", code: "19-1b", titleEn: "The Production Function and the Marginal Product of Labor", titleUz: "Ishlab chiqarish funksiyasi va MPL", Body: S191b, check: checks["s-19-1b"] },
    { id: "s-19-1c", code: "19-1c", titleEn: "The Value of the Marginal Product and the Demand for Labor", titleUz: "VMP va mehnatga talab", Body: S191c, check: checks["s-19-1c"] },
    { id: "s-19-1d", code: "19-1d", titleEn: "What Causes the Labor-Demand Curve to Shift?", titleUz: "Mehnatga talab nega siljiydi", Body: S191d, check: checks["s-19-1d"] },
    { id: "s-19-2a", code: "19-2a", titleEn: "The Trade-Off between Work and Leisure", titleUz: "Ish va dam olish trade-offi", Body: S192a, check: checks["s-19-2a"] },
    { id: "s-19-2b", code: "19-2b", titleEn: "What Causes the Labor-Supply Curve to Shift?", titleUz: "Mehnat taklifi nega siljiydi", Body: S192b, check: checks["s-19-2b"] },
    { id: "s-19-3", code: "19-3", titleEn: "Equilibrium in the Labor Market", titleUz: "Mehnat bozori muvozanati", Body: S193 },
    { id: "s-19-3a", code: "19-3a", titleEn: "Shifts in Labor Supply", titleUz: "Mehnat taklifining siljishi", Body: S193a, check: checks["s-19-3a"] },
    { id: "s-19-3b", code: "19-3b", titleEn: "Shifts in Labor Demand", titleUz: "Mehnatga talabning siljishi", Body: S193b, check: checks["s-19-3b"] },
    { id: "s-19-4a", code: "19-4a", titleEn: "Equilibrium in the Markets for Land and Capital", titleUz: "Yer va kapital bozorlari muvozanati", Body: S194a, check: checks["s-19-4a"] },
    { id: "s-19-4b", code: "19-4b", titleEn: "Linkages among the Factors of Production", titleUz: "Omillar orasidagi bog'liqlik", Body: S194b, check: checks["s-19-4b"] },
    { id: "s-19-5", code: "19-5", titleEn: "Conclusion", titleUz: "Xulosa", Body: S195 },
  ],
  examTraps: [
    { title: "VMP = P × MP", body: "Yollash: VMP = W. QQ 3: 20 × MPL = 10 → MPL = ½ (teskarisini — 2 — bo'lmang)." },
    { title: "Omil narxi = VMP", body: "Kapital uchun ham: 20 × MP = 30 → MP = 3/2 (QQ 9)." },
    { title: "Bog'liq omillar", body: "Kapital kamaysa: kapital ijarasi ↑, ish haqi ↓ (QQ 10). Ishchilar kamaysa: ish haqi ↑, yer ijarasi ↓ (Black Death)." },
    { title: "Income vs substitution", body: "Substitution > income → ko'proq ishlaydi (QQ 5)." },
    { title: "Talab yoki taklif?", body: "Texnologiya, mahsulot narxi, boshqa omillar — **talab**; didlar, muqobillar, immigratsiya — **taklif**." },
  ],
  mistakes: [
    { wrong: "“Firma ishchilarni MP bo'yicha yollaydi.”", right: "**VMP** (pul ko'rinishida) bo'yicha: P × MP = W." },
    { wrong: "“Mahsulot narxi oshsa, MPL oshadi.”", right: "MPL o'zgarmaydi; **VMP** oshadi." },
    { wrong: "“Immigratsiya barcha ish haqlarini tushiradi.”", right: "Raqobatlashuvchi bozorlarda tushadi; boshqalarida oshishi mumkin (general equilibrium)." },
    { wrong: "“Kapital daromadi faqat dividend.”", right: "Foiz, dividend va taqsimlanmagan foyda — barchasi kapitalning VMP i." },
  ],
  boxes: [
    { id: "fyi-two-sides", kind: "FYI", titleEn: "Input Demand and Output Supply: Two Sides of the Same Coin", titleUz: "Resurs talabi va mahsulot taklifi — bir tanganing ikki tomoni", Body: TwoSides },
    { id: "cs-immigration", kind: "Case Study", titleEn: "The Immigration Debate", titleUz: "Immigratsiya bahsi", Body: Immigration },
    { id: "cs-productivity-wages", kind: "Case Study", titleEn: "Productivity and Wages", titleUz: "Unumdorlik va ish haqi", Body: ProductivityCase },
    { id: "fyi-capital-income", kind: "FYI", titleEn: "What Is Capital Income?", titleUz: "Kapital daromadi nima?", Body: CapitalIncome },
    { id: "cs-black-death", kind: "Case Study", titleEn: "The Economics of the Black Death", titleUz: "Qora o'lim iqtisodiyoti", Body: BlackDeath },
  ],
  summary: [
    "Iqtisodiyot daromadi ishlab chiqarish omillari bozorlarida taqsimlanadi. Uch eng muhim omil — **mehnat, yer va kapital**.",
    "Omillarga talab — **hosila talab**: ularni tovar va xizmat ishlab chiqarishda ishlatadigan firmalardan kelib chiqadi. Raqobatchi, foydani maksimallashtiruvchi firmalar har bir omilni uning **VMP i** narxiga teng bo'lguncha yollaydi.",
    "Mehnat taklifi odamlarning **ish va dam olish** trade-offidan kelib chiqadi. Yuqoriga qaragan taklif — odamlar maosh oshishiga ko'proq ishlab, kamroq dam olish bilan javob beradi.",
    "Raqobatli omil bozorlarida har bir omil narxi talab va taklifni muvozanatlaydi. Talab VMP ni aks ettirgani uchun muvozanatda har bir omil o'zining **marjinal hissasi** ga ko'ra to'lov oladi.",
    "Omillar birga ishlatilgani uchun har bir omilning MP i barcha omillar miqdoriga bog'liq. Bir omil taklifi o'zgarsa — **barcha** omillarning muvozanat daromadi o'zgaradi.",
  ],
  widgets: { vmp: Vmp, market: Market, cobb: Cobb, prod: Prod },
  gallery: [
    { title: "VMP va resursga talab (olma bog'i, robotlar)", Component: Vmp },
    { title: "Mehnat bozori siljishlari va Ectenia bog'lari", Component: Market },
    { title: "Cobb–Douglas: barqaror mehnat ulushi", Component: Cobb },
    { title: "Unumdorlik va real ish haqi (Figure 7)", Component: Prod },
  ],
};
