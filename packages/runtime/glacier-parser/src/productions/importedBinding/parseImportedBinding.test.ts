import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseImportedBinding } from './parseImportedBinding';

function run() {
  const context = fakeParserContext();
  const returnValue = parseImportedBinding(context);
  return { returnValue };
}

describe('parseImportedBinding', () => {
  beforeEach(run);

  it('should return a function called parseImportedBinding', () => {
    expect(parseImportedBinding).toBeInstanceOf(Function);
  });
});
