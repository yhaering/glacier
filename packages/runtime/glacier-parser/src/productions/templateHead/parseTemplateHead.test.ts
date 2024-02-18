import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseTemplateHead } from './parseTemplateHead';

function run() {
  const context = fakeParserContext();
  const returnValue = parseTemplateHead(context);
  return { returnValue };
}

describe('parseTemplateHead', () => {
  beforeEach(run);

  it('should return a function called parseTemplateHead', () => {
    expect(parseTemplateHead).toBeInstanceOf(Function);
  });
});
