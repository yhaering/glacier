import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseClassElementName } from './parseClassElementName';

function run() {
  const context = fakeParserContext();
  const returnValue = parseClassElementName(context);
  return { returnValue };
}

describe('parseClassElementName', () => {
  beforeEach(run);

  it('should return a function called parseClassElementName', () => {
    expect(parseClassElementName).toBeInstanceOf(Function);
  });
});
