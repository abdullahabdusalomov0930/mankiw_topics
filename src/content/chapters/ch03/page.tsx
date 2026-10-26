import { ComparativeAdvantageLab } from '../../../components/graphs/ComparativeAdvantageLab';
import { Callout } from '../../../components/ui/Kit';
import { AskExperts, BookTable, BoxLink, Source } from '../../../components/ui/Lesson';
import { T } from '../../../components/ui/Term';
import type { ChapterPageContent } from '../../types';
import { checks } from './quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        Oddiy kun: Farg'ona olmasidan sharbat, Braziliya donidan qahva, Xitoyda yasalgan planshetda yangiliklar, Turkiyada tikilgan ko'ylak, o'nlab mamlakat
        detallaridan yig'ilgan velosiped, AQShda yozilgan va boshqa joyda chop etilgan darslik. Har kuni siz hech qachon ko'rmagan minglab odamlarga tayanasiz.
      </p>
      <p>
        Ular buni saxiylikdan yoki davlat buyrug'i bilan qilmaydi — evaziga nimadir olgani uchun qiladi. Bu bob 1-bobdagi 5-tamoyilni ochadi: <b>savdo hammani boyitishi
        mumkin</b>. Odamlar savdodan aniq nima yutadi? Nega o'zaro bog'liq bo'lamiz? Sartaroshdan soch oldirish ham, dunyoning narigi chekkasida tikilgan futbolka ham — bir xil mantiq.
      </p>
    </div>
  );
}

const S31 = () => (
  <div className="prose-uz">
    <p>
      Dunyoda faqat ikki tovar — <b>go'sht va kartoshka</b>, va ikki odam — chorvador <b>Ruby</b> va kartoshkakor <b>Frank</b>. Ikkalasi ham ikkalasini yeyishni xohlaydi.
      Agar Ruby faqat go'sht, Frank faqat kartoshka ishlab chiqara olsa — savdo foydasi aniq: oylab qovurilgan, dimlangan go'sht yoki pyure, fri kartoshka yegandan ko'ra,
      bifshteks bilan pishgan kartoshka yaxshiroq. Har biri ikkinchi tovarni faqat katta xarajat bilan yetishtira olsa ham xuddi shunday.
    </p>
    <p>Lekin yutuq kamroq ravshan bo'ladigan holat — biri <b>hamma narsada</b> yaxshiroq bo'lsa. Ruby ikkalasida ham yaxshiroq. U Frank bilan savdo qilishi kerakmi?</p>
  </div>
);

const S31a = () => (
  <div className="prose-uz">
    <p>Ikkalasi kuniga 8 soat ishlaydi:</p>
    <BookTable
      caption="Figure 1 (a) — Production Opportunities"
      head={['', 'Minutes per oz: Meat', 'Potatoes', 'Produced in 8 hours: Meat', 'Potatoes']}
      rows={[
        ['Frank the farmer', '60 min/oz', '15 min/oz', '8 oz', '32 oz'],
        ['Ruby the rancher', '20 min/oz', '10 min/oz', '24 oz', '48 oz'],
      ]}
    />
    <p>
      Frank 8 soat kartoshka eksa — 32 oz, hammasini go'shtga sarflasa — 8 oz; yarmini har biriga — 16 oz kartoshka va 4 oz go'sht. Ruby: 48 oz yoki 24 oz; yarim-yarim —
      24 va 12. Bular — ularning <T id="production-possibilities-frontier" />lari. 2-bobdagidan farqli ravishda ular <b>to'g'ri chiziq</b>: Frank go'shtdan bir soat olib
      kartoshkaga bersa, doim 1 oz go'sht yo'qotib 4 oz kartoshka oladi — nisbat o'zgarmas.
    </p>
    <p>
      Savdosiz har kim ishlab chiqarganini iste'mol qiladi: PPF = <b>iste'mol imkoniyatlari chegarasi</b>. Didlariga ko'ra Frank A (16 oz kartoshka, 4 oz go'sht), Ruby B (24, 12) ni tanlaydi.
    </p>
  </div>
);

