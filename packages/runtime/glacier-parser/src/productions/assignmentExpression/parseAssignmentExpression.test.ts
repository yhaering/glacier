import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAssignmentExpression } from './parseAssignmentExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAssignmentExpression(context);
  return { returnValue };
}

describe('parseAssignmentExpression', () => {
  beforeEach(run);

  it('should return a function called parseAssignmentExpression', () => {
    expect(parseAssignmentExpression).toBeInstanceOf(Function);
  });
});
