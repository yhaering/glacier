import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseImportsList } from './parseImportsList';

function run() {
  const context = fakeParserContext();
  const returnValue = parseImportsList(context);
  return { returnValue };
}

describe('parseImportsList', () => {
  beforeEach(run);

  it('should return a function called parseImportsList', () => {
    expect(parseImportsList).toBeInstanceOf(Function);
  });
});
