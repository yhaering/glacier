import { tryParser } from './tryParser';
import { fakeParserContext } from '../../../test/fakes/fakeParserContext';

function run() {
  const context = fakeParserContext();
  const parser = jest.fn().mockReturnValue('{{NODE}}');
  const returnValue = tryParser(context, [parser]);
  return { returnValue, parser, context };
}
function runWithUndefined() {
  const context = fakeParserContext();
  const parser = jest.fn().mockReturnValue(void 0);
  const returnValue = tryParser(context, [parser]);
  return { returnValue, parser, context };
}

describe('tryParser', () => {
  beforeEach(run);

  test('exports a function called tryParser', () => {
    expect(tryParser).toBeInstanceOf(Function);
  });

  test('executes all parsers', () => {
    const { parser, context } = run();
    expect(parser).toHaveBeenCalledWith(context);
  });

  test('return parser output if it is not undefined', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual('{{NODE}}');
  });

  test('return undefined if all parser returned undefined', () => {
    const { returnValue } = runWithUndefined();
    expect(returnValue).toBeUndefined();
  });
});
