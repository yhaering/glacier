import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseRegularExpressionFirstChar } from './parseRegularExpressionFirstChar';

function run() {
  const context = fakeParserContext();
  const returnValue = parseRegularExpressionFirstChar(context);
  return { returnValue };
}

describe('parseRegularExpressionFirstChar', () => {
  beforeEach(run);

  it('should return a function called parseRegularExpressionFirstChar', () => {
    expect(parseRegularExpressionFirstChar).toBeInstanceOf(Function);
  });
});
