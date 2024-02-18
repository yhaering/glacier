import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseDecimalIntegerLiteral } from './parseDecimalIntegerLiteral';

function run() {
  const context = fakeParserContext();
  const returnValue = parseDecimalIntegerLiteral(context);
  return { returnValue };
}

describe('parseDecimalIntegerLiteral', () => {
  beforeEach(run);

  it('should return a function called parseDecimalIntegerLiteral', () => {
    expect(parseDecimalIntegerLiteral).toBeInstanceOf(Function);
  });
});
