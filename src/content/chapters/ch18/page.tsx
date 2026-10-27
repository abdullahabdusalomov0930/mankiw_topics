import { BundlingLab, DuopolyLab, GameLab, Tournament } from '../../../components/graphs/GameWidgets';
import { Callout } from '../../../components/ui/Kit';
import { AskExperts, BookTable, BoxLink, Source } from '../../../components/ui/Lesson';
import { T } from '../../../components/ui/Term';
import type { ChapterPageContent } from '../../types';
import { checks } from './quiz';

function Hook() {
  return (
    <div className="prose-uz">
      <p>
        Tennis o'ynasangiz, to'pingiz ehtimol Penn, Wilson, Dunlop, Prince yoki Babolat'dan. Bu bir necha kompaniya AQShdagi tennis to'plarining katta qismini yetkazadi va birgalikda miqdor hamda narxni
        belgilaydi — bu <T id="oligopoly" />. Mohiyati: sotuvchilar kam, shuning uchun har birining harakati boshqalarning foydasiga katta ta'sir qiladi.
      </p>
      <p>
        Tahlil bizni <T id="game-theory" />ga olib boradi — strategik vaziyatlarda odamlar qanday harakat qilishi: shaxmatda ham, biznesda ham. Oligopoliyada hamkorlik va shaxsiy manfaat o'rtasida doimiy
        keskinlik bor. O'zbekistonda ham sement, mobil aloqa yoki aviaqatnovlar kabi kam o'yinchili bozorlarda xuddi shu mantiq ishlaydi.
      </p>
    </div>
  );
}

const S181a = () => (
  <div className="prose-uz">
    <p>
      Eng oddiy oligopoliya — <T id="duopoly" />. Shaharchada faqat Jack va Jill'ning qudug'i toza suv beradi; ular har shanba qancha suv chiqarishni hal qiladi, MC = 0. Shuning uchun tushum = foyda.
    </p>
    <BookTable
      caption="Table 1 — The Demand Schedule for Water"
      head={['Quantity', 'Price', 'Total revenue (and profit)']}
      rows={[
        ['0 gallons', '$120', '$0'],
        ['10', '110', '1,100'],
        ['20', '100', '2,000'],
        ['30', '90', '2,700'],
        ['40', '80', '3,200'],
        ['50', '70', '3,500'],
        ['**60**', '**60**', '**3,600**'],
        ['70', '50', '3,500'],
        ['80', '40', '3,200'],
        ['90', '30', '2,700'],
        ['100', '20', '2,000'],
        ['110', '10', '1,100'],
        ['120', '0', '0'],
      ]}
    />
  </div>
);

const S181b = () => (
  <div className="prose-uz">
    <p>
      Raqobatda P = MC = 0, Q = 120 — samarali. Monopoliyada foyda maksimal: 60 gallon, $60. Jack va Jill kelishsa — <T id="collusion" />, va ular <T id="cartel" /> bo'ladi: amalda monopoliya, 60 gallon,
      $60. Kartel umumiy miqdor bilan birga har birining ulushiga ham kelishishi kerak: teng bo'lishsa, har biri 30 gallon va $1,800 foyda.
    </p>
  </div>
);

