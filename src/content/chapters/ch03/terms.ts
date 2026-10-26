import type { Term } from '../../types';

const t = (id: string, en: string, uz: string, defEn: string, defUz: string, example?: string): Term => ({ id, chapter: 3, en, uz, defEn, defUz, example });

export const terms: Term[] = [
  t("absolute-advantage", "absolute advantage", "mutlaq ustunlik", "the ability to produce a good using fewer inputs than another producer",
    "Tovarni **kamroq resurs** (masalan, vaqt) sarflab ishlab chiqarish qobiliyati. Bir kishi **ikkala** tovarda ham mutlaq ustun bo'lishi mumkin. Savdo yutug'i mutlaq emas, **qiyosiy** ustunlikka asoslanadi.",
    "Ruby go'shtni 20 daqiqada (Frank 60), kartoshkani 10 daqiqada (Frank 15) ishlab chiqaradi — ikkalasida ham mutlaq ustun."),
  t("comparative-advantage", "comparative advantage", "qiyosiy ustunlik", "the ability to produce a good at a lower opportunity cost than another producer",
    "Tovarni **kichikroq imkoniyat xarajati** bilan ishlab chiqarish qobiliyati. Bir tovarning OC i ikkinchisining teskarisi bo'lgani uchun hech kim **ikkala** tovarda qiyosiy ustun bo'la olmaydi (OC lar teng bo'lmasa, har kimda bittadan bor). Ixtisoslashuv va savdoning **harakatlantiruvchi kuchi**.",
    "1 oz kartoshka Frankka ¼ oz go'sht, Ruby'ga ½ oz turadi → Frank kartoshkada, Ruby go'shtda qiyosiy ustun."),
  t("imports", "imports", "import", "goods produced abroad and sold domestically",
    "Chet elda ishlab chiqarilib, mamlakat ichida sotiladigan tovarlar. Mamlakat odatda **boshqa davlatlar qiyosiy ustun** bo'lgan tovarlarni import qiladi.",
    "O'zbekiston uchun: avtomobil ehtiyot qismlari, smartfonlar, dori-darmonlar."),
  t("exports", "exports", "eksport", "goods produced domestically and sold abroad",
    "Mamlakatda ishlab chiqarilib, chet elda sotiladigan tovarlar — mamlakat **qiyosiy ustun** bo'lgan tovarlar.",
    "O'zbekiston uchun: oltin, paxta tolasi va ip-kalava, meva-sabzavotlar."),
  t("gains-from-trade", "gains from trade", "savdodan yutuq", "the increase in consumption that specialization and trade make possible",
    "Har kim **qiyosiy ustun** bo'lgan ishga ixtisoslashsa, umumiy ishlab chiqarish oshadi (pirog kattalashadi) va har ikki tomon savdosiz **erishib bo'lmaydigan** — o'z PPF idan tashqaridagi — nuqtada iste'mol qiladi.",
    "Frank: 4 go'sht + 16 kartoshka → 5 + 17; Ruby: 12 + 24 → 13 + 27. Jami kartoshka 40 → 44, go'sht 16 → 18."),
  t("terms-of-trade", "price of the trade", "savdo narxi (almashuv nisbati)", "the rate at which two goods are exchanged; for both to gain it must lie between the two parties' opportunity costs",
    "Ikki tomon ham yutishi uchun savdo narxi ularning **imkoniyat xarajatlari orasida** bo'lishi kerak. Har biri tovarni o'z OC idan arzonroqqa sotib oladi.",
    "Go'sht narxi 3 oz kartoshka — Ruby OC (2) va Frank OC (4) orasida. Narx 2 dan past yoki 4 dan yuqori bo'lsa, savdo bo'lmaydi."),
  t("specialization", "specialization", "ixtisoslashuv", "concentrating production on the activities in which one has a comparative advantage",
    "Har kim (yoki har mamlakat) **qiyosiy ustun** bo'lgan faoliyatga e'tibor qaratadi va qolganini savdo orqali oladi. Adam Smit: tikuvchi o'z poyabzalini tikmaydi, poyabzalchi o'z kiyimini tikmaydi.",
    "Naomi Osaka reklama suratga oladi, maysazorni Hari o'radi."),
];
