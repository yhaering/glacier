import type { Lexer, TokenType } from '@glacier/lexer';
import { is } from './is';

export function isNext(lexer: Lexer, type: TokenType, value?: string[]): boolean {
  const token = lexer.peek();
  if (is(token, type, value)) {
    lexer.next();
    return true;
  }
  return false;
}
