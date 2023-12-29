import type { ParserContext } from '../interfaces/ParserContext';

export class ParserError extends Error {
  public constructor(context: ParserContext) {
    super();
    const position = context.position.getPosition();
    const nextToken = context.tokenizer.peek();
    const stringifiedToken = JSON.stringify(nextToken, undefined, 2);
    this.message = `Parsing error at [${position.column}:${position.line}]\n${stringifiedToken}`;
  }
}
