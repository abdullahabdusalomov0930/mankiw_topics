import type { SDConfig } from '../../../components/graphs/SupplyDemandGraph';

/** Figure 7: wheat. Demand inelastic; supply S1 → S2 takes price $3 → $2 and quantity 100 → 110 (TR $300 → $220). */
export const wheatD = { a: 13, b: 0.1 };
export const wheatS1 = { c: -2, d: 0.05 };
export const wheatS2 = { c: -3.5, d: 0.05 };
export const wheat: SDConfig = {
  title: "Figure 7 — Bug'doy bozorida taklif oshishi",
  demand: wheatD,
  supply: wheatS1,
  xMax: 200,
  yMax: 8,
  labels: { x: 'Quantity of Wheat', xUz: "Bug'doy miqdori", y: 'Price of Wheat', yUz: "Bug'doy narxi" },
  modes: ['market'],
  showRevenue: true,
  qtyDigits: 0,
  presets: [
    { label: 'S₁: eski texnologiya', supply: wheatS1, note: 'Narx $3, miqdor 100: tushum $300.' },
    { label: 'S₂: yangi gibrid (+20% hosil)', supply: wheatS2, compare: { supply: wheatS1 }, note: "Narx $2 ga tushdi, miqdor atigi 110 ga oshdi: tushum **$220**. Talab noegiluvchan — fermerlar yutqazdi." },
  ],
};

/** Figure 8: the same leftward supply shift in the short run (steep curves) and the long run (flat curves). */
export const opec: SDConfig = {
  title: "Figure 8 — Jahon neft bozorida taklifning kamayishi",
  demand: { a: 230, b: 2 },
  supply: { c: -170, d: 2 },
  xMax: 160,
  yMax: 60,
  labels: { x: 'Quantity of Oil', xUz: 'Neft miqdori', y: 'Price of Oil', yUz: 'Neft narxi' },
  modes: ['market'],
  showRevenue: true,
  shiftControls: true,
  qtyDigits: 0,
  priceDigits: 0,
  presets: [
    { label: 'Qisqa muddat: S₁', demand: { a: 230, b: 2 }, supply: { c: -170, d: 2 } },
    { label: 'Qisqa muddat: OPEC qisqartirdi', demand: { a: 230, b: 2 }, supply: { c: -150, d: 2 }, compare: { supply: { c: -170, d: 2 } }, note: "Talab va taklif tik (noegiluvchan): 10 birlik qisqarish narxni **$30 → $40** ga ko'tardi. OPEC daromadi oshdi." },
    { label: 'Uzoq muddat: S₁', demand: { a: 50, b: 0.2 }, supply: { c: 10, d: 0.2 } },
    { label: 'Uzoq muddat: xuddi shu qisqarish', demand: { a: 50, b: 0.2 }, supply: { c: 12, d: 0.2 }, compare: { supply: { c: 10, d: 0.2 } }, note: "Egri chiziqlar yotiq (egiluvchan): xuddi o'sha qisqarish narxni atigi **$30 → $31** ga ko'tardi." },
  ],
};

/** Figure 9: drug interdiction (supply shifts left) versus drug education (demand shifts left). Demand is inelastic. */
export const drugs: SDConfig = {
  title: "Figure 9 — Noqonuniy narkotiklarga qarshi siyosatlar",
  demand: { a: 250, b: 2 },
  supply: { c: 0, d: 0.5 },
  xMax: 160,
  yMax: 120,
  labels: { x: 'Quantity of Drugs', xUz: 'Narkotik miqdori', y: 'Price of Drugs', yUz: 'Narx' },
  modes: ['market'],
  showRevenue: true,
  qtyDigits: 0,
  priceDigits: 0,
  presets: [
    { label: "Boshlang'ich", demand: { a: 250, b: 2 }, supply: { c: 0, d: 0.5 } },
    { label: '(a) Interdiction: taklif ↓', demand: { a: 250, b: 2 }, supply: { c: 15, d: 0.5 }, compare: { supply: { c: 0, d: 0.5 } }, note: "Narx $50 → $62, miqdor 100 → 94. Lekin talab noegiluvchan: giyohvandlar **ko'proq** pul to'laydi ($5,000 → $5,830) — jinoyat oshishi mumkin." },
    { label: "(b) Education: talab ↓", demand: { a: 190, b: 2 }, supply: { c: 0, d: 0.5 }, compare: { demand: { a: 250, b: 2 } }, note: "Narx ham, miqdor ham tushdi: jami to'lov $5,000 → $2,890. Iste'mol ham, jinoyat ham kamayadi." },
  ],
};
