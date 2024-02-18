import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseMultiplicativeOperator } from './parseMultiplicativeOperator';

function run() {
  const context = fakeParserContext();
  const returnValue = parseMultiplicativeOperator(context);
  return { returnValue };
}

describe('parseMultiplicativeOperator', () => {
  beforeEach(run);

  it('should return a function called parseMultiplicativeOperator', () => {
    expect(parseMultiplicativeOperator).toBeInstanceOf(Function);
  });
});
