import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseIdentifier } from './parseIdentifier';

function run() {
  const context = fakeParserContext();
  const returnValue = parseIdentifier(context);
  return { returnValue };
}

describe('parseIdentifier', () => {
  beforeEach(run);

  it('should return a function called parseIdentifier', () => {
    expect(parseIdentifier).toBeInstanceOf(Function);
  });
});
