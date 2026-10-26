import type { SDConfig } from '../../../components/graphs/SupplyDemandGraph';
import { demandFromQ, demandThrough, supplyFromQ, supplyThrough } from '../../../lib/econ';

/**
 * Graph set-ups for Chapter 6. The book's ice-cream curves are not straight lines, so each
 * figure gets its own linear pair that passes through the figure's numbers exactly.
 */

const iceLabels = { x: 'Quantity of Ice-Cream Cones', xUz: 'Muzqaymoq soni', y: 'Price of Cone', yUz: 'Bir dona narxi', unit: 'dona' };

// Figure 1: eq. $3 / 100; at $2 demand 125, supply 75
export const iceCeiling: SDConfig = {
  title: "Figure 1 — Narx shifti muzqaymoq bozorida",
  demand: demandThrough({ Q: 100, P: 3 }, { Q: 125, P: 2 }),
  supply: supplyThrough({ Q: 100, P: 3 }, { Q: 75, P: 2 }),
  xMax: 200,
  yMax: 6,
  labels: iceLabels,
  modes: ['ceiling', 'market'],
  mode: 'ceiling',
  control: 2,
  surplus: true,
};

// Figure 4: eq. $3 / 100; at $4 supply 120, demand 80
export const iceFloor: SDConfig = {
  title: "Figure 4 — Narx tubi muzqaymoq bozorida",
  demand: demandThrough({ Q: 100, P: 3 }, { Q: 80, P: 4 }),
  supply: supplyThrough({ Q: 100, P: 3 }, { Q: 120, P: 4 }),
  xMax: 200,
  yMax: 6,
  labels: iceLabels,
  modes: ['floor', 'market'],
  mode: 'floor',
  control: 4,
  surplus: true,
};

// Figures 6–7: $0.50 tax → buyers $3.30, sellers $2.80, 90 cones
const iceTaxD = demandThrough({ Q: 100, P: 3 }, { Q: 90, P: 3.3 });
const iceTaxS = supplyThrough({ Q: 100, P: 3 }, { Q: 90, P: 2.8 });

export const iceTaxSellers: SDConfig = {
  title: "Figure 6 — Sotuvchilarga $0.50 soliq",
  demand: iceTaxD,
  supply: iceTaxS,
  xMax: 200,
  yMax: 6,
  labels: iceLabels,
  modes: ['tax'],
  mode: 'tax',
  tax: 0.5,
  taxOn: 'sellers',
  taxMax: 2,
  taxSideToggle: false,
  shiftControls: false,
  surplus: true,
};

export const iceTaxBuyers: SDConfig = {
  ...iceTaxSellers,
  title: "Figure 7 — Xaridorlarga $0.50 soliq (va taqqoslash)",
  taxOn: 'buyers',
  taxSideToggle: true,
};

// Figure 2: gasoline. Ceiling $2.50; before OPEC eq. $2 (not binding), after S shifts left eq. $3 (binding)
const gasD = { a: 5, b: 0.04 };
export const gasLines: SDConfig = {
  title: "Figure 2 — Benzin bozori va narx shifti",
  demand: gasD,
  supply: { c: 0.5, d: 0.02 },
  xMax: 140,
  yMax: 5,
  labels: { x: 'Quantity of Gasoline', xUz: 'Benzin miqdori', y: 'Price of Gasoline', yUz: 'Benzin narxi', unit: 'mln gallon' },
  modes: ['ceiling'],
  mode: 'ceiling',
  control: 2.5,
  presets: [
    { label: '1) OPECgacha', supply: { c: 0.5, d: 0.02 }, control: 2.5, note: "Shift ($2.50) muvozanatdan ($2.00) yuqori — hech narsa sodir bo'lmaydi." },
    { label: '2) OPEC neftni kamaytirdi', supply: { c: 2, d: 0.02 }, control: 2.5, note: "Xom neft qimmatladi → benzin taklifi chapga siljidi. Erkin bozorda narx $3 bo'lardi, lekin shift $2.50 da ushlab turibdi → navbatlar." },
  ],
};

// Figure 3: rent control. Same equilibrium ($1,000 / 100 apartments), controlled rent $700
export const rentControl: SDConfig = {
  title: "Figure 3 — Ijara haqi nazorati: qisqa va uzoq muddat",
  demand: { a: 3000, b: 20 },
  supply: { c: -1000, d: 20 },
  xMax: 220,
  yMax: 2000,
  context: 'housing',
  labels: { x: 'Quantity of Apartments', xUz: 'Kvartiralar soni', y: 'Rental Price', yUz: 'Oylik ijara haqi', unit: 'ta kvartira' },
  modes: ['ceiling'],
  mode: 'ceiling',
  control: 700,
  priceDigits: 0,
  shiftControls: false,
  presets: [
    { label: 'Qisqa muddat (inelastic)', demand: { a: 3000, b: 20 }, supply: { c: -1000, d: 20 }, control: 700, note: "Uylar soni tez o'zgarmaydi, odamlar ham tez ko'chmaydi → ikkala egri chiziq tik → taqchillik kichik (30 ta)." },
    { label: 'Uzoq muddat (elastic)', demand: { a: 1400, b: 4 }, supply: { c: 600, d: 4 }, control: 700, note: "Uy egalari yangi uy qurmaydi va eskisini ta'mirlamaydi, ko'proq odam alohida yashashni xohlaydi → egri chiziqlar yotiq → taqchillik juda katta (150 ta)." },
  ],
};

