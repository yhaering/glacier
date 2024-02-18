import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseExpression } from './parseExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseExpression(context);
  return { returnValue };
}

describe('parseExpression', () => {
  beforeEach(run);

  it('should return a function called parseExpression', () => {
    expect(parseExpression).toBeInstanceOf(Function);
  });
});
