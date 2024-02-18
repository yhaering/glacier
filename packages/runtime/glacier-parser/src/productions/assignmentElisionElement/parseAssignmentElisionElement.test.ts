import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAssignmentElisionElement } from './parseAssignmentElisionElement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAssignmentElisionElement(context);
  return { returnValue };
}

describe('parseAssignmentElisionElement', () => {
  beforeEach(run);

  it('should return a function called parseAssignmentElisionElement', () => {
    expect(parseAssignmentElisionElement).toBeInstanceOf(Function);
  });
});
