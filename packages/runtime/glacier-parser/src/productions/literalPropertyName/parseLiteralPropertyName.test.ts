import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseLiteralPropertyName } from './parseLiteralPropertyName';

function run() {
  const context = fakeParserContext();
  const returnValue = parseLiteralPropertyName(context);
  return { returnValue };
}

describe('parseLiteralPropertyName', () => {
  beforeEach(run);

  it('should return a function called parseLiteralPropertyName', () => {
    expect(parseLiteralPropertyName).toBeInstanceOf(Function);
  });
});
