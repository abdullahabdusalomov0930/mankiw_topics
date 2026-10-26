import { describe, expect, it } from 'vitest';
import {
  ceilingWelfare,
  classifyElasticity,
  comparativeAdvantage,
  consumerSurplus,
  correlation,
  deadweightLoss,
  demandFromQ,
  demandThrough,
  equilibrium,
  freeTrade,
  midpointElasticity,
  midpointPct,
  negativeExternality,
  pigouvianTax,
  positiveExternality,
  predictShift,
  priceCeiling,
  priceFloor,
  producerSurplus,
  qd,
  qs,
  revenueDirection,
  revenueMaximizingTax,
  shiftDemand,
  shiftSupply,
  signedMidpointElasticity,
  slope,
  supplyFromQ,
  supplyThrough,
  tariff,
  tax,
  taxSchedule,
  taxWelfare,
} from './econ';

// Ch. 6 Problem 10 / Ch. 8 Problem 10: QS = 2P, QD = 300 − P
const D10 = demandFromQ(300, 1);
const S10 = supplyFromQ(0, 2);

describe('curves and equilibrium', () => {
  it('converts the textbook Q-form into inverse curves', () => {
    expect(D10).toEqual({ a: 300, b: 1 });
    expect(S10.c).toBeCloseTo(0);
    expect(S10.d).toBeCloseTo(0.5);
    expect(qd(D10, 100)).toBeCloseTo(200);
    expect(qs(S10, 100)).toBeCloseTo(200);
  });

  it('solves Ch. 6 Problem 10(a): P = 100, Q = 200', () => {
    const eq = equilibrium(D10, S10);
    expect(eq.P).toBeCloseTo(100);
    expect(eq.Q).toBeCloseTo(200);
  });

  it('reproduces Ch. 4 Figure 8 from the schedules ($4, 7 cones)', () => {
    // Market demand through ($4, 7) and ($5, 4); market supply through ($4, 7) and ($5, 10)
    const D = demandThrough({ Q: 7, P: 4 }, { Q: 4, P: 5 });
    const S = supplyThrough({ Q: 7, P: 4 }, { Q: 10, P: 5 });
    const eq = equilibrium(D, S);
    expect(eq.P).toBeCloseTo(4);
    expect(eq.Q).toBeCloseTo(7);
  });

  it('shifts curves horizontally', () => {
    const D = shiftDemand(D10, 30);
    expect(qd(D, 100)).toBeCloseTo(230);
    const S = shiftSupply(S10, -20);
    expect(qs(S, 100)).toBeCloseTo(180);
  });

  it('matches Ch. 4 Table 4 predictions', () => {
    expect(predictShift(1, 0)).toEqual({ P: 'up', Q: 'up' });
    expect(predictShift(0, 1)).toEqual({ P: 'down', Q: 'up' });
    expect(predictShift(0, -1)).toEqual({ P: 'up', Q: 'down' });
    expect(predictShift(1, 1)).toEqual({ P: 'ambiguous', Q: 'up' });
    expect(predictShift(1, -1)).toEqual({ P: 'up', Q: 'ambiguous' });
    expect(predictShift(-1, 1)).toEqual({ P: 'down', Q: 'ambiguous' });
    expect(predictShift(-1, -1)).toEqual({ P: 'ambiguous', Q: 'down' });
    expect(predictShift(0, 0)).toEqual({ P: 'same', Q: 'same' });
  });
});

