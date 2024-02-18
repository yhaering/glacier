import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseBindingPattern } from './parseBindingPattern';

function run() {
  const context = fakeParserContext();
  const returnValue = parseBindingPattern(context);
  return { returnValue };
}

describe('parseBindingPattern', () => {
  beforeEach(run);

  it('should return a function called parseBindingPattern', () => {
    expect(parseBindingPattern).toBeInstanceOf(Function);
  });
});
