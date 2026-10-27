import type { Term } from '../../types';

const t = (id: string, en: string, uz: string, defEn: string, defUz: string, example?: string): Term => ({ id, chapter: 19, en, uz, defEn, defUz, example });

export const terms: Term[] = [
  t("derived-demand", "derived demand", "hosila talab", "a firm's demand for a factor of production that is derived from its decision to supply a good in another market",
    "Resursga talab — firmaning boshqa bozorda tovar taklif qilish qaroridan **kelib chiqadi**.",
    "Dasturchilarga talab — dasturiy ta'minot taklifiga; benzin quyuvchilarga talab — benzin taklifiga bog'liq."),
  t("marginal-product-of-labor", "marginal product of labor (MPL)", "mehnatning marjinal mahsuloti", "the increase in the amount of output from an additional unit of labor",
    "Qo'shimcha bir ishchi qo'shgan mahsulot. Kamayuvchi: birinchi teruvchilar pastdagi olmalarni teradi, keyingilari narvonda balandga chiqadi.",
    "Table 1: 2-ishchi 180 − 100 = 80 bushel."),
  t("value-of-marginal-product", "value of the marginal product (VMP)", "marjinal mahsulot qiymati", "the marginal product of an input times the price of the output",
    "VMP = P × MP (marginal revenue product). Raqobatchi firma VMP = resurs narxi bo'lguncha yollaydi: **VMPL egri chizig'i — mehnatga talab egri chizig'i**. P × MPL = W ⇔ P = W/MPL = MC — xuddi P = MC qarori (input demand va output supply — bir tanganing ikki tomoni).",
    "Olma $10, 2-ishchi 80 bushel → VMP $800."),
  t("labor-demand-shifters", "labor-demand shifters", "mehnatga talabni siljituvchi omillar", "events that change the value of the marginal product of labor at any given level of employment",
    "(1) **Mahsulot narxi** — VMP ni o'zgartiradi; (2) **texnologiya** — odatda labor-augmenting (MP ↑, talab o'ngga), ba'zan labor-saving (arzon robot — talab chapga); (3) **boshqa omillar taklifi** (narvonlar kam → teruvchilar MP i past).",
    "1960–2020: soatlik mahsulot 236% oshgan, real ish haqi 201% oshgan, bandlik ~2 barobar."),
  t("labor-supply-shifters", "labor-supply shifters", "mehnat taklifini siljituvchi omillar", "events that change the amount people want to work at a given wage",
    "(1) **Didlar** (1950-yil ayollarning 34%, 2020-yil 56% ishlagan yoki ish izlagan); (2) **muqobil imkoniyatlar** (nok teruvchilar maoshi oshsa, olma teruvchilar kamayadi); (3) **immigratsiya**.",
    "Mavsumiy ishchilar kuzgi hosilga keladi."),
  t("work-leisure-tradeoff", "work–leisure trade-off", "ish va dam olish o'rtasidagi tanlov", "the trade-off behind the labor-supply curve: an hour of leisure costs an hour of wages",
    "Bir soat dam olishning imkoniyat xarajati — bir soatlik ish haqi. Maosh oshsa: **substitution effect** (dam olish qimmatlashdi → ko'proq ishlash) va **income effect** (boyroqman → ko'proq dam olish). Substitution ustun bo'lsa, taklif yuqoriga qaragan; aks holda — orqaga egilgan (22-bob).",
    "Soatiga $20 dan $25 ga oshgan maosh."),
  t("capital", "capital", "kapital", "the equipment and structures used to produce goods and services",
    "O'tmishda ishlab chiqarilib, hozir yangi tovarlar ishlab chiqarishda ishlatilayotgan jihoz va inshootlar zaxirasi. Uning **ijara narxi** (cheklangan muddatga foydalanish) VMP ga teng; **sotib olish narxi** hozirgi va kutilgan kelajakdagi VMP ga bog'liq.",
    "Olma firmasi uchun: narvonlar, yuk mashinalari, omborlar va hatto daraxtlarning o'zi."),
  t("neoclassical-distribution", "neoclassical theory of distribution", "taqsimotning neoklassik nazariyasi", "the theory that each factor of production earns the value of its marginal contribution to production",
    "Har bir omilga to'lov uning talab va taklifiga, talab esa marjinal unumdorlikka bog'liq: muvozanatda mehnat, yer va kapital har biri **o'z VMP i** ni oladi. Bir omil taklifi o'zgarsa — boshqa omillar daromadi ham o'zgaradi.",
    "Dasturchi benzin quyuvchidan ko'p topadi, chunki u bozorda qimmatroq baholanadigan mahsulot yaratadi."),
];
