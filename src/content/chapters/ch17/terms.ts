import type { Term } from '../../types';
import { tr } from '../../../lib/lang';

const t = (id: string, en: string, uz: string, defEn: string, defUz: string, example?: string): Term => ({ id, chapter: 17, en, uz, defEn, defUz, example });

export const terms: Term[] = [
  t("imperfect-competition", "imperfect competition", "nomukammal raqobat", "market structures that lie between the polar cases of perfect competition and monopoly",
    tr("Firma raqobatga duch keladi, lekin price taker emas; biroz bozor hokimiyati bor, lekin monopolist emas. Ikki turi: **oligopoly** va **monopolistic competition**.", "A firm faces competition but isn't a price taker; it has some market power but isn't a monopolist. Two types: **oligopoly** and **monopolistic competition**."),
    tr("Ko'p real bozorlar — kitob, avtomobil, restoranlar.", 'Many real markets — books, cars, restaurants.')),
  t("oligopoly", "oligopoly", "oligopoliya", "a market structure in which only a few sellers offer similar or identical products",
    tr("Bir necha sotuvchi; ular orasidagi **strategik o'zaro ta'sir** muhim — har biri raqiblar nima qilayotgani va qanday javob berishini o'ylaydi (18-bob).", "A few sellers; the **strategic interaction** among them matters — each thinks about what rivals are doing and how they'll respond (Chapter 18)."),
    tr("Samolyot ishlab chiqarish, tamaki, avtomobil ijarasi, ekspress yetkazib berish — to'rt firma konsentratsiyasi 90%+.", 'Aircraft manufacturing, tobacco, car rental, express delivery — four-firm concentration of 90%+.')),
  t("concentration-ratio", "concentration ratio", "konsentratsiya koeffitsienti", "the percentage of total output in the market supplied by the four largest firms",
    tr("Bozordagi eng yirik **to'rt firma** ulushi. AQShda ko'p sohalarda 50% dan past; 90%+ bo'lsa — oligopoliya.", 'The share of the **four largest firms** in a market. In the U.S., below 50% in most industries; at 90%+ — oligopoly.'),
    tr("Ekspress yetkazib berish (FedEx, UPS…).", 'Express delivery (FedEx, UPS…).')),
  t("monopolistic-competition", "monopolistic competition", "monopolistik raqobat", "a market structure in which many firms sell products that are similar but not identical",
    tr("Uch xususiyat: (1) **ko'p sotuvchi**; (2) **mahsulot farqlanishi** — pastga qaragan talab; (3) **erkin kirish-chiqish** — uzoq muddatda foyda 0. Natija: P > MC (markup) va **excess capacity**.", 'Three features: (1) **many sellers**; (2) **product differentiation** — downward-sloping demand; (3) **free entry and exit** — zero profit in the long run. Result: P > MC (a markup) and **excess capacity**.'),
    tr("Kitoblar, video o'yinlar, restoranlar, piano darslari, pechene, kiyim.", 'Books, video games, restaurants, piano lessons, cookies, clothing.')),
  t("product-differentiation", "product differentiation", "mahsulot farqlanishi", "each firm offers a product that is at least slightly different from those of other firms",
    tr("Har firmaning mahsuloti boshqalardan hech bo'lmasa biroz farq qiladi → firma price taker emas, **pastga qaragan** talab egri chizig'iga duch keladi.", "Each firm's product is at least slightly different from the others' → the firm isn't a price taker and faces a **downward-sloping** demand curve."),
    tr("Kola brendlari, lab bo'yog'i ranglari, restoran menyulari.", 'Cola brands, lipstick colors, restaurant menus.')),
  t("excess-capacity", "excess capacity", "ortiqcha quvvat", "producing less than the efficient scale, on the downward-sloping part of the average-total-cost curve",
    tr("Monopolistik raqobatchi uzoq muddatda ATC ning **tushayotgan** qismida ishlaydi: ko'proq ishlab chiqarib ATC ni kamaytirishi mumkin edi, lekin buning uchun barcha birliklar narxini tushirishi kerak.", 'In the long run a monopolistic competitor operates on the **falling** part of ATC: it could lower ATC by producing more, but it would have to cut the price on all units.'),
    "Problem 7: Q = 5, efficient scale ≈ 7.07."),
  t("markup", "markup over marginal cost", "marjinal xarajat ustiga ustama", "the amount by which price exceeds marginal cost",
    tr("Monopolistik raqobatchida **P > MC** (nol foydada ham): ATC tushayotgan joyda MC < ATC = P. Shuning uchun u har doim qo'shimcha mijozni xohlaydi — “bayram tabriknomalari” hazili.", 'For a monopolistic competitor **P > MC** (even at zero profit): where ATC is falling, MC < ATC = P. So it always wants an extra customer — the “holiday cards” joke.'),
    "Problem 7: P = $15, MC = $10."),
  t("product-variety-externality", "product-variety externality", "mahsulot xilma-xilligi tashqi effekti", "the positive externality on consumers from the introduction of a new product",
    tr("Yangi firma kirsa, iste'molchilar yangi mahsulotdan foyda ko'radi (CS oshadi) — kiruvchi buni hisobga olmaydi → **ijobiy** tashqi effekt (kirish kam bo'lishi mumkin).", 'When a new firm enters, consumers benefit from the new product (CS rises) — the entrant ignores this → a **positive** externality (entry may be too low).'),
    tr("Yangi restoran — yangi tanlov.", 'A new restaurant — a new choice.')),
  t("business-stealing-externality", "business-stealing externality", "mijoz o'g'irlash tashqi effekti", "the negative externality on existing firms from the entry of a new firm",
    tr("Yangi firma mavjud firmalardan mijoz va foydani oladi → **salbiy** tashqi effekt (kirish ko'p bo'lishi mumkin). Ikkala effekt tufayli firmalar soni haddan tashqari ko'p ham, kam ham bo'lishi mumkin.", 'A new firm takes customers and profit from existing firms → a **negative** externality (entry may be too high). Because of both effects, there may be too many or too few firms.'),
    tr("Yangi qahvaxona qo'shni qahvaxonaning mijozlarini oladi.", 'A new coffee shop takes customers from the coffee shop next door.')),
  t("brand-names", "brand names", "brend nomlari", "widely recognized names that identify a firm's products",
    tr("Tanqidchilar: brend iste'molchini mavjud bo'lmagan farqlarga ishontiradi (Chamberlin trademarklarni himoya qilmaslikni taklif qilgan). Himoyachilar: (1) sifat haqida **axborot**; (2) firmaga sifatni saqlash **rag'bati**.", "Critics: brands make consumers believe in differences that don't exist (Chamberlin proposed not protecting trademarks). Defenders: (1) **information** about quality; (2) an **incentive** for firms to maintain quality."),
    tr("Notanish shaharda McDonald's — bir xil sifat kafolati.", "A McDonald's in an unfamiliar town — a guarantee of consistent quality.")),
];
