import type { Formula } from '../../types';

export const formulas: Formula[] = [
  {
    id: "cs-individual",
    chapter: 7,
    nameEn: "Consumer surplus of one buyer",
    nameUz: "Bitta xaridorning ortiqchaligi",
    tex: "CS_i = WTP_i - P",
    symbols: [
      { tex: "WTP_i", meaning: "xaridorning to'lashga tayyorligi" },
      { tex: "P", meaning: "haqiqatda to'langan narx" },
    ],
    example: { setup: "Whitney $1,000 ga tayyor, $800 to'ladi.", steps: ["\\(CS = 1000 - 800 = 200\\)."] },
  },
  {
    id: "cs-area",
    chapter: 7,
    nameEn: "Consumer surplus = area below demand, above price",
    nameUz: "Bozor CS — talab ostida, narx ustidagi maydon",
    tex: "CS = \\tfrac12 \\times Q \\times (P_{\\max} - P) \\quad \\text{(linear demand)}",
    symbols: [
      { tex: "P_{\\max}", meaning: "talab egri chizig'ining vertikal o'qni kesish nuqtasi (choke price)" },
      { tex: "Q", meaning: "P narxdagi talab miqdori" },
    ],
    example: { setup: "\\(Q^D = 300 - P\\), \\(P = 100\\).", steps: ["\\(Q = 200\\), \\(P_{\\max} = 300\\).", "\\(CS = \\tfrac12 \\cdot 200 \\cdot 200 = 20{,}000\\)."] },
  },
  {
    id: "ps-individual",
    chapter: 7,
    nameEn: "Producer surplus of one seller",
    nameUz: "Bitta sotuvchining ortiqchaligi",
    tex: "PS_j = P - \\text{Cost}_j",
    symbols: [{ tex: "\\text{Cost}_j", meaning: "sotuvchining xarajati (qabul qiladigan eng past narx)" }],
    example: { setup: "Andy xarajati $2,000, $2,400 oldi.", steps: ["\\(PS = 2400 - 2000 = 400\\)."] },
  },
  {
    id: "ps-area",
    chapter: 7,
    nameEn: "Producer surplus = area above supply, below price",
    nameUz: "Bozor PS — narx ostida, taklif ustidagi maydon",
    tex: "PS = \\tfrac12 \\times Q \\times (P - P_{\\min}) \\quad \\text{(linear supply)}",
    symbols: [{ tex: "P_{\\min}", meaning: "taklif egri chizig'ining vertikal o'qni kesish nuqtasi" }],
    example: { setup: "QuickQuiz 6: \\(Q^S = 2P\\), \\(P = 10\\).", steps: ["\\(Q = 20\\), \\(P_{\\min} = 0\\).", "\\(PS = \\tfrac12 \\cdot 20 \\cdot 10 = 100\\)."] },
  },
  {
    id: "total-surplus",
    chapter: 7,
    nameEn: "Total surplus",
    nameUz: "Umumiy ortiqchalik",
    tex: "TS = CS + PS = \\text{Value to buyers} - \\text{Cost to sellers}",
    symbols: [{ tex: "\\text{Amount paid}", meaning: "xaridor to'lagani = sotuvchi olgani, shuning uchun qisqarib ketadi" }],
    example: {
      setup: "Problem 6: Bert (qiymatlar 7, 5) va Ernie (xarajat 1, 3), narx $4, 2 shisha.",
      steps: ["\\(CS = (7-4) + (5-4) = 4\\), \\(PS = (4-1) + (4-3) = 4\\).", "\\(TS = 8 = (7 + 5) - (1 + 3)\\)."],
    },
  },
  {
    id: "triangle",
    chapter: 7,
    nameEn: "Area of a triangle",
    nameUz: "Uchburchak yuzi",
    tex: "\\text{Area} = \\tfrac12 \\times \\text{base} \\times \\text{height}",
    symbols: [{ tex: "\\text{base},\\ \\text{height}", meaning: "asos va balandlik (grafikda miqdor va narx farqi)" }],
    example: { setup: "Problem 10: \\(Q^D = 150 - 50P\\), narx $0.", steps: ["\\(Q = 150\\), choke price \\(= 3\\).", "\\(CS = \\tfrac12 \\cdot 150 \\cdot 3 = 225\\)."] },
  },
];
