import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseRegularExpressionClassChars } from './parseRegularExpressionClassChars';

function run() {
  const context = fakeParserContext();
  const returnValue = parseRegularExpressionClassChars(context);
  return { returnValue };
}

describe('parseRegularExpressionClassChars', () => {
  beforeEach(run);

  it('should return a function called parseRegularExpressionClassChars', () => {
    expect(parseRegularExpressionClassChars).toBeInstanceOf(Function);
  });
});
