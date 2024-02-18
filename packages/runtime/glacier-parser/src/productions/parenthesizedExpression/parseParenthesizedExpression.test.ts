import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseParenthesizedExpression } from './parseParenthesizedExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseParenthesizedExpression(context);
  return { returnValue };
}

describe('parseParenthesizedExpression', () => {
  beforeEach(run);

  it('should return a function called parseParenthesizedExpression', () => {
    expect(parseParenthesizedExpression).toBeInstanceOf(Function);
  });
});
