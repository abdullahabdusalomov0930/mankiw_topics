import { useState } from 'react';
import { SupplyDemandGraph } from '../../../components/graphs/SupplyDemandGraph';
import { TaxSizeLab } from '../../../components/graphs/TaxSizeLab';
import { Callout, Slider } from '../../../components/ui/Kit';
import { AskExperts, BookTable, BoxLink } from '../../../components/ui/Lesson';
import { Math as M } from '../../../components/ui/Math';
import { T } from '../../../components/ui/Term';
import { demandFromQ, demandThrough, supplyFromQ, supplyThrough } from '../../../lib/econ';
import type { ChapterPageContent } from '../../types';
import { baseD, baseS, dwlElasticities, taxWelfare } from './presets';
import { checks } from './quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        1776 yilda Britaniya soliqlaridan g'azablangan amerikaliklar inqilob boshladi. Ikki yuz yildan ko'proq vaqt o'tib ham soliqlar —
        eng qizg'in siyosiy bahslardan biri. Sudya Oliver Wendell Holmes aytgan: “Taxes are what we pay for civilized society.”
      </p>
      <p>
        Soliq yo'l, maktab, shifoxona uchun kerak. Lekin uning narxi qancha? Bu bobning asosiy xulosasi: soliq xaridor va sotuvchilardan
        davlat yig'adigan pulidan <b>ko'proq</b> narsani oladi. Farq — hech kimga tegmaydigan, “havoga uchib ketadigan” yo'qotish:{' '}
        <b>deadweight loss</b>.
      </p>
    </div>
  );
}

const S81 = () => (
  <div className="prose-uz">
    <p>
      6-bobdan eslaylik: soliqning yakuniy ta'siri u xaridorga yoki sotuvchiga solinishidan qat'i nazar bir xil. Soliq xaridor to'laydigan
      narx bilan sotuvchi oladigan narx orasiga <b>pona</b> qo'yadi va sotilgan miqdorni kamaytiradi — bozorni kichraytiradi (Figure 1). Bu
      bobda grafiklarni soddalashtirish uchun qaysi egri chiziq siljiganini ko'rsatmaymiz — faqat ponani.
    </p>
  </div>
);

const S81a = () => (
  <div className="prose-uz">
    <p>
      Soliqning foyda va zararlarini o'lchash uchun uch tomonni ko'ramiz: xaridorlar (<T id="consumer-surplus" label="consumer surplus" />),
      sotuvchilar (<T id="producer-surplus" label="producer surplus" />) va davlat. Davlat <T id="tax-revenue" /> oladi:{' '}
      <M tex="T \times Q" />. Bu pul aslida davlatga emas, u sarflanadigan odamlarga (yo'llar, politsiya, ta'lim, ijtimoiy yordam) foyda
      keltiradi.
    </p>
    <SupplyDemandGraph config={taxWelfare} />
    <p>Figure 3 dagi harflar bilan hisob-kitob:</p>
    <BookTable
      head={['', 'Without Tax', 'With Tax', 'Change']}
      rows={[
        ['Consumer Surplus', 'A + B + C', 'A', '−(B + C)'],
        ['Producer Surplus', 'D + E + F', 'F', '−(D + E)'],
        ['Tax Revenue', 'none', 'B + D', '+(B + D)'],
        ['Total Surplus', 'A + B + C + D + E + F', 'A + B + D + F', '**−(C + E)**'],
      ]}
    />
    <p>
      Xaridor va sotuvchilarning yo'qotishi davlat tushumidan <b>C + E</b> ga ko'p. Soliq (yoki boshqa siyosat) samarali bozorni buzganda total
      surplusning bu qisqarishi — <T id="deadweight-loss" />.
    </p>
    <p>
      Nega? 10 tamoyildan biri: <b>odamlar rag'batlarga javob beradi</b>. Soliq xaridor narxini oshirib, sotuvchi narxini tushiradi: xaridorlar
      kamroq iste'mol qiladi, sotuvchilar kamroq ishlab chiqaradi. Bozor optimaldan kichrayadi (Q₁ → Q₂). Soliqlar rag'batlarni buzgani uchun
      resurslar samarasiz taqsimlanadi.
    </p>
  </div>
);