const S31b = () => (
  <div className="prose-uz">
    <p>
      Yillar o'tib Ruby taklif qiladi: “Frank, faqat kartoshka ek — 32 oz. 15 oz ni menga ber, men senga 5 oz go'sht beraman. Sen 17 oz kartoshka va 5 oz go'sht yeysan —
      hozirgidan ikkalasi ham ko'p!” Frank shubhalanadi: “Men uchun shuncha yaxshi bo'lsa, sen uchun yaxshi bo'lishi mumkin emas.” Ruby: “Men 6 soat go'sht, 2 soat
      kartoshka — 18 oz go'sht va 12 oz kartoshka. 5 oz go'shtni 15 oz kartoshkaga almashtirsam, 13 oz go'sht va 27 oz kartoshka — men ham yutaman!”
    </p>
    <BookTable
      caption="Figure 2 (c) — The Gains from Trade: A Summary"
      head={['', 'Frank: Meat', 'Potatoes', 'Ruby: Meat', 'Potatoes']}
      rows={[
        ['Without trade: production & consumption', '4 oz', '16 oz', '12 oz', '24 oz'],
        ['With trade: production', '0 oz', '32 oz', '18 oz', '12 oz'],
        ['Trade', 'gets 5 oz', 'gives 15 oz', 'gives 5 oz', 'gets 15 oz'],
        ['Consumption', '5 oz', '17 oz', '13 oz', '27 oz'],
        ['**Gains from trade**', '**+1 oz**', '**+1 oz**', '**+1 oz**', '**+3 oz**'],
      ]}
    />
    <ComparativeAdvantageLab />
    <p>
      Ikkalasi ham bir soat ko'p ishlamasdan ko'proq go'sht va kartoshka iste'mol qiladi: A* va B* nuqtalari o'z PPF laridan <b>tashqarida</b> — bu <T id="gains-from-trade" />.
      Jumboq: Ruby ikkalasida ham yaxshiroq bo'lsa, Frank “eng yaxshi qiladigan ishi”ga qanday ixtisoslashadi?
    </p>
    <Callout kind="note" title="Kitob jadvali haqida">
      Kitobning chop etilgan jadvalidagi “Increase in Consumption” qatori matn ajratishda buzilib chiqdi; yuqoridagi +1/+1/+1/+3 qiymatlari jadvaldagi iste'mol raqamlaridan
      qayta hisoblangan (5−4, 17−16, 13−12, 27−24).
    </Callout>
  </div>
);

const S32a = () => (
  <div className="prose-uz">
    <p>
      Kim kartoshkani arzonroq ishlab chiqaradi? Birinchi javob — resurslarni solishtirish: <T id="absolute-advantage" />. Bu yerda yagona resurs — vaqt. Ruby go'shtga 20
      (Frank 60), kartoshkaga 10 (Frank 15) daqiqa sarflaydi — <b>ikkalasida ham</b> mutlaq ustun. Xarajat resurs bilan o'lchansa, kartoshka Ruby uchun arzonroq.
    </p>
  </div>
);

const S32b = () => (
  <div className="prose-uz">
    <p>
      Ikkinchi javob — <T id="opportunity-cost" />. Ruby 1 oz kartoshkaga 10 daqiqa sarflaydi; shu vaqtda ½ oz go'sht ishlab chiqarardi → 1 oz kartoshka = <b>½ oz go'sht</b>.
      Frank 15 daqiqa; shu vaqtda ¼ oz go'sht → 1 oz kartoshka = <b>¼ oz go'sht</b>.
    </p>
    <BookTable
      caption="Table 1 — The Opportunity Cost of Meat and Potatoes"
      head={['', '1 oz of Meat', '1 oz of Potatoes']}
      rows={[
        ['Frank the farmer', '4 oz potatoes', '¼ oz meat'],
        ['Ruby the rancher', '2 oz potatoes', '½ oz meat'],
      ]}
    />
    <p>
      Go'shtning OC i kartoshka OC ining <b>teskarisi</b>. <T id="comparative-advantage" /> — tovarni kichikroq imkoniyat xarajati bilan ishlab chiqarish: Frank — <b>kartoshkada</b>{' '}
      (¼ &lt; ½), Ruby — <b>go'shtda</b> (2 &lt; 4).
    </p>
    <Callout kind="exam">
      Bir kishi ikkala tovarda <b>mutlaq</b> ustun bo'lishi mumkin, lekin ikkalasida <b>qiyosiy</b> ustun bo'la olmaydi: bir tovarning OC i yuqori bo'lsa, ikkinchisiniki past.
      OC lar teng bo'lsa — qiyosiy ustunlik yo'q va savdodan yutuq yo'q (QuickQuiz 8).
    </Callout>
  </div>
);

