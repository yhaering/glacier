import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseRegularExpressionChars } from './parseRegularExpressionChars';

function run() {
  const context = fakeParserContext();
  const returnValue = parseRegularExpressionChars(context);
  return { returnValue };
}

describe('parseRegularExpressionChars', () => {
  beforeEach(run);

  it('should return a function called parseRegularExpressionChars', () => {
    expect(parseRegularExpressionChars).toBeInstanceOf(Function);
  });
});
