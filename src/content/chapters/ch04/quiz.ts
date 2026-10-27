import { equilibrium, qd, qs } from '../../../lib/econ';
import type { Question } from '../../types';
import { marketD, marketS, supplyShifts } from './presets';
import { tr } from '../../../lib/lang';

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
  mk("ch04.qq.1", tr("Bozor", 'Markets'), "The best definition of a **market** is", [
    { text: "a store that offers a variety of goods and services.", why: tr("Do'kon — bozorning bir qismi xolos. Bozor — **xaridorlar va sotuvchilar guruhi**, joy emas.", 'A store is only part of a market. A market is a **group of buyers and sellers**, not a place.') },
    { text: "a place where buyers meet and an auctioneer calls out prices.", why: tr("Bu juda tashkillashgan bozor (bug'doy birjasi). Ko'p bozorlar (muzqaymoq) auktsionersiz ishlaydi.", 'That is a highly organized market (a wheat exchange). Many markets (ice cream) work without an auctioneer.') },
    { text: "a group of buyers and sellers of a good or service.", correct: true, why: tr("Kitobdagi ta'rif: “a group of buyers and sellers of a particular good or service”.", "The book's definition: “a group of buyers and sellers of a particular good or service”.") },
    { text: "a venue where the sole supplier of a good offers its product.", why: tr("Yagona sotuvchi — **monopoliya**, bozorning bir turi, ta'rifi emas.", 'A single seller is a **monopoly** — one kind of market, not the definition.') },
  ]),
  mk("ch04.qq.2", tr("Raqobat", 'Competition'), "In a **perfectly competitive** market,", [
    { text: "each seller tries to distinguish itself by offering a better product than its rivals.", why: tr("Mukammal raqobatda tovarlar **bir xil** — farqlanishga joy yo'q.", 'Under perfect competition the goods are **identical** — there is no room to differentiate.') },
    { text: "each seller takes the price of its product as set by market conditions.", correct: true, why: tr("Sotuvchilar **price takers**: ular juda ko'p, har biri kichik, narxni bozor belgilaydi.", 'Sellers are **price takers**: there are very many of them, each small, and the market sets the price.') },
    { text: "each seller tries to undercut the prices charged by its rivals.", why: tr("Bozor narxida xohlagancha sotish mumkin — narxni tushirishga sabab yo'q.", 'A seller can sell all it wants at the market price — there is no reason to cut it.') },
    { text: "one seller has successfully outcompeted its rivals, so no other sellers remain.", why: tr("Bu monopoliya — mukammal raqobatning aksi.", 'That is monopoly — the opposite of perfect competition.') },
  ]),
  mk("ch04.qq.3", tr("Raqobat", 'Competition'), "The market for which product best fits the definition of a perfectly competitive market?", [
    { text: "eggs", correct: true, why: tr("Tuxum deyarli bir xil, ishlab chiqaruvchi va xaridorlar juda ko'p — hech kim narxga ta'sir qilmaydi.", 'Eggs are nearly identical, with very many producers and buyers — nobody can affect the price.') },
    { text: "tap water", why: tr("Vodoprovod suvini odatda bitta kompaniya yetkazadi — monopoliya.", 'Tap water is usually supplied by a single company — a monopoly.') },
    { text: "movies", why: tr("Har bir film o'ziga xos — tovarlar bir xil emas.", 'Every movie is unique — the goods are not identical.') },
    { text: "computer operating systems", why: tr("Bir nechta yirik firma (Windows, macOS) — bozor kuchiga ega, mukammal raqobat emas.", 'A few large firms (Windows, macOS) with market power — not perfect competition.') },
  ]),
  mk("ch04.qq.4", tr("Talab siljishi", 'Shifts in demand'), "A change in which of the following will **NOT** shift the demand curve for hamburgers?", [
    { text: "the price of hot dogs", why: tr("Hot dog — o'rinbosar; uning narxi gamburger talabini **siljitadi**.", 'Hot dogs are a substitute; their price **shifts** the demand for hamburgers.') },
    { text: "the price of hamburgers", correct: true, why: tr("Gamburgerning **o'z narxi** vertikal o'qda — uning o'zgarishi egri chiziq **bo'ylab harakat**, siljish emas.", "The hamburger's **own price** is on the vertical axis — changing it is a **movement along** the curve, not a shift.") },
    { text: "the price of hamburger buns", why: tr("Bulochka — to'ldiruvchi; uning narxi talabni siljitadi.", 'Buns are a complement; their price shifts demand.') },
    { text: "the income of hamburger consumers", why: tr("Daromad — talabni siljituvchi omil (normal yoki inferior tovar).", 'Income shifts demand (normal or inferior good).') },
  ]),
  mk("ch04.qq.5", tr("Talab siljishi", 'Shifts in demand'), "Which of the following will shift the demand curve for pizza to the **right**?", [
    { text: "an increase in the price of hamburgers, a substitute for pizza", correct: true, why: tr("O'rinbosar qimmatladi → odamlar pitsaga o'tadi → har bir narxda pitsaga talab oshadi.", 'A substitute got pricier → people switch to pizza → demand for pizza rises at every price.') },
    { text: "an increase in the price of root beer, a complement to pizza", why: tr("To'ldiruvchi qimmatlasa, pitsaga talab **kamayadi** (chapga).", 'When a complement gets pricier, demand for pizza **falls** (shifts left).') },
    { text: "the departure of college students when they leave for summer vacation", why: tr("Xaridorlar soni kamaydi → talab **chapga**.", 'Fewer buyers → demand shifts **left**.') },
    { text: "a decrease in the price of pizza", why: tr("O'z narxi — egri chiziq bo'ylab harakat (talab miqdori oshadi), siljish emas.", 'Its own price — a movement along the curve (quantity demanded rises), not a shift.') },
  ]),
  mk("ch04.qq.6", "Inferior tovar", "If pasta is an **inferior good**, then the demand curve shifts to the ________ when ________ rises.", [
    { text: "right; the price of pasta", why: tr("O'z narxi egri chiziqni siljitmaydi.", "A good's own price does not shift the curve.") },
    { text: "right; consumers' income", why: tr("Inferior tovarda daromad oshsa talab **kamayadi** — o'ngga emas, chapga.", 'For an inferior good, higher income **lowers** demand — a shift left, not right.') },
    { text: "left; the price of pasta", why: tr("Yana o'z narxi — bu harakat, siljish emas.", 'Again its own price — a movement, not a shift.') },
    { text: "left; consumers' income", correct: true, why: tr("Inferior tovar ta'rifi: daromad ↑ → talab ↓ → egri chiziq chapga.", 'The definition of an inferior good: income ↑ → demand ↓ → the curve shifts left.') },
  ]),
  mk("ch04.qq.7", tr("Taklif bo'ylab harakat", 'Movement along supply'), "What event moves pizza suppliers **up along** a given supply curve?", [
    { text: "an increase in the price of pizza", correct: true, why: tr("O'z narxi vertikal o'qda: narx oshsa, sotuvchilar shu egri chiziq bo'ylab yuqoriga — ko'proq taklif qiladi.", "The good's own price is on the vertical axis: when it rises, sellers move up along the same curve and supply more.") },
    { text: "an increase in the price of root beer, a complement to pizza", why: tr("Bu xaridorlarga ta'sir qiladi (talabni siljitadi), sotuvchilar egri chizig'iga emas.", "That affects buyers (it shifts demand), not the sellers' curve.") },
    { text: "a decrease in the price of cheese, an input to pizza", why: tr("Xomashyo narxi taklifni **siljitadi** (o'ngga), bo'ylab harakat emas.", 'An input price **shifts** supply (right), rather than causing a movement along it.') },
    { text: "a kitchen fire that destroys a popular pizza joint", why: tr("Sotuvchilar soni kamaydi → taklif chapga siljiydi.", 'Fewer sellers → supply shifts left.') },
  ]),
  mk("ch04.qq.8", tr("Taklif siljishi", 'Shifts in supply'), "What event **shifts** the supply curve for pizza to the right?", [
    { text: "an increase in the price of pizza", why: tr("O'z narxi — egri chiziq bo'ylab harakat.", 'Its own price — a movement along the curve.') },
    { text: "an increase in the price of root beer, a complement to pizza", why: tr("Bu talab tomonidagi o'zgarish.", 'That is a change on the demand side.') },
    { text: "a decrease in the price of cheese, an input to pizza", correct: true, why: tr("Xomashyo arzonlashdi → har bir narxda ishlab chiqarish foydaliroq → taklif o'ngga.", 'A cheaper input → producing is more profitable at every price → supply shifts right.') },
    { text: "a kitchen fire that destroys a popular pizza joint", why: tr("Sotuvchi kamaydi — taklif **chapga**.", 'Fewer sellers — supply shifts **left**.') },
  ]),
  mk("ch04.qq.9", tr("O'rinbosarlar", 'Substitutes'), "Movie tickets and video streaming services are **substitutes**. If the price of video streaming increases, what happens in the market for movie tickets?", [
    { text: "The supply curve shifts to the left.", why: tr("Striming narxi kino zallarining xarajatiga ta'sir qilmaydi — taklif joyida.", 'The price of streaming does not affect the costs of movie theaters — supply stays put.') },
    { text: "The supply curve shifts to the right.", why: tr("Xuddi shu sabab — taklif o'zgarmaydi.", "For the same reason supply doesn't change.") },
    { text: "The demand curve shifts to the left.", why: tr("O'rinbosar qimmatlasa, talab **oshadi**, kamaymaydi.", 'When a substitute gets pricier, demand **rises**, not falls.') },
    { text: "The demand curve shifts to the right.", correct: true, why: tr("Striming qimmat → odamlar kinoteatrga ko'proq boradi → chipta talabi o'ngga.", 'Streaming gets pricier → people go to the movies more → demand for tickets shifts right.') },
  ]),
  mk("ch04.qq.10", tr("Muvozanat o'zgarishi", 'Changes in equilibrium'), "The discovery of a large new reserve of crude oil will shift the ________ curve for gasoline, leading to a ________ equilibrium price.", [
    { text: "supply; higher", why: tr("Taklif o'ngga siljiydi → narx **tushadi**.", 'Supply shifts right → the price **falls**.') },
    { text: "supply; lower", correct: true, why: tr("Neft (xomashyo) arzonlashadi → benzin taklifi o'ngga → muvozanat narxi pasayadi.", 'Oil (an input) gets cheaper → gasoline supply shifts right → the equilibrium price falls.') },
    { text: "demand; higher", why: tr("Neft konining topilishi haydovchilarning xohishini o'zgartirmaydi.", "Finding an oil field doesn't change what drivers want.") },
    { text: "demand; lower", why: tr("Siljiydigan egri chiziq — taklif.", 'The curve that shifts is supply.') },
  ]),
  mk("ch04.qq.11", "Inferior tovar", "If the economy goes into a recession and incomes fall, what happens in the markets for **inferior goods**?", [
    { text: "Prices and quantities both rise.", correct: true, why: tr("Daromad ↓ → inferior tovarga talab ↑ (o'ngga) → muvozanat narxi ham, miqdori ham oshadi.", 'Income ↓ → demand for an inferior good ↑ (right) → both the equilibrium price and quantity rise.') },
    { text: "Prices and quantities both fall.", why: tr("Bu **normal** tovarlar uchun to'g'ri bo'lardi.", 'That would be true for **normal** goods.') },
    { text: "Prices rise, and quantities fall.", why: tr("Bunday natija taklif chapga siljiganda bo'ladi.", 'That outcome happens when supply shifts left.') },
    { text: "Prices fall, and quantities rise.", why: tr("Bu taklif o'ngga siljiganda bo'ladi.", 'That happens when supply shifts right.') },
  ]),
  mk("ch04.qq.12", tr("Muvozanat o'zgarishi", 'Changes in equilibrium'), "What event might lead to an **increase** in the equilibrium price of jelly and a **decrease** in the equilibrium quantity of jelly sold?", [
    { text: "an increase in the price of peanut butter, a complement to jelly", why: tr("To'ldiruvchi qimmat → jem talabi chapga → narx ham, miqdor ham **tushadi**.", 'A pricier complement → demand for jam shifts left → both price and quantity **fall**.') },
    { text: "an increase in the price of Marshmallow Fluff, a substitute for jelly", why: tr("O'rinbosar qimmat → talab o'ngga → narx ham, miqdor ham **oshadi**.", 'A pricier substitute → demand shifts right → both price and quantity **rise**.') },
    { text: "an increase in the price of grapes, an input into jelly", correct: true, why: tr("Xomashyo qimmat → taklif chapga → narx ↑, miqdor ↓ (Figure 11 dagi kabi).", 'A pricier input → supply shifts left → price ↑, quantity ↓ (as in Figure 11).') },
    { text: "an increase in consumers' incomes, as long as jelly is a normal good", why: tr("Talab o'ngga → narx ham, miqdor ham oshadi.", 'Demand shifts right → both price and quantity rise.') },
  ]),
  mk("ch04.qq.13", tr("Siljish vs harakat", 'Shift versus movement'), "An increase in ________ will cause a movement along a given supply curve, which is called a change in ________.", [
    { text: "supply; demand", why: tr("Taklif oshsa, taklif egri chizig'ining o'zi siljiydi.", 'When supply increases, the supply curve itself shifts.') },
    { text: "supply; quantity demanded", why: tr("Taklif oshishi talab bo'ylab harakat qildiradi, taklif bo'ylab emas.", 'An increase in supply causes a movement along demand, not along supply.') },
    { text: "demand; supply", why: tr("Talab oshganda taklif egri chizig'i joyida qoladi — **supply** o'zgarmaydi.", "When demand rises the supply curve stays put — **supply** doesn't change.") },
    { text: "demand; quantity supplied", correct: true, why: tr("Talab o'ngga → narx ↑ → sotuvchilar taklif egri chizig'i **bo'ylab** yuqoriga: bu “change in quantity supplied”.", 'Demand shifts right → price ↑ → sellers move up **along** the supply curve: a “change in quantity supplied.”') },
  ]),
];

