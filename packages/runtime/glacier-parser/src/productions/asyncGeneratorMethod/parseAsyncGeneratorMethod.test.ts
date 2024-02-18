import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAsyncGeneratorMethod } from './parseAsyncGeneratorMethod';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAsyncGeneratorMethod(context);
  return { returnValue };
}

describe('parseAsyncGeneratorMethod', () => {
  beforeEach(run);

  it('should return a function called parseAsyncGeneratorMethod', () => {
    expect(parseAsyncGeneratorMethod).toBeInstanceOf(Function);
  });
});
