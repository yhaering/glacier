import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAsyncGeneratorBody } from './parseAsyncGeneratorBody';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAsyncGeneratorBody(context);
  return { returnValue };
}

describe('parseAsyncGeneratorBody', () => {
  beforeEach(run);

  it('should return a function called parseAsyncGeneratorBody', () => {
    expect(parseAsyncGeneratorBody).toBeInstanceOf(Function);
  });
});
