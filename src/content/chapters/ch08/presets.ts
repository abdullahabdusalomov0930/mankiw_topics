import type { SDConfig } from '../../../components/graphs/SupplyDemandGraph';
import { tr } from '../../../lib/lang';

/** Base market: equilibrium $5 and 50 units. */
export const baseD = { a: 10, b: 0.1 };
export const baseS = { c: 0, d: 0.1 };

export const taxWelfare: SDConfig = {
  title: tr("Figures 2–3 — Soliq tushumi va sof yo'qotish", 'Figures 2–3 — Tax revenue and deadweight loss'),
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
  title: tr("Figure 5 — Sof yo'qotish va egiluvchanliklar", 'Figure 5 — Deadweight loss and elasticities'),
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
    { label: '(a) Inelastic supply', demand: baseD, supply: { c: -15, d: 0.4 }, note: tr('Taklif tik: miqdor kam kamayadi → DWL **kichik**.', 'Steep supply: quantity falls little → a **small** DWL.') },
    { label: '(b) Elastic supply', demand: baseD, supply: { c: 3.75, d: 0.025 }, note: tr("Taklif yotiq: miqdor ko'p kamayadi → DWL **katta**.", 'Flat supply: quantity falls a lot → a **large** DWL.') },
    { label: '(c) Inelastic demand', demand: { a: 25, b: 0.4 }, supply: baseS, note: tr('Talab tik → DWL kichik.', 'Steep demand → a small DWL.') },
    { label: '(d) Elastic demand', demand: { a: 6.25, b: 0.025 }, supply: baseS, note: tr('Talab yotiq → DWL katta.', 'Flat demand → a large DWL.') },
  ],
};
