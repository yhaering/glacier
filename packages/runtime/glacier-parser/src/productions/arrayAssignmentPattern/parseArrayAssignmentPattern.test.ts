import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseArrayAssignmentPattern } from './parseArrayAssignmentPattern';

function run() {
  const context = fakeParserContext();
  const returnValue = parseArrayAssignmentPattern(context);
  return { returnValue };
}

describe('parseArrayAssignmentPattern', () => {
  beforeEach(run);

  it('should return a function called parseArrayAssignmentPattern', () => {
    expect(parseArrayAssignmentPattern).toBeInstanceOf(Function);
  });
});
