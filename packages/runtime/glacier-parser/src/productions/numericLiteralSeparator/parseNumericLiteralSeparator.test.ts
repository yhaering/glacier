import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseNumericLiteralSeparator } from './parseNumericLiteralSeparator';

function run() {
  const context = fakeParserContext();
  const returnValue = parseNumericLiteralSeparator(context);
  return { returnValue };
}

describe('parseNumericLiteralSeparator', () => {
  beforeEach(run);

  it('should return a function called parseNumericLiteralSeparator', () => {
    expect(parseNumericLiteralSeparator).toBeInstanceOf(Function);
  });
});
