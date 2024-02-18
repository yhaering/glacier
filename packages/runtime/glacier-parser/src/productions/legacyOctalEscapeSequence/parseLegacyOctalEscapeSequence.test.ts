import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseLegacyOctalEscapeSequence } from './parseLegacyOctalEscapeSequence';

function run() {
  const context = fakeParserContext();
  const returnValue = parseLegacyOctalEscapeSequence(context);
  return { returnValue };
}

describe('parseLegacyOctalEscapeSequence', () => {
  beforeEach(run);

  it('should return a function called parseLegacyOctalEscapeSequence', () => {
    expect(parseLegacyOctalEscapeSequence).toBeInstanceOf(Function);
  });
});
