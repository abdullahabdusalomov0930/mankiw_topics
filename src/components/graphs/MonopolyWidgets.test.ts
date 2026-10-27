import { describe, expect, it } from 'vitest';
import { monopolyOutcome } from './MonopolyWidgets';

describe('linear monopoly (Ch. 16 problems)', () => {
  it('Problem 8: Potter produces 20 at $50', () => {
    const o = monopolyOutcome({ a: 70, b: 1, c: 10, d: 1, F: 0 });
    expect(o.qm).toBeCloseTo(20);
    expect(o.pm).toBeCloseTo(50);
  });
  it('Problem 9: Wiknam sells 3 balls at $7 with profit 10.5', () => {
    const o = monopolyOutcome({ a: 10, b: 1, c: 1, d: 1, F: 3 });
    expect(o.qm).toBeCloseTo(3);
    expect(o.pm).toBeCloseTo(7);
    expect(o.profit).toBeCloseTo(10.5);
  });
  it('Problem 10: monopoly 30 at $700, efficient 45 at $550, DWL 2,250', () => {
    const o = monopolyOutcome({ a: 1000, b: 10, c: 100, d: 10, F: 0 });
    expect(o.qm).toBeCloseTo(30);
    expect(o.pm).toBeCloseTo(700);
    expect(o.qc).toBeCloseTo(45);
    expect(o.pc).toBeCloseTo(550);
    expect(o.dwl).toBeCloseTo(2250);
  });
});
