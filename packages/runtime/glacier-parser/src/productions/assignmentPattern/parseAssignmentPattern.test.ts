import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAssignmentPattern } from './parseAssignmentPattern';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAssignmentPattern(context);
  return { returnValue };
}

describe('parseAssignmentPattern', () => {
  beforeEach(run);

  it('should return a function called parseAssignmentPattern', () => {
    expect(parseAssignmentPattern).toBeInstanceOf(Function);
  });
});
