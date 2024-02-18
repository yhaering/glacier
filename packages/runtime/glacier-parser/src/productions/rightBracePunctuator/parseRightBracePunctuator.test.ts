import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseRightBracePunctuator } from './parseRightBracePunctuator';

function run() {
  const context = fakeParserContext();
  const returnValue = parseRightBracePunctuator(context);
  return { returnValue };
}

describe('parseRightBracePunctuator', () => {
  beforeEach(run);

  it('should return a function called parseRightBracePunctuator', () => {
    expect(parseRightBracePunctuator).toBeInstanceOf(Function);
  });
});
