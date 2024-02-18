import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseRegularExpressionBody } from './parseRegularExpressionBody';

function run() {
  const context = fakeParserContext();
  const returnValue = parseRegularExpressionBody(context);
  return { returnValue };
}

describe('parseRegularExpressionBody', () => {
  beforeEach(run);

  it('should return a function called parseRegularExpressionBody', () => {
    expect(parseRegularExpressionBody).toBeInstanceOf(Function);
  });
});
