import { ParserError } from './ParserError';
import { fakeParserContext } from '../../../test/fakes/fakeParserContext';

function run() {
  jest.spyOn(JSON, 'stringify').mockReturnValue('{{JSON}}');
  const context = fakeParserContext();
  const returnValue = new ParserError(context);
  return { returnValue, context };
}

describe('ParserError', () => {
  beforeEach(run);

  test('exports a function called ParserError', () => {
    expect(ParserError).toBeInstanceOf(Function);
  });

  test('calls PositionContext.getPosition', () => {
    const { context } = run();
    expect(context.position.getPosition).toHaveBeenCalledWith();
  });

  test('calls Tokenizer.peek', () => {
    const { context } = run();
    expect(context.tokenizer.peek).toHaveBeenCalledWith();
  });

  test('calls JSON.stringify', () => {
    expect(JSON.stringify).toHaveBeenCalledWith('{{TOKEN}}', undefined, 2);
  });

  test('sets message property', () => {
    const { returnValue } = run();
    expect(returnValue.message).toBe(`Parsing error at [0:1]
{{JSON}}`);
  });
});
