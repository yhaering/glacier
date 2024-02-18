import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseSingleStringCharacter } from './parseSingleStringCharacter';

function run() {
  const context = fakeParserContext();
  const returnValue = parseSingleStringCharacter(context);
  return { returnValue };
}

describe('parseSingleStringCharacter', () => {
  beforeEach(run);

  it('should return a function called parseSingleStringCharacter', () => {
    expect(parseSingleStringCharacter).toBeInstanceOf(Function);
  });
});
