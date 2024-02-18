import type { ParserContext } from '../../src/interfaces/ParserContext';
import type { Lexer} from '@glacier/lexer';

export function fakeParserContext(): ParserContext {
  return {
    lexer: {
      commit: jest.fn(),
      next: jest.fn(),
      peek: jest.fn(),
      reset: jest.fn()
    } as unknown as Lexer
  }
}
