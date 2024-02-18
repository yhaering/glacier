import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseImportSpecifier } from './parseImportSpecifier';

function run() {
  const context = fakeParserContext();
  const returnValue = parseImportSpecifier(context);
  return { returnValue };
}

describe('parseImportSpecifier', () => {
  beforeEach(run);

  it('should return a function called parseImportSpecifier', () => {
    expect(parseImportSpecifier).toBeInstanceOf(Function);
  });
});
