import { describe, expect, it } from 'vitest';
import { BOOK_2020, marginalRate, taxOwed } from './Ch13Widgets';

describe('tax schedules (Ch. 13)', () => {
  it('book example: 20% to $50k, 50% above → $15,000 on $60,000', () => {
    expect(taxOwed([[0, 0.2], [50000, 0.5]], 60000)).toBe(15000);
  });
  it('QuickQuiz 4: $20k exempt, 25% above → 15% average, 25% marginal at $50k', () => {
    const t = taxOwed([[0, 0], [20000, 0.25]], 50000);
    expect(t / 50000).toBeCloseTo(0.15);
    expect(marginalRate([[0, 0], [20000, 0.25]], 50000)).toBe(0.25);
  });
  it('Problem 2 with the book Table 2', () => {
    expect(taxOwed(BOOK_2020, 40000)).toBeCloseTo(987.5 + 0.15 * 30125);
    expect(taxOwed(BOOK_2020, 80000)).toBeCloseTo(987.5 + 0.15 * 30250 + 0.22 * 39875);
  });
});
