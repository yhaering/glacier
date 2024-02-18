import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseNotEscapeSequence } from './parseNotEscapeSequence';

function run() {
  const context = fakeParserContext();
  const returnValue = parseNotEscapeSequence(context);
  return { returnValue };
}

describe('parseNotEscapeSequence', () => {
  beforeEach(run);

  it('should return a function called parseNotEscapeSequence', () => {
    expect(parseNotEscapeSequence).toBeInstanceOf(Function);
  });
});
