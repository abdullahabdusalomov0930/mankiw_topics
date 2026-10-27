import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { getTerm } from '../../content/glossary';
import { isEn, tr } from '../../lib/lang';
import { renderInline } from './RichText';

interface Props {
  id: string;
  /** visible text; when given, the Uzbek translation is not repeated */
  label?: string;
}

/**
 * A glossary term: highlighted English word, Uzbek translation in brackets,
 * definition in a popover on hover (mouse) or tap (touch).
 */
export function T({ id, label }: Props) {
  const term = getTerm(id);
  const ref = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);
  const hoverTimer = useRef<number>();

  useEffect(() => {
    if (!open) return;
    const close = (e: Event) => {
      if (e.type === 'keydown' && (e as KeyboardEvent).key !== 'Escape') return;
      if (e.type === 'pointerdown') {
        const t = e.target as Node;
        if (ref.current?.contains(t) || document.getElementById('term-pop')?.contains(t)) return;
      }
      setOpen(false);
    };
    window.addEventListener('pointerdown', close);
    window.addEventListener('keydown', close);
    window.addEventListener('scroll', close, { passive: true });
    return () => {
      window.removeEventListener('pointerdown', close);
      window.removeEventListener('keydown', close);
      window.removeEventListener('scroll', close);
    };
  }, [open]);

  if (!term) {
    if (import.meta.env.DEV) console.warn(`Unknown term id: ${id}`);
    return <span className="font-semibold">{label ?? id}</span>;
  }

  const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  return (
    <>
      <span
        ref={ref}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        className="term"
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen((o) => !o);
          }
        }}
        onMouseEnter={() => {
          if (!finePointer()) return;
          window.clearTimeout(hoverTimer.current);
          hoverTimer.current = window.setTimeout(() => setOpen(true), 180);
        }}
        onMouseLeave={() => {
          if (!finePointer()) return;
          window.clearTimeout(hoverTimer.current);
          hoverTimer.current = window.setTimeout(() => setOpen(false), 200);
        }}
      >
        {label ?? term.en}
      </span>
      {!label && !isEn && <span className="text-muted"> ({term.uz})</span>}
      {open && (
        <Popover
          anchor={ref.current}
          onEnter={() => window.clearTimeout(hoverTimer.current)}
          onLeave={() => finePointer() && setOpen(false)}
        >
          <div className="flex items-baseline justify-between gap-3">
            <span className="font-display font-bold">{term.en}</span>
            <span className="chip">{tr(`${term.chapter}-bob`, `Ch. ${term.chapter}`)}</span>
          </div>
          {!isEn && <div className="mt-0.5 font-hand text-[15px] font-semibold text-[#1f4fb8]">{term.uz}</div>}
          <p className="mt-2 text-[13px] italic leading-snug text-muted">“{term.defEn}”</p>
          <p className="mt-2 text-sm leading-snug">{renderInline(term.defUz)}</p>
          <Link to={`/glossary?q=${encodeURIComponent(term.en)}`} className="mt-2 inline-block text-xs font-semibold text-[#1f4fb8] underline">
            {tr("Lug'atda ochish →", 'Open in glossary →')}
          </Link>
        </Popover>
      )}
    </>
  );
}

function Popover({
  anchor,
  children,
  onEnter,
  onLeave,
}: {
  anchor: HTMLElement | null;
  children: React.ReactNode;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);

  useLayoutEffect(() => {
    if (!anchor || !boxRef.current) return;
    const r = anchor.getBoundingClientRect();
    const box = boxRef.current.getBoundingClientRect();
    const margin = 12;
    let left = r.left + r.width / 2 - box.width / 2;
    left = Math.max(margin, Math.min(left, window.innerWidth - box.width - margin));
    let top = r.bottom + 8;
    if (top + box.height > window.innerHeight - margin) top = Math.max(margin, r.top - box.height - 8);
    setPos({ left, top });
  }, [anchor]);

  return createPortal(
    <div
      id="term-pop"
      ref={boxRef}
      role="tooltip"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{ left: pos?.left ?? -9999, top: pos?.top ?? 0 }}
      className="postit tape animate-pop fixed z-50 w-[min(20rem,calc(100vw-24px))] bg-postit-yellow p-4 pt-5"
    >
      {children}
    </div>,
    document.body,
  );
}
