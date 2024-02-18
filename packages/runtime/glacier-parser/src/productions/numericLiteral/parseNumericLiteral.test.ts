import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseNumericLiteral } from './parseNumericLiteral';

function run() {
  const context = fakeParserContext();
  const returnValue = parseNumericLiteral(context);
  return { returnValue };
}

describe('parseNumericLiteral', () => {
  beforeEach(run);

  it('should return a function called parseNumericLiteral', () => {
    expect(parseNumericLiteral).toBeInstanceOf(Function);
  });
});
