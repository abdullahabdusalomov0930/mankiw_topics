import type { ScheduleConfig } from '../../../components/graphs/ScheduleBuilder';
import type { SDConfig } from '../../../components/graphs/SupplyDemandGraph';
import { demandThrough, shiftDemand, shiftSupply, supplyThrough } from '../../../lib/econ';
import { tr } from '../../../lib/lang';

const ice = { x: 'Quantity of Ice-Cream Cones', xUz: 'Muzqaymoq soni', y: 'Price of Cone', yUz: 'Narx', unit: tr('dona', 'cones') };

/** Market curves of Figure 8: equilibrium $4 and 7 cones; at $5 Qs 10 / Qd 4; at $3 Qd 10 / Qs 4. */
export const marketD = demandThrough({ Q: 7, P: 4 }, { Q: 4, P: 5 });
export const marketS = supplyThrough({ Q: 7, P: 4 }, { Q: 10, P: 5 });

export const equilibrium: SDConfig = {
  title: tr("Figures 8–9 — Muvozanat va muvozanatsiz bozor", 'Figures 8–9 — Markets in and out of equilibrium'),
  demand: marketD,
  supply: marketS,
  xMax: 16,
  yMax: 7,
  labels: ice,
  modes: ['market'],
  moveAlong: true,
  qtyDigits: 1,
};

export const demandShifts: SDConfig = {
  title: tr("Figure 3 / 10 — Talab siljishi", 'Figure 3 / 10 — A shift in demand'),
  demand: marketD,
  supply: marketS,
  xMax: 16,
  yMax: 7,
  labels: ice,
  modes: ['market'],
  moveAlong: true,
  qtyDigits: 1,
  presets: [
    { label: tr("Boshlang'ich", 'Start'), demand: marketD, supply: marketS },
    { label: tr('Issiq yoz (Figure 10)', 'A hot summer (Figure 10)'), demand: shiftDemand(marketD, 6) },
  ],
};

export const supplyShifts: SDConfig = {
  title: tr("Figure 7 / 11 — Taklif siljishi", 'Figure 7 / 11 — A shift in supply'),
  demand: marketD,
  supply: marketS,
  xMax: 16,
  yMax: 7,
  labels: ice,
  modes: ['market'],
  qtyDigits: 1,
};

/** Figure 11 starting point: hurricane raises sugar price, supply shifts left so P $4 → $5, Q 7 → 4 */
export const hurricane = shiftSupply(marketS, -6);

/** Figure 4: cigarettes. (a) warnings shift demand: at $5 20 → 10. (b) tax: $5 → $10 moves 20 → 12 */
const cigD = demandThrough({ Q: 20, P: 5 }, { Q: 12, P: 10 });
export const smoking: SDConfig = {
  title: tr("Figure 4 — Chekishni kamaytirishning ikki yo'li", 'Figure 4 — Two ways to reduce smoking'),
  demand: cigD,
  supply: { c: 5, d: 0.0001 },
  xMax: 40,
  yMax: 16,
  labels: { x: 'Number of Cigarettes Smoked per Day', xUz: 'Kuniga chekilgan sigaretalar', y: 'Price per Pack', yUz: 'Bir quti narxi' },
  modes: ['market'],
  moveAlong: true,
  shiftControls: true,
  qtyDigits: 0,
  presets: [
    { label: tr("(a) Ogohlantirishlar: talab siljiydi", '(a) Warning labels: demand shifts'), demand: shiftDemand(cigD, -10), supply: { c: 5, d: 0.0001 }, note: tr("Narx $5 da qoldi, lekin talab miqdori 20 → 10: **talab egri chizig'i chapga siljidi**.", 'The price stays at $5, but quantity demanded falls 20 → 10: **the demand curve shifted left**.') },
    { label: tr("(b) Soliq: narx $10 bo'ladi", '(b) A tax: the price becomes $10'), demand: cigD, supply: { c: 10, d: 0.0001 }, note: tr("Talab egri chizig'i joyida; narx $5 → $10, miqdor 20 → 12 — **egri chiziq bo'ylab harakat**.", 'The demand curve stays put; the price goes $5 → $10 and quantity 20 → 12 — **a movement along the curve**.') },
  ],
};

// ---------- schedule tables ----------

