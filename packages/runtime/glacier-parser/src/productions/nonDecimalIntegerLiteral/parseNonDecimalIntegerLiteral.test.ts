import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseNonDecimalIntegerLiteral } from './parseNonDecimalIntegerLiteral';

function run() {
  const context = fakeParserContext();
  const returnValue = parseNonDecimalIntegerLiteral(context);
  return { returnValue };
}

describe('parseNonDecimalIntegerLiteral', () => {
  beforeEach(run);

  it('should return a function called parseNonDecimalIntegerLiteral', () => {
    expect(parseNonDecimalIntegerLiteral).toBeInstanceOf(Function);
  });
});
