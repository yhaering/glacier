import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseSingleLineCommentChars } from './parseSingleLineCommentChars';

function run() {
  const context = fakeParserContext();
  const returnValue = parseSingleLineCommentChars(context);
  return { returnValue };
}

describe('parseSingleLineCommentChars', () => {
  beforeEach(run);

  it('should return a function called parseSingleLineCommentChars', () => {
    expect(parseSingleLineCommentChars).toBeInstanceOf(Function);
  });
});
