import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseEscapeSequence } from './parseEscapeSequence';

function run() {
  const context = fakeParserContext();
  const returnValue = parseEscapeSequence(context);
  return { returnValue };
}

describe('parseEscapeSequence', () => {
  beforeEach(run);

  it('should return a function called parseEscapeSequence', () => {
    expect(parseEscapeSequence).toBeInstanceOf(Function);
  });
});
