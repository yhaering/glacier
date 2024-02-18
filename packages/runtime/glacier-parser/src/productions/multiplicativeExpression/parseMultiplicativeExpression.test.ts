import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseMultiplicativeExpression } from './parseMultiplicativeExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseMultiplicativeExpression(context);
  return { returnValue };
}

describe('parseMultiplicativeExpression', () => {
  beforeEach(run);

  it('should return a function called parseMultiplicativeExpression', () => {
    expect(parseMultiplicativeExpression).toBeInstanceOf(Function);
  });
});
