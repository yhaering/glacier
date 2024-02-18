import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseEscapeCharacter } from './parseEscapeCharacter';

function run() {
  const context = fakeParserContext();
  const returnValue = parseEscapeCharacter(context);
  return { returnValue };
}

describe('parseEscapeCharacter', () => {
  beforeEach(run);

  it('should return a function called parseEscapeCharacter', () => {
    expect(parseEscapeCharacter).toBeInstanceOf(Function);
  });
});
