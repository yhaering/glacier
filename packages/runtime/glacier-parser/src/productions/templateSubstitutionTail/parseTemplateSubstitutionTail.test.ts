import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseTemplateSubstitutionTail } from './parseTemplateSubstitutionTail';

function run() {
  const context = fakeParserContext();
  const returnValue = parseTemplateSubstitutionTail(context);
  return { returnValue };
}

describe('parseTemplateSubstitutionTail', () => {
  beforeEach(run);

  it('should return a function called parseTemplateSubstitutionTail', () => {
    expect(parseTemplateSubstitutionTail).toBeInstanceOf(Function);
  });
});
