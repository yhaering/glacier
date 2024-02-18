import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseUnicodeEscapeSequence } from './parseUnicodeEscapeSequence';

function run() {
  const context = fakeParserContext();
  const returnValue = parseUnicodeEscapeSequence(context);
  return { returnValue };
}

describe('parseUnicodeEscapeSequence', () => {
  beforeEach(run);

  it('should return a function called parseUnicodeEscapeSequence', () => {
    expect(parseUnicodeEscapeSequence).toBeInstanceOf(Function);
  });
});
