import type { Parser } from '../interface/Parser';
import type { ParserContext } from '../interface/ParserContext';

export function oneOf<T>(context: ParserContext, parsers: Parser<T>[]): T | undefined {
  for (const parser of parsers) {
    const node = parser(context);
    if (node !== undefined) {
      return node;
    }
    context.lexer.reset();
  }
}
