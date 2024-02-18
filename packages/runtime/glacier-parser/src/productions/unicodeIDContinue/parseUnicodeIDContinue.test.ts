import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseUnicodeIDContinue } from './parseUnicodeIDContinue';

function run() {
  const context = fakeParserContext();
  const returnValue = parseUnicodeIDContinue(context);
  return { returnValue };
}

describe('parseUnicodeIDContinue', () => {
  beforeEach(run);

  it('should return a function called parseUnicodeIDContinue', () => {
    expect(parseUnicodeIDContinue).toBeInstanceOf(Function);
  });
});
