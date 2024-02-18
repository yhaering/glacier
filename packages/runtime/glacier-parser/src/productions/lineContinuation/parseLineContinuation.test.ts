import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseLineContinuation } from './parseLineContinuation';

function run() {
  const context = fakeParserContext();
  const returnValue = parseLineContinuation(context);
  return { returnValue };
}

describe('parseLineContinuation', () => {
  beforeEach(run);

  it('should return a function called parseLineContinuation', () => {
    expect(parseLineContinuation).toBeInstanceOf(Function);
  });
});
