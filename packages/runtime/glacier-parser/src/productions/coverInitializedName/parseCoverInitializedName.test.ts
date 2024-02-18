import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseCoverInitializedName } from './parseCoverInitializedName';

function run() {
  const context = fakeParserContext();
  const returnValue = parseCoverInitializedName(context);
  return { returnValue };
}

describe('parseCoverInitializedName', () => {
  beforeEach(run);

  it('should return a function called parseCoverInitializedName', () => {
    expect(parseCoverInitializedName).toBeInstanceOf(Function);
  });
});
