import type { SDState } from '../../../components/graphs/SupplyDemandGraph';
import { equilibrium, priceCeiling, priceFloor, qd, qs, tax } from '../../../lib/econ';
import type { Question } from '../../types';
import { gasLines, iceCeiling, iceFloor, iceMarket, incidence } from './presets';

const C = 6;

// ---------------- QuickQuiz (book) ----------------

export const quickQuiz: Question[] = [
  {
    id: "ch06.qq.1",
    chapter: C,
    kind: "mcq",
    source: "quickquiz",
    topic: "Narx tubi",
    prompt: "When the government imposes a **binding price floor**, it causes",
    options: [
      { text: "the supply curve to shift to the left.", why: "Narx tubi egri chiziqlarni **siljitmaydi**: u faqat narxni muvozanatdan yuqorida ushlab turadi. Taklif va talab joyida qoladi." },
      { text: "the demand curve to shift to the right.", why: "Talab egri chizig'i ham joyida: xaridorlarning didi yoki daromadi o'zgargani yo'q, faqat narx qonun bilan yuqori." },
      { text: "a shortage of the good to develop.", why: "Taqchillik **narx shifti**ga xos (narx past → ko'p xohlovchi). Tub esa narxni yuqori qiladi." },
      { text: "a surplus of the good to develop.", correct: true, why: "Narx P* dan yuqori → sotuvchilar ko'proq taklif qiladi, xaridorlar kamroq oladi: \\(Q^S > Q^D\\) — **surplus**." },
    ],
  },
  {
    id: "ch06.qq.2",
    chapter: C,
    kind: "mcq",
    source: "quickquiz",
    topic: "Narx shifti",
    prompt: "In a market with a **binding price ceiling**, increasing the ceiling price will",
    options: [
      { text: "increase the surplus.", why: "Ta'sirli shift ostida bozorda surplus emas, **taqchillik** bor." },
      { text: "increase the shortage.", why: "Teskarisi: shift ko'tarilsa narx muvozanatga yaqinlashadi, \\(Q^S\\) oshadi, \\(Q^D\\) kamayadi — taqchillik qisqaradi." },
      { text: "decrease the surplus.", why: "Bu yerda surplus yo'q — bu narx tubi haqidagi javob." },
      { text: "decrease the shortage.", correct: true, why: "Shift yuqoriroq → taklif miqdori ko'payadi, talab miqdori kamayadi → \\(Q^D - Q^S\\) kichrayadi." },
    ],
  },
  {
    id: "ch06.qq.3",
    chapter: C,
    kind: "mcq",
    source: "quickquiz",
    topic: "Ijara nazorati",
    prompt: "Rent control causes larger shortages in the ________ run because over that time horizon, supply and demand are ________ elastic.",
    options: [
      { text: "long; more", correct: true, why: "Uzoq muddatda uy egalari qurilish va ta'mirni to'xtatadi, odamlar ko'proq alohida yashashni xohlaydi — egri chiziqlar yotiqroq (egiluvchanroq), shu sabab taqchillik kattaroq." },
      { text: "long; less", why: "Uzoq muddat to'g'ri, lekin egiluvchanlik **kattaroq** bo'ladi — vaqt o'tishi bilan odamlar va uy egalari ko'proq moslashadi." },
      { text: "short; more", why: "Qisqa muddatda kvartiralar soni deyarli o'zgarmaydi — taklif **noegiluvchan**, taqchillik kichik." },
      { text: "short; less", why: "Qisqa muddatda haqiqatan ham egiluvchanlik kam, lekin aynan shuning uchun taqchillik **kichik** bo'ladi, katta emas." },
    ],
  },
  {
    id: "ch06.qq.4",
    chapter: C,
    kind: "mcq",
    source: "quickquiz",
    topic: "Eng kam ish haqi",
    prompt: "An increase in the minimum wage reduces the total amount paid to the affected workers if the price elasticity of ________ is ________ than one.",
    options: [
      { text: "supply; greater", why: "Ishga olinganlar sonini **firmalar** (talab) belgilaydi, chunki ta'sirli tubda talab qisqa tomon. Taklif egiluvchanligi faqat ishsizlar soniga ta'sir qiladi." },
      { text: "supply; less", why: "Xuddi shu sabab: umumiy to'lov = \\(W \\times Q^D\\), taklif bu yerda rol o'ynamaydi." },
      { text: "demand; greater", correct: true, why: "Umumiy to'lov \\(= W \\times Q^D\\). Agar mehnat talabi egiluvchan (>1) bo'lsa, ish haqi 10% oshganda bandlik 10% dan ko'proq kamayadi → umumiy to'lov kamayadi." },
      { text: "demand; less", why: "Noegiluvchan talabda bandlik ish haqidan kamroq foizga kamayadi — umumiy to'lov **oshadi**." },
    ],
  },
  {
    id: "ch06.qq.5",
    chapter: C,
    kind: "mcq",
    source: "quickquiz",
    topic: "Soliq ekvivalentligi",
    prompt: "A $1 per unit tax levied on **consumers** of a good is equivalent to",
    options: [
      { text: "a $1 per unit tax levied on producers of the good.", correct: true, why: "Ikkalasi ham \\(P_B\\) va \\(P_S\\) orasiga $1 lik **pona** qo'yadi. Natijada \\(P_B\\), \\(P_S\\) va \\(Q\\) aynan bir xil — faqat pulni davlatga kim olib borishi farq qiladi." },
      { text: "a $1 per unit subsidy paid to producers of the good.", why: "Subsidiya — teskari siyosat: u miqdorni oshiradi, soliq esa kamaytiradi." },
      { text: "a price floor that raises the good's price by $1 per unit.", why: "Narx tubi pona yaratmaydi (xaridor va sotuvchi bir xil narxni ko'radi) va davlatga tushum bermaydi." },
      { text: "a price ceiling that raises the good's price by $1 per unit.", why: "Shift narxni **ko'tara olmaydi** — u faqat yuqori chegarani belgilaydi." },
    ],
  },
  {
    id: "ch06.qq.6",
    chapter: C,
    kind: "mcq",
    source: "quickquiz",
    topic: "Soliq yuki",
    prompt: "When a good is taxed, the burden of the tax falls mainly on **consumers** if",
    options: [
      { text: "the tax is levied on consumers.", why: "Soliqni qonun bo'yicha kim to'lashi yukni belgilamaydi — buni Figures 6 va 7 ko'rsatadi." },
      { text: "the tax is levied on producers.", why: "Yana o'sha xato: tax incidence qonunga emas, **egiluvchanlikka** bog'liq." },
      { text: "supply is inelastic and demand is elastic.", why: "Bu holda yuk **sotuvchilarga** tushadi (yaxtalar va hashamat solig'i misoli)." },
      { text: "supply is elastic and demand is inelastic.", correct: true, why: "Xaridorlarda yaxshi muqobil yo'q (noegiluvchan talab), ular bozorni tark etolmaydi → narx asosan ularga oshadi. Yuk **kamroq egiluvchan** tomonga tushadi." },
    ],
  },
  {
    id: "ch06.qq.7",
    chapter: C,
    kind: "mcq",
    source: "quickquiz",
    topic: "Siyosatlarni taqqoslash",
    prompt: "Which of the following **increases** the quantity supplied, **decreases** the quantity demanded, and **increases** the price that consumers pay?",
    options: [
      { text: "the passage of a tax on a good", why: "Soliq sotuvchi oladigan narxni kamaytiradi → taklif miqdori ham **kamayadi** (birinchi shart bajarilmaydi)." },
      { text: "the repeal of a tax on a good", why: "Soliqni bekor qilish xaridor narxini **tushiradi** va talab miqdorini oshiradi." },
      { text: "the imposition of a binding price floor", correct: true, why: "Tub narxni ko'taradi: sotuvchilar ko'proq taklif qilishni xohlaydi (\\(Q^S\\) ↑), xaridorlar kamroq oladi (\\(Q^D\\) ↓), xaridor to'laydigan narx ↑." },
      { text: "the removal of a binding price floor", why: "Tubni olib tashlash narxni **tushiradi** — hammasi teskari." },
    ],
  },
  {
    id: "ch06.qq.8",
    chapter: C,
    kind: "mcq",
    source: "quickquiz",
    topic: "Siyosatlarni taqqoslash",
    prompt: "Which of the following **increases** the quantity supplied, **increases** the quantity demanded, and **decreases** the price that consumers pay?",
    options: [
      { text: "the passage of a tax on a good", why: "Soliq ikkala miqdorni ham kamaytiradi va xaridor narxini oshiradi." },
      { text: "the repeal of a tax on a good", correct: true, why: "Pona yo'qoladi: xaridor kamroq to'laydi (\\(Q^D\\) ↑), sotuvchi ko'proq oladi (\\(Q^S\\) ↑). Bozor kattalashadi." },
      { text: "the imposition of a binding price floor", why: "Tub narxni oshiradi va talab miqdorini kamaytiradi." },
      { text: "the removal of a binding price floor", why: "Narx tushadi va \\(Q^D\\) oshadi, lekin sotuvchilar past narxda **kamroq** taklif qiladi — \\(Q^S\\) kamayadi." },
    ],
  },
];

