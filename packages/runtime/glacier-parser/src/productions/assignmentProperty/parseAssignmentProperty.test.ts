import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAssignmentProperty } from './parseAssignmentProperty';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAssignmentProperty(context);
  return { returnValue };
}

describe('parseAssignmentProperty', () => {
  beforeEach(run);

  it('should return a function called parseAssignmentProperty', () => {
    expect(parseAssignmentProperty).toBeInstanceOf(Function);
  });
});
