import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseTemplateCharacter } from './parseTemplateCharacter';

function run() {
  const context = fakeParserContext();
  const returnValue = parseTemplateCharacter(context);
  return { returnValue };
}

describe('parseTemplateCharacter', () => {
  beforeEach(run);

  it('should return a function called parseTemplateCharacter', () => {
    expect(parseTemplateCharacter).toBeInstanceOf(Function);
  });
});
