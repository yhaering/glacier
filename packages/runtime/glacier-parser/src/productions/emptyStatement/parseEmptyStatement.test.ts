import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseEmptyStatement } from './parseEmptyStatement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseEmptyStatement(context);
  return { returnValue };
}

describe('parseEmptyStatement', () => {
  beforeEach(run);

  it('should return a function called parseEmptyStatement', () => {
    expect(parseEmptyStatement).toBeInstanceOf(Function);
  });
});
