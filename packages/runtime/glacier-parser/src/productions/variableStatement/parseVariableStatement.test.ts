import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseVariableStatement } from './parseVariableStatement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseVariableStatement(context);
  return { returnValue };
}

describe('parseVariableStatement', () => {
  beforeEach(run);

  it('should return a function called parseVariableStatement', () => {
    expect(parseVariableStatement).toBeInstanceOf(Function);
  });
});
