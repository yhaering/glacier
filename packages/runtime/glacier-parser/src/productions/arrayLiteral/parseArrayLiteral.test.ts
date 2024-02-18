import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseArrayLiteral } from './parseArrayLiteral';

function run() {
  const context = fakeParserContext();
  const returnValue = parseArrayLiteral(context);
  return { returnValue };
}

describe('parseArrayLiteral', () => {
  beforeEach(run);

  it('should return a function called parseArrayLiteral', () => {
    expect(parseArrayLiteral).toBeInstanceOf(Function);
  });
});
