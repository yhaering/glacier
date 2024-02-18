import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseModuleExportName } from './parseModuleExportName';

function run() {
  const context = fakeParserContext();
  const returnValue = parseModuleExportName(context);
  return { returnValue };
}

describe('parseModuleExportName', () => {
  beforeEach(run);

  it('should return a function called parseModuleExportName', () => {
    expect(parseModuleExportName).toBeInstanceOf(Function);
  });
});
