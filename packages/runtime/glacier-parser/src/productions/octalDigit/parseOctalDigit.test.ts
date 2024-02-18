import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseOctalDigit } from './parseOctalDigit';

function run() {
  const context = fakeParserContext();
  const returnValue = parseOctalDigit(context);
  return { returnValue };
}

describe('parseOctalDigit', () => {
  beforeEach(run);

  it('should return a function called parseOctalDigit', () => {
    expect(parseOctalDigit).toBeInstanceOf(Function);
  });
});
