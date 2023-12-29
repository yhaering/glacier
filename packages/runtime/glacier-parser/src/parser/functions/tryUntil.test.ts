import { tryUntil } from './tryUntil';
import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { ParserError } from '../errors/ParserError';

function run() {
  const context = fakeParserContext();
  const conditionFn = jest
    .fn()
    .mockReturnValue(false)
    .mockReturnValueOnce(true);
  const tryFn = jest.fn().mockReturnValue('{{NODE}}');
  const returnValue = tryUntil(context, conditionFn, tryFn);
  return { returnValue, context, conditionFn, tryFn };
}

function runWithUndefined() {
  const context = fakeParserContext();
  const conditionFn = jest
    .fn()
    .mockReturnValue(false)
    .mockReturnValueOnce(true);
  const tryFn = jest.fn().mockReturnValue(void 0);
  const returnValue = tryUntil(context, conditionFn, tryFn);
  return { returnValue, context, conditionFn, tryFn };
}

describe('tryUntil', () => {
  beforeEach(run);

  test('exports a function called tryUntil', () => {
    expect(tryUntil).toBeInstanceOf(Function);
  });

  test('calls conditionFn with context', () => {
    const { conditionFn, context } = run();
    expect(conditionFn).toHaveBeenCalledWith(context);
  });

  test('calls tryFn', () => {
    const { tryFn } = run();
    expect(tryFn).toHaveBeenCalledWith();
  });

  test('returns a list of all values', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual(['{{NODE}}']);
  });

  describe('if tryFn returns undefined', () => {
    test('throw an error', () => {
      expect(() => {
        runWithUndefined();
      }).toThrow(ParserError);
    });
  });
});
