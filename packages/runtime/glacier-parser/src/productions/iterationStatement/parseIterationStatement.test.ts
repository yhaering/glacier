import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseIterationStatement } from './parseIterationStatement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseIterationStatement(context);
  return { returnValue };
}

describe('parseIterationStatement', () => {
  beforeEach(run);

  it('should return a function called parseIterationStatement', () => {
    expect(parseIterationStatement).toBeInstanceOf(Function);
  });
});
