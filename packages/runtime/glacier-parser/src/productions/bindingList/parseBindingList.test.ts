import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseBindingList } from './parseBindingList';

function run() {
  const context = fakeParserContext();
  const returnValue = parseBindingList(context);
  return { returnValue };
}

describe('parseBindingList', () => {
  beforeEach(run);

  it('should return a function called parseBindingList', () => {
    expect(parseBindingList).toBeInstanceOf(Function);
  });
});
