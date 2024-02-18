import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseExportFromClause } from './parseExportFromClause';

function run() {
  const context = fakeParserContext();
  const returnValue = parseExportFromClause(context);
  return { returnValue };
}

describe('parseExportFromClause', () => {
  beforeEach(run);

  it('should return a function called parseExportFromClause', () => {
    expect(parseExportFromClause).toBeInstanceOf(Function);
  });
});
