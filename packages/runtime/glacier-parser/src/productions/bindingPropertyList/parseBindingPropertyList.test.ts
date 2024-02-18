import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseBindingPropertyList } from './parseBindingPropertyList';

function run() {
  const context = fakeParserContext();
  const returnValue = parseBindingPropertyList(context);
  return { returnValue };
}

describe('parseBindingPropertyList', () => {
  beforeEach(run);

  it('should return a function called parseBindingPropertyList', () => {
    expect(parseBindingPropertyList).toBeInstanceOf(Function);
  });
});