describe('price controls (Ch. 6)', () => {
  it('Problem 10(b): ceiling $90 → shortage of 30', () => {
    const o = priceCeiling(D10, S10, 90);
    expect(o.binding).toBe(true);
    expect(o.P).toBe(90);
    expect(o.qs).toBeCloseTo(180);
    expect(o.qd).toBeCloseTo(210);
    expect(o.gap).toBeCloseTo(30);
    expect(o.Q).toBeCloseTo(180);
  });

  it('Problem 10(c): floor $90 is not binding', () => {
    const o = priceFloor(D10, S10, 90);
    expect(o.binding).toBe(false);
    expect(o.P).toBeCloseTo(100);
    expect(o.Q).toBeCloseTo(200);
    expect(o.gap).toBe(0);
  });

  it('Figure 1(b): ceiling $2 with eq. $3/100 → 125 demanded, 75 supplied', () => {
    const D = demandThrough({ Q: 100, P: 3 }, { Q: 125, P: 2 });
    const S = supplyThrough({ Q: 100, P: 3 }, { Q: 75, P: 2 });
    const o = priceCeiling(D, S, 2);
    expect(o.qd).toBeCloseTo(125);
    expect(o.qs).toBeCloseTo(75);
    expect(o.gap).toBeCloseTo(50);
    expect(priceCeiling(D, S, 4).binding).toBe(false);
  });

  it('Figure 4(b): floor $4 → 120 supplied, 80 demanded', () => {
    const D = demandThrough({ Q: 100, P: 3 }, { Q: 80, P: 4 });
    const S = supplyThrough({ Q: 100, P: 3 }, { Q: 120, P: 4 });
    const o = priceFloor(D, S, 4);
    expect(o.binding).toBe(true);
    expect(o.gap).toBeCloseTo(40);
    expect(priceFloor(D, S, 2).binding).toBe(false);
  });

  it('Problem 3: Frisbees — floor $10 sells 2M; ceiling $9 is then not binding', () => {
    const D = demandThrough({ Q: 6, P: 8 }, { Q: 4, P: 9 });
    const S = supplyThrough({ Q: 6, P: 8 }, { Q: 9, P: 9 });
    expect(equilibrium(D, S).P).toBeCloseTo(8);
    expect(priceFloor(D, S, 10).Q).toBeCloseTo(2);
    expect(priceCeiling(D, S, 9).binding).toBe(false);
  });
});

describe('taxes and incidence', () => {
  it('Problem 10(d): $30 tax on producers → buyers pay 120, sellers keep 90, Q = 180', () => {
    const t = tax(D10, S10, 30, 'sellers');
    expect(t.Pb).toBeCloseTo(120);
    expect(t.Ps).toBeCloseTo(90);
    expect(t.Q).toBeCloseTo(180);
    expect(t.marketPrice).toBeCloseTo(120);
    expect(t.revenue).toBeCloseTo(5400);
  });

  it('Figures 6 and 7: $0.50 tax → $3.30 / $2.80 / 90 cones whoever pays', () => {
    const D = demandThrough({ Q: 100, P: 3 }, { Q: 90, P: 3.3 });
    const S = supplyThrough({ Q: 100, P: 3 }, { Q: 90, P: 2.8 });
    for (const side of ['sellers', 'buyers'] as const) {
      const t = tax(D, S, 0.5, side);
      expect(t.Pb).toBeCloseTo(3.3);
      expect(t.Ps).toBeCloseTo(2.8);
      expect(t.Q).toBeCloseTo(90);
      expect(t.buyerShare).toBeCloseTo(0.6);
      expect(t.sellerShare).toBeCloseTo(0.4);
    }
    expect(tax(D, S, 0.5, 'buyers').marketPrice).toBeCloseTo(2.8);
  });

  it('puts the burden on the less elastic side', () => {
    // Flat supply (elastic), steep demand (inelastic): buyers pay most
    const t1 = tax({ a: 20, b: 2 }, { c: 4, d: 0.2 }, 2);
    expect(t1.buyerShare).toBeGreaterThan(0.8);
    // Steep supply, flat demand: sellers pay most (luxury tax on yachts)
    const t2 = tax({ a: 20, b: 0.2 }, { c: 4, d: 2 }, 2);
    expect(t2.sellerShare).toBeGreaterThan(0.8);
  });
});

