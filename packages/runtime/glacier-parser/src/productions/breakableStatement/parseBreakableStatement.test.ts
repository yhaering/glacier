import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseBreakableStatement } from './parseBreakableStatement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseBreakableStatement(context);
  return { returnValue };
}

describe('parseBreakableStatement', () => {
  beforeEach(run);

  it('should return a function called parseBreakableStatement', () => {
    expect(parseBreakableStatement).toBeInstanceOf(Function);
  });
});
