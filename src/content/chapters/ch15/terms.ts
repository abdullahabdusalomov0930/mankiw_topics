import type { Term } from '../../types';

const t = (id: string, en: string, uz: string, defEn: string, defUz: string, example?: string): Term => ({ id, chapter: 15, en, uz, defEn, defUz, example });

export const terms: Term[] = [
  t("competitive-market-15", "competitive market (perfectly competitive)", "raqobatli bozor (mukammal raqobat)", "a market with many buyers and sellers trading identical products so that each buyer and seller is a price taker",
    "Ikki xususiyat: (1) ko'p xaridor va sotuvchi; (2) tovarlar deyarli bir xil → har kim **price taker**. Ko'pincha uchinchisi ham qo'shiladi: (3) **erkin kirish va chiqish** — uzoq muddatli muvozanatni shakllantiradi.",
    "Sut bozori: hech bir sut fermasi narxga ta'sir qila olmaydi."),
  t("average-revenue", "average revenue (AR)", "o'rtacha tushum", "total revenue divided by the quantity sold",
    "AR = TR / Q = **P** — barcha firmalar uchun (raqobatchi yoki yo'q).",
    "Vaca fermasi: $24 / 4 gallon = $6."),
  t("marginal-revenue", "marginal revenue (MR)", "marjinal tushum", "the change in total revenue from an additional unit sold",
    "MR = ΔTR / ΔQ. **Raqobatchi** firma uchun MR = P (narx o'zgarmaydi). Monopoliyada MR < P (16-bob).",
    "Vaca fermasi: har bir qo'shimcha gallon $6 qo'shadi."),
  t("sunk-cost", "sunk cost", "qaytarilmas xarajat", "a cost that has already been committed and cannot be recovered",
    "Allaqachon sarflangan va qaytarib bo'lmaydigan xarajat — ratsional qarorda **e'tiborsiz qoldiriladi** (“to'kilgan sut uchun yig'lamang”). Qisqa muddatda fixed cost — sunk, shuning uchun shutdown qarorida hisobga olinmaydi.",
    "Kino chiptasini yo'qotdingiz: kino $15 ga arziydi, yangi chipta $10 → yana sotib oling; yo'qolgan $10 — sunk."),
  t("shutdown", "shutdown (short run)", "vaqtincha to'xtatish", "a short-run decision not to produce anything during a specific period because of current market conditions",
    "Qisqa muddatli qaror: fixed cost baribir to'lanadi. Qoida: **TR < VC**, ya'ni **P < AVC** bo'lsa — yoping. Qisqa muddatli taklif egri chizig'i — MC ning AVC dan yuqori qismi.",
    "Tushlikda bo'sh restoran ochiq turadi, agar tushum oziq-ovqat va qo'shimcha xodimlar xarajatini qoplasa."),
  t("exit", "exit (long run)", "bozordan chiqish", "a long-run decision to leave the market",
    "Uzoq muddatli qaror: fixed cost ham tejaladi. Qoida: **TR < TC**, ya'ni **P < ATC** bo'lsa — chiqing. Kirish qoidasi teskari: P > ATC. Uzoq muddatli taklif — MC ning ATC dan yuqori qismi.",
    "Narx ATC dan past qolsa, granit karyeri egalari Fred va Wilma chiqib ketadi."),
  t("zero-profit-equilibrium", "zero-profit (long-run) equilibrium", "nol foydali (uzoq muddatli) muvozanat", "the long-run outcome of free entry and exit in which price equals marginal cost and the minimum of average total cost",
    "Erkin kirish-chiqish iqtisodiy foydani nolga tushiradi: **P = MC = min ATC**, firmalar efficient scale da. Buxgalteriya foydasi esa musbat — egalarning imkoniyat xarajatlari qoplanadi. LR taklif egri chizig'i min ATC da **gorizontal** (agar xarajatlar bir xil bo'lsa).",
    "Fermer $1 mln investitsiya (foiz $40,000) va $60,000 maoshdan voz kechgan: iqtisodiy foyda 0 bo'lsa ham, buxgalter $100,000 foyda ko'radi."),
];
