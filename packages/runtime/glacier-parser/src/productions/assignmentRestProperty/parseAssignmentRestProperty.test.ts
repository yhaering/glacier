import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAssignmentRestProperty } from './parseAssignmentRestProperty';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAssignmentRestProperty(context);
  return { returnValue };
}

describe('parseAssignmentRestProperty', () => {
  beforeEach(run);

  it('should return a function called parseAssignmentRestProperty', () => {
    expect(parseAssignmentRestProperty).toBeInstanceOf(Function);
  });
});
