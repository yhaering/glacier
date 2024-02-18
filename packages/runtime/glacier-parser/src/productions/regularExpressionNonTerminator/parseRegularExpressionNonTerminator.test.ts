import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseRegularExpressionNonTerminator } from './parseRegularExpressionNonTerminator';

function run() {
  const context = fakeParserContext();
  const returnValue = parseRegularExpressionNonTerminator(context);
  return { returnValue };
}

describe('parseRegularExpressionNonTerminator', () => {
  beforeEach(run);

  it('should return a function called parseRegularExpressionNonTerminator', () => {
    expect(parseRegularExpressionNonTerminator).toBeInstanceOf(Function);
  });
});
