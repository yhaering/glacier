import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseLexicalDeclaration } from './parseLexicalDeclaration';

function run() {
  const context = fakeParserContext();
  const returnValue = parseLexicalDeclaration(context);
  return { returnValue };
}

describe('parseLexicalDeclaration', () => {
  beforeEach(run);

  it('should return a function called parseLexicalDeclaration', () => {
    expect(parseLexicalDeclaration).toBeInstanceOf(Function);
  });
});
