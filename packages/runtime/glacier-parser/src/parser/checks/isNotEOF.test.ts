import { isNotEOF } from './isNotEOF';
import { fakeParserContext } from '../../../test/fakes/fakeParserContext';

function run() {
  const context = fakeParserContext();
  const returnValue = isNotEOF(context);
  return { returnValue, context };
}

function runWithUndefined() {
  const context = fakeParserContext();
  (context.tokenizer.peek as jest.Mock).mockReturnValueOnce(void 0);
  const returnValue = isNotEOF(context);
  return { returnValue, context };
}

describe('isNotEOF', () => {
  beforeEach(run);

  test('exports a function called isNotEOF', () => {
    expect(isNotEOF).toBeInstanceOf(Function);
  });

  test('calls TokenStream.peek', () => {
    const { context } = run();
    expect(context.tokenizer.peek).toHaveBeenCalledWith();
  });

  test('returns true if TokenStream.peek returns not undefined', () => {
    const { returnValue } = run();
    expect(returnValue).toBe(true);
  });

  test('returns false if TokenStream.peek returns undefined', () => {
    const { returnValue } = runWithUndefined();
    expect(returnValue).toBe(false);
  });
});
