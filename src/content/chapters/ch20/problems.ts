import type { Problem } from '../../types';

const C = 20;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch20.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch20.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "Why are roofers paid more than other workers with similar amounts of education?", ["Qatron hidi va doimiy baxtsiz hodisa xavfi — yoqimsiz ish → taklif kam.", "Yuqori ish haqi — **compensating differential**."], "A compensating differential for unpleasant, dangerous work."),
  r(2, "In what sense is education a type of capital?", ["Kapital — o'zi ishlab chiqarilgan omil; ta'lim — kelajak unumdorligini oshirish uchun resurs sarflash.", "Lekin ma'lum shaxsga bog'langan → **human capital**."], "Education is an investment of resources that raises future productivity, embodied in a person.", "skills"),
  r(3, "How might education raise a worker's wage without raising the worker's productivity?", ["**Signaling**: qobiliyatlilar uchun diplom olish osonroq → diplom qobiliyat signali.", "Firmalar diplomlilarga ko'proq to'laydi, garchi ta'lim unumdorlikni oshirmagan bo'lsa ham."], "By signaling high innate ability to employers."),
  r(4, "What conditions lead to highly compensated superstars? Would you expect to see superstars in dentistry? In music?", ["(1) Har bir mijoz eng yaxshisini xohlaydi; (2) texnologiya eng yaxshilarga hammaga arzon xizmat ko'rsatishga imkon beradi.", "Stomatologiya — **yo'q** (cheklangan bemorlar); musiqa — **ha** (yozuvlar, striming)."], "Superstars arise when everyone wants the best and the best can serve everyone cheaply: music yes, dentistry no."),
  r(5, "Give three reasons a worker's wage might be above the level that balances supply and demand.", ["**Eng kam ish haqi qonuni**.", "**Kasaba uyushmalari** bozor kuchi.", "**Efficiency wages**."], "Minimum-wage laws, unions, and efficiency wages.", "wages"),
  r(6, "What difficulties arise in deciding whether a group of workers has a lower wage because of discrimination?", ["Guruhlar **human capital** (ta'lim miqdori va sifati, tajriba) bilan farqlanadi.", "Turli ish tanlaydi — **compensating differentials** o'lchash qiyin.", "Shuning uchun xom farqlar diskriminatsiyani o'lchamaydi."], "Groups differ in human capital and job characteristics, which must be controlled for.", "gaps"),
  r(7, "Explain how the forces of economic competition affect racial discrimination.", ["Diskriminatsiya qiluvchi ish beruvchilar ortiqcha to'laydi; foydani o'ylaydigan firmalar kamsitilgan ishchilarni arzon yollab, xarajatda ustunlikka ega.", "Kirish va chiqish → kamsitilganlarga talab oshadi → farq qisqaradi."], "Profit-seeking entry by nondiscriminating firms erodes employer discrimination.", "disc"),
  r(8, "Give an example of how discrimination might persist in a competitive market.", ["**Mijozlar** diskriminatsiyasi: mutaassib mijozlar ko'proq to'lashga tayyor (sport: tomoshabinlar, beysbol kartochkalari).", "**Hukumat** talab qilsa: segregatsiyalangan tramvaylar, apartheid."], "Customer preferences or government mandates can sustain discrimination.", "disc"),
];

