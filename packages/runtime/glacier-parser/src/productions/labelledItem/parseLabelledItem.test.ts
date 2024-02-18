import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseLabelledItem } from './parseLabelledItem';

function run() {
  const context = fakeParserContext();
  const returnValue = parseLabelledItem(context);
  return { returnValue };
}

describe('parseLabelledItem', () => {
  beforeEach(run);

  it('should return a function called parseLabelledItem', () => {
    expect(parseLabelledItem).toBeInstanceOf(Function);
  });
});
