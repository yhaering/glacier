import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseLogicalANDExpression } from './parseLogicalANDExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseLogicalANDExpression(context);
  return { returnValue };
}

describe('parseLogicalANDExpression', () => {
  beforeEach(run);

  it('should return a function called parseLogicalANDExpression', () => {
    expect(parseLogicalANDExpression).toBeInstanceOf(Function);
  });
});
