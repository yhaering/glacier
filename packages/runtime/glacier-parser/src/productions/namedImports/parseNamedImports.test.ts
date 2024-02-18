import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseNamedImports } from './parseNamedImports';

function run() {
  const context = fakeParserContext();
  const returnValue = parseNamedImports(context);
  return { returnValue };
}

describe('parseNamedImports', () => {
  beforeEach(run);

  it('should return a function called parseNamedImports', () => {
    expect(parseNamedImports).toBeInstanceOf(Function);
  });
});
