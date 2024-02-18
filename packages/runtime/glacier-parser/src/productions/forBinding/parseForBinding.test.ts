import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseForBinding } from './parseForBinding';

function run() {
  const context = fakeParserContext();
  const returnValue = parseForBinding(context);
  return { returnValue };
}

describe('parseForBinding', () => {
  beforeEach(run);

  it('should return a function called parseForBinding', () => {
    expect(parseForBinding).toBeInstanceOf(Function);
  });
});
