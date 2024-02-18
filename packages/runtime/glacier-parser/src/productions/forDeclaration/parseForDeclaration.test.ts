import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseForDeclaration } from './parseForDeclaration';

function run() {
  const context = fakeParserContext();
  const returnValue = parseForDeclaration(context);
  return { returnValue };
}

describe('parseForDeclaration', () => {
  beforeEach(run);

  it('should return a function called parseForDeclaration', () => {
    expect(parseForDeclaration).toBeInstanceOf(Function);
  });
});
