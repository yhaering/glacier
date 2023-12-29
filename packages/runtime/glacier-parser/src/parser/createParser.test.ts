import { createParser } from './createParser';
import { getOptions } from './functions/getOptions';
import { createParserContext } from './factories/createParserContext';
import { fakeTokenStream } from '../../test/fakes/fakeTokenStream';
import { parseProgram } from './functions/parser/parseProgram';

jest.mock('./functions/getOptions', () => ({
  getOptions: jest.fn().mockReturnValue('{{OPTIONS}}')
}));

jest.mock('./factories/createParserContext', () => ({
  createParserContext: jest.fn().mockReturnValue('{{CONTEXT}}')
}));

jest.mock('./functions/parser/parseProgram', () => ({
  parseProgram: jest.fn().mockReturnValue('{{PROGRAM}}')
}));

function run() {
  const returnValue = createParser();
  const tokenizer = fakeTokenStream();
  const ast = returnValue(tokenizer);
  return { returnValue, ast, tokenizer };
}

describe('createParser', () => {
  beforeEach(run);

  test('exports a function called createParser', () => {
    expect(createParser).toBeInstanceOf(Function);
  });

  test('calls getOptions', () => {
    expect(getOptions).toHaveBeenCalledWith(void 0);
  });

  test('returns a parser function', () => {
    const { returnValue } = run();
    expect(returnValue).toBeInstanceOf(Function);
  });

  describe('when calling parser function', () => {
    test('calls createParserContext', () => {
      const { tokenizer } = run();
      expect(createParserContext).toHaveBeenCalledWith(
        tokenizer,
        '{{OPTIONS}}'
      );
    });

    test('calls parseProgram', () => {
      expect(parseProgram).toHaveBeenCalledWith('{{CONTEXT}}');
    });

    test('returns Program node', () => {
      const { ast } = run();
      expect(ast).toBe('{{PROGRAM}}');
    });
  });
});
