import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseNonZeroOctalDigit } from './parseNonZeroOctalDigit';

function run() {
  const context = fakeParserContext();
  const returnValue = parseNonZeroOctalDigit(context);
  return { returnValue };
}

describe('parseNonZeroOctalDigit', () => {
  beforeEach(run);

  it('should return a function called parseNonZeroOctalDigit', () => {
    expect(parseNonZeroOctalDigit).toBeInstanceOf(Function);
  });
});
