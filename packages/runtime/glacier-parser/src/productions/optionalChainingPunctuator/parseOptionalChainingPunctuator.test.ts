import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseOptionalChainingPunctuator } from './parseOptionalChainingPunctuator';

function run() {
  const context = fakeParserContext();
  const returnValue = parseOptionalChainingPunctuator(context);
  return { returnValue };
}

describe('parseOptionalChainingPunctuator', () => {
  beforeEach(run);

  it('should return a function called parseOptionalChainingPunctuator', () => {
    expect(parseOptionalChainingPunctuator).toBeInstanceOf(Function);
  });
});
