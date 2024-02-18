import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseHexDigits } from './parseHexDigits';

function run() {
  const context = fakeParserContext();
  const returnValue = parseHexDigits(context);
  return { returnValue };
}

describe('parseHexDigits', () => {
  beforeEach(run);

  it('should return a function called parseHexDigits', () => {
    expect(parseHexDigits).toBeInstanceOf(Function);
  });
});
