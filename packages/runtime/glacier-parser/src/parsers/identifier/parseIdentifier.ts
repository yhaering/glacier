import type { ParserContext } from '../../interface/ParserContext';
import { until } from '../../functions/until';
import { join } from '../../functions/join';
import type { IdentifierNode } from './interfaces/IdentifierNode';
import { is } from '../../functions/is';

export function parseIdentifier({ lexer }: ParserContext): IdentifierNode | undefined {
  const nextToken = lexer.peek();
  const isPrivate = is(nextToken, 'SYMBOL', ['#']);
  if (!isPrivate && !nextToken?.props.includes('ID_START')) return;
  lexer.next();
  until(lexer, (token) => !token.props.includes('ID_CONTINUE'));
  const value = join(lexer.commit());

  return {
    type: 'identifier',
    isPrivate,
    value,
    rawValue: value
  };
}