function MalikMei() {
  const [t, setT] = useState(0);
  const gains = 120 - 80;
  const deal = t < gains;
  return (
    <div className="not-prose card my-5 p-4">
      <div className="kicker mb-2">Malik va Mei: soliqni o'zingiz qo'ying</div>
      <Slider label="Tozalash xizmatiga soliq" value={t} min={0} max={60} step={5} onChange={setT} display={`$${t}`} color="--tax" />
      <div className="mt-3 grid gap-2 text-sm sm:grid-cols-4">
        <div className="rounded-lg border-2 border-ink/30 p-2">Mei uchun qiymat: <b>$120</b></div>
        <div className="rounded-lg border-2 border-ink/30 p-2">Malik xarajati: <b>$80</b></div>
        <div className="rounded-lg border-2 border-ink/30 p-2">Savdodan yutuq: <b>$40</b></div>
        <div className={`rounded-lg border-2 border-ink p-2 font-semibold text-[#111] ${deal ? 'bg-postit-green' : 'bg-postit-pink'}`}>{deal ? `Bitim bo'ladi: tushum $${t}, DWL $0` : `Bitim bekor: tushum $0, DWL $${gains}`}</div>
      </div>
      <p className="mt-3 text-sm">
        {deal
          ? `Soliq ($${t}) savdodan yutuqdan ($40) kichik — Mei Malikka $${80 + t} dan $120 gacha bo'lgan narx to'lashi mumkin, ikkalasi ham yutadi; soliq ularning $40 yutug'ining bir qismini davlatga o'tkazadi.`
          : `Soliq ($${t}) yutuqdan katta: Mei ko'pi bilan $120 to'laydi, lekin Malik soliqdan keyin $${120 - t} oladi — bu uning $80 xarajatidan kam. Malikka $80 qolishi uchun Mei $${80 + t} to'lashi kerak — bu $120 dan ko'p. Bitim yo'qoladi: ikkalasi $20 dan yo'qotadi, davlat hech narsa olmaydi — $40 toza sof yo'qotish.`}
      </p>
    </div>
  );
}

const S81b = () => (
  <div className="prose-uz">
    <p>
      Misol: Malik har hafta Meining uyini $100 ga tozalaydi. Malikning vaqti $80 turadi, toza uy Mei uchun $120 turadi — har biri $20 yutadi,
      savdodan jami yutuq $40. Endi davlat tozalovchilarga <b>$50</b> soliq qo'ydi.
    </p>
    <MalikMei />
    <p>
      Bu deadweight lossning asl manbai: <b>soliqlar xaridor va sotuvchilarni savdodan yutuqning bir qismidan mahrum qiladi</b>. Figure 4 da Q₂
      dan Q₁ gacha har bir birlikda xaridor qiymati sotuvchi xarajatidan katta, lekin farq soliqdan kichik — bu bitimlar amalga oshmaydi.
      Yo'qotilgan bu yutuqlar — DWL uchburchagi.
    </p>
  </div>
);

const S82 = () => (
  <div className="prose-uz">
    <p>
      DWL katta yoki kichikligini nima belgilaydi? Javob — <b>talab va taklifning narx egiluvchanligi</b>. Figure 5 da talab va soliq bir xil,
      faqat taklif egiluvchanligi farq qiladi (a, b); keyin taklif bir xil, talab egiluvchanligi farq qiladi (c, d).
    </p>
    <SupplyDemandGraph config={dwlElasticities} />
    <p>
      Saboq: soliq xaridor va sotuvchilarning <b>xatti-harakatini o'zgartirgani</b> uchun DWL yaratadi. Ular narxga qanchalik sezgir bo'lsa,
      muvozanat miqdori shunchalik ko'p qisqaradi. <b>Egiluvchanliklar qanchalik katta bo'lsa, DWL shunchalik katta.</b>
    </p>
    <Callout kind="exam">
      Ikki savolni farqlang: (1) <b>kim</b> to'laydi (incidence) — kamroq egiluvchan tomon; (2) <b>qancha</b> yo'qotiladi (DWL) — ikkala tomon
      ham qanchalik egiluvchan bo'lsa, shunchalik ko'p. Egiluvchanlik har ikkala savolning kaliti.
    </Callout>
    <BoxLink id="cs-dwl-debate">Case Study: The Deadweight Loss Debate</BoxLink>
  </div>
);

