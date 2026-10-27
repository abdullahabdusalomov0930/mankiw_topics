import type { Problem } from '../../types';

const C = 12;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch12.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch12.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "Give two examples of externalities in the healthcare system.", ["**Emlash**: emlangan odam boshqalarni ham himoya qiladi — ijobiy tashqi effekt.", "**Tibbiy tadqiqot**: yangi davolash usuli umumiy bilimga qo'shiladi — boshqa shifokor va bemorlarga foyda."], "Vaccination and medical research (both positive)."),
  r(2, "Explain moral hazard and adverse selection in the market for health insurance.", ["**Moral hazard**: sug'urtalangan odam xarajatni to'lamagani uchun ortiqcha foydalanadi (kichik alomatda shifokorga borish, shubhali tahlillar).", "**Adverse selection**: o'z sog'lig'ini yaxshi biladiganlar orasida kasallar ko'proq sug'urta oladi → narx oshadi → sog'lomlar chiqadi (death spiral xavfi)."], "Moral hazard = overuse once insured; adverse selection = the insured pool is sicker than average.", "spiral"),
  r(3, "Describe the three sets of rules that are necessary in a healthcare market with an insurer.", ["**Financing**: kim sug'urta uchun qancha to'laydi (soliq yoki premium; narx bo'yicha davlat cheklovlari).", "**Access**: bemor qachon va qanday xizmat oladi (moral hazardni cheklash — yillik tekshiruv, yo'llanma).", "**Payment**: sug'urtachi qaysi muolajaga va qancha to'laydi."], "Financing, access, and payment rules."),
  r(4, "Give three reasons why life expectancy has been increasing over time.", ["Tibbiy texnologiya (vaksinalar, davolash usullari); bolalar o'limining 10% dan 0.6% dan kamga tushishi.", "Sanitariya: toza suv va kanalizatsiya.", "Chekishning kamayishi (1960-yildan beri >50%) va avtomobil xavfsizligi (halokatdan o'lim 1950-yildagining yarmi)."], "Medical advances, sanitation, less smoking and safer cars."),
  r(5, "How does US healthcare spending compare with 50 years ago? Give four economic forces that might help explain the trend.", ["YaIMdagi ulush: 1960-yil **5%** → 2019-yil **18%**.", "1) Baumol's cost disease; 2) qimmat yangi tibbiy texnologiyalar; 3) aholining qarishi (65+ ulushi 9% → 17%); 4) daromad o'sishi (daromad elastikligi ≈ 1.3)."], "Much higher; Baumol's cost disease, technology, aging, and rising incomes."),
  r(6, "How does healthcare spending in the United States compare with spending in other developed nations?", ["AQSh ~**17%** YaIM, boshqa rivojlangan davlatlar **9–12%** (Italiya 8.7%, Fransiya 11.7%).", "Sabablar bahsli: tanqidchilar — samarasizlik, ma'muriy xarajatlar; himoyachilar — semizlik kabi tizimdan tashqari omillar."], "Much higher — about 17 percent versus 9 to 12 percent.", "facts"),
  r(7, "Explain the rationale for a “Cadillac tax” on expensive health insurance plans.", ["Ish beruvchi beradigan sug'urta daromad solig'idan ozod, naqd maosh esa yo'q → ishchilar ortiqcha saxiy sug'urtani afzal ko'radi.", "Ortiqcha sug'urta kichik xarajatlarni ham qoplaydi → moral hazard → xarajatlar o'sadi.", "Qimmat rejalarga soliq bu imtiyozni tenglashtirardi (84% iqtisodchi rozi); 2019-yilda bekor qilingan."], "To remove the tax bias toward excessive insurance that worsens moral hazard."),
];

