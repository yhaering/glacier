import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAsyncConciseBody } from './parseAsyncConciseBody';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAsyncConciseBody(context);
  return { returnValue };
}

describe('parseAsyncConciseBody', () => {
  beforeEach(run);

  it('should return a function called parseAsyncConciseBody', () => {
    expect(parseAsyncConciseBody).toBeInstanceOf(Function);
  });
});
