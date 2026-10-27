import type { Formula } from '../../types';
import { tr } from '../../../lib/lang';

export const formulas: Formula[] = [
  {
    id: "cs-individual",
    chapter: 7,
    nameEn: "Consumer surplus of one buyer",
    nameUz: tr("Bitta xaridorning ortiqchaligi", "One buyer's surplus"),
    tex: "CS_i = WTP_i - P",
    symbols: [
      { tex: "WTP_i", meaning: tr("xaridorning to'lashga tayyorligi", "the buyer's willingness to pay") },
      { tex: "P", meaning: tr("haqiqatda to'langan narx", 'the price actually paid') },
    ],
    example: { setup: tr("Whitney $1,000 ga tayyor, $800 to'ladi.", 'Whitney is willing to pay $1,000 and pays $800.'), steps: ["\\(CS = 1000 - 800 = 200\\)."] },
  },
  {
    id: "cs-area",
    chapter: 7,
    nameEn: "Consumer surplus = area below demand, above price",
    nameUz: tr("Bozor CS — talab ostida, narx ustidagi maydon", 'Market CS — the area below demand and above the price'),
    tex: "CS = \\tfrac12 \\times Q \\times (P_{\\max} - P) \\quad \\text{(linear demand)}",
    symbols: [
      { tex: "P_{\\max}", meaning: tr("talab egri chizig'ining vertikal o'qni kesish nuqtasi (choke price)", 'the point where the demand curve meets the vertical axis (the choke price)') },
      { tex: "Q", meaning: tr("P narxdagi talab miqdori", 'the quantity demanded at price P') },
    ],
    example: { setup: "\\(Q^D = 300 - P\\), \\(P = 100\\).", steps: ["\\(Q = 200\\), \\(P_{\\max} = 300\\).", "\\(CS = \\tfrac12 \\cdot 200 \\cdot 200 = 20{,}000\\)."] },
  },
  {
    id: "ps-individual",
    chapter: 7,
    nameEn: "Producer surplus of one seller",
    nameUz: tr("Bitta sotuvchining ortiqchaligi", "One seller's surplus"),
    tex: "PS_j = P - \\text{Cost}_j",
    symbols: [{ tex: "\\text{Cost}_j", meaning: tr("sotuvchining xarajati (qabul qiladigan eng past narx)", "the seller's cost (the lowest price they will accept)") }],
    example: { setup: tr("Andy xarajati $2,000, $2,400 oldi.", "Andy's cost is $2,000 and he receives $2,400."), steps: ["\\(PS = 2400 - 2000 = 400\\)."] },
  },
  {
    id: "ps-area",
    chapter: 7,
    nameEn: "Producer surplus = area above supply, below price",
    nameUz: tr("Bozor PS — narx ostida, taklif ustidagi maydon", 'Market PS — the area below the price and above supply'),
    tex: "PS = \\tfrac12 \\times Q \\times (P - P_{\\min}) \\quad \\text{(linear supply)}",
    symbols: [{ tex: "P_{\\min}", meaning: tr("taklif egri chizig'ining vertikal o'qni kesish nuqtasi", 'the point where the supply curve meets the vertical axis') }],
    example: { setup: tr("QuickQuiz 6: \\(Q^S = 2P\\), \\(P = 10\\).", 'QuickQuiz 6: \\(Q^S = 2P\\), \\(P = 10\\).'), steps: ["\\(Q = 20\\), \\(P_{\\min} = 0\\).", "\\(PS = \\tfrac12 \\cdot 20 \\cdot 10 = 100\\)."] },
  },
  {
    id: "total-surplus",
    chapter: 7,
    nameEn: "Total surplus",
    nameUz: tr("Umumiy ortiqchalik", 'Total surplus'),
    tex: "TS = CS + PS = \\text{Value to buyers} - \\text{Cost to sellers}",
    symbols: [{ tex: "\\text{Amount paid}", meaning: tr("xaridor to'lagani = sotuvchi olgani, shuning uchun qisqarib ketadi", 'what buyers pay = what sellers receive, so it cancels out') }],
    example: {
      setup: tr("Problem 6: Bert (qiymatlar 7, 5) va Ernie (xarajat 1, 3), narx $4, 2 shisha.", 'Problem 6: Bert (values 7, 5) and Ernie (costs 1, 3), price $4, 2 bottles.'),
      steps: ["\\(CS = (7-4) + (5-4) = 4\\), \\(PS = (4-1) + (4-3) = 4\\).", "\\(TS = 8 = (7 + 5) - (1 + 3)\\)."],
    },
  },
  {
    id: "triangle",
    chapter: 7,
    nameEn: "Area of a triangle",
    nameUz: tr("Uchburchak yuzi", 'Area of a triangle'),
    tex: "\\text{Area} = \\tfrac12 \\times \\text{base} \\times \\text{height}",
    symbols: [{ tex: "\\text{base},\\ \\text{height}", meaning: tr("asos va balandlik (grafikda miqdor va narx farqi)", 'base and height (on a graph, a quantity and a price difference)') }],
    example: { setup: tr("Problem 10: \\(Q^D = 150 - 50P\\), narx $0.", 'Problem 10: \\(Q^D = 150 - 50P\\), price $0.'), steps: ["\\(Q = 150\\), choke price \\(= 3\\).", "\\(CS = \\tfrac12 \\cdot 150 \\cdot 3 = 225\\)."] },
  },
];
