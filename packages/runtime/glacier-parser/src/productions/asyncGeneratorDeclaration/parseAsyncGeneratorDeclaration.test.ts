import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseAsyncGeneratorDeclaration } from './parseAsyncGeneratorDeclaration';

function run() {
  const context = fakeParserContext();
  const returnValue = parseAsyncGeneratorDeclaration(context);
  return { returnValue };
}

describe('parseAsyncGeneratorDeclaration', () => {
  beforeEach(run);

  it('should return a function called parseAsyncGeneratorDeclaration', () => {
    expect(parseAsyncGeneratorDeclaration).toBeInstanceOf(Function);
  });
});
