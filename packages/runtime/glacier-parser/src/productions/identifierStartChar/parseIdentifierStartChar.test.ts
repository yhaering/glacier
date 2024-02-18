import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseIdentifierStartChar } from './parseIdentifierStartChar';

function run() {
  const context = fakeParserContext();
  const returnValue = parseIdentifierStartChar(context);
  return { returnValue };
}

describe('parseIdentifierStartChar', () => {
  beforeEach(run);

  it('should return a function called parseIdentifierStartChar', () => {
    expect(parseIdentifierStartChar).toBeInstanceOf(Function);
  });
});
