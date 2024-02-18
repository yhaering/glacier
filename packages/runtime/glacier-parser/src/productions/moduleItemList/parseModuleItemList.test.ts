import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseModuleItemList } from './parseModuleItemList';

function run() {
  const context = fakeParserContext();
  const returnValue = parseModuleItemList(context);
  return { returnValue };
}

describe('parseModuleItemList', () => {
  beforeEach(run);

  it('should return a function called parseModuleItemList', () => {
    expect(parseModuleItemList).toBeInstanceOf(Function);
  });
});
