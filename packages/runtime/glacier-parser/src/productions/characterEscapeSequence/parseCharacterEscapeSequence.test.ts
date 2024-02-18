import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseCharacterEscapeSequence } from './parseCharacterEscapeSequence';

function run() {
  const context = fakeParserContext();
  const returnValue = parseCharacterEscapeSequence(context);
  return { returnValue };
}

describe('parseCharacterEscapeSequence', () => {
  beforeEach(run);

  it('should return a function called parseCharacterEscapeSequence', () => {
    expect(parseCharacterEscapeSequence).toBeInstanceOf(Function);
  });
});
