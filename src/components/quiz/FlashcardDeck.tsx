import { useMemo, useState } from 'react';
import type { Flashcard } from '../../content/types';
import { tr } from '../../lib/lang';
import { useProgress } from '../../lib/progress';
import { ProgressBar } from '../ui/Kit';
import { RichText } from '../ui/RichText';

/**
 * Leitner flashcards: "Bilardim" moves a card up a box (seen again later),
 * "Bilmadim" sends it back to box 1 (seen again today).
 */
export function FlashcardDeck({ cards, title }: { cards: Flashcard[]; title?: string }) {
  const { isDue, reviewCard, state } = useProgress();
  const [all, setAll] = useState(false);
  // Fix the session queue when it starts so cards don't vanish mid-review.
  const [sessionKey, setSessionKey] = useState(0);
  const queue = useMemo(
    () => cards.filter((c) => all || isDue(c.id)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cards, all, sessionKey],
  );
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [again, setAgain] = useState<Flashcard[]>([]);
  const list = [...queue, ...again];
  const card = list[pos];

  const boxes = [1, 2, 3, 4, 5].map((b) => cards.filter((c) => (state.cards[c.id]?.box ?? 0) === b).length);
  const fresh = cards.filter((c) => !state.cards[c.id]).length;

  const answer = (knew: boolean) => {
    if (!card) return;
    reviewCard(card.id, knew);
    if (!knew) setAgain((a) => [...a, card]);
    setFlipped(false);
    setPos((p) => p + 1);
  };

  const restart = (everything: boolean) => {
    setAll(everything);
    setAgain([]);
    setPos(0);
    setFlipped(false);
    setSessionKey((k) => k + 1);
  };

  return (
    <div className="card p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="font-display font-bold">{title ?? tr('Kartochkalar', 'Flashcards')}</div>
          <div className="text-xs text-muted">
            {tr('Jami', 'Total')} {cards.length} · {tr('yangi', 'new')} {fresh} · {tr('qutilar', 'boxes')}: {boxes.map((n, i) => `${i + 1}:${n}`).join(' ')}
          </div>
        </div>
        <div className="flex gap-2">
          <button className="btn-ghost btn-sm" onClick={() => restart(false)}>
            {tr('Bugungilar', 'Due today')}
          </button>
          <button className="btn-ghost btn-sm" onClick={() => restart(true)}>
            {tr('Hammasini takrorlash', 'Review all')}
          </button>
        </div>
      </div>

      {card ? (
        <>
          <ProgressBar value={(pos / list.length) * 100} className="mt-4" />
          <div className="mt-1 text-right text-xs text-muted num">
            {pos + 1} / {list.length}
          </div>
          <button
            onClick={() => setFlipped((f) => !f)}
            className={`postit tape mt-5 flex min-h-[14rem] w-full flex-col items-center justify-center p-6 pt-8 text-center transition hover:rotate-0 ${flipped ? 'rotate-[0.6deg] bg-postit-blue' : '-rotate-[0.6deg] bg-postit-yellow'}`}
            aria-label={tr('Kartochkani aylantirish', 'Flip the card')}
          >
            {!flipped ? (
              <>
                <RichText text={card.front} block className="prose-uz text-lg" />
                <span className="mt-4 font-hand text-sm font-semibold text-[#1f4fb8]">{tr("Bosing — javobni ko'rish ↻", 'Tap to see the answer ↻')}</span>
              </>
            ) : (
              <RichText text={card.back} block className="prose-uz animate-pop text-left text-[15px]" />
            )}
          </button>
          {flipped && (
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button className="btn bg-postit-pink text-[#111]" onClick={() => answer(false)}>
                {tr('✗ Bilmadim', "✗ Didn't know")}
              </button>
              <button className="btn bg-postit-green text-[#111] shadow-hard-sm" onClick={() => answer(true)}>
                {tr('✓ Bilardim', '✓ Knew it')}
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="postit tape mt-6 rotate-[0.5deg] bg-postit-green p-6 pt-8 text-center">
          <div className="text-3xl">🎉</div>
          <p className="mt-2 font-semibold">{tr('Bugun takrorlanadigan kartochka qolmadi.', 'No cards left to review today.')}</p>
          <p className="mt-1 text-sm text-muted">{tr('Bilgan kartochkalaringiz bir necha kundan keyin yana chiqadi (Leitner tizimi).', 'Cards you knew come back in a few days (Leitner system).')}</p>
        </div>
      )}
    </div>
  );
}
