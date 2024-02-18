import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseExportSpecifier } from './parseExportSpecifier';

function run() {
  const context = fakeParserContext();
  const returnValue = parseExportSpecifier(context);
  return { returnValue };
}

describe('parseExportSpecifier', () => {
  beforeEach(run);

  it('should return a function called parseExportSpecifier', () => {
    expect(parseExportSpecifier).toBeInstanceOf(Function);
  });
});
