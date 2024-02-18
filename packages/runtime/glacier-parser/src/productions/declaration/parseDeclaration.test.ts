import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseDeclaration } from './parseDeclaration';

function run() {
  const context = fakeParserContext();
  const returnValue = parseDeclaration(context);
  return { returnValue };
}

describe('parseDeclaration', () => {
  beforeEach(run);

  it('should return a function called parseDeclaration', () => {
    expect(parseDeclaration).toBeInstanceOf(Function);
  });
});
