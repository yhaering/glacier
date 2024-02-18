import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAsyncFunctionDeclaration } from './parseAsyncFunctionDeclaration';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAsyncFunctionDeclaration(context);
  return { returnValue };
}

describe('parseAsyncFunctionDeclaration', () => {
  beforeEach(run);

  it('should return a function called parseAsyncFunctionDeclaration', () => {
    expect(parseAsyncFunctionDeclaration).toBeInstanceOf(Function);
  });
});
