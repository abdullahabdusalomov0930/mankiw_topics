import { equilibrium, qd, qs } from '../../../lib/econ';
import type { Question } from '../../types';
import { marketD, marketS, supplyShifts } from './presets';

const C = 4;
const mk = (id: string, topic: string, prompt: string, options: { text: string; correct?: boolean; why: string }[], source: 'quickquiz' | 'new' = 'quickquiz'): Question => ({
  id,
  chapter: C,
  kind: 'mcq',
  source,
  topic,
  prompt,
  options,
});

export const quickQuiz: Question[] = [
  mk("ch04.qq.1", "Bozor", "The best definition of a **market** is", [
    { text: "a store that offers a variety of goods and services.", why: "Do'kon — bozorning bir qismi xolos. Bozor — **xaridorlar va sotuvchilar guruhi**, joy emas." },
    { text: "a place where buyers meet and an auctioneer calls out prices.", why: "Bu juda tashkillashgan bozor (bug'doy birjasi). Ko'p bozorlar (muzqaymoq) auktsionersiz ishlaydi." },
    { text: "a group of buyers and sellers of a good or service.", correct: true, why: "Kitobdagi ta'rif: “a group of buyers and sellers of a particular good or service”." },
    { text: "a venue where the sole supplier of a good offers its product.", why: "Yagona sotuvchi — **monopoliya**, bozorning bir turi, ta'rifi emas." },
  ]),
  mk("ch04.qq.2", "Raqobat", "In a **perfectly competitive** market,", [
    { text: "each seller tries to distinguish itself by offering a better product than its rivals.", why: "Mukammal raqobatda tovarlar **bir xil** — farqlanishga joy yo'q." },
    { text: "each seller takes the price of its product as set by market conditions.", correct: true, why: "Sotuvchilar **price takers**: ular juda ko'p, har biri kichik, narxni bozor belgilaydi." },
    { text: "each seller tries to undercut the prices charged by its rivals.", why: "Bozor narxida xohlagancha sotish mumkin — narxni tushirishga sabab yo'q." },
    { text: "one seller has successfully outcompeted its rivals, so no other sellers remain.", why: "Bu monopoliya — mukammal raqobatning aksi." },
  ]),
  mk("ch04.qq.3", "Raqobat", "The market for which product best fits the definition of a perfectly competitive market?", [
    { text: "eggs", correct: true, why: "Tuxum deyarli bir xil, ishlab chiqaruvchi va xaridorlar juda ko'p — hech kim narxga ta'sir qilmaydi." },
    { text: "tap water", why: "Vodoprovod suvini odatda bitta kompaniya yetkazadi — monopoliya." },
    { text: "movies", why: "Har bir film o'ziga xos — tovarlar bir xil emas." },
    { text: "computer operating systems", why: "Bir nechta yirik firma (Windows, macOS) — bozor kuchiga ega, mukammal raqobat emas." },
  ]),
  mk("ch04.qq.4", "Talab siljishi", "A change in which of the following will **NOT** shift the demand curve for hamburgers?", [
    { text: "the price of hot dogs", why: "Hot dog — o'rinbosar; uning narxi gamburger talabini **siljitadi**." },
    { text: "the price of hamburgers", correct: true, why: "Gamburgerning **o'z narxi** vertikal o'qda — uning o'zgarishi egri chiziq **bo'ylab harakat**, siljish emas." },
    { text: "the price of hamburger buns", why: "Bulochka — to'ldiruvchi; uning narxi talabni siljitadi." },
    { text: "the income of hamburger consumers", why: "Daromad — talabni siljituvchi omil (normal yoki inferior tovar)." },
  ]),
  mk("ch04.qq.5", "Talab siljishi", "Which of the following will shift the demand curve for pizza to the **right**?", [
    { text: "an increase in the price of hamburgers, a substitute for pizza", correct: true, why: "O'rinbosar qimmatladi → odamlar pitsaga o'tadi → har bir narxda pitsaga talab oshadi." },
    { text: "an increase in the price of root beer, a complement to pizza", why: "To'ldiruvchi qimmatlasa, pitsaga talab **kamayadi** (chapga)." },
    { text: "the departure of college students when they leave for summer vacation", why: "Xaridorlar soni kamaydi → talab **chapga**." },
    { text: "a decrease in the price of pizza", why: "O'z narxi — egri chiziq bo'ylab harakat (talab miqdori oshadi), siljish emas." },
  ]),
  mk("ch04.qq.6", "Inferior tovar", "If pasta is an **inferior good**, then the demand curve shifts to the ________ when ________ rises.", [
    { text: "right; the price of pasta", why: "O'z narxi egri chiziqni siljitmaydi." },
    { text: "right; consumers' income", why: "Inferior tovarda daromad oshsa talab **kamayadi** — o'ngga emas, chapga." },
    { text: "left; the price of pasta", why: "Yana o'z narxi — bu harakat, siljish emas." },
    { text: "left; consumers' income", correct: true, why: "Inferior tovar ta'rifi: daromad ↑ → talab ↓ → egri chiziq chapga." },
  ]),
  mk("ch04.qq.7", "Taklif bo'ylab harakat", "What event moves pizza suppliers **up along** a given supply curve?", [
    { text: "an increase in the price of pizza", correct: true, why: "O'z narxi vertikal o'qda: narx oshsa, sotuvchilar shu egri chiziq bo'ylab yuqoriga — ko'proq taklif qiladi." },
    { text: "an increase in the price of root beer, a complement to pizza", why: "Bu xaridorlarga ta'sir qiladi (talabni siljitadi), sotuvchilar egri chizig'iga emas." },
    { text: "a decrease in the price of cheese, an input to pizza", why: "Xomashyo narxi taklifni **siljitadi** (o'ngga), bo'ylab harakat emas." },
    { text: "a kitchen fire that destroys a popular pizza joint", why: "Sotuvchilar soni kamaydi → taklif chapga siljiydi." },
  ]),
  mk("ch04.qq.8", "Taklif siljishi", "What event **shifts** the supply curve for pizza to the right?", [
    { text: "an increase in the price of pizza", why: "O'z narxi — egri chiziq bo'ylab harakat." },
    { text: "an increase in the price of root beer, a complement to pizza", why: "Bu talab tomonidagi o'zgarish." },
    { text: "a decrease in the price of cheese, an input to pizza", correct: true, why: "Xomashyo arzonlashdi → har bir narxda ishlab chiqarish foydaliroq → taklif o'ngga." },
    { text: "a kitchen fire that destroys a popular pizza joint", why: "Sotuvchi kamaydi — taklif **chapga**." },
  ]),
  mk("ch04.qq.9", "O'rinbosarlar", "Movie tickets and video streaming services are **substitutes**. If the price of video streaming increases, what happens in the market for movie tickets?", [
    { text: "The supply curve shifts to the left.", why: "Striming narxi kino zallarining xarajatiga ta'sir qilmaydi — taklif joyida." },
    { text: "The supply curve shifts to the right.", why: "Xuddi shu sabab — taklif o'zgarmaydi." },
    { text: "The demand curve shifts to the left.", why: "O'rinbosar qimmatlasa, talab **oshadi**, kamaymaydi." },
    { text: "The demand curve shifts to the right.", correct: true, why: "Striming qimmat → odamlar kinoteatrga ko'proq boradi → chipta talabi o'ngga." },
  ]),
  mk("ch04.qq.10", "Muvozanat o'zgarishi", "The discovery of a large new reserve of crude oil will shift the ________ curve for gasoline, leading to a ________ equilibrium price.", [
    { text: "supply; higher", why: "Taklif o'ngga siljiydi → narx **tushadi**." },
    { text: "supply; lower", correct: true, why: "Neft (xomashyo) arzonlashadi → benzin taklifi o'ngga → muvozanat narxi pasayadi." },
    { text: "demand; higher", why: "Neft konining topilishi haydovchilarning xohishini o'zgartirmaydi." },
    { text: "demand; lower", why: "Siljiydigan egri chiziq — taklif." },
  ]),
  mk("ch04.qq.11", "Inferior tovar", "If the economy goes into a recession and incomes fall, what happens in the markets for **inferior goods**?", [
    { text: "Prices and quantities both rise.", correct: true, why: "Daromad ↓ → inferior tovarga talab ↑ (o'ngga) → muvozanat narxi ham, miqdori ham oshadi." },
    { text: "Prices and quantities both fall.", why: "Bu **normal** tovarlar uchun to'g'ri bo'lardi." },
    { text: "Prices rise, and quantities fall.", why: "Bunday natija taklif chapga siljiganda bo'ladi." },
    { text: "Prices fall, and quantities rise.", why: "Bu taklif o'ngga siljiganda bo'ladi." },
  ]),
  mk("ch04.qq.12", "Muvozanat o'zgarishi", "What event might lead to an **increase** in the equilibrium price of jelly and a **decrease** in the equilibrium quantity of jelly sold?", [
    { text: "an increase in the price of peanut butter, a complement to jelly", why: "To'ldiruvchi qimmat → jem talabi chapga → narx ham, miqdor ham **tushadi**." },
    { text: "an increase in the price of Marshmallow Fluff, a substitute for jelly", why: "O'rinbosar qimmat → talab o'ngga → narx ham, miqdor ham **oshadi**." },
    { text: "an increase in the price of grapes, an input into jelly", correct: true, why: "Xomashyo qimmat → taklif chapga → narx ↑, miqdor ↓ (Figure 11 dagi kabi)." },
    { text: "an increase in consumers' incomes, as long as jelly is a normal good", why: "Talab o'ngga → narx ham, miqdor ham oshadi." },
  ]),
  mk("ch04.qq.13", "Siljish vs harakat", "An increase in ________ will cause a movement along a given supply curve, which is called a change in ________.", [
    { text: "supply; demand", why: "Taklif oshsa, taklif egri chizig'ining o'zi siljiydi." },
    { text: "supply; quantity demanded", why: "Taklif oshishi talab bo'ylab harakat qildiradi, taklif bo'ylab emas." },
    { text: "demand; supply", why: "Talab oshganda taklif egri chizig'i joyida qoladi — **supply** o'zgarmaydi." },
    { text: "demand; quantity supplied", correct: true, why: "Talab o'ngga → narx ↑ → sotuvchilar taklif egri chizig'i **bo'ylab** yuqoriga: bu “change in quantity supplied”." },
  ]),
];