const S181c = () => (
  <div className="prose-uz">
    <p>
      Kartellar ko'pincha imkonsiz: foydani bo'lishda nizolar, antitrust qonunlari (raqib bilan narx haqida gaplashish ham jinoyat bo'lishi mumkin). Mustaqil qaror qilishsa? Jack: “Jill 30 qilsa, men ham 30 —
      $1,800. Lekin 40 qilsam: jami 70, narx $50, men $2,000!” Jill ham shunday o'ylaydi → 40 + 40 = 80, narx $40, har biri $1,600. 40 dan 50 ga o'tish esa Jack'ga $1,500 beradi — foydasiz.
    </p>
    <p>
      40 + 40 — <T id="nash-equilibrium" />: har biri boshqasining tanlovini berilgan deb eng yaxshisini tanlagan. Natija: oligopoliya miqdori <b>monopoliyadan ko'p, raqobatdan kam</b>; narx monopoliyadan past,
      raqobatdan (MC) yuqori.
    </p>
    <DuopolyLab />
  </div>
);

const S181d = () => (
  <div className="prose-uz">
    <p>
      Jude va Jade ham quduq topdi — 4 sotuvchi. Kartel kattalashgani sari kelishish va antitrustdan yashirinish qiyinlashadi. Kartelsiz har bir quduq egasi qo'shimcha gallon haqida ikki effektni tortadi:
    </p>
    <ul>
      <li><b>Output effect</b>: P &gt; MC — yana bir gallon sotish foydani oshiradi;</li>
      <li><b>Price effect</b>: jami miqdor oshadi, narx tushadi — boshqa gallonlardan foyda kamayadi.</li>
    </ul>
    <p>
      Firmalar ko'paysa, har birining ulushi kichik → price effect kichrayadi; juda ko'p bo'lsa — yo'qoladi va firmalar raqobatchi kabi P = MC gacha ishlab chiqaradi. Xalqaro savdo: har bir mamlakatda ikki
      avtozavod bo'lsa (Toyota–Honda, VW–BMW, Ford–GM), savdo ochilganda oligopoliya 6 a'zoli bo'ladi va narxlar MC ga yaqinlashadi — qiyosiy ustunlikdan tashqari erkin savdoning yana bir foydasi.
    </p>
    <AskExperts
      title="Market Share and Market Power"
      source="IGM, September 25, 2018"
      statement="If a small number of firms have a large combined market share in a properly defined market, it is strong evidence that those firms have substantial market power."
      agree={54}
      uncertain={21}
      disagree={25}
    />
  </div>
);

const S182a = () => (
  <div className="prose-uz">
    <p>
      <T id="prisoners-dilemma" />: Bonnie va Clyde ro'yxatdan o'tmagan qurol uchun 1 yil olishi aniq; politsiya bank o'g'irligini isbotlay olmaydi. Alohida xonalarda taklif: “Sherigingni fosh qilsang — ozodsan,
      u 20 yil; ikkalang iqror qilsangiz — har biringiz 8 yil.”
    </p>
    <p>
      Bonnie: Clyde jim tursa — iqror qilsam ozodman (1 yil o'rniga); iqror qilsa — men ham iqror qilsam 8 yil (20 o'rniga). Har holda iqror yaxshiroq — <T id="dominant-strategy" />. Clyde ham shunday → ikkalasi 8
      yil (Nash), garchi jim tursa 1 yil bo'lardi. Oldindan “hech qachon iqror qilmaymiz” deb qasam ichishsa ham, alohida so'roqda shaxsiy manfaat ustun keladi.
    </p>
    <GameLab />
  </div>
);

const S182b = () => (
  <div className="prose-uz">
    <p>
      Jack va Jill 30 + 30 ga kelishdi. Jack: Jill 30 qilsa — 40 da $2,000 &gt; 30 da $1,800; Jill 40 qilsa — 40 da $1,600 &gt; 30 da $1,500. 40 — dominant. Natija — 40 + 40. Monopoliya natijasi birgalikda
      ratsional, lekin har biri aldashga rag'batli.
    </p>
    <BoxLink id="cs-opec">Case Study: OPEC and the World Oil Market</BoxLink>
  </div>
);

const S182c = () => (
  <div className="prose-uz">
    <ul>
      <li>
        <b>Qurollanish poygasi</b> (Figure 3): AQSh va SSSR uchun qurollanish dominant → ikkalasi xavf ostida. Bu o'yin nazariyasining ilk ishlariga turtki bergan; bugun AQSh, Rossiya va Xitoyga ham tegishli.
        Qurolsizlanish muzokaralari kartel muammolariga o'xshaydi (kim qancha, aldash qo'rquvi); shaffoflik va qat'iy tekshiruv bilan dilemmadan chiqish mumkin.
      </li>
      <li>
        <b>Umumiy resurslar</b> (Figure 4): ExxonMobil va Chevron ostidagi $120 mln neft, quduq $10 mln. Bittadan quduq — har biri $50 mln. Ikkinchi quduq: ikki quduqli kompaniya ⅔ (60 mln), boshqasi ⅓ (30 mln);
        ikkalasi qazisa — 40 mln. Ikki quduq dominant → isrof.
      </li>
    </ul>
  </div>
);

