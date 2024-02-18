import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseBitwiseXORExpression } from './parseBitwiseXORExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseBitwiseXORExpression(context);
  return { returnValue };
}

describe('parseBitwiseXORExpression', () => {
  beforeEach(run);

  it('should return a function called parseBitwiseXORExpression', () => {
    expect(parseBitwiseXORExpression).toBeInstanceOf(Function);
  });
});
