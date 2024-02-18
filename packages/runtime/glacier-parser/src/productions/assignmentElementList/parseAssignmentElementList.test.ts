import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAssignmentElementList } from './parseAssignmentElementList';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAssignmentElementList(context);
  return { returnValue };
}

describe('parseAssignmentElementList', () => {
  beforeEach(run);

  it('should return a function called parseAssignmentElementList', () => {
    expect(parseAssignmentElementList).toBeInstanceOf(Function);
  });
});
