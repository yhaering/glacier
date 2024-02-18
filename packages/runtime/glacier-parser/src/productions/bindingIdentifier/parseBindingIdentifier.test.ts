import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseBindingIdentifier } from './parseBindingIdentifier';

function run() {
  const context = fakeParserContext();
  const returnValue = parseBindingIdentifier(context);
  return { returnValue };
}

describe('parseBindingIdentifier', () => {
  beforeEach(run);

  it('should return a function called parseBindingIdentifier', () => {
    expect(parseBindingIdentifier).toBeInstanceOf(Function);
  });
});
