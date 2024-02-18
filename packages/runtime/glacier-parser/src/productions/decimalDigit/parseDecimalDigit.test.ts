import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseDecimalDigit } from './parseDecimalDigit';

function run() {
  const context = fakeParserContext();
  const returnValue = parseDecimalDigit(context);
  return { returnValue };
}

describe('parseDecimalDigit', () => {
  beforeEach(run);

  it('should return a function called parseDecimalDigit', () => {
    expect(parseDecimalDigit).toBeInstanceOf(Function);
  });
});
