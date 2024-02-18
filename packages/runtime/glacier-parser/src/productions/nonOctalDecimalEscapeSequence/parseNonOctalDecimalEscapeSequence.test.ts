import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseNonOctalDecimalEscapeSequence } from './parseNonOctalDecimalEscapeSequence';

function run() {
  const context = fakeParserContext();
  const returnValue = parseNonOctalDecimalEscapeSequence(context);
  return { returnValue };
}

describe('parseNonOctalDecimalEscapeSequence', () => {
  beforeEach(run);

  it('should return a function called parseNonOctalDecimalEscapeSequence', () => {
    expect(parseNonOctalDecimalEscapeSequence).toBeInstanceOf(Function);
  });
});
