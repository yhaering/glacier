import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseMultiLineComment } from './parseMultiLineComment';

function run() {
  const context = fakeParserContext();
  const returnValue = parseMultiLineComment(context);
  return { returnValue };
}

describe('parseMultiLineComment', () => {
  beforeEach(run);

  it('should return a function called parseMultiLineComment', () => {
    expect(parseMultiLineComment).toBeInstanceOf(Function);
  });
});
