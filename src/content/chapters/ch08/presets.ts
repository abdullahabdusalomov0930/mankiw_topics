import type { SDConfig } from '../../../components/graphs/SupplyDemandGraph';

/** Base market: equilibrium $5 and 50 units. */
export const baseD = { a: 10, b: 0.1 };
export const baseS = { c: 0, d: 0.1 };

export const taxWelfare: SDConfig = {
  title: "Figures 2–3 — Soliq tushumi va sof yo'qotish",
  demand: baseD,
  supply: baseS,
  xMax: 100,
  yMax: 10,
  modes: ['tax'],
  mode: 'tax',
  tax: 2,
  taxMax: 9,
  shiftControls: false,
  surplus: true,
  surplusOn: true,
};

export const dwlElasticities: SDConfig = {
  title: "Figure 5 — Sof yo'qotish va egiluvchanliklar",
  demand: baseD,
  supply: baseS,
  xMax: 100,
  yMax: 10,
  modes: ['tax'],
  mode: 'tax',
  tax: 2,
  taxMax: 6,
  shiftControls: false,
  slopeControls: true,
  surplus: true,
  surplusOn: true,
  presets: [
    { label: '(a) Inelastic supply', demand: baseD, supply: { c: -15, d: 0.4 }, note: 'Taklif tik: miqdor kam kamayadi → DWL **kichik**.' },
    { label: '(b) Elastic supply', demand: baseD, supply: { c: 3.75, d: 0.025 }, note: "Taklif yotiq: miqdor ko'p kamayadi → DWL **katta**." },
    { label: '(c) Inelastic demand', demand: { a: 25, b: 0.4 }, supply: baseS, note: 'Talab tik → DWL kichik.' },
    { label: '(d) Elastic demand', demand: { a: 6.25, b: 0.025 }, supply: baseS, note: 'Talab yotiq → DWL katta.' },
  ],
};
