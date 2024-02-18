import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseExponentPart } from './parseExponentPart';

function run() {
  const context = fakeParserContext();
  const returnValue = parseExponentPart(context);
  return { returnValue };
}

describe('parseExponentPart', () => {
  beforeEach(run);

  it('should return a function called parseExponentPart', () => {
    expect(parseExponentPart).toBeInstanceOf(Function);
  });
});