// Figure 5: minimum wage. eq. $10 / 100 thousand workers
export const minimumWage: SDConfig = {
  title: "Figure 5 — Eng kam ish haqi mehnat bozorida",
  demand: { a: 20, b: 0.1 },
  supply: { c: 5, d: 0.05 },
  xMax: 220,
  yMax: 20,
  context: 'labor',
  labels: {
    x: 'Quantity of Labor',
    xUz: 'Mehnat miqdori (ming ishchi)',
    y: 'Wage',
    yUz: 'Soatlik ish haqi',
    demand: 'Labor demand',
    supply: 'Labor supply',
    unit: 'ming ishchi',
  },
  modes: ['floor', 'market'],
  mode: 'floor',
  control: 12,
};

// Figure 8: payroll tax. Labor supply less elastic than labor demand (as economists find)
export const payrollTax: SDConfig = {
  title: "Figure 8 — Ish haqi fondiga soliq",
  demand: { a: 14, b: 0.04 },
  supply: { c: -5, d: 0.15 },
  xMax: 220,
  yMax: 20,
  context: 'labor',
  labels: {
    x: 'Quantity of Labor',
    xUz: 'Mehnat miqdori',
    y: 'Wage',
    yUz: 'Ish haqi',
    demand: 'Labor demand',
    supply: 'Labor supply',
    unit: 'ming ishchi',
  },
  modes: ['tax'],
  mode: 'tax',
  tax: 2,
  taxOn: 'buyers',
  taxMax: 8,
  slopeControls: true,
  shiftControls: false,
};

// Figure 9: how the burden is divided
export const incidence: SDConfig = {
  title: "Figure 9 — Soliq yuki egiluvchanlikka qarab bo'linadi",
  demand: demandThrough({ Q: 100, P: 3 }, { Q: 80, P: 4 }),
  supply: supplyThrough({ Q: 100, P: 3 }, { Q: 120, P: 4 }),
  xMax: 200,
  yMax: 6,
  modes: ['tax'],
  mode: 'tax',
  tax: 1,
  taxMax: 3,
  slopeControls: true,
  shiftControls: false,
  presets: [
    { label: 'Teng', demand: { a: 8, b: 0.05 }, supply: { c: -2, d: 0.05 } },
    { label: '(a) Taklif egiluvchan, talab noegiluvchan', demand: { a: 13, b: 0.1 }, supply: { c: 2, d: 0.01 } },
    { label: '(b) Taklif noegiluvchan, talab egiluvchan', demand: { a: 4, b: 0.01 }, supply: { c: -7, d: 0.1 } },
  ],
};

// Luxury tax on yachts: elastic demand, inelastic supply. Prices in $ thousand.
export const luxuryTax: SDConfig = {
  title: "Yaxtalarga hashamat solig'i",
  demand: { a: 600, b: 1 },
  supply: { c: -500, d: 10 },
  xMax: 220,
  yMax: 1000,
  labels: { x: 'Quantity of Yachts', xUz: 'Yaxtalar soni', y: 'Price ($ thousand)', yUz: 'Narx (ming dollar)', unit: 'ta yaxta' },
  modes: ['tax'],
  mode: 'tax',
  tax: 100,
  taxOn: 'buyers',
  taxMax: 300,
  priceDigits: 0,
  slopeControls: true,
  shiftControls: false,
};

// Problem 10: QS = 2P, QD = 300 − P
export const problem10: SDConfig = {
  title: "Problem 10 — \\(Q^S = 2P\\), \\(Q^D = 300 - P\\)",
  demand: demandFromQ(300, 1),
  supply: supplyFromQ(0, 2),
  xMax: 320,
  yMax: 320,
  modes: ['market', 'ceiling', 'floor', 'tax'],
  mode: 'market',
  control: 90,
  tax: 30,
  taxMax: 150,
  priceDigits: 0,
  shiftControls: false,
  surplus: true,
};

// Plain ice-cream market for "movement along the curve" and graph tasks
export const iceMarket: SDConfig = {
  title: "Muzqaymoq bozori",
  demand: { a: 8, b: 0.05 },
  supply: { c: -2, d: 0.05 },
  xMax: 200,
  yMax: 6,
  labels: iceLabels,
  modes: ['market', 'ceiling', 'floor', 'tax'],
  mode: 'market',
  moveAlong: true,
};
