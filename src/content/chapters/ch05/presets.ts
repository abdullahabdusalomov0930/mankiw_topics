import type { SDConfig } from '../../../components/graphs/SupplyDemandGraph';
import { tr } from '../../../lib/lang';

/** Figure 7: wheat. Demand inelastic; supply S1 → S2 takes price $3 → $2 and quantity 100 → 110 (TR $300 → $220). */
export const wheatD = { a: 13, b: 0.1 };
export const wheatS1 = { c: -2, d: 0.05 };
export const wheatS2 = { c: -3.5, d: 0.05 };
export const wheat: SDConfig = {
  title: tr("Figure 7 — Bug'doy bozorida taklif oshishi", 'Figure 7 — An increase in supply in the market for wheat'),
  demand: wheatD,
  supply: wheatS1,
  xMax: 200,
  yMax: 8,
  labels: { x: 'Quantity of Wheat', xUz: "Bug'doy miqdori", y: 'Price of Wheat', yUz: "Bug'doy narxi" },
  modes: ['market'],
  showRevenue: true,
  qtyDigits: 0,
  presets: [
    { label: tr('S₁: eski texnologiya', 'S₁: old technology'), supply: wheatS1, note: tr('Narx $3, miqdor 100: tushum $300.', 'Price $3, quantity 100: revenue $300.') },
    { label: tr('S₂: yangi gibrid (+20% hosil)', 'S₂: new hybrid (+20% yield)'), supply: wheatS2, compare: { supply: wheatS1 }, note: tr("Narx $2 ga tushdi, miqdor atigi 110 ga oshdi: tushum **$220**. Talab noegiluvchan — fermerlar yutqazdi.", 'The price fell to $2 and the quantity rose only to 110: revenue **$220**. Demand is inelastic — farmers lost.') },
  ],
};

/** Figure 8: the same leftward supply shift in the short run (steep curves) and the long run (flat curves). */
export const opec: SDConfig = {
  title: tr("Figure 8 — Jahon neft bozorida taklifning kamayishi", 'Figure 8 — A reduction in supply in the world market for oil'),
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
    { label: tr('Qisqa muddat: S₁', 'Short run: S₁'), demand: { a: 230, b: 2 }, supply: { c: -170, d: 2 } },
    { label: tr('Qisqa muddat: OPEC qisqartirdi', 'Short run: OPEC cuts output'), demand: { a: 230, b: 2 }, supply: { c: -150, d: 2 }, compare: { supply: { c: -170, d: 2 } }, note: tr("Talab va taklif tik (noegiluvchan): 10 birlik qisqarish narxni **$30 → $40** ga ko'tardi. OPEC daromadi oshdi.", "Demand and supply are steep (inelastic): a 10-unit cut raised the price **$30 → $40**. OPEC's revenue rose.") },
    { label: tr('Uzoq muddat: S₁', 'Long run: S₁'), demand: { a: 50, b: 0.2 }, supply: { c: 10, d: 0.2 } },
    { label: tr('Uzoq muddat: xuddi shu qisqarish', 'Long run: the same cut'), demand: { a: 50, b: 0.2 }, supply: { c: 12, d: 0.2 }, compare: { supply: { c: 10, d: 0.2 } }, note: tr("Egri chiziqlar yotiq (egiluvchan): xuddi o'sha qisqarish narxni atigi **$30 → $31** ga ko'tardi.", 'The curves are flat (elastic): the same cut raised the price only **$30 → $31**.') },
  ],
};

/** Figure 9: drug interdiction (supply shifts left) versus drug education (demand shifts left). Demand is inelastic. */
export const drugs: SDConfig = {
  title: tr("Figure 9 — Noqonuniy narkotiklarga qarshi siyosatlar", 'Figure 9 — Policies to reduce the use of illegal drugs'),
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
    { label: tr("Boshlang'ich", 'Start'), demand: { a: 250, b: 2 }, supply: { c: 0, d: 0.5 } },
    { label: tr('(a) Interdiction: taklif ↓', '(a) Interdiction: supply ↓'), demand: { a: 250, b: 2 }, supply: { c: 15, d: 0.5 }, compare: { supply: { c: 0, d: 0.5 } }, note: tr("Narx $50 → $62, miqdor 100 → 94. Lekin talab noegiluvchan: giyohvandlar **ko'proq** pul to'laydi ($5,000 → $5,830) — jinoyat oshishi mumkin.", 'The price goes $50 → $62 and the quantity 100 → 94. But demand is inelastic: users pay **more** in total ($5,000 → $5,830) — crime may rise.') },
    { label: tr("(b) Education: talab ↓", '(b) Education: demand ↓'), demand: { a: 190, b: 2 }, supply: { c: 0, d: 0.5 }, compare: { demand: { a: 250, b: 2 } }, note: tr("Narx ham, miqdor ham tushdi: jami to'lov $5,000 → $2,890. Iste'mol ham, jinoyat ham kamayadi.", 'Both price and quantity fall: total spending $5,000 → $2,890. Both use and crime fall.') },
  ],
};
