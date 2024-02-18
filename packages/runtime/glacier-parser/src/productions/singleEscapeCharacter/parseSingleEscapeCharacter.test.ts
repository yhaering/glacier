import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseSingleEscapeCharacter } from './parseSingleEscapeCharacter';

function run() {
  const context = fakeParserContext();
  const returnValue = parseSingleEscapeCharacter(context);
  return { returnValue };
}

describe('parseSingleEscapeCharacter', () => {
  beforeEach(run);

  it('should return a function called parseSingleEscapeCharacter', () => {
    expect(parseSingleEscapeCharacter).toBeInstanceOf(Function);
  });
});
