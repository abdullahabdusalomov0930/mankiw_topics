/**
 * Pure economics math used by every interactive graph.
 *
 * Curves are linear and written in inverse form (price as a function of quantity),
 * which is how they are drawn on a supply-and-demand diagram:
 *   demand  P = a − b·Q   (b > 0)
 *   supply  P = c + d·Q   (d > 0)
 * Everything here is unit-tested in econ.test.ts.
 */

export interface Demand {
  /** price intercept (choke price) */
  a: number;
  /** slope magnitude: price falls by b for each extra unit */
  b: number;
}

export interface Supply {
  /** price intercept (may be negative: then some quantity is supplied at P = 0) */
  c: number;
  /** slope: price rises by d for each extra unit */
  d: number;
}

export interface Point {
  P: number;
  Q: number;
}

const EPS = 1e-9;

// ---------- Curves ----------

/** Quantity demanded at price P (never negative). */
export function qd(D: Demand, P: number): number {
  return Math.max(0, (D.a - P) / D.b);
}

/** Quantity supplied at price P (never negative). */
export function qs(S: Supply, P: number): number {
  return Math.max(0, (P - S.c) / S.d);
}

/** Height of the demand curve (willingness to pay of the marginal buyer) at quantity Q. */
export function demandPrice(D: Demand, Q: number): number {
  return D.a - D.b * Q;
}

/** Height of the supply curve (cost of the marginal seller) at quantity Q. */
export function supplyPrice(S: Supply, Q: number): number {
  return S.c + S.d * Q;
}

/** Build a demand curve through two (Q, P) points. */
export function demandThrough(p1: Point, p2: Point): Demand {
  const b = -(p2.P - p1.P) / (p2.Q - p1.Q);
  return { a: p1.P + b * p1.Q, b };
}

/** Build a supply curve through two (Q, P) points. */
export function supplyThrough(p1: Point, p2: Point): Supply {
  const d = (p2.P - p1.P) / (p2.Q - p1.Q);
  return { c: p1.P - d * p1.Q, d };
}

/** Demand written as Q = α − β·P (the textbook's "QD = 300 − P" form). */
export function demandFromQ(alpha: number, beta: number): Demand {
  return { a: alpha / beta, b: 1 / beta };
}

/** Supply written as Q = γ + δ·P (the textbook's "QS = 2P" form). */
export function supplyFromQ(gamma: number, delta: number): Supply {
  return { c: -gamma / delta, d: 1 / delta };
}

// ---------- Equilibrium and shifts ----------

/** Market equilibrium. If the curves never cross at a positive quantity, Q = 0. */
export function equilibrium(D: Demand, S: Supply): Point {
  const Q = (D.a - S.c) / (D.b + S.d);
  if (Q <= 0) return { Q: 0, P: Math.max(D.a, S.c) };
  return { Q, P: D.a - D.b * Q };
}

/** Shift demand horizontally by dQ units at every price (+ = increase in demand). */
export function shiftDemand(D: Demand, dQ: number): Demand {
  return { a: D.a + D.b * dQ, b: D.b };
}

/** Shift supply horizontally by dQ units at every price (+ = increase in supply). */
export function shiftSupply(S: Supply, dQ: number): Supply {
  return { c: S.c - S.d * dQ, d: S.d };
}

export type Direction = 'up' | 'down' | 'same' | 'ambiguous';

/**
 * Qualitative prediction from Mankiw Ch. 4 Table 4 for a demand shift and a supply shift.
 * dD, dS ∈ {-1, 0, 1}.
 */
export function predictShift(dD: -1 | 0 | 1, dS: -1 | 0 | 1): { P: Direction; Q: Direction } {
  const dir = (x: number): Direction => (x > 0 ? 'up' : x < 0 ? 'down' : 'same');
  // Demand pushes P and Q the same way; supply pushes P opposite, Q the same way.
  const pushP = [dD, -dS].filter((x) => x !== 0);
  const pushQ = [dD, dS].filter((x) => x !== 0);
  const combine = (arr: number[]): Direction =>
    arr.length === 0 ? 'same' : arr.every((x) => x === arr[0]) ? dir(arr[0]) : 'ambiguous';
  return { P: combine(pushP), Q: combine(pushQ) };
}

