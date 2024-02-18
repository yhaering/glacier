import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseNameSpaceImport } from './parseNameSpaceImport';

function run() {
  const context = fakeParserContext();
  const returnValue = parseNameSpaceImport(context);
  return { returnValue };
}

describe('parseNameSpaceImport', () => {
  beforeEach(run);

  it('should return a function called parseNameSpaceImport', () => {
    expect(parseNameSpaceImport).toBeInstanceOf(Function);
  });
});
