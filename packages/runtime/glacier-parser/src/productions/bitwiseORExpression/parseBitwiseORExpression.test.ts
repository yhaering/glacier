import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseBitwiseORExpression } from './parseBitwiseORExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseBitwiseORExpression(context);
  return { returnValue };
}

describe('parseBitwiseORExpression', () => {
  beforeEach(run);

  it('should return a function called parseBitwiseORExpression', () => {
    expect(parseBitwiseORExpression).toBeInstanceOf(Function);
  });
});
