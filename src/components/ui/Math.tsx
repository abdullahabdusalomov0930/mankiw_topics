import katex from 'katex';
import 'katex/dist/katex.min.css';
import { memo, useMemo } from 'react';

interface Props {
  tex: string;
  display?: boolean;
  className?: string;
}

export const Math = memo(function Math({ tex, display = false, className }: Props) {
  const html = useMemo(
    () => katex.renderToString(tex, { displayMode: display, throwOnError: false, strict: 'ignore' }),
    [tex, display],
  );
  const Tag = display ? 'div' : 'span';
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
});
