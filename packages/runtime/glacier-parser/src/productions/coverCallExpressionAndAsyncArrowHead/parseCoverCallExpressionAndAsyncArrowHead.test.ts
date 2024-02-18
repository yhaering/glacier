import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseCoverCallExpressionAndAsyncArrowHead } from './parseCoverCallExpressionAndAsyncArrowHead';

function run() {
  const context = fakeParserContext();
  const returnValue = parseCoverCallExpressionAndAsyncArrowHead(context);
  return { returnValue };
}

describe('parseCoverCallExpressionAndAsyncArrowHead', () => {
  beforeEach(run);

  it('should return a function called parseCoverCallExpressionAndAsyncArrowHead', () => {
    expect(parseCoverCallExpressionAndAsyncArrowHead).toBeInstanceOf(Function);
  });
});
