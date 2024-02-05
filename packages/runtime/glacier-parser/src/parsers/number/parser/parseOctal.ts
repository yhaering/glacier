import type { ParserContext } from '../../../interface/ParserContext';
import type { NumberNode } from '../interfaces/NumberNode';
import { is } from '../../../functions/is';
import { until } from '../../../functions/until';
import { join } from '../../../functions/join';
import { isNext } from '../../../functions/isNext';

export function parseOctal({ lexer }: ParserContext): NumberNode | undefined {
  if (!isNext(lexer, 'NUMBER', ['0'])) return;
  if (!isNext(lexer, 'TEXT', ['o', 'O'])) return;
  const tokens = until(lexer, (token) => {
    return !(
      is(token, 'NUMBER', ['0', '1', '2', '3', '4', '5', '6', '7'])
      || is(token, 'SYMBOL', ['_'])
    );
  });

  const value = join(tokens);
  const rawValue = join(lexer.commit());

  return {
    type: 'number',
    numberType: 'octal',
    value,
    rawValue
  };
}
