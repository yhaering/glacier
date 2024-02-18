import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseOptionalExpression } from './parseOptionalExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseOptionalExpression(context);
  return { returnValue };
}

describe('parseOptionalExpression', () => {
  beforeEach(run);

  it('should return a function called parseOptionalExpression', () => {
    expect(parseOptionalExpression).toBeInstanceOf(Function);
  });
});