export const checks: Record<string, Question> = {
  "s-4-1": mk("ch04.check.4-1", "Raqobat", "Toshkentdagi barcha taksi haydovchilari va yo'lovchilar haqida o'ylang. Qaysi gap to'g'ri?", [
    { text: "Bu bozor emas, chunki ular bitta joyda uchrashmaydi.", why: "Bozor joy emas — xaridor va sotuvchilar **guruhi**. Muzqaymoq bozori ham shunday tarqoq." },
    { text: "Bu bozor; agar haydovchilar va yo'lovchilar juda ko'p bo'lsa va xizmat deyarli bir xil bo'lsa, u raqobatliga yaqin.", correct: true, why: "Ko'p ishtirokchi + bir xil xizmat → hech kim narxni o'zi belgilay olmaydi (price takers)." },
    { text: "Bu monopoliya, chunki taksi narxlari bir xil.", why: "Bir xil narx — raqobat belgisi bo'lishi mumkin; monopoliya — yagona sotuvchi." },
    { text: "Raqobatli bozorda sotuvchilar narxni xohlagancha belgilaydi.", why: "Aksincha: raqobatli bozorda har bir sotuvchining narxga ta'siri juda kichik." },
  ], 'new'),
  "s-4-2a": { id: "ch04.check.4-2a", chapter: C, kind: "numeric", source: "new", topic: "Talab jadvali", prompt: "Catherine'ning jadvali bo'yicha (Figure 1): narx $2 dan $4 ga oshsa, uning talab miqdori **nechta** kamayadi?", answer: 4, tolerance: 0, unit: "dona", why: "$2 da 8 ta, $4 da 4 ta → 8 − 4 = 4 ta kam. Bu **talab qonuni**: narx ↑, talab miqdori ↓.", traps: [{ value: 2, why: "Bu narx farqi ($4 − $2). Miqdorlar farqini toping." }] },
  "s-4-2b": { id: "ch04.check.4-2b", chapter: C, kind: "numeric", source: "new", topic: "Bozor talabi", prompt: "Figure 2: $1 narxda Catherine 10 ta, Nicholas 6 ta muzqaymoq oladi. **Bozor** talab miqdori nechta?", answer: 16, tolerance: 0, unit: "dona", why: "Gorizontal qo'shish: \\(10 + 6 = 16\\).", traps: [{ value: 2, why: "Ayirmang — bozor talabi individual miqdorlar **yig'indisi**." }, { value: 8, why: "O'rtacha emas, yig'indi kerak." }] },
  "s-4-2c": mk("ch04.check.4-2c", "Siljish vs harakat", "Shifokorlar muzqaymoq foydali deb e'lon qildi. Muzqaymoq bozorida nima bo'ladi?", [
    { text: "Talab egri chizig'i o'ngga siljiydi (increase in demand).", correct: true, why: "**Didlar** (tastes) o'zgardi — bu narxdan boshqa omil, demak har bir narxda ko'proq talab: egri chiziq o'ngga." },
    { text: "Talab egri chizig'i bo'ylab pastga harakat.", why: "Bo'ylab harakat faqat **o'z narxi** o'zgarganda bo'ladi." },
    { text: "Taklif egri chizig'i o'ngga siljiydi.", why: "Yangilik iste'molchilarga ta'sir qiladi, ishlab chiqaruvchilarning xarajatiga emas." },
    { text: "Hech narsa — narx o'zgarmagan.", why: "Narx o'zgarmasa ham talab siljishi mumkin; aynan shuning uchun narx keyin o'zgaradi." },
  ], 'new'),
  "s-4-3a": { id: "ch04.check.4-3a", chapter: C, kind: "tf", source: "new", topic: "Taklif qonuni", prompt: "Ben $1 narxda bitta ham muzqaymoq sotmaydi, $6 da esa 5 ta sotadi. Bu taklif qonuniga mos.", answer: true, why: "Narx yuqori → sotish foydaliroq → taklif miqdori ko'proq. Taklif egri chizig'i yuqoriga egilgan." },
  "s-4-3b": { id: "ch04.check.4-3b", chapter: C, kind: "numeric", source: "new", topic: "Bozor taklifi", prompt: "Figure 6: $5 narxda Ben 4 ta, Jerry 6 ta taklif qiladi. Bozor taklif miqdori?", answer: 10, tolerance: 0, unit: "dona", why: "\\(4 + 6 = 10\\) — gorizontal qo'shish." },
  "s-4-3c": mk("ch04.check.4-3c", "Taklif siljishi", "Muzqaymoq ishlab chiqarish uchun yangi, tezroq mashina ixtiro qilindi. Bu …", [
    { text: "taklifni o'ngga siljitadi (technology)", correct: true, why: "Texnologiya xarajatni kamaytiradi → har bir narxda ko'proq taklif." },
    { text: "taklif bo'ylab yuqoriga harakat", why: "Bo'ylab harakat faqat o'z narxi o'zgarganda." },
    { text: "talabni o'ngga siljitadi", why: "Mashina iste'molchilar xohishini o'zgartirmaydi." },
    { text: "taklifni chapga siljitadi", why: "Yaxshi texnologiya taklifni **oshiradi**." },
  ], 'new'),
  "s-4-4a": mk("ch04.check.4-4a", "Muvozanat", "Bozor narxi $5, muvozanat $4. Bozorda nima bo'ladi?", [
    { text: "Shortage: narx ko'tariladi", why: "Narx muvozanatdan **yuqori** — taklif ko'p, demak shortage emas." },
    { text: "Surplus: sotuvchilar narxni tushiradi, narx $4 ga qarab harakatlanadi", correct: true, why: "$5 da Qs 10 > Qd 4. Muzlatgichlar to'lib ketadi → narx tushadi. Bu **law of supply and demand**." },
    { text: "Talab egri chizig'i o'ngga siljiydi", why: "Narx o'zgarishi egri chiziqlarni siljitmaydi — ular bo'ylab harakat bo'ladi." },
    { text: "Hech narsa o'zgarmaydi", why: "Muvozanatdan tashqarida narxga bosim bor." },
  ], 'new'),
  "s-4-4b": mk("ch04.check.4-4b", "Uch qadam", "Bir vaqtda issiq havo (talab ↑) va bo'ron sabab shakar qimmatlashi (taklif ↓) yuz berdi. Nima **aniq**?", [
    { text: "Narx oshadi; miqdor — noaniq (ambiguous)", correct: true, why: "Ikkala siljish ham narxni ko'taradi. Miqdorni talab oshiradi, taklif kamaytiradi — qaysi biri katta bo'lsa (Figure 12)." },
    { text: "Narx ham, miqdor ham oshadi", why: "Miqdor faqat talab siljishi kattaroq bo'lsa oshadi (panel a)." },
    { text: "Miqdor oshadi; narx noaniq", why: "Teskarisi: narx yo'nalishi aniq, miqdor emas." },
    { text: "Hammasi noaniq", why: "Narx yo'nalishi aniq — ikkalasi ham uni yuqoriga suradi." },
  ], 'new'),
};

