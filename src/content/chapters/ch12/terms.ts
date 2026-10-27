import type { Term } from '../../types';

const t = (id: string, en: string, uz: string, defEn: string, defUz: string, example?: string): Term => ({ id, chapter: 12, en, uz, defEn, defUz, example });

export const terms: Term[] = [
  t("risk-aversion", "risk aversion", "xavfdan qochish", "a dislike of uncertainty",
    "Noaniqlikni yoqtirmaslik: o'rtacha qiymati bir xil bo'lsa ham, **aniq** natijani tavakkaldan afzal ko'rish. Sug'urtaga talabning asosi.",
    "Aniq $100,000 yoki tanga tashlab $50,000/$150,000 — aniqini tanlasangiz, siz risk averse'siz."),
  t("moral-hazard", "moral hazard", "ma'naviy xavf (axloqiy tavakkal)", "the tendency of a person who is imperfectly monitored to engage in dishonest or otherwise undesirable behavior",
    "Kuzatuv to'liq bo'lmaganda odamning nomaqbul xatti-harakatga moyilligi. Sug'urtada: xarajatni boshqa to'lagani uchun bemor va shifokorlar ortiqcha xizmatdan foydalanadi. Kurash usullari: **co-pay**, deductible, kirish qoidalari.",
    "Burun oqsa ham shifokorga borish; sug'urta to'lagani uchun shubhali tahlillar buyurish."),
  t("adverse-selection", "adverse selection", "salbiy tanlov", "the tendency for the mix of unobserved attributes to become undesirable from the standpoint of an uninformed party",
    "Mijozlar o'z xususiyatlarini (yashirin kasallik) biladi, sug'urtachi bilmaydi → sug'urtani ko'proq kasallar oladi, narx oshadi, sog'lomlar chiqib ketadi. Eng yomon holat — **death spiral**: bozor yo'qolishi mumkin.",
    "Obamacare oldindan mavjud kasalliklar uchun qimmat narxni taqiqladi va shuning uchun hammani sug'urta olishga majburladi (mandate)."),
  t("death-spiral", "death spiral", "o'lim spirali (sug'urtada)", "a cycle in which rising insurance prices drive the healthiest customers out, raising average costs and prices further",
    "Hammaga bir xil narx → eng sog'lomlar chiqadi → pool kasalroq → narx oshadi → keyingi sog'lomlar chiqadi... Oxirida bozor yo'qolishi mumkin. Yechim — **mandate** (hamma sotib olishi shart) yoki subsidiyalar.",
    "Problem 4: A–E turlari, narx $3,700 → $4,700 → $5,200 → $5,700, oxirida faqat E qoladi."),
  t("premium", "insurance premium", "sug'urta badali (premium)", "the fee a person pays an insurance company in exchange for it accepting all or part of a risk",
    "Xavfga uchragan odam sug'urta kompaniyasiga to'laydigan haq; kompaniya evaziga xarajatning hammasini yoki bir qismini o'z zimmasiga oladi.",
    "2% kasallanish × $30,000 davolash = $600 adolatli premium."),
  t("single-payer", "single-payer system", "yagona to'lovchi tizimi", "a healthcare system in which one entity — the government's health service — pays all the bills, financed mostly by taxes",
    "Hukumat boshqaradigan va asosan soliqlar hisobidan moliyalanadigan tizim: barcha hisoblarni bitta tashkilot to'laydi. Kanada, Angliya. AQShda Medicare 65 yoshdan kattalarga shunday qiladi.",
    "Tarafdorlar: ma'muriy xarajat kam, narx bo'yicha savdolashish kuchli. Tanqidchilar: uzoq navbatlar, innovatsiya sekinlashadi."),
  t("baumol-cost-disease", "Baumol's cost disease", "Baumol xarajat kasalligi", "rising costs and prices in sectors with low productivity growth when overall productivity and wages are rising",
    "Shaxsiy xizmatlarda (shifokor, o'qituvchi, sartarosh) unumdorlik deyarli o'smaydi, lekin iqtisodiyotdagi maoshlar oshgani uchun bu sohada ham maosh oshishi kerak → xizmat narxlari o'sadi. Talab inelastik bo'lsa, xarajat ham o'sadi.",
    "Jonli konsert, oliy ta'lim, sog'liqni saqlash qimmatlashib bormoqda."),
  t("healthcare-rules", "financing, access, and payment rules", "moliyalash, kirish va to'lov qoidalari", "the three sets of rules needed when an insurer stands between patients and providers",
    "Sug'urtachi bemor va shifokor orasida turganda (Figure 1b) kerak bo'ladigan qoidalar: **financing** — kim qancha to'laydi (soliq yoki premium); **access** — bemor qachon xizmat oladi (moral hazardni cheklash); **payment** — sug'urtachi qaysi muolajaga qancha to'laydi.",
    "Yiliga bitta tekshiruv, mutaxassisga faqat yo'llanma bilan — access qoidalari."),
];