// ---------- Price controls (Ch. 6) ----------

export interface PriceControlOutcome {
  binding: boolean;
  /** price at which trade happens */
  P: number;
  /** quantity actually bought and sold (the short side of the market) */
  Q: number;
  qd: number;
  qs: number;
  /** shortage for a ceiling, surplus for a floor (0 if not binding) */
  gap: number;
}

export function priceCeiling(D: Demand, S: Supply, pMax: number): PriceControlOutcome {
  const eq = equilibrium(D, S);
  if (pMax >= eq.P - EPS) {
    return { binding: false, P: eq.P, Q: eq.Q, qd: eq.Q, qs: eq.Q, gap: 0 };
  }
  const d = qd(D, pMax);
  const s = qs(S, pMax);
  return { binding: true, P: pMax, Q: Math.min(d, s), qd: d, qs: s, gap: d - s };
}

export function priceFloor(D: Demand, S: Supply, pMin: number): PriceControlOutcome {
  const eq = equilibrium(D, S);
  if (pMin <= eq.P + EPS) {
    return { binding: false, P: eq.P, Q: eq.Q, qd: eq.Q, qs: eq.Q, gap: 0 };
  }
  const d = qd(D, pMin);
  const s = qs(S, pMin);
  return { binding: true, P: pMin, Q: Math.min(d, s), qd: d, qs: s, gap: s - d };
}

// ---------- Taxes and tax incidence (Ch. 6, 8) ----------

export type TaxedSide = 'sellers' | 'buyers';

export interface TaxOutcome {
  /** quantity with the tax */
  Q: number;
  /** price buyers pay (including tax) */
  Pb: number;
  /** price sellers keep (after tax) */
  Ps: number;
  /** the price that changes hands between buyer and seller (what a price tag shows) */
  marketPrice: number;
  revenue: number;
  /** share of the tax borne by buyers, 0..1 */
  buyerShare: number;
  sellerShare: number;
  before: Point;
}

/** Supply curve as seen in the market when sellers must pay T per unit (shifts up by T). */
export function supplyWithTax(S: Supply, T: number): Supply {
  return { c: S.c + T, d: S.d };
}

/** Demand curve as seen in the market when buyers must pay T per unit (shifts down by T). */
export function demandWithTax(D: Demand, T: number): Demand {
  return { a: D.a - T, b: D.b };
}

export function tax(D: Demand, S: Supply, T: number, on: TaxedSide = 'sellers'): TaxOutcome {
  const before = equilibrium(D, S);
  const Q = Math.max(0, (D.a - S.c - T) / (D.b + S.d));
  const Pb = Q > 0 ? D.a - D.b * Q : D.a;
  const Ps = Pb - T;
  const revenue = T * Q;
  const buyerShare = T > 0 ? clamp01((Pb - before.P) / T) : 0;
  return {
    Q,
    Pb,
    Ps,
    marketPrice: on === 'sellers' ? Pb : Ps,
    revenue,
    buyerShare,
    sellerShare: T > 0 ? 1 - buyerShare : 0,
    before,
  };
}

/** Point elasticity of linear demand at (Q, P): (ΔQ/ΔP)·(P/Q). */
export function demandElasticityAt(D: Demand, p: Point): number {
  if (p.Q <= 0) return Infinity;
  return (1 / D.b) * (p.P / p.Q);
}

/** Point elasticity of linear supply at (Q, P). */
export function supplyElasticityAt(S: Supply, p: Point): number {
  if (p.Q <= 0) return Infinity;
  return (1 / S.d) * (p.P / p.Q);
}

// ---------- Elasticity (Ch. 5) ----------

/** Percentage change using the midpoint method, in percent. */
export function midpointPct(x1: number, x2: number): number {
  const mid = (x1 + x2) / 2;
  if (mid === 0) return 0;
  return ((x2 - x1) / mid) * 100;
}

