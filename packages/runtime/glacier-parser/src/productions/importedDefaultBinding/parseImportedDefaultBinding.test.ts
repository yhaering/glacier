import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseImportedDefaultBinding } from './parseImportedDefaultBinding';

function run() {
  const context = fakeParserContext();
  const returnValue = parseImportedDefaultBinding(context);
  return { returnValue };
}

describe('parseImportedDefaultBinding', () => {
  beforeEach(run);

  it('should return a function called parseImportedDefaultBinding', () => {
    expect(parseImportedDefaultBinding).toBeInstanceOf(Function);
  });
});
