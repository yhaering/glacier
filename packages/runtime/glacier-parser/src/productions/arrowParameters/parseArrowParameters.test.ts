import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseArrowParameters } from './parseArrowParameters';

function run() {
  const context = fakeParserContext();
  const returnValue = parseArrowParameters(context);
  return { returnValue };
}

describe('parseArrowParameters', () => {
  beforeEach(run);

  it('should return a function called parseArrowParameters', () => {
    expect(parseArrowParameters).toBeInstanceOf(Function);
  });
});