const S32c = () => (
  <div className="prose-uz">
    <p>
      Har kim qiyosiy ustun tovarni ishlab chiqarsa, umumiy ishlab chiqarish oshadi: kartoshka <b>40 → 44</b>, go'sht <b>16 → 18</b> oz. Pirog kattalashdi.
    </p>
    <p>
      Yutuq <b>yashirin narxlarda</b> ko'rinadi: Frank 5 oz go'sht uchun 15 oz kartoshka beradi — 1 oz go'sht = <b>3 oz kartoshka</b>, uning OC idan (4) arzon. Ruby 5 oz go'sht
      uchun 15 oz kartoshka oladi — 1 oz kartoshka = <b>⅓ oz go'sht</b>, uning OC idan (½) arzon. Har biri tovarni o'z imkoniyat xarajatidan arzonroqqa oladi.
    </p>
    <Callout kind="note" title="Matn haqida">Kitob PDF matnida “11/3 ounce” deb chiqqan — bu ajratishdagi xato, to'g'risi ⅓ (5/15).</Callout>
  </div>
);

const S32d = () => (
  <div className="prose-uz">
    <p>
      Umumiy qoida: ikkala tomon yutishi uchun savdo narxi ularning <b>imkoniyat xarajatlari orasida</b> bo'lishi kerak — <T id="terms-of-trade" />. Go'sht narxi 2 (Ruby OC) va
      4 (Frank OC) oz kartoshka orasida; 3 — o'rtada bo'lishi shart emas.
    </p>
    <ul>
      <li>Narx &lt; 2: ikkalasi ham go'sht <b>sotib olmoqchi</b> — sotuvchi yo'q.</li>
      <li>Narx &gt; 4: ikkalasi ham go'sht <b>sotmoqchi</b> — xaridor yo'q.</li>
      <li>2 &lt; narx &lt; 4: Ruby go'sht sotib kartoshka oladi, Frank aksincha — ikkalasi yutadi.</li>
    </ul>
    <BoxLink id="fyi-smith-ricardo">FYI: The Legacy of Adam Smith and David Ricardo</BoxLink>
  </div>
);

const S33a = () => (
  <div className="prose-uz">
    <p>
      Tennischi <b>Naomi Osaka</b> maysazorini 2 soatda o'radi; shu 2 soatda u reklama suratga olib <b>$30,000</b> topardi. Qo'shni bola <b>Hari</b> 4 soatda o'radi; shu vaqtda
      McDonald's'da <b>$50</b> topardi. Osaka — <b>mutlaq</b> ustun (tezroq), lekin OC: Osaka $30,000, Hari $50 → <b>qiyosiy</b> ustunlik Hari'da.
    </p>
    <p>
      Osaka reklama suratga olishi va Hari'ni yollashi kerak (agar o'rish uning sevimli dam olish usuli bo'lmasa). $50 dan ko'p va $30,000 dan kam har qanday to'lov ikkalasini
      yutadi. Ishlab chiqarish omili sifatida <b>vaqt</b> — eng qimmat resurs.
    </p>
  </div>
);

