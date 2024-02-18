import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseExpressionBody } from './parseExpressionBody';

function run() {
  const context = fakeParserContext();
  const returnValue = parseExpressionBody(context);
  return { returnValue };
}

describe('parseExpressionBody', () => {
  beforeEach(run);

  it('should return a function called parseExpressionBody', () => {
    expect(parseExpressionBody).toBeInstanceOf(Function);
  });
});
