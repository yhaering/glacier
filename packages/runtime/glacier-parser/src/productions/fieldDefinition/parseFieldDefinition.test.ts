import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseFieldDefinition } from './parseFieldDefinition';

function run() {
  const context = fakeParserContext();
  const returnValue = parseFieldDefinition(context);
  return { returnValue };
}

describe('parseFieldDefinition', () => {
  beforeEach(run);

  it('should return a function called parseFieldDefinition', () => {
    expect(parseFieldDefinition).toBeInstanceOf(Function);
  });
});