const S182d = () => (
  <div className="prose-uz">
    <p>
      Hamkorlik yo'qligi jamiyat uchun yomonmi? Bog'liq: qurollanish va umumiy resurs holatlarida — <b>yomon</b> (xavf, isrof). Oligopoliyada esa — <b>yaxshi</b>: monopoliya natijasi iste'molchilarga zarar,
      hamkorliksiz miqdor samarali darajaga yaqin. Ko'rinmas qo'l faqat bozorlar raqobatli bo'lganda samarali, bozorlar esa firmalar hamkorlik qila olmaganda raqobatli. Mahbuslar dilemmasi — mahbuslar uchun dilemma,
      qolganlar uchun foyda.
    </p>
  </div>
);

const S182e = () => (
  <div className="prose-uz">
    <p>
      Hamkorlik qiyin, lekin imkonsiz emas: o'yin <b>takrorlansa</b>. Jack va Jill har hafta o'ynaydi va kelishadi: “biri 40 qilsa, ikkalasi abadiy 40”. Bu jazo oson ijro etiladi. Aldash bir hafta $1,800 → $2,000,
      keyin abadiy $1,600 — kelajakni qadrlasa, hamkorlik saqlanadi.
    </p>
    <Tournament />
    <BoxLink id="cs-tournament">Case Study: The Prisoners' Dilemma Tournament</BoxLink>
  </div>
);

const S183a = () => (
  <div className="prose-uz">
    <p>
      Shartnoma erkinligi bozor iqtisodiyotining asosi, lekin Angliya va AQSh sudlari asrlar davomida raqiblarning miqdorni kamaytirish va narxni oshirish kelishuvlarini <b>ijro etmagan</b>.{' '}
      <b>Sherman Act (1890)</b> savdoni cheklovchi har qanday shartnoma, birlashma yoki fitnani noqonuniy deb e'lon qildi — kelishuvlar jinoiy fitnaga aylandi. <b>Clayton Act (1914)</b>: zarar ko'rgan tomon sudga berib,
      zararning <b>uch barobarini</b> undirishi mumkin — xususiy da'volarni rag'batlantiradi. Bugun Adliya vazirligi va xususiy tomonlar antitrust da'volarini qo'zg'ata oladi.
    </p>
    <BoxLink id="cs-phone-call">Case Study: An Illegal Phone Call</BoxLink>
  </div>
);

const S183b = () => (
  <div className="prose-uz">
    <p>Narx kelishuvlari noqonuniy bo'lishi kerakligida deyarli hamma kelishadi. Lekin uchta bahsli amaliyot:</p>
    <ul>
      <li>
        <T id="resale-price-maintenance" />: Superduper Electronics smartfonni $400 ga sotib, chakanachilardan $500 talab qiladi. Kartelga o'xshaydi, lekin himoyachilar: ishlab chiqaruvchi bozor hokimiyatini
        ulgurji narx orqali ishlatardi va chakanachilar karteliga manfaatdor emas; maqsad — showroom va maslahatchi xizmatiga diskaunterlarning <b>free ride</b> qilishini to'xtatish.
      </li>
      <li>
        <T id="predatory-pricing" />: Coyote Air Roadrunner Express kirgach, uni siqib chiqarish uchun narxni xarajatdan pastga tushiradi. Ba'zi iqtisodchilar: kamdan-kam foydali — arzon chiptalar ko'proq yo'lovchi
        jalb qiladi, Coyote ko'proq reys uchishi kerak va zararning 80% dan ko'pini o'zi ko'taradi, Roadrunner esa reyslarni qisqartiradi.
      </li>
      <li>
        <T id="bundling" />: Makemoney Movies “Superheroes” va “Hamlet”ni birga sotadi. Oliy sud taqiqlagan (bozor hokimiyatini kengaytirish deb). Stigler (1963): Hamlet 0 ga baholansa, paket WTP i oshmaydi;
        haqiqiy sabab — narx diskriminatsiyasi.
      </li>
    </ul>
    <BundlingLab />
    <Callout kind="exam">QQ 8: antitrust bahsli, chunki raqobatni kamaytirayotgandek ko'ringan ba'zi amaliyotlar <b>qonuniy maqsadga</b> ega bo'lishi mumkin.</Callout>
    <AskExperts
      title="Antitrust in the Digital Economy (1)"
      source="IGM, November 3, 2020"
      statement="Google's dominance of the market for internet search arose mainly from a combination of economies of scale and a quality algorithm."
      agree={95}
      uncertain={5}
      disagree={0}
    />
    <AskExperts
      title="Antitrust in the Digital Economy (2)"
      source="IGM, November 3, 2020"
      statement="In light of Google's dominance, its current operating practices could have a substantial negative effect on social welfare in the long run."
      agree={52}
      uncertain={41}
      disagree={7}
    />
    <AskExperts
      title="Antitrust in the Digital Economy (3)"
      source="IGM, December 22, 2020"
      statement="The nature of the market dominance of technology giants in the digital economy warrants either the imposition of some kind of regulation or a fundamental change in antitrust policy."
      agree={53}
      uncertain={26}
      disagree={21}
    />
    <AskExperts
      title="Antitrust in the Digital Economy (4)"
      source="IGM, December 22, 2020"
      statement="Requiring Facebook to divest WhatsApp and Instagram is likely to make society better off."
      agree={59}
      uncertain={25}
      disagree={16}
    />
    <Callout kind="note" title="Foizlar haqida">To'rt so'rov natijalari kitobda rasm sifatida; matn qatlamidagi tartibdan statement bilan juftlandi (95/5/0, 52/41/7, 53/26/21, 59/25/16).</Callout>
    <BoxLink id="cs-microsoft">Case Study: The Microsoft Case</BoxLink>
  </div>
);

