import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseMethodDefinition } from './parseMethodDefinition';

function run() {
  const context = fakeParserContext();
  const returnValue = parseMethodDefinition(context);
  return { returnValue };
}

describe('parseMethodDefinition', () => {
  beforeEach(run);

  it('should return a function called parseMethodDefinition', () => {
    expect(parseMethodDefinition).toBeInstanceOf(Function);
  });
});
