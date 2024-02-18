import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseRegularExpressionFlags } from './parseRegularExpressionFlags';

function run() {
  const context = fakeParserContext();
  const returnValue = parseRegularExpressionFlags(context);
  return { returnValue };
}

describe('parseRegularExpressionFlags', () => {
  beforeEach(run);

  it('should return a function called parseRegularExpressionFlags', () => {
    expect(parseRegularExpressionFlags).toBeInstanceOf(Function);
  });
});
