import type { ParserContext } from '../../interface/ParserContext';
import { is } from '../../functions/is';
import { until } from '../../functions/until';
import { join } from '../../functions/join';
import type { StringNode } from './interface/StringNode';

export function parseString({ lexer }: ParserContext): StringNode | undefined {
  const startToken = lexer.peek();
  if (!startToken || !is(startToken, 'SYMBOL', ['"', '\''])) return;
  lexer.next();
  const tokens = until(lexer, (token, tokens) => {
    return is(token, 'SYMBOL', [startToken.value]) && tokens.at(-1)?.value !== '\\'
  }, true);
  const value = join(tokens.slice(0, -1));
  const rawValue = join(lexer.commit());

  return {
    type: 'string',
    stringType: startToken.value === '"' ? 'double' : 'single',
    value,
    rawValue
  };
}
