import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseVariableDeclaration } from './parseVariableDeclaration';

function run() {
  const context = fakeParserContext();
  const returnValue = parseVariableDeclaration(context);
  return { returnValue };
}

describe('parseVariableDeclaration', () => {
  beforeEach(run);

  it('should return a function called parseVariableDeclaration', () => {
    expect(parseVariableDeclaration).toBeInstanceOf(Function);
  });
});