const S83 = () => (
  <div className="prose-uz">
    <p>
      Soliqlar kamdan-kam bir joyda turadi. Soliq kattaligi o'zgarsa, DWL va tushumga nima bo'ladi? Figure 6: kichik, o'rtacha va katta soliq.
    </p>
    <ul>
      <li>
        <b>DWL</b> — uchburchak, uning yuzi o'lchami <b>kvadratiga</b> bog'liq. Soliq ikki barobar oshsa, uchburchak asosi ham, balandligi ham
        ikki barobar → DWL <b>to'rt</b> barobar. Uch barobar → <b>to'qqiz</b> barobar.
      </li>
      <li>
        <b>Tushum</b> — to'rtburchak <M tex="T \times Q" />. Avval soliq bilan oshadi; lekin juda katta soliq bozorni keskin qisqartiradi va tushum
        kamaya boshlaydi. Juda-juda katta soliqda odamlar savdoni butunlay to'xtatadi — tushum nol.
      </li>
    </ul>
    <TaxSizeLab demand={baseD} supply={baseS} xMax={100} yMax={10} startTax={2} />
    <p>
      Panel (e) dagi tushum egri chizig'i — <T id="laffer-curve" />.
    </p>
    <BoxLink id="cs-laffer">Case Study: The Laffer Curve and Supply-Side Economics</BoxLink>
  </div>
);

const S84 = () => (
  <div className="prose-uz">
    <p>
      1-bobdagi tamoyil: bozorlar odatda iqtisodiy faoliyatni tashkil qilishning yaxshi usuli. 7-bob buni surplus orqali aniqlashtirdi. Bu bob
      ko'rsatdiki, davlat tovarga soliq qo'yganda resurslar taqsimoti kamroq samarali bo'ladi. Soliqlar nafaqat resurslarni bozor
      ishtirokchilaridan davlatga o'tkazgani uchun, balki <b>rag'batlarni buzib, DWL yaratgani</b> uchun ham qimmat.
    </p>
    <p>
      Bu oxiri emas: mikroiqtisodchilar soliq tizimini samaradorlik va adolatni muvozanatlash uchun qanday loyihalashni o'rganadi (13-bob), bozor
      muvaffaqiyatsizligi bo'lganda yaxshi mo'ljallangan soliqlar muammoni hal qilishi mumkin (10-bob). Makroiqtisodchilar esa soliqlarning
      butun iqtisodiyotga ta'sirini o'rganadi.
    </p>
  </div>
);

function DWLDebate() {
  return (
    <div className="prose-uz">
      <p>
        Bu nazariya chuqur siyosiy savol bilan bog'liq: <b>davlat qanchalik katta bo'lishi kerak?</b> Agar soliqlar katta DWL yaratsa, har bir davlat
        dasturi qimmatroq — bu kichikroq davlatga dalil. Agar DWL kichik bo'lsa — kattaroq davlat arzonroq. (Albatta, dasturlarning o'z qiymati ham
        bahsning bir qismi.)
      </p>
      <p>
        Eng muhim soliq — <b>mehnatga soliq</b> (Social Security, Medicare, daromad solig'i). Odatiy ishchi uchun barcha mehnat soliqlarining{' '}
        <T id="marginal-tax-rate" />i taxminan <b>40%</b>. Stavka ma'lum, lekin DWL haqida iqtisodchilar bahslashadi — chunki ular{' '}
        <b>mehnat taklifi egiluvchanligi</b> haqida kelishmaydi.
      </p>
      <ul>
        <li>
          <b>DWL kichik</b> deganlar: ko'pchilik maoshdan qat'i nazar to'liq ishlaydi (ayniqsa oilani boquvchi o'rta yoshdagilar) → taklif deyarli
          vertikal.
        </li>
        <li>
          <b>DWL katta</b> deganlar: ba'zi guruhlar kuchli javob beradi — qo'shimcha soat ishlashni tanlay oladiganlar; oiladagi ikkinchi daromad
          topuvchilar (uyda ishlash yoki bozorda ishlashni tanlaydi); nafaqaga chiqish vaqtini tanlaydigan keksalar; soliqdan qochib{' '}
          <T id="underground-economy" />ga o'tadiganlar.
        </li>
      </ul>
      <p>
        Bu holatlarning barchasida mehnat taklifi soliqdan keyingi ish haqiga bog'liq — shuning uchun mehnat solig'i kamroq ishlashga, uyda
        qolishga, erta nafaqaga va yashirin iqtisodiyotga undaydi. Ikki siyosatchi “ko'proq xizmatmi yoki kamroq soliqmi” deb bahslashganda,
        bahsning bir qismi aynan shu egiluvchanlik haqida.
      </p>
    </div>
  );
}

