import type { Token } from '@glacier/lexer';

export function join(tokens: Token[]) {
  return tokens.map((token) => token.value).join('');
}