/** Ordinary percentage change from the starting value, in percent. */
export function simplePct(x1: number, x2: number): number {
  if (x1 === 0) return Infinity;
  return ((x2 - x1) / x1) * 100;
}

/** Elasticity between two points with the midpoint method (absolute value). */
export function midpointElasticity(q1: number, q2: number, p1: number, p2: number): number {
  const dp = midpointPct(p1, p2);
  const dq = midpointPct(q1, q2);
  if (dp === 0) return dq === 0 ? 0 : Infinity;
  return Math.abs(dq / dp);
}

/** Generic elasticity = %Δ(quantity) / %Δ(driver); signed (use for income and cross-price). */
export function signedMidpointElasticity(q1: number, q2: number, x1: number, x2: number): number {
  const dx = midpointPct(x1, x2);
  if (dx === 0) return 0;
  return midpointPct(q1, q2) / dx;
}

export type ElasticityClass =
  | 'perfectly inelastic'
  | 'inelastic'
  | 'unit elastic'
  | 'elastic'
  | 'perfectly elastic';

export function classifyElasticity(e: number, tol = 0.005): ElasticityClass {
  const x = Math.abs(e);
  if (!Number.isFinite(x)) return 'perfectly elastic';
  if (x < tol) return 'perfectly inelastic';
  if (Math.abs(x - 1) < tol) return 'unit elastic';
  return x < 1 ? 'inelastic' : 'elastic';
}

export function totalRevenue(P: number, Q: number): number {
  return P * Q;
}

/** Ch. 5 rule: what happens to total revenue when price changes, given elasticity. */
export function revenueDirection(e: number, priceUp: boolean): Direction {
  const c = classifyElasticity(e);
  if (c === 'unit elastic') return 'same';
  const sameDirection = c === 'inelastic' || c === 'perfectly inelastic';
  return sameDirection === priceUp ? 'up' : 'down';
}

// ---------- Surplus (Ch. 7) ----------

/** Area under demand and above price P for the first Q units. Defaults to Q = Qd(P). */
export function consumerSurplus(D: Demand, P: number, Q = qd(D, P)): number {
  const q = Math.min(Q, qd(D, P));
  if (q <= 0) return 0;
  return (D.a - P) * q - (D.b * q * q) / 2;
}

/**
 * Area above supply and below price P for the first Q units. Defaults to Q = Qs(P).
 * Sellers' cost is never below zero (a supply curve with a negative intercept means
 * some sellers would supply at a zero price).
 */
export function producerSurplus(S: Supply, P: number, Q = qs(S, P)): number {
  const q = Math.min(Q, qs(S, P));
  if (q <= 0) return 0;
  const q0 = S.c < 0 ? Math.min(q, -S.c / S.d) : 0; // units with zero cost
  const zeroCostPart = P * q0;
  const rest = (P - S.c) * (q - q0) - (S.d * (q * q - q0 * q0)) / 2;
  return zeroCostPart + rest;
}

export interface Welfare {
  cs: number;
  ps: number;
  revenue: number;
  total: number;
  dwl: number;
}

/** Welfare at the free-market equilibrium. */
export function marketWelfare(D: Demand, S: Supply): Welfare {
  const eq = equilibrium(D, S);
  const cs = consumerSurplus(D, eq.P, eq.Q);
  const ps = producerSurplus(S, eq.P, eq.Q);
  return { cs, ps, revenue: 0, total: cs + ps, dwl: 0 };
}

/** Welfare with a per-unit tax T (Ch. 8, Figure 3). */
export function taxWelfare(D: Demand, S: Supply, T: number): Welfare {
  const t = tax(D, S, T);
  const cs = consumerSurplus(D, t.Pb, t.Q);
  const ps = producerSurplus(S, t.Ps, t.Q);
  const total = cs + ps + t.revenue;
  return { cs, ps, revenue: t.revenue, total, dwl: marketWelfare(D, S).total - total };
}

