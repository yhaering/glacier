import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parsePostAsteriskCommentChars } from './parsePostAsteriskCommentChars';

function run() {
  const context = fakeParserContext();
  const returnValue = parsePostAsteriskCommentChars(context);
  return { returnValue };
}

describe('parsePostAsteriskCommentChars', () => {
  beforeEach(run);

  it('should return a function called parsePostAsteriskCommentChars', () => {
    expect(parsePostAsteriskCommentChars).toBeInstanceOf(Function);
  });
});
