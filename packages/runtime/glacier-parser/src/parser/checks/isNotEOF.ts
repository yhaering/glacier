import type { ParserContext } from '../interfaces/ParserContext';

export function isNotEOF(context: ParserContext): boolean {
  return context.tokenizer.peek() !== undefined;
}
