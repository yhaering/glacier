import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseGeneratorDeclaration } from './parseGeneratorDeclaration';

function run() {
  const context = fakeParserContext();
  const returnValue = parseGeneratorDeclaration(context);
  return { returnValue };
}

describe('parseGeneratorDeclaration', () => {
  beforeEach(run);

  it('should return a function called parseGeneratorDeclaration', () => {
    expect(parseGeneratorDeclaration).toBeInstanceOf(Function);
  });
});
