import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseRegularExpressionClass } from './parseRegularExpressionClass';

function run() {
  const context = fakeParserContext();
  const returnValue = parseRegularExpressionClass(context);
  return { returnValue };
}

describe('parseRegularExpressionClass', () => {
  beforeEach(run);

  it('should return a function called parseRegularExpressionClass', () => {
    expect(parseRegularExpressionClass).toBeInstanceOf(Function);
  });
});
