import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseIdentifierName } from './parseIdentifierName';

function run() {
  const context = fakeParserContext();
  const returnValue = parseIdentifierName(context);
  return { returnValue };
}

describe('parseIdentifierName', () => {
  beforeEach(run);

  it('should return a function called parseIdentifierName', () => {
    expect(parseIdentifierName).toBeInstanceOf(Function);
  });
});
