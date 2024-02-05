import type { ParserContext } from '../../../interface/ParserContext';
import type { NumberNode } from '../interfaces/NumberNode';
import { is } from '../../../functions/is';
import { until } from '../../../functions/until';
import { join } from '../../../functions/join';
import { isNext } from '../../../functions/isNext';

export function parseBinary( { lexer }: ParserContext): NumberNode | undefined {
  if (!isNext(lexer, 'NUMBER', ['0'])) return;
  if (!isNext(lexer, 'TEXT', ['b', 'B'])) return;
  const tokens = until(lexer, (token) => {
    return !(is(token, 'NUMBER', ['0', '1'])
      || is(token, 'SYMBOL', ['_']));
  });
  const value = join(tokens);
  const rawValue = join(lexer.commit());
  return {
    type: 'number',
    numberType: 'binary',
    value,
    rawValue
  }
}
