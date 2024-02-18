import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseIdentifierStart } from './parseIdentifierStart';

function run() {
  const context = fakeParserContext();
  const returnValue = parseIdentifierStart(context);
  return { returnValue };
}

describe('parseIdentifierStart', () => {
  beforeEach(run);

  it('should return a function called parseIdentifierStart', () => {
    expect(parseIdentifierStart).toBeInstanceOf(Function);
  });
});