// ---------------- Section checks ("Tekshirib ko'r") ----------------

export const checks: Record<string, Question> = {
  "s-6-1": {
    id: "ch06.check.6-1",
    chapter: C,
    kind: "mcq",
    source: "new",
    topic: "Narx nazorati turlari",
    prompt: "Toshkent hokimiyati ijara haqi oyiga $400 dan oshmasligi kerak, deb qaror qildi. Bu qaysi siyosat?",
    options: [
      { text: "[[price-ceiling|Price ceiling]]", correct: true, why: "Qonun **eng yuqori** narxni belgilayapti — bu shift (ceiling). Ijara nazorati — darslikdagi klassik misol." },
      { text: "[[price-floor|Price floor]]", why: "Tub — eng **past** narx (masalan, eng kam ish haqi). Bu yerda esa yuqori chegara qo'yilgan." },
      { text: "Tax on landlords", why: "Soliqda davlat pul oladi; bu yerda hech kim davlatga pul to'lamayapti, faqat narx cheklangan." },
      { text: "Subsidy for tenants", why: "Subsidiyada davlat ijarachilarga pul beradi; bu yerda narxga taqiq qo'yilgan." },
    ],
  },
  "s-6-1a": {
    id: "ch06.check.6-1a",
    chapter: C,
    kind: "numeric",
    source: "new",
    topic: "Narx shifti",
    prompt: "Figure 1(b): muvozanat $3, narx shifti $2. Bu narxda 125 dona talab qilinadi, 75 dona taklif qilinadi. **Taqchillik** necha dona?",
    answer: 50,
    tolerance: 0,
    unit: "dona",
    why: "Taqchillik \\(= Q^D - Q^S = 125 - 75 = 50\\). Sotilgan miqdor esa 75 — qisqa tomon.",
    traps: [
      { value: -50, why: "Ayirish tartibi teskari: taqchillik \\(= Q^D - Q^S\\) (talab ko'p)." },
      { value: 75, why: "75 — sotilgan miqdor, taqchillik emas." },
      { value: 125, why: "125 — talab miqdori. Undan taklif miqdorini ayirish kerak." },
    ],
  },
  "s-6-1b": {
    id: "ch06.check.6-1b",
    chapter: C,
    kind: "tf",
    source: "new",
    topic: "Narx tubi",
    prompt: "Muvozanat narxi $3. Hukumat $2 lik **narx tubi** belgilasa, bozorda ortiqcha taklif (surplus) paydo bo'ladi.",
    answer: false,
    why: "Tub muvozanatdan **past** — u **not binding**. Bozor baribir $3 da muvozanatga keladi, hech qanday surplus yo'q. Tub faqat P* dan yuqori bo'lsa ta'sir qiladi.",
  },
  "s-6-1c": {
    id: "ch06.check.6-1c",
    chapter: C,
    kind: "mcq",
    source: "new",
    topic: "Muqobil siyosatlar",
    prompt: "Kam ta'minlangan oilalarga uy-joyni arzonlashtirishning qaysi usuli **taqchillik keltirib chiqarmaydi**?",
    options: [
      { text: "Ijara haqiga shift qo'yish", why: "Ta'sirli shift — taqchillik manbai, ayniqsa uzoq muddatda." },
      { text: "Oilalarga ijaraning bir qismini to'lash (rent subsidy) yoki naqd pul berish", correct: true, why: "Subsidiya narxni bozor muvozanatida qoldiradi, taklif miqdorini kamaytirmaydi. Kamchiligi — byudjetga xarajat va demak soliqlar." },
      { text: "Uy egalariga yangi soliq solish", why: "Soliq taklifni kamaytiradi va ijarani qimmatlashtiradi — maqsadga teskari." },
      { text: "Kvartiralarni faqat tanishlarga berishga ruxsat", why: "Bu taqsimlash mexanizmi — adolatsiz va samarasiz, taqchillikni hal qilmaydi." },
    ],
  },
  "s-6-2": {
    id: "ch06.check.6-2",
    chapter: C,
    kind: "mcq",
    source: "new",
    topic: "Soliq yuki",
    prompt: "Shahar meri soliqni xaridor va sotuvchi o'rtasida “yarmi-yarmidan” bo'lishni taklif qildi. [[tax-incidence|Tax incidence]] haqiqatda nimaga bog'liq?",
    options: [
      { text: "Qonunda soliqni kim to'lashi yozilganiga", why: "Qonun faqat pulni kim olib kelishini belgilaydi. Bozor narxlari moslashib, yukni qayta taqsimlaydi." },
      { text: "Talab va taklif egiluvchanligiga", correct: true, why: "Yuk kamroq egiluvchan (bozordan chiqib ketishi qiyin) tomonga ko'proq tushadi." },
      { text: "Soliq summasining kattaligiga", why: "Soliq kattaligi umumiy yukni belgilaydi, lekin uni **qanday bo'lishini** egiluvchanlik hal qiladi." },
      { text: "Hech narsaga — har doim 50/50", why: "Yuk faqat egiluvchanliklar teng bo'lganda taxminan teng bo'linadi; bu kamdan-kam holat." },
    ],
  },
  "s-6-2a": {
    id: "ch06.check.6-2a",
    chapter: C,
    kind: "numeric",
    source: "new",
    topic: "Sotuvchiga soliq",
    prompt: "Figure 6: soliqsiz narx $3.00, sotuvchilarga $0.50 soliq qo'yilgach bozor narxi $3.30 bo'ldi. Xaridorlar har bir muzqaymoq uchun avvalgidan **necha sent** ko'p to'laydi?",
    answer: 30,
    tolerance: 0.5,
    unit: "sent",
    why: "$3.30 − $3.00 = $0.30 = 30 sent. Sotuvchilar esa $3.30 − $0.50 = $2.80 oladi, ya'ni 20 sent kam. Yuk 30:20 bo'lingan.",
    traps: [
      { value: 50, why: "Bu butun soliq. Lekin narx soliqning to'liq miqdoriga oshmadi — sotuvchilar ham 20 sent yo'qotdi." },
      { value: 20, why: "20 sent — sotuvchilar yo'qotgani (3.00 − 2.80). Savol xaridorlar haqida." },
    ],
  },
  "s-6-2b": {
    id: "ch06.check.6-2b",
    chapter: C,
    kind: "tf",
    source: "new",
    topic: "Soliq ekvivalentligi",
    prompt: "Bir xil miqdordagi soliq xaridorlarga yoki sotuvchilarga solinishidan qat'i nazar, xaridor to'laydigan narx, sotuvchi oladigan narx va sotilgan miqdor bir xil bo'ladi.",
    answer: true,
    why: "Ikkala holda ham soliq \\(P_B\\) va \\(P_S\\) orasiga bir xil **pona** qo'yadi. Farq faqat shunda: kim pulni davlatga topshiradi (\"stakandagi pul\" misoli).",
  },
  "s-6-2c": {
    id: "ch06.check.6-2c",
    chapter: C,
    kind: "mcq",
    source: "new",
    topic: "Egiluvchanlik va yuk",
    prompt: "Sigaretaga talab juda **noegiluvchan**, taklif esa ancha **egiluvchan**. Yangi aksiz solig'i asosan kimga tushadi?",
    options: [
      { text: "Chekuvchilarga (xaridorlarga)", correct: true, why: "Chekuvchilar sigaretadan oson voz kechmaydi — ular bozorda qoladi va narx oshishini ko'taradi. Panel (a) holati." },
      { text: "Sigaret ishlab chiqaruvchilarga", why: "Sotuvchilar egiluvchan: narx tushsa, ular boshqa ishga o'tishi mumkin — shuning uchun ularning narxi kam tushadi." },
      { text: "Teng bo'linadi", why: "Teng bo'linish faqat egiluvchanliklar teng bo'lganda bo'ladi." },
      { text: "Faqat davlatga", why: "Davlat soliqni **oladi**, ko'tarmaydi. Yukni bozor ishtirokchilari ko'taradi." },
    ],
  },
};

