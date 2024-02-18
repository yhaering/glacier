import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parsePunctuator } from './parsePunctuator';

function run() {
  const context = fakeParserContext();
  const returnValue = parsePunctuator(context);
  return { returnValue };
}

describe('parsePunctuator', () => {
  beforeEach(run);

  it('should return a function called parsePunctuator', () => {
    expect(parsePunctuator).toBeInstanceOf(Function);
  });
});
