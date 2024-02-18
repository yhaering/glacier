import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parsePropertyDefinition } from './parsePropertyDefinition';

function run() {
  const context = fakeParserContext();
  const returnValue = parsePropertyDefinition(context);
  return { returnValue };
}

describe('parsePropertyDefinition', () => {
  beforeEach(run);

  it('should return a function called parsePropertyDefinition', () => {
    expect(parsePropertyDefinition).toBeInstanceOf(Function);
  });
});
