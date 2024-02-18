import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseForStatement } from './parseForStatement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseForStatement(context);
  return { returnValue };
}

describe('parseForStatement', () => {
  beforeEach(run);

  it('should return a function called parseForStatement', () => {
    expect(parseForStatement).toBeInstanceOf(Function);
  });
});
