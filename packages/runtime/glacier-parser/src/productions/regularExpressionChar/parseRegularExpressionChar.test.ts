import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseRegularExpressionChar } from './parseRegularExpressionChar';

function run() {
  const context = fakeParserContext();
  const returnValue = parseRegularExpressionChar(context);
  return { returnValue };
}

describe('parseRegularExpressionChar', () => {
  beforeEach(run);

  it('should return a function called parseRegularExpressionChar', () => {
    expect(parseRegularExpressionChar).toBeInstanceOf(Function);
  });
});
