import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseSubstitutionTemplate } from './parseSubstitutionTemplate';

function run() {
  const context = fakeParserContext();
  const returnValue = parseSubstitutionTemplate(context);
  return { returnValue };
}

describe('parseSubstitutionTemplate', () => {
  beforeEach(run);

  it('should return a function called parseSubstitutionTemplate', () => {
    expect(parseSubstitutionTemplate).toBeInstanceOf(Function);
  });
});
