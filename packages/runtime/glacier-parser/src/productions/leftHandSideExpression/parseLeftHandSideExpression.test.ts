import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseLeftHandSideExpression } from './parseLeftHandSideExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseLeftHandSideExpression(context);
  return { returnValue };
}

describe('parseLeftHandSideExpression', () => {
  beforeEach(run);

  it('should return a function called parseLeftHandSideExpression', () => {
    expect(parseLeftHandSideExpression).toBeInstanceOf(Function);
  });
});
