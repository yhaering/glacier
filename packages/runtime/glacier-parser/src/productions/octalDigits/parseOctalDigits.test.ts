import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseOctalDigits } from './parseOctalDigits';

function run() {
  const context = fakeParserContext();
  const returnValue = parseOctalDigits(context);
  return { returnValue };
}

describe('parseOctalDigits', () => {
  beforeEach(run);

  it('should return a function called parseOctalDigits', () => {
    expect(parseOctalDigits).toBeInstanceOf(Function);
  });
});
