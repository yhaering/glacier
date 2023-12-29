import { createParserContext } from './createParserContext';
import { fakeParserOptions } from '../../../test/fakes/fakeParserOptions';
import { fakeTokenStream } from '../../../test/fakes/fakeTokenStream';
import { createPositionContext } from './createPositionContext';
import { createTokenizerContext } from './createTokenizerContext';

jest.mock('./createPositionContext', () => ({
  createPositionContext: jest.fn().mockReturnValue('{{POSITION_CONTEXT}}')
}));

jest.mock('./createTokenizerContext', () => ({
  createTokenizerContext: jest.fn().mockReturnValue('{{TOKEN_CONTEXT}}')
}));

function run() {
  const options = fakeParserOptions();
  const tokenizer = fakeTokenStream();
  const returnValue = createParserContext(tokenizer, options);
  return { returnValue, tokenizer };
}

describe('createParserContext', () => {
  beforeEach(run);

  test('exports a function called createParserContext', () => {
    expect(createParserContext).toBeInstanceOf(Function);
  });

  test('calls createPositionContext', () => {
    expect(createPositionContext).toHaveBeenCalledWith();
  });

  test('calls createTokenizerContext', () => {
    const { tokenizer } = run();
    expect(createTokenizerContext).toHaveBeenCalledWith(
      tokenizer,
      '{{POSITION_CONTEXT}}'
    );
  });

  test('returns parser context', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      options: fakeParserOptions(),
      tokenizer: '{{TOKEN_CONTEXT}}',
      position: '{{POSITION_CONTEXT}}'
    });
  });
});
