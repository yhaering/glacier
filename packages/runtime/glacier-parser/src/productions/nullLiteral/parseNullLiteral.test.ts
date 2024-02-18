import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseNullLiteral } from './parseNullLiteral';

function run() {
  const context = fakeParserContext();
  const returnValue = parseNullLiteral(context);
  return { returnValue };
}

describe('parseNullLiteral', () => {
  beforeEach(run);

  it('should return a function called parseNullLiteral', () => {
    expect(parseNullLiteral).toBeInstanceOf(Function);
  });
});
