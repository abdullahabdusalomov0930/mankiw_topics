/** Geometry helpers shared by the SVG graph widgets. */

export interface Frame {
  W: number;
  H: number;
  ml: number;
  mr: number;
  mt: number;
  mb: number;
  xMax: number;
  yMax: number;
}

export function makeFrame(W: number, xMax: number, yMax: number, aspect = 0.68): Frame {
  const H = Math.round(Math.max(250, Math.min(440, W * aspect)));
  return { W, H, ml: W < 420 ? 46 : 56, mr: W < 420 ? 34 : 54, mt: 18, mb: 44, xMax, yMax };
}

export const sx = (f: Frame, q: number) => f.ml + (q / f.xMax) * (f.W - f.ml - f.mr);
export const sy = (f: Frame, p: number) => f.mt + (1 - p / f.yMax) * (f.H - f.mt - f.mb);
export const ix = (f: Frame, px: number) => ((px - f.ml) / (f.W - f.ml - f.mr)) * f.xMax;
export const iy = (f: Frame, py: number) => (1 - (py - f.mt) / (f.H - f.mt - f.mb)) * f.yMax;

/** Segment of the line P = i + s·Q inside the plotting box, or null if invisible. */
export function clipLine(f: Frame, i: number, s: number): [number, number, number, number] | null {
  let q0 = 0;
  let q1 = f.xMax;
  if (s === 0) {
    if (i < 0 || i > f.yMax) return null;
  } else {
    // 0 ≤ i + s q ≤ yMax
    const qa = (0 - i) / s;
    const qb = (f.yMax - i) / s;
    q0 = Math.max(q0, Math.min(qa, qb));
    q1 = Math.min(q1, Math.max(qa, qb));
  }
  if (q1 <= q0) return null;
  return [q0, i + s * q0, q1, i + s * q1];
}

export function niceStep(range: number, target = 5): number {
  const raw = range / target;
  const pow = 10 ** Math.floor(Math.log10(raw));
  const n = raw / pow;
  const m = n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10;
  return m * pow;
}

export function ticks(max: number, target = 5): number[] {
  const step = niceStep(max, target);
  const out: number[] = [];
  for (let v = 0; v <= max + 1e-9; v += step) out.push(Math.round(v * 1e6) / 1e6);
  return out;
}

export function polygon(f: Frame, pts: [number, number][]): string {
  return pts.map(([q, p]) => `${sx(f, q).toFixed(1)},${sy(f, p).toFixed(1)}`).join(' ');
}

/** Convert a pointer event to SVG user coordinates. */
export function svgPoint(svg: SVGSVGElement, clientX: number, clientY: number): { x: number; y: number } {
  const ctm = svg.getScreenCTM();
  if (!ctm) return { x: 0, y: 0 };
  const pt = svg.createSVGPoint();
  pt.x = clientX;
  pt.y = clientY;
  const r = pt.matrixTransform(ctm.inverse());
  return { x: r.x, y: r.y };
}
