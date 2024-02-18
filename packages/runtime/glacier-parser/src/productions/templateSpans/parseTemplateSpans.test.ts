import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseTemplateSpans } from './parseTemplateSpans';

function run() {
  const context = fakeParserContext();
  const returnValue = parseTemplateSpans(context);
  return { returnValue };
}

describe('parseTemplateSpans', () => {
  beforeEach(run);

  it('should return a function called parseTemplateSpans', () => {
    expect(parseTemplateSpans).toBeInstanceOf(Function);
  });
});
