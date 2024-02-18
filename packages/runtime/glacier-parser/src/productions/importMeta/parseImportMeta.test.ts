import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseImportMeta } from './parseImportMeta';

function run() {
  const context = fakeParserContext();
  const returnValue = parseImportMeta(context);
  return { returnValue };
}

describe('parseImportMeta', () => {
  beforeEach(run);

  it('should return a function called parseImportMeta', () => {
    expect(parseImportMeta).toBeInstanceOf(Function);
  });
});
