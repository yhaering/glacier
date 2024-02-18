import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseWhileStatement } from './parseWhileStatement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseWhileStatement(context);
  return { returnValue };
}

describe('parseWhileStatement', () => {
  beforeEach(run);

  it('should return a function called parseWhileStatement', () => {
    expect(parseWhileStatement).toBeInstanceOf(Function);
  });
});