describe('elasticity (Ch. 5)', () => {
  it('midpoint method: $4→$6 and 120→80 gives 40% each, elasticity 1', () => {
    expect(midpointPct(4, 6)).toBeCloseTo(40);
    expect(midpointPct(120, 80)).toBeCloseTo(-40);
    expect(midpointElasticity(120, 80, 4, 6)).toBeCloseTo(1);
    expect(midpointElasticity(80, 120, 6, 4)).toBeCloseTo(1);
  });

  it('Figure 4 table: elasticities along a linear demand curve', () => {
    const rows: [number, number, number, number, number][] = [
      [0, 2, 7, 6, 13.0],
      [2, 4, 6, 5, 3.7],
      [4, 6, 5, 4, 1.8],
      [6, 8, 4, 3, 1.0],
      [8, 10, 3, 2, 0.6],
      [10, 12, 2, 1, 0.3],
      [12, 14, 1, 0, 0.1],
    ];
    for (const [q1, q2, p1, p2, e] of rows) {
      expect(Math.round(midpointElasticity(q1, q2, p1, p2) * 10) / 10).toBeCloseTo(e);
    }
  });

  it('supply example: milk $2.85→$3.15, 9,000→11,000 gives 2', () => {
    expect(midpointElasticity(9000, 11000, 2.85, 3.15)).toBeCloseTo(2);
  });

  it('QuickQuiz 5: $16→$24, 90→110 gives 1/2', () => {
    expect(midpointElasticity(90, 110, 16, 24)).toBeCloseTo(0.5);
  });

  it('classifies and predicts total revenue', () => {
    expect(classifyElasticity(0)).toBe('perfectly inelastic');
    expect(classifyElasticity(0.4)).toBe('inelastic');
    expect(classifyElasticity(1)).toBe('unit elastic');
    expect(classifyElasticity(2.3)).toBe('elastic');
    expect(classifyElasticity(Infinity)).toBe('perfectly elastic');
    expect(revenueDirection(0.5, true)).toBe('up');
    expect(revenueDirection(2, true)).toBe('down');
    expect(revenueDirection(1, true)).toBe('same');
  });

  it('income elasticity keeps its sign (Problem 7: pizza at $12)', () => {
    // income $20,000 → $24,000; quantity 24 → 30
    expect(signedMidpointElasticity(24, 30, 20000, 24000)).toBeCloseTo(1.2222, 3);
  });
});

describe('surplus (Ch. 7)', () => {
  it('QuickQuiz 6: QS = 2P at P = 10 gives PS = 100', () => {
    expect(producerSurplus(supplyFromQ(0, 2), 10)).toBeCloseTo(100);
  });

  it('consumer surplus is the triangle under demand', () => {
    expect(consumerSurplus(D10, 100)).toBeCloseTo(0.5 * 200 * 200);
  });

  it('handles supply curves that start at a positive quantity', () => {
    // P = −1 + Q/25: 25 units have zero cost
    const S = { c: -1, d: 0.04 };
    expect(producerSurplus(S, 3)).toBeCloseTo(3 * 25 + 0.5 * 75 * 3);
  });

  it('a binding ceiling destroys surplus', () => {
    expect(ceilingWelfare(D10, S10, 90).dwl).toBeGreaterThan(0);
  });
});

