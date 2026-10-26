import { Fragment, type ReactNode } from 'react';
import { Math } from './Math';
import { T } from './Term';

/**
 * Renders the small markup used in content data:
 *   **bold**  *italic*  \( inline LaTeX \)  \[ display LaTeX \]  [[term-id]]  [[term-id|label]]
 * With `block`, blank lines separate paragraphs and lines starting with "- " become a list.
 */
const TOKEN = /(\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\)|\*\*[\s\S]+?\*\*|\[\[[^\]]+\]\]|\*[^*\n]+\*)/g;

export function renderInline(text: string, keyPrefix = 'r'): ReactNode[] {
  const parts = text.split(TOKEN);
  return parts.map((part, i) => {
    const key = `${keyPrefix}-${i}`;
    if (!part) return null;
    if (part.startsWith('\\[')) return <Math key={key} tex={part.slice(2, -2)} display />;
    if (part.startsWith('\\(')) return <Math key={key} tex={part.slice(2, -2)} />;
    if (part.startsWith('**')) return <strong key={key}>{renderInline(part.slice(2, -2), key)}</strong>;
    if (part.startsWith('[[')) {
      const [id, label] = part.slice(2, -2).split('|');
      return <T key={key} id={id.trim()} label={label?.trim()} />;
    }
    if (part.startsWith('*') && part.length > 2) return <em key={key}>{part.slice(1, -1)}</em>;
    return <Fragment key={key}>{part}</Fragment>;
  });
}

interface Props {
  text: string;
  block?: boolean;
  className?: string;
}

export function RichText({ text, block = false, className }: Props) {
  if (!block) return <span className={className}>{renderInline(text)}</span>;
  const paragraphs = text.trim().split(/\n\s*\n/);
  return (
    <div className={className ?? 'prose-uz'}>
      {paragraphs.map((p, i) => {
        const lines = p.split('\n');
        if (lines.every((l) => l.trim().startsWith('- '))) {
          return (
            <ul key={i}>
              {lines.map((l, j) => (
                <li key={j}>{renderInline(l.trim().slice(2), `${i}-${j}`)}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{renderInline(p.replace(/\n/g, ' '), `p${i}`)}</p>;
      })}
    </div>
  );
}
