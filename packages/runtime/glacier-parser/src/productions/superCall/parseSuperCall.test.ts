import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseSuperCall } from './parseSuperCall';

function run() {
  const context = fakeParserContext();
  const returnValue = parseSuperCall(context);
  return { returnValue };
}

describe('parseSuperCall', () => {
  beforeEach(run);

  it('should return a function called parseSuperCall', () => {
    expect(parseSuperCall).toBeInstanceOf(Function);
  });
});
