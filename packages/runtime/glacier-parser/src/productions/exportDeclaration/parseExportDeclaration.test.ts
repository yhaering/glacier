import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseExportDeclaration } from './parseExportDeclaration';

function run() {
  const context = fakeParserContext();
  const returnValue = parseExportDeclaration(context);
  return { returnValue };
}

describe('parseExportDeclaration', () => {
  beforeEach(run);

  it('should return a function called parseExportDeclaration', () => {
    expect(parseExportDeclaration).toBeInstanceOf(Function);
  });
});
