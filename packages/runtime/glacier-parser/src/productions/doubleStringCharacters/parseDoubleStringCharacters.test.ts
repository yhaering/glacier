import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseDoubleStringCharacters } from './parseDoubleStringCharacters';

function run() {
  const context = fakeParserContext();
  const returnValue = parseDoubleStringCharacters(context);
  return { returnValue };
}

describe('parseDoubleStringCharacters', () => {
  beforeEach(run);

  it('should return a function called parseDoubleStringCharacters', () => {
    expect(parseDoubleStringCharacters).toBeInstanceOf(Function);
  });
});
