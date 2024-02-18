import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseNamedExports } from './parseNamedExports';

function run() {
  const context = fakeParserContext();
  const returnValue = parseNamedExports(context);
  return { returnValue };
}

describe('parseNamedExports', () => {
  beforeEach(run);

  it('should return a function called parseNamedExports', () => {
    expect(parseNamedExports).toBeInstanceOf(Function);
  });
});
