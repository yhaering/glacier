import type { Parser } from '../interfaces/Parser';
import type { ParserContext } from '../interfaces/ParserContext';

export function oneOf<T>(context: ParserContext, parsers: Parser<T>[]): T | undefined {
  for (const parser of parsers) {
    const node = parser(context);
    if (node !== undefined) {
      return node;
    }
    context.lexer.reset();
  }
}
