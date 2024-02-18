import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseDecimalBigIntegerLiteral } from './parseDecimalBigIntegerLiteral';

function run() {
  const context = fakeParserContext();
  const returnValue = parseDecimalBigIntegerLiteral(context);
  return { returnValue };
}

describe('parseDecimalBigIntegerLiteral', () => {
  beforeEach(run);

  it('should return a function called parseDecimalBigIntegerLiteral', () => {
    expect(parseDecimalBigIntegerLiteral).toBeInstanceOf(Function);
  });
});
