import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseOctalIntegerLiteral } from './parseOctalIntegerLiteral';

function run() {
  const context = fakeParserContext();
  const returnValue = parseOctalIntegerLiteral(context);
  return { returnValue };
}

describe('parseOctalIntegerLiteral', () => {
  beforeEach(run);

  it('should return a function called parseOctalIntegerLiteral', () => {
    expect(parseOctalIntegerLiteral).toBeInstanceOf(Function);
  });
});