export const checks: Record<string, Question> = {
  "s-4-1": mk("ch04.check.4-1", tr("Raqobat", 'Competition'), tr("Toshkentdagi barcha taksi haydovchilari va yo'lovchilar haqida o'ylang. Qaysi gap to'g'ri?", 'Think of all the taxi drivers and passengers in Tashkent. Which statement is true?'), [
    { text: tr("Bu bozor emas, chunki ular bitta joyda uchrashmaydi.", "It isn't a market, because they don't meet in one place."), why: tr("Bozor joy emas — xaridor va sotuvchilar **guruhi**. Muzqaymoq bozori ham shunday tarqoq.", 'A market is not a place but a **group** of buyers and sellers. The ice-cream market is just as scattered.') },
    { text: tr("Bu bozor; agar haydovchilar va yo'lovchilar juda ko'p bo'lsa va xizmat deyarli bir xil bo'lsa, u raqobatliga yaqin.", 'It is a market; with very many drivers and riders and a nearly identical service, it is close to competitive.'), correct: true, why: tr("Ko'p ishtirokchi + bir xil xizmat → hech kim narxni o'zi belgilay olmaydi (price takers).", 'Many participants + an identical service → nobody can set the price alone (price takers).') },
    { text: tr("Bu monopoliya, chunki taksi narxlari bir xil.", 'It is a monopoly, because taxi fares are the same.'), why: tr("Bir xil narx — raqobat belgisi bo'lishi mumkin; monopoliya — yagona sotuvchi.", 'Equal prices can be a sign of competition; a monopoly is a single seller.') },
    { text: tr("Raqobatli bozorda sotuvchilar narxni xohlagancha belgilaydi.", 'In a competitive market sellers set whatever price they like.'), why: tr("Aksincha: raqobatli bozorda har bir sotuvchining narxga ta'siri juda kichik.", 'The opposite: in a competitive market each seller has very little influence on the price.') },
  ], 'new'),
  "s-4-2a": { id: "ch04.check.4-2a", chapter: C, kind: "numeric", source: "new", topic: tr("Talab jadvali", 'Demand schedule'), prompt: tr("Catherine'ning jadvali bo'yicha (Figure 1): narx $2 dan $4 ga oshsa, uning talab miqdori **nechta** kamayadi?", "Using Catherine's schedule (Figure 1): when the price rises from $2 to $4, by **how many** cones does her quantity demanded fall?"), answer: 4, tolerance: 0, unit: "dona", why: tr("$2 da 8 ta, $4 da 4 ta → 8 − 4 = 4 ta kam. Bu **talab qonuni**: narx ↑, talab miqdori ↓.", '8 at $2, 4 at $4 → 8 − 4 = 4 fewer. This is the **law of demand**: price ↑, quantity demanded ↓.'), traps: [{ value: 2, why: tr("Bu narx farqi ($4 − $2). Miqdorlar farqini toping.", 'That is the price difference ($4 − $2). Find the difference in quantities.') }] },
  "s-4-2b": { id: "ch04.check.4-2b", chapter: C, kind: "numeric", source: "new", topic: tr("Bozor talabi", 'Market demand'), prompt: tr("Figure 2: $1 narxda Catherine 10 ta, Nicholas 6 ta muzqaymoq oladi. **Bozor** talab miqdori nechta?", 'Figure 2: at $1, Catherine buys 10 cones and Nicholas 6. What is the **market** quantity demanded?'), answer: 16, tolerance: 0, unit: "dona", why: tr("Gorizontal qo'shish: \\(10 + 6 = 16\\).", 'Horizontal addition: \\(10 + 6 = 16\\).'), traps: [{ value: 2, why: tr("Ayirmang — bozor talabi individual miqdorlar **yig'indisi**.", "Don't subtract — market demand is the **sum** of individual quantities.") }, { value: 8, why: tr("O'rtacha emas, yig'indi kerak.", 'We need the sum, not the average.') }] },
  "s-4-2c": mk("ch04.check.4-2c", tr("Siljish vs harakat", 'Shift versus movement'), tr("Shifokorlar muzqaymoq foydali deb e'lon qildi. Muzqaymoq bozorida nima bo'ladi?", 'Doctors announce that ice cream is healthy. What happens in the ice-cream market?'), [
    { text: tr("Talab egri chizig'i o'ngga siljiydi (increase in demand).", 'The demand curve shifts right (an increase in demand).'), correct: true, why: tr("**Didlar** (tastes) o'zgardi — bu narxdan boshqa omil, demak har bir narxda ko'proq talab: egri chiziq o'ngga.", '**Tastes** changed — a factor other than the price, so more is demanded at every price: the curve shifts right.') },
    { text: tr("Talab egri chizig'i bo'ylab pastga harakat.", 'A movement down along the demand curve.'), why: tr("Bo'ylab harakat faqat **o'z narxi** o'zgarganda bo'ladi.", "A movement along the curve happens only when the good's **own price** changes.") },
    { text: tr("Taklif egri chizig'i o'ngga siljiydi.", 'The supply curve shifts right.'), why: tr("Yangilik iste'molchilarga ta'sir qiladi, ishlab chiqaruvchilarning xarajatiga emas.", "The news affects consumers, not producers' costs.") },
    { text: tr("Hech narsa — narx o'zgarmagan.", "Nothing — the price didn't change."), why: tr("Narx o'zgarmasa ham talab siljishi mumkin; aynan shuning uchun narx keyin o'zgaradi.", "Demand can shift even if the price hasn't changed yet; that is exactly why the price then changes.") },
  ], 'new'),
  "s-4-3a": { id: "ch04.check.4-3a", chapter: C, kind: "tf", source: "new", topic: tr("Taklif qonuni", 'Law of supply'), prompt: tr("Ben $1 narxda bitta ham muzqaymoq sotmaydi, $6 da esa 5 ta sotadi. Bu taklif qonuniga mos.", 'Ben sells no cones at $1 and 5 at $6. This fits the law of supply.'), answer: true, why: tr("Narx yuqori → sotish foydaliroq → taklif miqdori ko'proq. Taklif egri chizig'i yuqoriga egilgan.", 'A higher price → selling is more profitable → a larger quantity supplied. The supply curve slopes up.') },
  "s-4-3b": { id: "ch04.check.4-3b", chapter: C, kind: "numeric", source: "new", topic: tr("Bozor taklifi", 'Market supply'), prompt: tr("Figure 6: $5 narxda Ben 4 ta, Jerry 6 ta taklif qiladi. Bozor taklif miqdori?", 'Figure 6: at $5, Ben supplies 4 cones and Jerry 6. What is the market quantity supplied?'), answer: 10, tolerance: 0, unit: "dona", why: tr("\\(4 + 6 = 10\\) — gorizontal qo'shish.", '\\(4 + 6 = 10\\) — horizontal addition.') },
  "s-4-3c": mk("ch04.check.4-3c", tr("Taklif siljishi", 'Shifts in supply'), tr("Muzqaymoq ishlab chiqarish uchun yangi, tezroq mashina ixtiro qilindi. Bu …", 'A new, faster machine for making ice cream is invented. This …'), [
    { text: tr("taklifni o'ngga siljitadi (technology)", 'shifts supply right (technology)'), correct: true, why: tr("Texnologiya xarajatni kamaytiradi → har bir narxda ko'proq taklif.", 'Technology lowers costs → more is supplied at every price.') },
    { text: tr("taklif bo'ylab yuqoriga harakat", 'causes a movement up along supply'), why: tr("Bo'ylab harakat faqat o'z narxi o'zgarganda.", 'A movement along the curve happens only when its own price changes.') },
    { text: tr("talabni o'ngga siljitadi", 'shifts demand right'), why: tr("Mashina iste'molchilar xohishini o'zgartirmaydi.", "The machine doesn't change what consumers want.") },
    { text: tr("taklifni chapga siljitadi", 'shifts supply left'), why: tr("Yaxshi texnologiya taklifni **oshiradi**.", 'Better technology **raises** supply.') },
  ], 'new'),
  "s-4-4a": mk("ch04.check.4-4a", tr("Muvozanat", 'Equilibrium'), tr("Bozor narxi $5, muvozanat $4. Bozorda nima bo'ladi?", 'The market price is $5 and equilibrium is $4. What happens in the market?'), [
    { text: tr("Shortage: narx ko'tariladi", 'A shortage: the price rises'), why: tr("Narx muvozanatdan **yuqori** — taklif ko'p, demak shortage emas.", "The price is **above** equilibrium — there is too much supply, so it isn't a shortage.") },
    { text: tr("Surplus: sotuvchilar narxni tushiradi, narx $4 ga qarab harakatlanadi", 'A surplus: sellers cut the price, and it moves toward $4'), correct: true, why: tr("$5 da Qs 10 > Qd 4. Muzlatgichlar to'lib ketadi → narx tushadi. Bu **law of supply and demand**.", 'At $5, Qs 10 > Qd 4. Freezers fill up → the price falls. This is the **law of supply and demand**.') },
    { text: tr("Talab egri chizig'i o'ngga siljiydi", 'The demand curve shifts right'), why: tr("Narx o'zgarishi egri chiziqlarni siljitmaydi — ular bo'ylab harakat bo'ladi.", "A change in the price doesn't shift the curves — it moves along them.") },
    { text: tr("Hech narsa o'zgarmaydi", 'Nothing changes'), why: tr("Muvozanatdan tashqarida narxga bosim bor.", 'Away from equilibrium there is pressure on the price.') },
  ], 'new'),
  "s-4-4b": mk("ch04.check.4-4b", tr("Uch qadam", 'Three steps'), tr("Bir vaqtda issiq havo (talab ↑) va bo'ron sabab shakar qimmatlashi (taklif ↓) yuz berdi. Nima **aniq**?", 'At the same time hot weather raises demand and a hurricane makes sugar pricier (supply ↓). What is **certain**?'), [
    { text: tr("Narx oshadi; miqdor — noaniq (ambiguous)", 'The price rises; the quantity is ambiguous'), correct: true, why: tr("Ikkala siljish ham narxni ko'taradi. Miqdorni talab oshiradi, taklif kamaytiradi — qaysi biri katta bo'lsa (Figure 12).", 'Both shifts push the price up. Demand raises the quantity while supply lowers it — whichever is larger wins (Figure 12).') },
    { text: tr("Narx ham, miqdor ham oshadi", 'Both price and quantity rise'), why: tr("Miqdor faqat talab siljishi kattaroq bo'lsa oshadi (panel a).", 'The quantity rises only if the demand shift is larger (panel a).') },
    { text: tr("Miqdor oshadi; narx noaniq", 'The quantity rises; the price is ambiguous'), why: tr("Teskarisi: narx yo'nalishi aniq, miqdor emas.", 'The reverse: the direction of the price is certain, not the quantity.') },
    { text: tr("Hammasi noaniq", 'Everything is ambiguous'), why: tr("Narx yo'nalishi aniq — ikkalasi ham uni yuqoriga suradi.", 'The direction of the price is certain — both push it up.') },
  ], 'new'),
};

