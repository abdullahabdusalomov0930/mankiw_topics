import type { ScheduleConfig } from '../../../components/graphs/ScheduleBuilder';
import type { SDConfig } from '../../../components/graphs/SupplyDemandGraph';
import { demandThrough, shiftDemand, shiftSupply, supplyThrough } from '../../../lib/econ';

const ice = { x: 'Quantity of Ice-Cream Cones', xUz: 'Muzqaymoq soni', y: 'Price of Cone', yUz: 'Narx', unit: 'dona' };

/** Market curves of Figure 8: equilibrium $4 and 7 cones; at $5 Qs 10 / Qd 4; at $3 Qd 10 / Qs 4. */
export const marketD = demandThrough({ Q: 7, P: 4 }, { Q: 4, P: 5 });
export const marketS = supplyThrough({ Q: 7, P: 4 }, { Q: 10, P: 5 });

export const equilibrium: SDConfig = {
  title: "Figures 8–9 — Muvozanat va muvozanatsiz bozor",
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
  title: "Figure 3 / 10 — Talab siljishi",
  demand: marketD,
  supply: marketS,
  xMax: 16,
  yMax: 7,
  labels: ice,
  modes: ['market'],
  moveAlong: true,
  qtyDigits: 1,
  presets: [
    { label: "Boshlang'ich", demand: marketD, supply: marketS },
    { label: 'Issiq yoz (Figure 10)', demand: shiftDemand(marketD, 6) },
  ],
};

export const supplyShifts: SDConfig = {
  title: "Figure 7 / 11 — Taklif siljishi",
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
  title: "Figure 4 — Chekishni kamaytirishning ikki yo'li",
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
    { label: "(a) Ogohlantirishlar: talab siljiydi", demand: shiftDemand(cigD, -10), supply: { c: 5, d: 0.0001 }, note: "Narx $5 da qoldi, lekin talab miqdori 20 → 10: **talab egri chizig'i chapga siljidi**." },
    { label: "(b) Soliq: narx $10 bo'ladi", demand: cigD, supply: { c: 10, d: 0.0001 }, note: "Talab egri chizig'i joyida; narx $5 → $10, miqdor 20 → 12 — **egri chiziq bo'ylab harakat**." },
  ],
};

// ---------- schedule tables ----------

export const catherine: ScheduleConfig = {
  title: "Figure 1 — Catherine'ning talab jadvali va egri chizig'i",
  prices: [0, 1, 2, 3, 4, 5, 6],
  groups: [{ role: 'demand', label: 'Catherine', people: [{ name: 'Catherine', q: [12, 10, 8, 6, 4, 2, 0] }] }],
  priceLabel: 'Price of Cone',
  qLabel: 'Cones',
};

export const marketDemand: ScheduleConfig = {
  title: "Figure 2 — Bozor talabi = individual talablar yig'indisi",
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
  title: "Figure 5 — Ben'ning taklif jadvali va egri chizig'i",
  prices: [0, 1, 2, 3, 4, 5, 6],
  groups: [{ role: 'supply', label: 'Ben', people: [{ name: 'Ben', q: [0, 0, 1, 2, 3, 4, 5] }] }],
  priceLabel: 'Price of Cone',
  qLabel: 'Cones',
};

export const marketSupply: ScheduleConfig = {
  title: "Figure 6 — Bozor taklifi = individual takliflar yig'indisi",
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
  title: "Figure 8 — Bozor talabi va taklifi birga",
  prices: [0, 1, 2, 3, 4, 5, 6],
  groups: [
    { role: 'demand', label: 'Demand', people: [{ name: 'Catherine', q: [12, 10, 8, 6, 4, 2, 0] }, { name: 'Nicholas', q: [7, 6, 5, 4, 3, 2, 1] }] },
    { role: 'supply', label: 'Supply', people: [{ name: 'Ben', q: [0, 0, 1, 2, 3, 4, 5] }, { name: 'Jerry', q: [0, 0, 0, 2, 4, 6, 8] }] },
  ],
  priceLabel: 'Price',
  qLabel: 'Cones',
};

export const pizzaTable: ScheduleConfig = {
  title: "Problem 8 — Pitsa bozori",
  prices: [4, 5, 6, 7, 8, 9],
  groups: [
    { role: 'demand', label: 'Quantity Demanded', people: [{ name: 'D', q: [135, 104, 81, 68, 53, 39] }] },
    { role: 'supply', label: 'Quantity Supplied', people: [{ name: 'S', q: [26, 53, 81, 98, 110, 121] }] },
  ],
  priceLabel: 'Price',
  qLabel: 'Pizzas',
  unit: 'pitsa',
};

export const ticketsTable: ScheduleConfig = {
  title: "Problem 11 — Basketbol chiptalari",
  prices: [4, 8, 12, 16, 20],
  groups: [
    { role: 'demand', label: 'Demand', people: [{ name: 'Old students', q: [10000, 8000, 6000, 4000, 2000] }] },
    { role: 'supply', label: 'Supply', people: [{ name: 'Seats', q: [8000, 8000, 8000, 8000, 8000] }] },
  ],
  optional: { label: "5,000 yangi talaba qo'shilsin (c qism)", groupIndex: 0, person: { name: 'New students', q: [4000, 3000, 2000, 1000, 0] } },
  priceLabel: 'Price',
  qLabel: 'Tickets',
  unit: 'chipta',
};
