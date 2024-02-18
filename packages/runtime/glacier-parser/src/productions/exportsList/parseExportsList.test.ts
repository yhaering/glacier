import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseExportsList } from './parseExportsList';

function run() {
  const context = fakeParserContext();
  const returnValue = parseExportsList(context);
  return { returnValue };
}

describe('parseExportsList', () => {
  beforeEach(run);

  it('should return a function called parseExportsList', () => {
    expect(parseExportsList).toBeInstanceOf(Function);
  });
});
