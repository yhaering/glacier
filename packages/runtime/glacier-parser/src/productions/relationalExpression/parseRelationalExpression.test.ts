import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseRelationalExpression } from './parseRelationalExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseRelationalExpression(context);
  return { returnValue };
}

describe('parseRelationalExpression', () => {
  beforeEach(run);

  it('should return a function called parseRelationalExpression', () => {
    expect(parseRelationalExpression).toBeInstanceOf(Function);
  });
});
