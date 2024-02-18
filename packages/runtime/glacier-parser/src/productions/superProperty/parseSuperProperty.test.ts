import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseSuperProperty } from './parseSuperProperty';

function run() {
  const context = fakeParserContext();
  const returnValue = parseSuperProperty(context);
  return { returnValue };
}

describe('parseSuperProperty', () => {
  beforeEach(run);

  it('should return a function called parseSuperProperty', () => {
    expect(parseSuperProperty).toBeInstanceOf(Function);
  });
});
