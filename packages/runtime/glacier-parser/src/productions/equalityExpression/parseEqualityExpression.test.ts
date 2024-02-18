import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseEqualityExpression } from './parseEqualityExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseEqualityExpression(context);
  return { returnValue };
}

describe('parseEqualityExpression', () => {
  beforeEach(run);

  it('should return a function called parseEqualityExpression', () => {
    expect(parseEqualityExpression).toBeInstanceOf(Function);
  });
});
