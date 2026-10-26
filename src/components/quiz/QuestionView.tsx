import { useCallback, useMemo, useRef, useState } from 'react';
import type { GraphTask, Matching, MCQ, Numeric, Question, TrueFalse } from '../../content/types';
import { useProgress } from '../../lib/progress';
import { SupplyDemandGraph, type SDState } from '../graphs/SupplyDemandGraph';
import { RichText } from '../ui/RichText';

interface Props {
  q: Question;
  /** number shown before the prompt */
  index?: number;
  /** exam mode: no explanation until the parent reveals it */
  hideFeedback?: boolean;
  onAnswered?: (correct: boolean) => void;
  compact?: boolean;
}

export function QuestionView({ q, index, hideFeedback, onAnswered, compact }: Props) {
  const { recordAnswer } = useProgress();
  const answered = useCallback(
    (correct: boolean) => {
      recordAnswer(q.id, q.chapter, correct);
      onAnswered?.(correct);
    },
    [q.id, q.chapter, recordAnswer, onAnswered],
  );

  return (
    <div className={compact ? '' : 'card p-4 sm:p-6'}>
      <div className="mb-2 flex flex-wrap items-center gap-2">
        {index != null && <span className="num text-sm font-semibold text-muted">{index}.</span>}
        <span className={`chip ${q.source === 'quickquiz' ? 'border-solid bg-marker text-[#111]' : ''}`}>
          {q.source === 'quickquiz' ? 'QuickQuiz (kitobdan)' : KIND_LABEL[q.kind]}
        </span>
        <span className="chip">{q.topic}</span>
      </div>
      <RichText text={q.prompt} block className="prose-uz font-medium" />
      <div className="mt-3">
        {q.kind === 'mcq' && <MCQView q={q} onAnswer={answered} hideFeedback={hideFeedback} />}
        {q.kind === 'tf' && <TFView q={q} onAnswer={answered} hideFeedback={hideFeedback} />}
        {q.kind === 'numeric' && <NumericView q={q} onAnswer={answered} hideFeedback={hideFeedback} />}
        {q.kind === 'match' && <MatchView q={q} onAnswer={answered} hideFeedback={hideFeedback} />}
        {q.kind === 'graph' && <GraphTaskView q={q} onAnswer={answered} hideFeedback={hideFeedback} />}
      </div>
    </div>
  );
}

const KIND_LABEL: Record<Question['kind'], string> = {
  mcq: 'Test',
  tf: "To'g'ri / noto'g'ri",
  numeric: 'Hisob-kitob',
  match: 'Moslashtirish',
  graph: 'Grafik topshiriq',
};

type ViewProps<T> = { q: T; onAnswer: (correct: boolean) => void; hideFeedback?: boolean };

function Feedback({ ok, children }: { ok: boolean; children: React.ReactNode }) {
  return (
    <div className={`postit animate-pop mt-4 border-2 border-ink p-4 text-[15px] ${ok ? 'bg-postit-green' : 'bg-postit-pink'}`}>
      <div className="mb-1 font-hand text-[17px] font-semibold text-[#1f4fb8]">{ok ? "✓ To'g'ri!" : "✗ Noto'g'ri"}</div>
      {children}
    </div>
  );
}

