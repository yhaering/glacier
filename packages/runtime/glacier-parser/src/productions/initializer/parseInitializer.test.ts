import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseInitializer } from './parseInitializer';

function run() {
  const context = fakeParserContext();
  const returnValue = parseInitializer(context);
  return { returnValue };
}

describe('parseInitializer', () => {
  beforeEach(run);

  it('should return a function called parseInitializer', () => {
    expect(parseInitializer).toBeInstanceOf(Function);
  });
});
