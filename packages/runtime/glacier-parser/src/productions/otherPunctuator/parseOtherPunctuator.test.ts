import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseOtherPunctuator } from './parseOtherPunctuator';

function run() {
  const context = fakeParserContext();
  const returnValue = parseOtherPunctuator(context);
  return { returnValue };
}

describe('parseOtherPunctuator', () => {
  beforeEach(run);

  it('should return a function called parseOtherPunctuator', () => {
    expect(parseOtherPunctuator).toBeInstanceOf(Function);
  });
});
