import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAsyncArrowBindingIdentifier } from './parseAsyncArrowBindingIdentifier';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAsyncArrowBindingIdentifier(context);
  return { returnValue };
}

describe('parseAsyncArrowBindingIdentifier', () => {
  beforeEach(run);

  it('should return a function called parseAsyncArrowBindingIdentifier', () => {
    expect(parseAsyncArrowBindingIdentifier).toBeInstanceOf(Function);
  });
});
