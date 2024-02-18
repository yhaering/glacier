import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseNonOctalDigit } from './parseNonOctalDigit';

function run() {
  const context = fakeParserContext();
  const returnValue = parseNonOctalDigit(context);
  return { returnValue };
}

describe('parseNonOctalDigit', () => {
  beforeEach(run);

  it('should return a function called parseNonOctalDigit', () => {
    expect(parseNonOctalDigit).toBeInstanceOf(Function);
  });
});
