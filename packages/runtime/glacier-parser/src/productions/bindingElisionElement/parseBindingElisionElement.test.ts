import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseBindingElisionElement } from './parseBindingElisionElement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseBindingElisionElement(context);
  return { returnValue };
}

describe('parseBindingElisionElement', () => {
  beforeEach(run);

  it('should return a function called parseBindingElisionElement', () => {
    expect(parseBindingElisionElement).toBeInstanceOf(Function);
  });
});
