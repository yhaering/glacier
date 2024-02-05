import type { ParserContext } from '../../../interface/ParserContext';
import type { CommentNode } from '../interfaces/CommentNode';
import { until } from '../../../functions/until';
import { join } from '../../../functions/join';
import { is } from '../../../functions/is';
import { isNext } from '../../../functions/isNext';

export function parseHashbangComment({ lexer }: ParserContext): CommentNode | undefined {
  if (!isNext(lexer, 'SYMBOL', ['#'])) return;
  if (!isNext(lexer, 'SYMBOL', ['!'])) return;

  const tokens = until(lexer, (token) => is(token, 'LINE_TERMINATOR'));
  const value = join(tokens);
  const rawValue = join(lexer.commit());

  return {
    type: 'comment',
    commentType: 'hashbang',
    value,
    rawValue
  };
}
