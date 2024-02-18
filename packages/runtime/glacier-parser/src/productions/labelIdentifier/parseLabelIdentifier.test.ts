import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseLabelIdentifier } from './parseLabelIdentifier';

function run() {
  const context = fakeParserContext();
  const returnValue = parseLabelIdentifier(context);
  return { returnValue };
}

describe('parseLabelIdentifier', () => {
  beforeEach(run);

  it('should return a function called parseLabelIdentifier', () => {
    expect(parseLabelIdentifier).toBeInstanceOf(Function);
  });
});
