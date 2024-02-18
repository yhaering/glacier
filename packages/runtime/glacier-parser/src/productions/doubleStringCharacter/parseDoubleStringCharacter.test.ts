import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseDoubleStringCharacter } from './parseDoubleStringCharacter';

function run() {
  const context = fakeParserContext();
  const returnValue = parseDoubleStringCharacter(context);
  return { returnValue };
}

describe('parseDoubleStringCharacter', () => {
  beforeEach(run);

  it('should return a function called parseDoubleStringCharacter', () => {
    expect(parseDoubleStringCharacter).toBeInstanceOf(Function);
  });
});
