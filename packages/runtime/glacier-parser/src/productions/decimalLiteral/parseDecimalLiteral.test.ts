import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseDecimalLiteral } from './parseDecimalLiteral';

function run() {
  const context = fakeParserContext();
  const returnValue = parseDecimalLiteral(context);
  return { returnValue };
}

describe('parseDecimalLiteral', () => {
  beforeEach(run);

  it('should return a function called parseDecimalLiteral', () => {
    expect(parseDecimalLiteral).toBeInstanceOf(Function);
  });
});
