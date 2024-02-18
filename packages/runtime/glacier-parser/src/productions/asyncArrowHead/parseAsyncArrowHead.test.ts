import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAsyncArrowHead } from './parseAsyncArrowHead';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAsyncArrowHead(context);
  return { returnValue };
}

describe('parseAsyncArrowHead', () => {
  beforeEach(run);

  it('should return a function called parseAsyncArrowHead', () => {
    expect(parseAsyncArrowHead).toBeInstanceOf(Function);
  });
});
