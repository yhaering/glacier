import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseClassExpression } from './parseClassExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseClassExpression(context);
  return { returnValue };
}

describe('parseClassExpression', () => {
  beforeEach(run);

  it('should return a function called parseClassExpression', () => {
    expect(parseClassExpression).toBeInstanceOf(Function);
  });
});
