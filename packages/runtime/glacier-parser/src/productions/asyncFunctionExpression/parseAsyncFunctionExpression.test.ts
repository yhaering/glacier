import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAsyncFunctionExpression } from './parseAsyncFunctionExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAsyncFunctionExpression(context);
  return { returnValue };
}

describe('parseAsyncFunctionExpression', () => {
  beforeEach(run);

  it('should return a function called parseAsyncFunctionExpression', () => {
    expect(parseAsyncFunctionExpression).toBeInstanceOf(Function);
  });
});