const S184 = () => (
  <div className="prose-uz">
    <p>
      Oligopolistlar monopoliya kabi harakat qilishni xohlaydi, lekin shaxsiy manfaat ularni raqobatga suradi. Qayerga borishi firmalar soni va hamkorlik darajasiga bog'liq. Antitrust qonunlari ko'lami bahsli: narx
      kelishuvi aniq zararli, lekin raqobatni kamaytirayotgandek ko'ringan ba'zi amaliyotlar nozik qonuniy maqsadga ega bo'lishi mumkin — siyosatchilar ehtiyot bo'lishi kerak.
    </p>
    <BoxLink id="news-amazon">In the News: Amazon in the Crosshairs</BoxLink>
  </div>
);

function Opec() {
  return (
    <div className="prose-uz">
      <p>
        Suvni xom neftga, Jack va Jill'ni Saudiya Arabistoni va Iroqqa almashtirsak — haqiqatga yaqin. 1960-yilda <b>OPEC</b> tuzildi (Saudiya Arabistoni, Iroq, Eron, BAA, Quvayt, Venesuela va boshqalar); 2016-yilda
        Rossiya boshchiligidagi yana 10 davlat qo'shildi — <b>OPEC Plus</b>. Kartel a'zolarga ishlab chiqarish kvotalarini belgilaydi; lekin har biri ko'proq qazib, foyda ulushini oshirishga vasvasada — ko'pincha
        aldashadi.
      </p>
      <ul>
        <li>1973–1985 — muvaffaqiyat: neft $3 (1972) → $11 (1974) → $35 (1981).</li>
        <li>1980-yillar o'rtasi — kvota nizolari: 1986-yilda $13.</li>
        <li>So'nggi yillarda — kelishuvlar zaif; fracking texnologiyasi jahon taklifini oshirib, OPEC hokimiyatini kamaytirdi; narx tebranishlari asosan talab va taklifdan.</li>
      </ul>
    </div>
  );
}

function TournamentCase() {
  return (
    <div className="prose-uz">
      <p>
        Mahbuslar dilemmasini bir xil odam bilan ko'p marta o'ynasangiz, qanday strategiya tanlaysiz? Hamkorlikni rag'batlantirish uchun aldaganni jazolash kerak; lekin Jack va Jill'ning “bir marta aldasang — abadiy
        aldayman” strategiyasi kechirimsiz. Takroriy o'yinda hamkorlikka qaytish imkonini beradigan strategiya yaxshiroq bo'lishi mumkin.
      </p>
      <p>
        Siyosatshunos <b>Robert Axelrod</b> tanlov o'tkazdi: ishtirokchilar takroriy mahbuslar dilemmasini o'ynaydigan kompyuter dasturlarini yubordi, har biri boshqalari bilan round-robin tarzida o'ynadi, maqsad — eng
        kam qamoq yili. G'olib — oddiy <T id="tit-for-tat" />: avval hamkorlik, keyin raqib oldingi safar nima qilgan bo'lsa shuni qilish. Do'stona boshlaydi, jazolaydi, kechiradi — va murakkab dasturlardan yaxshiroq.
        “Ko'zga ko'z, tishga tish” hayot o'yinlari uchun yaxshi qoida bo'lishi mumkin.
      </p>
    </div>
  );
}

