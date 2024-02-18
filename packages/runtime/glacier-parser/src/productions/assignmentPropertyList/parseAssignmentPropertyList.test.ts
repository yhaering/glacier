import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAssignmentPropertyList } from './parseAssignmentPropertyList';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAssignmentPropertyList(context);
  return { returnValue };
}

describe('parseAssignmentPropertyList', () => {
  beforeEach(run);

  it('should return a function called parseAssignmentPropertyList', () => {
    expect(parseAssignmentPropertyList).toBeInstanceOf(Function);
  });
});