function Laffer() {
  return (
    <div className="prose-uz">
      <p>
        1974 yilda iqtisodchi Arthur Laffer Vashingtondagi restoranda salfetkaga soliq stavkasi va tushum orasidagi bog'liqlikni chizdi — Figure 6(e)
        ga o'xshash egri chiziq. U AQSh egri chiziqning <b>pasayuvchi</b> tomonida, ya'ni stavkalarni kamaytirish tushumni oshirishi mumkin, deb
        da'vo qildi.
      </p>
      <p>
        Ko'pchilik iqtisodchilar nazariy jihatdan rozi bo'lishdi, lekin amalda shubha qilishdi. Shunga qaramay g'oya Ronald Reaganni qiziqtirdi:
        Ikkinchi jahon urushi davrida 90% qo'shimcha soliq bo'lgan; Reagan eslaydi — “to'rtta film suratga olsangiz, eng yuqori stavkaga
        tushardingiz, shuning uchun hammamiz to'rtinchi filmdan keyin ishni to'xtatardik”. Soliq kamaytirish uning 1980 yilgi dasturiga kirdi; bu
        qarash <T id="supply-side-economics" /> deb ataldi.
      </p>
      <ul>
        <li>Ko'p iqtisodchilar keyingi tarix Laffer taxminini rad etdi deb hisoblaydi; boshqalar 1980-yillarni tarafdorlar foydasiga talqin qiladi.</li>
        <li>
          Oraliq fikr: umumiy soliq kamayishi odatda tushumni kamaytiradi, lekin <b>eng yuqori stavka</b> to'lovchilar uchun kamayish tushumni
          oshirishi mumkin. 1980-yillar boshida Shvetsiyada marjinal stavka ~<b>80%</b> edi — tadqiqotlar u yerda past stavka ko'proq tushum
          berardi deydi.
        </li>
        <li>
          2016–2017: Laffer Donald Trumpga katta soliq kamaytirishni maslahat berdi; Trump o'sish 3–6% bo'ladi, defitsit oshmaydi dedi. Ko'pchilik
          iqtisodchilar shubha qildi va haq chiqdi: keyingi ikki yilda o'sish <b>2.4%</b> bo'ldi, defitsit kengaydi.
        </li>
      </ul>
      <p>
        Umumiy saboq: soliq o'zgarishidan davlat qancha yutishi yoki yo'qotishini faqat stavkalarga qarab hisoblab bo'lmaydi — u odamlar
        xatti-harakatiga qanday ta'sir qilishiga bog'liq.
      </p>
      <AskExperts
        title="The Laffer Curve"
        source="IGM, 2012"
        statement="A cut in federal income tax rates in the United States right now would lead to higher national income within five years than without the tax cut."
        agree={43}
        uncertain={48}
        disagree={9}
      />
      <AskExperts
        title="The Laffer Curve"
        source="IGM, 2012"
        statement="A cut in federal income tax rates in the United States right now would raise taxable income enough so that the annual total tax revenue would be higher within five years than without the tax cut."
        agree={0}
        uncertain={4}
        disagree={96}
        note="Diqqat: iqtisodchilar soliq kamaytirish **daromadni** oshirishi mumkinligiga qisman rozi, lekin u **tushumni** oshirishiga deyarli hech kim ishonmaydi."
      />
    </div>
  );
}