function PhoneCall() {
  return (
    <div className="prose-uz">
      <p>
        Adam Smit: bir kasb egalari kamdan-kam yig'ilishadi, lekin suhbat jamoatchilikka qarshi fitna yoki narxlarni oshirish bilan tugaydi. Zamonaviy misol — 1980-yillar boshi, New York Times (1983-yil 24-fevral):
        American Airlines prezidenti Robert Crandall Braniff Airways prezidenti Howard Putnam'ga qo'ng'iroq qilib, bir-birini “urib” pul topmasliklari ahmoqlik ekanini aytadi va taklif qiladi: <i>narxlaringizni 20%
        oshiring, men ertasi kuni oshiraman</i>. Putnam: “Biz narxlar haqida gaplasha olmaymiz!”
      </p>
      <p>
        Putnam haq edi — Sherman Act raqib rahbarlarning narx haqida gaplashishini ham taqiqlaydi. U yozuvni Adliya vazirligiga berdi, vazirlik Crandall'ni sudga berdi. Ikki yildan keyin kelishuv: Crandall biznes
        faoliyatida, jumladan boshqa aviakompaniyalar rahbarlari bilan aloqada cheklovlarga rozi bo'ldi.
      </p>
    </div>
  );
}

function Microsoft() {
  return (
    <div className="prose-uz">
      <p>
        1998-yil: AQSh Adliya vazirligi va Microsoft (Bill Gates). Hukumat tomonida MIT professori Franklin Fisher, Microsoft tomonida uning sobiq talabasi Richard Schmalensee. Asosiy masala — <b>bundling</b>: Internet
        Explorer'ni Windows'ga qo'shish.
      </p>
      <ul>
        <li>Hukumat: Microsoft operatsion tizimdagi hokimiyatini brauzer bozoriga yoyyapti, boshqa dasturchilarning kirishiga to'sqinlik qiladi; yangi kompyuterlarning 80% dan ko'pi Windows'da — amalda monopoliya.</li>
        <li>Microsoft: eski mahsulotga yangi funksiya qo'shish — texnologik taraqqiyot (mashinalarda CD-pleyer, kameralarda chaqnoq); Windows doim Mac va Linux bilan raqobatda; narxi ~$50 (kompyuterning ~3%) — hokimiyat cheklangan.</li>
        <li>1999: sudya Penfield Jackson — Microsoft monopoliya hokimiyatini noqonuniy suiiste'mol qilgan; 2000: ikki kompaniyaga bo'lishni buyurdi. 2001: apellyatsiya sudi bekor qildi; 2002: kelishuv — ba'zi cheklovlar, brauzer Windows'da qoladi.</li>
        <li>2021-yil iyun: Microsoft Explorer'ni to'xtatib, Edge bilan almashtirdi. Ba'zi tahlilchilar kelishuv Chrome va Safari o'sishiga yo'l ochgan deydi.</li>
      </ul>
    </div>
  );
}

