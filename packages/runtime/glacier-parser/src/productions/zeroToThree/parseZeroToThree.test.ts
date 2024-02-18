import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseZeroToThree } from './parseZeroToThree';

function run() {
  const context = fakeParserContext();
  const returnValue = parseZeroToThree(context);
  return { returnValue };
}

describe('parseZeroToThree', () => {
  beforeEach(run);

  it('should return a function called parseZeroToThree', () => {
    expect(parseZeroToThree).toBeInstanceOf(Function);
  });
});
