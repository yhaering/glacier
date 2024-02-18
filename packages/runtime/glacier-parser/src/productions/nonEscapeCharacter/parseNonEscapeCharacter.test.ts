import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseNonEscapeCharacter } from './parseNonEscapeCharacter';

function run() {
  const context = fakeParserContext();
  const returnValue = parseNonEscapeCharacter(context);
  return { returnValue };
}

describe('parseNonEscapeCharacter', () => {
  beforeEach(run);

  it('should return a function called parseNonEscapeCharacter', () => {
    expect(parseNonEscapeCharacter).toBeInstanceOf(Function);
  });
});
