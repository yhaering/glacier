import type { ParserContext } from '../../../interface/ParserContext';
import type { NumberNode } from '../interfaces/NumberNode';
import { is } from '../../../functions/is';
import { until } from '../../../functions/until';
import { join } from '../../../functions/join';
import { isNext } from '../../../functions/isNext';

export function parseHex({ lexer }: ParserContext): NumberNode | undefined {
  if (!isNext(lexer, 'NUMBER', ['0'])) return;
  if (!isNext(lexer, 'TEXT', ['x', 'X'])) return;
  const tokens = until(lexer, (token) => {
    return !(
      is(token, 'NUMBER', ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
      || is(token, 'TEXT', ['a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F'])
      || is(token, 'SYMBOL', ['_'])
    );
  });
  const value = join(tokens);
  const rawValue = join(lexer.commit());

  return {
    type: 'number',
    numberType: 'hex',
    value,
    rawValue
  };
}
