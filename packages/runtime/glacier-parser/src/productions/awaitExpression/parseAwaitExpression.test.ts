import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAwaitExpression } from './parseAwaitExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAwaitExpression(context);
  return { returnValue };
}

describe('parseAwaitExpression', () => {
  beforeEach(run);

  it('should return a function called parseAwaitExpression', () => {
    expect(parseAwaitExpression).toBeInstanceOf(Function);
  });
});
