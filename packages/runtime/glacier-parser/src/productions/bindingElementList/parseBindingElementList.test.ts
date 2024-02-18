import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseBindingElementList } from './parseBindingElementList';

function run() {
  const context = fakeParserContext();
  const returnValue = parseBindingElementList(context);
  return { returnValue };
}

describe('parseBindingElementList', () => {
  beforeEach(run);

  it('should return a function called parseBindingElementList', () => {
    expect(parseBindingElementList).toBeInstanceOf(Function);
  });
});
