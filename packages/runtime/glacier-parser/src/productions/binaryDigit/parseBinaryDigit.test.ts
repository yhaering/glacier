import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseBinaryDigit } from './parseBinaryDigit';

function run() {
  const context = fakeParserContext();
  const returnValue = parseBinaryDigit(context);
  return { returnValue };
}

describe('parseBinaryDigit', () => {
  beforeEach(run);

  it('should return a function called parseBinaryDigit', () => {
    expect(parseBinaryDigit).toBeInstanceOf(Function);
  });
});
