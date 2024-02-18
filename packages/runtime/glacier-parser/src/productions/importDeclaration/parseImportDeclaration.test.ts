import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseImportDeclaration } from './parseImportDeclaration';

function run() {
  const context = fakeParserContext();
  const returnValue = parseImportDeclaration(context);
  return { returnValue };
}

describe('parseImportDeclaration', () => {
  beforeEach(run);

  it('should return a function called parseImportDeclaration', () => {
    expect(parseImportDeclaration).toBeInstanceOf(Function);
  });
});
