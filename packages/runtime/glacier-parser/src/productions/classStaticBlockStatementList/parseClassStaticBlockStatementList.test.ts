import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseClassStaticBlockStatementList } from './parseClassStaticBlockStatementList';

function run() {
  const context = fakeParserContext();
  const returnValue = parseClassStaticBlockStatementList(context);
  return { returnValue };
}

describe('parseClassStaticBlockStatementList', () => {
  beforeEach(run);

  it('should return a function called parseClassStaticBlockStatementList', () => {
    expect(parseClassStaticBlockStatementList).toBeInstanceOf(Function);
  });
});
