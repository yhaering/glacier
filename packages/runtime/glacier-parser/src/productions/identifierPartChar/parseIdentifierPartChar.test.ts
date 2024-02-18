import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseIdentifierPartChar } from './parseIdentifierPartChar';

function run() {
  const context = fakeParserContext();
  const returnValue = parseIdentifierPartChar(context);
  return { returnValue };
}

describe('parseIdentifierPartChar', () => {
  beforeEach(run);

  it('should return a function called parseIdentifierPartChar', () => {
    expect(parseIdentifierPartChar).toBeInstanceOf(Function);
  });
});