function Amazon() {
  return (
    <div className="prose-uz">
      <Source>Gilad Edelman, “A New Antitrust Case Cuts to the Core of Amazon's Identity,” Wired, May 25, 2021</Source>
      <ul>
        <li>Bezos: Amazon — “Yerdagi eng mijozga yo'naltirilgan kompaniya”. Vashington DC bosh prokurori Karl Racine da'vosi bu rivoyatni shubha ostiga qo'yadi.</li>
        <li><b>Most-favored-nation</b> sharti: uchinchi tomon sotuvchilar boshqa saytlarda (hatto o'z saytida) arzonroq sotmasligi kerak — bu butun internetda narxlarni oshiradi va raqib platformalarning narx bilan raqobatlashishiga to'sqinlik qiladi.</li>
        <li>Amazon Yevropada 2013-yilda, AQShda 2019-yilda “price parity” qoidasini olib tashladi, lekin da'voga ko'ra “Marketplace Fair Pricing Policy” xuddi shu natijani beradi: boshqa joyda arzon sotganlar <b>Buy Box</b>'dan mahrum bo'ladi.</li>
        <li>Sotuvchi Jason Boyce: Walmart va Sears'da narxni tushirgach, Amazon'da “Add to Cart” tugmasi yo'qoldi, sotuv va reklama tushdi; narxni hamma joyda oshirgach, 24 soatda hammasi qaytdi.</li>
        <li>Bunday shartlar o'z-o'zidan noqonuniy emas — muammo hukmron firmada: Amazon AQSh onlayn chakana savdosining 50–70% i, iste'molchilarning 74% i to'g'ridan-to'g'ri Amazon'ga boradi.</li>
      </ul>
      <Callout kind="tip" title="Muhokama uchun savollar">
        <ol>
          <li>Amazon'dan xarid qilganmisiz? Narx va xizmat yaxshi bo'lganmi?</li>
          <li>Amazon o'z mijozlariga eng past narxni taklif qiladigan sotuvchilarni afzal ko'rishi taqiqlanishi kerakmi? Nega?</li>
        </ol>
      </Callout>
    </div>
  );
}

const Duo = () => <DuopolyLab />;
const Games = () => <GameLab />;
const Tour = () => <Tournament />;
const Bundle = () => <BundlingLab />;

export const page: ChapterPageContent = {
  hook: Hook,
  goals: [
    "Oligopoliyada hamkorlik va shaxsiy manfaat keskinligini tushuntirish: **cartel**, **collusion**",
    "Duopoliya **Nash equilibrium**ini topish va uni monopoliya hamda raqobat bilan solishtirish",
    "Firmalar soni oshganda bozor raqobatga yaqinlashishini output va price effect orqali ko'rsatish",
    "**Prisoners' dilemma**, **dominant strategy**; oligopoliya, qurollanish, umumiy resurslarga qo'llash; takroriy o'yin va **tit-for-tat**",
    "Antitrust qonunlari va bahsli amaliyotlar: resale price maintenance, predatory pricing, bundling",
  ],
  sections: [
    { id: "s-18-1a", code: "18-1a", titleEn: "A Duopoly Example", titleUz: "Duopoliya misoli", Body: S181a, check: checks["s-18-1a"] },
    { id: "s-18-1b", code: "18-1b", titleEn: "Competition, Monopolies, and Cartels", titleUz: "Raqobat, monopoliya va kartellar", Body: S181b, check: checks["s-18-1b"] },
    { id: "s-18-1c", code: "18-1c", titleEn: "The Equilibrium for an Oligopoly", titleUz: "Oligopoliya muvozanati", Body: S181c, check: checks["s-18-1c"] },
    { id: "s-18-1d", code: "18-1d", titleEn: "How the Size of an Oligopoly Affects the Market Outcome", titleUz: "Oligopoliya hajmi natijaga qanday ta'sir qiladi", Body: S181d, check: checks["s-18-1d"] },
    { id: "s-18-2a", code: "18-2a", titleEn: "The Prisoners' Dilemma", titleUz: "Mahbuslar dilemmasi", Body: S182a, check: checks["s-18-2a"] },
    { id: "s-18-2b", code: "18-2b", titleEn: "Oligopolies as a Prisoners' Dilemma", titleUz: "Oligopoliya — mahbuslar dilemmasi", Body: S182b, check: checks["s-18-2b"] },
    { id: "s-18-2c", code: "18-2c", titleEn: "Other Examples of the Prisoners' Dilemma", titleUz: "Mahbuslar dilemmasining boshqa misollari", Body: S182c, check: checks["s-18-2c"] },
    { id: "s-18-2d", code: "18-2d", titleEn: "The Prisoners' Dilemma and the Welfare of Society", titleUz: "Mahbuslar dilemmasi va jamiyat farovonligi", Body: S182d, check: checks["s-18-2d"] },
    { id: "s-18-2e", code: "18-2e", titleEn: "Why People Sometimes Cooperate", titleUz: "Nega odamlar ba'zan hamkorlik qiladi", Body: S182e, check: checks["s-18-2e"] },
    { id: "s-18-3a", code: "18-3a", titleEn: "Restraint of Trade and the Antitrust Laws", titleUz: "Savdoni cheklash va antitrust qonunlari", Body: S183a, check: checks["s-18-3a"] },
    { id: "s-18-3b", code: "18-3b", titleEn: "Controversies over Antitrust Policy", titleUz: "Antitrust siyosati bo'yicha bahslar", Body: S183b, check: checks["s-18-3b"] },
    { id: "s-18-4", code: "18-4", titleEn: "Conclusion", titleUz: "Xulosa", Body: S184 },
  ],
  examTraps: [
    { title: "Uch natija", body: "Kartel = monopoliya (60, $60). Kartelsiz = Nash (80, $40). Raqobat (120, $0). QQ 2–4." },
    { title: "Nash ≠ eng yaxshi natija", body: "Nash ikkalasi uchun hamkorlikdan **yomonroq** bo'lishi mumkin (mahbuslar dilemmasi, QQ 5)." },
    { title: "Dominant strategiya shart emas", body: "Synergy–Dynaco: biri dominant strategiyaga ega bo'lmasa ham Nash bor." },
    { title: "Kimga yomon?", body: "Oligopoliyada hamkorlik yo'qligi jamiyat uchun **yaxshi**; qurollanish va umumiy resursda — **yomon**." },
    { title: "Ishonchli tahdid", body: "Kona–Brew: o'yinchi o'z manfaatiga zid tahdidni bajarmaydi — ishonchsiz." },
  ],
  mistakes: [
    { wrong: "“Oligopolistlar doim monopoliya foydasini oladi.”", right: "Aldash rag'bati tufayli ko'pincha Nash natijasiga tushadi." },
    { wrong: "“Ko'proq firma — narx monopoliyaga yaqinroq.”", right: "Ko'proq firma — narx **MC ga** yaqinroq." },
    { wrong: "“Takroriy o'yinda ham hamkorlik imkonsiz.”", right: "Kelajakdagi jazo tahdidi (tit-for-tat) hamkorlikni saqlaydi (QQ 6)." },
    { wrong: "“Paketlash doim bozor hokimiyatini kengaytiradi.”", right: "Stigler: ko'pincha narx diskriminatsiyasi; bahs davom etmoqda." },
  ],
  boxes: [
    { id: "cs-opec", kind: "Case Study", titleEn: "OPEC and the World Oil Market", titleUz: "OPEC va jahon neft bozori", Body: Opec },
    { id: "cs-tournament", kind: "Case Study", titleEn: "The Prisoners' Dilemma Tournament", titleUz: "Mahbuslar dilemmasi turniri", Body: TournamentCase },
    { id: "cs-phone-call", kind: "Case Study", titleEn: "An Illegal Phone Call", titleUz: "Noqonuniy qo'ng'iroq", Body: PhoneCall },
    { id: "cs-microsoft", kind: "Case Study", titleEn: "The Microsoft Case", titleUz: "Microsoft ishi", Body: Microsoft },
    { id: "news-amazon", kind: "In the News", titleEn: "Amazon in the Crosshairs", titleUz: "Amazon nishonda", Body: Amazon },
  ],
  summary: [
    "Oligopolistlar kartel tuzib, monopolist kabi harakat qilsa umumiy foydani maksimallashtiradi. Lekin mustaqil qaror qilsa — miqdor monopoliyadan **ko'p**, narx **past**. Oligopoliyadagi firmalar qancha ko'p bo'lsa, miqdor va narx mukammal raqobat darajasiga shuncha yaqin.",
    "**Prisoners' dilemma** shaxsiy manfaat odamlarni, hatto o'zaro manfaatli bo'lsa ham, hamkorlikni saqlashdan to'xtatishi mumkinligini ko'rsatadi. Bu mantiq qurollanish poygasi, umumiy resurslar va oligopoliyalarga qo'llanadi.",
    "Siyosatchilar **antitrust** qonunlari bilan oligopoliyalarning raqobatni kamaytiruvchi xatti-harakatini to'xtatadi. Ularni qo'llash bahsli, chunki raqobatni kamaytirayotgandek ko'ringan ba'zi amaliyotlar qonuniy biznes maqsadiga ega bo'lishi mumkin.",
  ],
  widgets: { duopoly: Duo, games: Games, tournament: Tour, bundling: Bundle },
  gallery: [
    { title: "Duopoliya: Jack va Jill, N ta sotuvchi", Component: Duo },
    { title: "O'yinlar nazariyasi: dominant strategiya va Nash", Component: Games },
    { title: "Axelrod turniri: tit-for-tat", Component: Tour },
    { title: "Bundling: Stigler misoli", Component: Bundle },
  ],
};
