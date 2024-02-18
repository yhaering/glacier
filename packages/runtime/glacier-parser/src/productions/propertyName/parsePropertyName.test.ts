import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parsePropertyName } from './parsePropertyName';

function run() {
  const context = fakeParserContext();
  const returnValue = parsePropertyName(context);
  return { returnValue };
}

describe('parsePropertyName', () => {
  beforeEach(run);

  it('should return a function called parsePropertyName', () => {
    expect(parsePropertyName).toBeInstanceOf(Function);
  });
});
