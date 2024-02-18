import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAsyncGeneratorExpression } from './parseAsyncGeneratorExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAsyncGeneratorExpression(context);
  return { returnValue };
}

describe('parseAsyncGeneratorExpression', () => {
  beforeEach(run);

  it('should return a function called parseAsyncGeneratorExpression', () => {
    expect(parseAsyncGeneratorExpression).toBeInstanceOf(Function);
  });
});
