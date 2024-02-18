import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseImportCall } from './parseImportCall';

function run() {
  const context = fakeParserContext();
  const returnValue = parseImportCall(context);
  return { returnValue };
}

describe('parseImportCall', () => {
  beforeEach(run);

  it('should return a function called parseImportCall', () => {
    expect(parseImportCall).toBeInstanceOf(Function);
  });
});
