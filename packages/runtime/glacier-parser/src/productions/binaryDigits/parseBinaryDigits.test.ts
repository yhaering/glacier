import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseBinaryDigits } from './parseBinaryDigits';

function run() {
  const context = fakeParserContext();
  const returnValue = parseBinaryDigits(context);
  return { returnValue };
}

describe('parseBinaryDigits', () => {
  beforeEach(run);

  it('should return a function called parseBinaryDigits', () => {
    expect(parseBinaryDigits).toBeInstanceOf(Function);
  });
});
