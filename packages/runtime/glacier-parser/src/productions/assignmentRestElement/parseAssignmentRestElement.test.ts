import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAssignmentRestElement } from './parseAssignmentRestElement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAssignmentRestElement(context);
  return { returnValue };
}

describe('parseAssignmentRestElement', () => {
  beforeEach(run);

  it('should return a function called parseAssignmentRestElement', () => {
    expect(parseAssignmentRestElement).toBeInstanceOf(Function);
  });
});