export const catherine: ScheduleConfig = {
  title: tr("Figure 1 — Catherine'ning talab jadvali va egri chizig'i", "Figure 1 — Catherine's demand schedule and demand curve"),
  prices: [0, 1, 2, 3, 4, 5, 6],
  groups: [{ role: 'demand', label: 'Catherine', people: [{ name: 'Catherine', q: [12, 10, 8, 6, 4, 2, 0] }] }],
  priceLabel: 'Price of Cone',
  qLabel: 'Cones',
};

export const marketDemand: ScheduleConfig = {
  title: tr("Figure 2 — Bozor talabi = individual talablar yig'indisi", 'Figure 2 — Market demand as the sum of individual demands'),
  prices: [0, 1, 2, 3, 4, 5, 6],
  groups: [
    {
      role: 'demand',
      label: 'Market',
      people: [
        { name: 'Catherine', q: [12, 10, 8, 6, 4, 2, 0] },
        { name: 'Nicholas', q: [7, 6, 5, 4, 3, 2, 1] },
      ],
    },
  ],
  editable: true,
  priceLabel: 'Price of Cone',
  qLabel: 'Cones',
};

export const ben: ScheduleConfig = {
  title: tr("Figure 5 — Ben'ning taklif jadvali va egri chizig'i", "Figure 5 — Ben's supply schedule and supply curve"),
  prices: [0, 1, 2, 3, 4, 5, 6],
  groups: [{ role: 'supply', label: 'Ben', people: [{ name: 'Ben', q: [0, 0, 1, 2, 3, 4, 5] }] }],
  priceLabel: 'Price of Cone',
  qLabel: 'Cones',
};

export const marketSupply: ScheduleConfig = {
  title: tr("Figure 6 — Bozor taklifi = individual takliflar yig'indisi", 'Figure 6 — Market supply as the sum of individual supplies'),
  prices: [0, 1, 2, 3, 4, 5, 6],
  groups: [
    {
      role: 'supply',
      label: 'Market',
      people: [
        { name: 'Ben', q: [0, 0, 1, 2, 3, 4, 5] },
        { name: 'Jerry', q: [0, 0, 0, 2, 4, 6, 8] },
      ],
    },
  ],
  editable: true,
  priceLabel: 'Price of Cone',
  qLabel: 'Cones',
};

export const iceMarketTable: ScheduleConfig = {
  title: tr("Figure 8 — Bozor talabi va taklifi birga", 'Figure 8 — Market demand and market supply together'),
  prices: [0, 1, 2, 3, 4, 5, 6],
  groups: [
    { role: 'demand', label: 'Demand', people: [{ name: 'Catherine', q: [12, 10, 8, 6, 4, 2, 0] }, { name: 'Nicholas', q: [7, 6, 5, 4, 3, 2, 1] }] },
    { role: 'supply', label: 'Supply', people: [{ name: 'Ben', q: [0, 0, 1, 2, 3, 4, 5] }, { name: 'Jerry', q: [0, 0, 0, 2, 4, 6, 8] }] },
  ],
  priceLabel: 'Price',
  qLabel: 'Cones',
};

export const pizzaTable: ScheduleConfig = {
  title: tr("Problem 8 — Pitsa bozori", 'Problem 8 — The market for pizza'),
  prices: [4, 5, 6, 7, 8, 9],
  groups: [
    { role: 'demand', label: 'Quantity Demanded', people: [{ name: 'D', q: [135, 104, 81, 68, 53, 39] }] },
    { role: 'supply', label: 'Quantity Supplied', people: [{ name: 'S', q: [26, 53, 81, 98, 110, 121] }] },
  ],
  priceLabel: 'Price',
  qLabel: 'Pizzas',
  unit: tr('pitsa', 'pizzas'),
};

export const ticketsTable: ScheduleConfig = {
  title: tr("Problem 11 — Basketbol chiptalari", 'Problem 11 — Basketball tickets'),
  prices: [4, 8, 12, 16, 20],
  groups: [
    { role: 'demand', label: 'Demand', people: [{ name: 'Old students', q: [10000, 8000, 6000, 4000, 2000] }] },
    { role: 'supply', label: 'Supply', people: [{ name: 'Seats', q: [8000, 8000, 8000, 8000, 8000] }] },
  ],
  optional: { label: tr("5,000 yangi talaba qo'shilsin (c qism)", 'Add 5,000 new students (part c)'), groupIndex: 0, person: { name: 'New students', q: [4000, 3000, 2000, 1000, 0] } },
  priceLabel: 'Price',
  qLabel: 'Tickets',
  unit: tr('chipta', 'tickets'),
};
