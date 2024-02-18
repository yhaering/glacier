import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAsyncArrowFunction } from './parseAsyncArrowFunction';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAsyncArrowFunction(context);
  return { returnValue };
}

describe('parseAsyncArrowFunction', () => {
  beforeEach(run);

  it('should return a function called parseAsyncArrowFunction', () => {
    expect(parseAsyncArrowFunction).toBeInstanceOf(Function);
  });
});
