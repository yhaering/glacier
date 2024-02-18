import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseThrowStatement } from './parseThrowStatement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseThrowStatement(context);
  return { returnValue };
}

describe('parseThrowStatement', () => {
  beforeEach(run);

  it('should return a function called parseThrowStatement', () => {
    expect(parseThrowStatement).toBeInstanceOf(Function);
  });
});
