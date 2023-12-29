import type { ParserOptions } from './interfaces/ParserOptions';
import type { Parser } from './interfaces/Parser';
import { getOptions } from './functions/getOptions';
import { createParserContext } from './factories/createParserContext';
import { parseProgram } from './functions/parser/parseProgram';

export function createParser(options?: Partial<ParserOptions>): Parser {
  const validatedOptions = getOptions(options);
  return (tokenizer) => {
    const parserContext = createParserContext(tokenizer, validatedOptions);
    return parseProgram(parserContext);
  };
}
