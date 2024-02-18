import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseConditionalExpression } from './parseConditionalExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseConditionalExpression(context);
  return { returnValue };
}

describe('parseConditionalExpression', () => {
  beforeEach(run);

  it('should return a function called parseConditionalExpression', () => {
    expect(parseConditionalExpression).toBeInstanceOf(Function);
  });
});
