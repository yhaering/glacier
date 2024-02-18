import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseMetaProperty } from './parseMetaProperty';

function run() {
  const context = fakeParserContext();
  const returnValue = parseMetaProperty(context);
  return { returnValue };
}

describe('parseMetaProperty', () => {
  beforeEach(run);

  it('should return a function called parseMetaProperty', () => {
    expect(parseMetaProperty).toBeInstanceOf(Function);
  });
});
