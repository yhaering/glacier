import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseBigIntLiteralSuffix } from './parseBigIntLiteralSuffix';

function run() {
  const context = fakeParserContext();
  const returnValue = parseBigIntLiteralSuffix(context);
  return { returnValue };
}

describe('parseBigIntLiteralSuffix', () => {
  beforeEach(run);

  it('should return a function called parseBigIntLiteralSuffix', () => {
    expect(parseBigIntLiteralSuffix).toBeInstanceOf(Function);
  });
});
