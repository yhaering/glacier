import type { Token, TokenType } from '@glacier/lexer';

export function is(token: Token | undefined, type: TokenType, value?: string[]): boolean {
  return token?.type === type && (value === undefined || value.includes(token.value));
}
