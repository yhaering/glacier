import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseMultiLineNotForwardSlashOrAsteriskChar } from './parseMultiLineNotForwardSlashOrAsteriskChar';

function run() {
  const context = fakeParserContext();
  const returnValue = parseMultiLineNotForwardSlashOrAsteriskChar(context);
  return { returnValue };
}

describe('parseMultiLineNotForwardSlashOrAsteriskChar', () => {
  beforeEach(run);

  it('should return a function called parseMultiLineNotForwardSlashOrAsteriskChar', () => {
    expect(parseMultiLineNotForwardSlashOrAsteriskChar).toBeInstanceOf(Function);
  });
});
