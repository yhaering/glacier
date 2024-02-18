import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAssignmentOperator } from './parseAssignmentOperator';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAssignmentOperator(context);
  return { returnValue };
}

describe('parseAssignmentOperator', () => {
  beforeEach(run);

  it('should return a function called parseAssignmentOperator', () => {
    expect(parseAssignmentOperator).toBeInstanceOf(Function);
  });
});
