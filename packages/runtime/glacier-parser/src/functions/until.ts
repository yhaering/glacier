import type { Lexer, Token } from '@glacier/lexer';

export function until(lexer: Lexer, condition: (token: Token, tokens: Token[]) => boolean): Token[] {
  const tokens: Token[] = [];
  let token;
  while((token = lexer.peek())) {
    if (condition(token, tokens)) {
      break;
    } else {
      lexer.next();
      tokens.push(token);
    }
  }
  return tokens;
}