function MCQView({ q, onAnswer, hideFeedback }: ViewProps<MCQ>) {
  const [picked, setPicked] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const correctIdx = q.options.findIndex((o) => o.correct);
  const done = picked != null;
  const letters = 'abcdefg';

  return (
    <div>
      <div className="space-y-2">
        {q.options.map((o, i) => {
          const isPicked = picked === i;
          const isCorrect = i === correctIdx;
          let cls = 'border-ink/30 hover:border-ink hover:bg-marker/25';
          if (done && !hideFeedback) {
            if (isCorrect) cls = 'border-ink bg-postit-green text-[#111]';
            else if (isPicked) cls = 'border-ink bg-postit-pink text-[#111] animate-shake';
            else cls = 'border-ink/20 opacity-70';
          } else if (done && isPicked) cls = 'border-ink bg-marker/40';
          return (
            <button
              key={i}
              disabled={done}
              onClick={() => {
                setPicked(i);
                onAnswer(i === correctIdx);
              }}
              className={`flex w-full items-start gap-3 rounded-[0.95rem] border-2 p-3 text-left text-[15px] transition disabled:cursor-default ${cls}`}
            >
              <span className="num mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-current text-xs font-bold">
                {letters[i]}
              </span>
              <span className="min-w-0 flex-1">
                <RichText text={o.text} />
                {done && !hideFeedback && (showAll || isPicked || isCorrect) && (
                  <span className="mt-1.5 block text-sm leading-snug opacity-80">
                    <RichText text={o.why} />
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>
      {done && !hideFeedback && (
        <div className="mt-2 flex flex-wrap gap-2">
          {!showAll && (
            <button className="btn-ghost btn-sm" onClick={() => setShowAll(true)}>
              Barcha variantlar izohini ko'rish
            </button>
          )}
          <button
            className="btn-ghost btn-sm text-muted"
            onClick={() => {
              setPicked(null);
              setShowAll(false);
            }}
          >
            Qayta urinish
          </button>
        </div>
      )}
    </div>
  );
}

function TFView({ q, onAnswer, hideFeedback }: ViewProps<TrueFalse>) {
  const [picked, setPicked] = useState<boolean | null>(null);
  const done = picked != null;
  const ok = picked === q.answer;
  return (
    <div>
      <div className="flex gap-2">
        {[true, false].map((v) => (
          <button
            key={String(v)}
            disabled={done}
            onClick={() => {
              setPicked(v);
              onAnswer(v === q.answer);
            }}
            className={`btn flex-1 ${
              done && !hideFeedback
                ? v === q.answer
                  ? 'bg-postit-green text-[#111]'
                  : picked === v
                    ? 'bg-postit-pink text-[#111]'
                    : 'opacity-50'
                : done && picked === v
                  ? 'bg-marker/50'
                  : 'bg-surface hover:bg-marker hover:text-[#111]'
            }`}
          >
            {v ? "To'g'ri (True)" : "Noto'g'ri (False)"}
          </button>
        ))}
      </div>
      {done && !hideFeedback && (
        <Feedback ok={ok}>
          {!ok && (
            <p className="mb-1">
              Bu gap aslida <b>{q.answer ? "to'g'ri" : "noto'g'ri"}</b>.
            </p>
          )}
          <RichText text={q.why} block className="prose-uz text-[15px]" />
          <button className="btn-ghost btn-sm mt-2" onClick={() => setPicked(null)}>
            Qayta urinish
          </button>
        </Feedback>
      )}
    </div>
  );
}

function NumericView({ q, onAnswer, hideFeedback }: ViewProps<Numeric>) {
  const [value, setValue] = useState('');
  const [result, setResult] = useState<{ ok: boolean; trap?: string } | null>(null);
  const check = () => {
    const v = Number(value.replace(',', '.').replace(/[^0-9.\-]/g, ''));
    if (value.trim() === '' || Number.isNaN(v)) return;
    const ok = Math.abs(v - q.answer) <= q.tolerance + 1e-9;
    const trap = ok ? undefined : q.traps?.find((t) => Math.abs(v - t.value) <= q.tolerance + 1e-9)?.why;
    setResult({ ok, trap });
    onAnswer(ok);
  };
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <input
          inputMode="decimal"
          value={value}
          disabled={result != null}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && check()}
          placeholder="Javobingiz"
          className="num w-40 rounded-[0.95rem] border-2 border-ink bg-surface px-3 py-2 text-[15px] outline-none focus:ring-4 focus:ring-pen/30"
        />
        {q.unit && <span className="text-sm text-muted">{q.unit}</span>}
        {result == null ? (
          <button className="btn-primary" onClick={check}>
            Tekshirish
          </button>
        ) : (
          <button
            className="btn-ghost"
            onClick={() => {
              setResult(null);
              setValue('');
            }}
          >
            Qayta urinish
          </button>
        )}
      </div>
      {result && !hideFeedback && (
        <Feedback ok={result.ok}>
          {!result.ok && result.trap && (
            <div className="mb-2">
              <span className="font-semibold">Nima xato ketdi: </span>
              <RichText text={result.trap} />
            </div>
          )}
          {!result.ok && (
            <p className="mb-1">
              To'g'ri javob: <b className="num">{q.answer}</b> {q.unit}
            </p>
          )}
          <RichText text={q.why} block className="prose-uz text-[15px]" />
        </Feedback>
      )}
    </div>
  );
}

function MatchView({ q, onAnswer, hideFeedback }: ViewProps<Matching>) {
  const rights = useMemo(() => shuffle(q.pairs.map((p, i) => ({ text: p.right, i })), q.id), [q]);
  const [choice, setChoice] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const allChosen = q.pairs.every((_, i) => choice[i] != null);
  const correctCount = q.pairs.filter((_, i) => choice[i] === i).length;

  return (
    <div>
      <div className="space-y-2">
        {q.pairs.map((p, i) => {
          const ok = choice[i] === i;
          return (
            <div
              key={i}
              className={`grid gap-2 rounded-[0.95rem] border-2 p-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] sm:items-center ${
                checked && !hideFeedback ? (ok ? 'border-ink bg-postit-green text-[#111]' : 'border-ink bg-postit-pink text-[#111]') : 'border-ink/30'
              }`}
            >
              <div className="text-[15px] font-medium">
                <RichText text={p.left} />
              </div>
              <select
                disabled={checked}
                value={choice[i] ?? ''}
                onChange={(e) => setChoice((c) => ({ ...c, [i]: Number(e.target.value) }))}
                className="w-full rounded-[0.7rem] border-2 border-ink bg-surface px-2 py-2 text-sm text-ink"
              >
                <option value="">— tanlang —</option>
                {rights.map((r) => (
                  <option key={r.i} value={r.i}>
                    {stripMarkup(r.text)}
                  </option>
                ))}
              </select>
              {checked && !hideFeedback && !ok && (
                <div className="text-sm text-muted sm:col-span-2">
                  To'g'risi: <RichText text={p.right} />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex gap-2">
        {!checked ? (
          <button
            className="btn-primary"
            disabled={!allChosen}
            onClick={() => {
              setChecked(true);
              onAnswer(correctCount === q.pairs.length);
            }}
          >
            Tekshirish
          </button>
        ) : (
          <button
            className="btn-ghost"
            onClick={() => {
              setChecked(false);
              setChoice({});
            }}
          >
            Qayta urinish
          </button>
        )}
      </div>
      {checked && !hideFeedback && (
        <Feedback ok={correctCount === q.pairs.length}>
          <p>
            {correctCount} / {q.pairs.length} juftlik to'g'ri.
          </p>
          {q.why && <RichText text={q.why} block className="prose-uz mt-1 text-[15px]" />}
        </Feedback>
      )}
    </div>
  );
}

function GraphTaskView({ q, onAnswer, hideFeedback }: ViewProps<GraphTask>) {
  const state = useRef<SDState | null>(null);
  const [result, setResult] = useState<{ ok: boolean; msg: string } | null>(null);
  const onChange = useCallback((s: SDState) => {
    state.current = s;
  }, []);
  return (
    <div>
      <SupplyDemandGraph config={{ ...q.graph, compact: true }} onChange={onChange} />
      <div className="flex gap-2">
        <button
          className="btn-primary"
          onClick={() => {
            if (!state.current) return;
            const r = q.check(state.current);
            setResult(r);
            onAnswer(r.ok);
          }}
        >
          Tekshirish
        </button>
      </div>
      {result && !hideFeedback && (
        <Feedback ok={result.ok}>
          <RichText text={result.msg} block className="prose-uz text-[15px]" />
        </Feedback>
      )}
    </div>
  );
}

function stripMarkup(s: string) {
  return s
    .replace(/\*\*/g, '')
    .replace(/\\\(|\\\)/g, '')
    .replace(/\[\[([^\]|]+)\|?([^\]]*)\]\]/g, (_, id: string, label: string) => label || id);
}

/** Deterministic shuffle so options don't jump around on re-render. */
function shuffle<T>(arr: T[], seed: string): T[] {
  let h = 2166136261;
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    const j = Math.abs(h) % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  // Never leave it in the original order
  if (out.every((x, i) => x === arr[i]) && out.length > 1) out.push(out.shift()!);
  return out;
}
