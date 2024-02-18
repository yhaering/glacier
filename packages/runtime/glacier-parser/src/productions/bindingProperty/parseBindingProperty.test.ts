import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseBindingProperty } from './parseBindingProperty';

function run() {
  const context = fakeParserContext();
  const returnValue = parseBindingProperty(context);
  return { returnValue };
}

describe('parseBindingProperty', () => {
  beforeEach(run);

  it('should return a function called parseBindingProperty', () => {
    expect(parseBindingProperty).toBeInstanceOf(Function);
  });
});
