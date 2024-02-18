import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseIdentifierReference } from './parseIdentifierReference';

function run() {
  const context = fakeParserContext();
  const returnValue = parseIdentifierReference(context);
  return { returnValue };
}

describe('parseIdentifierReference', () => {
  beforeEach(run);

  it('should return a function called parseIdentifierReference', () => {
    expect(parseIdentifierReference).toBeInstanceOf(Function);
  });
});
