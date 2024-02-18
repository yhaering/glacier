import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseLineTerminator } from './parseLineTerminator';

function run() {
  const context = fakeParserContext();
  const returnValue = parseLineTerminator(context);
  return { returnValue };
}

describe('parseLineTerminator', () => {
  beforeEach(run);

  it('should return a function called parseLineTerminator', () => {
    expect(parseLineTerminator).toBeInstanceOf(Function);
  });
});
