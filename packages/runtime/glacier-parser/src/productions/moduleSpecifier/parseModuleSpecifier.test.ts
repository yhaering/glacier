import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseModuleSpecifier } from './parseModuleSpecifier';

function run() {
  const context = fakeParserContext();
  const returnValue = parseModuleSpecifier(context);
  return { returnValue };
}

describe('parseModuleSpecifier', () => {
  beforeEach(run);

  it('should return a function called parseModuleSpecifier', () => {
    expect(parseModuleSpecifier).toBeInstanceOf(Function);
  });
});
