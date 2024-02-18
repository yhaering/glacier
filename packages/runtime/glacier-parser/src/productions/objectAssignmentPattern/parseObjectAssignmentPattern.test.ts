import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseObjectAssignmentPattern } from './parseObjectAssignmentPattern';

function run() {
  const context = fakeParserContext();
  const returnValue = parseObjectAssignmentPattern(context);
  return { returnValue };
}

describe('parseObjectAssignmentPattern', () => {
  beforeEach(run);

  it('should return a function called parseObjectAssignmentPattern', () => {
    expect(parseObjectAssignmentPattern).toBeInstanceOf(Function);
  });
});
