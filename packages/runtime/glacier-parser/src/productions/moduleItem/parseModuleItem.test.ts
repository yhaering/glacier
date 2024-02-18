import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseModuleItem } from './parseModuleItem';

function run() {
  const context = fakeParserContext();
  const returnValue = parseModuleItem(context);
  return { returnValue };
}

describe('parseModuleItem', () => {
  beforeEach(run);

  it('should return a function called parseModuleItem', () => {
    expect(parseModuleItem).toBeInstanceOf(Function);
  });
});