const S33b = () => (
  <div className="prose-uz">
    <p>
      Chetda ishlab chiqarilib, ichkarida sotiladigan tovarlar — <T id="imports" />, aksincha — <T id="exports" />. AQSh va Yaponiya: ikkala ishchi oyiga <b>1 mashina</b>; AQSh
      ishchisi (unumdor yer) <b>2 tonna</b>, Yaponiya ishchisi <b>1 tonna</b> oziq-ovqat.
    </p>
    <ul>
      <li>1 mashina OC: AQSh — 2 t, Yaponiya — 1 t → <b>Yaponiya mashinada</b> qiyosiy ustun, eksport qiladi.</li>
      <li>1 t oziq-ovqat OC: AQSh — ½ mashina, Yaponiya — 1 → <b>AQSh oziq-ovqatda</b>, eksport qiladi.</li>
    </ul>
    <p>
      Haqiqat murakkabroq: savdo amerikalik fermer va amerikalik avtoishchiga turlicha ta'sir qiladi — mamlakat umuman yutsa ham, ba'zi odamlar yutqazishi mumkin. Lekin xulosa:
      xalqaro savdo urush emas, unda hamma mamlakatlar farovonlashadi. O'zbekiston uchun ham: paxta-to'qimachilik, meva-sabzavot va oltin eksporti — qiyosiy ustunlik mantiqi.
    </p>
    <AskExperts
      title="Trade between China and the United States"
      source="IGM, June 19, 2012"
      statement="Trade with China makes most Americans better off because, among other advantages, they can buy goods that are made or assembled more cheaply in China."
      note="Ikkinchi da'vo: “Some Americans who work in the production of competing goods, such as clothing and furniture, are made worse off by trade with China.” Ikkala da'vo bo'yicha foizlar kitobda rasm sifatida berilgan va matndan o'qib bo'lmadi (inventory.md). Kitob xulosasi: savdo ko'pchilikka foyda, lekin raqobatlashuvchi tarmoq ishchilariga zarar."
    />
  </div>
);

const S34 = () => (
  <div className="prose-uz">
    <p>
      Amerikaliklar Xitoy paypoqlarini sotib olganda, Meyn aholisi Florida apelsin sharbatini ichganda, uy egasi qo'shni bolani maysazor o'rishga yollaganda — bir xil iqtisodiy kuchlar
      ishlaydi. Ikki kishilik dunyoda Ruby va Frank to'g'ridan-to'g'ri kelishadi; milliardlab odamli dunyoda bu vazifani <b>talab va taklif</b> bozor kuchlari bajaradi (4-bob).
    </p>
    <BoxLink id="news-marriage">In the News: Economics within a Marriage</BoxLink>
  </div>
);

function SmithRicardo() {
  return (
    <div className="prose-uz">
      <p>
        Adam Smit (1776): har bir oqil oila boshlig'ining qoidasi — uyda sotib olishdan qimmatga tushadigan narsani yasamaslik. Tikuvchi o'z poyabzalini tikmaydi, poyabzalchi o'z kiyimini
        tikmaydi, dehqon ikkalasini ham — har biri qo'shnisidan ustun bo'lgan ishga butun kuchini beradi va mahsulotining bir qismiga kerakli narsani sotib oladi.
      </p>
      <Source>Adam Smith, The Wealth of Nations (1776) — qisqacha bayon</Source>
      <p>
        Smit kitobi millioner birja makleri <b>David Ricardo</b>ni iqtisodchi bo'lishga ilhomlantirdi. U 1817-yil <i>On the Principles of Political Economy and Taxation</i> kitobida qiyosiy
        ustunlik tamoyilini bugungi ko'rinishida ishlab chiqdi: ikki tovar (vino va mato), ikki mamlakat (Angliya va Portugaliya) — ikkalasi ham savdo va ixtisoslashuvdan yutadi.
        Ricardo parlament a'zosi sifatida don importini cheklovchi <b>Corn Laws</b>ga qarshi chiqdi.
      </p>
      <p>
        Smit va Ricardo xulosalari vaqt sinovidan o'tdi: iqtisodchilar siyosatda ko'p kelishmasa ham, erkin savdoni deyarli bir ovozdan qo'llaydi — va asosiy dalil hali ham qiyosiy ustunlik.
      </p>
    </div>
  );
}

