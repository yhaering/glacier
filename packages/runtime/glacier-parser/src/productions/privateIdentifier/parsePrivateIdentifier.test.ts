import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parsePrivateIdentifier } from './parsePrivateIdentifier';

function run() {
  const context = fakeParserContext();
  const returnValue = parsePrivateIdentifier(context);
  return { returnValue };
}

describe('parsePrivateIdentifier', () => {
  beforeEach(run);

  it('should return a function called parsePrivateIdentifier', () => {
    expect(parsePrivateIdentifier).toBeInstanceOf(Function);
  });
});
