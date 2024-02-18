import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseSourceCharacter } from './parseSourceCharacter';

function run() {
  const context = fakeParserContext();
  const returnValue = parseSourceCharacter(context);
  return { returnValue };
}

describe('parseSourceCharacter', () => {
  beforeEach(run);

  it('should return a function called parseSourceCharacter', () => {
    expect(parseSourceCharacter).toBeInstanceOf(Function);
  });
});
