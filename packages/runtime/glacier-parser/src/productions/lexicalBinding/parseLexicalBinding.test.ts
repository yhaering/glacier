import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseLexicalBinding } from './parseLexicalBinding';

function run() {
  const context = fakeParserContext();
  const returnValue = parseLexicalBinding(context);
  return { returnValue };
}

describe('parseLexicalBinding', () => {
  beforeEach(run);

  it('should return a function called parseLexicalBinding', () => {
    expect(parseLexicalBinding).toBeInstanceOf(Function);
  });
});
