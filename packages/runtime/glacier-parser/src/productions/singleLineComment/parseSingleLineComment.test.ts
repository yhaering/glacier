import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseSingleLineComment } from './parseSingleLineComment';

function run() {
  const context = fakeParserContext();
  const returnValue = parseSingleLineComment(context);
  return { returnValue };
}

describe('parseSingleLineComment', () => {
  beforeEach(run);

  it('should return a function called parseSingleLineComment', () => {
    expect(parseSingleLineComment).toBeInstanceOf(Function);
  });
});
