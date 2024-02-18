import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseExponentIndicator } from './parseExponentIndicator';

function run() {
  const context = fakeParserContext();
  const returnValue = parseExponentIndicator(context);
  return { returnValue };
}

describe('parseExponentIndicator', () => {
  beforeEach(run);

  it('should return a function called parseExponentIndicator', () => {
    expect(parseExponentIndicator).toBeInstanceOf(Function);
  });
});
