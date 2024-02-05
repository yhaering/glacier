import type { CommentNode } from '../interfaces/CommentNode';
import type { ParserContext } from '../../../interface/ParserContext';
import { until } from '../../../functions/until';
import { join } from '../../../functions/join';
import { is } from '../../../functions/is';
import { isNext } from '../../../functions/isNext';

export function parseMultiLineComment( { lexer }: ParserContext): CommentNode | undefined {
  if (!isNext(lexer, 'SYMBOL', ['/'])) return;
  if (!isNext(lexer, 'SYMBOL', ['*'])) return;

  const tokens = until(lexer, (token, tokens) => {
    return is(tokens.at(-1), 'SYMBOL', ['*']) && is(token, 'SYMBOL', ['/']);
  });

  const value = join(tokens);
  const rawValue = join(lexer.commit());

  return {
    type: 'comment',
    commentType: 'multi',
    value,
    rawValue
  };
}
