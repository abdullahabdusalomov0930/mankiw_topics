import type { Term } from '../../types';
import { tr } from '../../../lib/lang';

const t = (id: string, en: string, uz: string, defEn: string, defUz: string, example?: string): Term => ({ id, chapter: 15, en, uz, defEn, defUz, example });

export const terms: Term[] = [
  t("competitive-market-15", "competitive market (perfectly competitive)", "raqobatli bozor (mukammal raqobat)", "a market with many buyers and sellers trading identical products so that each buyer and seller is a price taker",
    tr("Ikki xususiyat: (1) ko'p xaridor va sotuvchi; (2) tovarlar deyarli bir xil → har kim **price taker**. Ko'pincha uchinchisi ham qo'shiladi: (3) **erkin kirish va chiqish** — uzoq muddatli muvozanatni shakllantiradi.", 'Two features: (1) many buyers and sellers; (2) goods are nearly identical → everyone is a **price taker**. Often a third is added: (3) **free entry and exit** — which shapes the long-run equilibrium.'),
    tr("Sut bozori: hech bir sut fermasi narxga ta'sir qila olmaydi.", 'The milk market: no single dairy farm can affect the price.')),
  t("average-revenue", "average revenue (AR)", "o'rtacha tushum", "total revenue divided by the quantity sold",
    tr("AR = TR / Q = **P** — barcha firmalar uchun (raqobatchi yoki yo'q).", 'AR = TR / Q = **P** — for all firms (competitive or not).'),
    tr("Vaca fermasi: $24 / 4 gallon = $6.", "Vaca's farm: $24 / 4 gallons = $6.")),
  t("marginal-revenue", "marginal revenue (MR)", "marjinal tushum", "the change in total revenue from an additional unit sold",
    tr("MR = ΔTR / ΔQ. **Raqobatchi** firma uchun MR = P (narx o'zgarmaydi). Monopoliyada MR < P (16-bob).", "MR = ΔTR / ΔQ. For a **competitive** firm MR = P (the price doesn't change). Under monopoly MR < P (Chapter 16)."),
    tr("Vaca fermasi: har bir qo'shimcha gallon $6 qo'shadi.", "Vaca's farm: each extra gallon adds $6.")),
  t("sunk-cost", "sunk cost", "qaytarilmas xarajat", "a cost that has already been committed and cannot be recovered",
    tr("Allaqachon sarflangan va qaytarib bo'lmaydigan xarajat — ratsional qarorda **e'tiborsiz qoldiriladi** (“to'kilgan sut uchun yig'lamang”). Qisqa muddatda fixed cost — sunk, shuning uchun shutdown qarorida hisobga olinmaydi.", "A cost that has already been committed and cannot be recovered — **ignored** in rational decisions (“don't cry over spilt milk”). In the short run fixed cost is sunk, so it doesn't count in the shutdown decision."),
    tr("Kino chiptasini yo'qotdingiz: kino $15 ga arziydi, yangi chipta $10 → yana sotib oling; yo'qolgan $10 — sunk.", 'You lost your movie ticket: the movie is worth $15, a new ticket is $10 → buy another; the lost $10 is sunk.')),
  t("shutdown", "shutdown (short run)", "vaqtincha to'xtatish", "a short-run decision not to produce anything during a specific period because of current market conditions",
    tr("Qisqa muddatli qaror: fixed cost baribir to'lanadi. Qoida: **TR < VC**, ya'ni **P < AVC** bo'lsa — yoping. Qisqa muddatli taklif egri chizig'i — MC ning AVC dan yuqori qismi.", 'A short-run decision: fixed cost is paid anyway. The rule: shut down if **TR < VC**, i.e., **P < AVC**. The short-run supply curve is the part of MC above AVC.'),
    tr("Tushlikda bo'sh restoran ochiq turadi, agar tushum oziq-ovqat va qo'shimcha xodimlar xarajatini qoplasa.", 'An empty restaurant stays open at lunch if revenue covers the food and extra staff.')),
  t("exit", "exit (long run)", "bozordan chiqish", "a long-run decision to leave the market",
    tr("Uzoq muddatli qaror: fixed cost ham tejaladi. Qoida: **TR < TC**, ya'ni **P < ATC** bo'lsa — chiqing. Kirish qoidasi teskari: P > ATC. Uzoq muddatli taklif — MC ning ATC dan yuqori qismi.", 'A long-run decision: fixed cost is saved too. The rule: exit if **TR < TC**, i.e., **P < ATC**. The entry rule is the reverse: P > ATC. Long-run supply is the part of MC above ATC.'),
    tr("Narx ATC dan past qolsa, granit karyeri egalari Fred va Wilma chiqib ketadi.", 'If the price stays below ATC, the granite quarry owners Fred and Wilma exit.')),
  t("zero-profit-equilibrium", "zero-profit (long-run) equilibrium", "nol foydali (uzoq muddatli) muvozanat", "the long-run outcome of free entry and exit in which price equals marginal cost and the minimum of average total cost",
    tr("Erkin kirish-chiqish iqtisodiy foydani nolga tushiradi: **P = MC = min ATC**, firmalar efficient scale da. Buxgalteriya foydasi esa musbat — egalarning imkoniyat xarajatlari qoplanadi. LR taklif egri chizig'i min ATC da **gorizontal** (agar xarajatlar bir xil bo'lsa).", "Free entry and exit drive economic profit to zero: **P = MC = min ATC**, firms at the efficient scale. Accounting profit is positive — the owners' opportunity costs are covered. The LR supply curve is **horizontal** at min ATC (if costs are identical)."),
    tr("Fermer $1 mln investitsiya (foiz $40,000) va $60,000 maoshdan voz kechgan: iqtisodiy foyda 0 bo'lsa ham, buxgalter $100,000 foyda ko'radi.", 'A farmer invested $1 million (interest $40,000) and gave up a $60,000 salary: even with zero economic profit, the accountant sees $100,000 of profit.')),
];