export const problems: Problem[] = [
  p(1, "A typical medical procedure costs $100, but an insured person pays only $20; the insurer pays $80 (recouped through premiums that do not depend on how many procedures the person has). (a) Draw demand and show the quantity at $100. (b) Show the quantity at $20. If the true social cost is $100, does this maximize total surplus? (c) Why might the use of care be viewed as “excessive”? (d) What policies might prevent it?", [
    "(a) Pastga qaragan talab; $100 da kichik miqdor — samarali miqdor.",
    "(b) $20 da ko'proq muolaja. **Yo'q**: qo'shimcha muolajalar qiymati $20 va $100 orasida — jamiyat xarajatidan past → DWL.",
    "(c) Bemorlar qiymati xarajatdan past bo'lgan xizmatlarni ham iste'mol qiladi — moral hazard.",
    "(d) Yuqori co-pay yoki deductible; kirish qoidalari (yo'llanma, cheklovlar); “Cadillac tax” kabi ortiqcha sug'urtaga soliq.",
  ], "Too many procedures are performed; co-pays, deductibles and access rules can limit overuse.", "mh"),
  p(2, "The Live-Long-and-Prosper Health Insurance Company charges $5,000 for a family policy. The president suggests raising the price to $6,000 to increase profits. What economic problem might arise? Would the pool become more or less healthy? Would profits necessarily increase?", [
    "**Adverse selection**: narx oshsa, eng sog'lom (sug'urtani kam qadrlaydigan) oilalar chiqib ketadi.",
    "Pool **kamroq sog'lom** bo'ladi → o'rtacha xarajat oshadi.",
    "Foyda **albatta oshmaydi**: narx oshgan, lekin xarajat ham oshgan va mijozlar kamaygan.",
  ], "Adverse selection; the pool becomes less healthy; profits need not rise."),
  p(3, "Baumol's cost disease: two sectors (manufacturing and services); technology improves only in manufacturing. Fill in: (a) manufacturing wage ___ (b) labor supply in services ___ (c) service wage ___ (d) service costs ___ (e) service prices ___ (f) technological advances in manufacturing cause service prices to ___.", [
    "(a) Sanoatda mehnatga talab ↑ → maosh **oshadi**.",
    "(b) Ba'zi ishchilar sanoatga o'tadi → xizmatlarda mehnat taklifi **kamayadi**.",
    "(c) Xizmat ishchilari maoshi **oshadi**.",
    "(d) Xizmat ko'rsatuvchi biznes xarajatlari **oshadi**.",
    "(e) Xizmat narxlari **oshadi**.",
    "(f) **Oshadi**.",
  ], "increases; decreases; increases; increase; increases; rise."),
  p(4, "Death spiral: five equal-size types with expected costs A $1,000, B $2,000, C $3,000, D $4,000, E $5,000. Insurers add $700 and charge everyone the same price; people forgo insurance if the price exceeds their expected cost by more than $1,000. (a)–(h) Trace the spiral. (i) Consumer surplus at the end? (j) With a mandate: each person's surplus and total? (k) Vote on the mandate? (l) Penalty needed?", [
    "(a) Hamma: o'rtacha $3,000 + $700 = **$3,700**.",
    "(b) Narx − xarajat ≤ 1,000 → xarajat ≥ $2,700: **C, D, E**.",
    "(c) O'rtacha $4,000 → narx **$4,700**. (d) Xarajat ≥ $3,700: **D, E**.",
    "(e) O'rtacha $4,500 → narx **$5,200**. (f) Xarajat ≥ $4,200: **E**.",
    "(g) O'rtacha $5,000 → narx **$5,700**. (h) E sotib oladi (5,700 − 5,000 = 700 ≤ 1,000) → **muvozanat**.",
    "(i) E: 1,000 + 5,000 − 5,700 = **$300** (boshqalar 0).",
    "(j) Narx $3,700: A −$1,700, B −$700, C +$300, D +$1,300, E +$2,300 → jami **$1,500**.",
    "(k) C, D, E (3/5) “ha” → mandate **o'tadi**.",
    "(l) Jarima **$1,700** dan katta bo'lishi kerak (A ning yo'qotishi).",
  ], "The spiral ends with only E insured at $5,700 (surplus $300); a mandate raises total surplus to $1,500.", "spiral"),
];
