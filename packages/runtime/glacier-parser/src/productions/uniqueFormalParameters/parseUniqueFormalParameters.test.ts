import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseUniqueFormalParameters } from './parseUniqueFormalParameters';

function run() {
  const context = fakeParserContext();
  const returnValue = parseUniqueFormalParameters(context);
  return { returnValue };
}

describe('parseUniqueFormalParameters', () => {
  beforeEach(run);

  it('should return a function called parseUniqueFormalParameters', () => {
    expect(parseUniqueFormalParameters).toBeInstanceOf(Function);
  });
});
