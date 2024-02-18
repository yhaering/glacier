import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseIdentifierPart } from './parseIdentifierPart';

function run() {
  const context = fakeParserContext();
  const returnValue = parseIdentifierPart(context);
  return { returnValue };
}

describe('parseIdentifierPart', () => {
  beforeEach(run);

  it('should return a function called parseIdentifierPart', () => {
    expect(parseIdentifierPart).toBeInstanceOf(Function);
  });
});
