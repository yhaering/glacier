import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseComputedPropertyName } from './parseComputedPropertyName';

function run() {
  const context = fakeParserContext();
  const returnValue = parseComputedPropertyName(context);
  return { returnValue };
}

describe('parseComputedPropertyName', () => {
  beforeEach(run);

  it('should return a function called parseComputedPropertyName', () => {
    expect(parseComputedPropertyName).toBeInstanceOf(Function);
  });
});
