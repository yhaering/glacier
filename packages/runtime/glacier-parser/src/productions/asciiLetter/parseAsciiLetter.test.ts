import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAsciiLetter } from './parseAsciiLetter';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAsciiLetter(context);
  return { returnValue };
}

describe('parseAsciiLetter', () => {
  beforeEach(run);

  it('should return a function called parseAsciiLetter', () => {
    expect(parseAsciiLetter).toBeInstanceOf(Function);
  });
});
