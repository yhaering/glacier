import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseLegacyOctalLikeDecimalIntegerLiteral } from './parseLegacyOctalLikeDecimalIntegerLiteral';

function run() {
  const context = fakeParserContext();
  const returnValue = parseLegacyOctalLikeDecimalIntegerLiteral(context);
  return { returnValue };
}

describe('parseLegacyOctalLikeDecimalIntegerLiteral', () => {
  beforeEach(run);

  it('should return a function called parseLegacyOctalLikeDecimalIntegerLiteral', () => {
    expect(parseLegacyOctalLikeDecimalIntegerLiteral).toBeInstanceOf(Function);
  });
});
