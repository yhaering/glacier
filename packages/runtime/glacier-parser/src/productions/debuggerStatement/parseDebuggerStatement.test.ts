import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseDebuggerStatement } from './parseDebuggerStatement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseDebuggerStatement(context);
  return { returnValue };
}

describe('parseDebuggerStatement', () => {
  beforeEach(run);

  it('should return a function called parseDebuggerStatement', () => {
    expect(parseDebuggerStatement).toBeInstanceOf(Function);
  });
});