const hotelD = demandThrough({ Q: 1000, P: 100 }, { Q: 900, P: 108 });
const hotelS = supplyThrough({ Q: 1000, P: 100 }, { Q: 900, P: 98 });
const HotelWidget = () => (
  <SupplyDemandGraph
    config={{ title: 'Problem 9 — Smalltown mehmonxonalari', demand: hotelD, supply: hotelS, xMax: 1600, yMax: 200, modes: ['tax'], mode: 'tax', tax: 10, taxMax: 40, shiftControls: false, surplus: true, surplusOn: true, taxSideToggle: false, priceDigits: 0 }}
  />
);
const LafferWidget = () => <TaxSizeLab demand={demandFromQ(300, 1)} supply={supplyFromQ(0, 2)} xMax={320} yMax={320} startTax={200} />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    "Soliq consumer surplus, producer surplus va davlat tushumiga qanday ta'sir qilishini A–F maydonlari bilan ko'rsatish",
    "**Deadweight loss** ni ta'riflash va uning manbai — yo'qotilgan savdo yutuqlari ekanini tushuntirish",
    "DWL ning talab va taklif egiluvchanligiga bog'liqligini ko'rsatish",
    "DWL soliq **kvadratiga** proporsional ekanini hisoblash (\\(DWL = \\tfrac12 T \\Delta Q\\))",
    "**Laffer curve** va supply-side economics bahsini baholash",
  ],
  sections: [
    { id: "s-8-1", code: "8-1", titleEn: "The Deadweight Loss of Taxation", titleUz: "Soliqning sof yo'qotishi", Body: S81 },
    { id: "s-8-1a", code: "8-1a", titleEn: "How a Tax Affects Market Participants", titleUz: "Soliq bozor ishtirokchilariga qanday ta'sir qiladi", Body: S81a, check: checks["s-8-1a"] },
    { id: "s-8-1b", code: "8-1b", titleEn: "Deadweight Losses and the Gains from Trade", titleUz: "Sof yo'qotish va savdodan yutuq", Body: S81b, check: checks["s-8-1b"] },
    { id: "s-8-2", code: "8-2", titleEn: "The Determinants of the Deadweight Loss", titleUz: "Sof yo'qotishni belgilovchi omillar", Body: S82, check: checks["s-8-2"] },
    { id: "s-8-3", code: "8-3", titleEn: "Deadweight Loss and Tax Revenue as Taxes Vary", titleUz: "Soliq o'zgarganda sof yo'qotish va tushum", Body: S83, check: checks["s-8-3"] },
    { id: "s-8-4", code: "8-4", titleEn: "Conclusion", titleUz: "Xulosa", Body: S84 },
  ],
  examTraps: [
    { title: "DWL formulasi", body: "\\(DWL = \\tfrac12 \\times T \\times \\Delta Q\\). ½ ni unutmang — bu uchburchak." },
    { title: "Kvadratik o'sish", body: "T × 2 → DWL × 4; T × 1.5 → DWL × 2.25 (QuickQuiz 8). Tushum esa T dan **sekinroq** o'sadi (QuickQuiz 9)." },
    { title: "Figure 3 jadvali", body: "ΔCS = −(B+C), ΔPS = −(D+E), Revenue = B+D, DWL = C+E. Bu jadval imtihonda tez-tez beriladi." },
    { title: "Nol DWL holatlari", body: "Mutlaqo noegiluvchan taklif yoki talab (yer solig'i) — DWL 0. Bitim baribir amalga oshsa (Sophie va Sky) — DWL 0." },
    { title: "Laffer", body: "Soliqni kamaytirish tushumni faqat egri chiziqning **pasayuvchi** tomonida oshiradi. Problem 10: cho'qqi T = 150." },
  ],
  mistakes: [
    { wrong: "“DWL = soliq tushumi.”", right: "Tushum — davlatga o'tgan pul (B + D). DWL — hech kimga o'tmagan yo'qotish (C + E)." },
    { wrong: "“Soliq ikki barobar oshsa, tushum ham ikki barobar.”", right: "Miqdor kamaygani uchun tushum ikki barobardan **kam** oshadi." },
    { wrong: "“Egiluvchan bozorga soliq qo'yish yaxshi — ko'p tushum.”", right: "Egiluvchan bozorda miqdor ko'p qisqaradi: tushum kam, DWL katta." },
    { wrong: "“Subsidiya — teskari soliq, demak DWL ni kamaytiradi.”", right: "Subsidiya ham bozorni buzadi va DWL yaratadi (ortiqcha ishlab chiqarish)." },
    { wrong: "“Sotuvchi soliq to'lasa ham narx o'zgarmasa, DWL bor.”", right: "Bitim bo'lsa va miqdor o'zgarmasa, DWL = 0 (faqat qayta taqsimlash)." },
  ],
  boxes: [
    { id: "cs-dwl-debate", kind: "Case Study", titleEn: "The Deadweight Loss Debate", titleUz: "Sof yo'qotish haqidagi bahs", Body: DWLDebate },
    { id: "cs-laffer", kind: "Case Study", titleEn: "The Laffer Curve and Supply-Side Economics", titleUz: "Laffer egri chizig'i va taklif tomoni iqtisodiyoti", Body: Laffer },
  ],
  summary: [
    "Tovarga solingan soliq xaridor va sotuvchilarning farovonligini kamaytiradi; consumer va producer surplus qisqarishi odatda davlat tushumidan ko'p. Total surplusning (CS + PS + tushum) bu qisqarishi — soliqning **deadweight loss** i.",
    "Soliqlar DWL yaratadi, chunki xaridorlar kamroq iste'mol qiladi, sotuvchilar kamroq ishlab chiqaradi va bozor total surplusni maksimal qiladigan darajadan kichrayadi. Egiluvchanliklar qanchalik katta bo'lsa, DWL shunchalik katta.",
    "Soliq kattalashgan sari rag'batlar ko'proq buziladi va DWL tez o'sadi. Tushum esa avval oshadi, lekin soliq yetarlicha katta bo'lsa, bozor qisqargani uchun kamaya boshlaydi (Laffer curve).",
  ],
  widgets: { hotel: HotelWidget, laffer: LafferWidget },
  gallery: [
    { title: "Tax Size Lab: DWL va Laffer egri chizig'i", Component: () => <TaxSizeLab demand={baseD} supply={baseS} xMax={100} yMax={10} startTax={2} /> },
  ],
};
