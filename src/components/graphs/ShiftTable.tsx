import { useState } from 'react';
import { predictShift, shiftDemand, shiftSupply, type Demand, type Direction, type Supply } from '../../lib/econ';
import { SupplyDemandGraph } from './SupplyDemandGraph';

const DIR: Record<Direction, string> = { up: '↑', down: '↓', same: '—', ambiguous: '?' };
const DIR_UZ: Record<Direction, string> = { up: 'oshadi', down: 'kamayadi', same: "o'zgarmaydi", ambiguous: 'noaniq (ambiguous)' };

/**
 * Ch. 4 Table 4 as a clickable grid: each cell opens a supply-and-demand graph with that
 * combination of shifts. For the ambiguous cells the reader can change the sizes of the shifts.
 */
export function ShiftTable({ demand, supply, xMax, yMax }: { demand: Demand; supply: Supply; xMax: number; yMax: number }) {
  const [cell, setCell] = useState<{ d: -1 | 0 | 1; s: -1 | 0 | 1 }>({ d: 1, s: -1 });
  const [bigDemand, setBigDemand] = useState(true);
  const pred = predictShift(cell.d, cell.s);
  const ambiguous = pred.P === 'ambiguous' || pred.Q === 'ambiguous';
  const big = xMax * 0.3;
  const small = xMax * 0.1;
  const dq = cell.d * (ambiguous ? (bigDemand ? big : small) : xMax * 0.2);
  const sq = cell.s * (ambiguous ? (bigDemand ? small : big) : xMax * 0.2);
  const D = shiftDemand(demand, dq);
  const S = shiftSupply(supply, sq);
  const rows: { d: -1 | 0 | 1; label: string }[] = [
    { d: 0, label: 'No change in demand' },
    { d: 1, label: 'An increase in demand' },
    { d: -1, label: 'A decrease in demand' },
  ];
  const cols: { s: -1 | 0 | 1; label: string }[] = [
    { s: 0, label: 'No change in supply' },
    { s: 1, label: 'An increase in supply' },
    { s: -1, label: 'A decrease in supply' },
  ];

  // The graph shows the old curves as a baseline and the shifted curves as the new state.
  const key = `${cell.d}${cell.s}${bigDemand}`;
  return (
    <div className="my-6">
      <div className="card overflow-x-auto p-3">
        <table className="w-full min-w-[30rem] text-sm">
          <thead>
            <tr>
              <th />
              {cols.map((c) => (
                <th key={c.s} className="px-2 py-1.5 text-center text-xs font-semibold">
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.d}>
                <th className="px-2 py-1.5 text-left text-xs font-semibold">{r.label}</th>
                {cols.map((c) => {
                  const p = predictShift(r.d, c.s);
                  const active = cell.d === r.d && cell.s === c.s;
                  return (
                    <td key={c.s} className="p-1">
                      <button
                        onClick={() => setCell({ d: r.d, s: c.s })}
                        className={`w-full rounded-[0.7rem] border-2 px-2 py-2 text-center font-semibold transition ${
                          active ? 'border-ink bg-marker text-[#111] shadow-hard-sm' : 'border-dashed border-ink/40 hover:border-solid hover:border-ink'
                        }`}
                      >
                        <span className="num">P {DIR[p.P]}</span> · <span className="num">Q {DIR[p.Q]}</span>
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="postit tape mt-6 -rotate-[0.4deg] bg-postit-blue p-4 pt-5 text-[15px]">
        Tanlangan holat: narx <b>{DIR_UZ[pred.P]}</b>, miqdor <b>{DIR_UZ[pred.Q]}</b>.
        {ambiguous && (
          <span>
            {' '}
            Natija siljishlarning <b>nisbiy kattaligiga</b> bog'liq (Figure 12). Hozir katta siljigan:{' '}
            <button className="btn-ghost btn-sm" onClick={() => setBigDemand((b) => !b)}>
              {bigDemand ? 'talab (almashtirish)' : 'taklif (almashtirish)'}
            </button>
          </span>
        )}
      </div>
      <SupplyDemandGraph
        key={key}
        config={{
          title: 'Table 4 — tanlangan siljishlar',
          demand: D,
          supply: S,
          xMax,
          yMax,
          modes: ['market'],
          shiftControls: true,
        }}
        baseline={{ D: demand, S: supply }}
      />
    </div>
  );
}
