import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseBooleanLiteral } from './parseBooleanLiteral';

function run() {
  const context = fakeParserContext();
  const returnValue = parseBooleanLiteral(context);
  return { returnValue };
}

describe('parseBooleanLiteral', () => {
  beforeEach(run);

  it('should return a function called parseBooleanLiteral', () => {
    expect(parseBooleanLiteral).toBeInstanceOf(Function);
  });
});
