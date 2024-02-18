import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseCoalesceExpression } from './parseCoalesceExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseCoalesceExpression(context);
  return { returnValue };
}

describe('parseCoalesceExpression', () => {
  beforeEach(run);

  it('should return a function called parseCoalesceExpression', () => {
    expect(parseCoalesceExpression).toBeInstanceOf(Function);
  });
});