describe('costs of taxation (Ch. 8)', () => {
  it('Problem 10: Q = 200 − 2T/3, revenue = T·Q, DWL = T²/3', () => {
    for (const T of [30, 90, 150, 240]) {
      const t = tax(D10, S10, T, 'buyers');
      expect(t.Q).toBeCloseTo(200 - (2 * T) / 3);
      expect(t.revenue).toBeCloseTo(T * (200 - (2 * T) / 3));
      expect(deadweightLoss(D10, S10, T)).toBeCloseTo((T * T) / 3);
    }
  });

  it('DWL quadruples when the tax doubles', () => {
    expect(deadweightLoss(D10, S10, 60) / deadweightLoss(D10, S10, 30)).toBeCloseTo(4);
    expect(deadweightLoss(D10, S10, 90) / deadweightLoss(D10, S10, 30)).toBeCloseTo(9);
  });

  it('welfare accounting: ΔCS + ΔPS + revenue = −DWL', () => {
    const w = taxWelfare(D10, S10, 30);
    expect(w.dwl).toBeCloseTo(300);
    expect(w.dwl).toBeCloseTo(deadweightLoss(D10, S10, 30));
  });

  it('the Laffer curve peaks at half the gap between intercepts', () => {
    expect(revenueMaximizingTax(D10, S10)).toBeCloseTo(150);
    const sched = taxSchedule(D10, S10, 300, 300);
    const best = sched.reduce((m, r) => (r.revenue > m.revenue ? r : m));
    expect(best.T).toBeCloseTo(150);
    expect(sched[sched.length - 1].revenue).toBeCloseTo(0);
  });

  it('Problem 9 (Smalltown hotels): $10 tax → revenue $9,000, DWL $500', () => {
    const D = demandThrough({ Q: 1000, P: 100 }, { Q: 900, P: 108 });
    const S = supplyThrough({ Q: 1000, P: 100 }, { Q: 900, P: 98 });
    const t = tax(D, S, 10);
    expect(t.revenue).toBeCloseTo(9000);
    expect(deadweightLoss(D, S, 10)).toBeCloseTo(500);
    expect(deadweightLoss(D, S, 20)).toBeCloseTo(2000);
  });
});

describe('international trade (Ch. 9)', () => {
  // Problem 5, Textilia: no-trade $20 & 3M; at $16 consumers buy 4M, producers make 1M
  const D = demandThrough({ Q: 3, P: 20 }, { Q: 4, P: 16 });
  const S = supplyThrough({ Q: 3, P: 20 }, { Q: 1, P: 16 });

  it('Textilia becomes an importer at $16', () => {
    const t = freeTrade(D, S, 16);
    expect(t.role).toBe('importer');
    expect(t.qd).toBeCloseTo(4);
    expect(t.qs).toBeCloseTo(1);
    expect(t.netExports).toBeCloseTo(-3);
    expect(t.dCS).toBeCloseTo(14); // $4 × (3 + 4)/2 million
    expect(t.dPS).toBeCloseTo(-8); // $4 × (3 + 1)/2 million
    expect(t.dTotal).toBeCloseTo(6);
  });

  it('a world price above the domestic price makes a country an exporter', () => {
    expect(freeTrade(D, S, 22).role).toBe('exporter');
    expect(freeTrade(D, S, 22).dTotal).toBeGreaterThan(0);
  });

  it('a tariff creates two deadweight-loss triangles', () => {
    const t = tariff(D, S, 16, 2);
    expect(t.price).toBeCloseTo(18);
    expect(t.revenue).toBeCloseTo(2 * (3.5 - 2));
    expect(t.dwlProduction).toBeCloseTo(0.5 * 2 * 1);
    expect(t.dwlConsumption).toBeCloseTo(0.5 * 2 * 0.5);
    expect(t.dCS + t.dPS + t.revenue).toBeCloseTo(-t.dwl);
  });
});

describe('externalities (Ch. 10)', () => {
  it('negative externality: market overproduces, Pigouvian tax fixes it', () => {
    const o = negativeExternality(D10, S10, 30);
    expect(o.optimum.Q).toBeLessThan(o.market.Q);
    expect(o.optimum.Q).toBeCloseTo(180);
    expect(o.dwl).toBeCloseTo(0.5 * 30 * 20);
    expect(pigouvianTax(D10, S10, 30, 30).dwl).toBeCloseTo(0);
    expect(pigouvianTax(D10, S10, 30, 0).dwl).toBeCloseTo(o.dwl);
  });

  it('positive externality: market underproduces', () => {
    const o = positiveExternality(D10, S10, 30);
    expect(o.optimum.Q).toBeGreaterThan(o.market.Q);
  });
});