/** Deadweight loss of a tax on linear curves: ½·T·ΔQ = T²/(2(b+d)) while trade continues. */
export function deadweightLoss(D: Demand, S: Supply, T: number): number {
  const eq = equilibrium(D, S);
  const t = tax(D, S, T);
  if (t.Q === 0) return marketWelfare(D, S).total;
  return 0.5 * T * (eq.Q - t.Q);
}

/** Tax revenue and deadweight loss for a range of tax sizes (Ch. 8, Figure 6 d–e). */
export function taxSchedule(D: Demand, S: Supply, maxT: number, steps = 60) {
  const out: { T: number; revenue: number; dwl: number }[] = [];
  for (let i = 0; i <= steps; i++) {
    const T = (maxT * i) / steps;
    out.push({ T, revenue: tax(D, S, T).revenue, dwl: deadweightLoss(D, S, T) });
  }
  return out;
}

/** Revenue-maximizing tax on linear curves (top of the Laffer curve). */
export function revenueMaximizingTax(D: Demand, S: Supply): number {
  return Math.max(0, (D.a - S.c) / 2);
}

/** Welfare under a binding price ceiling, assuming the good goes to the buyers who value it most. */
export function ceilingWelfare(D: Demand, S: Supply, pMax: number): Welfare {
  const o = priceCeiling(D, S, pMax);
  const cs = consumerSurplus(D, o.P, o.Q);
  const ps = producerSurplus(S, o.P, o.Q);
  const total = cs + ps;
  return { cs, ps, revenue: 0, total, dwl: marketWelfare(D, S).total - total };
}

/** Welfare under a binding price floor, assuming the lowest-cost sellers make the sales. */
export function floorWelfare(D: Demand, S: Supply, pMin: number): Welfare {
  const o = priceFloor(D, S, pMin);
  const cs = consumerSurplus(D, o.P, o.Q);
  const ps = producerSurplus(S, o.P, o.Q);
  const total = cs + ps;
  return { cs, ps, revenue: 0, total, dwl: marketWelfare(D, S).total - total };
}

// ---------- International trade (Ch. 9) ----------

export interface TradeOutcome {
  role: 'exporter' | 'importer' | 'no trade';
  domesticPrice: number;
  qd: number;
  qs: number;
  /** exports (+) or imports (−) */
  netExports: number;
  cs: number;
  ps: number;
  total: number;
  dCS: number;
  dPS: number;
  dTotal: number;
}

export function freeTrade(D: Demand, S: Supply, worldPrice: number): TradeOutcome {
  const autarky = equilibrium(D, S);
  const base = marketWelfare(D, S);
  const d = qd(D, worldPrice);
  const s = qs(S, worldPrice);
  const cs = consumerSurplus(D, worldPrice, d);
  const ps = producerSurplus(S, worldPrice, s);
  const role =
    Math.abs(worldPrice - autarky.P) < 1e-9 ? 'no trade' : worldPrice > autarky.P ? 'exporter' : 'importer';
  return {
    role,
    domesticPrice: worldPrice,
    qd: d,
    qs: s,
    netExports: s - d,
    cs,
    ps,
    total: cs + ps,
    dCS: cs - base.cs,
    dPS: ps - base.ps,
    dTotal: cs + ps - base.total,
  };
}

export interface TariffOutcome {
  price: number;
  qd1: number;
  qs1: number;
  qd2: number;
  qs2: number;
  imports1: number;
  imports2: number;
  revenue: number;
  /** area D in Figure 4: overproduction */
  dwlProduction: number;
  /** area F in Figure 4: underconsumption */
  dwlConsumption: number;
  dwl: number;
  dCS: number;
  dPS: number;
}

