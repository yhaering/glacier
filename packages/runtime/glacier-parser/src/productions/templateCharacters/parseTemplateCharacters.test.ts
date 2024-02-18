import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseTemplateCharacters } from './parseTemplateCharacters';

function run() {
  const context = fakeParserContext();
  const returnValue = parseTemplateCharacters(context);
  return { returnValue };
}

describe('parseTemplateCharacters', () => {
  beforeEach(run);

  it('should return a function called parseTemplateCharacters', () => {
    expect(parseTemplateCharacters).toBeInstanceOf(Function);
  });
});
