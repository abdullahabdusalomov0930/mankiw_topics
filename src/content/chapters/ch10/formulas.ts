import type { Formula } from '../../types';
import { tr } from '../../../lib/lang';

export const formulas: Formula[] = [
  {
    id: "social-cost",
    chapter: 10,
    nameEn: "Social cost",
    nameUz: "Ijtimoiy xarajat",
    tex: "\\text{Social cost} = \\text{Private cost} + \\text{External cost}",
    symbols: [{ tex: "\\text{External cost}", meaning: tr("bir birlik ishlab chiqarishning begonalarga zarari", 'the harm to bystanders from producing one unit') }],
    example: { setup: tr("Problem 5: Zlurp xarajati $1.50, ifloslanish $1.", 'Problem 5: Zlurp costs $1.50 to make; pollution $1.'), steps: [tr("Ijtimoiy xarajat = 1.50 + 1 = **$2.50** bir shisha uchun.", 'Social cost = 1.50 + 1 = **$2.50** per bottle.')] },
  },
  {
    id: "social-value",
    chapter: 10,
    nameEn: "Social value",
    nameUz: "Ijtimoiy qiymat",
    tex: "\\text{Social value} = \\text{Private value} + \\text{External benefit}",
    symbols: [{ tex: "\\text{External benefit}", meaning: tr("bir birlik iste'molning begonalarga foydasi", 'the benefit to bystanders from consuming one unit') }],
    example: { setup: tr("Problem 2: o't o'chirgich, tashqi foyda $10.", 'Problem 2: fire extinguishers, external benefit $10.'), steps: [tr("Ijtimoiy qiymat egri chizig'i talabdan $10 yuqorida.", 'The social-value curve lies $10 above demand.')] },
  },
  {
    id: "optimum",
    chapter: 10,
    nameEn: "Social optimum",
    nameUz: "Ijtimoiy optimum",
    tex: "Q_{\\text{optimum}}:\\ \\text{Social value} = \\text{Social cost};\\quad \\text{negative: } Q_{\\text{opt}} < Q_{\\text{mkt}},\\ \\text{positive: } Q_{\\text{opt}} > Q_{\\text{mkt}}",
    symbols: [{ tex: "Q_{\\text{mkt}}", meaning: tr("bozor muvozanati (faqat xususiy qiymat va xarajat)", 'market equilibrium (private value and cost only)') }],
    example: { setup: tr("\\(Q^D = 300 - P\\), \\(Q^S = 2P\\), tashqi xarajat $30.", '\\(Q^D = 300 - P\\), \\(Q^S = 2P\\), external cost $30.'), steps: [tr("Ijtimoiy xarajat: \\(Q = 2(P - 30)\\).", 'Social cost: \\(Q = 2(P - 30)\\).'), tr("\\(300 - P = 2P - 60 \\Rightarrow P = 120,\\ Q = 180\\) (bozor 200).", '\\(300 - P = 2P - 60 \\Rightarrow P = 120,\\ Q = 180\\) (market 200).')] },
  },
  {
    id: "pigou",
    chapter: 10,
    nameEn: "Ideal corrective tax or subsidy",
    nameUz: "Ideal korrektiv soliq yoki subsidiya",
    tex: "t^* = \\text{External cost per unit},\\qquad s^* = \\text{External benefit per unit}",
    symbols: [
      { tex: "t^*", meaning: tr("salbiy effekt uchun soliq", 'tax for a negative externality') },
      { tex: "s^*", meaning: tr("ijobiy effekt uchun subsidiya", 'subsidy for a positive externality') },
    ],
    example: { setup: tr("Problem 5d: Zlurp — $1 tashqi xarajat, $1 soliq.", 'Problem 5d: Zlurp — $1 external cost, $1 tax.'), steps: [tr("Narx $2.50 bo'ladi, har bir odam 3 shisha oladi (4 emas).", 'The price becomes $2.50; each person buys 3 bottles (not 4).'), "Total surplus 4 → 4.5 ga oshadi."] },
  },
  {
    id: "dwl-ext",
    chapter: 10,
    nameEn: "Deadweight loss of an externality",
    nameUz: "Tashqi effektning sof yo'qotishi",
    tex: "DWL = \\tfrac12 \\times \\text{External cost} \\times (Q_{\\text{mkt}} - Q_{\\text{opt}})",
    symbols: [{ tex: "Q_{\\text{mkt}} - Q_{\\text{opt}}", meaning: tr("ortiqcha ishlab chiqarilgan birliklar (doimiy tashqi xarajat, chiziqli egri chiziqlar)", 'units overproduced (constant external cost, linear curves)') }],
    example: { setup: tr("Yuqoridagi misol: tashqi xarajat $30, bozor 200, optimum 180.", 'The example above: external cost $30, market 200, optimum 180.'), steps: [tr("\\(DWL = \\tfrac12 \\cdot 30 \\cdot 20 = 300\\).", '\\(DWL = \\tfrac12 \\cdot 30 \\cdot 20 = 300\\).')] },
  },
  {
    id: "coase",
    chapter: 10,
    nameEn: "Coase bargaining rule",
    nameUz: "Coase kelishuvi qoidasi",
    tex: "\\text{Efficient: keep the dog iff } B_{\\text{Emily}} \\ge C_{\\text{Horace}};\\quad \\text{payment} \\in [\\min(B, C),\\ \\max(B, C)]",
    symbols: [
      { tex: "B", meaning: tr("Emily'ning itdan foydasi", "Emily's benefit from the dog") },
      { tex: "C", meaning: tr("Horace'ning hurishdan zarari", "Horace's cost from the barking") },
    ],
    example: { setup: tr("B = $1,000, C = $1,500, huquq Emilyda.", 'B = $1,000, C = $1,500, the right belongs to Emily.'), steps: [tr("C > B → it ketishi samarali.", 'C > B → it is efficient for the dog to go.'), tr("Horace $1,000 dan $1,500 gacha (masalan, $1,200) to'laydi — ikkalasi yutadi.", 'Horace pays between $1,000 and $1,500 (e.g., $1,200) — both gain.')] },
  },
];