export const practice: Question[] = [
  { id: "ch04.new.tf-inferior", chapter: C, kind: "tf", source: "new", topic: "Inferior tovar", prompt: "“Inferior good” — sifati yomon tovar degani.", answer: false, why: "Yo'q: bu faqat daromad oshganda talab **kamayadigan** tovar. Masalan, avtobus qatnovi yoki arzon makaron sifatli bo'lishi mumkin." },
  { id: "ch04.new.tf-notebooks", chapter: C, kind: "tf", source: "new", topic: "Siljish vs harakat", prompt: "Problem 2: “An increase in the demand for notebooks raises the quantity of notebooks demanded but not the quantity supplied.”", answer: false, why: "Talab o'ngga siljiydi → narx oshadi → sotuvchilar taklif egri chizig'i bo'ylab yuqoriga: **quantity supplied oshadi**. Yangi muvozanatda ikkala miqdor ham oshgan (va teng)." },
  { id: "ch04.new.tf-shift-rule", chapter: C, kind: "tf", source: "new", topic: "Siljish qoidasi", prompt: "Grafik o'qlarida ko'rsatilmagan omil o'zgarsa, egri chiziq siljiydi; o'qdagi o'zgaruvchi (narx) o'zgarsa — egri chiziq bo'ylab harakat bo'ladi.", answer: true, why: "Bu 2-bob ilovasidagi oltin qoida: “When a relevant variable that is not named on either axis changes, the curve shifts.”" },
  {
    id: "ch04.new.match-shifters",
    chapter: C,
    kind: "match",
    source: "new",
    topic: "Siljituvchi omillar",
    prompt: "Voqeani to'g'ri natija bilan moslashtiring (muzqaymoq bozori).",
    pairs: [
      { left: "Muzqaymoq narxi oshdi", right: "Talab bo'ylab harakat (talab miqdori ↓)" },
      { left: "Iste'molchilar daromadi oshdi (normal tovar)", right: "Talab o'ngga siljiydi" },
      { left: "Muzlatilgan yogurt arzonladi (o'rinbosar)", right: "Talab chapga siljiydi" },
      { left: "Shakar qimmatladi (xomashyo)", right: "Taklif chapga siljiydi" },
      { left: "Yangi muzqaymoqchi bozorga kirdi", right: "Taklif o'ngga siljiydi" },
    ],
    why: "Talab omillari: daromad, bog'liq tovarlar narxi, did, kutishlar, xaridorlar soni. Taklif omillari: xomashyo narxi, texnologiya, kutishlar, sotuvchilar soni. O'z narxi — faqat **harakat**.",
  },
  {
    id: "ch04.new.match-terms",
    chapter: C,
    kind: "match",
    source: "new",
    topic: "Atamalar",
    prompt: "Atamani ta'rifi bilan moslashtiring.",
    pairs: [
      { left: "Substitutes", right: "Biri qimmatlasa, ikkinchisiga talab oshadi" },
      { left: "Complements", right: "Biri qimmatlasa, ikkinchisiga talab kamayadi" },
      { left: "Normal good", right: "Daromad oshsa, talab oshadi" },
      { left: "Shortage", right: "Talab miqdori taklif miqdoridan ko'p" },
      { left: "Surplus", right: "Taklif miqdori talab miqdoridan ko'p" },
    ],
  },
  { id: "ch04.new.pizza-eq", chapter: C, kind: "numeric", source: "new", topic: "Jadval bo'yicha muvozanat", prompt: "Problem 8 jadvali: $6 da talab 81, taklif 81; $7 da talab 68, taklif 98. Muvozanat **narxi**?", answer: 6, tolerance: 0, unit: "$", why: "Muvozanat — \\(Q^D = Q^S\\) qatori: $6 da 81 = 81." },
  { id: "ch04.new.pizza-surplus", chapter: C, kind: "numeric", source: "new", topic: "Surplus", prompt: "Xuddi shu jadval: narx $8 bo'lsa (talab 53, taklif 110), ortiqcha taklif (surplus) qancha?", answer: 57, tolerance: 0, unit: "pitsa", why: "\\(110 - 53 = 57\\). Sotuvchilar narxni tushirib, bozorni $6 ga qaytaradi.", traps: [{ value: -57, why: "Surplus \\(= Q^S - Q^D\\) — musbat son." }] },
  { id: "ch04.new.linear", chapter: C, kind: "numeric", source: "new", topic: "Chiziqli muvozanat", prompt: "\\(Q^D = 19 - 3P\\), \\(Q^S = -5 + 3P\\). Muvozanat miqdori \\(Q^*\\)?", answer: 7, tolerance: 0, unit: "dona", why: "\\(19 - 3P = -5 + 3P \\Rightarrow P^* = 4\\); \\(Q^* = 19 - 12 = 7\\).", traps: [{ value: 4, why: "4 — bu narx. Uni tenglamaga qo'yib miqdorni toping." }] },
  mk("ch04.new.both-up", "Ikkala siljish", "Problem 9: olma foydali ekani aniqlandi (talab ↑) va yangi o'g'it hosilni oshirdi (taklif ↑). Natija?", [
    { text: "Miqdor oshadi; narx noaniq", correct: true, why: "Ikkalasi ham miqdorni oshiradi. Narxni talab ko'taradi, taklif tushiradi — noaniq." },
    { text: "Narx oshadi; miqdor noaniq", why: "Bu talab ↑ va taklif ↓ holati." },
    { text: "Narx ham, miqdor ham oshadi", why: "Narx faqat talab siljishi kattaroq bo'lsa oshadi." },
    { text: "Narx tushadi; miqdor tushadi", why: "Miqdorning tushishi uchun kamida bitta egri chiziq chapga siljishi kerak." },
  ], 'new'),
  mk("ch04.new.bagels", "Bog'liq bozorlar", "Problem 10a: qaymoqli pishloq narxi **ham**, bagel miqdori **ham** oshdi. Sabab qaysi?", [
    { text: "Un arzonlashdi", correct: true, why: "Un — bagel xomashyosi → bagel taklifi o'ngga → bagel arzonlashadi, miqdori oshadi → to'ldiruvchi (pishloq) talabi o'ngga → pishloq narxi oshadi." },
    { text: "Sut arzonlashdi", why: "Sut — pishloq xomashyosi: pishloq taklifi o'ngga → pishloq **arzonlashardi**, qimmatlamasdi." },
    { text: "Un qimmatladi", why: "Bagel taklifi chapga → bagel miqdori **kamayardi**." },
    { text: "Sut qimmatladi", why: "Pishloq qimmatlaydi, lekin to'ldiruvchi bagelga talab kamayadi — bagel miqdori **tushardi**." },
  ], 'new'),
  mk("ch04.new.uz-cotton", "O'zbekistondan misol", "Qurg'oqchilik sabab paxta hosili kamaydi. Ip-gazlama mato bozorida nima bo'ladi?", [
    { text: "Mato taklifi chapga siljiydi: narx ↑, miqdor ↓", correct: true, why: "Paxta — xomashyo (input price). Xomashyo qimmatlasa taklif kamayadi." },
    { text: "Mato talabi chapga siljiydi", why: "Qurg'oqchilik xaridorlarning xohishini bevosita o'zgartirmaydi." },
    { text: "Narx tushadi, miqdor oshadi", why: "Bu taklif o'ngga siljiganda bo'ladi." },
    { text: "Hech narsa o'zgarmaydi", why: "Xomashyo narxi — taklifning asosiy omillaridan biri." },
  ], 'new'),
  mk("ch04.new.expectations", "Kutishlar", "Odamlar keyingi oy telefonlar qimmatlashini kutyapti. **Bugungi** telefon talabiga nima bo'ladi?", [
    { text: "Bugun talab o'ngga siljiydi", correct: true, why: "**Expectations**: kelajakda qimmat bo'lsa, hozir olishga shoshilishadi." },
    { text: "Bugun talab chapga siljiydi", why: "Bu arzonlashishni kutganda bo'ladi." },
    { text: "Talab bo'ylab harakat", why: "Bugungi narx o'zgarmagan — kutishlar egri chiziqni siljitadi." },
    { text: "Ta'sir yo'q", why: "Kutishlar — talabni siljituvchi beshta omildan biri." },
  ], 'new'),
];

