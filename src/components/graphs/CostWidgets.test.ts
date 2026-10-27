import { describe, expect, it } from 'vitest';
import { COST_PRESETS, costMeasures, efficientScale } from './CostWidgets';

describe('cost measures (Ch. 14)', () => {
  it("reproduces Caleb's Table 2", () => {
    const m = costMeasures(COST_PRESETS.caleb.rows);
    expect(m[2].atc).toBeCloseTo(1.9);
    expect(m[3].mc).toBeCloseTo(0.7);
    expect(m[7].atc).toBeCloseTo(1.33, 2);
    expect(m[10].mc).toBeCloseTo(2.1);
    expect(efficientScale(COST_PRESETS.caleb.rows)).toEqual([5, 6]);
  });
  it('Problem 7: Vinnie efficient scale is 4 houses', () => {
    expect(efficientScale(COST_PRESETS.vinnie.rows)).toEqual([4]);
  });
  it('Problem 4: Nimbus marginal cost per broom', () => {
    const m = costMeasures(COST_PRESETS.nimbus.rows);
    expect(m[1].mc).toBeCloseTo(5);
    expect(m[7].mc).toBeCloseTo(20);
  });
});
