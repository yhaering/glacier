import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseShortCircuitExpression } from './parseShortCircuitExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseShortCircuitExpression(context);
  return { returnValue };
}

describe('parseShortCircuitExpression', () => {
  beforeEach(run);

  it('should return a function called parseShortCircuitExpression', () => {
    expect(parseShortCircuitExpression).toBeInstanceOf(Function);
  });
});
