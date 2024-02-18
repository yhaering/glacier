import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseStatementList } from './parseStatementList';

function run() {
  const context = fakeParserContext();
  const returnValue = parseStatementList(context);
  return { returnValue };
}

describe('parseStatementList', () => {
  beforeEach(run);

  it('should return a function called parseStatementList', () => {
    expect(parseStatementList).toBeInstanceOf(Function);
  });
});
