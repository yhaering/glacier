import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseStatement } from './parseStatement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseStatement(context);
  return { returnValue };
}

describe('parseStatement', () => {
  beforeEach(run);

  it('should return a function called parseStatement', () => {
    expect(parseStatement).toBeInstanceOf(Function);
  });
});
