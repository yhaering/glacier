import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseDoWhileStatement } from './parseDoWhileStatement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseDoWhileStatement(context);
  return { returnValue };
}

describe('parseDoWhileStatement', () => {
  beforeEach(run);

  it('should return a function called parseDoWhileStatement', () => {
    expect(parseDoWhileStatement).toBeInstanceOf(Function);
  });
});
