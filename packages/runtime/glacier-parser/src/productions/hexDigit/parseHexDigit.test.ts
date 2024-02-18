import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseHexDigit } from './parseHexDigit';

function run() {
  const context = fakeParserContext();
  const returnValue = parseHexDigit(context);
  return { returnValue };
}

describe('parseHexDigit', () => {
  beforeEach(run);

  it('should return a function called parseHexDigit', () => {
    expect(parseHexDigit).toBeInstanceOf(Function);
  });
});
