import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseCallMemberExpression } from './parseCallMemberExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseCallMemberExpression(context);
  return { returnValue };
}

describe('parseCallMemberExpression', () => {
  beforeEach(run);

  it('should return a function called parseCallMemberExpression', () => {
    expect(parseCallMemberExpression).toBeInstanceOf(Function);
  });
});
