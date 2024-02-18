import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseDecimalDigits } from './parseDecimalDigits';

function run() {
  const context = fakeParserContext();
  const returnValue = parseDecimalDigits(context);
  return { returnValue };
}

describe('parseDecimalDigits', () => {
  beforeEach(run);

  it('should return a function called parseDecimalDigits', () => {
    expect(parseDecimalDigits).toBeInstanceOf(Function);
  });
});