function Marriage() {
  return (
    <div className="prose-uz">
      <Source>Emily Oster, “You're Dividing the Chores Wrong,” Slate, November 21, 2012</Source>
      <p>
        Uy ishlari — so'rovlarda eng yoqimsiz faoliyatlardan (ishga qatnash bilan birga). Har kim har xil narsada yaxshi bo'lsa — taqsimlash oson. Ko'pincha esa bir kishi hamma narsada
        yaxshiroq. Iqtisodchi Emily Oster ham ovqat pishirish, ham idish yuvishda eridan yaxshiroq edi. Bola tug'ilgach, u ikkalasini ham qilishi kerakmi?
      </p>
      <ul>
        <li>
          Vaqt sarfi ma'lumotlari: ayollar uy ishiga kuniga erkaklardan ~44 daqiqa ko'p vaqt sarflaydi (2 soat 11 daq. va 1 soat 27 daq.); erkaklar faqat “maysazor” va “tashqi ta'mir”da ko'p.
        </li>
        <li>
          Birinchi tamoyil — <b>o'suvchi marjinal xarajat</b>: odamlar charchaganda yomonlashadi. Ertalab 9 dagi “o'rtacha” xodim tungi 2 dagi charchagan “yaxshi” xodimdan yaxshiroq. Shuning uchun
          hamma ishni bitta odamga yuklash samarasiz; har kimning oxirgi vazifasidagi samaradorligini tenglashtirish kerak.
        </li>
        <li>
          Kim nima qiladi? — <b>qiyosiy ustunlik</b>. Misol: Finlyandiya kiyik qalpoqlari va qor poyabzalida Shvetsiyadan yaxshi, lekin qalpoqlarda juda ko'p, poyabzalda ozgina yaxshi →
          Finlyandiya qalpoq, Shvetsiya poyabzal qilsa, dunyo ishlab chiqarishi maksimal.
        </li>
        <li>
          Oster ovqatda “juda ko'p”, idishda “biroz” yaxshiroq edi → eri idish yuvadigan bo'ldi. Bonus: <b>learning by doing</b> — 18 oydan keyin idish mashinasi “san'at asari”ga aylandi va
          Osterga unga yaqinlashish taqiqlandi.
        </li>
      </ul>
      <Callout kind="tip" title="Muhokama uchun savollar">
        <ol>
          <li>Oilangizda vazifalar qiyosiy ustunlik bo'yicha taqsimlanganmi? Qanday yaxshilash mumkin?</li>
          <li>Iqtisodchiga turmushga chiqish oilaviy totuvlikka yordam beradimi yoki aksincha?</li>
        </ol>
      </Callout>
    </div>
  );
}

