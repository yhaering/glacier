import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseBindingRestProperty } from './parseBindingRestProperty';

function run() {
  const context = fakeParserContext();
  const returnValue = parseBindingRestProperty(context);
  return { returnValue };
}

describe('parseBindingRestProperty', () => {
  beforeEach(run);

  it('should return a function called parseBindingRestProperty', () => {
    expect(parseBindingRestProperty).toBeInstanceOf(Function);
  });
});
