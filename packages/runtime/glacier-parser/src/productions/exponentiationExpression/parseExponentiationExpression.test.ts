import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseExponentiationExpression } from './parseExponentiationExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseExponentiationExpression(context);
  return { returnValue };
}

describe('parseExponentiationExpression', () => {
  beforeEach(run);

  it('should return a function called parseExponentiationExpression', () => {
    expect(parseExponentiationExpression).toBeInstanceOf(Function);
  });
});
