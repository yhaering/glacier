import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseForInOfStatement } from './parseForInOfStatement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseForInOfStatement(context);
  return { returnValue };
}

describe('parseForInOfStatement', () => {
  beforeEach(run);

  it('should return a function called parseForInOfStatement', () => {
    expect(parseForInOfStatement).toBeInstanceOf(Function);
  });
});
