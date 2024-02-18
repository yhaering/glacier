import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseFunctionDeclaration } from './parseFunctionDeclaration';

function run() {
  const context = fakeParserContext();
  const returnValue = parseFunctionDeclaration(context);
  return { returnValue };
}

describe('parseFunctionDeclaration', () => {
  beforeEach(run);

  it('should return a function called parseFunctionDeclaration', () => {
    expect(parseFunctionDeclaration).toBeInstanceOf(Function);
  });
});
