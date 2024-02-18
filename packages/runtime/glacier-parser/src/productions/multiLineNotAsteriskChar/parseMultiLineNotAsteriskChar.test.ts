import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseMultiLineNotAsteriskChar } from './parseMultiLineNotAsteriskChar';

function run() {
  const context = fakeParserContext();
  const returnValue = parseMultiLineNotAsteriskChar(context);
  return { returnValue };
}

describe('parseMultiLineNotAsteriskChar', () => {
  beforeEach(run);

  it('should return a function called parseMultiLineNotAsteriskChar', () => {
    expect(parseMultiLineNotAsteriskChar).toBeInstanceOf(Function);
  });
});
