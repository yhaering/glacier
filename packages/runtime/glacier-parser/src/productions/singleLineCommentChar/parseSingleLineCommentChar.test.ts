import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseSingleLineCommentChar } from './parseSingleLineCommentChar';

function run() {
  const context = fakeParserContext();
  const returnValue = parseSingleLineCommentChar(context);
  return { returnValue };
}

describe('parseSingleLineCommentChar', () => {
  beforeEach(run);

  it('should return a function called parseSingleLineCommentChar', () => {
    expect(parseSingleLineCommentChar).toBeInstanceOf(Function);
  });
});
