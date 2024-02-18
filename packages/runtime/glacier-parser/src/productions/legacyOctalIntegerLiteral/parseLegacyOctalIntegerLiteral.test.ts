import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseLegacyOctalIntegerLiteral } from './parseLegacyOctalIntegerLiteral';

function run() {
  const context = fakeParserContext();
  const returnValue = parseLegacyOctalIntegerLiteral(context);
  return { returnValue };
}

describe('parseLegacyOctalIntegerLiteral', () => {
  beforeEach(run);

  it('should return a function called parseLegacyOctalIntegerLiteral', () => {
    expect(parseLegacyOctalIntegerLiteral).toBeInstanceOf(Function);
  });
});