export const practice: Question[] = [
  { id: "ch04.new.tf-inferior", chapter: C, kind: "tf", source: "new", topic: "Inferior tovar", prompt: tr("“Inferior good” — sifati yomon tovar degani.", 'An “inferior good” means a low-quality good.'), answer: false, why: tr("Yo'q: bu faqat daromad oshganda talab **kamayadigan** tovar. Masalan, avtobus qatnovi yoki arzon makaron sifatli bo'lishi mumkin.", 'No: it is just a good whose demand **falls** when income rises. Bus rides or cheap pasta can be perfectly good quality.') },
  { id: "ch04.new.tf-notebooks", chapter: C, kind: "tf", source: "new", topic: tr("Siljish vs harakat", 'Shift versus movement'), prompt: "Problem 2: “An increase in the demand for notebooks raises the quantity of notebooks demanded but not the quantity supplied.”", answer: false, why: tr("Talab o'ngga siljiydi → narx oshadi → sotuvchilar taklif egri chizig'i bo'ylab yuqoriga: **quantity supplied oshadi**. Yangi muvozanatda ikkala miqdor ham oshgan (va teng).", 'Demand shifts right → the price rises → sellers move up along the supply curve: **quantity supplied rises**. In the new equilibrium both quantities have risen (and are equal).') },
  { id: "ch04.new.tf-shift-rule", chapter: C, kind: "tf", source: "new", topic: tr("Siljish qoidasi", 'The shift rule'), prompt: tr("Grafik o'qlarida ko'rsatilmagan omil o'zgarsa, egri chiziq siljiydi; o'qdagi o'zgaruvchi (narx) o'zgarsa — egri chiziq bo'ylab harakat bo'ladi.", "When a factor not shown on the graph's axes changes, the curve shifts; when the variable on an axis (the price) changes, we move along the curve."), answer: true, why: tr("Bu 2-bob ilovasidagi oltin qoida: “When a relevant variable that is not named on either axis changes, the curve shifts.”", 'This is the golden rule of the Chapter 2 appendix: “When a relevant variable that is not named on either axis changes, the curve shifts.”') },
  {
    id: "ch04.new.match-shifters",
    chapter: C,
    kind: "match",
    source: "new",
    topic: tr("Siljituvchi omillar", 'Shifters'),
    prompt: tr("Voqeani to'g'ri natija bilan moslashtiring (muzqaymoq bozori).", 'Match each event with the right result (the ice-cream market).'),
    pairs: [
      { left: tr("Muzqaymoq narxi oshdi", 'The price of ice cream rises'), right: tr("Talab bo'ylab harakat (talab miqdori ↓)", 'A movement along demand (quantity demanded ↓)') },
      { left: tr("Iste'molchilar daromadi oshdi (normal tovar)", "Consumers' incomes rise (a normal good)"), right: tr("Talab o'ngga siljiydi", 'Demand shifts right') },
      { left: tr("Muzlatilgan yogurt arzonladi (o'rinbosar)", 'Frozen yogurt gets cheaper (a substitute)'), right: tr("Talab chapga siljiydi", 'Demand shifts left') },
      { left: tr("Shakar qimmatladi (xomashyo)", 'Sugar gets pricier (an input)'), right: tr("Taklif chapga siljiydi", 'Supply shifts left') },
      { left: tr("Yangi muzqaymoqchi bozorga kirdi", 'A new ice-cream seller enters the market'), right: tr("Taklif o'ngga siljiydi", 'Supply shifts right') },
    ],
    why: tr("Talab omillari: daromad, bog'liq tovarlar narxi, did, kutishlar, xaridorlar soni. Taklif omillari: xomashyo narxi, texnologiya, kutishlar, sotuvchilar soni. O'z narxi — faqat **harakat**.", "Demand shifters: income, prices of related goods, tastes, expectations, number of buyers. Supply shifters: input prices, technology, expectations, number of sellers. A good's own price causes only a **movement**."),
  },
  {
    id: "ch04.new.match-terms",
    chapter: C,
    kind: "match",
    source: "new",
    topic: tr("Atamalar", 'Terms'),
    prompt: tr("Atamani ta'rifi bilan moslashtiring.", 'Match each term with its definition.'),
    pairs: [
      { left: "Substitutes", right: tr("Biri qimmatlasa, ikkinchisiga talab oshadi", 'When one gets pricier, demand for the other rises') },
      { left: "Complements", right: tr("Biri qimmatlasa, ikkinchisiga talab kamayadi", 'When one gets pricier, demand for the other falls') },
      { left: "Normal good", right: tr("Daromad oshsa, talab oshadi", 'When income rises, demand rises') },
      { left: "Shortage", right: tr("Talab miqdori taklif miqdoridan ko'p", 'Quantity demanded exceeds quantity supplied') },
      { left: "Surplus", right: tr("Taklif miqdori talab miqdoridan ko'p", 'Quantity supplied exceeds quantity demanded') },
    ],
  },
  { id: "ch04.new.pizza-eq", chapter: C, kind: "numeric", source: "new", topic: tr("Jadval bo'yicha muvozanat", 'Equilibrium from a table'), prompt: tr("Problem 8 jadvali: $6 da talab 81, taklif 81; $7 da talab 68, taklif 98. Muvozanat **narxi**?", "Problem 8's table: at $6 quantity demanded is 81 and quantity supplied 81; at $7, 68 and 98. What is the equilibrium **price**?"), answer: 6, tolerance: 0, unit: "$", why: tr("Muvozanat — \\(Q^D = Q^S\\) qatori: $6 da 81 = 81.", 'Equilibrium is the row where \\(Q^D = Q^S\\): at $6, 81 = 81.') },
  { id: "ch04.new.pizza-surplus", chapter: C, kind: "numeric", source: "new", topic: "Surplus", prompt: tr("Xuddi shu jadval: narx $8 bo'lsa (talab 53, taklif 110), ortiqcha taklif (surplus) qancha?", 'Same table: at a price of $8 (demand 53, supply 110), how large is the surplus?'), answer: 57, tolerance: 0, unit: "pitsa", why: tr("\\(110 - 53 = 57\\). Sotuvchilar narxni tushirib, bozorni $6 ga qaytaradi.", '\\(110 - 53 = 57\\). Sellers cut the price and bring the market back to $6.'), traps: [{ value: -57, why: "Surplus \\(= Q^S - Q^D\\) — musbat son." }] },
  { id: "ch04.new.linear", chapter: C, kind: "numeric", source: "new", topic: tr("Chiziqli muvozanat", 'Linear equilibrium'), prompt: tr("\\(Q^D = 19 - 3P\\), \\(Q^S = -5 + 3P\\). Muvozanat miqdori \\(Q^*\\)?", '\\(Q^D = 19 - 3P\\), \\(Q^S = -5 + 3P\\). What is the equilibrium quantity \\(Q^*\\)?'), answer: 7, tolerance: 0, unit: "dona", why: tr("\\(19 - 3P = -5 + 3P \\Rightarrow P^* = 4\\); \\(Q^* = 19 - 12 = 7\\).", '\\(19 - 3P = -5 + 3P \\Rightarrow P^* = 4\\); \\(Q^* = 19 - 12 = 7\\).'), traps: [{ value: 4, why: tr("4 — bu narx. Uni tenglamaga qo'yib miqdorni toping.", '4 is the price. Plug it into an equation to find the quantity.') }] },
  mk("ch04.new.both-up", tr("Ikkala siljish", 'Both shift'), tr("Problem 9: olma foydali ekani aniqlandi (talab ↑) va yangi o'g'it hosilni oshirdi (taklif ↑). Natija?", 'Problem 9: apples are found to be healthy (demand ↑) and a new fertilizer raises yields (supply ↑). The result?'), [
    { text: tr("Miqdor oshadi; narx noaniq", 'The quantity rises; the price is ambiguous'), correct: true, why: tr("Ikkalasi ham miqdorni oshiradi. Narxni talab ko'taradi, taklif tushiradi — noaniq.", 'Both raise the quantity. Demand pushes the price up and supply pushes it down — ambiguous.') },
    { text: tr("Narx oshadi; miqdor noaniq", 'The price rises; the quantity is ambiguous'), why: tr("Bu talab ↑ va taklif ↓ holati.", 'That is the case of demand ↑ and supply ↓.') },
    { text: tr("Narx ham, miqdor ham oshadi", 'Both price and quantity rise'), why: tr("Narx faqat talab siljishi kattaroq bo'lsa oshadi.", 'The price rises only if the demand shift is larger.') },
    { text: tr("Narx tushadi; miqdor tushadi", 'The price falls and the quantity falls'), why: tr("Miqdorning tushishi uchun kamida bitta egri chiziq chapga siljishi kerak.", 'For the quantity to fall, at least one curve must shift left.') },
  ], 'new'),
  mk("ch04.new.bagels", tr("Bog'liq bozorlar", 'Related markets'), tr("Problem 10a: qaymoqli pishloq narxi **ham**, bagel miqdori **ham** oshdi. Sabab qaysi?", 'Problem 10a: the price of cream cheese **and** the quantity of bagels both rose. Which caused it?'), [
    { text: tr("Un arzonlashdi", 'Flour got cheaper'), correct: true, why: tr("Un — bagel xomashyosi → bagel taklifi o'ngga → bagel arzonlashadi, miqdori oshadi → to'ldiruvchi (pishloq) talabi o'ngga → pishloq narxi oshadi.", 'Flour is an input to bagels → bagel supply shifts right → bagels get cheaper and more are sold → demand for the complement (cream cheese) shifts right → the price of cream cheese rises.') },
    { text: tr("Sut arzonlashdi", 'Milk got cheaper'), why: tr("Sut — pishloq xomashyosi: pishloq taklifi o'ngga → pishloq **arzonlashardi**, qimmatlamasdi.", 'Milk is an input to cream cheese: its supply would shift right → cream cheese would get **cheaper**, not pricier.') },
    { text: tr("Un qimmatladi", 'Flour got pricier'), why: tr("Bagel taklifi chapga → bagel miqdori **kamayardi**.", 'Bagel supply shifts left → the quantity of bagels would **fall**.') },
    { text: tr("Sut qimmatladi", 'Milk got pricier'), why: tr("Pishloq qimmatlaydi, lekin to'ldiruvchi bagelga talab kamayadi — bagel miqdori **tushardi**.", 'Cream cheese gets pricier, but demand for the complement (bagels) falls — the quantity of bagels would **fall**.') },
  ], 'new'),
  mk("ch04.new.uz-cotton", tr("O'zbekistondan misol", 'An example from Uzbekistan'), tr("Qurg'oqchilik sabab paxta hosili kamaydi. Ip-gazlama mato bozorida nima bo'ladi?", 'A drought cuts the cotton harvest. What happens in the market for cotton fabric?'), [
    { text: tr("Mato taklifi chapga siljiydi: narx ↑, miqdor ↓", 'Fabric supply shifts left: price ↑, quantity ↓'), correct: true, why: tr("Paxta — xomashyo (input price). Xomashyo qimmatlasa taklif kamayadi.", 'Cotton is an input. When an input gets pricier, supply falls.') },
    { text: tr("Mato talabi chapga siljiydi", 'Fabric demand shifts left'), why: tr("Qurg'oqchilik xaridorlarning xohishini bevosita o'zgartirmaydi.", "A drought doesn't directly change what buyers want.") },
    { text: tr("Narx tushadi, miqdor oshadi", 'The price falls and the quantity rises'), why: tr("Bu taklif o'ngga siljiganda bo'ladi.", 'That happens when supply shifts right.') },
    { text: tr("Hech narsa o'zgarmaydi", 'Nothing changes'), why: tr("Xomashyo narxi — taklifning asosiy omillaridan biri.", 'Input prices are one of the main supply shifters.') },
  ], 'new'),
  mk("ch04.new.expectations", tr("Kutishlar", 'Expectations'), tr("Odamlar keyingi oy telefonlar qimmatlashini kutyapti. **Bugungi** telefon talabiga nima bo'ladi?", 'People expect phones to get pricier next month. What happens to demand for phones **today**?'), [
    { text: tr("Bugun talab o'ngga siljiydi", "Today's demand shifts right"), correct: true, why: tr("**Expectations**: kelajakda qimmat bo'lsa, hozir olishga shoshilishadi.", '**Expectations**: if it will cost more later, people hurry to buy now.') },
    { text: tr("Bugun talab chapga siljiydi", "Today's demand shifts left"), why: tr("Bu arzonlashishni kutganda bo'ladi.", 'That happens when people expect prices to fall.') },
    { text: tr("Talab bo'ylab harakat", 'A movement along demand'), why: tr("Bugungi narx o'zgarmagan — kutishlar egri chiziqni siljitadi.", "Today's price hasn't changed — expectations shift the curve.") },
    { text: tr("Ta'sir yo'q", 'No effect'), why: tr("Kutishlar — talabni siljituvchi beshta omildan biri.", 'Expectations are one of the five demand shifters.') },
  ], 'new'),
];

