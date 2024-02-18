import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parsePrimaryExpression } from './parsePrimaryExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parsePrimaryExpression(context);
  return { returnValue };
}

describe('parsePrimaryExpression', () => {
  beforeEach(run);

  it('should return a function called parsePrimaryExpression', () => {
    expect(parsePrimaryExpression).toBeInstanceOf(Function);
  });
});
