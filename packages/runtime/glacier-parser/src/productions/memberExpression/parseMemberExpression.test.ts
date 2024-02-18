import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseMemberExpression } from './parseMemberExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseMemberExpression(context);
  return { returnValue };
}

describe('parseMemberExpression', () => {
  beforeEach(run);

  it('should return a function called parseMemberExpression', () => {
    expect(parseMemberExpression).toBeInstanceOf(Function);
  });
});
