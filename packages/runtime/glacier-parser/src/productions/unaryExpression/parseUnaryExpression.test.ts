import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseUnaryExpression } from './parseUnaryExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseUnaryExpression(context);
  return { returnValue };
}

describe('parseUnaryExpression', () => {
  beforeEach(run);

  it('should return a function called parseUnaryExpression', () => {
    expect(parseUnaryExpression).toBeInstanceOf(Function);
  });
});
