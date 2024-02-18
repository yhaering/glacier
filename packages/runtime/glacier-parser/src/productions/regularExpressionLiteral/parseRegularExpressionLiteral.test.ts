import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseRegularExpressionLiteral } from './parseRegularExpressionLiteral';

function run() {
  const context = fakeParserContext();
  const returnValue = parseRegularExpressionLiteral(context);
  return { returnValue };
}

describe('parseRegularExpressionLiteral', () => {
  beforeEach(run);

  it('should return a function called parseRegularExpressionLiteral', () => {
    expect(parseRegularExpressionLiteral).toBeInstanceOf(Function);
  });
});