// ---------------- New practice questions ----------------

const graphBase = (s: SDState) => equilibrium(s.D, s.S);

export const practice: Question[] = [
  {
    id: "ch06.new.rationing",
    chapter: C,
    kind: "mcq",
    source: "new",
    topic: "Taqsimlash mexanizmlari",
    prompt: "Ta'sirli narx shifti sharoitida quyidagilardan qaysi biri tovarni taqsimlash **mexanizmi bo'la olmaydi**?",
    options: [
      { text: "Uzun navbatlar", why: "Navbat — klassik mexanizm (1970-yillardagi benzin navbatlari)." },
      { text: "Sotuvchining tanish-bilishlarga sotishi", why: "Kitobda aytilgan: sotuvchilar do'stlari, qarindoshlari yoki “xizmat qilganlarga” sotadi." },
      { text: "Narxning o'zi", correct: true, why: "Aynan narx ishlay olmaydi — u shiftdan oshib ko'tarilishi taqiqlangan. Shuning uchun boshqa mexanizmlar paydo bo'ladi." },
      { text: "Pora va kutish ro'yxatlari", why: "Ijara nazorati misolida: kutish ro'yxatlari va “stol ostidan” to'lovlar." },
    ],
  },
  {
    id: "ch06.new.qty-sold",
    chapter: C,
    kind: "mcq",
    source: "new",
    topic: "Narx shifti",
    prompt: "Shift $2 da talab miqdori 125, taklif miqdori 75. Bozorda **haqiqatda qancha** muzqaymoq sotiladi?",
    options: [
      { text: "125", why: "Xaridorlar 125 tani xohlaydi, lekin sotuvchilar faqat 75 tasini olib keladi. Hech kim yo'q narsani sota olmaydi." },
      { text: "100", why: "100 — muvozanat miqdori; shift bozorni muvozanatga yetkazmaydi." },
      { text: "75", correct: true, why: "Sotilgan miqdor bozorning **qisqa tomoni** bilan belgilanadi: shiftda bu taklif miqdori." },
      { text: "50", why: "50 — taqchillik (125 − 75), sotilgan miqdor emas." },
    ],
  },
  {
    id: "ch06.new.ceiling-above",
    chapter: C,
    kind: "tf",
    source: "new",
    topic: "Binding / not binding",
    prompt: "Muvozanat narxidan **yuqori** qo'yilgan narx shifti taqchillik keltirib chiqaradi.",
    answer: false,
    why: "Shift P* dan yuqori bo'lsa — **not binding**: bozor narxi P* da qoladi, taqchillik yo'q. Esda tuting: shift faqat **pastda**, tub faqat **tepada** ta'sir qiladi.",
  },
  {
    id: "ch06.new.price-tag",
    chapter: C,
    kind: "tf",
    source: "new",
    topic: "Xaridorga soliq",
    prompt: "Soliq **xaridorlarga** solinganda do'kondagi narx yorlig'i (xaridor sotuvchiga to'laydigan narx) avvalgidan **pasayadi**.",
    answer: true,
    why: "Talab soliq miqdoricha pastga siljiydi, bozor narxi \\(P_S\\) ga tushadi (muzqaymoqda $3.00 → $2.80). Lekin xaridor yana $0.50 soliq to'laydi, jami \\(P_B = 3.30\\) — demak u baribir yutqazadi.",
  },
  {
    id: "ch06.new.payroll-law",
    chapter: C,
    kind: "tf",
    source: "new",
    topic: "Ish haqi solig'i",
    prompt: "Kongress qonun bilan ish haqi solig'ining yukini firmalar va ishchilar o'rtasida aniq 50/50 bo'lishi mumkin.",
    answer: false,
    why: "Qonun faqat soliqni kim to'lashini belgilaydi. Haqiqiy yuk mehnat talabi va taklifi egiluvchanligiga bog'liq; mehnat taklifi kamroq egiluvchan bo'lgani uchun yukning katta qismi **ishchilarga** tushadi.",
  },
  {
    id: "ch06.new.perfectly-inelastic",
    chapter: C,
    kind: "tf",
    source: "new",
    topic: "Egiluvchanlik va yuk",
    prompt: "Agar talab **mutlaqo noegiluvchan** (vertikal) bo'lsa, soliqning butun yukini xaridorlar ko'taradi.",
    answer: true,
    why: "Xaridorlar narxdan qat'i nazar bir xil miqdorni oladi, demak ular bozordan chiqmaydi. Miqdor o'zgarmaydi, \\(P_S\\) ham o'zgarmaydi, \\(P_B\\) esa to'liq T ga oshadi.",
  },
  {
    id: "ch06.new.p10-shortage",
    chapter: C,
    kind: "numeric",
    source: "new",
    topic: "Problem 10",
    prompt: "\\(Q^S = 2P\\), \\(Q^D = 300 - P\\). Hukumat **$90** lik narx shifti qo'ydi. Taqchillik qancha?",
    answer: 30,
    tolerance: 0,
    unit: "birlik",
    why: "Muvozanat: \\(300 - P = 2P \\Rightarrow P^* = 100\\). Shift 90 < 100 — binding. \\(Q^D = 210\\), \\(Q^S = 180\\), taqchillik \\(= 30\\).",
    traps: [
      { value: 10, why: "Bu narxlar farqi (100 − 90). Taqchillik — **miqdorlar** farqi." },
      { value: 210, why: "210 — talab miqdori; undan taklif miqdorini (180) ayiring." },
      { value: 180, why: "180 — taklif miqdori (va sotilgan miqdor)." },
    ],
  },
  {
    id: "ch06.new.p10-buyers-price",
    chapter: C,
    kind: "numeric",
    source: "new",
    topic: "Problem 10",
    prompt: "Xuddi shu bozor. Ishlab chiqaruvchilarga **$30** soliq solindi: \\(Q^S = 2(P - 30)\\). Xaridorlar to'laydigan narx \\(P_B\\) qancha?",
    answer: 120,
    tolerance: 0.01,
    unit: "$",
    why: "\\(300 - P = 2P - 60 \\Rightarrow P = 120\\). Xaridorlar $120 to'laydi (+20), sotuvchilar $90 oladi (−10).",
    traps: [
      { value: 130, why: "Soliqning **hammasi** narxga qo'shilmaydi. Bu faqat taklif mutlaqo egiluvchan bo'lganda to'g'ri bo'lardi." },
      { value: 90, why: "$90 — sotuvchilar soliqdan keyin oladigan narx \\(P_S\\)." },
      { value: 100, why: "$100 — soliqsiz muvozanat narxi." },
    ],
  },
  {
    id: "ch06.new.p10-revenue",
    chapter: C,
    kind: "numeric",
    source: "new",
    topic: "Soliq tushumi",
    prompt: "Oldingi savoldagi $30 soliqdan davlat qancha **tushum** oladi?",
    answer: 5400,
    tolerance: 0.5,
    unit: "$",
    why: "Soliq bilan miqdor \\(Q = 300 - 120 = 180\\). Tushum \\(= T \\times Q = 30 \\times 180 = 5{,}400\\).",
    traps: [{ value: 6000, why: "Soliqsiz miqdorni (200) ishlatdingiz. Soliq bozorni kichraytiradi: 180 dona sotiladi." }],
  },
  {
    id: "ch06.new.buyer-share",
    chapter: C,
    kind: "numeric",
    source: "new",
    topic: "Soliq yuki",
    prompt: "Muzqaymoq: \\(P^* = 3.00\\), $0.50 soliqdan keyin \\(P_B = 3.30\\), \\(P_S = 2.80\\). Soliq yukining **necha foizini xaridorlar** ko'taradi?",
    answer: 60,
    tolerance: 0.5,
    unit: "%",
    why: "Xaridorlar ulushi \\(= (P_B - P^*)/T = 0.30/0.50 = 60\\%\\). Sotuvchilar — 40%.",
    traps: [
      { value: 40, why: "40% — sotuvchilar ulushi: \\((3.00 - 2.80)/0.50\\)." },
      { value: 50, why: "Qonun yoki “adolat” 50/50 ni taqozo qilmaydi; narxlarga qarab hisoblang." },
    ],
  },
  {
    id: "ch06.new.frisbee",
    chapter: C,
    kind: "numeric",
    source: "new",
    topic: "Narx tubi",
    prompt: "Problem 3 (Frisbee): muvozanat $8 va 6 mln. Kongress muvozanatdan $2 yuqori narx tubi qo'ydi. Necha **million** frisbee sotiladi? ($10 da: talab 2 mln, taklif 12 mln.)",
    answer: 2,
    tolerance: 0,
    unit: "mln",
    why: "Tub $10 — binding. Sotilgan miqdor qisqa tomon — **talab**: 2 mln. Ishlab chiqaruvchilar 12 mln taklif qiladi, 10 mln ortiqcha qoladi.",
    traps: [
      { value: 12, why: "12 mln — taklif miqdori. Xaridorlar olmagan narsa sotilmaydi." },
      { value: 10, why: "10 mln — ortiqcha (surplus), sotilgan miqdor emas." },
    ],
  },
  {
    id: "ch06.new.luxury",
    chapter: C,
    kind: "mcq",
    source: "new",
    topic: "Hashamat solig'i",
    prompt: "1990 yilgi yaxta solig'i (luxury tax) yukini kim eng ko'p ko'targan va nega?",
    options: [
      { text: "Boy xaridorlar — chunki ular boy", why: "Boylik emas, **egiluvchanlik** muhim. Boylar yaxta o'rniga orol, sayohat va boshqalarni osongina tanlaydi — talab egiluvchan." },
      { text: "Yaxta quruvchi firmalar va ishchilar — chunki taklif noegiluvchan, talab egiluvchan", correct: true, why: "Kemasozlik zavodlari va ishchilar tez boshqa ishga o'ta olmaydi. Kamroq egiluvchan tomon — sotuvchilar — yukni ko'taradi." },
      { text: "Davlat — chunki soliqni u yig'adi", why: "Davlat soliqni oladi; yuk deganda narx o'zgarishidan yutqazganlar tushuniladi." },
      { text: "Teng bo'lingan", why: "Egiluvchanliklar juda farq qilgani uchun teng bo'linmagan." },
    ],
  },
  {
    id: "ch06.new.minwage-teens",
    chapter: C,
    kind: "mcq",
    source: "new",
    topic: "Eng kam ish haqi",
    prompt: "Eng kam ish haqi qaysi guruhga **eng ko'p** ta'sir qiladi?",
    options: [
      { text: "Yuqori malakali tajribali ishchilarga", why: "Ularning muvozanat maoshi minimumdan ancha yuqori — tub ular uchun **not binding**." },
      { text: "O'smirlar va eng kam malakali ishchilarga", correct: true, why: "Ularning muvozanat ish haqi past, shuning uchun minimum ko'pincha aynan ular uchun binding. Tadqiqotlar: minimum 10% oshsa, o'smirlar bandligi 1–3% kamayadi." },
      { text: "Davlat xizmatchilariga", why: "Kitobda bunday da'vo yo'q; asosiy ta'sir past malakali mehnat bozorida." },
      { text: "Firma egalariga", why: "Firmalar ham ta'sirlanadi, lekin savol qaysi **ishchilar** guruhi haqida — o'smirlar." },
    ],
  },
  {
    id: "ch06.new.fenway",
    chapter: C,
    kind: "mcq",
    source: "new",
    topic: "Egiluvchanlik va yuk",
    prompt: "Stadionda o'rinlar soni 38,000 ta va o'zgarmaydi. Shahar har bir chiptaga $5 soliq qo'ydi (muxlislar to'laydi). Yuk kimga tushadi?",
    options: [
      { text: "Butunlay muxlislarga", why: "Muxlislar to'laydi, lekin taklif vertikal: jamoa chipta narxini $5 ga tushirishga majbur bo'ladi, aks holda o'rinlar bo'sh qoladi." },
      { text: "Butunlay jamoa egalariga", correct: true, why: "Taklif **mutlaqo noegiluvchan** (38,000). Talab $5 pastga siljiydi, miqdor o'zgarmaydi, jamoa oladigan narx to'liq $5 ga tushadi. Muxlis to'laydigan jami narx o'zgarmaydi." },
      { text: "Yarmi-yarmidan", why: "Teng bo'linish uchun egiluvchanliklar teng bo'lishi kerak; bu yerda taklif egiluvchanligi nol." },
      { text: "Hech kimga — chunki miqdor o'zgarmaydi", why: "Miqdor o'zgarmasa ham soliq yo'qolmaydi: uni kimdir to'laydi (jamoa daromadi kamayadi)." },
    ],
  },
  {
    id: "ch06.new.uz-bread",
    chapter: C,
    kind: "mcq",
    source: "new",
    topic: "Narx shifti",
    prompt: "Faraz qiling, shaharda bir dona nonning bozor muvozanat narxi 4,000 so'm. Hokimiyat “non 3,000 so'mdan qimmat sotilmasin” deb buyurdi. Qisqa vaqt ichida nima kutiladi?",
    options: [
      { text: "Nonvoyxonalar ko'proq non yopadi", why: "Narx past → non yopish kamroq foydali → **taklif miqdori kamayadi**, ko'paymaydi." },
      { text: "Non taqchilligi, navbatlar, “tanish orqali” sotish; ba'zi nonvoylar sifatni pasaytiradi", correct: true, why: "Shift muvozanatdan past — binding. \\(Q^D > Q^S\\): taqchillik va noxush taqsimlash mexanizmlari. Ijara nazoratidagi kabi sifat ham tushishi mumkin." },
      { text: "Hech narsa o'zgarmaydi", why: "Agar shift 4,000 dan yuqori bo'lganida — to'g'ri bo'lardi. 3,000 < 4,000, demak u ta'sirli." },
      { text: "Non talabi kamayadi", why: "Narx tushganda talab **miqdori** oshadi (egri chiziq bo'ylab harakat)." },
    ],
  },
  {
    id: "ch06.new.match-terms",
    chapter: C,
    kind: "match",
    source: "new",
    topic: "Atamalar",
    prompt: "Atamani uning ta'rifi bilan moslashtiring.",
    pairs: [
      { left: "Price ceiling", right: "Tovarni sotish mumkin bo'lgan qonuniy eng yuqori narx" },
      { left: "Price floor", right: "Tovarni sotish mumkin bo'lgan qonuniy eng past narx" },
      { left: "Tax incidence", right: "Soliq yukining bozor ishtirokchilari o'rtasida bo'linishi" },
      { left: "Tax wedge", right: "Xaridor to'laydigan va sotuvchi oladigan narx orasidagi farq" },
      { left: "Binding constraint", right: "Bozorning muvozanatga yetishiga to'sqinlik qiladigan cheklov" },
    ],
  },
  {
    id: "ch06.new.match-outcomes",
    chapter: C,
    kind: "match",
    source: "new",
    topic: "Siyosat natijalari",
    prompt: "Siyosatni uning natijasi bilan moslashtiring.",
    pairs: [
      { left: "Muvozanatdan past narx shifti", right: "Taqchillik (shortage)" },
      { left: "Muvozanatdan yuqori narx tubi", right: "Ortiqcha taklif (surplus)" },
      { left: "Muvozanatdan yuqori narx shifti", right: "Hech qanday ta'sir yo'q (not binding)" },
      { left: "Bir birlikka soliq", right: "Bozor kichrayadi, \\(P_B > P_S\\)" },
      { left: "Uzoq muddatli ijara nazorati", right: "Katta taqchillik va uylar sifati pasayishi" },
    ],
    why: "Esda tuting: shift — **pastda** ta'sirli, tub — **tepada** ta'sirli. Soliq esa har doim ta'sir qiladi va pona yaratadi.",
  },
  {
    id: "ch06.new.rent-subsidy",
    chapter: C,
    kind: "mcq",
    source: "new",
    topic: "Muqobil siyosatlar",
    prompt: "Nega ko'pchilik iqtisodchilar kambag'allarga yordam berish uchun eng kam ish haqidan ko'ra [[earned-income-tax-credit|EITC]] ni afzal ko'radi?",
    options: [
      { text: "EITC davlatga hech narsa turmaydi", why: "Aksincha — u byudjet xarajati va soliqlarni talab qiladi. Bu uning asosiy kamchiligi." },
      { text: "EITC firmalarni ishchi yollashdan qaytarmaydi va kambag'al oilalarga aniqroq yo'naltirilgan", correct: true, why: "Ish haqi subsidiyasi mehnat narxini firmalar uchun oshirmaydi, ishsizlik yaratmaydi. Neumark ham shuni ta'kidlaydi: eng kam ish haqidan foydaning katta qismi o'rta daromadli oilalarga ketadi." },
      { text: "EITC ish haqini qonun bilan oshiradi", why: "Yo'q, EITC — davlat to'lovi; firmalar to'laydigan ish haqini o'zgartirmaydi." },
      { text: "Eng kam ish haqi hech qachon binding bo'lmaydi", why: "Past malakali ishchilar uchun u ko'pincha binding." },
    ],
  },
];

