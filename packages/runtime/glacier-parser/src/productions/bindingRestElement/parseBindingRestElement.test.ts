import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseBindingRestElement } from './parseBindingRestElement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseBindingRestElement(context);
  return { returnValue };
}

describe('parseBindingRestElement', () => {
  beforeEach(run);

  it('should return a function called parseBindingRestElement', () => {
    expect(parseBindingRestElement).toBeInstanceOf(Function);
  });
});