const base = { D: marketD, S: marketS };

export const graphTasks: Question[] = [
  {
    id: "ch04.graph.hot-summer",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: "Talab siljishi",
    prompt: "Figure 10: issiq yoz muzqaymoqqa talabni oshirdi. Grafikda shuni ko'rsating: muvozanat narxi **kamida $5** bo'lsin, taklif joyida qolsin.",
    graph: { ...supplyShifts, title: "Issiq yoz" },
    check: (s) => {
      if (Math.abs(s.S.c - base.S.c) > 1e-6) return { ok: false, msg: "Ob-havo sotuvchilarning xarajatini o'zgartirmaydi — taklifni joyida qoldiring (Reset)." };
      const e = equilibrium(s.D, s.S);
      if (qd(s.D, 4) <= 7) return { ok: false, msg: "Talabni **o'ngga** siljiting: issiq kunda har qanday narxda ko'proq muzqaymoq xohlanadi." };
      if (e.P < 5 - 0.02) return { ok: false, msg: `Narx hozircha $${e.P.toFixed(2)} — yana o'ngga.` };
      return { ok: true, msg: `To'g'ri: P $4 → $${e.P.toFixed(2)}, Q 7 → ${e.Q.toFixed(1)}. Narx oshgani uchun sotuvchilar **taklif egri chizig'i bo'ylab** yuqoriga ko'tarildi.` };
    },
  },
  {
    id: "ch04.graph.sugar",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: "Taklif siljishi",
    prompt: "Figure 11: bo'ron shakarni qimmatlashtirdi. Muvozanat miqdorini **4 yoki undan kamga** tushiring, talabga tegmang.",
    graph: { ...supplyShifts, title: "Shakar qimmatladi" },
    check: (s) => {
      if (Math.abs(s.D.a - base.D.a) > 1e-6) return { ok: false, msg: "Shakar narxi xaridorlarning xohishini bevosita o'zgartirmaydi — talabni joyida qoldiring." };
      if (qs(s.S, 4) >= 7) return { ok: false, msg: "Xarajat oshsa, taklif **chapga** siljiydi." };
      const e = equilibrium(s.D, s.S);
      if (e.Q > 4.05) return { ok: false, msg: `Miqdor hozircha ${e.Q.toFixed(1)} — taklifni yana chapga suring.` };
      return { ok: true, msg: `Ha: P → $${e.P.toFixed(2)}, Q → ${e.Q.toFixed(1)}. Narx oshdi, sotilgan miqdor kamaydi.` };
    },
  },
  {
    id: "ch04.graph.ambiguous",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: "Ikkala siljish",
    prompt: "Figure 12(b) ni yarating: talab **ozgina** o'ngga, taklif **ko'proq** chapga siljisin — natijada narx oshsin, lekin miqdor **kamaysin**.",
    graph: { ...supplyShifts, title: "Talab ↑, taklif ↓" },
    check: (s) => {
      const dUp = qd(s.D, 4) > 7 + 1e-6;
      const sDown = qs(s.S, 4) < 7 - 1e-6;
      const e = equilibrium(s.D, s.S);
      if (!dUp || !sDown) return { ok: false, msg: "Ikkala egri chiziqni siljiting: talab o'ngga, taklif chapga." };
      if (e.Q >= 7) return { ok: false, msg: `Miqdor ${e.Q.toFixed(1)} — bu panel (a). Taklif siljishini kattaroq qiling.` };
      return { ok: true, msg: `Zo'r: narx $${e.P.toFixed(2)} (oshdi), miqdor ${e.Q.toFixed(1)} (kamaydi). Miqdor yo'nalishi siljishlarning nisbiy kattaligiga bog'liq — shuning uchun “ambiguous”.` };
    },
  },
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice, ...graphTasks];
