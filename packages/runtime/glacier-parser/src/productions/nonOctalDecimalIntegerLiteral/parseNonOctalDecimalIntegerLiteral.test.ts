import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseNonOctalDecimalIntegerLiteral } from './parseNonOctalDecimalIntegerLiteral';

function run() {
  const context = fakeParserContext();
  const returnValue = parseNonOctalDecimalIntegerLiteral(context);
  return { returnValue };
}

describe('parseNonOctalDecimalIntegerLiteral', () => {
  beforeEach(run);

  it('should return a function called parseNonOctalDecimalIntegerLiteral', () => {
    expect(parseNonOctalDecimalIntegerLiteral).toBeInstanceOf(Function);
  });
});
