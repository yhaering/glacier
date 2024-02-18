import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseMultiLineCommentChars } from './parseMultiLineCommentChars';

function run() {
  const context = fakeParserContext();
  const returnValue = parseMultiLineCommentChars(context);
  return { returnValue };
}

describe('parseMultiLineCommentChars', () => {
  beforeEach(run);

  it('should return a function called parseMultiLineCommentChars', () => {
    expect(parseMultiLineCommentChars).toBeInstanceOf(Function);
  });
});
