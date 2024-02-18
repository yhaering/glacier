import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseUpdateExpression } from './parseUpdateExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseUpdateExpression(context);
  return { returnValue };
}

describe('parseUpdateExpression', () => {
  beforeEach(run);

  it('should return a function called parseUpdateExpression', () => {
    expect(parseUpdateExpression).toBeInstanceOf(Function);
  });
});
