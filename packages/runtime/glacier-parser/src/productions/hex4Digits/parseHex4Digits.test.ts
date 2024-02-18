import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseHex4Digits } from './parseHex4Digits';

function run() {
  const context = fakeParserContext();
  const returnValue = parseHex4Digits(context);
  return { returnValue };
}

describe('parseHex4Digits', () => {
  beforeEach(run);

  it('should return a function called parseHex4Digits', () => {
    expect(parseHex4Digits).toBeInstanceOf(Function);
  });
});
