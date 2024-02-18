import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseImportClause } from './parseImportClause';

function run() {
  const context = fakeParserContext();
  const returnValue = parseImportClause(context);
  return { returnValue };
}

describe('parseImportClause', () => {
  beforeEach(run);

  it('should return a function called parseImportClause', () => {
    expect(parseImportClause).toBeInstanceOf(Function);
  });
});