/** Tariff t on an importing country (Ch. 9, Figure 4). Price never rises above the no-trade price. */
export function tariff(D: Demand, S: Supply, worldPrice: number, t: number): TariffOutcome {
  const autarky = equilibrium(D, S);
  const price = Math.min(worldPrice + t, Math.max(autarky.P, worldPrice));
  const qd1 = qd(D, worldPrice);
  const qs1 = qs(S, worldPrice);
  const qd2 = qd(D, price);
  const qs2 = qs(S, price);
  const imports1 = Math.max(0, qd1 - qs1);
  const imports2 = Math.max(0, qd2 - qs2);
  const dp = price - worldPrice;
  const revenue = dp * imports2;
  const dwlProduction = 0.5 * dp * (qs2 - qs1);
  const dwlConsumption = 0.5 * dp * (qd1 - qd2);
  return {
    price,
    qd1,
    qs1,
    qd2,
    qs2,
    imports1,
    imports2,
    revenue,
    dwlProduction,
    dwlConsumption,
    dwl: dwlProduction + dwlConsumption,
    dCS: consumerSurplus(D, price, qd2) - consumerSurplus(D, worldPrice, qd1),
    dPS: producerSurplus(S, price, qs2) - producerSurplus(S, worldPrice, qs1),
  };
}

// ---------- Externalities (Ch. 10) ----------

export interface ExternalityOutcome {
  market: Point;
  optimum: Point;
  /** welfare lost by producing the market quantity instead of the optimum */
  dwl: number;
}

/** Negative externality: constant external cost per unit (social cost = supply + mec). */
export function negativeExternality(D: Demand, S: Supply, mec: number): ExternalityOutcome {
  const market = equilibrium(D, S);
  const optimum = equilibrium(D, { c: S.c + mec, d: S.d });
  return { market, optimum, dwl: 0.5 * mec * Math.max(0, market.Q - optimum.Q) };
}

/** Positive externality: constant external benefit per unit (social value = demand + meb). */
export function positiveExternality(D: Demand, S: Supply, meb: number): ExternalityOutcome {
  const market = equilibrium(D, S);
  const optimum = equilibrium({ a: D.a + meb, b: D.b }, S);
  return { market, optimum, dwl: 0.5 * meb * Math.max(0, optimum.Q - market.Q) };
}

/** Market outcome with a corrective (Pigovian) tax t on a good with external cost mec. */
export function pigouvianTax(D: Demand, S: Supply, mec: number, t: number) {
  const withTax = tax(D, S, t);
  const optimum = equilibrium(D, { c: S.c + mec, d: S.d });
  // Social surplus lost relative to the optimum (triangle between D and social cost).
  const gap = withTax.Q - optimum.Q;
  const slope = D.b + S.d;
  const dwl = 0.5 * slope * gap * gap;
  return { ...withTax, optimum, dwl };
}

// ---------- Comparative advantage (Ch. 3) ----------

export interface Producer {
  name: string;
  /** output of good X per hour */
  x: number;
  /** output of good Y per hour */
  y: number;
}

export function comparativeAdvantage(p1: Producer, p2: Producer) {
  const oc = (p: Producer) => ({ xInY: p.y / p.x, yInX: p.x / p.y });
  const o1 = oc(p1);
  const o2 = oc(p2);
  const absX = p1.x === p2.x ? null : p1.x > p2.x ? p1.name : p2.name;
  const absY = p1.y === p2.y ? null : p1.y > p2.y ? p1.name : p2.name;
  const compX = o1.xInY === o2.xInY ? null : o1.xInY < o2.xInY ? p1.name : p2.name;
  const compY = o1.yInX === o2.yInX ? null : o1.yInX < o2.yInX ? p1.name : p2.name;
  return {
    oc: { [p1.name]: o1, [p2.name]: o2 },
    absoluteX: absX,
    absoluteY: absY,
    comparativeX: compX,
    comparativeY: compY,
    /** price of one X, in units of Y, at which both gain */
    tradeRangeXinY: [Math.min(o1.xInY, o2.xInY), Math.max(o1.xInY, o2.xInY)] as [number, number],
    gainsPossible: o1.xInY !== o2.xInY,
  };
}

// ---------- Graphing basics (Ch. 2 appendix) ----------

export function slope(x1: number, y1: number, x2: number, y2: number): number {
  if (x2 === x1) return y2 === y1 ? 0 : Infinity;
  return (y2 - y1) / (x2 - x1);
}

