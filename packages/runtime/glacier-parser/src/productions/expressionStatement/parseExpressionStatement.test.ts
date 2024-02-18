import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseExpressionStatement } from './parseExpressionStatement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseExpressionStatement(context);
  return { returnValue };
}

describe('parseExpressionStatement', () => {
  beforeEach(run);

  it('should return a function called parseExpressionStatement', () => {
    expect(parseExpressionStatement).toBeInstanceOf(Function);
  });
});