const base = { D: marketD, S: marketS };

export const graphTasks: Question[] = [
  {
    id: "ch04.graph.hot-summer",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: tr("Talab siljishi", 'A shift in demand'),
    prompt: tr("Figure 10: issiq yoz muzqaymoqqa talabni oshirdi. Grafikda shuni ko'rsating: muvozanat narxi **kamida $5** bo'lsin, taklif joyida qolsin.", 'Figure 10: a hot summer raised the demand for ice cream. Show it on the graph: make the equilibrium price **at least $5**, keeping supply in place.'),
    graph: { ...supplyShifts, title: tr("Issiq yoz", 'A hot summer') },
    check: (s) => {
      if (Math.abs(s.S.c - base.S.c) > 1e-6) return { ok: false, msg: tr("Ob-havo sotuvchilarning xarajatini o'zgartirmaydi — taklifni joyida qoldiring (Reset).", "The weather doesn't change sellers' costs — leave supply in place (Reset).") };
      const e = equilibrium(s.D, s.S);
      if (qd(s.D, 4) <= 7) return { ok: false, msg: tr("Talabni **o'ngga** siljiting: issiq kunda har qanday narxda ko'proq muzqaymoq xohlanadi.", 'Shift demand **right**: on a hot day people want more ice cream at any price.') };
      if (e.P < 5 - 0.02) return { ok: false, msg: tr(`Narx hozircha $${e.P.toFixed(2)} — yana o'ngga.`, `The price is only $${e.P.toFixed(2)} so far — shift further right.`) };
      return { ok: true, msg: tr(`To'g'ri: P $4 → $${e.P.toFixed(2)}, Q 7 → ${e.Q.toFixed(1)}. Narx oshgani uchun sotuvchilar **taklif egri chizig'i bo'ylab** yuqoriga ko'tarildi.`, `Right: P $4 → $${e.P.toFixed(2)}, Q 7 → ${e.Q.toFixed(1)}. Because the price rose, sellers moved up **along the supply curve**.`) };
    },
  },
  {
    id: "ch04.graph.sugar",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: tr("Taklif siljishi", 'A shift in supply'),
    prompt: tr("Figure 11: bo'ron shakarni qimmatlashtirdi. Muvozanat miqdorini **4 yoki undan kamga** tushiring, talabga tegmang.", 'Figure 11: a hurricane made sugar pricier. Bring the equilibrium quantity down to **4 or less**, without touching demand.'),
    graph: { ...supplyShifts, title: tr("Shakar qimmatladi", 'Sugar got pricier') },
    check: (s) => {
      if (Math.abs(s.D.a - base.D.a) > 1e-6) return { ok: false, msg: tr("Shakar narxi xaridorlarning xohishini bevosita o'zgartirmaydi — talabni joyida qoldiring.", "The price of sugar doesn't directly change what buyers want — leave demand in place.") };
      if (qs(s.S, 4) >= 7) return { ok: false, msg: tr("Xarajat oshsa, taklif **chapga** siljiydi.", 'When costs rise, supply shifts **left**.') };
      const e = equilibrium(s.D, s.S);
      if (e.Q > 4.05) return { ok: false, msg: tr(`Miqdor hozircha ${e.Q.toFixed(1)} — taklifni yana chapga suring.`, `The quantity is ${e.Q.toFixed(1)} so far — push supply further left.`) };
      return { ok: true, msg: tr(`Ha: P → $${e.P.toFixed(2)}, Q → ${e.Q.toFixed(1)}. Narx oshdi, sotilgan miqdor kamaydi.`, `Yes: P → $${e.P.toFixed(2)}, Q → ${e.Q.toFixed(1)}. The price rose and the quantity sold fell.`) };
    },
  },
  {
    id: "ch04.graph.ambiguous",
    chapter: C,
    kind: "graph",
    source: "new",
    topic: tr("Ikkala siljish", 'Both shift'),
    prompt: tr("Figure 12(b) ni yarating: talab **ozgina** o'ngga, taklif **ko'proq** chapga siljisin — natijada narx oshsin, lekin miqdor **kamaysin**.", 'Build Figure 12(b): shift demand **slightly** right and supply **more** to the left — so that the price rises but the quantity **falls**.'),
    graph: { ...supplyShifts, title: tr("Talab ↑, taklif ↓", 'Demand ↑, supply ↓') },
    check: (s) => {
      const dUp = qd(s.D, 4) > 7 + 1e-6;
      const sDown = qs(s.S, 4) < 7 - 1e-6;
      const e = equilibrium(s.D, s.S);
      if (!dUp || !sDown) return { ok: false, msg: tr("Ikkala egri chiziqni siljiting: talab o'ngga, taklif chapga.", 'Shift both curves: demand right, supply left.') };
      if (e.Q >= 7) return { ok: false, msg: tr(`Miqdor ${e.Q.toFixed(1)} — bu panel (a). Taklif siljishini kattaroq qiling.`, `Quantity ${e.Q.toFixed(1)} — that is panel (a). Make the supply shift larger.`) };
      return { ok: true, msg: tr(`Zo'r: narx $${e.P.toFixed(2)} (oshdi), miqdor ${e.Q.toFixed(1)} (kamaydi). Miqdor yo'nalishi siljishlarning nisbiy kattaligiga bog'liq — shuning uchun “ambiguous”.`, `Great: price $${e.P.toFixed(2)} (up), quantity ${e.Q.toFixed(1)} (down). The direction of the quantity depends on the relative size of the shifts — that is why it is “ambiguous.”`) };
    },
  },
];

export const questions: Question[] = [...quickQuiz, ...Object.values(checks), ...practice, ...graphTasks];
