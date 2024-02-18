import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseIfStatement } from './parseIfStatement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseIfStatement(context);
  return { returnValue };
}

describe('parseIfStatement', () => {
  beforeEach(run);

  it('should return a function called parseIfStatement', () => {
    expect(parseIfStatement).toBeInstanceOf(Function);
  });
});
