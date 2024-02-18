import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseGeneratorExpression } from './parseGeneratorExpression';

function run() {
  const context = fakeParserContext();
  const returnValue = parseGeneratorExpression(context);
  return { returnValue };
}

describe('parseGeneratorExpression', () => {
  beforeEach(run);

  it('should return a function called parseGeneratorExpression', () => {
    expect(parseGeneratorExpression).toBeInstanceOf(Function);
  });
});
