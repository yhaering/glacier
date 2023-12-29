import type { ParserContext } from '../../src/parser/interfaces/ParserContext';
import { fakeParserOptions } from './fakeParserOptions';
import { fakeTokenStream } from './fakeTokenStream';
import { fakePositionContext } from './fakePositionContext';

export function fakeParserContext(): ParserContext {
  return {
    options: fakeParserOptions(),
    tokenizer: fakeTokenStream(),
    position: fakePositionContext()
  };
}
