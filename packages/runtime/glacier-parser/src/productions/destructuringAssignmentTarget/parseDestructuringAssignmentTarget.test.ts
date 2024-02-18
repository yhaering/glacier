import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseDestructuringAssignmentTarget } from './parseDestructuringAssignmentTarget';

function run() {
  const context = fakeParserContext();
  const returnValue = parseDestructuringAssignmentTarget(context);
  return { returnValue };
}

describe('parseDestructuringAssignmentTarget', () => {
  beforeEach(run);

  it('should return a function called parseDestructuringAssignmentTarget', () => {
    expect(parseDestructuringAssignmentTarget).toBeInstanceOf(Function);
  });
});
