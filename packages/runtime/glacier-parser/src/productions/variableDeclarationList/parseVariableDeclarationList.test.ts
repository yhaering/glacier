import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseVariableDeclarationList } from './parseVariableDeclarationList';

function run() {
  const context = fakeParserContext();
  const returnValue = parseVariableDeclarationList(context);
  return { returnValue };
}

describe('parseVariableDeclarationList', () => {
  beforeEach(run);

  it('should return a function called parseVariableDeclarationList', () => {
    expect(parseVariableDeclarationList).toBeInstanceOf(Function);
  });
});
