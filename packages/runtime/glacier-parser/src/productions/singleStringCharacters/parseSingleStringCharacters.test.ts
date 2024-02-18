import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseSingleStringCharacters } from './parseSingleStringCharacters';

function run() {
  const context = fakeParserContext();
  const returnValue = parseSingleStringCharacters(context);
  return { returnValue };
}

describe('parseSingleStringCharacters', () => {
  beforeEach(run);

  it('should return a function called parseSingleStringCharacters', () => {
    expect(parseSingleStringCharacters).toBeInstanceOf(Function);
  });
});
