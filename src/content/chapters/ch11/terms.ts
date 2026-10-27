import type { Term } from '../../types';
import { tr } from '../../../lib/lang';

const t = (id: string, en: string, uz: string, defEn: string, defUz: string, example?: string): Term => ({ id, chapter: 11, en, uz, defEn, defUz, example });

export const terms: Term[] = [
  t("excludability", "excludability", "chetlatish mumkinligi", "the property of a good whereby a person can be prevented from using it",
    tr("Odamni tovardan foydalanishdan **to'xtatish mumkin** bo'lsa — excludable. Mumkin bo'lmasa (osmondagi mushakbozlik) — not excludable.", 'A good is excludable if people **can be prevented** from using it. If not (fireworks in the sky) — not excludable.'),
    tr("Muzqaymoq — excludable (pul to'lamasangiz bermaydi); milliy mudofaa — yo'q.", 'Ice cream is excludable (no pay, no ice cream); national defense is not.')),
  t("rivalry", "rivalry in consumption", "iste'molda raqobatlilik", "the property of a good whereby one person's use diminishes other people's use",
    tr("Bir kishining foydalanishi **boshqalarning foydalanishini kamaytirsa** — rival. Kamaytirmasa (sirena ovozi) — not rival.", "A good is rival if one person's use **diminishes others' use**. If it doesn't (the sound of a siren) — not rival."),
    tr("Siz yegan pizza bo'lagini boshqa odam yeya olmaydi — rival.", "The slice of pizza you eat can't be eaten by someone else — rival.")),
  t("private-goods", "private goods", "xususiy tovarlar", "goods that are both excludable and rival in consumption",
    tr("**Excludable + rival**. Iqtisodiyotdagi ko'p tovarlar shunday; 4–9-boblardagi talab-taklif tahlili aynan ularga tegishli — bozor ular uchun yaxshi ishlaydi.", '**Excludable + rival**. Most goods in the economy are like this; the supply-and-demand analysis of Chapters 4–9 applies to them — markets work well for them.'),
    tr("Muzqaymoq, kiyim, non.", 'Ice cream, clothing, bread.')),
  t("public-goods", "public goods", "jamoat tovarlari", "goods that are neither excludable nor rival in consumption",
    tr("**Not excludable + not rival**. To'lamagan odamni chetlatib bo'lmagani uchun **free-rider** muammosi: bozor ularni kam yoki umuman ta'minlamaydi; davlat soliq hisobidan ta'minlashi mumkin.", "**Not excludable + not rival**. Because nonpayers can't be excluded, there is a **free-rider** problem: the market provides them in too small a quantity or not at all; the government can provide them out of taxes."),
    tr("Tornado sirenasi, milliy mudofaa, fundamental bilim, shahar mushakbozligi.", "A tornado siren, national defense, basic knowledge, a town's fireworks display.")),
  t("common-resources", "common resources", "umumiy resurslar", "goods that are rival in consumption but not excludable",
    tr("**Rival + not excludable**. Bepul, lekin har bir foydalanuvchi boshqalarga zarar qiladi → **haddan tashqari ko'p ishlatiladi** (Tragedy of the Commons).", '**Rival + not excludable**. Free, but each user harms others → **overused** (the Tragedy of the Commons).'),
    tr("Okeandagi baliq, toza havo, tirband yo'l, yovvoyi fillar.", 'Fish in the ocean, clean air, congested roads, wild elephants.')),
  t("club-goods", "club goods", "klub tovarlari", "goods that are excludable but not rival in consumption",
    tr("**Excludable + not rival**. Kitobda keyinroq ko'rsatiladi: ular — **tabiiy monopoliya** turi (16-bob).", '**Excludable + not rival**. As the book shows later, they are a kind of **natural monopoly** (Chapter 16).'),
    tr("Sun'iy yo'ldosh TV: to'lamasangiz uziladi, lekin signal boshqalarga kamaymaydi.", "Satellite TV: if you don't pay you're cut off, but the signal isn't diminished for others.")),
  t("free-rider", "free rider", "tekinxo'r (bepul foydalanuvchi)", "a person who receives the benefit of a good but avoids paying for it",
    tr("Tovar foydasini oladi, lekin to'lamaydi. Jamoat tovarlarida chetlatib bo'lmagani uchun ko'pchilik shunday qiladi va xususiy bozor tovarni ta'minlamaydi — bu ijobiy tashqi effektning bir ko'rinishi.", "Receives the benefit of a good but doesn't pay for it. With public goods, since no one can be excluded, many people do this and the private market fails to provide the good — a form of positive externality."),
    tr("Mushakbozlikni chiptasiz tomosha qilgan Smalltown aholisi; jamoat TV sini ko'rib, xayriya qilmaydigan Fredo.", "Smalltown residents who watch the fireworks without a ticket; Fredo, who watches public TV but doesn't donate.")),
  t("cost-benefit-analysis", "cost–benefit analysis", "xarajat–foyda tahlili", "a study that compares the costs and benefits to society of providing a public good",
    tr("Jamoat tovarining jamiyat uchun jami foydasi va xarajatini solishtirish. Qiyin, chunki **narx signali yo'q**: so'rovnomada odamlar foydani bo'rttiradi yoki kamaytiradi.", 'Comparing the total costs and benefits of a public good to society. It is hard because there is **no price signal**: in surveys people exaggerate or understate the benefits.'),
    tr("Svetofor: xavf 0.5 foiz punktga kamayadi × hayot qiymati $10 mln = $50,000 > $10,000 xarajat.", 'A traffic light: risk falls by 0.5 percentage points × value of a life $10 million = $50,000 > $10,000 cost.')),
  t("tragedy-of-the-commons", "Tragedy of the Commons", "umumiy mulk fojiasi", "a parable that illustrates why common resources are used more than is desirable from the standpoint of society as a whole",
    tr("O'rta asr shaharchasidagi umumiy yaylov: har oila o'z qo'ylari boshqalarga zarar qilishini (salbiy tashqi effekt) e'tiborsiz qoldiradi → qo'y ko'payib, yaylov yaroqsiz bo'ladi. Yechimlar: cheklov, soliq, ruxsatnoma auksioni yoki yerni xususiylashtirish (enclosure movement).", 'The common pasture of a medieval town: each family ignores the harm its sheep do to others (a negative externality) → the flock grows and the land becomes barren. Solutions: limits, taxes, auctioned permits, or privatizing the land (the enclosure movement).'),
    tr("Aristotel: “Ko'pchilikka tegishli narsaga eng kam g'amxo'rlik qilinadi.”", 'Aristotle: “What is common to many is taken least care of.”')),
  t("value-of-life", "value of a statistical life", "hayotning statistik qiymati", "the implicit dollar value of a human life used in cost–benefit analysis, estimated from wage premiums for risky jobs",
    tr("Xarajat–foyda tahlilida hayotga beriladigan pul qiymati. Topgan daromad bo'yicha emas (ishlamaydiganning hayoti nol bo'lib qoladi), balki odamlar **xavf uchun qancha qo'shimcha maosh talab qilishi** bo'yicha baholanadi: ≈ **$10 mln**.", "The money value placed on a life in cost–benefit analysis. It is estimated not from lifetime earnings (which would make a nonworker's life worth zero) but from **how much extra pay people demand for risk**: ≈ **$10 million**."),
    tr("Baland qavatli qurilish ishchilari ofis xodimlaridan xavfliroq ish uchun ko'proq maosh oladi.", 'High-rise construction workers earn more than office workers for riskier work.')),
];
