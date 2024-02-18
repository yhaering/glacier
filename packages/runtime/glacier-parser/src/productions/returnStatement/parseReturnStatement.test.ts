import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseReturnStatement } from './parseReturnStatement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseReturnStatement(context);
  return { returnValue };
}

describe('parseReturnStatement', () => {
  beforeEach(run);

  it('should return a function called parseReturnStatement', () => {
    expect(parseReturnStatement).toBeInstanceOf(Function);
  });
});
