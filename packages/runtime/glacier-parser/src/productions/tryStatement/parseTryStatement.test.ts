import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseTryStatement } from './parseTryStatement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseTryStatement(context);
  return { returnValue };
}

describe('parseTryStatement', () => {
  beforeEach(run);

  it('should return a function called parseTryStatement', () => {
    expect(parseTryStatement).toBeInstanceOf(Function);
  });
});
