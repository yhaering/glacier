import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseBlockStatement } from './parseBlockStatement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseBlockStatement(context);
  return { returnValue };
}

describe('parseBlockStatement', () => {
  beforeEach(run);

  it('should return a function called parseBlockStatement', () => {
    expect(parseBlockStatement).toBeInstanceOf(Function);
  });
});
