import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseFormalParameters } from './parseFormalParameters';

function run() {
  const context = fakeParserContext();
  const returnValue = parseFormalParameters(context);
  return { returnValue };
}

describe('parseFormalParameters', () => {
  beforeEach(run);

  it('should return a function called parseFormalParameters', () => {
    expect(parseFormalParameters).toBeInstanceOf(Function);
  });
});
