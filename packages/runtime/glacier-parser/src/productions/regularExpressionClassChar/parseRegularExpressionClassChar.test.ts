import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseRegularExpressionClassChar } from './parseRegularExpressionClassChar';

function run() {
  const context = fakeParserContext();
  const returnValue = parseRegularExpressionClassChar(context);
  return { returnValue };
}

describe('parseRegularExpressionClassChar', () => {
  beforeEach(run);

  it('should return a function called parseRegularExpressionClassChar', () => {
    expect(parseRegularExpressionClassChar).toBeInstanceOf(Function);
  });
});
