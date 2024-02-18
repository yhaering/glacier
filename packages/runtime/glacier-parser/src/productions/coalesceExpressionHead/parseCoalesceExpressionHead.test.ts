import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseCoalesceExpressionHead } from './parseCoalesceExpressionHead';

function run() {
  const context = fakeParserContext();
  const returnValue = parseCoalesceExpressionHead(context);
  return { returnValue };
}

describe('parseCoalesceExpressionHead', () => {
  beforeEach(run);

  it('should return a function called parseCoalesceExpressionHead', () => {
    expect(parseCoalesceExpressionHead).toBeInstanceOf(Function);
  });
});
