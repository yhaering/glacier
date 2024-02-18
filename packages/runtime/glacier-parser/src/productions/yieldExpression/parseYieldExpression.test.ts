import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseYieldExpression } from './parseYieldExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseYieldExpression(context);
  return { returnValue };
}

describe('parseYieldExpression', () => {
  beforeEach(run);

  it('should return a function called parseYieldExpression', () => {
    expect(parseYieldExpression).toBeInstanceOf(Function);
  });
});
