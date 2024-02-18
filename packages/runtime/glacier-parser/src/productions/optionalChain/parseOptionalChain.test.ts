import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseOptionalChain } from './parseOptionalChain';

function run() {
  const context = fakeParserContext();
  const returnValue = parseOptionalChain(context);
  return { returnValue };
}

describe('parseOptionalChain', () => {
  beforeEach(run);

  it('should return a function called parseOptionalChain', () => {
    expect(parseOptionalChain).toBeInstanceOf(Function);
  });
});
