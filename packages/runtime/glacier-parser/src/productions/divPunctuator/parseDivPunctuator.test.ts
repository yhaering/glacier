import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseDivPunctuator } from './parseDivPunctuator';

function run() {
  const context = fakeParserContext();
  const returnValue = parseDivPunctuator(context);
  return { returnValue };
}

describe('parseDivPunctuator', () => {
  beforeEach(run);

  it('should return a function called parseDivPunctuator', () => {
    expect(parseDivPunctuator).toBeInstanceOf(Function);
  });
});
