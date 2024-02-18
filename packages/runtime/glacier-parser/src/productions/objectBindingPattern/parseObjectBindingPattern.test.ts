import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseObjectBindingPattern } from './parseObjectBindingPattern';

function run() {
  const context = fakeParserContext();
  const returnValue = parseObjectBindingPattern(context);
  return { returnValue };
}

describe('parseObjectBindingPattern', () => {
  beforeEach(run);

  it('should return a function called parseObjectBindingPattern', () => {
    expect(parseObjectBindingPattern).toBeInstanceOf(Function);
  });
});
