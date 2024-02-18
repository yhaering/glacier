import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseTemplateMiddleList } from './parseTemplateMiddleList';

function run() {
  const context = fakeParserContext();
  const returnValue = parseTemplateMiddleList(context);
  return { returnValue };
}

describe('parseTemplateMiddleList', () => {
  beforeEach(run);

  it('should return a function called parseTemplateMiddleList', () => {
    expect(parseTemplateMiddleList).toBeInstanceOf(Function);
  });
});
