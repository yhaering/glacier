import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseNoSubstitutionTemplate } from './parseNoSubstitutionTemplate';

function run() {
  const context = fakeParserContext();
  const returnValue = parseNoSubstitutionTemplate(context);
  return { returnValue };
}

describe('parseNoSubstitutionTemplate', () => {
  beforeEach(run);

  it('should return a function called parseNoSubstitutionTemplate', () => {
    expect(parseNoSubstitutionTemplate).toBeInstanceOf(Function);
  });
});
