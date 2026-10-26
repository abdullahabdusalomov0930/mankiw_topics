import type { Formula } from '../../types';

export const formulas: Formula[] = [
  {
    id: "social-cost",
    chapter: 10,
    nameEn: "Social cost",
    nameUz: "Ijtimoiy xarajat",
    tex: "\\text{Social cost} = \\text{Private cost} + \\text{External cost}",
    symbols: [{ tex: "\\text{External cost}", meaning: "bir birlik ishlab chiqarishning begonalarga zarari" }],
    example: { setup: "Problem 5: Zlurp xarajati $1.50, ifloslanish $1.", steps: ["Ijtimoiy xarajat = 1.50 + 1 = **$2.50** bir shisha uchun."] },
  },
  {
    id: "social-value",
    chapter: 10,
    nameEn: "Social value",
    nameUz: "Ijtimoiy qiymat",
    tex: "\\text{Social value} = \\text{Private value} + \\text{External benefit}",
    symbols: [{ tex: "\\text{External benefit}", meaning: "bir birlik iste'molning begonalarga foydasi" }],
    example: { setup: "Problem 2: o't o'chirgich, tashqi foyda $10.", steps: ["Ijtimoiy qiymat egri chizig'i talabdan $10 yuqorida."] },
  },
  {
    id: "optimum",
    chapter: 10,
    nameEn: "Social optimum",
    nameUz: "Ijtimoiy optimum",
    tex: "Q_{\\text{optimum}}:\\ \\text{Social value} = \\text{Social cost};\\quad \\text{negative: } Q_{\\text{opt}} < Q_{\\text{mkt}},\\ \\text{positive: } Q_{\\text{opt}} > Q_{\\text{mkt}}",
    symbols: [{ tex: "Q_{\\text{mkt}}", meaning: "bozor muvozanati (faqat xususiy qiymat va xarajat)" }],
    example: { setup: "\\(Q^D = 300 - P\\), \\(Q^S = 2P\\), tashqi xarajat $30.", steps: ["Ijtimoiy xarajat: \\(Q = 2(P - 30)\\).", "\\(300 - P = 2P - 60 \\Rightarrow P = 120,\\ Q = 180\\) (bozor 200)."] },
  },
  {
    id: "pigou",
    chapter: 10,
    nameEn: "Ideal corrective tax or subsidy",
    nameUz: "Ideal korrektiv soliq yoki subsidiya",
    tex: "t^* = \\text{External cost per unit},\\qquad s^* = \\text{External benefit per unit}",
    symbols: [
      { tex: "t^*", meaning: "salbiy effekt uchun soliq" },
      { tex: "s^*", meaning: "ijobiy effekt uchun subsidiya" },
    ],
    example: { setup: "Problem 5d: Zlurp — $1 tashqi xarajat, $1 soliq.", steps: ["Narx $2.50 bo'ladi, har bir odam 3 shisha oladi (4 emas).", "Total surplus 4 → 4.5 ga oshadi."] },
  },
  {
    id: "dwl-ext",
    chapter: 10,
    nameEn: "Deadweight loss of an externality",
    nameUz: "Tashqi effektning sof yo'qotishi",
    tex: "DWL = \\tfrac12 \\times \\text{External cost} \\times (Q_{\\text{mkt}} - Q_{\\text{opt}})",
    symbols: [{ tex: "Q_{\\text{mkt}} - Q_{\\text{opt}}", meaning: "ortiqcha ishlab chiqarilgan birliklar (doimiy tashqi xarajat, chiziqli egri chiziqlar)" }],
    example: { setup: "Yuqoridagi misol: tashqi xarajat $30, bozor 200, optimum 180.", steps: ["\\(DWL = \\tfrac12 \\cdot 30 \\cdot 20 = 300\\)."] },
  },
  {
    id: "coase",
    chapter: 10,
    nameEn: "Coase bargaining rule",
    nameUz: "Coase kelishuvi qoidasi",
    tex: "\\text{Efficient: keep the dog iff } B_{\\text{Emily}} \\ge C_{\\text{Horace}};\\quad \\text{payment} \\in [\\min(B, C),\\ \\max(B, C)]",
    symbols: [
      { tex: "B", meaning: "Emily'ning itdan foydasi" },
      { tex: "C", meaning: "Horace'ning hurishdan zarari" },
    ],
    example: { setup: "B = $1,000, C = $1,500, huquq Emilyda.", steps: ["C > B → it ketishi samarali.", "Horace $1,000 dan $1,500 gacha (masalan, $1,200) to'laydi — ikkalasi yutadi."] },
  },
];
