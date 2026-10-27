import type { Term } from '../../types';
import { tr } from '../../../lib/lang';

const t = (id: string, en: string, uz: string, defEn: string, defUz: string, example?: string): Term => ({ id, chapter: 3, en, uz, defEn, defUz, example });

export const terms: Term[] = [
  t("absolute-advantage", "absolute advantage", "mutlaq ustunlik", "the ability to produce a good using fewer inputs than another producer",
    tr("Tovarni **kamroq resurs** (masalan, vaqt) sarflab ishlab chiqarish qobiliyati. Bir kishi **ikkala** tovarda ham mutlaq ustun bo'lishi mumkin. Savdo yutug'i mutlaq emas, **qiyosiy** ustunlikka asoslanadi.", 'The ability to produce a good using **fewer inputs** (time, say). One person can have an absolute advantage in **both** goods. The gains from trade rest on **comparative**, not absolute, advantage.'),
    tr("Ruby go'shtni 20 daqiqada (Frank 60), kartoshkani 10 daqiqada (Frank 15) ishlab chiqaradi — ikkalasida ham mutlaq ustun.", 'Ruby produces meat in 20 minutes (Frank 60) and potatoes in 10 minutes (Frank 15) — she has an absolute advantage in both.')),
  t("comparative-advantage", "comparative advantage", "qiyosiy ustunlik", "the ability to produce a good at a lower opportunity cost than another producer",
    tr("Tovarni **kichikroq imkoniyat xarajati** bilan ishlab chiqarish qobiliyati. Bir tovarning OC i ikkinchisining teskarisi bo'lgani uchun hech kim **ikkala** tovarda qiyosiy ustun bo'la olmaydi (OC lar teng bo'lmasa, har kimda bittadan bor). Ixtisoslashuv va savdoning **harakatlantiruvchi kuchi**.", "The ability to produce a good at a **lower opportunity cost**. Because the OC of one good is the inverse of the other's, nobody can have a comparative advantage in **both** goods (unless the OCs are equal, everyone has one). It is the **driving force** behind specialization and trade."),
    tr("1 oz kartoshka Frankka ¼ oz go'sht, Ruby'ga ½ oz turadi → Frank kartoshkada, Ruby go'shtda qiyosiy ustun.", '1 oz of potatoes costs Frank ¼ oz of meat and Ruby ½ oz → Frank has the comparative advantage in potatoes, Ruby in meat.')),
  t("imports", "imports", "import", "goods produced abroad and sold domestically",
    tr("Chet elda ishlab chiqarilib, mamlakat ichida sotiladigan tovarlar. Mamlakat odatda **boshqa davlatlar qiyosiy ustun** bo'lgan tovarlarni import qiladi.", 'Goods produced abroad and sold at home. A country usually imports the goods in which **other countries have a comparative advantage**.'),
    tr("O'zbekiston uchun: avtomobil ehtiyot qismlari, smartfonlar, dori-darmonlar.", 'For Uzbekistan: auto parts, smartphones, medicines.')),
  t("exports", "exports", "eksport", "goods produced domestically and sold abroad",
    tr("Mamlakatda ishlab chiqarilib, chet elda sotiladigan tovarlar — mamlakat **qiyosiy ustun** bo'lgan tovarlar.", 'Goods produced at home and sold abroad — goods in which the country has a **comparative advantage**.'),
    tr("O'zbekiston uchun: oltin, paxta tolasi va ip-kalava, meva-sabzavotlar.", 'For Uzbekistan: gold, cotton fiber and yarn, fruit and vegetables.')),
  t("gains-from-trade", "gains from trade", "savdodan yutuq", "the increase in consumption that specialization and trade make possible",
    tr("Har kim **qiyosiy ustun** bo'lgan ishga ixtisoslashsa, umumiy ishlab chiqarish oshadi (pirog kattalashadi) va har ikki tomon savdosiz **erishib bo'lmaydigan** — o'z PPF idan tashqaridagi — nuqtada iste'mol qiladi.", 'When everyone specializes in what they have a **comparative advantage** in, total production rises (the pie grows) and both sides consume at a point **unattainable** without trade — outside their own PPF.'),
    tr("Frank: 4 go'sht + 16 kartoshka → 5 + 17; Ruby: 12 + 24 → 13 + 27. Jami kartoshka 40 → 44, go'sht 16 → 18.", 'Frank: 4 meat + 16 potatoes → 5 + 17; Ruby: 12 + 24 → 13 + 27. Total potatoes 40 → 44, meat 16 → 18.')),
  t("terms-of-trade", "price of the trade", "savdo narxi (almashuv nisbati)", "the rate at which two goods are exchanged; for both to gain it must lie between the two parties' opportunity costs",
    tr("Ikki tomon ham yutishi uchun savdo narxi ularning **imkoniyat xarajatlari orasida** bo'lishi kerak. Har biri tovarni o'z OC idan arzonroqqa sotib oladi.", 'For both sides to gain, the price must lie **between their opportunity costs**. Each buys the good for less than its own OC.'),
    tr("Go'sht narxi 3 oz kartoshka — Ruby OC (2) va Frank OC (4) orasida. Narx 2 dan past yoki 4 dan yuqori bo'lsa, savdo bo'lmaydi.", "A meat price of 3 oz of potatoes lies between Ruby's OC (2) and Frank's (4). Below 2 or above 4 there would be no trade.")),
  t("specialization", "specialization", "ixtisoslashuv", "concentrating production on the activities in which one has a comparative advantage",
    tr("Har kim (yoki har mamlakat) **qiyosiy ustun** bo'lgan faoliyatga e'tibor qaratadi va qolganini savdo orqali oladi. Adam Smit: tikuvchi o'z poyabzalini tikmaydi, poyabzalchi o'z kiyimini tikmaydi.", 'Each person (or country) focuses on the activity in which it has a **comparative advantage** and gets the rest through trade. Adam Smith: the tailor does not make his own shoes, and the shoemaker does not make his own clothes.'),
    tr("Naomi Osaka reklama suratga oladi, maysazorni Hari o'radi.", 'Naomi Osaka films a commercial; Hari mows the lawn.')),
];