describe('comparative advantage (Ch. 3)', () => {
  it('Frank and Ruby: per hour Frank 1 meat / 4 potatoes, Ruby 3 meat / 6 potatoes', () => {
    const r = comparativeAdvantage({ name: 'Frank', x: 1, y: 4 }, { name: 'Ruby', x: 3, y: 6 });
    // x = meat, y = potatoes
    expect(r.oc.Frank.xInY).toBeCloseTo(4);
    expect(r.oc.Ruby.xInY).toBeCloseTo(2);
    expect(r.oc.Ruby.yInX).toBeCloseTo(0.5);
    expect(r.absoluteX).toBe('Ruby');
    expect(r.absoluteY).toBe('Ruby');
    expect(r.comparativeX).toBe('Ruby');
    expect(r.comparativeY).toBe('Frank');
    expect(r.tradeRangeXinY).toEqual([2, 4]);
  });

  it('no gains when opportunity costs are equal (QuickQuiz 8)', () => {
    const r = comparativeAdvantage({ name: 'Kayla', x: 2, y: 3 }, { name: 'Roommate', x: 1, y: 1.5 });
    expect(r.gainsPossible).toBe(false);
  });
});

describe('graphing appendix (Ch. 2)', () => {
  it("Emma's demand curve has slope −1/4", () => {
    expect(slope(13, 8, 21, 6)).toBeCloseTo(-0.25);
  });

  it('detects positive and negative correlation', () => {
    expect(correlation([1, 2, 3, 4], [2, 4, 6, 8])).toBeCloseTo(1);
    expect(correlation([1, 2, 3, 4], [8, 6, 4, 2])).toBeCloseTo(-1);
  });
});

import { ppfOpportunityCost, ppfStatus, ppfY, scheduleEquilibrium, sumSchedules } from './econ';

describe('PPF (Ch. 2)', () => {
  const f = { X: 1000, Y: 3000, p: 1, q: 3 };
  it('passes close to the book points A and B', () => {
    expect(ppfY(f, 600)).toBeGreaterThan(2150);
    expect(ppfY(f, 600)).toBeLessThan(2250);
    expect(ppfY(f, 700)).toBeGreaterThan(1950);
    expect(ppfY(f, 700)).toBeLessThan(2050);
  });
  it('classifies points', () => {
    expect(ppfStatus(f, 600, 2200)).toBe('efficient');
    expect(ppfStatus(f, 300, 1000)).toBe('inefficient');
    expect(ppfStatus(f, 800, 2500)).toBe('unattainable');
  });
  it('is bowed out: opportunity cost rises with x', () => {
    expect(ppfOpportunityCost(f, 900)).toBeGreaterThan(ppfOpportunityCost(f, 200));
  });
  it('a linear PPF has constant opportunity cost (Frank: 8 meat or 32 potatoes)', () => {
    const frank = { X: 32, Y: 8, p: 1, q: 1 };
    expect(ppfOpportunityCost(frank, 5)).toBeCloseTo(0.25);
    expect(ppfOpportunityCost(frank, 25)).toBeCloseTo(0.25);
  });
});

describe('schedules (Ch. 4)', () => {
  it('Figure 2: Catherine + Nicholas', () => {
    const cath = [12, 10, 8, 6, 4, 2, 0];
    const nich = [7, 6, 5, 4, 3, 2, 1];
    expect(sumSchedules([cath, nich])).toEqual([19, 16, 13, 10, 7, 4, 1]);
  });
  it('Problem 8: pizza equilibrium $6, 81', () => {
    const e = scheduleEquilibrium([4, 5, 6, 7, 8, 9], [135, 104, 81, 68, 53, 39], [26, 53, 81, 98, 110, 121]);
    expect(e).toEqual({ P: 6, Q: 81, exact: true });
  });
  it('Problem 11: tickets with new students → $12, 8,000', () => {
    const d = sumSchedules([[10000, 8000, 6000, 4000, 2000], [4000, 3000, 2000, 1000, 0]]);
    const e = scheduleEquilibrium([4, 8, 12, 16, 20], d, [8000, 8000, 8000, 8000, 8000]);
    expect(e).toEqual({ P: 12, Q: 8000, exact: true });
  });
});
