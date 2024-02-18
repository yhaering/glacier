import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseNonZeroDigit } from './parseNonZeroDigit';

function run() {
  const context = fakeParserContext();
  const returnValue = parseNonZeroDigit(context);
  return { returnValue };
}

describe('parseNonZeroDigit', () => {
  beforeEach(run);

  it('should return a function called parseNonZeroDigit', () => {
    expect(parseNonZeroDigit).toBeInstanceOf(Function);
  });
});