const Lab = () => <ComparativeAdvantageLab />;
const Calc = () => <ComparativeAdvantageLab initial="calc" />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    "Frank va Ruby misolida **PPF** dan iste'mol imkoniyatlarini va savdodan yutuqni ko'rsatish",
    "**Absolute advantage** va **comparative advantage** ni farqlash, imkoniyat xarajatini hisoblash",
    "Savdo narxi nega imkoniyat xarajatlari **orasida** bo'lishi kerakligini tushuntirish",
    "Qiyosiy ustunlikni odamlarga (Osaka) va mamlakatlarga (AQSh–Yaponiya) qo'llash; **imports** va **exports**",
    "Savdo mamlakatni boyitsa ham, ba'zi guruhlarga zarar qilishi mumkinligini tushunish",
  ],
  sections: [
    { id: "s-3-1", code: "3-1", titleEn: "A Parable for the Modern Economy", titleUz: "Zamonaviy iqtisodiyot uchun masal", Body: S31 },
    { id: "s-3-1a", code: "3-1a", titleEn: "Production Possibilities", titleUz: "Ishlab chiqarish imkoniyatlari", Body: S31a, check: checks["s-3-1a"] },
    { id: "s-3-1b", code: "3-1b", titleEn: "Specialization and Trade", titleUz: "Ixtisoslashuv va savdo", Body: S31b, check: checks["s-3-1b"] },
    { id: "s-3-2a", code: "3-2a", titleEn: "Absolute Advantage", titleUz: "Mutlaq ustunlik", Body: S32a, check: checks["s-3-2a"] },
    { id: "s-3-2b", code: "3-2b", titleEn: "Opportunity Cost and Comparative Advantage", titleUz: "Imkoniyat xarajati va qiyosiy ustunlik", Body: S32b, check: checks["s-3-2b"] },
    { id: "s-3-2c", code: "3-2c", titleEn: "Comparative Advantage and Trade", titleUz: "Qiyosiy ustunlik va savdo", Body: S32c, check: checks["s-3-2c"] },
    { id: "s-3-2d", code: "3-2d", titleEn: "The Price of the Trade", titleUz: "Savdo narxi", Body: S32d, check: checks["s-3-2d"] },
    { id: "s-3-3a", code: "3-3a", titleEn: "Should Naomi Osaka Mow Her Own Lawn?", titleUz: "Naomi Osaka o'z maysazorini o'rishi kerakmi?", Body: S33a, check: checks["s-3-3a"] },
    { id: "s-3-3b", code: "3-3b", titleEn: "Should the United States Trade with Other Countries?", titleUz: "AQSh boshqa mamlakatlar bilan savdo qilishi kerakmi?", Body: S33b, check: checks["s-3-3b"] },
    { id: "s-3-4", code: "3-4", titleEn: "Conclusion", titleUz: "Xulosa", Body: S34 },
  ],
  examTraps: [
    { title: "Mutlaq ≠ qiyosiy", body: "Mutlaq — kamroq **resurs**; qiyosiy — kichikroq **OC**. Savdo yo'nalishini **qiyosiy** belgilaydi." },
    { title: "OC hisoblash yo'nalishi", body: "Vaqt bilan: OC(X) = vaqt(X) / vaqt(Y). Mahsulot bilan: OC(X) = Y/soat ÷ X/soat. Teskarisini aralashtirmang." },
    { title: "Narx oralig'i", body: "Ikkala tomon yutadi ⇔ narx ikki OC **orasida** (go'sht: 2 < P < 4)." },
    { title: "Teng OC", body: "OC lar teng bo'lsa — yutuq yo'q, hatto kimdir ikkalasida mutlaq ustun bo'lsa ham (QuickQuiz 8)." },
    { title: "Import", body: "Mamlakat **boshqalar qiyosiy ustun** bo'lgan tovarni import qiladi (QuickQuiz 6)." },
  ],
  mistakes: [
    { wrong: "“Ruby hamma narsada yaxshi — savdodan yutmaydi.”", right: "Ruby ham yutadi: 12 + 24 → 13 + 27." },
    { wrong: "“Iste'dodli odam hamma ishda qiyosiy ustun.”", right: "Qiyosiy ustunlik ikkala tovarda bo'la olmaydi." },
    { wrong: "“Savdoda biri yutsa, ikkinchisi yutqazadi.”", right: "Ixtiyoriy savdo **ikkala** tomonni yutadi." },
    { wrong: "“Savdo mamlakat uchun yaxshi — demak hamma uchun yaxshi.”", right: "Raqobatlashuvchi tarmoq ishchilari zarar ko'rishi mumkin." },
    { wrong: "“To'g'ri chiziqli PPF bo'rtgani bilan bir xil.”", right: "To'g'ri chiziq — OC **o'zgarmas** (Frank, Ruby)." },
  ],
  boxes: [
    { id: "fyi-smith-ricardo", kind: "FYI", titleEn: "The Legacy of Adam Smith and David Ricardo", titleUz: "Adam Smit va David Rikardo merosi", Body: SmithRicardo },
    { id: "news-marriage", kind: "In the News", titleEn: "Economics within a Marriage", titleUz: "Oila ichidagi iqtisodiyot", Body: Marriage },
  ],
  summary: [
    "Har bir kishi AQShda va butun dunyoda boshqa ko'p odamlar ishlab chiqargan tovar va xizmatlarni iste'mol qiladi. O'zaro bog'liqlik va savdo maqbul, chunki ular hammaga ko'proq miqdor va xilma-xillikdagi tovarlardan foydalanish imkonini beradi.",
    "Ikki kishining ishlab chiqarish qobiliyatini ikki usulda solishtirish mumkin: tovarni **kamroq resurs** bilan ishlab chiqaradigan — **absolute advantage**ga, **kichikroq imkoniyat xarajati** bilan ishlab chiqaradigan — **comparative advantage**ga ega. Savdodan yutuq mutlaq emas, **qiyosiy** ustunlikka asoslanadi.",
    "Savdo hammani boyitadi, chunki odamlarga **qiyosiy ustun** bo'lgan faoliyatga ixtisoslashish imkonini beradi.",
    "Qiyosiy ustunlik tamoyili odamlarga ham, **mamlakatlarga** ham qo'llanadi. Iqtisodchilar undan mamlakatlar o'rtasida **erkin savdo**ni himoya qilishda foydalanadi.",
  ],
  widgets: { ca: Lab, 'ca-calc': Calc },
  gallery: [
    { title: "Frank va Ruby: ixtisoslashuv va savdo", Component: Lab },
    { title: "Mutlaq va qiyosiy ustunlik kalkulyatori", Component: Calc },
  ],
};