// ---------------- Graph tasks ----------------

const ceilTask = { ...iceCeiling, modes: ['ceiling' as const], control: 4.5, presets: undefined, surplus: false };
const floorTask = { ...iceFloor, modes: ['floor' as const], control: 4.5, surplus: false };
const marketTask = { ...iceMarket, moveAlong: false, modes: ['market' as const] };
const incidenceTask = { ...incidence, presets: undefined, demand: { a: 8, b: 0.05 }, supply: { c: -2, d: 0.05 } };
const gasTask = { ...gasLines, presets: undefined, supply: { c: 0.5, d: 0.02 }, shiftControls: true };

export const graphTasks: Question[] = [
  {
    id: "ch06.graph.binding-ceiling",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: "Narx shifti",
    prompt: "Qizil chiziqni (narx shiftini) suring: **kamida 40 dona taqchillik** yaratadigan ta'sirli shift o'rnating.",
    graph: ceilTask,
    check: (s) => {
      const o = priceCeiling(s.D, s.S, s.control);
      if (!o.binding) return { ok: false, msg: `Shift $${s.control.toFixed(2)} muvozanatdan ($3.00) yuqori — u **not binding**. Uni muvozanatdan pastga tushiring.` };
      if (o.gap < 40) return { ok: false, msg: `Shift binding, lekin taqchillik atigi ${o.gap.toFixed(0)} dona. Kattaroq taqchillik uchun shiftni yanada pastga tushiring.` };
      return { ok: true, msg: `Ajoyib! $${s.control.toFixed(2)} da talab ${o.qd.toFixed(0)}, taklif ${o.qs.toFixed(0)} — taqchillik ${o.gap.toFixed(0)} dona. Shift qancha past bo'lsa, taqchillik shuncha katta.` };
    },
  },
  {
    id: "ch06.graph.nonbinding-floor",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: "Binding / not binding",
    prompt: "Narx tubini shunday o'rnatingki, u bozorga **hech qanday ta'sir qilmasin** (not binding).",
    graph: floorTask,
    check: (s) => {
      const o = priceFloor(s.D, s.S, s.control);
      return o.binding
        ? { ok: false, msg: `Tub $${s.control.toFixed(2)} muvozanatdan yuqori — hali ham ${o.gap.toFixed(0)} dona surplus bor. Tubni $3.00 dan pastga tushiring.` }
        : { ok: true, msg: "To'g'ri: tub muvozanat narxidan past yoki unga teng — bozor $3.00 da muvozanatga keladi. Tub faqat **tepada** ta'sirli." };
    },
  },
  {
    id: "ch06.graph.demand-increase",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: "Siljish",
    prompt: "Issiq havo muzqaymoq talabini oshirdi. Kerakli egri chiziqni siljitib, **muvozanat narxini kamida $3.40** ga chiqaring. (Taklifga tegmang.)",
    graph: marketTask,
    check: (s) => {
      const supplyMoved = Math.abs(s.S.c - marketTask.supply.c) > 1e-6 || Math.abs(s.S.d - marketTask.supply.d) > 1e-6;
      if (supplyMoved) return { ok: false, msg: "Ob-havo sotuvchilarning xarajatiga ta'sir qilmaydi — **taklif** joyida qolishi kerak. Reset bosib, faqat talabni siljiting." };
      if (qd(s.D, 3) <= 100) return { ok: false, msg: "Talab chapga siljidi (kamaydi). Issiq havoda odamlar **ko'proq** xohlaydi — o'ngga torting." };
      const e = graphBase(s);
      if (e.P < 3.4) return { ok: false, msg: `Yo'nalish to'g'ri, lekin narx hozircha $${e.P.toFixed(2)}. Talabni yana o'ngga suring.` };
      return { ok: true, msg: `Zo'r! Talab o'ngga siljidi → narx $${e.P.toFixed(2)}, miqdor ${e.Q.toFixed(0)}. Taklif egri chizig'i joyida: sotuvchilar shunchaki **egri chiziq bo'ylab** yuqoriga harakatlandi (quantity supplied oshdi, supply emas).` };
    },
  },
  {
    id: "ch06.graph.supply-decrease",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: "Siljish",
    prompt: "Shakar (xomashyo) qimmatladi. Kerakli egri chiziqni siljitib, **muvozanat miqdorini 80 yoki undan kamga** tushiring. (Talabga tegmang.)",
    graph: marketTask,
    check: (s) => {
      const demandMoved = Math.abs(s.D.a - marketTask.demand.a) > 1e-6 || Math.abs(s.D.b - marketTask.demand.b) > 1e-6;
      if (demandMoved) return { ok: false, msg: "Xomashyo narxi xaridorlarning xohishiga bevosita ta'sir qilmaydi — **talab** joyida qolishi kerak." };
      if (qs(s.S, 3) >= 100) return { ok: false, msg: "Taklif o'ngga siljidi. Xarajat oshsa, sotuvchilar har bir narxda **kamroq** taklif qiladi — chapga torting." };
      const e = graphBase(s);
      if (e.Q > 80) return { ok: false, msg: `Yo'nalish to'g'ri, miqdor hozircha ${e.Q.toFixed(0)}. Taklifni yana chapga suring.` };
      return { ok: true, msg: `To'g'ri! Taklif chapga siljidi: narx $${e.P.toFixed(2)} ga ko'tarildi, miqdor ${e.Q.toFixed(0)} ga tushdi (Figure 11 dagi kabi).` };
    },
  },
  {
    id: "ch06.graph.sellers-bear",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: "Egiluvchanlik va yuk",
    prompt: "$1 soliq bor. Egiluvchanlik slayderlari yordamida shunday bozor yarating, unda **sotuvchilar yukning kamida 70%** ini ko'tarsin.",
    graph: incidenceTask,
    check: (s) => {
      const t = tax(s.D, s.S, s.tax);
      const p = Math.round(t.sellerShare * 100);
      return p >= 70
        ? { ok: true, msg: `Barakalla! Sotuvchilar ${p}% ni ko'taryapti. Siz taklifni **noegiluvchan** va/yoki talabni **egiluvchan** qildingiz — yuk kamroq egiluvchan tomonga tushadi.` }
        : { ok: false, msg: `Hozir sotuvchilar ulushi ${p}%. Ularga ko'proq yuk tushishi uchun **taklif**ni noegiluvchanroq (tikroq) yoki **talab**ni egiluvchanroq (yotiqroq) qiling.` };
    },
  },
  {
    id: "ch06.graph.gas-binding",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: "Benzin navbatlari",
    prompt: "Benzin narxiga $2.50 lik shift bor va hozir u ta'sirsiz. OPEC neft qazishni kamaytirdi: **taklifni** siljitib, shiftni **binding** qiling va kamida 20 mln gallon taqchillik hosil qiling.",
    graph: gasTask,
    check: (s) => {
      const o = priceCeiling(s.D, s.S, s.control);
      if (Math.abs(s.D.a - gasTask.demand.a) > 1e-6) return { ok: false, msg: "OPEC qarori benzin **taklifi**ga ta'sir qiladi (xom neft — xomashyo). Talabni joyida qoldiring." };
      if (!o.binding) return { ok: false, msg: "Shift hali ta'sirsiz. Taklifni **chapga** siljiting, muvozanat narxi $2.50 dan oshsin." };
      if (o.gap < 20) return { ok: false, msg: `Shift endi binding, taqchillik ${o.gap.toFixed(0)} mln gallon. Yana chapga suring.` };
      return { ok: true, msg: `Mana 1973 yil! Erkin bozorda narx $${equilibrium(s.D, s.S).P.toFixed(2)} bo'lardi, lekin shift uni $2.50 da ushlab turibdi: ${o.gap.toFixed(0)} mln gallon taqchillik → zapravkalarda soatlab navbat.` };
    },
  },
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice, ...graphTasks];
