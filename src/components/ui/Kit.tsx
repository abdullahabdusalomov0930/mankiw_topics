import { useState, type ReactNode } from 'react';
import { RichText } from './RichText';

type CalloutKind = 'exam' | 'mistake' | 'note' | 'tip' | 'uz';

const calloutStyle: Record<CalloutKind, { icon: string; label: string; cls: string; tilt: string }> = {
  exam: { icon: '🎯', label: "Imtihonda so'raladi", cls: 'bg-postit-yellow', tilt: '-rotate-[0.6deg]' },
  mistake: { icon: '⚠️', label: "Ko'p uchraydigan xato", cls: 'bg-postit-pink', tilt: 'rotate-[0.5deg]' },
  note: { icon: '📌', label: 'Eslatma', cls: 'bg-postit-blue', tilt: 'rotate-[0.4deg]' },
  tip: { icon: '💡', label: 'Maslahat', cls: 'bg-postit-green', tilt: '-rotate-[0.4deg]' },
  uz: { icon: '🇺🇿', label: "O'zbekistondagi misol", cls: 'bg-postit-blue', tilt: '-rotate-[0.5deg]' },
};

/** A pastel sticky note held on with tape. */
export function Callout({ kind, title, children }: { kind: CalloutKind; title?: string; children: ReactNode }) {
  const s = calloutStyle[kind];
  return (
    <aside className={`postit tape my-8 p-5 pt-6 ${s.cls} ${s.tilt}`}>
      <div className="mb-1.5 flex items-center gap-2 font-hand text-[17px] font-semibold text-[#1f4fb8]">
        <span aria-hidden>{s.icon}</span>
        <span>{title ?? s.label}</span>
      </div>
      <div className="prose-uz text-[15px]">{children}</div>
    </aside>
  );
}

/** Solution revealed one step at a time. */
export function StepReveal({ steps, answer }: { steps: string[]; answer?: string }) {
  const [shown, setShown] = useState(0);
  const all = shown >= steps.length;
  return (
    <div className="mt-3">
      <ol className="space-y-2">
        {steps.slice(0, shown).map((s, i) => (
          <li key={i} className="animate-pop flex gap-3 rounded-xl border-[1.5px] border-dashed border-ink/40 bg-surface p-3 text-[15px] leading-6">
            <span className="num mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-marker text-xs font-semibold text-[#111]">
              {i + 1}
            </span>
            <RichText text={s} block className="prose-uz min-w-0 flex-1 text-[15px]" />
          </li>
        ))}
      </ol>
      {all && answer && (
        <div className="animate-pop mt-3 rounded-xl border-2 border-ink bg-postit-green p-3 text-[15px] text-[#111]">
          <span className="font-hand font-semibold text-[#1f4fb8]">Javob: </span>
          <RichText text={answer} />
        </div>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        {!all && (
          <button className="btn-ghost btn-sm" onClick={() => setShown((n) => n + 1)}>
            {shown === 0 ? "Yechimning 1-qadamini ko'rsat" : `Keyingi qadam (${shown + 1}/${steps.length})`}
          </button>
        )}
        {!all && steps.length > 1 && (
          <button className="btn-ghost btn-sm text-muted" onClick={() => setShown(steps.length)}>
            Hammasini ko'rsat
          </button>
        )}
        {shown > 0 && (
          <button className="btn-ghost btn-sm text-muted" onClick={() => setShown(0)}>
            Yashirish
          </button>
        )}
      </div>
    </div>
  );
}

export function Segmented<T extends string>({
  value,
  options,
  onChange,
  size = 'md',
}: {
  value: T;
  options: { value: T; label: ReactNode }[];
  onChange: (v: T) => void;
  size?: 'sm' | 'md';
}) {
  return (
    <div role="tablist" className="inline-flex max-w-full flex-wrap gap-1 rounded-[0.95rem] border-2 border-ink bg-surface p-1">
      {options.map((o) => (
        <button
          key={o.value}
          role="tab"
          aria-selected={value === o.value}
          onClick={() => onChange(o.value)}
          className={`rounded-[0.65rem] font-semibold transition ${size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'} ${
            value === o.value ? 'bg-marker text-[#111]' : 'text-muted hover:bg-surface2 hover:text-ink'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
  color,
}: {
  label: ReactNode;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  display?: string;
  /** css rgb triplet variable name, e.g. "--demand" */
  color?: string;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between gap-2 text-xs font-medium text-muted">
        <span>{label}</span>
        {display && <span className="num text-ink">{display}</span>}
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={color ? ({ ['--thumb' as string]: `var(${color})` } as React.CSSProperties) : undefined}
      />
    </label>
  );
}

export function ProgressBar({ value, className = '' }: { value: number; className?: string }) {
  return (
    <div className={`h-2.5 overflow-hidden rounded-full border-[1.5px] border-ink bg-surface ${className}`}>
      <div className="h-full bg-marker transition-all duration-500" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}

export function Ring({ value, size = 56, label }: { value: number; size?: number; label?: string }) {
  const r = (size - 8) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="rgb(var(--surface))" stroke="rgb(var(--ink))" strokeWidth={8} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgb(var(--surface2))" strokeWidth={5} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgb(var(--marker))"
          strokeWidth={5}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - value / 100)}
          className="transition-all duration-700"
        />
      </svg>
      <span className="num absolute text-xs font-semibold">{label ?? `${value}%`}</span>
    </div>
  );
}

/** Ask the Experts poll bar. */
export function PollBar({ agree, uncertain, disagree }: { agree: number; uncertain: number; disagree: number }) {
  const parts = [
    { v: agree, label: 'Rozi (agree)', cls: 'bg-good' },
    { v: uncertain, label: 'Ikkilanadi (uncertain)', cls: 'bg-warn' },
    { v: disagree, label: 'Rozi emas (disagree)', cls: 'bg-bad' },
  ];
  return (
    <div className="mt-3">
      <div className="flex h-7 overflow-hidden rounded-lg border-2 border-ink">
        {parts.map((p) =>
          p.v > 0 ? (
            <div key={p.label} className={`${p.cls} flex items-center justify-center text-xs font-semibold text-white`} style={{ width: `${p.v}%` }}>
              {p.v >= 8 ? `${p.v}%` : ''}
            </div>
          ) : null,
        )}
      </div>
      <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
        {parts.map((p) => (
          <span key={p.label} className="inline-flex items-center gap-1.5">
            <span className={`h-2.5 w-2.5 rounded-sm ${p.cls}`} />
            {p.label}: <span className="num font-semibold text-ink">{p.v}%</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function XPBurst({ amount }: { amount: number }) {
  return (
    <span className="animate-xp pointer-events-none absolute -top-2 right-0 text-sm font-bold text-good" aria-hidden>
      +{amount} XP
    </span>
  );
}
