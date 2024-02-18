import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAssignmentElement } from './parseAssignmentElement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAssignmentElement(context);
  return { returnValue };
}

describe('parseAssignmentElement', () => {
  beforeEach(run);

  it('should return a function called parseAssignmentElement', () => {
    expect(parseAssignmentElement).toBeInstanceOf(Function);
  });
});
