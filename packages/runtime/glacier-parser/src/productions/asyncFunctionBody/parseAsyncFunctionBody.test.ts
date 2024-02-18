import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAsyncFunctionBody } from './parseAsyncFunctionBody';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAsyncFunctionBody(context);
  return { returnValue };
}

describe('parseAsyncFunctionBody', () => {
  beforeEach(run);

  it('should return a function called parseAsyncFunctionBody', () => {
    expect(parseAsyncFunctionBody).toBeInstanceOf(Function);
  });
});
