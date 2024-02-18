import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseRegularExpressionBackslashSequence } from './parseRegularExpressionBackslashSequence';

function run() {
  const context = fakeParserContext();
  const returnValue = parseRegularExpressionBackslashSequence(context);
  return { returnValue };
}

describe('parseRegularExpressionBackslashSequence', () => {
  beforeEach(run);

  it('should return a function called parseRegularExpressionBackslashSequence', () => {
    expect(parseRegularExpressionBackslashSequence).toBeInstanceOf(Function);
  });
});
