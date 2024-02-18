import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseClassDeclaration } from './parseClassDeclaration';

function run() {
  const context = fakeParserContext();
  const returnValue = parseClassDeclaration(context);
  return { returnValue };
}

describe('parseClassDeclaration', () => {
  beforeEach(run);

  it('should return a function called parseClassDeclaration', () => {
    expect(parseClassDeclaration).toBeInstanceOf(Function);
  });
});
