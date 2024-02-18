import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseCallExpression } from './parseCallExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseCallExpression(context);
  return { returnValue };
}

describe('parseCallExpression', () => {
  beforeEach(run);

  it('should return a function called parseCallExpression', () => {
    expect(parseCallExpression).toBeInstanceOf(Function);
  });
});
