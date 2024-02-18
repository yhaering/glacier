import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseFunctionStatementList } from './parseFunctionStatementList';

function run() {
  const context = fakeParserContext();
  const returnValue = parseFunctionStatementList(context);
  return { returnValue };
}

describe('parseFunctionStatementList', () => {
  beforeEach(run);

  it('should return a function called parseFunctionStatementList', () => {
    expect(parseFunctionStatementList).toBeInstanceOf(Function);
  });
});
