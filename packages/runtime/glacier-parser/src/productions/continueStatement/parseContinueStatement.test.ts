import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseContinueStatement } from './parseContinueStatement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseContinueStatement(context);
  return { returnValue };
}

describe('parseContinueStatement', () => {
  beforeEach(run);

  it('should return a function called parseContinueStatement', () => {
    expect(parseContinueStatement).toBeInstanceOf(Function);
  });
});
