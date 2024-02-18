import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseLogicalORExpression } from './parseLogicalORExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseLogicalORExpression(context);
  return { returnValue };
}

describe('parseLogicalORExpression', () => {
  beforeEach(run);

  it('should return a function called parseLogicalORExpression', () => {
    expect(parseLogicalORExpression).toBeInstanceOf(Function);
  });
});
