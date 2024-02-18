import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseWhiteSpace } from './parseWhiteSpace';

function run() {
  const context = fakeParserContext();
  const returnValue = parseWhiteSpace(context);
  return { returnValue };
}

describe('parseWhiteSpace', () => {
  beforeEach(run);

  it('should return a function called parseWhiteSpace', () => {
    expect(parseWhiteSpace).toBeInstanceOf(Function);
  });
});
