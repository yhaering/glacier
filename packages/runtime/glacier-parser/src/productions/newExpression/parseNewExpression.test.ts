import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseNewExpression } from './parseNewExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseNewExpression(context);
  return { returnValue };
}

describe('parseNewExpression', () => {
  beforeEach(run);

  it('should return a function called parseNewExpression', () => {
    expect(parseNewExpression).toBeInstanceOf(Function);
  });
});
