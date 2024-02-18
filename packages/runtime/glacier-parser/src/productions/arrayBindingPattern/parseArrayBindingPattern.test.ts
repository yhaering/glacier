import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseArrayBindingPattern } from './parseArrayBindingPattern';

function run() {
  const context = fakeParserContext();
  const returnValue = parseArrayBindingPattern(context);
  return { returnValue };
}

describe('parseArrayBindingPattern', () => {
  beforeEach(run);

  it('should return a function called parseArrayBindingPattern', () => {
    expect(parseArrayBindingPattern).toBeInstanceOf(Function);
  });
});
