import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseArrowFormalParameters } from './parseArrowFormalParameters';

function run() {
  const context = fakeParserContext();
  const returnValue = parseArrowFormalParameters(context);
  return { returnValue };
}

describe('parseArrowFormalParameters', () => {
  beforeEach(run);

  it('should return a function called parseArrowFormalParameters', () => {
    expect(parseArrowFormalParameters).toBeInstanceOf(Function);
  });
});
