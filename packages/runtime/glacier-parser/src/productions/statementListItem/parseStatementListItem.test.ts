import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseStatementListItem } from './parseStatementListItem';

function run() {
  const context = fakeParserContext();
  const returnValue = parseStatementListItem(context);
  return { returnValue };
}

describe('parseStatementListItem', () => {
  beforeEach(run);

  it('should return a function called parseStatementListItem', () => {
    expect(parseStatementListItem).toBeInstanceOf(Function);
  });
});