/** Pearson correlation of a scatterplot. */
export function correlation(xs: number[], ys: number[]): number {
  const n = xs.length;
  const mx = xs.reduce((s, v) => s + v, 0) / n;
  const my = ys.reduce((s, v) => s + v, 0) / n;
  let sxy = 0;
  let sxx = 0;
  let syy = 0;
  for (let i = 0; i < n; i++) {
    sxy += (xs[i] - mx) * (ys[i] - my);
    sxx += (xs[i] - mx) ** 2;
    syy += (ys[i] - my) ** 2;
  }
  return sxx === 0 || syy === 0 ? 0 : sxy / Math.sqrt(sxx * syy);
}

// ---------- Utilities ----------

export function clamp(x: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, x));
}

function clamp01(x: number): number {
  return clamp(x, 0, 1);
}

/** Round for display without trailing zeros: 3.3 → "3.3", 100 → "100". */
export function fmt(x: number, digits = 2): string {
  if (!Number.isFinite(x)) return '∞';
  const r = Math.round(x * 10 ** digits) / 10 ** digits;
  return (Object.is(r, -0) ? 0 : r).toLocaleString('en-US', { maximumFractionDigits: digits });
}

/** Money for display: "$3.30". */
export function money(x: number, digits = 2): string {
  if (!Number.isFinite(x)) return '∞';
  const sign = x < 0 ? '−' : '';
  return `${sign}$${Math.abs(x).toFixed(digits)}`;
}

// ---------- Production possibilities frontier (Ch. 2, 3) ----------

/**
 * Frontier y = Y·(1 − (x/X)^p)^(1/q). With p = q = 1 it is a straight line (Ch. 3);
 * p = 1, q = 3 is bowed out and passes through the book's points A (600, 2,200) and B (700, 2,000).
 */
export interface PPF {
  X: number;
  Y: number;
  p: number;
  q: number;
}

export function ppfY(f: PPF, x: number): number {
  if (x <= 0) return f.Y;
  if (x >= f.X) return 0;
  return f.Y * Math.pow(1 - Math.pow(x / f.X, f.p), 1 / f.q);
}

/** Opportunity cost of one more unit of x, in units of y (minus the slope). */
export function ppfOpportunityCost(f: PPF, x: number): number {
  const xx = clamp(x, 1e-6, f.X * (1 - 1e-6));
  const inner = 1 - Math.pow(xx / f.X, f.p);
  return (f.Y / f.q) * Math.pow(inner, 1 / f.q - 1) * (f.p * Math.pow(xx, f.p - 1)) / Math.pow(f.X, f.p);
}

export type PPFStatus = 'efficient' | 'inefficient' | 'unattainable';

export function ppfStatus(f: PPF, x: number, y: number, tol = 0.02): PPFStatus {
  if (x > f.X * (1 + tol) || y > f.Y * (1 + tol)) return 'unattainable';
  const frontier = ppfY(f, Math.min(x, f.X));
  if (Math.abs(y - frontier) <= tol * f.Y) return 'efficient';
  return y < frontier ? 'inefficient' : 'unattainable';
}

// ---------- Schedules (Ch. 4) ----------

/** Market schedule = horizontal sum of individual schedules (same price rows). */
export function sumSchedules(schedules: number[][]): number[] {
  if (schedules.length === 0) return [];
  return schedules[0].map((_, i) => schedules.reduce((s, sch) => s + (sch[i] ?? 0), 0));
}

/** Equilibrium row in a schedule table: first price where Qd = Qs, else where the sign of Qd − Qs flips. */
export function scheduleEquilibrium(prices: number[], qdArr: number[], qsArr: number[]) {
  for (let i = 0; i < prices.length; i++) if (qdArr[i] === qsArr[i]) return { P: prices[i], Q: qdArr[i], exact: true };
  for (let i = 1; i < prices.length; i++) {
    const g0 = qdArr[i - 1] - qsArr[i - 1];
    const g1 = qdArr[i] - qsArr[i];
    if (g0 * g1 < 0) {
      const t = g0 / (g0 - g1);
      return { P: prices[i - 1] + t * (prices[i] - prices[i - 1]), Q: qdArr[i - 1] + t * (qdArr[i] - qdArr[i - 1]), exact: false };
    }
  }
  return null;
}
