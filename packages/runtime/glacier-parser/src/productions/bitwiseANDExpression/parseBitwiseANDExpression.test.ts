import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseBitwiseANDExpression } from './parseBitwiseANDExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseBitwiseANDExpression(context);
  return { returnValue };
}

describe('parseBitwiseANDExpression', () => {
  beforeEach(run);

  it('should return a function called parseBitwiseANDExpression', () => {
    expect(parseBitwiseANDExpression).toBeInstanceOf(Function);
  });
});