export const problems: Problem[] = [
  p(1, "College students sometimes work as summer interns for little or no pay. (a) Opportunity cost? (b) Why take such jobs? (c) Compare later earnings of former interns with those who took higher-paying summer jobs.", [
    "(a) Boshqa ishda topilishi mumkin bo'lgan **ish haqi** (va dam olish).",
    "(b) Amaliyot **human capital** (malaka, tajriba, aloqalar) va signal beradi — kelajakdagi yuqori daromad uchun investitsiya.",
    "(c) Sobiq amaliyotchilar keyinroq **ko'proq** topishini kutish mumkin — dastlabki past ish haqi uchun kompensatsiya.",
  ], "The forgone wage; interns invest in human capital; they should earn more later.", "skills"),
  p(2, "Give two reasons a single minimum wage might distort the market for teenage workers more than for adults.", [
    "Teenagerlar malakasi va tajribasi kam → ularning **muvozanat ish haqi pastroq** — eng kam ish haqi ular uchun ko'proq bog'lovchi.",
    "Teenagerlar mehnat taklifi va talabi **elastikroq** (maktab, boshqa imkoniyatlar; firmalar ularni oson almashtiradi) → bandlikka ta'sir kattaroq. Shuningdek ish joyida o'qitish imkoniyatlari kamayadi.",
  ], "Their equilibrium wages are lower (the floor binds more) and their labor supply and demand are more elastic.", "wages"),
  p(3, "Workers with more labor-force experience are paid more (holding education constant). Why? Why might experience at the same job have an extra positive effect?", [
    "Tajriba — ish joyida olingan **human capital** (on-the-job training) → yuqori unumdorlik.",
    "Bir firmadagi tajriba firmaga xos bilimni beradi — boshqa joyda qadrsizroq, bu firmada esa unumdorlikni oshiradi; shuningdek uzoq ishlaganlar — yaxshi moslik signali, firma ularni saqlash uchun (efficiency wage) ko'proq to'laydi.",
  ], "Experience is on-the-job human capital; firm-specific skills and retention incentives add a further premium."),
  p(4, "At some colleges, economics professors earn more than professors in other fields. (a) Why? (b) Where salaries are equal, economists sometimes have lighter teaching loads. What role do loads play?", [
    "(a) Iqtisodchilarning **muqobil imkoniyatlari** (biznes, hukumat) yaxshiroq → universitet ularni jalb qilish uchun ko'proq to'lashi kerak.",
    "(b) Yengil o'quv yuklamasi — pul bo'lmagan **compensating differential**: teng ish haqida ishni jozibaliroq qiladi.",
  ], "Better outside options; lighter teaching loads act as a nonmonetary compensating differential."),
  p(5, "Choose: four years at the world's best university but keep it secret, or an official degree without attending. Which raises future earnings more? What does that say about signaling vs. human capital?", [
    "Diplomni tanlash ko'proq daromad beradi deb hisoblasangiz — **signal** effekti kuchli deb hisoblaysiz.",
    "O'qishni tanlasangiz — **human capital** (haqiqiy bilim) muhimroq.",
    "Ko'pchilik uchun javob noaniq — haqiqat ehtimol ikkalasining aralashmasi.",
  ], "Preferring the degree implies signaling matters; preferring the education implies human capital matters."),
  p(6, "When recording devices were invented, musicians could reach huge audiences at low cost. Effect on incomes of the best musicians? Of average musicians?", [
    "Eng yaxshilar — **superyulduz**: hamma ularni tinglay oladi → daromad keskin oshdi.",
    "O'rtacha musiqachilar — talab eng yaxshilarga o'tdi → daromad **kamaydi** (jonli ijro talabi qisqardi).",
  ], "The best musicians' incomes rose; average musicians' incomes fell."),
  p(7, "Merit pay for teachers. (a) Why desirable? (b) Who might oppose it? (c) A challenge? (d) Why might a district pay significantly more than surrounding districts?", [
    "(a) **Harakatni** rag'batlantiradi, yaxshi o'qituvchilarni jalb qiladi va saqlaydi.",
    "(b) Kam samarali o'qituvchilar va kasaba uyushmalari (standart shkala himoyachilari).",
    "(c) Natijani **o'lchash** qiyin (test natijalari o'quvchilar tarkibiga bog'liq; “testga o'qitish”).",
    "(d) **Efficiency wages**: eng yaxshi nomzodlarni jalb qilish, qo'nimsizlikni kamaytirish, harakatni oshirish.",
  ], "Merit pay rewards effort; unions and weaker teachers may oppose; measurement is hard; above-market pay is an efficiency wage.", "wages"),
  p(8, "Greenspan hired mainly female economists in the 1960s because “good women economists were cheaper than men.” Profit-maximizing? Admirable or despicable? If more employers did this, what happens to the gender gap? Why might other firms not follow?", [
    "**Ha**, foydani maksimallashtiruvchi: bir xil unumdorlik arzonroq.",
    "Baholash — me'yoriy masala: ko'pchilik buni ijobiy deydi (kamsitilganlarga ish berdi va farqni qisqartirdi), garchi motiv foyda bo'lsa ham.",
    "Ko'proq firma shunday qilsa → ayollarga talab oshadi → **farq qisqaradi**.",
    "Boshqalar ergashmagan bo'lishi mumkin: o'z noto'g'ri qarashlari (foydadan voz kechib), **mijozlar diskriminatsiyasi** (mijozlar erkak maslahatchilarni afzal ko'rgan) yoki ijtimoiy me'yorlar.",
  ], "Yes, profit-maximizing; it narrows the gap as it spreads; others may have been held back by their own prejudice or customer discrimination.", "disc"),
];
