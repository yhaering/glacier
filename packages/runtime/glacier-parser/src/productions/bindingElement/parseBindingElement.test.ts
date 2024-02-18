import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseBindingElement } from './parseBindingElement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseBindingElement(context);
  return { returnValue };
}

describe('parseBindingElement', () => {
  beforeEach(run);

  it('should return a function called parseBindingElement', () => {
    expect(parseBindingElement).toBeInstanceOf(Function);
  });
});
