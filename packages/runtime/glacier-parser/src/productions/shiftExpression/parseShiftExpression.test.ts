import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseShiftExpression } from './parseShiftExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseShiftExpression(context);
  return { returnValue };
}

describe('parseShiftExpression', () => {
  beforeEach(run);

  it('should return a function called parseShiftExpression', () => {
    expect(parseShiftExpression).toBeInstanceOf(Function);
  });
});
