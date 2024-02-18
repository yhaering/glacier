import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parsePropertyDefinitionList } from './parsePropertyDefinitionList';

function run() {
  const context = fakeParserContext();
  const returnValue = parsePropertyDefinitionList(context);
  return { returnValue };
}

describe('parsePropertyDefinitionList', () => {
  beforeEach(run);

  it('should return a function called parsePropertyDefinitionList', () => {
    expect(parsePropertyDefinitionList).toBeInstanceOf(Function);
  });
});
