import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseTemplateMiddle } from './parseTemplateMiddle';

function run() {
  const context = fakeParserContext();
  const returnValue = parseTemplateMiddle(context);
  return { returnValue };
}

describe('parseTemplateMiddle', () => {
  beforeEach(run);

  it('should return a function called parseTemplateMiddle', () => {
    expect(parseTemplateMiddle).toBeInstanceOf(Function);
  });
});
