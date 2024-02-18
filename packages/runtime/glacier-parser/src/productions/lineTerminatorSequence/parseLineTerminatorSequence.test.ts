import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseLineTerminatorSequence } from './parseLineTerminatorSequence';

function run() {
  const context = fakeParserContext();
  const returnValue = parseLineTerminatorSequence(context);
  return { returnValue };
}

describe('parseLineTerminatorSequence', () => {
  beforeEach(run);

  it('should return a function called parseLineTerminatorSequence', () => {
    expect(parseLineTerminatorSequence).toBeInstanceOf(Function);
  });
});
