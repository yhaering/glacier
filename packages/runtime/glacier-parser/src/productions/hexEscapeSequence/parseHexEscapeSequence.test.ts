import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseHexEscapeSequence } from './parseHexEscapeSequence';

function run() {
  const context = fakeParserContext();
  const returnValue = parseHexEscapeSequence(context);
  return { returnValue };
}

describe('parseHexEscapeSequence', () => {
  beforeEach(run);

  it('should return a function called parseHexEscapeSequence', () => {
    expect(parseHexEscapeSequence).toBeInstanceOf(Function);
  });
});
