import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAsyncMethod } from './parseAsyncMethod';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAsyncMethod(context);
  return { returnValue };
}

describe('parseAsyncMethod', () => {
  beforeEach(run);

  it('should return a function called parseAsyncMethod', () => {
    expect(parseAsyncMethod).toBeInstanceOf(Function);
  });
});
