import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseBreakStatement } from './parseBreakStatement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseBreakStatement(context);
  return { returnValue };
}

describe('parseBreakStatement', () => {
  beforeEach(run);

  it('should return a function called parseBreakStatement', () => {
    expect(parseBreakStatement).toBeInstanceOf(Function);
  });
});
