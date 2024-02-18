import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseTemplateEscapeSequence } from './parseTemplateEscapeSequence';

function run() {
  const context = fakeParserContext();
  const returnValue = parseTemplateEscapeSequence(context);
  return { returnValue };
}

describe('parseTemplateEscapeSequence', () => {
  beforeEach(run);

  it('should return a function called parseTemplateEscapeSequence', () => {
    expect(parseTemplateEscapeSequence).toBeInstanceOf(Function);
  });
});
