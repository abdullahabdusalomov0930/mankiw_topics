/**
 * Outlined sticker icons from OpenMoji (https://openmoji.org, CC BY-SA 4.0), served from public/stickers.
 * Their black ink outline matches the site's hand-drawn look better than system emoji.
 */
export type StickerName =
  | 'bulb'
  | 'clip'
  | 'dog'
  | 'down'
  | 'fire'
  | 'flag-uz'
  | 'house'
  | 'man'
  | 'megaphone'
  | 'moon'
  | 'no'
  | 'party'
  | 'pencil'
  | 'pin'
  | 'printer'
  | 'right'
  | 'shush'
  | 'sun'
  | 'target'
  | 'thumbs-down'
  | 'thumbs-up'
  | 'trophy'
  | 'up'
  | 'warning'
  | 'woman';

export function Sticker({ name, size = '1.3em', className = '' }: { name: StickerName; size?: string; className?: string }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}stickers/${name}.svg`}
      alt=""
      aria-hidden
      draggable={false}
      className={`inline-block shrink-0 select-none align-[-0.3em] ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
