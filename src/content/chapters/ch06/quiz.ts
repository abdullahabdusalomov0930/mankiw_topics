import type { SDState } from '../../../components/graphs/SupplyDemandGraph';
import { equilibrium, priceCeiling, priceFloor, qd, qs, tax } from '../../../lib/econ';
import type { Question } from '../../types';
import { gasLines, iceCeiling, iceFloor, iceMarket, incidence } from './presets';
import { tr } from '../../../lib/lang';

const C = 6;

// ---------------- QuickQuiz (book) ----------------

export const quickQuiz: Question[] = [
  {
    id: "ch06.qq.1",
    chapter: C,
    kind: "mcq",
    source: "quickquiz",
    topic: tr("Narx tubi", 'Price floor'),
    prompt: "When the government imposes a **binding price floor**, it causes",
    options: [
      { text: "the supply curve to shift to the left.", why: tr("Narx tubi egri chiziqlarni **siljitmaydi**: u faqat narxni muvozanatdan yuqorida ushlab turadi. Taklif va talab joyida qoladi.", "A price floor **doesn't shift** the curves: it only holds the price above equilibrium. Supply and demand stay put.") },
      { text: "the demand curve to shift to the right.", why: tr("Talab egri chizig'i ham joyida: xaridorlarning didi yoki daromadi o'zgargani yo'q, faqat narx qonun bilan yuqori.", "The demand curve stays put too: buyers' tastes and incomes haven't changed; only the price is held high by law.") },
      { text: "a shortage of the good to develop.", why: tr("Taqchillik **narx shifti**ga xos (narx past → ko'p xohlovchi). Tub esa narxni yuqori qiladi.", 'A shortage goes with a **price ceiling** (a low price → many want it). A floor keeps the price high.') },
      { text: "a surplus of the good to develop.", correct: true, why: tr("Narx P* dan yuqori → sotuvchilar ko'proq taklif qiladi, xaridorlar kamroq oladi: \\(Q^S > Q^D\\) — **surplus**.", 'The price is above P* → sellers offer more and buyers take less: \\(Q^S > Q^D\\) — a **surplus**.') },
    ],
  },
  {
    id: "ch06.qq.2",
    chapter: C,
    kind: "mcq",
    source: "quickquiz",
    topic: tr("Narx shifti", 'Price ceiling'),
    prompt: "In a market with a **binding price ceiling**, increasing the ceiling price will",
    options: [
      { text: "increase the surplus.", why: tr("Ta'sirli shift ostida bozorda surplus emas, **taqchillik** bor.", 'Under a binding ceiling the market has a **shortage**, not a surplus.') },
      { text: "increase the shortage.", why: tr("Teskarisi: shift ko'tarilsa narx muvozanatga yaqinlashadi, \\(Q^S\\) oshadi, \\(Q^D\\) kamayadi — taqchillik qisqaradi.", 'The reverse: raising the ceiling moves the price toward equilibrium, \\(Q^S\\) rises and \\(Q^D\\) falls — the shortage shrinks.') },
      { text: "decrease the surplus.", why: tr("Bu yerda surplus yo'q — bu narx tubi haqidagi javob.", 'There is no surplus here — that is the answer for a price floor.') },
      { text: "decrease the shortage.", correct: true, why: tr("Shift yuqoriroq → taklif miqdori ko'payadi, talab miqdori kamayadi → \\(Q^D - Q^S\\) kichrayadi.", 'A higher ceiling → quantity supplied rises and quantity demanded falls → \\(Q^D - Q^S\\) shrinks.') },
    ],
  },
  {
    id: "ch06.qq.3",
    chapter: C,
    kind: "mcq",
    source: "quickquiz",
    topic: tr("Ijara nazorati", 'Rent control'),
    prompt: "Rent control causes larger shortages in the ________ run because over that time horizon, supply and demand are ________ elastic.",
    options: [
      { text: "long; more", correct: true, why: tr("Uzoq muddatda uy egalari qurilish va ta'mirni to'xtatadi, odamlar ko'proq alohida yashashni xohlaydi — egri chiziqlar yotiqroq (egiluvchanroq), shu sabab taqchillik kattaroq.", 'In the long run landlords stop building and maintaining, and more people want to live alone — the curves are flatter (more elastic), so the shortage is larger.') },
      { text: "long; less", why: tr("Uzoq muddat to'g'ri, lekin egiluvchanlik **kattaroq** bo'ladi — vaqt o'tishi bilan odamlar va uy egalari ko'proq moslashadi.", 'The long run is right, but elasticity becomes **larger** — over time tenants and landlords adjust more.') },
      { text: "short; more", why: tr("Qisqa muddatda kvartiralar soni deyarli o'zgarmaydi — taklif **noegiluvchan**, taqchillik kichik.", 'In the short run the number of apartments barely changes — supply is **inelastic** and the shortage is small.') },
      { text: "short; less", why: tr("Qisqa muddatda haqiqatan ham egiluvchanlik kam, lekin aynan shuning uchun taqchillik **kichik** bo'ladi, katta emas.", 'Elasticity really is low in the short run, but that is exactly why the shortage is **small**, not large.') },
    ],
  },
  {
    id: "ch06.qq.4",
    chapter: C,
    kind: "mcq",
    source: "quickquiz",
    topic: tr("Eng kam ish haqi", 'Minimum wage'),
    prompt: "An increase in the minimum wage reduces the total amount paid to the affected workers if the price elasticity of ________ is ________ than one.",
    options: [
      { text: "supply; greater", why: tr("Ishga olinganlar sonini **firmalar** (talab) belgilaydi, chunki ta'sirli tubda talab qisqa tomon. Taklif egiluvchanligi faqat ishsizlar soniga ta'sir qiladi.", 'The number hired is set by **firms** (demand), because under a binding floor demand is the short side. The elasticity of supply only affects the number of unemployed.') },
      { text: "supply; less", why: tr("Xuddi shu sabab: umumiy to'lov = \\(W \\times Q^D\\), taklif bu yerda rol o'ynamaydi.", 'Same reason: total pay = \\(W \\times Q^D\\); supply plays no role here.') },
      { text: "demand; greater", correct: true, why: tr("Umumiy to'lov \\(= W \\times Q^D\\). Agar mehnat talabi egiluvchan (>1) bo'lsa, ish haqi 10% oshganda bandlik 10% dan ko'proq kamayadi → umumiy to'lov kamayadi.", 'Total pay \\(= W \\times Q^D\\). If labor demand is elastic (>1), a 10% higher wage cuts employment by more than 10% → total pay falls.') },
      { text: "demand; less", why: tr("Noegiluvchan talabda bandlik ish haqidan kamroq foizga kamayadi — umumiy to'lov **oshadi**.", 'With inelastic demand employment falls by a smaller percentage than the wage rises — total pay **rises**.') },
    ],
  },
  {
    id: "ch06.qq.5",
    chapter: C,
    kind: "mcq",
    source: "quickquiz",
    topic: tr("Soliq ekvivalentligi", 'Tax equivalence'),
    prompt: "A $1 per unit tax levied on **consumers** of a good is equivalent to",
    options: [
      { text: "a $1 per unit tax levied on producers of the good.", correct: true, why: tr("Ikkalasi ham \\(P_B\\) va \\(P_S\\) orasiga $1 lik **pona** qo'yadi. Natijada \\(P_B\\), \\(P_S\\) va \\(Q\\) aynan bir xil — faqat pulni davlatga kim olib borishi farq qiladi.", 'Both drive a $1 **wedge** between \\(P_B\\) and \\(P_S\\). As a result \\(P_B\\), \\(P_S\\), and \\(Q\\) are exactly the same — only who hands the money to the government differs.') },
      { text: "a $1 per unit subsidy paid to producers of the good.", why: tr("Subsidiya — teskari siyosat: u miqdorni oshiradi, soliq esa kamaytiradi.", 'A subsidy is the opposite policy: it raises the quantity, while a tax lowers it.') },
      { text: "a price floor that raises the good's price by $1 per unit.", why: tr("Narx tubi pona yaratmaydi (xaridor va sotuvchi bir xil narxni ko'radi) va davlatga tushum bermaydi.", 'A price floor creates no wedge (buyers and sellers see the same price) and brings the government no revenue.') },
      { text: "a price ceiling that raises the good's price by $1 per unit.", why: tr("Shift narxni **ko'tara olmaydi** — u faqat yuqori chegarani belgilaydi.", "A ceiling **can't raise** the price — it only sets an upper limit.") },
    ],
  },
  {
    id: "ch06.qq.6",
    chapter: C,
    kind: "mcq",
    source: "quickquiz",
    topic: tr("Soliq yuki", 'Tax incidence'),
    prompt: "When a good is taxed, the burden of the tax falls mainly on **consumers** if",
    options: [
      { text: "the tax is levied on consumers.", why: tr("Soliqni qonun bo'yicha kim to'lashi yukni belgilamaydi — buni Figures 6 va 7 ko'rsatadi.", "Who pays the tax by law doesn't decide the burden — Figures 6 and 7 show that.") },
      { text: "the tax is levied on producers.", why: tr("Yana o'sha xato: tax incidence qonunga emas, **egiluvchanlikka** bog'liq.", 'The same mistake again: tax incidence depends on **elasticity**, not on the law.') },
      { text: "supply is inelastic and demand is elastic.", why: tr("Bu holda yuk **sotuvchilarga** tushadi (yaxtalar va hashamat solig'i misoli).", 'In that case the burden falls on **sellers** (the yacht luxury tax example).') },
      { text: "supply is elastic and demand is inelastic.", correct: true, why: tr("Xaridorlarda yaxshi muqobil yo'q (noegiluvchan talab), ular bozorni tark etolmaydi → narx asosan ularga oshadi. Yuk **kamroq egiluvchan** tomonga tushadi.", "Buyers have no good alternative (inelastic demand) and can't leave the market → the price rises mostly for them. The burden falls on the **less elastic** side.") },
    ],
  },
  {
    id: "ch06.qq.7",
    chapter: C,
    kind: "mcq",
    source: "quickquiz",
    topic: tr("Siyosatlarni taqqoslash", 'Comparing policies'),
    prompt: "Which of the following **increases** the quantity supplied, **decreases** the quantity demanded, and **increases** the price that consumers pay?",
    options: [
      { text: "the passage of a tax on a good", why: tr("Soliq sotuvchi oladigan narxni kamaytiradi → taklif miqdori ham **kamayadi** (birinchi shart bajarilmaydi).", 'A tax lowers the price sellers receive → the quantity supplied also **falls** (the first condition fails).') },
      { text: "the repeal of a tax on a good", why: tr("Soliqni bekor qilish xaridor narxini **tushiradi** va talab miqdorini oshiradi.", "Removing a tax **lowers** the buyers' price and raises the quantity demanded.") },
      { text: "the imposition of a binding price floor", correct: true, why: tr("Tub narxni ko'taradi: sotuvchilar ko'proq taklif qilishni xohlaydi (\\(Q^S\\) ↑), xaridorlar kamroq oladi (\\(Q^D\\) ↓), xaridor to'laydigan narx ↑.", 'A floor raises the price: sellers want to supply more (\\(Q^S\\) ↑), buyers take less (\\(Q^D\\) ↓), and the price buyers pay ↑.') },
      { text: "the removal of a binding price floor", why: tr("Tubni olib tashlash narxni **tushiradi** — hammasi teskari.", 'Removing a floor **lowers** the price — everything is reversed.') },
    ],
  },
  {
    id: "ch06.qq.8",
    chapter: C,
    kind: "mcq",
    source: "quickquiz",
    topic: tr("Siyosatlarni taqqoslash", 'Comparing policies'),
    prompt: "Which of the following **increases** the quantity supplied, **increases** the quantity demanded, and **decreases** the price that consumers pay?",
    options: [
      { text: "the passage of a tax on a good", why: tr("Soliq ikkala miqdorni ham kamaytiradi va xaridor narxini oshiradi.", "A tax lowers both quantities and raises the buyers' price.") },
      { text: "the repeal of a tax on a good", correct: true, why: tr("Pona yo'qoladi: xaridor kamroq to'laydi (\\(Q^D\\) ↑), sotuvchi ko'proq oladi (\\(Q^S\\) ↑). Bozor kattalashadi.", 'The wedge disappears: buyers pay less (\\(Q^D\\) ↑) and sellers receive more (\\(Q^S\\) ↑). The market grows.') },
      { text: "the imposition of a binding price floor", why: tr("Tub narxni oshiradi va talab miqdorini kamaytiradi.", 'A floor raises the price and lowers the quantity demanded.') },
      { text: "the removal of a binding price floor", why: tr("Narx tushadi va \\(Q^D\\) oshadi, lekin sotuvchilar past narxda **kamroq** taklif qiladi — \\(Q^S\\) kamayadi.", 'The price falls and \\(Q^D\\) rises, but sellers supply **less** at the lower price — \\(Q^S\\) falls.') },
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
    topic: tr("Narx nazorati turlari", 'Kinds of price controls'),
    prompt: tr("Toshkent hokimiyati ijara haqi oyiga $400 dan oshmasligi kerak, deb qaror qildi. Bu qaysi siyosat?", "Tashkent's city government decides that rent may not exceed $400 a month. What policy is this?"),
    options: [
      { text: "[[price-ceiling|Price ceiling]]", correct: true, why: tr("Qonun **eng yuqori** narxni belgilayapti — bu shift (ceiling). Ijara nazorati — darslikdagi klassik misol.", "The law sets a **maximum** price — a ceiling. Rent control is the textbook's classic example.") },
      { text: "[[price-floor|Price floor]]", why: tr("Tub — eng **past** narx (masalan, eng kam ish haqi). Bu yerda esa yuqori chegara qo'yilgan.", 'A floor is a **minimum** price (like the minimum wage). Here an upper limit is set.') },
      { text: "Tax on landlords", why: tr("Soliqda davlat pul oladi; bu yerda hech kim davlatga pul to'lamayapti, faqat narx cheklangan.", 'With a tax the government collects money; here nobody pays the government, the price is just capped.') },
      { text: "Subsidy for tenants", why: tr("Subsidiyada davlat ijarachilarga pul beradi; bu yerda narxga taqiq qo'yilgan.", 'With a subsidy the government gives tenants money; here the price is restricted.') },
    ],
  },
  "s-6-1a": {
    id: "ch06.check.6-1a",
    chapter: C,
    kind: "numeric",
    source: "new",
    topic: tr("Narx shifti", 'Price ceiling'),
    prompt: tr("Figure 1(b): muvozanat $3, narx shifti $2. Bu narxda 125 dona talab qilinadi, 75 dona taklif qilinadi. **Taqchillik** necha dona?", 'Figure 1(b): equilibrium is $3 and the ceiling $2. At that price 125 cones are demanded and 75 supplied. How big is the **shortage**?'),
    answer: 50,
    tolerance: 0,
    unit: tr("dona", "cones"),
    why: tr("Taqchillik \\(= Q^D - Q^S = 125 - 75 = 50\\). Sotilgan miqdor esa 75 — qisqa tomon.", 'Shortage \\(= Q^D - Q^S = 125 - 75 = 50\\). The quantity sold is 75 — the short side.'),
    traps: [
      { value: -50, why: tr("Ayirish tartibi teskari: taqchillik \\(= Q^D - Q^S\\) (talab ko'p).", 'You subtracted in the wrong order: shortage \\(= Q^D - Q^S\\) (demand is larger).') },
      { value: 75, why: tr("75 — sotilgan miqdor, taqchillik emas.", '75 is the quantity sold, not the shortage.') },
      { value: 125, why: tr("125 — talab miqdori. Undan taklif miqdorini ayirish kerak.", '125 is the quantity demanded. Subtract the quantity supplied from it.') },
    ],
  },
  "s-6-1b": {
    id: "ch06.check.6-1b",
    chapter: C,
    kind: "tf",
    source: "new",
    topic: tr("Narx tubi", 'Price floor'),
    prompt: tr("Muvozanat narxi $3. Hukumat $2 lik **narx tubi** belgilasa, bozorda ortiqcha taklif (surplus) paydo bo'ladi.", 'The equilibrium price is $3. If the government sets a **price floor** of $2, a surplus appears in the market.'),
    answer: false,
    why: tr("Tub muvozanatdan **past** — u **not binding**. Bozor baribir $3 da muvozanatga keladi, hech qanday surplus yo'q. Tub faqat P* dan yuqori bo'lsa ta'sir qiladi.", 'The floor is **below** equilibrium — it is **not binding**. The market still reaches equilibrium at $3, with no surplus. A floor matters only above P*.'),
  },
  "s-6-1c": {
    id: "ch06.check.6-1c",
    chapter: C,
    kind: "mcq",
    source: "new",
    topic: tr("Muqobil siyosatlar", 'Alternative policies'),
    prompt: tr("Kam ta'minlangan oilalarga uy-joyni arzonlashtirishning qaysi usuli **taqchillik keltirib chiqarmaydi**?", 'Which way of making housing cheaper for low-income families **does not cause a shortage**?'),
    options: [
      { text: tr("Ijara haqiga shift qo'yish", 'A ceiling on rents'), why: tr("Ta'sirli shift — taqchillik manbai, ayniqsa uzoq muddatda.", 'A binding ceiling is a source of shortages, especially in the long run.') },
      { text: tr("Oilalarga ijaraning bir qismini to'lash (rent subsidy) yoki naqd pul berish", "Paying part of families' rent (a rent subsidy) or giving them cash"), correct: true, why: tr("Subsidiya narxni bozor muvozanatida qoldiradi, taklif miqdorini kamaytirmaydi. Kamchiligi — byudjetga xarajat va demak soliqlar.", "A subsidy leaves the price at the market equilibrium and doesn't reduce the quantity supplied. Its drawback: it costs the budget, which means taxes.") },
      { text: tr("Uy egalariga yangi soliq solish", 'A new tax on landlords'), why: tr("Soliq taklifni kamaytiradi va ijarani qimmatlashtiradi — maqsadga teskari.", 'A tax cuts supply and makes rent pricier — the opposite of the goal.') },
      { text: tr("Kvartiralarni faqat tanishlarga berishga ruxsat", 'Allowing apartments to go only to acquaintances'), why: tr("Bu taqsimlash mexanizmi — adolatsiz va samarasiz, taqchillikni hal qilmaydi.", "That is a rationing mechanism — unfair and inefficient, and it doesn't solve the shortage.") },
    ],
  },
  "s-6-2": {
    id: "ch06.check.6-2",
    chapter: C,
    kind: "mcq",
    source: "new",
    topic: tr("Soliq yuki", 'Tax incidence'),
    prompt: tr("Shahar meri soliqni xaridor va sotuvchi o'rtasida “yarmi-yarmidan” bo'lishni taklif qildi. [[tax-incidence|Tax incidence]] haqiqatda nimaga bog'liq?", 'The mayor proposes splitting a tax “half and half” between buyers and sellers. What does [[tax-incidence|tax incidence]] really depend on?'),
    options: [
      { text: tr("Qonunda soliqni kim to'lashi yozilganiga", 'On who the law says pays the tax'), why: tr("Qonun faqat pulni kim olib kelishini belgilaydi. Bozor narxlari moslashib, yukni qayta taqsimlaydi.", 'The law only decides who hands over the money. Market prices adjust and redistribute the burden.') },
      { text: tr("Talab va taklif egiluvchanligiga", 'On the elasticities of supply and demand'), correct: true, why: tr("Yuk kamroq egiluvchan (bozordan chiqib ketishi qiyin) tomonga ko'proq tushadi.", 'The burden falls more on the less elastic side (the one that finds it harder to leave the market).') },
      { text: tr("Soliq summasining kattaligiga", 'On the size of the tax'), why: tr("Soliq kattaligi umumiy yukni belgilaydi, lekin uni **qanday bo'lishini** egiluvchanlik hal qiladi.", 'The size of the tax sets the total burden, but elasticity decides **how it is split**.') },
      { text: tr("Hech narsaga — har doim 50/50", 'On nothing — it is always 50/50'), why: tr("Yuk faqat egiluvchanliklar teng bo'lganda taxminan teng bo'linadi; bu kamdan-kam holat.", 'The burden is split about equally only when the elasticities are equal; that is rare.') },
    ],
  },
  "s-6-2a": {
    id: "ch06.check.6-2a",
    chapter: C,
    kind: "numeric",
    source: "new",
    topic: tr("Sotuvchiga soliq", 'A tax on sellers'),
    prompt: tr("Figure 6: soliqsiz narx $3.00, sotuvchilarga $0.50 soliq qo'yilgach bozor narxi $3.30 bo'ldi. Xaridorlar har bir muzqaymoq uchun avvalgidan **necha sent** ko'p to'laydi?", 'Figure 6: without the tax the price is $3.00; after a $0.50 tax on sellers the market price is $3.30. How many **cents** more per cone do buyers pay?'),
    answer: 30,
    tolerance: 0.5,
    unit: tr("sent", "cents"),
    why: tr("$3.30 − $3.00 = $0.30 = 30 sent. Sotuvchilar esa $3.30 − $0.50 = $2.80 oladi, ya'ni 20 sent kam. Yuk 30:20 bo'lingan.", '$3.30 − $3.00 = $0.30 = 30 cents. Sellers receive $3.30 − $0.50 = $2.80, i.e. 20 cents less. The burden is split 30:20.'),
    traps: [
      { value: 50, why: tr("Bu butun soliq. Lekin narx soliqning to'liq miqdoriga oshmadi — sotuvchilar ham 20 sent yo'qotdi.", "That is the whole tax. But the price didn't rise by the full tax — sellers lost 20 cents too.") },
      { value: 20, why: tr("20 sent — sotuvchilar yo'qotgani (3.00 − 2.80). Savol xaridorlar haqida.", '20 cents is what sellers lost (3.00 − 2.80). The question is about buyers.') },
    ],
  },
  "s-6-2b": {
    id: "ch06.check.6-2b",
    chapter: C,
    kind: "tf",
    source: "new",
    topic: tr("Soliq ekvivalentligi", 'Tax equivalence'),
    prompt: tr("Bir xil miqdordagi soliq xaridorlarga yoki sotuvchilarga solinishidan qat'i nazar, xaridor to'laydigan narx, sotuvchi oladigan narx va sotilgan miqdor bir xil bo'ladi.", 'Whether a given tax is levied on buyers or on sellers, the price buyers pay, the price sellers receive, and the quantity sold are the same.'),
    answer: true,
    why: tr("Ikkala holda ham soliq \\(P_B\\) va \\(P_S\\) orasiga bir xil **pona** qo'yadi. Farq faqat shunda: kim pulni davlatga topshiradi (\"stakandagi pul\" misoli).", 'Either way the tax drives the same **wedge** between \\(P_B\\) and \\(P_S\\). The only difference is who hands the money to the government (the “money on the table” example).'),
  },
  "s-6-2c": {
    id: "ch06.check.6-2c",
    chapter: C,
    kind: "mcq",
    source: "new",
    topic: tr("Egiluvchanlik va yuk", 'Elasticity and the burden'),
    prompt: tr("Sigaretaga talab juda **noegiluvchan**, taklif esa ancha **egiluvchan**. Yangi aksiz solig'i asosan kimga tushadi?", 'Demand for cigarettes is very **inelastic** and supply fairly **elastic**. Who mostly bears a new excise tax?'),
    options: [
      { text: tr("Chekuvchilarga (xaridorlarga)", 'Smokers (buyers)'), correct: true, why: tr("Chekuvchilar sigaretadan oson voz kechmaydi — ular bozorda qoladi va narx oshishini ko'taradi. Panel (a) holati.", "Smokers don't give up cigarettes easily — they stay in the market and bear the price increase. The panel (a) case.") },
      { text: tr("Sigaret ishlab chiqaruvchilarga", 'Cigarette producers'), why: tr("Sotuvchilar egiluvchan: narx tushsa, ular boshqa ishga o'tishi mumkin — shuning uchun ularning narxi kam tushadi.", 'Sellers are elastic: if the price falls they can switch to other work — so the price they receive falls only a little.') },
      { text: tr("Teng bo'linadi", 'It is split equally'), why: tr("Teng bo'linish faqat egiluvchanliklar teng bo'lganda bo'ladi.", 'An equal split happens only when the elasticities are equal.') },
      { text: tr("Faqat davlatga", 'Only the government'), why: tr("Davlat soliqni **oladi**, ko'tarmaydi. Yukni bozor ishtirokchilari ko'taradi.", "The government **collects** the tax; it doesn't bear it. Market participants bear the burden.") },
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
    topic: tr("Taqsimlash mexanizmlari", 'Rationing mechanisms'),
    prompt: tr("Ta'sirli narx shifti sharoitida quyidagilardan qaysi biri tovarni taqsimlash **mexanizmi bo'la olmaydi**?", 'Under a binding price ceiling, which of these **cannot** be the way the good is rationed?'),
    options: [
      { text: tr("Uzun navbatlar", 'Long lines'), why: tr("Navbat — klassik mexanizm (1970-yillardagi benzin navbatlari).", 'Lines are the classic mechanism (the gasoline lines of the 1970s).') },
      { text: tr("Sotuvchining tanish-bilishlarga sotishi", 'Sellers selling to friends and acquaintances'), why: tr("Kitobda aytilgan: sotuvchilar do'stlari, qarindoshlari yoki “xizmat qilganlarga” sotadi.", 'The book says it: sellers sell to friends, relatives, or those “in their favor.”') },
      { text: tr("Narxning o'zi", 'The price itself'), correct: true, why: tr("Aynan narx ishlay olmaydi — u shiftdan oshib ko'tarilishi taqiqlangan. Shuning uchun boshqa mexanizmlar paydo bo'ladi.", "The price is exactly what can't work — it is forbidden to rise above the ceiling. That is why other mechanisms appear.") },
      { text: tr("Pora va kutish ro'yxatlari", 'Bribes and waiting lists'), why: tr("Ijara nazorati misolida: kutish ro'yxatlari va “stol ostidan” to'lovlar.", 'In the rent-control example: waiting lists and under-the-table payments.') },
    ],
  },
  {
    id: "ch06.new.qty-sold",
    chapter: C,
    kind: "mcq",
    source: "new",
    topic: tr("Narx shifti", 'Price ceiling'),
    prompt: tr("Shift $2 da talab miqdori 125, taklif miqdori 75. Bozorda **haqiqatda qancha** muzqaymoq sotiladi?", 'With a $2 ceiling, quantity demanded is 125 and quantity supplied 75. How much ice cream is **actually** sold?'),
    options: [
      { text: "125", why: tr("Xaridorlar 125 tani xohlaydi, lekin sotuvchilar faqat 75 tasini olib keladi. Hech kim yo'q narsani sota olmaydi.", "Buyers want 125, but sellers bring only 75. Nobody can sell what isn't there.") },
      { text: "100", why: tr("100 — muvozanat miqdori; shift bozorni muvozanatga yetkazmaydi.", '100 is the equilibrium quantity; the ceiling keeps the market from reaching equilibrium.') },
      { text: "75", correct: true, why: tr("Sotilgan miqdor bozorning **qisqa tomoni** bilan belgilanadi: shiftda bu taklif miqdori.", 'The quantity sold is set by the **short side** of the market: under a ceiling, the quantity supplied.') },
      { text: "50", why: tr("50 — taqchillik (125 − 75), sotilgan miqdor emas.", '50 is the shortage (125 − 75), not the quantity sold.') },
    ],
  },
  {
    id: "ch06.new.ceiling-above",
    chapter: C,
    kind: "tf",
    source: "new",
    topic: "Binding / not binding",
    prompt: tr("Muvozanat narxidan **yuqori** qo'yilgan narx shifti taqchillik keltirib chiqaradi.", 'A price ceiling set **above** the equilibrium price causes a shortage.'),
    answer: false,
    why: tr("Shift P* dan yuqori bo'lsa — **not binding**: bozor narxi P* da qoladi, taqchillik yo'q. Esda tuting: shift faqat **pastda**, tub faqat **tepada** ta'sir qiladi.", 'A ceiling above P* is **not binding**: the market price stays at P*, with no shortage. Remember: a ceiling binds only **below**, a floor only **above**.'),
  },
  {
    id: "ch06.new.price-tag",
    chapter: C,
    kind: "tf",
    source: "new",
    topic: tr("Xaridorga soliq", 'A tax on buyers'),
    prompt: tr("Soliq **xaridorlarga** solinganda do'kondagi narx yorlig'i (xaridor sotuvchiga to'laydigan narx) avvalgidan **pasayadi**.", 'When a tax is levied on **buyers**, the price tag in the store (what buyers pay the seller) **falls**.'),
    answer: true,
    why: tr("Talab soliq miqdoricha pastga siljiydi, bozor narxi \\(P_S\\) ga tushadi (muzqaymoqda $3.00 → $2.80). Lekin xaridor yana $0.50 soliq to'laydi, jami \\(P_B = 3.30\\) — demak u baribir yutqazadi.", 'Demand shifts down by the tax and the market price falls to \\(P_S\\) ($3.00 → $2.80 for ice cream). But buyers also pay the $0.50 tax, for a total \\(P_B = 3.30\\) — so they still lose.'),
  },
  {
    id: "ch06.new.payroll-law",
    chapter: C,
    kind: "tf",
    source: "new",
    topic: tr("Ish haqi solig'i", 'A payroll tax'),
    prompt: tr("Kongress qonun bilan ish haqi solig'ining yukini firmalar va ishchilar o'rtasida aniq 50/50 bo'lishi mumkin.", 'Congress can make the burden of the payroll tax split exactly 50/50 between firms and workers by law.'),
    answer: false,
    why: tr("Qonun faqat soliqni kim to'lashini belgilaydi. Haqiqiy yuk mehnat talabi va taklifi egiluvchanligiga bog'liq; mehnat taklifi kamroq egiluvchan bo'lgani uchun yukning katta qismi **ishchilarga** tushadi.", 'The law only says who pays the tax. The real burden depends on the elasticities of labor supply and demand; because labor supply is less elastic, most of the burden falls on **workers**.'),
  },
  {
    id: "ch06.new.perfectly-inelastic",
    chapter: C,
    kind: "tf",
    source: "new",
    topic: tr("Egiluvchanlik va yuk", 'Elasticity and the burden'),
    prompt: tr("Agar talab **mutlaqo noegiluvchan** (vertikal) bo'lsa, soliqning butun yukini xaridorlar ko'taradi.", 'If demand is **perfectly inelastic** (vertical), buyers bear the entire burden of a tax.'),
    answer: true,
    why: tr("Xaridorlar narxdan qat'i nazar bir xil miqdorni oladi, demak ular bozordan chiqmaydi. Miqdor o'zgarmaydi, \\(P_S\\) ham o'zgarmaydi, \\(P_B\\) esa to'liq T ga oshadi.", "Buyers take the same quantity whatever the price, so they don't leave the market. The quantity doesn't change, \\(P_S\\) doesn't change, and \\(P_B\\) rises by the full T."),
  },
  {
    id: "ch06.new.p10-shortage",
    chapter: C,
    kind: "numeric",
    source: "new",
    topic: "Problem 10",
    prompt: tr("\\(Q^S = 2P\\), \\(Q^D = 300 - P\\). Hukumat **$90** lik narx shifti qo'ydi. Taqchillik qancha?", '\\(Q^S = 2P\\), \\(Q^D = 300 - P\\). The government sets a **$90** price ceiling. How big is the shortage?'),
    answer: 30,
    tolerance: 0,
    unit: tr("birlik", "units"),
    why: tr("Muvozanat: \\(300 - P = 2P \\Rightarrow P^* = 100\\). Shift 90 < 100 — binding. \\(Q^D = 210\\), \\(Q^S = 180\\), taqchillik \\(= 30\\).", 'Equilibrium: \\(300 - P = 2P \\Rightarrow P^* = 100\\). The ceiling 90 < 100 is binding. \\(Q^D = 210\\), \\(Q^S = 180\\), shortage \\(= 30\\).'),
    traps: [
      { value: 10, why: tr("Bu narxlar farqi (100 − 90). Taqchillik — **miqdorlar** farqi.", 'That is the difference in prices (100 − 90). A shortage is a difference in **quantities**.') },
      { value: 210, why: tr("210 — talab miqdori; undan taklif miqdorini (180) ayiring.", '210 is the quantity demanded; subtract the quantity supplied (180).') },
      { value: 180, why: tr("180 — taklif miqdori (va sotilgan miqdor).", '180 is the quantity supplied (and the quantity sold).') },
    ],
  },
  {
    id: "ch06.new.p10-buyers-price",
    chapter: C,
    kind: "numeric",
    source: "new",
    topic: "Problem 10",
    prompt: tr("Xuddi shu bozor. Ishlab chiqaruvchilarga **$30** soliq solindi: \\(Q^S = 2(P - 30)\\). Xaridorlar to'laydigan narx \\(P_B\\) qancha?", 'The same market. A **$30** tax is placed on producers: \\(Q^S = 2(P - 30)\\). What price \\(P_B\\) do buyers pay?'),
    answer: 120,
    tolerance: 0.01,
    unit: "$",
    why: tr("\\(300 - P = 2P - 60 \\Rightarrow P = 120\\). Xaridorlar $120 to'laydi (+20), sotuvchilar $90 oladi (−10).", '\\(300 - P = 2P - 60 \\Rightarrow P = 120\\). Buyers pay $120 (+20) and sellers receive $90 (−10).'),
    traps: [
      { value: 130, why: tr("Soliqning **hammasi** narxga qo'shilmaydi. Bu faqat taklif mutlaqo egiluvchan bo'lganda to'g'ri bo'lardi.", "The tax isn't **all** added to the price. That would be true only if supply were perfectly elastic.") },
      { value: 90, why: tr("$90 — sotuvchilar soliqdan keyin oladigan narx \\(P_S\\).", '$90 is the price sellers receive after the tax, \\(P_S\\).') },
      { value: 100, why: tr("$100 — soliqsiz muvozanat narxi.", '$100 is the equilibrium price without the tax.') },
    ],
  },
  {
    id: "ch06.new.p10-revenue",
    chapter: C,
    kind: "numeric",
    source: "new",
    topic: tr("Soliq tushumi", 'Tax revenue'),
    prompt: tr("Oldingi savoldagi $30 soliqdan davlat qancha **tushum** oladi?", 'How much **revenue** does the government collect from the $30 tax in the previous question?'),
    answer: 5400,
    tolerance: 0.5,
    unit: "$",
    why: tr("Soliq bilan miqdor \\(Q = 300 - 120 = 180\\). Tushum \\(= T \\times Q = 30 \\times 180 = 5{,}400\\).", 'The quantity with the tax is \\(Q = 300 - 120 = 180\\). Revenue \\(= T \\times Q = 30 \\times 180 = 5{,}400\\).'),
    traps: [{ value: 6000, why: tr("Soliqsiz miqdorni (200) ishlatdingiz. Soliq bozorni kichraytiradi: 180 dona sotiladi.", 'You used the no-tax quantity (200). The tax shrinks the market: 180 units are sold.') }],
  },
  {
    id: "ch06.new.buyer-share",
    chapter: C,
    kind: "numeric",
    source: "new",
    topic: tr("Soliq yuki", 'Tax incidence'),
    prompt: tr("Muzqaymoq: \\(P^* = 3.00\\), $0.50 soliqdan keyin \\(P_B = 3.30\\), \\(P_S = 2.80\\). Soliq yukining **necha foizini xaridorlar** ko'taradi?", 'Ice cream: \\(P^* = 3.00\\); after the $0.50 tax \\(P_B = 3.30\\), \\(P_S = 2.80\\). **What percentage** of the burden do buyers bear?'),
    answer: 60,
    tolerance: 0.5,
    unit: "%",
    why: tr("Xaridorlar ulushi \\(= (P_B - P^*)/T = 0.30/0.50 = 60\\%\\). Sotuvchilar — 40%.", "Buyers' share \\(= (P_B - P^*)/T = 0.30/0.50 = 60\\%\\). Sellers — 40%."),
    traps: [
      { value: 40, why: tr("40% — sotuvchilar ulushi: \\((3.00 - 2.80)/0.50\\).", "40% is the sellers' share: \\((3.00 - 2.80)/0.50\\).") },
      { value: 50, why: tr("Qonun yoki “adolat” 50/50 ni taqozo qilmaydi; narxlarga qarab hisoblang.", 'Neither the law nor “fairness” requires 50/50; compute it from the prices.') },
    ],
  },
  {
    id: "ch06.new.frisbee",
    chapter: C,
    kind: "numeric",
    source: "new",
    topic: tr("Narx tubi", 'Price floor'),
    prompt: tr("Problem 3 (Frisbee): muvozanat $8 va 6 mln. Kongress muvozanatdan $2 yuqori narx tubi qo'ydi. Necha **million** frisbee sotiladi? ($10 da: talab 2 mln, taklif 12 mln.)", 'Problem 3 (Frisbees): equilibrium is $8 and 6 million. Congress sets a floor $2 above equilibrium. How many **million** Frisbees are sold? (At $10: demand 2 million, supply 12 million.)'),
    answer: 2,
    tolerance: 0,
    unit: tr("mln", "million"),
    why: tr("Tub $10 — binding. Sotilgan miqdor qisqa tomon — **talab**: 2 mln. Ishlab chiqaruvchilar 12 mln taklif qiladi, 10 mln ortiqcha qoladi.", 'The $10 floor is binding. The quantity sold is the short side — **demand**: 2 million. Producers offer 12 million, so 10 million are left over.'),
    traps: [
      { value: 12, why: tr("12 mln — taklif miqdori. Xaridorlar olmagan narsa sotilmaydi.", "12 million is the quantity supplied. What buyers don't take isn't sold.") },
      { value: 10, why: tr("10 mln — ortiqcha (surplus), sotilgan miqdor emas.", '10 million is the surplus, not the quantity sold.') },
    ],
  },
  {
    id: "ch06.new.luxury",
    chapter: C,
    kind: "mcq",
    source: "new",
    topic: tr("Hashamat solig'i", 'The luxury tax'),
    prompt: tr("1990 yilgi yaxta solig'i (luxury tax) yukini kim eng ko'p ko'targan va nega?", 'Who bore most of the 1990 yacht (luxury) tax, and why?'),
    options: [
      { text: tr("Boy xaridorlar — chunki ular boy", 'Wealthy buyers — because they are rich'), why: tr("Boylik emas, **egiluvchanlik** muhim. Boylar yaxta o'rniga orol, sayohat va boshqalarni osongina tanlaydi — talab egiluvchan.", 'What matters is elasticity, not wealth. The rich easily choose an island, a trip, or something else instead of a yacht — demand is elastic.') },
      { text: tr("Yaxta quruvchi firmalar va ishchilar — chunki taklif noegiluvchan, talab egiluvchan", 'Yacht-building firms and workers — because supply is inelastic and demand elastic'), correct: true, why: tr("Kemasozlik zavodlari va ishchilar tez boshqa ishga o'ta olmaydi. Kamroq egiluvchan tomon — sotuvchilar — yukni ko'taradi.", "Shipyards and their workers can't quickly switch to other work. The less elastic side — sellers — bears the burden.") },
      { text: tr("Davlat — chunki soliqni u yig'adi", 'The government — because it collects the tax'), why: tr("Davlat soliqni oladi; yuk deganda narx o'zgarishidan yutqazganlar tushuniladi.", 'The government receives the tax; the burden means who loses from the price changes.') },
      { text: tr("Teng bo'lingan", 'It was split equally'), why: tr("Egiluvchanliklar juda farq qilgani uchun teng bo'linmagan.", "Because the elasticities differ so much, it wasn't split equally.") },
    ],
  },
  {
    id: "ch06.new.minwage-teens",
    chapter: C,
    kind: "mcq",
    source: "new",
    topic: tr("Eng kam ish haqi", 'Minimum wage'),
    prompt: tr("Eng kam ish haqi qaysi guruhga **eng ko'p** ta'sir qiladi?", 'Which group is affected **most** by the minimum wage?'),
    options: [
      { text: tr("Yuqori malakali tajribali ishchilarga", 'Highly skilled, experienced workers'), why: tr("Ularning muvozanat maoshi minimumdan ancha yuqori — tub ular uchun **not binding**.", 'Their equilibrium wage is far above the minimum — the floor is **not binding** for them.') },
      { text: tr("O'smirlar va eng kam malakali ishchilarga", 'Teenagers and the least skilled workers'), correct: true, why: tr("Ularning muvozanat ish haqi past, shuning uchun minimum ko'pincha aynan ular uchun binding. Tadqiqotlar: minimum 10% oshsa, o'smirlar bandligi 1–3% kamayadi.", 'Their equilibrium wages are low, so the minimum is often binding exactly for them. Studies: a 10% higher minimum cuts teen employment by 1–3%.') },
      { text: tr("Davlat xizmatchilariga", 'Government employees'), why: tr("Kitobda bunday da'vo yo'q; asosiy ta'sir past malakali mehnat bozorida.", 'The book makes no such claim; the main effect is in the market for low-skilled labor.') },
      { text: tr("Firma egalariga", 'Firm owners'), why: tr("Firmalar ham ta'sirlanadi, lekin savol qaysi **ishchilar** guruhi haqida — o'smirlar.", 'Firms are affected too, but the question is about a group of **workers** — teenagers.') },
    ],
  },
  {
    id: "ch06.new.fenway",
    chapter: C,
    kind: "mcq",
    source: "new",
    topic: tr("Egiluvchanlik va yuk", 'Elasticity and the burden'),
    prompt: tr("Stadionda o'rinlar soni 38,000 ta va o'zgarmaydi. Shahar har bir chiptaga $5 soliq qo'ydi (muxlislar to'laydi). Yuk kimga tushadi?", 'A stadium has a fixed 38,000 seats. The city imposes a $5 tax per ticket (paid by fans). Who bears the burden?'),
    options: [
      { text: tr("Butunlay muxlislarga", 'Entirely the fans'), why: tr("Muxlislar to'laydi, lekin taklif vertikal: jamoa chipta narxini $5 ga tushirishga majbur bo'ladi, aks holda o'rinlar bo'sh qoladi.", 'Fans pay it, but supply is vertical: the team must cut the ticket price by $5, or seats would go empty.') },
      { text: tr("Butunlay jamoa egalariga", 'Entirely the team owners'), correct: true, why: tr("Taklif **mutlaqo noegiluvchan** (38,000). Talab $5 pastga siljiydi, miqdor o'zgarmaydi, jamoa oladigan narx to'liq $5 ga tushadi. Muxlis to'laydigan jami narx o'zgarmaydi.", "Supply is **perfectly inelastic** (38,000). Demand shifts down by $5, the quantity doesn't change, and the price the team receives falls by the full $5. The total price fans pay doesn't change.") },
      { text: tr("Yarmi-yarmidan", 'Half and half'), why: tr("Teng bo'linish uchun egiluvchanliklar teng bo'lishi kerak; bu yerda taklif egiluvchanligi nol.", 'An equal split needs equal elasticities; here the elasticity of supply is zero.') },
      { text: tr("Hech kimga — chunki miqdor o'zgarmaydi", "Nobody — because the quantity doesn't change"), why: tr("Miqdor o'zgarmasa ham soliq yo'qolmaydi: uni kimdir to'laydi (jamoa daromadi kamayadi).", "Even if the quantity doesn't change, the tax doesn't vanish: someone pays it (the team's revenue falls).") },
    ],
  },
  {
    id: "ch06.new.uz-bread",
    chapter: C,
    kind: "mcq",
    source: "new",
    topic: tr("Narx shifti", 'Price ceiling'),
    prompt: tr("Faraz qiling, shaharda bir dona nonning bozor muvozanat narxi 4,000 so'm. Hokimiyat “non 3,000 so'mdan qimmat sotilmasin” deb buyurdi. Qisqa vaqt ichida nima kutiladi?", 'Suppose the market equilibrium price of a loaf of bread in a city is 4,000 soums. The city orders that bread not be sold for more than 3,000 soums. What can be expected soon?'),
    options: [
      { text: tr("Nonvoyxonalar ko'proq non yopadi", 'Bakeries bake more bread'), why: tr("Narx past → non yopish kamroq foydali → **taklif miqdori kamayadi**, ko'paymaydi.", 'A lower price → baking is less profitable → the **quantity supplied falls**, not rises.') },
      { text: tr("Non taqchilligi, navbatlar, “tanish orqali” sotish; ba'zi nonvoylar sifatni pasaytiradi", 'A bread shortage, lines, sales “through connections”; some bakers lower the quality'), correct: true, why: tr("Shift muvozanatdan past — binding. \\(Q^D > Q^S\\): taqchillik va noxush taqsimlash mexanizmlari. Ijara nazoratidagi kabi sifat ham tushishi mumkin.", 'The ceiling is below equilibrium — binding. \\(Q^D > Q^S\\): a shortage and unpleasant rationing mechanisms. As with rent control, quality may fall too.') },
      { text: tr("Hech narsa o'zgarmaydi", 'Nothing changes'), why: tr("Agar shift 4,000 dan yuqori bo'lganida — to'g'ri bo'lardi. 3,000 < 4,000, demak u ta'sirli.", 'That would be right if the ceiling were above 4,000. 3,000 < 4,000, so it binds.') },
      { text: tr("Non talabi kamayadi", 'Demand for bread falls'), why: tr("Narx tushganda talab **miqdori** oshadi (egri chiziq bo'ylab harakat).", 'When the price falls, the **quantity** demanded rises (a movement along the curve).') },
    ],
  },
  {
    id: "ch06.new.match-terms",
    chapter: C,
    kind: "match",
    source: "new",
    topic: tr("Atamalar", 'Terms'),
    prompt: tr("Atamani uning ta'rifi bilan moslashtiring.", 'Match each term with its definition.'),
    pairs: [
      { left: "Price ceiling", right: tr("Tovarni sotish mumkin bo'lgan qonuniy eng yuqori narx", 'The legal maximum price at which a good can be sold') },
      { left: "Price floor", right: tr("Tovarni sotish mumkin bo'lgan qonuniy eng past narx", 'The legal minimum price at which a good can be sold') },
      { left: "Tax incidence", right: tr("Soliq yukining bozor ishtirokchilari o'rtasida bo'linishi", 'How the burden of a tax is shared among market participants') },
      { left: "Tax wedge", right: tr("Xaridor to'laydigan va sotuvchi oladigan narx orasidagi farq", 'The gap between the price buyers pay and the price sellers receive') },
      { left: "Binding constraint", right: tr("Bozorning muvozanatga yetishiga to'sqinlik qiladigan cheklov", 'A restriction that keeps the market from reaching equilibrium') },
    ],
  },
  {
    id: "ch06.new.match-outcomes",
    chapter: C,
    kind: "match",
    source: "new",
    topic: tr("Siyosat natijalari", 'Policy outcomes'),
    prompt: tr("Siyosatni uning natijasi bilan moslashtiring.", 'Match each policy with its outcome.'),
    pairs: [
      { left: tr("Muvozanatdan past narx shifti", 'A price ceiling below equilibrium'), right: tr("Taqchillik (shortage)", 'A shortage') },
      { left: tr("Muvozanatdan yuqori narx tubi", 'A price floor above equilibrium'), right: tr("Ortiqcha taklif (surplus)", 'A surplus') },
      { left: tr("Muvozanatdan yuqori narx shifti", 'A price ceiling above equilibrium'), right: tr("Hech qanday ta'sir yo'q (not binding)", 'No effect (not binding)') },
      { left: tr("Bir birlikka soliq", 'A per-unit tax'), right: tr("Bozor kichrayadi, \\(P_B > P_S\\)", 'The market shrinks, \\(P_B > P_S\\)') },
      { left: tr("Uzoq muddatli ijara nazorati", 'Long-run rent control'), right: tr("Katta taqchillik va uylar sifati pasayishi", 'A large shortage and declining housing quality') },
    ],
    why: tr("Esda tuting: shift — **pastda** ta'sirli, tub — **tepada** ta'sirli. Soliq esa har doim ta'sir qiladi va pona yaratadi.", 'Remember: a ceiling binds **below**, a floor binds **above**. A tax always has an effect and creates a wedge.'),
  },
  {
    id: "ch06.new.rent-subsidy",
    chapter: C,
    kind: "mcq",
    source: "new",
    topic: tr("Muqobil siyosatlar", 'Alternative policies'),
    prompt: tr("Nega ko'pchilik iqtisodchilar kambag'allarga yordam berish uchun eng kam ish haqidan ko'ra [[earned-income-tax-credit|EITC]] ni afzal ko'radi?", 'Why do most economists prefer the [[earned-income-tax-credit|EITC]] to the minimum wage for helping the poor?'),
    options: [
      { text: tr("EITC davlatga hech narsa turmaydi", 'The EITC costs the government nothing'), why: tr("Aksincha — u byudjet xarajati va soliqlarni talab qiladi. Bu uning asosiy kamchiligi.", 'The opposite — it costs the budget and requires taxes. That is its main drawback.') },
      { text: tr("EITC firmalarni ishchi yollashdan qaytarmaydi va kambag'al oilalarga aniqroq yo'naltirilgan", "The EITC doesn't discourage firms from hiring and is better targeted at poor families"), correct: true, why: tr("Ish haqi subsidiyasi mehnat narxini firmalar uchun oshirmaydi, ishsizlik yaratmaydi. Neumark ham shuni ta'kidlaydi: eng kam ish haqidan foydaning katta qismi o'rta daromadli oilalarga ketadi.", "A wage subsidy doesn't raise the cost of labor to firms and creates no unemployment. Neumark makes the same point: much of the gain from the minimum wage goes to middle-income families.") },
      { text: tr("EITC ish haqini qonun bilan oshiradi", 'The EITC raises wages by law'), why: tr("Yo'q, EITC — davlat to'lovi; firmalar to'laydigan ish haqini o'zgartirmaydi.", "No, the EITC is a government payment; it doesn't change the wages firms pay.") },
      { text: tr("Eng kam ish haqi hech qachon binding bo'lmaydi", 'The minimum wage is never binding'), why: tr("Past malakali ishchilar uchun u ko'pincha binding.", 'For low-skilled workers it is often binding.') },
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
    topic: tr("Narx shifti", 'Price ceiling'),
    prompt: tr("Qizil chiziqni (narx shiftini) suring: **kamida 40 dona taqchillik** yaratadigan ta'sirli shift o'rnating.", 'Drag the red line (the price ceiling): set a binding ceiling that creates a **shortage of at least 40 cones**.'),
    graph: ceilTask,
    check: (s) => {
      const o = priceCeiling(s.D, s.S, s.control);
      if (!o.binding) return { ok: false, msg: tr(`Shift $${s.control.toFixed(2)} muvozanatdan ($3.00) yuqori — u **not binding**. Uni muvozanatdan pastga tushiring.`, `The ceiling of $${s.control.toFixed(2)} is above equilibrium ($3.00) — it is **not binding**. Move it below equilibrium.`) };
      if (o.gap < 40) return { ok: false, msg: tr(`Shift binding, lekin taqchillik atigi ${o.gap.toFixed(0)} dona. Kattaroq taqchillik uchun shiftni yanada pastga tushiring.`, `The ceiling binds, but the shortage is only ${o.gap.toFixed(0)} cones. Lower the ceiling further for a bigger shortage.`) };
      return { ok: true, msg: tr(`Ajoyib! $${s.control.toFixed(2)} da talab ${o.qd.toFixed(0)}, taklif ${o.qs.toFixed(0)} — taqchillik ${o.gap.toFixed(0)} dona. Shift qancha past bo'lsa, taqchillik shuncha katta.`, `Great! At $${s.control.toFixed(2)}, demand is ${o.qd.toFixed(0)} and supply ${o.qs.toFixed(0)} — a shortage of ${o.gap.toFixed(0)} cones. The lower the ceiling, the bigger the shortage.`) };
    },
  },
  {
    id: "ch06.graph.nonbinding-floor",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: "Binding / not binding",
    prompt: tr("Narx tubini shunday o'rnatingki, u bozorga **hech qanday ta'sir qilmasin** (not binding).", 'Set the price floor so that it has **no effect** on the market (not binding).'),
    graph: floorTask,
    check: (s) => {
      const o = priceFloor(s.D, s.S, s.control);
      return o.binding
        ? { ok: false, msg: tr(`Tub $${s.control.toFixed(2)} muvozanatdan yuqori — hali ham ${o.gap.toFixed(0)} dona surplus bor. Tubni $3.00 dan pastga tushiring.`, `The floor of $${s.control.toFixed(2)} is above equilibrium — there is still a surplus of ${o.gap.toFixed(0)} cones. Move the floor below $3.00.`) }
        : { ok: true, msg: tr("To'g'ri: tub muvozanat narxidan past yoki unga teng — bozor $3.00 da muvozanatga keladi. Tub faqat **tepada** ta'sirli.", 'Right: the floor is at or below the equilibrium price — the market reaches equilibrium at $3.00. A floor binds only **above**.') };
    },
  },
  {
    id: "ch06.graph.demand-increase",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: tr("Siljish", 'Shifts'),
    prompt: tr("Issiq havo muzqaymoq talabini oshirdi. Kerakli egri chiziqni siljitib, **muvozanat narxini kamida $3.40** ga chiqaring. (Taklifga tegmang.)", "Hot weather raised the demand for ice cream. Shift the right curve to bring the **equilibrium price to at least $3.40**. (Don't touch supply.)"),
    graph: marketTask,
    check: (s) => {
      const supplyMoved = Math.abs(s.S.c - marketTask.supply.c) > 1e-6 || Math.abs(s.S.d - marketTask.supply.d) > 1e-6;
      if (supplyMoved) return { ok: false, msg: tr("Ob-havo sotuvchilarning xarajatiga ta'sir qilmaydi — **taklif** joyida qolishi kerak. Reset bosib, faqat talabni siljiting.", "The weather doesn't affect sellers' costs — **supply** must stay put. Press Reset and shift only demand.") };
      if (qd(s.D, 3) <= 100) return { ok: false, msg: tr("Talab chapga siljidi (kamaydi). Issiq havoda odamlar **ko'proq** xohlaydi — o'ngga torting.", 'Demand shifted left (fell). In hot weather people want **more** — drag it right.') };
      const e = graphBase(s);
      if (e.P < 3.4) return { ok: false, msg: tr(`Yo'nalish to'g'ri, lekin narx hozircha $${e.P.toFixed(2)}. Talabni yana o'ngga suring.`, `Right direction, but the price is only $${e.P.toFixed(2)} so far. Push demand further right.`) };
      return { ok: true, msg: tr(`Zo'r! Talab o'ngga siljidi → narx $${e.P.toFixed(2)}, miqdor ${e.Q.toFixed(0)}. Taklif egri chizig'i joyida: sotuvchilar shunchaki **egri chiziq bo'ylab** yuqoriga harakatlandi (quantity supplied oshdi, supply emas).`, `Great! Demand shifted right → price $${e.P.toFixed(2)}, quantity ${e.Q.toFixed(0)}. The supply curve stayed put: sellers simply moved up **along the curve** (quantity supplied rose, not supply).`) };
    },
  },
  {
    id: "ch06.graph.supply-decrease",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: tr("Siljish", 'Shifts'),
    prompt: tr("Shakar (xomashyo) qimmatladi. Kerakli egri chiziqni siljitib, **muvozanat miqdorini 80 yoki undan kamga** tushiring. (Talabga tegmang.)", "Sugar (an input) got pricier. Shift the right curve to bring the **equilibrium quantity to 80 or less**. (Don't touch demand.)"),
    graph: marketTask,
    check: (s) => {
      const demandMoved = Math.abs(s.D.a - marketTask.demand.a) > 1e-6 || Math.abs(s.D.b - marketTask.demand.b) > 1e-6;
      if (demandMoved) return { ok: false, msg: tr("Xomashyo narxi xaridorlarning xohishiga bevosita ta'sir qilmaydi — **talab** joyida qolishi kerak.", "An input price doesn't directly affect what buyers want — **demand** must stay put.") };
      if (qs(s.S, 3) >= 100) return { ok: false, msg: tr("Taklif o'ngga siljidi. Xarajat oshsa, sotuvchilar har bir narxda **kamroq** taklif qiladi — chapga torting.", 'Supply shifted right. When costs rise, sellers offer **less** at every price — drag it left.') };
      const e = graphBase(s);
      if (e.Q > 80) return { ok: false, msg: tr(`Yo'nalish to'g'ri, miqdor hozircha ${e.Q.toFixed(0)}. Taklifni yana chapga suring.`, `Right direction; the quantity is ${e.Q.toFixed(0)} so far. Push supply further left.`) };
      return { ok: true, msg: tr(`To'g'ri! Taklif chapga siljidi: narx $${e.P.toFixed(2)} ga ko'tarildi, miqdor ${e.Q.toFixed(0)} ga tushdi (Figure 11 dagi kabi).`, `Right! Supply shifted left: the price rose to $${e.P.toFixed(2)} and the quantity fell to ${e.Q.toFixed(0)} (as in Figure 11).`) };
    },
  },
  {
    id: "ch06.graph.sellers-bear",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: tr("Egiluvchanlik va yuk", 'Elasticity and the burden'),
    prompt: tr("$1 soliq bor. Egiluvchanlik slayderlari yordamida shunday bozor yarating, unda **sotuvchilar yukning kamida 70%** ini ko'tarsin.", 'There is a $1 tax. Use the elasticity sliders to build a market in which **sellers bear at least 70%** of the burden.'),
    graph: incidenceTask,
    check: (s) => {
      const t = tax(s.D, s.S, s.tax);
      const p = Math.round(t.sellerShare * 100);
      return p >= 70
        ? { ok: true, msg: tr(`Barakalla! Sotuvchilar ${p}% ni ko'taryapti. Siz taklifni **noegiluvchan** va/yoki talabni **egiluvchan** qildingiz — yuk kamroq egiluvchan tomonga tushadi.`, `Well done! Sellers bear ${p}%. You made supply **inelastic** and/or demand **elastic** — the burden falls on the less elastic side.`) }
        : { ok: false, msg: tr(`Hozir sotuvchilar ulushi ${p}%. Ularga ko'proq yuk tushishi uchun **taklif**ni noegiluvchanroq (tikroq) yoki **talab**ni egiluvchanroq (yotiqroq) qiling.`, `Sellers' share is now ${p}%. To put more of the burden on them, make **supply** less elastic (steeper) or **demand** more elastic (flatter).`) };
    },
  },
  {
    id: "ch06.graph.gas-binding",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: tr("Benzin navbatlari", 'Gasoline lines'),
    prompt: tr("Benzin narxiga $2.50 lik shift bor va hozir u ta'sirsiz. OPEC neft qazishni kamaytirdi: **taklifni** siljitib, shiftni **binding** qiling va kamida 20 mln gallon taqchillik hosil qiling.", 'Gasoline has a $2.50 price ceiling that is currently not binding. OPEC cut oil production: shift **supply** to make the ceiling **binding** and create a shortage of at least 20 million gallons.'),
    graph: gasTask,
    check: (s) => {
      const o = priceCeiling(s.D, s.S, s.control);
      if (Math.abs(s.D.a - gasTask.demand.a) > 1e-6) return { ok: false, msg: tr("OPEC qarori benzin **taklifi**ga ta'sir qiladi (xom neft — xomashyo). Talabni joyida qoldiring.", "OPEC's decision affects the **supply** of gasoline (crude oil is an input). Leave demand in place.") };
      if (!o.binding) return { ok: false, msg: tr("Shift hali ta'sirsiz. Taklifni **chapga** siljiting, muvozanat narxi $2.50 dan oshsin.", "The ceiling still doesn't bind. Shift supply **left** so the equilibrium price rises above $2.50.") };
      if (o.gap < 20) return { ok: false, msg: tr(`Shift endi binding, taqchillik ${o.gap.toFixed(0)} mln gallon. Yana chapga suring.`, `The ceiling now binds; the shortage is ${o.gap.toFixed(0)} million gallons. Push further left.`) };
      return { ok: true, msg: tr(`Mana 1973 yil! Erkin bozorda narx $${equilibrium(s.D, s.S).P.toFixed(2)} bo'lardi, lekin shift uni $2.50 da ushlab turibdi: ${o.gap.toFixed(0)} mln gallon taqchillik → zapravkalarda soatlab navbat.`, `Here's 1973! In a free market the price would be $${equilibrium(s.D, s.S).P.toFixed(2)}, but the ceiling holds it at $2.50: a shortage of ${o.gap.toFixed(0)} million gallons → hours-long lines at gas stations.`) };
    },
  },
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice, ...graphTasks];
