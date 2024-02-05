import type { Lexer, Token } from '@glacier/lexer';

export function until(lexer: Lexer, condition: (token: Token, tokens: Token[]) => boolean, consumeLast = false): Token[] {
  const tokens: Token[] = [];
  let token;
  while((token = lexer.peek())) {
    if (condition(token, tokens)) {
      if (consumeLast) {
        lexer.next();
        tokens.push(token);
      }
      break;
    } else {
      lexer.next();
      tokens.push(token);
    }
  }
  return tokens;
}
