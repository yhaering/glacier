import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAdditiveExpression } from './parseAdditiveExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAdditiveExpression(context);
  return { returnValue };
}

describe('parseAdditiveExpression', () => {
  beforeEach(run);

  it('should return a function called parseAdditiveExpression', () => {
    expect(parseAdditiveExpression).toBeInstanceOf(Function);
  });
});
