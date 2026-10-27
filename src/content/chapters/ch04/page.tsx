import { Sticker } from '../../../components/ui/Sticker';
import { ScheduleBuilder } from '../../../components/graphs/ScheduleBuilder';
import { ShiftTable } from '../../../components/graphs/ShiftTable';
import { SupplyDemandGraph } from '../../../components/graphs/SupplyDemandGraph';
import { Callout, PollBar } from '../../../components/ui/Kit';
import { T } from '../../../components/ui/Term';
import type { ChapterPageContent } from '../../types';
import { checks } from './quiz';
import {
  ben,
  catherine,
  demandShifts,
  equilibrium,
  hurricane,
  iceMarketTable,
  marketD,
  marketDemand,
  marketS,
  marketSupply,
  pizzaTable,
  smoking,
  supplyShifts,
  ticketsTable,
} from './presets';

function BoxLink({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <a href={`#${id}`} className="my-3 flex items-center gap-2 rounded-[0.95rem] border-2 border-dashed border-ink/60 bg-surface px-3 py-2 text-sm font-semibold transition hover:border-solid hover:bg-marker hover:text-[#111]">
      <Sticker name="clip" />
      <span>{children}</span>
      <span className="ml-auto">→</span>
    </a>
  );
}

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="not-prose card my-5 overflow-x-auto p-0">
      <table className="w-full text-sm">
        <thead className="bg-marker text-[#111]">
          <tr>
            {head.map((h) => (
              <th key={h} className="border-b-2 border-ink px-3 py-2 text-left font-bold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-dashed border-ink/20">
              {r.map((c, j) => (
                <td key={j} className={`px-3 py-2 ${j === 0 ? 'font-semibold' : ''}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        Nega qishda pomidor yozdagidan bir necha barobar qimmat? Nega to'y mavsumida restoran va to'yxona narxlari
        ko'tariladi, qish o'rtasida esa chegirmalar boshlanadi? Nega ob-havo sovib ketsa, bozorda limon narxi darhol
        sakraydi?
      </p>
      <p>
        Barcha bu hodisalarning ortida ikki so'z turadi: <b>supply and demand</b> — taklif va talab. Iqtisodchilar eng ko'p
        ishlatadigan bu ikki so'z bozor iqtisodiyotini harakatga keltiradi: har bir tovar qancha ishlab chiqarilishi va
        qanday narxda sotilishini aynan ular hal qiladi. Bu bob — butun kitobning poydevori.
      </p>
    </div>
  );
}

function S41a() {
  return (
    <div className="prose-uz">
      <p>
        <T id="market" /> — muayyan tovar yoki xizmatning xaridorlari va sotuvchilari guruhi. Xaridorlar birgalikda{' '}
        <b>talabni</b>, sotuvchilar — <b>taklifni</b> belgilaydi.
      </p>
      <p>
        Bozorlar turlicha. Ba'zilari juda tashkillashgan: bug'doy va makkajo'xori birjalarida xaridor va sotuvchilar
        ma'lum joy va vaqtda uchrashadi, auktsioner esa talab va taklifni tenglashtiradigan narxni topadi. Ko'p bozorlar esa
        tarqoq: shahardagi muzqaymoq bozorida hamma bir joyda uchrashmaydi, har bir do'kon o'z narxini yozib qo'yadi, har bir
        xaridor qayerdan qancha olishni o'zi hal qiladi. Shunga qaramay, ular bir-biri bilan chambarchas bog'liq — bu ham
        bozor.
      </p>
      <Callout kind="uz">
        Chorsu yoki Oloy bozoridagi barcha olma sotuvchilari — bitta joyda. Lekin Toshkent bo'yicha barcha taksi
        haydovchilari va yo'lovchilar ham bitta “taksi bozori”ni tashkil qiladi, garchi ular hech qachon bir joyga
        to'planmasa ham.
      </Callout>
    </div>
  );
}

function S41b() {
  return (
    <div className="prose-uz">
      <p>
        Muzqaymoq bozori — <T id="competitive-market" />: xaridorlar tanlash uchun ko'p sotuvchi borligini biladi,
        sotuvchilar esa mahsuloti boshqalarnikiga o'xshashligini biladi. Shuning uchun narx va miqdorni bitta ishtirokchi emas,
        hamma birgalikda belgilaydi.
      </p>
      <p>
        Bu bobda bozorlarni <b>mukammal raqobatli</b> (<T id="perfect-competition" label="perfectly competitive" />) deb
        olamiz. Ikki shart:
      </p>
      <ol>
        <li>Sotiladigan tovarlar <b>bir xil</b>;</li>
        <li>xaridor va sotuvchilar shunchalik <b>ko'p</b>ki, hech biri narxga ta'sir qila olmaydi.</li>
      </ol>
      <p>
        Bunday bozorda hamma bozor belgilagan narxni qabul qiladi — ular <T id="price-taker" label="price takers" />. Bozor
        narxida xaridor xohlagancha sotib oladi, sotuvchi xohlagancha sotadi. Bug'doy bozori bunga juda yaqin.
      </p>
      <p>
        Hamma bozor shunday emas. Yagona sotuvchi narxni o'zi belgilasa — bu <T id="monopoly" /> (masalan, shahardagi
        yagona kabel TV kompaniyasi). Ko'p bozorlar ikki chekka orasida. Ammo mukammal raqobat — tahlil uchun eng qulay
        boshlanish nuqtasi, va undagi saboqlar murakkabroq bozorlarga ham qo'llanadi.
      </p>
    </div>
  );
}

function S42a() {
  return (
    <div className="prose-uz">
      <p>
        <T id="quantity-demanded" /> — xaridorlar sotib olishni <b>xohlaydigan va qodir</b> bo'lgan miqdor. Unga ko'p narsa
        ta'sir qiladi, lekin bittasi markaziy rol o'ynaydi — <b>narx</b>. Muzqaymoq bir shar uchun $20 bo'lsa, kam odam
        oladi; $0.50 bo'lsa — ko'pchilik.
      </p>
      <p>
        Bu bog'liqlik deyarli barcha tovarlarga xos, shuning uchun uni <T id="law-of-demand" /> deyishadi:{' '}
        <i>boshqa narsalar o'zgarmasa</i>, narx oshsa talab miqdori kamayadi, narx tushsa — oshadi.
      </p>
      <p>
        Catherine har oy qancha muzqaymoq olishini ko'rsatuvchi jadval — <T id="demand-schedule" />, uning grafigi —{' '}
        <T id="demand-curve" />. An'anaga ko'ra narx <b>vertikal</b>, miqdor <b>gorizontal</b> o'qda.
      </p>
      <ScheduleBuilder config={catherine} />
    </div>
  );
}

function S42b() {
  return (
    <div className="prose-uz">
      <p>
        Bozorni tahlil qilish uchun bitta odam emas, <T id="market-demand" /> kerak — barcha individual talablar yig'indisi.
        Har bir narxda Catherine va Nicholasning miqdorlarini qo'shamiz. Grafikda bu individual egri chiziqlarni{' '}
        <b>gorizontal</b> qo'shish deganidir: $4 da 4 + 3 = 7 ta.
      </p>
      <ScheduleBuilder config={marketDemand} />
      <Callout kind="exam">
        “Market demand curve” — individual egri chiziqlarni <b>gorizontal</b> (miqdor bo'yicha) qo'shish. Vertikal qo'shish
        (narxlarni qo'shish) — tez-tez uchraydigan xato.
      </Callout>
    </div>
  );
}

function S42c() {
  return (
    <div className="prose-uz">
      <p>
        Bozor talab egri chizig'i “boshqa narsalar o'zgarmasa” degan farazga asoslanadi. Agar ana shu boshqa narsalardan
        biri o'zgarsa, har bir narxdagi talab miqdori o'zgaradi va egri chiziq <b>siljiydi</b>: o'ngga — <b>increase in
        demand</b>, chapga — <b>decrease in demand</b> (Figure 3).
      </p>
      <SupplyDemandGraph config={demandShifts} />
      <p>Talabni siljituvchi omillar:</p>
      <ul>
        <li>
          <b>Daromad (income).</b> Daromad tushsa talab ham tushadigan tovar — <T id="normal-good" />. Daromad tushsa talab{' '}
          <i>oshadigan</i> tovar — <T id="inferior-good" /> (masalan, avtobus qatnovi).
        </li>
        <li>
          <b>Bog'liq tovarlar narxi.</b> Muzlatilgan yogurt arzonlashsa, muzqaymoqqa talab kamayadi — ular{' '}
          <T id="substitutes" />. Shokolad sousi arzonlashsa, muzqaymoqqa talab oshadi — ular <T id="complements" />.
        </li>
        <li>
          <b>Did (tastes).</b> Pistali muzqaymoqni yaxshi ko'rsangiz, ko'proq olasiz. Iqtisodchilar didni tushuntirmaydi,
          lekin u o'zgarganda nima bo'lishini o'rganadi.
        </li>
        <li>
          <b>Kutishlar (expectations).</b> Kelasi oy daromad oshishini kutsangiz, bugun ko'proq sarflaysiz; ertaga
          arzonlashishini kutsangiz, bugun olmaysiz.
        </li>
        <li>
          <b>Xaridorlar soni.</b> Peter ham muzqaymoq ishqibozi bo'lsa, har bir narxda bozor talabi oshadi.
        </li>
      </ul>
      <Table
        head={['Variable (Table 1)', 'A change in this variable …']}
        rows={[
          ['Price of the good itself', 'Represents a movement along the demand curve'],
          ['Income', 'Shifts the demand curve'],
          ['Prices of related goods', 'Shifts the demand curve'],
          ['Tastes', 'Shifts the demand curve'],
          ['Expectations', 'Shifts the demand curve'],
          ['Number of buyers', 'Shifts the demand curve'],
        ]}
      />
      <Callout kind="exam">
        <p>
          <b>Shift yoki movement?</b> Qoida (2-bob ilovasi): grafik o'qlarida <b>ko'rsatilmagan</b> o'zgaruvchi o'zgarsa —
          egri chiziq <b>siljiydi</b>. Narx vertikal o'qda — uning o'zgarishi egri chiziq <b>bo'ylab harakat</b>.
        </p>
        <p>
          Terminlar: egri chiziq siljishi — <b>change in demand</b>; bo'ylab harakat — <b>change in quantity demanded</b>.
          Grafikdagi “Egri chiziq bo'ylab harakat” rejimini sinab ko'ring.
        </p>
      </Callout>
      <BoxLink id="cs-smoking">Case Study: Two Ways to Reduce Smoking</BoxLink>
    </div>
  );
}

function S43a() {
  return (
    <div className="prose-uz">
      <p>
        <T id="quantity-supplied" /> — sotuvchilar sotishni <b>xohlaydigan va qodir</b> bo'lgan miqdor. Narx yuqori
        bo'lsa muzqaymoq sotish foydali: sotuvchilar uzoq ishlaydi, ko'p mashina oladi, ko'p ishchi yollaydi. Narx past
        bo'lsa — kamroq ishlab chiqaradi, ba'zilari yopiladi. Bu <T id="law-of-supply" />: boshqa narsalar o'zgarmasa, narx
        oshsa taklif miqdori ham oshadi.
      </p>
      <p>
        Ben'ning jadvali — <T id="supply-schedule" />, grafigi — <T id="supply-curve" />. $2 dan past narxda Ben umuman
        muzqaymoq sotmaydi.
      </p>
      <ScheduleBuilder config={ben} />
    </div>
  );
}

function S43b() {
  return (
    <div className="prose-uz">
      <p>
        Bozor talabi kabi, <T id="market-supply" /> ham barcha sotuvchilar takliflarining yig'indisi — individual taklif egri
        chiziqlarini <b>gorizontal</b> qo'shish. $4 da Ben 3 ta, Jerry 4 ta → bozor 7 ta.
      </p>
      <ScheduleBuilder config={marketSupply} />
    </div>
  );
}

function S43c() {
  return (
    <div className="prose-uz">
      <p>
        Bozor taklif egri chizig'i ham narxdan boshqa barcha omillarni o'zgarmas deb oladi. Ulardan biri o'zgarsa, egri
        chiziq siljiydi: o'ngga — <b>increase in supply</b>, chapga — <b>decrease in supply</b> (Figure 7). Masalan, shakar
        arzonlashsa, muzqaymoq sotish foydaliroq bo'ladi — taklif o'ngga.
      </p>
      <SupplyDemandGraph config={supplyShifts} />
      <ul>
        <li>
          <b>Xomashyo narxlari (input prices).</b> Qaymoq, shakar, mashinalar, bino, ishchilar mehnati qimmatlasa, taklif
          kamayadi. Taklif xomashyo narxlariga <b>teskari</b> yo'nalishda harakat qiladi.
        </li>
        <li>
          <b>Texnologiya.</b> Mexanik muzqaymoq mashinalari mehnatni kamaytirib, taklifni oshirgan. Uzoq muddatda bu eng kuchli
          omillardan biri.
        </li>
        <li>
          <b>Kutishlar.</b> Narx oshishini kutgan sotuvchi bugungi mahsulotning bir qismini omborga qo'yib, bugun kamroq sotadi.
        </li>
        <li>
          <b>Sotuvchilar soni.</b> Ben yoki Jerry nafaqaga chiqsa — taklif kamayadi; Edy yangi do'kon ochsa — oshadi.
        </li>
      </ul>
      <Table
        head={['Variable (Table 2)', 'A change in this variable …']}
        rows={[
          ['Price of the good itself', 'Represents a movement along the supply curve'],
          ['Input prices', 'Shifts the supply curve'],
          ['Technology', 'Shifts the supply curve'],
          ['Expectations', 'Shifts the supply curve'],
          ['Number of sellers', 'Shifts the supply curve'],
        ]}
      />
      <Callout kind="uz">
        Paxta tozalash zavodiga yangi, unumliroq texnika keltirildi — bu ip-gazlama <b>taklifini</b> o'ngga siljitadi
        (texnologiya). Elektr energiyasi narxi oshdi — bu esa deyarli barcha ishlab chiqaruvchilar uchun xomashyo narxi
        oshishi, ya'ni taklif chapga.
      </Callout>
    </div>
  );
}

function S44a() {
  return (
    <div className="prose-uz">
      <p>
        Endi ikkalasini birlashtiramiz. Talab va taklif egri chiziqlari bitta nuqtada kesishadi — bu bozor{' '}
        <T id="equilibrium" />i. Undagi narx — <T id="equilibrium-price" />, miqdor — <T id="equilibrium-quantity" />.
        Muzqaymoq bozorida bu <b>$4</b> va <b>7 dona</b>.
      </p>
      <ScheduleBuilder config={iceMarketTable} />
      <p>
        Muvozanat narxida xaridorlar xohlagan miqdor sotuvchilar sotmoqchi bo'lgan miqdorga aynan teng. Shuning uchun uni{' '}
        <b>market-clearing price</b> deyishadi: hamma qoniqqan — xaridorlar xohlagancha olgan, sotuvchilar xohlagancha sotgan.
      </p>
      <p>Narx muvozanatda bo'lmasa nima bo'ladi? Grafikda “Egri chiziq bo'ylab harakat” rejimini yoqib, narx chizig'ini suring:</p>
      <ul>
        <li>
          <b>Narx $5</b> (yuqori): taklif miqdori 10, talab miqdori 4 → <T id="surplus" /> (excess supply). Sotuvchilarning
          muzlatgichlari to'lib ketadi, ular narxni tushiradi.
        </li>
        <li>
          <b>Narx $3</b> (past): talab miqdori 10, taklif 4 → <T id="shortage" /> (excess demand). Navbatlar, sotuvchilar
          narxni ko'taradi.
        </li>
      </ul>
      <SupplyDemandGraph config={equilibrium} />
      <p>
        Narx qayerdan boshlanmasin, xaridor va sotuvchilarning harakatlari uni muvozanatga suradi. Bu shunchalik keng tarqalgan
        hodisaki, uni <T id="law-of-supply-and-demand" /> deyishadi: har qanday tovarning narxi talab va taklif miqdorlarini
        tenglashtiradigan darajaga moslashadi. Ko'p bozorlarda surplus va shortage vaqtinchalik, chunki narx tez moslashadi.
      </p>
    </div>
  );
}

function S44b() {
  return (
    <div className="prose-uz">
      <p>Biror voqea muvozanatga qanday ta'sir qilishini tahlil qilish uchun kitob <b>uch qadam</b>ni taklif qiladi (Table 3):</p>
      <ol>
        <li>Voqea taklifni, talabni yoki ikkalasini siljitadimi?</li>
        <li>Egri chiziq qaysi tomonga siljiydi?</li>
        <li>Talab-taklif grafigida yangi muvozanatni eskisi bilan solishtiring: narx va miqdor qanday o'zgardi?</li>
      </ol>
      <p>
        <b>1-misol: talab siljiydi (Figure 10).</b> Yoz juda issiq keldi. (1) Ob-havo xaridorlarning didini o'zgartiradi —
        talab siljiydi, taklif joyida. (2) Issiqda sovuq narsa yoqimliroq — talab <b>o'ngga</b>. (3) Eski $4 narxida endi
        shortage, narx ko'tariladi: <b>$4 → $5</b>, miqdor <b>7 → 10</b>.
      </p>
      <SupplyDemandGraph config={{ ...demandShifts, title: 'Figure 10 — Issiq yoz', presets: undefined, demand: { a: marketD.a + marketD.b * 6, b: marketD.b } }} baseline={{ D: marketD, S: marketS }} />
      <p>
        <b>Siljish va bo'ylab harakatni farqlang.</b> Issiq havo narxni ko'targanda sotuvchilar ko'proq sotdi, lekin
        taklif egri chizig'i joyida qoldi. Iqtisodchilar aytadi: <b>quantity supplied</b> oshdi, <b>supply</b> o'zgarmadi.
        Egri chiziq siljishi — “change in supply/demand”, bo'ylab harakat — “change in the quantity supplied/demanded”.
      </p>
      <p>
        <b>2-misol: taklif siljiydi (Figure 11).</b> Bo'ron shakarqamish hosilini yo'q qilib, shakarni qimmatlashtirdi. (1) Shakar
        — xomashyo, ta'sir taklifga. (2) Xarajat oshdi — taklif <b>chapga</b>. (3) Narx <b>$4 → $5</b>, miqdor <b>7 → 4</b>.
      </p>
      <SupplyDemandGraph config={{ ...supplyShifts, title: 'Figure 11 — Shakar qimmatladi', supply: hurricane }} baseline={{ D: marketD, S: marketS }} />
      <p>
        <b>3-misol: ikkalasi siljiydi (Figure 12).</b> Issiq yoz va bo'ron bir vaqtda. Talab o'ngga, taklif chapga. Narx{' '}
        <b>aniq oshadi</b>, ammo miqdor siljishlarning nisbiy kattaligiga bog'liq: talab ko'proq siljisa — miqdor oshadi
        (panel a), taklif ko'proq siljisa — kamayadi (panel b). Bu holat <b>ambiguous</b> (noaniq) deyiladi.
      </p>
      <p>Table 4 — barcha kombinatsiyalar. Katakni bosing, grafikda shu holat chiziladi:</p>
      <ShiftTable demand={marketD} supply={marketS} xMax={16} yMax={7} />
      <Callout kind="exam">
        Table 4 ni yodlash shart emas — mantiqni tushuning: talab siljishi P va Q ni <b>bir xil</b> yo'nalishda, taklif siljishi
        esa <b>qarama-qarshi</b> yo'nalishda suradi. Ikki siljish birga bo'lsa, ular bir-biriga qarshi ishlagan o'zgaruvchi —{' '}
        <b>ambiguous</b>.
      </Callout>
      <BoxLink id="news-disasters">In the News: Price Increases after Disasters</BoxLink>
    </div>
  );
}

function S45() {
  return (
    <div className="prose-uz">
      <p>
        1-bobdagi tamoyil: bozorlar odatda iqtisodiy faoliyatni tashkil qilishning yaxshi usuli. Bu bob bozor qanday
        ishlashini ko'rsatdi: talab va taklif narxni belgilaydi, narx esa <b>signal</b> bo'lib resurslarni taqsimlaydi.
      </p>
      <p>
        Sohil bo'yidagi yer cheklangan — hamma dengiz bo'yida yashay olmaydi. Kim yashaydi? To'lashga tayyor va qodir bo'lgan.
        Narx yer talabi va taklifi tenglashguncha moslashadi. Xuddi shunday, kim fermer bo'lishini davlat rejalashtiruvchisi
        emas, oziq-ovqat narxlari va fermerlar maoshi hal qiladi: ular yetarlicha odam fermer bo'lishini ta'minlaydi.
      </p>
      <p>
        Millionlab odamning markazlashmagan qarorlari nega xaosga aylanmaydi? Javob bitta so'z — <b>narxlar</b>. Agar ko'rinmas
        qo'l bozor iqtisodiyotini boshqarsa, kitob tasviricha, <b>narx tizimi — ko'rinmas qo'lning dirijyorlik tayoqchasi</b>.
      </p>
      <div className="not-prose card mt-4 p-4">
        <div className="kicker">Ask the Experts · Price Gouging (IGM, 2020)</div>
        <p className="mt-2 text-[15px] italic">“Laws to prevent high prices for essential goods in short supply in a crisis would raise social welfare.”</p>
        <PollBar agree={35} uncertain={29} disagree={36} />
        <p className="mt-2 text-sm text-muted">Bu masalada iqtisodchilar deyarli teng bo'lingan — samaradorlik va adolat to'qnashuvi.</p>
      </div>
    </div>
  );
}

function Smoking() {
  return (
    <div className="prose-uz">
      <p>Chekish chekuvchiga ham, atrofdagilarga ham zarar. Siyosatchilar uni kamaytirmoqchi. Ikki yo'l bor:</p>
      <ul>
        <li>
          <b>Talabni siljitish.</b> Ijtimoiy reklamalar, qutilardagi ogohlantirishlar, televizorda sigaret reklamasini taqiqlash —
          har qanday narxda talab miqdorini kamaytiradi: talab egri chizig'i <b>chapga</b> (panel a: $5 da 20 → 10 dona).
        </li>
        <li>
          <b>Narxni oshirish.</b> Sigaretga soliq — ishlab chiqaruvchilar uning katta qismini narxga qo'shadi. Odamlar kamroq
          chekadi, lekin talab egri chizig'i <b>siljimaydi</b>: bu egri chiziq bo'ylab yuqoriga harakat (panel b: $5 → $10, 20 →
          12).
        </li>
      </ul>
      <SupplyDemandGraph config={smoking} />
      <p>
        Chekish narxga qanchalik sezgir? Tadqiqotlar: narx <b>10% oshsa, chekish 4% kamayadi</b>. O'smirlar ancha sezgir: 10%
        narx oshishi o'smirlar chekishini <b>12%</b> kamaytiradi.
      </p>
      <p>
        Sigaret narxi boshqa mahsulotlarga, masalan marixuanaga qanday ta'sir qiladi? Soliq raqiblari ular o'rinbosar deb, qimmat
        sigaret marixuanaga o'tishga undaydi deydi. Ko'p mutaxassislar esa tamakini “darvoza narkotik” deb biladi. Ma'lumotlar
        ikkinchi fikrga mos: sigaret arzonroq bo'lganda marixuana ko'proq iste'mol qilinadi — ya'ni ular <b>to'ldiruvchi</b>.
      </p>
    </div>
  );
}

function Disasters() {
  return (
    <div className="prose-uz">
      <p className="text-sm text-muted">Richard Thaler, “The Law of Supply and Demand Isn't Fair”, New York Times, 2020 — qisqacha mazmuni.</p>
      <p>
        Koronavirusning dastlabki haftalarida do'konlarda tualet qog'ozi, dezinfektsiya vositasi, un va xamirturush tugab qoldi;
        shifoxonalar maska va ventilyator topa olmadi. Nega narx bozorni tozalaguncha ko'tarilmadi?
      </p>
      <ul>
        <li>
          Thaler (Kahneman va Knetsch bilan) javobni bitta so'zda topgan: <b>adolat (fairness)</b>. Favqulodda vaziyatda narxni
          oshirish jamiyatda qabul qilinmaydi: bo'rondan keyin qor kurakni $15 dan $20 ga oshirgan do'konni respondentlarning{' '}
          <b>82%</b> i adolatsiz deb topgan.
        </li>
        <li>
          Yirik do'konlar narxni oshirmay, har bir xaridorga miqdorni chekladi; Amazon va eBay “price gouging”ni taqiqladi.
          Ular uzoq muddatli mijoz sadoqatini o'ylaydi; tez pul ishlamoqchi “tadbirkorlar” esa boshqacha harakat qiladi.
        </li>
        <li>
          N95 maskalar: shifoxonalar uzoq muddatli shartnoma bo'yicha <b>35 sent</b> to'lagan, taqchillikda bir chet ellik
          yetkazib beruvchiga <b>$6</b> to'lashga majbur bo'lgan.
        </li>
        <li>
          Tyler Cowen: yuqori narx vahima bilan sotib olishni to'xtatadi va tovar haqiqatan muhtojlarga yetishini oshiradi. Thaler:
          lekin kim “haqiqatan muhtoj” — buni faqat to'lashga tayyorlik hal qilmasligi kerak.
        </li>
      </ul>
      <Callout kind="tip" title="Muhokama uchun savollar">
        <ol>
          <li>Pandemiyada sotuvchilarga narxni oshirishga ruxsat berilsa, dezinfektsiya vositasini topish osonroq bo'larmidi? Nega?</li>
          <li>Narx oshirish taqiqlansa, taqchil resurslar qanday taqsimlanishi kerak? Taklifingizning afzalligi va muammolari qanday?</li>
        </ol>
      </Callout>
    </div>
  );
}

const PizzaWidget = () => <ScheduleBuilder config={pizzaTable} />;
const TicketsWidget = () => <ScheduleBuilder config={ticketsTable} />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    "**Market**, **competitive market** va **perfect competition** ni ta'riflash",
    "Talab va taklif jadvali va egri chizig'ini qurish, individual egri chiziqlardan bozor egri chizig'ini olish",
    "Talab va taklifni siljituvchi omillarni bilish va **shift** bilan **movement along**ni farqlash",
    "Muvozanatni topish, **surplus** va **shortage** bozorni qanday muvozanatga qaytarishini tushuntirish",
    "**Uch qadam** bilan har qanday voqeaning narx va miqdorga ta'sirini tahlil qilish (Table 4)",
    "Narxlar resurslarni qanday taqsimlashini tushuntirish",
  ],
  sections: [
    { id: "s-4-1a", code: "4-1a", titleEn: "What Is a Market?", titleUz: "Bozor nima?", Body: S41a },
    { id: "s-4-1b", code: "4-1b", titleEn: "What Is Competition?", titleUz: "Raqobat nima?", Body: S41b, check: checks["s-4-1"] },
    { id: "s-4-2a", code: "4-2a", titleEn: "The Demand Curve: The Relationship between Price and Quantity Demanded", titleUz: "Talab egri chizig'i", Body: S42a, check: checks["s-4-2a"] },
    { id: "s-4-2b", code: "4-2b", titleEn: "Market Demand versus Individual Demand", titleUz: "Bozor talabi va individual talab", Body: S42b, check: checks["s-4-2b"] },
    { id: "s-4-2c", code: "4-2c", titleEn: "Shifts in the Demand Curve", titleUz: "Talab egri chizig'ining siljishi", Body: S42c, check: checks["s-4-2c"] },
    { id: "s-4-3a", code: "4-3a", titleEn: "The Supply Curve: The Relationship between Price and Quantity Supplied", titleUz: "Taklif egri chizig'i", Body: S43a, check: checks["s-4-3a"] },
    { id: "s-4-3b", code: "4-3b", titleEn: "Market Supply versus Individual Supply", titleUz: "Bozor taklifi va individual taklif", Body: S43b, check: checks["s-4-3b"] },
    { id: "s-4-3c", code: "4-3c", titleEn: "Shifts in the Supply Curve", titleUz: "Taklif egri chizig'ining siljishi", Body: S43c, check: checks["s-4-3c"] },
    { id: "s-4-4a", code: "4-4a", titleEn: "Equilibrium", titleUz: "Muvozanat", Body: S44a, check: checks["s-4-4a"] },
    { id: "s-4-4b", code: "4-4b", titleEn: "Three Steps to Analyzing Changes in Equilibrium", titleUz: "Muvozanat o'zgarishini tahlil qilishning uch qadami", Body: S44b, check: checks["s-4-4b"] },
    { id: "s-4-5", code: "4-5", titleEn: "Conclusion: How Prices Allocate Resources", titleUz: "Xulosa: narxlar resurslarni qanday taqsimlaydi", Body: S45 },
  ],
  examTraps: [
    { title: "Shift yoki movement?", body: "O'z narxi o'zgarsa — **movement along** (change in quantity demanded/supplied). Boshqa omil o'zgarsa — **shift** (change in demand/supply)." },
    { title: "Normal va inferior", body: "Normal: daromad ↑ → talab ↑. Inferior: daromad ↑ → talab ↓. Inferior — “sifatsiz” degani emas." },
    { title: "Substitutes va complements", body: "O'rinbosar qimmatlasa — talab **o'ngga**; to'ldiruvchi qimmatlasa — talab **chapga**. Tovarning o'z narxi bilan aralashtirmang." },
    { title: "Talabni siljituvchi 5 omil", body: "Income, prices of related goods, tastes, expectations, number of buyers. **Taklif** uchun 4 omil: input prices, technology, expectations, number of sellers." },
    { title: "Bozor egri chizig'i", body: "Individual egri chiziqlar **gorizontal** qo'shiladi: har bir narxda miqdorlar yig'indisi." },
    { title: "Ikki siljish — ambiguous", body: "D↑ va S↓: P ↑ aniq, Q noaniq. D↑ va S↑: Q ↑ aniq, P noaniq. Imtihonda “cannot be determined” javobi to'g'ri bo'lishi mumkin." },
  ],
  mistakes: [
    { wrong: "“Narx tushdi, demak talab oshdi.”", right: "Narx tushsa **talab miqdori** oshadi (harakat). **Talab** oshishi — egri chiziqning o'ngga siljishi." },
    { wrong: "“Talab oshsa taklif ham oshadi.”", right: "Taklif egri chizig'i joyida qoladi; **taklif miqdori** oshadi (yuqoriga harakat)." },
    { wrong: "“Shortage bo'lsa narx tushadi.”", right: "Shortage — narx muvozanatdan **past**: navbatlar, narx **ko'tariladi**." },
    { wrong: "“Xomashyo qimmatlasa talab kamayadi.”", right: "Xomashyo narxi — **taklif** omili: taklif chapga, narx ↑, miqdor ↓." },
    { wrong: "“Muvozanatda hech kim sotib olmaydi, chunki bozor to'xtaydi.”", right: "Muvozanatda savdo davom etadi — faqat narxga yuqoriga yoki pastga **bosim** yo'q." },
    { wrong: "“Bozor talabi — o'rtacha talab.”", right: "Yig'indi: barcha xaridorlarning miqdorlari qo'shiladi." },
  ],
  boxes: [
    { id: "cs-smoking", kind: "Case Study", titleEn: "Two Ways to Reduce Smoking", titleUz: "Chekishni kamaytirishning ikki yo'li", Body: Smoking },
    { id: "news-disasters", kind: "In the News", titleEn: "Price Increases after Disasters", titleUz: "Ofatlardan keyin narx oshishi", Body: Disasters },
  ],
  summary: [
    "Iqtisodchilar raqobatli bozorlarni tahlil qilish uchun **talab va taklif modelini** ishlatadi. Raqobatli bozorda xaridor va sotuvchilar ko'p, har birining narxga ta'siri juda kichik yoki umuman yo'q.",
    "**Talab egri chizig'i** talab miqdori narxga qanday bog'liqligini ko'rsatadi. Talab qonuniga ko'ra narx tushsa talab miqdori oshadi — shuning uchun egri chiziq pastga egilgan.",
    "Narxdan tashqari talab omillari: **daromad, o'rinbosar va to'ldiruvchilar narxi, did, kutishlar, xaridorlar soni**. Ulardan biri o'zgarsa, talab egri chizig'i siljiydi.",
    "**Taklif egri chizig'i** taklif miqdori narxga qanday bog'liqligini ko'rsatadi. Taklif qonuniga ko'ra narx oshsa taklif miqdori oshadi — egri chiziq yuqoriga egilgan.",
    "Narxdan tashqari taklif omillari: **xomashyo narxlari, texnologiya, kutishlar, sotuvchilar soni**. Ulardan biri o'zgarsa, taklif egri chizig'i siljiydi.",
    "Talab va taklif kesishmasi — **bozor muvozanati**: muvozanat narxida talab miqdori taklif miqdoriga teng.",
    "Xaridor va sotuvchilarning harakati bozorni tabiiy ravishda muvozanatga suradi: narx yuqori bo'lsa **surplus** narxni tushiradi, past bo'lsa **shortage** narxni ko'taradi.",
    "Har qanday voqeani tahlil qilish uchun **uch qadam**: qaysi egri chiziq siljiydi, qaysi tomonga, yangi va eski muvozanatni solishtiring.",
    "Bozor iqtisodiyotida **narxlar — signallar**: ular qarorlarni yo'naltiradi va cheklangan resurslarni taqsimlaydi.",
  ],
  widgets: { pizza: PizzaWidget, tickets: TicketsWidget },
  gallery: [
    { title: "Bozor talabi: individual jadvallarni qo'shish", Component: () => <ScheduleBuilder config={marketDemand} /> },
    { title: "Bozor taklifi: individual jadvallarni qo'shish", Component: () => <ScheduleBuilder config={marketSupply} /> },
    { title: "Table 4: talab va taklif siljishlari", Component: () => <ShiftTable demand={marketD} supply={marketS} xMax={16} yMax={7} /> },
  ],
};
