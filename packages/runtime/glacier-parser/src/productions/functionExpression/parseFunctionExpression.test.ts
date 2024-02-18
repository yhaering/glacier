import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseFunctionExpression } from './parseFunctionExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseFunctionExpression(context);
  return { returnValue };
}

describe('parseFunctionExpression', () => {
  beforeEach(run);

  it('should return a function called parseFunctionExpression', () => {
    expect(parseFunctionExpression).toBeInstanceOf(Function);
  });
});
